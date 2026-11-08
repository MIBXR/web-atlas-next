export { TAU, bayer, clamp, fract, hash, lerp, mulberry32, smoothstep, valueNoise } from "./core.ts";
/** Where v sits from a to b: 0 at a, 1 at b, below 0 or above 1 past them. 0 when a and b are the same. */
export declare const invLerp: (a: number, b: number, v: number) => number;
/**
 * v taken from the range inLo..inHi to the range outLo..outHi, as p5's map(): remap(5, 0, 10, 100, 200) is 150.
 * Past the input range it carries on past the output range, unless `clamped` (false) keeps it inside. Either range
 * may run downwards. An input range of no width gives outLo.
 */
export declare function remap(v: number, inLo: number, inHi: number, outLo: number, outHi: number, clamped?: boolean): number;
/** a modulo n, never negative: from 0 up to n, for a below 0 too (mod(-1, 4) is 3, where -1 % 4 is -1). n above 0. */
export declare function mod(a: number, n: number): number;
/**
 * v wrapped into lo..hi, coming back round to lo at hi: wrap(370, 0, 360) is 10, wrap(-1, 0, 64) is 63. The ends may be
 * given either way round: wrap(v, 64, 0) is wrap(v, 0, 64).
 */
export declare const wrap: (v: number, lo: number, hi: number) => number;
/** v bounced between 0 and length: up from 0 to length, back down to 0 at twice length, and again. */
export declare const pingpong: (v: number, length: number) => number;
/** 0 below edge and 1 from it on, as GLSL's step(). */
export declare const step: (edge: number, v: number) => number;
/** Radians in degrees. */
export declare const degrees: (rad: number) => number;
/** Degrees in radians, as maths, fields and SVG poses take angles. Drawing and placing take turns, 0 to 1, instead. */
export declare const radians: (deg: number) => number;
/**
 * Seeded random numbers: call it for the next number from 0 up to 1, or use its helpers. The same seed gives the same
 * numbers, in the same order, everywhere. Draw them in a piece's setup or at the top of its file, not in its frames, so
 * a frame depends only on t.
 */
export interface Random {
    /** The next number, from 0 up to (never reaching) 1. */
    (): number;
    /** The seed it was made with. */
    readonly seed: number;
    /** A number from lo up to hi. */
    range(lo: number, hi: number): number;
    /** A whole number from lo to hi, both included: int(1, 6) is a die. Throws for fractions or hi below lo. */
    int(lo: number, hi: number): number;
    /** One item of a list, each as likely. Throws for an empty list. */
    pick<T>(list: readonly T[]): T;
    /** One character of a string, each as likely: pick("*+.") for a star. Throws for "". */
    pick(chars: string): string;
    /** True with probability p, 0 to 1: chance(0.25) is true about a quarter of the time. */
    chance(p: number): boolean;
    /** A number from a bell curve around `mean` (0) with spread `sd` (1): most within one sd, nearly all within three. */
    normal(mean?: number, sd?: number): number;
    /** 1 or -1, as likely. */
    sign(): 1 | -1;
    /** An angle in radians, 0 up to TAU. */
    angle(): number;
    /** The list in a random order, shuffled in place and returned. */
    shuffle<T>(list: T[]): T[];
    /** A point anywhere inside a circle of radius `r` (1) round 0, 0, every part of it as likely. */
    inCircle(r?: number): Vec2;
    /** A point on a circle of radius `r` (1) round 0, 0: a direction, `r` long. */
    onCircle(r?: number): Vec2;
    /** A point anywhere inside a ball of radius `r` (1) round the origin. */
    inSphere(r?: number): Vec3;
    /** A point on a sphere of radius `r` (1) round the origin, every part of it as likely: dots for a globe. */
    onSphere(r?: number): Vec3;
    /**
     * Another generator, independent of this one: stream `n` of this seed. It depends only on the seed and n, not on how
     * many numbers were drawn, so random(7).fork(2) is always the same stream. A whole number.
     */
    fork(n: number): Random;
}
/**
 * A seeded generator (mulberry32 underneath) with helpers: random(7).int(1, 6). `seed` is a whole number, 1 by default;
 * its lowest 32 bits are what count. Throws for a fraction.
 *
 *   const rnd = random(42);
 *   const dots = Array.from({ length: 500 }, () => rnd.onSphere());
 */
