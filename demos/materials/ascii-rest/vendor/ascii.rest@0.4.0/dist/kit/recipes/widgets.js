import { banner } from "../../banner.js";
import { INK, Palette, Surface, TAU, fail, piece } from "../core.js";
import { arc, braille, circle, label, line, ray, rect, text } from "../draw.js";
import { border, layer, sequence } from "../compose.js";
import { typeIn } from "../fx.js";
import { ease, loopNoise } from "../math.js";
import { NAMING, boolOf, colorOf, loopOf, numberOf, optionsOf, secondsOf, show, speedOf, textOf, titled, wholeOf, wordOf } from "./checks.js";
import { drifting } from "./motion.js";
import { palette } from "./palettes.js";
import { pieceOf } from "./words.js";
const ANCHORS = ["top-left", "top", "top-right", "left", "center", "right", "bottom-left", "bottom", "bottom-right"];
// A room as a region: a grid's is all of it.
function roomOf(r, what) {
    const g = r;
    if (!r || typeof r !== "object" || typeof g.cols !== "number" || typeof g.rows !== "number")
        fail(`${what} takes the grid, or a region { x, y, cols, rows }, to place in, not ${show(r)}`);
    const x = r instanceof Surface ? 0 : (g.x ?? 0), y = r instanceof Surface ? 0 : (g.y ?? 0);
    return { x, y, cols: g.cols, rows: g.rows };
}
const anchorOf = (what, v, def) => wordOf(what, v, ANCHORS, def);
/**
 * The point at an anchor of a room, "center" by default, `margin` cells (0) in from the edges it is against: the
 * middle of the cell in the corner or on the edge, or the room's middle. For a point to draw about, circle(s, ...at(s)),
 * or a label() centred on it; textAt() puts text against an edge instead.
 *
 *   circle(s, ...at(s), 8);                      // a circle in the middle
 *   label(s, ...at(s, "top", { margin: 1 }), "hi");
 */
export function at(room, anchor = "center", o) {
    const r = roomOf(room, "at()");
    const a = anchorOf("at()'s anchor", anchor, "center");
    const m = numberOf("at()'s margin", optionsOf("at()", o, ["margin"]).margin, 0, 0);
    const x = a.endsWith("left") ? r.x + m + 0.5 : a.endsWith("right") ? r.x + r.cols - m - 0.5 : r.x + r.cols / 2;
    const y = a.startsWith("top") ? r.y + m + 0.5 : a.startsWith("bottom") ? r.y + r.rows - m - 0.5 : r.y + r.rows / 2;
    return [x, y];
}
/**
 * Text against an anchor of a room, "center" by default: in its top left corner, along its bottom edge, in its middle,
 * `margin` cells (0) in from the edges, wrapped to the room's width. Returns the region it takes, as text() does.
 *
 *   textAt(s, "score 3", "top-right", { margin: 1 });
 *   textAt(s, "press start", "bottom", { color: 1 });
 */
export function textAt(s, str, anchor = "center", o) {
    const p = optionsOf("textAt()", o, ["margin", "color", "within"]);
    const a = anchorOf("textAt()'s anchor", anchor, "center");
    const box = inset(p.within ?? s, numberOf("textAt()'s margin", p.margin, 0, 0));
    const align = a.endsWith("left") ? "left" : a.endsWith("right") ? "right" : "center";
    const valign = a.startsWith("top") ? "top" : a.startsWith("bottom") ? "bottom" : "middle";
    return text(s, box, str, { align, valign, color: p.color });
}
/**
 * `count` points evenly round a circle in a room, the first at the top and on clockwise, as a clock's numbers go: point
 * 3 of 12 is where the 3 is. The circle is about `at`, an anchor or a point ("center"), `radius` columns out (by
 * default as big as fits, a cell in from the edges), squashed down the rows so it looks round on tall cells.
 *
 *   ring(s, 12).forEach((p, hour) => label(s, ...p, hour || 12));   // a clock's numbers
 *   for (const p of ring(s, 8, { radius: 10 })) s.set(...p, "*");   // eight stars round a circle
 */
export function ring(room, count, o) {
    const r = roomOf(room, "ring()");
    const p = optionsOf("ring()", o, ["radius", "at"]);
    const n = wholeOf("ring()'s count", count, 12, 1, 10000);
    const aspect = room instanceof Surface ? room.aspect : 2;
    const [cx, cy] = Array.isArray(p.at) ? p.at : at(r, anchorOf("ring()'s at", p.at, "center"));
    const fits = Math.max(0.5, Math.min(r.cols / 2 - 1, (r.rows / 2 - 1) * aspect));
    const radius = numberOf("ring()'s radius", p.radius, fits, 0);
    // A hair in from the radius, as draw's around() takes it, so cells either side of the middle mirror each other.
    const k = radius * (1 - 1e-9);
    return Array.from({ length: n }, (_, i) => [cx + Math.sin((TAU * i) / n) * k, cy - (Math.cos((TAU * i) / n) * k) / aspect]);
}
/** A room with `margin` cells taken off every side, or [rows, columns] off top and bottom and off left and right. */
export function inset(room, margin) {
    const r = roomOf(room, "inset()");
    const [my, mx] = typeof margin === "number" ? [margin, margin] : Array.isArray(margin) && margin.length === 2 ? margin : fail(`inset() takes a margin in cells, or [rows, columns], not ${show(margin)}`);
    numberOf("inset()'s margin", my, 0, 0);
    numberOf("inset()'s margin", mx, 0, 0);
    return { x: r.x + mx, y: r.y + my, cols: Math.max(0, r.cols - 2 * mx), rows: Math.max(0, r.rows - 2 * my) };
}
// Lengths that share `total` cells by weight, `gap` between each, as whole cells that add up.
function share(total, parts, gap, what) {
    const weights = typeof parts === "number" ? Array(wholeOf(what, parts, 1, 1, 1000)).fill(1) : Array.isArray(parts) && parts.length ? parts : fail(`${what} takes a number of parts, or their weights such as [1, 2], not ${show(parts)}`);
    for (const w of weights)
        numberOf(`${what}'s weights`, w, 1, 0);
    const sum = weights.reduce((a, b) => a + b, 0) || 1;
    const room = Math.max(0, total - gap * (weights.length - 1));
    let at = 0, used = 0;
    return weights.map((w, i) => {
        used += w;
        const end = Math.round((room * used) / sum);
        const span = [at + i * gap, end - at];
        at = end;
        return span;
    });
}
/**
 * A room cut into parts side by side, left to right: `parts` of them alike, or a list of weights, [1, 2] giving the
 * second twice the first's width; `gap` blank columns between (0). Each is a region to draw in.
 *
 *   const [left, right] = across(s, [1, 2], { gap: 1 });
 *   text(s, left, "menu");
 */
