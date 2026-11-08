/*
 * ascii.rest/kit: tools for making ascii art of your own, as pieces that play
 * wherever the library's do. Recipes first, whole things in one line with no
 * maths; then the parts they are made of, for anything a recipe doesn't do.
 * Part of ascii.rest by @bas3line (https://github.com/bas3line), MIT licensed.
 *
 *   import { sea, spinning, torus } from "ascii.rest/kit";
 *
 *   export default sea({ palette: "ocean" });
 *   export const donut = spinning(torus(), { speed: "slow" });
 */
// Recipes: looks by name, motions in words, widgets in one call, placing by words, and palettes.
export { palette, schemeOf } from "./recipes/palettes.js";
export { easings, loopFor, pieceOf, withLoop, } from "./recipes/words.js";
export { Look, above, aurora, below, checker, clouds, flames, galaxy, lavaLamp, letters, look, marble, matrix, outside, plasma, plume, rainfall, rings, ripple, sea, snowfall, spiral, stars, stripes, sun, sweep, tunnel, turbulence, vortex, waves, } from "./recipes/looks.js";
export { blinking, bouncing, drifting, floating, growIn, orbiting, planet, pulsing, shaking, slideIn, slideOut, spinning, swaying, } from "./recipes/motion.js";
export { across, at, barChart, card, clockFace, countdown, down, gauge, inset, marquee, panel, progressBar, ring, slot, sparkline, spinner, spinners, textAt, tiles, typewriter, } from "./recipes/widgets.js";
// The grid, the piece() builder, colours, ramps and the maths every module shares.
export { Chainable, EMPTY, INK, MAX, NONE, Palette, Surface, TAU, and, asPiece, bayer, chained, checkMeta, clamp, code, colorOf, colorsOf, fail, fract, gradient, hash, hex, isHex, lerp, materialColors, mergePalettes, metaOf, mix, mulberry32, nearest, piece, ramp, ramps, rgb, sample, schemes, shadeChar, smoothstep, snapshot, specOf, spread, suggest, valueNoise, } from "./core.js";
// Noise, randomness, easing, time and 3D maths.
export { camera, cycle, degrees, ease, fbm, fbm3, invLerp, lcm, loopNoise, mod, noise, noise2, noise3, noise4, oscillate, phase, pingpong, progress, project, pulse, radians, random, remap, ridged, rotate3, rotation, scatter, step, triangle, tween, twinkle, valueNoise3, vec2, vec3, worley, wrap, } from "./math.js";
// Drawing on the grid: text, lines, boxes, shapes, stamps, braille and half-block canvases.
export { arc, around, boxes, braille, circle, ellipse, label, line, pixels, polygon, polyline, ray, rect, stamp, text, } from "./draw.js";
// Ascii art from a formula of x, y and t.
export { drawField, field } from "./field.js";
// 3D scenes: shapes, a camera, light and textures.
export { cone, cube, cylinder, group, lines, mesh, orbit, parametric, plane, points, render3d, scene, scenePalette, sphere, textures, torus, } from "./shapes3d.js";
// Particle systems: snow, rain, sparks, fireworks and systems of your own.
export { drawParticles, particles, particlesPalette, presets, streak, system, } from "./particles.js";
// Effects that wrap any piece or text and return a new piece.
export { chain, dissolve, effect, fade, glint, glitch, hueCycle, hues, outline, outlines, rainbow, scan, shadow, shake, typeIn, wave, } from "./fx.js";
// Pieces made of other pieces: layers, rows, grids, sequences and time.
export { border, column, crop, delay, flip, freeze, grid, layer, named, over, pad, repeat, row, scale, sequence, speed, } from "./compose.js";
// Any image as ascii.
export { drawImage, drawing, fromDrawing, fromImage, fromPixels, imagePalette, readPng, } from "./image.js";
// Objects built by saying what they are: shapes, materials, emissions and pictures.
export { area, ball, blob, bottle, box, bubbles, cellsOf, ceramic, cloud, cup, drawParts, edgeChar, emission, emit, fire, fish, flame, glass, gradientFill, grass, ground, heart, house, ice, inside, intersect, lamp, lava, leaf, material, metal, moon, mug, neon, partsPalette, pattern, patterns, picture, rain, sand, shape, sky, smoke, snow, solid, sparks, star, starfield, steam, straw, subtract, texture, union, water, waterGlass, wood, } from "./materials.js";
// Any SVG as a piece, its parts brought to life by a map.
export { drawSvg, fromSvg, parseSvg, partCells, svgPalette, } from "./vector.js";
