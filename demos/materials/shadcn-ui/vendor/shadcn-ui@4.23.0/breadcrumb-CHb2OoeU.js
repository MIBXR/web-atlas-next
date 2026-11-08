import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { r as t } from "./useRenderElement-Bc91YjHo.js";
import { t as n } from "./useRender-CYqx-Dca.js";
import { t as r } from "./dist-DCi9UB7o.js";
import { t as i } from "./icon-placeholder-BTF3H_W7.js";
import { t as a } from "./jsx-runtime-lAxUcZjR.js";
e();
var o = a();
function s({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		className: r("cn-breadcrumb", e),
		...t
	});
}
function c({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("ol", {
		"data-slot": "breadcrumb-list",
		className: r("cn-breadcrumb-list flex flex-wrap items-center wrap-break-word", e),
		...t
	});
}
function l({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("li", {
		"data-slot": "breadcrumb-item",
		className: r("cn-breadcrumb-item inline-flex items-center", e),
		...t
	});
}
function u({ className: e, render: i, ...a }) {
	return n({
		defaultTagName: "a",
		props: t({ className: r("cn-breadcrumb-link", e) }, a),
		render: i,
		state: { slot: "breadcrumb-link" }
	});
}
function d({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: r("cn-breadcrumb-page", e),
		...t
	});
}
function f({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ (0, o.jsx)("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: r("cn-breadcrumb-separator", t),
		...n,
		children: e ?? /* @__PURE__ */ (0, o.jsx)(i, {
			lucide: "ChevronRightIcon",
			tabler: "IconChevronRight",
			hugeicons: "ArrowRight01Icon",
			phosphor: "CaretRightIcon",
			remixicon: "RiArrowRightSLine",
			className: "cn-rtl-flip"
		})
	});
}
function p({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsxs)("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		"aria-hidden": "true",
		className: r("cn-breadcrumb-ellipsis flex items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ (0, o.jsx)(i, {
			lucide: "MoreHorizontalIcon",
			tabler: "IconDots",
			hugeicons: "MoreHorizontalCircle01Icon",
			phosphor: "DotsThreeIcon",
			remixicon: "RiMoreLine"
		}), /* @__PURE__ */ (0, o.jsx)("span", {
			className: "sr-only",
			children: "More"
		})]
	});
}
export { c as a, u as i, p as n, d as o, l as r, f as s, s as t };
