import type { Options } from "../types.ts";
import { type Color, type ColorLike, type KitPiece, type MakerSpec, type PaletteLike, type PaletteSpec, type Region, type Source, Surface } from "./core.ts";
/** A point: [column, row]. */
export type Vec2 = [number, number];
/** One number, or [low, high]: each particle draws its own between them. */
export type Range = number | readonly [number, number];
/** A side of the grid (or of the region drawn in). */
export type Edge = "top" | "bottom" | "left" | "right";
/** A spot on the grid by name: its middle, the middle of a side, or a corner. "bottom" is the middle of the bottom row. */
export type Place = "center" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
/**
 * Where particles are born. In words: "top", "bottom", "left" or "right" is anywhere along that side, "everywhere" is
 * anywhere on the grid, "center" is its middle. Or, in columns and rows: `point`, one place (a Place by name, [column,
 * row], or a function of the birth time for one that moves, repeating with the piece's period if it has one); `line`,
 * anywhere along a line from one point to another; `area`, anywhere in a region; `edge`, anywhere along a side. A
 * particle born on a side is thrown straight in unless the system says another direction.
 *
 * `text`: on the characters of a picture, never its spaces: text as you would type it, or a piece, such as a
 * banner("hi"), whose still frame is taken, or a Surface. It sits at `at` ("center"), laid out as a Scenery is. Each
 * particle knows the character it was born on (`char`). A burst puts one particle on each character and draws it as
 * that character, unless `glyphs` or `glyph` say otherwise, so the picture itself comes apart; a rate sends sparks off
 * it, drawn with the glyphs as any other system's are. The picture itself is drawn by giving it as `front` or `back`.
 */
export type Emitter = Edge | "everywhere" | "center" | {
    point: Place | readonly [number, number] | ((t: number) => readonly [number, number]);
} | {
    line: readonly [readonly [number, number], readonly [number, number]];
} | {
    area: Region;
} | {
    edge: Edge;
} | {
    text: Source;
    at?: Place;
}
/**
 * Every cell of particles()'s front or back art that holds this character, such as "^" typed where a chimney's top
 * is: particles are born there, and the mark itself is drawn as a blank, so no one counts columns.
 */
 | {
    mark: string;
};
/** The way particles are thrown, by name: "out" is every way at once, as a burst. */
export type Direction = "up" | "down" | "left" | "right" | "up-left" | "up-right" | "down-left" | "down-right" | "out";
/**
 * What happens at the edges of the grid. "die": a particle that leaves is gone, even if its path would bring it back.
 * "wrap": it comes back in on the far side. "bounce": it bounces back off the edge, turned round with the speed it hit
 * it at (times `bounciness`), so a ball thrown down bounces back up to where it fell from. "none": it carries on out of
 * sight, and shows again if its path brings it back.
 */
export type Bounds = "wrap" | "bounce" | "die" | "none";
/**
 * A particle as a `glyph` or `color` function sees it. One object is reused for every particle of a system, so copy
 * what you want to keep.
 */
export interface Particle {
    /** Its number in its system, the same every frame. With a period, ids repeat each period. */
    id: number;
    /** Seconds since it was born. */
    age: number;
    /** Seconds it lives, its hold included. */
    life: number;
    /** age / life: 0 at birth, near 1 as it dies. */
    k: number;
    /** Where it is: the column and the row, fractions included. */
    x: number;
    y: number;
    /** Its velocity in cells a second, y down. A cell is a column's width both ways, so Math.atan2(vy, vx) is its heading on the screen. */
    vx: number;
    vy: number;
    /** The play time of this frame, in seconds. */
    t: number;
    /** A number 0 to 1 of its own, the same all its life: for giving each particle its own glyph or colour. */
    rand: number;
    /** 0 for the particle itself. For a cell of its trail, how far back along the trail it is, above 0 and up to 1; x, y, vx and vy are then the trail's there. */
    back: number;
    /** Where it was born: the column and the row. */
    x0: number;
    y0: number;
    /** The way it was thrown, in radians (0 right, TAU / 4 down), and how fast, in cells a second. */
    angle: number;
    speed: number;
    /** Seconds it holds still after its birth before it is thrown, its own share of the system's `hold`: still while age < hold. */
    hold: number;
    /** The character it was born on, from an emitter of text; "" from any other. */
    char: string;
}
/**
 * A particle system: where particles are born, how many, how they move, and how they look as they age. Every field
 * but `emitter` is optional; the defaults make small stars thrown every way from the emitter, fading "*", "+", ".",
 * or from a side, a slow fall of them straight across the grid. Everything can be said in words and plain numbers
 * (seconds, cells, degrees); `angle`, `wind` as a function and the `glyph` and `color` functions are there for when you
 * want the maths. A system is read once, the first time it is drawn: change it after and nothing changes, so make a new
 * one instead.
 */
