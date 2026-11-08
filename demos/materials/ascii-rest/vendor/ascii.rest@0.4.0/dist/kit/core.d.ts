import type { Category, Env, Meta, Options, Piece } from "../types.ts";
import * as compose from "./compose.ts";
import * as fx from "./fx.ts";
/** Throws the kit's kind of error: what is wrong and what to change, after "ascii.rest: ". */
export declare function fail(what: string): never;
export declare const and: (words: readonly string[]) => string;
export declare const TAU: number;
/** v kept between lo and hi: 0 and 1 by default. */
export declare const clamp: (v: number, lo?: number, hi?: number) => number;
/** From a to b by k. */
export declare const lerp: (a: number, b: number, k: number) => number;
/** 0 below e0, 1 above e1, and a smooth S between. */
export declare const smoothstep: (e0: number, e1: number, v: number) => number;
/** The part after the point, always 0 to 1, for negative numbers too. */
export declare const fract: (v: number) => number;
/** A number 0 to 1 that depends only on the whole numbers given: the same cell, step or seed gives the same number. */
export declare function hash(a: number, b?: number, c?: number, d?: number): number;
/** A seeded generator of numbers 0 to 1, mulberry32: the same seed, the same numbers, in every browser and in Node. */
export declare function mulberry32(seed: number): () => number;
/** Smooth value noise 0 to 1 on a lattice of whole numbers, seeded. ascii.rest/kit's math has simplex noise and fbm too. */
export declare function valueNoise(x: number, y: number, seed?: number): number;
/** The ordered (Bayer) dither's threshold at a cell, -0.5 to 0.5: add it, times a step, before rounding. */
export declare const bayer: (x: number, y: number) => number;
/**
 * Characters from no ink to the most, for shading a brightness. Any string of two or more characters is a ramp too;
 * these have names.
 */
export declare const ramps: {
    readonly standard: " .:-=+*#%@";
    readonly detailed: " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
    readonly donut: " .,-~:;=!*#$@";
    readonly blocks: " ░▒▓█";
    readonly eighths: " ▁▂▃▄▅▆▇█";
    readonly dots: " .·•●";
    readonly lines: " .-=≡";
    readonly stars: " .·+*";
    readonly binary: " #";
};
export type RampName = keyof typeof ramps;
/** A ramp by name, or a string of your own of two or more characters. Throws for anything else. */
export declare function ramp(r?: RampName | (string & {})): string;
/**
 * The character of `chars` for a brightness `v` 0 to 1, the ramp turned round on paper (`flip`) so dense still reads as
 * bright. `jitter`, -0.5 to 0.5 (bayer() gives one), dithers between neighbouring characters.
 */
export declare function shadeChar(chars: string, v: number, flip?: boolean, jitter?: number): string;
/** A colour: an index into the piece's colours (for the page's theme), or #rrggbb, found in them. */
export type Color = number | string;
/** The kit's ink for text with no colour of its own on a coloured piece: GitHub's text colours, as banner() uses. */
export declare const INK: {
    readonly light: "#1f2328";
    readonly dark: "#f0f6fc";
};
export declare const isHex: (v: unknown) => v is string;
/** #rrggbb as [r, g, b], 0 to 255. Throws for anything else. */
export declare function rgb(hex: string): [number, number, number];
/** [r, g, b], 0 to 255, as #rrggbb. */
export declare const hex: ([r, g, b]: readonly number[]) => string;
/** From colour a to colour b by k, as #rrggbb. */
export declare const mix: (a: string, b: string, k: number) => string;
/** `n` colours evenly along a fade through `stops`, as #rrggbb. One stop gives n of it. */
export declare function gradient(stops: readonly string[], n: number): string[];
/** The index of the colour in `colors` nearest to `color`, from `from` up to `to`. */
export declare function nearest(colors: readonly string[], color: string, from?: number, to?: number): number;
/** A piece's colours: one list for both themes, or a list for each, the same length. */
export type PaletteSpec = readonly string[] | {
    readonly light: readonly string[];
    readonly dark: readonly string[];
};
/** A colour for both themes, or one for each. */
export type Themed<T> = T | {
    readonly light: T;
    readonly dark: T;
};
/**
 * A piece's colours as `meta.palette` holds them, and the theme's index for a colour. A themed palette is laid out as
 * the library's logos are: the light page's colours, then the dark page's, so index i is i on paper and size + i on a
 * dark page. #rrggbb is found in the theme's own colours, the nearest if it isn't one of them.
 */
