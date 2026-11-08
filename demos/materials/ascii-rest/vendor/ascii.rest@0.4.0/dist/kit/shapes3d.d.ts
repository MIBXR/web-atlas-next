import type { Options } from "../types.ts";
import { Surface, type KitPiece, type MakerSpec, type PaletteLike, type PaletteSpec, type RampName } from "./core.ts";
/** A turn by name, for a shape's rotate: "upside-down", "on-its-side", "tipped" (towards you), "facing-left", "facing-right" or "turned-round". */
export type TurnName = "upside-down" | "on-its-side" | "tipped" | "facing-left" | "facing-right" | "turned-round";
/** Angles in turns or degrees, for those who think in them: { turns: [0.5, 0, 0] } is upside down, as is { degrees: [180, 0, 0] }. */
export type Angles = {
    readonly turns: Vec3;
} | {
    readonly degrees: Vec3;
};
/** A point or a direction in 3D, in units: x to the right, y up and z away from the camera. */
export type Vec3 = [number, number, number];
/** A value, or a function of the time t in seconds that gives it, for one that changes. */
export type Animated<T> = T | ((t: number) => T);
/**
 * A point as points(), lines() and mesh() take one: [x, y, z]. Any list of numbers is let through by the types, so
 * points made with map() need no casting, and each is checked to be three numbers when the shape is made.
 */
export type Point3 = readonly number[];
/**
 * A pattern on a shape's surface: its brightness, 0 to 1, at u and v, each 0 to 1 across the surface, and the time t in
 * seconds, for a pattern that moves (lava, drifting clouds). It multiplies the light, so 1 is the surface as lit and 0
 * is dark. A function that names t, (u, v, t) =>, moves, so the scene plays: give the scene the period it repeats in,
 * for its loop. textures has ready-made ones.
 */
export type Texture = (u: number, v: number, t: number) => number;
/** The ready-made patterns a shape's `texture` can name, each with its default count: see textures. */
export type TextureName = "bands" | "stripes" | "checker" | "grid" | "spots";
/**
 * Ready-made patterns for a shape's `texture`, so a planet gets cloud bands or continents without a line of maths. Each
 * takes how many times it repeats round the shape and returns a texture; naming one in `texture` is the same pattern
 * with its default count. Lit parts stay lit and shaded parts take about half the light, so the shape still reads.
 *
 *   sphere({ texture: "spots" })                  // continents
 *   sphere({ texture: textures.bands(10) })       // ten cloud bands from pole to pole
 *   plane({ texture: textures.checker(8, 8) })    // a chessboard floor
 */