export function across(room, parts, o) {
    const r = roomOf(room, "across()");
    const gap = wholeOf("across()'s gap", optionsOf("across()", o, ["gap"]).gap, 0, 0);
    return share(r.cols, parts, gap, "across()").map(([x, cols]) => ({ x: r.x + x, y: r.y, cols, rows: r.rows }));
}
/** A room cut into parts one under another, top to bottom: as across(), in rows. */
export function down(room, parts, o) {
    const r = roomOf(room, "down()");
    const gap = wholeOf("down()'s gap", optionsOf("down()", o, ["gap"]).gap, 0, 0);
    return share(r.rows, parts, gap, "down()").map(([y, rows]) => ({ x: r.x, y: r.y + y, cols: r.cols, rows }));
}
/**
 * A room cut into a grid of tiles, `columns` across and `rows` down (as many as `columns` by default), `gap` blank cells
 * between them, [rows, columns] or one number for both (0), in reading order.
 *
 *   tiles(s, { columns: 3, rows: 2, gap: 1 }).forEach((tile, i) => rect(s, tile.x, tile.y, tile.cols, tile.rows, { title: `${i + 1}` }));
 */
export function tiles(room, o) {
    const p = optionsOf("tiles()", o, ["columns", "rows", "gap"]);
    const columns = wholeOf("tiles()'s columns", p.columns, 2, 1, 1000);
    const rows = wholeOf("tiles()'s rows", p.rows, columns, 1, 1000);
    const [gy, gx] = p.gap === undefined ? [0, 0] : typeof p.gap === "number" ? [p.gap, p.gap] : p.gap;
    return down(room, rows, { gap: gy }).flatMap((band) => across(band, columns, { gap: gx }));
}
/**
 * A box `cols` by `rows` at an anchor of a room ("center"), `margin` cells (0) in from the edges it is against: where
 * to put a panel in a corner, a button at the bottom.
 *
 *   const badge = slot(s, "bottom-right", { cols: 12, rows: 3, margin: 1 });
 *   rect(s, badge.x, badge.y, badge.cols, badge.rows, { style: "rounded" });
 */
export function slot(room, anchor, o) {
    const r = roomOf(room, "slot()");
    const a = anchorOf("slot()'s anchor", anchor, "center");
    const p = optionsOf("slot()", o, ["cols", "rows", "margin"]);
    const w = wholeOf("slot()'s cols", p.cols, 1, 1), h = wholeOf("slot()'s rows", p.rows, 1, 1), m = wholeOf("slot()'s margin", p.margin, 0, 0);
    const x = a.endsWith("left") ? r.x + m : a.endsWith("right") ? r.x + r.cols - w - m : r.x + Math.floor((r.cols - w) / 2);
    const y = a.startsWith("top") ? r.y + m : a.startsWith("bottom") ? r.y + r.rows - h - m : r.y + Math.floor((r.rows - h) / 2);
    return { x, y, cols: w, rows: h };
}
// --- the widgets' colours ----------------------------------------------------------------------
// GitHub's colours, each for paper and for a dark page: the widgets' palette, in this order.
const TONES = {
    ink: INK,
    accent: { light: "#0969da", dark: "#58a6ff" },
    muted: { light: "#8c959f", dark: "#6e7681" },
    good: { light: "#1a7f37", dark: "#3fb950" },
    warn: { light: "#9a6700", dark: "#d29922" },
    bad: { light: "#cf222e", dark: "#f85149" },
};
// A widget's colours as palette indices, the ink being 0 and the default: draw with these.
const ACCENT = 1, MUTED = 2, GOOD = 3, WARN = 4, BAD = 5;
// One colour for both pages, one for each, or a palette's strong colour on each, checked.
const themed = colorOf;
// The widgets' palette, its accent the colour given, and any colours of the widget's own after it.
function tones(accent, more = []) {
    const list = [TONES.ink, accent ?? TONES.accent, TONES.muted, TONES.good, TONES.warn, TONES.bad, ...more];
    return { light: list.map((c) => c.light), dark: list.map((c) => c.dark) };
}
// Text as a grid in one colour, for a maker that takes a source: one colour for both pages or one for each, wrapped to
// `width` in a grid `cols` wide, so a typewriter's cursor has a column past the words. Throws, in `what`'s words, for
// text that wraps past the 120 rows a piece can have, rather than cutting it short.
function inked(what, str, color, width, cols = width) {
    const lines = str.replace(/\r\n?/g, "\n");
    const scratch = new Surface(width ?? Math.max(1, ...lines.split("\n").map((l) => l.length)), 121);
    const box = text(scratch, 0, 0, lines, width ? { width } : {});
    if (box.rows > 120)
        fail(`${what}'s words wrap past the 120 rows a piece can have${width ? ` at ${width} columns` : ""}: give it fewer words${width ? " or more width" : ""}`);
    const s = new Surface(Math.max(1, cols ?? box.cols), Math.max(1, box.rows), { palette: color ? new Palette({ light: [color.light], dark: [color.dark] }) : null });
    text(s, 0, 0, lines, { ...(width ? { width } : {}), ...(color ? { color: 0 } : {}) });
    return s;
}
const WIDGET = ["color", ...NAMING];
// A widget's name and note: the user's, or its own.
const naming = (o, name, note) => ({ name: o.name ?? name, note: (o.note ?? note).slice(0, 72) });
// A widget that draws a frame of its own: grid()'s border leaves it out rather than drawing a second one round it.
const framing = (p, framed) => (framed ? Object.assign(p, { frames: true }) : p);
/**
 * How full, from what gauge() and progressBar() take: a number from `min` to `max`, or a percentage as a string,
 * "64%". A share of 0 to 1 is what a progress bar takes; a gauge from 0 to 100 given one is asked if it meant a
 * percentage. A function is read every frame, for a live reading: the piece is then a clock (svg() can't loop it).
 */
