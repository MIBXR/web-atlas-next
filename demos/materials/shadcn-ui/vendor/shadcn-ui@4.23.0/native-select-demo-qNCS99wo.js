import "./rolldown-runtime-DUcC5eAW.js";
import { t as e } from "./react-D9cguz4v.js";
import { t } from "./dist-DCi9UB7o.js";
import { t as n } from "./icon-placeholder-BTF3H_W7.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
e();
var i = r();
function a({ className: e, size: r = "default", ...a }) {
	return /* @__PURE__ */ (0, i.jsxs)("div", {
		className: t("cn-native-select-wrapper group/native-select relative w-fit has-[select:disabled]:opacity-50", e),
		"data-slot": "native-select-wrapper",
		"data-size": r,
		children: [/* @__PURE__ */ (0, i.jsx)("select", {
			"data-slot": "native-select",
			"data-size": r,
			className: "cn-native-select outline-none disabled:pointer-events-none disabled:cursor-not-allowed",
			...a
		}), /* @__PURE__ */ (0, i.jsx)(n, {
			lucide: "ChevronDownIcon",
			tabler: "IconSelector",
			hugeicons: "UnfoldMoreIcon",
			phosphor: "CaretDownIcon",
			remixicon: "RiArrowDownSLine",
			className: "cn-native-select-icon pointer-events-none absolute select-none",
			"aria-hidden": "true",
			"data-slot": "native-select-icon"
		})]
	});
}
function o({ className: e, ...n }) {
	return /* @__PURE__ */ (0, i.jsx)("option", {
		"data-slot": "native-select-option",
		className: t("bg-[Canvas] text-[CanvasText]", e),
		...n
	});
}
// upstream/examples/base/native-select-demo.tsx
function s() {
	return /* @__PURE__ */ (0, i.jsxs)(a, { children: [
		/* @__PURE__ */ (0, i.jsx)(o, {
			value: "",
			children: "Select status"
		}),
		/* @__PURE__ */ (0, i.jsx)(o, {
			value: "todo",
			children: "Todo"
		}),
		/* @__PURE__ */ (0, i.jsx)(o, {
			value: "in-progress",
			children: "In Progress"
		}),
		/* @__PURE__ */ (0, i.jsx)(o, {
			value: "done",
			children: "Done"
		}),
		/* @__PURE__ */ (0, i.jsx)(o, {
			value: "cancelled",
			children: "Cancelled"
		})
	] });
}
export { s as default };
