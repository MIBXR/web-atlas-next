import { r as e } from "./dist-qnEEIXtT.js";
import { t } from "./useLayoutEffect-Bx2X4QEP.js";
import { i as n, n as r, t as i } from "./jsx-runtime-C1t0izHF.js";
// node_modules/@heroui/react/dist/utils/dom.js
var a = /* @__PURE__ */ n(r(), 1), o = i();
function s(n, r) {
	let { ref: i, render: s, ...c } = r, l = (0, a.useRef)(null), u = (0, a.useMemo)(() => e(i, l), [i, l]);
	t(() => {}, [n, s]);
	let d = {
		...c,
		ref: u
	};
	return s ? s(d, void 0) : /*#__PURE__*/ (0, o.jsx)(n, { ...d });
}
var c = {}, l = new Proxy({}, { get(e, t) {
	if (typeof t != "string") return;
	let n = c[t];
	return n || (n = s.bind(null, t), c[t] = n), n;
} });
export { l as t };
