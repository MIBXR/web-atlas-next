import type { Options } from "../types.ts";
import { type Color, type KitPiece, type MakerSpec, type PaletteLike, type RampName, type Region, type Surface } from "./core.ts";
/**
 * Where a cell is, besides x and y, for a field's function, and two things the function may set for the cell. One
 * object is reused for every cell of a frame, so read what you need from it and keep nothing of it.
 */
export interface FieldCell<O extends Options = Options> {
    /** The cell's column in the field's region, from 0 at its left. */
    col: number;
    /** The cell's row in the field's region, from 0 at its top. */
    row: number;
    /** 0 to 1 across the region, at the cell's centre: 0.5 is the middle. */
    u: number;
    /** 0 to 1 down the region, at the cell's centre: 0.5 is the middle. */
    v: number;
    /** The distance from the region's centre, in the units of x and y: Math.hypot(x, y). */
    r: number;
    /** The angle from the region's centre, Math.atan2(y, x): 0 points right and TAU / 4 points down, -PI to PI. */
    a: number;
    /** The region's width in cells. */
    cols: number;
    /** The region's height in cells. */
    rows: number;
    /** The region's width in the units of x: x runs from -width / 2 at its left edge to width / 2 at its right. */
    width: number;
    /** The region's height in the units of y: y runs from -height / 2 at its top edge to height / 2 at its bottom. */
    height: number;
    /**
     * How far through `period` the frame is, 0 up to 1, the same for every cell: Math.sin(x * 6 - TAU * at.phase) moves
     * and repeats exactly with the field, so the loop never needs its length written twice. 0 without a period.
     */
    phase: number;
    /** The piece's options, for field(): its defaults with the caller's on top. drawField() gives {}: your drawing has ctx.options. */
    options: O;
    /**
     * Set it inside your function to draw this cell's character yourself instead of the ramp's: one character, " " for
     * a blank that covers what is under it, "" for nothing. The value you return still picks the colour, and null still
     * draws nothing. Read back as undefined at the next cell.
     */
    char?: string;
    /**
     * Set it inside your function to colour this cell yourself: an index into the piece's colours or #rrggbb, found in
     * them, the nearest when it is not one of them. It needs colours to pick from, `palette` or `colors` in field()'s spec
     * or the surface's palette for drawField(), and is not shown in one ink. Read back as undefined at the next cell.
     */
    color?: Color;
}
/**
 * A field: what the cell at x, y is at t seconds. x and y are centred on the region, 0, 0 in its middle, y down. With
 * `aspect` (the default) they share one unit, the shorter side running -1 to 1, so a circle comes out round on the tall
 * cells; without it each axis runs -1 to 1. It returns one of:
 *
 * - a number, the brightness: 0 (no light) to 1 (the most), or from `range`, a value past either end counting as that
 *   end. Light shows as dense characters on a dark page; a light page turns the ramp round (`invert`), so there bright
 *   is little ink and 0 is the densest.
 * - true for solid ink, the ramp's densest character on any page, and false for nothing: a shape, such as
 *   `(x, y, t, at) => at.r < 0.8`, a disc on both pages.
 * - null, or NaN, where there is nothing, such as the sky over a sea or the corners round a ball: the cell is not drawn,
 *   on any page, and what is under it shows.
 */
