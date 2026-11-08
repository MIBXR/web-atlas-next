import type { Meta } from "../../types.ts";
import { over as overOf } from "../compose.ts";
import { Chainable, type KitPiece, type Source } from "../core.ts";
import { type FieldCell } from "../field.ts";
import { type Area } from "../materials.ts";
import { type NoiseOptions } from "../math.ts";
import { type Amount, type Density, type Heading, type Scale, type Speed } from "./checks.ts";
import { type PaletteLike, type Scheme } from "./palettes.ts";
/**
 * What a look draws at a cell: x and y as field() gives them (0, 0 in the middle, the shorter side -1 to 1, y down), the
 * time, and field()'s cell. It returns how much is there, 0 to 1, or null for nothing (the cell is not drawn).
 */
type Fn = (x: number, y: number, t: number, at: FieldCell) => number | null;
interface Def {
    name: string;
    note: string;
    cols: number;
    rows: number;
    scheme: Scheme;
    ramp: string;
    light: boolean;
    dither: boolean;
    periods: readonly number[];
    loopless?: boolean;
    fn: Fn;
}
/**
 * A look: a piece (it has meta and default, and plays wherever a piece does) that also chains. Each method returns a new
 * look and leaves this one as it was; the result keeps this look's size, palette and characters.
 *
 *   plasma().mask(heart()).zoom("in")
 *   clouds().mix(sea(), "half")
 */
export declare class Look extends Chainable implements KitPiece {
    #private;
    readonly meta: Meta;
    readonly default: KitPiece["default"];
    constructor(def: Def);
    /**
     * This look and another, `amount` of the way to the other: "half" (the default, 0.5), "a little" (0.25), "mostly"
     * (0.75), or a number 0 to 1. Where neither draws anything, nothing is drawn.
     */
    mix(other: Look, amount?: "a little" | "half" | "mostly" | number): Look;
    /** Another look added on top: bright where either is, brightest where both are. `amount` of the other: 1. */
    add(other: Look, amount?: Amount): Look;
    /** This look shaded by another: only bright where both are, as light through a pattern. */
    multiply(other: Look): Look;
    /**
     * Only the part of this look inside a shape; nothing is drawn outside it. The shape is any of: below(0.4) and
     * above(0.3), the bottom or top share of the picture; a word, "HI", in big letters; a shape from ascii.rest/kit's
     * materials, such as heart(), ball(), star() or cup(), or area.rect() and its kin; any piece or grid, its inked
     * cells, centred (a banner, a logo from fromImage(), another look); outside(shape) for the rest; or a function of x,
     * y, t and the cell that returns true where to draw. A string is always a word in big letters: for a block of ascii
     * art, pass asPiece(text). A word or a material's shape is filled, its every cell drawn. The mask follows a rotate(),
     * zoom(), move() or warp() chained after it.
     */
    mask(shape: MaskLike): Look;
    /**
     * The look sliding one way: "left" (the default), "right", "up", "down" or a diagonal such as "up-left", at `speed`
     * ("normal": about a picture's height every 8 seconds). It comes round seamlessly, so it loops.
     */
    move(direction?: Heading, speed?: Speed | "still"): Look;
    /** Closer or further: "in" (twice as big), "out" (half as big), or a number of times as big: 2 is twice. */
    zoom(amount?: "in" | "out" | number): Look;
    /**
     * Turned round its middle. A speed, "slow" (a turn in 16 seconds, the default), "normal" (8) or "fast" (4), or a
     * number (1 is normal, below 0 the other way), spins it for ever, looping each turn; "eighth", "quarter" or "half"
     * turns it that far and holds it there.
     */
    rotate(by?: "slow" | "normal" | "fast" | "eighth" | "quarter" | "half" | number): Look;
    /** Bent, as if seen through moving water or heat haze: `amount` "subtle", "medium" (the default) or "strong". */
    warp(amount?: Amount): Look;
    /**
     * Softened, each cell the average of those round it: `amount` "subtle" (its neighbours counting little), "medium"
     * (the default), "strong" (two cells out), or cells out, a whole number up to 8.
     */
    blur(amount?: Amount): Look;
    /** Hard edged: full where the look is above `level`, empty where it is below. "low" 0.3, "half" 0.5 (the default), "high" 0.7, or 0 to 1. */
    threshold(level?: "low" | "half" | "high" | number): Look;
    /** Turned inside out: bright where it was dark and dark where it was bright. Where nothing was drawn, nothing is. */
    invert(): Look;
    /** In a few flat bands instead of a smooth fade, as a poster is printed: `levels` from 2 to 16, 4 by default. */
    posterize(levels?: number): Look;
    /** The same look in other colours: a palette's name such as "ocean", colours of your own faint to strong, or { light, dark }. */
    palette(colors: PaletteLike): Look;
    /** The same look in other characters: a ramp's name, "blocks", "dots" and the rest, or two or more of your own, faint to strong. */
    ramp(chars: string): Look;
    /** The same look at another size, in columns and rows. */
    size(cols: number, rows: number): Look;
    /** The same look with another name, and a line saying what it shows. */
    named(name: string, note?: string): Look;
    /** This look laid over another piece, in that piece's size: its empty cells let the piece show. Options as compose's over(). */
    over(bottom: Source, o?: Parameters<typeof overOf>[2]): KitPiece;
    /** Another piece laid over this look, centred: a banner on a starfield, a logo on a sea. Options as compose's over(). */
    behind(top: Source, o?: Parameters<typeof overOf>[2]): KitPiece;
}
/** A shape that mask() keeps a look inside. Make one with below(), above(), letters() or outside(). */
export interface Mask {
    readonly kind: "mask";
    /** The loops of anything in it that moves, in seconds. */
    readonly periods: readonly number[];
    /** True when something in it moves on no loop, a piece that has none: a look masked by it moves, and has no loop. */
    readonly loopless?: boolean;
    /** True for a shape the look fills, a word or a heart: every cell inside it is drawn, the faintest in its ramp's first ink. */
    readonly fills?: boolean;
    /** True for a cell to draw. */
    test(x: number, y: number, t: number, at: FieldCell): boolean;
}
/** Anything mask() takes: a Mask, a material's shape (an Area), a piece, a word, or a function that returns true where to draw. */
export type MaskLike = Mask | Area | Source | ((x: number, y: number, t: number, at: FieldCell) => boolean);
/** The bottom `share` of the picture, 0 to 1: below(0.4) is its bottom 40%. "third" and "half" are words for 1/3 and 1/2. */
export declare function below(share: "third" | "half" | number): Mask;
/** The top `share` of the picture, 0 to 1: above(0.3) is its top 30%. "third" and "half" are words for 1/3 and 1/2. */
export declare function above(share: "third" | "half" | number): Mask;
/** Everywhere a shape is not: outside(ball()) keeps a look round a ball and leaves the ball empty. Takes what mask() takes. */
export declare function outside(shape: MaskLike): Mask;
/**
 * A word in big letters, as large as fits the picture, centred: a look masked by it fills the letters. `big` sets the
 * letters' size instead, a whole number from 1 (5 rows tall) to 8.
 */