export interface System {
    /** Where particles are born: "top", "bottom", "left", "right", "everywhere", "center", or a point, line, area or edge. */
    emitter: Emitter;
    /**
     * Particles born a second, spread evenly with a little jitter: 20, or from a side whose life is fitted to the grid
     * (see `life`), one a second for each 10 cells of the side, so it shows about as many at any size. A system has a rate
     * or a burst, not both.
     */
    rate?: number;
    /**
     * Instead of a rate: `count` particles at once, every `every` seconds (Infinity for one burst only, which comes
     * once each period in a piece that repeats), the first at `first` (0). Bursts are spaced exactly `every` apart
     * unless there is a period, when they are spread to a whole number of bursts each period (its nearest to `every`).
     * A burst comes from one place on its emitter, as a firework shell does, its particles spaced evenly round their
     * angles so it opens as a ring, unless `scatter` (false) gives each particle its own place. `rise`: seconds the burst
     * first climbs from the bottom edge to where it bursts, drawn as a rising spark with a trail, as a shell is launched:
     * 0, none. From text, a burst is spread evenly over its characters, and `count` is one a character unless you say.
     */
    burst?: {
        every: number;
        count?: number;
        first?: number;
        scatter?: boolean;
        rise?: number;
    };
    /**
     * Seconds a particle lives from its birth, its hold included: [1, 2], counted after the longest hold when there is
     * one. From a side, by default, as long as it takes to cross the grid at the slower of its speeds (a second to a
     * minute), so what falls from the top reaches the bottom.
     */
    life?: Range;
    /**
     * Seconds a particle holds still where it was born before it is thrown: 0, or 1 for a burst from text, so the picture
     * shows before it comes apart. [low, high] for each to go in its own time, so a word crumbles letter by letter. Its
     * life counts from its birth, the hold included, so a life of 6 ends every grain at 6 s however long each held. A
     * `path` is told the age from birth and holds as it likes.
     */
    hold?: Range;
    /** Cells a second it is thrown at: [2, 6]. */
    speed?: Range;
    /**
     * The way it is thrown, by name: "up", "down", "left", "right", the four between ("up-left" and so on), or "out",
     * every way. By default straight in from a side, and "out" from anywhere else. Give this or `angle`, not both.
     */
    direction?: Direction;
    /** Degrees the throw fans out across, centred on `direction`: 0, every particle the same way. 40 is a plume, 360 every way. */
    spread?: number;
    /** Or the way it is thrown in radians, 0 to the right and TAU / 4 down, one angle or [low, high] for each to draw its own. */
    angle?: Range;
    /** Cells a second squared, down; below 0 pulls up, as bubbles rise: 0. */
    gravity?: number;
    /**
     * Cells a second the air carries every particle to the right (left below 0), or a function of the time, for gusts: 0.
     * In a piece that repeats, a function should repeat with its period, or the loop jumps where it starts again.
     */
    wind?: number | ((t: number) => number);
    /** How fast a particle loses the speed it was thrown at, a second: 0, none. 1 spends most of it in about two seconds. */
    drag?: number;
    /**
     * A side to side drift, as a falling leaf's: cells each way, swinging slowly (0.3 swings a second), or { amount, speed }
     * for cells each way and swings a second. Each particle swings in its own time. 0, none.
     */
    sway?: number | {
        amount: number;
        speed: number;
    };
    /** Characters by age, the first at birth and the last as it dies: "*+.". A space shows nothing, for fading in or out. */
    glyphs?: string;
    /** Or a character of your own for each particle (and for each cell of its trail, where `back` is above 0). */
    glyph?: (p: Particle) => string;
    /**
     * Colours by age, from birth to death: these stops spread to `steps` colours, or a palette's name such as "ice"
     * (its colours for each page). None by default: the page's ink.
     */
    colors?: PaletteLike;
    /** Or several fades: each burst takes the next in turn, and with a rate each particle takes one at random. */
    palettes?: readonly PaletteLike[];
    /** How many colours `colors`, each of `palettes`, and `trailColors` spread to: 8. */
    steps?: number;
    /** Or a colour of your own for each particle: an index into the piece's palette, or #rrggbb found in it (give the piece a palette). */
    color?: (p: Particle) => Color;
    /** 0 to 1: the share of each tenth of a second a particle is hidden, at random, so it twinkles: 0. */
    twinkle?: number;
    /** At the edges, for both axes or for each: "die" (the default), "wrap", "bounce" or "none". */
    bounds?: Bounds | {
        x?: Bounds;
        y?: Bounds;
    };
    /**
     * The share of its speed a particle keeps each time it bounces, 0 to 1: 1, losing nothing. Below 1, a ball bounces
     * lower each time and comes to rest on the floor, as confetti settles.
     */
    bounciness?: number;
    /**
     * The row of the ground. Particles never go into it: they land on it and bounce back up if y bounds are "bounce",
     * or die there otherwise, showing their `splash`. None by default.
     */
    floor?: number;
    /**
     * Characters drawn where a particle lands, one after another for a tenth of a second each, in the row just above
     * the floor (or in the last row, landing on the bottom edge with y bounds "die"): none.
     */
    splash?: string;
    /** Seconds of its path drawn behind each particle, as a line along its heading (- / | \) thinning to dots: 0, none. */
    trail?: number;
    /** The trail's characters from just behind the particle to the end, instead of the line. */
    trailGlyphs?: string;
    /** The trail's colours from just behind the particle to the end: by default it takes the particle's colour. */
    trailColors?: PaletteLike;
    /**
     * Or where a particle is, worked out your own way: (p) => [column, row] at p.age, for spirals, orbits, swarms and
     * anything else. p.x0 and p.y0 are where it was born, p.angle and p.speed how it was thrown, p.k how far through its
     * life, and p.rand and p.id its own. Speed, gravity, wind, drag and sway then move nothing, though the throw is still
     * drawn for p.angle and p.speed; the edges still count ("die" looks only at where it is now). It should depend only on
     * p, so that any frame can be drawn first.
     */
    path?: (p: Particle) => readonly [number, number];
    /**
     * The moment it starts: by default it has always been going, so the first frame is already full. A piece that starts
     * empty can't repeat exactly, so particles() then sets no loop.
     */
    start?: number;
    /** A whole number: the same seed, the same particles. 1, plus its place in a list of systems. */
    seed?: number;
}
/** One system or several, drawn in order, each over the last. */
export type Systems = System | readonly System[];
/**
 * A system as you write it, given back as it is: for one declared before it is passed, so its options are checked
 * where they are written, and [1, 2] reads as a range with no `as const`.
 *
 *   const smoke = system({ emitter: { mark: "^" }, direction: "up", speed: [1, 2] });
 *   export default particles({ front: cabin }, smoke);
 */
