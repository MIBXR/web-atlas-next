import { m as e } from "./utils-UBVJ5JR_.js";
import { t } from "./useLayoutEffect-Bx2X4QEP.js";
import { i as n, n as r } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/utils/useSlot.mjs
var i = /* @__PURE__ */ n(r(), 1);
function a(e = !0) {
	let [n, r] = (0, i.useState)(e), a = (0, i.useRef)(!1), o = (0, i.useCallback)((e) => {
		a.current = !0, r(!!e);
	}, []);
	return t(() => {
		a.current || r(!1);
	}, []), [o, n];
}
function o(t = !0) {
	let n = e(), [r, i] = a(t);
	return {
		id: i ? n : void 0,
		ref: r
	};
}
export { o as t };