export declare function letters(text: string, o?: {
    big?: number;
}): Mask;
/** What every look takes. Each look's own options are listed on it. */
export interface LookOptions {
    /** Its colours: a palette's name ("ocean", "sunset", "neon" and the rest), one #rrggbb, colours faint to strong, or { light, dark }. Each look has its own default. */
    palette?: PaletteLike;
    /** How fast it moves: "slow", "normal" (the default), "fast", "still", or a number, 1 being normal and 2 twice as fast. */
    speed?: Speed | "still";
    /** Seconds for one loop, over speed: each look says its own at normal speed. */
    period?: number;
    /** How big its features are: "small", "medium" (the default), "large", "huge", or a number, 1 being medium. */
    scale?: Scale;
    /** Its characters, faint to strong: a ramp's name ("standard", "blocks", "dots" and the rest) or two or more of your own. Each look has its own default. */
    ramp?: string;
    /** Ordered dithering between neighbouring characters, for smooth fades: false for most looks. */
    dither?: boolean;
    /** Its size: 64 columns by 24 rows. */
    cols?: number;
    rows?: number;
    /** Its name, the look's own by default, and one line saying what it shows. */
    name?: string;
    note?: string;
}
/**
 * What a look of your own draws at each cell: x and y as field() gives them (0, 0 in the middle, the shorter side
 * -1 to 1, y down), t in seconds, and field()'s cell. It returns how much is there, 0 to 1, or null for nothing.
 */