export declare class Palette {
    #private;
    /** As meta.palette: the light colours then the dark ones when themed. At least two: one colour is listed twice. */
    readonly colors: readonly string[];
    readonly themed: boolean;
    /** Colours a theme. */
    readonly size: number;
    constructor(spec: PaletteSpec, ink?: Themed<Color>);
    /** The index into meta.palette, for env.color, of a colour on paper or on a dark page. */
    index(c: Color, paper?: boolean): number;
    /** The index of the ink a cell with no colour of its own takes. */
    ink(paper?: boolean): number;
}
/** Colours for each page: `light` is drawn on a light page (paper), `dark` on a dark one. */
export interface Scheme {
    readonly light: readonly string[];
    readonly dark: readonly string[];
}
/**
 * The looks' palettes by name, each a list of colours from faint to strong for a light page and for a dark one: on a
 * dark page from dim to bright, on a light page from pale to deep, the way ink builds up on each. Any option in the kit
 * that takes colours takes one of these names, and colorOf() gives one name's strong colour on each page.
 *
 * - ocean: deep navy to sea foam. sunset: violet through rose to gold. neon: violet, magenta and electric cyan.
 * - fire: embers to white heat. aurora: violet sky into green curtains. forest: moss to new leaves.
 * - candy: pink, lilac, mint and lemon. mono: greys. ink: GitHub's text colour, one colour on each page.
 * - paper: sepia, pencil and old paper. github: the contribution graph's greens.
 * - ice, gold, lava, matrix, night and space: for snow, suns, lamps, code rain, rain and galaxies.
 */
export declare const schemes: {
    readonly ocean: {
        readonly light: readonly ["#7fb8d6", "#3a8fc4", "#0077b6", "#025a8c", "#023e6b", "#03045e"];
        readonly dark: readonly ["#0a1f5c", "#0353a4", "#0077b6", "#00b4d8", "#90e0ef", "#e0fbfc"];
    };
    readonly sunset: {
        readonly light: readonly ["#f4a261", "#e76f51", "#c9184a", "#9d0b4a", "#6a0d6b", "#3b0f5c"];
        readonly dark: readonly ["#3b0f5c", "#7b2cbf", "#c9184a", "#ff6b35", "#ffb627", "#ffe8a3"];
    };
    readonly neon: {
        readonly light: readonly ["#c77dff", "#9d4edd", "#e0218a", "#b5179e", "#7209b7", "#3a0ca3"];
        readonly dark: readonly ["#3c096c", "#7b2ff7", "#f107a3", "#ff5edf", "#00e5ff", "#e0ffff"];
    };
    readonly fire: {
        readonly light: readonly ["#fbbf24", "#f59e0b", "#ea580c", "#c2410c", "#991b1b", "#5b0f0f"];
        readonly dark: readonly ["#4a0d02", "#991b1b", "#dc2626", "#f97316", "#facc15", "#fef9c3"];
    };
    readonly aurora: {
        readonly light: readonly ["#a78bfa", "#7c3aed", "#0d9488", "#047857", "#065f46", "#064e3b"];
        readonly dark: readonly ["#312e81", "#0e7490", "#059669", "#22c55e", "#86efac", "#ecfdf5"];
    };
    readonly forest: {
        readonly light: readonly ["#a3d9a5", "#4ade80", "#16a34a", "#15803d", "#166534", "#14532d"];
        readonly dark: readonly ["#052e16", "#14532d", "#15803d", "#22c55e", "#86efac", "#dcfce7"];
    };
    readonly candy: {
        readonly light: readonly ["#f9a8d4", "#f472b6", "#db2777", "#a21caf", "#7e22ce", "#0e7490"];
        readonly dark: readonly ["#831843", "#db2777", "#f472b6", "#c084fc", "#67e8f9", "#fef08a"];
    };
    readonly mono: {
        readonly light: readonly ["#d4d4d8", "#a1a1aa", "#71717a", "#3f3f46", "#18181b"];
        readonly dark: readonly ["#3f3f46", "#71717a", "#a1a1aa", "#d4d4d8", "#fafafa"];
    };
    readonly ink: {
        readonly light: readonly ["#1f2328"];
        readonly dark: readonly ["#f0f6fc"];
    };
    readonly paper: {
        readonly light: readonly ["#d6c4a8", "#b08d62", "#8b6a43", "#5c4630", "#3b2a1d"];
        readonly dark: readonly ["#3f2d20", "#6b4f3a", "#a07850", "#d4b483", "#f3e3c3"];
    };
    readonly github: {
        readonly light: readonly ["#9be9a8", "#40c463", "#30a14e", "#216e39"];
        readonly dark: readonly ["#0e4429", "#006d32", "#26a641", "#39d353"];
    };
    readonly ice: {
        readonly light: readonly ["#7dd3fc", "#38bdf8", "#0284c7", "#075985", "#0c4a6e"];
        readonly dark: readonly ["#0c4a6e", "#0369a1", "#38bdf8", "#bae6fd", "#f0f9ff"];
    };
    readonly gold: {
        readonly light: readonly ["#facc15", "#eab308", "#ca8a04", "#a16207", "#713f12"];
        readonly dark: readonly ["#713f12", "#ca8a04", "#facc15", "#fef08a", "#fffbeb"];
    };
    readonly lava: {
        readonly light: readonly ["#fdba74", "#f97316", "#dc2626", "#991b1b", "#450a0a"];
        readonly dark: readonly ["#450a0a", "#991b1b", "#ef4444", "#f97316", "#fde047"];
    };
    readonly matrix: {
        readonly light: readonly ["#86efac", "#4ade80", "#16a34a", "#15803d", "#14532d"];
        readonly dark: readonly ["#022c0f", "#15803d", "#22c55e", "#86efac", "#f0fdf4"];
    };
    readonly night: {
        readonly light: readonly ["#93c5fd", "#60a5fa", "#2563eb", "#1e40af", "#172554"];
        readonly dark: readonly ["#1e293b", "#1e40af", "#3b82f6", "#93c5fd", "#f8fafc"];
    };
    readonly space: {
        readonly light: readonly ["#ddd6fe", "#c4b5fd", "#8b5cf6", "#6d28d9", "#4338ca", "#1e1b4b"];
        readonly dark: readonly ["#2e1065", "#5b21b6", "#7c3aed", "#60a5fa", "#e0e7ff", "#fff7ed"];
    };
};
/** The name of a palette in `schemes`: "ocean", "sunset", "neon", "fire", "aurora", "forest", "candy", "mono" and the rest. */
export type SchemeName = keyof typeof schemes;
/**
 * A material's colours by name, each a list for a light page and one for a dark page, in the order the material draws
 * with them: water [deep, mid, near the surface, surface]; glass [walls, highlight, base]; fire [embers to white heat,
 * five]; smoke, steam and sand [three, faint to strong]; cloud [outline, body, shadow]; metal [dark, mid, light,
 * sheen]; wood and grass [dark, mid, light]; lava [four, cool to hot]; ice [outline, body, glint]; neon [glow, tube,
 * hot core]; ceramic [outline, body, gleam]; starfield [dim, bright]; bubbles [rim, small]; sparks [hot, warm, cool];
 * rain [drop, splash]; snow [flake, star]. A material's `colors` takes these names first and the looks' `schemes`
 * after; anything else that takes colours takes the looks' first.
 */
