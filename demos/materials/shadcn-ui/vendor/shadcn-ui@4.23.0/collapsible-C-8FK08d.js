import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { i, t as a } from "./useRenderElement-Bc91YjHo.js";
import { t as o } from "./useIsoLayoutEffect-B0B6th0o.js";
import { a as s } from "./useOpenChangeComplete-BfJk_bnM.js";
import { a as c, i as l, n as u, o as d, r as f, t as p } from "./useCollapsiblePanel-Fb6B62Yb.js";
import { t as m } from "./useButton-CMNj7XNN.js";
// node_modules/@base-ui/react/collapsible/root/stateAttributesMapping.mjs
var h = /* @__PURE__ */ e(t(), 1), g = {
	...u,
	...s
}, _ = n(), v = /*#__PURE__*/ h.forwardRef(function(e, t) {
	let { render: n, className: i, defaultOpen: o = !1, disabled: s = !1, onOpenChange: c, open: u, style: f, ...p } = e, m = r(c), v = d({
		open: u,
		defaultOpen: o,
		onOpenChange: m,
		disabled: s
	}), y = h.useMemo(() => ({
		open: v.open,
		disabled: v.disabled,
		transitionStatus: v.transitionStatus
	}), [
		v.open,
		v.disabled,
		v.transitionStatus
	]), b = h.useMemo(() => ({
		...v,
		onOpenChange: m,
		state: y
	}), [
		v,
		m,
		y
	]), x = a("div", e, {
		state: y,
		ref: t,
		props: p,
		stateAttributesMapping: g
	});
	return /*#__PURE__*/ (0, _.jsx)(l.Provider, {
		value: b,
		children: x
	});
}), y = {
	...f,
	...s
}, b = /*#__PURE__*/ h.forwardRef(function(e, t) {
	let { panelId: n, open: r, handleTrigger: i, state: o, disabled: s } = c(), { className: l, disabled: u = s, render: d, nativeButton: f = !0, style: p, ...h } = e, { getButtonProps: g, buttonRef: _ } = m({
		disabled: u,
		focusableWhenDisabled: !0,
		native: f
	});
	return a("button", e, {
		state: o,
		ref: [t, _],
		props: [
			{
				"aria-controls": r ? n : void 0,
				"aria-expanded": r,
				onClick: i
			},
			h,
			g
		],
		stateAttributesMapping: y
	});
}), x = /*#__PURE__*/ function(e) {
	return e.collapsiblePanelHeight = "--collapsible-panel-height", e.collapsiblePanelWidth = "--collapsible-panel-width", e;
}({}), S = /*#__PURE__*/ h.forwardRef(function(e, t) {
	let { className: n, hiddenUntilFound: r, keepMounted: s, render: l, id: u, style: d, ...f } = e, { mounted: m, onOpenChange: h, open: _, panelId: v, setMounted: y, setPanelIdState: b, setOpen: S, state: C, transitionStatus: w } = c(), T = r ?? !1, E = s ?? !1;
	o(() => {
		if (u) return b(u), () => {
			b(void 0);
		};
	}, [u, b]);
	let { height: D, props: O, ref: k, shouldPreventOpenAnimation: A, shouldRender: j, transitionStatus: M, width: N } = p({
		externalRef: t,
		hiddenUntilFound: T,
		id: v,
		keepMounted: E,
		mounted: m,
		onOpenChange: h,
		open: _,
		setMounted: y,
		setOpen: S,
		transitionStatus: w
	}), P = {
		...C,
		transitionStatus: M
	}, F = i(d, P), I = a("div", {
		...e,
		style: void 0
	}, {
		state: P,
		ref: k,
		props: [
			O,
			{ style: {
				[x.collapsiblePanelHeight]: D === void 0 ? "auto" : `${D}px`,
				[x.collapsiblePanelWidth]: N === void 0 ? "auto" : `${N}px`
			} },
			f,
			F ? { style: F } : void 0,
			A ? { style: { animationName: "none" } } : void 0
		],
		stateAttributesMapping: g
	});
	return j ? I : null;
});
// upstream/registry/bases/base/ui/collapsible.tsx
function C({ ...e }) {
	return /* @__PURE__ */ (0, _.jsx)(v, {
		"data-slot": "collapsible",
		...e
	});
}
function w({ ...e }) {
	return /* @__PURE__ */ (0, _.jsx)(b, {
		"data-slot": "collapsible-trigger",
		...e
	});
}
function T({ ...e }) {
	return /* @__PURE__ */ (0, _.jsx)(S, {
		"data-slot": "collapsible-content",
		...e
	});
}
export { T as n, w as r, C as t };
