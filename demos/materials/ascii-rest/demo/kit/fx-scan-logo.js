/*
 * scan-logo: the library's go logo revealed by a scan line moving down it,
 * held whole, then scanned in again, every 3 seconds.
 */
import * as go from "../../src/pieces/go.js";
import { scan } from "../../src/kit/fx.js";
export default scan(go, { reveal: true, options: { shine: 0 } });
