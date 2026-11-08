import type { Piece } from "../../types.ts";
import { type EaseName } from "../math.ts";
import type { Area, Part } from "../materials.ts";
import type { Shape3d } from "../shapes3d.ts";
/**
 * How fast something moves: "slow" (half as fast as normal), "normal", "fast" (twice as fast), or a number, times as
 * fast as normal: 2 is twice as fast, 0.5 half. Every recipe has its own normal and says it. `period` sets the seconds
 * of one loop yourself, over speed. A look can also be "still".
 */
export type Speed = "slow" | "normal" | "fast" | number;
/** How big a look's features are: "small", "medium" (the default), "large", "huge", or a number, 1 being medium. */
export type Scale = "small" | "medium" | "large" | "huge" | number;
/** How much: "subtle", "medium" or "strong", or a number. Each recipe says what its words stand for. */
export type Amount = "subtle" | "medium" | "strong" | number;
/** How many: "sparse", "normal", "dense", or a number, 1 being normal and 2 twice as many. */
export type Density = "sparse" | "normal" | "dense" | number;
/** A way across the picture, diagonals included. */
export type Heading = "left" | "right" | "up" | "down" | "up-left" | "up-right" | "down-left" | "down-right";
/** A way across the picture, straight. */
export type Toward = "left" | "right" | "up" | "down";
/**
 * How a move starts and stops, by name: "steady" (the same speed all the way), "smooth" (gentle at both ends),
 * "snappy" (quick, overshooting a little and settling), "springy" (overshooting and wobbling) or "bouncy" (landing
 * and bouncing), or any of math's easings by name, such as "outCubic".
 */
export type Easing = "steady" | "smooth" | "snappy" | "springy" | "bouncy" | EaseName;
/** The easing each plain word stands for. */
export declare const easings: Readonly<Record<"steady" | "smooth" | "snappy" | "springy" | "bouncy", EaseName>>;
export declare const SPEEDS: {
    readonly slow: 0.5;
    readonly normal: 1;
    readonly fast: 2;
};
export declare const SCALES: {
    readonly small: 0.6;
    readonly medium: 1;
    readonly large: 1.6;
    readonly huge: 2.5;
};
export declare const AMOUNTS: {
    readonly subtle: 0.5;
    readonly medium: 1;
    readonly strong: 1.8;
};
export declare const DENSITIES: {
    readonly sparse: 0.45;
    readonly normal: 1;
    readonly dense: 2;
};
export declare const HEADINGS: Readonly<Record<Heading, readonly [number, number]>>;
/** A value as an error shows it: a string in quotes, a function by its name, anything else as it reads. */
export declare function show(v: unknown): string;
export declare const or: (words: readonly string[]) => string;
/** An options object, checked for keys it does not take, so a typo throws instead of doing nothing. */
export declare function optionsOf<T extends object>(what: string, o: T | undefined, keys: readonly string[]): T;
/** A number from lo to hi, or its default. */
export declare function numberOf(what: string, v: unknown, def: number, lo?: number, hi?: number): number;
/** A whole number from lo to hi, or its default. */
export declare function wholeOf(what: string, v: unknown, def: number, lo: number, hi?: number): number;
/** One of a list of words, or its default. */
export declare function wordOf<W extends string>(what: string, v: unknown, words: readonly W[], def: W): W;
/**
 * Words to show, checked now rather than on the first frame: a string whose every character a cell can hold (no tab,
 * no emoji outside the Basic Multilingual Plane), on one line unless `lines`. Undefined when none is given.
 */
export declare function textOf(what: string, v: unknown, o?: {
    lines?: boolean;
}): string | undefined;
/** True or false, or its default. */
export declare function boolOf(what: string, v: unknown, def: boolean): boolean;
/** A word that stands for a number, as `{ low: 1, high: 4 }` does for a height, or a number from lo to hi itself. */
export declare function sizeOf<W extends string>(what: string, v: unknown, words: Readonly<Record<W, number>>, def: NoInfer<W> | number, lo?: number, hi?: number): number;
/** A whole number used as a seed, 1 by default. */
export declare function seedOf(what: string, v: unknown): number;
/** A speed as times as fast as normal: 0.5 for "slow", 1 for "normal", 2 for "fast", or the number given. With `still`, "still" is 0. */
export declare function speedOf(what: string, v: unknown, o?: {
    still?: boolean;
}): number;
/** The seconds one loop takes at a speed, from the recipe's `normal` seconds: `period` wins when given. */
export declare function secondsOf(what: string, o: {
    speed?: unknown;
    period?: unknown;
}, normal: number): number;
/**
 * The loops widgets keep to: every one divides a minute, so any widgets side by side, in a row(), a column() or a
 * dashboard grid(), come round together within one, and the dashboard loops.
 */
export declare const LOOPS: readonly [0.25, 0.5, 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60];
/** Seconds as one of LOOPS: the nearest (by ratio), or with `up` the shortest at least as long. */
export declare function loopOf(seconds: number, up?: boolean): number;
/** An easing by its name, as a function from 0..1 to 0..1. */
export declare function easeOf(what: string, v: unknown, def: Easing): (k: number) => number;
/**
 * One colour for each page from what a recipe's `color` takes: #rrggbb (the same on both), { light, dark }, or a
 * palette's name, which gives that palette's strong colour for each page: "ocean" is a deep blue on paper and a bright
 * one on a dark page. Undefined when none is given.
 */
export declare function colorOf(what: string, v: unknown): {
    light: string;
    dark: string;
} | undefined;
/** True for an area such as heart(), cup() or area.rect(). */
export declare const isArea: (v: unknown) => v is Area;
/** True for a part made with shape() or emit(). */
export declare const isPart: (v: unknown) => v is Part;
/** True for a piece: meta and a default function. */
export declare const isPiece: (v: unknown) => v is Piece;
/** True for a 3D shape made by torus(), sphere(), cube() and the rest: scene() says if it is not one after all. */
export declare const isShape3d: (v: unknown) => v is Shape3d;
/** True for a 3D shape or a list of them. */
export declare const is3d: (v: unknown) => v is Shape3d | readonly Shape3d[];
/** A piece under a name and a note of its own, everything else as it was. */
export declare function titled<P extends Piece>(p: P, name: string | undefined, note: string | undefined): P;
export declare const NAMING: readonly ["name", "note"];