export type LookFn = Fn;
/** A noise feature's size by name, for LookKit's noise(): fine, small, medium, large or huge. */
export type NoiseSize = "fine" | "small" | "medium" | "large" | "huge";
/** What look() hands a look's body: its options worked out, and helpers that keep it looping. */
export interface LookKit {
    /** The scale asked for as a number: 1 for "medium", 1.6 for "large". Divide x and y by it. */
    scale: number;
    /** The speed asked for as a number: 1 for "normal", 0 for "still". */
    speed: number;
    /** The look's loop in seconds at this speed, 0 when still. */
    period: number;
    /** Where in its loop t is, 0 up to 1, always 0 when still: TAU * phase(t) in a sine, times a whole number, loops. */
    phase(t: number): number;
    /**
     * Noise that loops with the look: `travel` is the way it slides, "up", "down", "left" or "right" (a picture's height
     * a loop), or [x, y], how far in one loop; or `change` how often it turns into new shapes in place, "slowly",
     * "steadily" (the default) or "quickly", or times a loop. `size` is "fine", "small", "medium" (the default), "large"
     * or "huge", or as math's noise() in the units of x and y, as are `kind`, `detail` and `seed`. It holds still when
     * the look does.
     */
    noise(o?: Omit<NoiseOptions, "size"> & {
        size?: NoiseOptions["size"] | NoiseSize;
        travel?: readonly [number, number] | "up" | "down" | "left" | "right";
        change?: number | "slowly" | "steadily" | "quickly";
    }): (x: number, y: number, t: number) => number;
    /** The column x falls in, as a fraction, 0 at the left edge: Math.floor() it for the cell. */
    column(x: number, at: FieldCell): number;
    /** The row y falls in, as a fraction, 0 at the top edge. */
    row(y: number, at: FieldCell): number;
}
/** How a look of your own is made when its user asks for nothing: each has a default. */
export interface LookRecipe {
    /** One line saying what it shows: its name by default. */
    note?: string;
    /** Its palette: "mono" by default. */
    palette?: PaletteLike;
    /** Its characters, faint to strong: "standard" by default. */
    ramp?: string;
    /**
     * true for brightness that fills the picture, such as a plasma: the ramp turns round on a light page so bright stays
     * bright. false (the default) for ink on an empty ground, such as stars or flames.
     */
    light?: boolean;
    /** Its loop at normal speed, in seconds: 8. speed: "slow" doubles it, "fast" halves it. */
    period?: number;
    /** Dithering by default: false. */
    dither?: boolean;
    /** The names of the options of its own that it takes besides LookOptions, so a misspelt one throws: none. */
    options?: readonly string[];
}
/** A look of your own in one object: its name, how it looks by default, and its body. What look()'s first form takes. */
export interface LookDef<O extends LookOptions = LookOptions> extends LookRecipe {
    name: string;
    /** Given a LookKit and the options once, returns what each cell is, (x, y, t) => 0 to 1, or null for nothing. */
    body: (k: LookKit, o: O) => LookFn;
}
/**
 * A look of your own, made the way every look here is: a name, how it looks by default, and a body that is given a
 * LookKit and the options once and returns what each cell is. speed, scale, palette, ramp, size, name and note are
 * worked out and checked for you, and the result chains like any look. In one object with the options a user passed
 * second, or as name, options, how and body.
 *
 *   export const embers = look({ name: "embers", palette: "fire", period: 4, body: (k) => k.noise({ travel: "up", size: "small" }) });
 *   export const glow = (o?: LookOptions) => look({ name: "glow", palette: "gold", body: (k) => (x, y) => 1 - Math.hypot(x, y) }, o);
 *   export const fire = (o?: LookOptions) => look("embers", o, { palette: "fire", period: 4 }, (k) => k.noise({ travel: "up" }));
 */
export declare function look<O extends LookOptions>(def: LookDef<O>, o?: O): Look;
export declare function look<O extends LookOptions>(name: string, o: O | undefined, how: LookRecipe, body: (k: LookKit, o: O) => LookFn): Look;
/** Rolling bands of water, crests wandering as they travel `to` "right" (the default) or "left". Ocean blues, " .-~≈" by default. */
export declare function waves(o?: LookOptions & {
    to?: "left" | "right";
}): Look;
/**
 * The open sea to the horizon: swell coming in, larger and brighter near, finer far off, an empty sky above.
 * `horizon` "high" (a third of the way down), "middle" (half way, the default) or "low" (two thirds), so the masks
 * line up with it by name: above("half") is the sky over the default sea, above("third") over a high one.
 * Ocean blues by default.
 *
 *   sea().add(stars().mask(above("half")))
 */
