import type { Category, Options } from "../types.ts";
import { type KitPiece, type Region, type Source, type Themed } from "./core.ts";
/** Where a layer sits on the piece under it, before its margin, x and y move it; where a part sits in a grid's cell. */
export type Anchor = "top-left" | "top" | "top-right" | "left" | "center" | "right" | "bottom-left" | "bottom" | "bottom-right";
/**
 * A source with its own options, its own clock and, if you like, its own colour. Every function here that takes a
 * source, or a list of them, takes one of these in its place: `row([barChart, { src: gauge, color: "#3fb950" }])`.
 */
export interface Clip {
    /** A piece, a block of text or a Surface. */
    src: Source;
    /** Its option overrides, as its own default function takes them: none. */
    options?: Options;
    /**
     * Seconds added to its time, so it starts further in: 0. Negative holds its first frame until its time reaches 0, so
     * it no longer repeats exactly and gives the whole no loop.
     */
    offset?: number;
    /** How fast its time runs: 1; 2 plays it twice as fast. */
    speed?: number;
    /**
     * One colour for all of it, as #rrggbb, one for each theme as { light, dark }, or a palette's name such as "ocean"
     * (its strong colour on each page): none, so it keeps its own. Text or a
     * piece in one ink is drawn in it; a coloured piece is played in one ink and drawn in it too. Like every colour, it
     * shows only when the piece is drawn in colour (env.color).
     */
    color?: Themed<string>;
}
/** A side a layer travels toward with `move`. */
export type Side = "left" | "right" | "up" | "down";
/** A part of layer(): where it sits on the first part, how it moves, and what of it lets the parts under it show. */
export interface Layer extends Clip {
    /** The point of the first part it sits on, its own same point laid there: "top-left" (over() centres). */
    anchor?: Anchor;
    /**
     * Cells kept between it and the edges its anchor puts it against: 0. { anchor: "bottom-right", margin: 1 } sits one
     * cell in from the bottom and one from the right; a centred side has no edge, so it stays centred that way.
     */
    margin?: number;
    /**
     * Travel across the first part toward a side, "left", "right", "up" or "down": out past that edge, back in from the
     * other, round and round. It starts, at t = 0, where its anchor puts it, and the anchor still places it the other way,
     * so { anchor: "bottom", move: "right" } runs along the bottom. A crossing takes about 8 seconds: exactly 8, or, when
     * the parts repeat on a loop of 16 seconds or less, the whole number of their loops nearest 8, so the crossing and the
     * parts come round together. { to: "right", period: 4 } sets the seconds yourself. None by default.
     */
    move?: Side | {
        to: Side;
        period?: number;
    };
    /** Columns right of where its anchor (and margin) put it, or a function of the time t, in seconds: 0. */
    x?: number | ((t: number) => number);
    /** Rows down from there, or a function of t: 0. */
    y?: number | ((t: number) => number);
    /**
     * What of it is see-through: " ", the default, its blank cells; another character, its blank cells and that
     * character; null, nothing, so its whole box covers what is under it, as a card does.
     */
    mask?: string | null;
    /**
     * Cells cleared round its ink, so it reads over a busy picture: 1 clears the cells next to every character it
     * draws, as a knockout does, and 0 none. By default 1 for words and banners laid over a part that moves, a title
     * on a starfield, and 0 for anything else.
     */
    halo?: number;
}
/**
 * Pieces stacked, the first at the bottom, in the first one's size: each later one is laid over those before it, its
 * blank cells letting them show (see Layer's mask), at its anchor, margin and x, y on the first, travelling if it has a
 * move. Each keeps its own player, options and colours. A part made for character cells laid on a square grid (a
 * scene's, cell 1) has its rows doubled so it keeps its shape, and the other way round halved. The whole takes the ground
 * its parts agree on and the highest frame rate of the parts (24 at least when a layer moves). Its loop is the least common
 * multiple of the parts' and the moves' periods, within 60 seconds, a part that never repeats counting as repeating with
 * the moves; none when a layer moves by a function of t (wrap it in repeat()). For an empty stage of your own size, the
 * first part can be a blank grid: `new Surface(80, 24)`.
 *
 *   layer(starfield, { src: banner("hi"), anchor: "center" }, { src: "v1.0", anchor: "bottom-right", margin: 1 })
 *   layer(new Surface(80, 24), { src: donut, anchor: "left" }, { src: "<o>", color: "#fbbf24", move: "right" })
 */
export declare function layer(base: Source | Layer, ...over: (Source | Layer)[]): KitPiece;
/**
 * One piece over another, in the bottom one's size: a banner over a scene, a logo on a starfield. Centred by default;
 * `o` is a Layer's fields for the top piece, so { anchor: "top", margin: 2 } hangs it two rows below the top edge and
 * { anchor: "bottom", move: "left" } runs it along the bottom like a ticker.
 *
 *   over(banner("ascii.rest"), oceanSunset, { anchor: "top", margin: 12 })
 */
