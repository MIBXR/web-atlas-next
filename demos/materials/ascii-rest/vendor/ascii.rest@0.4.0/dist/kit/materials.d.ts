import type { Options } from "../types.ts";
import { Surface, type ColorName, type KitPiece, type MakerSpec, type MaterialColorName, type PaletteSpec, type RampName, type Scheme, type Source } from "./core.ts";
/** A list of colours for each page: `light` is drawn on a light page (paper), `dark` on a dark one. */
export type Duo = Scheme;
/** The name of a material's colours in `materialColors`, its first choice for a material's `colors`. */
export type PaletteName = MaterialColorName;
/**
 * What a material or an emission takes as `colors`: a name from `materialColors` (or the looks' `schemes`), one colour,
 * stops for both pages, or { light, dark }.
 */
export type Colors = ColorName | `#${string}` | PaletteSpec;
/** Where in its room a shape goes: a corner, an edge's middle, or the centre. */
export type Anchor = "top-left" | "top" | "top-right" | "left" | "center" | "right" | "bottom-left" | "bottom" | "bottom-right";
/** A point in cells: x columns across and y rows down from the top left. */
export type Point = readonly [number, number];
/** A size as a word: a share of the room's height. tiny 0.2, small 0.35, medium 0.55, large 0.75, huge 0.9, full 1. */
export type SizeWord = "tiny" | "small" | "medium" | "large" | "huge" | "full";
/**
 * An area laid out in a picture of a given size: which points are in it, and the box they lie in. x is columns
 * across and y rows down, fractions inside a cell; the cell at column 3, row 2 spans x 3 to 4 and y 2 to 3.
 */
export interface Placed {
    /** True for a point in the area. */
    test(x: number, y: number): boolean;
    /** The box the area lies in, in cells: x0 to x1 across and y0 to y1 down. It may reach past the picture. */
    readonly x0: number;
    readonly y0: number;
    readonly x1: number;
    readonly y1: number;
    /** For a liquid's area from inside(): the row its surface rests at. */
    readonly level?: number;
    /** For a liquid's area from inside(): the whole room in the vessel, which waves rise into above the level. */
    readonly room?: Placed;
    /** For a vessel such as cup() or bottle(): the room inside its walls and base, which inside() fills. */
    readonly cavity?: Placed;
    /** True for a vessel open at the top, such as a cup: glass draws no lid across it. */
    readonly open?: boolean;
    /** For text: the character at a cell, "" where the material should use its own. */
    readonly char?: (x: number, y: number) => string;
    /** The room a shape was placed in (the picture, or the area given as `within`): a swimming shape keeps to it. */
    readonly frame?: {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
    };
}
/**
 * Where something is: any shape, laid out once the picture's size is known. Make one with a shape such as cup() or
 * house(), a primitive in `area` such as area.rect(), or by combining others with union(), subtract(), intersect() and
 * inside(). Give it to shape() with a material to fill it, or to emit() as where an emission comes from.
 */
export interface Area {
    readonly kind: "area";
    /** The area in a picture `cols` by `rows`. The kit calls this; it is worked out once for each size. */
    place(cols: number, rows: number): Placed;
    /** The material shape() fills it with when it is given none: fire for a flame, glass for a cup. */
    readonly material?: () => Material;
    /** For an area in fixed cells (area.rect and the other primitives): how far right and down it reaches, so picture() can size itself to it. */
    readonly extent?: {
        readonly cols: number;
        readonly rows: number;
    };
    /**
     * For a shape made of parts (a house's walls, roof and chimney; a mug's handle and body): the parts, in the order
     * shape() draws them, each outlined on its own, so a roof keeps its eaves and a mug's side runs past its handle.
     */
    readonly pieces?: readonly Area[];
    /**
     * A point on it by an anchor word: "top", "bottom-left", "center" and the rest, on the edge or corner of the box it
     * fills. Give it as another shape's `at`, so the shape sits there, or as emit()'s `from`, so smoke comes out there:
     * parts placed against each other with no counting.
     *
     *   const body = box({ size: "small" });
     *   const wheel = ball({ at: body.at("bottom-left"), size: "tiny" });
     */
    at(anchor?: Anchor): PointOn;
}
/** A point on an area by an anchor word, found once the picture's size is known: what area.at() gives. */
export interface PointOn {
    readonly kind: "spot";
    /** The point in a picture `cols` by `rows`, in cells: x across, y down. */
    place(cols: number, rows: number): Point;
}
/**
 * Where a shape goes and how big it is. Every field is optional: each shape has a size and a place that look right with
 * none.
 */
export interface Placement {
    /**
     * Where it goes in its room: an anchor word ("center", "bottom", "top-left" and the rest), its edge or corner
     * against the room's, a point [x, y] in cells for its centre, or a point on another shape, body.at("bottom-left"),
     * for its centre to sit on. Each shape has its own default, "center" for most and "bottom" for those that stand on
     * something, such as a cup or a house.
     */
    at?: Anchor | Point | PointOn;
    /** Another area to place it in instead of the picture: at and size are then in that area's box. */
    within?: Area;
    /** Another area to stand it on: its bottom on that area's top, centred across it. Over `at`. */
    on?: Area;
    /** Columns to move it right after placing (left when below 0): 0. */
    x?: number;
    /** Rows to move it down after placing (up when below 0): 0. */
    y?: number;
    /** Its height as a word, "tiny" to "full", or a share of the room's height from 0 to 1. Each shape has a default, "medium" for most. */
    size?: SizeWord | number;
    /** Its width in cells, over size. Given alone, the height follows from the shape's proportions. */
    cols?: number;
    /** Its height in cells, over size. Given alone, the width follows from the shape's proportions. */
    rows?: number;
    /** Mirrors it left to right: false. */
    flip?: boolean;
}
/**
 * The primitives: areas in fixed cells, for when a shape word does not fit. Positions are columns across and rows down
 * from 0, 0 at the top left, fractions allowed; sizes are in cells.
 */
