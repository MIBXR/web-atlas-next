import { i as e } from "./useHover-DxA7bNQs.js";
import { i as t, n } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/utils/useResizeObserver.mjs
var r = /* @__PURE__ */ t(n(), 1);
function i() {
	return window.ResizeObserver !== void 0;
}
function a(t) {
	let { ref: n, box: a, onResize: o } = t, s = e(o);
	(0, r.useEffect)(() => {
		let e = n?.current;
		if (e) {
			if (i()) {
				let t = new window.ResizeObserver((e) => {
					e.length && s();
				});
				return t.observe(e, { box: a }), () => {
					e && t.unobserve(e);
				};
			}
			return window.addEventListener("resize", s, !1), () => {
				window.removeEventListener("resize", s, !1);
			};
		}
	}, [n, a]);
}
export { a as t };
