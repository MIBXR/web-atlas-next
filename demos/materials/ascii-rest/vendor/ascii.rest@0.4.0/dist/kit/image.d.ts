import type { Category } from "../types.ts";
import { type ColorName, type KitPiece, type PaletteSpec, type RampName, type Surface } from "./core.ts";
/** How cells are chosen: by the shape of the image's edge through them, by how bright it is there, or a pixel to a half cell. */
export type ImageStyle = "logo" | "shade" | "pixels";
/** What fromPixels(), fromImage() and drawing() take. Every option is checked when the piece is made. */
export interface ImageOptions {
    /**
     * The most columns, its margin of 2 on each side included: 48, from 8 to 320. The image keeps its shape in whole
     * rows, so it comes out about this wide and never wider, and narrower where `height` holds it.
     */
    width?: number;
    /** The most rows, its margin of 1 above and below included: 120, the most a piece can have. 32 keeps it to the library's logos, as /make/ does. */
    height?: number;
    /**
     * "logo": each cell the character whose shape best matches the image's edge through it, 8 where it is solid, as the
     * library's logos are drawn. "shade": each cell a character of `ramp` as dense as the image is bright there, which
     * suits a photo. "pixels": pixel art kept crisp, one image pixel to a half cell (▀ ▄ █), each in its own colour, made
     * bigger by whole numbers to fill the width and never smoothed. By default "pixels" for an image smaller than the
     * piece (a sprite, an icon), "shade" for a photo, "logo" for anything else: a photo is an image with no transparency
     * and no plain background, as /make/ takes one, or one whose tones change all through it, such as the Moon on a black
     * sky or a cut-out on a clear ground, which would otherwise be a block of 8s.
     */
    style?: ImageStyle;
    /**
     * "remove" (the default): an image with no transparency of its own whose border is mostly one colour has that colour
     * taken out, from the edges inwards, so the same colour inside it (white letters on a shape, say) stays. "keep" draws
     * the image as it is: a plain ground stays in it, drawn as a logo is, and a photo is still shaded.
     */
    background?: "remove" | "keep";
    /**
     * true (the default): the image's own colours, up to 8, each cell the one most of its ink is; on a dark page a dark
     * colour is lifted until it reads and a black is drawn in the page's light ink, as /make/ does, or as a grey where it
     * must stay dark: beside white in the same image, and in the shade style. Where the piece is drawn as text in one ink
     * (a <pre>), white among other colours is left out, so white letters or gaps in a coloured shape still show. false:
     * a piece in one ink, with no colours at all.
     */
    color?: boolean;
    /**
     * false (the default): a still. true: the library logos' glint, a slanted band that lightens the colours and turns
     * solid cells to "/" (shaded, every shade but the two lightest), crossing every 5 seconds from 0.5 s; { every } sets
     * the seconds between glints, 2.5 or more (a glint takes 2 to cross). The piece then loops every `every` seconds. An
     * image with nothing in it stays a still.
     */
    glint?: boolean | {
        every?: number;
    };
    /**
     * For the shade style, the characters from light to dense: /make/'s ".:-=+*#%@" by default, or a named ramp such as
     * "blocks" or "detailed", or two or more characters of your own. One that starts with a space, as "standard" does,
     * leaves the darkest cells blank on a dark page.
     */
    ramp?: RampName | (string & {});
    /**
     * For the shade style, whether the ramp is turned round, dense where the image is dark. "auto" (the default) turns it
     * on a light page, in colour and in one ink, so what is bright in the image stays light on the page; true turns it on
     * every page; false never does, which in colour on a light page is how /make/ draws it. The logo style takes no notice.
     */
    invert?: boolean | "auto";
    /** Its name, for screen readers and titles: "image". */
    name?: string;
    /** One line, up to 72 characters, saying what you see: made from the name and the style by default. */
    note?: string;
    /** Its category: "logos". */
    category?: Category;
}
/** An image drawn as cells, as /make/'s drawing (site/src/lib/logo.ts) holds it: what fromDrawing() makes a piece of. */
export interface Drawing {
    style: ImageStyle;
    cols: number;
    rows: number;
    /** The image's colours, as [r, g, b] 0 to 255: up to 8. One, black, for an image with nothing in it. */
    colors: [number, number, number][];
    /** The characters, row by row, `cols` each; a space where the cell is blank. */
    art: string[];
    /**
     * Each cell's colour, an index into `colors` as a base-36 digit, or a space where the image has no ink: where the art
     * is blank, but for the darkest cells of a shading whose ramp starts with a space.
     */
    ink: string[];
    /** The characters in one ink, row by row: the art, with white left out where `knocked`. */
    mono: string[];
    /** Whether the one-ink drawing leaves the image's white out. */
    knocked: boolean;
    /** The plain background taken out, as #rrggbb, or null when none was. */
    ground: string | null;
    /**
     * The ramp a shaded drawing's characters come from, light to dense, so they can be turned round on a light page.
     * drawing() sets it; a drawing of your own may leave it out, and the `ramp` option is used instead.
     */
    ramp?: string;
}
/** A piece made from an image, carrying the drawing it plays, so drawImage() and imagePalette() can take it too. */
export interface ImagePiece extends KitPiece {
    readonly drawing: Drawing;
}
/** RGBA pixels, row by row, 4 bytes a pixel, as ImageData.data holds them. (draw's `Pixels` is its half-block canvas.) */
export type PixelArray = Uint8Array | Uint8ClampedArray;
/**
 * What fromImage() reads: a URL (a string or URL), SVG markup, a Blob or File, an <img>, an ImageBitmap or a canvas, or
 * an image file's bytes (a Buffer is one); in Node, a PNG's path too.
 */
