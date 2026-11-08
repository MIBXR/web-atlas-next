import { d as e, n as t, r as n, s as r } from "./utils-UBVJ5JR_.js";
import { t as i } from "./Hidden-B5FjVPor.js";
import { i as a, n as o } from "./jsx-runtime-C1t0izHF.js";
import { n as s, t as c } from "./useHover-DxA7bNQs.js";
// node_modules/react-aria-components/dist/private/Input.mjs
var l = /* @__PURE__ */ a(o(), 1), u = /*#__PURE__*/ (0, l.createContext)({}), d = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, f = /*#__PURE__*/ i(function(i, a) {
	[i, a] = t(i, a, u);
	let { hoverProps: o, isHovered: f } = c({
		...i,
		isDisabled: i.disabled
	}), { isFocused: p, isFocusVisible: m, focusProps: h } = s({
		isTextInput: !0,
		autoFocus: i.autoFocus
	}), g = !!i["aria-invalid"] && i["aria-invalid"] !== "false", _ = n({
		...i,
		values: {
			isHovered: f,
			isFocused: p,
			isFocusVisible: m,
			isDisabled: i.disabled || !1,
			isInvalid: g
		},
		defaultClassName: "react-aria-Input"
	});
	return /*#__PURE__*/ l.createElement(r.input, {
		...e(d(i), h, o),
		..._,
		ref: a,
		"data-focused": p || void 0,
		"data-disabled": i.disabled || void 0,
		"data-hovered": f || void 0,
		"data-focus-visible": m || void 0,
		"data-invalid": g || void 0
	});
});
export { f as n, u as t };
