import { a as e, i as t, n, o as r, r as i, s as a, t as o } from "./select-CXL1eyy7.js";
import { t as s } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/select-demo.tsx
var c = s(), l = [
	{
		label: "Select a fruit",
		value: null
	},
	{
		label: "Apple",
		value: "apple"
	},
	{
		label: "Banana",
		value: "banana"
	},
	{
		label: "Blueberry",
		value: "blueberry"
	},
	{
		label: "Grapes",
		value: "grapes"
	},
	{
		label: "Pineapple",
		value: "pineapple"
	}
];
function u() {
	return /* @__PURE__ */ (0, c.jsxs)(o, {
		items: l,
		children: [/* @__PURE__ */ (0, c.jsx)(r, {
			className: "w-full max-w-48",
			children: /* @__PURE__ */ (0, c.jsx)(a, {})
		}), /* @__PURE__ */ (0, c.jsx)(n, { children: /* @__PURE__ */ (0, c.jsxs)(i, { children: [/* @__PURE__ */ (0, c.jsx)(e, { children: "Fruits" }), l.map((e) => /* @__PURE__ */ (0, c.jsx)(t, {
			value: e.value,
			children: e.label
		}, e.value))] }) })]
	});
}
export { u as SelectDemo };
