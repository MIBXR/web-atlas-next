import { i as e, n as t, t as n } from "./jsx-runtime-C1t0izHF.js";
import { t as r } from "./button-Dd5iSf4T.js";
import { n as i } from "./dist-qnEEIXtT.js";
import { d as a, m as o, n as s, r as c, s as l, t as u } from "./utils-UBVJ5JR_.js";
import { n as d, t as f } from "./useFocusable-D0mnHSRC.js";
import { a as p, n as m, o as h, r as g, t as _ } from "./useOverlayTriggerState-loftJLxJ.js";
import { t as v } from "./filterDOMProps-CJYy6efO.js";
import { t as y } from "./SSRProvider-DmcnjAEC.js";
import { t as b } from "./react-dom-Dipvgcxr.js";
import { n as x, t as S } from "./animation-BSwTv2GN.js";
import { r as ee, s as te } from "./useKeyboard-CqNSkGJ-.js";
import { t as C } from "./useHover-DxA7bNQs.js";
import { t as w } from "./use-css-variable-BK30PNYv.js";
import { r as T, t as ne } from "./compose-ClIOcrt6.js";
import { t as re } from "./dom-CdwaDRL5.js";
import { n as ie, t as E } from "./use-overlay-exit-hold-DYlqAHKn.js";
// node_modules/@gravity-ui/icons/esm/CircleInfo.js
var D = /* @__PURE__ */ e(t()), ae = (e) => D.createElement("svg", Object.assign({
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	fill: "none",
	viewBox: "0 0 16 16"
}, e), D.createElement("path", {
	fill: "currentColor",
	fillRule: "evenodd",
	d: "M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0z",
	clipRule: "evenodd"
})), oe = i({ slots: {
	base: "tooltip",
	trigger: "tooltip__trigger"
} }), O = 1500, k = 500, A = {}, se = 0, j = !1, M = null, N = null;
function P(e = {}) {
	let { delay: t = O, closeDelay: n = k } = e, { isOpen: r, open: i, close: a } = _(e), [o, s] = (0, D.useState)(!1), c = (0, D.useMemo)(() => `${++se}`, []), l = (0, D.useRef)(null), u = (0, D.useRef)(a), d = () => {
		A[c] = m;
	}, f = () => {
		for (let e in A) e !== c && (A[e](!0, !0), delete A[e]);
	}, p = (e) => {
		l.current && clearTimeout(l.current), l.current = null, f(), d(), s(!!e), j = !0, i(), M &&= (clearTimeout(M), null), N &&= (clearTimeout(N), null);
	}, m = (e, t) => {
		s(!!t), e || n <= 0 ? (l.current && clearTimeout(l.current), l.current = null, u.current()) : l.current ||= setTimeout(() => {
			l.current = null, u.current();
		}, n), M &&= (clearTimeout(M), null), j && (N && clearTimeout(N), N = setTimeout(() => {
			delete A[c], N = null, j = !1;
		}, Math.max(k, n)));
	}, h = () => {
		f(), d(), !r && !j ? (M && clearTimeout(M), M = setTimeout(() => {
			M = null, j = !0, p(!1);
		}, t)) : r || p(!0);
	};
	return (0, D.useEffect)(() => {
		u.current = a;
	}, [a]), (0, D.useEffect)(() => () => {
		l.current && clearTimeout(l.current), A[c] && delete A[c];
	}, [c]), {
		isOpen: r,
		shouldSkipAnimation: o,
		open: (e) => {
			!e && t > 0 && !l.current ? h() : p(j);
		},
		close: m
	};
}
// node_modules/react-aria/dist/private/overlays/useModal.mjs
var F = /* @__PURE__ */ e(b(), 1), I = /*#__PURE__*/ D.createContext(null);
function L(e) {
	let { children: t } = e, n = (0, D.useContext)(I), [r, i] = (0, D.useState)(0), a = (0, D.useMemo)(() => ({
		parent: n,
		modalCount: r,
		addModal() {
			i((e) => e + 1), n && n.addModal();
		},
		removeModal() {
			i((e) => e - 1), n && n.removeModal();
		}
	}), [n, r]);
	return /*#__PURE__*/ D.createElement(I.Provider, { value: a }, t);
}
function R() {
	let e = (0, D.useContext)(I);
	return { modalProviderProps: { "aria-hidden": e && e.modalCount > 0 ? !0 : void 0 } };
}
function z(e) {
	let { modalProviderProps: t } = R();
	return /*#__PURE__*/ D.createElement("div", {
		"data-overlay-container": !0,
		...e,
		...t
	});
}
function B(e) {
	return /*#__PURE__*/ D.createElement(L, null, /*#__PURE__*/ D.createElement(z, e));
}
function V(e) {
	let t = y(), { portalContainer: n = t ? null : document.body, ...r } = e, { getContainer: i } = m();
	if (!e.portalContainer && i && (n = i()), D.useEffect(() => {
		if (n?.closest("[data-overlay-container]")) throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
	}, [n]), !n) return null;
	let a = /*#__PURE__*/ D.createElement(B, r);
	return /*#__PURE__*/ F.createPortal(a, n);
}
// node_modules/react-aria/dist/private/tooltip/useTooltip.mjs
function H(e, t) {
	let n = v(e, { labelable: !0 }), { hoverProps: r } = C({
		onHoverStart: () => t?.open(!0),
		onHoverEnd: () => t?.close()
	});
	return { tooltipProps: a(n, r, { role: "tooltip" }) };
}
// node_modules/react-aria/dist/private/tooltip/useTooltipTrigger.mjs
function U(e, t, n) {
	let { isDisabled: r, trigger: i, shouldCloseOnPress: s = !0 } = e, c = o(), l = (0, D.useRef)(!1), u = (0, D.useRef)(!1), f = () => {
		(l.current || u.current) && t.open(u.current);
	}, p = (e) => {
		!l.current && !u.current && t.close(e);
	};
	(0, D.useEffect)(() => {
		let e = (e) => {
			n && n.current && e.key === "Escape" && (e.stopPropagation(), t.close(!0));
		};
		if (t.isOpen) return document.addEventListener("keydown", e, !0), () => {
			document.removeEventListener("keydown", e, !0);
		};
	}, [n, t]);
	let m = () => {
		i !== "focus" && (ee() === "pointer" ? l.current = !0 : l.current = !1, f());
	}, h = () => {
		i !== "focus" && (u.current = !1, l.current = !1, p());
	}, g = () => {
		s && (u.current = !1, l.current = !1, p(!0));
	}, _ = () => {
		te() && (u.current = !0, f());
	}, v = () => {
		u.current = !1, l.current = !1, p(!0);
	}, { hoverProps: y } = C({
		isDisabled: r,
		onHoverStart: m,
		onHoverEnd: h
	}), { focusableProps: b } = d({
		isDisabled: r,
		onFocus: _,
		onBlur: v
	}, n);
	return {
		triggerProps: {
			"aria-describedby": t.isOpen ? c : void 0,
			...a(b, y, {
				onPointerDown: g,
				onKeyDown: g
			}),
			tabIndex: void 0
		},
		tooltipProps: { id: c }
	};
}
// node_modules/react-aria-components/dist/private/Tooltip.mjs
var W = /*#__PURE__*/ (0, D.createContext)(null), G = /*#__PURE__*/ (0, D.createContext)(null);
function ce(e) {
	let t = P(e), n = (0, D.useRef)(null), { triggerProps: r, tooltipProps: i } = U(e, t, n);
	return /*#__PURE__*/ D.createElement(u, { values: [[W, t], [G, {
		...i,
		triggerRef: n
	}]] }, /*#__PURE__*/ D.createElement(f, {
		...r,
		ref: n
	}, e.children));
}
var le = /*#__PURE__*/ (0, D.forwardRef)(function({ UNSTABLE_portalContainer: e, ...t }, n) {
	[t, n] = s(t, n, G);
	let r = (0, D.useContext)(W), i = P(t), a = t.isOpen != null || t.defaultOpen != null || !r ? i : r, o = S(n, a.isOpen), c = t.isExiting || !a.shouldSkipAnimation && o || !1;
	return !a.isOpen && !c ? null : /*#__PURE__*/ D.createElement(V, { portalContainer: e }, /*#__PURE__*/ D.createElement(ue, {
		...t,
		tooltipRef: n,
		isExiting: c
	}));
});
function ue(e) {
	let t = (0, D.useContext)(W), n = (0, D.useRef)(null), { overlayProps: r, arrowProps: i, placement: o, triggerAnchorPoint: s } = g({
		placement: e.placement || "top",
		targetRef: e.triggerRef,
		overlayRef: e.tooltipRef,
		arrowRef: n,
		offset: e.offset,
		crossOffset: e.crossOffset,
		isOpen: t.isOpen,
		arrowBoundaryOffset: e.arrowBoundaryOffset,
		shouldFlip: e.shouldFlip,
		containerPadding: e.containerPadding,
		onClose: () => t.close(!0)
	}), u = x(e.tooltipRef, !!o), d = e.isEntering || !t.shouldSkipAnimation && u || !1, f = c({
		...e,
		defaultClassName: "react-aria-Tooltip",
		values: {
			placement: o,
			isEntering: d,
			isExiting: e.isExiting,
			state: t
		}
	});
	e = a(e, r);
	let { tooltipProps: m } = H(e, t), h = v(e, { global: !0 });
	return /*#__PURE__*/ D.createElement(l.div, {
		...a(h, f, m),
		ref: e.tooltipRef,
		style: {
			...r.style,
			"--trigger-anchor-point": s ? `${s.x}px ${s.y}px` : void 0,
			...f.style
		},
		"data-placement": o ?? void 0,
		"data-entering": d || void 0,
		"data-exiting": e.isExiting || void 0
	}, /*#__PURE__*/ D.createElement(p.Provider, { value: {
		...i,
		placement: o,
		ref: n
	} }, f.children));
}
// node_modules/@heroui/react/dist/utils/css.js
var K = (e) => {
	if (!e) return;
	let t = e.trim(), n = parseFloat(t);
	if (!Number.isNaN(n)) return t.endsWith("ms") ? n : t.endsWith("s") ? n * 1e3 : n;
}, q = n(), J = /*#__PURE__*/ (0, D.createContext)({}), de = ({ children: e, shouldSkipAnimation: t }) => {
	let n = (0, D.use)(W);
	return !n || t ? e : /*#__PURE__*/ (0, q.jsx)(W, {
		value: {
			...n,
			shouldSkipAnimation: !1
		},
		children: e
	});
}, Y = ({ children: e, closeDelay: t, delay: n, shouldSkipAnimation: r = !1, ...i }) => {
	let a = D.useMemo(() => oe(), []), o = w("--tooltip-delay"), s = w("--tooltip-close-delay"), c = n ?? K(o), l = t ?? K(s), u = D.useMemo(() => ({ slots: a }), [a]);
	return /*#__PURE__*/ (0, q.jsx)(J, {
		value: u,
		children: /*#__PURE__*/ (0, q.jsx)(ce, {
			closeDelay: l,
			"data-slot": "tooltip-root",
			delay: c,
			...i,
			children: /*#__PURE__*/ (0, q.jsx)(de, {
				shouldSkipAnimation: r,
				children: e
			})
		})
	});
};
Y.displayName = "HeroUI.Tooltip";
var X = ({ children: e, className: t, defaultOpen: n, isExiting: r, isOpen: i, offset: a, ref: o, showArrow: s = !1, ...c }) => {
	let { slots: l } = (0, D.use)(J), u = a || (s ? 7 : 3), d = (0, D.use)(W), { isExiting: f, ref: p } = ie(E(i, n, d), {
		enabled: !d?.shouldSkipAnimation,
		ref: o
	});
	return /*#__PURE__*/ (0, q.jsx)(le, {
		...c,
		ref: p,
		className: T(t, l?.base()),
		defaultOpen: n,
		isExiting: f || r,
		isOpen: i,
		offset: u,
		children: e
	});
};
X.displayName = "HeroUI.Tooltip.Content";
var Z = ({ children: e, className: t, ...n }) => {
	let r = /*#__PURE__*/ (0, q.jsx)("svg", {
		"data-slot": "overlay-arrow",
		fill: "none",
		height: "12",
		viewBox: "0 0 12 12",
		width: "12",
		xmlns: "http://www.w3.org/2000/svg",
		children: /*#__PURE__*/ (0, q.jsx)("path", { d: "M0 0C5.48483 8 6.5 8 12 0Z" })
	}), i = /*#__PURE__*/ D.isValidElement(e) ? /*#__PURE__*/ D.cloneElement(e, { "data-slot": "overlay-arrow" }) : r;
	return /*#__PURE__*/ (0, q.jsx)(h, {
		"data-slot": "tooltip-arrow",
		...n,
		className: t,
		children: i
	});
};
Z.displayName = "HeroUI.Tooltip.Arrow";
var Q = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, D.use)(J), i = (0, D.useRef)(null), { focusableProps: o } = d({}, i);
	return /*#__PURE__*/ (0, q.jsx)(re.div, {
		ref: i,
		className: ne(r?.trigger, t),
		"data-slot": "tooltip-trigger",
		role: "button",
		...a(o, n),
		children: e
	});
};
Q.displayName = "HeroUI.Tooltip.Trigger";
// node_modules/@heroui/react/dist/components/tooltip/index.js
var $ = Object.assign(Y, {
	Root: Y,
	Trigger: Q,
	Content: X,
	Arrow: Z
});
// upstream/demos/en/tooltip/basic.tsx
function fe() {
	return /* @__PURE__ */ (0, q.jsxs)("div", {
		className: "flex items-center gap-4",
		children: [/* @__PURE__ */ (0, q.jsxs)($, {
			delay: 0,
			children: [/* @__PURE__ */ (0, q.jsx)(r, {
				variant: "secondary",
				children: "Hover me"
			}), /* @__PURE__ */ (0, q.jsx)($.Content, { children: /* @__PURE__ */ (0, q.jsx)("p", { children: "This is a tooltip" }) })]
		}), /* @__PURE__ */ (0, q.jsxs)($, {
			delay: 0,
			children: [/* @__PURE__ */ (0, q.jsx)(r, {
				isIconOnly: !0,
				"aria-label": "More information",
				variant: "tertiary",
				children: /* @__PURE__ */ (0, q.jsx)(ae, {})
			}), /* @__PURE__ */ (0, q.jsx)($.Content, { children: /* @__PURE__ */ (0, q.jsx)("p", { children: "More information" }) })]
		})]
	});
}
export { fe as TooltipBasic };
