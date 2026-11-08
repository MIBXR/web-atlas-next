import { d as e } from "./utils-UBVJ5JR_.js";
import { r as t } from "./useHover-DxA7bNQs.js";
import { i as n, n as r } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var i = /* @__PURE__ */ n(r(), 1), a = {
	border: 0,
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "absolute",
	width: "1px",
	whiteSpace: "nowrap"
};
function o(e = {}) {
	let { style: n, isFocusable: r } = e, [o, s] = (0, i.useState)(!1), { focusWithinProps: c } = t({
		isDisabled: !r,
		onFocusWithinChange: (e) => s(e)
	}), l = (0, i.useMemo)(() => o ? n : n ? {
		...a,
		...n
	} : a, [o]);
	return { visuallyHiddenProps: {
		...c,
		style: l
	} };
}
function s(t) {
	let { children: n, elementType: r = "div", isFocusable: a, style: s, ...c } = t, { visuallyHiddenProps: l } = o(t);
	return /*#__PURE__*/ i.createElement(r, e(c, l), n);
}
export { o as n, s as t };
