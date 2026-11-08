import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { t } from "./dist-zgg4f6ja.js";
import { t as n } from "./dist-DCi9UB7o.js";
import { t as r } from "./label-LoHsVeB8.js";
import { t as i } from "./separator-DPldDFzU.js";
import { t as a } from "./jsx-runtime-lAxUcZjR.js";
e();
var o = a();
function s({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("fieldset", {
		"data-slot": "field-set",
		className: n("cn-field-set flex flex-col", e),
		...t
	});
}
function c({ className: e, variant: t = "legend", ...r }) {
	return /* @__PURE__ */ (0, o.jsx)("legend", {
		"data-slot": "field-legend",
		"data-variant": t,
		className: n("cn-field-legend", e),
		...r
	});
}
function l({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "field-group",
		className: n("cn-field-group group/field-group @container/field-group flex w-full flex-col", e),
		...t
	});
}
var u = t("cn-field group/field flex w-full", {
	variants: { orientation: {
		vertical: "cn-field-orientation-vertical flex-col *:w-full [&>.sr-only]:w-auto",
		horizontal: "cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "cn-field-orientation-responsive flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
function d({ className: e, orientation: t = "vertical", ...r }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		role: "group",
		"data-slot": "field",
		"data-orientation": t,
		className: n(u({ orientation: t }), e),
		...r
	});
}
function f({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "field-content",
		className: n("cn-field-content group/field-content flex flex-1 flex-col leading-snug", e),
		...t
	});
}
function p({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)(r, {
		"data-slot": "field-label",
		className: n("cn-field-label group/field-label peer/field-label flex w-fit", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col", e),
		...t
	});
}
function m({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		"data-slot": "field-label",
		className: n("cn-field-title flex w-fit items-center", e),
		...t
	});
}
function h({ className: e, ...t }) {
	return /* @__PURE__ */ (0, o.jsx)("p", {
		"data-slot": "field-description",
		className: n("cn-field-description leading-normal font-normal group-has-data-horizontal/field:text-balance", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", e),
		...t
	});
}
function g({ children: e, className: t, ...r }) {
	return /* @__PURE__ */ (0, o.jsxs)("div", {
		"data-slot": "field-separator",
		"data-content": !!e,
		className: n("cn-field-separator relative", t),
		...r,
		children: [/* @__PURE__ */ (0, o.jsx)(i, { className: "absolute inset-0 top-1/2" }), e && /* @__PURE__ */ (0, o.jsx)("span", {
			className: "cn-field-separator-content relative mx-auto block w-fit bg-background",
			"data-slot": "field-separator-content",
			children: e
		})]
	});
}
export { p as a, s as c, l as i, m as l, f as n, c as o, h as r, g as s, d as t };
