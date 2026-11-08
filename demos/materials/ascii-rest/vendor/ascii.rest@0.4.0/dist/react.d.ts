import { type CSSProperties } from "react";
import { type BannerOptions } from "./banner.ts";
import { type PieceName } from "./library.ts";
import { type MountOptions } from "./mount.ts";
import type { Piece } from "./types.ts";
export interface AsciiProps {
    /** A piece module, from "ascii.rest/pieces", or a piece's file name to load on demand. */
    piece: Piece | PieceName;
    /** The piece's option overrides, and `fps` to override its frame rate. */
    options?: MountOptions;
    /** What the picture shows, for screen readers. The piece's name otherwise. */
    label?: string;
    /** Draws a coloured piece as text in one ink, in a <pre> like any other. */
    mono?: boolean;
    className?: string;
    style?: CSSProperties;
}
export declare function Ascii({ piece, options, label, mono, className, style }: AsciiProps): import("react").JSX.Element;
export interface BannerProps extends BannerOptions {
    /** The text, in block letters. */
    text: string;
    /** What the picture shows, for screen readers. The text otherwise. */
    label?: string;
    /** Draws a coloured banner as text in one ink, in a <pre>. */
    mono?: boolean;
    /** Overrides its frame rate. */
    fps?: number;
    className?: string;
    style?: CSSProperties;
}
/**
 * <Banner>: any text as a banner, every option of banner() a prop. With no colour it is text in the element's own
 * colour; with one, a fade or one for each theme, it is drawn on a canvas. Props banner() can't take render nothing,
 * and the console says why.
 *
 *   <Banner text="hello" color={["#f97316", "#f778ba"]} shadow="rounded" effect="type" />
 */
export declare function Banner({ text, label, mono, fps, className, style, ...options }: BannerProps): import("react").JSX.Element | null;
export type { BannerOptions, MountOptions, Piece, PieceName };