export declare const materialColors: {
    readonly water: {
        readonly light: readonly ["#1e3a8a", "#1d4ed8", "#60a5fa", "#0369a1"];
        readonly dark: readonly ["#2563eb", "#60a5fa", "#a5d8ff", "#e0f2fe"];
    };
    readonly sea: {
        readonly light: readonly ["#134e4a", "#115e59", "#0f766e", "#0d9488"];
        readonly dark: readonly ["#0f766e", "#14b8a6", "#2dd4bf", "#ccfbf1"];
    };
    readonly cola: {
        readonly light: readonly ["#2b1408", "#431d0b", "#7c3a12", "#92400e"];
        readonly dark: readonly ["#5a250c", "#74351a", "#94532a", "#ead0a8"];
    };
    readonly lemonade: {
        readonly light: readonly ["#854d0e", "#a16207", "#ca8a04", "#a16207"];
        readonly dark: readonly ["#ca8a04", "#eab308", "#fde047", "#fef9c3"];
    };
    readonly coffee: {
        readonly light: readonly ["#3b2314", "#4a2c18", "#5b3a24", "#7c4a2a"];
        readonly dark: readonly ["#7b5135", "#946446", "#b8875e", "#e2c9a6"];
    };
    readonly tea: {
        readonly light: readonly ["#713f12", "#854d0e", "#a16207", "#b45309"];
        readonly dark: readonly ["#b45309", "#d97706", "#f59e0b", "#fde68a"];
    };
    readonly juice: {
        readonly light: readonly ["#9a3412", "#c2410c", "#ea580c", "#c2410c"];
        readonly dark: readonly ["#c2410c", "#ea580c", "#fb923c", "#fed7aa"];
    };
    readonly wine: {
        readonly light: readonly ["#4c0519", "#881337", "#9f1239", "#be123c"];
        readonly dark: readonly ["#9f1239", "#be123c", "#e11d48", "#fda4af"];
    };
    readonly milk: {
        readonly light: readonly ["#64748b", "#94a3b8", "#94a3b8", "#64748b"];
        readonly dark: readonly ["#cbd5e1", "#e2e8f0", "#f1f5f9", "#ffffff"];
    };
    readonly glass: {
        readonly light: readonly ["#475569", "#94a3b8", "#64748b"];
        readonly dark: readonly ["#94a3b8", "#f8fafc", "#cbd5e1"];
    };
    readonly fire: {
        readonly light: readonly ["#7f1d1d", "#b91c1c", "#c2410c", "#d97706", "#a16207"];
        readonly dark: readonly ["#7f1d1d", "#dc2626", "#f97316", "#facc15", "#fef9c3"];
    };
    readonly candle: {
        readonly light: readonly ["#9a3412", "#c2410c", "#d97706", "#b45309", "#92400e"];
        readonly dark: readonly ["#c2410c", "#f97316", "#fbbf24", "#fde68a", "#fffbeb"];
    };
    readonly lava: {
        readonly light: readonly ["#7f1d1d", "#b91c1c", "#ea580c", "#ca8a04"];
        readonly dark: readonly ["#991b1b", "#ef4444", "#f97316", "#fde047"];
    };
    readonly smoke: {
        readonly light: readonly ["#9ca3af", "#6b7280", "#4b5563"];
        readonly dark: readonly ["#4b5563", "#9ca3af", "#d1d5db"];
    };
    readonly steam: {
        readonly light: readonly ["#94a3b8", "#64748b"];
        readonly dark: readonly ["#94a3b8", "#e2e8f0"];
    };
    readonly cloud: {
        readonly light: readonly ["#6b7280", "#9ca3af", "#4b5563"];
        readonly dark: readonly ["#e5e7eb", "#6b7280", "#9ca3af"];
    };
    readonly storm: {
        readonly light: readonly ["#374151", "#6b7280", "#1f2937"];
        readonly dark: readonly ["#9ca3af", "#374151", "#4b5563"];
    };
    readonly steel: {
        readonly light: readonly ["#1e293b", "#475569", "#64748b", "#94a3b8"];
        readonly dark: readonly ["#475569", "#94a3b8", "#cbd5e1", "#ffffff"];
    };
    readonly gold: {
        readonly light: readonly ["#713f12", "#854d0e", "#a16207", "#ca8a04"];
        readonly dark: readonly ["#a16207", "#eab308", "#fde047", "#fffbeb"];
    };
    readonly copper: {
        readonly light: readonly ["#7c2d12", "#9a3412", "#c2410c", "#ea580c"];
        readonly dark: readonly ["#9a3412", "#c2410c", "#fb923c", "#ffedd5"];
    };
    readonly wood: {
        readonly light: readonly ["#3f2a14", "#6b4423", "#8b5a2b"];
        readonly dark: readonly ["#6b4423", "#a0682f", "#d29b5c"];
    };
    readonly grass: {
        readonly light: readonly ["#14532d", "#15803d", "#16a34a"];
        readonly dark: readonly ["#166534", "#22c55e", "#86efac"];
    };
    readonly seaweed: {
        readonly light: readonly ["#064e3b", "#047857", "#059669"];
        readonly dark: readonly ["#065f46", "#10b981", "#6ee7b7"];
    };
    readonly sand: {
        readonly light: readonly ["#713f12", "#92400e", "#a16207"];
        readonly dark: readonly ["#a16207", "#d4a24c", "#f5deb3"];
    };
    readonly ice: {
        readonly light: readonly ["#0369a1", "#0284c7", "#0c4a6e"];
        readonly dark: readonly ["#7dd3fc", "#bae6fd", "#ffffff"];
    };
    readonly neon: {
        readonly light: readonly ["#f9a8d4", "#db2777", "#831843"];
        readonly dark: readonly ["#9d174d", "#ec4899", "#fce7f3"];
    };
    readonly cyan: {
        readonly light: readonly ["#67e8f9", "#0891b2", "#164e63"];
        readonly dark: readonly ["#155e75", "#22d3ee", "#ecfeff"];
    };
    readonly lamp: {
        readonly light: readonly ["#fcd34d", "#d97706", "#92400e"];
        readonly dark: readonly ["#92400e", "#f59e0b", "#fef3c7"];
    };
    readonly ceramic: {
        readonly light: readonly ["#374151", "#9ca3af", "#6b7280"];
        readonly dark: readonly ["#e5e7eb", "#6b7280", "#ffffff"];
    };
    readonly wax: {
        readonly light: readonly ["#92400e", "#d6b98c", "#78350f"];
        readonly dark: readonly ["#fef3c7", "#a8a29e", "#ffffff"];
    };
    readonly moon: {
        readonly light: readonly ["#a16207", "#ca8a04", "#ca8a04"];
        readonly dark: readonly ["#fef9c3", "#fde68a", "#ffffff"];
    };
    readonly night: {
        readonly light: readonly ["#334155", "#94a3b8", "#475569"];
        readonly dark: readonly ["#cbd5e1", "#475569", "#f1f5f9"];
    };
    readonly stars: {
        readonly light: readonly ["#94a3b8", "#334155"];
        readonly dark: readonly ["#64748b", "#f8fafc"];
    };
    readonly rose: {
        readonly light: readonly ["#be123c", "#e11d48", "#9f1239"];
        readonly dark: readonly ["#e11d48", "#fb7185", "#ffe4e6"];
    };
    readonly goldfish: {
        readonly light: readonly ["#c2410c", "#ea580c", "#9a3412"];
        readonly dark: readonly ["#ea580c", "#fb923c", "#ffedd5"];
    };
    readonly brick: {
        readonly light: readonly ["#7f1d1d", "#9a3412"];
        readonly dark: readonly ["#b91c1c", "#f97316"];
    };
    readonly bubbles: {
        readonly light: readonly ["#0284c7", "#0369a1"];
        readonly dark: readonly ["#7dd3fc", "#f0f9ff"];
    };
    readonly fizz: {
        readonly light: readonly ["#92400e", "#b45309"];
        readonly dark: readonly ["#e0b98a", "#fef3c7"];
    };
    readonly sparks: {
        readonly light: readonly ["#ca8a04", "#ea580c", "#b91c1c"];
        readonly dark: readonly ["#fde047", "#f97316", "#dc2626"];
    };
    readonly rain: {
        readonly light: readonly ["#1d4ed8", "#2563eb"];
        readonly dark: readonly ["#60a5fa", "#bfdbfe"];
    };
    readonly snow: {
        readonly light: readonly ["#64748b", "#94a3b8"];
        readonly dark: readonly ["#e2e8f0", "#ffffff"];
    };
    readonly ink: {
        readonly light: readonly ["#1f2328"];
        readonly dark: readonly ["#f0f6fc"];
    };
    readonly sunset: {
        readonly light: readonly ["#1e1b4b", "#6d28d9", "#c2410c", "#ca8a04"];
        readonly dark: readonly ["#1e1b4b", "#7c3aed", "#f97316", "#fde047"];
    };
    readonly sky: {
        readonly light: readonly ["#1e3a8a", "#2563eb", "#0ea5e9"];
        readonly dark: readonly ["#0f172a", "#1e3a8a", "#38bdf8"];
    };
};
/** The name of a material's colours in `materialColors`: "water", "cola", "fire", "smoke", "steel" and the rest. */
export type MaterialColorName = keyof typeof materialColors;
/** Any colour's name the kit knows: a look's palette (`schemes`) or a material's (`materialColors`). */
export type ColorName = SchemeName | MaterialColorName;
/**
 * Colours as every option in the kit that takes several takes them: a palette's name ("ocean", "fire", "cola" and the
 * rest), one colour as #rrggbb, colours of your own faint to strong, or { light, dark } with a list for each page.
 */
