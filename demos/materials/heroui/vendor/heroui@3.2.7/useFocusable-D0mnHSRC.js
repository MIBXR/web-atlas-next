import { n as e, t } from "./focusSafely-BRvDv2aU.js";
import { d as n, u as r } from "./utils-UBVJ5JR_.js";
import { n as i, t as a } from "./useKeyboard-CqNSkGJ-.js";
import { i as o, n as s } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var c = /* @__PURE__ */ o(s(), 1), l = /*#__PURE__*/ c.createContext(null);
function u(t) {
	let n = (0, c.useContext)(l) || {};
	e(n, t);
	let { ref: r, ...i } = n;
	return i;
}
var d = /*#__PURE__*/ c.forwardRef(function(e, t) {
	let { children: n, ...i } = e, a = r(t), o = {
		...i,
		ref: a
	};
	return /*#__PURE__*/ c.createElement(l.Provider, { value: o }, n);
});
function f(e, r) {
	let { focusProps: o } = i(e), { keyboardProps: s } = a(e), l = n(o, s), d = u(r), f = e.isDisabled ? {} : d, p = (0, c.useRef)(e.autoFocus);
	(0, c.useEffect)(() => {
		p.current && r.current && t(r.current), p.current = !1;
	}, [r]);
	let m = e.excludeFromTabOrder ? -1 : 0;
	return e.isDisabled && (m = void 0), { focusableProps: n({
		...l,
		tabIndex: m
	}, f) };
}
export { f as n, l as r, d as t };
