import { d as e, n as t, r as n, s as r, t as i, u as a } from "./utils-UBVJ5JR_.js";
import { _ as o, b as s, g as c, i as l, m as u, p as d, r as f, v as p, x as m, y as h } from "./Dialog-C0V2m_6r.js";
import { i as g, n as _ } from "./jsx-runtime-C1t0izHF.js";
import { t as v } from "./filterDOMProps-CJYy6efO.js";
import { i as y } from "./scrollIntoView-D_15IrGl.js";
import { r as b } from "./dist-qnEEIXtT.js";
import { t as x } from "./useOverlayTriggerState-loftJLxJ.js";
import { n as S, t as C } from "./animation-BSwTv2GN.js";
import { t as w } from "./SSRProvider-DmcnjAEC.js";
import { t as T } from "./useLayoutEffect-Bx2X4QEP.js";
import { H as E, L as D, S as O } from "./useKeyboard-CqNSkGJ-.js";
import { c as k } from "./virtualFocus-D_kYTh--.js";
// node_modules/react-aria/dist/private/utils/useViewportSize.mjs
var A = /* @__PURE__ */ g(_(), 1), j = typeof document < "u" && window.visualViewport;
function M() {
	let e = w(), t = (0, A.useRef)(null), [n, r] = (0, A.useState)(() => e ? {
		width: 0,
		height: 0
	} : N());
	return (0, A.useEffect)(() => {
		let e = (e) => {
			r((t) => e.width === t.width && e.height === t.height ? t : e);
		}, n = () => {
			j && j.scale > 1 || e(N());
		}, i = (n) => {
			j && j.scale > 1 || k(O(n)) && (t.current = m((t) => {
				t || e({
					width: document.documentElement.clientWidth,
					height: document.documentElement.clientHeight
				});
			}));
		};
		return e(N()), E() && D() && window.addEventListener("blur", i, !0), j ? j.addEventListener("resize", n) : window.addEventListener("resize", n), () => {
			t.current?.(), E() && D() && window.removeEventListener("blur", i, !0), j ? j.removeEventListener("resize", n) : window.removeEventListener("resize", n);
		};
	}, []), n;
}
function N() {
	return {
		width: j ? Math.min(j.width * j.scale, document.documentElement.clientWidth) : document.documentElement.clientWidth,
		height: j ? j.height * j.scale : document.documentElement.clientHeight
	};
}
// node_modules/react-aria/dist/private/overlays/useModalOverlay.mjs
function P(t, n, r) {
	let { overlayProps: i, underlayProps: a } = p({
		...t,
		isOpen: n.isOpen,
		onClose: n.close
	}, r);
	o({
		isDisabled: !n.isOpen,
		UNSTABLE_overrideFocus: t.UNSTABLE_overrideFocus
	}), d();
	let { isEntering: c } = t;
	return (0, A.useEffect)(() => {
		if (n.isOpen && r.current) return c ? h(r.current) : s([r.current], { shouldUseInert: !0 });
	}, [
		n.isOpen,
		c,
		r
	]), {
		modalProps: e(i),
		underlayProps: a
	};
}
// node_modules/react-aria-components/dist/private/Modal.mjs
var F = /*#__PURE__*/ (0, A.createContext)(null), I = /*#__PURE__*/ (0, A.createContext)(null), L = /*#__PURE__*/ (0, A.forwardRef)(function(e, t) {
	if ((0, A.useContext)(I)) return /*#__PURE__*/ A.createElement(H, {
		...e,
		modalRef: t
	}, e.children);
	let { isDismissable: n, isKeyboardDismissDisabled: r, isOpen: i, defaultOpen: a, onOpenChange: o, children: s, isEntering: c, isExiting: l, UNSTABLE_portalContainer: u, shouldCloseOnInteractOutside: d, ...f } = e;
	return /*#__PURE__*/ A.createElement(z, {
		isDismissable: n,
		isKeyboardDismissDisabled: r,
		isOpen: i,
		defaultOpen: a,
		onOpenChange: o,
		isEntering: c,
		isExiting: l,
		UNSTABLE_portalContainer: u,
		shouldCloseOnInteractOutside: d
	}, /*#__PURE__*/ A.createElement(H, {
		...f,
		modalRef: t
	}, s));
});
function R(e, n) {
	[e, n] = t(e, n, F);
	let r = (0, A.useContext)(l), i = x(e), o = e.isOpen != null || e.defaultOpen != null || !r ? i : r, s = a(n), c = (0, A.useRef)(null), u = C(s, o.isOpen, e.onExit), d = (0, A.useRef)(null), f = C(c, o.isOpen, (e) => d.current?.(e)), p = u || f || e.isExiting || !1, m = w();
	return !o.isOpen && !p || m ? null : /*#__PURE__*/ A.createElement(B, {
		...e,
		state: o,
		isExiting: p,
		overlayRef: s,
		modalRef: c,
		onExitRef: d
	});
}
var z = /*#__PURE__*/ (0, A.forwardRef)(R);
function B({ UNSTABLE_portalContainer: t, UNSTABLE_deferUntilEntered: a, ...o }) {
	let s = o.modalRef, { state: c } = o, [d, p] = (0, A.useState)(!1), h = S(o.overlayRef, d, o.onEnter) || o.isEntering || !1, g = !!a && (!d || h), { modalProps: _, underlayProps: b } = P({
		...o,
		isEntering: g
	}, c, s), x = (0, A.useContext)(f), C = a ? V(x, { isEntering: g }) : x, w = n({
		...o,
		defaultClassName: "react-aria-ModalOverlay",
		values: {
			isEntering: h,
			isExiting: o.isExiting,
			state: c
		}
	}), E = M(), D, O;
	if (typeof document < "u") {
		let e = y(document.body) ? document.body : document.scrollingElement || document.documentElement, t = e.getBoundingClientRect().width % 1, n = e.getBoundingClientRect().height % 1;
		D = e.scrollWidth - t, O = e.scrollHeight - n;
	}
	let k = {
		...w.style,
		"--visual-viewport-width": E.width + "px",
		"--visual-viewport-height": E.height + "px",
		"--page-width": D === void 0 ? void 0 : D + "px",
		"--page-height": O === void 0 ? void 0 : O + "px"
	};
	return T(() => m(() => p(!0)), []), /*#__PURE__*/ A.createElement(u, {
		isExiting: o.isExiting,
		portalContainer: t
	}, /*#__PURE__*/ A.createElement(r.div, {
		...e(v(o, { global: !0 }), b),
		...w,
		style: k,
		ref: o.overlayRef,
		"data-entering": h || void 0,
		"data-exiting": o.isExiting || void 0
	}, /*#__PURE__*/ A.createElement(i, { values: [
		[I, {
			modalProps: _,
			modalRef: s,
			isExiting: o.isExiting,
			onExitRef: o.onExitRef,
			isOpen: d,
			isDismissable: o.isDismissable
		}],
		[l, c],
		[f, C]
	] }, w.children)));
}
function V(e, t) {
	if (e && "slots" in e && e.slots) {
		let n = {};
		for (let r in e.slots) n[r] = {
			...e.slots[r],
			...t
		};
		return {
			...e,
			slots: n
		};
	}
	return {
		...e,
		...t
	};
}
function H(t) {
	let { modalProps: i, modalRef: o, isExiting: s, onExitRef: u, isDismissable: d, isOpen: f } = (0, A.useContext)(I), p = (0, A.useContext)(l), m = (0, A.useMemo)(() => b(t.modalRef, o), [t.modalRef, o]), h = a(m), g = S(h, f, t.onEnter), _ = n({
		...t,
		defaultClassName: "react-aria-Modal",
		values: {
			isEntering: g,
			isExiting: s,
			state: p
		}
	});
	return T(() => {
		u && (u.current = t.onExit);
	}), /*#__PURE__*/ A.createElement(r.div, {
		...e(v(t, { global: !0 }), i),
		..._,
		ref: h,
		"data-entering": g || void 0,
		"data-exiting": s || void 0
	}, d && /*#__PURE__*/ A.createElement(c, { onDismiss: p.close }), _.children);
}
export { I as n, z as r, L as t };