export declare function random(seed?: number): Random;
/**
 * Simplex noise at x, y: smooth hills and hollows, 0 to 1, about one feature a unit, so divide cell positions by the
 * size you want (noise2(x / 8, y / 4) has features about 8 columns wide), or let noise() do it. `seed` is a whole
 * number, 0 by default: each seed is a different pattern (fractions are dropped).
 */
export declare const noise2: (x: number, y: number, seed?: number) => number;
/** Simplex noise in 3D, 0 to 1: the third axis is often time, noise3(x, y, t) for a pattern that changes in place. */
export declare const noise3: (x: number, y: number, z: number, seed?: number) => number;
/** Simplex noise in 4D, 0 to 1: two axes of space and two more, as loopNoise() uses to come round exactly. */
export declare const noise4: (x: number, y: number, z: number, w: number, seed?: number) => number;
/** Smooth value noise in 3D, 0 to 1, on a lattice of whole numbers: blockier and cheaper than noise3. `seed` 0. */
export declare function valueNoise3(x: number, y: number, z: number, seed?: number): number;
/** How fractal noise is built: layers (octaves) of noise, each finer and fainter than the last. */
export interface FbmOptions {
    /** Layers of noise, a whole number from 1 to 16: 4. Each adds finer detail and costs as much again. */
    octaves?: number;
    /** How much finer each layer is than the one before: 2 (twice the detail). Above 0. */
    lacunarity?: number;
    /** How much each layer counts against the one before: 0.5. Lower is smoother, higher rougher. 0 or more. */
    gain?: number;
    /** A whole number: 0. Each seed is a different pattern. */
    seed?: number;
}
/**
 * Fractal noise at x, y, 0 to 1: octaves of simplex noise, each finer and fainter, for clouds, terrain, smoke and
 * anything with detail at every scale. Options: octaves (4), lacunarity (2), gain (0.5), seed (0).
 */
export declare function fbm(x: number, y: number, o?: FbmOptions): number;
/** Fractal noise in 3D, 0 to 1: fbm with a third axis, often time. The same options as fbm(). */
export declare function fbm3(x: number, y: number, z: number, o?: FbmOptions): number;
/**
 * Ridged fractal noise at x, y, 0 to 1: sharp crests along the lines where noise crosses its middle, with finer crests
 * branching off them and soft valleys between, for mountain ranges, veins and lightning. The same options as fbm().
 */
export declare function ridged(x: number, y: number, o?: FbmOptions): number;
/** What loopNoise() takes: fbm's options (octaves 1 here, plain noise), and these. */
export interface LoopNoiseOptions extends FbmOptions {
    /** How much it changes over one period: the radius of the circle it travels, in noise units, 1. Larger changes more. */
    radius?: number;
    /** true: ridged noise, as ridged() makes, sharp crests and soft hollows. false (the default): smooth noise. */
    ridged?: boolean;
}
/**
 * Noise at x, y that moves with t and comes back exactly every `period` seconds, so a piece made with it loops
 * seamlessly (set meta.loop to the period). It travels a circle through two more axes of simplex noise (4D), so the
 * pattern changes in place instead of sliding. noise({ period }) does this for you, in cells. Options: radius (1),
 * ridged (false), and fbm's octaves (1), lacunarity, gain and seed.
 *
 *   const v = loopNoise(x / 8, y / 4, t, 4, { octaves: 3 });
 */
export declare function loopNoise(x: number, y: number, t: number, period: number, o?: LoopNoiseOptions): number;
/** What worley() measures. */
export interface WorleyOptions {
    /** A whole number: 0. */
    seed?: number;
    /** false (the default): the distance to the nearest point, 0 at the points. true: how far from the edge between two cells, 0 on the edge. */
    edge?: boolean;
}
/**
 * Cellular (Worley) noise at x, y, 0 to 1: one scattered point in each unit square, and the distance to the nearest,
 * for cells, scales, stones and caustics; with `edge`, the gap to the second nearest, for cracks and webs.
 */
