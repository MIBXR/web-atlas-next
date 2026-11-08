import { EMPTY, NONE, Palette, bayer, code, colorsOf, fail, fract, piece, ramp as rampOf, specOf, spread, } from "./core.js";
const finite = (v) => typeof v === "number" && Number.isFinite(v);
// A value as an error message shows it. JSON can't write a bigint or an object that contains itself, so those are
// named by their kind instead of the message itself throwing.
const show = (v) => {
    if (typeof v === "function")
        return "a function";
    if (typeof v === "bigint")
        return `${v}n`;
    try {
        return JSON.stringify(v) ?? String(v);
    }
    catch {
        return Array.isArray(v) ? "a list that contains itself" : "an object that contains itself";
    }
};
// Checks every option a field takes, throwing for the first one it can't, and works out what each frame needs.
function plan(o, who) {
    if (o === undefined || o === null)
        o = {};
    else if (typeof o !== "object")
        fail(`${who} takes its options as an object, such as { ramp: "blocks" }, not ${show(o)}`);
    const chars = rampOf(o.ramp ?? "standard");
    const codes = Uint16Array.from(chars, (ch) => ch.charCodeAt(0));
    const steps = o.steps ?? 16;
    if (!Number.isInteger(steps) || steps < 1 || steps > 64)
        fail(`steps takes a whole number of colours from 1 to 64, not ${show(steps)}`);
    let palette = null, light = null, dark = null;
    if (o.colors !== undefined) {
        const c = colorsOf(o.colors, "colors");
        if (!Array.isArray(c) && steps > 32)
            fail(`steps takes up to 32 when colors has a light and a dark list (64 colours in all), not ${steps}`);
        palette = spread(c, steps);
        if (Array.isArray(palette))
            light = dark = palette;
        else
            ({ light, dark } = palette);
    }
    if (o.color !== undefined && typeof o.color !== "function")
        fail(`color takes a function of the value, x, y, t and the cell that returns a colour, such as (v) => (v > 0.5 ? 1 : 0), not ${show(o.color)}`);
    if (o.dither !== undefined && typeof o.dither !== "boolean")
        fail(`dither takes true or false, not ${show(o.dither)}`);
    const invert = o.invert ?? "auto";
    if (invert !== true && invert !== false && invert !== "auto")
        fail(`invert takes true, false or "auto", not ${show(invert)}`);
    if (o.aspect !== undefined && typeof o.aspect !== "boolean")
        fail(`aspect takes true (circles round) or false (each axis -1 to 1), not ${show(o.aspect)}`);
    const gamma = o.gamma ?? 1;
    if (!finite(gamma) || gamma <= 0)
        fail(`gamma takes a number above 0, such as 1.5, not ${show(gamma)}`);
    const range = o.range ?? [0, 1];
    if (!Array.isArray(range) || range.length !== 2 || !finite(range[0]) || !finite(range[1]) || range[0] === range[1])
        fail(`range takes the lowest and highest values the function returns, two different numbers such as [-1, 1], not ${show(range)}`);
    const region = o.region;
    if (region !== undefined && (region === null || typeof region !== "object" || ![region.x, region.y, region.cols, region.rows].every(finite)))
        fail(`region takes { x, y, cols, rows } in cells, all numbers, not ${show(region)}`);
    const period = o.period;
    if (period !== undefined && !(finite(period) && period > 0))
        fail(`period takes the field's loop in seconds, a number above 0, not ${show(period)}`);
    return {
        codes,
        invert,
        dither: o.dither ?? false,
        aspect: o.aspect ?? true,
        gamma,
        lo: range[0],
        scale: 1 / (range[1] - range[0]),
        // A copy: changing the object afterwards doesn't move a piece already made.
        region: region && { x: region.x, y: region.y, cols: region.cols, rows: region.rows },
        period: period ?? 0,
        steps,
        palette,
        light,
        dark,
        color: o.color,
        lut: [new Uint8Array(steps), new Uint8Array(steps)],
        lutFor: [null, null],
    };
}
// Each surface keeps the last few regions a field was drawn into, so a frame costs no allocation.
const geometries = new WeakMap();
const KEEP = 8;
// Half the region's shorter side in cell widths, the unit of x and y: its true shape is cols wide by rows * k tall.
const unitOf = (cols, rows, k) => Math.min(cols, rows * k) / 2;
// The region's width and height in the units of x and y.
const extent = (cols, rows, k, aspect) => aspect ? [cols / unitOf(cols, rows, k), (rows * k) / unitOf(cols, rows, k)] : [2, 2];
function geometry(s, x0, y0, cols, rows, aspect) {
    const c0 = Math.max(0, -x0), c1 = Math.min(cols, s.cols - x0);
    const r0 = Math.max(0, -y0), r1 = Math.min(rows, s.rows - y0);
    if (c0 >= c1 || r0 >= r1)
        return null;
    const key = `${x0} ${y0} ${cols} ${rows} ${aspect ? 1 : 0} ${s.aspect}`;
    let list = geometries.get(s);
    if (!list)
        geometries.set(s, (list = []));
    for (const g of list)
        if (g.key === key)
            return g;
    const w = c1 - c0, h = r1 - r0;
    const k = s.aspect;
    const half = unitOf(cols, rows, k);
    const [width, height] = extent(cols, rows, k, aspect);
    const g = {
        key, c0, c1, r0, r1, width, height,
        x: new Float64Array(w), u: new Float64Array(w),
        y: new Float64Array(h), v: new Float64Array(h),
        r: new Float64Array(w * h), a: new Float64Array(w * h),
    };
    for (let c = c0; c < c1; c++) {
        g.x[c - c0] = aspect ? (c + 0.5 - cols / 2) / half : ((c + 0.5) / cols) * 2 - 1;
        g.u[c - c0] = (c + 0.5) / cols;
    }
    for (let r = r0; r < r1; r++) {
        g.y[r - r0] = aspect ? ((r + 0.5 - rows / 2) * k) / half : ((r + 0.5) / rows) * 2 - 1;
        g.v[r - r0] = (r + 0.5) / rows;
    }
    for (let j = 0, i = 0; j < h; j++)
        for (let c = 0; c < w; c++, i++) {
            g.r[i] = Math.hypot(g.x[c], g.y[j]);
            g.a[i] = Math.atan2(g.y[j], g.x[c]);
        }
    list.unshift(g);
    if (list.length > KEEP)
        list.pop();
    return g;
}
// Colour step to palette index for this surface's palette and page, worked out on the first frame that needs it.
function lutOf(s, p) {
    const side = s.paper ? 1 : 0;
    const palette = s.palette;
    const lut = p.lut[side];
    if (p.lutFor[side] !== palette) {
        const list = (s.paper ? p.light : p.dark);
        for (let k = 0; k < p.steps; k++)
            lut[k] = palette.index(list[k], s.paper);
        p.lutFor[side] = palette;
    }
    return lut;
}
// --- drawing -----------------------------------------------------------------------
// The field at t into s, as the plan says. `at` is the one cell object handed to the function, filled in for each cell.
function paint(s, fn, t, p, at) {
    const R = p.region;
    const x0 = R ? Math.floor(R.x) : 0, y0 = R ? Math.floor(R.y) : 0;
    const cols = R ? Math.floor(R.cols) : s.cols, rows = R ? Math.floor(R.rows) : s.rows;
    if (cols < 1 || rows < 1)
        return;
    const g = geometry(s, x0, y0, cols, rows, p.aspect);
    if (!g)
        return;
    const { codes, steps, lo, scale, gamma, dither } = p;
    const n = codes.length;
    const flip = p.invert === "auto" ? s.paper : p.invert;
    // Colours are only worked out when they will be shown: a palette, and env.color given.
    const shown = !s.mono && s.palette !== null;
    const byFn = shown && p.color ? p.color : null;
    const lut = shown && !byFn && p.light ? lutOf(s, p) : null;
    const { chars, colors } = s;
    const w = g.c1 - g.c0;
    at.cols = cols;
    at.rows = rows;
    at.width = g.width;
    at.height = g.height;
    at.phase = p.period ? fract(t / p.period) : 0;
    at.char = at.color = undefined;
    for (let r = g.r0; r < g.r1; r++) {
        const j = r - g.r0, y = g.y[j], sy = y0 + r;
        at.row = r;
        at.v = g.v[j];
        for (let c = g.c0, i = j * w; c < g.c1; c++, i++) {
            const x = g.x[c - g.c0], sx = x0 + c;
            at.col = c;
            at.u = g.u[c - g.c0];
            at.r = g.r[i];
            at.a = g.a[i];
            const got = fn(x, y, t, at);
            // What the function chose for this cell itself, cleared for the next.
            const own = at.char, tint = at.color;
            if (own !== undefined)
                at.char = undefined;
            if (tint !== undefined)
                at.color = undefined;
            let v, ink = false;
            if (typeof got === "number") {
                // NaN is nothing, as null: the cell stays as it was, on any page.
                if (got !== got)
                    continue;
                v = (got - lo) * scale;
                v = v > 0 ? (v < 1 ? v : 1) : 0;
                if (gamma !== 1)
                    v = v ** gamma;
            }
            else if (got === true)
                (v = 1), (ink = true);
            else if (got === null || got === false)
                continue;
            else
                fail(wrong(got));
            const jitter = dither && !ink ? bayer(sx, sy) : 0;
            let ch;
            if (own === undefined) {
                let k = Math.floor(v * n + jitter);
                k = k < 0 ? 0 : k >= n ? n - 1 : k;
                ch = codes[flip && !ink ? n - 1 - k : k];
                // A space is not drawn: the cell stays as it was, EMPTY on a fresh frame.
                if (ch === 32)
                    continue;
            }
            else if ((ch = charOf(own)) === EMPTY)
                continue;
            const cell = sy * s.cols + sx;
            chars[cell] = ch;
            if (tint !== undefined && shown)
                colors[cell] = s.resolve(tint);
            else if (lut) {
                let q = Math.floor(v * steps + jitter);
                q = q < 0 ? 0 : q >= steps ? steps - 1 : q;
                colors[cell] = lut[q];
            }
            else
                colors[cell] = byFn ? s.resolve(byFn(v, x, y, t, at)) : NONE;
        }
    }
}
const NO_OPTIONS = Object.freeze({});
const NOTHING = "a field's function returns a brightness, a number 0 to 1, true for solid ink, or null where there is nothing, not undefined: does every path through it return a value?";
// What to say when the function returns something it can't.
const wrong = (v) => v === undefined ? NOTHING : `a field's function returns a brightness, a number 0 to 1, true for solid ink, or null where there is nothing, not ${show(v)}`;
// The char code for at.char, checked: "" is EMPTY, nothing drawn.
const charOf = (ch) => typeof ch === "string" ? code(ch) : fail(`at.char takes one character as a string, such as "*", or "" for nothing, not ${show(ch)}`);
const cell = (options) => ({ col: 0, row: 0, u: 0, v: 0, r: 0, a: 0, cols: 0, rows: 0, width: 2, height: 2, phase: 0, options, char: undefined, color: undefined });
// A surface is anything shaped like one: duck-typed, so a Surface from another copy of the kit still works.
const isSurface = (s) => !!s && typeof s === "object" && s.chars instanceof Uint16Array && s.colors instanceof Uint8Array &&
    Number.isInteger(s.cols) && typeof s.resolve === "function";
