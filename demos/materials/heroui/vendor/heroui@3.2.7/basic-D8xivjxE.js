import { t as e } from "./field-error-CdzvyH0q.js";
import { t } from "./input-zkcgZ6lD.js";
import { t as n } from "./label-Wq1WAbJ3.js";
import { t as r } from "./textfield-Drv1hMDu.js";
import { i, n as a, t as o } from "./jsx-runtime-C1t0izHF.js";
// upstream/demos/en/field-error/basic.tsx
var s = /* @__PURE__ */ i(a(), 1), c = o();
function l() {
	let [i, a] = (0, s.useState)("jr"), o = i.length > 0 && i.length < 3;
	return /* @__PURE__ */ (0, c.jsxs)(r, {
		className: "w-64",
		isInvalid: o,
		children: [
			/* @__PURE__ */ (0, c.jsx)(n, {
				htmlFor: "username",
				children: "Username"
			}),
			/* @__PURE__ */ (0, c.jsx)(t, {
				id: "username",
				placeholder: "Enter username",
				value: i,
				onChange: (e) => a(e.target.value)
			}),
			/* @__PURE__ */ (0, c.jsx)(e, { children: "Username must be at least 3 characters" })
		]
	});
}
export { l as Basic };
