import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./useControlled-BkmszdIY.js";
import { t as i } from "./useStableCallback-BmDujACN.js";
import { a, d as o, l as s, o as c, r as l, t as u, u as d } from "./useRenderElement-Bc91YjHo.js";
import { t as f } from "./useIsoLayoutEffect-B0B6th0o.js";
import { n as p } from "./useCompositeListItem-BEyYtHBh.js";
import { t as m } from "./CompositeList-Br8uoKbd.js";
import { t as h } from "./DirectionContext-CBHZ_yWZ.js";
import { n as g, t as _ } from "./useBaseUiId-BwhhMxTY.js";
import { C as v, d as y, g as b, t as x } from "./createBaseUIEventDetails-DG51vPHx.js";
import { a as S, n as C, o as w, t as T } from "./useOpenChangeComplete-BfJk_bnM.js";
import { c as E, f as D, p as O } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as k } from "./useButton-CMNj7XNN.js";
import { a as A, c as j, l as ee, m as M, o as N, p as P, r as te, s as F, t as ne } from "./popupStoreUtils-DmfT7kYW.js";
import { L as I } from "./composite-BYPOq3H3.js";
import { D as re, O as L, _ as ie, a as R, b as z, c as B, d as V, g as ae, h as oe, m as se, o as H, p as U, r as ce, v as le, x as W } from "./popupStateMapping-CSyRbb7j.js";
import { n as ue } from "./useTimeout-CP4j_cva.js";
import { i as G, r as de, t as K } from "./useOpenInteractionType-DPoQCspH.js";
import { n as fe, r as pe, t as me } from "./safePolygon-DhLTA827.js";
import { t as he } from "./useClick-B0N8YgwG.js";
import { i as q, n as ge, r as _e, t as ve } from "./usePositioner-D8Ld0Xcc.js";
import { r as ye, t as be } from "./store-DVwqec8L.js";
import { n as xe, t as Se } from "./useTypeahead-BhzPbvix.js";
import { o as Ce } from "./composite-DtpIpLt3.js";
import { t as we } from "./inertValue-cHK2-C55.js";
import { t as Te } from "./ToolbarRootContext-Cn7bfUoC.js";
import { t as Ee } from "./useAnchoredPopupScrollLock-CgAWC3OP.js";
// node_modules/@base-ui/react/menu/positioner/MenuPositionerContext.mjs
var J = /* @__PURE__ */ e(t(), 1), De = /*#__PURE__*/ J.createContext(void 0);
function Y(e) {
	let t = J.useContext(De);
	if (t === void 0 && !e) throw Error(d(33));
	return t;
}
// node_modules/@base-ui/react/menu/root/MenuRootContext.mjs
var Oe = /*#__PURE__*/ J.createContext(void 0);
function X(e) {
	let t = J.useContext(Oe);
	if (t === void 0 && !e) throw Error(d(36));
	return t;
}
// node_modules/@base-ui/react/context-menu/root/ContextMenuRootContext.mjs
var ke = /*#__PURE__*/ J.createContext(void 0);
function Ae(e = !0) {
	let t = J.useContext(ke);
	if (t === void 0 && !e) throw Error(d(25));
	return t;
}
// node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItemContext.mjs
var je = /*#__PURE__*/ J.createContext(void 0);
function Z() {
	let e = J.useContext(je);
	if (e === void 0) throw Error(d(30));
	return e;
}
// node_modules/@base-ui/react/menu/item/useMenuItemCommonProps.mjs
function Me(e) {
	let { closeOnClick: t, highlighted: n, id: r, nodeId: i, store: a, typingRef: o, itemRef: s, itemMetadata: c } = e, { events: l } = a.useState("floatingTreeRoot"), u = a.useState("open"), d = Ae(!0), f = d !== void 0;
	return J.useMemo(() => ({
		id: r,
		role: "menuitem",
		tabIndex: u && n ? 0 : -1,
		onKeyDown(e) {
			e.key === " " && o?.current && e.preventDefault();
		},
		onMouseMove(e) {
			i && l.emit("itemhover", {
				nodeId: i,
				target: e.currentTarget
			});
		},
		onClick(e) {
			t && l.emit("close", {
				domEvent: e,
				reason: b
			});
		},
		onMouseUp(e) {
			if (d) {
				let t = d.initialCursorPointRef.current;
				if (d.initialCursorPointRef.current = null, f && t && Math.abs(e.clientX - t.x) <= 1 && Math.abs(e.clientY - t.y) <= 1 || f && !I && e.button === 2) return;
			}
			!s.current || !a.context.allowMouseUpTriggerRef.current || f && e.button !== 2 || c && c.type !== "regular-item" || s.current.click();
		}
	}), [
		t,
		n,
		r,
		l,
		i,
		u,
		a,
		o,
		s,
		d,
		f,
		c
	]);
}
// node_modules/@base-ui/react/menu/item/useMenuItem.mjs
var Q = { type: "regular-item" };
function Ne(e) {
	let { closeOnClick: t, disabled: n = !1, highlighted: r, id: i, store: a, typingRef: o = a.context.typingRef, nativeButton: c, itemMetadata: u, nodeId: d } = e, f = a.useState("disabled"), p = n || f, m = J.useRef(null), { getButtonProps: h, buttonRef: g } = k({
		disabled: p,
		focusableWhenDisabled: !0,
		native: c,
		composite: !0
	}), _ = Me({
		closeOnClick: t,
		highlighted: r,
		id: i,
		nodeId: d,
		store: a,
		typingRef: o,
		itemRef: m,
		itemMetadata: u
	}), v = J.useCallback((e) => l(_, { onMouseEnter() {
		u.type === "submenu-trigger" && u.setActive();
	} }, e, h), [
		_,
		h,
		u
	]), y = s(m, g);
	return J.useMemo(() => ({
		getItemProps: v,
		itemRef: y
	}), [v, y]);
}
// node_modules/@base-ui/react/menu/checkbox-item/MenuCheckboxItemDataAttributes.mjs
var Pe = /*#__PURE__*/ function(e) {
	return e.checked = "data-checked", e.unchecked = "data-unchecked", e.disabled = "data-disabled", e.highlighted = "data-highlighted", e;
}({}), Fe = {
	checked(e) {
		return e ? { [Pe.checked]: "" } : { [Pe.unchecked]: "" };
	},
	...S
}, $ = n(), Ie = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: i, id: a, label: o, nativeButton: s = !1, disabled: c = !1, closeOnClick: l = !1, checked: d, defaultChecked: f, onCheckedChange: m, style: h, ...g } = e, v = p({ label: o }), y = Y(!0), S = _(a), { store: C } = X(), w = C.useState("isActive", v.index), T = C.useState("itemProps"), [E, D] = r({
		controlled: d,
		default: f ?? !1,
		name: "MenuCheckboxItem",
		state: "checked"
	}), { getItemProps: O, itemRef: k } = Ne({
		closeOnClick: l,
		disabled: c,
		highlighted: w,
		id: S,
		store: C,
		nativeButton: s,
		nodeId: y?.context.nodeId,
		itemMetadata: Q
	}), A = J.useMemo(() => ({
		disabled: c,
		highlighted: w,
		checked: E
	}), [
		c,
		w,
		E
	]);
	function j(e) {
		let t = x(b, e.nativeEvent, void 0, { preventUnmountOnClose() {} });
		m?.(!E, t), t.isCanceled || D((e) => !e);
	}
	let ee = u("div", e, {
		state: A,
		stateAttributesMapping: Fe,
		props: [
			T,
			{
				role: "menuitemcheckbox",
				"aria-checked": E,
				onClick: j
			},
			g,
			O
		],
		ref: [
			k,
			t,
			v.ref
		]
	});
	return /*#__PURE__*/ (0, $.jsx)(je.Provider, {
		value: A,
		children: ee
	});
}), Le = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, keepMounted: a = !1, ...o } = e, s = Z(), c = J.useRef(null), { transitionStatus: l, setMounted: d } = w(s.checked);
	T({
		open: s.checked,
		ref: c,
		onComplete() {
			s.checked || d(!1);
		}
	});
	let f = {
		checked: s.checked,
		disabled: s.disabled,
		highlighted: s.highlighted,
		transitionStatus: l
	};
	return u("span", e, {
		state: f,
		ref: [t, c],
		stateAttributesMapping: Fe,
		props: {
			"aria-hidden": !0,
			...o
		},
		enabled: a || s.checked
	});
}), Re = /*#__PURE__*/ J.createContext(void 0);
function ze() {
	let e = J.useContext(Re);
	if (e === void 0) throw Error(d(31));
	return e;
}
// node_modules/@base-ui/react/menu/group/MenuGroup.mjs
var Be = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...a } = e, [o, s] = J.useState(void 0), c = u("div", e, {
		ref: t,
		props: {
			role: "group",
			"aria-labelledby": o,
			...a
		}
	});
	return /*#__PURE__*/ (0, $.jsx)(Re.Provider, {
		value: s,
		children: c
	});
}), Ve = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, id: a, ...o } = e, s = _(a), c = ze();
	return f(() => (c(s), () => {
		c(void 0);
	}), [c, s]), u("div", e, {
		ref: t,
		props: {
			id: s,
			role: "presentation",
			...o
		}
	});
}), He = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: r, id: i, label: a, nativeButton: o = !1, disabled: s = !1, closeOnClick: c = !0, style: l, ...d } = e, f = p({ label: a }), m = Y(!0), h = _(i), { store: g } = X(), v = g.useState("isActive", f.index), y = g.useState("itemProps"), { getItemProps: b, itemRef: x } = Ne({
		closeOnClick: c,
		disabled: s,
		highlighted: v,
		id: h,
		store: g,
		nativeButton: o,
		nodeId: m?.context.nodeId,
		itemMetadata: Q
	});
	return u("div", e, {
		state: {
			disabled: s,
			highlighted: v
		},
		props: [
			y,
			d,
			b
		],
		ref: [
			x,
			t,
			f.ref
		]
	});
}), Ue = {
	...ce,
	...S
}, We = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, finalFocus: a, ...o } = e, { store: s } = X(), { side: c, align: l } = Y(), d = Te(!0) != null, f = s.useState("open"), p = s.useState("transitionStatus"), m = s.useState("popupProps"), h = s.useState("mounted"), g = s.useState("instantType"), _ = s.useState("activeTriggerElement"), v = s.useState("parent"), y = s.useState("lastOpenChangeReason"), b = s.useState("rootId"), S = s.useState("floatingRootContext"), C = s.useState("floatingTreeRoot"), w = s.useState("closeDelay"), E = s.useState("activeTriggerElement"), D = s.useState("hoverEnabled"), O = s.useState("disabled"), k = s.useState("openMethod"), A = v.type === "context-menu";
	T({
		open: f,
		ref: s.context.popupRef,
		onComplete() {
			f && s.context.onOpenChangeComplete?.(!0);
		}
	}), J.useEffect(() => {
		function e(e) {
			s.setOpen(!1, x(e.reason, e.domEvent));
		}
		return C.events.on("close", e), () => {
			C.events.off("close", e);
		};
	}, [C.events, s]), pe(S, {
		enabled: D && !O && !A && v.type !== "menubar",
		closeDelay: w
	});
	let j = J.useCallback((e) => {
		s.set("popupElement", e);
	}, [s]), ee = {
		transitionStatus: p,
		side: c,
		align: l,
		open: f,
		nested: v.type === "menu",
		instant: g
	}, M = u("div", e, {
		state: ee,
		ref: [
			t,
			s.context.popupRef,
			j
		],
		stateAttributesMapping: Ue,
		props: [
			m,
			{ onKeyDown(e) {
				d && Ce.has(e.key) && e.stopPropagation();
			} },
			q(p),
			o,
			{ "data-rootownerid": b }
		]
	}), N = v.type === void 0 || A;
	return (_ || v.type === "menubar" && y !== "outside-press") && (N = !0), /*#__PURE__*/ (0, $.jsx)(G, {
		context: S,
		openInteractionType: k,
		modal: A,
		disabled: !h,
		returnFocus: a === void 0 ? N : a,
		initialFocus: v.type !== "menu",
		restoreFocus: !0,
		externalTree: v.type === "menubar" ? void 0 : C,
		previousFocusableElement: E,
		nextFocusableElement: v.type === void 0 ? s.context.triggerFocusTargetRef : void 0,
		beforeContentFocusGuardRef: v.type === void 0 ? s.context.beforeContentFocusGuardRef : void 0,
		children: M
	});
}), Ge = /*#__PURE__*/ J.createContext(void 0);
function Ke() {
	let e = J.useContext(Ge);
	if (e === void 0) throw Error(d(32));
	return e;
}
// node_modules/@base-ui/react/menu/portal/MenuPortal.mjs
var qe = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { keepMounted: n = !1, ...r } = e, { store: i } = X();
	return i.useState("mounted") || n ? /*#__PURE__*/ (0, $.jsx)(Ge.Provider, {
		value: n,
		children: /*#__PURE__*/ (0, $.jsx)(W, {
			ref: t,
			...r
		})
	}) : null;
}), Je = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { anchor: n, positionMethod: r = "absolute", className: i, render: a, side: o, align: s, sideOffset: c = 0, alignOffset: l = 0, collisionBoundary: u = "clipping-ancestors", collisionPadding: d = 5, arrowPadding: p = 5, sticky: h = !1, disableAnchorTracking: g = !1, collisionAvoidance: _ = re, style: y, ...b } = e, { store: S } = X(), w = Ke(), T = Ae(!0), E = S.useState("parent"), D = S.useState("floatingRootContext"), O = S.useState("floatingTreeRoot"), k = S.useState("mounted"), A = S.useState("open"), j = S.useState("modal"), ee = S.useState("openMethod"), M = S.useState("activeTriggerElement"), N = S.useState("transitionStatus"), P = S.useState("positionerElement"), te = S.useState("instantType"), F = S.useState("hasViewport"), ne = S.useState("lastOpenChangeReason"), I = S.useState("floatingNodeId"), ie = S.useState("floatingParentNodeId"), R = D.useState("domReferenceElement"), z = J.useRef(null), B = C(P, !1, !1), V = n, ae = c, se = l, H = s, U = _;
	E.type === "context-menu" && (V = n ?? E.context?.anchor, H ??= "start", !o && H !== "center" && (se = e.alignOffset ?? 2, ae = e.sideOffset ?? -5));
	let ce = o, le = H;
	E.type === "menu" ? (ce ??= "inline-end", le ??= "start", U = e.collisionAvoidance ?? L) : E.type === "menubar" && (ce ??= E.context.orientation === "vertical" ? "inline-end" : "bottom", le ??= "start");
	let W = E.type === "context-menu", G = ge({
		anchor: V,
		floatingRootContext: D,
		positionMethod: T ? "fixed" : r,
		mounted: k,
		side: ce,
		sideOffset: ae,
		align: le,
		alignOffset: se,
		arrowPadding: W ? 0 : p,
		collisionBoundary: u,
		collisionPadding: d,
		sticky: h,
		nodeId: I,
		keepMounted: w,
		disableAnchorTracking: g,
		collisionAvoidance: U,
		shiftCrossAxis: W && !("side" in U && U.side === "flip"),
		externalTree: O,
		adaptiveOrigin: F ? _e : void 0
	});
	J.useEffect(() => {
		function e(e) {
			e.open && (e.parentNodeId === I && S.set("hoverEnabled", !1), e.nodeId !== I && e.parentNodeId === S.select("floatingParentNodeId") && S.setOpen(!1, x(v)));
		}
		return O.events.on("menuopenchange", e), () => {
			O.events.off("menuopenchange", e);
		};
	}, [
		S,
		O.events,
		I
	]), J.useEffect(() => {
		if (S.select("floatingParentNodeId") == null) return;
		function e(e) {
			if (e.open || e.nodeId !== S.select("floatingParentNodeId")) return;
			let t = e.reason ?? "sibling-open";
			S.setOpen(!1, x(t));
		}
		return O.events.on("menuopenchange", e), () => {
			O.events.off("menuopenchange", e);
		};
	}, [O.events, S]);
	let K = ue();
	J.useEffect(() => {
		A || K.clear();
	}, [A, K]), J.useEffect(() => {
		function e(e) {
			if (A && e.nodeId === S.select("floatingParentNodeId")) {
				if (e.target && M && M !== e.target) {
					let e = S.select("closeDelay");
					e > 0 ? K.isStarted() || K.start(e, () => {
						S.setOpen(!1, x(v));
					}) : S.setOpen(!1, x(v));
				} else K.clear();
			}
		}
		return O.events.on("itemhover", e), () => {
			O.events.off("itemhover", e);
		};
	}, [
		O.events,
		A,
		M,
		S,
		K
	]), J.useEffect(() => {
		let e = {
			open: A,
			nodeId: I,
			parentNodeId: ie,
			reason: S.select("lastOpenChangeReason")
		};
		O.events.emit("menuopenchange", e);
	}, [
		O.events,
		A,
		S,
		I,
		ie
	]), f(() => {
		let e = R, t = z.current;
		if (e && (z.current = e), t && e && e !== t) {
			S.set("instantType", void 0);
			let e = new AbortController();
			return B(() => {
				S.set("instantType", "trigger-change");
			}, e.signal), () => {
				e.abort();
			};
		}
	}, [
		R,
		B,
		S
	]);
	let fe = {
		open: A,
		side: G.side,
		align: G.align,
		anchorHidden: G.anchorHidden,
		nested: E.type === "menu",
		instant: te
	}, pe = E.type === "menubar" && E.context.modal;
	Ee(A && (pe || j && ne !== "trigger-hover"), ee === "touch", P, M);
	let me = ve(e, fe, {
		styles: G.positionerStyles,
		transitionStatus: N,
		props: b,
		refs: [t, S.useStateSetter("positionerElement")],
		hidden: !k,
		inert: !A
	}), he = k && E.type !== "menu" && (E.type !== "menubar" && j && ne !== "trigger-hover" || E.type === "menubar" && E.context.modal), q = null;
	return E.type === "menubar" ? q = E.context.contentElement : E.type === void 0 && (q = M), /*#__PURE__*/ (0, $.jsxs)(De.Provider, {
		value: G,
		children: [he && /*#__PURE__*/ (0, $.jsx)(de, {
			ref: E.type === "context-menu" || E.type === "nested-context-menu" ? E.context.internalBackdropRef : null,
			inert: we(!A),
			cutout: q
		}), /*#__PURE__*/ (0, $.jsx)(oe, {
			id: I,
			children: /*#__PURE__*/ (0, $.jsx)(m, {
				elementsRef: S.context.itemDomElements,
				labelsRef: S.context.itemLabels,
				children: me
			})
		})]
	});
}), Ye = /*#__PURE__*/ J.createContext(void 0);
function Xe() {
	let e = J.useContext(Ye);
	if (e === void 0) throw Error(d(34));
	return e;
}
// node_modules/@base-ui/react/menu/radio-group/MenuRadioGroup.mjs
var Ze = /*#__PURE__*/ J.memo(/*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: a, value: o, defaultValue: s, onValueChange: c, disabled: l = !1, style: d, "aria-labelledby": f, ...p } = e, [m, h] = J.useState(void 0), [g, _] = r({
		controlled: o,
		default: s,
		name: "MenuRadioGroup"
	}), v = i((e, t) => {
		c?.(e, t), t.isCanceled || _(e);
	}), y = u("div", e, {
		state: { disabled: l },
		ref: t,
		props: {
			role: "group",
			"aria-labelledby": f ?? m,
			"aria-disabled": l || void 0,
			...p
		}
	}), b = J.useMemo(() => ({
		value: g,
		setValue: v,
		disabled: l
	}), [
		g,
		v,
		l
	]);
	return /*#__PURE__*/ (0, $.jsx)(Re.Provider, {
		value: h,
		children: /*#__PURE__*/ (0, $.jsx)(Ye.Provider, {
			value: b,
			children: y
		})
	});
})), Qe = /*#__PURE__*/ J.createContext(void 0);
function $e() {
	let e = J.useContext(Qe);
	if (e === void 0) throw Error(d(35));
	return e;
}
// node_modules/@base-ui/react/menu/radio-item/MenuRadioItem.mjs
var et = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: r, id: i, label: a, nativeButton: o = !1, disabled: s = !1, closeOnClick: c = !1, value: l, style: d, ...f } = e, m = p({ label: a }), h = Y(!0), g = _(i), { store: v } = X(), y = v.useState("isActive", m.index), S = v.useState("itemProps"), { value: C, setValue: w, disabled: T } = Xe(), E = T || s, D = C === l, { getItemProps: O, itemRef: k } = Ne({
		closeOnClick: c,
		disabled: E,
		highlighted: y,
		id: g,
		store: v,
		nativeButton: o,
		nodeId: h?.context.nodeId,
		itemMetadata: Q
	}), A = J.useMemo(() => ({
		disabled: E,
		highlighted: y,
		checked: D
	}), [
		E,
		y,
		D
	]);
	function j(e) {
		let t = x(b, e.nativeEvent, void 0, { preventUnmountOnClose() {} });
		w(l, t);
	}
	let ee = u("div", e, {
		state: A,
		stateAttributesMapping: Fe,
		props: [
			S,
			{
				role: "menuitemradio",
				"aria-checked": D,
				onClick: j
			},
			f,
			O
		],
		ref: [
			k,
			t,
			m.ref
		]
	});
	return /*#__PURE__*/ (0, $.jsx)(Qe.Provider, {
		value: A,
		children: ee
	});
}), tt = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, keepMounted: a = !1, ...o } = e, s = $e(), c = J.useRef(null), { transitionStatus: l, setMounted: d } = w(s.checked);
	T({
		open: s.checked,
		ref: c,
		onComplete() {
			s.checked || d(!1);
		}
	});
	let f = {
		checked: s.checked,
		disabled: s.disabled,
		highlighted: s.highlighted,
		transitionStatus: l
	};
	return u("span", e, {
		state: f,
		stateAttributesMapping: Fe,
		ref: [t, c],
		props: {
			"aria-hidden": !0,
			...o
		},
		enabled: a || s.checked
	});
}), nt = /*#__PURE__*/ J.createContext(null);
function rt(e) {
	let t = J.useContext(nt);
	if (t === null && !e) throw Error(d(5));
	return t;
}
// node_modules/@base-ui/react/menu/store/MenuStore.mjs
var it = {
	...ye,
	disabled: U((e) => e.parent.type === "menubar" && e.parent.context.disabled || e.disabled),
	modal: U((e) => (e.parent.type === void 0 || e.parent.type === "context-menu") && (e.modal ?? !0)),
	openMethod: U((e) => e.openMethod),
	allowMouseEnter: U((e) => e.allowMouseEnter),
	highlightItemOnHover: U((e) => e.highlightItemOnHover),
	stickIfOpen: U((e) => e.stickIfOpen),
	parent: U((e) => e.parent),
	rootId: U((e) => e.parent.type === "menu" ? e.parent.store.select("rootId") : e.parent.type === void 0 ? e.rootId : e.parent.context.rootId),
	activeIndex: U((e) => e.activeIndex),
	isActive: U((e, t) => e.activeIndex === t),
	hoverEnabled: U((e) => e.hoverEnabled),
	instantType: U((e) => e.instantType),
	lastOpenChangeReason: U((e) => e.openChangeReason),
	floatingTreeRoot: U((e) => e.parent.type === "menu" ? e.parent.store.select("floatingTreeRoot") : e.floatingTreeRoot),
	floatingNodeId: U((e) => e.floatingNodeId),
	floatingParentNodeId: U((e) => e.floatingParentNodeId),
	itemProps: U((e) => e.itemProps),
	closeDelay: U((e) => e.closeDelay),
	hasViewport: U((e) => e.hasViewport),
	keyboardEventRelay: U((e) => {
		if (e.keyboardEventRelay) return e.keyboardEventRelay;
		if (e.parent.type === "menu") return e.parent.store.select("keyboardEventRelay");
	})
}, at = class e extends B {
	constructor(e) {
		super({
			...ot(),
			...e
		}, {
			positionerRef: /*#__PURE__*/ J.createRef(),
			popupRef: /*#__PURE__*/ J.createRef(),
			typingRef: { current: !1 },
			itemDomElements: { current: [] },
			itemLabels: { current: [] },
			allowMouseUpTriggerRef: { current: !1 },
			triggerFocusTargetRef: /*#__PURE__*/ J.createRef(),
			beforeContentFocusGuardRef: /*#__PURE__*/ J.createRef(),
			onOpenChangeComplete: void 0,
			triggerElements: new H()
		}, it), this.unsubscribeParentListener = this.observe("parent", (e) => {
			if (this.unsubscribeParentListener?.(), e.type === "menu") {
				let t = e.store.select("rootId"), n = e.store.select("floatingTreeRoot"), r = e.store.select("keyboardEventRelay");
				this.unsubscribeParentListener = e.store.subscribe(() => {
					let i = e.store.select("rootId"), a = e.store.select("floatingTreeRoot"), o = e.store.select("keyboardEventRelay");
					(t !== i || n !== a || r !== o) && (t = i, n = a, r = o, this.notifyAll());
				}), this.context.allowMouseUpTriggerRef = e.store.context.allowMouseUpTriggerRef;
			} else e.type !== void 0 && (this.context.allowMouseUpTriggerRef = e.context.allowMouseUpTriggerRef), this.unsubscribeParentListener = null;
		});
	}
	setOpen(e, t) {
		this.state.floatingRootContext.context.events.emit("setOpen", {
			open: e,
			eventDetails: t
		});
	}
	static useStore(t, n) {
		let r = o(() => new e(n)).current;
		return t ?? r;
	}
	unsubscribeParentListener = null;
};
function ot() {
	return {
		...be(),
		disabled: !1,
		modal: !0,
		openMethod: null,
		allowMouseEnter: !1,
		highlightItemOnHover: !0,
		stickIfOpen: !0,
		parent: { type: void 0 },
		rootId: void 0,
		activeIndex: null,
		hoverEnabled: !0,
		instantType: void 0,
		openChangeReason: null,
		floatingTreeRoot: new z(),
		floatingNodeId: void 0,
		floatingParentNodeId: null,
		itemProps: c,
		keyboardEventRelay: void 0,
		closeDelay: 0,
		hasViewport: !1
	};
}
// node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRootContext.mjs
var st = /*#__PURE__*/ J.createContext(void 0);
function ct() {
	return J.useContext(st);
}
// node_modules/@base-ui/react/menu/root/MenuRoot.mjs
var lt = V(function(e) {
	let { children: t, open: n, onOpenChange: r, onOpenChangeComplete: o, defaultOpen: s = !1, disabled: u = !1, modal: d, loopFocus: p = !0, orientation: m = "vertical", actionsRef: _, closeParentOnEsc: v = !1, handle: b, triggerId: S, defaultTriggerId: C = null, highlightItemOnHover: w = !0 } = e, T = Ae(!0), E = X(!0), D = rt(!0), O = ct(), k = J.useMemo(() => O && E ? {
		type: "menu",
		store: E.store
	} : D ? {
		type: "menubar",
		context: D
	} : T && !E ? {
		type: "context-menu",
		context: T
	} : { type: void 0 }, [
		T,
		E,
		D,
		O
	]), P = at.useStore(b?.store, {
		open: s,
		openProp: n,
		activeTriggerId: C,
		triggerIdProp: S,
		parent: k
	});
	F(P, n, s, C), P.useControlledProp("openProp", n), P.useControlledProp("triggerIdProp", S), P.useContextCallback("onOpenChangeComplete", o);
	let I = g(), re = g(), L = P.useState("floatingTreeRoot"), R = ie(L), z = le(), B = P.useState("open"), V = P.useState("activeTriggerElement"), oe = P.useState("positionerElement"), H = P.useState("hoverEnabled"), U = P.useState("disabled"), ce = P.useState("lastOpenChangeReason"), W = P.useState("parent"), G = P.useState("activeIndex"), de = P.useState("payload"), fe = P.useState("floatingParentNodeId"), pe = J.useRef(null), me = J.useRef(W.type !== "context-menu"), he = ue(), q = J.useRef(!0), ge = ue(), _e = fe != null, { openMethod: ve, triggerProps: ye } = K(B);
	P.useSyncedValues({
		disabled: u,
		highlightItemOnHover: w,
		modal: W.type === void 0 ? d : void 0,
		openMethod: ve,
		rootId: I
	}), N(P);
	let { forceUnmount: be } = j(B, P, () => {
		P.update({
			allowMouseEnter: !1,
			stickIfOpen: !0
		});
	});
	f(() => {
		T && !E ? P.update({
			parent: {
				type: "context-menu",
				context: T
			},
			floatingNodeId: R,
			floatingParentNodeId: z
		}) : E && P.update({
			floatingNodeId: R,
			floatingParentNodeId: z
		});
	}, [
		T,
		E,
		R,
		z,
		P
	]), J.useEffect(() => {
		B || (pe.current = null), W.type === "context-menu" && (B ? he.start(500, () => {
			me.current = !0;
		}) : (he.clear(), me.current = !1));
	}, [
		he,
		B,
		W.type
	]), f(() => {
		!B && !H && P.set("hoverEnabled", !0);
	}, [
		B,
		H,
		P
	]);
	let Ce = i((e, t) => {
		let n = t.reason;
		if (B === e && t.trigger === V && ce === n) return;
		let i = te(t);
		if (!e && t.trigger == null && (t.trigger = V ?? void 0), r?.(e, t), t.isCanceled) return;
		P.state.floatingRootContext.dispatchOpenChange(e, t);
		let a = t.event;
		if (e === !1 && a?.type === "click" && a.pointerType === "touch" && !q.current) return;
		e && n === "trigger-focus" ? (q.current = !1, ge.start(300, () => {
			q.current = !0;
		})) : (q.current = !0, ge.clear());
		let o = (n === "trigger-press" || n === "item-press") && a.detail === 0 && a?.isTrusted, s = !e && (n === "escape-key" || n == null), c = {
			open: e,
			openChangeReason: n
		};
		pe.current = t.event ?? null, A(c, e, t.trigger, i()), P.update(c), W.type === "menubar" && (n === "trigger-focus" || n === "focus-out" || n === "trigger-hover" || n === "list-navigation" || n === "sibling-open") ? P.set("instantType", "group") : o || s ? P.set("instantType", o ? "click" : "dismiss") : P.set("instantType", void 0);
	}), we = M({
		popupStore: P,
		floatingId: re,
		nested: z != null,
		onOpenChange: Ce
	}), Te = we.context.events;
	J.useEffect(() => {
		let e = ({ open: e, eventDetails: t }) => Ce(e, t);
		return Te.on("setOpen", e), () => {
			Te?.off("setOpen", e);
		};
	}, [Te, Ce]);
	let Ee = J.useCallback(() => {
		P.setOpen(!1, x(y));
	}, [P]);
	J.useImperativeHandle(_, () => ({
		unmount: be,
		close: Ee
	}), [be, Ee]);
	let De;
	W.type === "context-menu" && (De = W.context), J.useImperativeHandle(De?.positionerRef, () => oe, [oe]), J.useImperativeHandle(De?.actionsRef, () => ({ setOpen: Ce }), [Ce]);
	let Y = se(we, {
		enabled: !U,
		bubbles: { escapeKey: v && W.type === "menu" },
		outsidePress() {
			return W.type !== "context-menu" || pe.current?.type === "contextmenu" || me.current;
		},
		externalTree: _e ? L : void 0
	}), ke = h(), je = J.useCallback((e) => {
		P.select("activeIndex") !== e && P.set("activeIndex", e);
	}, [P]), Z = xe(we, {
		enabled: !U,
		listRef: P.context.itemDomElements,
		activeIndex: G,
		nested: W.type !== void 0,
		loopFocus: p,
		orientation: m,
		parentOrientation: W.type === "menubar" ? W.context.orientation : void 0,
		rtl: ke === "rtl",
		disabledIndices: a,
		onNavigate: je,
		openOnArrowKeyDown: W.type !== "context-menu",
		externalTree: _e ? L : void 0,
		focusItemOnHover: w
	}), Me = J.useCallback((e) => {
		P.context.typingRef.current = e;
	}, [P]), Q = Se(we, {
		enabled: !U,
		listRef: P.context.itemLabels,
		elementsRef: P.context.itemDomElements,
		activeIndex: G,
		resetMs: 500,
		onMatch: (e) => {
			B && e !== G && P.set("activeIndex", e);
		},
		onTyping: Me
	}), Ne = J.useMemo(() => {
		let e = l(Q.reference, Z.reference, Y.reference, { onMouseMove() {
			P.set("allowMouseEnter", !0);
		} }, ye);
		return e["aria-haspopup"] = "menu", e["aria-expanded"] = B, e;
	}, [
		P,
		Q.reference,
		Z.reference,
		Y.reference,
		ye,
		B
	]), Pe = J.useMemo(() => {
		let e = l(Z.trigger, Y.trigger, ye);
		return e["aria-haspopup"] = "menu", e["aria-expanded"] = !1, e;
	}, [
		Z.trigger,
		Y.trigger,
		ye
	]), Fe = J.useMemo(() => l(ne, {
		id: re,
		role: "menu",
		"aria-labelledby": V?.id,
		onMouseMove() {
			P.set("allowMouseEnter", !0), W.type === "menu" && P.set("hoverEnabled", !1);
		},
		onClick() {
			P.select("hoverEnabled") && P.set("hoverEnabled", !1);
		},
		onKeyDown(e) {
			let t = P.select("keyboardEventRelay");
			t && !e.isPropagationStopped() && t(e);
		}
	}, Q.floating, Z.floating, Y.floating), [
		V,
		re,
		W.type,
		P,
		Q.floating,
		Z.floating,
		Y.floating
	]), Ie = Z.item ?? c;
	ee(P, {
		floatingRootContext: we,
		activeTriggerProps: Ne,
		inactiveTriggerProps: Pe,
		popupProps: Fe,
		itemProps: Ie
	});
	let Le = J.useMemo(() => ({
		store: P,
		parent: k
	}), [P, k]), Re = /*#__PURE__*/ (0, $.jsx)(Oe.Provider, {
		value: Le,
		children: typeof t == "function" ? t({ payload: de }) : t
	});
	return W.type === void 0 || W.type === "context-menu" ? /*#__PURE__*/ (0, $.jsx)(ae, {
		externalTree: L,
		children: Re
	}) : Re;
});
// node_modules/@base-ui/react/menu/submenu-root/MenuSubmenuRoot.mjs
function ut(e) {
	let t = X().store, n = J.useMemo(() => ({ parentMenu: t }), [t]);
	return /*#__PURE__*/ (0, $.jsx)(st.Provider, {
		value: n,
		children: /*#__PURE__*/ (0, $.jsx)(lt, { ...e })
	});
}
// node_modules/@base-ui/react/menu/utils/findRootOwnerId.mjs
function dt(e) {
	if (D(e) && e.hasAttribute("data-rootownerid")) return e.getAttribute("data-rootownerid") ?? void 0;
	if (!O(e)) return dt(E(e));
}
// node_modules/@base-ui/react/menu/submenu-trigger/MenuSubmenuTrigger.mjs
var ft = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, label: a, id: o, nativeButton: s = !1, openOnHover: l = !0, delay: f = 100, closeDelay: m = 0, disabled: h = !1, ...g } = e, v = p({ label: a }), y = Y(), { store: b } = X(), x = _(o), S = b.useState("open"), C = b.useState("floatingRootContext"), w = b.useState("floatingTreeRoot"), T = b.useState("triggerPopupId", x), E = P(x, b), D = J.useCallback((e) => {
		let t = E(e);
		return e !== null && b.select("open") && b.select("activeTriggerId") == null && b.update({
			activeTriggerId: x,
			activeTriggerElement: e,
			closeDelay: m
		}), t;
	}, [
		E,
		m,
		b,
		x
	]), O = J.useRef(null), k = J.useCallback((e) => {
		O.current = e, b.set("activeTriggerElement", e);
	}, [b]), A = ct();
	if (!A?.parentMenu) throw Error(d(37));
	b.useSyncedValue("closeDelay", m);
	let j = A.parentMenu, ee = b.useState("disabled"), M = j.useState("disabled"), N = h || ee || M, te = j.useState("itemProps"), F = j.useState("isActive", v.index), ne = J.useMemo(() => ({
		type: "submenu-trigger",
		setActive() {
			j.select("highlightItemOnHover") && j.set("activeIndex", v.index);
		}
	}), [j, v.index]), { getItemProps: I, itemRef: re } = Ne({
		closeOnClick: !1,
		disabled: N,
		highlighted: F,
		id: x,
		store: b,
		typingRef: j.context.typingRef,
		nativeButton: s,
		itemMetadata: ne,
		nodeId: y?.context.nodeId
	}), L = b.useState("hoverEnabled"), ie = fe(C, {
		enabled: L && l && !N,
		handleClose: me({ blockPointerEvents: !0 }),
		mouseOnly: !0,
		move: !0,
		restMs: f,
		delay: {
			open: f,
			close: m
		},
		shouldOpen: f > 0 ? () => j.select("allowMouseEnter") : void 0,
		triggerElementRef: O,
		externalTree: w,
		isClosing: () => b.select("transitionStatus") === "ending"
	}), z = he(C, {
		enabled: !N,
		event: "mousedown",
		toggle: !l,
		ignoreMouse: l,
		stickIfOpen: !1
	}).reference ?? c, B = b.useState("triggerProps", !0);
	return delete B.id, u("div", e, {
		state: {
			disabled: N,
			highlighted: F,
			open: S
		},
		stateAttributesMapping: R,
		props: [
			z,
			ie,
			B,
			te,
			{
				"aria-controls": T,
				tabIndex: S || F ? 0 : -1,
				onBlur() {
					F && j.set("activeIndex", null);
				}
			},
			g,
			I
		],
		ref: [
			t,
			v.ref,
			re,
			D,
			k
		]
	});
});
export { Ie as _, nt as a, Oe as b, et as c, qe as d, We as f, Le as g, Be as h, lt as i, Ze as l, Ve as m, dt as n, rt as o, He as p, ut as r, tt as s, ft as t, Je as u, ke as v, X as x, Ae as y };
