import { Surface, asPiece, chained, checkMeta, fail } from "../core.js";
import { crop } from "../compose.js";
import { picture, shape } from "../materials.js";
import { scene } from "../shapes3d.js";
import { lcm } from "../math.js";
import { is3d, isArea, isPart, isPiece, show } from "./checks.js";
export { easings } from "./checks.js";
const isObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
// The room an area is drawn in before it is cut to its size: a picture's default, so a shape's "medium" is its usual size.
const ROOM = { cols: 64, rows: 24 };
/**
 * Any thing as a piece, to play, move or lay over another. A piece is itself; text and grids are stills of them; 3D
 * shapes are a scene() of them; an area is drawn with shape() in its own material (glass for a cup, fire for a flame)
 * and cut to the box it fills, a cell of room round it; parts are a picture() of them, 64 by 24. A piece file imported
 * whole, `import * as donut`, is its default export. Throws, saying what to pass, for anything else.
 *
 *   pieceOf(heart())                 // a heart, just its size
 *   pieceOf(torus({ spin: 1 }))      // a spinning donut, as a piece
 */
export function pieceOf(thing, what = "this") {
    // A module imported whole, as compose takes one.
    if (isObject(thing) && !isPiece(thing) && isPiece(thing.default))
        thing = thing.default;
    if (typeof thing === "function")
        fail(`${what} takes a thing to show, not ${show(thing)}`);
    // Text is named by its first line, as compose names it.
    if (typeof thing === "string")
        return chained(asPiece(thing, thing.split("\n").map((l) => l.trim()).find(Boolean)?.slice(0, 40) ?? "text"));
    // A library piece chains too, as a copy with the kit's methods.
    if (thing instanceof Surface || isPiece(thing))
        return chained(asPiece(thing));
    if (isPart(thing))
        return picture([thing]);
    if (Array.isArray(thing) && thing.length && thing.every(isPart))
        return picture(thing);
    if (isArea(thing)) {
        // Drawn in a picture's room, then cut to the box it fills with a cell round it, so it moves as itself.
        const box = thing.place(ROOM.cols, ROOM.rows);
        const x0 = Math.max(0, Math.floor(box.x0) - 1), y0 = Math.max(0, Math.floor(box.y0) - 1);
        const x1 = Math.min(ROOM.cols, Math.ceil(box.x1) + 1), y1 = Math.min(ROOM.rows, Math.ceil(box.y1) + 1);
        const drawn = picture([shape(thing)], { name: "shape", ...ROOM });
        return x1 > x0 && y1 > y0 ? crop(drawn, { x: x0, y: y0, cols: x1 - x0, rows: y1 - y0 }) : drawn;
    }
    // Last, since areas and parts have a kind too.
    if (is3d(thing))
        return scene({ name: "shapes" }, thing);
    return fail(`${what} takes a piece, text, a grid, a 3D shape such as torus(), an area such as heart(), or parts, not ${show(thing)}`);
}
/**
 * The loop of things played together, by the kit's time rule: the least common multiple of their periods when it is a
 * minute or less, else none. A still piece (fps 0) repeats on any period, and a piece that moves with no loop of its
 * own never repeats, so it gives none. Pass pieces and periods in seconds alike.
 */
export function loopFor(parts) {
    const periods = [];
    for (const p of parts) {
        if (typeof p === "number")
            periods.push(p);
        else if (p.meta.fps) {
            if (p.meta.loop === undefined)
                return undefined;
            periods.push(p.meta.loop);
        }
    }
    return periods.length ? lcm(periods) : undefined;
}
/**
 * A piece with its loop set to `loop` seconds, or left with none: for a layer() moved by a function of t, which knows
 * no period of its own. The piece plays as it did; only svg() and the players read the loop. A motion svg() would read
 * in its place (an effect's or a banner's) is left behind, so the loop is the one it plays.
 */
export function withLoop(p, loop) {
    const { loop: _, ...meta } = p.meta;
    const { motion: __, ...rest } = p;
    return chained({ ...rest, meta: checkMeta(loop === undefined ? meta : { ...meta, loop }) });
}
