import { type KitPiece } from "../core.ts";
import { type Easing, type Speed, type Toward } from "./checks.ts";
import { type Thing } from "./words.ts";
import type { ColorLike } from "./palettes.ts";
/** What every motion takes. */
export interface MotionOptions {
    /** How fast: "slow", "normal" or "fast", or times as fast as normal (2, 0.5): "normal". Each motion says its normal. */
    speed?: Speed;
    /** Seconds for one loop of the motion, over speed. */
    period?: number;
    /** The new piece's name: the thing's own. */
    name?: string;
    /** One line, up to 72 characters, saying what you see: the name and the motion. */
    note?: string;
}
/** How a thing spins: see spinning(). */
export type Way = "tumble" | "turntable" | "wheel" | "flip";
export interface SpinOptions extends MotionOptions {
    /**
     * How it turns. For a 3D shape: "tumble" (the default), over and round at once as the donut does; "turntable", round
     * an upright axis; "wheel", round the axis facing you; "flip", head over heels. A flat thing, a piece or text, turns
     * like a coin on a table, "turntable", its back mirrored.
     */
    way?: Way;
    /** The size, for a 3D shape: 44 by 22. A flat thing keeps its own. */
    cols?: number;
    rows?: number;
}
/**
 * A thing spinning, once round in 6 seconds at normal speed. A 3D shape turns in 3D, tumbling by default; a flat
 * thing, a banner or a logo, turns like a coin on a table, narrowing to its edge and showing its mirrored back.
 *
 *   spinning(torus())                                  // the spinning donut
 *   spinning(cube({ color: "#38bdf8" }), { way: "turntable", speed: "slow" })
 *   spinning(banner("ok"))                             // a coin of words
 */
export declare function spinning(thing: Thing, o?: SpinOptions): KitPiece;
export interface OrbitOptions extends MotionOptions {
    /** What it goes round, at the middle: nothing by default. A 3D shape round a 3D shape goes round in 3D. */
    around?: Thing;
    /**
     * How far out it goes: "close", "medium" (the default) or "far", or a number: units for a 3D shape (2.6), columns for
     * a flat thing (12, or 3 past what it goes round).
     */
    radius?: "close" | "medium" | "far" | number;
    /** The size, for a 3D orbit: 56 by 22. A flat orbit is as big as it needs. */
    cols?: number;
    rows?: number;
}
/**
 * A thing going round in a circle, once in 6 seconds at normal speed, round what it is `around` if anything, passing in
 * front of it below and behind it above. A 3D shape round a 3D shape goes round in 3D, hidden by depth; anything else
 * goes round flat, its circle squashed to look round on tall cells.
 *
 *   orbiting(sphere({ radius: 0.3 }), { around: sphere({ color: "#3b82f6" }) })
 *   orbiting("*", { around: banner("sun"), speed: "slow" })
 */
export declare function orbiting(thing: Thing, o?: OrbitOptions): KitPiece;
export interface BounceOptions extends MotionOptions {
    /** How high it bounces: "low" (3 rows), "medium" (6, the default) or "high" (10), or rows. */
    height?: "low" | "medium" | "high" | number;
    /** A shadow on the ground under it, narrowing as it rises: true. */
    shadow?: boolean;
}
/**
 * A thing bouncing on the ground, landing every 1.2 seconds at normal speed: fast at the bottom, slow at the top, as a
 * ball goes, with its shadow on the ground under it.
 *
 *   bouncing(banner("boing"))
 *   bouncing(ball(), { height: "high", speed: "slow" })
 */
export declare function bouncing(thing: Thing, o?: BounceOptions): KitPiece;
export interface FloatOptions extends MotionOptions {
    /** How far it rises and sinks: "low" (1 row each way, the default), "medium" (2) or "high" (3), or rows. */
    height?: "low" | "medium" | "high" | number;
}
/**
 * A thing floating, rising and sinking gently, once in 3 seconds at normal speed: a boat on a swell, a balloon, a
 * logo hovering.
 *
 *   floating(heart())
 */
export declare function floating(thing: Thing, o?: FloatOptions): KitPiece;
export interface SwayOptions extends MotionOptions {
    /** How far it leans: "subtle" (1 column), "medium" (2, the default) or "strong" (4), or columns. */
    amount?: "subtle" | "medium" | "strong" | number;
    /** Where it is held still: "bottom" (the default), so its top sways as a tree does, or "top", so it swings as a sign hangs. */
    from?: "bottom" | "top";
}
/**
 * A thing swaying side to side, once in 3 seconds at normal speed: held at the bottom it leans as a tree or a flame
 * does in a breeze, held at the top it swings as a hanging sign does.
 *
 *   swaying(flame())
 *   swaying(banner("open"), { from: "top", speed: "slow" })
 */
export declare function swaying(thing: Thing, o?: SwayOptions): KitPiece;
export interface PulseOptions extends MotionOptions {
    /** How much it swells: "subtle" (a tenth), "medium" (a fifth, the default) or "strong" (a third), or a share above 0. */
    amount?: "subtle" | "medium" | "strong" | number;
    /** "breath" (the default): swelling and easing back, once in 2.4 seconds; "heart": two quick beats and a rest, once in 1.2. */
    beat?: "breath" | "heart";
}
/**
 * A thing pulsing, growing and shrinking about its middle: breathing slowly, or beating as a heart does.
 *
 *   pulsing(heart(), { beat: "heart" })
 */
