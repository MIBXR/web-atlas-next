import type { Category, Piece } from "../types.ts";
import { Surface, type KitPiece, type Region } from "./core.ts";
/** One element on the way down to a shape: the svg, its groups and the shape itself, for naming parts. */
export interface SvgNode {
    /** The element's name: "g", "path", "use" and so on. */
    readonly tag: string;
    readonly id: string | null;
    readonly classes: readonly string[];
    /** A number of its own, so two <use> of one element are two parts. */
    readonly index: number;
}
/** A shape the drawing paints: a path, rect, circle, ellipse, line, polyline or polygon, read and resolved. */
export interface SvgShape {
    /** The element: "path", "rect", "circle", "ellipse", "line", "polyline" or "polygon". */
    readonly tag: string;
    /** Its id, or null. */
    readonly id: string | null;
    /** Its classes. */
    readonly classes: readonly string[];
    /** The elements from the svg down to this one, for naming parts by a group's id or class. */
    readonly chain: readonly SvgNode[];
    /** Its fill: #rrggbb, "currentColor" for the page's own colour, or null for none. */
    readonly fill: string | null;
    /** Its stroke: #rrggbb, "currentColor", or null for none. */
    readonly stroke: string | null;
    /** Its stroke's width in the viewBox's units, its transforms applied. */
    readonly strokeWidth: number;
    /** How opaque its fill and its stroke are, 0 to 1: opacity, fill-opacity, its colour's own and its groups'. */
    readonly fillOpacity: number;
    readonly strokeOpacity: number;
    /** Which of its parts are inside: "nonzero" (the default) or "evenodd". */
    readonly fillRule: "nonzero" | "evenodd";
    /** Its stroke's ends: "butt" (the default), "round" or "square". */
    readonly cap: "butt" | "round" | "square";
    /** Its outline, every transform applied, in the viewBox's units: moves (0, x, y), lines (1, x, y), cubic curves (2, x1, y1, x2, y2, x, y) and closes (3). Arcs and quadratic curves are cubics here. */
    readonly ops: Float64Array;
    /** Its box in the viewBox's units, its stroke included: [x, y, width, height]. */
    readonly box: readonly [number, number, number, number];
}
/** An SVG read into shapes: what fromSvg() and drawSvg() draw. parseSvg() makes one, to reuse. */
export interface Svg {
    /** The drawing's own box: x, y, width and height, from its viewBox, else its width and height, else its ink. */
    readonly viewBox: readonly [number, number, number, number];
    /** Every shape it paints, the first at the back. */
    readonly shapes: readonly SvgShape[];
    /** Its <title>, if it has one. */
    readonly title: string | null;
    /** Every part it can be addressed by: "#id", ".class" and each colour it paints, as #rrggbb. */
    readonly parts: readonly string[];
    /** What it has that fromSvg can't draw and leaves out, "text", "image", "foreignObject" or "marker": none for most drawings. */
    readonly skipped: readonly string[];
}
/**
 * Reads SVG markup into shapes, once, with no DOM: what fromSvg() and drawSvg() take, so one drawing can make several
 * pieces. Throws, saying what to change, for markup with no <svg> element.
 */
export declare function parseSvg(markup: string): Svg;
/**
 * A word that sets a part moving, each on a loop. Spin, flip, pulse, sway and blink turn, grow or shut about the part's
 * origin: its centre, or for sway its bottom, unless `origin` says otherwise.
 * - spin: turns round, once a period (4 s); `amount` turns a period (1), negative the other way.
 * - flip: turns round its upright axis like a coin, once a period (4 s).
 * - bob: rises and falls `amount` rows (1), once a period (2 s).
 * - pulse: grows by `amount` (0.15) and back, once a period (1.6 s).
 * - sway: leans `amount` radians (0.15) each way, once a period (4 s): from the bottom a plant, from the top a pendulum.
 * - blink: shuts, `amount` of the way (0.9), for a fifth of a second, every `every` seconds (4).
 * - glint: a light crosses it every `every` seconds (4), as the library's logos glint.
 * - ripple: its top ripples like water's surface, `amount` rows high (0.4), a wave every period (2 s).
 * - rise: rises `amount` rows (4) over a period (4 s) and starts again, as a bubble does; several share the period out.
 * - trace: draws itself along its lines, as a pen would: traced over the first half of a period (4 s), held, then
 *   wiped away from where it began. A stroke is traced as it runs; a fill round its edge, then filled. Line icons
 *   (Lucide, Feather) look best so.
 */
