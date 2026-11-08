/*
 * logos: three of the library's logos, three seconds each, dissolving into
 * one another in patches and round again. Each logo glints on its own clock,
 * which starts when it first shows; their colours share one palette.
 */
import { sequence } from "../../src/kit/compose.js";
import { go, python, rust } from "../../src/pieces/index.js";
export default sequence([rust, go, python], { seconds: 3 });
