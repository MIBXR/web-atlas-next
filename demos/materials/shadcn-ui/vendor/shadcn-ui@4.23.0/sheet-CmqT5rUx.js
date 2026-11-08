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
		"data-slot": "sheet",
		...e
	});
}
function h({ ...e }) {
	return /* @__PURE__ */ (0, p.jsx)(c, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function g({ ...e }) {
	return /* @__PURE__ */ (0, p.jsx)(o, {
		"data-slot": "sheet-close",
		...e
	});
}
function _({ ...e }) {
	return /* @__PURE__ */ (0, p.jsx)(s, {
		"data-slot": "sheet-portal",
		...e
	});
}
function v({ className: e, ...n }) {
	return /* @__PURE__ */ (0, p.jsx)(l, {
		"data-slot": "sheet-overlay",
		className: t("cn-sheet-overlay fixed inset-0 z-50 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0", e),
		...n
	});
}
function y({ className: e, children: i, side: a = "right", showCloseButton: s = !0, ...c }) {
	return /* @__PURE__ */ (0, p.jsxs)(_, { children: [/* @__PURE__ */ (0, p.jsx)(v, {}), /* @__PURE__ */ (0, p.jsxs)(u, {
		"data-slot": "sheet-content",
		"data-side": a,
		className: t("cn-sheet-content data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem]", e),
		...c,
		children: [i, s && /* @__PURE__ */ (0, p.jsxs)(o, {
			"data-slot": "sheet-close",
			render: /* @__PURE__ */ (0, p.jsx)(n, {
				variant: "ghost",
				className: "cn-sheet-close",
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
		"data-slot": "sheet-header",
		className: t("cn-sheet-header flex flex-col", e),
		...n
	});
}
function x({ className: e, ...n }) {
	return /* @__PURE__ */ (0, p.jsx)("div", {
		"data-slot": "sheet-footer",
		className: t("cn-sheet-footer mt-auto flex flex-col", e),
		...n
	});
}
function S({ className: e, ...n }) {
	return /* @__PURE__ */ (0, p.jsx)(a, {
		"data-slot": "sheet-title",
		className: t("cn-sheet-title cn-font-heading", e),
		...n
	});
}
function C({ className: e, ...n }) {
	return /* @__PURE__ */ (0, p.jsx)(i, {
		"data-slot": "sheet-description",
		className: t("cn-sheet-description", e),
		...n
	});
}
export { x as a, h as c, C as i, g as n, b as o, y as r, S as s, m as t };