export declare function system(s: System): System;
/** What drawParticles() takes besides the systems. */
export interface DrawOptions {
    /**
     * Seconds after which every system repeats exactly: rates and bursts are rounded to a whole number each period. None.
     * Moving points, wind functions and starts are not checked here as particles() checks them: keep them to the period.
     */
    period?: number;
    /** The part of the surface the systems live in, for their edges, wrapping and bouncing: all of it. */
    region?: Region;
}
/**
 * A picture drawn with the particles: a skyline under fireworks typed as text, a cabin in the snow, or a piece such as
 * banner("hi") with sparks coming off it. Text alone sits on the bottom row, in the middle, in the piece's ink; a piece
 * or a grid sits in the middle in its own colours, where an emitter of the same text puts its particles. The object
 * form says more.
 */
export interface Scenery {
    /**
     * The picture: text as you would type it, a piece (its still frame, in its colours) or a Surface. Blank lines at its
     * start and end are dropped, and the rest is laid out as written.
     */
    art: Source;
    /** Where it sits on the grid: "bottom" (the middle of the bottom row) for text, "center" for a piece or a grid, or another Place. */
    at?: Place;
    /** Its colour, #rrggbb, { light, dark } or a palette's name: a piece's or a grid's own colours, else the piece's ink. */
    color?: ColorLike;
    /** Colours for some of its characters, as #rrggbb, { light, dark } or a palette's name: { "▪": "#fcd34d" } lights the windows. */
    paint?: Readonly<Record<string, ColorLike>>;
    /**
     * True (the default): a space with some of the picture above it in its column hides what is behind it, as the inside
     * of a house does, while the sky between the roofs still shows. False: every space shows what is behind.
     */
    solid?: boolean;
}
/** What particles() takes besides a piece's spec. */
export interface ParticlesOptions {
    /**
     * Seconds after which it repeats exactly, so svg() plays a seamless loop: 8. Rates and bursts are rounded to a whole
     * number each period. 0 for a piece that never repeats. Left to its default, it is 0 when a system can't repeat: one
     * with a start, or a moving point or a wind function that isn't the same 8 seconds on. Given, it throws for those.
     */
    period?: number;
    /** A picture drawn in front of the particles, so they pass behind it: text, a piece, a Surface, or a Scenery. */
    front?: Source | Scenery;
    /** A picture drawn behind the particles, so they pass in front of it. */
    back?: Source | Scenery;
}
/**
 * The line character for a heading on the screen, "-", "\", "|" or "/", from a velocity in cells a second, y down: a
 * Particle's vx and vy. For a glyph that points the way a particle goes, `glyph: streak`.
 */