function amountOf(what, v, min, max, share) {
    if (v === undefined)
        return undefined;
    if (typeof v === "function") {
        return () => {
            const got = v();
            return typeof got === "number" && Number.isFinite(got) ? Math.max(min, Math.min(max, got)) : min;
        };
    }
    if (typeof v === "string") {
        const m = /^\s*(\d+(?:\.\d+)?)\s*%\s*$/.exec(v);
        if (!m || +m[1] > 100)
            fail(`${what}'s value takes a percentage from "0%" to "100%", or a number, not ${show(v)}`);
        return min + (+m[1] / 100) * (max - min);
    }
    if (typeof v !== "number" || !Number.isFinite(v) || v < min || v > max) {
        const hint = share && typeof v === "number" && v > 1 && v <= 100 ? `: did you mean ${+(v / 100).toFixed(4)}, or "${v}%"?` : "";
        fail(`${what}'s value takes a number from ${min} to ${max}, a percentage such as "64%", or a function that reads one, not ${show(v)}${hint}`);
    }
    if (!share && min === 0 && max === 100 && v > 0 && v < 1)
        fail(`${what}'s value is a reading from 0 to 100, and ${v} is less than 1: did you mean ${+(v * 100).toFixed(2)}, or "${+(v * 100).toFixed(2)}%"? Give it max: 1 for a reading from 0 to 1`);
    return v;
}
/**
 * A clock face: a round dial, its hours numbered, three hands and a red second hand going round once a minute. With no
 * options it shows ten past ten, and loops on the minute; `real: true` shows the time where it is seen.
 *
 *   clockFace()
 *   clockFace({ size: "small", time: "4:20", title: "tea" })
 */
export function clockFace(o) {
    const p = optionsOf("clockFace()", o, ["time", "real", "size", "numbers", "frame", "title", ...WIDGET]);
    const size = wordOf("clockFace's size", p.size, ["small", "medium", "large"], "medium");
    const numbers = wordOf("clockFace's numbers", p.numbers, ["all", "quarters", "none"], size === "small" ? "quarters" : "all");
    const real = boolOf("clockFace's real", p.real, false);
    const framed = boolOf("clockFace's frame", p.frame, true);
    const title = textOf("clockFace's title", p.title);
    const time = p.time ?? "10:10";
    const hm = /^(\d{1,2}):(\d{2})$/.exec(String(time));
    if (!hm || +hm[1] > 23 || +hm[2] > 59)
        fail(`clockFace's time takes "h:mm", such as "10:10", not ${show(time)}`);
    const [h0, m0] = [+hm[1] % 12, +hm[2]];
    const { cols, rows } = { small: { cols: 25, rows: 13 }, medium: { cols: 41, rows: 21 }, large: { cols: 61, rows: 29 } }[size];
    const second = themed("clockFace's color", p.color) ?? TONES.bad;
    const made = piece({ ...naming(p, "clock", real ? "a clock face showing the time" : `a clock face at ${time}, its second hand going round`), category: "objects", cols, rows, fps: 4, palette: tones(second), ...(real ? { clock: true } : { loop: 60 }) }, (t, s) => {
        const [x, y] = at(s);
        if (framed)
            rect(s, 0, 0, cols, rows, { style: "rounded", title, color: MUTED });
        // the dial's radius in columns: the frame's inside, or the whole
        const r = (rows / 2 - (framed ? 1.5 : 0.5)) * s.aspect;
        circle(s, x, y, r, { char: "auto", color: MUTED });
        // the time: the one given and the play time's seconds, or the real time
        const now = real ? new Date() : null;
        const sec = now ? now.getSeconds() : Math.floor(t) % 60;
        const min = now ? now.getMinutes() : m0, hr = now ? now.getHours() % 12 : h0;
        ray(s, x, y, r * 0.4, (hr + min / 60) / 12);
        ray(s, x, y, r * 0.62, min / 60);
        ray(s, x, y, r * 0.72, sec / 60, { color: ACCENT });
        s.set(x, y, "o", ACCENT);
        // the numbers last, so a hand passing never hides one
        ring(s, 12, { radius: r - 3 }).forEach((point, hour) => {
            if (numbers === "all" || (numbers === "quarters" && hour % 3 === 0))
                label(s, ...point, hour || 12);
        });
    });
    return framing(made, framed);
}
const EIGHTHS = "▏▎▍▌▋▊▉█";
/**
 * A progress bar: a label, a bar and how far along, in one row. With a `value` it is a still at that; without, it fills
 * smoothly over 4 seconds, turns green, and fills again.
 *
 *   progressBar({ label: "downloading" })
 *   progressBar({ value: 0.42, style: "ascii" })
 */
