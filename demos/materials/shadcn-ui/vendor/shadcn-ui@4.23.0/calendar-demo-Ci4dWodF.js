import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./calendar-B8b2tA5t.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/calendar-demo.tsx
var i = /* @__PURE__ */ e(t(), 1), a = r();
function o() {
	let [e, t] = i.useState(/* @__PURE__ */ new Date());
	return /* @__PURE__ */ (0, a.jsx)(n, {
		mode: "single",
		selected: e,
		onSelect: t,
		className: "rounded-lg border",
		captionLayout: "dropdown"
	});
}
export { o as default };