export declare function streak(p: {
    vx: number;
    vy: number;
}): string;
/**
 * Draws particle systems into a surface you already have, at t seconds: the drawing function, for mixing particles
 * with anything else in one piece(). Systems are drawn in order, each over the last; within one, younger particles
 * over older ones and every particle over the trails. Colours are found in the surface's palette, so give the piece
 * particlesPalette(systems) as its palette; on a surface with no palette, or in mono, particles are drawn in the ink. Make
 * the systems once, outside the drawing: each is checked and read the first time it is drawn, and kept, so changing
 * one after has no effect.
 *
 *   const snow = presets.snow({ cols: 64, rows: 24 });
 *   export default piece({ name: "snow", cols: 64, rows: 24, palette: particlesPalette(snow) }, (t, s) => drawParticles(s, snow, t));
 */
export declare function drawParticles(s: Surface, systems: Systems, t: number, o?: DrawOptions): void;
/**
 * The palette a piece needs to draw these systems in colour: your own colours first (`own`, so the piece's ink is the
 * first of them), then every colour the systems fade through, each once. When some systems have colours and some
 * don't, and you give none of your own, the kit's INK comes first, so the plain ones are drawn in the page's text
 * colour. Undefined when nothing has a colour. Throws past the 64 colours a piece can have.
 */