export function progressBar(o) {
    const p = optionsOf("progressBar()", o, ["value", "min", "max", "label", "width", "style", "percent", "seconds", ...WIDGET]);
    const min = numberOf("progressBar's min", p.min, 0), max = numberOf("progressBar's max", p.max, 1);
    if (!(max > min))
        fail(`progressBar's max takes a number above its min, ${min}, not ${show(p.max)}`);
    const value = amountOf("progressBar", p.value, min, max, min === 0 && max === 1);
    const live = typeof value === "function";
    const words = textOf("progressBar's label", p.label);
    const label = words ? `${words} ` : "";
    const width = wholeOf("progressBar's width", p.width, 30, 3, 300);
    const style = wordOf("progressBar's style", p.style, ["blocks", "ascii", "dots"], "blocks");
    const percent = boolOf("progressBar's percent", p.percent, true);
    const fill = numberOf("progressBar's seconds", p.seconds, 4, 0.1, 59);
    const smooth = ease.inOutSine;
    // Full for a second at least, then round again on a loop other widgets share.
    const loop = loopOf(fill + 1, true);
    const cols = label.length + width + (percent ? 5 : 0);
    const share = (v) => (v - min) / (max - min);
    const timing = live ? { fps: 4, clock: true } : value === undefined ? { fps: 24, loop, still: fill } : { fps: 0 };
    const note = live ? "a progress bar, live" : value === undefined ? "a progress bar filling" : `a progress bar at ${Math.round(share(value) * 100)}%`;
    return piece({ ...naming(p, label.trim() || "progress", note), category: "ui", cols, rows: 1, ...timing, palette: tones(themed("progressBar's color", p.color)) }, (t, s) => {
        const k = typeof value === "function" ? share(value()) : value !== undefined ? share(value) : smooth(Math.min(1, (((t % loop) + loop) % loop) / fill));
        const color = k >= 1 ? GOOD : ACCENT;
        s.write(0, 0, label);
        const x = label.length;
        if (style === "ascii") {
            const n = Math.round(k * (width - 2));
            s.write(x, 0, "[", MUTED);
            for (let i = 0; i < width - 2; i++)
                s.set(x + 1 + i, 0, i < n ? "#" : "-", i < n ? color : MUTED);
            s.write(x + width - 1, 0, "]", MUTED);
        }
        else if (style === "dots") {
            const n = Math.round(k * width);
            for (let i = 0; i < width; i++)
                s.set(x + i, 0, i < n ? "●" : "○", i < n ? color : MUTED);
        }
        else {
            // whole cells of █, then the eighth the next cell is filled to, then the track
            const eighths = Math.round(k * width * 8);
            for (let i = 0; i < width; i++) {
                const e = eighths - i * 8;
                s.set(x + i, 0, e >= 8 ? "█" : e > 0 ? EIGHTHS[e - 1] : "░", e > 0 ? color : MUTED);
            }
        }
        if (percent)
            s.write(x + width, 0, `${Math.round(k * 100)}%`.padStart(5));
    });
}
// --- spinner -------------------------------------------------------------------------------------------
/** The spinners by name, each its frames in order: the ones terminals show while they wait. */
export const spinners = {
    dots: "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏",
    line: "-\\|/",
    arc: "◜◠◝◞◡◟",
    circle: "◐◓◑◒",
    bounce: "⠁⠂⠄⡀⢀⠠⠐⠈",
    blocks: "▖▘▝▗",
    grow: "▁▂▃▄▅▆▇█▇▆▅▄▃▂",
    arrows: "←↖↑↗→↘↓↙",
    pulse: "·•●•",
};
/**
 * A spinner, the kind a terminal shows while it works: "dots" (the default), "line", "arc", "circle", "bounce",
 * "blocks", "grow", "arrows" or "pulse", with words after it if you like.
 *
 *   spinner("dots", { label: "installing" })
 */
export function spinner(kind = "dots", o) {
    const name = wordOf("spinner()", kind, Object.keys(spinners), "dots");
    const p = optionsOf("spinner()", o, ["label", "speed", "period", ...WIDGET]);
    const label = textOf("spinner's label", p.label);
    const frames = spinners[name];
    // A tenth of a second a frame, its turn kept to a loop other widgets share; a period of your own as it is.
    const loop = p.period !== undefined ? secondsOf("spinner()", p, 1) : loopOf(secondsOf("spinner()", p, frames.length / 10));
    const words = label ? ` ${label}` : "";
    return piece({ ...naming(p, label || `${name} spinner`, `a ${name} spinner${words ? `,${words}` : ""}`), category: "ui", cols: 1 + words.length, rows: 1, fps: 30, palette: tones(themed("spinner's color", p.color)), loop }, (t, s) => {
        // the frame t is in, a hair past each step so a frame's own moment shows it
        const k = Math.floor(((((t % loop) + loop) % loop) * frames.length) / loop + 1e-9);
        s.set(0, 0, frames[Math.min(frames.length - 1, k)], ACCENT);
        s.write(1, 0, words);
    });
}
/**
 * A gauge: a dial three quarters round, filled to its reading, the number in its middle, in a rounded frame with its
 * label. Green, yellow and red by how high the reading is.
 *
 *   gauge({ label: "cpu" })
 *   gauge({ value: 72, label: "disk" })
 */
