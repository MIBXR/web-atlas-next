import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { t } from "./dist-DCi9UB7o.js";
import { t as n } from "./button-DmMhlFcj.js";
import { t as r } from "./icon-placeholder-BTF3H_W7.js";
import { a as i, n as a, o, r as s, t as c } from "./DialogTrigger-CgqcEkyA.js";
import { n as l, t as u } from "./DialogPopup-D3pksSW9.js";
import { t as d } from "./jsx-runtime-lAxUcZjR.js";
import { t as f } from "./DialogRoot-CAxIjwnk.js";
e();
var p = d();
function m({ ...e }) {
	return /* @__PURE__ */ (0, p.jsx)(f, {
		"data-slot": "dialog",
		...e
	});
}
function h({ ...e }) {
	return /* @__PURE__ */ (0, p.jsx)(c, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function g({ ...e }) {
	return /* @__PURE__ */ (0, p.jsx)(s, {
		"data-slot": "dialog-portal",
		...e
	});
}
function _({ ...e }) {
	return /* @__PURE__ */ (0, p.jsx)(o, {
		"data-slot": "dialog-close",
		...e
	});
}
function v({ className: e, ...n }) {
	return /* @__PURE__ */ (0, p.jsx)(l, {
		"data-slot": "dialog-overlay",
		className: t("cn-dialog-overlay fixed inset-0 isolate z-50", e),
		...n
	});
}
function y({ className: e, children: i, showCloseButton: a = !0, ...s }) {
	return /* @__PURE__ */ (0, p.jsxs)(g, { children: [/* @__PURE__ */ (0, p.jsx)(v, {}), /* @__PURE__ */ (0, p.jsxs)(u, {
		"data-slot": "dialog-content",
		className: t("cn-dialog-content fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none", e),
		...s,
		children: [i, a && /* @__PURE__ */ (0, p.jsxs)(o, {
			"data-slot": "dialog-close",
			render: /* @__PURE__ */ (0, p.jsx)(n, {
				variant: "ghost",
				className: "cn-dialog-close",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ (0, p.jsx)(r, {
				lucide: "XIcon",
				tabler: "IconX",
				hugeicons: "Cancel01Icon",
				phosphor: "XIcon",
				remixicon: "RiCloseLine"
			}), /* @__PURE__ */ (0, p.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function b({ className: e, ...n }) {
	return /* @__PURE__ */ (0, p.jsx)("div", {
		"data-slot": "dialog-header",
		className: t("cn-dialog-header flex flex-col", e),
		...n
	});
}
function x({ className: e, showCloseButton: r = !1, children: i, ...a }) {
	return /* @__PURE__ */ (0, p.jsxs)("div", {
		"data-slot": "dialog-footer",
		className: t("cn-dialog-footer flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...a,
		children: [i, r && /* @__PURE__ */ (0, p.jsx)(o, {
			render: /* @__PURE__ */ (0, p.jsx)(n, { variant: "outline" }),
			children: "Close"
		})]
	});
}
function S({ className: e, ...n }) {
	return /* @__PURE__ */ (0, p.jsx)(a, {
		"data-slot": "dialog-title",
		className: t("cn-dialog-title cn-font-heading", e),
		...n
	});
}
function C({ className: e, ...n }) {
	return /* @__PURE__ */ (0, p.jsx)(i, {
		"data-slot": "dialog-description",
		className: t("cn-dialog-description", e),
		...n
	});
}
export { x as a, h as c, C as i, _ as n, b as o, y as r, S as s, m as t };