export declare function particlesPalette(systems: Systems, own?: PaletteSpec): PaletteSpec | undefined;
/** A preset's name: particles({ name: "snow" }, "snow"). */
export type PresetName = keyof typeof presets;
/** The options a preset takes, by its name. */
export type PresetOptions<N extends PresetName> = NonNullable<Parameters<(typeof presets)[N]>[1]>;
/**
 * A piece made of particles. The second argument is a preset by name, with its options third, or systems of your own:
 * one, a list, or a function of the piece's size that makes them (a preset function is one, and takes the options
 * third too). `front` and `back` draw a picture of text with them, a skyline or a cabin, in front of the particles or
 * behind. Its colours are your `palette` first, then the pictures', then the systems' own. It repeats exactly every
 * `period` seconds (8) and sets meta.loop to it, so svg() plays a seamless loop. 64 by 24 unless you say.
 *
 *   export default particles({ name: "snow" }, "snow", { wind: 3 });
 *
 *   export default particles({ name: "embers", cols: 48, rows: 16 }, {
 *     emitter: "bottom", direction: "up", spread: 40, speed: [4, 9], life: [2, 4],
 *     sway: 1, glyphs: "*+'.", colors: ["#fde047", "#f97316", "#7f1d1d"],
 *   });
 */
export declare function particles<O extends Options = Options, N extends PresetName = PresetName>(spec: MakerSpec<O> & ParticlesOptions, preset: N, options?: PresetOptions<N>): KitPiece<O>;
export declare function particles<O extends Options = Options, P = unknown>(spec: MakerSpec<O> & ParticlesOptions, make: (size: Size, options?: P) => Systems, options?: P): KitPiece<O>;
export declare function particles<O extends Options = Options>(spec: MakerSpec<O> & ParticlesOptions, systems: Systems | ((size: Size) => Systems)): KitPiece<O>;
/** A piece's size: what a preset fits itself to. particles() adds its period, which a preset can time its changes to. */
export interface Size {
    cols: number;
    rows: number;
    period?: number;
}
/** snow's options. */
export interface SnowOptions {
    /** Cells a second the wind carries the nearest flakes to the right (left below 0); farther ones drift less: 1. */
    wind?: number;
    /** How much the wind rises and drops, 0 to 1, a share of `wind`, once each period (8 s without one): 0.5. 0 for steady. */
    gusts?: number;
    /** How many flakes, as a share of the usual: 1. */
    density?: number;
    /** Depths of flakes, 1 to 3, from far small "." to near "*": 3. */
    layers?: number;
    /** Colours from the farthest depth to the nearest: grey to white on a dark page, grey to slate on paper. */
    colors?: PaletteLike;
}
/** rain's options. */
export interface RainOptions {
    /** Cells a second the wind blows the rain sideways, so it slants: 3. */
    wind?: number;
    /** How many drops, as a share of the usual: 1. */
    density?: number;
    /** Characters the near drops make where they land on the bottom row: "o.". "" for none. */
    splash?: string;
    /** Colours from the far drops to the near ones. */
    colors?: PaletteLike;
}
/** stars' options. */
export interface StarsOptions {
    /** How many stars, as a share of the usual: 1. */
    density?: number;
    /** Seconds between shooting stars: 7. 0 for none. */
    shooting?: number;
    /** Colours a star fades through, from coming out to going in. */
    colors?: PaletteLike;
}
/** sparks' options. */
export interface SparksOptions {
    /** Where the fountain stands, [column, row]: the middle of the bottom row. */
    at?: readonly [number, number];
    /** How high it throws, as a share of the rows above it: 0.8. */
    height?: number;
    /** How many sparks, as a share of the usual: 1. */
    density?: number;
    /** Colours a spark cools through, hot to cold. */
    colors?: PaletteLike;
}
/** fireworks' options. */
export interface FireworksOptions {
    /** Seconds between shells: 1.4 at 64 by 24, less in a sky wider than it is tall, so several burst across it. */
    every?: number;
    /** Sparks a shell: 40 at 64 by 24, more for the bigger shells of a bigger sky, up to 80. */
    count?: number;
    /** Seconds a shell climbs before it bursts: 1.1. 0 to burst out of nothing. */
    rise?: number;
    /** One colour for each shell in turn, as #rrggbb, each fading from white-hot through it: a red, a gold, a green, a blue and a pink. */
    colors?: readonly string[];
}
/** fireflies' options. */
export interface FirefliesOptions {
    /** How many fireflies, as a share of the usual: 1. */
    density?: number;
    /** Colours a firefly glows through, from lighting up to going out. */
    colors?: PaletteLike;
}
/** bubbles' options. */
export interface BubblesOptions {
    /** How many bubbles, as a share of the usual: 1. */
    density?: number;
    /** Colours a bubble goes through as it rises, small to large. */
    colors?: PaletteLike;
}
/** matrix's options. */
export interface MatrixOptions {
    /** How many streams, as a share of the usual: 1. */
    density?: number;
    /** How fast the streams fall, as a share of the usual: 1. */
    speed?: number;
    /** The head's colour, then the trail's from just behind it to the end: a list, or { light, dark }. */
    colors?: PaletteLike;
}
/**
 * Snow falling in up to three depths, far flakes small, slow and faint, near ones large and quick, each swaying in its
 * own time and carried by a wind that rises and drops, wrapping round the sides. Options: `wind`, `gusts`, `density`,
 * `layers`, `colors`.
 */
