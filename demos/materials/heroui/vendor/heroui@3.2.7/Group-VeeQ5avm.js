import { d as e, n as t, r as n, s as r } from "./utils-UBVJ5JR_.js";
import { n as i, t as a } from "./useHover-DxA7bNQs.js";
import { i as o, n as s } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria-components/dist/private/Group.mjs
var c = /* @__PURE__ */ o(s(), 1), l = /*#__PURE__*/ (0, c.createContext)({}), u = /*#__PURE__*/ (0, c.forwardRef)(function(o, s) {
	[o, s] = t(o, s, l);
	let { isDisabled: u, isInvalid: d, isReadOnly: f, onHoverStart: p, onHoverChange: m, onHoverEnd: h, ...g } = o;
	u ??= !!o["aria-disabled"] && o["aria-disabled"] !== "false", d ??= !!o["aria-invalid"] && o["aria-invalid"] !== "false";
	let { hoverProps: _, isHovered: v } = a({
		onHoverStart: p,
		onHoverChange: m,
		onHoverEnd: h,
		isDisabled: u
	}), { isFocused: y, isFocusVisible: b, focusProps: x } = i({ within: !0 }), S = n({
		...o,
		values: {
			isHovered: v,
			isFocusWithin: y,
			isFocusVisible: b,
			isDisabled: u,
			isInvalid: d
		},
		defaultClassName: "react-aria-Group"
	});
	return /*#__PURE__*/ c.createElement(r.div, {
		...e(g, x, _),
		...S,
		ref: s,
		role: o.role ?? "group",
		slot: o.slot ?? void 0,
		"data-focus-within": y || void 0,
		"data-hovered": v || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": u || void 0,
		"data-invalid": d || void 0,
		"data-readonly": f || void 0
	}, S.children);
});
export { l as n, u as t };