export type PaletteLike = ColorName | (string & {}) | readonly string[] | Scheme;
/** One colour as every option in the kit that takes one takes it: #rrggbb, { light, dark }, or a palette's name, its strong colour on each page. */
export type ColorLike = ColorName | (string & {}) | {
    readonly light: string;
    readonly dark: string;
};
/**
 * Colours from anything the kit takes for several: a palette's name from `schemes` or `materialColors`, one #rrggbb, a
 * list of them, or { light, dark } with a list for each page. A name in both tables is the looks' unless `prefer` is
 * "materials". Returns a list, the same on both pages, or { light, dark }, copied. Throws, naming what it takes, for
 * anything else; `what` names the option in the error.
 *
 *   colorsOf("ocean")              // { light: [6 blues], dark: [6 blues] }
 *   field({ colors: "ocean" }, fn) // what every colours option does with a name
 */
export declare function colorsOf(v: PaletteLike | unknown, what?: string, prefer?: "looks" | "materials"): PaletteSpec;
/**
 * One colour for each page from anything the kit takes for one: #rrggbb (the same on both), { light, dark }, or a
 * palette's name, which gives that palette's strong colour on each page, as `colorOf("ocean")` is a deep blue on paper
 * and a bright one on a dark page. Throws, naming what it takes, for anything else.
 */