declare function snow(size: Size, o?: SnowOptions): System[];
/**
 * Rain in two depths, slanting with the wind, the near drops as streaks that splash where they land on the bottom
 * row. Options: `wind`, `density`, `splash`, `colors`.
 */
declare function rain(size: Size, o?: RainOptions): System[];
/**
 * A night sky of stars that come out, shine and go in again, twinkling, with a shooting star now and then.
 * Options: `density`, `shooting`, `colors`.
 */
declare function stars(size: Size, o?: StarsOptions): System[];
/**
 * A fountain of sparks thrown up from one place, a white-hot cone climbing to a canopy and arcing over to fall on
 * both sides, cooling from white through orange to red as they go. Options: `at`, `height`, `density`, `colors`.
 */
declare function sparks(size: Size, o?: SparksOptions): System[];
/**
 * Fireworks: shells climb from the bottom on a sparkling trail and burst high up, each in its own colour, the sparks
 * flying out round, slowing, drooping and fading from white-hot through the colour to dark.
 * Options: `every`, `count`, `rise`, `colors`.
 */
declare function fireworks(size: Size, o?: FireworksOptions): System[];
/**
 * Fireflies drifting low over the ground, each lighting up, glowing and going out again in its own time.
 * Options: `density`, `colors`.
 */
declare function fireflies(size: Size, o?: FirefliesOptions): System[];
/**
 * Bubbles rising from the bottom, swaying, speeding up and growing from "." to "O" as they go.
 * Options: `density`, `colors`.
 */
declare function bubbles(size: Size, o?: BubblesOptions): System[];
/**
 * Streams of glyphs falling down the screen, each in its own column at its own pace, a bright head over a trail that
 * fades behind it, its glyphs changing now and then. Options: `density`, `speed`, `colors`.
 */
declare function matrix(size: Size, o?: MatrixOptions): System[];
/**
 * Ready-made systems that look good at 64 by 24 with no options, each fitting itself to the size it is given:
 * `particles({ name: "snow" }, presets.snow)`, or with options,
 * `particles({ name: "storm" }, (size) => presets.snow(size, { wind: 4, density: 2 }))`.
 * snow, rain, stars (twinkling, with a shooting star now and then), sparks (a fountain), fireworks, fireflies, bubbles
 * and matrix.
 */
export declare const presets: {
    snow: typeof snow;
    rain: typeof rain;
    stars: typeof stars;
    sparks: typeof sparks;
    fireworks: typeof fireworks;
    fireflies: typeof fireflies;
    bubbles: typeof bubbles;
    matrix: typeof matrix;
};
export {};
