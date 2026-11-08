import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { r as t } from "./useRenderElement-Bc91YjHo.js";
import { t as n } from "./useRender-CYqx-Dca.js";
import { t as r } from "./dist-zgg4f6ja.js";
import { t as i } from "./dist-DCi9UB7o.js";
import "./separator-DPldDFzU.js";
import { t as a } from "./jsx-runtime-lAxUcZjR.js";
e();
var o = a(), s = r("cn-item group/item flex w-full flex-wrap items-center transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors", {
	variants: {
		variant: {
			default: "cn-item-variant-default",
			outline: "cn-item-variant-outline",
			muted: "cn-item-variant-muted"
		},
		size: {
			default: "cn-item-size-default",
			sm: "cn-item-size-sm",
			xs: "cn-item-size-xs"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function c({ className: e, variant: r = "default", size: a = "default", render: o, ...c }) {
	return n({
		defaultTagName: "div",
		props: t({ className: i(s({
			variant: r,
			size: a,
			className: e
		})) }, c),
		render: o,
		state: {
			slot: "item",
			variant: r,
			size: a
		}
	});
}
var l = r("cn-item-media flex shrink-0 items-center justify-center [&_svg]:pointer-events-none", {
	variants: { variant: {
		default: "cn-item-media-variant-default",
		icon: "cn-item-media-variant-icon",
		image: "cn-item-media-variant-image"
	} },
	defaultVariants: { variant: "default" }
});
function u({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "item-media",
		"data-variant": t,
		className: i(l({
			variant: t,
			className: e
		})),
		...n
	});
}
function d({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "item-content",
		className: i("cn-item-content flex flex-1 flex-col [&+[data-slot=item-content]]:flex-none", e),
		...t
	});
}
function f({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "item-title",
		className: i("cn-item-title line-clamp-1 flex w-fit items-center", e),
		...t
	});
}
function p({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("p", {
		"data-slot": "item-description",
		className: i("cn-item-description line-clamp-2 font-normal [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", e),
		...t
	});
}
function m({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "item-actions",
		className: i("cn-item-actions flex items-center", e),
		...t
	});
}
export { u as a, p as i, m as n, f as o, d as r, c as t };
