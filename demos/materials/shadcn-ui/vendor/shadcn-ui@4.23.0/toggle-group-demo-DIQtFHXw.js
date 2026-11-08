import { t as e } from "./createLucideIcon-B1HI5iko.js";
import { n as t, t as n } from "./toggle-group-DArchzHI.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
var i = e("Bold", [["path", {
	d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",
	key: "mg9rjx"
}]]), a = e("Italic", [
	["line", {
		x1: "19",
		x2: "10",
		y1: "4",
		y2: "4",
		key: "15jd3p"
	}],
	["line", {
		x1: "14",
		x2: "5",
		y1: "20",
		y2: "20",
		key: "bu0au3"
	}],
	["line", {
		x1: "15",
		x2: "9",
		y1: "4",
		y2: "20",
		key: "uljnxc"
	}]
]), o = e("Underline", [["path", {
	d: "M6 4v6a6 6 0 0 0 12 0V4",
	key: "9kb039"
}], ["line", {
	x1: "4",
	x2: "20",
	y1: "20",
	y2: "20",
	key: "nun2al"
}]]), s = r();
function c() {
	return /* @__PURE__ */ (0, s.jsxs)(n, {
		variant: "outline",
		multiple: !0,
		children: [
			/* @__PURE__ */ (0, s.jsx)(t, {
				value: "bold",
				"aria-label": "Toggle bold",
				children: /* @__PURE__ */ (0, s.jsx)(i, {})
			}),
			/* @__PURE__ */ (0, s.jsx)(t, {
				value: "italic",
				"aria-label": "Toggle italic",
				children: /* @__PURE__ */ (0, s.jsx)(a, {})
			}),
			/* @__PURE__ */ (0, s.jsx)(t, {
				value: "strikethrough",
				"aria-label": "Toggle strikethrough",
				children: /* @__PURE__ */ (0, s.jsx)(o, {})
			})
		]
	});
}
export { c as ToggleGroupDemo };
