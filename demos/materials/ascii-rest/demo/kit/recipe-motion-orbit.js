/*
 * orbit: a star going round a banner, in front of it below and behind it
 * above. Flat things orbit flat, the circle squashed to look round.
 */
import { banner } from "../../src/banner.js";
import { orbiting } from "../../src/kit/index.js";
export default orbiting("*", { around: banner("sun", { effect: "still", color: "#f59e0b" }) });