export declare function over(top: Source | Layer, bottom: Source | Layer, o?: Omit<Layer, "src"> & {
    name?: string;
    note?: string;
}): KitPiece;
/** A border round a piece, or round each cell of a grid. */
export interface BorderOptions {
    /**
     * Its lines: "rounded" by default, "single", "double", "heavy", "ascii", or 6 characters of your own: top left, top
     * right, bottom left, bottom right, across, down.
     */
    style?: "single" | "double" | "rounded" | "heavy" | "ascii" | (string & {});
    /**
     * Words on its top edge: none. true gives the piece's name, or a block of text's own words; a long title is cut to
     * fit, ending "…".
     */
    title?: string | boolean;
    /**
     * Its colour and its title's, as #rrggbb, one for each theme, or a palette's name: the ink by default. A colour makes a piece in one ink
     * a coloured one, its own text then in INK.
     */
    color?: Themed<string>;
    /** Blank cells between the border and the piece: a number for every side, or [rows, columns]: [0, 1]. */
    pad?: number | readonly [number, number];
}
/**
 * A piece in a box: lines round it, `pad` blank cells inside them, and a title on the top edge if you like. It takes the
 * piece's options, as the piece does.
 *
 *   border(gauge, { title: "load", color: "#8b949e" })
 */
export declare function border(src: Source | Clip, o?: BorderOptions): KitPiece;
/** How row() lays out its parts. */
export interface RowOptions {
    /** Blank columns between one part and the next: 2. */
    gap?: number;
    /** Where a shorter part sits in the row's height, the tallest part's: "top", "middle" or "bottom": "middle". */
    align?: "top" | "middle" | "bottom";
    /**
     * Seconds it plays round on, its parts' time wrapping at it as repeat() does: by default the least common multiple of
     * its parts' loops, none when they meet only past a minute. Give one to make such a row loop.
     */
    loop?: number;
    /** Its name: its parts' names by default ("a and b"). */
    name?: string;
    /** One line, up to 72 characters, saying what you see: its name by default. */
    note?: string;
}
/**
 * Pieces side by side, left to right, `gap` columns apart, each aligned in the row's height. Each keeps its own player,
 * options and colours.
 *
 *   row([rust, go, python], { gap: 4 })
 */
export declare function row(parts: readonly (Source | Clip)[], o?: RowOptions): KitPiece;
/** How column() lays out its parts. */
export interface ColumnOptions {
    /** Blank rows between one part and the next: 1. */
    gap?: number;
    /** Where a narrower part sits in the column's width, the widest part's: "left", "center" or "right": "center". */
    align?: "left" | "center" | "right";
    /** Seconds it plays round on, as row()'s loop: its parts' loops together by default. */
    loop?: number;
    /** Its name: its parts' names by default. */
    name?: string;
    /** One line, up to 72 characters, saying what you see: its name by default. */
    note?: string;
}
/**
 * Pieces one above another, top to bottom, `gap` rows apart, each aligned in the column's width. Each keeps its own
 * player, options and colours.
 *
 *   column([banner("status"), uptimeBar])
 */
export declare function column(parts: readonly (Source | Clip)[], o?: ColumnOptions): KitPiece;
/** How grid() lays out its parts. */
export interface GridOptions {
    /**
     * Parts a row, filled left to right and then down: as square as the parts allow, 2 for 3 or 4 of them, 3 for 5 to 9.
     * More than there are parts gives one row.
     */
    columns?: number;
    /** Room between cells: a number for columns and rows alike, or [columns, rows]: [2, 1]. */
    gap?: number | readonly [number, number];
    /** Where a part sits in its cell, which is as wide as its column's widest part and as tall as its row's tallest: "center". */
    align?: Anchor;
    /**
     * A border round every cell, each the size of its cell, so the boxes line up in rows and columns: none. true for the
     * default border; `{ title: true }` puts each part's name on its box. A part that draws a frame of its own, a kit
     * gauge(), panel(), card() or clockFace(), gets none: it fills its cell's box instead.
     */
    border?: boolean | BorderOptions;
    /** Seconds it plays round on, as row()'s loop: its parts' loops together by default. */
    loop?: number;
    /** Its name: its parts' names by default. */
    name?: string;
    /** One line, up to 72 characters, saying what you see: its name by default. */
    note?: string;
}
/**
 * Pieces in a grid of `columns` a row: a dashboard. Cells line up, each column as wide as its widest part and each row
 * as tall as its tallest, `gap` apart, with a border round each if you like.
 *
 *   grid([lib.barChart, lib.gauge, lib.sparkline, lib.heartbeat], { border: { title: true } })   // two a row
 *   grid([gauge({ label: "cpu" }), sparkline({ label: "net" }), clockFace()], { columns: 3, name: "dashboard" })
 */