export type Motion = "spin" | "flip" | "bob" | "pulse" | "sway" | "blink" | "glint" | "ripple" | "rise" | "trace";
/**
 * Where a part turns, grows and shuts about: its centre, a side or a corner of its box, or a point [x, y] in the svg's
 * own units (a clock hand's pivot, a door's hinge).
 */
export type Origin = "center" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | readonly [number, number];
/**
 * A part's place at t, from where it is drawn, for a motion of your own: moved `x` columns right and `y` rows down,
 * turned `rotate` radians clockwise and grown `scale` times (or [across, down]) about its origin. Each is optional.
 */
export interface Pose {
    x?: number;
    y?: number;
    rotate?: number;
    scale?: number | readonly [number, number];
}
/**
 * A motion of your own: the part's pose at t seconds. It should depend only on t, as every frame does. Give the part a
 * `period` if it repeats, for the piece's loop.
 *
 *   "#ball": (t) => ({ y: -4 * Math.abs(Math.sin(t * 3)) })                      // a bounce
 *   "#hand": { motion: (t) => ({ rotate: (t * Math.PI) / 30 }), origin: [12, 12], period: 60 }
 */
export type PoseFn = (t: number) => Pose;
/**
 * A part's cells as a material reads them, worked out the way ascii.rest/kit's materials work out an area: which cells
 * are in it, how much of each it covers, its edge and which way is in, and how deep each cell is. Arrays have one entry
 * a cell of the grid, row by row.
 */
export interface PartCells {
    /** The grid's size. */
    readonly cols: number;
    readonly rows: number;
    /** The index of every cell in the part (half or more of it covered), row by row. */
    readonly list: Int32Array;
    /** 1 for a cell in the part, 0 for one out of it. */
    readonly inside: Uint8Array;
    /** How much of each cell the part covers, 0 to 1. */
    readonly cover: Float32Array;
    /** 1 for a cell on the part's edge: in it, with a cell above, below, left or right that is not. */
    readonly border: Uint8Array;
    /** 1 for a cell just outside a sloping top or bottom that the edge passes through: part of outline(), not of the part. */
    readonly fringe: Uint8Array;
    /** True for a cell in the part; false outside the grid, since a drawing's part stops at it. */
    has(x: number, y: number): boolean;
    /**
     * The part's outline as characters, as outlining materials (glass, ice, metal) draw it: "-" along a top, "_" along a
     * bottom, "|" up a side ("(" and ")" when `style` is "round"), "/" and "\" where it slopes, and the fringe's "_ . ' -"
     * just outside a shallow slope. Worked out once for each style.
     */
    outline(style?: "line" | "round"): {
        readonly cells: Int32Array;
        readonly chars: Uint16Array;
    };
    /** Which way is in at the edge, on the page (a row counts 2): a unit vector, 0, 0 off the edge. */
    readonly nx: Float32Array;
    readonly ny: Float32Array;
    /** How far a cell is from the part's edge, in columns (a row counts 2): 0 on the edge. */
    readonly depth: Float32Array;
    /** The deepest a cell is. */
    readonly maxDepth: number;
    /** The box of its cells: columns x0 to x1 - 1, rows y0 to y1 - 1. Empty when x1 <= x0. */
    readonly x0: number;
    readonly y0: number;
    readonly x1: number;
    readonly y1: number;
    /** For each column, the first and last row in the part, and for each row the first and last column: -1 for none. */
    readonly top: Int16Array;
    readonly bottom: Int16Array;
    readonly left: Int16Array;
    readonly right: Int16Array;
    /** A liquid's resting level, a vessel's room inside, an open top, a text's characters: a drawing's part has none. */
    readonly level: number | null;
    readonly room: PartCells | null;
    readonly cavity: PartCells | null;
    readonly open: boolean;
    readonly char: ((x: number, y: number) => string) | null;
    /** The part as a test of any point, x columns and y rows, and its box. */
    readonly placed: {
        test(x: number, y: number): boolean;
        readonly x0: number;
        readonly y0: number;
        readonly x1: number;
        readonly y1: number;
    };
}
/** What a material draws with each frame: the grid, the page, its colours' palette indices, and what was under it. */
export interface PartPaint {
    readonly s: Surface;
    readonly paper: boolean;
    readonly mono: boolean;
    /** The palette index of the material's colour `i`, in its own list's order, for this frame's page. */
    color(i: number): number;
    /** The grid's characters and colours before the part drew: what a see-through material shows. */
    readonly under: {
        readonly chars: Uint16Array;
        readonly colors: Uint8Array;
    };
}
/**
 * A material as ascii.rest/kit's materials make them (water(), glass(), fire() and the rest): its colours for each
 * page, how often it repeats, and prepare(), which gets ready for a part's cells and returns its drawing of a frame.
 */