export declare function colorOf(v: ColorLike | unknown, what?: string): {
    light: string;
    dark: string;
};
/**
 * A hint for an error, when `word` is not one of `words`: the kit's word for it when it is a synonym ("center" for
 * "middle", "color" for "colour"), or the nearest by spelling, as ` (did you mean "center"?)`; "" when none is near.
 * For makers of your own, after the word in their own "has no option" or "takes ... not" message.
 *
 *   fail(`glow() has no option ${JSON.stringify(k)}${suggest(k, keys)}: it takes ${and(keys)}`);
 */
export declare function suggest(word: unknown, words: readonly string[]): string;
/**
 * Several pieces' colours as one palette: each colour once, and for each piece a map from its own index to the new one.
 * A piece with no colours (undefined) is drawn in INK, which is added for it, and `ink` says where. Throws when they come
 * to more than 64 colours.
 */
export declare function mergePalettes(parts: readonly (readonly string[] | undefined)[]): {
    palette: string[];
    maps: Uint8Array[];
    ink: {
        light: number;
        dark: number;
    } | null;
};
/** A cell's character that is not there: transparent when laid over another, a space in the frame. */
export declare const EMPTY = 0;
/** A cell's colour that is not set: it takes the piece's ink. */
export declare const NONE = 255;
/**
 * A character's char code for a cell, EMPTY for "". Throws for a control character or one outside the Basic
 * Multilingual Plane: a frame holds one UTF-16 unit a cell, as mount() reads it.
 */
export declare function code(ch: string): number;
/** A part of a grid: columns from x and rows from y. */
export interface Region {
    x: number;
    y: number;
    cols: number;
    rows: number;
}
/**
 * A grid of cells, `cols` by `rows`, each a character and a colour: what a frame is made of. Coordinates are columns
 * across and rows down from 0, 0 at the top left; a fraction is taken down to its cell, and anything outside the grid
 * is left out. A cell's character is a char code, EMPTY where nothing is drawn; its colour an index into the piece's
 * palette, the one env.color takes, or NONE for the piece's ink.
 */
