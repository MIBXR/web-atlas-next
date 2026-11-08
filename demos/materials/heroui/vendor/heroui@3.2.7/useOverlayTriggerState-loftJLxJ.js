import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
import { L as n, O as r, S as i, b as a, v as o, x as s, y as c } from "./useKeyboard-CqNSkGJ-.js";
import { t as l } from "./useLayoutEffect-Bx2X4QEP.js";
import { n as u, r as d, s as f } from "./utils-UBVJ5JR_.js";
import { t as p } from "./filterDOMProps-CJYy6efO.js";
import { t as m } from "./useResizeObserver-Sa6_Psnw.js";
import { t as h } from "./number-DEd1Mp8h.js";
import { t as g } from "./I18nProvider-zGzu-4zN.js";
import { t as _ } from "./useControlledState-BbVlCDcL.js";
// node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var v = /* @__PURE__ */ e(t(), 1), y = /*#__PURE__*/ (0, v.createContext)({ placement: "bottom" }), b = /*#__PURE__*/ (0, v.forwardRef)(function(e, t) {
	[e, t] = u(e, t, y);
	let n = e.placement, r = {
		position: "absolute",
		transform: n === "top" || n === "bottom" ? "translateX(-50%)" : "translateY(-50%)"
	};
	n != null && (r[n] = "100%");
	let i = d({
		...e,
		defaultClassName: "react-aria-OverlayArrow",
		values: { placement: n }
	});
	i.style && Object.keys(i.style).forEach((e) => i.style[e] === void 0 && delete i.style[e]);
	let a = p(e);
	return /*#__PURE__*/ v.createElement(f.div, {
		...a,
		...i,
		style: {
			...r,
			...i.style
		},
		ref: t,
		"data-placement": n
	});
}), x = {
	top: "top",
	bottom: "top",
	left: "left",
	right: "left"
}, S = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, C = {
	top: "left",
	left: "top"
}, w = {
	top: "height",
	left: "width"
}, T = {
	width: "totalWidth",
	height: "totalHeight"
}, E = {}, D = () => typeof document < "u" ? window.visualViewport : null;
function O(e, t) {
	let r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = {}, u = (t?.scale ?? 1) > 1;
	if (e.tagName === "BODY" || e.tagName === "HTML") {
		let n = document.documentElement;
		a = n.clientWidth, o = n.clientHeight, r = t?.width ?? a, i = t?.height ?? o, l.top = n.scrollTop || e.scrollTop, l.left = n.scrollLeft || e.scrollLeft, t && (s = Math.max(0, t.pageTop - (l.top ?? 0)), c = Math.max(0, t.pageLeft - (l.left ?? 0)));
	} else ({width: r, height: i, top: s, left: c} = z(e, !1)), l.top = e.scrollTop, l.left = e.scrollLeft, a = r, o = i;
	return n() && (e.tagName === "BODY" || e.tagName === "HTML") && u && (l.top = 0, l.left = 0, s = t?.pageTop ?? 0, c = t?.pageLeft ?? 0), {
		width: r,
		height: i,
		totalWidth: a,
		totalHeight: o,
		scroll: l,
		top: s,
		left: c
	};
}
function k(e) {
	return {
		top: e.scrollTop,
		left: e.scrollLeft,
		width: e.scrollWidth,
		height: e.scrollHeight
	};
}
function A(e, t, n, r, i, a, o) {
	let s = i.scroll[e] ?? 0, c = r[w[e]], l = o[e] + r.scroll[x[e]] + a, u = o[e] + r.scroll[x[e]] + c - a, d = t - s + r.scroll[x[e]] + o[e] - r[x[e]], f = t - s + n + r.scroll[x[e]] + o[e] - r[x[e]];
	return d < l ? l - d : f > u ? Math.max(u - f, l - d) : 0;
}
function j(e) {
	let t = window.getComputedStyle(e);
	return {
		top: parseInt(t.marginTop, 10) || 0,
		bottom: parseInt(t.marginBottom, 10) || 0,
		left: parseInt(t.marginLeft, 10) || 0,
		right: parseInt(t.marginRight, 10) || 0
	};
}
function M(e) {
	if (E[e]) return E[e];
	let [t, n] = e.split(" "), r = x[t] || "right", i = C[r];
	x[n] || (n = "center");
	let a = w[r], o = w[i];
	return E[e] = {
		placement: t,
		crossPlacement: n,
		axis: r,
		crossAxis: i,
		size: a,
		crossSize: o
	}, E[e];
}
function N(e, t, n, r, i, a, o, s, c, l, u) {
	let { placement: d, crossPlacement: f, axis: p, crossAxis: m, size: g, crossSize: _ } = r, v = {};
	v[m] = e[m] ?? 0, f === "center" ? v[m] += ((e[_] ?? 0) - (n[_] ?? 0)) / 2 : f !== m && (v[m] += (e[_] ?? 0) - (n[_] ?? 0)), v[m] += a;
	let y = e[m] - n[_] + c + l, b = e[m] + e[_] - c - l;
	if (v[m] = h(v[m], y, b), d === p) {
		let t = s ? u[g] : u[T[g]];
		v[S[p]] = Math.floor(t - e[p] + i);
	} else v[p] = Math.floor(e[p] + e[g] + i);
	return v;
}
function P(e, t, n, r, i, a, o, s, c, l, u) {
	let d = (e.top == null ? c[T.height] - (e.bottom ?? 0) - o : e.top) - (c.scroll.top ?? 0), f = l ? n.top : 0, p = {
		top: Math.max(t.top + f, (u?.offsetTop ?? t.top) + f),
		bottom: Math.min(t.top + t.height + f, (u?.offsetTop ?? 0) + (u?.height ?? 0))
	};
	return s === "top" ? Math.max(0, d + o - p.top - ((i.top ?? 0) + (i.bottom ?? 0) + a)) : Math.max(0, p.bottom - d - ((i.top ?? 0) + (i.bottom ?? 0) + a));
}
function F(e, t, n, r, i, a, o, s) {
	let { placement: c, axis: l, size: u } = a;
	return c === l ? Math.max(0, n[l] - (o.scroll[l] ?? 0) - (e[l] + (s ? t[l] : 0)) - (r[l] ?? 0) - r[S[l]] - i) : Math.max(0, e[u] + e[l] + (s ? t[l] : 0) - n[l] - n[u] + (o.scroll[l] ?? 0) - (r[l] ?? 0) - r[S[l]] - i);
}
function I(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, g, _, v) {
	let y = M(e), { size: b, crossAxis: C, crossSize: w, placement: T, crossPlacement: E } = y, D = N(t, s, n, y, u, d, l, f, m, g, c), O = u, k = F(s, l, t, i, a + u, y, c, _);
	if (o && n[b] > k) {
		let e = M(`${S[T]} ${E}`), r = N(t, s, n, e, u, d, l, f, m, g, c);
		F(s, l, t, i, a + u, e, c, _) > k && (y = e, D = r, O = u);
	}
	let j = "bottom";
	y.axis === "top" ? y.placement === "top" ? j = "top" : y.placement === "bottom" && (j = "bottom") : y.crossAxis === "top" && (y.crossPlacement === "top" ? j = "bottom" : y.crossPlacement === "bottom" && (j = "top"));
	let I = A(C, D[C], n[w], s, c, a, l);
	D[C] += I;
	let L = P(D, s, l, f, i, a, n.height, j, c, _, v);
	p && p < L && (L = p), n.height = Math.min(n.height, L), D = N(t, s, n, y, O, d, l, f, m, g, c), I = A(C, D[C], n[w], s, c, a, l), D[C] += I;
	let R = {}, z = t[C] - D[C] - i[x[C]], B = z + .5 * t[w], V = m / 2 + g, H = x[C] === "left" ? (i.left ?? 0) + (i.right ?? 0) : (i.top ?? 0) + (i.bottom ?? 0), U = n[w] - H - m / 2 - g, W = t[C] + m / 2 - (D[C] + i[x[C]]), G = t[C] + t[w] - m / 2 - (D[C] + i[x[C]]), K = h(B, W, G);
	R[C] = h(K, V, U), {placement: T, crossPlacement: E} = y, m ? z = R[C] : E === "right" ? z += t[w] : E === "center" && (z += t[w] / 2);
	let q = T === "left" || T === "top" ? n[b] : 0, J = {
		x: T === "top" || T === "bottom" ? z : q,
		y: T === "left" || T === "right" ? z : q
	};
	return {
		position: D,
		maxHeight: L,
		arrowOffsetLeft: R.left,
		arrowOffsetTop: R.top,
		placement: T,
		triggerAnchorPoint: J
	};
}
function L(e) {
	let { placement: t, targetNode: n, overlayNode: r, scrollNode: i, padding: a, shouldFlip: s, boundaryElement: c, offset: l, crossOffset: u, maxHeight: d, arrowSize: f = 0, arrowBoundaryOffset: p = 0, targetRect: m } = e, h = D(), g = r instanceof HTMLElement ? V(r) : document.documentElement, _ = g === document.documentElement, v = window.getComputedStyle(g).position, y = !!v && v !== "static", b = _ ? z(n, !1, m) : B(n, g, !1, m);
	if (!_) {
		let { marginTop: e, marginLeft: t } = window.getComputedStyle(n);
		b.top += parseInt(e, 10) || 0, b.left += parseInt(t, 10) || 0;
	}
	let x = z(r, !0), S = j(r);
	x.width += (S.left ?? 0) + (S.right ?? 0), x.height += (S.top ?? 0) + (S.bottom ?? 0);
	let C = k(i), w = O(c, h), T = O(g, h), E;
	if ((c.tagName === "BODY" || c.tagName === "HTML") && !_) {
		let e = R(g, !1);
		E = {
			top: -(e.top - w.top),
			left: -(e.left - w.left),
			width: 0,
			height: 0
		};
	} else E = (c.tagName === "BODY" || c.tagName === "HTML") && _ ? {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	} : B(c, g, !1);
	let A = o(c, g);
	return I(t, b, x, C, S, a, s, w, T, E, l, u, y, d, f, p, A, h);
}
function R(e, t) {
	let { top: n, left: r, width: i, height: a } = e.getBoundingClientRect();
	return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (i = e.offsetWidth, a = e.offsetHeight), {
		top: n,
		left: r,
		width: i,
		height: a
	};
}
function z(e, t, n) {
	let { top: r, left: i, width: a, height: o } = n || R(e, t), { scrollTop: s, scrollLeft: c, clientTop: l, clientLeft: u } = document.documentElement;
	return {
		top: r + s - l,
		left: i + c - u,
		width: a,
		height: o
	};
}
function B(e, t, n, r) {
	let i = window.getComputedStyle(e), a;
	if (i.position === "fixed") a = r || R(e, n);
	else {
		a = z(e, n, r);
		let i = z(t, n), o = window.getComputedStyle(t);
		i.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop, i.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft, a.top -= i.top, a.left -= i.left;
	}
	return a.top -= parseInt(i.marginTop, 10) || 0, a.left -= parseInt(i.marginLeft, 10) || 0, a;
}
function V(e) {
	let t = e.offsetParent;
	if (t && t === document.body && window.getComputedStyle(t).position === "static" && !H(t) && (t = document.documentElement), t == null) for (t = e.parentElement; t && !H(t);) t = t.parentElement;
	return t || document.documentElement;
}
function H(e) {
	let t = window.getComputedStyle(e);
	return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
// node_modules/react-aria/dist/private/overlays/useCloseOnScroll.mjs
var U = /* @__PURE__ */ new WeakMap();
function W(e) {
	let { triggerRef: t, isOpen: n, onClose: a } = e;
	(0, v.useEffect)(() => !n || a === null ? void 0 : r(s(t.current), "scroll", (e) => {
		let n = i(e);
		if (!t.current || n instanceof Node && !o(n, t.current) || n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) return;
		let r = a || U.get(t.current);
		r && r();
	}, !0), [
		n,
		a,
		t
	]);
}
// node_modules/react-aria/dist/private/overlays/useOverlayPosition.mjs
var G = typeof document < "u" ? window.visualViewport : null;
function K(e) {
	let { direction: t } = g(), { arrowSize: n, targetRef: i, overlayRef: o, arrowRef: u, scrollRef: d = o, placement: f = "bottom", containerPadding: p = 12, shouldFlip: h = !0, boundaryElement: _ = typeof document < "u" ? document.body : null, offset: y = 0, crossOffset: b = 0, shouldUpdatePosition: x = !0, isOpen: S = !0, onClose: C, maxHeight: w, arrowBoundaryOffset: T = 0, getTargetRect: E } = e, [D, O] = (0, v.useState)(null), k = [
		x,
		f,
		o.current,
		i.current,
		u?.current,
		d.current,
		p,
		h,
		_,
		y,
		b,
		S,
		t,
		w,
		T,
		n
	], A = (0, v.useRef)(G?.scale);
	(0, v.useEffect)(() => {
		S && (A.current = G?.scale);
	}, [S]);
	let j = (0, v.useCallback)(() => {
		if (x === !1 || !S || !o.current || !i.current || !_ || G?.scale !== A.current) return;
		let e = null;
		if (d.current && c(d.current)) {
			let t = a()?.getBoundingClientRect(), n = d.current.getBoundingClientRect();
			e = {
				type: "top",
				offset: (t?.top ?? 0) - n.top
			}, e.offset > n.height / 2 && (e.type = "bottom", e.offset = (t?.bottom ?? 0) - n.bottom);
		}
		let r = o.current;
		!w && o.current && (r.style.top = "0px", r.style.bottom = "", r.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
		let s = L({
			placement: J(f, t),
			overlayNode: o.current,
			targetNode: i.current,
			scrollNode: d.current || o.current,
			padding: p,
			shouldFlip: h,
			boundaryElement: _,
			offset: y,
			crossOffset: b,
			maxHeight: w,
			arrowSize: n ?? (u?.current ? R(u.current, !0).width : 0),
			arrowBoundaryOffset: T,
			targetRect: E?.(i.current)
		});
		if (!s.position) return;
		r.style.top = "", r.style.bottom = "", r.style.left = "", r.style.right = "", Object.keys(s.position).forEach((e) => r.style[e] = s.position[e] + "px"), r.style.maxHeight = s.maxHeight == null ? "" : s.maxHeight + "px";
		let l = a();
		if (e && l && d.current) {
			let t = l.getBoundingClientRect(), n = d.current.getBoundingClientRect(), r = t[e.type] - n[e.type];
			d.current.scrollTop += r - e.offset;
		}
		O(s);
	}, k);
	l(j, k), q(j), m({
		ref: o,
		onResize: j
	}), m({
		ref: i,
		onResize: j
	});
	let M = (0, v.useRef)(!1);
	l(() => {
		let e, t = () => {
			M.current = !0, clearTimeout(e), e = setTimeout(() => {
				M.current = !1;
			}, 500), j();
		}, n = () => {
			M.current && t();
		};
		G?.addEventListener("resize", t), G?.addEventListener("scroll", n);
		let i = r(s(window), "scroll", n);
		return () => {
			G?.removeEventListener("resize", t), G?.removeEventListener("scroll", n), i();
		};
	}, [j]);
	let N = (0, v.useCallback)(() => {
		M.current || C?.();
	}, [C, M]);
	return W({
		triggerRef: i,
		isOpen: S,
		onClose: C && N
	}), {
		overlayProps: { style: {
			position: D ? "absolute" : "fixed",
			top: D ? void 0 : 0,
			left: D ? void 0 : 0,
			zIndex: 1e5,
			...D?.position,
			maxHeight: D?.maxHeight ?? "100vh"
		} },
		placement: D?.placement ?? null,
		triggerAnchorPoint: D?.triggerAnchorPoint ?? null,
		arrowProps: {
			"aria-hidden": "true",
			role: "presentation",
			style: {
				left: D?.arrowOffsetLeft,
				top: D?.arrowOffsetTop
			}
		},
		updatePosition: j
	};
}
function q(e) {
	l(() => (window.addEventListener("resize", e, !1), () => {
		window.removeEventListener("resize", e, !1);
	}), [e]);
}
function J(e, t) {
	return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
// node_modules/react-aria/dist/private/overlays/PortalProvider.mjs
var Y = /*#__PURE__*/ (0, v.createContext)({});
function X() {
	return (0, v.useContext)(Y) ?? {};
}
// node_modules/react-stately/dist/private/overlays/useOverlayTriggerState.mjs
function Z(e) {
	let [t, n] = _(e.isOpen, e.defaultOpen || !1, e.onOpenChange), [r, i] = (0, v.useState)(null);
	return {
		isOpen: t,
		setOpen: n,
		open: (0, v.useCallback)(() => {
			n(!0);
		}, [n]),
		close: (0, v.useCallback)(() => {
			n(!1);
		}, [n]),
		toggle: (0, v.useCallback)(() => {
			n(!t);
		}, [n, t]),
		point: r,
		setPoint: i
	};
}
export { y as a, U as i, X as n, b as o, K as r, Z as t };