export declare const textures: {
    /**
     * Soft bands of light and shade along v, `count` of them (6), rippling a little round u, and one oval storm, ringed
     * in shade, just south of the middle at u 0.25: a gas giant's clouds on a sphere, its storm showing its turn.
     */
    bands(count?: number): Texture;
    /** Stripes round u, `count` of them (8), every other one in shade: a beach ball's panels on a sphere. */
    stripes(count?: number): Texture;
    /** Squares, `across` round u (8) and `along` along v (half as many, so they are about square on a sphere), every other one in shade. */
    checker(across?: number, along?: number): Texture;
    /** Thin lines in shade, `across` round u (12) and `along` along v (half as many): a globe's meridians and parallels. */
    grid(across?: number, along?: number): Texture;
    /** Seeded patches of light on a shaded ground, about `count` across u (5): continents on a planet, maria on a moon. `seed` (1) picks the coastlines. */
    spots(count?: number, seed?: number): Texture;
};
/** What every shape takes. */
export interface ShapeOptions {
    /** Where its centre is, or a function of t that moves it (orbit() makes one): [0, 0, 0], the middle of the scene. */
    at?: Animated<Vec3>;
    /**
     * Its angles about x, then y, then z: a turn's name ("upside-down", "on-its-side", "tipped", "facing-left",
     * "facing-right" or "turned-round"), { turns: [x, y, z] } or { degrees: [x, y, z] }, [x, y, z] in radians, or a
     * function of t that gives radians: [0, 0, 0]. With spin, these are its angles at t = 0, and the spin turns it from
     * there. The turn about z comes last, so [0, 0, 0.3] with a spin about y tips the axis it spins on, as a planet's is.
     */
    rotate?: Animated<Vec3> | TurnName | Angles;
    /**
     * How fast it turns: "slow", "normal" or "fast", once round about y in 12, 6 or 3 seconds, as on a turntable; or
     * about x, y and z in radians a second, [x, y, z], or { turns: [x, y, z] } a second: [0, 0, 0], still. [0, 1, 0]
     * turns it once in 6.3 seconds, and a number alone is that turn about y: spin: 1 is [0, 1, 0]. A scene's `period`
     * rounds it to whole turns so the scene loops.
     */
    spin?: Vec3 | number | "slow" | "normal" | "fast" | Angles;
    /** Its size, times: 1. */
    scale?: number;
    /**
     * Its colour as #rrggbb, or a palette's name such as "ocean" (its strong colour). A shape with a colour makes the
     * scene coloured, the shape drawn in shades of it by its light, darkened a little on a light page or lightened on a
     * dark one if it would be hard to see there. None by default: it is drawn in the page's ink.
     */
    color?: string;
    /**
     * A pattern on its surface: "bands", "stripes", "checker", "grid" or "spots" (see textures), or a function (u, v) =>
     * brightness 0 to 1 of your own, which multiplies its light. None by default. u goes round and v along: a sphere's
     * longitude and latitude (south to north), a torus's ring and its tube, a cylinder's or a cone's way round and its
     * height; on a cube's faces and a plane they run across. Not for points(), lines(), mesh() or group().
     */
    texture?: Texture | TextureName;
    /**
     * Draws its edges as lines, - | / and \ by their slope, over its faces: true. Edges are where flat faces meet at an
     * angle, and borders: a cube's twelve, a mesh's creases, a plane's border, a cylinder's and a cone's rims. They keep
     * faces lit alike apart and show the shape in one ink. A sphere, a torus and a parametric() surface have none; not
     * for points(), lines() or group().
     */
    edges?: boolean;
}
/** A shape for a scene, made by torus(), sphere() and the rest. What it holds is the kit's own. */
export interface Shape3d {
    readonly kind: string;
}
/** The ready-made clouds points() can name: see points(). */
export type CloudName = "galaxy" | "ball" | "shell" | "ring" | "helix";
/**
 * A torus: a ring with a tube round it, facing the camera so at rest you look through its hole. donut.c's donut.
 * `radius` is from its centre to the middle of the tube, 2; `tube` is the tube's radius, 1.
 *
 *   torus({ spin: [0.8, 0, 0.35] })
 */
export declare function torus(o?: ShapeOptions & {
    radius?: number;
    tube?: number;
}): Shape3d;
/**
 * A sphere of `radius` 1. Its texture's u is its longitude, 0.5 facing the camera at rest, and v its latitude, 0 at
 * the south pole.
 *
 *   sphere({ color: "#3b82f6", texture: "spots", spin: [0, 1, 0] })
 */
export declare function sphere(o?: ShapeOptions & {
    radius?: number;
}): Shape3d;
/**
 * A cube with edges `size` long, 2 (from -1 to 1 on each axis), each face flat and lit as one, its twelve edges drawn
 * as lines so its faces show apart as it turns.
 *
 *   cube({ spin: [0.4, 0.7, 0], color: "#f97316" })
 */
export declare function cube(o?: ShapeOptions & {
    size?: number;
}): Shape3d;
/** A cylinder standing upright along y, closed at both ends, its rims drawn as lines: `radius` 1, `height` 2. */
export declare function cylinder(o?: ShapeOptions & {
    radius?: number;
    height?: number;
}): Shape3d;
/** A cone standing on its base, its point up along y, its rim drawn as a line: the base's `radius` 1, `height` 2, centred halfway up. */
export declare function cone(o?: ShapeOptions & {
    radius?: number;
    height?: number;
}): Shape3d;
/**
 * A flat rectangle lying in x and z at y = 0, like a floor: `width` along x, 4; `depth` along z, 4. It is lit on both
 * sides. Seen straight on it is edge on, so look down on it with the scene's camera.tilt, or tip it with rotate.
 *
 *   plane({ at: [0, -1, 0], width: 8, depth: 8, texture: textures.checker(8, 8) })
 */