export function gauge(o) {
    const p = optionsOf("gauge()", o, ["value", "label", "frame", "min", "max", "unit", ...WIDGET]);
    const min = numberOf("gauge's min", p.min, 0), max = numberOf("gauge's max", p.max, 100);
    if (!(max > min))
        fail(`gauge's max takes a number above its min, ${min}, not ${show(p.max)}`);
    const value = amountOf("gauge", p.value, min, max, false);
    const title = textOf("gauge's label", p.label);
    const unit = p.unit === undefined ? "%" : textOf("gauge's unit", p.unit);
    const framed = boolOf("gauge's frame", p.frame, true);
    const own = themed("gauge's color", p.color);
    // 12 seconds: a loop that divides a minute, so a gauge next to a clock face or a sparkline loops with them.
    const loop = 12;
    // A reading that wanders: smooth noise that comes round every loop, kept between a sixth and nineteen twentieths.
    const wander = (t) => 0.15 + 0.8 * loopNoise(0.3, 0.7, t, loop, { radius: 0.9 });
    const timing = typeof value === "function" ? { fps: 4, clock: true } : value === undefined ? { fps: 24, loop } : { fps: 0 };
    const note = typeof value === "function" ? "a gauge, live" : value === undefined ? "a gauge, its reading rising and falling" : `a gauge reading ${+value.toFixed(2)}${unit}`;
    const made = piece({ ...naming(p, title || "gauge", note), category: "data", cols: 25, rows: 12, ...timing, palette: tones(own) }, (t, s) => {
        const k = typeof value === "function" ? (value() - min) / (max - min) : value === undefined ? wander(t) : (value - min) / (max - min);
        const color = own ? ACCENT : k > 0.85 ? BAD : k > 0.6 ? WARN : GOOD;
        if (framed)
            rect(s, 0, 0, s.cols, s.rows, { style: "rounded", title, color: MUTED });
        else if (title)
            textAt(s, title, "top");
        arc(s, 12.5, 7, 9, -0.375, 0.375, { char: "░", color: MUTED });
        arc(s, 12.5, 7, 9, -0.375, -0.375 + 0.75 * k, { char: "█", color });
        label(s, 12.5, 7, `${Math.round(min + k * (max - min))}${unit}`);
    });
    return framing(made, framed);
}
/**
 * A sparkline: a small, smooth line chart in braille, its latest number after it. Given numbers, it draws itself in
 * from the left, holds, and draws again; given none, it is a reading wandering and scrolling left, looping every 12
 * seconds. Given a function that returns numbers, it reads them every frame and draws the latest, for live data: the
 * piece is then a clock (svg() can't loop it).
 *
 *   sparkline([3, 5, 2, 8, 6, 9, 4, 7], { label: "visits" })
 *   sparkline({ label: "net" })                    // a wandering reading
 *   sparkline(() => history, { label: "cpu" })     // live: history is your own list, kept up to date
 */
