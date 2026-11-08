import { type BannerOptions } from "./banner.ts";
import type { Output } from "./terminal.ts";
export interface PrintOptions extends Omit<BannerOptions, "size" | "max"> {
    /** Seconds the glint takes to pass, or the letters to type in, once; 0 prints it still. 1 by default. */
    seconds?: number;
    /** A line under the banner, dimmed, once it has moved. */
    tagline?: string;
    /** For a light terminal: the light colours, and solid letters that the glint lightens. */
    light?: boolean;
    /** Where to print: process.stdout by default. */
    out?: Output;
}
export interface Bannered {
    /** The banner's size in the terminal's cells; 0 by 0 when the terminal was too narrow for it and it printed its text. */
    cols: number;
    rows: number;
    /** True when Ctrl+C stopped it moving. */
    interrupted: boolean;
}
/**
 * Prints a banner, and its tagline under it, and resolves once it has moved. It prints from the cursor, which should be
 * at the start of a line: end any output before it with a newline, or its first row starts mid-line and moving it
 * writes over that line. Piped, it prints at once with no colour. With NO_COLOR set it has no colour but still moves.
 * A terminal too short to show it whole gets it still, and one resized while it moves stops it where it is, as the
 * rows may have wrapped. It throws when banner() would, and when `seconds` is not 0 or more.
 */
export declare function banner(text: string, { seconds, tagline, light, out, ...options }?: PrintOptions): Promise<Bannered>;
