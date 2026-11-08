import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { n, t as r } from "./calendar-B8b2tA5t.js";
import { v as i } from "./icon-placeholder-BTF3H_W7.js";
import { t as a } from "./button-DmMhlFcj.js";
import { n as o, r as s, t as c } from "./popover-BMKcnHZL.js";
import { t as l } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/date-picker-demo.tsx
var u = /* @__PURE__ */ e(t(), 1), d = l();
function f() {
	let [e, t] = u.useState();
	return /* @__PURE__ */ (0, d.jsxs)(c, { children: [/* @__PURE__ */ (0, d.jsxs)(s, {
		render: /* @__PURE__ */ (0, d.jsx)(a, {
			variant: "outline",
			"data-empty": !e,
			className: "w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
		}),
		children: [e ? n(e, "PPP") : /* @__PURE__ */ (0, d.jsx)("span", { children: "Pick a date" }), /* @__PURE__ */ (0, d.jsx)(i, { "data-icon": "inline-end" })]
	}), /* @__PURE__ */ (0, d.jsx)(o, {
		className: "w-auto p-0",
		align: "start",
		children: /* @__PURE__ */ (0, d.jsx)(r, {
			mode: "single",
			selected: e,
			onSelect: t,
			defaultMonth: e
		})
	})] });
}
export { f as DatePickerDemo };
