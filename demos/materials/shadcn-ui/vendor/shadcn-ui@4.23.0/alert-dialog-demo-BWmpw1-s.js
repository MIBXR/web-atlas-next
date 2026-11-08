import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { t } from "./dist-DCi9UB7o.js";
import { t as n } from "./button-DmMhlFcj.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
import { n as i, t as a } from "./DialogPopup-D3pksSW9.js";
import { a as o, n as s, o as c, r as l, s as u, t as d } from "./DialogTrigger-CgqcEkyA.js";
// node_modules/@base-ui/react/alert-dialog/root/AlertDialogRoot.mjs
function f(e) {
	return u(e, "alert-dialog");
}
// node_modules/@base-ui/react/alert-dialog/trigger/AlertDialogTrigger.mjs
var p = d;
e();
var m = r();
function h({ ...e }) {
	return /* @__PURE__ */ (0, m.jsx)(f, {
		"data-slot": "alert-dialog",
		...e
	});
}
function g({ ...e }) {
	return /* @__PURE__ */ (0, m.jsx)(p, {
		"data-slot": "alert-dialog-trigger",
		...e
	});
}
function _({ ...e }) {
	return /* @__PURE__ */ (0, m.jsx)(l, {
		"data-slot": "alert-dialog-portal",
		...e
	});
}
function v({ className: e, ...n }) {
	return /* @__PURE__ */ (0, m.jsx)(i, {
		"data-slot": "alert-dialog-overlay",
		className: t("cn-alert-dialog-overlay fixed inset-0 isolate z-50", e),
		...n
	});
}
function y({ className: e, size: n = "default", ...r }) {
	return /* @__PURE__ */ (0, m.jsxs)(_, { children: [/* @__PURE__ */ (0, m.jsx)(v, {}), /* @__PURE__ */ (0, m.jsx)(a, {
		"data-slot": "alert-dialog-content",
		"data-size": n,
		className: t("cn-alert-dialog-content group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none", e),
		...r
	})] });
}
function b({ className: e, ...n }) {
	return /* @__PURE__ */ (0, m.jsx)("div", {
		"data-slot": "alert-dialog-header",
		className: t("cn-alert-dialog-header", e),
		...n
	});
}
function x({ className: e, ...n }) {
	return /* @__PURE__ */ (0, m.jsx)("div", {
		"data-slot": "alert-dialog-footer",
		className: t("cn-alert-dialog-footer flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", e),
		...n
	});
}
function S({ className: e, ...n }) {
	return /* @__PURE__ */ (0, m.jsx)(s, {
		"data-slot": "alert-dialog-title",
		className: t("cn-alert-dialog-title cn-font-heading", e),
		...n
	});
}
function C({ className: e, ...n }) {
	return /* @__PURE__ */ (0, m.jsx)(o, {
		"data-slot": "alert-dialog-description",
		className: t("cn-alert-dialog-description", e),
		...n
	});
}
function w({ className: e, ...r }) {
	return /* @__PURE__ */ (0, m.jsx)(n, {
		"data-slot": "alert-dialog-action",
		className: t("cn-alert-dialog-action", e),
		...r
	});
}
function T({ className: e, variant: r = "outline", size: i = "default", ...a }) {
	return /* @__PURE__ */ (0, m.jsx)(c, {
		"data-slot": "alert-dialog-cancel",
		className: t("cn-alert-dialog-cancel", e),
		render: /* @__PURE__ */ (0, m.jsx)(n, {
			variant: r,
			size: i
		}),
		...a
	});
}
// upstream/examples/base/alert-dialog-demo.tsx
function E() {
	return /* @__PURE__ */ (0, m.jsxs)(h, { children: [/* @__PURE__ */ (0, m.jsx)(g, {
		render: /* @__PURE__ */ (0, m.jsx)(n, { variant: "outline" }),
		children: "Show Dialog"
	}), /* @__PURE__ */ (0, m.jsxs)(y, { children: [/* @__PURE__ */ (0, m.jsxs)(b, { children: [/* @__PURE__ */ (0, m.jsx)(S, { children: "Are you absolutely sure?" }), /* @__PURE__ */ (0, m.jsx)(C, { children: "This action cannot be undone. This will permanently delete your account from our servers." })] }), /* @__PURE__ */ (0, m.jsxs)(x, { children: [/* @__PURE__ */ (0, m.jsx)(T, { children: "Cancel" }), /* @__PURE__ */ (0, m.jsx)(w, { children: "Continue" })] })] })] });
}
export { E as default };
