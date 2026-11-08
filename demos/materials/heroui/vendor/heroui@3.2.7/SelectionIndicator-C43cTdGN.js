import { n as e } from "./utils-UBVJ5JR_.js";
import { n as t } from "./SharedElementTransition-C1TNSLy6.js";
import { i as n, n as r } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var i = /* @__PURE__ */ n(r(), 1), a = /*#__PURE__*/ (0, i.createContext)({ isSelected: !1 }), o = /*#__PURE__*/ (0, i.forwardRef)(function(n, r) {
	[n, r] = e(n, r, a);
	let { isSelected: o, ...s } = n;
	return /*#__PURE__*/ i.createElement(t, {
		...s,
		ref: r,
		className: n.className || "react-aria-SelectionIndicator",
		name: "SelectionIndicator",
		isVisible: o
	});
});
export { a as n, o as t };
