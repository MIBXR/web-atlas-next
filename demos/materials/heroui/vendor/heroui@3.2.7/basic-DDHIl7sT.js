import { t as e } from "./color-slider-BduBMaTY.js";
import { t } from "./label-Wq1WAbJ3.js";
import { t as n } from "./jsx-runtime-C1t0izHF.js";
// upstream/demos/en/color-slider/basic.tsx
var r = n();
function i() {
	return /* @__PURE__ */ (0, r.jsxs)(e, {
		channel: "hue",
		className: "w-full max-w-xs",
		defaultValue: "hsl(0, 100%, 50%)",
		children: [
			/* @__PURE__ */ (0, r.jsx)(t, { children: "Hue" }),
			/* @__PURE__ */ (0, r.jsx)(e.Output, {}),
			/* @__PURE__ */ (0, r.jsx)(e.Track, { children: /* @__PURE__ */ (0, r.jsx)(e.Thumb, {}) })
		]
	});
}
export { i as Basic };
