import { d as e, f as t, n, r, s as i } from "./utils-UBVJ5JR_.js";
import { t as a } from "./SharedElementTransition-C1TNSLy6.js";
import { t as o } from "./useButton-DkELok1R.js";
import { i as s } from "./FocusScope-C6wAY3W6.js";
import { t as c } from "./filterDOMProps-CJYy6efO.js";
import { S as l, b as u, v as d } from "./useKeyboard-CqNSkGJ-.js";
import { t as f } from "./useLayoutEffect-Bx2X4QEP.js";
import { t as p } from "./I18nProvider-zGzu-4zN.js";
import { i as m, n as h } from "./jsx-runtime-C1t0izHF.js";
import { t as g } from "./useControlledState-BbVlCDcL.js";
// node_modules/react-aria/dist/private/button/useToggleButton.mjs
function _(n, r, i) {
	let { isSelected: a } = r, { isPressed: s, buttonProps: c } = o({
		...n,
		onPress: t(r.toggle, n.onPress)
	}, i);
	return {
		isPressed: s,
		isSelected: a,
		isDisabled: n.isDisabled || !1,
		buttonProps: e(c, { "aria-pressed": a })
	};
}
// node_modules/react-aria/dist/private/toolbar/useToolbar.mjs
var v = /* @__PURE__ */ m(h(), 1);
function y(e, t) {
	let { "aria-label": n, "aria-labelledby": r, orientation: i = "horizontal" } = e, [a, o] = (0, v.useState)(!1);
	f(() => {
		o(!!(t.current && t.current.parentElement?.closest("[role=\"toolbar\"]")));
	});
	let { direction: m } = p(), h = m === "rtl" && i === "horizontal", g = s(t), _ = (e) => {
		if (d(e.currentTarget, l(e))) {
			if (i === "horizontal" && e.key === "ArrowRight" || i === "vertical" && e.key === "ArrowDown") h ? g.focusPrevious() : g.focusNext();
			else if (i === "horizontal" && e.key === "ArrowLeft" || i === "vertical" && e.key === "ArrowUp") h ? g.focusNext() : g.focusPrevious();
			else if (e.key === "Tab") {
				y.current = u(), e.shiftKey ? g.focusFirst() : g.focusLast();
				return;
			} else return;
			e.stopPropagation(), e.preventDefault();
		}
	}, y = (0, v.useRef)(null), b = (e) => {
		!d(e.currentTarget, e.relatedTarget) && !y.current && (y.current = l(e));
	}, x = (e) => {
		y.current && !d(e.currentTarget, e.relatedTarget) && d(t.current, l(e)) && (y.current?.focus(), y.current = null);
	};
	return { toolbarProps: {
		...c(e, { labelable: !0 }),
		role: a ? "group" : "toolbar",
		"aria-orientation": i,
		"aria-label": n,
		"aria-labelledby": n == null ? r : void 0,
		onKeyDownCapture: a ? void 0 : _,
		onFocusCapture: a ? void 0 : x,
		onBlurCapture: a ? void 0 : b
	} };
}
// node_modules/react-aria/dist/private/button/useToggleButtonGroup.mjs
function b(e, t, n) {
	let { isDisabled: r } = e, { toolbarProps: i } = y(e, n);
	return { groupProps: {
		...i,
		role: t.selectionMode === "single" ? "radiogroup" : i.role,
		"aria-disabled": r
	} };
}
function x(e, t, n) {
	let r = {
		isSelected: t.selectedKeys.has(e.id),
		defaultSelected: !1,
		setSelected(n) {
			t.setSelected(e.id, n);
		},
		toggle() {
			t.toggleKey(e.id);
		}
	}, { isPressed: i, isSelected: a, isDisabled: o, buttonProps: s } = _({
		...e,
		id: void 0,
		isDisabled: e.isDisabled || t.isDisabled
	}, r, n);
	return t.selectionMode === "single" && (s.role = "radio", s["aria-checked"] = r.isSelected, delete s["aria-pressed"]), {
		isPressed: i,
		isSelected: a,
		isDisabled: o,
		buttonProps: s
	};
}
// node_modules/react-stately/dist/private/toggle/useToggleGroupState.mjs
function S(e) {
	let { selectionMode: t = "single", disallowEmptySelection: n, isDisabled: r = !1 } = e, [i, a] = g((0, v.useMemo)(() => e.selectedKeys ? new Set(e.selectedKeys) : void 0, [e.selectedKeys]), (0, v.useMemo)(() => e.defaultSelectedKeys ? new Set(e.defaultSelectedKeys) : /* @__PURE__ */ new Set(), [e.defaultSelectedKeys]), e.onSelectionChange);
	return {
		selectionMode: t,
		isDisabled: r,
		selectedKeys: i,
		setSelectedKeys: a,
		toggleKey(e) {
			let r;
			t === "multiple" ? (r = new Set(i), r.has(e) && (!n || r.size > 1) ? r.delete(e) : r.add(e)) : r = new Set(i.has(e) && !n ? [] : [e]), a(r);
		},
		setSelected(e, t) {
			t !== i.has(e) && this.toggleKey(e);
		}
	};
}
// node_modules/react-aria-components/dist/private/ToggleButtonGroup.mjs
var C = /*#__PURE__*/ (0, v.createContext)({}), w = /*#__PURE__*/ (0, v.createContext)(null), T = /*#__PURE__*/ (0, v.forwardRef)(function(t, o) {
	[t, o] = n(t, o, C);
	let s = S(t), { groupProps: l } = b(t, s, o), u = r({
		...t,
		values: {
			orientation: t.orientation || "horizontal",
			isDisabled: s.isDisabled,
			state: s
		},
		defaultClassName: "react-aria-ToggleButtonGroup"
	}), d = c(t, { global: !0 });
	return /*#__PURE__*/ v.createElement(i.div, {
		...e(d, u, l),
		ref: o,
		slot: t.slot || void 0,
		"data-orientation": t.orientation || "horizontal",
		"data-disabled": t.isDisabled || void 0
	}, /*#__PURE__*/ v.createElement(w.Provider, { value: s }, /*#__PURE__*/ v.createElement(a, null, u.children)));
});
export { y as a, x as i, T as n, _ as o, w as r, C as t };
