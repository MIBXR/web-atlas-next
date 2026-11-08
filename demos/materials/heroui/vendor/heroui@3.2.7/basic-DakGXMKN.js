import { n as e, t } from "./checkbox-K2hnXm89.js";
import { t as n } from "./description-lMFGrfj6.js";
import { t as r } from "./label-Wq1WAbJ3.js";
import { t as i } from "./jsx-runtime-C1t0izHF.js";
// upstream/demos/en/checkbox-group/basic.tsx
var a = i();
function o() {
	return /* @__PURE__ */ (0, a.jsxs)(e, {
		name: "interests",
		children: [
			/* @__PURE__ */ (0, a.jsx)(r, { children: "Select your interests" }),
			/* @__PURE__ */ (0, a.jsx)(n, { children: "Choose all that apply" }),
			/* @__PURE__ */ (0, a.jsxs)(t, {
				value: "coding",
				children: [/* @__PURE__ */ (0, a.jsxs)(t.Content, { children: [/* @__PURE__ */ (0, a.jsx)(t.Control, { children: /* @__PURE__ */ (0, a.jsx)(t.Indicator, {}) }), "Coding"] }), /* @__PURE__ */ (0, a.jsx)(n, { children: "Love building software" })]
			}),
			/* @__PURE__ */ (0, a.jsxs)(t, {
				value: "design",
				children: [/* @__PURE__ */ (0, a.jsxs)(t.Content, { children: [/* @__PURE__ */ (0, a.jsx)(t.Control, { children: /* @__PURE__ */ (0, a.jsx)(t.Indicator, {}) }), "Design"] }), /* @__PURE__ */ (0, a.jsx)(n, { children: "Enjoy creating beautiful interfaces" })]
			}),
			/* @__PURE__ */ (0, a.jsxs)(t, {
				value: "writing",
				children: [/* @__PURE__ */ (0, a.jsxs)(t.Content, { children: [/* @__PURE__ */ (0, a.jsx)(t.Control, { children: /* @__PURE__ */ (0, a.jsx)(t.Indicator, {}) }), "Writing"] }), /* @__PURE__ */ (0, a.jsx)(n, { children: "Passionate about content creation" })]
			})
		]
	});
}
export { o as Basic };