export declare function plane(o?: ShapeOptions & {
    width?: number;
    depth?: number;
}): Shape3d;
/**
 * Points that glow: each lights the cell it falls in, a near one more than a far one, and the points in one cell add
 * up, so a cloud is brightest where it is densest, its character from the scene's ramp by the light its cell gathers
 * (on either page, not turned round on paper) and, coloured, its shade by that light, or by depth with colorBy
 * "depth". They hide behind nearer surfaces, never behind each other. Name a ready-made cloud, seeded, in units about
 * its centre:
 *
 * - "galaxy": two spiral arms round a bright bulge, flat in x and z out to a radius of 3; look down on it with camera.tilt.
 * - "ball": a ball of radius 1 filled evenly.
 * - "shell": points spread evenly over a sphere of radius 1.
 * - "ring": a flat ring in x and z from radius 1.4 to 2.2, a planet's rings round a sphere of radius 1.
 * - "helix": two strands twisting twice round from y -2 to 2, with rungs across: a DNA helix.
 *
 * Or give a list of your own, each [x, y, z], or a function of t that gives one (checked at t = 0; a point that isn't
 * three finite numbers later is left out). Options besides the ones every shape takes:
 *
 * - `count`: how many points a named cloud has: galaxy 1200, ball 600, shell 600, ring 800, helix 480; 1 to 20000.
 * - `seed`: a whole number that picks where a named cloud's points fall: 1.
 * - `char`: one character every point is drawn in, so only its shade shows its light: none, the ramp's.
 * - `glow`: the light one near point gives its cell, above 0 and up to 1, a far one half as much: 0.5 for a list of
 *   your own; for a named cloud, what suits its count at 64 by 24 (galaxy 0.2, ball 0.4, shell 0.5, ring 0.35, helix
 *   0.5). Several in a cell add up as light does (1 - (1 - glow) ** n), so raise it for a few points and lower it for
 *   many thousands or a small frame.
 *
 *   points("galaxy", { spin: [0, 0.5, 0] })
 *   points([[0, 1, 0], [1, 0, 0], [0, 0, 1]], { char: "*" })
 */
export declare function points(list: Animated<readonly Point3[]> | CloudName, o?: ShapeOptions & {
    char?: string;
    count?: number;
    seed?: number;
    glow?: number;
}): Shape3d;
/**
 * Lines in 3D: paths through points, each [x, y, z] about the shape's centre, drawn - | / and \ by their slope (or all
 * in `char`), hidden behind nearer surfaces. For a wireframe, axes, a constellation, an orbit's path or a graph in
 * space. Give one path, a list of points, or a list of paths, or a function of t that gives either (checked at t = 0; a
 * point that isn't three finite numbers later breaks its path there). `closed` (false) joins each path's last point
 * back to its first. Coloured, it is drawn in its colour's full shade, or by depth with colorBy "depth".
 *
 *   lines([[-2, 0, 0], [2, 0, 0]])                                         // one line
 *   lines([[[0, 0, 0], [1, 0, 0]], [[0, 0, 0], [0, 1, 0]], [[0, 0, 0], [0, 0, 1]]])   // three axes
 *   lines((t) => [[[0, 0, 0], [Math.cos(t), Math.sin(t), 0]]])             // a hand going round
 */
export declare function lines(list: Animated<readonly Point3[] | readonly (readonly Point3[])[]>, o?: ShapeOptions & {
    char?: string;
    closed?: boolean;
}): Shape3d;
/**
 * Shapes that move as one: placed, turned, spun and sized together about the group's centre, each still moving as it
 * does on its own inside it. A moon's orbit round a planet that goes round a sun, a ringed planet on a tipped axis, a
 * molecule turning whole. A group's `color` is the colour of the shapes in it that have none of their own. Groups go
 * inside groups. `center: true` moves its shapes together so the middle of the box they fill is the group's centre:
 * an ice cream's scoop on its cone then turns about the middle of the whole and fits its scene.
 *
 *   group([sphere({ color: "#3b82f6" }), sphere({ radius: 0.3, at: orbit({ radius: 2, period: 3 }) })],
 *     { at: orbit({ radius: 5, period: 12 }) })
 *   group([cone({ rotate: "upside-down" }), sphere({ at: [0, 1.2, 0] })], { center: true })
 */
export declare function group(shapes: readonly Shape3d[], o?: ShapeOptions & {
    center?: boolean;
}): Shape3d;
/**
 * A shape of your own from its corners and faces: `vertices`, each [x, y, z] about its centre, and `faces`, each a
 * list of three or more indices into them going round the face. Each face is flat and lit on whichever side faces the
 * camera, so the order round a face doesn't matter.
 *
 *   // a pyramid
 *   mesh([[0, 1, 0], [-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1]], [[0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1], [1, 2, 3, 4]])
 */
