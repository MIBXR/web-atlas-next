/*
 * boom: a red banner jolting now and then. shaking() is fx's shake() with its
 * numbers put in words.
 */
import { banner } from "../../src/banner.js";
import { shaking } from "../../src/kit/index.js";
export default shaking(banner("boom", { effect: "still", color: "#f85149" }), { amount: "strong", speed: "fast" });
