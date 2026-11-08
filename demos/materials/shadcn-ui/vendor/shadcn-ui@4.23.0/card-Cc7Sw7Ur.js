import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { t } from "./dist-DCi9UB7o.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
e();
var r = n();
function i({ className: e, size: n = "default", ...i }) {
	return /* @__PURE__ */ (0, r.jsx)("div", {
		"data-slot": "card",
		"data-size": n,
		className: t("cn-card group/card flex flex-col", e),
		...i
	});
}
function a({ className: e, ...n }) {
	return /* @__PURE__ */ (0, r.jsx)("div", {
		"data-slot": "card-header",
		className: t("cn-card-header group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]", e),
		...n
	});
}
function o({ className: e, ...n }) {
	return /* @__PURE__ */ (0, r.jsx)("div", {
		"data-slot": "card-title",
		className: t("cn-card-title cn-font-heading", e),
		...n
	});
}
function s({ className: e, ...n }) {
	return /* @__PURE__ */ (0, r.jsx)("div", {
		"data-slot": "card-description",
		className: t("cn-card-description", e),
		...n
	});
}
function c({ className: e, ...n }) {
	return /* @__PURE__ */ (0, r.jsx)("div", {
		"data-slot": "card-action",
		className: t("cn-card-action col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...n
	});
}
function l({ className: e, ...n }) {
	return /* @__PURE__ */ (0, r.jsx)("div", {
		"data-slot": "card-content",
		className: t("cn-card-content", e),
		...n
	});
}
function u({ className: e, ...n }) {
	return /* @__PURE__ */ (0, r.jsx)("div", {
		"data-slot": "card-footer",
		className: t("cn-card-footer flex items-center", e),
		...n
	});
}
export { u as a, s as i, c as n, a as o, l as r, o as s, i as t };
