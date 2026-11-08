import { type PaletteLike, type PaletteSpec, type Scheme, type SchemeName } from "../core.ts";
export { schemes, type ColorLike, type ColorName, type PaletteLike, type Scheme, type SchemeName } from "../core.ts";
/**
 * The colours of a named palette for a light page and a dark one, faint to strong: { light, dark }. Any name the kit
 * knows: the looks' `schemes` and the materials' `materialColors`, the looks' first where both have it. Throws for a
 * name it does not know, offering the nearest.
 *
 *   banner("open", { color: palette("candy") })
 */
export declare function palette(name: SchemeName | (string & {})): Scheme & PaletteSpec;
/**
 * Any palette a look takes as { light, dark }, faint to strong, checked: a name, one #rrggbb (the same on both pages),
 * a list of colours (the same on both pages), or { light, dark }. `what` names the option in an error.
 */
export declare function schemeOf(what: string, v: PaletteLike | unknown): Scheme;