export declare const area: {
    /** A rectangle: `cols` wide and `rows` tall, its top left cell at x, y. */
    rect(x: number, y: number, cols: number, rows: number): Area;
    /** A rectangle with round corners, `radius` rows round (and twice that many columns, so the corners look round): 1. */
    rounded(x: number, y: number, cols: number, rows: number, radius?: number): Area;
    /** An ellipse centred on cx, cy: `rx` columns and `ry` rows from its centre to its edge. */
    ellipse(cx: number, cy: number, rx: number, ry: number): Area;
    /** A circle that looks round: `r` columns from its centre, and half as many rows, as draw's circle(). */
    circle(cx: number, cy: number, r: number): Area;
    /** A polygon through three or more points [x, y]; where it crosses itself, the even-odd rule says what is in. */
    polygon(points: readonly Point[]): Area;
    /** A thick line through two or more points [x, y]: a straw, a stem, a river. `width` is in columns: 1. */
    path(points: readonly Point[], width?: number): Area;
    /**
     * Text as an area: each character a cell, which a material fills with that character (neon makes a sign of it).
     * With `big`, letters of 3 by 5 pixels instead, each pixel 2 columns by 1 row, or `big` times that: a material
     * fills them with its own characters. Placed like a shape: "center" by default.
     */
    text(str: string, o?: Placement & {
        big?: boolean | number;
    }): Area;
    /**
     * An area of your own: `test(x, y)` says whether a point is in it, given the picture's size too. `box` is where to
     * look, in cells: the whole picture by default.
     */
    where(test: (x: number, y: number, cols: number, rows: number) => boolean, box?: {
        x: number;
        y: number;
        cols: number;
        rows: number;
    }): Area;
    /** The whole picture: for a sky, or a wash behind everything. */
    all(): Area;
    /**
     * A shape of your own, placed and sized by words as cup() and the rest are: its outline as three or more points
     * [u, v], or a function (u, v) => true for a point in it, u and v 0 to 1 across and down its box. `ratio` is its
     * width over its height as it looks on screen: 1. "medium" and "center" by default.
     *
     *   const rocket = area.fit([[0.5, 0], [0.8, 0.35], [0.8, 0.8], [1, 1], [0, 1], [0.2, 0.8], [0.2, 0.35]], { ratio: 0.5 });
     */
    fit(outline: readonly Point[] | ((u: number, v: number) => boolean), o?: Placement & {
        ratio?: number;
    }): Area;
};
/** The whole picture, for a sky: shape(sky(), starfield()). */
export declare const sky: () => Area;
/** A band along the bottom of the picture, for grass, sand or a floor: `rows` tall, or `size` of the picture's height ("tiny" by default, 0.2). */
export declare function ground(o?: {
    size?: SizeWord | number;
    rows?: number;
    within?: Area;
}): Area;
/** Every point in any of the areas: a body and a handle, a house and its chimney. */
export declare function union(...areas: Area[]): Area;
/** The first area with the others taken out of it: a crescent from two circles, a door cut from a wall. */
export declare function subtract(from: Area, ...areas: Area[]): Area;
/** Only the points in every one of the areas: a window's glass cut to a circle. */
export declare function intersect(...areas: Area[]): Area;
/** How full: a share from 0 to 1, or "low" 0.3, "half" 0.5, "high" 0.75, "full" 0.9 or "brim" 1. */
export type Fill = number | "low" | "half" | "high" | "full" | "brim";
/**
 * The room inside a vessel, up to a level: the water in a glass, the coffee in a mug, the lava in a lamp. A vessel
 * made by cup(), mug(), bottle() or lamp().globe knows its walls and base; any other area is taken in by `wall`
 * columns at the sides and `base` rows at the bottom. A liquid (water) rests its surface at the level and its waves
 * rise into the room above it, never past the walls.
 */
export declare function inside(vessel: Area, o?: {
    fill?: Fill;
    wall?: number;
    base?: number;
}): Area;
type ShapeOpts<E = object> = Placement & E;
/**
 * A tumbler with a thick glass base: straight sides that run unbroken from the rim to the base, or wider at the rim by
 * `taper` (0 to 0.6: 0). Glass by default; a vessel for inside().
 */
export declare function cup(o?: ShapeOpts<{
    taper?: number;
}>): Area;
/** A mug with a handle on the right (`flip` puts it on the left). Ceramic by default; a vessel for inside(), the handle left out. */
export declare function mug(o?: ShapeOpts): Area;
/** A bottle: a narrow neck, round shoulders and a body. Glass by default; a vessel for inside(). */
export declare function bottle(o?: ShapeOpts): Area;
/**
 * A straw leaning in a vessel: give it the vessel as `within`, and it stands on the vessel's floor and reaches a third
 * again above its rim. `lean` is how far its top leans right, as a share of its height (0.35; below 0 leans left).
 * Drawn before the glass and the drink, the drink bends it where it goes under, as water does. Red stripes by default.
 */
