import { Surface, TAU, fail } from "../core.js";
import { crop, layer } from "../compose.js";
import { effect, shake } from "../fx.js";
import { mirror } from "../mirror.js";
import { group, orbit, scene, sphere, torus } from "../shapes3d.js";
import { NAMING, boolOf, colorOf, easeOf, is3d, numberOf, optionsOf, secondsOf, show, sizeOf, titled, wordOf, } from "./checks.js";
import { loopFor, pieceOf, withLoop } from "./words.js";
const MOTION = ["speed", "period", ...NAMING];
// A motion's piece named as asked, or after its thing and what it does.
const named = (p, o, doing) => ({ name: o.name ?? p.meta.name, note: o.note ?? `${o.name ?? p.meta.name}, ${doing}`.slice(0, 72) });
// A list of shapes for a group: one shape is a list of one.
const shapes = (v) => (Array.isArray(v) ? [...v] : [v]);
// Draws grid g into s scaled by k about its middle, its top left at ox, oy when k is 1: the nearest cell, as compose's
// scale() takes them, so block art stays crisp.
function drawScaled(s, g, ox, oy, k) {
    if (!(k > 0.02))
        return;
    const cx = ox + g.cols / 2, cy = oy + g.rows / 2;
    const x0 = Math.max(0, Math.floor(cx - (g.cols * k) / 2)), x1 = Math.min(s.cols, Math.ceil(cx + (g.cols * k) / 2));
    const y0 = Math.max(0, Math.floor(cy - (g.rows * k) / 2)), y1 = Math.min(s.rows, Math.ceil(cy + (g.rows * k) / 2));
    for (let y = y0; y < y1; y++) {
        const sy = Math.floor((y + 0.5 - cy) / k + g.rows / 2);
        if (sy < 0 || sy >= g.rows)
            continue;
        for (let x = x0; x < x1; x++) {
            const sx = Math.floor((x + 0.5 - cx) / k + g.cols / 2);
            if (sx < 0 || sx >= g.cols)
                continue;
            const j = sy * g.cols + sx;
            if (g.chars[j])
                s.put(y * s.cols + x, g.chars[j], g.colors[j]);
        }
    }
}
// How far into its loop t is, 0 to 1.
const phaseAt = (t, period) => (((t % period) + period) % period) / period;
/**
 * A thing spinning, once round in 6 seconds at normal speed. A 3D shape turns in 3D, tumbling by default; a flat
 * thing, a banner or a logo, turns like a coin on a table, narrowing to its edge and showing its mirrored back.
 *
 *   spinning(torus())                                  // the spinning donut
 *   spinning(cube({ color: "#38bdf8" }), { way: "turntable", speed: "slow" })
 *   spinning(banner("ok"))                             // a coin of words
 */
