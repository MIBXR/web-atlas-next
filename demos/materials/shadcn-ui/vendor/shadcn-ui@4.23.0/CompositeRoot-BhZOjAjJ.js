import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { a as n, l as r, o as i, t as a } from "./useRenderElement-Bc91YjHo.js";
import { t as o } from "./CompositeList-Br8uoKbd.js";
import { t as s } from "./isElementDisabled-Cqeh0fXb.js";
import { t as c } from "./useStableCallback-BmDujACN.js";
import { t as l } from "./useIsoLayoutEffect-B0B6th0o.js";
import { _ as u, a as d, c as f, g as p, h as m, i as h, l as g, m as _, n as v, o as y, r as b, t as x, u as S } from "./composite-DtpIpLt3.js";
import { r as C } from "./shadowDom-D66trjQm.js";
import { i as w, o as T, r as E, s as D, t as O } from "./composite-BYPOq3H3.js";
import { n as k } from "./useButton-CMNj7XNN.js";
import { t as A } from "./DirectionContext-CBHZ_yWZ.js";
import { t as j } from "./jsx-runtime-lAxUcZjR.js";
// node_modules/@base-ui/react/internals/composite/constants.mjs
var M = /* @__PURE__ */ e(t(), 1), N = "data-composite-item-active", P = [];
function F(e) {
	let { loopFocus: t = !0, orientation: n = "both", grid: i, onLoop: a, direction: o, highlightedIndex: S, onHighlightedIndexChange: k, rootRef: A, enableHomeAndEndKeys: j = !1, stopEventPropagation: N = !1, disabledIndices: F, modifierKeys: L = P } = e, [R, z] = M.useState(0), B = i != null, V = M.useRef(null), H = r(V, A), U = M.useRef([]), W = M.useRef(!1), G = S ?? R, K = c((e, t = !1) => {
		if ((k ?? z)(e), t) {
			let t = U.current[e];
			u(V.current, t, o, n);
		}
	}), q = c((e) => {
		if (e.size === 0 || W.current) return;
		W.current = !0;
		let t = Array.from(e.keys()), r = t.find((e) => e?.hasAttribute("data-composite-item-active")) ?? null, i = r ? t.indexOf(r) : -1;
		if (i !== -1) K(i);
		else if (D(t, G, F)) {
			let e = O(t, { disabledIndices: F });
			T(t, e) || K(e);
		}
		u(V.current, r, o, n);
	});
	l(() => {
		if (F == null || S != null || !W.current) return;
		let e = U.current;
		if (D(e, G, F)) {
			let t = O(e, { disabledIndices: F });
			T(e, t) || K(t);
		}
	}, [
		F,
		S,
		G,
		U,
		K
	]);
	let J = c((e, t, n) => a ? a(e, t, n, U) : n), Y = c((e) => {
		let r = j ? y : v;
		if (!r.has(e.key) || I(e, L) || !V.current) return;
		let c = o === "rtl", l = c ? b : h, u = {
			horizontal: l,
			vertical: x,
			both: l
		}[n], S = c ? h : b, D = {
			horizontal: S,
			vertical: d,
			both: S
		}[n], k = C(e.nativeEvent);
		if (k != null && p(k) && !s(k)) {
			let t = k.selectionStart, n = k.selectionEnd, r = k.value ?? "";
			if (t == null || e.shiftKey || t !== n || e.key !== D && t < r.length || e.key !== u && t > 0) return;
		}
		let A = G, M = w(U, F), P = E(U, F);
		i != null && (A = i({
			disabledIndices: F,
			elementsRef: U,
			event: e,
			highlightedIndex: G,
			loopFocus: t,
			maxIndex: P,
			minIndex: M,
			onLoop: J,
			orientation: n,
			rtl: c
		}));
		let R = {
			horizontal: [l],
			vertical: [x],
			both: [l, x]
		}[n], z = {
			horizontal: [S],
			vertical: [d],
			both: [S, d]
		}[n], H = B ? r : {
			horizontal: j ? g : f,
			vertical: j ? m : _,
			both: r
		}[n];
		j && (e.key === "Home" ? A = M : e.key === "End" && (A = P)), A === G && (R.includes(e.key) || z.includes(e.key)) && (t && A === P && R.includes(e.key) ? (A = M, a && (A = a(e, G, A, U))) : t && A === M && z.includes(e.key) ? (A = P, a && (A = a(e, G, A, U))) : A = O(U.current, {
			startingIndex: A,
			decrement: z.includes(e.key),
			disabledIndices: F
		})), A !== G && !T(U.current, A) && (N && e.stopPropagation(), H.has(e.key) && e.preventDefault(), K(A, !0), queueMicrotask(() => {
			U.current[A]?.focus();
		}));
	});
	return {
		props: {
			ref: H,
			onFocus(e) {
				let t = V.current, n = C(e.nativeEvent);
				t && n != null && p(n) && n.setSelectionRange(0, n.value.length ?? 0);
			},
			onKeyDown: Y
		},
		highlightedIndex: G,
		onHighlightedIndexChange: K,
		elementsRef: U,
		disabledIndices: F,
		onMapChange: q,
		relayKeyboardEvent: Y
	};
}
function I(e, t) {
	for (let n of S.values()) if (!t.includes(n) && e.getModifierState(n)) return !0;
	return !1;
}
// node_modules/@base-ui/react/internals/composite/root/CompositeRoot.mjs
var L = j();
function R(e) {
	let { render: t, className: r, style: s, refs: c = n, props: l = n, state: u = i, stateAttributesMapping: d, highlightedIndex: f, onHighlightedIndexChange: p, orientation: m, grid: h, loopFocus: g, onLoop: _, enableHomeAndEndKeys: v, onMapChange: y, stopEventPropagation: b = !0, rootRef: x, disabledIndices: S, modifierKeys: C, highlightItemOnHover: w = !1, tag: T = "div", ...E } = e, { props: D, highlightedIndex: O, onHighlightedIndexChange: j, elementsRef: N, onMapChange: P, relayKeyboardEvent: I } = F({
		grid: h,
		loopFocus: g,
		onLoop: _,
		orientation: m,
		highlightedIndex: f,
		onHighlightedIndexChange: p,
		rootRef: x,
		stopEventPropagation: b,
		enableHomeAndEndKeys: v,
		direction: A(),
		disabledIndices: S,
		modifierKeys: C
	}), R = a(T, e, {
		state: u,
		ref: c,
		props: [
			D,
			...l,
			E
		],
		stateAttributesMapping: d
	}), z = M.useMemo(() => ({
		highlightedIndex: O,
		onHighlightedIndexChange: j,
		highlightItemOnHover: w,
		relayKeyboardEvent: I
	}), [
		O,
		j,
		w,
		I
	]);
	return /*#__PURE__*/ (0, L.jsx)(k.Provider, {
		value: z,
		children: /*#__PURE__*/ (0, L.jsx)(o, {
			elementsRef: N,
			onMapChange: (e) => {
				y?.(e), P(e);
			},
			children: R
		})
	});
}
export { N as n, R as t };
