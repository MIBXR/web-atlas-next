import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { t } from "./dist-DCi9UB7o.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
e();
var r = n();
function i({ className: e, align: n = "start", ...i }) {
	return /* @__PURE__ */ (0, r.jsx)("div", {
		"data-slot": "message",
		"data-align": n,
		className: t("cn-message group/message relative flex w-full min-w-0 data-[align=end]:flex-row-reverse", e),
		...i
	});
}
function a({ className: e, ...n }) {
	return /* @__PURE__ */ (0, r.jsx)("div", {
		"data-slot": "message-avatar",
		className: t("cn-message-avatar flex w-fit shrink-0 items-center justify-center self-end overflow-hidden rounded-full bg-muted", e),
		...n
	});
}
function o({ className: e, ...n }) {
	return /* @__PURE__ */ (0, r.jsx)("div", {
		"data-slot": "message-content",
		className: t("cn-message-content flex w-full min-w-0 flex-col wrap-break-word", e),
		...n
	});
}
function s({ className: e, ...n }) {
	return /* @__PURE__ */ (0, r.jsx)("div", {
		"data-slot": "message-footer",
		className: t("cn-message-footer flex max-w-full min-w-0 items-center group-data-[align=end]/message:justify-end", e),
		...n
	});
}
export { s as i, a as n, o as r, i as t };
