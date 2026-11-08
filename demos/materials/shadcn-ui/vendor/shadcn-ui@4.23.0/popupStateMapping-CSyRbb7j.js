import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./react-dom-BasjwewA.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
import { t as i } from "./useStableCallback-BmDujACN.js";
import { c as a, d as o, o as s, s as c, t as l, u } from "./useRenderElement-Bc91YjHo.js";
import { t as d } from "./useIsoLayoutEffect-B0B6th0o.js";
import { n as f } from "./useBaseUiId-BwhhMxTY.js";
import { O as p, S as m, l as h, t as g } from "./createBaseUIEventDetails-DG51vPHx.js";
import { i as _ } from "./useOpenChangeComplete-BfJk_bnM.js";
import { a as v, c as y, d as b, f as x, g as S, m as C, p as ee, t as te } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as w } from "./addEventListener-EiVbnOnq.js";
import { t as T } from "./owner-C-FapX6G.js";
import { A as ne, F as E, O as re, a as ie } from "./composite-BYPOq3H3.js";
import { n as ae } from "./engine-DPfrNvZF.js";
import { n as D, t as oe } from "./useTimeout-CP4j_cva.js";
import { n as O, r as se, t as k } from "./shadowDom-D66trjQm.js";
import { i as ce, n as le } from "./element-DbCN1dg9.js";
import { t as ue } from "./visuallyHidden-DvzvoEuP.js";
import { t as A } from "./shim-CTUSOuUn.js";
import { t as j } from "./with-selector-CUW-qLSb.js";
// node_modules/@base-ui/utils/platform/screen-reader.mjs
var M = E, N = /* @__PURE__ */ e(t(), 1), P = /* @__PURE__ */ e(n(), 1);
function F(...e) {
	return () => {
		for (let t = 0; t < e.length; t += 1) {
			let n = e[t];
			n && n();
		}
	};
}
// node_modules/@base-ui/react/utils/FocusGuard.mjs
var I = r(), L = /*#__PURE__*/ N.forwardRef(function(e, t) {
	let [n, r] = N.useState();
	d(() => {
		M && ae && r("button");
	}, []);
	let i = {
		tabIndex: 0,
		role: n
	};
	return /*#__PURE__*/ (0, I.jsx)("span", {
		...e,
		ref: t,
		style: ue,
		"aria-hidden": !n || void 0,
		...i,
		"data-base-ui-focus-guard": ""
	});
}), R = "a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable=\"false\"]),audio[controls],video[controls]";
function z(e) {
	let t = e.assignedSlot;
	if (t) return t;
	if (e.parentElement) return e.parentElement;
	let n = e.getRootNode();
	return S(n) ? n.host : null;
}
function B(e) {
	for (let t of Array.from(e.children)) if (v(t) === "summary") return t;
	return null;
}
function V(e, t) {
	let n = B(t);
	return !!n && (e === n || O(n, e));
}
function H(e) {
	let t = e ? v(e) : "";
	return e != null && e.matches(R) && (t !== "summary" || e.parentElement != null && v(e.parentElement) === "details" && B(e.parentElement) === e) && (t !== "details" || B(e) == null) && (t !== "input" || e.type !== "hidden");
}
function U(e) {
	if (!H(e) || !e.isConnected || e.matches(":disabled")) return !1;
	for (let t = e; t; t = z(t)) {
		let n = t !== e, r = v(t) === "slot";
		if (t.hasAttribute("inert") || n && v(t) === "details" && !t.open && !V(e, t) || t.hasAttribute("hidden") || !r && !W(t, n)) return !1;
	}
	return !0;
}
function W(e, t) {
	let n = te(e);
	return t ? n.display !== "none" : ie(e, n);
}
function G(e) {
	let t = e.tabIndex;
	if (t < 0) {
		let t = v(e);
		if (t === "details" || t === "audio" || t === "video" || x(e) && e.isContentEditable) return 0;
	}
	return t;
}
function K(e) {
	if (v(e) !== "input") return null;
	let t = e;
	return t.type === "radio" && t.name !== "" ? t : null;
}
function q(e, t) {
	let n = K(e);
	if (!n) return !0;
	let r = t.find((e) => {
		let t = K(e);
		return t?.name === n.name && t.form === n.form && t.checked;
	});
	return r ? r === n : t.find((e) => {
		let t = K(e);
		return t?.name === n.name && t.form === n.form;
	}) === n;
}
function J(e) {
	if (x(e) && v(e) === "slot") {
		let t = e.assignedElements({ flatten: !0 });
		if (t.length > 0) return t;
	}
	return x(e) && e.shadowRoot ? Array.from(e.shadowRoot.children) : Array.from(e.children);
}
function Y(e, t) {
	J(e).forEach((e) => {
		H(e) && t.push(e), Y(e, t);
	});
}
function de(e, t, n) {
	J(e).forEach((e) => {
		x(e) && e.matches(t) && n.push(e), de(e, t, n);
	});
}
function fe(e) {
	return U(e) && G(e) >= 0;
}
function pe(e) {
	let t = [];
	return Y(e, t), t.filter(U);
}
function X(e) {
	let t = pe(e);
	return t.filter((e) => G(e) >= 0 && q(e, t));
}
function me(e, t) {
	let n = X(e), r = n.length;
	if (r === 0) return;
	let i = k(T(e)), a = n.indexOf(i);
	return n[a === -1 ? t === 1 ? 0 : r - 1 : a + t];
}
function he(e) {
	return me(T(e).body, 1) || e;
}
function ge(e) {
	return me(T(e).body, -1) || e;
}
function _e(e, t) {
	if (!e) return null;
	let n = X(T(e).body), r = n.length;
	if (r === 0) return null;
	let i = n.indexOf(e);
	return i === -1 ? null : n[(i + t + r) % r];
}
function ve(e) {
	return _e(e, 1);
}
function ye(e) {
	return _e(e, -1);
}
function Z(e, t) {
	let n = t || e.currentTarget, r = e.relatedTarget;
	return !r || !O(n, r);
}
function be(e) {
	X(e).forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	});
}
function xe(e) {
	let t = [];
	de(e, "[data-tabindex]", t), t.forEach((e) => {
		let t = e.dataset.tabindex;
		delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
	});
}
// node_modules/@base-ui/react/floating-ui-react/utils/nodes.mjs
function Q(e, t, n = !0) {
	return e.filter((e) => e.parentId === t).flatMap((t) => [...!n || t.context?.open ? [t] : [], ...Q(e, t.id, n)]);
}
function Se(e, t) {
	let n = [], r = e.find((e) => e.id === t)?.parentId;
	for (; r;) {
		let t = e.find((e) => e.id === r);
		r = t?.parentId, t && (n = n.concat(t));
	}
	return n;
}
// node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
function Ce(e) {
	return `data-base-ui-${e}`;
}
// node_modules/@base-ui/react/internals/constants.mjs
var we = { style: { transition: "none" } }, Te = "data-base-ui-click-trigger", Ee = "[data-base-ui-swipe-ignore]", De = { fallbackAxisSide: "none" }, Oe = { fallbackAxisSide: "end" }, ke = {
	clipPath: "inset(50%)",
	position: "fixed",
	top: 0,
	left: 0
}, Ae = /*#__PURE__*/ N.createContext(null), je = () => N.useContext(Ae), Me = Ce("portal");
function Ne(e = {}) {
	let { ref: t, container: n, componentProps: r = s, elementProps: a } = e, o = f(), c = je()?.portalNode, [u, p] = N.useState(null), [m, h] = N.useState(null), g = i((e) => {
		e !== null && h(e);
	}), _ = N.useRef(null);
	d(() => {
		if (n === null) {
			_.current && (_.current = null, h(null), p(null));
			return;
		}
		if (o == null) return;
		let e = (n && (C(n) ? n : n.current)) ?? c ?? document.body;
		e == null ? _.current && (_.current = null, h(null), p(null)) : _.current !== e && (_.current = e, h(null), p(e));
	}, [
		n,
		c,
		o
	]);
	let v = l("div", r, {
		ref: [t, g],
		props: [{
			id: o,
			[Me]: ""
		}, a]
	});
	return {
		portalNode: m,
		portalSubtree: u && v ? /*#__PURE__*/ P.createPortal(v, u) : null
	};
}
var Pe = /*#__PURE__*/ N.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, children: a, container: o, renderGuards: s, ...c } = e, { portalNode: l, portalSubtree: u } = Ne({
		container: o,
		ref: t,
		componentProps: e,
		elementProps: c
	}), f = N.useRef(null), p = N.useRef(null), m = N.useRef(null), h = N.useRef(null), [_, v] = N.useState(null), y = N.useRef(!1), b = _?.modal, x = _?.open, S = typeof s == "boolean" ? s : !!_ && !_.modal && _.open && !!l;
	N.useEffect(() => {
		if (!l || b) return;
		function e(e) {
			l && e.relatedTarget && Z(e) && (e.type === "focusin" ? y.current &&= (xe(l), !1) : (be(l), y.current = !0));
		}
		return F(w(l, "focusin", e, !0), w(l, "focusout", e, !0));
	}, [l, b]), d(() => {
		l && x === !0 && y.current && (xe(l), y.current = !1);
	}, [x, l]);
	let C = N.useMemo(() => ({
		beforeOutsideRef: f,
		afterOutsideRef: p,
		beforeInsideRef: m,
		afterInsideRef: h,
		portalNode: l,
		setFocusManagerState: v
	}), [l]);
	return /*#__PURE__*/ (0, I.jsxs)(N.Fragment, { children: [u, /*#__PURE__*/ (0, I.jsxs)(Ae.Provider, {
		value: C,
		children: [
			S && l && /*#__PURE__*/ (0, I.jsx)(L, {
				"data-type": "outside",
				ref: f,
				onFocus: (e) => {
					Z(e, l) ? m.current?.focus() : ge(_ ? _.domReference : null)?.focus();
				}
			}),
			S && l && /*#__PURE__*/ (0, I.jsx)("span", {
				"aria-owns": l.id,
				style: ke
			}),
			l && /*#__PURE__*/ P.createPortal(a, l),
			S && l && /*#__PURE__*/ (0, I.jsx)(L, {
				"data-type": "outside",
				ref: p,
				onFocus: (e) => {
					Z(e, l) ? h.current?.focus() : (he(_ ? _.domReference : null)?.focus(), _?.closeOnFocusOut && _?.onOpenChange(!1, g("focus-out", e.nativeEvent)));
				}
			})
		]
	})] });
});
// node_modules/@base-ui/react/floating-ui-react/utils/createEventEmitter.mjs
function Fe() {
	let e = /* @__PURE__ */ new Map();
	return {
		emit(t, n) {
			e.get(t)?.forEach((e) => e(n));
		},
		on(t, n) {
			e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
		},
		off(t, n) {
			e.get(t)?.delete(n);
		}
	};
}
// node_modules/@base-ui/react/floating-ui-react/components/FloatingTreeStore.mjs
var Ie = class {
	nodesRef = { current: [] };
	events = Fe();
	addNode(e) {
		this.nodesRef.current.push(e);
	}
	removeNode(e) {
		let t = this.nodesRef.current.findIndex((t) => t === e);
		t !== -1 && this.nodesRef.current.splice(t, 1);
	}
}, Le = /*#__PURE__*/ N.createContext(null), Re = /*#__PURE__*/ N.createContext(null), ze = () => N.useContext(Le)?.id || null, Be = (e) => {
	let t = N.useContext(Re);
	return e ?? t;
};
function Ve(e) {
	let t = f(), n = Be(e), r = ze();
	return d(() => {
		if (!t) return;
		let e = {
			id: t,
			parentId: r
		};
		return n?.addNode(e), () => {
			n?.removeNode(e);
		};
	}, [
		n,
		t,
		r
	]), t;
}
function He(e) {
	let { children: t, id: n } = e, r = ze();
	return /*#__PURE__*/ (0, I.jsx)(Le.Provider, {
		value: N.useMemo(() => ({
			id: n,
			parentId: r
		}), [n, r]),
		children: t
	});
}
function Ue(e) {
	let { children: t, externalTree: n } = e, r = o(() => n ?? new Ie()).current;
	return /*#__PURE__*/ (0, I.jsx)(Re.Provider, {
		value: r,
		children: t
	});
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useDismiss.mjs
function We() {
	return !1;
}
function Ge(e) {
	return {
		escapeKey: typeof e == "boolean" ? e : e?.escapeKey ?? !1,
		outsidePress: typeof e == "boolean" ? e : e?.outsidePress ?? !0
	};
}
function Ke(e, t = {}) {
	let { enabled: n = !0, escapeKey: r = !0, outsidePress: a = !0, outsidePressEvent: o = "sloppy", referencePress: s = We, bubbles: c, externalTree: l } = t, u = "rootStore" in e ? e.rootStore : e, d = u.useState("open"), f = u.useState("floatingElement"), { dataRef: _ } = u.context, v = Be(l), C = i(typeof a == "function" ? a : () => !1), E = typeof a == "function" ? C : a, re = E !== !1, ie = i(() => o), { escapeKey: k, outsidePress: ue } = Ge(c), A = N.useRef(!1), j = N.useRef(!1), M = N.useRef(!1), P = N.useRef(!1), I = N.useRef(""), L = N.useRef(null), R = D(), z = D(), B = i(() => {
		z.clear(), _.current.insideReactTree = !1;
	}), V = i((e) => {
		let t = _.current.floatingContext?.nodeId;
		return (v ? Q(v.nodesRef.current, t) : []).some((t) => t.context?.open && !t.context.dataRef.current[e]);
	}), H = i((e) => le(e, u.select("floatingElement")) || le(e, u.select("domReferenceElement"))), U = i((e) => {
		s() && u.setOpen(!1, g(p, e.nativeEvent));
	}), W = i((e) => {
		if (!d || !n || !r || e.key !== "Escape" || P.current || !k && V("__escapeKeyBubbles")) return;
		let t = ne(e) ? e.nativeEvent : e, i = g(h, t);
		u.setOpen(!1, i), i.isCanceled || e.preventDefault(), !k && !i.isPropagationAllowed && e.stopPropagation();
	}), G = i(() => {
		_.current.insideReactTree = !0, z.start(0, B);
	}), K = i((e) => {
		if (!d || !n || e.button !== 0) return;
		let t = se(e.nativeEvent);
		O(u.select("floatingElement"), t) && (A.current || (A.current = !0, j.current = !1));
	}), q = i((e) => {
		d && n && (e.defaultPrevented || e.nativeEvent.defaultPrevented) && A.current && (j.current = !0);
	});
	N.useEffect(() => {
		if (!d || !n) return;
		_.current.__escapeKeyBubbles = k, _.current.__outsidePressBubbles = ue;
		let e = new oe(), t = new oe();
		function i() {
			e.clear(), P.current = !0;
		}
		function a() {
			e.start(ae ? 5 : 0, () => {
				P.current = !1;
			});
		}
		function o() {
			M.current = !0, t.start(0, () => {
				M.current = !1;
			});
		}
		function s() {
			A.current = !1, j.current = !1;
		}
		function c() {
			let e = I.current, t = e === "pen" || !e ? "mouse" : e, n = ie(), r = typeof n == "function" ? n() : n;
			return typeof r == "string" ? r : r[t];
		}
		function l(e) {
			let t = c();
			return t === "intentional" && e.type !== "click" || t === "sloppy" && e.type === "click";
		}
		function p(e) {
			let t = _.current.floatingContext?.nodeId, n = v && Q(v.nodesRef.current, t).some((t) => le(e, t.context?.elements.floating));
			return H(e) || n;
		}
		function h(e) {
			if (l(e)) {
				e.type !== "click" && !H(e) && (t.clear(), M.current = !1), B();
				return;
			}
			if (_.current.insideReactTree) {
				B();
				return;
			}
			let n = se(e), r = `[${Ce("inert")}]`, i = b(n) ? n.getRootNode() : null, a = Array.from((S(i) ? i : T(u.select("floatingElement"))).querySelectorAll(r)), o = u.context.triggerElements;
			if (n && (o.hasElement(n) || o.hasMatchingElement((e) => O(e, n)))) return;
			let s = b(n) ? n : null;
			for (; s && !ee(s);) {
				let e = y(s);
				if (ee(e) || !b(e)) break;
				s = e;
			}
			if (!(a.length && b(n) && !ce(n) && !O(n, u.select("floatingElement")) && a.every((e) => !O(s, e)))) {
				if (x(n) && !("touches" in e)) {
					let t = ee(n), r = te(n), i = /auto|scroll/, a = t || i.test(r.overflowX), o = t || i.test(r.overflowY), s = a && n.clientWidth > 0 && n.scrollWidth > n.clientWidth, c = o && n.clientHeight > 0 && n.scrollHeight > n.clientHeight, l = r.direction === "rtl", u = c && (l ? e.offsetX <= n.offsetWidth - n.clientWidth : e.offsetX > n.clientWidth), d = s && e.offsetY > n.clientHeight;
					if (u || d) return;
				}
				p(e) || (c() === "intentional" && M.current ? (t.clear(), M.current = !1) : typeof E == "function" && !E(e) || V("__outsidePressBubbles") || (u.setOpen(!1, g(m, e)), B()));
			}
		}
		function C(e) {
			c() === "sloppy" && e.pointerType !== "touch" && u.select("open") && n && !H(e) && h(e);
		}
		function ne(e) {
			if (c() !== "sloppy" || !u.select("open") || !n || H(e)) return;
			let t = e.touches[0];
			t && (L.current = {
				startTime: Date.now(),
				startX: t.clientX,
				startY: t.clientY,
				dismissOnTouchEnd: !1,
				dismissOnMouseDown: !0
			}, R.start(1e3, () => {
				L.current && (L.current.dismissOnTouchEnd = !1, L.current.dismissOnMouseDown = !1);
			}));
		}
		function D(e, t) {
			let n = se(e);
			if (!n) return;
			let r = w(n, e.type, () => {
				t(e), r();
			});
		}
		function N(e) {
			I.current = "touch", D(e, ne);
		}
		function z(e) {
			R.clear(), e.type === "pointerdown" && (I.current = e.pointerType), (e.type !== "mousedown" || !L.current || L.current.dismissOnMouseDown) && D(e, (e) => {
				e.type === "pointerdown" ? C(e) : h(e);
			});
		}
		function U(e) {
			if (!A.current) return;
			let n = j.current;
			s(), c() === "intentional" && (e.type === "pointercancel" ? n && o() : p(e) || (n ? o() : (typeof E != "function" || E(e)) && (t.clear(), M.current = !0, B())));
		}
		function G(e) {
			if (c() !== "sloppy" || !L.current || H(e)) return;
			let t = e.touches[0];
			if (!t) return;
			let n = Math.abs(t.clientX - L.current.startX), r = Math.abs(t.clientY - L.current.startY), i = Math.sqrt(n * n + r * r);
			i > 5 && (L.current.dismissOnTouchEnd = !0), i > 10 && (h(e), R.clear(), L.current = null);
		}
		function K(e) {
			D(e, G);
		}
		function q(e) {
			c() === "sloppy" && L.current && !H(e) && (L.current.dismissOnTouchEnd && h(e), R.clear(), L.current = null);
		}
		function J(e) {
			D(e, q);
		}
		let Y = T(f), de = F(r && F(w(Y, "keydown", W), w(Y, "compositionstart", i), w(Y, "compositionend", a)), re && F(w(Y, "click", z, !0), w(Y, "pointerdown", z, !0), w(Y, "pointerup", U, !0), w(Y, "pointercancel", U, !0), w(Y, "mousedown", z, !0), w(Y, "mouseup", U, !0), w(Y, "touchstart", N, !0), w(Y, "touchmove", K, !0), w(Y, "touchend", J, !0)));
		return () => {
			de(), e.clear(), t.clear(), s(), M.current = !1;
		};
	}, [
		_,
		f,
		r,
		re,
		E,
		d,
		n,
		k,
		ue,
		W,
		B,
		ie,
		V,
		H,
		v,
		u,
		R
	]), N.useEffect(B, [E, B]);
	let J = N.useMemo(() => ({
		onKeyDown: W,
		onPointerDown: U,
		onClick: U
	}), [W, U]), Y = N.useMemo(() => ({
		onKeyDown: W,
		onPointerDown: q,
		onMouseDown: q,
		onClickCapture: G,
		onMouseDownCapture(e) {
			G(), K(e);
		},
		onPointerDownCapture(e) {
			G(), K(e);
		},
		onMouseUpCapture: G,
		onTouchEndCapture: G,
		onTouchMoveCapture: G
	}), [
		W,
		G,
		K,
		q
	]);
	return N.useMemo(() => n ? {
		reference: J,
		floating: Y,
		trigger: J
	} : {}, [
		n,
		J,
		Y
	]);
}
// node_modules/@base-ui/utils/store/createSelector.mjs
var $ = (e, t, n, r, i, a, ...o) => {
	if (o.length > 0) throw Error(u(1));
	let s;
	if (e && t && n && r && i && a) s = (o, s, c, l) => a(e(o, s, c, l), t(o, s, c, l), n(o, s, c, l), r(o, s, c, l), i(o, s, c, l), s, c, l);
	else if (e && t && n && r && i) s = (a, o, s, c) => i(e(a, o, s, c), t(a, o, s, c), n(a, o, s, c), r(a, o, s, c), o, s, c);
	else if (e && t && n && r) s = (i, a, o, s) => r(e(i, a, o, s), t(i, a, o, s), n(i, a, o, s), a, o, s);
	else if (e && t && n) s = (r, i, a, o) => n(e(r, i, a, o), t(r, i, a, o), i, a, o);
	else if (e && t) s = (n, r, i, a) => t(e(n, r, i, a), r, i, a);
	else if (e) s = e;
	else throw Error("Missing arguments");
	return s;
}, qe = A(), Je = j(), Ye = [], Xe = void 0;
function Ze() {
	return Xe;
}
function Qe(e) {
	Ye.push(e);
}
function $e(e) {
	let t = (t, n) => {
		let r = o(tt).current, i;
		try {
			Xe = r;
			for (let e of Ye) e.before(r);
			i = e(t, n);
			for (let e of Ye) e.after(r);
			r.didInitialize = !0;
		} finally {
			Xe = void 0;
		}
		return i;
	};
	return t.displayName = e.displayName || e.name, t;
}
function et(e) {
	return /*#__PURE__*/ N.forwardRef($e(e));
}
function tt() {
	return { didInitialize: !1 };
}
// node_modules/@base-ui/utils/store/useStore.mjs
var nt = a(19) ? at : ot;
function rt(e, t, n, r, i) {
	return nt(e, t, n, r, i);
}
function it(e, t, n, r, i) {
	let a = N.useCallback(() => t(e.getSnapshot(), n, r, i), [
		e,
		t,
		n,
		r,
		i
	]);
	return (0, qe.useSyncExternalStore)(e.subscribe, a, a);
}
Qe({
	before(e) {
		e.syncIndex = 0, e.didInitialize || (e.syncTick = 1, e.syncHooks = [], e.didChangeStore = !0, e.getSnapshot = () => {
			let t = !1;
			for (let n = 0; n < e.syncHooks.length; n += 1) {
				let r = e.syncHooks[n], i = r.selector(r.store.state, r.a1, r.a2, r.a3);
				Object.is(r.value, i) || (t = !0, r.value = i);
			}
			return t && (e.syncTick += 1), e.syncTick;
		});
	},
	after(e) {
		e.syncHooks.length > 0 && (e.didChangeStore && (e.didChangeStore = !1, e.subscribe = (t) => {
			let n = /* @__PURE__ */ new Set();
			for (let t of e.syncHooks) n.add(t.store);
			let r = [];
			for (let e of n) r.push(e.subscribe(t));
			return () => {
				for (let e of r) e();
			};
		}), (0, qe.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot));
	}
});
function at(e, t, n, r, i) {
	let a = Ze();
	if (!a) return it(e, t, n, r, i);
	let o = a.syncIndex;
	a.syncIndex += 1;
	let s;
	return a.didInitialize ? (s = a.syncHooks[o], s.store === e && s.selector === t && Object.is(s.a1, n) && Object.is(s.a2, r) && Object.is(s.a3, i) || (s.store !== e && (a.didChangeStore = !0), s.store = e, s.selector = t, s.a1 = n, s.a2 = r, s.a3 = i, s.value = t(e.getSnapshot(), n, r, i))) : (s = {
		store: e,
		selector: t,
		a1: n,
		a2: r,
		a3: i,
		value: t(e.getSnapshot(), n, r, i)
	}, a.syncHooks.push(s)), s.value;
}
function ot(e, t, n, r, i) {
	return (0, Je.useSyncExternalStoreWithSelector)(e.subscribe, e.getSnapshot, e.getSnapshot, (e) => t(e, n, r, i));
}
// node_modules/@base-ui/utils/store/Store.mjs
var st = class {
	constructor(e) {
		this.state = e, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
	}
	subscribe = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	getSnapshot = () => this.state;
	setState(e) {
		if (this.state === e) return;
		this.state = e, this.updateTick += 1;
		let t = this.updateTick;
		for (let n of this.listeners) {
			if (t !== this.updateTick) return;
			n(e);
		}
	}
	update(e) {
		for (let t in e) if (!Object.is(this.state[t], e[t])) {
			this.setState({
				...this.state,
				...e
			});
			return;
		}
	}
	set(e, t) {
		Object.is(this.state[e], t) || this.setState({
			...this.state,
			[e]: t
		});
	}
	notifyAll() {
		let e = { ...this.state };
		this.setState(e);
	}
	use(e, t, n, r) {
		return rt(this, e, t, n, r);
	}
}, ct = class extends st {
	constructor(e, t = {}, n) {
		super(e), this.context = t, this.selectors = n;
	}
	useSyncedValue(e, t) {
		N.useDebugValue(e);
		let n = this;
		d(() => {
			n.state[e] !== t && n.set(e, t);
		}, [
			n,
			e,
			t
		]);
	}
	useSyncedValueWithCleanup(e, t) {
		let n = this;
		d(() => (n.state[e] !== t && n.set(e, t), () => {
			n.set(e, void 0);
		}), [
			n,
			e,
			t
		]);
	}
	useSyncedValues(e) {
		let t = this, n = Object.values(e);
		d(() => {
			t.update(e);
		}, [t, ...n]);
	}
	useControlledProp(e, t) {
		N.useDebugValue(e);
		let n = this, r = t !== void 0;
		d(() => {
			r && !Object.is(n.state[e], t) && n.setState({
				...n.state,
				[e]: t
			});
		}, [
			n,
			e,
			t,
			r
		]);
	}
	select(e, t, n, r) {
		let i = this.selectors[e];
		return i(this.state, t, n, r);
	}
	useState(e, t, n, r) {
		return N.useDebugValue(e), rt(this, this.selectors[e], t, n, r);
	}
	useContextCallback(e, t) {
		N.useDebugValue(e);
		let n = i(t ?? c);
		this.context[e] = n;
	}
	useStateSetter(e) {
		let t = N.useRef(void 0);
		return t.current === void 0 && (t.current = (t) => {
			this.set(e, t);
		}), t.current;
	}
	observe(e, t) {
		let n;
		n = typeof e == "function" ? e : this.selectors[e];
		let r = n(this.state);
		return t(r, r, this), this.subscribe((e) => {
			let i = n(e);
			if (!Object.is(r, i)) {
				let e = r;
				r = i, t(i, e, this);
			}
		});
	}
}, lt = {
	open: $((e) => e.open),
	transitionStatus: $((e) => e.transitionStatus),
	domReferenceElement: $((e) => e.domReferenceElement),
	referenceElement: $((e) => e.positionReference ?? e.referenceElement),
	floatingElement: $((e) => e.floatingElement),
	floatingId: $((e) => e.floatingId)
}, ut = class extends ct {
	constructor(e) {
		let { syncOnly: t, nested: n, onOpenChange: r, triggerElements: i, ...a } = e;
		super({
			...a,
			positionReference: a.referenceElement,
			domReferenceElement: a.referenceElement
		}, {
			onOpenChange: r,
			dataRef: { current: {} },
			events: Fe(),
			nested: n,
			triggerElements: i
		}, lt), this.syncOnly = t;
	}
	syncOpenEvent = (e, t) => {
		(!e || !this.state.open || t != null && re(t)) && (this.context.dataRef.current.openEvent = e ? t : void 0);
	};
	dispatchOpenChange = (e, t) => {
		this.syncOpenEvent(e, t.event);
		let n = {
			open: e,
			reason: t.reason,
			nativeEvent: t.event,
			nested: this.context.nested,
			triggerElement: t.trigger
		};
		this.context.events.emit("openchange", n);
	};
	setOpen = (e, t) => {
		this.syncOnly || this.dispatchOpenChange(e, t), this.context.onOpenChange?.(e, t);
	};
}, dt = class {
	constructor() {
		this.elementsSet = /* @__PURE__ */ new Set(), this.idMap = /* @__PURE__ */ new Map();
	}
	add(e, t) {
		let n = this.idMap.get(e);
		n !== t && (n !== void 0 && this.elementsSet.delete(n), this.elementsSet.add(t), this.idMap.set(e, t));
	}
	delete(e) {
		let t = this.idMap.get(e);
		t && (this.elementsSet.delete(t), this.idMap.delete(e));
	}
	hasElement(e) {
		return this.elementsSet.has(e);
	}
	hasMatchingElement(e) {
		for (let t of this.elementsSet) if (e(t)) return !0;
		return !1;
	}
	getById(e) {
		return this.idMap.get(e);
	}
	entries() {
		return this.idMap.entries();
	}
	elements() {
		return this.elementsSet.values();
	}
	get size() {
		return this.idMap.size;
	}
}, ft = function(e) {
	return e.open = "data-open", e.closed = "data-closed", e[e.startingStyle = _.startingStyle] = "startingStyle", e[e.endingStyle = _.endingStyle] = "endingStyle", e.anchorHidden = "data-anchor-hidden", e.side = "data-side", e.align = "data-align", e;
}({}), pt = /*#__PURE__*/ function(e) {
	return e.popupOpen = "data-popup-open", e.pressed = "data-pressed", e;
}({}), mt = { [pt.popupOpen]: "" }, ht = {
	[pt.popupOpen]: "",
	[pt.pressed]: ""
}, gt = { [ft.open]: "" }, _t = { [ft.closed]: "" }, vt = { [ft.anchorHidden]: "" }, yt = { open(e) {
	return e ? mt : null;
} }, bt = { open(e) {
	return e ? ht : null;
} }, xt = {
	open(e) {
		return e ? gt : _t;
	},
	anchorHidden(e) {
		return e ? vt : null;
	}
};
export { Ce as A, Z as B, je as C, De as D, we as E, pe as F, X as H, he as I, ge as L, Q as M, be as N, Oe as O, xe as P, ve as R, Ne as S, Te as T, L as U, fe as V, F as W, Ve as _, yt as a, Ie as b, ct as c, $e as d, et as f, Ue as g, He as h, bt as i, Se as j, ke as k, st as l, Ke as m, pt as n, dt as o, $ as p, xt as r, ut as s, ft as t, rt as u, ze as v, Ee as w, Pe as x, Be as y, ye as z };
