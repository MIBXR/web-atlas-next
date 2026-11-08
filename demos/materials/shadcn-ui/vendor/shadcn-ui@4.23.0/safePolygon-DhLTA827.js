import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./react-dom-BasjwewA.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { d as i } from "./useRenderElement-Bc91YjHo.js";
import { t as a } from "./useIsoLayoutEffect-B0B6th0o.js";
import { D as o, t as s } from "./createBaseUIEventDetails-DG51vPHx.js";
import { t as c } from "./useOnMount-B8XKb65Z.js";
import { d as l } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as u } from "./addEventListener-EiVbnOnq.js";
import { t as d } from "./useValueAsRef-0u0FW33N.js";
import { t as f } from "./owner-C-FapX6G.js";
import { k as p } from "./composite-BYPOq3H3.js";
import { M as m, W as h, v as g, y as _ } from "./popupStateMapping-CSyRbb7j.js";
import { n as v, t as y } from "./useTimeout-CP4j_cva.js";
import { n as b, r as x } from "./shadowDom-D66trjQm.js";
import { a as S, r as C } from "./element-DbCN1dg9.js";
// node_modules/@base-ui/react/floating-ui-react/hooks/useHoverShared.mjs
var w = /* @__PURE__ */ e(t(), 1);
function T(e, t) {
	return t != null && !p(t) ? 0 : typeof e == "function" ? e() : e;
}
function E(e, t, n) {
	let r = T(e, n);
	return typeof r == "number" ? r : r?.[t];
}
function D(e) {
	return typeof e == "function" ? e() : e;
}
function O(e, t) {
	return t || e === "click" || e === "mousedown";
}
function k(e) {
	return e?.includes("mouse") && e !== "mousedown";
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useHoverInteractionSharedState.mjs
var A = class e {
	constructor() {
		this.pointerType = void 0, this.interactedInside = !1, this.handler = void 0, this.blockMouseMove = !0, this.performedPointerEventsMutation = !1, this.pointerEventsScopeElement = null, this.pointerEventsReferenceElement = null, this.pointerEventsFloatingElement = null, this.restTimeoutPending = !1, this.openChangeTimeout = new y(), this.restTimeout = new y(), this.handleCloseOptions = void 0;
	}
	static create() {
		return new e();
	}
	dispose = () => {
		this.openChangeTimeout.clear(), this.restTimeout.clear();
	};
	disposeEffect = () => this.dispose;
}, j = /* @__PURE__ */ new WeakMap();
function M(e) {
	if (!e.performedPointerEventsMutation) return;
	let t = e.pointerEventsScopeElement;
	t && j.get(t) === e && (e.pointerEventsScopeElement?.style.removeProperty("pointer-events"), e.pointerEventsReferenceElement?.style.removeProperty("pointer-events"), e.pointerEventsFloatingElement?.style.removeProperty("pointer-events"), j.delete(t)), e.performedPointerEventsMutation = !1, e.pointerEventsScopeElement = null, e.pointerEventsReferenceElement = null, e.pointerEventsFloatingElement = null;
}
function N(e, t) {
	let { scopeElement: n, referenceElement: r, floatingElement: i } = t, a = j.get(n);
	a && a !== e && M(a), M(e), e.performedPointerEventsMutation = !0, e.pointerEventsScopeElement = n, e.pointerEventsReferenceElement = r, e.pointerEventsFloatingElement = i, j.set(n, e), n.style.pointerEvents = "none", r.style.pointerEvents = "auto", i.style.pointerEvents = "auto";
}
function P(e) {
	let t = e.context.dataRef.current, n = i(() => t.hoverInteractionState ?? A.create()).current;
	return t.hoverInteractionState ||= n, c(t.hoverInteractionState.disposeEffect), t.hoverInteractionState;
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useHoverFloatingInteraction.mjs
function F(e, t = {}) {
	let { enabled: n = !0, closeDelay: i = 0, nodeId: c } = t, d = "rootStore" in e ? e.rootStore : e, p = d.useState("open"), y = d.useState("floatingElement"), T = d.useState("domReferenceElement"), { dataRef: D } = d.context, A = _(), j = g(), F = P(d), I = v(), L = r(() => O(D.current.openEvent?.type, F.interactedInside)), R = r(() => k(D.current.openEvent?.type)), z = r(() => {
		M(F);
	});
	a(() => {
		p || (F.pointerType = void 0, F.restTimeoutPending = !1, F.interactedInside = !1, z());
	}, [
		p,
		F,
		z
	]), w.useEffect(() => z, [z]), a(() => {
		if (n && p && F.handleCloseOptions?.blockPointerEvents && R() && l(T) && y) {
			let e = T, t = y, n = f(y), r = A?.nodesRef.current.find((e) => e.id === j)?.context?.elements.floating;
			r && (r.style.pointerEvents = "");
			let i = F.pointerEventsScopeElement === t ? null : F.pointerEventsScopeElement, a = r === t ? null : r, o = F.handleCloseOptions?.getScope?.() ?? i ?? a ?? e.closest("[data-rootownerid]") ?? n.body;
			return N(F, {
				scopeElement: o,
				referenceElement: e,
				floatingElement: t
			}), () => {
				z();
			};
		}
	}, [
		n,
		p,
		T,
		y,
		F,
		R,
		A,
		j,
		z
	]), w.useEffect(() => {
		if (!n) return;
		function e() {
			return !!(A && j && m(A.nodesRef.current, j).length > 0);
		}
		function t(e) {
			let t = E(i, "close", F.pointerType), n = () => {
				d.setOpen(!1, s(o, e)), A?.events.emit("floating.closed", e);
			};
			t ? F.openChangeTimeout.start(t, n) : (F.openChangeTimeout.clear(), n());
		}
		function r(e) {
			let t = x(e);
			C(t) ? F.interactedInside = t?.closest("[aria-haspopup]") != null : F.interactedInside = !1;
		}
		function a() {
			F.openChangeTimeout.clear(), I.clear(), A?.events.off("floating.closed", p), z();
		}
		function f(n) {
			if (e() && A) {
				A.events.on("floating.closed", p);
				return;
			}
			if (S(n.relatedTarget, d.context.triggerElements)) return;
			let r = D.current.floatingContext?.nodeId ?? c, i = n.relatedTarget;
			A && r && l(i) && m(A.nodesRef.current, r, !1).some((e) => b(e.context?.elements.floating, i)) || (F.handler ? F.handler(n) : (z(), R() && !L() && t(n)));
		}
		function p(t) {
			A && j && !e() && I.start(0, () => {
				A.events.off("floating.closed", p), d.setOpen(!1, s(o, t)), A.events.emit("floating.closed", t);
			});
		}
		let g = y;
		return h(g && u(g, "mouseenter", a), g && u(g, "mouseleave", f), g && u(g, "pointerdown", r, !0), () => {
			A?.events.off("floating.closed", p);
		});
	}, [
		n,
		y,
		d,
		D,
		i,
		c,
		R,
		L,
		z,
		F,
		A,
		j,
		I
	]);
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useHoverReferenceInteraction.mjs
var I = /* @__PURE__ */ e(n(), 1), L = { current: null };
function R(e, t = {}) {
	let { enabled: n = !0, delay: i = 0, handleClose: a = null, mouseOnly: c = !1, restMs: m = 0, move: g = !0, triggerElementRef: v = L, externalTree: y, isActiveTrigger: C = !0, getHandleCloseContext: T, isClosing: k, shouldOpen: A } = t, j = "rootStore" in e ? e.rootStore : e, { dataRef: F, events: R } = j.context, z = _(y), B = P(j), V = w.useRef(!1), H = d(a), U = d(i), W = d(m), G = d(n), K = d(A), q = d(k), J = r(() => O(F.current.openEvent?.type, B.interactedInside)), Y = r(() => K.current?.() !== !1), X = r((e, t, n) => {
		let r = j.context.triggerElements;
		if (r.hasElement(t)) return !e || !b(e, t);
		if (!l(n)) return !1;
		let i = n;
		return r.hasMatchingElement((e) => b(e, i)) && (!e || !b(e, i));
	}), Z = r(() => {
		B.handler &&= (f(j.select("domReferenceElement")).removeEventListener("mousemove", B.handler), void 0);
	}), Q = r(() => {
		M(B);
	});
	return C && (B.handleCloseOptions = H.current?.__options), w.useEffect(() => Z, [Z]), w.useEffect(() => {
		if (!n) return;
		function e(e) {
			e.open ? V.current = !1 : (V.current = e.reason === o, Z(), B.openChangeTimeout.clear(), B.restTimeout.clear(), B.blockMouseMove = !0, B.restTimeoutPending = !1);
		}
		return R.on("openchange", e), () => {
			R.off("openchange", e);
		};
	}, [
		n,
		R,
		B,
		Z
	]), w.useEffect(() => {
		if (!n) return;
		function e(e, t = !0) {
			let n = E(U.current, "close", B.pointerType);
			n ? B.openChangeTimeout.start(n, () => {
				j.setOpen(!1, s(o, e)), z?.events.emit("floating.closed", e);
			}) : t && (B.openChangeTimeout.clear(), j.setOpen(!1, s(o, e)), z?.events.emit("floating.closed", e));
		}
		let t = v.current ?? (C ? j.select("domReferenceElement") : null);
		if (!l(t)) return;
		function r(e) {
			if (B.openChangeTimeout.clear(), B.blockMouseMove = !1, c && !p(B.pointerType)) return;
			let t = D(W.current), n = E(U.current, "open", B.pointerType), r = x(e), i = e.currentTarget ?? null, a = j.select("domReferenceElement"), u = i;
			if (l(r) && !j.context.triggerElements.hasElement(r)) {
				for (let e of j.context.triggerElements.elements()) if (b(e, r)) {
					u = e;
					break;
				}
			}
			l(i) && l(a) && !j.context.triggerElements.hasElement(i) && b(i, a) && (u = a);
			let d = u != null && X(a, u, r), f = j.select("open"), m = q.current?.() ?? j.select("transitionStatus") === "ending", h = !f && m && V.current, g = !d && l(u) && l(a) && b(a, u) && h, _ = t > 0 && !n, v = d && (f || h) || g, y = !f || d;
			v ? Y() && j.setOpen(!0, s(o, e, u)) : _ || (n ? B.openChangeTimeout.start(n, () => {
				y && Y() && j.setOpen(!0, s(o, e, u));
			}) : y && Y() && j.setOpen(!0, s(o, e, u)));
		}
		function i(t) {
			if (J()) {
				Q();
				return;
			}
			Z();
			let n = j.select("domReferenceElement"), r = f(n);
			B.restTimeout.clear(), B.restTimeoutPending = !1;
			let i = F.current.floatingContext ?? T?.();
			if (!S(t.relatedTarget, j.context.triggerElements)) {
				if (H.current && i) {
					j.select("open") || B.openChangeTimeout.clear();
					let n = v.current;
					B.handler = H.current({
						...i,
						tree: z,
						x: t.clientX,
						y: t.clientY,
						onClose() {
							Q(), Z(), G.current && !J() && n === j.select("domReferenceElement") && e(t, !0);
						}
					}), r.addEventListener("mousemove", B.handler), B.handler(t);
				} else B.pointerType === "touch" && b(j.select("floatingElement"), t.relatedTarget) || e(t);
			}
		}
		return g ? h(u(t, "mousemove", r, { once: !0 }), u(t, "mouseenter", r), u(t, "mouseleave", i)) : h(u(t, "mouseenter", r), u(t, "mouseleave", i));
	}, [
		Z,
		Q,
		F,
		U,
		j,
		n,
		H,
		B,
		C,
		X,
		J,
		c,
		g,
		W,
		v,
		z,
		G,
		T,
		q,
		Y
	]), w.useMemo(() => {
		if (!n) return;
		function e(e) {
			B.pointerType = e.pointerType;
		}
		return {
			onPointerDown: e,
			onPointerEnter: e,
			onMouseMove(e) {
				let { nativeEvent: t } = e, n = e.currentTarget, r = j.select("domReferenceElement"), i = j.select("open"), a = X(r, n, e.target);
				if (c && !p(B.pointerType)) return;
				if (i && a && B.handleCloseOptions?.blockPointerEvents) {
					let e = j.select("floatingElement");
					if (e) {
						let t = B.handleCloseOptions?.getScope?.() ?? n.ownerDocument.body;
						N(B, {
							scopeElement: t,
							referenceElement: n,
							floatingElement: e
						});
					}
				}
				let l = D(W.current);
				if (i && !a || l === 0 || !a && B.restTimeoutPending && e.movementX ** 2 + e.movementY ** 2 < 2) return;
				B.restTimeout.clear();
				function u() {
					if (B.restTimeoutPending = !1, J()) return;
					let e = j.select("open");
					!B.blockMouseMove && (!e || a) && Y() && j.setOpen(!0, s(o, t, n));
				}
				B.pointerType === "touch" ? I.flushSync(() => {
					u();
				}) : a && i ? u() : (B.restTimeoutPending = !0, B.restTimeout.start(l, u));
			}
		};
	}, [
		n,
		B,
		J,
		X,
		c,
		j,
		W,
		Y
	]);
}
// node_modules/@base-ui/react/floating-ui-react/safePolygon.mjs
var z = .1, B = z * z, V = .5;
function H(e, t, n, r, i, a) {
	return r >= t != a >= t && e <= (i - n) * (t - r) / (a - r) + n;
}
function U(e, t, n, r, i, a, o, s, c, l) {
	let u = !1;
	return H(e, t, n, r, i, a) && (u = !u), H(e, t, i, a, o, s) && (u = !u), H(e, t, o, s, c, l) && (u = !u), H(e, t, c, l, n, r) && (u = !u), u;
}
function W(e, t, n) {
	return e >= n.x && e <= n.x + n.width && t >= n.y && t <= n.y + n.height;
}
function G(e, t, n, r, i, a) {
	return e >= Math.min(n, i) && e <= Math.max(n, i) && t >= Math.min(r, a) && t <= Math.max(r, a);
}
function K(e = {}) {
	let { blockPointerEvents: t = !1 } = e, n = new y(), r = ({ x: e, y: t, placement: r, elements: i, onClose: a, nodeId: o, tree: s }) => {
		let c = r?.split("-")[0], u = !1, d = null, f = null, p = typeof performance < "u" ? performance.now() : 0;
		function h(e, t) {
			let n = performance.now(), r = n - p;
			if (d === null || f === null || r === 0) return d = e, f = t, p = n, !1;
			let i = e - d, a = t - f, o = i * i + a * a, s = r * r * B;
			return d = e, f = t, p = n, o < s;
		}
		function g() {
			n.clear(), a();
		}
		return function(r) {
			n.clear();
			let a = i.domReference, d = i.floating;
			if (!a || !d || c == null || e == null || t == null) return;
			let { clientX: f, clientY: p } = r, _ = x(r), v = r.type === "mouseleave", y = b(d, _), S = b(a, _);
			if (y && (u = !0, !v)) return;
			if (S && (u = !1, !v)) {
				u = !0;
				return;
			}
			if (v && l(r.relatedTarget) && b(d, r.relatedTarget)) return;
			function C() {
				return !!(s && m(s.nodesRef.current, o).length > 0);
			}
			function w() {
				C() || g();
			}
			if (C()) return;
			let T = a.getBoundingClientRect(), E = d.getBoundingClientRect(), D = e > E.right - E.width / 2, O = t > E.bottom - E.height / 2, k = E.width > T.width, A = E.height > T.height, j = (k ? T : E).left, M = (k ? T : E).right, N = (A ? T : E).top, P = (A ? T : E).bottom;
			if (c === "top" && t >= T.bottom - 1 || c === "bottom" && t <= T.top + 1 || c === "left" && e >= T.right - 1 || c === "right" && e <= T.left + 1) {
				w();
				return;
			}
			let F = !1;
			switch (c) {
				case "top":
					F = G(f, p, j, T.top + 1, M, E.bottom - 1);
					break;
				case "bottom":
					F = G(f, p, j, E.top + 1, M, T.bottom - 1);
					break;
				case "left":
					F = G(f, p, E.right - 1, P, T.left + 1, N);
					break;
				case "right": F = G(f, p, T.right - 1, P, E.left + 1, N);
			}
			if (F) return;
			if (u && !W(f, p, T) || !v && h(f, p)) {
				w();
				return;
			}
			let I = !1;
			switch (c) {
				case "top": {
					let n = k ? V / 2 : V * 4, r = k || D ? e + n : e - n, i = k ? e - n : D ? e + n : e - n, a = t + V + 1, o = D || k ? E.bottom - V : E.top, s = D ? k ? E.bottom - V : E.top : E.bottom - V;
					I = U(f, p, r, a, i, a, E.left, o, E.right, s);
					break;
				}
				case "bottom": {
					let n = k ? V / 2 : V * 4, r = k || D ? e + n : e - n, i = k ? e - n : D ? e + n : e - n, a = t - V, o = D || k ? E.top + V : E.bottom, s = D ? k ? E.top + V : E.bottom : E.top + V;
					I = U(f, p, r, a, i, a, E.left, o, E.right, s);
					break;
				}
				case "left": {
					let n = A ? V / 2 : V * 4, r = A || O ? t + n : t - n, i = A ? t - n : O ? t + n : t - n, a = e + V + 1, o = O || A ? E.right - V : E.left, s = O ? A ? E.right - V : E.left : E.right - V;
					I = U(f, p, o, E.top, s, E.bottom, a, r, a, i);
					break;
				}
				case "right": {
					let n = A ? V / 2 : V * 4, r = A || O ? t + n : t - n, i = A ? t - n : O ? t + n : t - n, a = e - V, o = O || A ? E.left + V : E.right, s = O ? A ? E.left + V : E.right : E.left + V;
					I = U(f, p, a, r, a, i, o, E.top, s, E.bottom);
					break;
				}
			}
			I ? u || n.start(40, w) : w();
		};
	};
	return r.__options = {
		...e,
		blockPointerEvents: t
	}, r;
}
export { M as a, N as i, R as n, P as o, F as r, E as s, K as t };