export function sparkline(data, o) {
    // Options alone, for a wandering reading.
    if (data !== undefined && data !== null && typeof data === "object" && !Array.isArray(data)) {
        if (o !== undefined)
            fail("sparkline() takes numbers then options, or options alone for a live reading, not two lots of options");
        [data, o] = [undefined, data];
    }
    const p = optionsOf("sparkline()", o, ["label", "width", "height", "fill", ...WIDGET]);
    const numbers = (v) => Array.isArray(v) && v.length >= 2 && v.every((n) => typeof n === "number" && Number.isFinite(n));
    const live = typeof data === "function" ? data : null;
    if (data !== undefined && !live && !numbers(data))
        fail(`sparkline() takes a list of two or more numbers, such as [3, 5, 2, 8], or a function that returns one, not ${show(data)}`);
    const label = textOf("sparkline's label", p.label);
    const words = label ? `${label} ` : "";
    const width = wholeOf("sparkline's width", p.width, 32, 2, 300), height = wholeOf("sparkline's height", p.height, 3, 1, 100);
    const fill = boolOf("sparkline's fill", p.fill, true);
    const list = data && !live ? [...data] : null;
    // A line through numbers all alike is flat in the middle, not a range of nothing.
    const range = (l) => {
        const lo = Math.min(...l), hi = Math.max(...l);
        return lo === hi ? [lo - 1, hi + 1] : [lo, hi];
    };
    const [lo, hi] = list ? range(list) : [0, 1];
    // Drawing in takes 1.5 seconds and holds; the wandering reading comes round every 12: loops other widgets share.
    const loop = list ? loopOf(1.5 + 3, true) : 12;
    const reading = (x) => 0.1 + 0.8 * loopNoise(0.4, 0.2, x, loop, { radius: 1.4 });
    const last = list ? String(+list[list.length - 1].toFixed(2)) : live ? "100000" : "100";
    const cols = words.length + width + 1 + last.length;
    const timing = live ? { fps: 4, clock: true } : { fps: 24, loop, ...(list ? { still: 1.5 } : {}) };
    const note = live ? "a sparkline of live data" : list ? "a sparkline drawing itself in" : "a sparkline of a wandering reading";
    return piece({ ...naming(p, label || "sparkline", note), category: "data", cols, rows: height, ...timing, palette: tones(themed("sparkline's color", p.color)) }, (t, s) => {
        const u = ((t % loop) + loop) % loop;
        textAt(s, words, "left");
        const area = { x: words.length, y: 0, cols: width, rows: height };
        const b = braille(s, area);
        if (live) {
            const now = live();
            if (!numbers(now))
                return;
            const [a, z] = range(now);
            b.plot(now, { y0: a, y1: z, fill, color: ACCENT });
            b.draw();
            textAt(s, String(+now[now.length - 1].toFixed(2)), "right");
            return;
        }
        if (list)
            b.plot(list, { y0: lo, y1: hi, fill, color: ACCENT });
        else
            b.plot(reading, { x0: t - width / 4, x1: t, y0: 0, y1: 1, fill, color: ACCENT });
        b.draw();
        if (list) {
            // drawn in from the left: the cells past the edge so far are cleared
            const edge = Math.round(width * Math.min(1, u / 1.5));
            s.clear({ x: area.x + edge, y: 0, cols: width - edge, rows: height });
            if (edge >= width)
                textAt(s, last, "right");
        }
        else
            textAt(s, String(Math.round(reading(t) * 100)), "right");
    });
}
// Each bar's own colour, by turns: blue, green, yellow, red, purple, pink.
const BARS = [
    { light: "#0969da", dark: "#58a6ff" },
    { light: "#1a7f37", dark: "#3fb950" },
    { light: "#9a6700", dark: "#d29922" },
    { light: "#cf222e", dark: "#f85149" },
    { light: "#8250df", dark: "#bc8cff" },
    { light: "#bf3989", dark: "#ff80c8" },
];
const RISE = "▁▂▃▄▅▆▇█";
/**
 * A bar chart: a bar for each value, each in its own colour, growing in one after another with a little overshoot,
 * holding, and growing again. Give it names and values, { mon: 3, tue: 5 }, or a list of values, numbered.
 *
 *   barChart({ mon: 3, tue: 5, wed: 4, thu: 8, fri: 6 })
 *   barChart({ rust: 42, go: 31, zig: 12 }, { horizontal: true })
 */
export function barChart(data, o) {
    const p = optionsOf("barChart()", o, ["horizontal", "size", "max", "values", "seconds", "hold", ...WIDGET]);
    const entries = Array.isArray(data) ? data.map((v, i) => [String(i + 1), v]) : data && typeof data === "object" ? Object.entries(data) : [];
    if (!entries.length || entries.length > 64 || !entries.every(([, v]) => typeof v === "number" && Number.isFinite(v) && v >= 0))
        fail(`barChart() takes names and values, such as { mon: 3, tue: 5 }, or a list of values, 1 to 64 of them, each 0 or more, not ${show(data)}`);
    for (const [k] of entries)
        textOf("barChart's names", k);
    const horizontal = boolOf("barChart's horizontal", p.horizontal, false);
    const size = wholeOf("barChart's size", p.size, horizontal ? 30 : 10, 1, 300);
    const top = numberOf("barChart's max", p.max, Math.max(...entries.map(([, v]) => v)) || 1, 0);
    const values = boolOf("barChart's values", p.values, true);
    const grow = numberOf("barChart's seconds", p.seconds, 0.8, 0, 30);
    const hold = numberOf("barChart's hold", p.hold, 3, 0, 60);
    const own = themed("barChart's color", p.color);
    const snappy = ease.outBack;
    const shown = entries.map(([, v]) => String(+v.toFixed(2)));
    const names = entries.map(([k]) => k);
    // Bars start a tenth of a second apart; the loop is the last one grown and the hold, made up to a loop other widgets
    // share. Held still, they are all grown.
    const grown = grow + 0.1 * (entries.length - 1);
    const loop = grow ? loopOf(grown + hold, true) : undefined;
    const lengthAt = (i, t) => {
        const full = Math.min(1, entries[i][1] / top);
        if (!loop)
            return full;
        const u = (((t % loop) + loop) % loop) - 0.1 * i;
        return full * Math.min(1.08, snappy(Math.max(0, Math.min(1, u / grow))));
    };
    const colorOf = (i) => (own ? ACCENT : 6 + (i % BARS.length));
    const palette = tones(own, own ? [] : BARS);
    const spec = { ...naming(p, "bar chart", `a bar chart of ${entries.length} bars${loop ? ", growing in" : ""}`), category: "data", fps: loop ? 24 : 0, palette, ...(loop ? { loop, still: Math.min(loop - 0.01, grown + 0.05) } : {}) };
    if (horizontal) {
        const nameW = Math.max(...names.map((n) => n.length)), valueW = values ? Math.max(...shown.map((v) => v.length)) + 1 : 0;
        return piece({ ...spec, cols: nameW + 1 + size + valueW, rows: entries.length }, (t, s) => {
            entries.forEach((_, i) => {
                s.write(nameW - names[i].length, i, names[i]);
                // the overshoot stops at the full length, as standing up, so the value after it stays in the piece
                const eighths = Math.min(size * 8, Math.round(lengthAt(i, t) * size * 8));
                for (let x = 0; x * 8 < eighths; x++)
                    s.set(nameW + 1 + x, i, eighths - x * 8 >= 8 ? "█" : EIGHTHS[eighths - x * 8 - 1], colorOf(i));
                if (values)
                    s.write(nameW + 2 + Math.ceil(eighths / 8), i, shown[i], MUTED);
            });
        });
    }
    const bar = Math.max(3, ...names.map((n) => n.length), ...(values ? shown.map((v) => v.length) : [])), gap = 2;
    return piece({ ...spec, cols: entries.length * (bar + gap) - gap, rows: size + 2 }, (t, s) => {
        entries.forEach((_, i) => {
            const x = i * (bar + gap);
            const eighths = Math.min(size * 8, Math.round(lengthAt(i, t) * size * 8));
            // whole cells from the bottom up, then the eighth the top cell is filled to
            for (let y = 0; y * 8 < eighths; y++) {
                const e = eighths - y * 8;
                for (let c = 0; c < bar; c++)
                    s.set(x + c, size - y, e >= 8 ? "█" : RISE[e - 1], colorOf(i));
            }
            if (values && eighths)
                text(s, x, size - Math.ceil(eighths / 8), shown[i], { width: bar, align: "center", color: MUTED });
            text(s, x, size + 1, names[i], { width: bar, align: "center" });
        });
    });
}
/**
 * A panel: a box with a title round anything, a piece, text, a widget or a 3D shape, or round nothing, a size you
 * give. compose's border() with a size of its own.
 *
 *   panel(spinner("dots", { label: "building" }), { title: "ci", cols: 30, rows: 5 })
 *   panel("hello there", { title: "note", style: "double" })
 */
