/*
 * dissolve-donut: the library's donut, dissolving in and out through noise
 * every 6 seconds. The effect plays the piece and works on its frames, so
 * any piece takes it, untouched.
 */
import * as donut from "../../src/pieces/donut.js";
import { dissolve } from "../../src/kit/fx.js";
export default dissolve(donut);
