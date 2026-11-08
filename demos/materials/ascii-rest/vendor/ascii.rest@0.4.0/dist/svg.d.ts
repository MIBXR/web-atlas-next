import { type BannerOptions, type Themed } from "./banner.ts";
import type { Options, Piece } from "./types.ts";
/** A frame: its text, and each cell's index into the palette. */
export interface Shot {
    text: string;
    color: Uint8Array;
}
/** Frames over time, as a part of an SVG. */
export interface Loop {
    cols: number;
    rows: number;
    /** Fills by palette index: colours, or a paint such as url(#g). */
    palette: readonly string[];
    /** The loop's length in seconds, and the time it starts at. */
    every: number;
    from: number;
    /** The frame at t seconds. */
    at: (t: number) => Shot;
    /** Played once, ending on its last frame, instead of over and over. */
    once?: boolean;
    /** Frames a second it is sampled at: 15. */
    fps?: number;
}
/** A picture in SVG units, its CSS and its elements, ready to sit in an SVG with others. */
export interface Part {
    width: number;
    height: number;
    css: string;
    body: string;
}
/** The rule every part's rows share. */
export declare const MONO: string;
/** The faces the rows are set in, for text of another size. */
export declare const FACES: string;
/**
 * Frames as a part, its classes and keyframes under `prefix`. A cell is `cell` widths tall: 2, or 1 for a square grid.
 * It throws for an `fps` that isn't 1 to 60.
 */
export declare function part({ cols, rows, palette, every, from: t0, at, once, fps, cell }: Loop & {
    cell?: number;
}, prefix?: string): Part;
/** Parts as one SVG, `scale` pixels to a cell's width when nothing else sizes it: 10, the SVG units. */
export declare function wrap({ width: w, height: h, css, body }: Part, label: string, scale?: number): string;
/**
 * An SVG that this module wrote, as a part again with its classes, keyframes and gradient under `prefix`, so it can sit
 * beside another: its size from its viewBox, its CSS without the rule all rows share, and its groups. Null for any other
 * SVG. The same goes for two of these SVGs inlined in one HTML page: their classes are bare, f, k0, c1 and so on, and a
 * page's styles reach every inline SVG on it, so give all but one a prefix.
 */
export declare function namespaced(svg: string, prefix: string): Part | null;
/** The colour that inks the most cells of a part's first frame: a logo's own colour. */
export declare function inkOf({ css, body }: Part): string | null;
/**
 * The loop a piece's SVG plays: a banner's own motion, its `loop`, a logo's glint or a distro's scan, or 4 seconds; 0 for
 * a still. `once` when it plays once and stays, as a typed banner does.
 */
export declare function loopOf(piece: Piece, options?: Options): {
    every: number;
    from: number;
    once?: boolean;
};
export interface SvgOptions {
    /** For a dark page: a coloured piece's dark colours and, for a text piece, a light ink. */
    dark?: boolean;
    /** A text piece's colour: GitHub's own text colour for the page's theme by default. */
    ink?: string;
    /** The loop's length in seconds, and when it starts: loopOf() by default. */
    seconds?: number;
    from?: number;
    /** Frames a second it is sampled at: 15. More is smoother and bigger. */
    fps?: number;
    /** Play once and hold the last frame, rather than loop. */
    once?: boolean;
    /** Pixels a cell's width when nothing else sizes it: 10. */
    scale?: number;
    /** Its title, for screen readers: "<name>, in ascii, from ascii.rest" by default. */
    label?: string;
    /** The piece's option overrides. */
    options?: Options;
    /**
     * The most bytes the SVG should come to: 1000000, about a megabyte, which a README loads quickly. Past it, svg() samples
     * fewer frames a second (down to 6, unless `fps` was given), then folds a coloured piece's colours to 16, and if it is
     * still bigger, says why on the console: its loop, its size and its colours. false keeps it as it is, whatever its size.
     */
    budget?: number | false;
}
/**
 * A piece as an animated SVG, on its own ground if it has one. Its classes are bare, so to inline two in one HTML page,
 * give one a prefix with namespaced(). Kept within `budget`, about a megabyte by default, by sampling fewer frames a
 * second and then folding its colours, and if it can't be, it says why on the console. It throws for an `ink` that
 * isn't #rrggbb or an `fps` that isn't 1 to 60.
 */
export declare function svg(piece: Piece, options?: SvgOptions): string;
export interface BannerSvgOptions {
    /** For GitHub's dark theme, or any dark page: the dark colours. */
    dark?: boolean;
    /** A line of plain text under the letters, typed out once they are in. */
    tagline?: string;
    /** The tagline's colour: the shadow's by default. */
    taglineColor?: Themed<string>;
    /** Its size, in SVG units: 28, about a third of a letter's height. */
    taglineSize?: number;
    /** A piece to set beside the letters, any logo say, or an SVG this module wrote, as { svg }. */
    art?: Piece | {
        svg: string;
    } | null;
    /** Where the art goes: "left" by default, "right", "above" or "below". */
    place?: "left" | "right" | "above" | "below";
    /** The art's height against the letters and tagline: 1 beside them, 2.4 above or below. */
    artSize?: number;
    /** Room between the art and the letters, in SVG units: 32. */
    spacing?: number;
    /** How the letters, tagline and art line up across the picture: "start", "center" or "end"; centred when the art is above or below. */
    align?: "start" | "center" | "end";
    /**
     * A colour behind it all, with `padding` SVG units round it and corners of `radius`. None by default. As #rrggbb, the
     * banner's colours, and the art's, follow it, dark or light, whatever the page.
     */
    background?: Themed<string>;
    padding?: number;
    radius?: number;
    /** Pixels a cell's width when nothing else sizes it: 5, half the SVG units, the size a README shows a logo at. */
    scale?: number;
    /** Frames a second it is sampled at: 15. */
    fps?: number;
    /** Its title, for screen readers. */
    label?: string;
}
/** A banner's letters take "art" for the art's own colour, here as well as the colours banner() takes. */
export type BannerSvgColor = BannerOptions["color"] | "art";
/** Whether a colour as #rrggbb is dark: what a banner on it takes its colours from. */
export declare const darkColor: (hex: string) => boolean;
/**
 * A banner as an animated SVG, with a tagline under it, a piece beside or above it and a background if you like.
 * Without a colour it is in GitHub's own text colours for the theme. It throws when banner() would, for a background or
 * tagline colour that isn't #rrggbb, and for art as { svg } that ascii.rest/svg didn't write.
 */
export declare function bannerSvg(text: string, options?: Omit<BannerOptions, "color"> & {
    color?: BannerSvgColor;
} & BannerSvgOptions): string;
