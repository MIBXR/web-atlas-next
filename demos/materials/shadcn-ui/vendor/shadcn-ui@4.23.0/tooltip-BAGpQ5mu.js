import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { r as i, t as a, u as o } from "./useRenderElement-Bc91YjHo.js";
import { t as s } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as c } from "./useBaseUiId-BwhhMxTY.js";
import { D as l, O as u, d, s as f, t as p, x as m } from "./createBaseUIEventDetails-DG51vPHx.js";
import { a as h, t as g } from "./useOpenChangeComplete-BfJk_bnM.js";
import { d as _, l as v } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as y } from "./addEventListener-EiVbnOnq.js";
import { t as b } from "./useValueAsRef-0u0FW33N.js";
import { t as x } from "./dist-DCi9UB7o.js";
import { c as S, d as C, f as w, l as T, n as E, o as D, s as O, t as k } from "./popupStoreUtils-DmfT7kYW.js";
import { k as A } from "./composite-BYPOq3H3.js";
import { O as j, a as M, c as N, d as P, f as ee, m as F, n as I, o as L, p as R, r as z } from "./popupStateMapping-CSyRbb7j.js";
import { n as te, t as B } from "./useTimeout-CP4j_cva.js";
import { n as V, r as ne } from "./shadowDom-D66trjQm.js";
import { n as re, o as ie, r as H, s as U, t as ae } from "./safePolygon-DhLTA827.js";
import { i as W, n as G, r as K, t as q } from "./usePositioner-D8Ld0Xcc.js";
import { n as J, r as Y, t as oe } from "./store-DVwqec8L.js";
import { t as se } from "./useFocus-CcLAK8ce.js";
import { t as ce } from "./FloatingPortalLite-zFJiU2xl.js";
// node_modules/@base-ui/react/floating-ui-react/components/FloatingDelayGroup.mjs
var X = /* @__PURE__ */ e(t(), 1), Z = n(), le = /*#__PURE__*/ X.createContext({
	hasProvider: !1,
	timeoutMs: 0,
	delayRef: { current: 0 },
	initialDelayRef: { current: 0 },
	timeout: new B(),
	currentIdRef: { current: null },
	currentContextRef: { current: null }
});
function ue(e, t) {
	e.current = t.current;
}
function de(e, t = { open: !1 }) {
	let { open: n } = t, r = "rootStore" in e ? e.rootStore : e, i = r.useState("floatingId"), { currentIdRef: a, delayRef: o, timeoutMs: c, initialDelayRef: l, currentContextRef: u, hasProvider: d, timeout: f } = X.useContext(le), [h, g] = X.useState(!1), _ = X.useRef(n), v = X.useRef(!1);
	return s(() => {
		_.current = n;
	}, [n]), s(() => () => {
		v.current = !0;
	}, []), s(() => {
		function e() {
			v.current || g(!1), u.current?.setIsInstantPhase(!1), a.current = null, u.current = null, o.current = l.current, f.clear();
		}
		if (a.current && !n && a.current === i) {
			if (g(!1), c) {
				let t = i;
				return f.start(c, () => {
					r.select("open") || a.current && a.current !== t || e();
				}), () => {
					(_.current || a.current !== t) && f.clear();
				};
			}
			e();
		}
	}, [
		n,
		i,
		a,
		o,
		c,
		l,
		u,
		f,
		r
	]), s(() => {
		if (!n) return;
		let e = u.current, t = a.current;
		f.clear(), u.current = {
			onOpenChange: r.setOpen,
			setIsInstantPhase: g
		}, a.current = i, o.current = {
			open: 0,
			close: U(l.current, "close")
		}, t !== null && t !== i ? (g(!0), e?.setIsInstantPhase(!0), e?.onOpenChange(!1, p(m))) : (g(!1), e?.setIsInstantPhase(!1));
	}, [
		n,
		i,
		r,
		a,
		o,
		l,
		u,
		f
	]), s(() => () => {
		if (a.current === i) {
			if (u.current = null, !_.current) return;
			a.current = null, ue(o, l), f.clear();
		}
	}, [
		u,
		a,
		o,
		i,
		l,
		f
	]), X.useMemo(() => ({
		hasProvider: d,
		delayRef: o,
		isInstantPhase: h
	}), [
		d,
		o,
		h
	]);
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useClientPoint.mjs
function fe(e, t) {
	let n = null, r = null, i = !1;
	return {
		contextElement: e || void 0,
		getBoundingClientRect() {
			let a = e?.getBoundingClientRect() || {
				width: 0,
				height: 0,
				x: 0,
				y: 0
			}, o = t.axis === "x" || t.axis === "both", s = t.axis === "y" || t.axis === "both", c = ["mouseenter", "mousemove"].includes(t.dataRef.current.openEvent?.type || "") && t.pointerType !== "touch", l = a.width, u = a.height, d = a.x, f = a.y;
			return n == null && t.x && o && (n = a.x - t.x), r == null && t.y && s && (r = a.y - t.y), d -= n || 0, f -= r || 0, l = 0, u = 0, !i || c ? (l = t.axis === "y" ? a.width : 0, u = t.axis === "x" ? a.height : 0, d = o && t.x != null ? t.x : d, f = s && t.y != null ? t.y : f) : i && !c && (u = t.axis === "x" ? a.height : u, l = t.axis === "y" ? a.width : l), i = !0, {
				width: l,
				height: u,
				x: d,
				y: f,
				top: f,
				right: d + l,
				bottom: f + u,
				left: d
			};
		}
	};
}
function pe(e) {
	return e != null && e.clientX != null;
}
function me(e, t = {}) {
	let { enabled: n = !0, axis: i = "both" } = t, a = "rootStore" in e ? e.rootStore : e, o = a.useState("open"), s = a.useState("floatingElement"), c = a.useState("domReferenceElement"), l = a.context.dataRef, u = X.useRef(!1), d = X.useRef(null), [f, p] = X.useState(), [m, h] = X.useState([]), g = r((e) => {
		a.set("positionReference", e);
	}), _ = r((e, t, n) => {
		u.current || (!l.current.openEvent || pe(l.current.openEvent)) && a.set("positionReference", fe(n ?? c, {
			x: e,
			y: t,
			axis: i,
			dataRef: l,
			pointerType: f
		}));
	}), b = r((e) => {
		o ? d.current || (_(e.clientX, e.clientY, e.currentTarget), h([])) : _(e.clientX, e.clientY, e.currentTarget);
	}), x = A(f) ? s : o;
	X.useEffect(() => {
		if (!n) {
			g(c);
			return;
		}
		if (!x) return;
		function e() {
			d.current?.(), d.current = null;
		}
		let t = v(s);
		function r(t) {
			let n = ne(t);
			V(s, n) ? e() : _(t.clientX, t.clientY);
		}
		return !l.current.openEvent || pe(l.current.openEvent) ? d.current = y(t, "mousemove", r) : g(c), e;
	}, [
		x,
		n,
		s,
		l,
		c,
		a,
		_,
		g,
		m
	]), X.useEffect(() => () => {
		a.set("positionReference", null);
	}, [a]), X.useEffect(() => {
		n && !s && (u.current = !1);
	}, [n, s]), X.useEffect(() => {
		!n && o && (u.current = !0);
	}, [n, o]);
	let S = X.useMemo(() => {
		function e(e) {
			p(e.pointerType);
		}
		return {
			onPointerDown: e,
			onPointerEnter: e,
			onMouseMove: b,
			onMouseEnter: b
		};
	}, [b]);
	return X.useMemo(() => n ? {
		reference: S,
		trigger: S
	} : {}, [n, S]);
}
// node_modules/@base-ui/react/tooltip/root/TooltipRootContext.mjs
var he = /*#__PURE__*/ X.createContext(void 0);
function Q(e) {
	let t = X.useContext(he);
	if (t === void 0 && !e) throw Error(o(72));
	return t;
}
// node_modules/@base-ui/react/tooltip/store/TooltipStore.mjs
var ge = {
	...Y,
	disabled: R((e) => e.disabled),
	instantType: R((e) => e.instantType),
	isInstantPhase: R((e) => e.isInstantPhase),
	trackCursorAxis: R((e) => e.trackCursorAxis),
	disableHoverablePopup: R((e) => e.disableHoverablePopup),
	lastOpenChangeReason: R((e) => e.openChangeReason),
	closeOnClick: R((e) => e.closeOnClick),
	closeDelay: R((e) => e.closeDelay),
	hasViewport: R((e) => e.hasViewport)
}, _e = class e extends N {
	constructor(e, t, n = !1) {
		let r = new L(), i = {
			...ve(),
			...e
		};
		i.floatingRootContext = J(r, t, n), super(i, {
			popupRef: /*#__PURE__*/ X.createRef(),
			onOpenChange: void 0,
			onOpenChangeComplete: void 0,
			triggerElements: r
		}, ge);
	}
	setOpen = (e, t) => {
		E(this, e, t, { extraState: { openChangeReason: t.reason } });
	};
	cancelPendingOpen(e) {
		this.state.floatingRootContext.dispatchOpenChange(!1, p(u, e));
	}
	static useStore(t, n) {
		return C(t, (t, r) => new e(n, t, r)).store;
	}
};
function ve() {
	return {
		...oe(),
		disabled: !1,
		instantType: void 0,
		isInstantPhase: !1,
		trackCursorAxis: "none",
		disableHoverablePopup: !1,
		openChangeReason: null,
		closeOnClick: !0,
		closeDelay: 0,
		hasViewport: !1
	};
}
// node_modules/@base-ui/react/tooltip/root/TooltipRoot.mjs
var ye = P(function(e) {
	let { disabled: t = !1, defaultOpen: n = !1, open: r, disableHoverablePopup: i = !1, trackCursorAxis: a = "none", actionsRef: o, onOpenChange: c, onOpenChangeComplete: l, handle: u, triggerId: m, defaultTriggerId: h = null, children: g } = e, _ = _e.useStore(u?.store, {
		open: n,
		openProp: r,
		activeTriggerId: h,
		triggerIdProp: m
	});
	O(_, r, n, h), _.useControlledProp("openProp", r), _.useControlledProp("triggerIdProp", m), _.useContextCallback("onOpenChange", c), _.useContextCallback("onOpenChangeComplete", l);
	let v = _.useState("open"), y = !t && v, b = _.useState("activeTriggerId"), x = _.useState("mounted"), C = _.useState("payload");
	_.useSyncedValues({
		trackCursorAxis: a,
		disableHoverablePopup: i
	}), _.useSyncedValue("disabled", t), D(_, { closeOnActiveTriggerUnmount: !0 });
	let { forceUnmount: w, transitionStatus: T } = S(y, _), E = _.useState("isInstantPhase"), k = _.useState("instantType"), A = _.useState("lastOpenChangeReason"), j = X.useRef(null);
	s(() => {
		v && t && _.setOpen(!1, p(f));
	}, [
		v,
		t,
		_
	]), s(() => {
		T === "ending" && A === "none" || T !== "ending" && E ? (k !== "delay" && (j.current = k), _.set("instantType", "delay")) : j.current !== null && (_.set("instantType", j.current), j.current = null);
	}, [
		T,
		E,
		A,
		k,
		_
	]), s(() => {
		y && (b ?? _.set("payload", void 0));
	}, [
		_,
		b,
		y
	]);
	let M = X.useCallback(() => {
		_.setOpen(!1, p(d));
	}, [_]);
	X.useImperativeHandle(o, () => ({
		unmount: w,
		close: M
	}), [w, M]);
	let N = y || x || !t && a !== "none";
	return /*#__PURE__*/ (0, Z.jsxs)(he.Provider, {
		value: _,
		children: [N && /*#__PURE__*/ (0, Z.jsx)(be, {
			store: _,
			disabled: t,
			trackCursorAxis: a
		}), typeof g == "function" ? g({ payload: C }) : g]
	});
});
function be({ store: e, disabled: t, trackCursorAxis: n }) {
	let r = e.useState("floatingRootContext"), a = F(r, {
		enabled: !t,
		referencePress: () => e.select("closeOnClick")
	}), o = me(r, {
		enabled: !t && n !== "none",
		axis: n === "none" ? void 0 : n
	}), s = X.useMemo(() => i(o.reference, a.reference), [o.reference, a.reference]), c = X.useMemo(() => i(o.trigger, a.trigger), [o.trigger, a.trigger]), l = X.useMemo(() => i(k, o.floating, a.floating), [o.floating, a.floating]);
	return T(e, {
		activeTriggerProps: s,
		inactiveTriggerProps: c,
		popupProps: l
	}), null;
}
// node_modules/@base-ui/react/tooltip/provider/TooltipProviderContext.mjs
var xe = /*#__PURE__*/ X.createContext(void 0);
function Se() {
	return X.useContext(xe);
}
// node_modules/@base-ui/react/tooltip/trigger/TooltipTriggerDataAttributes.mjs
var Ce = function(e) {
	return e[e.popupOpen = I.popupOpen] = "popupOpen", e.triggerDisabled = "data-trigger-disabled", e;
}({}), we = "data-base-ui-tooltip-trigger";
function Te(e) {
	if ("composedPath" in e) {
		let t = e.composedPath();
		for (let e = 0; e < t.length; e += 1) {
			let n = t[e];
			if (_(n)) return n;
		}
	}
	let t = e.target;
	return _(t) ? t : null;
}
function Ee(e) {
	let t = e;
	for (; t;) {
		if (t.hasAttribute(we)) return t;
		let e = t.parentElement;
		if (e) {
			t = e;
			continue;
		}
		let n = t.getRootNode();
		t = "host" in n && _(n.host) ? n.host : null;
	}
	return null;
}
var De = ee(function(e, t) {
	let { render: n, className: r, style: i, handle: s, payload: u, disabled: d, delay: f, closeOnClick: m = !0, closeDelay: h, id: g, ..._ } = e, v = Q(!0), y = s?.store ?? v;
	if (!y) throw Error(o(82));
	let x = c(g), S = y.useState("isTriggerActive", x), C = y.useState("isOpenedByTrigger", x), T = y.useState("floatingRootContext"), E = X.useRef(null), D = f ?? 600, O = h ?? 0, { registerTrigger: k, isMountedByThisTrigger: j } = w(x, E, y, {
		payload: u,
		closeOnClick: m,
		closeDelay: O
	}), N = Se(), { delayRef: P, isInstantPhase: ee, hasProvider: F } = de(T, { open: C }), I = ie(T);
	y.useSyncedValue("isInstantPhase", ee);
	let L = y.useState("disabled"), R = d ?? L, z = b(R), B = y.useState("trackCursorAxis"), ne = y.useState("disableHoverablePopup"), H = X.useRef(!1), U = te(), W = X.useRef(void 0);
	function G() {
		let e = N?.delay, t = typeof P.current == "object" ? P.current.open : void 0, n = D;
		return F && (n = t === 0 ? 0 : f ?? e ?? D), n;
	}
	function K(e) {
		let t = E.current;
		if (!t || !e) return !1;
		let n = Ee(e);
		return n !== null && n !== t && V(t, n);
	}
	function q(e) {
		let t = K(e);
		return H.current = t, t && (I.openChangeTimeout.clear(), I.restTimeout.clear(), I.restTimeoutPending = !1, U.clear()), t;
	}
	let J = re(T, {
		enabled: !R,
		mouseOnly: !0,
		move: !1,
		handleClose: !ne && B !== "both" ? ae() : null,
		restMs: G,
		delay() {
			let e = typeof P.current == "object" ? P.current.close : void 0, t = O;
			return h == null && F && (t = e), { close: t };
		},
		triggerElementRef: E,
		isActiveTrigger: S,
		isClosing: () => y.select("transitionStatus") === "ending",
		shouldOpen() {
			return !H.current;
		}
	}), Y = se(T, { enabled: !R }).reference, oe = (e) => {
		let t = H.current, n = Te(e), r = q(n), i = E.current, a = i && n && V(i, n);
		if (r && y.select("open") && y.select("lastOpenChangeReason") === "trigger-hover") y.setOpen(!1, p(l, e));
		else if (t && !r && a && !z.current && !y.select("open") && i && A(W.current)) {
			let t = () => {
				H.current || z.current || y.select("open") || y.setOpen(!0, p(l, e, i));
			}, n = G();
			n === 0 ? (U.clear(), t()) : U.start(n, t);
		}
	}, ce = y.useState("triggerProps", j);
	return a("button", e, {
		state: { open: C },
		ref: [
			t,
			k,
			E
		],
		props: [
			J,
			Y,
			j || B !== "none" ? ce : void 0,
			{
				onMouseOver(e) {
					oe(e.nativeEvent);
				},
				onFocus(e) {
					K(Te(e.nativeEvent)) && e.preventBaseUIHandler();
				},
				onMouseLeave() {
					H.current = !1, U.clear(), W.current = void 0;
				},
				onPointerEnter(e) {
					W.current = e.pointerType;
				},
				onPointerDown(e) {
					W.current = e.pointerType, y.set("closeOnClick", m), m && !y.select("open") && y.cancelPendingOpen(e.nativeEvent);
				},
				onClick(e) {
					m && !y.select("open") && y.cancelPendingOpen(e.nativeEvent);
				},
				id: x,
				[Ce.triggerDisabled]: R ? "" : void 0,
				[we]: R ? void 0 : ""
			},
			_
		],
		stateAttributesMapping: M
	});
}), Oe = /*#__PURE__*/ X.createContext(void 0);
function ke() {
	let e = X.useContext(Oe);
	if (e === void 0) throw Error(o(70));
	return e;
}
// node_modules/@base-ui/react/tooltip/portal/TooltipPortal.mjs
var Ae = /*#__PURE__*/ X.forwardRef(function(e, t) {
	let { keepMounted: n = !1, ...r } = e;
	return Q().useState("mounted") || n ? /*#__PURE__*/ (0, Z.jsx)(Oe.Provider, {
		value: n,
		children: /*#__PURE__*/ (0, Z.jsx)(ce, {
			ref: t,
			...r
		})
	}) : null;
}), je = /*#__PURE__*/ X.createContext(void 0);
function $() {
	let e = X.useContext(je);
	if (e === void 0) throw Error(o(71));
	return e;
}
// node_modules/@base-ui/react/tooltip/positioner/TooltipPositioner.mjs
var Me = /*#__PURE__*/ X.forwardRef(function(e, t) {
	let { render: n, className: r, anchor: i, positionMethod: a = "absolute", side: o = "top", align: s = "center", sideOffset: c = 0, alignOffset: l = 0, collisionBoundary: u = "clipping-ancestors", collisionPadding: d = 5, arrowPadding: f = 5, sticky: p = !1, disableAnchorTracking: m = !1, collisionAvoidance: h = j, style: g, ..._ } = e, v = Q(), y = ke(), b = v.useState("open"), x = v.useState("mounted"), S = v.useState("trackCursorAxis"), C = v.useState("disableHoverablePopup"), w = v.useState("floatingRootContext"), T = v.useState("instantType"), E = v.useState("transitionStatus"), D = v.useState("hasViewport"), O = G({
		anchor: i,
		positionMethod: a,
		floatingRootContext: w,
		mounted: x,
		side: o,
		sideOffset: c,
		align: s,
		alignOffset: l,
		collisionBoundary: u,
		collisionPadding: d,
		sticky: p,
		arrowPadding: f,
		disableAnchorTracking: m,
		keepMounted: y,
		collisionAvoidance: h,
		adaptiveOrigin: D ? K : void 0
	}), k = X.useMemo(() => ({
		open: b,
		side: O.side,
		align: O.align,
		anchorHidden: O.anchorHidden,
		instant: S === "none" ? T : "tracking-cursor"
	}), [
		b,
		O.side,
		O.align,
		O.anchorHidden,
		S,
		T
	]), A = q(e, k, {
		styles: O.positionerStyles,
		transitionStatus: E,
		props: _,
		refs: [t, v.useStateSetter("positionerElement")],
		hidden: !x,
		inert: !b || S === "both" || C
	});
	return /*#__PURE__*/ (0, Z.jsx)(je.Provider, {
		value: O,
		children: A
	});
}), Ne = {
	...z,
	...h
}, Pe = /*#__PURE__*/ X.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...o } = e, s = Q(), { side: c, align: l } = $(), u = s.useState("open"), d = s.useState("instantType"), f = s.useState("transitionStatus"), p = s.useState("popupProps"), m = s.useState("floatingRootContext"), h = s.useState("disabled"), _ = s.useState("closeDelay");
	g({
		open: u,
		ref: s.context.popupRef,
		onComplete() {
			u && s.context.onOpenChangeComplete?.(!0);
		}
	}), H(m, {
		enabled: !h,
		closeDelay: _
	});
	let v = s.useStateSetter("popupElement");
	return a("div", e, {
		state: {
			open: u,
			side: c,
			align: l,
			instant: d,
			transitionStatus: f
		},
		ref: [
			t,
			s.context.popupRef,
			v
		],
		props: [
			p,
			W(f),
			o
		],
		stateAttributesMapping: Ne
	});
}), Fe = /*#__PURE__*/ X.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...o } = e, s = Q(), { arrowRef: c, side: l, align: u, arrowUncentered: d, arrowStyles: f } = $(), p = {
		open: s.useState("open"),
		side: l,
		align: u,
		uncentered: d,
		instant: s.useState("instantType")
	};
	return a("div", e, {
		state: p,
		ref: [t, c],
		props: [{
			style: f,
			"aria-hidden": !0
		}, o],
		stateAttributesMapping: z
	});
});
// upstream/registry/bases/base/ui/tooltip.tsx
function Ie({ ...e }) {
	return /* @__PURE__ */ (0, Z.jsx)(ye, {
		"data-slot": "tooltip",
		...e
	});
}
function Le({ ...e }) {
	return /* @__PURE__ */ (0, Z.jsx)(De, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function Re({ className: e, side: t = "top", sideOffset: n = 4, align: r = "center", alignOffset: i = 0, children: a, ...o }) {
	return /* @__PURE__ */ (0, Z.jsx)(Ae, { children: /* @__PURE__ */ (0, Z.jsx)(Me, {
		align: r,
		alignOffset: i,
		side: t,
		sideOffset: n,
		className: "isolate z-50",
		children: /* @__PURE__ */ (0, Z.jsxs)(Pe, {
			"data-slot": "tooltip-content",
			className: x("cn-tooltip-content cn-tooltip-content-logical z-50 w-fit max-w-xs origin-(--transform-origin) bg-foreground text-background", e),
			...o,
			children: [a, /* @__PURE__ */ (0, Z.jsx)(Fe, { className: "cn-tooltip-arrow cn-tooltip-arrow-logical z-50 bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5" })]
		})
	}) });
}
export { Re as n, Le as r, Ie as t };