export declare function worley(x: number, y: number, o?: WorleyOptions): number;
/** What noise() makes: "smooth" hills and clouds, "ridged" crests, or "cells" with walls between. */
export type NoiseKind = "smooth" | "ridged" | "cells";
/** What noise() takes. Every option has a default, so noise() alone is soft clouds that change slowly. */
export interface NoiseOptions {
    /**
     * How big a feature is, in cells: 12, hills about 12 columns across and 6 rows tall, which is round on the grid's
     * cells (a row is two columns tall). Or [columns, rows] for a stretched one, or for a square grid (meta.cell 1):
     * [12, 12].
     */
    size?: number | readonly [number, number];
    /**
     * "smooth" (the default): rolling hills, clouds, smoke. "ridged": sharp crests and soft hollows, for mountains, veins
     * and lightning. "cells": cells with walls between them, 0 on a wall rising to the middle, for scales, stones and
     * the light on a pool's floor.
     */
    kind?: NoiseKind;
    /** Layers of finer detail on top of the first, a whole number from 1 to 8: 3 (1 for "cells"). Each costs as much again. */
    detail?: number;
    /** Cells a second the whole pattern slides: a number goes across (negative goes left), [x, y] any way, y down: 0. */
    drift?: number | readonly [number, number];
    /**
     * How fast it changes where it is, in features a second: 0.25, a hill turning into another in about 4 seconds. 0 when
     * it drifts (it slides instead), and 0 to hold it still.
     */
    morph?: number;
    /**
     * Seconds after which it comes back exactly, so the piece loops seamlessly: set meta.loop to the same. None by
     * default. A morphing pattern changes in a loop. A drifting one becomes a band that slides round once a period, so it
     * repeats every drift * period cells along the way it goes: make that the grid's width or more and the repeat never
     * shows; under one feature (size) it would flatten out, and throws. It can't drift and morph and loop at once: with
     * drift and period, leave morph at 0.
     */
    period?: number;
    /** The numbers it gives, from low to high: [0, 1]. [4, 12] gives a row from 4 to 12 directly, for a skyline. */
    range?: readonly [number, number];
    /** A whole number: 0. Each seed is another pattern, the same each time. */
    seed?: number;
}
/**
 * Noise made by noise(): its value at a cell at t seconds, within its range. x and y may be fractions; y and t are 0
 * when left out, so top(x) is a skyline that doesn't move.
 */
export type Noise = (x: number, y?: number, t?: number) => number;
/**
 * Noise you describe instead of work out: how big, what kind, which way it drifts, how fast it changes, when it comes
 * round. Returns a function of a cell and a time, `(x, y, t) => value`, made once (at the top of a file, or in setup)
 * and called for each cell. Every option is checked here, when it is made.
 *
 *   const sea = noise({ size: 10, drift: 6, period: 8 });         // slides right, the same again every 8 s
 *   const ridge = noise({ kind: "ridged", range: [6, 14] });      // ridge(x) is a row: a mountain's top
 *   const pool = noise({ kind: "cells", size: 8, period: 4 });    // cells that change and come round
 */
export declare function noise(o?: NoiseOptions): Noise;
/** The easings' names, as easings.net has them: linear, then in, out and inOut of each curve. */
export type EaseName = "linear" | "inQuad" | "outQuad" | "inOutQuad" | "inCubic" | "outCubic" | "inOutCubic" | "inQuart" | "outQuart" | "inOutQuart" | "inSine" | "outSine" | "inOutSine" | "inExpo" | "outExpo" | "inOutExpo" | "inCirc" | "outCirc" | "inOutCirc" | "inBack" | "outBack" | "inOutBack" | "inElastic" | "outElastic" | "inOutElastic" | "inBounce" | "outBounce" | "inOutBounce";
/**
 * The standard easings, by name: ease.outCubic(k) for k from 0 to 1. Every one starts at exactly 0 and ends at exactly
 * 1; k outside 0..1 (or NaN) is clamped first. "in" starts slow, "out" ends slow, "inOut" does both; back overshoots,
 * elastic springs and bounce bounces, between the ends. tween() and progress() take these by name, in seconds.
 */
