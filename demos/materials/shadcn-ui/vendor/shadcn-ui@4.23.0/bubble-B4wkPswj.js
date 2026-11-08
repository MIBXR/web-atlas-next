import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { r as t } from "./useRenderElement-Bc91YjHo.js";
import { t as n } from "./useRender-CYqx-Dca.js";
import { t as r } from "./dist-zgg4f6ja.js";
import { t as i } from "./dist-DCi9UB7o.js";
import { t as a } from "./jsx-runtime-lAxUcZjR.js";
e();
var o = a();
function s({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "bubble-group",
		className: i("cn-bubble-group flex min-w-0 flex-col", e),
		...t
	});
}
var c = r("cn-bubble group/bubble relative flex w-fit min-w-0 flex-col", {
	variants: { variant: {
		default: "cn-bubble-variant-default",
		secondary: "cn-bubble-variant-secondary",
		muted: "cn-bubble-variant-muted",
		tinted: "cn-bubble-variant-tinted",
		outline: "cn-bubble-variant-outline",
		ghost: "cn-bubble-variant-ghost",
		destructive: "cn-bubble-variant-destructive"
	} },
	defaultVariants: { variant: "default" }
});
function l({ variant: e = "default", align: t = "start", className: n, ...r }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "bubble",
		"data-variant": e,
		"data-align": t,
		className: i(c({ variant: e }), n),
		...r
	});
}
function u({ className: e, render: r, ...a }) {
	return n({
		defaultTagName: "div",
		props: t({ className: i("cn-bubble-content w-fit max-w-full min-w-0 overflow-hidden wrap-break-word [button]:text-left [button,a]:transition-colors", e) }, a),
		render: r,
		state: { slot: "bubble-content" }
	});
}
var d = r("cn-bubble-reactions absolute z-10 flex w-fit items-center justify-center", {
	variants: {
		side: {
			top: "cn-bubble-reactions-side-top",
			bottom: "cn-bubble-reactions-side-bottom"
		},
		align: {
			start: "cn-bubble-reactions-align-start",
			end: "cn-bubble-reactions-align-end"
		}
	},
	defaultVariants: {
		side: "bottom",
		align: "end"
	}
});
function f({ side: e = "bottom", align: t = "end", className: n, ...r }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "bubble-reactions",
		"data-align": t,
		"data-side": e,
		className: i(d({
			side: e,
			align: t
		}), n),
		...r
	});
}
export { f as i, u as n, s as r, l as t };
