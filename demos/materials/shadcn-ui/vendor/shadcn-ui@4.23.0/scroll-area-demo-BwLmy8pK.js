import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./dist-DCi9UB7o.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
import { t as i } from "./separator-DPldDFzU.js";
import { t as a, u as o } from "./useRenderElement-Bc91YjHo.js";
import { t as s } from "./useStableCallback-BmDujACN.js";
import { n as c } from "./useTimeout-CP4j_cva.js";
import { r as l, t as u } from "./styles-BjH6CyQI.js";
import { t as d } from "./useBaseUiId-BwhhMxTY.js";
import { n as f } from "./engine-DPfrNvZF.js";
import { n as ee, r as p } from "./shadowDom-D66trjQm.js";
import { t as m } from "./CSPContext-DMv4_iW-.js";
import { t as h } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as g } from "./DirectionContext-CBHZ_yWZ.js";
import { t as _ } from "./clamp-BEXCFueL.js";
import { t as v } from "./addEventListener-EiVbnOnq.js";
// node_modules/@base-ui/react/scroll-area/root/ScrollAreaRootContext.mjs
var y = /* @__PURE__ */ e(t(), 1), b = /*#__PURE__*/ y.createContext(void 0);
function x() {
	let e = y.useContext(b);
	if (e === void 0) throw Error(o(53));
	return e;
}
// node_modules/@base-ui/react/scroll-area/root/ScrollAreaRootCssVars.mjs
var S = /*#__PURE__*/ function(e) {
	return e.scrollAreaCornerHeight = "--scroll-area-corner-height", e.scrollAreaCornerWidth = "--scroll-area-corner-width", e;
}({});
// node_modules/@base-ui/react/scroll-area/utils/getOffset.mjs
function C(e, t, n) {
	if (!e) return 0;
	let r = getComputedStyle(e), i = n === "x" ? "Inline" : "Block";
	return n === "x" && t === "margin" ? parseFloat(r[`${t}InlineStart`]) * 2 : parseFloat(r[`${t}${i}Start`]) + parseFloat(r[`${t}${i}End`]);
}
// node_modules/@base-ui/react/scroll-area/scrollbar/ScrollAreaScrollbarDataAttributes.mjs
var w = /*#__PURE__*/ function(e) {
	return e.orientation = "data-orientation", e.hovering = "data-hovering", e.scrolling = "data-scrolling", e.hasOverflowX = "data-has-overflow-x", e.hasOverflowY = "data-has-overflow-y", e.overflowXStart = "data-overflow-x-start", e.overflowXEnd = "data-overflow-x-end", e.overflowYStart = "data-overflow-y-start", e.overflowYEnd = "data-overflow-y-end", e;
}({}), T = /*#__PURE__*/ function(e) {
	return e.scrolling = "data-scrolling", e.hasOverflowX = "data-has-overflow-x", e.hasOverflowY = "data-has-overflow-y", e.overflowXStart = "data-overflow-x-start", e.overflowXEnd = "data-overflow-x-end", e.overflowYStart = "data-overflow-y-start", e.overflowYEnd = "data-overflow-y-end", e;
}({}), E = {
	hasOverflowX: (e) => e ? { [T.hasOverflowX]: "" } : null,
	hasOverflowY: (e) => e ? { [T.hasOverflowY]: "" } : null,
	overflowXStart: (e) => e ? { [T.overflowXStart]: "" } : null,
	overflowXEnd: (e) => e ? { [T.overflowXEnd]: "" } : null,
	overflowYStart: (e) => e ? { [T.overflowYStart]: "" } : null,
	overflowYEnd: (e) => e ? { [T.overflowYEnd]: "" } : null,
	cornerHidden: () => null
}, D = r(), te = {
	x: 0,
	y: 0
}, O = {
	width: 0,
	height: 0
}, k = {
	xStart: !1,
	xEnd: !1,
	yStart: !1,
	yEnd: !1
}, A = {
	x: !0,
	y: !0,
	corner: !0
}, j = /*#__PURE__*/ y.forwardRef(function(e, t) {
	let { render: n, className: r, overflowEdgeThreshold: i, style: o, ...l } = e, { xStart: f, xEnd: p, yStart: h, yEnd: g } = ne(i), _ = d(), v = c(), x = c(), { nonce: T, disableStyleElements: j } = m(), [M, N] = y.useState(!1), [P, F] = y.useState(!1), [I, L] = y.useState(!1), [re, R] = y.useState(!1), [z, B] = y.useState(!1), [V, ie] = y.useState(O), [H, U] = y.useState(O), [W, G] = y.useState(k), [K, ae] = y.useState(A), q = y.useRef(null), J = y.useRef(null), Y = y.useRef(null), X = y.useRef(null), Z = y.useRef(null), Q = y.useRef(null), oe = y.useRef(null), se = y.useRef(!1), ce = y.useRef(0), le = y.useRef(0), ue = y.useRef(0), de = y.useRef(0), $ = y.useRef("vertical"), fe = y.useRef(te), pe = s((e) => {
		let t = e.x - fe.current.x, n = e.y - fe.current.y;
		fe.current = e, n !== 0 && (L(!0), v.start(500, () => {
			L(!1);
		})), t !== 0 && (F(!0), x.start(500, () => {
			F(!1);
		}));
	}), me = s((e) => {
		e.button === 0 && (se.current = !0, ce.current = e.clientY, le.current = e.clientX, $.current = e.currentTarget.getAttribute(w.orientation), J.current && (ue.current = J.current.scrollTop, de.current = J.current.scrollLeft), Z.current && $.current === "vertical" && Z.current.setPointerCapture(e.pointerId), Q.current && $.current === "horizontal" && Q.current.setPointerCapture(e.pointerId));
	}), he = s((e) => {
		if (!se.current) return;
		let t = e.clientY - ce.current, n = e.clientX - le.current;
		if (J.current) {
			let r = J.current.scrollHeight, i = J.current.clientHeight, a = J.current.scrollWidth, o = J.current.clientWidth;
			if (Z.current && Y.current && $.current === "vertical") {
				let n = C(Y.current, "padding", "y"), a = C(Z.current, "margin", "y"), o = Z.current.offsetHeight, s = t / (Y.current.offsetHeight - o - n - a);
				J.current.scrollTop = ue.current + s * (r - i), e.preventDefault(), L(!0), v.start(500, () => {
					L(!1);
				});
			}
			if (Q.current && X.current && $.current === "horizontal") {
				let t = C(X.current, "padding", "x"), r = C(Q.current, "margin", "x"), i = Q.current.offsetWidth, s = n / (X.current.offsetWidth - i - t - r);
				J.current.scrollLeft = de.current + s * (a - o), e.preventDefault(), F(!0), x.start(500, () => {
					F(!1);
				});
			}
		}
	}), ge = s((e) => {
		se.current = !1, Z.current && $.current === "vertical" && Z.current.hasPointerCapture(e.pointerId) && Z.current.releasePointerCapture(e.pointerId), Q.current && $.current === "horizontal" && Q.current.hasPointerCapture(e.pointerId) && Q.current.releasePointerCapture(e.pointerId);
	});
	function _e(e) {
		R(e.pointerType === "touch");
	}
	function ve(e) {
		if (_e(e), e.pointerType !== "touch") {
			let t = ee(q.current, e.target);
			N(t);
		}
	}
	let ye = y.useMemo(() => ({
		scrolling: P || I,
		hasOverflowX: !K.x,
		hasOverflowY: !K.y,
		overflowXStart: W.xStart,
		overflowXEnd: W.xEnd,
		overflowYStart: W.yStart,
		overflowYEnd: W.yEnd,
		cornerHidden: K.corner
	}), [
		P,
		I,
		K.x,
		K.y,
		K.corner,
		W
	]), be = {
		role: "presentation",
		onPointerEnter: ve,
		onPointerMove: ve,
		onPointerDown: _e,
		onPointerLeave() {
			N(!1);
		},
		style: {
			position: "relative",
			[S.scrollAreaCornerHeight]: `${V.height}px`,
			[S.scrollAreaCornerWidth]: `${V.width}px`
		}
	}, xe = a("div", e, {
		state: ye,
		ref: [t, q],
		props: [be, l],
		stateAttributesMapping: E
	}), Se = y.useMemo(() => ({
		handlePointerDown: me,
		handlePointerMove: he,
		handlePointerUp: ge,
		handleScroll: pe,
		cornerSize: V,
		setCornerSize: ie,
		thumbSize: H,
		setThumbSize: U,
		hasMeasuredScrollbar: z,
		setHasMeasuredScrollbar: B,
		touchModality: re,
		cornerRef: oe,
		scrollingX: P,
		setScrollingX: F,
		scrollingY: I,
		setScrollingY: L,
		hovering: M,
		setHovering: N,
		viewportRef: J,
		rootRef: q,
		scrollbarYRef: Y,
		scrollbarXRef: X,
		thumbYRef: Z,
		thumbXRef: Q,
		rootId: _,
		hiddenState: K,
		setHiddenState: ae,
		overflowEdges: W,
		setOverflowEdges: G,
		viewportState: ye,
		overflowEdgeThreshold: {
			xStart: f,
			xEnd: p,
			yStart: h,
			yEnd: g
		}
	}), [
		me,
		he,
		ge,
		pe,
		V,
		H,
		z,
		re,
		P,
		F,
		I,
		L,
		M,
		N,
		_,
		K,
		W,
		ye,
		f,
		p,
		h,
		g
	]);
	return /*#__PURE__*/ (0, D.jsxs)(b.Provider, {
		value: Se,
		children: [!j && u.getElement(T), xe]
	});
});
function ne(e) {
	if (typeof e == "number") {
		let t = Math.max(0, e);
		return {
			xStart: t,
			xEnd: t,
			yStart: t,
			yEnd: t
		};
	}
	return {
		xStart: Math.max(0, e?.xStart || 0),
		xEnd: Math.max(0, e?.xEnd || 0),
		yStart: Math.max(0, e?.yStart || 0),
		yEnd: Math.max(0, e?.yEnd || 0)
	};
}
// node_modules/@base-ui/react/scroll-area/viewport/ScrollAreaViewportContext.mjs
var M = /*#__PURE__*/ y.createContext(void 0), N = /*#__PURE__*/ function(e) {
	return e.scrollAreaOverflowXStart = "--scroll-area-overflow-x-start", e.scrollAreaOverflowXEnd = "--scroll-area-overflow-x-end", e.scrollAreaOverflowYStart = "--scroll-area-overflow-y-start", e.scrollAreaOverflowYEnd = "--scroll-area-overflow-y-end", e;
}({}), P = !1;
function F() {
	P || f || (typeof CSS < "u" && "registerProperty" in CSS && [
		N.scrollAreaOverflowXStart,
		N.scrollAreaOverflowXEnd,
		N.scrollAreaOverflowYStart,
		N.scrollAreaOverflowYEnd
	].forEach((e) => {
		try {
			CSS.registerProperty({
				name: e,
				syntax: "<length>",
				inherits: !1,
				initialValue: "0px"
			});
		} catch {}
	}), P = !0);
}
var I = /*#__PURE__*/ y.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...o } = e, { viewportRef: d, scrollbarYRef: f, scrollbarXRef: ee, thumbYRef: p, thumbXRef: m, cornerRef: v, cornerSize: b, setCornerSize: S, setThumbSize: w, rootId: T, setHiddenState: te, hiddenState: O, setHasMeasuredScrollbar: k, handleScroll: A, setHovering: j, setOverflowEdges: ne, overflowEdges: P, overflowEdgeThreshold: I, scrollingX: R, scrollingY: z } = x(), B = g(), V = y.useRef(!0), ie = y.useRef([
		NaN,
		NaN,
		NaN,
		NaN
	]), H = c(), U = c(), W = s(() => {
		let e = d.current, t = f.current, n = ee.current, r = p.current, i = m.current, a = v.current;
		if (!e) return;
		let o = e.scrollHeight, s = e.scrollWidth, c = e.clientHeight, u = e.clientWidth, h = e.scrollTop, g = e.scrollLeft, y = ie.current, x = Number.isNaN(y[0]);
		if (y[0] = c, y[1] = o, y[2] = u, y[3] = s, x && k(!0), o === 0 || s === 0) return;
		let T = L(e), E = T.y, D = T.x, O = u / s, A = c / o, j = Math.max(0, s - u), M = Math.max(0, o - c), P = 0, F = 0;
		if (!D) {
			let e = 0;
			e = _(B === "rtl" ? -g : g, 0, j), P = l(e, j), F = j - P;
		}
		let R = E ? 0 : _(h, 0, M), z = E ? 0 : l(R, M), V = E ? 0 : M - z, H = D ? 0 : u, U = E ? 0 : c, W = 0, G = 0;
		!D && !E && (W = t?.offsetWidth || 0, G = n?.offsetHeight || 0);
		let K = b.width === 0 && b.height === 0, ae = K ? W : 0, q = K ? G : 0, J = C(n, "padding", "x"), Y = C(t, "padding", "y"), X = C(i, "margin", "x"), Z = C(r, "margin", "y"), Q = H - J - X, oe = U - Y - Z, se = n ? Math.min(n.offsetWidth - ae, Q) : Q, ce = t ? Math.min(t.offsetHeight - q, oe) : oe, le = Math.max(16, se * O), ue = Math.max(16, ce * A);
		if (w((e) => e.height === ue && e.width === le ? e : {
			width: le,
			height: ue
		}), t && r) {
			let e = t.offsetHeight - ue - Y - Z, n = o - c, i = n === 0 ? 0 : h / n, a = Math.min(e, Math.max(0, i * e));
			r.style.transform = `translate3d(0,${a}px,0)`;
		}
		if (n && i) {
			let e = n.offsetWidth - le - J - X, t = s - u, r = t === 0 ? 0 : g / t, a = B === "rtl" ? _(r * e, -e, 0) : _(r * e, 0, e);
			i.style.transform = `translate3d(${a}px,0,0)`;
		}
		let de = [
			[N.scrollAreaOverflowXStart, P],
			[N.scrollAreaOverflowXEnd, F],
			[N.scrollAreaOverflowYStart, z],
			[N.scrollAreaOverflowYEnd, V]
		];
		for (let [t, n] of de) e.style.setProperty(t, `${n}px`);
		a && (D || E ? S({
			width: 0,
			height: 0
		}) : !D && !E && S({
			width: W,
			height: G
		})), te((e) => re(e, T));
		let $ = {
			xStart: !D && P > I.xStart,
			xEnd: !D && F > I.xEnd,
			yStart: !E && z > I.yStart,
			yEnd: !E && V > I.yEnd
		};
		ne((e) => e.xStart === $.xStart && e.xEnd === $.xEnd && e.yStart === $.yStart && e.yEnd === $.yEnd ? e : $);
	});
	h(() => {
		d.current && F();
	}, [d]), h(() => {
		queueMicrotask(W);
	}, [
		W,
		O,
		B,
		I.xStart,
		I.xEnd,
		I.yStart,
		I.yEnd
	]), h(() => {
		d.current?.matches(":hover") && j(!0);
	}, [d, j]), h(() => {
		let e = d.current;
		if (typeof ResizeObserver > "u" || !e) return;
		let t = !1, n = new ResizeObserver(() => {
			if (!t) {
				t = !0;
				let n = ie.current;
				if (n[0] === e.clientHeight && n[1] === e.scrollHeight && n[2] === e.clientWidth && n[3] === e.scrollWidth) return;
			}
			W();
		});
		return n.observe(e), U.start(0, () => {
			let t = e.getAnimations({ subtree: !0 });
			t.length !== 0 && Promise.allSettled(t.map((e) => e.finished)).then(W).catch(() => {});
		}), () => {
			n.disconnect(), U.clear();
		};
	}, [
		W,
		d,
		U
	]);
	function G() {
		V.current = !1;
	}
	let K = {
		role: "presentation",
		...T && { "data-id": `${T}-viewport` },
		tabIndex: O.x && O.y ? -1 : 0,
		className: u.className,
		style: { overflow: "scroll" },
		onScroll() {
			d.current && (W(), V.current || A({
				x: d.current.scrollLeft,
				y: d.current.scrollTop
			}), H.start(100, () => {
				V.current = !0;
			}));
		},
		onWheel: G,
		onTouchMove: G,
		onPointerMove: G,
		onPointerEnter: G,
		onKeyDown: G
	}, ae = y.useMemo(() => ({
		scrolling: R || z,
		hasOverflowX: !O.x,
		hasOverflowY: !O.y,
		overflowXStart: P.xStart,
		overflowXEnd: P.xEnd,
		overflowYStart: P.yStart,
		overflowYEnd: P.yEnd,
		cornerHidden: O.corner
	}), [
		R,
		z,
		O.x,
		O.y,
		O.corner,
		P
	]), q = a("div", e, {
		ref: [t, d],
		state: ae,
		props: [K, o],
		stateAttributesMapping: E
	}), J = y.useMemo(() => ({ computeThumbPosition: W }), [W]);
	return /*#__PURE__*/ (0, D.jsx)(M.Provider, {
		value: J,
		children: q
	});
});
function L(e) {
	let t = e.clientHeight >= e.scrollHeight, n = e.clientWidth >= e.scrollWidth;
	return {
		y: t,
		x: n,
		corner: t || n
	};
}
function re(e, t) {
	return e.y === t.y && e.x === t.x && e.corner === t.corner ? e : t;
}
// node_modules/@base-ui/react/scroll-area/scrollbar/ScrollAreaScrollbarContext.mjs
var R = /*#__PURE__*/ y.createContext(void 0);
function z() {
	let e = y.useContext(R);
	if (e === void 0) throw Error(o(54));
	return e;
}
// node_modules/@base-ui/react/scroll-area/scrollbar/ScrollAreaScrollbarCssVars.mjs
var B = /*#__PURE__*/ function(e) {
	return e.scrollAreaThumbHeight = "--scroll-area-thumb-height", e.scrollAreaThumbWidth = "--scroll-area-thumb-width", e;
}({}), V = /*#__PURE__*/ y.forwardRef(function(e, t) {
	let { render: n, className: r, orientation: i = "vertical", keepMounted: o = !1, style: s, ...c } = e, { hovering: l, scrollingX: u, scrollingY: d, hiddenState: f, overflowEdges: m, scrollbarYRef: h, scrollbarXRef: _, viewportRef: b, thumbYRef: w, thumbXRef: T, handlePointerDown: te, handlePointerUp: O, handleScroll: k, rootId: A, thumbSize: j, hasMeasuredScrollbar: ne } = x(), M = {
		hovering: l,
		scrolling: {
			horizontal: u,
			vertical: d
		}[i],
		orientation: i,
		hasOverflowX: !f.x,
		hasOverflowY: !f.y,
		overflowXStart: m.xStart,
		overflowXEnd: m.xEnd,
		overflowYStart: m.yStart,
		overflowYEnd: m.yEnd,
		cornerHidden: f.corner
	}, N = g(), P = !ne && !o, F = i === "vertical" ? f.y : f.x, I = o || !F;
	y.useEffect(() => {
		if (!I) return;
		let e = b.current, t = i === "vertical" ? h.current : _.current;
		if (!t) return;
		function n(n) {
			if (!e || !t || n.ctrlKey) return;
			let r = i === "horizontal", a = r ? "scrollLeft" : "scrollTop", o = r ? n.deltaX : n.deltaY;
			if (o === 0) return;
			let s = r ? e.scrollWidth - e.clientWidth : e.scrollHeight - e.clientHeight, c = r && N === "rtl" ? -s : 0, l = r && N === "rtl" ? 0 : s, u = e[a];
			u <= c && o < 0 || u >= l && o > 0 || (n.preventDefault(), e[a] = Math.min(l, Math.max(c, u + o)), k({
				x: e.scrollLeft,
				y: e.scrollTop
			}));
		}
		return v(t, "wheel", n, { passive: !1 });
	}, [
		N,
		k,
		i,
		_,
		h,
		I,
		b
	]);
	let L = {
		...A && { "data-id": `${A}-scrollbar` },
		onPointerDown(e) {
			if (e.button !== 0) return;
			let t = p(e.nativeEvent), n = i === "vertical" ? w.current : T.current;
			if (!(n && ee(n, t)) && b.current) {
				if (w.current && h.current && i === "vertical") {
					let t = C(w.current, "margin", "y"), n = C(h.current, "padding", "y"), r = w.current.offsetHeight, i = h.current.getBoundingClientRect(), a = e.clientY - i.top - r / 2 - n + t / 2, o = b.current.scrollHeight, s = b.current.clientHeight, c = a / (h.current.offsetHeight - r - n - t) * (o - s);
					b.current.scrollTop = c;
				}
				if (T.current && _.current && i === "horizontal") {
					let t = C(T.current, "margin", "x"), n = C(_.current, "padding", "x"), r = T.current.offsetWidth, i = _.current.getBoundingClientRect(), a = e.clientX - i.left - r / 2 - n + t / 2, o = b.current.scrollWidth, s = b.current.clientWidth, c = a / (_.current.offsetWidth - r - n - t), l;
					N === "rtl" ? (l = (1 - c) * (o - s), b.current.scrollLeft <= 0 && (l = -l)) : l = c * (o - s), b.current.scrollLeft = l;
				}
				k({
					x: b.current.scrollLeft,
					y: b.current.scrollTop
				}), te(e);
			}
		},
		onPointerUp: O,
		onPointerCancel: O,
		style: {
			position: "absolute",
			touchAction: "none",
			WebkitUserSelect: "none",
			userSelect: "none",
			visibility: P ? "hidden" : void 0,
			...i === "vertical" && {
				top: 0,
				bottom: `var(${S.scrollAreaCornerHeight})`,
				insetInlineEnd: 0,
				[B.scrollAreaThumbHeight]: `${j.height}px`
			},
			...i === "horizontal" && {
				insetInlineStart: 0,
				insetInlineEnd: `var(${S.scrollAreaCornerWidth})`,
				bottom: 0,
				[B.scrollAreaThumbWidth]: `${j.width}px`
			}
		}
	}, re = a("div", e, {
		ref: [t, i === "vertical" ? h : _],
		state: M,
		props: [L, c],
		stateAttributesMapping: E
	}), z = y.useMemo(() => ({ orientation: i }), [i]);
	return I ? /*#__PURE__*/ (0, D.jsx)(R.Provider, {
		value: z,
		children: re
	}) : null;
}), ie = /*#__PURE__*/ y.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...o } = e, { thumbYRef: s, thumbXRef: c, handlePointerDown: l, handlePointerMove: u, handlePointerUp: d, setScrollingX: f, setScrollingY: ee, scrollingX: p, scrollingY: m, hasMeasuredScrollbar: h } = x(), { orientation: g } = z(), _ = {
		scrolling: g === "horizontal" ? p : m,
		orientation: g
	};
	function v(e) {
		g === "vertical" && ee(!1), g === "horizontal" && f(!1), d(e);
	}
	return a("div", e, {
		ref: [t, g === "vertical" ? s : c],
		state: _,
		props: [{
			onPointerDown: l,
			onPointerMove: u,
			onPointerUp: v,
			onPointerCancel: v,
			style: {
				visibility: h ? void 0 : "hidden",
				...g === "vertical" && { height: `var(${B.scrollAreaThumbHeight})` },
				...g === "horizontal" && { width: `var(${B.scrollAreaThumbWidth})` }
			}
		}, o]
	});
}), H = /*#__PURE__*/ y.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...o } = e, { cornerRef: s, cornerSize: c, hiddenState: l } = x(), u = a("div", e, {
		ref: [t, s],
		props: [{ style: {
			position: "absolute",
			bottom: 0,
			insetInlineEnd: 0,
			width: c.width,
			height: c.height
		} }, o]
	});
	return l.corner ? null : u;
});
// upstream/registry/bases/base/ui/scroll-area.tsx
function U({ className: e, children: t, ...r }) {
	return /* @__PURE__ */ (0, D.jsxs)(j, {
		"data-slot": "scroll-area",
		className: n("cn-scroll-area relative", e),
		...r,
		children: [
			/* @__PURE__ */ (0, D.jsx)(I, {
				"data-slot": "scroll-area-viewport",
				className: "cn-scroll-area-viewport size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
				children: t
			}),
			/* @__PURE__ */ (0, D.jsx)(W, {}),
			/* @__PURE__ */ (0, D.jsx)(H, {})
		]
	});
}
function W({ className: e, orientation: t = "vertical", ...r }) {
	return /* @__PURE__ */ (0, D.jsx)(V, {
		"data-slot": "scroll-area-scrollbar",
		"data-orientation": t,
		orientation: t,
		className: n("cn-scroll-area-scrollbar flex touch-none p-px transition-colors select-none", e),
		...r,
		children: /* @__PURE__ */ (0, D.jsx)(ie, {
			"data-slot": "scroll-area-thumb",
			className: "cn-scroll-area-thumb relative flex-1 bg-border"
		})
	});
}
// upstream/examples/base/scroll-area-demo.tsx
var G = Array.from({ length: 50 }).map((e, t, n) => `v1.2.0-beta.${n.length - t}`);
function K() {
	return /* @__PURE__ */ (0, D.jsx)(U, {
		className: "h-72 w-48 rounded-md border",
		children: /* @__PURE__ */ (0, D.jsxs)("div", {
			className: "p-4",
			children: [/* @__PURE__ */ (0, D.jsx)("h4", {
				className: "mb-4 text-sm leading-none font-medium",
				children: "Tags"
			}), G.map((e) => /* @__PURE__ */ (0, D.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)("div", {
				className: "text-sm",
				children: e
			}), /* @__PURE__ */ (0, D.jsx)(i, { className: "my-2" })] }, e))]
		})
	});
}
export { K as ScrollAreaDemo };