export interface PartMaterial {
    readonly colors: {
        readonly light: readonly string[];
        readonly dark: readonly string[];
    };
    /** Seconds before it repeats exactly: undefined for a still, Infinity for one that never repeats. */
    readonly period?: number;
    prepare(cells: PartCells): (t: number, paint: PartPaint) => void;
}
/**
 * What draws a part instead of its own characters: a material (water(), glass(), fire() from ascii.rest/kit's
 * materials, or one of your own), or any piece, a library piece such as plasma or one made with the kit, or a grid,
 * which plays inside the part, centred on it and tiled. (Named apart from the materials module's Material, which is one
 * of these.)
 */
export type SvgMaterial = PartMaterial | Piece | Surface;
/** How a part of an svg looks and moves: a motion, a material, its own character or colour, or hidden. */
export interface SvgPartOptions {
    /** How it moves: a word, several, or a function of t giving its pose, for any motion the words don't have. */
    motion?: Motion | readonly Motion[] | PoseFn;
    /**
     * Seconds a loop of its motion: spin 4, flip 4, bob 2, pulse 1.6, sway 4, ripple 2, rise 4, trace 4. For a function,
     * the seconds before it repeats, if it does: without, the piece has no loop.
     */
    period?: number;
    /** Seconds between blinks or glints: 4. */
    every?: number;
    /** How far it moves, as each word says (see Motion): turns for spin and flip, rows for bob, ripple and rise. */
    amount?: number;
    /** What it turns, grows and shuts about: "center", or for sway "bottom". */
    origin?: Origin;
    /** Seconds added to its time, to set it apart from others: 0. */
    offset?: number;
    /**
     * Seconds between one match's start and the next's, when a class or a colour names several: 0, and for rise the
     * period shared out among them.
     */
    stagger?: number;
    /**
     * What draws it instead of its own characters, in the cells it covers half of or more: a material such as water()
     * or glass(), or any piece or grid. A material is prepared once for a part that stays where it is, and again each
     * frame for one that moves. Not in the "outline" style, which has no inside to fill.
     */
    material?: SvgMaterial;
    /** The character its solid cells take, instead of the drawing's ("8" unless `fill` says otherwise). */
    fill?: string;
    /**
     * One character for every cell it draws, edges and all, in any style: "o" for bubbles, "*" for stars, "~" for water.
     * Small parts read better so than as the letters their edges match, and a white part given one still shows in one
     * ink, where white is otherwise left out.
     */
    char?: string;
    /** Its colour, as #rrggbb, instead of its own. */
    color?: string;
    /** Left out of the drawing. */
    hide?: boolean;
}
/** What a part of an svg is given: a motion word or several, a function of t giving its pose, a material, its options, or false to leave it out. */
export type SvgPart = Motion | readonly Motion[] | PoseFn | SvgMaterial | SvgPartOptions | false;
/** How the cells are chosen. */
export type VectorStyle = "logo" | "outline" | "blocks" | "braille";
/** fromSvg()'s options. Besides these, any key that starts "#" or "." names a part, and "*" names the whole drawing. */
export interface VectorOptions {
    /**
     * Columns, the margin included: 48. The rows follow from the drawing's shape, at two columns a row, up to the 120
     * rows a piece may have (fewer columns then). Given no size at all, a tall drawing is kept to 24 rows, a terminal's
     * height, with fewer columns.
     */
    width?: number;
    /** A fixed size instead, in columns and rows: the drawing is fitted inside its margin and centred. One of them alone keeps its shape. */
    cols?: number;
    rows?: number;
    /** Blank cells round it: one number for every side, or [columns, rows]: [2, 1]. */
    margin?: number | readonly [number, number];
    /**
     * What is fitted to the size: "ink" (the default), the box of what it draws and the room its motions take, so
     * nothing moves out of the frame; or the "viewBox", as drawn, margins and all, motions or not.
     */
    fit?: "ink" | "viewBox";
    /**
     * How the cells are chosen. "logo" (the default): the character whose shape best matches the edge through each
     * cell, and the fill where it is solid. "outline": only the shapes' edges, walked as lines, _ . - ' on gentle slopes,
     * / and \ on steep ones, | upright. "blocks": quarter blocks, ▘ ▀ ▙ █ and the rest. "braille": 2 by 4 dots a cell.
     */
    style?: VectorStyle;
    /** The character for solid cells in the "logo" style: "8", as the library's logos. The other styles have their own. */
    fill?: string;
    /**
     * The drawing's own colours: true. false draws it in the page's own colour. A colour, #rrggbb, is the one its
     * currentColor takes, as CSS's color does: an icon set's lines (Lucide, Feather, Heroicons) in your colour, its
     * other colours kept.
     */
    color?: boolean | string;
    /** The thinnest a stroke is drawn, in columns, so a hairline still shows: 0.4. */
    line?: number;
    /** Lowercase display name: its <title>, else "vector". */
    name?: string;
    /** One line, up to 72 characters, saying what you see: the name. */
    note?: string;
    /** "shapes" by default. */
    category?: Category;
    /** Frames a second: 30 when something moves, 0 for a still. */
    fps?: number;
    /** The moment to show held still, for reduced motion: 0, or with a part that traces, a moment it is drawn whole. */
    still?: number;
    /** The colour behind it, as #rrggbb; it is then drawn for that ground whatever the page. */
    ground?: string;
    /** Parts, by "#id", ".class", "#rrggbb" (shapes of that colour) or "*" (all of it). */
    [part: `#${string}`]: SvgPart;
    [part: `.${string}`]: SvgPart;
    "*"?: SvgPart;
}
/** drawSvg()'s options: fromSvg()'s ways of drawing and its parts, and where in the grid. */
export type DrawSvgOptions = Omit<VectorOptions, "width" | "cols" | "rows" | "name" | "note" | "category" | "fps" | "still" | "ground" | "margin"> & {
    /** Where in the grid it is fitted and centred: all of it. */
    region?: Region;
    /** Blank cells round it inside the region: one number, or [columns, rows]: 0. */
    margin?: number | readonly [number, number];
};
/**
 * A part's cells from how much of each cell it covers, as ascii.rest/kit's materials work out an area's: in where it
 * covers half a cell, its edge, which way is in there (from the cover's slope), and each cell's depth (a chamfer
 * distance, a row counting 2).
 */