export declare function mesh(vertices: readonly Point3[], faces: readonly (readonly number[])[], o?: ShapeOptions): Shape3d;
/**
 * A surface of your own: `fn(u, v)` gives the point [x, y, z] at u and v, each 0 to 1, about the shape's centre; a
 * function that names a third parameter, (u, v, t), is a surface that moves. Lit on whichever side faces the camera,
 * smooth across, its normals worked out from its points; where it meets itself at u 0 and 1 (or v), it is smooth across
 * the join too. `segments`: quads across u and v, one number for both or [u, v]; by default about one every column and
 * a half of its length on screen. Its texture's u and v are fn's. fn is checked at u 0, v 0 and t 0; a point it gives
 * elsewhere that isn't three numbers is taken as the centre.
 *
 *   // a saddle
 *   parametric((u, v) => [u * 4 - 2, (u * 4 - 2) * (v * 4 - 2) / 4, v * 4 - 2])
 */
export declare function parametric(fn: (u: number, v: number, t: number) => Vec3, o?: ShapeOptions & {
    segments?: number | readonly [number, number];
}): Shape3d;
/**
 * A position going round `center` ([0, 0, 0]) every `period` seconds at `radius`, for a shape's `at`: a moon round a
 * planet. It goes round in x and z, right, then away behind, then left, then in front; `tilt` (radians, 0) tips its
 * plane so its far side rises, as if seen from a little above; `phase` (radians, 0) is where it starts, 0 to the right.
 * A scene knows its period, for its loop.
 *
 *   sphere({ radius: 0.3, at: orbit({ radius: 2.4, period: 6, tilt: 0.3 }) })
 */
export declare function orbit(o: {
    radius: number;
    period: number;
    tilt?: number;
    center?: Vec3;
    phase?: number;
}): (t: number) => Vec3;
/** What picks a coloured cell's shade: see SceneOptions.colorBy. */
export type ColorBy = "shape" | "depth" | "light";
/** How a scene is seen, lit, shaded and coloured. */
export interface SceneOptions {
    /**
     * The camera. `distance`: units from the camera to the middle of the scene, 6; nearer makes the perspective
     * stronger. `zoom`: columns a unit spans at the middle of the scene; fitted by default (see fit). `tilt`: how it looks
     * down on the scene, "level" (the default), "above" (a little), "high" or "below", or radians, negative looking up
     * from below. `spin`: radians a second the whole scene turns about its middle, as on a turntable, seen by a camera and
     * a light that stay put: 0.
     */
    camera?: {
        distance?: number;
        zoom?: number;
        tilt?: number | "level" | "above" | "high" | "below";
        spin?: number;
    };
    /** Towards the light, as the camera sees it: [-0.4, 1, -1], from the upper left and in front, as donut.c. Its length doesn't matter. */
    light?: Vec3;
    /** Light everywhere, so the side away from the light still shows: "none" (the default), "soft" (0.15) or "bright" (0.35), or 0 to 1. */
    ambient?: number | "none" | "soft" | "bright";
    /**
     * Characters from unlit to lit: ".,-~:;=!*#$@", donut.c's, with no space so every surface shows. A name from ramps,
     * or two or more characters of your own. A cell whose character is a space is not drawn: it is empty in the frame,
     * so the scene lays over another piece, and render3d() leaves what was under it, though a shape behind it stays hidden.
     */
    ramp?: RampName | (string & {});
    /** Turns the ramp round: "auto" (the default) turns it on a light page, so lit still reads as lit; true or false always or never. */
    invert?: boolean | "auto";
    /**
     * What picks a coloured cell's shade. "shape" (the default): its light, each shape in its own colour, darker where it
     * is darker. "light": its light too, but on a dark page the shades go on past the colour to a pale highlight where it
     * is brightest. "depth": how near it is, far things fading to dark. It shades only shapes with a colour, or every
     * shape when the scene has `colors`; points take their shade by the light their cell gathers, or by depth; lines and
     * edges take their colour's full shade, or by depth.
     */
    colorBy?: ColorBy;
    /**
     * One fade for the whole scene instead of each shape's own colour: stops as #rrggbb, dark to bright, spread to
     * `shades` and each made to read on the page (darkened a little on paper or lightened on a dark page where it
     * wouldn't); or { light, dark } of the same length, one fade for each page, used as given; or a palette's name such
     * as "ocean", its fade for each page. None by default.
     */
    colors?: PaletteLike;
    /** Shades of each colour, from dark to full: 4, a whole number from 1 to 16. */
    shades?: number;
    /**
     * Zoom as close as it can while no shape leaves the frame at any angle of its spin, wherever it goes, with a cell of
     * room all round: true. Measured once, when the scene is made: over its loop when it has one, else as the ball each
     * turning shape never leaves (as donut.c sizes its ring), over the first 30 seconds of anything that moves. A camera
     * zoom wins over it; false without one is a zoom where a unit is an eighth of the frame's height.
     */
    fit?: boolean;
    /**
     * Seconds the scene repeats in, so it loops exactly: each spin (the camera's too) is rounded to a whole number of
     * turns in it, at least one, and each orbit must go round a whole number of times in it. scene() plays it as its loop
     * (meta.loop). None by default: a scene whose motions all repeat within a minute loops by itself.
     */
    period?: number;
}
/**
 * Draws shapes at t seconds into a grid you already have, over what is there: each cell a shape covers takes the
 * nearest surface's character and colour, and the rest are left as they were. Use it inside piece() to mix 3D with
 * text, lines and the rest; scene() is this with the piece made for you. Coloured shapes take the nearest colours the
 * piece has, so give piece() the palette scenePalette() makes of them. The options are scene()'s, each with the same
 * default. The fit (and the loop the spins are rounded to) is worked out the first time it sees a list of shapes and
 * options, and kept for the same shapes, or shapes made alike, in the same order with options of the same values:
 * shapes written out inside the drawing are measured once, as long as each is placed, turned and formed by the same
 * numbers or orbit() every frame. One placed, turned or formed by a function of your own (an at or rotate of t, points,
 * lines or parametric() from a function) is measured again each frame it is made anew, so make it once, outside the
 * drawing. One placed by numbers worked out from t, such as at: [Math.sin(t), 0, 0], is another shape each frame, and
 * the fit zooms to keep each in the frame: give it at: (t) => [Math.sin(t), 0, 0] instead, or a camera.zoom. Throws,
 * saying what to change, for a surface, shapes or options it can't take.
 *
 *   export default piece({ name: "box", cols: 40, rows: 20 }, (t, s) => {
 *     render3d(s, cube({ spin: [0.5, 0.7, 0] }), t);
 *     s.write(1, 19, "a cube");
 *   });
 */