export function spinning(thing, o) {
    const p = optionsOf("spinning()", o, [...MOTION, "way", "cols", "rows"]);
    const period = secondsOf("spinning()", p, 6);
    if (is3d(thing)) {
        const way = wordOf("spinning's way", p.way, ["tumble", "turntable", "wheel", "flip"], "tumble");
        // Radians a second about x, y and z: once round a period, the tumble's second axis half as fast, so it loops in two.
        const turn = TAU / period;
        const spin = { tumble: [turn, 0, turn / 2], turntable: [0, turn, 0], wheel: [0, 0, turn], flip: [turn, 0, 0] }[way];
        const size = { cols: p.cols ?? 44, rows: p.rows ?? 22 };
        const name = p.name ?? "spinning";
        // On a turntable it is seen from a little above, so its top shows as it turns. Its shapes turn about the middle of
        // what they fill, so a scoop on a cone fills the frame, and a soft light everywhere keeps the side away from the
        // lamp showing.
        const camera = way === "turntable" ? { tilt: "above" } : {};
        return scene({ name, note: p.note ?? `${name}, ${way === "tumble" ? "tumbling" : "spinning"}`, ...size, camera, ambient: "soft", period: way === "tumble" ? 2 * period : period }, group(shapes(thing), { spin, center: true }));
    }
    if (p.way !== undefined && p.way !== "turntable")
        fail(`spinning's way ${show(p.way)} is for a 3D shape such as torus(): a flat thing turns like a coin, way "turntable"`);
    if (p.cols !== undefined || p.rows !== undefined)
        fail("spinning's cols and rows size a 3D shape's scene: a flat thing keeps its own size");
    // A coin: each frame the thing's columns squeezed to the coin's width at that moment, cos of the turn, and past a
    // quarter turn its back, the thing mirrored as flip() mirrors it, characters and all; edge on, a line down its middle.
    // The back is read off the front, not a mirrored copy laid beside it, so a thing as wide as a piece can be spins.
    const src = pieceOf(thing, "spinning()");
    const { cols: w, rows: h } = src.meta;
    const coin = effect(src, { period, ...named(src, p, "spinning like a coin") }, (t, s, g) => {
        const k = Math.cos(TAU * phaseAt(t, period));
        const back = k < 0, turned = mirror().x;
        const half = w / 2;
        for (let x = 0; x < w; x++) {
            const u = (x + 0.5 - half) / Math.max(Math.abs(k), 1e-3) + half;
            if (u < 0 || u >= w)
                continue;
            const from = back ? w - 1 - Math.floor(u) : Math.floor(u);
            for (let y = 0; y < h; y++) {
                const j = y * g.cols + from;
                if (g.chars[j])
                    s.put(y * s.cols + x, back ? turned[g.chars[j]] : g.chars[j], g.colors[j]);
            }
        }
        // edge on, where no column is wide enough to show, the coin is a line
        if (Math.abs(k) * w < 1)
            for (let y = 0; y < h; y++)
                if (g.chars[y * g.cols + Math.floor(half)] || g.chars[y * g.cols + w - 1 - Math.floor(half)])
                    s.set(Math.floor(half), y, "|");
    });
    return crop(coin, { x: 0, y: 0, cols: w, rows: h });
}
/**
 * A thing going round in a circle, once in 6 seconds at normal speed, round what it is `around` if anything, passing in
 * front of it below and behind it above. A 3D shape round a 3D shape goes round in 3D, hidden by depth; anything else
 * goes round flat, its circle squashed to look round on tall cells.
 *
 *   orbiting(sphere({ radius: 0.3 }), { around: sphere({ color: "#3b82f6" }) })
 *   orbiting("*", { around: banner("sun"), speed: "slow" })
 */
export function orbiting(thing, o) {
    const p = optionsOf("orbiting()", o, [...MOTION, "around", "radius", "cols", "rows"]);
    const period = secondsOf("orbiting()", p, 6);
    if (is3d(thing) && (p.around === undefined || is3d(p.around))) {
        const radius = sizeOf("orbiting's radius", p.radius, { close: 1.8, medium: 2.6, far: 3.6 }, "medium", 0.1, 100);
        const centre = p.around === undefined ? [] : shapes(p.around);
        const name = p.name ?? "orbit";
        return scene({ name, note: p.note ?? `${name}, going round`, cols: p.cols ?? 56, rows: p.rows ?? 22, period, ambient: 0.1, camera: { distance: 10 } }, [
            ...centre,
            group(shapes(thing), { at: orbit({ radius, period, tilt: 0.3 }) }),
        ]);
    }
    if (p.cols !== undefined || p.rows !== undefined)
        fail("orbiting's cols and rows size a 3D orbit: a flat orbit is as big as it needs");
    const src = pieceOf(thing, "orbiting()");
    const centre = p.around === undefined ? null : pieceOf(p.around, "orbiting's around");
    const least = centre ? Math.ceil(centre.meta.cols / 2 + src.meta.cols / 2 + 3) : 6;
    const rx = Math.round(sizeOf("orbiting's radius", p.radius, { close: least, medium: Math.max(least + 3, 12), far: Math.max(least + 10, 22) }, "medium", 1, 150));
    const ry = Math.max(1, Math.round(rx / 2));
    const cols = Math.max(2 * rx + src.meta.cols + 1, centre?.meta.cols ?? 0), rows = Math.max(2 * ry + src.meta.rows + 1, centre?.meta.rows ?? 0);
    // Round from the right, down in front, left, and up behind; on the far side of the turn it is drawn under the middle.
    const turn = (t) => TAU * phaseAt(t, period);
    const front = (t) => Math.sin(turn(t)) >= 0;
    const away = 1e4;
    const at = (inFront) => ({
        src,
        anchor: "center",
        x: (t) => (front(t) === inFront ? Math.round(rx * Math.cos(turn(t))) : away),
        y: (t) => Math.round(ry * Math.sin(turn(t))),
    });
    const stage = layer(new Surface(cols, rows), at(false), ...(centre ? [{ src: centre, anchor: "center" }] : []), at(true));
    const name = p.name ?? (centre ? `${src.meta.name} round ${centre.meta.name}` : src.meta.name);
    return titled(withLoop(stage, loopFor([period, src, ...(centre ? [centre] : [])])), name, p.note ?? `${name}, going round`);
}
/**
 * A thing bouncing on the ground, landing every 1.2 seconds at normal speed: fast at the bottom, slow at the top, as a
 * ball goes, with its shadow on the ground under it.
 *
 *   bouncing(banner("boing"))
 *   bouncing(ball(), { height: "high", speed: "slow" })
 */