export declare function straw(o?: ShapeOpts<{
    lean?: number;
}>): Area;
/**
 * A box: square on screen unless given `ratio` (width over height, 1) or cols and rows. Solid by default; a closed
 * vessel for inside(), a wall of one cell all round, so a tank of glass() holds water().
 */
export declare function box(o?: ShapeOpts<{
    ratio?: number;
}>): Area;
/** A ball: a circle, round on screen. Solid by default. */
export declare function ball(o?: ShapeOpts): Area;
/** A soft, lumpy blob, a different one for each `seed` (1). Lava by default. */
export declare function blob(o?: ShapeOpts<{
    seed?: number;
}>): Area;
/**
 * A cloud, as a shape and as a material. As a shape, cloud() is puffs on a flat base, filled with cloud by default:
 * shape(cloud({ at: "top-left" })), and it drifts with shape(cloud(), { move: "drift" }). As a material, shape(anyArea,
 * cloud()) gives any area a cloud's outline, ".-~~-." over each puff and a flat base. `colors`: "cloud" (or "storm" for
 * a dark one).
 */
export declare function cloud(o?: ShapeOpts<{
    colors?: Colors;
}>): Cloud;
/** A flame: round at the bottom and pointed at the top. Fire by default: shape(flame({ on: candle })). */
export declare function flame(o?: ShapeOpts): Area;
/** A leaf, pointed at both ends. Grass's greens by default. */
export declare function leaf(o?: ShapeOpts): Area;
/** A heart. Rose red by default. */
export declare function heart(o?: ShapeOpts): Area;
/** A star of `points` points (5), its inner corners `inner` of the way out (0.45). Gold by default. */
export declare function star(o?: ShapeOpts<{
    points?: number;
    inner?: number;
}>): Area;
/** A crescent moon, lit on its left: `flip` lights its right. Pale yellow by default. */
export declare function moon(o?: ShapeOpts): Area;
/** A fish facing right (`flip` turns it left), with an eye, for shape(fish(), { move: "swim" }). An outlined goldfish by default. */
export declare function fish(o?: ShapeOpts): Area;
/** A house's parts, each an area of its own, besides the whole house. */
export interface House extends Area {
    readonly walls: Area;
    readonly roof: Area;
    readonly chimney: Area;
    readonly door: Area;
    readonly windows: Area;
}
/** A house: walls, a pitched roof with eaves, a chimney, a door and two windows, each an area too: house().chimney. Ceramic by default. */
export declare function house(o?: ShapeOpts): House;
/** A lava lamp's parts: a cap, a glass globe (a vessel for inside()) and a base, besides the whole lamp. */
export interface Lamp extends Area {
    readonly cap: Area;
    readonly globe: Area;
    readonly base: Area;
}
/** A lava lamp: a metal cap and base round a tapering glass globe. Fill inside(lamp.globe) with lava(). */
export declare function lamp(o?: ShapeOpts): Lamp;
/**
 * An area worked out on the picture's grid, for a material to draw: which cells are in it, how much of each it covers,
 * its outline and which way is in, and how far each cell is from its edge. Arrays have one entry a cell of the
 * picture, row by row; a material reads them and keeps nothing between frames.
 */
export interface Cells {
    /** The picture's size. */
    readonly cols: number;
    readonly rows: number;
    /** The index of every cell in the area, row by row. */
    readonly list: Int32Array;
    /** 1 for a cell in the area (half or more of it covered), 0 for one out of it. */
    readonly inside: Uint8Array;
    /** How much of each cell the area covers, 0 to 1. */
    readonly cover: Float32Array;
    /** 1 for a cell on the area's edge: in it, with a cell above, below, left or right that is not. */
    readonly border: Uint8Array;
    /** 1 for a cell just outside a sloping top or bottom that the edge passes through: part of outline(), not of the area. */
    readonly fringe: Uint8Array;
    /** True for a cell in the area, one cell past the picture on each side included (false further out). */
    has(x: number, y: number): boolean;
    /**
     * The area's outline as characters: its edge cells (edgeChar()), and the cells just outside a sloping top or bottom
     * that the edge passes through low or high, so a shallow slope reads "_.-" rather than stepping. Worked out once for
     * each style. Outlining materials (glass, ceramic, ice, metal, cloud) draw it.
     */
    outline(style?: EdgeStyle): {
        readonly cells: Int32Array;
        readonly chars: Uint16Array;
    };
    /** Which way is in, at the edge, on screen (rows count 2): a unit vector, 0, 0 off the edge. */
    readonly nx: Float32Array;
    readonly ny: Float32Array;
    /** How far a cell is from the area's edge, in columns (a row counts 2): 0 on the edge. */
    readonly depth: Float32Array;
    /** The deepest a cell is. */
    readonly maxDepth: number;
    /** The box of the cells in it: columns x0 to x1 - 1, rows y0 to y1 - 1. Empty when x1 <= x0. */
    readonly x0: number;
    readonly y0: number;
    readonly x1: number;
    readonly y1: number;
    /** For each column of the picture, the first and last row in the area, -1 for none. */
    readonly top: Int16Array;
    readonly bottom: Int16Array;
    /** For each row of the picture, the first and last column in the area, -1 for none. */
    readonly left: Int16Array;
    readonly right: Int16Array;
    /** A liquid's resting surface (from inside()), as a row with a fraction: null for an area that is not a liquid's. */
    readonly level: number | null;
    /** A liquid's whole room, waves and all (from inside()): null otherwise. */
    readonly room: Cells | null;
    /** A vessel's room inside its walls (cup(), mug(), bottle(), lamp().globe): null otherwise. */
    readonly cavity: Cells | null;
    /** True for a vessel open at the top. */
    readonly open: boolean;
    /** Text's character at a cell, "" for none: null for an area that is not text. */
    readonly char: ((x: number, y: number) => string) | null;
    /** The area as placed. */
    readonly placed: Placed;
}
/** Works an area out on a grid of `cols` by `rows`: what a material draws from. */
export declare function cellsOf(a: Area | Placed, cols: number, rows: number): Cells;
/** Outline characters: "line" ("|" up the sides) or "round" ("(" and ")" up the sides, as a cloud's). */
export type EdgeStyle = "line" | "round";
/**
 * The outline character for a cell on an area's edge, from which of the cells round it are out: "-" along a top, "_"
 * along a bottom, "|" up a side (or "(" and ")" when `style` is "round"), "/" and "\\" where it slopes, "." at a top
 * corner and where a curve only just reaches into the cell, and "'" at the bottom of a curve. A side that steps a
 * column in or out on the next row slopes there, so a taper reads as one line.
 */
