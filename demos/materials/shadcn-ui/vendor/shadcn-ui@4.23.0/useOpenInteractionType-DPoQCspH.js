import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { l as i, s as a } from "./useRenderElement-Bc91YjHo.js";
import { t as o } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as s, u as c } from "./createBaseUIEventDetails-DG51vPHx.js";
import { n as l, t as u } from "./useAnimationFrame-CMIvKrBf.js";
import { r as d } from "./useOpenChangeComplete-BfJk_bnM.js";
import { a as f, f as p, g as m, h, l as g } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as _ } from "./addEventListener-EiVbnOnq.js";
import { t as v } from "./useValueAsRef-0u0FW33N.js";
import { t as y } from "./owner-C-FapX6G.js";
import { I as b, M as ee, N as te, a as ne, j as re } from "./composite-BYPOq3H3.js";
import { n as ie } from "./engine-DPfrNvZF.js";
import { A as ae, B as oe, C as se, F as ce, H as le, I as ue, L as de, M as fe, U as pe, V as me, W as he, j as ge, y as _e } from "./popupStateMapping-CSyRbb7j.js";
import { n as ve, t as x } from "./useTimeout-CP4j_cva.js";
import { n as S, r as C, t as w } from "./shadowDom-D66trjQm.js";
import { o as ye, s as be, t as xe } from "./element-DbCN1dg9.js";
import { t as T } from "./useValueChanged-Bwf6UlC_.js";
// node_modules/@base-ui/utils/useScrollLock.mjs
var Se = {}, Ce = {}, we = "";
function E(e) {
	if (typeof document > "u") return !1;
	let t = y(e);
	return g(t).innerWidth - t.documentElement.clientWidth > 0;
}
function D(e) {
	if (!(typeof CSS < "u" && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || typeof document > "u") return !1;
	let t = y(e), n = t.documentElement, r = t.body, i = h(n) ? n : r, a = i.style.overflowY, o = n.style.scrollbarGutter;
	n.style.scrollbarGutter = "stable", i.style.overflowY = "scroll";
	let s = i.offsetWidth;
	i.style.overflowY = "hidden";
	let c = i.offsetWidth;
	return i.style.overflowY = a, n.style.scrollbarGutter = o, s === c;
}
function O(e) {
	let t = y(e), n = t.documentElement, r = t.body, i = h(n) ? n : r, a = {
		overflowY: i.style.overflowY,
		overflowX: i.style.overflowX
	};
	return Object.assign(i.style, {
		overflowY: "hidden",
		overflowX: "hidden"
	}), () => {
		Object.assign(i.style, a);
	};
}
function k(e) {
	let t = y(e), n = t.documentElement, r = t.body, i = g(n), a = 0, o = 0, s = !1, c = u.create();
	if (ie && (i.visualViewport?.scale ?? 1) !== 1) return () => {};
	function l() {
		let t = i.getComputedStyle(n), c = i.getComputedStyle(r), l = (t.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
		a = n.scrollTop, o = n.scrollLeft, Se = {
			scrollbarGutter: n.style.scrollbarGutter,
			overflowY: n.style.overflowY,
			overflowX: n.style.overflowX
		}, we = n.style.scrollBehavior, Ce = {
			position: r.style.position,
			height: r.style.height,
			width: r.style.width,
			boxSizing: r.style.boxSizing,
			overflowY: r.style.overflowY,
			overflowX: r.style.overflowX,
			scrollBehavior: r.style.scrollBehavior
		};
		let u = n.scrollHeight > n.clientHeight, d = n.scrollWidth > n.clientWidth, f = t.overflowY === "scroll" || c.overflowY === "scroll", p = t.overflowX === "scroll" || c.overflowX === "scroll", m = Math.max(0, i.innerWidth - r.clientWidth), g = Math.max(0, i.innerHeight - r.clientHeight), _ = parseFloat(c.marginTop) + parseFloat(c.marginBottom), v = parseFloat(c.marginLeft) + parseFloat(c.marginRight), y = h(n) ? n : r;
		s = D(e), s ? (n.style.scrollbarGutter = l, y.style.overflowY = "hidden", y.style.overflowX = "hidden") : (Object.assign(n.style, {
			scrollbarGutter: l,
			overflowY: "hidden",
			overflowX: "hidden"
		}), (u || f) && (n.style.overflowY = "scroll"), (d || p) && (n.style.overflowX = "scroll"), Object.assign(r.style, {
			position: "relative",
			height: _ || g ? `calc(100dvh - ${_ + g}px)` : "100dvh",
			width: v || m ? `calc(100vw - ${v + m}px)` : "100vw",
			boxSizing: "border-box",
			overflow: "hidden",
			scrollBehavior: "unset"
		}), r.scrollTop = a, r.scrollLeft = o, n.setAttribute("data-base-ui-scroll-locked", ""), n.style.scrollBehavior = "unset");
	}
	function d() {
		Object.assign(n.style, Se), Object.assign(r.style, Ce), s || (n.scrollTop = a, n.scrollLeft = o, n.removeAttribute("data-base-ui-scroll-locked"), n.style.scrollBehavior = we);
	}
	function f() {
		d(), c.request(l);
	}
	l();
	let p = _(i, "resize", f);
	return () => {
		c.cancel(), d(), typeof i.removeEventListener == "function" && p();
	};
}
var A = new class {
	lockCount = 0;
	restore = null;
	timeoutLock = x.create();
	timeoutUnlock = x.create();
	acquire(e) {
		return this.lockCount += 1, this.lockCount === 1 && this.restore === null && this.timeoutLock.start(0, () => this.lock(e)), this.release;
	}
	release = () => {
		--this.lockCount, this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock);
	};
	unlock = () => {
		this.lockCount === 0 && this.restore && (this.restore?.(), this.restore = null);
	};
	lock(e) {
		if (this.lockCount === 0 || this.restore !== null) return;
		let t = y(e).documentElement, n = g(t).getComputedStyle(t).overflowY;
		if (n === "hidden" || n === "clip") {
			this.restore = a;
			return;
		}
		let r = b || !E(e);
		this.restore = r ? O(e) : k(e);
	}
}();
function j(e = !0, t = null) {
	o(() => {
		if (e) return A.acquire(t);
	}, [e, t]);
}
// node_modules/@base-ui/react/floating-ui-react/utils/enqueueFocus.mjs
var M = /* @__PURE__ */ e(t(), 1), N = 0;
function P(e, t = {}) {
	let { preventScroll: n = !1, sync: r = !1, shouldFocus: i } = t;
	cancelAnimationFrame(N);
	function o() {
		(!i || i()) && e?.focus({ preventScroll: n });
	}
	if (r) return o(), a;
	let s = requestAnimationFrame(o);
	return N = s, () => {
		N === s && (cancelAnimationFrame(s), N = 0);
	};
}
// node_modules/@base-ui/react/floating-ui-react/utils/markOthers.mjs
var F = {
	inert: /* @__PURE__ */ new WeakMap(),
	"aria-hidden": /* @__PURE__ */ new WeakMap()
}, I = "data-base-ui-inert", L = {
	inert: /* @__PURE__ */ new WeakSet(),
	"aria-hidden": /* @__PURE__ */ new WeakSet()
}, R = /* @__PURE__ */ new WeakMap(), z = 0;
function Te(e) {
	return L[e];
}
function B(e) {
	return e ? m(e) ? e.host : B(e.parentNode) : null;
}
var V = (e, t) => t.map((t) => {
	if (e.contains(t)) return t;
	let n = B(t);
	return e.contains(n) ? n : null;
}).filter((e) => e != null), H = (e) => {
	let t = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		let n = e;
		for (; n && !t.has(n);) t.add(n), n = n.parentNode;
	}), t;
}, U = (e, t, n) => {
	let r = [], i = (e) => {
		e && !n.has(e) && Array.from(e.children).forEach((e) => {
			f(e) !== "script" && (t.has(e) ? i(e) : r.push(e));
		});
	};
	return i(e), r;
};
function W(e, t, n, r, { mark: i = !0 }) {
	let a = null;
	r ? a = "inert" : n && (a = "aria-hidden");
	let o = null, s = null, c = V(t, e), l = i ? U(t, H(c), new Set(c)) : [], u = [], d = [];
	if (a) {
		let e = F[a], n = Te(a);
		s = n, o = e;
		let r = V(t, Array.from(t.querySelectorAll("[aria-live]"))), i = c.concat(r);
		U(t, H(i), new Set(i)).forEach((t) => {
			let r = t.getAttribute(a), i = r !== null && r !== "false", o = (e.get(t) || 0) + 1;
			e.set(t, o), u.push(t), o === 1 && i && n.add(t), i || t.setAttribute(a, a === "inert" ? "" : "true");
		});
	}
	return i && l.forEach((e) => {
		let t = (R.get(e) || 0) + 1;
		R.set(e, t), d.push(e), t === 1 && e.setAttribute(I, "");
	}), z += 1, () => {
		o && u.forEach((e) => {
			let t = (o.get(e) || 0) - 1;
			o.set(e, t), t || (!s?.has(e) && a && e.removeAttribute(a), s?.delete(e));
		}), i && d.forEach((e) => {
			let t = (R.get(e) || 0) - 1;
			R.set(e, t), t || e.removeAttribute(I);
		}), --z, z || (F.inert = /* @__PURE__ */ new WeakMap(), F["aria-hidden"] = /* @__PURE__ */ new WeakMap(), L.inert = /* @__PURE__ */ new WeakSet(), L["aria-hidden"] = /* @__PURE__ */ new WeakSet(), R = /* @__PURE__ */ new WeakMap());
	};
}
function Ee(e, t = {}) {
	let { ariaHidden: n = !1, inert: r = !1, mark: i = !0 } = t, a = y(e[0]).body;
	return W(e, a, n, r, { mark: i });
}
// node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
var G = n();
function De(e, t) {
	let n = g(C(e));
	return e instanceof n.KeyboardEvent ? "keyboard" : e instanceof n.FocusEvent ? t || "keyboard" : "pointerType" in e ? e.pointerType || "keyboard" : "touches" in e ? "touch" : e instanceof n.MouseEvent ? t || (e.detail === 0 ? "keyboard" : "mouse") : "";
}
var Oe = 20, K = [];
function ke() {
	K = K.filter((e) => e.deref()?.isConnected);
}
function Ae(e) {
	ke(), e && f(e) !== "body" && (K.push(new WeakRef(e)), K.length > Oe && (K = K.slice(-20)));
}
function je() {
	return ke(), K[K.length - 1]?.deref();
}
function Me(e) {
	return e ? me(e) ? e : le(e)[0] || e : null;
}
function Ne(e) {
	if (e.hasAttribute("tabindex") && !e.hasAttribute("data-tabindex") || !e.getAttribute("role")?.includes("dialog")) return;
	let t = ce(e).filter((e) => {
		let t = e.getAttribute("data-tabindex") || "";
		return me(e) || e.hasAttribute("data-tabindex") && !t.startsWith("-");
	}), n = e.getAttribute("tabindex");
	t.length === 0 ? n !== "0" && (e.setAttribute("tabindex", "0"), e.setAttribute("data-tabindex", "0")) : (n !== "-1" || e.hasAttribute("data-tabindex") && e.getAttribute("data-tabindex") !== "-1") && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
function q(e) {
	let { context: t, children: n, disabled: a = !1, initialFocus: u = !0, returnFocus: m = !0, restoreFocus: h = !1, modal: g = !0, closeOnFocusOut: b = !0, openInteractionType: ce = "", nextFocusableElement: x, previousFocusableElement: T, beforeContentFocusGuardRef: Se, externalTree: Ce, getInsideElements: we } = e, E = "rootStore" in t ? t.rootStore : t, D = E.useState("open"), O = E.useState("domReferenceElement"), k = E.useState("floatingElement"), { events: A, dataRef: j } = E.context, N = r(() => j.current.floatingContext?.nodeId), F = u === !1, I = ye(O) && F, L = v(u), R = v(m), z = v(ce), Te = v(D), B = _e(Ce), V = se(), H = M.useRef(!1), U = M.useRef(!1), W = M.useRef(!1), Oe = M.useRef(null), K = M.useRef(""), q = M.useRef(""), J = M.useRef(null), Y = M.useRef(null), Pe = i(J, Se, V?.beforeInsideRef), Fe = i(Y, V?.afterInsideRef), Ie = ve(), X = ve(), Le = l(), Re = V != null, Z = xe(k), Q = r((e = Z) => e ? le(e) : []), $ = r(() => we?.().filter((e) => e != null) ?? []);
	M.useEffect(() => {
		if (a || !g) return;
		function e(e) {
			e.key === "Tab" && S(Z, w(y(Z))) && Q().length === 0 && !I && te(e);
		}
		let t = y(Z);
		return _(t, "keydown", e);
	}, [
		a,
		Z,
		g,
		I,
		Q
	]), M.useEffect(() => {
		if (a || !D) return;
		let e = y(Z);
		function t() {
			W.current = !1;
		}
		function n(e) {
			let t = C(e), n = $(), r = S(k, t) || S(O, t) || S(V?.portalNode, t) || n.some((e) => e === t || S(e, t));
			W.current = !r, q.current = e.pointerType || "keyboard", t?.closest("[data-base-ui-click-trigger]") && (U.current = !0, X.start(0, () => {
				U.current = !1;
			}));
		}
		function r() {
			q.current = "keyboard";
		}
		return he(_(e, "pointerdown", n, !0), _(e, "pointerup", t, !0), _(e, "pointercancel", t, !0), _(e, "keydown", r, !0), t);
	}, [
		a,
		k,
		O,
		Z,
		D,
		V,
		X,
		$
	]), M.useEffect(() => {
		if (a || !b) return;
		let e = y(Z);
		function t() {
			U.current = !0, X.start(0, () => {
				U.current = !1;
			});
		}
		function n(e) {
			let t = C(e);
			me(t) && (Oe.current = t);
		}
		function r(t) {
			let n = t.relatedTarget, r = t.currentTarget, i = C(t);
			g && n == null && i != null && S(k, i) && Ae(i), queueMicrotask(() => {
				let a = N(), o = E.context.triggerElements, l = $(), u = n?.hasAttribute(ae("focus-guard")) && [
					J.current,
					Y.current,
					V?.beforeInsideRef.current,
					V?.afterInsideRef.current,
					V?.beforeOutsideRef.current,
					V?.afterOutsideRef.current,
					d(T),
					d(x)
				].includes(n), f = !(S(O, n) || S(k, n) || S(n, k) || S(V?.portalNode, n) || l.some((e) => e === n || S(e, n)) || n != null && o.hasElement(n) || o.hasMatchingElement((e) => S(e, n)) || u || B && (fe(B.nodesRef.current, a).find((e) => S(e.context?.elements.floating, n) || S(e.context?.elements.domReference, n)) || ge(B.nodesRef.current, a).find((e) => [e.context?.elements.floating, xe(e.context?.elements.floating)].includes(n) || e.context?.elements.domReference === n)));
				if (r === O && Z && Ne(Z), h && r !== O && !ne(i) && w(e) === e.body) {
					if (p(Z) && (Z.focus(), h === "popup")) {
						Le.request(() => {
							Z.focus();
						});
						return;
					}
					let e = Q(), t = Oe.current, n = (t && e.includes(t) ? t : null) || e[e.length - 1] || Z;
					p(n) && n.focus();
				}
				j.current.insideReactTree ? j.current.insideReactTree = !1 : (I || !g) && n && f && !U.current && (I || n !== je()) && (H.current = !0, E.setOpen(!1, s(c, t)));
			});
		}
		function i() {
			W.current || (j.current.insideReactTree = !0, Ie.start(0, () => {
				j.current.insideReactTree = !1;
			}));
		}
		let o = p(O) ? O : null;
		if (k || o) return he(o && _(o, "focusout", r), o && _(o, "pointerdown", t), k && _(k, "focusin", n), k && _(k, "focusout", r), k && V && _(k, "focusout", i, !0));
	}, [
		a,
		O,
		k,
		Z,
		g,
		B,
		V,
		E,
		b,
		h,
		Q,
		I,
		N,
		j,
		Ie,
		X,
		Le,
		x,
		T,
		$
	]), M.useEffect(() => {
		if (a || !k || !D) return;
		let e = Array.from(V?.portalNode?.querySelectorAll(`[${ae("portal")}]`) || []), t = (B ? ge(B.nodesRef.current, N()) : []).find((e) => ye(e.context?.elements.domReference || null))?.context?.elements.domReference, n = Ee([
			k,
			...e,
			J.current,
			Y.current,
			V?.beforeOutsideRef.current,
			V?.afterOutsideRef.current,
			...$(),
			t,
			d(T),
			d(x),
			I ? O : null
		].filter((e) => e != null), {
			ariaHidden: g || I,
			mark: !1
		}), r = Ee([k, ...e].filter((e) => e != null));
		return () => {
			r(), n();
		};
	}, [
		D,
		a,
		O,
		k,
		g,
		V,
		I,
		B,
		N,
		x,
		T,
		$
	]), o(() => {
		if (!D || a || !p(Z)) return;
		let e = y(Z), t = w(e);
		queueMicrotask(() => {
			let n = L.current, r = typeof n == "function" ? n(z.current || "") : n;
			if (r === void 0 || r === !1 || S(Z, t)) return;
			let i = null, a = () => (i ??= Q(Z), i[0] || Z), o;
			o = r === !0 || r === null ? a() : d(r), o ||= a();
			let s = S(Z, w(e));
			P(o, {
				preventScroll: o === Z,
				shouldFocus() {
					if (!Te.current) return !1;
					if (s) return !0;
					let t = w(e);
					return !(t !== o && S(Z, t));
				}
			});
		});
	}, [
		a,
		D,
		Z,
		Q,
		L,
		z,
		Te
	]), o(() => {
		if (a || !Z) return;
		let e = y(Z), t = w(e), n = z.current == null;
		Ae(t);
		function r(e) {
			if (e.open || (K.current = De(e.nativeEvent, q.current)), e.reason === "trigger-hover" && e.nativeEvent.type === "mouseleave" && (H.current = !0), e.reason === "outside-press") {
				if (e.nested) H.current = !1;
				else if (re(e.nativeEvent) || ee(e.nativeEvent)) H.current = !1;
				else {
					let e = !1;
					y(Z).createElement("div").focus({ get preventScroll() {
						return e = !0, !1;
					} }), e ? H.current = !1 : H.current = !0;
				}
			}
		}
		A.on("openchange", r);
		function i() {
			let e = R.current, r = typeof e == "function" ? e(K.current) : e;
			if (r === void 0 || r === !1) return null;
			r === null && (r = !0);
			let i = O?.isConnected ? O : null, a = t?.isConnected && f(t) !== "body" ? t : null, o = n ? a || i : i || a;
			return o ||= je() || null, typeof r == "boolean" ? o : d(r) || o || null;
		}
		return () => {
			A.off("openchange", r);
			let t = w(e), n = $(), a = S(k, t) || n.some((e) => e === t || S(e, t)) || B && fe(B.nodesRef.current, N(), !1).some((e) => S(e.context?.elements.floating, t)), o = R.current, s = i();
			queueMicrotask(() => {
				let n = Me(s), r = typeof o != "boolean";
				o && !H.current && p(n) && (r || n === t || t === e.body || a) && n.focus({ preventScroll: !0 }), H.current = !1;
			});
		};
	}, [
		a,
		k,
		Z,
		R,
		z,
		A,
		B,
		O,
		N,
		$
	]), o(() => {
		if (!ie || D || !k) return;
		let e = w(y(k));
		p(e) && be(e) && S(k, e) && e.blur();
	}, [D, k]), o(() => {
		if (!a && V) return V.setFocusManagerState({
			modal: g,
			closeOnFocusOut: b,
			open: D,
			onOpenChange: E.setOpen,
			domReference: O
		}), () => {
			V.setFocusManagerState(null);
		};
	}, [
		a,
		V,
		g,
		D,
		E,
		b,
		O
	]), o(() => {
		if (!a && Z) return Ne(Z), () => {
			queueMicrotask(ke);
		};
	}, [a, Z]);
	let ze = !a && (!g || !I) && (Re || g);
	return /*#__PURE__*/ (0, G.jsxs)(M.Fragment, { children: [
		ze && /*#__PURE__*/ (0, G.jsx)(pe, {
			"data-type": "inside",
			ref: Pe,
			onFocus: (e) => {
				if (g) {
					let e = Q();
					P(e[e.length - 1]);
				} else V?.portalNode && (H.current = !1, oe(e, V.portalNode) ? ue(O)?.focus() : d(T ?? V.beforeOutsideRef)?.focus());
			}
		}),
		n,
		ze && /*#__PURE__*/ (0, G.jsx)(pe, {
			"data-type": "inside",
			ref: Fe,
			onFocus: (e) => {
				g ? P(Q()[0]) : V?.portalNode && (b && (H.current = !0), oe(e, V.portalNode) ? de(O)?.focus() : d(x ?? V.afterOutsideRef)?.focus());
			}
		})
	] });
}
// node_modules/@base-ui/react/utils/InternalBackdrop.mjs
var J = /*#__PURE__*/ M.forwardRef(function(e, t) {
	let { cutout: n, ...r } = e, i;
	if (n) {
		let e = n.getBoundingClientRect();
		i = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`;
	}
	return /*#__PURE__*/ (0, G.jsx)("div", {
		ref: t,
		role: "presentation",
		"data-base-ui-inert": "",
		...r,
		style: {
			position: "fixed",
			inset: 0,
			userSelect: "none",
			WebkitUserSelect: "none",
			clipPath: i
		}
	});
});
// node_modules/@base-ui/utils/useEnhancedClickHandler.mjs
function Y(e) {
	let t = M.useRef(""), n = M.useCallback((n) => {
		n.defaultPrevented || (t.current = n.pointerType, e(n, n.pointerType));
	}, [e]);
	return {
		onClick: M.useCallback((n) => {
			n.detail === 0 ? e(n, "keyboard") : ("pointerType" in n ? e(n, n.pointerType) : e(n, t.current), t.current = "");
		}, [e]),
		onPointerDown: n
	};
}
// node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
function Pe(e, t) {
	let { onClick: n, onPointerDown: i } = Y(r((n, r) => {
		(typeof e == "function" ? e() : e) || t(r || (b ? "touch" : ""));
	}));
	return M.useMemo(() => ({
		onClick: n,
		onPointerDown: i
	}), [n, i]);
}
function Fe(e) {
	let [t, n] = M.useState(null), r = Pe(e, n);
	return T(e, (t) => {
		t && !e && n(null);
	}), M.useMemo(() => ({
		openMethod: t,
		triggerProps: r
	}), [t, r]);
}
export { P as a, q as i, Pe as n, j as o, J as r, Fe as t };