export declare function pulsing(thing: Thing, o?: PulseOptions): KitPiece;
export interface BlinkOptions extends MotionOptions {
    /** The share of each blink it shows for, from 0 to 1: 0.6. */
    on?: number;
}
/**
 * A thing blinking on and off, once in 1.2 seconds at normal speed: a cursor, a warning, a light on a mast. For a
 * moment either side of off it is a ghost of itself in dots, so the blink is soft rather than a flicker.
 *
 *   blinking("● REC", { speed: "slow" })
 */
export declare function blinking(thing: Thing, o?: BlinkOptions): KitPiece;
export interface ShakingOptions extends MotionOptions {
    /** How far it jolts: "subtle" (1 cell, the default), "medium" (2) or "strong" (3), or cells. */
    amount?: "subtle" | "medium" | "strong" | number;
    /** Shake all the time rather than now and then: false. Now and then is every 2 seconds at normal speed. */
    nonstop?: boolean;
}
/**
 * A thing shaking: jolting for a moment now and then, every 2 seconds at normal speed, or all the time. fx's shake()
 * with its numbers put in words.
 *
 *   shaking(banner("boom"), { amount: "strong" })
 */
export declare function shaking(thing: Thing, o?: ShakingOptions): KitPiece;
export interface DriftOptions extends MotionOptions {
    /** Which way it goes: "right" (the default), "left", "up" or "down". Off one edge, it comes back in at the other. */
    to?: Toward;
    /** What it drifts across, in that thing's size: an empty stage by default (see cols and rows). */
    across?: Thing;
    /** The lane it keeps to: "top", "middle" (the default) or "bottom" going across; "left", "middle" or "right" going up or down. */
    lane?: "top" | "middle" | "bottom" | "left" | "right";
    /**
     * The stage's size, when it drifts across nothing. Going across: 64 columns, or its width and 16 more, by its own
     * height. Going up or down: its own width by 24 rows, or its height and 8 more. Narrower than the thing is fine: a
     * ticker's words cross a stage shorter than they are.
     */
    cols?: number;
    rows?: number;
}
/**
 * A thing drifting across, off one edge and back in at the other, a crossing taking 8 seconds at normal speed: a cloud
 * over the sky, a ship through the stars, a bubble rising.
 *
 *   drifting(cloud(), { across: sky() })
 *   drifting("<o>", { to: "left", lane: "top" })
 */
export declare function drifting(thing: Thing, o?: DriftOptions): KitPiece;
export interface EntranceOptions extends MotionOptions {
    /** Seconds it takes to come on or go: 0.8, or at speed "fast" half that. The same as period. */
    seconds?: number;
    /** Seconds it stays before it all plays again: 2. "forever" plays it once and stays. */
    hold?: number | "forever";
    /** How it moves: "snappy" coming on, "smooth" going; any easing word. */
    ease?: Easing;
}
/**
 * A thing growing from nothing to its size about its middle, in 0.6 seconds at normal speed, overshooting a little
 * and settling ("snappy"), then staying 2 seconds and growing again.
 *
 *   growIn(heart(), { ease: "springy" })
 */
export declare function growIn(thing: Thing, o?: EntranceOptions): KitPiece;
/** Where a thing comes in from or goes out to. */
export type Offstage = "left" | "right" | "top" | "bottom";
/**
 * A thing sliding in from an edge, `from` ("left", the default, "right", "top" or "bottom"), in 0.8 seconds at normal
 * speed, overshooting a little and settling, then staying 2 seconds and sliding in again. It enters its own frame, so
 * it slides in from nowhere: lay it over() a scene for a title coming on.
 *
 *   slideIn(banner("hello"), { from: "left", ease: "bouncy" })
 */
export declare function slideIn(thing: Thing, o?: EntranceOptions & {
    from?: Offstage;
}): KitPiece;
/**
 * A thing staying 2 seconds, then sliding out to an edge, `to` ("right", the default, "left", "top" or "bottom"), in
 * 0.8 seconds at normal speed, gently ("smooth"), then gone for half a second and back.
 *
 *   slideOut("see you", { to: "bottom" })
 */
export declare function slideOut(thing: Thing, o?: EntranceOptions & {
    to?: Offstage;
}): KitPiece;
/** What planet() looks like: see planet(). */
export type World = "gas" | "earth" | "mars" | "ice";
export interface PlanetOptions extends MotionOptions {
    /** What kind of world: "gas" (the default), a banded giant; "earth", blue with continents; "mars", red and rocky; "ice", pale and banded. */
    type?: World;
    /** A moon going round it, in front and behind: false. */
    moon?: boolean;
    /** A ring round it, tipped toward you: false. */
    rings?: boolean;
    /** Its colour, over the type's own: #rrggbb, or a palette's name such as "ocean". The scene shades it for each page. */
    color?: ColorLike;
    /** Its size: 64 by 24. */
    cols?: number;
    rows?: number;
}
/**
 * A planet turning on a tipped axis, once in 8 seconds at normal speed, with a moon going round twice as fast and a
 * ring if you like: two spheres and a torus in a scene(), so read it to make a world of your own.
 *
 *   planet({ type: "earth", moon: true })
 *   planet({ rings: true, speed: "slow" })
 */
export declare function planet(o?: PlanetOptions): KitPiece;