export declare function edgeChar(c: Cells, i: number, style?: EdgeStyle): string;
/**
 * What a material draws with each frame: the grid, the page, its own colours, and what was under it before it drew.
 */
export interface Paint {
    /** The grid to draw in: the picture's, or for a shape that moves, a grid of its own laid into the picture after. */
    readonly s: Surface;
    /** Dark on a light page. */
    readonly paper: boolean;
    /** Drawn in one ink: colours are not shown, so say it with characters. */
    readonly mono: boolean;
    /** The palette index of the material's colour `i` (in its list's order) for this frame's page. */
    color(i: number): number;
    /**
     * The grid's characters and colours as they were before this part drew: what a see-through material shows. It is
     * copied the first time a part reads it in a frame, so read it before drawing anything.
     */
    readonly under: {
        readonly chars: Uint16Array;
        readonly colors: Uint8Array;
    };
}
/**
 * Draws a material's frame at t seconds. For one with a period, t is brought into it first, 0 up to the period and
 * round again, so it repeats exactly.
 */
export type MaterialDraw = (t: number, p: Paint) => void;
/**
 * What something is made of: it fills any area, and moves on its own from t. Make one with water(), glass(), fire()
 * and the rest, or material() for your own. Anything with these fields is one, so cloud() and smoke() are materials
 * as well as a shape and an emission.
 */
export interface Material {
    /** Its name, for errors. */
    readonly name: string;
    /** Its colours, a list for each page, in the order its drawing asks for them by index. */
    readonly colors: Duo;
    /** How often it repeats exactly, in seconds: undefined for a material that does not move, Infinity for one that moves without repeating. */
    readonly period?: number;
    /** Gets ready for an area (once, when a picture is set up) and returns its drawing of a frame. */
    prepare(c: Cells): MaterialDraw;
}
/** What cloud() gives: a shape, filled with cloud by default, that is also cloud as a material for any other area. */
export type Cloud = Area & Material;
/** What smoke() gives: smoke as a material for an area, and as an emission rising from one. */
export type Smoke = Emission & Material;
/** What every material and emission takes: its colours. Those that move take a `period` too, said on each. */
export interface MaterialOptions {
    /**
     * A palette's name from `palettes`, one colour as #rrggbb, colours as #rrggbb for both pages (spread along their fade
     * to what it needs), or { light, dark }.
     */
    colors?: Colors;
}
/** How a liquid's surface moves. */
export type Waves = "still" | "gentle" | "slosh" | "rough";
/**
 * Water, or any liquid: a body that fills its area, pale under the surface and denser and darker toward the bottom,
 * slow ripples drifting through it, and a surface of waves that curls up against the walls. What is behind it (a
 * straw, a backdrop, a glass's far wall) shows through in its tint, bent toward the middle, as water bends a straw; a
 * glass's highlight stays in front. In a vessel's inside() it rests at the level and sloshes against the walls; on any
 * other area its surface is the area's top. Name a drink as `colors`: "water", "cola", "juice", "tea", "lemonade",
 * "milk", "coffee", "wine".
 */
export declare function water(o?: MaterialOptions & {
    /** "still", "gentle" (the default), "slosh" (the whole surface tilting side to side) or "rough". */
    waves?: Waves;
    /** Seconds for the waves to come round: 4. */
    period?: number;
    /** How far, in columns, what is behind the water is shifted below its surface: 1. 0 shows it straight. */
    bend?: number;
    /** How strongly ripples move through the body, 0 (smooth shading by depth, still) to 1: 0.5. */
    texture?: number;
}): Material;
/**
 * Glass: see-through, so what is behind it shows. It draws the outline in the glass's colour and a highlight streak
 * down one side like a reflection, a glint running down it now and then. An open vessel such as cup() gets a rim seen
 * from a little above, an ellipse of its back and front edges, walls that run unbroken to a thick solid base, and its
 * streak from the rim to the floor: a liquid drawn after it shows the streak through itself, bent, as water does.
 */