export function bouncing(thing, o) {
    const p = optionsOf("bouncing()", o, [...MOTION, "height", "shadow"]);
    const period = secondsOf("bouncing()", p, 1.2);
    const height = Math.round(sizeOf("bouncing's height", p.height, { low: 3, medium: 6, high: 10 }, "medium", 1, 100));
    const ground = boolOf("bouncing's shadow", p.shadow, true) ? 1 : 0;
    const src = pieceOf(thing, "bouncing()");
    return effect(src, { period, pad: { top: height, bottom: ground }, colors: ["#8c959f"], ...named(src, p, "bouncing") }, (t, s, g, ctx) => {
        // up and down on a parabola: 0 on the ground at the start and end of each bounce, the full height in the middle
        const k = phaseAt(t, period);
        const up = Math.round(height * 4 * k * (1 - k));
        s.paste(g, ctx.x, ctx.y - up);
        if (!ground)
            return;
        const w = Math.max(1, Math.round(g.cols * (1 - (0.7 * up) / height)));
        for (let x = 0; x < w; x++)
            s.set(ctx.x + Math.floor((g.cols - w) / 2) + x, s.rows - 1, "▔", "#8c959f");
    });
}
/**
 * A thing floating, rising and sinking gently, once in 3 seconds at normal speed: a boat on a swell, a balloon, a
 * logo hovering.
 *
 *   floating(heart())
 */
export function floating(thing, o) {
    const p = optionsOf("floating()", o, [...MOTION, "height"]);
    const period = secondsOf("floating()", p, 3);
    const h = Math.round(sizeOf("floating's height", p.height, { low: 1, medium: 2, high: 3 }, "low", 1, 50));
    const src = pieceOf(thing, "floating()");
    return effect(src, { period, pad: [0, h], ...named(src, p, "floating") }, (t, s, g, ctx) => {
        s.paste(g, ctx.x, ctx.y - Math.round(h * Math.sin(TAU * phaseAt(t, period))));
    });
}
/**
 * A thing swaying side to side, once in 3 seconds at normal speed: held at the bottom it leans as a tree or a flame
 * does in a breeze, held at the top it swings as a hanging sign does.
 *
 *   swaying(flame())
 *   swaying(banner("open"), { from: "top", speed: "slow" })
 */
export function swaying(thing, o) {
    const p = optionsOf("swaying()", o, [...MOTION, "amount", "from"]);
    const period = secondsOf("swaying()", p, 3);
    const amount = Math.round(sizeOf("swaying's amount", p.amount, { subtle: 1, medium: 2, strong: 4 }, "medium", 1, 50));
    const fromTop = wordOf("swaying's from", p.from, ["bottom", "top"], "bottom") === "top";
    const src = pieceOf(thing, "swaying()");
    return effect(src, { period, pad: [amount, 0], ...named(src, p, "swaying") }, (t, s, g, ctx) => {
        const lean = amount * Math.sin(TAU * phaseAt(t, period));
        // each row leans by how far it is from the end held still
        for (let y = 0; y < g.rows; y++) {
            const reach = g.rows === 1 ? 1 : fromTop ? y / (g.rows - 1) : 1 - y / (g.rows - 1);
            const dx = Math.round(lean * reach);
            for (let x = 0; x < g.cols; x++) {
                const j = y * g.cols + x;
                if (g.chars[j])
                    s.put((ctx.y + y) * s.cols + ctx.x + x + dx, g.chars[j], g.colors[j]);
            }
        }
    });
}
/**
 * A thing pulsing, growing and shrinking about its middle: breathing slowly, or beating as a heart does.
 *
 *   pulsing(heart(), { beat: "heart" })
 */
