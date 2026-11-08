import { i as e } from "./useHover-DxA7bNQs.js";
import { i as t, n } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/utils/useUpdateEffect.mjs
var r = /* @__PURE__ */ t(n(), 1);
function i(t, n) {
	let i = (0, r.useRef)(!0), a = (0, r.useRef)(null), o = e(t);
	(0, r.useEffect)(() => (i.current = !0, () => {
		i.current = !1;
	}), []), (0, r.useEffect)(() => {
		let e = a.current;
		i.current ? i.current = !1 : (!e || n.some((t, n) => !Object.is(t, e[n]))) && o(), a.current = n;
	}, n);
}
export { i as t };
