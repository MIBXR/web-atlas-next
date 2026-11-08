import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./useButton-CMNj7XNN.js";
import { t as r } from "./useRenderElement-Bc91YjHo.js";
import { t as i } from "./dist-zgg4f6ja.js";
import { t as a } from "./dist-DCi9UB7o.js";
import { t as o } from "./jsx-runtime-lAxUcZjR.js";
var s = /*#__PURE__*/ (/* @__PURE__ */ e(t(), 1)).forwardRef(function(e, t) {
	let { render: i, className: a, disabled: o = !1, focusableWhenDisabled: s = !1, nativeButton: c = !0, style: l, ...u } = e, { getButtonProps: d, buttonRef: f } = n({
		disabled: o,
		focusableWhenDisabled: s,
		native: c
	});
	return r("button", e, {
		state: { disabled: o },
		ref: [t, f],
		props: [u, d]
	});
}), c = o(), l = i("cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "cn-button-variant-default",
			outline: "cn-button-variant-outline",
			secondary: "cn-button-variant-secondary",
			ghost: "cn-button-variant-ghost",
			destructive: "cn-button-variant-destructive",
			link: "cn-button-variant-link"
		},
		size: {
			default: "cn-button-size-default",
			xs: "cn-button-size-xs",
			sm: "cn-button-size-sm",
			lg: "cn-button-size-lg",
			icon: "cn-button-size-icon",
			"icon-xs": "cn-button-size-icon-xs",
			"icon-sm": "cn-button-size-icon-sm",
			"icon-lg": "cn-button-size-icon-lg"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function u({ className: e, variant: t = "default", size: n = "default", ...r }) {
	return /* @__PURE__ */ (0, c.jsx)(s, {
		"data-slot": "button",
		className: a(l({
			variant: t,
			size: n,
			className: e
		})),
		...r
	});
}
export { l as n, u as t };