/**
 * Draws a field into a surface you are drawing already, all of it or `region`: for a field behind text, inside a
 * frame, or beside other drawing in one piece(), or several fields in one grid. Cells whose character is a space are
 * left as they were, so a field drawn over something lets it show where the field is dark. Colours, by `colors`,
 * `color` or at.color, are found in the surface's palette; on a surface with no palette, or drawn in one ink, none are
 * written.
 *
 *   piece({ name: "window", cols: 40, rows: 12 }, (t, s) => {
 *     drawField(s, (x, y, t) => 0.5 + 0.5 * Math.sin(x * 4 + t), t, { region: { x: 2, y: 1, cols: 36, rows: 9 } });
 *     s.write(2, 11, "a field in a window");
 *   });
 */
export function drawField(s, fn, t, o) {
    if (!isSurface(s))
        fail(`drawField() takes the Surface to draw into first, then the function and t: drawField(s, (x, y, t) => ..., t), not ${show(s)}`);
    if (typeof fn !== "function")
        fail(`drawField() takes a function of x, y and t that returns a brightness 0 to 1, such as (x, y, t) => 0.5 + 0.5 * Math.sin(x * 6 + t), not ${show(fn)}`);
    paint(s, fn, finite(t) ? t : 0, plan(o, "drawField()"), cell(NO_OPTIONS));
}
// The spread `colors` with the spec's own `palette` after them: one list, or { light, dark } when either is.
function join(spread, own) {
    const sides = (p) => {
        if (Array.isArray(p))
            return [p, p];
        const { light, dark } = (p ?? {});
        if (!Array.isArray(light) || !Array.isArray(dark))
            fail(`palette takes a list of #rrggbb, or { light, dark }, not ${show(p)}`);
        return [light, dark];
    };
    if (Array.isArray(spread) && Array.isArray(own))
        return [...spread, ...own];
    const [a, b] = sides(spread), [c, d] = sides(own);
    return { light: [...a, ...c], dark: [...b, ...d] };
}
export function field(first, second) {
    // field(fn): every option its default.
    const [spec, fn] = typeof first === "function" && second === undefined ? [{}, first] : [first, second];
    if (typeof fn !== "function")
        fail(`field() takes a function of x, y and t that returns a brightness 0 to 1, after a spec if you give one, such as field({ name: "sea" }, (x, y, t) => 0.5 + 0.5 * Math.sin(x * 6 + t)), not ${show(fn)}`);
    const base = specOf(spec, "field");
    const p = plan(spec, "field()");
    // Without the wipe, a cell left empty would show the frame before, so a frame would depend on the ones played first.
    if (spec.clear !== undefined && spec.clear !== true)
        fail(`field() starts every frame empty, so a frame depends only on t, as svg() and reduced motion need: leave clear out, not ${show(spec.clear)}. For trails, draw with drawField() in a piece() of your own`);
    if (p.color && !p.palette && spec.palette === undefined)
        fail('field()\'s color function picks from the piece\'s colours: give the spec a palette, such as palette: ["#f97316", "#38bdf8"], or colors');
    const own = spec.palette === undefined ? undefined : colorsOf(spec.palette, "palette");
    const palette = p.palette && own !== undefined ? join(p.palette, own) : (p.palette ?? own);
    const made = piece({ ...base, palette, loop: p.period || spec.loop }, {
        setup: (options) => {
            const at = cell(options);
            return (t, s) => paint(s, fn, t, p, at);
        },
    });
    // Called once now, at the centre at t = 0, so a function that returns the wrong thing fails here and not on a page.
    const probe = cell({ ...made.meta.options });
    const cols = p.region ? Math.max(1, Math.floor(p.region.cols)) : base.cols, rows = p.region ? Math.max(1, Math.floor(p.region.rows)) : base.rows;
    const [width, height] = extent(cols, rows, base.cell ?? 2, p.aspect);
    Object.assign(probe, { col: cols >> 1, row: rows >> 1, u: 0.5, v: 0.5, cols, rows, width, height });
    const v = fn(0, 0, 0, probe);
    if (v !== null && typeof v !== "number" && typeof v !== "boolean")
        fail(wrong(v));
    if (probe.char !== undefined)
        charOf(probe.char);
    if (probe.color !== undefined) {
        if (palette === undefined)
            fail('at.color picks from the piece\'s colours: give the spec a palette, such as palette: ["#f97316", "#38bdf8"], or colors');
        // A colour that isn't a whole index into the colours or #rrggbb throws now, saying so.
        new Palette(palette).index(probe.color);
    }
    return made;
}
