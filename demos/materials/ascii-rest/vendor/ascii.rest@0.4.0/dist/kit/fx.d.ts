import type { Options, Piece } from "../types.ts";
import { Surface, type Context, type KitPiece, type PaletteLike, type RampName, type Source } from "./core.ts";
/** What every effect takes besides its own options. */
export interface FxOptions {
    /** The new piece's name: the source's by default. */
    name?: string;
    /** One line, up to 72 characters, saying what you see: the name and the effect by default. */
    note?: string;
    /**
     * Options for the source, over its own defaults: `{ shine: 0 }` keeps a logo's own glint still. They become the new
     * piece's options too, so a player can still change them.
     */
    options?: Options;
}
/** How a dissolve or a fade runs each period: in then held, held then out, or in, held, out and gone. */
export type FxMode = "in" | "out" | "inout";
/** What an effect's drawing knows besides the time and the two grids. */
export interface FxContext extends Context {
    /** Where the source's top left sits in the new grid: the room its `pad` gives on the left and at the top, 0 and 0 by default. */
    x: number;
    y: number;
    /**
     * The source's frame at another moment, in the new piece's colours, for trails, echoes and time effects. It is one grid,
     * reused each call: copy what you need before calling again.
     */
    at(t: number): Surface;
}
/**
 * Draws an effect at t into `s`, the new piece's grid, empty at the start of each frame, from `src`, the source's frame
 * at t in the new piece's colours. Copy cells across with s.paste(src, ctx.x, ctx.y), or one at a time with
 * s.put(i, src.chars[j], src.colors[j]).
 */
export type FxDraw = (t: number, s: Surface, src: Surface, ctx: FxContext) => void;
export interface GlintOptions extends FxOptions {
    /** Seconds from one glint to the next, or "often" (2), "sometimes" (4, the default) or "rarely" (8). */
    every?: number | "often" | "sometimes" | "rarely";
    /**
     * Seconds a glint takes to cross the piece: 1.2, or longer across a wide piece, so the band moves at most 40 cells a
     * second and reads as a sweep rather than a flicker, up to 3 seconds and three quarters of `every`.
     */
    sweep?: number;
    /** How fast the band crosses, over its own sweep: "slow" (twice as long), "normal" or "fast" (half as long), or times as fast. */
    speed?: "slow" | "normal" | "fast" | number;
    /** Seconds before the first glint: 0.5. */
    first?: number;
    /** The band's bright core, in cells across: 3. A cell of softer edge runs along each side of it. */
    width?: number;
    /** Cells the band leans back for each row down, so it slants like a slash: 1. Negative leans it the other way, 0 stands it up. */
    slant?: number;
    /**
     * The core's character then the edge's, for every cell of ink the band crosses; one character is both. By default
     * it suits each cell, so the piece keeps its look: blocks turn to "█▓" on a dark page and "▒▓" on paper, as
     * banner()'s glint; other solid characters, 8, @ or letters such as h, turn to "/" in the core, as the logos' glint;
     * thin ones, dots, lines and box drawing, keep their shape and only brighten. null keeps every character and lights
     * only their colour, so in one ink it shows nothing.
     */
    chars?: string | null;
    /**
     * The band's colour as #rrggbb, or a palette's name such as "gold". By default, on a coloured piece, each cell's own colour lifted toward white (by 0.6
     * in the core and 0.3 at the edge), but for a block on paper, whose lighter shade is the glint, as banner()'s; a piece
     * in one ink then stays in one ink, the glint drawn by its characters.
     */
    color?: string;
}
/**
 * A light band that crosses the piece's ink now and then, slanting like a slash: the logos' and the banners' glint, on
 * anything. Between glints the piece is exactly its source.
 *
 *   export default glint(banner("hello", { effect: "still" }), { every: 3 });
 */
export declare function glint(src: Source, options?: GlintOptions): KitPiece;
export interface TypeInOptions extends FxOptions {
    /**
     * Characters a second: 40, or quicker for a big piece, so that more than 120 characters are all in within 3 seconds.
     * Or "slow" (half that), "normal" or "fast" (twice).
     */
    speed?: number | "slow" | "normal" | "fast";
    /** Seconds before the first character, the cursor blinking where it will start: 0. */
    start?: number;
    /**
     * The cursor's character: "▌", or none for order "random", where it would hop about. It sits on the next cell to
     * type, and once all is in it blinks after the last, in reading order, where there is room; text gets a column for
     * it. false for none.
     */
    cursor?: string | false;
    /** The order cells appear in: "reading", left to right a row at a time; "columns", top to bottom a column at a time; or "random". */
    order?: "reading" | "random" | "columns";
    /** Seconds it holds once all in, before it starts again, so it loops. By default it types once and stays. */
    hold?: number;
    /** The order for "random": 1. Another seed, another order. */
    seed?: number;
}
/**
 * The piece typed in, a character at a time, behind a cursor: text, a banner, a logo, or a moving piece, whose frames
 * show through the cells typed so far. Cells with nothing in them take no time.
 *
 *   export default typeIn("$ npx ascii.rest add donut", { hold: 2 });
 */
