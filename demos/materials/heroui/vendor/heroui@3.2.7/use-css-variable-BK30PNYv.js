import { t as e } from "./SSRProvider-DmcnjAEC.js";
import { i as t, n } from "./jsx-runtime-C1t0izHF.js";
// node_modules/@heroui/react/dist/hooks/use-css-variable.js
var r = /* @__PURE__ */ t(n(), 1), i = /* @__PURE__ */ new Map();
function a(t, n, a = !0) {
	let o = e();
	return r.useMemo(() => {
		if (n !== void 0) return n;
		if (!o) {
			if (a && i.has(t)) return i.get(t);
			try {
				let e = document.documentElement, n = getComputedStyle(e).getPropertyValue(t).trim() || void 0;
				return a && i.set(t, n), n;
			} catch {
				return;
			}
		}
	}, [
		t,
		n,
		o,
		a
	]);
}
export { a as t };
