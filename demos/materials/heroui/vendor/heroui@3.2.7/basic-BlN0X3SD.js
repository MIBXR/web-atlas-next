import { t as e } from "./button-Dd5iSf4T.js";
import { n as t } from "./dist-qnEEIXtT.js";
import { d as n } from "./utils-UBVJ5JR_.js";
import { i as r, n as i, t as a } from "./jsx-runtime-C1t0izHF.js";
import { n as o } from "./Button-Cnex0dS4.js";
import { i as s, n as c, t as l } from "./Dialog-C0V2m_6r.js";
import { t as u } from "./Heading-CdGE8g_3.js";
import { r as d, t as f } from "./Modal-C2uH6B2w.js";
import { r as p, t as m } from "./compose-ClIOcrt6.js";
import { t as h } from "./dom-CdwaDRL5.js";
import { t as g } from "./close-button-CHpFmCHB.js";
import { t as _ } from "./surface-YzNgM-6T.js";
// node_modules/@heroui/styles/dist/components/drawer/drawer.styles.js
var v = t({
	defaultVariants: {
		placement: "bottom",
		variant: "opaque"
	},
	slots: {
		backdrop: "drawer__backdrop",
		body: "drawer__body",
		closeTrigger: "drawer__close-trigger",
		content: "drawer__content",
		dialog: "drawer__dialog",
		footer: "drawer__footer",
		handle: "drawer__handle",
		header: "drawer__header",
		heading: "drawer__heading",
		trigger: "drawer__trigger"
	},
	variants: {
		placement: {
			bottom: {
				content: "drawer__content--bottom",
				dialog: "drawer__dialog--bottom"
			},
			left: {
				content: "drawer__content--left",
				dialog: "drawer__dialog--left"
			},
			right: {
				content: "drawer__content--right",
				dialog: "drawer__dialog--right"
			},
			top: {
				content: "drawer__content--top",
				dialog: "drawer__dialog--top"
			}
		},
		variant: {
			blur: { backdrop: "drawer__backdrop--blur" },
			opaque: { backdrop: "drawer__backdrop--opaque" },
			transparent: { backdrop: "drawer__backdrop--transparent" }
		}
	}
}), y = (e, t) => e.closest("[data-slot=\"drawer-dialog\"]") === t, b = /* @__PURE__ */ r(i(), 1), x = a(), S = { variant: "default" }, C = 8, w = .3, T = .5;
function E(e, t) {
	let n = (0, b.use)(s), r = (0, b.useRef)(null), i = (0, b.useRef)(!1), a = (0, b.useRef)(!1), o = (0, b.useRef)(0), c = (0, b.useRef)(0), l = (0, b.useRef)(0), u = (0, b.useRef)(0), d = (0, b.useRef)(0), f = e === "top" || e === "bottom", p = (0, b.useCallback)((e) => f ? e.clientY : e.clientX, [f]), m = (0, b.useCallback)((t) => {
		switch (e) {
			case "bottom": return Math.max(0, t);
			case "top": return Math.min(0, t);
			case "right": return Math.max(0, t);
			case "left": return Math.min(0, t);
			default: return t;
		}
	}, [e]), h = (0, b.useCallback)((e) => {
		if (!t || e.button !== 0) return;
		let n = e.target, r = e.currentTarget;
		y(n, r) && (n.closest("input, textarea, button, [role='button'], select, a, [data-slot='drawer-body']") || (i.current = !0, a.current = !1, o.current = p(e), d.current = o.current, u.current = Date.now(), c.current = 0, l.current = 0));
	}, [p, t]), g = (0, b.useCallback)((e) => {
		if (!i.current || !r.current) return;
		let t = p(e), n = t - o.current, s = m(n);
		if (!a.current) {
			if (Math.abs(n) < C) return;
			a.current = !0, r.current.style.transition = "none", r.current.setPointerCapture(e.pointerId);
		}
		c.current = s;
		let h = Date.now(), g = h - u.current;
		g > 0 && (l.current = (t - d.current) / g, u.current = h, d.current = t);
		let _ = f ? "Y" : "X";
		r.current.style.transform = `translate${_}(${s}px)`;
	}, [
		p,
		m,
		f
	]), _ = (0, b.useCallback)((e) => {
		e.style.transition = "transform 300ms cubic-bezier(0.32, 0.72, 0, 1)", e.style.transform = "", e.addEventListener("transitionend", () => {
			e.style.transition = "";
		}, { once: !0 });
	}, []), v = (0, b.useCallback)((e) => {
		if (!i.current) return;
		i.current = !1;
		let t = r.current;
		if (!t || !a.current) {
			a.current = !1;
			return;
		}
		a.current = !1;
		try {
			t.releasePointerCapture(e.pointerId);
		} catch {}
		let o = f ? t.offsetHeight : t.offsetWidth, s = Math.abs(c.current), u = Math.abs(l.current);
		(s > o * w || u > T) && n ? (t.style.transition = "", n.close()) : _(t), c.current = 0, l.current = 0;
	}, [
		f,
		n,
		_
	]), x = (0, b.useCallback)((e) => {
		if (!i.current) return;
		let t = a.current;
		i.current = !1, a.current = !1, c.current = 0, l.current = 0;
		let n = r.current;
		if (n) {
			try {
				n.releasePointerCapture(e.pointerId);
			} catch {}
			t && _(n);
		}
	}, [_]), S = (0, b.useCallback)((e) => {
		e.target === e.currentTarget && x(e);
	}, [x]);
	return {
		dialogRef: r,
		dragHandlers: t ? {
			onLostPointerCapture: S,
			onPointerCancel: x,
			onPointerDown: h,
			onPointerMove: g,
			onPointerUp: v
		} : {}
	};
}
var D = /*#__PURE__*/ (0, b.createContext)({}), O = ({ children: e, state: t, ...r }) => {
	let i = (0, b.useMemo)(() => ({
		slots: v(),
		placement: void 0,
		isDismissable: !0
	}), []), a = (0, b.useMemo)(() => t ? {
		isOpen: t.isOpen,
		onOpenChange: t.setOpen
	} : {}, [t]);
	return /*#__PURE__*/ (0, x.jsx)(D, {
		value: i,
		children: /*#__PURE__*/ (0, x.jsx)(l, {
			"data-slot": "drawer-root",
			...n(r, a),
			children: e
		})
	});
};
O.displayName = "HeroUI.Drawer";
var k = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, b.use)(D);
	return /*#__PURE__*/ (0, x.jsx)(o, {
		className: p(t, r?.trigger()),
		"data-slot": "drawer-trigger",
		...n,
		children: e
	});
};
k.displayName = "HeroUI.Drawer.Trigger";
var A = ({ children: e, className: t, isDismissable: n = !0, variant: r, ...i }) => {
	let { slots: a } = (0, b.use)(D), o = (0, b.useMemo)(() => v({ variant: r }), [r]), s = (0, b.useMemo)(() => ({
		slots: {
			...a,
			...o
		},
		isDismissable: n
	}), [
		a,
		o,
		n
	]);
	return /*#__PURE__*/ (0, x.jsx)(d, {
		className: p(t, o?.backdrop()),
		"data-slot": "drawer-backdrop",
		isDismissable: n,
		...i,
		children: (t) => /*#__PURE__*/ (0, x.jsx)(D, {
			value: s,
			children: typeof e == "function" ? e(t) : e
		})
	});
};
A.displayName = "HeroUI.Drawer.Backdrop";
var j = ({ children: e, className: t, placement: n = "bottom", ...r }) => {
	let { isDismissable: i, slots: a } = (0, b.use)(D), o = (0, b.useMemo)(() => v({ placement: n }), [n]), s = (0, b.useMemo)(() => ({
		placement: n,
		isDismissable: i,
		slots: {
			...a,
			...o
		}
	}), [
		a,
		n,
		i,
		o
	]);
	return /*#__PURE__*/ (0, x.jsx)(f, {
		className: p(t, o?.content()),
		"data-placement": n,
		"data-slot": "drawer-content",
		...r,
		children: (t) => /*#__PURE__*/ (0, x.jsx)(D, {
			value: s,
			children: typeof e == "function" ? e(t) : e
		})
	});
};
j.displayName = "HeroUI.Drawer.Content";
var M = ({ children: e, className: t, style: n, ...r }) => {
	let { isDismissable: i = !0, placement: a, slots: o } = (0, b.use)(D), { dialogRef: s, dragHandlers: l } = E(a, i);
	return /*#__PURE__*/ (0, x.jsx)(_, {
		value: S,
		children: /*#__PURE__*/ (0, x.jsx)(c, {
			ref: s,
			className: m(o?.dialog, t),
			"data-placement": a,
			"data-slot": "drawer-dialog",
			...l,
			...r,
			style: i ? {
				touchAction: "none",
				...n
			} : n,
			children: e
		})
	});
};
M.displayName = "HeroUI.Drawer.Dialog";
var N = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, b.use)(D);
	return /*#__PURE__*/ (0, x.jsx)(h.div, {
		className: m(r?.header, t),
		"data-slot": "drawer-header",
		...n,
		children: e
	});
};
N.displayName = "HeroUI.Drawer.Header";
var P = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, b.use)(D);
	return /*#__PURE__*/ (0, x.jsx)(h.div, {
		className: m(r?.body, t),
		"data-slot": "drawer-body",
		style: { touchAction: "pan-y" },
		...n,
		children: e
	});
};
P.displayName = "HeroUI.Drawer.Body";
var F = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, b.use)(D);
	return /*#__PURE__*/ (0, x.jsx)(h.div, {
		className: m(r?.footer, t),
		"data-slot": "drawer-footer",
		...n,
		children: e
	});
};
F.displayName = "HeroUI.Drawer.Footer";
var I = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, b.use)(D);
	return /*#__PURE__*/ (0, x.jsx)(u, {
		className: m(r?.heading, t),
		"data-slot": "drawer-heading",
		slot: "title",
		...n,
		children: e
	});
};
I.displayName = "HeroUI.Drawer.Heading";
var L = ({ className: e, ...t }) => {
	let { slots: n } = (0, b.use)(D);
	return /*#__PURE__*/ (0, x.jsx)(h.div, {
		"aria-hidden": "true",
		className: m(n?.handle, e),
		"data-slot": "drawer-handle",
		...t,
		children: /*#__PURE__*/ (0, x.jsx)("div", { "data-slot": "drawer-handle-bar" })
	});
};
L.displayName = "HeroUI.Drawer.Handle";
var R = ({ className: e, ...t }) => {
	let { slots: n } = (0, b.use)(D);
	return /*#__PURE__*/ (0, x.jsx)(g, {
		className: p(e, n?.closeTrigger()),
		"data-slot": "drawer-close-trigger",
		slot: "close",
		...t
	});
};
R.displayName = "HeroUI.Drawer.CloseTrigger";
// node_modules/@heroui/react/dist/components/drawer/index.js
var z = Object.assign(O, {
	Root: O,
	Trigger: k,
	Backdrop: A,
	Content: j,
	Dialog: M,
	Header: N,
	Heading: I,
	Body: P,
	Footer: F,
	Handle: L,
	CloseTrigger: R
});
// upstream/demos/en/drawer/basic.tsx
function B() {
	return /* @__PURE__ */ (0, x.jsxs)(z, { children: [/* @__PURE__ */ (0, x.jsx)(e, {
		variant: "secondary",
		children: "Open Drawer"
	}), /* @__PURE__ */ (0, x.jsx)(z.Backdrop, { children: /* @__PURE__ */ (0, x.jsx)(z.Content, {
		placement: "right",
		children: /* @__PURE__ */ (0, x.jsxs)(z.Dialog, { children: [
			/* @__PURE__ */ (0, x.jsx)(z.Header, { children: /* @__PURE__ */ (0, x.jsx)(z.Heading, { children: "Drawer Title" }) }),
			/* @__PURE__ */ (0, x.jsx)(z.Body, { children: /* @__PURE__ */ (0, x.jsx)("p", { children: "This is a bottom drawer built with React Aria's Modal component. It slides up from the bottom of the screen with a smooth CSS transition." }) }),
			/* @__PURE__ */ (0, x.jsxs)(z.Footer, { children: [/* @__PURE__ */ (0, x.jsx)(e, {
				slot: "close",
				variant: "secondary",
				children: "Cancel"
			}), /* @__PURE__ */ (0, x.jsx)(e, {
				slot: "close",
				children: "Confirm"
			})] })
		] })
	}) })] });
}
export { B as Basic };