export declare class Surface {
    #private;
    readonly cols: number;
    readonly rows: number;
    readonly chars: Uint16Array;
    readonly colors: Uint8Array;
    /** A cell's height in cell widths: 2, the shape of a character, or 1 for a square grid (meta.cell). */
    readonly aspect: number;
    /** The piece's colours, which a colour given by #rrggbb or index is found in; null for a piece in one ink. */
    palette: Palette | null;
    /** True when the frame is drawn dark on a light page (env.paper). */
    paper: boolean;
    /** True when the frame is drawn as text in one ink, so colours are not shown (no env.color). */
    mono: boolean;
    constructor(cols: number, rows: number, { palette, aspect }?: {
        palette?: Palette | null;
        aspect?: number;
    });
    /** The cell's index into chars and colors, or -1 outside the grid. */
    index(x: number, y: number): number;
    /** The palette index of a colour for this frame's theme; NONE for no colour, or on a piece with no palette. */
    resolve(color: Color | undefined): number;
    /**
     * Draws one character at a cell, in a colour if given: an index into the piece's colours or #rrggbb. "" clears the
     * cell; " " is a blank that still covers what is under it. Throws for a control character or one outside the BMP,
     * which a frame can't hold a cell of.
     */
    set(x: number, y: number, ch: string, color?: Color): void;
    /** Draws by index with a char code and a palette index as they are, for drawing loops that have them already. */
    put(i: number, code: number, color?: number): void;
    /** The character at a cell: "" where nothing is drawn or outside the grid. */
    get(x: number, y: number): string;
    /** The palette index at a cell, NONE where it has no colour or outside the grid. */
    colorAt(x: number, y: number): number;
    /** Empties every cell, or every cell of a region. */
    clear(region?: Region): void;
    /** Fills every cell, or a region's, with one character in one colour. */
    fill(ch: string, color?: Color, region?: Region): void;
    /** A region cut down to the grid, whole cells; the whole grid when none is given. */
    clip(region?: Region): Region;
    /**
     * Writes text from a cell, left to right, a newline starting the next row back at x. Spaces cover what is under
     * them. ascii.rest/kit's draw has text() with alignment and wrapping.
     */
    write(x: number, y: number, text: string, color?: Color): void;
    /**
     * Lays another grid over this one with its top left at x, y. Its EMPTY cells, and its `mask` character (a space by
     * default; null for none), let this one show through. Its colours are copied as they are, or through `map`, from its
     * palette's indices to this one's (mergePalettes() makes these).
     */
    paste(src: Surface, x: number, y: number, { mask, map }?: {
        mask?: string | null;
        map?: ArrayLike<number>;
    }): void;
    /**
     * Reads a frame back into the grid: the string a piece returned and, for a coloured one, the env.color it wrote.
     * Spaces become EMPTY, so the frame can be laid over another; lines are cut or padded to the grid.
     */
    load(text: string, color?: ArrayLike<number>): this;
    /**
     * The frame: `rows` lines of `cols` characters, EMPTY as a space. Given env.color (a coloured piece drawn in colour),
     * it writes every cell's palette index into it, the ink where a cell has no colour.
     */
    frame(env?: Env): string;
    /** The frame as text in one ink. */
    toString(): string;
    /** A copy, with the same palette and theme. */
    clone(): Surface;
    /** A grid of a frame's text, as wide as its longest line, and its colours if given. */
    static from(text: string, color?: ArrayLike<number>, palette?: Palette | null): Surface;
}
/** The largest a piece may be: a scene's size. The library's own pieces other than scenes keep to 80 by 32. */
export declare const MAX: {
    readonly cols: 320;
    readonly rows: 120;
};
/**
 * Checks a meta as scripts/check.ts checks a library piece's, and throws, saying what to change, for the first thing
 * wrong. Any piece may be up to MAX in size.
 */
export declare function checkMeta<M extends Meta>(m: M): M;
/**
 * What every piece the kit makes can do besides play: each step returns a new piece, which chains again, and leaves
 * this one as it was, so a recipe, a scene, particles or a layout is one line. Each is a function of the kit's own
 * (compose's over(), border() and speed(), fx's glint() and shake() and the rest) with this piece as its source.
 *
 *   stars().behind(pulsing(heart())).named("love in space")
 *   gauge({ label: "cpu" }).border({ title: true }).glint({ every: "rarely" })
 */