export declare function sea(o?: LookOptions & {
    horizon?: "high" | "middle" | "low";
}): Look;
/** The demo-scene plasma: soft interference blobs drifting through the palette. Sunset colours by default. */
export declare function plasma(o?: LookOptions): Look;
/** Northern lights: curtains hanging from a wandering edge, streaked and fading downwards, over an empty sky. Aurora colours by default. */
export declare function aurora(o?: LookOptions): Look;
/** Flames licking up from the bottom of the picture, white hot at their roots. Fire colours by default. */
export declare function flames(o?: LookOptions): Look;
/** Clouds drifting across, soft edged, in an empty sky, `to` "right" (the default) or "left". Mono greys by default. */
export declare function clouds(o?: LookOptions & {
    to?: "left" | "right";
}): Look;
/** A plume of smoke curling up from the bottom middle, spreading and thinning as it rises. Mono greys by default. */
export declare function plume(o?: LookOptions): Look;
/** Rings spreading out over water from `drops` places (1, the middle, by default), crossing where they meet. Ocean blues by default. */
export declare function ripple(o?: LookOptions & {
    drops?: number;
    seed?: number;
}): Look;
/** Rings flowing from the middle without end, `to` "out" (the default) or "in". Candy colours by default. */
export declare function rings(o?: LookOptions & {
    to?: "in" | "out";
}): Look;
/** Flying down an endless tunnel of tiles, dark in the distance. Neon colours by default. */
export declare function tunnel(o?: LookOptions): Look;
/** A spiral of `arms` (2 by default) turning round the middle. Candy colours by default. */
export declare function spiral(o?: LookOptions & {
    arms?: number;
}): Look;
/** Clouds swirling into a whirlpool, faster near the middle. Space colours by default. */
export declare function vortex(o?: LookOptions): Look;
/** Stripes sliding `to` "right" (the default), "left", "up", "down" or a diagonal such as "up-left". Neon colours by default. */
export declare function stripes(o?: LookOptions & {
    to?: Heading;
}): Look;
/** A checkerboard rolling diagonally. Mono greys by default. */
export declare function checker(o?: LookOptions): Look;
/** The palette from one side to the other, sweeping slowly back and forth. `way` "across" (the default), "down", "diagonal" or "round". Sunset colours by default. */
export declare function sweep(o?: LookOptions & {
    way?: "across" | "down" | "diagonal" | "round";
}): Look;
/** Noise, slowly changing: `kind` "smooth" (the default) clouds, "ridged" crests, or "cells" with walls between. Mono greys by default. */
export declare function turbulence(o?: LookOptions & {
    kind?: "smooth" | "ridged" | "cells";
}): Look;
/** Marble: veins bent by noise, slowly flowing. Paper colours by default. */
export declare function marble(o?: LookOptions): Look;
/** A lava lamp: blobs that rise, merge and sink. Lava colours by default. */
export declare function lavaLamp(o?: LookOptions & {
    blobs?: number;
    seed?: number;
}): Look;
/** Stars twinkling on their own beats. `density` "sparse", "normal" (the default) or "dense"; `seed` another sky. Night colours by default. */
export declare function stars(o?: LookOptions & {
    density?: Density;
    seed?: number;
}): Look;
/** Rain falling in streaks: `wind` "none" (the default), "left" or "right" leans it; `density` as many drops. Night colours by default. */
export declare function rainfall(o?: LookOptions & {
    wind?: "none" | "left" | "right";
    density?: Density;
    seed?: number;
}): Look;
/** Snow falling and swaying in near, middle and far flakes. `density` as many flakes. Ice colours by default. */
export declare function snowfall(o?: LookOptions & {
    density?: Density;
    seed?: number;
}): Look;
/** The digital rain: columns of changing glyphs falling, each led by a bright head. `density` as many columns. Matrix greens by default. */
export declare function matrix(o?: LookOptions & {
    density?: Density;
    seed?: number;
}): Look;
/** A spiral galaxy turning, `arms` (2 by default) round a bright core, tilted a little towards you. Space colours by default. */
export declare function galaxy(o?: LookOptions & {
    arms?: number;
    seed?: number;
}): Look;
/** A sun: a bright disc in a soft corona, its rays slowly turning. Gold colours by default. */
export declare function sun(o?: LookOptions & {
    rays?: number;
}): Look;
export {};
