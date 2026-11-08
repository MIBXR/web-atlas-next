import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
// node_modules/@base-ui/utils/useControlled.mjs
var n = /* @__PURE__ */ e(t(), 1);
function r({ controlled: e, default: t, name: r, state: i = "value" }) {
	let { current: a } = n.useRef(e !== void 0), [o, s] = n.useState(t);
	return [a ? e : o, n.useCallback((e) => {
		a || s(e);
	}, [])];
}
export { r as t };