export declare const ease: Readonly<Record<EaseName, (k: number) => number>>;
/** When a move happens and how, for progress() and tween(): in seconds, with an easing. */
export interface TweenOptions {
    /** When it starts, in seconds: 0. Into each period, when there is one. */
    start?: number;
    /** How long it takes, in seconds: 1. Above 0. */
    duration?: number;
    /** How it moves: an easing's name, or your own function from 0..1 to 0..1: "inOutSine", gentle at both ends. */
    ease?: EaseName | ((k: number) => number);
    /** Plays it again every `period` seconds: none, it plays once. start + duration must fit in it. */
    period?: number;
}
/**
 * How far a move has got at t seconds, 0 to 1 with its easing: 0 before `start`, 1 after `start + duration`, eased
 * between; with a period, again every period. The options are tween()'s.
 *
 *   s.write(2, 2, "loading".slice(0, 7 * progress(t, { duration: 2, period: 3 })));
 */
export declare function progress(t: number, o?: TweenOptions): number;
/**
 * A value moving from `from` to `to` over time, eased: from before it starts, to after it ends. Takes numbers, or
 * points as [x, y] or [x, y, z] of the same length, and returns the same kind. Options: start (0), duration (1),
 * ease ("inOutSine"), period (none: once). For there and back again, ease a triangle():
 * lerp(from, to, ease.inOutSine(triangle(t, 4))).
 *
 *   const [x, y] = tween(t, [4, 2], [40, 12], { duration: 1.5, ease: "outBack", period: 4 });
 *   s.set(x, y, "@");
 */
export declare function tween(t: number, from: number, to: number, o?: TweenOptions): number;
export declare function tween(t: number, from: readonly [number, number], to: readonly [number, number], o?: TweenOptions): Vec2;
export declare function tween(t: number, from: readonly [number, number, number], to: readonly [number, number, number], o?: TweenOptions): Vec3;
export declare function tween(t: number, from: readonly number[], to: readonly number[], o?: TweenOptions): number[];
/** A point or direction in 2D, [x, y]: x across, y down the grid. */
export type Vec2 = [number, number];
/** A point or direction in 3D, [x, y, z]: as project() takes them, x right, y up, z away from you. */
export type Vec3 = [number, number, number];
type V2 = readonly [number, number];
type V3 = readonly [number, number, number];
/** 2D vectors as [x, y]. Each makes a new vector and leaves the ones it is given as they were. */
export declare const vec2: {
    /** a + b. */
    add: (a: V2, b: V2) => Vec2;
    /** a - b: the way from b to a. */
    sub: (a: V2, b: V2) => Vec2;
    /** v times k. */
    scale: (v: V2, k: number) => Vec2;
    /** The dot product: 0 for vectors at right angles. */
    dot: (a: V2, b: V2) => number;
    /** Its length. */
    length: (v: V2) => number;
    /** The same direction, length 1; [0, 0] stays [0, 0]. */
    normalize: (v: V2) => Vec2;
    /** v turned by a radians from x toward y: clockwise on the grid, where y is down. */
    rotate: (v: V2, a: number) => Vec2;
    /** From a to b by k: a at 0, b at 1. */
    lerp: (a: V2, b: V2, k: number) => Vec2;
    /** How far apart a and b are. */
    dist: (a: V2, b: V2) => number;
};
/** 3D vectors as [x, y, z]. Each makes a new vector and leaves the ones it is given as they were. */
export declare const vec3: {
    /** a + b. */
    add: (a: V3, b: V3) => Vec3;
    /** a - b: the way from b to a. */
    sub: (a: V3, b: V3) => Vec3;
    /** v times k. */
    scale: (v: V3, k: number) => Vec3;
    /** The dot product: 0 at right angles; with unit vectors, how much a surface faces a light. */
    dot: (a: V3, b: V3) => number;
    /** At right angles to both, by the right hand rule: cross(x, y) is z. */
    cross: (a: V3, b: V3) => Vec3;
    /** Its length. */
    length: (v: V3) => number;
    /** The same direction, length 1; [0, 0, 0] stays [0, 0, 0]. */
    normalize: (v: V3) => Vec3;
    /** From a to b by k: a at 0, b at 1. */
    lerp: (a: V3, b: V3, k: number) => Vec3;
    /** How far apart a and b are. */
    dist: (a: V3, b: V3) => number;
};
/**
 * v turned by `angles`, radians about x, then y, then z, each the right hand way (about z, x turns toward y). Writes
 * into `out` when given, for a drawing loop that makes nothing; returns it.
 */
