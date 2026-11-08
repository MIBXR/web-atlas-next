/** Blocks across and down a cell, in which a cell's ink is measured. */
export declare const GX = 2;
export declare const GY = 4;
/** The cell, in pixels, the shapes were measured on. */
export declare const CW = 24;
export declare const CH = 48;
/** What a solid cell is drawn with. */
export declare const FILL = "8";
/** The characters an edge may be drawn with: no backtick, so a drawing can sit in a String.raw template. */
export declare const EDGE = ".,:'\"^-_~=/\\|()dbqpPYoO08";
/** A character, and its ink in each of the GX by GY blocks of its cell, 0 to 1. */
export interface Glyph {
    readonly ch: string;
    readonly v: readonly number[];
}
export declare const GLYPHS: readonly Glyph[];