export declare function glass(o?: MaterialOptions & {
    /** The highlight streak: true. */
    highlight?: boolean;
    /** Seconds between glints down the streak: 4. */
    period?: number;
}): Material;
/** Fire: flickering flames, hottest and densest at the base and core, tongues licking up and breaking off at the top. */
export declare function fire(o?: MaterialOptions & {
    /** Seconds for the flicker to come round: 2. */
    period?: number;
    /** How fierce: "gentle" (0.6), "normal" (1, the default) or "fierce" (1.6), or 0.2 to 2. */
    heat?: "gentle" | "normal" | "fierce" | number;
    /** A ramp from no flame (its first character, left empty) to the hottest: " .:^*#%@", or a name such as "blocks". */
    ramp?: RampName | (string & {});
    /**
     * A glow of "." round it, where nothing else is drawn, as round a candle's flame: "none" (the default), "soft" (1
     * column deep), "medium" (2) or "strong" (4), or columns.
     */
    glow?: "none" | "soft" | "medium" | "strong" | number;
}): Material;
/** Options for smoke(), as a material and as an emission. */
export interface SmokeOptions extends MaterialOptions {
    /** Seconds for it to come round: 4. */
    period?: number;
    /** As a material: a ramp from none (its first character, left empty) to the thickest, " .:-~=o", or a name such as "dots". */
    ramp?: RampName | (string & {});
    /** As an emission: how many rows the column rises, "low" (4), "medium" (8, the default) or "high" (14), or rows. */
    height?: "low" | "medium" | "high" | number;
    /** As an emission: how far it opens out as it rises, "narrow" (0.15), "medium" (0.3, the default) or "wide" (0.6), or columns each side a row. */
    spread?: "narrow" | "medium" | "wide" | number;
    /**
     * As an emission: how hard the wind leans it, "none" (0), "light" (0.3, the default) or "strong" (1), to the right, or
     * columns a row (left below 0). emit()'s toward: "left" turns it round.
     */
    wind?: "none" | "light" | "strong" | number;
    /** As an emission: its seed, 1. */
    seed?: number;
}
/**
 * Smoke, as a material and as an emission. As a material, shape(area, smoke()) fills an area with drifting smoke. As an
 * emission, emit(smoke(), { from: chimney }) sends a column of it up from the top of an area (or a point), leaning in
 * the wind, swaying and opening out as it rises, and breaking up at the top.
 */
export declare function smoke(o?: SmokeOptions): Smoke;
/** Metal: shaded round like a can or a pipe, with a sheen that sweeps across it once a period. */
export declare function metal(o?: MaterialOptions & {
    /** The sheen sweeping across: true. */
    sheen?: boolean;
    /** Seconds between sheens: 4. */
    period?: number;
    /** A ramp from the darkest metal to the brightest: "░▒▓█", or a name such as "standard". */
    ramp?: RampName | (string & {});
    /** Outline it: true. */
    edge?: boolean;
    /** Turn the ramp round: "auto" (the default) does on paper, as the kit's shading does, so the lit side reads as lit there too. */
    invert?: boolean | "auto";
}): Material;
/** Wood: grain in wavy lines with a knot here and there, or planks, or a log's rings. It does not move. */
export declare function wood(o?: MaterialOptions & {
    /** "grain" (the default), "planks" (boards side by side) or "rings" (a cut log). */
    grain?: "grain" | "planks" | "rings";
    /** Outline it: true. */
    edge?: boolean;
    /** Its seed, for the knots and the waves in the grain: 1. */
    seed?: number;
}): Material;
/**
 * Grass. A "lawn" is short blades along the top of the area swaying in the wind, a line of turf under them and earth
 * below. "reeds" grow tall and straight up from the bottom of the area, each its own height; "seaweed" waves slowly,
 * as under water, and lets what is behind it show between its fronds.
 */
export declare function grass(o?: MaterialOptions & {
    /** "lawn" (the default), "reeds" or "seaweed". */
    kind?: "lawn" | "reeds" | "seaweed";
    /** How far the tips sway, 0 to 3 columns: 1. */
    sway?: number;
    /** Seconds for a sway to come round: 4. */
    period?: number;
    /** The share of columns with a blade, 0 to 1: 0.7 (0.85 for reeds, 0.3 for seaweed). */
    density?: number;
    /** Hides what is behind it between the blades: true, false for seaweed. */
    opaque?: boolean;
    /** Its seed, for the blades' heights: 1. */
    seed?: number;
}): Material;
/** Sand: a stipple of grains, denser lower down, with a ripple now and then. It does not move. */
export declare function sand(o?: MaterialOptions & {
    /** Ripples drawn in it: true. */
    ripples?: boolean;
    /** Its seed, for where the grains fall: 1. */
    seed?: number;
}): Material;
/** Lava, as in a lava lamp: glowing blobs that rise, round off and sink again, over a pool at the bottom. */
export declare function lava(o?: MaterialOptions & {
    /** How many blobs, 0 to 12: 5. */
    blobs?: number;
    /** Seconds for the blobs to come round: 8. */
    period?: number;
    /** Its seed, for where the blobs start: 1. */
    seed?: number;
}): Material;
/**
 * Ice: an irregular chunk, not a box: its area with the corners and edges chipped off by its seed, bright along its
 * lit top and left edges, see-through inside so what is under it shows in the ice's pale tint, with a facet across its
 * upper left and a glint that comes and goes in it.
 */
export declare function ice(o?: MaterialOptions & {
    /** Seconds between glints: 4. */
    period?: number;
    /** Which chunk: a whole number, so two cubes of one size are chipped differently: 1. */
    seed?: number;
}): Material;
/**
 * Neon: a bright tube of light with a glow round it, flickering now and then. On text, the letters themselves glow:
 * shape(area.text("OPEN"), neon()).
 */
