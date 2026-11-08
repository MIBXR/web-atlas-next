import { d as e, n as t, r as n, s as r } from "./utils-UBVJ5JR_.js";
import { t as i } from "./filterDOMProps-CJYy6efO.js";
import { A as a, M as o, k as s } from "./useKeyboard-CqNSkGJ-.js";
import { n as c } from "./useFocusable-D0mnHSRC.js";
import { t as l } from "./usePress-C9PowRxI.js";
import { i as u, n as d } from "./jsx-runtime-C1t0izHF.js";
import { n as f, t as p } from "./useHover-DxA7bNQs.js";
// node_modules/react-aria/dist/private/link/useLink.mjs
function m(t, n) {
	let { elementType: r = "a", onPress: u, onPressStart: d, onPressEnd: f, onPressChange: p, onClick: m, isDisabled: h, ...g } = t, _ = {};
	r !== "a" && (_ = {
		role: "link",
		tabIndex: h ? void 0 : 0
	});
	let { focusableProps: v } = c(t, n), { pressProps: y, isPressed: b } = l({
		onPress: u,
		onPressStart: d,
		onPressEnd: f,
		onPressChange: p,
		onClick: m,
		isDisabled: h,
		ref: n
	}), x = i(g, { labelable: !0 }), S = e(v, y), C = o(), w = a(t);
	return {
		isPressed: b,
		linkProps: e(x, w, {
			...S,
			..._,
			"aria-disabled": h || void 0,
			"aria-current": t["aria-current"],
			onClick: (e) => {
				y.onClick?.(e), s(e, C, t.href, t.routerOptions);
			}
		})
	};
}
// node_modules/react-aria-components/dist/private/Link.mjs
var h = /* @__PURE__ */ u(d(), 1), g = /*#__PURE__*/ (0, h.createContext)(null), _ = /*#__PURE__*/ (0, h.forwardRef)(function(a, o) {
	[a, o] = t(a, o, g);
	let s = a.href && !a.isDisabled ? "a" : "span", { linkProps: c, isPressed: l } = m({
		...a,
		elementType: s
	}, o), u = r[s], { hoverProps: d, isHovered: _ } = p(a), { focusProps: v, isFocused: y, isFocusVisible: b } = f(), x = n({
		...a,
		defaultClassName: "react-aria-Link",
		values: {
			isCurrent: !!a["aria-current"],
			isDisabled: a.isDisabled || !1,
			isPressed: l,
			isHovered: _,
			isFocused: y,
			isFocusVisible: b
		}
	}), S = i(a, { global: !0 });
	return delete S.onClick, /*#__PURE__*/ h.createElement(u, {
		ref: o,
		slot: a.slot || void 0,
		...e(S, x, c, d, v),
		"data-focused": y || void 0,
		"data-hovered": _ || void 0,
		"data-pressed": l || void 0,
		"data-focus-visible": b || void 0,
		"data-current": !!a["aria-current"] || void 0,
		"data-disabled": a.isDisabled || void 0
	}, x.children);
});
export { g as n, _ as t };