export type ImageSource = string | URL | Blob | HTMLImageElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas | Uint8Array | ArrayBuffer;
/**
 * Draws RGBA pixels, row by row as ImageData.data holds them, as cells: /make/'s drawing, the same in Node and in a
 * browser, with no font and no canvas. The image is trimmed to its ink and fitted inside a margin of 2 columns and 1 row.
 * Each cell is measured in 2 by 4 blocks by averaging the image over them; a blank cell stays blank, a solid one is 8,
 * and any other takes the character whose shape best matches the image's edge through it (or, shaded, a character as
 * dense as it is bright). An image with nothing in it gives a blank drawing. Throws, saying what to change, for pixels
 * or options it can't take.
 */
export declare function drawing(rgba: PixelArray, width: number, height: number, o?: ImageOptions): Drawing;
/**
 * A drawing as a piece: a still, or glinting now and then with `glint`. Takes the same options as fromPixels(), of
 * which the size, style and background were for the drawing and are not used here. Its shades are turned round
 * (`invert`) by the ramp drawing() recorded in it; for a drawing of your own with none, give `ramp`.
 */
export declare function fromDrawing(d: Drawing, o?: ImageOptions): ImagePiece;
/** What drawImage() takes besides where, all of it optional. */
export interface DrawImageOptions {
    /** The frame's time in seconds, for the glint: 0. */
    t?: number;
    /**
     * The logos' glint, as fromImage() takes it: false. The piece drawing it sets its own fps, and its loop to the
     * glint's `every`, 5 seconds by default.
     */
    glint?: boolean | {
        every?: number;
    };
    /** Whether a shading's shades are turned round, as fromImage() takes it: "auto", on a light page. */
    invert?: boolean | "auto";
}
/**
 * Draws an image into a surface you have, its top left (its margin included) at column x, row y, so it sits beside
 * whatever else your piece draws: text, boxes, a field, particles. Takes a piece fromImage() or fromPixels() made, or a
 * drawing. Its blank cells are left as they are, so it lays over what is under it, and what falls outside the surface is
 * left out. In colour, each cell takes the piece's colour nearest its own: give the piece imagePalette() and they are
 * the image's own, lifted on a dark page as fromImage() lifts them. In a piece in one ink, or one played as text, it is
 * drawn as fromImage() draws it in one ink. A drawing is worked out the first time it is drawn: draw a changed one as a
 * new object.
 *
 *   const logo = await fromImage("/logo.png", { width: 24 });
 *   export default piece({ name: "card", cols: 60, rows: 12, loop: 5, palette: imagePalette(logo) }, (t, s) => {
 *     drawImage(s, logo, 0, 0, { t, glint: true });
 *     s.write(26, 5, "my project");
 *   });
 */
