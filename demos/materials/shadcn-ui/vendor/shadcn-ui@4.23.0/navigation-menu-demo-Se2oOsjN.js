import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./createLucideIcon-B1HI5iko.js";
import { n as i } from "./info-BIXuCdrk.js";
import { t as a } from "./dist-zgg4f6ja.js";
import { t as o } from "./dist-DCi9UB7o.js";
import { t as s } from "./icon-placeholder-BTF3H_W7.js";
import { E as c, N as l } from "./composite-BYPOq3H3.js";
import { f as u, l as d, t as f } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { a as p, o as m, r as h, t as g, u as _ } from "./useRenderElement-Bc91YjHo.js";
import { t as v } from "./useControlled-BkmszdIY.js";
import { t as y } from "./useStableCallback-BmDujACN.js";
import { t as b } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as x } from "./owner-C-FapX6G.js";
import { B as S, D as C, I as w, L as ee, M as te, N as T, O as ne, P as re, R as ie, U as E, W as ae, _ as D, g as oe, h as O, i as se, k, m as A, r as j, v as ce, x as le, y as M } from "./popupStateMapping-CSyRbb7j.js";
import { n as N, r as P, t as ue } from "./shadowDom-D66trjQm.js";
import { a as F, i as de, n as fe, o as I, t as pe } from "./useOpenChangeComplete-BfJk_bnM.js";
import { D as me, O as he, S as ge, t as L, u as _e, v as ve, y as ye } from "./createBaseUIEventDetails-DG51vPHx.js";
import { a as be, i as xe, n as Se, o as Ce, r as we, t as Te } from "./safePolygon-DhLTA827.js";
import { t as R } from "./CompositeRoot-BhZOjAjJ.js";
import { t as Ee } from "./getEmptyRootContext-CyY6MYgU.js";
import { n as z, t as B } from "./useBaseUiId-BwhhMxTY.js";
import { t as V } from "./react-dom-BasjwewA.js";
import { t as H } from "./inertValue-cHK2-C55.js";
import { t as De } from "./addEventListener-EiVbnOnq.js";
import { n as Oe } from "./useTimeout-CP4j_cva.js";
import { n as ke } from "./useAnimationFrame-CMIvKrBf.js";
import { t as Ae } from "./useValueAsRef-0u0FW33N.js";
import { t as je } from "./useClick-B0N8YgwG.js";
import { a as Me, i as Ne, n as Pe, r as Fe, t as Ie } from "./usePositioner-D8Ld0Xcc.js";
import { t as Le } from "./CompositeItem-Vp60fN0N.js";
import { t as Re } from "./useButton-CMNj7XNN.js";
import { t as ze } from "./DirectionContext-CBHZ_yWZ.js";
var Be = r("CircleAlert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]), Ve = r("CircleDashed", [
	["path", {
		d: "M10.1 2.182a10 10 0 0 1 3.8 0",
		key: "5ilxe3"
	}],
	["path", {
		d: "M13.9 21.818a10 10 0 0 1-3.8 0",
		key: "11zvb9"
	}],
	["path", {
		d: "M17.609 3.721a10 10 0 0 1 2.69 2.7",
		key: "1iw5b2"
	}],
	["path", {
		d: "M2.182 13.9a10 10 0 0 1 0-3.8",
		key: "c0bmvh"
	}],
	["path", {
		d: "M20.279 17.609a10 10 0 0 1-2.7 2.69",
		key: "1ruxm7"
	}],
	["path", {
		d: "M21.818 10.1a10 10 0 0 1 0 3.8",
		key: "qkgqxc"
	}],
	["path", {
		d: "M3.721 6.391a10 10 0 0 1 2.7-2.69",
		key: "1mcia2"
	}],
	["path", {
		d: "M6.391 20.279a10 10 0 0 1-2.69-2.7",
		key: "1fvljs"
	}]
]);
// node_modules/@base-ui/react/utils/getCssDimensions.mjs
function He(e) {
	let t = f(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = u(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r;
	return (c(n) !== a || c(r) !== o) && (n = a, r = o), {
		width: n,
		height: r
	};
}
// node_modules/@base-ui/react/navigation-menu/root/NavigationMenuRootContext.mjs
var U = /* @__PURE__ */ e(t(), 1), Ue = /*#__PURE__*/ U.createContext(void 0);
function W(e) {
	let t = U.useContext(Ue);
	if (t === void 0 && !e) throw Error(_(41));
	return t;
}
var G = /*#__PURE__*/ U.createContext(void 0);
function We() {
	return U.useContext(G);
}
// node_modules/@base-ui/react/navigation-menu/positioner/NavigationMenuPositionerCssVars.mjs
var K = /*#__PURE__*/ function(e) {
	return e.availableWidth = "--available-width", e.availableHeight = "--available-height", e.anchorWidth = "--anchor-width", e.anchorHeight = "--anchor-height", e.transformOrigin = "--transform-origin", e.positionerWidth = "--positioner-width", e.positionerHeight = "--positioner-height", e;
}({}), q = /*#__PURE__*/ function(e) {
	return e.popupWidth = "--popup-width", e.popupHeight = "--popup-height", e;
}({});
// node_modules/@base-ui/react/navigation-menu/utils/setSharedFixedSize.mjs
function Ge(e, t, n, r) {
	e.style.setProperty(q.popupWidth, `${n}px`), e.style.setProperty(q.popupHeight, `${r}px`), t.style.setProperty(K.positionerWidth, `${n}px`), t.style.setProperty(K.positionerHeight, `${r}px`);
}
// node_modules/@base-ui/react/navigation-menu/root/NavigationMenuRoot.mjs
var J = n(), Ke = /* @__PURE__ */ new Set([
	me,
	ge,
	_e
]);
function Y(e) {
	let t = parseFloat(e.style.getPropertyValue(K.positionerWidth)) || 0, n = parseFloat(e.style.getPropertyValue(K.positionerHeight)) || 0;
	return t <= 0 || n <= 0 ? null : {
		width: t,
		height: n
	};
}
var qe = /*#__PURE__*/ U.forwardRef(function(e, t) {
	let { defaultValue: n = null, value: r, onValueChange: i, actionsRef: a, delay: o = 50, closeDelay: s = 50, orientation: c = "horizontal", onOpenChangeComplete: l } = e, d = ce() != null, f = W(!0), [p, m] = v({
		controlled: r,
		default: n,
		name: "NavigationMenu",
		state: "value"
	}), h = p != null, g = U.useRef(void 0), _ = U.useRef(null), [S, C] = U.useState(null), [w, ee] = U.useState(null), [te, T] = U.useState(null), [ne, re] = U.useState(null), [ie, E] = U.useState(null), [ae, D] = U.useState(void 0), [O, se] = U.useState(!1), k = U.useRef(null), A = U.useRef(null), j = U.useRef(null), le = U.useRef(null), M = U.useRef(null), P = U.useRef(null), F = U.useRef({
		abortController: null,
		owner: null
	}), { mounted: de, setMounted: fe, transitionStatus: me } = I(h);
	b(() => {
		if (h || !S || !w) return;
		let e = Y(S);
		e && Ge(w, S, e.width, e.height);
	}, [
		h,
		w,
		S
	]), U.useEffect(() => {
		se(!1);
	}, [p]);
	let he = y((e, t) => {
		e ?? (g.current = t.reason), e !== p && i?.(e, t), t.isCanceled || (e ?? (E(null), D(void 0)), m(e), d && e == null && t.reason === "link-press" && f && f.setValue(null, t));
	}), ge = y(() => {
		let e = x(_.current), t = ue(e);
		!(g.current && Ke.has(g.current)) && u(k.current) && (t === x(w).body || N(w, t)) && w && (k.current.focus({ preventScroll: !0 }), k.current = void 0), fe(!1), l?.(!1), E(null), D(void 0), A.current = null, g.current = void 0;
	});
	U.useImperativeHandle(a, () => ({ unmount: ge }), [ge]), pe({
		enabled: !a,
		open: h,
		ref: { current: w },
		onComplete() {
			h || ge();
		}
	}), pe({
		enabled: !a,
		open: h,
		ref: { current: ne },
		onComplete() {
			h || ge();
		}
	});
	let L = h ? ie : null, _e = U.useMemo(() => ({
		open: h,
		value: p,
		setValue: he,
		mounted: de,
		transitionStatus: me,
		positionerElement: S,
		setPositionerElement: C,
		popupElement: w,
		setPopupElement: ee,
		viewportElement: te,
		setViewportElement: T,
		viewportTargetElement: ne,
		setViewportTargetElement: re,
		activationDirection: L,
		setActivationDirection: E,
		floatingRootContext: ae,
		setFloatingRootContext: D,
		currentContentRef: A,
		nested: d,
		rootRef: _,
		beforeInsideRef: j,
		afterInsideRef: le,
		beforeOutsideRef: M,
		afterOutsideRef: P,
		prevTriggerElementRef: k,
		popupAutoSizeResetRef: F,
		delay: o,
		closeDelay: s,
		orientation: c,
		viewportInert: O,
		setViewportInert: se
	}), [
		h,
		p,
		he,
		de,
		me,
		S,
		w,
		te,
		ne,
		L,
		ae,
		d,
		o,
		s,
		c,
		O
	]), ve = /*#__PURE__*/ (0, J.jsx)(Ue.Provider, {
		value: _e,
		children: /*#__PURE__*/ (0, J.jsx)(Je, {
			componentProps: e,
			forwardedRef: t,
			children: e.children
		})
	});
	return d ? ve : /*#__PURE__*/ (0, J.jsx)(oe, { children: ve });
});
function Je(e) {
	let { className: t, render: n, defaultValue: r, value: i, onValueChange: a, actionsRef: o, delay: s, closeDelay: c, orientation: l, onOpenChangeComplete: u, style: d, ...f } = e.componentProps, p = D(), { rootRef: m, nested: h, open: _ } = W(), v = {
		open: _,
		nested: h
	}, y = g(h ? "div" : "nav", e.componentProps, {
		state: v,
		ref: [e.forwardedRef, m],
		props: f
	});
	return /*#__PURE__*/ (0, J.jsx)(G.Provider, {
		value: p,
		children: /*#__PURE__*/ (0, J.jsx)(O, {
			id: p,
			children: y
		})
	});
}
// node_modules/@base-ui/react/navigation-menu/utils/constants.mjs
var Ye = "data-base-ui-navigation-menu-trigger", X = /*#__PURE__*/ U.createContext(void 0);
function Xe() {
	return U.useContext(X);
}
// node_modules/@base-ui/react/navigation-menu/list/NavigationMenuList.mjs
var Ze = /*#__PURE__*/ U.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...a } = e, o = We(), { orientation: s, open: c, floatingRootContext: l, positionerElement: u, value: d, closeDelay: f, viewportElement: p, nested: h } = W(), _ = U.useMemo(() => Ee(), []), v = l || _, y = u != null || d == null;
	we(v, {
		enabled: !!l && (u != null || p != null || d == null),
		closeDelay: f,
		nodeId: o
	});
	let b = A(v, {
		enabled: y,
		outsidePressEvent: "intentional",
		outsidePress(e) {
			return P(e)?.closest(`[${Ye}]`) === null;
		}
	}), x = l ? b : void 0, S = { open: c }, C = h ? m : { onKeyDown(e) {
		(s === "horizontal" && (e.key === "ArrowLeft" || e.key === "ArrowRight") || s === "vertical" && (e.key === "ArrowUp" || e.key === "ArrowDown")) && e.stopPropagation();
	} }, w = [
		x?.floating || m,
		C,
		a
	], ee = g("ul", e, {
		state: S,
		ref: t,
		props: w,
		enabled: h
	});
	return h ? /*#__PURE__*/ (0, J.jsx)(X.Provider, {
		value: x,
		children: ee
	}) : /*#__PURE__*/ (0, J.jsx)(X.Provider, {
		value: x,
		children: /*#__PURE__*/ (0, J.jsx)(R, {
			render: n,
			className: r,
			style: i,
			state: S,
			refs: [t],
			props: w,
			loopFocus: !1,
			orientation: s,
			tag: "ul"
		})
	});
}), Qe = /*#__PURE__*/ U.createContext(void 0);
function $e() {
	let e = U.useContext(Qe);
	if (!e) throw Error(_(39));
	return e;
}
// node_modules/@base-ui/react/navigation-menu/item/NavigationMenuItem.mjs
var et = /*#__PURE__*/ U.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, value: a, ...o } = e, s = B(), c = a ?? s, l = g("li", e, {
		ref: t,
		props: o
	}), u = U.useMemo(() => ({ value: c }), [c]);
	return /*#__PURE__*/ (0, J.jsx)(Qe.Provider, {
		value: u,
		children: l
	});
}), tt = /* @__PURE__ */ e(V(), 1), Z = {
	...j,
	...F,
	activationDirection(e) {
		return e ? { "data-activation-direction": e } : null;
	}
}, nt = /*#__PURE__*/ U.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, keepMounted: a = !1, ...o } = e, { mounted: s, viewportElement: c, value: l, activationDirection: u, currentContentRef: d, viewportTargetElement: f } = W(), { value: p } = $e(), h = We(), g = s && l === p, _ = U.useRef(null), [v, x] = U.useState(!1), [S, C] = U.useState(!1), { mounted: w, setMounted: ee, transitionStatus: te } = I(g);
	w && !s && ee(!1), pe({
		ref: _,
		open: g,
		onComplete() {
			g || ee(!1);
		}
	}), b(() => {
		g && _.current && (d.current = _.current);
	}, [g, d]);
	let T = {
		open: g,
		transitionStatus: te,
		activationDirection: u
	}, ne = y((e) => {
		e && g && (d.current = e);
	}), re = {
		onFocus(e) {
			P(e.nativeEvent)?.hasAttribute("data-base-ui-focus-guard") || C(!0);
		},
		onBlur(e) {
			N(e.currentTarget, e.relatedTarget) || C(!1);
		}
	}, ie = !g && w ? {
		style: {
			position: "absolute",
			top: 0,
			left: 0
		},
		inert: H(!S),
		...re
	} : re, E = f || c, ae = a && !w, D = a && !E && !v;
	return a && E && !v && x(!0), D ? /*#__PURE__*/ (0, J.jsx)(R, {
		render: n,
		className: r,
		style: i,
		state: T,
		refs: [t],
		props: [
			ie,
			{ hidden: !0 },
			o
		],
		stateAttributesMapping: Z
	}) : !E || !w && !a ? null : /*#__PURE__*/ tt.createPortal(/*#__PURE__*/ (0, J.jsx)(O, {
		id: h,
		children: /*#__PURE__*/ (0, J.jsx)(R, {
			render: n,
			className: r,
			style: i,
			state: T,
			refs: [
				t,
				_,
				ne
			],
			props: [
				ie,
				ae ? { hidden: !0 } : m,
				o
			],
			stateAttributesMapping: Z
		})
	}), E);
});
// node_modules/@base-ui/react/navigation-menu/utils/isOutsideMenuEvent.mjs
function rt({ currentTarget: e, relatedTarget: t }, n) {
	let { popupElement: r, rootRef: i, tree: a, nodeId: o } = n, s = a ? te(a.nodesRef.current, o).some((e) => N(e.context?.elements.floating, t)) : [];
	return r ? !N(r, e) && !N(r, t) && !N(i.current, t) && !s && !(N(r, t) && t?.hasAttribute("data-base-ui-focus-guard")) : !N(i.current, t) && !s;
}
// node_modules/@base-ui/react/navigation-menu/trigger/NavigationMenuTrigger.mjs
var it = {
	width: 0,
	height: 0
}, at = /*#__PURE__*/ U.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, nativeButton: a = !0, disabled: o, ...s } = e, { value: c, setValue: f, mounted: m, open: g, positionerElement: _, setActivationDirection: v, setFloatingRootContext: x, popupElement: C, viewportElement: te, transitionStatus: T, rootRef: ne, beforeOutsideRef: re, afterOutsideRef: ae, afterInsideRef: D, beforeInsideRef: oe, prevTriggerElementRef: O, popupAutoSizeResetRef: A, currentContentRef: j, delay: ce, closeDelay: le, orientation: P, setViewportInert: ue, nested: F } = W(), { value: I } = $e(), pe = We(), ge = M(), ve = Xe(), we = ze(), R = Oe(), Ee = ke(), z = ke(), B = ke(), V = ke(), [H, Ne] = U.useState(null), [Pe, Fe] = U.useState(!0), [Ie, Be] = U.useState(""), Ve = U.useRef(null), Ue = U.useRef(!1), G = U.useRef(it), Ke = U.useRef(!1), Y = g && c === I, qe = Ae(Y), Je = (_ != null || c == null) && !o, X = _ || te, Ze = (X != null || c == null) && !o, Qe = fe(C, !1, !1), et = U.useCallback((e) => {
		Ve.current = e, Ne(e);
	}, []), Z = y((e = !1) => {
		(e || A.current.owner === I) && (A.current.abortController?.abort(), A.current.abortController = null, A.current.owner = null);
	});
	b(() => {
		Y || (z.cancel(), V.cancel(), Z());
	}, [
		Y,
		z,
		V,
		Z
	]);
	function nt() {
		C && (C.style.setProperty(q.popupWidth, "auto"), C.style.setProperty(q.popupHeight, "auto"));
	}
	function at() {
		C && _ && (C.style.removeProperty(q.popupWidth), C.style.removeProperty(q.popupHeight), _.style.removeProperty(K.positionerWidth), _.style.removeProperty(K.positionerHeight));
	}
	function ot() {
		Z(!0);
		let e = new AbortController();
		A.current.abortController = e, A.current.owner = I, Qe(() => {
			A.current.abortController === e && A.current.owner === I && (A.current.abortController = null, A.current.owner = null, nt());
		}, e.signal);
	}
	let ct = y((e, t, n = {}) => {
		if (!C || !_) return;
		Z(!0);
		let { syncPositioner: r = !1 } = n;
		at();
		let { width: i, height: a } = He(C), o = i || G.current.width, s = a || G.current.height;
		(t === 0 || e === 0) && (e = o, t = s), C.style.setProperty(q.popupWidth, `${e}px`), C.style.setProperty(q.popupHeight, `${t}px`), _.style.setProperty(K.positionerWidth, `${r ? e : o}px`), _.style.setProperty(K.positionerHeight, `${r ? t : s}px`), V.request(() => {
			qe.current && (C.style.setProperty(q.popupWidth, `${o}px`), C.style.setProperty(q.popupHeight, `${s}px`), r && (_.style.setProperty(K.positionerWidth, `${o}px`), _.style.setProperty(K.positionerHeight, `${s}px`)), ot());
		});
	}), lt = y((e, t) => {
		C && _ && (V.cancel(), z.cancel(), Z(!0), e !== 0 && t !== 0 && (Ge(C, _, e, t), z.request(() => {
			z.request(() => {
				at();
				let { width: n, height: r } = He(C), i = n || e || G.current.width, a = r || t || G.current.height;
				Ge(C, _, e, t), V.request(() => {
					qe.current && (Ge(C, _, i, a), ot());
				});
			});
		})));
	}), ut = y(() => {
		if (!C || !_) return;
		V.cancel(), Z(!0), at();
		let { width: e, height: t } = He(C);
		e !== 0 && t !== 0 && (G.current = {
			width: e,
			height: t
		}, nt(), _.style.setProperty(K.positionerWidth, `${e}px`), _.style.setProperty(K.positionerHeight, `${t}px`));
	}), dt = y(() => {
		if (!C) return {
			size: G.current,
			syncPositioner: !1
		};
		let e = C.style.getPropertyValue(q.popupWidth), t = C.style.getPropertyValue(q.popupHeight);
		return e === "" || e === "auto" || t === "" || t === "auto" ? {
			size: G.current,
			syncPositioner: !1
		} : {
			size: {
				width: C.offsetWidth || G.current.width,
				height: C.offsetHeight || G.current.height
			},
			syncPositioner: !0
		};
	});
	U.useEffect(() => {
		g || (R.clear(), z.cancel(), B.cancel(), V.cancel(), Z(!0), Ke.current = !1, Be(""));
	}, [
		R,
		g,
		z,
		B,
		V,
		Z
	]), U.useEffect(() => {
		m || (G.current = it);
	}, [m]), b(() => {
		if (!C || typeof ResizeObserver != "function") return;
		let e = new ResizeObserver(() => {
			G.current = {
				width: C.offsetWidth,
				height: C.offsetHeight
			};
		});
		return e.observe(C), () => {
			e.disconnect();
		};
	}, [C]), U.useEffect(() => {
		if (!g || !Y || !C || !_) return;
		let e = d(_);
		function t() {
			B.cancel(), B.request(ut);
		}
		let n = De(e, "resize", t);
		return () => {
			B.cancel(), n();
		};
	}, [
		g,
		Y,
		C,
		_,
		B,
		ut
	]), U.useEffect(() => {
		let e = j.current;
		if (!e || !C || !Y || typeof MutationObserver != "function") return;
		let t = new MutationObserver(() => {
			if (T === "starting" || C.hasAttribute(de.startingStyle)) {
				ut();
				return;
			}
			let { size: e, syncPositioner: t } = dt();
			t ? lt(e.width, e.height) : ct(e.width, e.height);
		});
		return t.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0,
			attributes: !0,
			attributeFilter: ["hidden"]
		}), () => {
			t.disconnect();
		};
	}, [
		j,
		C,
		Y,
		T,
		dt,
		lt,
		ct,
		ut
	]), U.useEffect(() => (Y && g && C && Ue.current && (Ue.current = !1, Ee.request(() => {
		re.current?.focus();
	})), () => {
		Ee.cancel();
	}), [
		re,
		Ee,
		Y,
		g,
		C
	]), b(() => {
		if (qe.current && g && C) {
			let e = j.current?.querySelector("[data-nested]") != null;
			if (T === "starting" && e) return V.request(ut), () => {
				V.cancel();
			};
			if (Ke.current) {
				Ke.current = !1;
				return;
			}
			let { width: t, height: n } = He(C);
			ct(t, n);
		}
	}, [
		j,
		ct,
		qe,
		g,
		C,
		V,
		ut,
		T
	]);
	function ft(e, t) {
		let n = t.reason === me;
		if (!Je || Ie === "touch" && n || !e && c !== I) return;
		function r() {
			n && (Fe(!0), R.clear(), R.start(500, () => {
				Fe(!1);
			})), e ? f(I, t) : (f(null, t), Be(""));
		}
		n ? tt.flushSync(r) : r();
	}
	let Q = Me({
		open: g,
		onOpenChange: ft,
		elements: {
			reference: H,
			floating: X
		}
	}), $ = Ce(Q), pt = Ie !== "touch";
	U.useEffect(() => {
		g || (Q.context.dataRef.current.openEvent = void 0, $.pointerType = void 0, $.interactedInside = !1, $.restTimeoutPending = !1, $.openChangeTimeout.clear(), $.restTimeout.clear(), be($));
	}, [
		Q,
		$,
		g
	]);
	let mt = y(() => !F || _ || !Ve.current || !X ? null : st(Ve.current, X, pe));
	function ht() {
		return !F || !_ ? Ve.current?.closest("ul") ?? null : null;
	}
	let gt = Se(Q, {
		enabled: Ze,
		move: !1,
		handleClose: Te({
			blockPointerEvents: pt,
			getScope: ht
		}),
		restMs: m && _ ? 0 : ce,
		delay: { close: le },
		triggerElementRef: Ve,
		getHandleCloseContext: mt
	}), _t = U.useMemo(() => gt ? { reference: gt } : void 0, [gt]), vt = je(Q, {
		enabled: Je,
		stickIfOpen: Pe,
		toggle: Y
	}), yt = U.useMemo(() => h(vt.reference, _t?.reference), [vt.reference, _t]);
	b(() => {
		Y && (x(Q), O.current = H);
	}, [
		Y,
		Q,
		x,
		O,
		H
	]);
	function bt(e) {
		tt.flushSync(() => {
			let t = u(e.currentTarget) ? e.currentTarget : null, n = O.current?.getBoundingClientRect();
			if (m && n && H) {
				let e = H.getBoundingClientRect(), t = e.left > n.left, r = e.top > n.top;
				P === "horizontal" && e.left !== n.left ? v(t ? "right" : "left") : P === "vertical" && e.top !== n.top && v(r ? "down" : "up");
			}
			if (e.type !== "click" && c != null && (Q.context.dataRef.current.openEvent = void 0), (Ie !== "touch" || e.type === "click") && (c != null && e.type !== "keydown" && f(I, L(e.type === "mouseenter" ? me : he, e.nativeEvent)), e.type === "mouseenter" && pt && (!F || !_) && X && t)) {
				let e = () => {
					let e = ht() ?? t.ownerDocument.body;
					xe($, {
						scopeElement: e,
						referenceElement: t,
						floatingElement: X
					});
				};
				c != null && c !== I ? queueMicrotask(e) : e();
			}
		});
	}
	let xt = y((e) => {
		if (o) return;
		if (!C || !_) {
			bt(e);
			return;
		}
		let { width: t, height: n } = He(C), r = c != null && c !== I && (e.type === "click" || Ie !== "touch");
		bt(e), r && (Ke.current = !0), ct(t, n);
	}), St = { open: Y };
	function Ct(e) {
		Be(e.pointerType);
	}
	function wt(e) {
		Ct(e), be($);
	}
	let Tt = {
		tabIndex: 0,
		onMouseEnter: xt,
		onClick: xt,
		onPointerEnter: Ct,
		onPointerDown: wt,
		"aria-expanded": Y,
		"aria-controls": Y ? C?.id : void 0,
		[Ye]: "",
		onFocus() {
			Y && ue(!1);
		},
		onMouseMove() {
			Ue.current = !1;
		},
		onKeyDown(e) {
			if (Ue.current = !0, F) return;
			let t = we === "rtl" ? "ArrowLeft" : "ArrowRight", n = P === "horizontal" && e.key === "ArrowDown", r = P === "vertical" && e.key === t;
			(n || r) && (f(I, L(ye, e.nativeEvent)), xt(e), l(e));
		},
		onBlur(e) {
			_ && C && rt({
				currentTarget: e.currentTarget,
				relatedTarget: e.relatedTarget
			}, {
				popupElement: C,
				rootRef: ne,
				tree: ge,
				nodeId: pe
			}) && f(null, L(_e, e.nativeEvent));
		}
	}, { getButtonProps: Et, buttonRef: Dt } = Re({
		disabled: o,
		focusableWhenDisabled: !0,
		native: a
	}), Ot = X;
	return /*#__PURE__*/ (0, J.jsxs)(U.Fragment, { children: [/*#__PURE__*/ (0, J.jsx)(Le, {
		tag: "button",
		render: n,
		className: r,
		style: i,
		state: St,
		stateAttributesMapping: se,
		refs: [
			t,
			et,
			Dt
		],
		props: [
			yt,
			ve?.reference || p,
			Tt,
			s,
			Et
		]
	}), Y && /*#__PURE__*/ (0, J.jsxs)(U.Fragment, { children: [
		/*#__PURE__*/ (0, J.jsx)(E, {
			ref: re,
			onFocus: (e) => {
				Ot && S(e, Ot) ? oe.current?.focus() : ee(H)?.focus();
			}
		}),
		/*#__PURE__*/ (0, J.jsx)("span", {
			"aria-owns": te?.id,
			style: k
		}),
		/*#__PURE__*/ (0, J.jsx)(E, {
			ref: ae,
			onFocus: (e) => {
				if (Ot && S(e, Ot)) tt.flushSync(() => {
					ue(!1);
				}), (D.current || H)?.focus();
				else {
					let t = w(H);
					F && !_ && Ot && t && N(Ot, t) && (t = ie(D.current)), t?.focus(), F && !_ || N(ne.current, t) || f(null, L("focus-out", e.nativeEvent));
				}
			}
		})
	] })] });
});
function ot(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = n.left + n.width / 2, a = n.top + n.height / 2, o = r.left + r.width / 2, s = r.top + r.height / 2, c = o - i, l = s - a;
	return Math.abs(c) >= Math.abs(l) ? c >= 0 ? "right" : "left" : l >= 0 ? "bottom" : "top";
}
function st(e, t, n) {
	return {
		placement: ot(e, t),
		elements: {
			domReference: e,
			floating: t
		},
		nodeId: n
	};
}
// node_modules/@base-ui/react/navigation-menu/portal/NavigationMenuPortalContext.mjs
var ct = /*#__PURE__*/ U.createContext(void 0);
function lt() {
	let e = U.useContext(ct);
	if (e === void 0) throw Error(_(40));
	return e;
}
// node_modules/@base-ui/react/navigation-menu/portal/NavigationMenuPortal.mjs
var ut = /*#__PURE__*/ U.forwardRef(function(e, t) {
	let { keepMounted: n = !1, ...r } = e, { mounted: i } = W();
	return i || n ? /*#__PURE__*/ (0, J.jsx)(ct.Provider, {
		value: n,
		children: /*#__PURE__*/ (0, J.jsx)(le, {
			ref: t,
			...r
		})
	}) : null;
}), dt = /*#__PURE__*/ U.createContext(void 0);
function ft(e = !1) {
	let t = U.useContext(dt);
	if (!t && !e) throw Error(_(42));
	return t;
}
// node_modules/@base-ui/react/navigation-menu/positioner/NavigationMenuPositioner.mjs
var Q = Ee(), $ = /*#__PURE__*/ U.forwardRef(function(e, t) {
	let { open: n, mounted: r, positionerElement: i, setPositionerElement: a, floatingRootContext: o, nested: s, transitionStatus: c } = W(), { className: l, render: u, anchor: f, positionMethod: p = "absolute", side: m = "bottom", align: h = "center", sideOffset: g = 0, alignOffset: _ = 0, collisionBoundary: v = "clipping-ancestors", collisionPadding: y = 5, collisionAvoidance: b = s ? ne : C, arrowPadding: x = 5, sticky: w = !1, disableAnchorTracking: ee = !1, style: te, ...ie } = e, E = lt(), D = We(), oe = Oe(), O = Oe(), [se, k] = U.useState(n), A = U.useRef(n), j = U.useRef(null), ce = U.useRef(null);
	U.useEffect(() => {
		if (!i) return;
		function e(e) {
			i && S(e) && (e.type === "focusin" ? re : T)(i);
		}
		return ae(De(i, "focusin", e, !0), De(i, "focusout", e, !0));
	}, [i]);
	let le = (o || Q).useState("domReferenceElement"), M = Pe({
		anchor: f ?? le ?? ce,
		positionMethod: p,
		mounted: r,
		side: m,
		sideOffset: g,
		align: h,
		alignOffset: _,
		arrowPadding: x,
		collisionBoundary: v,
		collisionPadding: y,
		sticky: w,
		disableAnchorTracking: ee,
		keepMounted: E,
		floatingRootContext: o,
		collisionAvoidance: b,
		nodeId: D,
		adaptiveOrigin: Fe
	}), N = {
		open: n,
		side: M.side,
		align: M.align,
		anchorHidden: M.anchorHidden,
		instant: se
	};
	U.useEffect(() => {
		if (!n) return;
		A.current && oe.start(0, () => {
			A.current = !1, O.isStarted() || k(!1);
		});
		function e() {
			tt.flushSync(() => {
				k(!0);
			}), O.start(100, () => {
				k(!1);
			});
		}
		let t = d(i);
		return De(t, "resize", e);
	}, [
		n,
		oe,
		O,
		i
	]);
	let P = Ie(e, N, {
		styles: M.positionerStyles,
		transitionStatus: c,
		props: ie,
		refs: [
			t,
			a,
			j
		],
		hidden: !r,
		inert: !n
	});
	return /*#__PURE__*/ (0, J.jsx)(dt.Provider, {
		value: M,
		children: P
	});
}), pt = Ee();
function mt({ children: e }) {
	let { beforeInsideRef: t, beforeOutsideRef: n, afterInsideRef: r, afterOutsideRef: i, positionerElement: a, viewportElement: o, floatingRootContext: s } = W(), c = !!ft(!0), l = a || o;
	return !s && !c ? e : /*#__PURE__*/ (0, J.jsxs)(U.Fragment, { children: [
		/*#__PURE__*/ (0, J.jsx)(E, {
			ref: t,
			onFocus: (e) => {
				l && S(e, l) ? w(l)?.focus() : n.current?.focus();
			}
		}),
		e,
		/*#__PURE__*/ (0, J.jsx)(E, {
			ref: r,
			onFocus: (e) => {
				l && S(e, l) ? ee(l)?.focus() : i.current?.focus();
			}
		})
	] });
}
var ht = /*#__PURE__*/ U.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, children: a, id: o, ...s } = e, c = z(o), { setViewportElement: l, setViewportTargetElement: u, floatingRootContext: d, prevTriggerElementRef: f, viewportInert: p, setViewportInert: m } = W(), h = !!ft(!0), _ = (d || pt).useState("domReferenceElement");
	b(() => {
		_ && (f.current = _);
	}, [_, f]);
	let v = g("div", e, {
		ref: [t, l],
		props: [{
			id: c,
			onBlur(e) {
				let t = e.relatedTarget, n = e.currentTarget;
				t && !N(n, t) && t !== _ && m(!0);
			},
			...!h && p && { inert: H(!0) },
			children: h ? a : /*#__PURE__*/ (0, J.jsx)(mt, { children: /*#__PURE__*/ (0, J.jsx)("div", {
				ref: u,
				children: a
			}) })
		}, s]
	});
	return h ? /*#__PURE__*/ (0, J.jsx)(mt, { children: v }) : v;
}), gt = {
	...j,
	...F
}, _t = /*#__PURE__*/ U.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, id: a, ...o } = e, { open: s, transitionStatus: c, setPopupElement: l } = W(), u = ft(), d = ze(), f = B(a), p = {
		open: s,
		transitionStatus: c,
		side: u.side,
		align: u.align,
		anchorHidden: u.anchorHidden
	}, m = u.side === "left";
	m ||= d === "rtl" ? u.side === "inline-end" : u.side === "inline-start";
	let h = u.side === "top" || m;
	return g("nav", e, {
		state: p,
		ref: [t, l],
		props: [
			{
				id: f,
				tabIndex: -1,
				style: h ? {
					position: "absolute",
					[u.side === "top" ? "bottom" : "top"]: "0",
					[m ? "right" : "left"]: "0"
				} : {}
			},
			Ne(c),
			o
		],
		stateAttributesMapping: gt
	});
}), vt = /*#__PURE__*/ U.forwardRef(function(e, t) {
	let { className: n, render: r, active: i = !1, closeOnClick: a = !1, style: o, ...s } = e, { setValue: c, popupElement: l, positionerElement: u, rootRef: d } = W(), f = We(), p = M();
	return /*#__PURE__*/ (0, J.jsx)(Le, {
		tag: "a",
		render: r,
		className: n,
		style: o,
		state: { active: i },
		refs: [t],
		props: [{
			"aria-current": i ? "page" : void 0,
			tabIndex: void 0,
			onClick(e) {
				a && c(null, L(ve, e.nativeEvent));
			},
			onBlur(e) {
				u && l && rt({
					currentTarget: e.currentTarget,
					relatedTarget: e.relatedTarget
				}, {
					popupElement: l,
					rootRef: d,
					tree: p,
					nodeId: f
				}) && c(null, L(_e, e.nativeEvent));
			}
		}, s]
	});
});
// next-link.tsx
function yt({ href: e, ...t }) {
	return /* @__PURE__ */ (0, J.jsx)("a", {
		...t,
		href: e?.startsWith("/") ? "https://ui.shadcn.com" + e : e
	});
}
// upstream/registry/bases/base/ui/navigation-menu.tsx
function bt({ align: e = "start", className: t, children: n, ...r }) {
	return /* @__PURE__ */ (0, J.jsxs)(qe, {
		"data-slot": "navigation-menu",
		className: o("cn-navigation-menu group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", t),
		...r,
		children: [n, /* @__PURE__ */ (0, J.jsx)(Et, { align: e })]
	});
}
function xt({ className: e, ...t }) {
	return /* @__PURE__ */ (0, J.jsx)(Ze, {
		"data-slot": "navigation-menu-list",
		className: o("cn-navigation-menu-list group flex flex-1 list-none items-center justify-center", e),
		...t
	});
}
function St({ className: e, ...t }) {
	return /* @__PURE__ */ (0, J.jsx)(et, {
		"data-slot": "navigation-menu-item",
		className: o("cn-navigation-menu-item relative", e),
		...t
	});
}
var Ct = a("cn-navigation-menu-trigger group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center outline-none disabled:pointer-events-none");
function wt({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, J.jsxs)(at, {
		"data-slot": "navigation-menu-trigger",
		className: o(Ct(), "group", e),
		...n,
		children: [
			t,
			" ",
			/* @__PURE__ */ (0, J.jsx)(s, {
				lucide: "ChevronDownIcon",
				tabler: "IconChevronDown",
				hugeicons: "ArrowDown01Icon",
				phosphor: "CaretDownIcon",
				remixicon: "RiArrowDownSLine",
				className: "cn-navigation-menu-trigger-icon",
				"aria-hidden": "true"
			})
		]
	});
}
function Tt({ className: e, ...t }) {
	return /* @__PURE__ */ (0, J.jsx)(nt, {
		"data-slot": "navigation-menu-content",
		className: o("cn-navigation-menu-content data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%] data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%] h-full w-auto transition-[opacity,transform,translate] duration-[0.35s] data-ending-style:opacity-0 data-starting-style:opacity-0 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none", e),
		...t
	});
}
function Et({ className: e, side: t = "bottom", sideOffset: n = 8, align: r = "start", alignOffset: i = 0, ...a }) {
	return /* @__PURE__ */ (0, J.jsx)(ut, { children: /* @__PURE__ */ (0, J.jsx)($, {
		side: t,
		sideOffset: n,
		align: r,
		alignOffset: i,
		className: o("cn-navigation-menu-positioner isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[0.35s] data-instant:transition-none", e),
		...a,
		children: /* @__PURE__ */ (0, J.jsx)(_t, {
			className: "cn-navigation-menu-popup data-[ending-style]:easing-[ease] xs:w-(--popup-width) relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)]",
			children: /* @__PURE__ */ (0, J.jsx)(ht, { className: "relative size-full overflow-hidden" })
		})
	}) });
}
function Dt({ className: e, ...t }) {
	return /* @__PURE__ */ (0, J.jsx)(vt, {
		"data-slot": "navigation-menu-link",
		className: o("cn-navigation-menu-link", e),
		...t
	});
}
// upstream/examples/base/navigation-menu-demo.tsx
var Ot = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description: "A modal dialog that interrupts the user with important content and expects a response."
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description: "For sighted users to preview content available behind a link."
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content."
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description: "A set of layered sections of content—known as tab panels—that are displayed one at a time."
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
	}
];
function kt() {
	return /* @__PURE__ */ (0, J.jsx)(bt, { children: /* @__PURE__ */ (0, J.jsxs)(xt, { children: [
		/* @__PURE__ */ (0, J.jsxs)(St, { children: [/* @__PURE__ */ (0, J.jsx)(wt, { children: "Getting started" }), /* @__PURE__ */ (0, J.jsx)(Tt, { children: /* @__PURE__ */ (0, J.jsxs)("ul", {
			className: "w-96",
			children: [
				/* @__PURE__ */ (0, J.jsx)(At, {
					href: "/docs",
					title: "Introduction",
					children: "Re-usable components built with Tailwind CSS."
				}),
				/* @__PURE__ */ (0, J.jsx)(At, {
					href: "/docs/installation",
					title: "Installation",
					children: "How to install dependencies and structure your app."
				}),
				/* @__PURE__ */ (0, J.jsx)(At, {
					href: "/docs/primitives/typography",
					title: "Typography",
					children: "Styles for headings, paragraphs, lists...etc"
				})
			]
		}) })] }),
		/* @__PURE__ */ (0, J.jsxs)(St, {
			className: "hidden md:flex",
			children: [/* @__PURE__ */ (0, J.jsx)(wt, { children: "Components" }), /* @__PURE__ */ (0, J.jsx)(Tt, { children: /* @__PURE__ */ (0, J.jsx)("ul", {
				className: "grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
				children: Ot.map((e) => /* @__PURE__ */ (0, J.jsx)(At, {
					title: e.title,
					href: e.href,
					children: e.description
				}, e.title))
			}) })]
		}),
		/* @__PURE__ */ (0, J.jsxs)(St, { children: [/* @__PURE__ */ (0, J.jsx)(wt, { children: "With Icon" }), /* @__PURE__ */ (0, J.jsx)(Tt, { children: /* @__PURE__ */ (0, J.jsx)("ul", {
			className: "grid w-[200px]",
			children: /* @__PURE__ */ (0, J.jsxs)("li", { children: [
				/* @__PURE__ */ (0, J.jsxs)(Dt, {
					render: /* @__PURE__ */ (0, J.jsx)(yt, {
						href: "#",
						className: "flex-row items-center gap-2"
					}),
					children: [/* @__PURE__ */ (0, J.jsx)(Be, {}), "Backlog"]
				}),
				/* @__PURE__ */ (0, J.jsxs)(Dt, {
					render: /* @__PURE__ */ (0, J.jsx)(yt, {
						href: "#",
						className: "flex-row items-center gap-2"
					}),
					children: [/* @__PURE__ */ (0, J.jsx)(Ve, {}), "To Do"]
				}),
				/* @__PURE__ */ (0, J.jsxs)(Dt, {
					render: /* @__PURE__ */ (0, J.jsx)(yt, {
						href: "#",
						className: "flex-row items-center gap-2"
					}),
					children: [/* @__PURE__ */ (0, J.jsx)(i, {}), "Done"]
				})
			] })
		}) })] }),
		/* @__PURE__ */ (0, J.jsx)(St, { children: /* @__PURE__ */ (0, J.jsx)(Dt, {
			render: /* @__PURE__ */ (0, J.jsx)(yt, { href: "/docs" }),
			className: Ct(),
			children: "Docs"
		}) })
	] }) });
}
function At({ title: e, children: t, href: n, ...r }) {
	return /* @__PURE__ */ (0, J.jsx)("li", {
		...r,
		children: /* @__PURE__ */ (0, J.jsx)(Dt, {
			render: /* @__PURE__ */ (0, J.jsx)(yt, { href: n }),
			children: /* @__PURE__ */ (0, J.jsxs)("div", {
				className: "flex flex-col gap-1 text-sm",
				children: [/* @__PURE__ */ (0, J.jsx)("div", {
					className: "leading-none font-medium",
					children: e
				}), /* @__PURE__ */ (0, J.jsx)("div", {
					className: "line-clamp-2 text-muted-foreground",
					children: t
				})]
			})
		})
	});
}
export { kt as default };