export function panel(content, o) {
    const p = optionsOf("panel()", o, ["title", "style", "cols", "rows", ...WIDGET]);
    const title = textOf("panel's title", p.title);
    const style = wordOf("panel's style", p.style, ["rounded", "single", "double", "heavy", "ascii"], "rounded");
    const inner = content === undefined ? null : pieceOf(content, "panel()");
    const cols = wholeOf("panel's cols", p.cols, (inner?.meta.cols ?? 20) + 4, 3, 320), rows = wholeOf("panel's rows", p.rows, (inner?.meta.rows ?? 4) + 2, 3, 120);
    if (inner && (inner.meta.cols > cols - 4 || inner.meta.rows > rows - 2))
        fail(`panel's room inside is ${cols - 4} by ${rows - 2}, and ${inner.meta.name} is ${inner.meta.cols} by ${inner.meta.rows}: give the panel cols ${inner.meta.cols + 4} and rows ${inner.meta.rows + 2} or more, or leave them out`);
    // The room inside the lines and a column of padding each side, the thing in its middle.
    const room = new Surface(Math.max(1, cols - 4), Math.max(1, rows - 2));
    const filled = inner ? layer(room, { src: inner, anchor: "center" }) : room;
    const color = themed("panel's color", p.color);
    const boxed = border(filled, { style, pad: [0, 1], ...(title ? { title } : {}), ...(color ? { color } : {}) });
    const name = p.name ?? title ?? inner?.meta.name ?? "panel";
    return framing(titled(boxed, name, p.note ?? `${name}, in a box`), true);
}
/**
 * A card: a heading, a line under it, words wrapped to its width and a quiet footer, in a box. A still: give it to a
 * motion, floating(card({ ... })), to set it moving.
 *
 *   card({ title: "ascii.rest", text: "Animated ascii art for the web, in one line.", footer: "npm i ascii.rest" })
 */
export function card(o) {
    const p = optionsOf("card()", o, ["title", "text", "footer", "width", "style", "frame", ...WIDGET]);
    const title = textOf("card's title", p.title), words = textOf("card's text", p.text, { lines: true }), footer = textOf("card's footer", p.footer);
    if (!title && !words && !footer)
        fail("card() takes a title, text or a footer, such as { title: \"hello\", text: \"...\" }");
    const style = wordOf("card's style", p.style, ["rounded", "single", "double", "heavy", "ascii"], "rounded");
    const framed = boolOf("card's frame", p.frame, true);
    const width = wholeOf("card's width", p.width, 36, 8, 320);
    // Inside its lines and a column of room each side; with no frame, the room alone.
    const edge = framed ? 1 : 0;
    const room = width - 2 - 2 * edge;
    // How many rows the words wrap to, found by writing them on a scratch grid.
    const body = words ? text(new Surface(room, 120), 0, 0, words, { width: room }).rows : 0;
    if (body > 100)
        fail(`card's text wraps to ${body} rows at this width, past the 100 a card can hold: give it fewer words or more width`);
    const head = title ? 2 : 0, foot = footer ? (body ? 2 : 1) : 0;
    const rows = 2 * edge + head + body + foot;
    const made = piece({ ...naming(p, title || "card", title ? `a card: ${title}` : "a card"), category: "ui", cols: width, rows, fps: 0, palette: tones(themed("card's color", p.color)) }, (_, s) => {
        if (framed)
            rect(s, 0, 0, width, rows, { style, color: MUTED });
        const x = edge + 1;
        let y = edge;
        if (title) {
            text(s, x, y, title, { width: room, wrap: false, color: ACCENT });
            line(s, 0, y + 1, width - 1, y + 1, { style: style === "rounded" ? "single" : style, color: MUTED });
            y += 2;
        }
        if (words)
            y += text(s, x, y, words, { width: room }).rows;
        if (footer)
            text(s, x, rows - 1 - edge, footer, { width: room, align: "right", wrap: false, color: MUTED });
    });
    return framing(made, framed);
}
/**
 * Words typed out a character at a time behind a cursor, wrapped to a width, held, and typed again: fx's typeIn() at a
 * typist's pace.
 *
 *   typewriter("Hello. This sentence types itself out, as if someone were at the keys.")
 */