export interface Chain {
    /** The piece under another name, and a line saying what it shows: compose's named(). */
    named(name: string, note?: string): KitPiece;
    /** The piece with a line of its own saying what it shows, as screen readers and svg() read it. */
    note(note: string): KitPiece;
    /** This piece laid over another, in that one's size, centred: compose's over(this, bottom). */
    over(bottom: Source | ComposeLayer, o?: OverOptions): KitPiece;
    /** Another piece laid over this one, centred: a banner on a starfield. compose's over(top, this). */
    behind(top: Source | ComposeLayer, o?: OverOptions): KitPiece;
    /** Played `factor` times as fast: compose's speed(). */
    speed(factor: number): KitPiece;
    /** Waiting `seconds` on its first frame before it plays: compose's delay(). */
    delay(seconds: number): KitPiece;
    /** Its first `seconds` over and over, which becomes its loop: compose's repeat(). */
    repeat(seconds: number): KitPiece;
    /** A still of it at `at` seconds: compose's freeze(). */
    freeze(at: number): KitPiece;
    /** Blank cells round it: compose's pad(). */
    pad(n: number | readonly [number, number] | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }): KitPiece;
    /** In a box with a title if you like: compose's border(). */
    border(o?: ComposeBorderOptions): KitPiece;
    /** A part of it, cells of a region: compose's crop(). */
    crop(region: Region): KitPiece;
    /** Mirrored: compose's flip(). */
    flip(axis: "x" | "y" | "both"): KitPiece;
    /** Made bigger by whole numbers: compose's scale(). */
    scale(factor: number | readonly [number, number]): KitPiece;
    /** A light band crossing it now and then: fx's glint(). */
    glint(o?: FxOptionsOf<"glint">): KitPiece;
    /** Jolting now and then: fx's shake(). */
    shake(o?: FxOptionsOf<"shake">): KitPiece;
    /** Breaking up now and then: fx's glitch(). */
    glitch(o?: FxOptionsOf<"glitch">): KitPiece;
    /** Swaying as a wave runs down it: fx's wave(). */
    wave(o?: FxOptionsOf<"wave">): KitPiece;
    /** Fading in and out down a ramp: fx's fade(). */
    fade(o?: FxOptionsOf<"fade">): KitPiece;
    /** Dissolving in and out in patches: fx's dissolve(). */
    dissolve(o?: FxOptionsOf<"dissolve">): KitPiece;
    /** Its ink in colours running across it: fx's rainbow(). */
    rainbow(o?: FxOptionsOf<"rainbow">): KitPiece;
    /** All its ink in one colour going round the wheel: fx's hueCycle(). */
    hueCycle(o?: FxOptionsOf<"hueCycle">): KitPiece;
    /** A line round its ink: fx's outline(). */
    outline(o?: FxOptionsOf<"outline">): KitPiece;
    /** A shadow behind its ink: fx's shadow(). */
    shadow(o?: FxOptionsOf<"shadow">): KitPiece;
    /** A line scanning across it: fx's scan(). */
    scan(o?: FxOptionsOf<"scan">): KitPiece;
    /** Typed in a character at a time: fx's typeIn(). */
    typeIn(o?: FxOptionsOf<"typeIn">): KitPiece;
}
type OverOptions = Parameters<typeof compose.over>[2];
type ComposeLayer = Parameters<typeof compose.layer>[0] & object;
type ComposeBorderOptions = Parameters<typeof compose.border>[1];
type FxOptionsOf<K extends "glint" | "shake" | "glitch" | "wave" | "fade" | "dissolve" | "rainbow" | "hueCycle" | "outline" | "shadow" | "scan" | "typeIn"> = Parameters<(typeof fx)[K]>[1];
/** What a piece made by the kit is: a normal piece, its meta typed for its options, that chains. */
export interface KitPiece<O extends Options = Options> extends Piece<O>, Chain {
    meta: Meta<O>;
}
/**
 * The methods every piece the kit makes has, on its prototype: a piece is still a plain { meta, default } to mount(),
 * svg() and the rest. chained() gives any piece them.
 */
export declare class Chainable implements Chain {
    named(name: string, note?: string): KitPiece;
    note(note: string): KitPiece;
    over(bottom: Source | ComposeLayer, o?: OverOptions): KitPiece;
    behind(top: Source | ComposeLayer, o?: OverOptions): KitPiece;
    speed(factor: number): KitPiece;
    delay(seconds: number): KitPiece;
    repeat(seconds: number): KitPiece;
    freeze(at: number): KitPiece;
    pad(n: number | readonly [number, number] | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }): KitPiece;
    border(o?: ComposeBorderOptions): KitPiece;
    crop(region: Region): KitPiece;
    flip(axis: "x" | "y" | "both"): KitPiece;
    scale(factor: number | readonly [number, number]): KitPiece;
    glint(o?: FxOptionsOf<"glint">): KitPiece;
    shake(o?: FxOptionsOf<"shake">): KitPiece;
    glitch(o?: FxOptionsOf<"glitch">): KitPiece;
    wave(o?: FxOptionsOf<"wave">): KitPiece;
    fade(o?: FxOptionsOf<"fade">): KitPiece;
    dissolve(o?: FxOptionsOf<"dissolve">): KitPiece;
    rainbow(o?: FxOptionsOf<"rainbow">): KitPiece;
    hueCycle(o?: FxOptionsOf<"hueCycle">): KitPiece;
    outline(o?: FxOptionsOf<"outline">): KitPiece;
    shadow(o?: FxOptionsOf<"shadow">): KitPiece;
    scan(o?: FxOptionsOf<"scan">): KitPiece;
    typeIn(o?: FxOptionsOf<"typeIn">): KitPiece;
}
/**
 * Any piece with the methods every kit piece has, so it chains: a kit piece as it is, anything else (a library piece,
 * an object of your own with meta and default) as a copy of it with them, everything it carried kept.
 *
 *   chained(donut).glint().named("shiny donut")
 */