export declare function rotate3(v: V3, angles: V3, out?: Vec3): Vec3;
/**
 * rotate3 with its angles worked out once: rotation([0.3, t, 0]) turns many points by the same angles, three sums a
 * point, with no sines. The function writes into `out` when given (it may be the point itself) and returns it.
 */
export declare function rotation(angles: V3): (v: V3, out?: Vec3) => Vec3;
/** How project() looks at 3D points: the grid it draws on and the camera. */
export interface Projection {
    /** The grid's columns: the view is centred on cols / 2. */
    cols: number;
    /** The grid's rows: the view is centred on rows / 2. */
    rows: number;
    /** How far the eye is from the origin, back along z, in units: 5. Nearer is a stronger perspective. Above 0. */
    distance?: number;
    /**
     * How many rows one unit spans at z = 0: rows / 3, so -1.5 to 1.5 fills the height. Across, a unit spans `scale *
     * aspect` columns, so a unit square looks square.
     */
    scale?: number;
    /** A cell's height in cell widths: 2, as a surface's `aspect`. */
    aspect?: number;
}
/** Where a 3D point lands: the cell (a fraction: floor it, or pass it to s.set, which does) and its depth from the eye. */
export interface Projected {
    x: number;
    y: number;
    /** Distance from the eye along the view: larger is further, for a z-buffer or for shading the far side fainter. */
    depth: number;
}
/**
 * A point in 3D (x right, y up, z away from you) to a cell, in perspective: the origin lands at the grid's centre,
 * things further away come out smaller. Null for a point at or behind the eye. Writes into `out` when given. camera()
 * does this with the turning and the fitting done for you.
 *
 *   const p = project(rotate3([1, 1, 1], [0, t, 0]), { cols: 64, rows: 24 });
 *   if (p) s.set(p.x, p.y, "*");
 */
export declare function project(p: V3, o: Projection, out?: Projected): Projected | null;
/** How camera() looks at what you show it. */
export interface CameraOptions {
    /** How far what you show reaches from its centre, in units: 1. The view is fitted so nothing that far out leaves the grid. */
    size?: number;
    /** How far the eye is from the centre, in units: 4 times size. Nearer looks deeper. More than size. */
    distance?: number;
    /**
     * Seconds one whole turn takes, about the upright axis, so it loops exactly: none, it doesn't turn. A positive turn
     * carries the side facing you to the left; negative turns the other way. Or [x, y, z], seconds a turn about each
     * axis, 0 for none about that one.
     */
    turn?: number | readonly [number, number, number];
    /** How far the view tips to look down on it, in radians: 0.3, a little from above. 0 is level; negative looks up. */
    tilt?: number;
    /** A cell's height in cell widths: 2, or 1 for a piece with meta.cell 1. */
    aspect?: number;
}
/** Where camera() puts a point: its cell (fractions, as s.set takes them), its depth, and how near it is, 0 to 1. */
export interface View {
    x: number;
    y: number;
    /** Distance from the eye: larger is further. */
    depth: number;
    /** 1 at the nearest a point within `size` can be, 0 at the furthest: for shading the far side fainter. */
    near: number;
}
/** A camera made by camera(): where a 3D point is at t seconds, or null if it is behind the eye. */
export type Camera = (p: V3, t?: number) => View | null;
/**
 * A camera on 3D points that turns them and lands them on the grid: points within `size` of the centre always fit,
 * whatever the turn. Points are [x, y, z], y up. The camera returns the same View object every call, so read it
 * before the next.
 *
 *   const view = camera({ cols: 64, rows: 24 }, { turn: 8 });   // a turn every 8 s
 *   const v = view([0, 1, 0], t);
 *   if (v) s.set(v.x, v.y, v.near > 0.5 ? "@" : ".");
 */