export declare function typeIn(src: Source, options?: TypeInOptions): KitPiece;
export interface DissolveOptions extends FxOptions {
    /** Seconds a cycle takes: 6. */
    period?: number;
    /**
     * "inout" (the default): in over the first 30% of each period, held, out from 60% to 90%, then gone. "in": in over the
     * first 40%, then held. "out": held, then out over the last 40%.
     */
    mode?: FxMode;
    /** How big the patches that come and go together are, in cells across: 7. 1 is a fine speckle, cell by cell. */
    blob?: number;
    /**
     * Characters a cell shows as the front crosses it, from just appearing to nearly whole. By default "░▒" for a block,
     * so a banner dissolves in blocks, and ".:" for anything else. Characters of your own are for every cell; "" for none.
     */
    edge?: string;
    /** 1. Another seed, another pattern. */
    seed?: number;
}
/**
 * The piece appearing and vanishing through noise: each cell of its ink comes and goes on its own threshold, blobs of
 * them together, with a sparse edge where the front is crossing. Held whole, it is exactly its source.
 *
 *   export default dissolve(donut);
 */
export declare function dissolve(src: Source, options?: DissolveOptions): KitPiece;
export interface FadeOptions extends FxOptions {
    /** Seconds a cycle takes: 6. */
    period?: number;
    /** "inout" (the default), "in" or "out", as dissolve's. */
    mode?: FxMode;
    /**
     * The ramp each character steps down toward a space. "auto" (the default): a block steps down the blocks, " ░▒▓█",
     * so a banner stays in blocks; a plain ascii character down "standard", " .:-=+*#%@"; and anything else, box drawing,
     * braille or dots, comes and goes whole in a dither, so a line thins out rather than turning to dots. Or a ramp by
     * name, or one of your own starting with a space, for every character. A character on its ramp starts from its own
     * place, any other from the place its density gives it, and on that top step it is still itself, so the fade meets
     * the whole piece without a jump.
     */
    ramp?: RampName | "auto" | (string & {});
}
/**
 * The piece fading toward nothing and back: every character steps down a ramp to a space, dithered so the steps
 * blend. Held whole, it is exactly its source.
 *
 *   export default fade(banner("hello", { effect: "still" }), { mode: "in" });
 */
export declare function fade(src: Source, options?: FadeOptions): KitPiece;
export interface ScanOptions extends FxOptions {
    /** Seconds a cycle takes: 3. */
    period?: number;
    /** Which way the line moves: "down", "up", "right" or "left". */
    direction?: "down" | "up" | "right" | "left";
    /** The line's character: "─" across the piece for "down" and "up", "│" for "right" and "left". */
    char?: string;
    /** The line's colour as #rrggbb or a palette's name: by default each cell's own colour where it crosses ink, and the piece's ink elsewhere. */
    color?: string;
    /**
     * false (the default): the piece shows whole and the line crosses it, the whole period, off one edge and on at the
     * other. true: the piece shows only where the line has been, so the line reveals it over the first 60% of each
     * period, and it holds whole for the rest.
     */
    reveal?: boolean;
}
/**
 * A line sweeping across the piece, as a screen scans: over it, or revealing it.
 *
 *   export default scan(rust, { reveal: true });
 */
export declare function scan(src: Source, options?: ScanOptions): KitPiece;
export interface GlitchOptions extends FxOptions {
    /** Seconds from one burst to the next, or "often" (1.25), "sometimes" (2.5, the default) or "rarely" (5). */
    every?: number | "often" | "sometimes" | "rarely";
    /** Seconds a burst lasts: 0.35. Within it the damage changes about 16 times a second. */
    length?: number;
    /** Seconds before the first burst: 0.5. */
    first?: number;
    /**
     * How hard a burst hits: "subtle" (0.25), "medium" (0.5, the default) or "strong" (0.85), or 0 to 1. More bands of
     * rows slide, further, and more cells turn to junk.
     */
    amount?: number | "subtle" | "medium" | "strong";
    /** The junk cells turn to: "#%&@$/\|<>". */
    chars?: string;
    /** 1. Another seed, other bursts. Every burst is worked out from t and the seed, so any frame can be drawn first. */
    seed?: number;
}
/**
 * The piece breaking up now and then: bands of rows slide sideways and cells turn to junk, for a moment, then it is
 * whole again. Between bursts it is exactly its source.
 *
 *   export default glitch(rust);
 */