export function pulsing(thing, o) {
    const p = optionsOf("pulsing()", o, [...MOTION, "amount", "beat"]);
    const heart = wordOf("pulsing's beat", p.beat, ["breath", "heart"], "breath") === "heart";
    const period = secondsOf("pulsing()", p, heart ? 1.2 : 2.4);
    const amount = sizeOf("pulsing's amount", p.amount, { subtle: 0.1, medium: 0.2, strong: 0.34 }, "medium", 0.01, 2);
    const src = pieceOf(thing, "pulsing()");
    const room = [Math.ceil((src.meta.cols * amount) / 2), Math.ceil((src.meta.rows * amount) / 2)];
    // How swollen at k of the way round: a smooth rise and fall, or a heart's lub and dub.
    const bump = (k, at) => Math.max(0, 1 - Math.abs(k - at) / 0.18) ** 2;
    const swell = (k) => (heart ? Math.max(bump(k, 0.12), 0.7 * bump(k, 0.36)) : 0.5 - 0.5 * Math.cos(TAU * k));
    return effect(src, { period, pad: room, ...named(src, p, heart ? "beating" : "pulsing") }, (t, s, g, ctx) => {
        drawScaled(s, g, ctx.x, ctx.y, 1 + amount * swell(phaseAt(t, period)));
    });
}
/**
 * A thing blinking on and off, once in 1.2 seconds at normal speed: a cursor, a warning, a light on a mast. For a
 * moment either side of off it is a ghost of itself in dots, so the blink is soft rather than a flicker.
 *
 *   blinking("● REC", { speed: "slow" })
 */
export function blinking(thing, o) {
    const p = optionsOf("blinking()", o, [...MOTION, "on"]);
    const period = secondsOf("blinking()", p, 1.2);
    const on = numberOf("blinking's on", p.on, 0.6, 0.05, 0.9);
    const src = pieceOf(thing, "blinking()");
    const dot = "·".charCodeAt(0);
    return effect(src, { period, ...named(src, p, "blinking") }, (t, s, g) => {
        const k = phaseAt(t, period);
        if (k < on)
            return s.paste(g, 0, 0);
        // a twelfth of the blink going out and another coming back in, as dots
        if (k < on + 0.08 || k > 0.92)
            for (let i = 0; i < g.chars.length; i++)
                if (g.chars[i] && g.chars[i] !== 32)
                    s.put(i, dot, g.colors[i]);
    });
}
/**
 * A thing shaking: jolting for a moment now and then, every 2 seconds at normal speed, or all the time. fx's shake()
 * with its numbers put in words.
 *
 *   shaking(banner("boom"), { amount: "strong" })
 */
export function shaking(thing, o) {
    const p = optionsOf("shaking()", o, [...MOTION, "amount", "nonstop"]);
    const every = secondsOf("shaking()", p, 2);
    const amount = Math.round(sizeOf("shaking's amount", p.amount, { subtle: 1, medium: 2, strong: 3 }, "subtle", 1, 20));
    const nonstop = boolOf("shaking's nonstop", p.nonstop, false);
    const src = pieceOf(thing, "shaking()");
    return shake(src, { amount, every: nonstop ? 0.25 : every, length: nonstop ? 0.25 : 0.3, ...named(src, p, nonstop ? "shaking" : "shaking now and then") });
}
/**
 * A thing drifting across, off one edge and back in at the other, a crossing taking 8 seconds at normal speed: a cloud
 * over the sky, a ship through the stars, a bubble rising.
 *
 *   drifting(cloud(), { across: sky() })
 *   drifting("<o>", { to: "left", lane: "top" })
 */
