import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./button-DmMhlFcj.js";
import { t as n } from "./dist-DCi9UB7o.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
import { d as i } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { o as a, r as o, t as s, u as c } from "./useRenderElement-Bc91YjHo.js";
import { t as l } from "./react-D9cguz4v.js";
import { O as u, _ as d, a as f, c as p, d as m, f as h, g, h as _, m as v, o as y, p as b, r as x } from "./popupStateMapping-CSyRbb7j.js";
import { c as S, d as C, f as w, l as T, n as E, o as D, s as O, t as k } from "./popupStoreUtils-DmfT7kYW.js";
import { n as A, r as j, t as M } from "./store-DVwqec8L.js";
import { d as N, t as P } from "./createBaseUIEventDetails-DG51vPHx.js";
import { t as F } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as ee } from "./FloatingPortalLite-zFJiU2xl.js";
import { t as te } from "./useBaseUiId-BwhhMxTY.js";
import { n as ne, r as re, t as ie } from "./safePolygon-DhLTA827.js";
import { t as ae } from "./useFocus-CcLAK8ce.js";
import { i as I, n as L, r as R, t as oe } from "./usePositioner-D8Ld0Xcc.js";
import { t as se } from "./useStableCallback-BmDujACN.js";
import { a as ce, t as le } from "./useOpenChangeComplete-BfJk_bnM.js";
// node_modules/@base-ui/react/utils/popups/inlineRect.mjs
function z(e, t, n, r) {
	return {
		left: e,
		top: t,
		right: n,
		bottom: r,
		x: e,
		y: t,
		width: n - e,
		height: r - t
	};
}
function B(e) {
	return {
		left: e.left,
		top: e.top,
		right: e.right,
		bottom: e.bottom,
		width: e.width,
		height: e.height
	};
}
function V(e) {
	let t = [], n, r = Infinity, i = Infinity, a = -Infinity, o = -Infinity;
	for (let s of Array.from(e).sort((e, t) => e.top - t.top)) {
		if (r = Math.min(r, s.left), i = Math.min(i, s.top), a = Math.max(a, s.right), o = Math.max(o, s.bottom), !n || s.top - n.top > n.height / 2) t.push(B(s));
		else {
			let e = t[t.length - 1];
			e.left = Math.min(e.left, s.left), e.right = Math.max(e.right, s.right), e.bottom = Math.max(e.bottom, s.bottom), e.width = e.right - e.left, e.height = e.bottom - e.top;
		}
		n = s;
	}
	return {
		lines: t,
		fallback: z(r, i, a, o)
	};
}
function H(e, t, n) {
	return e.findIndex((e) => t > e.left - 2 && t < e.right + 2 && n > e.top - 2 && n < e.bottom + 2);
}
function U(e) {
	return z(e.left, e.top, e.right, e.bottom);
}
function W(e, t, n) {
	let { lines: r } = V(e.getClientRects());
	if (r.length < 2) return;
	let i = H(r, t, n);
	return {
		x: t,
		y: n,
		lineIndex: i === -1 ? void 0 : i,
		element: e
	};
}
function ue(e, t, n) {
	let { lines: r, fallback: i } = V(e.getClientRects());
	if (r.length < 2) return null;
	let a = n?.x, o = n?.y, s = t[0];
	if (n?.lineIndex != null && r[n.lineIndex]) return U(r[n.lineIndex]);
	if (a != null && o != null) {
		let e = H(r, a, o);
		if (e !== -1) return U(r[e]);
	}
	if (r.length === 2 && r[0].left > r[1].right && a != null && o != null) return i;
	if (s === "t" || s === "b") {
		let e = r[0], t = r[r.length - 1], n = s === "t" ? e : t;
		return z(n.left, e.top, n.right, t.bottom);
	}
	let c = s === "l", l = r[0].left, u = r[0].right, d = c ? Infinity : -Infinity, f = r[0], p = r[0];
	for (let e of r) {
		l = Math.min(l, e.left), u = Math.max(u, e.right);
		let t = c ? e.left : e.right;
		c && t < d || !c && t > d ? (d = t, f = e, p = e) : t === d && (p = e);
	}
	return z(l, f.top, u, p.bottom);
}
function de(e) {
	return "contextElement" in e && e.contextElement ? e.contextElement : i(e) ? e : void 0;
}
function fe(e, t) {
	function n(t) {
		G(e, t.currentTarget, t.clientX, t.clientY);
	}
	function r(e) {
		t || n(e);
	}
	return {
		onFocus() {
			e.current = void 0;
		},
		onMouseEnter: r,
		onMouseMove: r
	};
}
function G(e, t, n, r) {
	let i = W(t, n, r);
	return e.current = i, i;
}
function K(e) {
	return {
		name: "inline",
		async fn(t) {
			let n = t.elements.reference;
			if (typeof n?.getClientRects != "function") return {};
			let r = de(n), i = e.current, a = i?.element === n || i?.element === r ? i : void 0, o = ue(n, t.placement, a);
			if (!o || typeof t.platform.getElementRects != "function") return {};
			let s = await t.platform.getElementRects({
				reference: {
					contextElement: r,
					getBoundingClientRect() {
						return o;
					}
				},
				floating: t.elements.floating,
				strategy: t.strategy
			});
			return t.rects.reference.x === s.reference.x && t.rects.reference.y === s.reference.y && t.rects.reference.width === s.reference.width && t.rects.reference.height === s.reference.height ? {} : { reset: { rects: s } };
		}
	};
}
// node_modules/@base-ui/react/preview-card/root/PreviewCardContext.mjs
var q = /* @__PURE__ */ e(l(), 1), J = /*#__PURE__*/ q.createContext(void 0);
function Y(e) {
	let t = q.useContext(J);
	if (t === void 0 && !e) throw Error(c(50));
	return t;
}
// node_modules/@base-ui/react/preview-card/store/PreviewCardStore.mjs
var pe = {
	...j,
	instantType: b((e) => e.instantType),
	hasViewport: b((e) => e.hasViewport)
}, me = class e extends p {
	constructor(e, t, n = !1) {
		let r = new y(), i = {
			...he(),
			...e
		};
		i.floatingRootContext = A(r, t, n), super(i, {
			popupRef: /*#__PURE__*/ q.createRef(),
			onOpenChange: void 0,
			onOpenChangeComplete: void 0,
			triggerElements: r,
			closeDelayRef: { current: 300 },
			inlineRectCoordsRef: { current: void 0 }
		}, pe);
	}
	setOpen = (e, t) => {
		let { inlineRectCoordsRef: n } = this.context;
		E(this, e, t, { onBeforeDispatch() {
			let r = t.event;
			e && t.reason === "trigger-hover" && t.trigger && "clientX" in r && "clientY" in r && n.current?.element !== t.trigger && G(n, t.trigger, r.clientX, r.clientY);
		} });
	};
	static useStore(t, n) {
		return C(t, (t, r) => new e(n, t, r)).store;
	}
};
function he() {
	return {
		...M(),
		instantType: void 0,
		hasViewport: !1
	};
}
// node_modules/@base-ui/react/preview-card/root/PreviewCardRoot.mjs
var X = r();
function Z(e) {
	let { open: t, defaultOpen: n = !1, onOpenChange: r, onOpenChangeComplete: i, actionsRef: a, handle: o, triggerId: s, defaultTriggerId: c = null, children: l } = e, u = me.useStore(o?.store, {
		open: n,
		openProp: t,
		activeTriggerId: c,
		triggerIdProp: s
	});
	O(u, t, n, c), u.useControlledProp("openProp", t), u.useControlledProp("triggerIdProp", s), u.useContextCallback("onOpenChange", r), u.useContextCallback("onOpenChangeComplete", i);
	let d = u.useState("open"), f = u.useState("activeTriggerId"), p = u.useState("mounted"), m = u.useState("payload");
	D(u, { closeOnActiveTriggerUnmount: !0 });
	let { forceUnmount: h } = S(d, u, () => {
		u.context.inlineRectCoordsRef.current = void 0;
	});
	F(() => {
		d && (f ?? u.set("payload", void 0));
	}, [
		u,
		f,
		d
	]);
	let g = q.useCallback(() => {
		u.setOpen(!1, P(N));
	}, [u]);
	q.useImperativeHandle(a, () => ({
		unmount: h,
		close: g
	}), [h, g]);
	let _ = d || p;
	return /*#__PURE__*/ (0, X.jsxs)(J.Provider, {
		value: u,
		children: [_ && /*#__PURE__*/ (0, X.jsx)(ge, { store: u }), typeof l == "function" ? l({ payload: m }) : l]
	});
}
function ge({ store: e }) {
	let t = e.useState("floatingRootContext"), n = v(t), r = n.reference ?? a, i = n.trigger ?? a, s = q.useMemo(() => o(k, n.floating), [n.floating]);
	return T(e, {
		activeTriggerProps: r,
		inactiveTriggerProps: i,
		popupProps: s
	}), null;
}
var _e = m(function(e) {
	return Y(!0) ? /*#__PURE__*/ (0, X.jsx)(Z, { ...e }) : /*#__PURE__*/ (0, X.jsx)(g, { children: /*#__PURE__*/ (0, X.jsx)(Z, { ...e }) });
}), Q = /*#__PURE__*/ q.createContext(void 0);
function ve() {
	let e = q.useContext(Q);
	if (e === void 0) throw Error(c(48));
	return e;
}
// node_modules/@base-ui/react/preview-card/portal/PreviewCardPortal.mjs
var ye = /*#__PURE__*/ q.forwardRef(function(e, t) {
	let { keepMounted: n = !1, ...r } = e;
	return Y().useState("mounted") || n ? /*#__PURE__*/ (0, X.jsx)(Q.Provider, {
		value: n,
		children: /*#__PURE__*/ (0, X.jsx)(ee, {
			ref: t,
			...r
		})
	}) : null;
}), be = h(function(e, t) {
	let { render: n, className: r, delay: i, closeDelay: a, id: o, payload: l, handle: u, style: d, ...p } = e, m = Y(!0), h = u?.store ?? m;
	if (!h) throw Error(c(89));
	let g = te(o), _ = h.useState("isTriggerActive", g), v = h.useState("isOpenedByTrigger", g), y = h.useState("floatingRootContext"), b = h.context.inlineRectCoordsRef, x = q.useRef(null), S = i ?? 600, C = a ?? 300, { registerTrigger: T, isMountedByThisTrigger: E } = w(g, x, h, { payload: l });
	F(() => {
		E && (h.context.closeDelayRef.current = C);
	}, [
		h,
		E,
		C
	]);
	let D = ne(y, {
		mouseOnly: !0,
		move: !1,
		handleClose: ie(),
		delay: () => ({
			open: S,
			close: C
		}),
		triggerElementRef: x,
		isActiveTrigger: _,
		isClosing: () => h.select("transitionStatus") === "ending"
	}), O = ae(y, { delay: S }), k = { open: v }, A = h.useState("triggerProps", E), j = fe(b, v);
	return s("a", e, {
		state: k,
		ref: [
			t,
			T,
			x
		],
		props: [
			D,
			O.reference,
			A,
			j,
			{ id: g },
			p
		],
		stateAttributesMapping: f
	});
}), $ = /*#__PURE__*/ q.createContext(void 0);
function xe() {
	let e = q.useContext($);
	if (e === void 0) throw Error(c(49));
	return e;
}
// node_modules/@base-ui/react/preview-card/positioner/PreviewCardPositioner.mjs
var Se = /*#__PURE__*/ q.forwardRef(function(e, t) {
	let { render: n, className: r, anchor: i, positionMethod: a = "absolute", side: o = "bottom", align: s = "center", sideOffset: c = 0, alignOffset: l = 0, collisionBoundary: f = "clipping-ancestors", collisionPadding: p = 5, arrowPadding: m = 5, sticky: h = !1, disableAnchorTracking: g = !1, collisionAvoidance: v = u, style: y, ...b } = e, x = Y(), S = ve(), C = d(), w = x.useState("open"), T = x.useState("mounted"), E = x.useState("floatingRootContext"), D = x.useState("instantType"), O = x.useState("transitionStatus"), k = x.useState("hasViewport"), A = x.context.inlineRectCoordsRef, j = L({
		anchor: i,
		floatingRootContext: E,
		positionMethod: a,
		mounted: T,
		side: o,
		sideOffset: c,
		align: s,
		alignOffset: l,
		arrowPadding: m,
		collisionBoundary: f,
		collisionPadding: p,
		sticky: h,
		disableAnchorTracking: g,
		keepMounted: S,
		nodeId: C,
		collisionAvoidance: v,
		adaptiveOrigin: k ? R : void 0,
		inline: K(A)
	}), M = j.update;
	F(() => {
		w && T && M();
	}, [
		w,
		T,
		M
	]);
	let N = {
		open: w,
		side: j.side,
		align: j.align,
		anchorHidden: j.anchorHidden,
		instant: D
	}, P = oe(e, N, {
		styles: j.positionerStyles,
		transitionStatus: O,
		props: b,
		refs: [t, x.useStateSetter("positionerElement")],
		hidden: !T,
		inert: !w
	});
	return /*#__PURE__*/ (0, X.jsx)($.Provider, {
		value: j,
		children: /*#__PURE__*/ (0, X.jsx)(_, {
			id: C,
			children: P
		})
	});
}), Ce = {
	...x,
	...ce
}, we = /*#__PURE__*/ q.forwardRef(function(e, t) {
	let { className: n, render: r, style: i, ...a } = e, o = Y(), { side: c, align: l } = xe(), u = o.useState("open"), d = o.useState("instantType"), f = o.useState("transitionStatus"), p = o.useState("popupProps"), m = o.useState("floatingRootContext");
	le({
		open: u,
		ref: o.context.popupRef,
		onComplete() {
			u && o.context.onOpenChangeComplete?.(!0);
		}
	});
	let h = se(() => o.context.closeDelayRef.current);
	return re(m, { closeDelay: h }), s("div", e, {
		state: {
			open: u,
			side: c,
			align: l,
			instant: d,
			transitionStatus: f
		},
		ref: [
			t,
			o.context.popupRef,
			o.useStateSetter("popupElement")
		],
		props: [
			p,
			I(f),
			a
		],
		stateAttributesMapping: Ce
	});
});
// upstream/registry/bases/base/ui/hover-card.tsx
function Te({ ...e }) {
	return /* @__PURE__ */ (0, X.jsx)(_e, {
		"data-slot": "hover-card",
		...e
	});
}
function Ee({ ...e }) {
	return /* @__PURE__ */ (0, X.jsx)(be, {
		"data-slot": "hover-card-trigger",
		...e
	});
}
function De({ className: e, side: t = "bottom", sideOffset: r = 4, align: i = "center", alignOffset: a = 4, ...o }) {
	return /* @__PURE__ */ (0, X.jsx)(ye, {
		"data-slot": "hover-card-portal",
		children: /* @__PURE__ */ (0, X.jsx)(Se, {
			align: i,
			alignOffset: a,
			side: t,
			sideOffset: r,
			className: "isolate z-50",
			children: /* @__PURE__ */ (0, X.jsx)(we, {
				"data-slot": "hover-card-content",
				className: n("cn-hover-card-content cn-hover-card-content-logical z-50 origin-(--transform-origin) outline-hidden", e),
				...o
			})
		})
	});
}
// upstream/examples/base/hover-card-demo.tsx
function Oe() {
	return /* @__PURE__ */ (0, X.jsxs)(Te, { children: [/* @__PURE__ */ (0, X.jsx)(Ee, {
		delay: 10,
		closeDelay: 100,
		render: /* @__PURE__ */ (0, X.jsx)(t, { variant: "link" }),
		children: "Hover Here"
	}), /* @__PURE__ */ (0, X.jsxs)(De, {
		className: "flex w-64 flex-col gap-0.5",
		children: [
			/* @__PURE__ */ (0, X.jsx)("div", {
				className: "font-semibold",
				children: "@nextjs"
			}),
			/* @__PURE__ */ (0, X.jsx)("div", { children: "The React Framework – created and maintained by @vercel." }),
			/* @__PURE__ */ (0, X.jsx)("div", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Joined December 2021"
			})
		]
	})] });
}
export { Oe as default };