export declare function render3d(s: Surface, shapes: Shape3d | readonly Shape3d[], t: number, o?: SceneOptions): void;
/** What scene() draws: a shape, a list of shapes, or a function of t that gives a list. */
export type Shapes = Shape3d | readonly Shape3d[] | ((t: number) => readonly Shape3d[]);
/**
 * The palette a piece of your own needs to draw these shapes in colour with render3d(), given the same options: the
 * kit's INK first, so anything drawn with no colour of its own, a shape or your text, is in the page's text colour;
 * or your own colours first (`own`, the first of them then the piece's ink); then each shape colour's shades for each
 * page, or the scene's one fade, as scene() makes them. Undefined when nothing has a colour and you give none. Throws
 * past the 32 colours a page a piece can have.
 *
 *   const box = cube({ spin: 1, color: "#38bdf8" });
 *   export default piece({ name: "box", cols: 36, rows: 14, palette: scenePalette(box) }, (t, s) => {
 *     render3d(s, box, t);
 *     s.write(14, 13, "a box");
 *   });
 */
export declare function scenePalette(shapes: Shapes, o?: SceneOptions, own?: PaletteSpec): PaletteSpec | undefined;
/**
 * A scene of shapes as a piece: 64 by 24 unless you give a size, named "scene", in the "shapes" category. The spec,
 * which may be left out, is a piece's spec and the scene's options. `shapes` is a shape, a list, or a function of t that
 * gives a list, for shapes that come and go (its colours must all be in its list at t = 0, since a piece's colours are
 * fixed when it is made). Shapes with colours make it coloured: each colour in `shades` steps for each page, plus the
 * ink for shapes with none. It moves at 30 frames a second when anything in it moves, and is a still when nothing does;
 * it loops by `period`, or by itself when its motions all repeat within a minute. Throws, saying what to change, for an
 * option it can't take.
 *
 *   export default scene(cube({ rotate: [-0.6, 0.7, 0], spin: [0.5, 1, 0] }));
 *   export const donut = scene({ name: "donut", cols: 40, rows: 22 }, torus({ spin: [0.8, 0, 0.35] }));
 */
export declare function scene<O extends Options = Options>(shapes: Shapes): KitPiece<O>;
export declare function scene<O extends Options = Options>(spec: MakerSpec<O> & SceneOptions, shapes: Shapes): KitPiece<O>;
