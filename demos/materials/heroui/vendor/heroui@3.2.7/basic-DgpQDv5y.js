import { t as e } from "./button-Dd5iSf4T.js";
import { n as t, r as n } from "./dist-qnEEIXtT.js";
import { d as r, m as i, r as a, u as o } from "./utils-UBVJ5JR_.js";
import { i as s, n as c, t as l } from "./jsx-runtime-C1t0izHF.js";
import { t as u } from "./Heading-CdGE8g_3.js";
import { h as d, i as f, n as p, t as m } from "./Dialog-C0V2m_6r.js";
import { n as h, r as g, t as _ } from "./Modal-C2uH6B2w.js";
import { t as v } from "./filterDOMProps-CJYy6efO.js";
import { H as y, R as b } from "./useKeyboard-CqNSkGJ-.js";
import { i as x } from "./useHover-DxA7bNQs.js";
import { t as S } from "./useLayoutEffect-Bx2X4QEP.js";
import { t as ee } from "./I18nProvider-zGzu-4zN.js";
import { t as C } from "./useOverlayTriggerState-loftJLxJ.js";
import { t as w } from "./shim-BmqQMxK7.js";
import { n as T, t as E } from "./compose-ClIOcrt6.js";
import { t as D } from "./close-button-CHpFmCHB.js";
import { t as O } from "./surface-YzNgM-6T.js";
// node_modules/@heroui/styles/dist/components/sheet/sheet.styles.js
var k = t({
	defaultVariants: {
		backdrop: "opaque",
		placement: "bottom"
	},
	slots: {
		backdrop: "sheet__backdrop",
		body: "sheet__body",
		closeTrigger: "sheet__close-trigger",
		content: "sheet__content",
		dialog: "sheet__dialog",
		footer: "sheet__footer",
		handle: "sheet__handle",
		handleBar: "sheet__handle-bar",
		header: "sheet__header",
		heading: "sheet__heading",
		overlay: "sheet__overlay"
	},
	variants: {
		backdrop: {
			blur: { backdrop: "sheet__backdrop--blur" },
			opaque: { backdrop: "sheet__backdrop--opaque" },
			transparent: { backdrop: "sheet__backdrop--transparent" }
		},
		placement: {
			bottom: {
				content: "sheet__content--bottom",
				dialog: "sheet__dialog--bottom"
			},
			left: {
				content: "sheet__content--left",
				dialog: "sheet__dialog--left"
			},
			right: {
				content: "sheet__content--right",
				dialog: "sheet__dialog--right"
			},
			top: {
				content: "sheet__content--top",
				dialog: "sheet__dialog--top"
			}
		}
	}
}), A = /* @__PURE__ */ s(c(), 1), te = w(), j = /*#__PURE__*/ (0, A.createContext)(null), M = [], N = /* @__PURE__ */ new Set();
function P() {
	let e = Array.from({ length: M.length }).map((e, t) => `--sheet-timeline-${t}`).join(", ");
	document.documentElement.style.setProperty("timeline-scope", e), N.forEach((e) => e());
}
function F(e) {
	return N.add(e), () => {
		N.delete(e);
	};
}
function ne(e) {
	return M = [...M, e], P(), () => {
		M = M.filter((t) => t.id !== e.id), P();
	};
}
function I() {
	return M;
}
var re = typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("animation-timeline: view()");
function L(e) {
	return /*#__PURE__*/ A.createElement(m, e, /*#__PURE__*/ A.createElement(d, { isPressed: !1 }, e.children));
}
var R = y() && b() ? "calc(100lvh - 100svh + 58px)" : "0px", z = (e, t) => e && t === "y" ? R : "0px", B = /*#__PURE__*/ (0, A.forwardRef)(function(e, t) {
	let { children: r, preventDismissal: a = !1 } = e, { direction: o } = ee(), s = H(e.position ?? "bottom", o), c = e.swipeDirection ? H(e.swipeDirection, o) : s === "center" ? "vertical" : s, l = (0, A.useContext)(f), u = C(e), d = e.isOpen != null || e.defaultOpen != null || !l ? u : l, p = x(() => {
		d.close();
	}), { axis: m, before: h, after: _, maxScroll: v, enteredScroll: S, viewRange: w, viewDirection: T, viewIterations: E } = U(c), D = i(), O = (0, A.useMemo)(() => ({
		id: D,
		range: w,
		direction: T,
		iterations: E
	}), [
		D,
		w,
		T,
		E
	]), [k, M] = (0, A.useState)(!1), N = (0, A.useRef)(!1), P = (0, A.useCallback)((e) => {
		if (!e) return;
		if (S === 0) {
			let t = e.querySelector("[data-sheet-scroll]");
			if (t) {
				let e = m === "y" ? window.innerHeight : window.innerWidth;
				K(t, m, v / 100 * e);
			}
		}
		let t = `0px 0px ${q(z(_, m))} 0px`, n = !1, r = new IntersectionObserver((t) => {
			let r = t[0];
			M(r.intersectionRatio >= 1), N.current = r.intersectionRatio > 0, n ||= r.intersectionRatio > 0, n && r.intersectionRatio <= 0 && (p(), e.dispatchEvent(new CustomEvent("react-aria-sheet-close")));
		}, {
			threshold: [0, 1],
			rootMargin: t
		}), i = e.querySelector("[data-sheet-content]");
		i && r.observe(i);
		let a = ne(O);
		return () => {
			r.disconnect(), a();
		};
	}, [
		O,
		m,
		v,
		S,
		_
	]), re = (0, A.useMemo)(() => n(P, t), [P, t]), L = (0, te.useSyncExternalStore)(F, I, I), R = Math.max(0, L.findIndex((e) => e.id === D)), B = L.slice(R + 1), V = {
		position: s,
		swipeDirection: c,
		isExpanded: k,
		stackIndex: R,
		hasDescendants: B.length > 0
	}, ae = ie(e, V, "react-aria-SheetOverlay", {
		position: "absolute",
		top: 0,
		left: 0,
		width: "max(var(--page-width), 100vw)",
		height: "max(var(--page-height), 100dvh)",
		overflow: "clip",
		"--sheet-scroll-padding-x": "calc(100vw - var(--visual-viewport-width))",
		"--sheet-scroll-padding-y": "calc(100dvh - var(--visual-viewport-height))"
	});
	return /*#__PURE__*/ A.createElement(g, {
		...e,
		isOpen: d.isOpen,
		defaultOpen: void 0,
		onOpenChange: d.setOpen,
		ref: re,
		isDismissable: !a,
		isKeyboardDismissDisabled: a,
		UNSTABLE_deferUntilEntered: !0,
		UNSTABLE_overrideFocus: !0,
		...ae,
		onEnter: (e) => {
			let t = e.querySelector("[data-sheet-scroll]"), n = m === "y" ? window.innerHeight + parseFloat(q(z(_, m))) : window.innerWidth, r = e.querySelector("[data-sheet-initial]"), i = (e) => {
				r ? pe(t, r, m, _ ? "start" : "end", e) : K(t, m, S / 100 * n, e);
			};
			return S === 0 ? (K(t, m, v / 100 * n), requestAnimationFrame(() => i(!0))) : i(!0), new Promise((e) => {
				t.addEventListener("scrollend", () => e(), { once: !0 });
			});
		},
		onExit: (e) => {
			let t = e.querySelector("[data-sheet-scroll]");
			if (!N.current) return b() && !y() ? new Promise((e) => {
				t.addEventListener("scrollend", () => {
					setTimeout(() => e(), 50);
				}, { once: !0 });
			}) : void 0;
			let n = m === "y" ? window.innerHeight + parseFloat(q(z(_, m))) : window.innerWidth, r = v / 100 * n, i = m === "y" ? t.scrollTop : t.scrollLeft, a;
			return a = _ && !h ? 0 : h && !_ || i > S / 100 * n ? r : 0, K(t, m, a, !0), new Promise((t) => {
				e.addEventListener("react-aria-sheet-close", () => t(), { once: !0 });
			});
		}
	}, (t) => /*#__PURE__*/ A.createElement(j.Provider, { value: {
		...e,
		position: s,
		swipeDirection: c,
		index: R,
		descendants: B,
		isEntering: t.isEntering,
		isExiting: t.isExiting,
		values: V
	} }, typeof r == "function" ? r({
		...t,
		...V
	}) : r));
});
function V(e) {
	return {
		"data-position": e.position,
		"data-swipe-direction": e.swipeDirection,
		"data-expanded": e.isExpanded || void 0,
		"data-stack-index": e.stackIndex,
		"data-has-descendants": e.hasDescendants || void 0
	};
}
function ie(e, t, n, r, i) {
	return {
		...V(t),
		render: e.render ? (n, r) => e.render(n, {
			...r,
			...t
		}) : void 0,
		className: (r) => typeof e.className == "function" ? e.className({
			...r,
			...t
		}) : e.className || n,
		style: (n) => ({
			...r,
			...typeof e.style == "function" ? e.style({
				...n,
				...t
			}) : e.style,
			...i
		})
	};
}
function H(e, t) {
	return e === "start" ? t === "rtl" ? "right" : "left" : e === "end" ? t === "rtl" ? "left" : "right" : e;
}
function U(e) {
	let t = e === "top" || e === "bottom" || e === "vertical" ? "y" : "x", n = e === "top" || e === "left" || e === "vertical" || e === "horizontal", r = e === "bottom" || e === "right" || e === "vertical" || e === "horizontal";
	return {
		axis: t,
		before: n,
		after: r,
		maxScroll: (Number(n) + Number(r)) * 100,
		enteredScroll: n && !r ? 0 : 100,
		containerOffset: n && !r ? -100 : 0,
		viewRange: n && r ? "cover" : n ? "exit" : "entry",
		viewDirection: n && r ? "alternate" : n ? "reverse" : "normal",
		viewIterations: n && r ? 2 : 1
	};
}
var ae = {
	top: ["center", "flex-start"],
	bottom: ["center", "flex-end"],
	left: ["flex-start", "center"],
	right: ["flex-end", "center"],
	center: ["center", "center"]
};
function W(e) {
	return typeof e == "number" ? `${e}px` : e;
}
function G({ point: e, align: t, axis: n }) {
	let r = n === "y" ? "dvh" : "dvw", i = W(e);
	return /*#__PURE__*/ A.createElement("div", { style: {
		position: "absolute",
		top: n === "y" ? i : 0,
		left: n === "x" ? i : 0,
		scrollSnapAlign: t,
		width: n === "x" ? `100${r}` : 1,
		height: n === "y" ? `100${r}` : 1
	} });
}
function oe({ point: e, axis: t, after: n, isInitial: r }) {
	let i = t === "y" ? "100dvh" : "100dvw", a = W(e), o = {
		position: "absolute",
		width: 1,
		height: 1,
		scrollSnapAlign: n ? "start" : "end"
	}, s = t === "y" ? n ? {
		top: a,
		left: 0,
		scrollMarginTop: i
	} : {
		bottom: a,
		left: 0,
		scrollMarginBottom: i
	} : n ? {
		top: 0,
		left: a,
		scrollMarginLeft: i
	} : {
		top: 0,
		right: a,
		scrollMarginRight: i
	};
	return /*#__PURE__*/ A.createElement("div", {
		"data-sheet-detent": !0,
		"data-sheet-initial": r || void 0,
		style: {
			...o,
			...s
		}
	});
}
var se = /*#__PURE__*/ (0, A.forwardRef)(function(e, t) {
	let n = o(t), r = (0, A.useRef)(null), i = (0, A.useRef)(null), { position: a, swipeDirection: s, snapPoints: c, index: l, descendants: u, isEntering: d, isExiting: f, preventDismissal: p = !1, values: m } = (0, A.useContext)(j), g = !((0, A.useContext)(h)?.isOpen ?? !0) || d || f, { direction: v } = ee(), { axis: y, after: b, before: x, containerOffset: C } = U(s), w = y === "y" ? "100dvh" : "100dvw", T = !!c?.length && x !== b, E = p && !g, D = ce(i, n, y, b, p && T ? c.join(" ") : null), O = `${T ? Math.max(1, D) : 1}px`, k = E && b ? O : `calc(${w} + ${z(b, y)})`, te;
	te = E && x && b ? `calc(${k} + ${w} + 1px)` : E && x ? `calc(${O} + ${w})` : `calc(${k} + ${w}${x && b ? ` + ${w}` : ""})`;
	let M = (0, A.useRef)(null), N = (0, A.useRef)(E);
	S(() => {
		let e = i.current, t = r.current;
		if (!e || !t) return;
		let n = y === "y" ? e.offsetTop : e.offsetLeft;
		if (N.current !== E && M.current != null) {
			let e = n - M.current;
			e !== 0 && (y === "y" ? t.scrollTop += e : t.scrollLeft += e);
		}
		N.current = E, M.current = n;
	});
	let P = {
		position: "relative",
		...ue(e)
	}, F;
	if (e.overscrollPadding && a === s) switch (F = y === "y" ? "100vh" : "100vw", a) {
		case "top":
			P.paddingTop = "100vh", P.marginTop = "-100vh";
			break;
		case "bottom":
			P.paddingBottom = "100vh", P.marginBottom = "-100vh";
			break;
		case "left":
			P.paddingLeft = "100vw", P.marginLeft = "-100vw";
			break;
		case "right": P.paddingRight = "100vw", P.marginRight = "-100vw";
	}
	if (e.stackAnimation && u.length > 0 && re) {
		let t = {
			animationName: () => e.stackAnimation,
			animationTimeline: (e, t) => `--sheet-timeline-${l + 1 + t}`,
			animationDirection: (e) => e.direction,
			animationIterationCount: (e) => String(e.iterations),
			animationFillMode: () => "both",
			animationRange: (e) => e.range,
			animationComposition: () => "accumulate",
			animationTimingFunction: () => "linear"
		};
		for (let [e, n] of Object.entries(t)) P[e] = [P[e], ...u.map(n)].filter(Boolean).join(", ");
	}
	let ne = ie(e, m, "react-aria-Sheet", { direction: v }, P), [I, L] = ae[a], R = y === "y" ? L : I, B = y === "y" ? I : L, { scrollX: V, scrollY: H } = typeof window < "u" ? window : {
		scrollX: 0,
		scrollY: 0
	};
	return /*#__PURE__*/ A.createElement("div", {
		ref: r,
		"data-sheet-scroll": !0,
		style: {
			position: "absolute",
			top: y === "y" ? `calc(${H}px + ${C}dvh)` : H,
			left: y === "x" ? `calc(${V}px + ${C}dvw)` : V,
			height: y === "y" ? "200dvh" : "100dvh",
			width: y === "x" ? "200dvw" : "100dvw",
			overflowX: y === "x" ? "auto" : "hidden",
			overflowY: y === "y" ? "auto" : "hidden",
			scrollSnapType: p && g ? "none" : `${y} mandatory`,
			overscrollBehaviorY: y === "y" ? "contain" : "none",
			overscrollBehaviorX: y === "x" ? "contain" : "none",
			scrollbarWidth: "none",
			direction: "ltr"
		}
	}, /*#__PURE__*/ A.createElement(G, {
		point: 0,
		align: E && b ? "none" : "start",
		axis: y
	}), x && b && /*#__PURE__*/ A.createElement(G, {
		point: k,
		align: "start",
		axis: y
	}), /*#__PURE__*/ A.createElement("div", {
		ref: i,
		style: {
			position: "absolute",
			top: y === "y" ? k : 0,
			left: y === "x" ? k : 0,
			height: "100dvh",
			width: "100dvw",
			display: "flex",
			flexDirection: y === "y" ? "column" : "row",
			alignItems: B,
			justifyContent: R
		}
	}, /*#__PURE__*/ A.createElement(_, {
		...e,
		ref: n,
		...ne
	}, (t) => /*#__PURE__*/ A.createElement(A.Fragment, null, c && /*#__PURE__*/ A.createElement("div", { style: {
		position: "absolute",
		inset: 0,
		...F ? { [a]: F } : null,
		pointerEvents: "none"
	} }, c.map((e, t) => /*#__PURE__*/ A.createElement(oe, {
		key: t,
		point: e,
		axis: y,
		after: b,
		isInitial: t === 0
	}))), typeof e.children == "function" ? e.children({
		...t,
		...m
	}) : e.children))), /*#__PURE__*/ A.createElement(G, {
		point: te,
		align: E && x ? "none" : "end",
		axis: y
	}));
});
function ce(e, t, n, r, i) {
	let [a, o] = (0, A.useState)(0);
	return S(() => {
		let a = e.current, s = t.current;
		if (i == null || !a || !s) return;
		let c = () => {
			let e = n === "y" ? a.clientHeight : a.clientWidth, t = 0;
			for (let i of s.querySelectorAll("[data-sheet-detent]")) {
				let o = 0, s = i;
				for (; s && s !== a;) o += n === "y" ? s.offsetTop : s.offsetLeft, s = s.offsetParent;
				let c = n === "y" ? i.offsetHeight : i.offsetWidth;
				t = Math.max(t, r ? e - o : o + c);
			}
			o(t);
		};
		c();
		let l = new ResizeObserver(c);
		return l.observe(a), l.observe(s), () => l.disconnect();
	}, [
		e,
		t,
		n,
		r,
		i
	]), a;
}
var le = /*#__PURE__*/ (0, A.forwardRef)(function(e, t) {
	let n = ue(e), { values: r, isEntering: i, isExiting: o } = (0, A.useContext)(j), s = (0, A.useContext)(f), c = a({
		...e,
		defaultClassName: "react-aria-SheetBackdrop",
		defaultStyle: {
			...n,
			position: "absolute",
			inset: 0
		},
		values: {
			...r,
			isEntering: i,
			isExiting: o,
			state: s
		}
	});
	return /*#__PURE__*/ A.createElement("div", {
		ref: t,
		...v(e, { global: !0 }),
		...c,
		...V(r),
		"data-entering": i || void 0,
		"data-exiting": o || void 0
	});
});
function ue(e) {
	let { swipeDirection: t, snapPoints: n, index: r, isEntering: i, isExiting: a } = (0, A.useContext)(j), { viewRange: o, viewDirection: s, viewIterations: c } = U(t);
	if (e.swipeAnimation) {
		let l = e.swipeAnimationRange?.start == null ? "0%" : W(n?.[e.swipeAnimationRange.start] ?? "0%"), u = e.swipeAnimationRange?.end == null ? "100%" : W(n?.[e.swipeAnimationRange.end] ?? "100%");
		if ((t === "top" || t === "left") && (l = `calc(100% - ${l})`, u = `calc(100% - ${u})`, [l, u] = [u, l]), re) return {
			animationName: e.swipeAnimation,
			animationTimeline: `--sheet-timeline-${r}`,
			animationDirection: s,
			animationIterationCount: c,
			animationFillMode: "both",
			animationRange: `${o} ${l} ${o} ${u}`,
			animationTimingFunction: "linear",
			animationComposition: "replace"
		};
		if (i || a) return {
			animationName: e.swipeAnimation,
			animationDirection: a ? "reverse" : "normal",
			animationDuration: "300ms",
			animationIterationCount: "1",
			animationFillMode: "both",
			animationTimingFunction: "linear",
			animationComposition: "replace"
		};
	}
	return {};
}
var de = /*#__PURE__*/ (0, A.forwardRef)(function(e, t) {
	let { swipeDirection: n, index: r } = (0, A.useContext)(j), { axis: i, before: a, after: o } = U(n), s = i === "y" ? "100dvh" : "100dvw";
	return /*#__PURE__*/ A.createElement(p, {
		...e,
		ref: t,
		className: e.className || "react-aria-SheetContent",
		"data-sheet-content": !0,
		style: {
			...e.style,
			width: "100%",
			height: "100%",
			viewTimelineName: `--sheet-timeline-${r}`,
			viewTimelineAxis: i,
			viewTimelineInset: a && !o ? `${s} 0` : `0 ${s}`
		}
	});
});
function fe() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function K(e, t, n, r = !1) {
	let i = r && !fe() ? "smooth" : void 0;
	e.scrollTo(t === "y" ? {
		top: n,
		behavior: i
	} : {
		left: n,
		behavior: i
	});
}
function pe(e, t, n, r, i = !1) {
	let a = i && !fe() ? "smooth" : "auto", o = t.getBoundingClientRect(), s = e.getBoundingClientRect(), c = getComputedStyle(t);
	if (n === "y") {
		if (r === "start") {
			let t = parseFloat(c.scrollMarginTop) || 0, n = o.top - s.top + e.scrollTop - t;
			e.scrollTo({
				top: n,
				behavior: a
			});
		} else {
			let t = parseFloat(c.scrollMarginBottom) || 0, n = o.bottom - s.top + e.scrollTop + t - e.clientHeight;
			e.scrollTo({
				top: n,
				behavior: a
			});
		}
	} else if (r === "start") {
		let t = parseFloat(c.scrollMarginLeft) || 0, n = o.left - s.left + e.scrollLeft - t;
		e.scrollTo({
			left: n,
			behavior: a
		});
	} else {
		let t = parseFloat(c.scrollMarginRight) || 0, n = o.right - s.left + e.scrollLeft + t - e.clientWidth;
		e.scrollTo({
			left: n,
			behavior: a
		});
	}
}
function q(e) {
	if (!e.startsWith("calc(")) return e;
	let t = document.createElement("div");
	t.inert = !0, t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.contain = "strict", t.style.height = e, document.body.appendChild(t);
	let n = window.getComputedStyle(t).height;
	return t.remove(), n;
}
// node_modules/@heroui/react/dist/components/sheet/context.js
var me = /*#__PURE__*/ A.createContext(null), he = /*#__PURE__*/ A.createContext(null), J = () => {
	let e = A.useContext(me);
	if (!e) throw Error("useSheetContext must be used within a Sheet");
	return e;
}, ge = .4, _e = .25, ve = 500;
function ye(e) {
	if (e <= 0) return 0;
	if (e >= 1) return 1;
	let t = e;
	for (let n = 0; n < 8; n++) {
		let n = be(t, .32, 0) - e, r = xe(t, .32, 0);
		if (Math.abs(n) < 1e-4 || r === 0) break;
		t = Math.min(1, Math.max(0, t - n / r));
	}
	return be(t, .72, 1);
}
function be(e, t, n) {
	let r = 1 - 3 * n + 3 * t, i = 3 * n - 6 * t, a = 3 * t;
	return ((r * e + i) * e + a) * e;
}
function xe(e, t, n) {
	let r = 1 - 3 * n + 3 * t, i = 3 * n - 6 * t, a = 3 * t;
	return 3 * r * e * e + 2 * i * e + a;
}
function Se({ current: e, elapsed: t, extent: n, isDismissable: r, rest: i, size: a, swipeDirection: o, travel: s, viewport: c }) {
	let l = o === "horizontal" || o === "vertical" ? s > 0 || s === 0 && e < i : o === "bottom" || o === "right", u = l ? s : -s, d = l ? i - e : e - i, f = Math.max(u, d), p = l ? 0 : Math.max(0, n);
	if (!r || f <= 0) return i;
	let m = a > 0 ? Math.min(a, c) : 0;
	return (t > 0 ? Math.abs(s) / t : 0) > ge || m > 0 && f >= m * _e ? p : i;
}
function Ce(e, t, n) {
	if (e.length === 0) return null;
	if (n > ge) {
		let n = e.filter((e) => e < t - .5);
		if (n.length > 0) return Math.max(...n);
	}
	if (n < -.4) {
		let n = e.filter((e) => e > t + .5);
		if (n.length > 0) return Math.min(...n);
	}
	return e.reduce((e, n) => Math.abs(n - t) < Math.abs(e - t) ? n : e);
}
function we(e, t, n, r, i) {
	let a = !1, o = 0, s = performance.now(), c = () => {
		a = !0, cancelAnimationFrame(o);
	};
	if (i || Math.abs(t - e) < .5) return n(t), r(), c;
	let l = (i) => {
		if (a) return;
		let c = Math.min(1, Math.max(0, (i - s) / ve));
		n(e + (t - e) * ye(c)), c < 1 ? o = requestAnimationFrame(l) : r();
	};
	return o = requestAnimationFrame(l), c;
}
// node_modules/@heroui/react/dist/components/sheet/use-sheet-handle-drag.js
function Te(e) {
	let { closeSheet: t, isDismissable: n, isOpen: r, snapPoints: i } = J(), a = (0, A.useRef)(null), o = (0, A.useRef)(null);
	(0, A.useEffect)(() => () => {
		let e = a.current;
		e && (e.handle.removeAttribute("data-dragging"), e.handle.hasPointerCapture?.(e.pointerId) && e.handle.releasePointerCapture(e.pointerId)), a.current = null, o.current && X(o.current);
	}, [r, e]);
	let s = e === "left" || e === "right" || e === "horizontal" ? "x" : "y", c = (e) => {
		if (e.button !== 0 || a.current) return;
		let t = e.currentTarget.closest("[data-sheet-scroll]");
		if (!t) return;
		let n = s === "y" ? e.clientY : e.clientX;
		e.preventDefault(), o.current && X(o.current), o.current = t, X(t), e.currentTarget.setPointerCapture?.(e.pointerId), e.currentTarget.setAttribute("data-dragging", ""), t.setAttribute("data-handle-dragging", ""), a.current = {
			axis: s,
			handle: e.currentTarget,
			last: n,
			lastTime: e.timeStamp,
			origin: n,
			pointerId: e.pointerId,
			scroll: s === "y" ? t.scrollTop : t.scrollLeft,
			scroller: t,
			startedAt: e.timeStamp,
			velocity: 0
		};
	}, l = (e) => {
		let t = a.current;
		if (!t || e.pointerId !== t.pointerId) return;
		let n = t.axis === "y" ? e.clientY : e.clientX, r = e.timeStamp - t.lastTime;
		r > 0 && (t.velocity = (n - t.last) / r), t.last = n, t.lastTime = e.timeStamp;
		let i = t.scroll - (n - t.origin);
		t.axis === "y" ? t.scroller.scrollTop = i : t.scroller.scrollLeft = i;
	}, u = (r, o = !1) => {
		let s = a.current;
		if (!s || r.pointerId !== s.pointerId) return;
		a.current = null, r.currentTarget.removeAttribute("data-dragging"), r.currentTarget.hasPointerCapture?.(r.pointerId) && r.currentTarget.releasePointerCapture(r.pointerId);
		let c = s.axis === "y" ? s.scroller.scrollTop : s.scroller.scrollLeft, l = s.axis === "y" ? r.clientY : r.clientX, u = o ? s.scroll : i && i.length > 0 ? Ce(Oe(s.scroller, s.axis), c, s.velocity) : Se({
			current: c,
			elapsed: r.timeStamp - s.startedAt,
			isDismissable: n,
			swipeDirection: e,
			rest: s.scroll,
			...De(s.scroller, s.axis),
			travel: l - s.origin
		});
		u == null ? s.scroller.removeAttribute("data-handle-dragging") : Ee(s.scroller, s.axis, u, c, () => {
			!o && !i?.length && u !== s.scroll && s.scroller.isConnected && !s.scroller.closest("[data-slot=\"sheet-overlay\"]")?.hasAttribute("data-closed") && t();
		});
	}, d = (e) => u(e, !0);
	return {
		onLostPointerCapture: d,
		onPointerCancel: d,
		onPointerDown: c,
		onPointerMove: l,
		onPointerUp: (e) => u(e)
	};
}
var Y = /* @__PURE__ */ new WeakMap();
function X(e) {
	Y.get(e)?.(), Y.delete(e), e.removeAttribute("data-handle-dragging");
}
function Ee(e, t, n, r, i) {
	X(e), e.setAttribute("data-handle-dragging", "");
	let a = !1, o = we(r, n, (n) => {
		t === "y" ? e.scrollTop = n : e.scrollLeft = n;
	}, () => {
		a = !0, Y.delete(e), e.removeAttribute("data-handle-dragging"), i?.();
	}, window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	a || Y.set(e, o);
}
function De(e, t) {
	let n = e.querySelector("[data-sheet-content]"), r = n?.getBoundingClientRect();
	return t === "y" ? {
		extent: e.scrollHeight - e.clientHeight,
		size: r?.height || n?.clientHeight || 0,
		viewport: window.innerHeight
	} : {
		extent: e.scrollWidth - e.clientWidth,
		size: r?.width || n?.clientWidth || 0,
		viewport: window.innerWidth
	};
}
function Oe(e, t) {
	let n = [];
	for (let r of e.querySelectorAll("*")) {
		let i = r.style.scrollSnapAlign || getComputedStyle(r).scrollSnapAlign;
		if (!i || i === "none" || i.startsWith("none")) continue;
		let a = ke(e, r, t, i);
		Number.isFinite(a) && n.push(a);
	}
	return n;
}
function ke(e, t, n, r) {
	let i = t.getBoundingClientRect(), a = e.getBoundingClientRect(), o = getComputedStyle(t), s = r.split(" ")[0];
	if (n === "y") {
		if (s === "end") {
			let t = parseFloat(o.scrollMarginBottom) || 0;
			return i.bottom - a.top + e.scrollTop + t - e.clientHeight;
		}
		let t = parseFloat(o.scrollMarginTop) || 0;
		return i.top - a.top + e.scrollTop - t;
	}
	if (s === "end") {
		let t = parseFloat(o.scrollMarginRight) || 0;
		return i.right - a.left + e.scrollLeft + t - e.clientWidth;
	}
	let c = parseFloat(o.scrollMarginLeft) || 0;
	return i.left - a.left + e.scrollLeft - c;
}
// node_modules/@heroui/react/dist/components/sheet/sheet-lifecycle.js
function Ae({ onExitComplete: e, overlayRef: t, swipeDirection: n }) {
	let { isOpen: r, onAnimationEnd: i } = J(), a = n === "horizontal" || n === "vertical", o = n === "left" || n === "right" || n === "horizontal" ? "x" : "y", s = n === "bottom" || n === "right" || a, c = (0, A.useRef)(void 0), l = (0, A.useRef)(!1), u = (0, A.useRef)(null), d = (0, A.useRef)({
		isOpen: r,
		onAnimationEnd: i,
		onExitComplete: e
	});
	(0, A.useLayoutEffect)(() => {
		r !== d.current.isOpen && (r && (l.current = !0), c.current = void 0), d.current = {
			isOpen: r,
			onAnimationEnd: i,
			onExitComplete: e
		};
	}, [
		r,
		i,
		e
	]);
	let f = (0, A.useCallback)((e) => {
		c.current !== e && (c.current = e, e && (l.current = !1), d.current.onAnimationEnd?.(e), e || d.current.onExitComplete());
	}, []), p = (0, A.useCallback)(() => {
		let e = t.current?.querySelector("[data-sheet-scroll]");
		if (e?.hasAttribute("data-handle-dragging")) return;
		let n = e?.querySelector("[data-slot=\"sheet-dialog\"]")?.getBoundingClientRect();
		(!!n && n.bottom > 0 && n.top < window.innerHeight && n.right > 0 && n.left < window.innerWidth) === d.current.isOpen && (d.current.isOpen && e && (u.current = {
			left: e.scrollLeft,
			top: e.scrollTop
		}), f(d.current.isOpen));
	}, [f, t]);
	return (0, A.useEffect)(() => {
		if (!r || !l.current) return;
		let e = t.current?.querySelector("[data-sheet-scroll]");
		if (e) {
			if (!u.current) {
				let t = e.querySelector("[data-sheet-initial]"), n = t ?? (a ? e.children[1] : s ? e.lastElementChild : e.firstElementChild);
				if (!(n instanceof HTMLElement)) return;
				let r = ke(e, n, o, t ? s ? "start" : "end" : s && !a ? "end" : "start");
				u.current = {
					left: o === "x" ? r : 0,
					top: o === "y" ? r : 0
				};
			}
			let { left: t, top: n } = u.current;
			if (Math.abs(e.scrollLeft - t) > 1 || Math.abs(e.scrollTop - n) > 1) {
				e.scrollTo({
					...u.current,
					behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
				});
				return;
			}
		}
		l.current && p();
	}, [
		r,
		t,
		p,
		o,
		s,
		a
	]), (0, A.useEffect)(() => {
		if (r) return;
		let e = t.current?.querySelector("[data-sheet-scroll]");
		if (!e) return;
		let n, i = 0, l = !1, u, f = () => {
			if (p(), c.current === !1 || d.current.isOpen) return;
			let t = o === "x" ? e.scrollLeft : e.scrollTop;
			if (i = t === n ? i + 1 : 0, n = t, i >= 2 && !l) {
				let n = a ? t <= (o === "x" ? window.innerWidth : window.innerHeight) : s, r = n ? e.firstElementChild : e.lastElementChild;
				if (r instanceof HTMLElement) {
					l = !0;
					let t = ke(e, r, o, n ? "start" : "end");
					e.scrollTo({
						[o === "x" ? "left" : "top"]: t,
						behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
					});
				}
			}
			u = requestAnimationFrame(f);
		};
		return u = requestAnimationFrame(f), () => cancelAnimationFrame(u);
	}, [
		r,
		p,
		t,
		o,
		s,
		a
	]), (0, A.useEffect)(() => {
		let e = t.current?.querySelector("[data-sheet-scroll]");
		return e?.addEventListener("scrollend", p), () => {
			e?.removeEventListener("scrollend", p), d.current.isOpen || f(!1);
		};
	}, [
		t,
		p,
		f
	]), null;
}
// node_modules/@heroui/react/dist/components/sheet/sheet.js
var Z = l(), je = "heroui-sheet-scale-back", Me = "heroui-sheet-backdrop";
function Q({ children: e, defaultOpen: t = !1, isDetached: n = !1, isDismissable: r = !0, isNested: i = !1, isOpen: a, onAnimationEnd: o, onClose: s, onOpenChange: c, placement: l = "bottom", snapPoints: u }) {
	let d = (0, A.useMemo)(() => Pe(u), [u]), [f, p] = (0, A.useState)(t), m = a ?? f, h = (0, A.useCallback)((e) => {
		a === void 0 && p(e), c?.(e), e || s?.();
	}, [
		a,
		s,
		c
	]), g = A.Children.toArray(e).some(Ne), _ = (0, A.useMemo)(() => ({
		closeSheet: () => h(!1),
		isDetached: n,
		isDismissable: r,
		isNested: i,
		isOpen: m,
		isTriggerControlled: g,
		onAnimationEnd: o,
		placement: l,
		setIsOpen: h,
		snapPoints: d
	}), [
		n,
		r,
		i,
		m,
		g,
		o,
		l,
		h,
		d
	]), v = /*#__PURE__*/ (0, Z.jsx)(me.Provider, {
		value: _,
		children: e
	});
	return g ? /*#__PURE__*/ (0, Z.jsx)(L, {
		isOpen: m,
		onOpenChange: h,
		children: v
	}) : v;
}
function Ne(e) {
	return /*#__PURE__*/ (0, A.isValidElement)(e) && e.type === Fe;
}
function Pe(e) {
	if (!e?.length) return;
	let t = e.filter((t, n) => n !== e.length - 1 || t !== 1 && t !== "1" && t !== "100%");
	return t.length > 0 ? t : void 0;
}
function Fe({ children: e }) {
	return e;
}
function Ie({ children: e }) {
	let { closeSheet: t } = J();
	return /*#__PURE__*/ A.cloneElement(e, { ...r(e.props, { onPress: t }) });
}
var Le = ({ children: e, className: t, isExiting: r, ref: i, variant: a = "opaque", ...o }) => {
	let { isDismissable: s, isOpen: c, isTriggerControlled: l, placement: u, setIsOpen: d, snapPoints: f } = J(), p = (0, A.useMemo)(() => k({
		backdrop: a,
		placement: u
	}), [u, a]), [m, h] = (0, A.useState)(c), [g, _] = (0, A.useState)(!1);
	c && g && _(!1);
	let v = (0, A.useCallback)(() => _(!0), []);
	c && !m && h(!0);
	let y = { isExiting: m && r }, b = (0, A.useRef)(null), x = (0, A.useMemo)(() => n(b, i), [i]), S = f?.length ? { start: f.length - 1 } : void 0;
	return !c && g && !r ? null : /*#__PURE__*/ (0, Z.jsx)(A.Suspense, {
		fallback: null,
		children: /*#__PURE__*/ (0, Z.jsx)(Re, {
			isHidden: !!(!c && g && r),
			children: /*#__PURE__*/ (0, Z.jsx)(B, {
				...o,
				...y,
				...l ? {} : {
					isOpen: c,
					onOpenChange: d
				},
				ref: x,
				"aria-hidden": !c || void 0,
				className: T(t, p.overlay()),
				"data-closed": c ? void 0 : "",
				"data-slot": "sheet-overlay",
				inert: !c,
				position: u,
				preventDismissal: !s,
				snapPoints: f,
				children: (t) => /*#__PURE__*/ (0, Z.jsxs)(he, {
					value: t.swipeDirection,
					children: [
						/*#__PURE__*/ (0, Z.jsx)(Ae, {
							...t,
							overlayRef: b,
							onExitComplete: v
						}),
						/*#__PURE__*/ (0, Z.jsx)(le, {
							className: p.backdrop(),
							"data-slot": "sheet-backdrop",
							swipeAnimation: Me,
							swipeAnimationRange: S
						}),
						e
					]
				})
			})
		})
	});
};
function Re({ children: e, isHidden: t }) {
	let [n] = (0, A.useState)(() => new Promise(() => {}));
	if (t) throw n;
	return e;
}
var ze = ({ children: e, className: t, ref: n, ...r }) => {
	let { isDetached: i, placement: a, snapPoints: o } = J(), s = (0, A.useMemo)(() => k({ placement: a }), [a]);
	return /*#__PURE__*/ (0, Z.jsx)(se, {
		...r,
		ref: n,
		className: T(t, s.content()),
		"data-detached": i ? "" : void 0,
		"data-placement": a,
		"data-slot": "sheet-content",
		"data-snap-points": o?.length ? "" : void 0,
		overscrollPadding: !i,
		stackAnimation: je,
		children: e
	});
}, Be = ({ children: e, className: t, ...n }) => {
	let { placement: r } = J(), i = (0, A.useMemo)(() => k({ placement: r }), [r]);
	return /*#__PURE__*/ (0, Z.jsx)(O, {
		value: { variant: "default" },
		children: /*#__PURE__*/ (0, Z.jsx)(de, {
			...n,
			className: E(i?.dialog, t),
			"data-placement": r,
			"data-slot": "sheet-dialog",
			children: e
		})
	});
}, Ve = ({ children: e, className: t, ...n }) => {
	let { placement: r } = J(), i = (0, A.useMemo)(() => k({ placement: r }), [r]);
	return /*#__PURE__*/ (0, Z.jsx)("div", {
		className: E(i?.header, t),
		"data-slot": "sheet-header",
		...n,
		children: e
	});
}, He = ({ children: e, className: t, ...n }) => {
	let { placement: r } = J(), i = (0, A.useMemo)(() => k({ placement: r }), [r]);
	return /*#__PURE__*/ (0, Z.jsx)(u, {
		...n,
		className: E(i?.heading, t),
		"data-slot": "sheet-heading",
		slot: n.slot ?? "title",
		children: e
	});
}, Ue = ({ children: e, className: t, ...n }) => {
	let { placement: r } = J(), i = (0, A.useMemo)(() => k({ placement: r }), [r]);
	return /*#__PURE__*/ (0, Z.jsx)("div", {
		className: E(i?.body, t),
		"data-slot": "sheet-body",
		...n,
		children: e
	});
}, We = ({ children: e, className: t, ...n }) => {
	let { placement: r } = J(), i = (0, A.useMemo)(() => k({ placement: r }), [r]);
	return /*#__PURE__*/ (0, Z.jsx)("div", {
		className: E(i?.footer, t),
		"data-slot": "sheet-footer",
		...n,
		children: e
	});
}, Ge = ({ children: e, className: t, onLostPointerCapture: n, onPointerCancel: r, onPointerDown: i, onPointerMove: a, onPointerUp: o, ...s }) => {
	let { placement: c } = J(), l = (0, A.useMemo)(() => k({ placement: c }), [c]), u = Te(A.useContext(he) ?? c);
	return /*#__PURE__*/ (0, Z.jsx)("div", {
		"aria-hidden": "true",
		className: E(l?.handle, t),
		"data-sheet-handle": "",
		"data-slot": "sheet-handle",
		...s,
		onLostPointerCapture: (e) => {
			n?.(e), u.onLostPointerCapture(e);
		},
		onPointerCancel: (e) => {
			r?.(e), u.onPointerCancel(e);
		},
		onPointerDown: (e) => {
			i?.(e), e.defaultPrevented || u.onPointerDown(e);
		},
		onPointerMove: (e) => {
			a?.(e), u.onPointerMove(e);
		},
		onPointerUp: (e) => {
			o?.(e), u.onPointerUp(e);
		},
		children: e ?? /*#__PURE__*/ (0, Z.jsx)("span", {
			className: l.handleBar(),
			"data-slot": "sheet-handle-bar"
		})
	});
}, Ke = ({ children: e, className: t, onPress: n, ...i }) => {
	let { closeSheet: a, placement: o } = J(), s = (0, A.useMemo)(() => k({ placement: o }), [o]);
	return /*#__PURE__*/ (0, Z.jsx)(D, {
		...i,
		className: E(s?.closeTrigger, t),
		"data-slot": "sheet-close-trigger",
		onPress: r({ onPress: n }, { onPress: a }).onPress,
		children: e
	});
};
function qe(e) {
	if (!A.useContext(me)) throw Error("Sheet.NestedRoot must be placed in another Sheet");
	return /*#__PURE__*/ (0, Z.jsx)(Q, {
		...e,
		isNested: !0
	});
}
Q.displayName = "HeroUI.Sheet", Fe.displayName = "HeroUI.Sheet.Trigger", Ie.displayName = "HeroUI.Sheet.Close", Le.displayName = "HeroUI.Sheet.Backdrop", ze.displayName = "HeroUI.Sheet.Content", Be.displayName = "HeroUI.Sheet.Dialog", Ve.displayName = "HeroUI.Sheet.Header", He.displayName = "HeroUI.Sheet.Heading", Ue.displayName = "HeroUI.Sheet.Body", We.displayName = "HeroUI.Sheet.Footer", Ge.displayName = "HeroUI.Sheet.Handle", Ke.displayName = "HeroUI.Sheet.CloseTrigger", qe.displayName = "HeroUI.Sheet.NestedRoot";
// node_modules/@heroui/react/dist/components/sheet/index.js
var $ = Object.assign(Q, {
	Backdrop: Le,
	Body: Ue,
	Close: Ie,
	CloseTrigger: Ke,
	Content: ze,
	Dialog: Be,
	Footer: We,
	Handle: Ge,
	Header: Ve,
	Heading: He,
	NestedRoot: qe,
	Root: Q,
	Trigger: Fe
});
// upstream/demos/en/sheet/basic.tsx
function Je() {
	return /* @__PURE__ */ (0, Z.jsxs)($, { children: [/* @__PURE__ */ (0, Z.jsx)($.Trigger, { children: /* @__PURE__ */ (0, Z.jsx)(e, {
		variant: "secondary",
		children: "Open Sheet"
	}) }), /* @__PURE__ */ (0, Z.jsx)($.Backdrop, { children: /* @__PURE__ */ (0, Z.jsx)($.Content, {
		className: "mx-auto max-h-[95vh] max-w-[420px]",
		children: /* @__PURE__ */ (0, Z.jsxs)($.Dialog, { children: [
			/* @__PURE__ */ (0, Z.jsx)($.Handle, {}),
			/* @__PURE__ */ (0, Z.jsx)($.CloseTrigger, {}),
			/* @__PURE__ */ (0, Z.jsx)($.Header, { children: /* @__PURE__ */ (0, Z.jsx)($.Heading, { children: "Sheet Title" }) }),
			/* @__PURE__ */ (0, Z.jsx)($.Body, { children: /* @__PURE__ */ (0, Z.jsx)("p", {
				className: "text-sm text-muted",
				children: "This is a bottom sheet built with smooth drag-to-dismiss animations. Try dragging the handle down to close, or use the close button."
			}) }),
			/* @__PURE__ */ (0, Z.jsxs)($.Footer, { children: [/* @__PURE__ */ (0, Z.jsx)($.Close, { children: /* @__PURE__ */ (0, Z.jsx)(e, {
				variant: "secondary",
				children: "Cancel"
			}) }), /* @__PURE__ */ (0, Z.jsx)($.Close, { children: /* @__PURE__ */ (0, Z.jsx)(e, {
				variant: "secondary",
				children: "Confirm"
			}) })] })
		] })
	}) })] });
}
export { Je as Basic };