export declare function chained<P extends Piece>(p: P): P & KitPiece;
/** What piece() takes: the meta's fields, most of them with a default, and the piece's colours. */
export interface PieceSpec<O extends Options = Options> {
    /** Lowercase display name: "orbit". */
    name: string;
    /** One line, up to 72 characters, saying what you see: the name by default. */
    note?: string;
    /** "generative" by default. */
    category?: Category;
    /** Its size in cells. */
    cols: number;
    rows: number;
    /** Frames a second: 30 by default, 0 for a still. */
    fps?: number;
    /**
     * Its colours: one list, { light, dark } of the same length, or a palette's name such as "ocean" (its colours for
     * each page). Without, it is text in the page's own colour.
     */
    palette?: PaletteSpec | ColorName;
    /** The colour of a cell drawn with none: the first colour by default, or one for each theme. */
    ink?: Themed<Color>;
    /** The colour behind it, as #rrggbb; it is then drawn for that ground whatever the page. */
    ground?: string;
    /** Cell height in cell widths: 2 by default, 1 for a square grid. */
    cell?: 1 | 2;
    /** Its period in seconds, if it repeats exactly: the loop svg() plays. */
    loop?: number;
    /** The moment to show held still, for reduced motion: 0 by default. */
    still?: number;
    /** True if it shows the real time or date. */
    clock?: boolean;
    /** Its options and their defaults, passed to the drawing as ctx.options. */
    options?: O;
    /** Empty the grid before each frame: true by default. */
    clear?: boolean;
}
/**
 * What a maker such as field() or scene() takes: piece()'s spec with the name and size optional, since the maker has
 * its own name and a size to fall back on.
 */
export type MakerSpec<O extends Options = Options> = Omit<PieceSpec<O>, "name" | "cols" | "rows"> & {
    name?: string;
    cols?: number;
    rows?: number;
};
/**
 * A maker's spec, its name and size filled in: `name`, and 64 by 24 unless `size` says otherwise. A palette given by
 * name is its colours.
 */
export declare function specOf<O extends Options>(spec: MakerSpec<O> | undefined, name: string, size?: {
    cols: number;
    rows: number;
}): Omit<PieceSpec<O>, "palette"> & {
    palette?: PaletteSpec;
};
/** A palette spec's colours spread to `n` along their fade, for each theme it has: colours by value, from a few stops. */
export declare function spread(stops: PaletteSpec, n: number): PaletteSpec;
/** What a drawing knows besides the time and the grid. */
export interface Context<O extends Options = Options> {
    /** The piece's options: its defaults with the caller's on top. */
    options: O;
    /** Dark on a light page (env.paper). */
    paper: boolean;
    /** Drawn as text in one ink: colours are not shown. */
    mono: boolean;
    cols: number;
    rows: number;
}
/** Draws the frame at `t` seconds into `s`. It should depend only on t (and the options), so any frame can be drawn first. */
export type Draw<O extends Options = Options> = (t: number, s: Surface, ctx: Context<O>) => void;
/** Runs once for each play of the piece, with its options, and returns the drawing: the place for work done once. */
export type Setup<O extends Options = Options> = (options: O, size: {
    cols: number;
    rows: number;
}) => Draw<O>;
/** The meta and palette for a spec, checked. */
export declare function metaOf<O extends Options>(spec: PieceSpec<O>): {
    meta: Meta<O>;
    palette: Palette | null;
};
/**
 * A piece from a drawing: give it a name and a size (and colours, if it has any), and a function that draws the frame
 * at t seconds into a grid. It plays wherever a piece does. The second argument may instead be { setup }, which runs
 * once for each play with the options and returns the drawing. Throws, saying what to change, for a spec it can't take.
 *
 *   export default piece({ name: "pulse", cols: 32, rows: 9 }, (t, s) => {
 *     s.write(10, 4, Math.sin(t * 3) > 0 ? "* beat *" : "  beat  ");
 *   });
 */
export declare function piece<O extends Options = Options>(spec: PieceSpec<O>, draw: Draw<O> | {
    setup: Setup<O>;
}): KitPiece<O>;
/** What an effect or a layout takes: a piece, a block of text, or a grid. */
export type Source = Piece | string | Surface;
/**
 * Any source as a piece: a piece as it is; text or a grid as a still of it, as wide as its longest line (a grid keeps
 * its palette).
 */
export declare function asPiece(src: Source, name?: string): Piece;
/** A piece being played, frame by frame, as grids: what an effect or a layout reads its parts through. */
export interface Sampler {
    readonly meta: Meta;
    /** Its colours, null for a piece in one ink. Its grids' colours are indices into these. */
    readonly palette: readonly string[] | null;
    /**
     * The frame at t as a grid, its spaces EMPTY: in colour unless `mono`, for paper or a dark page. The same grid is
     * returned each time, so copy it to keep it.
     */
    at(t: number, env?: {
        paper?: boolean;
        mono?: boolean;
    }): Surface;
}
/** Plays a source with its options, for reading as grids: sample(donut).at(1.5) is donut's frame at 1.5 seconds. */
export declare function sample(src: Source, options?: Options): Sampler;
/** A piece's frame at t as text and colours, as mount() would draw it: for tests, scripts and thumbnails. */
export declare function snapshot(src: Source, t?: number, { paper, mono, options }?: {
    paper?: boolean;
    mono?: boolean;
    options?: Options;
}): {
    text: string;
    color: Uint8Array | null;
};
export {};
