import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { r as t } from "./useRenderElement-Bc91YjHo.js";
import { t as n } from "./useRender-CYqx-Dca.js";
import { t as r } from "./dist-zgg4f6ja.js";
import { t as i } from "./dist-DCi9UB7o.js";
import { t as a } from "./jsx-runtime-lAxUcZjR.js";
e();
var o = a(), s = r("cn-marker group/marker relative flex w-full items-center", { variants: { variant: {
	default: "cn-marker-variant-default",
	separator: "cn-marker-variant-separator",
	border: "cn-marker-variant-border"
} } });
function c({ className: e, variant: r = "default", render: a, ...o }) {
	return n({
		defaultTagName: "div",
		props: t({ className: i(s({
			variant: r,
			className: e
		})) }, o),
		render: a,
		state: {
			slot: "marker",
			variant: r
		}
	});
}
function l({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("span", {
		"data-slot": "marker-icon",
		"aria-hidden": "true",
		className: i("cn-marker-icon shrink-0", e),
		...t
	});
}
function u({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("span", {
		"data-slot": "marker-content",
		className: i("cn-marker-content min-w-0 wrap-break-word", e),
		...t
	});
}
export { u as n, l as r, c as t };
