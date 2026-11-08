import "./rolldown-runtime-DUcC5eAW.js";
import { n as e, t } from "./info-BIXuCdrk.js";
import { t as n } from "./react-D9cguz4v.js";
import { t as r } from "./dist-zgg4f6ja.js";
import { t as i } from "./dist-DCi9UB7o.js";
import { t as a } from "./jsx-runtime-lAxUcZjR.js";
n();
var o = a(), s = r("cn-alert group/alert relative w-full", {
	variants: { variant: {
		default: "cn-alert-variant-default",
		destructive: "cn-alert-variant-destructive"
	} },
	defaultVariants: { variant: "default" }
});
function c({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "alert",
		role: "alert",
		className: i(s({ variant: t }), e),
		...n
	});
}
function l({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "alert-title",
		className: i("cn-alert-title [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", e),
		...t
	});
}
function u({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "alert-description",
		className: i("cn-alert-description [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", e),
		...t
	});
}
// upstream/examples/base/alert-demo.tsx
function d() {
	return /* @__PURE__ */ (0, o.jsxs)("div", {
		className: "grid w-full max-w-md items-start gap-4",
		children: [/* @__PURE__ */ (0, o.jsxs)(c, { children: [
			/* @__PURE__ */ (0, o.jsx)(e, {}),
			/* @__PURE__ */ (0, o.jsx)(l, { children: "Payment successful" }),
			/* @__PURE__ */ (0, o.jsx)(u, { children: "Your payment of $29.99 has been processed. A receipt has been sent to your email address." })
		] }), /* @__PURE__ */ (0, o.jsxs)(c, { children: [
			/* @__PURE__ */ (0, o.jsx)(t, {}),
			/* @__PURE__ */ (0, o.jsx)(l, { children: "New feature available" }),
			/* @__PURE__ */ (0, o.jsx)(u, { children: "We've added dark mode support. You can enable it in your account settings." })
		] })]
	});
}
export { d as default };