export function drifting(thing, o) {
    const p = optionsOf("drifting()", o, [...MOTION, "to", "across", "lane", "cols", "rows"]);
    const period = secondsOf("drifting()", p, 8);
    const to = wordOf("drifting's to", p.to, ["right", "left", "up", "down"], "right");
    const across = to === "left" || to === "right";
    const lane = wordOf("drifting's lane", p.lane, across ? ["top", "middle", "bottom"] : ["left", "middle", "right"], "middle");
    const src = pieceOf(thing, "drifting()");
    if (p.across !== undefined && (p.cols !== undefined || p.rows !== undefined))
        fail("drifting's cols and rows size an empty stage: with across, it drifts in that thing's size");
    const stage = p.across !== undefined
        ? pieceOf(p.across, "drifting's across")
        : // As wide or as tall as asked, the thing crossing it, even one longer than it (a ticker's words); room for it the other way.
            new Surface(Math.round(numberOf("drifting's cols", p.cols, across ? Math.max(64, src.meta.cols + 16) : src.meta.cols, 1, 320)), Math.round(numberOf("drifting's rows", p.rows, across ? src.meta.rows : Math.max(24, src.meta.rows + 8), 1, 120)));
    // It starts at the edge it leaves from, in its lane.
    const start = { right: "left", left: "right", down: "top", up: "bottom" }[to];
    const side = lane === "middle" ? "" : lane;
    const anchor = (across ? (side ? `${side}-${start}` : start) : side ? `${start}-${side}` : start);
    const moved = layer(stage, { src, anchor, move: { to, period } });
    return titled(moved, p.name ?? src.meta.name, p.note ?? `${p.name ?? src.meta.name}, drifting ${to}`);
}
const ENTRANCE = [...MOTION, "seconds", "hold", "ease"];
// An entrance's timing: seconds to move, seconds to hold, and its loop (none when it holds forever).
function timing(what, p, normal) {
    if (p.seconds !== undefined && p.period !== undefined)
        fail(`${what} takes seconds or period, which are the same, not both`);
    const move = secondsOf(what, { speed: p.speed, period: p.seconds ?? p.period }, normal);
    if (p.hold === "forever")
        return { move, hold: Infinity, loop: undefined };
    const hold = numberOf(`${what}'s hold`, p.hold, 2, 0, 60);
    return { move, hold, loop: move + hold };
}
/**
 * A thing growing from nothing to its size about its middle, in 0.6 seconds at normal speed, overshooting a little
 * and settling ("snappy"), then staying 2 seconds and growing again.
 *
 *   growIn(heart(), { ease: "springy" })
 */
export function growIn(thing, o) {
    const p = optionsOf("growIn()", o, ENTRANCE);
    const { move, loop } = timing("growIn()", p, 0.6);
    const curve = easeOf("growIn's ease", p.ease, "snappy");
    const src = pieceOf(thing, "growIn()");
    // room for an overshoot: snappy grows a tenth past its size, springy a little more
    const room = [Math.ceil(src.meta.cols * 0.1), Math.ceil(src.meta.rows * 0.1)];
    return effect(src, { ...(loop ? { period: loop } : { moves: true }), still: move, pad: room, ...named(src, p, "growing in") }, (t, s, g, ctx) => {
        const u = loop ? phaseAt(t, loop) * loop : t;
        drawScaled(s, g, ctx.x, ctx.y, curve(Math.min(1, u / move)));
    });
}
/**
 * A thing sliding in from an edge, `from` ("left", the default, "right", "top" or "bottom"), in 0.8 seconds at normal
 * speed, overshooting a little and settling, then staying 2 seconds and sliding in again. It enters its own frame, so
 * it slides in from nowhere: lay it over() a scene for a title coming on.
 *
 *   slideIn(banner("hello"), { from: "left", ease: "bouncy" })
 */