export declare function grid(parts: readonly (Source | Clip)[], o?: GridOptions): KitPiece;
/**
 * A part of a piece: the cells of `region`, columns from x and rows from y, cut to the piece. Throws when the region
 * misses the piece.
 *
 *   crop(rust, { x: 16, y: 0, cols: 32, rows: 16 })   // the top of the cog
 */
export declare function crop(src: Source | Clip, region: Region): KitPiece;
/**
 * Blank cells round a piece: a number for every side, [rows, columns] (rows above and below, columns left and right),
 * or { top, right, bottom, left }, whole numbers. On a piece with a ground they are its ground.
 *
 *   pad(donut, [1, 4])
 */
export declare function pad(src: Source | Clip, n: number | readonly [number, number] | {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}): KitPiece;
/**
 * A piece made bigger by whole numbers, each cell repeated `factor` times across and down (the nearest cell, no
 * smoothing), or [across, down]. Block art scales best: a "/" scaled is "//" over "//", not a longer slash.
 *
 *   scale(banner("hi", { pixel: 1 }), 3)
 */
export declare function scale(src: Source | Clip, factor: number | readonly [number, number]): KitPiece;
/**
 * A piece mirrored: "x" left to right, "y" upside down, "both" turned half round. Characters with a mirror image turn
 * into it, so / becomes \, ( becomes ), ┌ becomes ┐ or └, ▀ becomes ▄, and braille's dots move; the rest stay as they
 * are, so words read backwards.
 *
 *   row([rust, flip(rust, "x")])
 */
export declare function flip(src: Source | Clip, axis: "x" | "y" | "both"): KitPiece;
/** A step of a sequence: a part, and how long it lasts. */
export interface Step extends Clip {
    /** Seconds it lasts, its transition out included: the sequence's `seconds`. */
    seconds?: number;
}
/** How sequence() plays its steps and turns one into the next. */
export interface SequenceOptions {
    /** Seconds each step lasts, unless it says: 4. */
    seconds?: number;
    /**
     * How one step turns into the next: "dissolve" (the default), patches of the next showing through; "fade", the one
     * thinning to nothing down a ramp of characters and the next thickening up it; "wipe", a band sweeping across; or
     * "cut".
     */
    transition?: "cut" | "dissolve" | "fade" | "wipe";
    /** Seconds a transition takes, at the end of the step it leaves: 0.8. No step may be shorter. */
    overlap?: number;
    /** true, the default: the last step turns into the first and it all repeats. false: the last stays, still playing. */
    loop?: boolean;
    /** The dissolve's pattern: 1. */
    seed?: number;
    /** Its name: its steps' names by default ("a, then b"). */
    name?: string;
    /** One line, up to 72 characters, saying what you see: its name by default. */
    note?: string;
}
/**
 * Pieces one after another, `seconds` each, each turning into the next with a transition at the end of its time, and
 * by default round again. The whole is the size of the largest step, each centred in it. Each step's time starts when
 * it first shows, so an animated one runs on through its transition; the steps' colours are merged. The loop is the
 * steps' seconds added up.
 *
 *   sequence([rust, go, python], { seconds: 3 })                 // logos dissolving into each other
 *   sequence([{ src: banner("hello"), seconds: 2 }, donut], { transition: "wipe" })
 */
export declare function sequence(steps: readonly (Source | Step)[], o?: SequenceOptions): KitPiece;
/**
 * A piece played `factor` times as fast: 2 is twice as fast, 0.5 half. Its loop and still moment scale with it, a
 * logo's glint period too; a loop slowed past 60 seconds is dropped, by the kit's time rule, so svg() plays 4 seconds.
 *
 *   speed(donut, 0.5)
 */
export declare function speed(src: Source | Clip, factor: number): KitPiece;
/**
 * A piece that waits `seconds` on its first frame before it plays. It no longer repeats exactly, so it has no loop; one
 * that plays once, a typed banner, still plays once, the wait first, so its SVG waits, types and holds.
 *
 *   delay(banner("hi", { effect: "type" }), 1)
 */
export declare function delay(src: Source | Clip, seconds: number): KitPiece;
/**
 * A piece's first `seconds` over and over, which becomes its loop: a loop for any piece, and the way to give one to a
 * layer that moves by a function.
 *
 *   repeat(starfield, 6)
 */
export declare function repeat(src: Source | Clip, seconds: number): KitPiece;
/**
 * A still of a piece: its frame at `at` seconds, held.
 *
 *   freeze(oceanSunset, 12)
 */
export declare function freeze(src: Source | Clip, at: number): KitPiece;
/**
 * A piece under another name, and another note and category if you like: what screen readers, titles and svg() call
 * it. A whole made here is otherwise named from its parts ("hello over ocean sunset"). Everything else is the piece's
 * own, a banner's motion included.
 *
 *   named(over(banner("hello"), starfield), "hello", { note: "hello among the stars" })
 */
export declare function named(src: Source | Clip, name: string, o?: {
    note?: string;
    category?: Category;
}): KitPiece;