export declare function neon(o?: MaterialOptions & {
    /** How far the glow reaches round it, in columns: 2. 0 for none. */
    glow?: number;
    /** A flicker once a period: true. */
    flicker?: boolean;
    /** Seconds between flickers: 4. */
    period?: number;
    /** The tube's character where the area gives none: "█". */
    char?: string;
}): Material;
/**
 * A solid fill in one character and colour, or shaded from the edge in by a `ramp`, the edge's character first
 * ("░▒▓█"). On text, each letter stays itself.
 */
export declare function solid(o?: MaterialOptions & {
    /** The character: "█". */
    char?: string;
    /** Shading from the edge in instead of one character: a ramp's name or two or more characters, the edge's first. */
    ramp?: RampName | (string & {});
    /** Outline it with "|", "-", "/" and the like instead of filling the edge: false. */
    edge?: boolean;
}): Material;
/** A gradient: colours fading across the area in a direction, and characters from a ramp along it. */
export declare function gradientFill(o?: MaterialOptions & {
    /** Which way it fades from the first colour: "down" (the default), "up", "left", "right" or "out" (from the middle). */
    direction?: "down" | "up" | "left" | "right" | "out";
    /** How many steps of colour: 8. */
    steps?: number;
    /** The characters along the fade, the first colour's first, so it reads in one ink too: "█▓▒░", or a ramp's name, or one character for a flat fill. */
    ramp?: RampName | (string & {});
}): Material;
/** The patterns pattern() knows by name: tiles of text, repeated. */
export declare const patterns: {
    readonly bricks: readonly ["___|", "_|__"];
    readonly tiles: readonly ["+--", "|  "];
    readonly checks: readonly ["▓░", "░▓"];
    readonly stripes: readonly ["\\  ", " \\ ", "  \\"];
    readonly dots: readonly [". ", "  "];
    readonly waves: readonly ["~-~ ", " ~-~"];
    readonly hatch: readonly ["/"];
    readonly zigzag: readonly ["/\\"];
    readonly scales: readonly ["(_)", "_)("];
    readonly shingles: readonly ["\\_/", "/ \\"];
};
/**
 * A repeating pattern: a name from `patterns` ("bricks", "tiles", "checks", "stripes", "dots", "waves", "hatch",
 * "zigzag", "scales", "shingles") or a tile of your own, rows of text. A space in it leaves what is under it.
 */
export declare function pattern(tile: keyof typeof patterns | readonly string[], o?: MaterialOptions & {
    /** Which way it scrolls, if it does: "none" (the default), "left", "right", "up" or "down". */
    move?: "none" | "left" | "right" | "up" | "down";
    /** Seconds for it to scroll one tile: 2. */
    period?: number;
}): Material;
/** Ceramic: an opaque glazed thing, a mug, a vase, a candle, outlined, shaded down its right side, a gleam at its upper left. */
export declare function ceramic(o?: MaterialOptions & {
    /** The shading down its right side: true. */
    shade?: boolean;
}): Material;
/** Stars: a sparse field of points twinkling, for a night sky. */
export declare function starfield(o?: MaterialOptions & {
    /** The share of cells with a star: 0.04. */
    density?: number;
    /** Seconds for the twinkling to come round: 4. */
    period?: number;
    /** Its seed, for where the stars are: 1. */
    seed?: number;
}): Material;
/** What material() calls your function with: one object for every cell, reused, so read it and keep nothing of it. */
export interface MaterialCell {
    /** The cell: x columns across, y rows down. On a shape that moves, they are in a grid of its own, so what you draw moves with it. */
    x: number;
    y: number;
    /** 0 to 1 across and down the area's box, at the cell's centre. */
    u: number;
    v: number;
    /** Columns from the area's edge (a row counts 2): 0 on the edge. */
    depth: number;
    /** The outline character here ("|", "/", "_" and the like), "" inside. */
    edge: string;
    /** The size of the grid x and y are in: the picture's, or a moving shape's own. */
    cols: number;
    rows: number;
}
/**
 * A material of your own: a function of each cell and t that returns its character, or [character, colour index], or
 * "" (or null) to leave the cell as it is. Colour indices count from 0 in `colors`. A function that takes t moves:
 * give it `period` so the picture loops, and t then runs from 0 up to the period and round again.
 *
 *   const checks = material((c, t) => ((c.x + c.y + Math.floor(t * 2)) % 2 ? "#" : "."), { period: 1 });
 */
export declare function material(draw: (cell: MaterialCell, t: number) => string | readonly [string, number?] | null | undefined, o?: MaterialOptions & {
    /** Its name, for errors: "material". */
    name?: string;
    /** How many colours `colors` is spread to: as many as it lists. */
    steps?: number;
    /**
     * How often it repeats exactly, in seconds. Not given, a function that takes t moves on without repeating (the
     * picture plays but sets no loop), and one that does not take t is a still.
     */
    period?: number;
}): Material;
/** Where an emission comes from and lives, worked out on the picture's grid, for its drawing. */
export interface Spring {
    /** The area it comes from: smoke and steam rise from its top, rain falls from its bottom. Null for a point or the picture. */
    readonly from: Cells | null;
    /** The point it comes from, in cells, when given one (or an anchor word). */
    readonly point: Point | null;
    /** The area it lives in: born in it and gone when it leaves. Null for anywhere. */
    readonly inside: Cells | null;
    /** The picture's size. */
    readonly cols: number;
    readonly rows: number;
    /** Which way it goes, as emit() was asked: smoke and steam lean hard that way. "up" when not asked. */
    readonly toward?: "up" | "left" | "right";
}
/**
 * What something gives off: particles born over time and moving on their own, from an area or a point, or inside an
 * area. Make one with bubbles(), smoke(), sparks(), rain(), steam() or snow(), and give it to emit().
 */
