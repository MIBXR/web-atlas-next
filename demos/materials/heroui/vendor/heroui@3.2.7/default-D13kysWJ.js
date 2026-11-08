import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { i, n as a, t as o } from "./Dialog-C0V2m_6r.js";
import { t as s } from "./Heading-CdGE8g_3.js";
import { r as c, t as l } from "./Modal-C2uH6B2w.js";
import { t as u } from "./Pressable-9oq7KJrE.js";
import { r as d, t as f } from "./compose-ClIOcrt6.js";
import { t as p } from "./dom-CdwaDRL5.js";
import { n as m, t as h } from "./use-overlay-exit-hold-DYlqAHKn.js";
import { t as g } from "./close-button-CHpFmCHB.js";
import { f as _, m as v, n as y, p as b } from "./icons-BUH88Ubz.js";
import { t as x } from "./button-Dd5iSf4T.js";
// node_modules/@heroui/styles/dist/components/alert-dialog/alert-dialog.styles.js
var S = e({
	defaultVariants: {
		size: "md",
		status: "danger",
		variant: "opaque"
	},
	slots: {
		backdrop: "alert-dialog__backdrop",
		body: "alert-dialog__body",
		closeTrigger: "alert-dialog__close-trigger",
		container: "alert-dialog__container",
		dialog: "alert-dialog__dialog",
		footer: "alert-dialog__footer",
		header: "alert-dialog__header",
		heading: "alert-dialog__heading",
		icon: "alert-dialog__icon",
		trigger: "alert-dialog__trigger"
	},
	variants: {
		size: {
			cover: { dialog: "alert-dialog__dialog--cover" },
			lg: { dialog: "alert-dialog__dialog--lg" },
			md: { dialog: "alert-dialog__dialog--md" },
			sm: { dialog: "alert-dialog__dialog--sm" },
			xs: { dialog: "alert-dialog__dialog--xs" }
		},
		status: {
			accent: { icon: "alert-dialog__icon--accent" },
			danger: { icon: "alert-dialog__icon--danger" },
			default: { icon: "alert-dialog__icon--default" },
			success: { icon: "alert-dialog__icon--success" },
			warning: { icon: "alert-dialog__icon--warning" }
		},
		variant: {
			blur: { backdrop: "alert-dialog__backdrop--blur" },
			opaque: { backdrop: "alert-dialog__backdrop--opaque" },
			transparent: { backdrop: "alert-dialog__backdrop--transparent" }
		}
	}
}), C = /* @__PURE__ */ t(n(), 1), w = r(), T = /*#__PURE__*/ (0, C.createContext)({}), E = ({ children: e, ...t }) => {
	let n = (0, C.useMemo)(() => ({
		slots: S(),
		placement: void 0
	}), []);
	return /*#__PURE__*/ (0, w.jsx)(T, {
		value: n,
		children: /*#__PURE__*/ (0, w.jsx)(o, {
			"data-slot": "alert-dialog-root",
			...t,
			children: e
		})
	});
};
E.displayName = "HeroUI.AlertDialog";
var D = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, C.use)(T);
	return /*#__PURE__*/ (0, w.jsx)(u, { children: /*#__PURE__*/ (0, w.jsx)("div", {
		className: f(r?.trigger, t),
		"data-slot": "alert-dialog-trigger",
		role: "button",
		...n,
		children: e
	}) });
};
D.displayName = "HeroUI.AlertDialog.Trigger";
var O = ({ children: e, className: t, defaultOpen: n, isDismissable: r = !1, isExiting: a, isKeyboardDismissDisabled: o = !0, isOpen: s, onClick: l, ref: u, variant: f, ...p }) => {
	let { slots: g } = (0, C.use)(T), _ = (0, C.use)(i), { isExiting: v, ref: y } = m(h(s, n, _), { ref: u }), b = (0, C.useMemo)(() => S({ variant: f }), [f]), x = (0, C.useMemo)(() => ({ slots: {
		...g,
		...b
	} }), [g, b]);
	return /*#__PURE__*/ (0, w.jsx)(c, {
		ref: y,
		className: d(t, b?.backdrop()),
		"data-slot": "alert-dialog-backdrop",
		defaultOpen: n,
		isDismissable: r,
		isExiting: v || a,
		isKeyboardDismissDisabled: o,
		isOpen: s,
		onClick: (e) => {
			e.stopPropagation(), l?.(e);
		},
		...p,
		children: (t) => /*#__PURE__*/ (0, w.jsxs)(T, {
			value: x,
			children: [typeof e == "function" ? e(t) : e, " "]
		})
	});
};
O.displayName = "HeroUI.AlertDialog.Backdrop";
var k = ({ children: e, className: t, placement: n = "auto", size: r, ...i }) => {
	let { slots: a } = (0, C.use)(T), o = (0, C.useMemo)(() => S({ size: r }), [r]), s = (0, C.useMemo)(() => ({
		placement: n,
		slots: {
			...a,
			...o
		}
	}), [
		n,
		a,
		o
	]);
	return /*#__PURE__*/ (0, w.jsx)(l, {
		className: d(t, o?.container()),
		"data-placement": n,
		"data-slot": "alert-dialog-container",
		...i,
		children: (t) => /*#__PURE__*/ (0, w.jsx)(T, {
			value: s,
			children: typeof e == "function" ? e(t) : e
		})
	});
};
k.displayName = "HeroUI.AlertDialog.Container";
var A = ({ children: e, className: t, ...n }) => {
	let { placement: r, slots: i } = (0, C.use)(T);
	return /*#__PURE__*/ (0, w.jsx)(a, {
		className: f(i?.dialog, t),
		"data-placement": r,
		"data-slot": "alert-dialog-dialog",
		role: "alertdialog",
		...n,
		children: e
	});
};
A.displayName = "HeroUI.AlertDialog.Dialog";
var j = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, C.use)(T);
	return /*#__PURE__*/ (0, w.jsx)("div", {
		className: f(r?.header, t),
		"data-slot": "alert-dialog-header",
		...n,
		children: e
	});
};
j.displayName = "HeroUI.AlertDialog.Header";
var M = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, C.use)(T);
	return /*#__PURE__*/ (0, w.jsx)(s, {
		className: f(r?.heading, t),
		"data-slot": "alert-dialog-heading",
		slot: "title",
		...n,
		children: e
	});
};
M.displayName = "HeroUI.AlertDialog.Heading";
var N = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, C.use)(T);
	return /*#__PURE__*/ (0, w.jsx)("div", {
		className: f(r?.body, t),
		"data-slot": "alert-dialog-body",
		...n,
		children: e
	});
};
N.displayName = "HeroUI.AlertDialog.Body";
var P = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, C.use)(T);
	return /*#__PURE__*/ (0, w.jsx)("div", {
		className: f(r?.footer, t),
		"data-slot": "alert-dialog-footer",
		...n,
		children: e
	});
};
P.displayName = "HeroUI.AlertDialog.Footer";
var F = ({ children: e, className: t, status: n = "danger", ...r }) => {
	let i = (0, C.useMemo)(() => S({ status: n }), [n]), a = () => {
		switch (n) {
			case "default": return /*#__PURE__*/ (0, w.jsx)(_, { "data-slot": "alert-dialog-default-icon" });
			case "accent": return /*#__PURE__*/ (0, w.jsx)(_, { "data-slot": "alert-dialog-default-icon" });
			case "success": return /*#__PURE__*/ (0, w.jsx)(b, { "data-slot": "alert-dialog-default-icon" });
			case "warning": return /*#__PURE__*/ (0, w.jsx)(v, { "data-slot": "alert-dialog-default-icon" });
			case "danger": return /*#__PURE__*/ (0, w.jsx)(y, { "data-slot": "alert-dialog-default-icon" });
			default: return /*#__PURE__*/ (0, w.jsx)(y, { "data-slot": "alert-dialog-default-icon" });
		}
	};
	return /*#__PURE__*/ (0, w.jsx)(p.div, {
		className: i?.icon({ className: t }),
		"data-slot": "alert-dialog-icon",
		...r,
		children: e ?? a()
	});
};
F.displayName = "HeroUI.AlertDialog.Icon";
var I = ({ className: e, ...t }) => {
	let { slots: n } = (0, C.use)(T);
	return /*#__PURE__*/ (0, w.jsx)(g, {
		className: d(e, n?.closeTrigger()),
		"data-slot": "alert-dialog-close-trigger",
		slot: "close",
		...t
	});
};
I.displayName = "HeroUI.AlertDialog.CloseTrigger";
// node_modules/@heroui/react/dist/components/alert-dialog/index.js
var L = Object.assign(E, {
	Root: E,
	Trigger: D,
	Backdrop: O,
	Container: k,
	Dialog: A,
	Header: j,
	Heading: M,
	Body: N,
	Footer: P,
	Icon: F,
	CloseTrigger: I
});
// upstream/demos/en/alert-dialog/default.tsx
function R() {
	return /* @__PURE__ */ (0, w.jsxs)(L, { children: [/* @__PURE__ */ (0, w.jsx)(x, {
		variant: "danger",
		children: "Delete Project"
	}), /* @__PURE__ */ (0, w.jsx)(L.Backdrop, { children: /* @__PURE__ */ (0, w.jsx)(L.Container, { children: /* @__PURE__ */ (0, w.jsxs)(L.Dialog, {
		className: "sm:max-w-[400px]",
		children: [
			/* @__PURE__ */ (0, w.jsx)(L.CloseTrigger, {}),
			/* @__PURE__ */ (0, w.jsxs)(L.Header, { children: [/* @__PURE__ */ (0, w.jsx)(L.Icon, { status: "danger" }), /* @__PURE__ */ (0, w.jsx)(L.Heading, { children: "Delete project permanently?" })] }),
			/* @__PURE__ */ (0, w.jsx)(L.Body, { children: /* @__PURE__ */ (0, w.jsxs)("p", { children: [
				"This will permanently delete ",
				/* @__PURE__ */ (0, w.jsx)("strong", { children: "My Awesome Project" }),
				" and all of its data. This action cannot be undone."
			] }) }),
			/* @__PURE__ */ (0, w.jsxs)(L.Footer, { children: [/* @__PURE__ */ (0, w.jsx)(x, {
				slot: "close",
				variant: "tertiary",
				children: "Cancel"
			}), /* @__PURE__ */ (0, w.jsx)(x, {
				slot: "close",
				variant: "danger",
				children: "Delete Project"
			})] })
		]
	}) }) })] });
}
export { R as Default };
