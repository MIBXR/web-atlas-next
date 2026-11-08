import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./react-dom-BasjwewA.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
import { t as i } from "./useStableCallback-BmDujACN.js";
import { o as a, r as o, t as s, u as c } from "./useRenderElement-Bc91YjHo.js";
import { t as l } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as u } from "./useBaseUiId-BwhhMxTY.js";
import { D as d, d as f, t as p } from "./createBaseUIEventDetails-DG51vPHx.js";
import { a as m, n as h, t as g } from "./useOpenChangeComplete-BfJk_bnM.js";
import { f as _ } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as v } from "./useButton-CMNj7XNN.js";
import { t as y } from "./dist-DCi9UB7o.js";
import { a as b, c as x, d as S, f as C, i as w, l as T, o as E, r as D, s as O, t as k, u as A } from "./popupStoreUtils-DmfT7kYW.js";
import { O as j, T as M, U as N, _ as P, a as F, c as I, g as L, h as R, i as z, m as B, o as V, p as H, r as U, v as W, x as G } from "./popupStateMapping-CSyRbb7j.js";
import { t as K } from "./useTimeout-CP4j_cva.js";
import { i as q, n as ee, r as te } from "./useOpenInteractionType-DPoQCspH.js";
import { n as ne, r as re, t as ie } from "./safePolygon-DhLTA827.js";
import { t as ae } from "./useClick-B0N8YgwG.js";
import { i as oe, n as se, r as ce, t as le } from "./usePositioner-D8Ld0Xcc.js";
import { n as ue, r as de, t as fe } from "./store-DVwqec8L.js";
import { o as pe } from "./composite-DtpIpLt3.js";
import { t as me } from "./inertValue-cHK2-C55.js";
import { t as he } from "./ToolbarRootContext-Cn7bfUoC.js";
import { t as ge } from "./useAnchoredPopupScrollLock-CgAWC3OP.js";
import { t as _e } from "./useTriggerFocusGuards-Bb9U1GRH.js";
// node_modules/@base-ui/react/popover/root/PopoverRootContext.mjs
var J = /* @__PURE__ */ e(t(), 1), Y = /*#__PURE__*/ J.createContext(void 0);
function X(e) {
	let t = J.useContext(Y);
	if (t === void 0 && !e) throw Error(c(47));
	return t;
}
// node_modules/@base-ui/react/popover/store/PopoverStore.mjs
var ve = /* @__PURE__ */ e(n(), 1);
function ye() {
	return {
		...fe(),
		disabled: !1,
		modal: !1,
		focusManagerModal: !1,
		instantType: void 0,
		openMethod: null,
		openChangeReason: null,
		titleElementId: void 0,
		descriptionElementId: void 0,
		stickIfOpen: !0,
		nested: !1,
		openOnHover: !1,
		closeDelay: 0,
		hasViewport: !1
	};
}
var be = {
	...de,
	disabled: H((e) => e.disabled),
	instantType: H((e) => e.instantType),
	openMethod: H((e) => e.openMethod),
	openChangeReason: H((e) => e.openChangeReason),
	modal: H((e) => e.modal),
	focusManagerModal: H((e) => e.focusManagerModal),
	stickIfOpen: H((e) => e.stickIfOpen),
	titleElementId: H((e) => e.titleElementId),
	descriptionElementId: H((e) => e.descriptionElementId),
	openOnHover: H((e) => e.openOnHover),
	closeDelay: H((e) => e.closeDelay),
	hasViewport: H((e) => e.hasViewport)
}, xe = class e extends I {
	constructor(e, t, n = !1) {
		let r = {
			...ye(),
			...e
		}, i = new V();
		r.open && e?.mounted === void 0 && (r.mounted = !0), r.floatingRootContext = ue(i, t, n), super(r, {
			popupRef: /*#__PURE__*/ J.createRef(),
			backdropRef: /*#__PURE__*/ J.createRef(),
			internalBackdropRef: /*#__PURE__*/ J.createRef(),
			onOpenChange: void 0,
			onOpenChangeComplete: void 0,
			triggerFocusTargetRef: /*#__PURE__*/ J.createRef(),
			beforeContentFocusGuardRef: /*#__PURE__*/ J.createRef(),
			stickIfOpenTimeout: new K(),
			triggerElements: i
		}, be);
	}
	setOpen = (e, t) => {
		let n = t.reason === d, r = t.reason === "trigger-press" && t.event.detail === 0, i = !e && (t.reason === "escape-key" || t.reason == null), a = D(t), o = this.select("activeTriggerId");
		if (!e && t.reason === "close-press" && t.trigger == null && o != null && (t.trigger = this.context.triggerElements.getById(o) ?? this.select("activeTriggerElement") ?? void 0), this.context.onOpenChange?.(e, t), t.isCanceled) return;
		this.state.floatingRootContext.dispatchOpenChange(e, t);
		let s = () => {
			let n = {
				open: e,
				openChangeReason: t.reason
			};
			b(n, e, t.trigger, a()), this.update(n);
		};
		n ? (this.set("stickIfOpen", !0), this.context.stickIfOpenTimeout.start(500, () => {
			this.set("stickIfOpen", !1);
		}), ve.flushSync(s)) : s(), r || i ? this.set("instantType", r ? "click" : "dismiss") : t.reason === "focus-out" ? this.set("instantType", "focus") : this.set("instantType", void 0);
	};
	static useStore(t, n) {
		let { store: r, internalStore: i } = S(t, (t, r) => new e(n, t, r));
		return J.useEffect(() => i?.disposeEffect(), [i]), r;
	}
	disposeEffect = () => this.context.stickIfOpenTimeout.disposeEffect();
}, Z = r();
function Q({ props: e }) {
	let { children: t, open: n, defaultOpen: r = !1, onOpenChange: i, onOpenChangeComplete: a, modal: o = !1, handle: s, triggerId: c, defaultTriggerId: l = null } = e, u = xe.useStore(s?.store, {
		modal: o,
		open: r,
		openProp: n,
		activeTriggerId: l,
		triggerIdProp: c
	});
	O(u, n, r, l), u.useControlledProp("openProp", n), u.useControlledProp("triggerIdProp", c);
	let d = u.useState("open"), m = u.useState("mounted"), h = u.useState("payload"), g = W() != null;
	u.useContextCallback("onOpenChange", i), u.useContextCallback("onOpenChangeComplete", a), A(u, d), E(u);
	let { forceUnmount: _ } = x(d, u, () => {
		u.update({
			stickIfOpen: !0,
			openChangeReason: null
		});
	});
	u.useSyncedValues({
		modal: o,
		nested: g
	}), J.useEffect(() => {
		d || u.context.stickIfOpenTimeout.clear();
	}, [u, d]);
	let v = J.useCallback(() => {
		u.setOpen(!1, p(f));
	}, [u]);
	J.useImperativeHandle(e.actionsRef, () => ({
		unmount: _,
		close: v
	}), [_, v]);
	let y = d || m, b = J.useMemo(() => ({ store: u }), [u]);
	return /*#__PURE__*/ (0, Z.jsxs)(Y.Provider, {
		value: b,
		children: [y && /*#__PURE__*/ (0, Z.jsx)(Ce, {
			store: u,
			modal: o
		}), typeof t == "function" ? t({ payload: h }) : t]
	});
}
function Se(e) {
	return X(!0) ? /*#__PURE__*/ (0, Z.jsx)(Q, { props: e }) : /*#__PURE__*/ (0, Z.jsx)(L, { children: /*#__PURE__*/ (0, Z.jsx)(Q, { props: e }) });
}
function Ce({ store: e, modal: t }) {
	let n = e.useState("floatingRootContext"), r = B(n, { outsidePressEvent: {
		mouse: t === "trap-focus" ? "sloppy" : "intentional",
		touch: "sloppy"
	} }), i = r.reference ?? a, s = r.trigger ?? a, c = J.useMemo(() => o(k, r.floating), [r.floating]);
	return T(e, {
		activeTriggerProps: i,
		inactiveTriggerProps: s,
		popupProps: c
	}), null;
}
// node_modules/@base-ui/react/popover/trigger/PopoverTrigger.mjs
var we = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, disabled: a = !1, nativeButton: o = !0, handle: l, payload: d, openOnHover: f = !1, delay: p = 300, closeDelay: m = 0, id: h, ...g } = e, _ = X(!0), y = l?.store ?? _?.store;
	if (!y) throw Error(c(74));
	let b = u(h), x = y.useState("isTriggerActive", b), S = y.useState("floatingRootContext"), w = y.useState("isOpenedByTrigger", b), T = y.useState("triggerPopupId", b), E = J.useRef(null), { registerTrigger: D, isMountedByThisTrigger: O } = C(b, E, y, {
		payload: d,
		disabled: a,
		openOnHover: f,
		closeDelay: m
	}), k = y.useState("openChangeReason"), A = y.useState("stickIfOpen"), j = y.useState("openMethod"), P = y.useState("focusManagerModal"), I = ne(S, {
		enabled: !a && S != null && f && (j !== "touch" || k !== "trigger-press"),
		mouseOnly: !0,
		move: !1,
		handleClose: ie(),
		restMs: p,
		delay: { close: m },
		triggerElementRef: E,
		isActiveTrigger: x,
		isClosing: () => y.select("transitionStatus") === "ending"
	}), L = ae(S, {
		enabled: S != null,
		stickIfOpen: A
	}), R = ee(() => y.select("open"), (e) => {
		y.set("openMethod", e);
	}), B = y.useState("triggerProps", O), { getButtonProps: V, buttonRef: H } = v({
		disabled: a,
		native: o
	}), U = { open(e) {
		return e && k === "trigger-press" ? z.open(e) : F.open(e);
	} }, { preFocusGuardRef: W, handlePreFocusGuardFocus: G, handleFocusTargetFocus: K } = _e(y, E), q = s("button", e, {
		state: {
			disabled: a,
			open: w
		},
		ref: [
			H,
			t,
			D,
			E
		],
		props: [
			L.reference,
			I,
			B,
			R,
			{
				[M]: "",
				id: b,
				"aria-haspopup": "dialog",
				"aria-expanded": w,
				"aria-controls": T
			},
			g,
			V
		],
		stateAttributesMapping: U
	});
	return O && !P ? /*#__PURE__*/ (0, Z.jsxs)(J.Fragment, { children: [
		/*#__PURE__*/ (0, Z.jsx)(N, {
			ref: W,
			onFocus: G
		}),
		/*#__PURE__*/ (0, Z.jsx)(J.Fragment, { children: q }, b),
		/*#__PURE__*/ (0, Z.jsx)(N, {
			ref: y.context.triggerFocusTargetRef,
			onFocus: K
		})
	] }) : /*#__PURE__*/ (0, Z.jsx)(J.Fragment, { children: q }, b);
}), $ = /*#__PURE__*/ J.createContext(void 0);
function Te() {
	let e = J.useContext($);
	if (e === void 0) throw Error(c(45));
	return e;
}
// node_modules/@base-ui/react/popover/portal/PopoverPortal.mjs
var Ee = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { keepMounted: n = !1, ...r } = e, { store: i } = X();
	return i.useState("mounted") || n ? /*#__PURE__*/ (0, Z.jsx)($.Provider, {
		value: n,
		children: /*#__PURE__*/ (0, Z.jsx)(G, {
			ref: t,
			...r
		})
	}) : null;
}), De = /*#__PURE__*/ J.createContext(void 0);
function Oe() {
	let e = J.useContext(De);
	if (!e) throw Error(c(46));
	return e;
}
// node_modules/@base-ui/react/popover/positioner/PopoverPositioner.mjs
var ke = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, anchor: a, positionMethod: o = "absolute", side: s = "bottom", align: c = "center", sideOffset: u = 0, alignOffset: d = 0, collisionBoundary: f = "clipping-ancestors", collisionPadding: p = 5, arrowPadding: m = 5, sticky: g = !1, disableAnchorTracking: _ = !1, collisionAvoidance: v = j, ...y } = e, { store: b } = X(), x = Te(), S = P(), C = b.useState("floatingRootContext"), w = b.useState("mounted"), T = b.useState("open"), E = b.useState("openChangeReason"), D = b.useState("activeTriggerElement"), O = b.useState("modal"), k = b.useState("openMethod"), A = b.useState("positionerElement"), M = b.useState("instantType"), N = b.useState("transitionStatus"), F = b.useState("hasViewport"), I = J.useRef(null), L = h(A, !1, !1), z = se({
		anchor: a,
		floatingRootContext: C,
		positionMethod: o,
		mounted: w,
		side: s,
		sideOffset: u,
		align: c,
		alignOffset: d,
		arrowPadding: m,
		collisionBoundary: f,
		collisionPadding: p,
		sticky: g,
		disableAnchorTracking: _,
		keepMounted: x,
		nodeId: S,
		collisionAvoidance: v,
		adaptiveOrigin: F ? ce : void 0
	}), B = C.useState("domReferenceElement");
	l(() => {
		let e = B, t = I.current;
		if (e && (I.current = e), t && e && e !== t) {
			b.set("instantType", void 0);
			let e = new AbortController();
			return L(() => {
				b.set("instantType", "trigger-change");
			}, e.signal), () => {
				e.abort();
			};
		}
	}, [
		B,
		L,
		b
	]), ge(T && O === !0 && E !== "trigger-hover", k === "touch", A, D);
	let V = J.useCallback((e) => {
		b.set("positionerElement", e);
	}, [b]), H = {
		open: T,
		side: z.side,
		align: z.align,
		anchorHidden: z.anchorHidden,
		instant: M
	}, U = le(e, H, {
		styles: z.positionerStyles,
		transitionStatus: N,
		props: y,
		refs: [t, V],
		hidden: !w,
		inert: !T
	});
	return /*#__PURE__*/ (0, Z.jsxs)(De.Provider, {
		value: z,
		children: [w && O === !0 && E !== "trigger-hover" && /*#__PURE__*/ (0, Z.jsx)(te, {
			ref: b.context.internalBackdropRef,
			inert: me(!T),
			cutout: D
		}), /*#__PURE__*/ (0, Z.jsx)(R, {
			id: S,
			children: U
		})]
	});
}), Ae = /*#__PURE__*/ J.createContext(void 0);
function je() {
	let [e, t] = J.useState(0), n = i(() => (t((e) => e + 1), () => {
		t((e) => Math.max(0, e - 1));
	}));
	return {
		context: J.useMemo(() => ({ register: n }), [n]),
		hasClosePart: e > 0
	};
}
function Me(e) {
	let { value: t, children: n } = e;
	return /*#__PURE__*/ (0, Z.jsx)(Ae.Provider, {
		value: t,
		children: n
	});
}
// node_modules/@base-ui/react/popover/popup/PopoverPopup.mjs
var Ne = {
	...U,
	...m
}, Pe = /*#__PURE__*/ J.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, initialFocus: a, finalFocus: o, ...c } = e, { store: l } = X(), u = Oe(), d = he(!0) != null, { context: f, hasClosePart: p } = je(), m = l.useState("open"), h = l.useState("openMethod"), v = l.useState("instantType"), y = l.useState("transitionStatus"), b = l.useState("popupProps"), x = l.useState("titleElementId"), S = l.useState("descriptionElementId"), C = l.useState("modal"), T = l.useState("mounted"), E = l.useState("openChangeReason"), D = l.useState("activeTriggerElement"), O = l.useState("floatingRootContext"), A = O.useState("floatingId"), j = l.useState("disabled"), M = l.useState("openOnHover"), N = l.useState("closeDelay"), P = c.id ?? A;
	g({
		open: m,
		ref: l.context.popupRef,
		onComplete() {
			m && l.context.onOpenChangeComplete?.(!0);
		}
	}), re(O, {
		enabled: M && !j,
		closeDelay: N
	});
	let F = a === void 0 ? w(l.context.popupRef) : a, I = C !== !1 && p;
	l.useSyncedValue("focusManagerModal", I);
	let L = J.useCallback((e) => {
		l.set("popupElement", e);
	}, [l]), R = {
		open: m,
		side: u.side,
		align: u.align,
		instant: v,
		transitionStatus: y
	}, z = s("div", e, {
		state: R,
		ref: [
			t,
			l.context.popupRef,
			L
		],
		props: [
			b,
			{
				id: P,
				role: "dialog",
				...k,
				"aria-labelledby": x,
				"aria-describedby": S,
				onKeyDown(e) {
					d && pe.has(e.key) && e.stopPropagation();
				}
			},
			oe(y),
			c
		],
		stateAttributesMapping: Ne
	});
	return /*#__PURE__*/ (0, Z.jsx)(q, {
		context: O,
		openInteractionType: h,
		modal: I,
		disabled: !T || E === "trigger-hover",
		initialFocus: F,
		returnFocus: o,
		restoreFocus: "popup",
		previousFocusableElement: _(D) ? D : void 0,
		nextFocusableElement: l.context.triggerFocusTargetRef,
		beforeContentFocusGuardRef: l.context.beforeContentFocusGuardRef,
		children: /*#__PURE__*/ (0, Z.jsx)(Me, {
			value: f,
			children: z
		})
	});
});
// upstream/registry/bases/base/ui/popover.tsx
function Fe({ ...e }) {
	return /* @__PURE__ */ (0, Z.jsx)(Se, {
		"data-slot": "popover",
		...e
	});
}
function Ie({ ...e }) {
	return /* @__PURE__ */ (0, Z.jsx)(we, {
		"data-slot": "popover-trigger",
		...e
	});
}
function Le({ className: e, align: t = "center", alignOffset: n = 0, side: r = "bottom", sideOffset: i = 4, ...a }) {
	return /* @__PURE__ */ (0, Z.jsx)(Ee, { children: /* @__PURE__ */ (0, Z.jsx)(ke, {
		align: t,
		alignOffset: n,
		side: r,
		sideOffset: i,
		className: "isolate z-50",
		children: /* @__PURE__ */ (0, Z.jsx)(Pe, {
			"data-slot": "popover-content",
			className: y("cn-popover-content cn-popover-content-logical z-50 w-72 origin-(--transform-origin) outline-hidden", e),
			...a
		})
	}) });
}
export { Le as n, Ie as r, Fe as t };
