import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./useStableCallback-BmDujACN.js";
import { a as r } from "./useRenderElement-Bc91YjHo.js";
import { t as i } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as a, u as ee, y as o } from "./createBaseUIEventDetails-DG51vPHx.js";
import { n as te } from "./useAnimationFrame-CMIvKrBf.js";
import { f as s } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as c } from "./useValueAsRef-0u0FW33N.js";
import { t as l } from "./owner-C-FapX6G.js";
import { M as ne, N as u, a as d, i as f, j as p, o as m, r as h, s as re, t as g } from "./composite-BYPOq3H3.js";
import { v as _, y as v } from "./popupStateMapping-CSyRbb7j.js";
import { i as y, n as b, r as x, t as S } from "./constants-BQOuGgoN.js";
import { n as C } from "./useTimeout-CP4j_cva.js";
import { a as ie } from "./useOpenInteractionType-DPoQCspH.js";
import { n as w, r as ae, t as oe } from "./shadowDom-D66trjQm.js";
import { o as se, t as ce } from "./element-DbCN1dg9.js";
// node_modules/@base-ui/react/floating-ui-react/hooks/useListNavigation.mjs
var T = /* @__PURE__ */ e(t(), 1), E = "Escape";
function D(e, t, n) {
	switch (e) {
		case "vertical": return t;
		case "horizontal": return n;
		default: return t || n;
	}
}
function O(e, t) {
	return D(t, e === "ArrowUp" || e === "ArrowDown", e === "ArrowLeft" || e === "ArrowRight");
}
function le(e, t, n) {
	return D(t, e === "ArrowDown", n ? e === "ArrowLeft" : e === "ArrowRight") || e === "Enter" || e === " " || e === "";
}
function ue(e, t, n) {
	return D(t, n ? e === b : e === x, e === S);
}
function de(e, t, n, r) {
	return t === "both" || t === "horizontal" && r ? e === E : D(t, n ? e === x : e === b, e === y);
}
function k(e, t) {
	let { listRef: r, activeIndex: d, onNavigate: re = () => {}, enabled: y = !0, selectedIndex: b = null, allowEscape: x = !1, loopFocus: S = !1, nested: C = !1, rtl: E = !1, virtual: D = !1, focusItemOnOpen: k = "auto", focusItemOnHover: A = !0, openOnArrowKeyDown: fe = !0, disabledIndices: j = void 0, orientation: M = "vertical", parentOrientation: pe, id: me, resetOnPointerLeave: he = !0, externalTree: ge, grid: _e } = t, ve = _e != null, N = "rootStore" in e ? e.rootStore : e, P = N.useState("open"), F = N.useState("floatingElement"), I = N.useState("domReferenceElement"), ye = N.context.dataRef, be = ce(F), xe = se(I), L = c(be), Se = _(), R = v(ge), z = T.useRef(k), B = T.useRef(b ?? -1), V = T.useRef(null), H = T.useRef(!0), U = n((e) => {
		re(B.current === -1 ? null : B.current, e);
	}), W = T.useRef(!!F), Ce = T.useRef(P), G = T.useRef(!1), K = T.useRef(!1), we = T.useRef(null), Te = c(j), q = c(P), J = c(b), Ee = c(he), De = te(), Oe = te(), ke = n(() => {
		function e(e) {
			D ? R?.events.emit("virtualfocus", e) : we.current = ie(e, {
				sync: G.current,
				preventScroll: !0
			});
		}
		let t = r.current[B.current], n = K.current;
		t && e(t), (G.current ? (e) => e() : (e) => De.request(e))(() => {
			let i = r.current[B.current] || t;
			i && (t || e(i), Z && (n || !H.current) && i.scrollIntoView?.({
				block: "nearest",
				inline: "nearest"
			}));
		});
	});
	i(() => {
		ye.current.orientation = M;
	}, [ye, M]), i(() => {
		y && (P && F ? (B.current = b ?? -1, z.current && b != null && (K.current = !0, U())) : W.current && (B.current = -1, U()));
	}, [
		y,
		P,
		F,
		b,
		U
	]), i(() => {
		if (y) {
			if (!P) G.current = !1;
			else if (F) {
				if (d == null) {
					if (G.current = !1, J.current != null) return;
					if (W.current && (B.current = -1, ke()), (!Ce.current || !W.current) && z.current && (V.current != null || z.current === !0 && V.current == null)) {
						let e = 0, t = () => {
							r.current[0] == null ? (e < 2 && (e ? (e) => Oe.request(e) : queueMicrotask)(t), e += 1) : (B.current = V.current == null || le(V.current, M, E) || C ? f(r) : h(r), V.current = null, U());
						};
						t();
					}
				} else m(r.current, d) || (B.current = d, ke(), K.current = !1);
			}
		}
	}, [
		y,
		P,
		F,
		d,
		J,
		C,
		r,
		M,
		E,
		U,
		ke,
		Oe
	]), i(() => {
		if (!y || F || !R || D || !W.current) return;
		let e = R.nodesRef.current, t = e.find((e) => e.id === Se)?.context?.elements.floating, n = oe(l(I ?? t ?? null)), r = e.some((e) => e.context && w(e.context.elements.floating, n));
		t && !r && H.current && t.focus({ preventScroll: !0 });
	}, [
		y,
		F,
		I,
		R,
		Se,
		D
	]), i(() => {
		Ce.current = P, W.current = !!F;
	}), i(() => {
		P || (V.current = null, z.current = k);
	}, [P, k]);
	let Ae = d != null, je = n((e) => {
		if (!q.current) return;
		let t = r.current.indexOf(e.currentTarget);
		t !== -1 && (B.current !== t || d !== t) && (B.current = t, U(e));
	}), Y = n(() => pe ?? R?.nodesRef.current.find((e) => e.id === Se)?.context?.dataRef?.current.orientation), Me = n(() => f(r, Te.current)), X = n((e) => {
		if (H.current = !1, G.current = !0, e.which === 229 || !q.current && e.currentTarget === L.current) return;
		if (C && de(e.key, M, E, ve)) {
			O(e.key, Y()) || u(e), N.setOpen(!1, a(o, e.nativeEvent)), s(I) && (D ? R?.events.emit("virtualfocus", I) : I.focus());
			return;
		}
		let t = B.current, n = f(r, j), i = h(r, j);
		if (xe || (e.key === "Home" && (u(e), B.current = n, U(e)), e.key === "End" && (u(e), B.current = i, U(e))), _e != null) {
			let t = _e(e, B.current, r, M, S, E, j, n, i);
			if (t != null && (B.current = t, U(e)), M === "both") return;
		}
		if (O(e.key, M)) {
			if (u(e), P && !D && oe(e.currentTarget.ownerDocument) === e.currentTarget) {
				B.current = le(e.key, M, E) ? n : i, U(e);
				return;
			}
			le(e.key, M, E) ? S ? t >= i ? x && t !== r.current.length ? B.current = -1 : (G.current = !1, B.current = n) : B.current = g(r.current, {
				startingIndex: t,
				disabledIndices: j
			}) : B.current = Math.min(i, g(r.current, {
				startingIndex: t,
				disabledIndices: j
			})) : S ? t <= n ? x && t !== -1 ? B.current = r.current.length : (G.current = !1, B.current = i) : B.current = g(r.current, {
				startingIndex: t,
				decrement: !0,
				disabledIndices: j
			}) : B.current = Math.max(n, g(r.current, {
				startingIndex: t,
				decrement: !0,
				disabledIndices: j
			})), m(r.current, B.current) && (B.current = -1), U(e);
		}
	}), Z = T.useMemo(() => ({
		onFocus(e) {
			G.current = !0, je(e);
		},
		onClick: ({ currentTarget: e }) => e.focus({ preventScroll: !0 }),
		onMouseMove(e) {
			G.current = !0, K.current = !1, A && je(e);
		},
		onPointerLeave(e) {
			if (!q.current || !H.current || e.pointerType === "touch") return;
			G.current = !0;
			let t = e.relatedTarget;
			if (A && !r.current.includes(t) && Ee.current && (we.current?.(), we.current = null, B.current = -1, U(e), !D)) {
				let e = L.current, t = oe(l(e));
				e && w(e, t) && e.focus({ preventScroll: !0 });
			}
		}
	}), [
		je,
		q,
		L,
		A,
		r,
		U,
		Ee,
		D
	]), Q = T.useMemo(() => D && P && Ae && { "aria-activedescendant": `${me}-${d}` }, [
		D,
		P,
		Ae,
		me,
		d
	]), Ne = T.useMemo(() => ({
		"aria-orientation": M === "both" ? void 0 : M,
		...xe ? {} : Q,
		onKeyDown(e) {
			if (e.key === "Tab" && e.shiftKey && P && !D) {
				let t = ae(e.nativeEvent);
				if (t && !w(L.current, t)) return;
				u(e), N.setOpen(!1, a(ee, e.nativeEvent)), s(I) && I.focus();
			} else X(e);
		},
		onPointerMove() {
			H.current = !0;
		}
	}), [
		Q,
		X,
		L,
		M,
		xe,
		N,
		P,
		D,
		I
	]), $ = T.useMemo(() => {
		function e(e) {
			N.setOpen(!0, a(o, e.nativeEvent, e.currentTarget));
		}
		function t(e) {
			k === "auto" && p(e.nativeEvent) && (z.current = !D);
		}
		function n(e) {
			z.current = k, k === "auto" && ne(e.nativeEvent) && (z.current = !0);
		}
		return {
			onKeyDown(t) {
				let n = N.select("open");
				H.current = !1;
				let r = t.key.startsWith("Arrow"), i = ue(t.key, Y(), E), a = O(t.key, M), ee = (C ? i : a) || t.key === "Enter" || t.key.trim() === "";
				if (D && n) return X(t);
				if (n || fe || !r) {
					if (ee) {
						let e = O(t.key, Y());
						V.current = C && e ? null : t.key;
					}
					C ? i && (u(t), n ? (B.current = Me(), U(t)) : e(t)) : a && (J.current != null && (B.current = J.current), u(t), !n && fe ? e(t) : X(t), n && U(t));
				}
			},
			onFocus(e) {
				N.select("open") && !D && (B.current = -1, U(e));
			},
			onPointerDown: n,
			onPointerEnter: n,
			onMouseDown: t,
			onClick: t
		};
	}, [
		X,
		k,
		Me,
		C,
		U,
		N,
		fe,
		M,
		Y,
		E,
		J,
		D
	]), Pe = T.useMemo(() => ({
		...Q,
		...$
	}), [Q, $]);
	return T.useMemo(() => y ? {
		reference: Pe,
		floating: Ne,
		item: Z,
		trigger: $
	} : {}, [
		y,
		Pe,
		Ne,
		$,
		Z
	]);
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useTypeahead.mjs
function A(e, t) {
	let { listRef: a, elementsRef: ee, activeIndex: o, onMatch: te, disabledIndices: s, onTyping: c, enabled: l = !0, resetMs: ne = 750, selectedIndex: f = null } = t, p = "rootStore" in e ? e.rootStore : e, m = p.useState("open"), h = C(), g = T.useRef(""), _ = T.useRef(f ?? o ?? -1), v = T.useRef(null), y = n((e) => {
		function t(e) {
			let t = ee?.current[e];
			return !t || d(t);
		}
		function n(e) {
			return t(e) ? s == null || !re(r, e, s) : !1;
		}
		function i(e, t, r = 0) {
			if (e.length === 0) return -1;
			let i = (r % e.length + e.length) % e.length, a = t.toLowerCase();
			for (let t = 0; t < e.length; t += 1) {
				let r = (i + t) % e.length;
				if (e[r]?.toLowerCase().startsWith(a) && n(r)) return r;
			}
			return -1;
		}
		let l = a.current;
		if (g.current.length > 0 && e.key === " " && (u(e), c?.(!0)), g.current.length > 0 && g.current[0] !== " " && i(l, g.current) === -1 && e.key !== " " && c?.(!1), l == null || e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return;
		m && e.key !== " " && (u(e), c?.(!0));
		let p = g.current === "";
		p && (_.current = f ?? o ?? -1), l.every((e, t) => e && n(t) ? e[0]?.toLowerCase() !== e[1]?.toLowerCase() : !0) && g.current === e.key && (g.current = "", _.current = v.current), g.current += e.key, h.start(ne, () => {
			g.current = "", _.current = v.current, c?.(!1);
		});
		let y = ((p ? f ?? o ?? -1 : _.current) ?? 0) + 1, b = i(l, g.current, y);
		b === -1 ? e.key !== " " && (g.current = "", c?.(!1)) : (te?.(b), v.current = b);
	}), b = n((e) => {
		let t = e.relatedTarget, n = p.select("domReferenceElement"), r = p.select("floatingElement");
		w(n, t) || w(r, t) || (h.clear(), g.current = "", _.current = v.current, c?.(!1));
	});
	i(() => {
		(m || f === null) && (h.clear(), v.current = null, g.current !== "" && (g.current = ""));
	}, [
		m,
		f,
		h
	]), i(() => {
		m && g.current === "" && (_.current = f ?? o ?? -1);
	}, [
		m,
		f,
		o
	]);
	let x = T.useMemo(() => ({
		onKeyDown: y,
		onBlur: b
	}), [y, b]);
	return T.useMemo(() => l ? {
		reference: x,
		floating: x
	} : {}, [l, x]);
}
export { k as n, A as t };
