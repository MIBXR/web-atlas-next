import { t as e } from "./Rocket-DBtnpdFw.js";
import { t } from "./button-Dd5iSf4T.js";
import { n } from "./dist-qnEEIXtT.js";
import { d as r } from "./utils-UBVJ5JR_.js";
import { i, n as a, t as o } from "./jsx-runtime-C1t0izHF.js";
import { i as s, n as c, t as l } from "./Dialog-C0V2m_6r.js";
import { t as u } from "./Heading-CdGE8g_3.js";
import { r as d, t as f } from "./Modal-C2uH6B2w.js";
import { t as p } from "./Pressable-9oq7KJrE.js";
import { r as m, t as h } from "./compose-ClIOcrt6.js";
import { t as g } from "./dom-CdwaDRL5.js";
import { n as _, t as v } from "./use-overlay-exit-hold-DYlqAHKn.js";
import { t as y } from "./close-button-CHpFmCHB.js";
import { t as b } from "./surface-YzNgM-6T.js";
// node_modules/@heroui/styles/dist/components/modal/modal.styles.js
var x = n({
	defaultVariants: {
		scroll: "inside",
		size: "md",
		variant: "opaque"
	},
	slots: {
		backdrop: "modal__backdrop",
		body: "modal__body",
		closeTrigger: "modal__close-trigger",
		container: "modal__container",
		dialog: "modal__dialog",
		footer: "modal__footer",
		header: "modal__header",
		heading: "modal__heading",
		icon: "modal__icon",
		trigger: "modal__trigger"
	},
	variants: {
		scroll: {
			inside: {
				body: "modal__body--scroll-inside",
				dialog: "modal__dialog--scroll-inside"
			},
			outside: {
				body: "modal__body--scroll-outside",
				container: "modal__container--scroll-outside",
				dialog: "modal__dialog--scroll-outside"
			}
		},
		size: {
			cover: { dialog: "modal__dialog--cover" },
			full: {
				container: "modal__container--full",
				dialog: "modal__dialog--full"
			},
			lg: { dialog: "modal__dialog--lg" },
			md: { dialog: "modal__dialog--md" },
			sm: { dialog: "modal__dialog--sm" },
			xs: { dialog: "modal__dialog--xs" }
		},
		variant: {
			blur: { backdrop: "modal__backdrop--blur" },
			opaque: { backdrop: "modal__backdrop--opaque" },
			transparent: { backdrop: "modal__backdrop--transparent" }
		}
	}
}), S = /* @__PURE__ */ i(a(), 1), C = o(), w = { variant: "default" }, T = /*#__PURE__*/ (0, S.createContext)({}), E = ({ children: e, state: t, ...n }) => {
	let i = (0, S.useMemo)(() => ({
		slots: x(),
		placement: void 0
	}), []), a = (0, S.useMemo)(() => t ? {
		isOpen: t.isOpen,
		onOpenChange: t.setOpen
	} : {}, [t]);
	return /*#__PURE__*/ (0, C.jsx)(T, {
		value: i,
		children: /*#__PURE__*/ (0, C.jsx)(l, {
			"data-slot": "modal-root",
			...r(n, a),
			children: e
		})
	});
};
E.displayName = "HeroUI.Modal";
var D = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, S.use)(T);
	return /*#__PURE__*/ (0, C.jsx)(p, { children: /*#__PURE__*/ (0, C.jsx)(g.div, {
		className: h(r?.trigger, t),
		"data-slot": "modal-trigger",
		role: "button",
		...n,
		children: e
	}) });
};
D.displayName = "HeroUI.Modal.Trigger";
var O = ({ children: e, className: t, defaultOpen: n, isDismissable: r = !0, isExiting: i, isOpen: a, onClick: o, ref: c, variant: l, ...u }) => {
	let { slots: f } = (0, S.use)(T), p = (0, S.use)(s), { isExiting: h, ref: g } = _(v(a, n, p), { ref: c }), y = (0, S.useMemo)(() => x({ variant: l }), [l]), b = (0, S.useMemo)(() => ({ slots: {
		...f,
		...y
	} }), [f, y]);
	return /*#__PURE__*/ (0, C.jsx)(d, {
		ref: g,
		className: m(t, y?.backdrop()),
		"data-slot": "modal-backdrop",
		defaultOpen: n,
		isDismissable: r,
		isExiting: h || i,
		isOpen: a,
		onClick: (e) => {
			e.stopPropagation(), o?.(e);
		},
		...u,
		children: (t) => /*#__PURE__*/ (0, C.jsxs)(T, {
			value: b,
			children: [typeof e == "function" ? e(t) : e, " "]
		})
	});
};
O.displayName = "HeroUI.Modal.Backdrop";
var k = ({ children: e, className: t, placement: n = "auto", scroll: r, size: i, ...a }) => {
	let { slots: o } = (0, S.use)(T), s = (0, S.useMemo)(() => x({
		scroll: r,
		size: i
	}), [r, i]), c = (0, S.useMemo)(() => ({
		placement: n,
		slots: {
			...o,
			...s
		}
	}), [
		o,
		n,
		s
	]);
	return /*#__PURE__*/ (0, C.jsx)(f, {
		className: m(t, s?.container()),
		"data-placement": n,
		"data-slot": "modal-container",
		...a,
		children: (t) => /*#__PURE__*/ (0, C.jsx)(T, {
			value: c,
			children: typeof e == "function" ? e(t) : e
		})
	});
};
k.displayName = "HeroUI.Modal.Container";
var A = ({ children: e, className: t, ...n }) => {
	let { placement: r, slots: i } = (0, S.use)(T);
	return /*#__PURE__*/ (0, C.jsx)(b, {
		value: w,
		children: /*#__PURE__*/ (0, C.jsx)(c, {
			className: h(i?.dialog, t),
			"data-placement": r,
			"data-slot": "modal-dialog",
			...n,
			children: e
		})
	});
};
A.displayName = "HeroUI.Modal.Dialog";
var j = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, S.use)(T);
	return /*#__PURE__*/ (0, C.jsx)(g.div, {
		className: h(r?.header, t),
		"data-slot": "modal-header",
		...n,
		children: e
	});
};
j.displayName = "HeroUI.Modal.Header";
var M = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, S.use)(T);
	return /*#__PURE__*/ (0, C.jsx)(g.div, {
		className: h(r?.body, t),
		"data-slot": "modal-body",
		...n,
		children: e
	});
};
M.displayName = "HeroUI.Modal.Body";
var N = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, S.use)(T);
	return /*#__PURE__*/ (0, C.jsx)(g.div, {
		className: h(r?.footer, t),
		"data-slot": "modal-footer",
		...n,
		children: e
	});
};
N.displayName = "HeroUI.Modal.Footer";
var P = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, S.use)(T);
	return /*#__PURE__*/ (0, C.jsx)(u, {
		className: h(r?.heading, t),
		"data-slot": "modal-heading",
		slot: "title",
		...n,
		children: e
	});
};
P.displayName = "HeroUI.Modal.Heading";
var F = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, S.use)(T);
	return /*#__PURE__*/ (0, C.jsx)(g.div, {
		className: h(r?.icon, t),
		"data-slot": "modal-icon",
		...n,
		children: e
	});
};
F.displayName = "HeroUI.Modal.Icon";
var I = ({ className: e, ...t }) => {
	let { slots: n } = (0, S.use)(T);
	return /*#__PURE__*/ (0, C.jsx)(y, {
		className: m(e, n?.closeTrigger()),
		"data-slot": "modal-close-trigger",
		slot: "close",
		...t
	});
};
I.displayName = "HeroUI.Modal.CloseTrigger";
// node_modules/@heroui/react/dist/components/modal/index.js
var L = Object.assign(E, {
	Root: E,
	Trigger: D,
	Backdrop: O,
	Container: k,
	Dialog: A,
	Header: j,
	Icon: F,
	Heading: P,
	Body: M,
	Footer: N,
	CloseTrigger: I
});
// upstream/demos/en/modal/default.tsx
function R() {
	return /* @__PURE__ */ (0, C.jsxs)(L, { children: [/* @__PURE__ */ (0, C.jsx)(t, {
		variant: "secondary",
		children: "Open Modal"
	}), /* @__PURE__ */ (0, C.jsx)(L.Backdrop, { children: /* @__PURE__ */ (0, C.jsx)(L.Container, { children: /* @__PURE__ */ (0, C.jsxs)(L.Dialog, {
		className: "sm:max-w-[360px]",
		children: [
			/* @__PURE__ */ (0, C.jsx)(L.CloseTrigger, {}),
			/* @__PURE__ */ (0, C.jsxs)(L.Header, { children: [/* @__PURE__ */ (0, C.jsx)(L.Icon, {
				className: "bg-default text-foreground",
				children: /* @__PURE__ */ (0, C.jsx)(e, { className: "size-5" })
			}), /* @__PURE__ */ (0, C.jsx)(L.Heading, { children: "Welcome to HeroUI" })] }),
			/* @__PURE__ */ (0, C.jsx)(L.Body, { children: /* @__PURE__ */ (0, C.jsx)("p", { children: "A beautiful, fast, and modern React UI library for building accessible and customizable web applications with ease." }) }),
			/* @__PURE__ */ (0, C.jsx)(L.Footer, { children: /* @__PURE__ */ (0, C.jsx)(t, {
				className: "w-full",
				slot: "close",
				children: "Continue"
			}) })
		]
	}) }) })] });
}
export { R as Default };