export declare function camera(area: {
    cols: number;
    rows: number;
}, o?: CameraOptions): Camera;
/**
 * How far t is through a cycle of `period` seconds, from 0 up to 1, back to 0 every period exactly: a sawtooth, and
 * the start of every loop. phase(5, 2) is 0.5.
 */
export declare function phase(t: number, period: number): number;
/**
 * A sine wave between lo (-1) and hi (1) that repeats every `period` seconds exactly: oscillate(t, 2, 0, 1) breathes
 * once every two seconds. It starts in the middle, rising; `offset` (0) moves it along its cycle, as a share of the
 * period, 0 to 1: 0.25 starts at the top.
 */
export declare function oscillate(t: number, period: number, lo?: number, hi?: number, offset?: number): number;
/** From 0 up to 1 and back down to 0 every `period` seconds, in straight lines: 0 at t = 0, 1 halfway. */
export declare function triangle(t: number, period: number): number;
/**
 * 1 for the first `width` seconds of every `period` and 0 for the rest: a blink, a beat, a light that comes on.
 * `width` is half the period by default, a square wave.
 */
export declare function pulse(t: number, period: number, width?: number): number;
/**
 * Which turn of `period` seconds t is in: 0 for the first, 1 for the next, -1 before 0. It agrees with phase(): t is
 * (cycle + phase) times the period. A seed for what changes each time round: random(cycle(t, 6)).
 */
export declare function cycle(t: number, period: number): number;
/**
 * The time after which every one of `periods` comes round together, in seconds: lcm([2, 3, 4]) is 12, lcm([0.7, 0.3])
 * is 2.1, lcm([1 / 3, 1]) is 1. Undefined when that is longer than `max` seconds (60), where svg() would rather play
 * a few seconds than the whole of it. It is the shortest whole number of the longest period that each of the others
 * divides, to a millionth of a turn, so a period that isn't a round number of hundredths still loops exactly.
 */
export declare function lcm(periods: readonly number[], max?: number): number | undefined;
/** What twinkle() takes. */
export interface TwinkleOptions {
    /** Seconds after which every twinkle comes round, so the piece loops: 4. Each thing twinkles 1, 2 or 3 times in it. */
    period?: number;
    /** The dimmest it gets, 0 to 1: 0.2. 0 lets things go out. */
    min?: number;
}
/**
 * How bright something twinkling is at t seconds, from `min` to 1: each `id` (an index, or a spot's k) on its own
 * beat and out of step with the rest, all coming round together every period. For stars, lights and sparkle.
 *
 *   s.set(p.x, p.y, shadeChar(" .·+*", twinkle(t, p.i)));
 */
export declare function twinkle(t: number, id: number, o?: TwinkleOptions): number;
/** One of scatter()'s spots: its cell, its number, and a seeded number of its own. */
export interface Spot {
    /** Its column, a whole number. */
    x: number;
    /** Its row, a whole number. */
    y: number;
    /** Its number, from 0: for twinkle(t, p.i), or anything else that should differ from spot to spot. */
    i: number;
    /** A number of its own from 0 up to 1, seeded: a size, a brightness, a colour, a chance. */
    k: number;
}
/** What scatter() takes. */
export interface ScatterOptions {
    /** A whole number: 1. Each seed is another spread, the same each time. */
    seed?: number;
    /**
     * true (the default): spread evenly, no clumps and no big gaps (a jittered grid, each spot in its own square-looking
     * box). false: anywhere, as pure chance falls, clumps and all. More spots than half the cells are always placed by
     * chance, which is even enough packed that close.
     */
    even?: boolean;
}
/**
 * `count` spots on different cells of an area, seeded: where the stars, the snow, the flowers go. The area is a size,
 * { cols, rows }, or a region with x and y; the setup's size will do. Throws for more spots than cells.
 *
 *   const stars = scatter(120, { cols: 64, rows: 24 });
 *   for (const p of stars) s.set(p.x, p.y, p.k < 0.1 ? "*" : ".");
 */
export declare function scatter(count: number, area: {
    cols: number;
    rows: number;
    x?: number;
    y?: number;
}, o?: ScatterOptions): Spot[];