export declare function partCells(cover: Float32Array, cols: number, rows: number, aspect?: number): PartCells;
/**
 * A piece from an SVG: draw anything in Figma, Illustrator, Inkscape or any editor, export it, and pass the markup
 * (or what parseSvg() made of it). It is drawn in its own colours, each cell the character whose shape best matches
 * its edge, and plays wherever a piece does.
 *
 * Any key of the options that starts "#" or "." names a part, by an element's id, its class, or a colour it is
 * painted in ("#e11d48"); "*" names the whole drawing. Give a part a motion word, several in a list, a function of t
 * giving its pose (moved, turned, grown) for any motion of your own, a material (water(), glass() and the rest from
 * ascii.rest/kit's materials, or any piece, which plays inside it), false to leave it out, or { motion, period, every,
 * amount, origin, offset, stagger, material, fill, color, hide }. A name on a group moves the group as one; a class on
 * several elements moves each about its own centre; a group's motion carries the motions of what is inside it.
 * `origin` sets what a part turns about: a clock hand's pivot, a pendulum's top. `parseSvg(markup).parts` lists the
 * names a drawing answers to.
 *
 * Its loop is the least common multiple of its motions' and materials' periods when that is 60 seconds or less, and
 * none when a motion function has no period. It is 30 frames a second when anything moves, else a still.
 *
 * Throws, saying what to change, for markup it can't read, a drawing with nothing to draw, a part that names nothing
 * (with the parts the drawing has), and any option it can't take.
 *
 *   export default fromSvg(star, { width: 32, "#star": ["spin", "glint"] });
 *   export default fromSvg(readFileSync("icons/rocket.svg", "utf8"), { style: "outline", color: "#f97316", "*": "trace" });
 *   export default fromSvg(drawingOfACup, { "#water": water(), "#cup": glass(), ".bubble": "rise" });
 *   export default fromSvg(pendulum, { "#bob": { motion: "sway", amount: 0.4, origin: "top" } });
 *   export default fromSvg(ball, { "#ball": (t) => ({ y: -6 * Math.abs(Math.sin(t * 3)) }) });
 */