export type FieldFn<O extends Options = Options> = (x: number, y: number, t: number, at: FieldCell<O>) => number | boolean | null;
/** How a field is shaded: every option has a default that looks right with no tuning. */
export interface FieldOptions<O extends Options = Options> {
    /**
     * The characters from no ink to the most: a name, "standard" (" .:-=+*#%@", the default), "detailed", "donut",
     * "blocks" (" ░▒▓█"), "eighths", "dots", "lines", "stars" or "binary", or two or more characters of your own. A space
     * in it is not drawn, so the field leaves those cells empty and anything under them shows.
     */
    ramp?: RampName | (string & {});
    /**
     * Colour by value: a palette's name such as "ocean" (its colours for each page, faint to strong), colours as #rrggbb
     * from the lowest value to the highest, spread along their fade to `steps` colours; or { light, dark }, stops for
     * each page, each spread to `steps`. Without it (and without `color` or at.color)
     * the field is one ink. Colours follow the value, not the ramp turned round on paper: give { light, dark } to pick
     * colours that read on a light page. field() may take a `palette` too, colours of its own for at.color and `color`
     * to pick, which come after the spread ones. drawField() finds each colour in the surface's palette, the nearest when
     * it is not one of them, and draws none on a surface with no palette.
     */
    colors?: PaletteLike;
    /** How many colours `colors` is spread to: 16. A whole number from 1 to 64, or up to 32 when `colors` is { light, dark }. */
    steps?: number;
    /**
     * Colour by a function of your own instead: it gets the value (0 to 1, after `range` and `gamma`; 1 for true), x, y,
     * t and the cell, and returns a colour: an index into the piece's colours or #rrggbb, found in them. field() needs
     * `palette` (or `colors`) in its spec to pick from. It is not called for cells left empty, for cells whose function
     * set at.color, nor when colours are not shown.
     */
    color?: (value: number, x: number, y: number, t: number, at: FieldCell<O>) => Color;
    /**
     * Ordered 4 by 4 (Bayer) dithering: each cell's value nudged by up to half a step before it is rounded to a
     * character (and a colour), so a smooth slope shows as a fine mix of neighbouring characters instead of hard bands.
     * A character only ever moves to its neighbour on the ramp. false by default.
     */
    dither?: boolean;
    /**
     * Turns the ramp round, the densest character for 0. "auto" (the default) does it on a light page (env.paper): dense
     * characters are bright light on a dark page but dark ink on paper, so bright parts stay bright. true always, false
     * never. Cells where the function returns null are empty, and true is solid ink, whichever way the ramp runs. "auto"
     * suits light, such as a plasma or a lit ball; when your number means how much ink, such as a sea or a glow on an
     * empty ground, false with { light, dark } colours draws it in dark ink on paper.
     */
    invert?: boolean | "auto";
    /**
     * true (the default): x and y share one unit, the shorter side -1 to 1, rows counted at their true height (the
     * surface's aspect, 2 for the usual cell), so circles are round. false: each axis -1 to 1 whatever the shape.
     */
    aspect?: boolean;
    /** The value raised to this power before shading: 1. Above 1 darkens the middle values and sharpens the bright, below 1 lifts them. */
    gamma?: number;
    /**
     * The lowest and highest values your function returns, mapped to 0 and 1 before anything else: [0, 1]. [-1, 1] lets
     * it return a sine as it is; a sum of four sines might be [-4, 4]. High before low turns it round.
     */
    range?: readonly [number, number];
    /** Where in the surface to draw, in cells: all of it by default. Cells outside the surface are left out, the field keeping its shape. */
    region?: Region;
    /**
     * The field's loop in seconds: at.phase runs 0 to 1 through it, and field() sets meta.loop from it, the loop svg()
     * plays, so write the function in TAU * at.phase and it repeats exactly. None by default, at.phase then 0.
     */
    period?: number;
}
/**
 * What field() takes: a piece's spec (all optional, 64 by 24 by default) and the field's options, `period` among them.
 * Its `palette` is colours for at.color and `color` to pick from; with `colors` as well, they come after the spread ones.
 */
export type FieldSpec<O extends Options = Options> = MakerSpec<O> & FieldOptions<O>;
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
export declare function drawField(s: Surface, fn: FieldFn, t: number, o?: FieldOptions): void;
/**
 * A piece from a field in one call: a spec (a name, its size, 64 by 24 by default, and the field's options), which may
 * be left out, and a function of x, y and t that says what each cell is. With `colors` the piece is coloured by value;
 * with `palette` and a `color` function or at.color, by your own rule; with both, the palette's colours come after the
 * spread ones; with none it is text in the page's own colour. `period` sets meta.loop and at.phase, so a function of
 * TAU * at.phase repeats exactly and svg() plays one seamless loop. Every frame starts empty: a frame depends only on
 * t, as svg() and reduced motion need. Throws, saying what to change, for anything it can't take, when it is called
 * rather than on the first frame.
 *
 *   export default field((x, y, t, at) => at.r < 0.5 + 0.1 * Math.sin(t * 3));
 *   export const rings = field({ name: "rings", ramp: "dots", range: [-1, 1], period: 2 }, (x, y, t, at) => Math.cos(at.r * 9 - TAU * at.phase));
 */
export declare function field<O extends Options = Options>(fn: FieldFn<O>): KitPiece<O>;
export declare function field<O extends Options = Options>(spec: FieldSpec<O>, fn: FieldFn<O>): KitPiece<O>;
