import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i, t as a } from "./SelectionIndicator-C43cTdGN.js";
import { d as o, l as s, m as c, n as l, r as u, s as d, t as f, u as p } from "./utils-UBVJ5JR_.js";
import { n as m, r as h, t as g } from "./Collection-DMw2vuUT.js";
import { t as _ } from "./SharedElementTransition-C1TNSLy6.js";
import { t as v } from "./useLabels-IW2w8qqV.js";
import { t as y } from "./I18nProvider-zGzu-4zN.js";
import { c as b, l as x, p as S } from "./useMultipleSelectionState-Bgjz_mf2.js";
import { t as C } from "./filterDOMProps-CJYy6efO.js";
import { n as w } from "./useFocusable-D0mnHSRC.js";
import { A as ee } from "./useKeyboard-CqNSkGJ-.js";
import { t as T } from "./useHasTabbableChild-D2m5bncm.js";
import { d as E, i as te, n as ne, t as re } from "./CollectionBuilder-DSfSS-yC.js";
import { t as ie } from "./Hidden-B5FjVPor.js";
import { t as ae } from "./useListState-DvZcaErY.js";
import { t as oe } from "./useControlledState-BbVlCDcL.js";
import { n as se, t as ce } from "./animation-BSwTv2GN.js";
import { n as D, t as le } from "./useHover-DxA7bNQs.js";
import { r as O, t as k } from "./compose-ClIOcrt6.js";
import { t as A } from "./dom-CdwaDRL5.js";
import { a as ue, c as de, o as fe, s as pe } from "./icons-BUH88Ubz.js";
import { t as me } from "./scroll-shadow-DcIXTxis.js";
import { t as he } from "./collection-prop-injection-C79e1x52.js";
// node_modules/@heroui/styles/dist/components/tabs/tabs.styles.js
var ge = e({
	defaultVariants: {
		align: "center",
		variant: "primary"
	},
	slots: {
		base: "tabs",
		scrollNext: "tabs__list-container__scroll-next",
		scrollPrev: "tabs__list-container__scroll-prev",
		scroller: "tabs__list-container__scroller",
		separator: "tabs__separator",
		tab: "tabs__tab",
		tabIndicator: "tabs__indicator",
		tabList: "tabs__list",
		tabListContainer: "tabs__list-container",
		tabPanel: "tabs__panel"
	},
	variants: {
		align: {
			center: {},
			end: { base: "tabs--align-end" },
			start: { base: "tabs--align-start" }
		},
		variant: {
			primary: {},
			secondary: { base: "tabs--secondary" }
		}
	}
}), j = /* @__PURE__ */ new WeakMap();
function M(e, t, n) {
	return e ? (typeof t == "string" && (t = t.replace(/\s+/g, "")), `${j.get(e)}-${n}-${t}`) : "";
}
// node_modules/react-aria/dist/private/tabs/useTab.mjs
function N(e, t, n) {
	let { key: r, isDisabled: i, shouldSelectOnPressUp: a } = e, { selectionManager: s, selectedKey: c } = t, l = r === c, u = i || t.isDisabled || t.selectionManager.isDisabled(r), d = t.collection.getItem(r), { itemProps: f, isPressed: p } = b({
		selectionManager: s,
		key: r,
		ref: n,
		isDisabled: u,
		shouldSelectOnPressUp: a ?? d?.props.href != null,
		linkBehavior: "selection"
	}), m = M(t, r, "tab"), h = M(t, r, "tabpanel"), { tabIndex: g } = f, _ = C(d?.props, { labelable: !0 });
	delete _.id;
	let v = ee(d?.props), { focusableProps: y } = w({
		...d?.props,
		isDisabled: u
	}, n);
	return {
		tabProps: o(_, y, v, f, {
			id: m,
			"aria-selected": l,
			"aria-disabled": u || void 0,
			"aria-controls": l ? h : void 0,
			tabIndex: u ? void 0 : g,
			role: "tab"
		}),
		isSelected: l,
		isDisabled: u,
		isPressed: p
	};
}
// node_modules/react-aria/dist/private/tabs/useTabPanel.mjs
function P(e, t, n) {
	let r = T(n) ? void 0 : 0, i = M(t, e.id ?? t?.selectedKey, "tabpanel"), a = v({
		...e,
		id: i,
		"aria-labelledby": M(t, t?.selectedKey, "tab")
	});
	return { tabPanelProps: o(a, {
		tabIndex: r,
		role: "tabpanel",
		"aria-describedby": e["aria-describedby"],
		"aria-details": e["aria-details"]
	}) };
}
// node_modules/react-aria/dist/private/tabs/TabsKeyboardDelegate.mjs
var F = class {
	constructor(e, t, n, r = /* @__PURE__ */ new Set()) {
		this.collection = e, this.flipDirection = t === "rtl", this.disabledKeys = r, this.tabDirection = n === "horizontal";
	}
	getKeyLeftOf(e) {
		return this.flipDirection ? this.getNextKey(e) : this.getPreviousKey(e);
	}
	getKeyRightOf(e) {
		return this.flipDirection ? this.getPreviousKey(e) : this.getNextKey(e);
	}
	isDisabled(e) {
		return this.disabledKeys.has(e) || !!this.collection.getItem(e)?.props?.isDisabled;
	}
	getFirstKey() {
		let e = this.collection.getFirstKey();
		return e != null && this.isDisabled(e) && (e = this.getNextKey(e)), e;
	}
	getLastKey() {
		let e = this.collection.getLastKey();
		return e != null && this.isDisabled(e) && (e = this.getPreviousKey(e)), e;
	}
	getKeyAbove(e) {
		return this.tabDirection ? null : this.getPreviousKey(e);
	}
	getKeyBelow(e) {
		return this.tabDirection ? null : this.getNextKey(e);
	}
	getNextKey(e) {
		let t = e;
		do
			t = this.collection.getKeyAfter(t), t ??= this.collection.getFirstKey();
		while (t != null && this.isDisabled(t) && t !== e);
		return t;
	}
	getPreviousKey(e) {
		let t = e;
		do
			t = this.collection.getKeyBefore(t), t ??= this.collection.getLastKey();
		while (t != null && this.isDisabled(t) && t !== e);
		return t;
	}
}, I = /* @__PURE__ */ t(n(), 1);
function L(e, t, n) {
	let { orientation: r = "horizontal", keyboardActivation: i = "automatic" } = e, { collection: a, selectionManager: s, disabledKeys: l } = t, { direction: u } = y(), d = (0, I.useMemo)(() => new F(a, u, r, l), [
		a,
		l,
		r,
		u
	]), { collectionProps: f } = x({
		ref: n,
		selectionManager: s,
		keyboardDelegate: d,
		selectOnFocus: i === "automatic",
		disallowEmptySelection: !0,
		scrollRef: n,
		linkBehavior: "selection"
	}), p = c();
	j.set(t, p);
	let m = v({
		...e,
		id: p
	});
	return { tabListProps: {
		...o(f, m),
		role: "tablist",
		"aria-orientation": r,
		tabIndex: void 0
	} };
}
// node_modules/react-stately/dist/private/list/useSingleSelectListState.mjs
function R(e) {
	let [t, n] = oe(e.selectedKey, e.defaultSelectedKey ?? null, e.onSelectionChange), r = (0, I.useMemo)(() => t == null ? [] : [t], [t]), { collection: i, disabledKeys: a, selectionManager: o } = ae({
		...e,
		selectionMode: "single",
		disallowEmptySelection: !0,
		allowDuplicateSelectionEvents: !0,
		selectedKeys: r,
		onSelectionChange: (r) => {
			if (r === "all") return;
			let i = r.values().next().value ?? null;
			i === t && e.onSelectionChange && e.onSelectionChange(i), n(i);
		}
	});
	return {
		collection: i,
		disabledKeys: a,
		selectionManager: o,
		selectedKey: t,
		setSelectedKey: n,
		selectedItem: t == null ? null : i.getItem(t)
	};
}
// node_modules/react-stately/dist/private/tabs/useTabListState.mjs
function _e(e) {
	let t = R({
		...e,
		onSelectionChange: e.onSelectionChange ? (t) => {
			t != null && e.onSelectionChange?.(t);
		} : void 0,
		suppressTextValueWarning: !0,
		defaultSelectedKey: e.defaultSelectedKey ?? z(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set()) ?? void 0
	}), { selectionManager: n, collection: r, selectedKey: i } = t, a = (0, I.useRef)(i);
	return (0, I.useEffect)(() => {
		let o = i;
		e.selectedKey == null && (n.isEmpty || o == null || !r.getItem(o)) && (o = z(r, t.disabledKeys), o != null && n.setSelectedKeys([o])), (o != null && n.focusedKey == null || !n.isFocused && o !== a.current) && n.setFocusedKey(o), a.current = o;
	}), {
		...t,
		isDisabled: e.isDisabled || !1
	};
}
function z(e, t) {
	let n = null;
	if (e) {
		for (n = e.getFirstKey(); n != null && (t.has(n) || e.getItem(n)?.props?.isDisabled) && n !== e.getLastKey();) n = e.getKeyAfter(n);
		n != null && (t.has(n) || e.getItem(n)?.props?.isDisabled) && n === e.getLastKey() && (n = e.getFirstKey());
	}
	return n;
}
// node_modules/react-aria-components/dist/private/Tabs.mjs
var B = /*#__PURE__*/ (0, I.createContext)(null), V = /*#__PURE__*/ (0, I.createContext)(null), ve = /*#__PURE__*/ (0, I.forwardRef)(function(e, t) {
	[e, t] = l(e, t, B);
	let { children: n, orientation: r = "horizontal" } = e;
	return n = (0, I.useMemo)(() => typeof n == "function" ? n({
		orientation: r,
		defaultChildren: null
	}) : n, [n, r]), /*#__PURE__*/ I.createElement(ne, { content: n }, (n) => /*#__PURE__*/ I.createElement(ye, {
		props: e,
		collection: n,
		tabsRef: t
	}));
});
function ye({ props: e, tabsRef: t, collection: n }) {
	let { orientation: r = "horizontal" } = e, i = _e({
		...e,
		collection: n,
		children: void 0
	}), { focusProps: a, isFocused: s, isFocusVisible: c } = D({ within: !0 }), l = (0, I.useMemo)(() => ({
		orientation: r,
		isFocusWithin: s,
		isFocusVisible: c
	}), [
		r,
		s,
		c
	]), p = u({
		...e,
		defaultClassName: "react-aria-Tabs",
		values: l
	}), m = C(e, { global: !0 });
	return /*#__PURE__*/ I.createElement(d.div, {
		...o(m, p, a),
		ref: t,
		slot: e.slot || void 0,
		"data-focused": s || void 0,
		"data-orientation": r,
		"data-focus-visible": c || void 0,
		"data-disabled": i.isDisabled || void 0
	}, /*#__PURE__*/ I.createElement(f, { values: [[B, e], [V, i]] }, p.children));
}
var H = /*#__PURE__*/ (0, I.forwardRef)(function(e, t) {
	return (0, I.useContext)(V) ? /*#__PURE__*/ I.createElement(be, {
		props: e,
		forwardedRef: t
	}) : /*#__PURE__*/ I.createElement(te, e);
});
function be({ props: e, forwardedRef: t }) {
	let n = (0, I.useContext)(V), { CollectionRoot: r } = (0, I.useContext)(g), { orientation: i = "horizontal", keyboardActivation: a = "automatic" } = s(B), c = p(t), { tabListProps: l } = L({
		...e,
		orientation: i,
		keyboardActivation: a
	}, n, c), f = u({
		...e,
		children: null,
		defaultClassName: "react-aria-TabList",
		values: {
			orientation: i,
			state: n
		}
	}), h = C(e, { global: !0 });
	return delete h.id, /*#__PURE__*/ I.createElement(d.div, {
		...o(h, f, l),
		ref: c,
		"data-orientation": i || void 0
	}, /*#__PURE__*/ I.createElement(_, null, /*#__PURE__*/ I.createElement(r, {
		collection: n.collection,
		persistedKeys: m(n.selectionManager.focusedKey)
	})));
}
var xe = class extends E {
	static {
		this.type = "item";
	}
}, Se = /*#__PURE__*/ re(xe, (e, t, n) => {
	let r = (0, I.useContext)(V), a = p(t), { tabProps: s, isSelected: c, isDisabled: l, isPressed: f } = N({
		key: n.key,
		...e
	}, r, a), { focusProps: m, isFocused: h, isFocusVisible: g } = D(), { hoverProps: _, isHovered: v } = le({
		isDisabled: l,
		onHoverStart: e.onHoverStart,
		onHoverEnd: e.onHoverEnd,
		onHoverChange: e.onHoverChange
	}), y = u({
		...e,
		id: void 0,
		children: n.rendered,
		defaultClassName: "react-aria-Tab",
		values: {
			isSelected: c,
			isDisabled: l,
			isFocused: h,
			isFocusVisible: g,
			isPressed: f,
			isHovered: v
		}
	}), b = n.props.href ? d.a : d.div, x = C(e, { global: !0 });
	return delete x.id, delete x.onClick, /*#__PURE__*/ I.createElement(b, {
		...o(x, y, s, m, _),
		ref: a,
		"data-selected": c || void 0,
		"data-disabled": l || void 0,
		"data-focused": h || void 0,
		"data-focus-visible": g || void 0,
		"data-pressed": f || void 0,
		"data-hovered": v || void 0
	}, /*#__PURE__*/ I.createElement(i.Provider, { value: { isSelected: c } }, y.children));
}), Ce = /*#__PURE__*/ ie(function(e, t) {
	let n = (0, I.useContext)(V), r = p(t), i = n.selectedKey === e.id, [a, o] = (0, I.useState)(n.selectedKey == null ? null : i);
	a == null && n.selectedKey != null ? o(i) : !i && a && o(!1);
	let s = ce(r, i);
	return !i && !e.shouldForceMount && !s ? null : /*#__PURE__*/ I.createElement(we, {
		...e,
		tabPanelRef: r,
		isInitiallySelected: a || !1,
		isExiting: s
	});
});
function we(e) {
	let t = (0, I.useContext)(V), { id: n, tabPanelRef: r, isInitiallySelected: i, isExiting: a, ...s } = e, { tabPanelProps: c } = P(e, t, r), { focusProps: l, isFocused: p, isFocusVisible: m } = D(), _ = t.selectedKey === e.id, v = se(r) && !i, y = u({
		...e,
		defaultClassName: "react-aria-TabPanel",
		values: {
			isFocused: p,
			isFocusVisible: m,
			isInert: S(!_),
			isEntering: v,
			isExiting: a,
			state: t
		}
	}), b = C(s, { global: !0 });
	delete b.id;
	let x = _ ? o(b, c, l, y) : o(b, y);
	return /*#__PURE__*/ I.createElement(d.div, {
		...x,
		ref: r,
		"data-focused": p || void 0,
		"data-focus-visible": m || void 0,
		inert: S(!_ || e.inert),
		"data-inert": _ ? void 0 : "true",
		"data-entering": v || void 0,
		"data-exiting": a || void 0
	}, /*#__PURE__*/ I.createElement(f, { values: [[B, null], [V, null]] }, /*#__PURE__*/ I.createElement(g.Provider, { value: h }, y.children)));
}
// node_modules/@heroui/react/dist/components/tabs/tabs.js
var U = r(), W = /*#__PURE__*/ (0, I.createContext)({}), G = he("tabs.listContainer"), K = ({ align: e, children: t, className: n, orientation: r = "horizontal", variant: i, ...a }) => {
	let [o, s] = I.useState(!1);
	I.useEffect(() => {
		let e = requestAnimationFrame(() => s(!0));
		return () => cancelAnimationFrame(e);
	}, []);
	let c = I.useMemo(() => ge({
		align: e,
		variant: i
	}), [e, i]), l = I.useMemo(() => ({
		isIndicatorReady: o,
		orientation: r,
		slots: c
	}), [
		o,
		r,
		c
	]);
	return /*#__PURE__*/ (0, U.jsx)(W, {
		value: l,
		children: /*#__PURE__*/ (0, U.jsx)(ve, {
			...a,
			className: O(n, c.base()),
			"data-slot": "tabs",
			orientation: r,
			children: t
		})
	});
};
K.displayName = "HeroUI.Tabs";
var q = ({ children: e, className: t, render: n, ...r }) => /*#__PURE__*/ (0, U.jsx)(G.Injector, {
	...r,
	className: t,
	render: n,
	children: e
});
q.displayName = "HeroUI.Tabs.ListContainer";
var J = ({ children: e, className: t, ...n }) => {
	let { orientation: r = "horizontal", slots: i } = (0, I.use)(W), a = (0, I.useRef)(null), o = r === "vertical", [s, c] = G.useSlot(n), l = O(t, i?.tabList()), u = (0, I.useCallback)((e) => {
		let t = a.current;
		if (!t) return;
		let n = o ? t.clientHeight : t.clientWidth, r = o ? t.scrollHeight : t.scrollWidth, i = Math.max(0, r - n), s = !o && getComputedStyle(t).direction === "rtl", c = e * n * .8 * (s ? -1 : 1), l = o ? t.scrollTop : t.scrollLeft, u = Math.min(s ? 0 : i, Math.max(s ? -i : 0, l + c));
		u !== l && t.scrollTo({
			behavior: "smooth",
			[o ? "top" : "left"]: u
		});
	}, [o]);
	if (!s) return /*#__PURE__*/ (0, U.jsx)(H, {
		...c,
		className: l,
		"data-slot": "tabs-list",
		children: e
	});
	let { className: d, render: f, ...p } = s;
	return /*#__PURE__*/ (0, U.jsx)(H, {
		...c,
		className: l,
		"data-slot": "tabs-list",
		render: (e) => {
			let { children: t, className: n, ref: s, ...c } = e;
			return /*#__PURE__*/ (0, U.jsxs)(A.div, {
				className: k(i?.tabListContainer, d),
				"data-slot": "tabs-list-container",
				render: f,
				...p,
				children: [
					/*#__PURE__*/ (0, U.jsx)(me, {
						ref: a,
						hideScrollBar: !0,
						className: k(i?.scroller),
						orientation: r,
						size: 64,
						children: /*#__PURE__*/ (0, U.jsx)("div", {
							...c,
							ref: s,
							className: n,
							children: t
						})
					}),
					/*#__PURE__*/ (0, U.jsx)("button", {
						"aria-label": o ? "Scroll tabs up" : "Scroll tabs left",
						className: k(i?.scrollPrev),
						tabIndex: -1,
						type: "button",
						onClick: () => u(-1),
						children: o ? /*#__PURE__*/ (0, U.jsx)(de, {}) : /*#__PURE__*/ (0, U.jsx)(fe, {})
					}),
					/*#__PURE__*/ (0, U.jsx)("button", {
						"aria-label": o ? "Scroll tabs down" : "Scroll tabs right",
						className: k(i?.scrollNext),
						tabIndex: -1,
						type: "button",
						onClick: () => u(1),
						children: o ? /*#__PURE__*/ (0, U.jsx)(ue, {}) : /*#__PURE__*/ (0, U.jsx)(pe, {})
					})
				]
			});
		},
		children: e
	});
};
J.displayName = "HeroUI.Tabs.List";
var Y = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, I.use)(W);
	return /*#__PURE__*/ (0, U.jsx)(Se, {
		...n,
		className: O(t, r?.tab()),
		"data-slot": "tabs-tab",
		children: e
	});
};
Y.displayName = "HeroUI.Tabs.Tab";
var X = ({ className: e, ...t }) => {
	let { isIndicatorReady: n = !1, slots: r } = (0, I.use)(W);
	return /*#__PURE__*/ (0, U.jsx)(a, {
		className: k(r?.tabIndicator, e),
		"data-animation-ready": n,
		"data-slot": "tabs-indicator",
		...t
	});
};
X.displayName = "HeroUI.Tabs.Indicator";
var Z = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, I.use)(W);
	return /*#__PURE__*/ (0, U.jsx)(Ce, {
		...n,
		className: O(t, r?.tabPanel()),
		"data-slot": "tabs-panel",
		children: e
	});
};
Z.displayName = "HeroUI.Tabs.Panel";
var Q = ({ className: e, ...t }) => {
	let { slots: n } = (0, I.use)(W);
	return /*#__PURE__*/ (0, U.jsx)(A.span, {
		"aria-hidden": "true",
		className: k(n?.separator, e),
		"data-slot": "tabs-separator",
		...t
	});
};
Q.displayName = "HeroUI.Tabs.Separator";
// node_modules/@heroui/react/dist/components/tabs/index.js
var $ = Object.assign(K, {
	Root: K,
	ListContainer: q,
	List: J,
	Tab: Y,
	Indicator: X,
	Separator: Q,
	Panel: Z
});
// upstream/demos/en/tabs/basic.tsx
function Te() {
	return /* @__PURE__ */ (0, U.jsxs)($, {
		className: "w-full max-w-md",
		children: [
			/* @__PURE__ */ (0, U.jsx)($.ListContainer, { children: /* @__PURE__ */ (0, U.jsxs)($.List, {
				"aria-label": "Options",
				children: [
					/* @__PURE__ */ (0, U.jsxs)($.Tab, {
						id: "overview",
						children: ["Overview", /* @__PURE__ */ (0, U.jsx)($.Indicator, {})]
					}),
					/* @__PURE__ */ (0, U.jsxs)($.Tab, {
						id: "analytics",
						children: ["Analytics", /* @__PURE__ */ (0, U.jsx)($.Indicator, {})]
					}),
					/* @__PURE__ */ (0, U.jsxs)($.Tab, {
						id: "reports",
						children: ["Reports", /* @__PURE__ */ (0, U.jsx)($.Indicator, {})]
					})
				]
			}) }),
			/* @__PURE__ */ (0, U.jsx)($.Panel, {
				className: "pt-4",
				id: "overview",
				children: /* @__PURE__ */ (0, U.jsx)("p", { children: "View your project overview and recent activity." })
			}),
			/* @__PURE__ */ (0, U.jsx)($.Panel, {
				className: "pt-4",
				id: "analytics",
				children: /* @__PURE__ */ (0, U.jsx)("p", { children: "Track your metrics and analyze performance data." })
			}),
			/* @__PURE__ */ (0, U.jsx)($.Panel, {
				className: "pt-4",
				id: "reports",
				children: /* @__PURE__ */ (0, U.jsx)("p", { children: "Generate and download detailed reports." })
			})
		]
	});
}
export { Te as Basic };
