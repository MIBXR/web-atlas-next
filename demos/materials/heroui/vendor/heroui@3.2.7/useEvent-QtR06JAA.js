import { O as e } from "./useKeyboard-CqNSkGJ-.js";
import { i as t } from "./useHover-DxA7bNQs.js";
import { i as n, n as r } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/utils/useEvent.mjs
var i = /* @__PURE__ */ n(r(), 1);
function a(n, r, a, o) {
	let s = t(a), c = a == null;
	(0, i.useEffect)(() => {
		if (!(c || n.current == null)) return e(n.current, r, s, o);
	}, [
		n,
		r,
		o,
		c
	]);
}
export { a as t };
