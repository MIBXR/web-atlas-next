import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { t } from "./dist-zgg4f6ja.js";
import { t as n } from "./dist-DCi9UB7o.js";
import { t as r } from "./button-DmMhlFcj.js";
import { t as i } from "./input-cHYv8lFd.js";
import "./textarea-JYJtHFCK.js";
import { t as a } from "./jsx-runtime-lAxUcZjR.js";
e();
var o = a();
function s({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "input-group",
		role: "group",
		className: n("group/input-group cn-input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto", e),
		...t
	});
}
var c = t("cn-input-group-addon flex cursor-text items-center justify-center select-none", {
	variants: { align: {
		"inline-start": "cn-input-group-addon-align-inline-start order-first",
		"inline-end": "cn-input-group-addon-align-inline-end order-last",
		"block-start": "cn-input-group-addon-align-block-start order-first w-full justify-start",
		"block-end": "cn-input-group-addon-align-block-end order-last w-full justify-start"
	} },
	defaultVariants: { align: "inline-start" }
});
function l({ className: e, align: t = "inline-start", ...r }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": t,
		className: n(c({ align: t }), e),
		onClick: (e) => {
			e.target.closest("button") || e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...r
	});
}
var u = t("cn-input-group-button flex items-center shadow-none", {
	variants: { size: {
		xs: "cn-input-group-button-size-xs",
		sm: "cn-input-group-button-size-sm",
		"icon-xs": "cn-input-group-button-size-icon-xs",
		"icon-sm": "cn-input-group-button-size-icon-sm"
	} },
	defaultVariants: { size: "xs" }
});
function d({ className: e, type: t = "button", variant: i = "ghost", size: a = "xs", ...s }) {
	return /* @__PURE__ */ (0, o.jsx)(r, {
		type: t,
		"data-size": a,
		variant: i,
		className: n(u({ size: a }), e),
		...s
	});
}
function f({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)(i, {
		"data-slot": "input-group-control",
		className: n("cn-input-group-input flex-1", e),
		...t
	});
}
export { f as i, l as n, d as r, s as t };