export declare function drawImage(s: Surface, img: Drawing | ImagePiece, x?: number, y?: number, o?: DrawImageOptions): void;
/**
 * The colours for a piece that draws an image with drawImage(), so the image keeps its own: for each theme, any of your
 * own first, so your colour i is index i on both themes and the first is the piece's ink, then the image's colours and
 * their glint, as fromImage() makes them. Yours are one list for both themes, or { light, dark } of the same length.
 *
 *   palette: imagePalette(logo, { light: ["#1f2328"], dark: ["#f0f6fc"] })
 */
export declare function imagePalette(img: Drawing | ImagePiece, given?: PaletteSpec | ColorName): {
    light: string[];
    dark: string[];
};
/**
 * RGBA pixels as a piece: drawing() and fromDrawing() in one call. Pure, so it works in Node (decode a PNG or JPEG
 * with sharp, say) and in browsers (ImageData.data) alike. Or pixel art typed as text, as draw's sprite() takes it:
 * rows of characters, one a pixel, and a colour for each character, "." and " " clear; drawn crisp, a pixel to a half
 * cell ("pixels" style). Throws, saying what to change, for pixels or options it can't take.
 *
 *   const { data, info } = await sharp("logo.png").ensureAlpha().raw().toBuffer({ resolveWithObject: true });
 *   export default fromPixels(data, info.width, info.height, { name: "my logo", glint: true });
 *
 *   export const invader = fromPixels(["..g.....g..", "...g...g...", "..ggggggg..", ".gg.ggg.gg."], { g: "#3fb950" });
 */
export declare function fromPixels(rows: string | readonly string[], colors: Readonly<Record<string, string>>, o?: ImageOptions): ImagePiece;
export declare function fromPixels(rgba: PixelArray, width: number, height: number, o?: ImageOptions): ImagePiece;
/**
 * Any image, as a piece. In a browser: a URL (fetched, so another site's must allow it with CORS), a data: URL, SVG
 * markup, a Blob or File (an <input type="file">'s, say), an <img>, an ImageBitmap, or a canvas. PNG, JPG, WebP, GIF
 * (its first frame), AVIF and BMP are decoded with createImageBitmap; SVG is drawn 2400 pixels along its longer side, as
 * /make/ draws it, and needs a page (not a worker). Nothing leaves the page.
 *
 * In Node (and wherever else there is no createImageBitmap), a PNG: by its path, a file: URL such as
 * `new URL("./logo.png", import.meta.url)`, an http(s) URL, its bytes (readFileSync's Buffer), or a Blob, decoded by
 * the kit itself, so a script that writes a README's SVG needs nothing else. Any other format there takes a decoder of
 * your own and fromPixels().
 *
 * The piece carries its drawing, so drawImage() can draw it into a piece of your own as well. Rejects, saying what went
 * wrong, for options or an image it can't take.
 *
 *   const logo = await fromImage(input.files[0], { width: 40, glint: true });
 *   export default await fromImage(new URL("./logo.png", import.meta.url), { glint: true });
 */
export declare function fromImage(src: ImageSource, o?: ImageOptions): Promise<ImagePiece>;
/** An image's pixels as ImageData holds them: RGBA, row by row, 4 bytes a pixel. */
export interface PixelData {
    data: Uint8ClampedArray;
    width: number;
    height: number;
}
/**
 * A PNG file's bytes as pixels, in Node or anywhere: what fromImage() reads a PNG with where there is no browser to
 * decode it, for a script that wants drawing() rather than a piece. Every kind of PNG: grey, colour or a palette, with
 * or without alpha (tRNS included), 1 to 16 bits a channel, interlaced or not, up to 16384 pixels a side and 40 million
 * in all.
 * 16 bits are cut to 8; a colour profile or gamma, if it has one, is not applied, as a browser would. Rejects, saying
 * why, for bytes that aren't a PNG it can read.
 *
 *   const { data, width, height } = await readPng(readFileSync("logo.png"));
 *   const { art } = drawing(data, width, height, { width: 40 });
 */
export declare function readPng(bytes: Uint8Array | ArrayBuffer): Promise<PixelData>;