export function slideIn(thing, o) {
    const p = optionsOf("slideIn()", o, [...ENTRANCE, "from"]);
    const { move, loop } = timing("slideIn()", p, 0.8);
    const curve = easeOf("slideIn's ease", p.ease, "snappy");
    const from = wordOf("slideIn's from", p.from, ["left", "right", "top", "bottom"], "left");
    const src = pieceOf(thing, "slideIn()");
    return effect(src, { ...(loop ? { period: loop } : { moves: true }), still: move, ...named(src, p, `sliding in from the ${from}`) }, (t, s, g) => {
        const u = loop ? phaseAt(t, loop) * loop : t;
        const left = 1 - curve(Math.min(1, u / move));
        const [dx, dy] = { left: [-g.cols, 0], right: [g.cols, 0], top: [0, -g.rows], bottom: [0, g.rows] }[from];
        s.paste(g, Math.round(dx * left), Math.round(dy * left));
    });
}
/**
 * A thing staying 2 seconds, then sliding out to an edge, `to` ("right", the default, "left", "top" or "bottom"), in
 * 0.8 seconds at normal speed, gently ("smooth"), then gone for half a second and back.
 *
 *   slideOut("see you", { to: "bottom" })
 */
export function slideOut(thing, o) {
    const p = optionsOf("slideOut()", o, [...ENTRANCE, "to"]);
    if (p.hold === "forever")
        fail("slideOut's hold takes seconds: it slides out after them, so it can't stay forever");
    const { move, hold } = timing("slideOut()", p, 0.8);
    const curve = easeOf("slideOut's ease", p.ease, "smooth");
    const to = wordOf("slideOut's to", p.to, ["right", "left", "top", "bottom"], "right");
    const src = pieceOf(thing, "slideOut()");
    const loop = hold + move + 0.5;
    return effect(src, { period: loop, still: 0, ...named(src, p, `sliding out to the ${to}`) }, (t, s, g) => {
        const gone = curve(Math.min(1, Math.max(0, phaseAt(t, loop) * loop - hold) / move));
        const [dx, dy] = { left: [-g.cols, 0], right: [g.cols, 0], top: [0, -g.rows], bottom: [0, g.rows] }[to];
        s.paste(g, Math.round(dx * gone), Math.round(dy * gone));
    });
}
const WORLDS = {
    gas: { color: "#f59e0b", texture: "bands" },
    earth: { color: "#3b82f6", texture: "spots" },
    mars: { color: "#dc2626", texture: "spots" },
    ice: { color: "#7dd3fc", texture: "bands" },
};
/**
 * A planet turning on a tipped axis, once in 8 seconds at normal speed, with a moon going round twice as fast and a
 * ring if you like: two spheres and a torus in a scene(), so read it to make a world of your own.
 *
 *   planet({ type: "earth", moon: true })
 *   planet({ rings: true, speed: "slow" })
 */
export function planet(o) {
    const p = optionsOf("planet()", o, [...MOTION, "type", "moon", "rings", "color", "cols", "rows"]);
    const period = secondsOf("planet()", p, 8);
    const world = WORLDS[wordOf("planet's type", p.type, ["gas", "earth", "mars", "ice"], "gas")];
    const moon = boolOf("planet's moon", p.moon, false), rings = boolOf("planet's rings", p.rings, false);
    const tilt = [0, 0, 0.25];
    // A palette's name gives its strong colour; the scene makes the shades for paper and a dark page from one colour.
    const color = colorOf("planet's color", p.color)?.dark ?? world.color;
    const parts = [
        sphere({ radius: 1.5, rotate: tilt, spin: [0, TAU / period, 0], color, texture: world.texture }),
        ...(rings ? [torus({ radius: 2.4, tube: 0.12, rotate: [1.25, 0, 0.25], color: "#d6c7a1" })] : []),
        ...(moon ? [sphere({ radius: 0.3, color: "#d1d5db", at: orbit({ radius: rings ? 3.3 : 2.6, period: period / 2, tilt: 0.3 }) })] : []),
    ];
    const name = p.name ?? "planet";
    return scene({ name, note: p.note ?? `${name}, turning${moon ? ", a moon going round" : ""}`, cols: p.cols ?? 64, rows: p.rows ?? 24, period, ambient: 0.12, camera: { distance: 10 } }, parts);
}