export declare function glitch(src: Source, options?: GlitchOptions): KitPiece;
export interface WaveOptions extends FxOptions {
    /** Cells each row sways each way: 2 for rows, 1 for columns. The piece grows by twice this so nothing is cut off. */
    amplitude?: number;
    /** Or how much it sways in words, over its amplitude: "subtle" (half), "medium" or "strong" (twice). */
    amount?: "subtle" | "medium" | "strong";
    /** Rows (or columns) from one crest to the next: 12 rows, so a banner's six bend rather than tear, or 16 columns. */
    wavelength?: number;
    /** Seconds for a crest to travel one wavelength: 2. */
    period?: number;
    /** Or how fast in words, over its period: "slow" (twice as long), "normal" or "fast" (half as long). */
    speed?: "slow" | "normal" | "fast";
    /** "rows" (the default): rows sway from side to side. "columns": columns bob up and down. */
    axis?: "rows" | "columns";
}
/**
 * The piece swaying as a wave runs down it: each row slides sideways on a sine, or each column bobs. It grows by twice
 * the amplitude, rows sliding into the room, so nothing is cut off.
 *
 *   export default wave(banner("hello", { effect: "still" }));
 */
export declare function wave(src: Source, options?: WaveOptions): KitPiece;
/** Twelve hues round the colour wheel: deeper for paper, lighter for a dark page. rainbow()'s colours by default. */
export declare const hues: {
    readonly light: string[];
    readonly dark: string[];
};
export interface RainbowOptions extends FxOptions {
    /** The colours it cycles through, as #rrggbb, { light, dark } or a palette's name such as "candy": `hues`, twelve round the wheel, deeper on paper. */
    colors?: PaletteLike;
    /** Colours in the cycle, the stops faded into each other and back to the first: 12. */
    steps?: number;
    /** Seconds for a colour to come round again: 3. */
    period?: number;
    /**
     * Times the whole cycle of colours fits across the piece (or down it, or along its diagonal): 1 for rainbow, every
     * colour once from edge to edge, at any size; 2 for narrower bands. 0 for hueCycle: all one colour at a time.
     */
    cycles?: number;
    /** Which way the colours run: "x" across, "y" down, or "diagonal". */
    direction?: "x" | "y" | "diagonal";
}
/**
 * The piece's ink in bands of colour that run across it, round and round a cycle of hues. In one ink there is no colour
 * to show, and it is the source as it is.
 *
 *   export default rainbow(banner("hello", { effect: "still" }));
 */
export declare function rainbow(src: Source, options?: RainbowOptions): KitPiece;
/** rainbow() with every cell the same colour at a time, the whole piece cycling through the hues: its cycles are 0. */
export declare const hueCycle: typeof rainbow;
export interface ShakeOptions extends FxOptions {
    /** Cells it jolts by, each way: "subtle" (1, the default), "medium" (2) or "strong" (3), or cells. The piece grows by this on every side so nothing is cut off. */
    amount?: number | "subtle" | "medium" | "strong";
    /** Seconds from one shake to the next, or "often" (1), "sometimes" (2, the default) or "rarely" (4). */
    every?: number | "often" | "sometimes" | "rarely";
    /** Seconds a shake lasts: 0.3. It jolts to a new place 20 times a second. */
    length?: number;
    /** Seconds before the first shake: 0.5. */
    first?: number;
    /** 1. Another seed, other jolts. */
    seed?: number;
}
/**
 * The piece shaking now and then, jolting a cell or so each way for a moment. Between shakes it sits still in the
 * middle of its room.
 *
 *   export default shake(banner("boom", { effect: "still" }), { amount: 2 });
 */
export declare function shake(src: Source, options?: ShakeOptions): KitPiece;
/**
 * Line styles for an outline, as banner()'s shadows: the 16 characters of a cell by the edges that meet in it, up 1,
 * down 2, left 4, right 8.
 */
