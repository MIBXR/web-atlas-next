import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { t } from "./dist-DCi9UB7o.js";
import { t as n } from "./button-DmMhlFcj.js";
import { t as r } from "./icon-placeholder-BTF3H_W7.js";
import { t as i } from "./jsx-runtime-lAxUcZjR.js";
e();
var a = i();
function o({ className: e, ...n }) {
	return /* @__PURE__ */ (0, a.jsx)("nav", {
		role: "navigation",
		"aria-label": "pagination",
		"data-slot": "pagination",
		className: t("cn-pagination mx-auto flex w-full justify-center", e),
		...n
	});
}
function s({ className: e, ...n }) {
	return /* @__PURE__ */ (0, a.jsx)("ul", {
		"data-slot": "pagination-content",
		className: t("cn-pagination-content flex items-center", e),
		...n
	});
}
function c({ ...e }) {
	return /* @__PURE__ */ (0, a.jsx)("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function l({ className: e, isActive: r, size: i = "icon", ...o }) {
	return /* @__PURE__ */ (0, a.jsx)(n, {
		variant: r ? "outline" : "ghost",
		size: i,
		className: t("cn-pagination-link", e),
		nativeButton: !1,
		render: /* @__PURE__ */ (0, a.jsx)("a", {
			"aria-current": r ? "page" : void 0,
			"data-slot": "pagination-link",
			"data-active": r,
			...o
		})
	});
}
function u({ className: e, text: n = "Previous", ...i }) {
	return /* @__PURE__ */ (0, a.jsxs)(l, {
		"aria-label": "Go to previous page",
		size: "default",
		className: t("cn-pagination-previous", e),
		...i,
		children: [/* @__PURE__ */ (0, a.jsx)(r, {
			lucide: "ChevronLeftIcon",
			tabler: "IconChevronLeft",
			hugeicons: "ArrowLeft01Icon",
			phosphor: "CaretLeftIcon",
			remixicon: "RiArrowLeftSLine",
			"data-icon": "inline-start",
			className: "cn-rtl-flip"
		}), /* @__PURE__ */ (0, a.jsx)("span", {
			className: "cn-pagination-previous-text hidden sm:block",
			children: n
		})]
	});
}
function d({ className: e, text: n = "Next", ...i }) {
	return /* @__PURE__ */ (0, a.jsxs)(l, {
		"aria-label": "Go to next page",
		size: "default",
		className: t("cn-pagination-next", e),
		...i,
		children: [/* @__PURE__ */ (0, a.jsx)("span", {
			className: "cn-pagination-next-text hidden sm:block",
			children: n
		}), /* @__PURE__ */ (0, a.jsx)(r, {
			lucide: "ChevronRightIcon",
			tabler: "IconChevronRight",
			hugeicons: "ArrowRight01Icon",
			phosphor: "CaretRightIcon",
			remixicon: "RiArrowRightSLine",
			"data-icon": "inline-end",
			className: "cn-rtl-flip"
		})]
	});
}
function f({ className: e, ...n }) {
	return /* @__PURE__ */ (0, a.jsxs)("span", {
		"aria-hidden": !0,
		"data-slot": "pagination-ellipsis",
		className: t("cn-pagination-ellipsis flex items-center justify-center", e),
		...n,
		children: [/* @__PURE__ */ (0, a.jsx)(r, {
			lucide: "MoreHorizontalIcon",
			tabler: "IconDots",
			hugeicons: "MoreHorizontalCircle01Icon",
			phosphor: "DotsThreeIcon",
			remixicon: "RiMoreLine"
		}), /* @__PURE__ */ (0, a.jsx)("span", {
			className: "sr-only",
			children: "More pages"
		})]
	});
}
// upstream/examples/base/pagination-demo.tsx
function p() {
	return /* @__PURE__ */ (0, a.jsx)(o, { children: /* @__PURE__ */ (0, a.jsxs)(s, { children: [
		/* @__PURE__ */ (0, a.jsx)(c, { children: /* @__PURE__ */ (0, a.jsx)(u, { href: "#" }) }),
		/* @__PURE__ */ (0, a.jsx)(c, { children: /* @__PURE__ */ (0, a.jsx)(l, {
			href: "#",
			children: "1"
		}) }),
		/* @__PURE__ */ (0, a.jsx)(c, { children: /* @__PURE__ */ (0, a.jsx)(l, {
			href: "#",
			isActive: !0,
			children: "2"
		}) }),
		/* @__PURE__ */ (0, a.jsx)(c, { children: /* @__PURE__ */ (0, a.jsx)(l, {
			href: "#",
			children: "3"
		}) }),
		/* @__PURE__ */ (0, a.jsx)(c, { children: /* @__PURE__ */ (0, a.jsx)(f, {}) }),
		/* @__PURE__ */ (0, a.jsx)(c, { children: /* @__PURE__ */ (0, a.jsx)(d, { href: "#" }) })
	] }) });
}
export { p as default };
