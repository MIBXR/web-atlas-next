import type { Piece } from "../../types.ts";
import { type KitPiece, type Source } from "../core.ts";
import { type Area, type Part } from "../materials.ts";
import { type Shape3d } from "../shapes3d.ts";
export { easings, type Amount, type Density, type Easing, type Heading, type Scale, type Speed, type Toward } from "./checks.ts";
/**
 * Anything the kit draws: a piece (a library piece, a banner(), anything the kit made), a block of text, a grid, a
 * 3D shape such as torus() or a list of them, an area such as heart() or cup(), or parts made with shape() and emit().
 */
export type Thing = Source | Shape3d | readonly Shape3d[] | Area | Part | readonly Part[];
/**
 * Any thing as a piece, to play, move or lay over another. A piece is itself; text and grids are stills of them; 3D
 * shapes are a scene() of them; an area is drawn with shape() in its own material (glass for a cup, fire for a flame)
 * and cut to the box it fills, a cell of room round it; parts are a picture() of them, 64 by 24. A piece file imported
 * whole, `import * as donut`, is its default export. Throws, saying what to pass, for anything else.
 *
 *   pieceOf(heart())                 // a heart, just its size
 *   pieceOf(torus({ spin: 1 }))      // a spinning donut, as a piece
 */
export declare function pieceOf(thing: Thing, what?: string): KitPiece;
/**
 * The loop of things played together, by the kit's time rule: the least common multiple of their periods when it is a
 * minute or less, else none. A still piece (fps 0) repeats on any period, and a piece that moves with no loop of its
 * own never repeats, so it gives none. Pass pieces and periods in seconds alike.
 */
export declare function loopFor(parts: readonly (Piece | number)[]): number | undefined;
/**
 * A piece with its loop set to `loop` seconds, or left with none: for a layer() moved by a function of t, which knows
 * no period of its own. The piece plays as it did; only svg() and the players read the loop. A motion svg() would read
 * in its place (an effect's or a banner's) is left behind, so the loop is the one it plays.
 */
export declare function withLoop<P extends Piece>(p: P, loop: number | undefined): P & KitPiece;
