import { d as e, f as t, i as n, m as r, n as i, o as a, p as o, r as s, s as c, t as l, u } from "./utils-UBVJ5JR_.js";
import { i as d, t as f } from "./Collection-DMw2vuUT.js";
import { i as p, n as m, r as h, t as g } from "./DragAndDrop-C3nrgJup.js";
import { i as _, n as v, t as y } from "./getItemCount-DbQDCr5r.js";
import { r as b } from "./Autocomplete-By5miKJr.js";
import { n as x } from "./SelectionIndicator-C43cTdGN.js";
import { n as S } from "./Separator-CZCR6UjL.js";
import { t as C } from "./SharedElementTransition-C1TNSLy6.js";
import { n as w } from "./Text-CEDDBTEL.js";
import { t as T } from "./filterDOMProps-CJYy6efO.js";
import { n as E, r as D, t as O } from "./useHover-DxA7bNQs.js";
import { t as k } from "./useLabel-xEmSShhj.js";
import { A, n as j, s as M, t as N } from "./useKeyboard-CqNSkGJ-.js";
import { c as P, p as F } from "./useMultipleSelectionState-Bgjz_mf2.js";
import { f as I, i as L, l as R, n as z, r as B, s as V, t as H } from "./CollectionBuilder-DSfSS-yC.js";
import { n as ee } from "./FocusScope-C6wAY3W6.js";
import { r as U, t as te } from "./ListKeyboardDelegate-DtpiEoL1.js";
import { n as ne, t as W } from "./useListState-DvZcaErY.js";
import { i as G, n as K } from "./jsx-runtime-C1t0izHF.js";
import { t as re } from "./useCollator-dflgnzgU.js";
import { t as ie } from "./I18nProvider-zGzu-4zN.js";
// node_modules/react-aria/dist/private/listbox/utils.mjs
var q = /* @__PURE__ */ new WeakMap();
function J(e) {
	return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function Y(e, t) {
	let n = q.get(e);
	if (!n) throw Error("Unknown list");
	return `${n.id}-option-${J(t)}`;
}
// node_modules/react-aria/dist/private/listbox/useListBox.mjs
function ae(t, n, i) {
	let a = T(t, { labelable: !0 }), o = t.selectionBehavior || "toggle", s = t.orientation || "vertical", c = t.linkBehavior || (o === "replace" ? "action" : "override");
	o === "toggle" && c === "action" && (c = "override");
	let { listProps: l } = v({
		...t,
		ref: i,
		selectionManager: n.selectionManager,
		collection: n.collection,
		disabledKeys: n.disabledKeys,
		linkBehavior: c
	}), { focusWithinProps: u } = D({
		onFocusWithin: t.onFocus,
		onBlurWithin: t.onBlur,
		onFocusWithinChange: t.onFocusChange
	}), d = r(t.id);
	q.set(n, {
		id: d,
		shouldUseVirtualFocus: t.shouldUseVirtualFocus,
		shouldSelectOnPressUp: t.shouldSelectOnPressUp,
		shouldFocusOnHover: t.shouldFocusOnHover,
		isVirtualized: t.isVirtualized,
		onAction: t.onAction,
		linkBehavior: c,
		UNSTABLE_itemBehavior: t.UNSTABLE_itemBehavior
	});
	let { labelProps: f, fieldProps: p } = k({
		...t,
		id: d,
		labelElementType: "span"
	});
	return {
		labelProps: f,
		listBoxProps: e(a, u, n.selectionManager.selectionMode === "multiple" ? { "aria-multiselectable": "true" } : {}, {
			role: "listbox",
			"aria-orientation": s,
			...e(p, l)
		})
	};
}
// node_modules/react-aria/dist/private/listbox/useOption.mjs
function X(n, r, i) {
	let { key: a } = n, s = q.get(r), c = n.isDisabled ?? r.selectionManager.isDisabled(a), l = n.isSelected ?? r.selectionManager.isSelected(a), u = n.shouldSelectOnPressUp ?? s?.shouldSelectOnPressUp, d = n.shouldFocusOnHover ?? s?.shouldFocusOnHover, f = n.shouldUseVirtualFocus ?? s?.shouldUseVirtualFocus, p = n.isVirtualized ?? s?.isVirtualized, m = o(), h = o(), g = {
		role: "option",
		"aria-disabled": c || void 0,
		"aria-selected": r.selectionManager.selectionMode === "none" ? void 0 : l,
		"aria-label": n["aria-label"],
		"aria-labelledby": m,
		"aria-describedby": h
	}, _ = r.collection.getItem(a);
	if (p) {
		let e = Number(_?.index);
		g["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, g["aria-setsize"] = y(r.collection);
	}
	let v = s?.onAction ? () => s?.onAction?.(a) : void 0, b = Y(r, a), { itemProps: x, isPressed: S, isFocused: C, hasAction: w, allowsSelection: E } = P({
		selectionManager: r.selectionManager,
		key: a,
		ref: i,
		shouldSelectOnPressUp: u,
		allowsDifferentPressOrigin: u && d,
		isVirtualized: p,
		shouldUseVirtualFocus: f,
		isDisabled: c,
		onAction: v || _?.props?.onAction ? t(_?.props?.onAction, v) : void 0,
		linkBehavior: s?.linkBehavior,
		UNSTABLE_itemBehavior: s?.UNSTABLE_itemBehavior,
		id: b
	}), { hoverProps: D } = O({
		isDisabled: c || !d,
		onHoverStart() {
			M() || (r.selectionManager.setFocused(!0), r.selectionManager.setFocusedKey(a));
		}
	}), k = T(_?.props);
	delete k.id;
	let j = A(_?.props);
	return {
		optionProps: {
			...g,
			...e(k, x, D, j),
			id: b
		},
		labelProps: { id: m },
		descriptionProps: { id: h },
		isFocused: C,
		isFocusVisible: C && r.selectionManager.isFocused && M(),
		isSelected: l,
		isDisabled: c,
		isPressed: S,
		allowsSelection: E,
		hasAction: w
	};
}
// node_modules/react-aria/dist/private/listbox/useListBoxSection.mjs
function oe(e) {
	let { heading: t, "aria-label": n } = e, i = r();
	return {
		itemProps: { role: "presentation" },
		headingProps: t ? {
			id: i,
			role: "presentation",
			onMouseDown: (e) => {
				e.preventDefault();
			}
		} : {},
		groupProps: {
			role: "group",
			"aria-label": n,
			"aria-labelledby": t ? i : void 0
		}
	};
}
// node_modules/react-aria-components/dist/private/ListBox.mjs
var Z = /* @__PURE__ */ G(K(), 1), Q = /*#__PURE__*/ (0, Z.createContext)(null), $ = /*#__PURE__*/ (0, Z.createContext)(null), se = /*#__PURE__*/ (0, Z.forwardRef)(function(e, t) {
	[e, t] = i(e, t, Q);
	let n = (0, Z.useContext)($);
	return n ? /*#__PURE__*/ Z.createElement(le, {
		state: n,
		props: e,
		listBoxRef: t
	}) : /*#__PURE__*/ Z.createElement(z, { content: /*#__PURE__*/ Z.createElement(L, e) }, (n) => /*#__PURE__*/ Z.createElement(ce, {
		props: e,
		listBoxRef: t,
		collection: n
	}));
});
function ce({ props: e, listBoxRef: t, collection: n }) {
	e = {
		...e,
		collection: n,
		children: null,
		items: null
	};
	let { layoutDelegate: r } = (0, Z.useContext)(f), i = W({
		...e,
		layoutDelegate: r
	});
	return /*#__PURE__*/ Z.createElement(le, {
		state: i,
		props: e,
		listBoxRef: t
	});
}
function le({ state: t, props: n, listBoxRef: r }) {
	[n, r] = i(n, r, b);
	let { dragAndDropHooks: a, layout: o = "stack", orientation: u = "vertical", filter: _ } = n, v = ne(t, _), { collection: y, selectionManager: x } = v, w = !!a?.useDraggableCollectionState, D = !!a?.useDroppableCollectionState, { direction: O } = ie(), { disabledBehavior: k, disabledKeys: A } = x, j = re({
		usage: "search",
		sensitivity: "base"
	}), { isVirtualized: M, layoutDelegate: N, dropTargetDelegate: P, CollectionRoot: F } = (0, Z.useContext)(f), I = (0, Z.useMemo)(() => n.keyboardDelegate || new te({
		collection: y,
		collator: j,
		ref: r,
		disabledKeys: A,
		disabledBehavior: k,
		layout: o,
		orientation: u,
		direction: O,
		layoutDelegate: N
	}), [
		y,
		j,
		r,
		k,
		A,
		u,
		O,
		n.keyboardDelegate,
		o,
		N
	]), { listBoxProps: L } = ae({
		...n,
		shouldSelectOnPressUp: w || n.shouldSelectOnPressUp,
		keyboardDelegate: I,
		isVirtualized: M
	}, v, r);
	(0, Z.useRef)(w), (0, Z.useRef)(D), (0, Z.useEffect)(() => {}, [w, D]);
	let R, z, B, V = !1, H = null, U = (0, Z.useRef)(null);
	if (w && a) {
		R = a.useDraggableCollectionState({
			collection: y,
			selectionManager: x,
			preview: a.renderDragPreview ? U : void 0
		}), a.useDraggableCollection({}, R, r);
		let e = a.DragPreview;
		H = a.renderDragPreview ? /*#__PURE__*/ Z.createElement(e, { ref: U }, a.renderDragPreview) : null;
	}
	if (D && a) {
		z = a.useDroppableCollectionState({
			collection: y,
			selectionManager: x
		});
		let e = a.dropTargetDelegate || P || new a.ListDropTargetDelegate(y, r, {
			orientation: u,
			layout: o,
			direction: O
		});
		B = a.useDroppableCollection({
			keyboardDelegate: I,
			dropTargetDelegate: e
		}, z, r), V = z.isDropTarget({ type: "root" });
	}
	let { focusProps: W, isFocused: G, isFocusVisible: K } = E(), q = v.collection.size === 0, J = {
		isDropTarget: V,
		isEmpty: q,
		isFocused: G,
		isFocusVisible: K,
		layout: n.layout || "stack",
		orientation: u,
		state: v
	}, Y = s({
		...n,
		children: void 0,
		defaultClassName: "react-aria-ListBox",
		values: J
	}), X = null;
	q && n.renderEmptyState && (X = /*#__PURE__*/ Z.createElement("div", {
		role: "option",
		style: { display: "contents" }
	}, n.renderEmptyState(J)));
	let oe = T(n, { global: !0 });
	return /*#__PURE__*/ Z.createElement(ee, null, /*#__PURE__*/ Z.createElement(c.div, {
		...e(oe, Y, L, W, B?.collectionProps),
		ref: r,
		slot: n.slot || void 0,
		onScroll: n.onScroll,
		"data-drop-target": V || void 0,
		"data-empty": q || void 0,
		"data-focused": G || void 0,
		"data-focus-visible": K || void 0,
		"data-layout": n.layout || "stack",
		"data-orientation": u
	}, /*#__PURE__*/ Z.createElement(l, { values: [
		[Q, n],
		[$, v],
		[m, {
			dragAndDropHooks: a,
			dragState: R,
			dropState: z
		}],
		[S, { elementType: "div" }],
		[p, { render: pe }],
		[d, {
			name: "ListBoxSection",
			render: ue
		}]
	] }, /*#__PURE__*/ Z.createElement(C, null, /*#__PURE__*/ Z.createElement(F, {
		collection: y,
		scrollRef: r,
		persistedKeys: h(x, a, z),
		renderDropIndicator: g(a, z)
	}))), X, H));
}
function ue(t, r, i, a = "react-aria-ListBoxSection") {
	let o = (0, Z.useContext)($), { dragAndDropHooks: l, dropState: u } = (0, Z.useContext)(m), { CollectionBranch: d } = (0, Z.useContext)(f), [p, h] = n(), { headingProps: v, groupProps: y } = oe({
		heading: h,
		"aria-label": t["aria-label"] ?? void 0
	}), b = s({
		...t,
		id: void 0,
		children: void 0,
		defaultClassName: a,
		values: void 0
	}), x = T(t, { global: !0 });
	return delete x.id, /*#__PURE__*/ Z.createElement(c.section, {
		...e(x, b, y),
		ref: r
	}, /*#__PURE__*/ Z.createElement(_.Provider, { value: {
		...v,
		ref: p
	} }, /*#__PURE__*/ Z.createElement(d, {
		collection: o.collection,
		parent: i,
		renderDropIndicator: g(l, u)
	})));
}
var de = /*#__PURE__*/ B(V, ue), fe = /*#__PURE__*/ H(I, function(t, n, r) {
	let i = u(n), o = (0, Z.useContext)($), { dragAndDropHooks: d, dragState: f, dropState: p } = (0, Z.useContext)(m), h = f && !(f.isDisabled || f.selectionManager.isDisabled(r.key)), { optionProps: g, labelProps: _, descriptionProps: v, ...y } = X({
		key: r.key,
		"aria-label": t?.["aria-label"]
	}, o, i), { hoverProps: b, isHovered: S } = O({
		isDisabled: !y.allowsSelection && !y.hasAction && !h,
		onHoverStart: r.props.onHoverStart,
		onHoverChange: r.props.onHoverChange,
		onHoverEnd: r.props.onHoverEnd
	}), { keyboardProps: C } = N(t), { focusProps: E } = j(t), D = null;
	f && d && (D = d.useDraggableItem({
		key: r.key,
		hasAction: y.hasAction
	}, f));
	let k = null;
	p && d && (k = d.useDroppableItem({ target: {
		type: "item",
		key: r.key,
		dropPosition: "on"
	} }, p, i));
	let A = f && f.isDragging(r.key), M = s({
		...t,
		id: void 0,
		children: t.children,
		defaultClassName: "react-aria-ListBoxItem",
		values: {
			...y,
			isHovered: S,
			selectionMode: o.selectionManager.selectionMode,
			selectionBehavior: o.selectionManager.selectionBehavior,
			allowsDragging: !!f,
			isDragging: A,
			isDropTarget: k?.isDropTarget
		}
	});
	(0, Z.useEffect)(() => {
		r.textValue;
	}, [r.textValue]);
	let P = t.href ? c.a : c.div, F = T(t, { global: !0 });
	return delete F.id, delete F.onClick, t.href && g.tabIndex == null && (g.tabIndex = -1), /*#__PURE__*/ Z.createElement(P, {
		...e(F, M, g, b, C, E, D?.dragProps, k?.dropProps),
		ref: i,
		"data-allows-dragging": !!f || void 0,
		"data-selected": y.isSelected || void 0,
		"data-disabled": y.isDisabled || void 0,
		"data-hovered": S || void 0,
		"data-focused": y.isFocused || void 0,
		"data-focus-visible": y.isFocusVisible || void 0,
		"data-pressed": y.isPressed || void 0,
		"data-dragging": A || void 0,
		"data-drop-target": k?.isDropTarget || void 0,
		"data-selection-mode": o.selectionManager.selectionMode === "none" ? void 0 : o.selectionManager.selectionMode
	}, /*#__PURE__*/ Z.createElement(l, { values: [[w, { slots: {
		[a]: _,
		label: _,
		description: v
	} }], [x, { isSelected: y.isSelected }]] }, M.children));
});
function pe(e, t) {
	t = u(t);
	let { dragAndDropHooks: n, dropState: r } = (0, Z.useContext)(m), { dropIndicatorProps: i, isHidden: a, isDropTarget: o } = n.useDropIndicator(e, r, t);
	return a ? null : /*#__PURE__*/ Z.createElement(he, {
		...e,
		dropIndicatorProps: i,
		isDropTarget: o,
		ref: t
	});
}
function me(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, ...i } = e, a = s({
		...i,
		defaultClassName: "react-aria-DropIndicator",
		values: { isDropTarget: r }
	});
	return /*#__PURE__*/ Z.createElement(Z.Fragment, null, /*#__PURE__*/ Z.createElement(c.div, {
		...n,
		...a,
		role: "option",
		ref: t,
		"data-drop-target": r || void 0
	}));
}
var he = /*#__PURE__*/ (0, Z.forwardRef)(me);
H(R, function(t, n, r) {
	let i = (0, Z.useContext)($), { isLoading: a, onLoadMore: o, scrollOffset: l, ...u } = t, d = (0, Z.useRef)(null), f = (0, Z.useMemo)(() => ({
		onLoadMore: o,
		collection: i?.collection,
		sentinelRef: d,
		scrollOffset: l
	}), [
		o,
		l,
		i?.collection
	]);
	U(f, d);
	let p = s({
		...u,
		id: void 0,
		children: r.rendered,
		defaultClassName: "react-aria-ListBoxLoadingIndicator",
		values: void 0
	});
	return /*#__PURE__*/ Z.createElement(Z.Fragment, null, /*#__PURE__*/ Z.createElement("div", {
		style: {
			position: "relative",
			width: 0,
			height: 0
		},
		inert: F(!0)
	}, /*#__PURE__*/ Z.createElement("div", {
		"data-testid": "loadMoreSentinel",
		ref: d,
		style: {
			position: "absolute",
			height: 1,
			width: 1
		}
	})), a && p.children && /*#__PURE__*/ Z.createElement(Z.Fragment, null, /*#__PURE__*/ Z.createElement(c.div, {
		...e(T(t, { global: !0 }), { tabIndex: -1 }),
		...p,
		role: "option",
		ref: n
	}, p.children)));
});
export { de as a, fe as i, $ as n, q as o, Q as r, Y as s, se as t };