export declare function fromSvg(svg: string | Svg, options?: VectorOptions): KitPiece;
/**
 * A drawing's colours as fromSvg() draws them, as a palette for piece(): its own on paper (darkened where too pale to
 * read), lifted on a dark page, and the glint's lighter runs when a part glints. Give a piece that draws the svg with
 * drawSvg() this palette, made with the same options, and its colours are exact on both pages rather than the nearest
 * of yours. Undefined for a drawing in the page's own colour (currentColor, or color: false).
 *
 *   const heart = parseSvg(markup);
 *   export default piece({ name: "badge", cols: 40, rows: 12, palette: svgPalette(heart) }, (t, s) => drawSvg(s, heart, t));
 */
export declare function svgPalette(svg: string | Svg, options?: DrawSvgOptions): {
    light: string[];
    dark: string[];
} | undefined;
/**
 * Draws an SVG into a grid you already have, at t seconds: fitted inside `region` (all of it by default) and centred,
 * its colours found in the grid's palette (the nearest of them: svgPalette() makes one they are all in), or in the
 * grid's one ink. Parts move and fill as in fromSvg(). The svg is read and fitted once for each drawing and options,
 * then reused, so call it every frame. A motion function or a material is told apart by which object it is, so make it
 * once, outside the drawing: one written inside it is a new one each frame, and the drawing is fitted again each time.
 *
 *   piece({ name: "badge", cols: 40, rows: 12, palette: ["#e11d48"] }, (t, s) => drawSvg(s, heart, t, { "#heart": "pulse" }));
 */
export declare function drawSvg(s: Surface, svg: string | Svg, t: number, options?: DrawSvgOptions): void;
