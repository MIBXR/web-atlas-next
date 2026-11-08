/*
 * hover: motions wrap each other. A cube turning on a turntable, floating up
 * and down as it turns.
 */
import { cube, floating, spinning } from "../../src/kit/index.js";
export default floating(spinning(cube({ color: "#38bdf8" }), { way: "turntable" }), { height: "medium" });