export function typewriter(words, o) {
    if (typeof words !== "string" || !words.trim())
        fail(`typewriter() takes words to type, not ${show(words)}`);
    words = textOf("typewriter()", words, { lines: true });
    const p = optionsOf("typewriter()", o, ["speed", "width", "cursor", "hold", ...WIDGET]);
    const longest = Math.max(...words.split("\n").map((l) => l.length));
    const width = Math.min(longest, wholeOf("typewriter's width", p.width, 40, 4, 300));
    const cursor = boolOf("typewriter's cursor", p.cursor, true);
    const asked = p.hold === "forever" ? undefined : numberOf("typewriter's hold", p.hold, 3, 0, 60);
    // characters a second: 14 at normal speed
    const speed = 14 * speedOf("typewriter()", p.speed);
    // typeIn() types the characters that are not spaces; the hold is made up so the whole is a loop widgets share
    const typing = words.replace(/\s/g, "").length / speed;
    if (asked !== undefined && typing + asked > 60)
        fail(`typewriter() takes ${+typing.toFixed(1)} seconds to type these words at this speed, past the minute a loop can be: give it fewer words, more speed, or hold: "forever"`);
    const hold = asked === undefined ? undefined : loopOf(typing + asked, true) - typing;
    // wrapped to the width, and a column more for the cursor to blink in at the end of the longest line
    const page = inked("typewriter()", words, themed("typewriter's color", p.color), width, width + (cursor ? 1 : 0));
    const first = words.trim().split("\n")[0].slice(0, 40);
    return typeIn(page, { speed, cursor: cursor ? "▌" : false, ...(hold !== undefined ? { hold } : {}), ...naming(p, first, `${first}, typed out`) });
}
/**
 * Words scrolling across, off one edge and in at the other, as a ticker or a shop sign does: drifting() of text. With
 * `big`, in block letters.
 *
 *   marquee("breaking: ascii is back")
 *   marquee("sale", { big: true, color: "#f85149" })
 */
export function marquee(words, o) {
    if (typeof words !== "string" || !words.trim())
        fail(`marquee() takes words to scroll, not ${show(words)}`);
    words = textOf("marquee()", words, { lines: true }).replace(/\n/g, " ");
    const p = optionsOf("marquee()", o, ["width", "speed", "to", "big", ...WIDGET]);
    const width = wholeOf("marquee's width", p.width, 40, 4, 320);
    const to = wordOf("marquee's to", p.to, ["left", "right"], "left");
    const color = themed("marquee's color", p.color);
    const big = boolOf("marquee's big", p.big, false);
    const speed = speedOf("marquee()", p.speed);
    if (!big && words.length + 2 > 320)
        fail(`marquee() scrolls up to 318 characters, and these words are ${words.length}: split them into two marquees`);
    const src = big ? banner(words, { effect: "still", ...(color ? { color: color } : {}) }) : inked("marquee()", ` ${words} `, color);
    const length = src instanceof Surface ? src.cols : src.meta.cols;
    // A crossing, the width and the words' own length, at about 10 columns a second: a loop other widgets share.
    const crossing = (width + length) / 10 / speed;
    if (crossing > 60) {
        const most = Math.floor(600 * speed - width);
        fail(`marquee() takes ${Math.round(crossing)} seconds to cross at this speed, past the minute a loop can be: at this width and speed it scrolls up to ${most} columns of words, so give it fewer, a narrower width, or more speed`);
    }
    return drifting(src, { to, period: loopOf(crossing), cols: width, ...naming(p, words.slice(0, 40), `${words.slice(0, 40)}, scrolling ${to}`) });
}
/**
 * A countdown in big numbers, a second each, then words, and round again: banners in a sequence().
 *
 *   countdown({ from: 5, then: "liftoff" })
 */
export function countdown(o) {
    const p = optionsOf("countdown()", o, ["from", "to", "then", "seconds", "font", "transition", ...WIDGET]);
    const from = wholeOf("countdown's from", p.from, 10, 0, 999), to = wholeOf("countdown's to", p.to, 1, 0, 999);
    if (to > from)
        fail(`countdown's to takes a number no more than its from, ${from}, not ${to}`);
    if (from - to > 99)
        fail(`countdown() counts up to 100 numbers: from ${from} to ${to} is ${from - to + 1}`);
    const then = p.then === undefined ? "go!" : p.then === false ? false : textOf("countdown's then", p.then);
    if (then !== false && !then.trim())
        fail(`countdown's then takes words, or false for none, not ${show(then)}`);
    const seconds = numberOf("countdown's seconds", p.seconds, 1, 0.2, 60);
    const transition = wordOf("countdown's transition", p.transition, ["cut", "fade", "dissolve", "wipe"], "cut");
    // A palette's name is its fade for each page, as banner() takes { light, dark }; anything else goes to banner() as it is.
    const color = typeof p.color === "string" && !p.color.startsWith("#") ? palette(p.color) : p.color;
    const look = { effect: "still", ...(p.font ? { font: p.font } : {}), ...(color !== undefined ? { color } : {}) };
    const steps = Array.from({ length: from - to + 1 }, (_, i) => ({ src: banner(String(from - i), look), seconds }));
    const all = then === false ? steps : [...steps, { src: banner(then, look), seconds: Math.max(2, seconds) }];
    const counted = sequence(all, { transition, overlap: transition === "cut" ? 0 : Math.min(0.3, seconds / 2) });
    return titled(counted, p.name ?? "countdown", p.note ?? `counting down from ${from}${then ? `, then ${then}` : ""}`);
}