export interface Emission {
    readonly kind: "emission";
    readonly name: string;
    readonly colors: Duo;
    /** How often it repeats exactly, in seconds. */
    readonly period?: number;
    /** Gets ready for where it comes from and returns its drawing of a frame. */
    emits(spring: Spring): MaterialDraw;
}
/** Bubbles rising through a liquid: born along its bottom, wobbling up, growing a little, popping at the surface. */
export declare function bubbles(o?: MaterialOptions & {
    /** Bubbles a second: 2.5. */
    rate?: number;
    /** Rows a second they rise: 3. */
    speed?: number;
    /** Columns they wobble side to side: 0.5. */
    wobble?: number;
    /** Seconds for the stream to come round exactly: 4. */
    period?: number;
    /** Its seed: 1. */
    seed?: number;
}): Emission;
/** Steam curling up in a few wisps over a hot drink, fading as it rises. */
export declare function steam(o?: MaterialOptions & {
    /** How many wisps: 3. */
    wisps?: number;
    /** How many rows it rises: 5. */
    height?: number;
    /** Seconds for it to come round: 4. */
    period?: number;
    /** Its seed: 1. */
    seed?: number;
}): Emission;
/** Sparks flying up off a fire and falling back, fading from white hot to red. */
export declare function sparks(o?: MaterialOptions & {
    /** Sparks a second: 8. */
    rate?: number;
    /** Rows a second they leave at: 7. */
    speed?: number;
    /** Rows a second squared pulling them back down: 6. */
    gravity?: number;
    /** Seconds a spark lasts: 1.2. */
    life?: number;
    /** Seconds for the stream to come round exactly: 4. */
    period?: number;
    /** Its seed: 1. */
    seed?: number;
}): Emission;
/** Rain falling from a cloud (the bottom of the area it comes from) or the top of the picture, splashing at the bottom. */
export declare function rain(o?: MaterialOptions & {
    /** Drops a second: 24. */
    rate?: number;
    /** Rows a second they fall: 12. */
    speed?: number;
    /** Columns a second the wind blows them, right (left below 0): 0. */
    wind?: number;
    /** Seconds for the rain to come round exactly: 4. */
    period?: number;
    /** Its seed: 1. */
    seed?: number;
}): Emission;
/** Snow drifting down from the top of the picture (or an area's bottom), each flake swaying. */
export declare function snow(o?: MaterialOptions & {
    /** Flakes a second: 10. */
    rate?: number;
    /** Rows a second they fall: 2. */
    speed?: number;
    /** Columns a second the wind blows them: 0.5. */
    wind?: number;
    /** Seconds for the snow to come round exactly: 8. */
    period?: number;
    /** Its seed: 1. */
    seed?: number;
}): Emission;
/** What emission() calls your function with: one object for each particle alive, reused, so read it and keep nothing of it. */
export interface Emitted {
    /** Which particle it is: the same one comes round again a period later, born in the same place. */
    index: number;
    /** Seconds since it was born. */
    age: number;
    /** Seconds it lives. */
    life: number;
    /** age / life: 0 at birth, near 1 as it goes, never 1, so `chars[Math.floor(k * chars.length)]` is always a character. */
    k: number;
    /** Where it was born, in cells: x columns across and y rows down. */
    x: number;
    y: number;
    /** The picture's size. */
    cols: number;
    rows: number;
    /** A number 0 to 1 of its own for each n, the same each time it comes round: for its speed, its way, its look. */
    random(n: number): number;
}
/**
 * An emission of your own: particles born at `rate` a second where it comes from, each living `life` seconds, and a
 * function saying where each one is and what it looks like: [x, y, character], or [x, y, character, colour index], or
 * null to hide it. It is born along the top of where it comes from (`birth`), or at the point given; within an area
 * given as `inside`, it is drawn only inside it. Every frame depends only on t, and the stream repeats every `period`:
 * the t your function gets runs from 0 up to the period and round again.
 *
 *   const fireflies = emission((p) => [p.x + 3 * Math.sin(p.age * 2 + p.random(1) * 6), p.y - p.age, p.k < 0.5 ? "*" : "."], { birth: "anywhere" });
 */
export declare function emission(draw: (p: Emitted, t: number) => readonly [number, number, string] | readonly [number, number, string, number] | null | undefined, o?: MaterialOptions & {
    /** Its name, for errors: "emission". */
    name?: string;
    /** Particles a second: 6. */
    rate?: number;
    /** Seconds each lives: 2. */
    life?: number;
    /** Where on what it comes from each is born: "top" (the default), "bottom" or "anywhere" in it. */
    birth?: "top" | "bottom" | "anywhere";
    /** Seconds for the stream to come round exactly: 4. */
    period?: number;
    /** How many colours `colors` is spread to: as many as it lists. */
    steps?: number;
    /** Its seed: 1. */
    seed?: number;
}): Emission;
/** What texture() takes besides the piece. */
export interface TextureOptions {
    /** The piece's own options: none. */
    options?: Options;
    /** How fast it plays: 1. */
    speed?: number;
    /** Repeat it across the area: false, so it is centred in the area's box and cut to it. */
    tile?: boolean;
    /** Its spaces cover what is under it, as a screen does: true. false lets what is under show through them. */
    opaque?: boolean;
}
/**
 * Any piece as a material: one of the library's, one of your own, a banner() or a block of text, playing inside the
 * area in its own colours. A screen showing the donut: shape(area.rounded(4, 2, 42, 22), texture(donut)).
 */