export declare const outlines: {
    readonly single: " │││─┘┐┤─└┌├─┴┬┼";
    readonly double: " ║║║═╝╗╣═╚╔╠═╩╦╬";
    readonly rounded: " │││─╯╮┤─╰╭├─┴┬┼";
    readonly heavy: " ┃┃┃━┛┓┫━┗┏┣━┻┳╋";
    readonly ascii: " |||-+++-+++-+++";
};
export interface OutlineOptions extends FxOptions {
    /** The line: "single", "double", "rounded", "heavy", "ascii", or 16 characters of your own, as `outlines` lays them out. */
    style?: keyof typeof outlines | (string & {});
    /** Its colour as #rrggbb or a palette's name: by default, on a coloured piece, the colour of the ink it runs beside. */
    color?: string;
    /**
     * Empty cells in a row, between ink on both sides, that count as inside rather than outside: 1, so the line goes
     * round words, not between them. 0 traces every gap.
     */
    gap?: number;
}
/**
 * A line traced round the outside of the piece's ink, in box drawing, joined at every corner. Holes inside the ink are
 * left alone. The piece grows by a cell on every side for it.
 *
 *   export default outline("ascii.rest", { style: "rounded" });
 */
export declare function outline(src: Source, options?: OutlineOptions): KitPiece;
export interface ShadowOptions extends FxOptions {
    /** Cells the shadow falls to the right: 1. Negative falls left. */
    dx?: number;
    /** Rows it falls down: 1. Negative falls up. */
    dy?: number;
    /** Its character: "░". */
    char?: string;
    /** Its colour as #rrggbb or a palette's name: by default, on a coloured piece, a muted grey for the page's theme. */
    color?: string;
    /**
     * true (the default): the piece casts its shadow as one solid shape, so it falls only outside it, never into the
     * spaces enclosed inside, in a logo or a box. false: a shadow under every cell of ink, showing through every space.
     */
    solid?: boolean;
}
/**
 * A drop shadow: the piece's shape, moved a cell right and down, drawn behind it in a light shade. The piece grows by
 * the shadow's reach.
 *
 *   export default shadow(banner("hi", { effect: "still", shadow: "none" }), { char: "▒" });
 */
export declare function shadow(src: Source, options?: ShadowOptions): KitPiece;
/** What effect() takes besides the source and the drawing: how the effect moves, the room it draws in and its colours. */
export interface EffectSpec extends FxOptions {
    /**
     * Seconds the effect repeats in, if it moves by itself: the piece's loop is worked out from it and the source's, as
     * every effect's is. Without one it moves only as its source does, as outline() and shadow() do.
     */
    period?: number;
    /** True when it moves by itself, with or without a period, as a typing in that never repeats: true when there is a period. */
    moves?: boolean;
    /** The moment to hold still, for a reader who prefers reduced motion: the source's by default. */
    still?: number;
    /**
     * Room round the source to draw in, in whole cells: one number for every side, [columns, rows] for each side, or
     * { top, right, bottom, left }: 0. The source's top left is then at ctx.x, ctx.y.
     */
    pad?: number | readonly [number, number] | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    /**
     * Colours the effect draws in besides the source's, as #rrggbb: draw in them with s.set(x, y, ch, "#rrggbb"). Past the
     * 64 a piece can have, a colour is drawn in the nearest one there is.
     */
    colors?: readonly string[];
}
/** An effect's drawing: a function, or { setup } returning one, which runs once a play and is the place for buffers. */
export type EffectDraw = FxDraw | {
    setup: () => FxDraw;
};
/**
 * An effect of your own, on any source, as a piece that plays wherever one does. The kit plays the source and hands
 * your drawing each frame of it as a grid in the new piece's colours, with an empty grid to draw into; it works out the
 * size, the colours, the loop and the moment held for reduced motion, as it does for its own effects. Your drawing
 * should depend only on t, so any frame can be drawn first; ctx.at(t) reads the source at any other moment.
 *
 *   // The piece and its reflection, upside down in a light shade.
 *   export default effect(banner("hi"), { pad: { bottom: 6 } }, (t, s, src) => {
 *     s.paste(src, 0, 0);
 *     for (let y = 0; y < src.rows; y++)
 *       for (let x = 0; x < src.cols; x++)
 *         if (src.chars[y * src.cols + x]) s.put((2 * src.rows - 1 - y) * s.cols + x, 0x2591, src.colors[y * src.cols + x]);
 *   });
 */
export declare function effect(src: Source, draw: EffectDraw): KitPiece;
export declare function effect(src: Source, spec: EffectSpec, draw: EffectDraw): KitPiece;
/**
 * Effects one after another, each taking the piece the last one made: chain(donut, glint, wave). An effect with
 * options goes in as a function: chain(donut, (p) => glint(p, { every: 2 }), wave). Text and grids are made pieces
 * first.
 */
export declare function chain(src: Source, ...effects: ((p: Piece) => Piece)[]): Piece;
