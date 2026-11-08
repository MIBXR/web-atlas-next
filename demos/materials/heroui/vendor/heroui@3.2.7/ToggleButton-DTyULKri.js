import { d as e, n as t, r as n, s as r } from "./utils-UBVJ5JR_.js";
import { n as i } from "./SelectionIndicator-C43cTdGN.js";
import { i as a, o, r as s } from "./ToggleButtonGroup-BtCWMJmh.js";
import { t as c } from "./filterDOMProps-CJYy6efO.js";
import { i as l, n as u } from "./jsx-runtime-C1t0izHF.js";
import { t as d } from "./useToggleState-COCZgzVz.js";
import { n as f, t as p } from "./useHover-DxA7bNQs.js";
// node_modules/react-aria-components/dist/private/ToggleButton.mjs
var m = /* @__PURE__ */ l(u(), 1), h = /*#__PURE__*/ (0, m.createContext)({}), g = /*#__PURE__*/ (0, m.forwardRef)(function(l, u) {
	[l, u] = t(l, u, h);
	let g = (0, m.useContext)(s), _ = d(g && l.id != null ? {
		isSelected: g.selectedKeys.has(l.id),
		onChange(e) {
			g.setSelected(l.id, e);
		}
	} : l), { buttonProps: v, isPressed: y, isSelected: b, isDisabled: x } = g && l.id != null ? a({
		...l,
		id: l.id
	}, g, u) : o({
		...l,
		id: l.id == null ? void 0 : String(l.id)
	}, _, u), { focusProps: S, isFocused: C, isFocusVisible: w } = f(l), { hoverProps: T, isHovered: E } = p({
		...l,
		isDisabled: x
	}), D = n({
		...l,
		id: void 0,
		values: {
			isHovered: E,
			isPressed: y,
			isFocused: C,
			isSelected: _.isSelected,
			isFocusVisible: w,
			isDisabled: x,
			state: _
		},
		defaultClassName: "react-aria-ToggleButton"
	}), O = c(l, { global: !0 });
	return delete O.id, delete O.onClick, /*#__PURE__*/ m.createElement(r.button, {
		...e(O, D, v, S, T),
		ref: u,
		slot: l.slot || void 0,
		"data-focused": C || void 0,
		"data-disabled": x || void 0,
		"data-pressed": y || void 0,
		"data-selected": b || void 0,
		"data-hovered": E || void 0,
		"data-focus-visible": w || void 0
	}, /*#__PURE__*/ m.createElement(i.Provider, { value: { isSelected: b } }, D.children));
});
export { g as n, h as t };