export declare function texture(src: Source, o?: TextureOptions): Material;
/** How a shape moves as a whole. */
export type Move = "none" | "bob" | "sway" | "swim" | "drift";
/**
 * A move of your own: where the shape is at t, as columns right and rows down from where it was placed (fractions are
 * rounded to whole cells), and `true` third to turn it round to face the other way.
 */
export type MoveFn = (t: number) => readonly [number, number] | readonly [number, number, boolean];
/** How a part moves as a whole, on top of what its material does. */
export interface PartOptions {
    /**
     * "bob" up and down (an ice cube floating), "sway" side to side, "swim" across its room and back, turning to face
     * the way it goes (a fish, which faces right), or "drift" right across the picture and round again (a cloud). Or a
     * function of your own, t => [dx, dy]: give it `period` too, the seconds it takes to come round (t then runs from 0
     * up to it and round again), or the picture will not loop. "none" by default.
     */
    move?: Move | MoveFn;
    /** How far, in cells: bob 1, sway 2, swim across the room it was placed in, drift the picture's width. */
    amount?: number;
    /** Seconds for one round of the move: bob 4, sway 4, swim 12, drift 24; none for a move of your own. */
    period?: number;
}
/** One layer of a picture: a shape filled with a material, or an emission. picture() draws them in order. */
export interface Part {
    readonly kind: "part";
    /** Its material or emission: the colours and period picture() gathers. */
    readonly what: Material | Emission;
    /** Its period of moving as a whole, if it moves: Infinity for a move of your own that never comes round. */
    readonly period?: number;
    /** Where it reaches in fixed cells, when it is only in fixed cells. */
    readonly extent?: {
        readonly cols: number;
        readonly rows: number;
    };
    /** Gets ready on a picture's grid and returns its drawing of a frame. */
    setup(cols: number, rows: number): MaterialDraw;
}
/**
 * A shape: an area filled with a material, drawn over what is already there. With no material it takes the area's own
 * (glass for a cup, fire for a flame), else solid; the options may then come second: shape(cloud(), { move: "drift" }).
 */
export declare function shape(where: Area, what?: Material | PartOptions, o?: PartOptions): Part;
/** Where an emission comes from and lives. */
export interface EmitOptions {
    /**
     * Where it comes from: an area (smoke and steam rise from its top, rain and snow fall from its bottom), an anchor
     * word in the picture, a point [x, y], or a point on a shape, chimney.at("top").
     */
    from?: Area | Anchor | Point | PointOn;
    /**
     * Where on the `from` area it comes out, by an anchor word: car.at's "bottom-left" for an exhaust, "right" for a
     * spout. The area's own place (its top for smoke) by default.
     */
    at?: Anchor;
    /** Which way it goes, for smoke and steam: "up" (the default), or "left" or "right", leaning hard that way as an exhaust's does. */
    toward?: "up" | "left" | "right";
    /** The area it lives in: bubbles are born along its bottom and pop where it ends. */
    inside?: Area;
}
/**
 * An emission as a part of a picture: emit(bubbles(), { inside: drink }), emit(smoke(), { from: chimney }),
 * emit(smoke(), { from: car, at: "bottom-left", toward: "left" }) for an exhaust.
 */
export declare function emit(what: Emission, o?: EmitOptions): Part;
/**
 * The colours a list of parts draws with, as a palette for piece(): the ink first, then each part's, a list for each
 * page. With it, drawParts() draws every part in its own colours.
 */
export declare function partsPalette(parts: readonly Part[]): Duo;
/**
 * Draws parts into a grid you already have, at t, over what is there: for mixing materials with your own drawing in
 * piece(). Each part's colours are found in the grid's palette (the nearest); a grid with no palette draws them in its
 * ink. Make the parts once, outside the drawing: they are set up the first time a grid sees them.
 *
 *   const parts = [shape(cup()), shape(inside(cup()), water())];
 *   export default piece({ name: "label", cols: 64, rows: 24, palette: partsPalette(parts) }, (t, s) => {
 *     drawParts(s, parts, t);
 *     s.write(2, 1, "fresh water");
 *   });
 */
export declare function drawParts(s: Surface, parts: readonly Part[], t: number): void;
/**
 * A picture: parts laid over each other in order, the first at the bottom, as one piece. Its size is `cols` by `rows`
 * if given; else, when every part is in fixed cells, just big enough for them; else 64 by 24. Its colours are its
 * parts' (up to 32 for each page), and it loops on the least common multiple of their periods when that is a minute or
 * less. It works in colour and in one ink, on light and dark pages, and every frame depends only on t.
 */
export declare function picture<O extends Options = Options>(parts: readonly Part[], spec?: MakerSpec<O>): KitPiece<O>;
/**
 * A glass of water with bubbles, in one call: a preset written with the same parts anyone can use. `fill` how full
 * ("half"), `waves` ("gentle"), `colors` the drink's ("water"; "cola", "juice", "wine", "tea"...), and the size.
 */
export declare function waterGlass(o?: {
    fill?: Fill;
    waves?: Waves;
    colors?: Colors;
    cols?: number;
    rows?: number;
}): KitPiece;
export {};
