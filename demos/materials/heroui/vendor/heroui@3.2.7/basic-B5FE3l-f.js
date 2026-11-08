import { i as e, n as t, t as n } from "./jsx-runtime-C1t0izHF.js";
import { t as r } from "./button-Dd5iSf4T.js";
import { t as i } from "./description-lMFGrfj6.js";
import { t as a } from "./field-error-CdzvyH0q.js";
import { t as o } from "./form-NXqmuFkk.js";
import { t as s } from "./input-zkcgZ6lD.js";
import { t as c } from "./label-Wq1WAbJ3.js";
import { t as l } from "./textfield-Drv1hMDu.js";
// node_modules/@gravity-ui/icons/esm/Check.js
var u = /* @__PURE__ */ e(t()), d = (e) => u.createElement("svg", Object.assign({
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	fill: "none",
	viewBox: "0 0 16 16"
}, e), u.createElement("path", {
	fill: "currentColor",
	fillRule: "evenodd",
	d: "M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081",
	clipRule: "evenodd"
})), f = n();
function p() {
	return /* @__PURE__ */ (0, f.jsxs)(o, {
		className: "flex w-96 flex-col gap-4",
		onSubmit: (e) => {
			e.preventDefault();
			let t = new FormData(e.currentTarget), n = {};
			t.forEach((e, t) => {
				n[t] = e.toString();
			}), alert(`Form submitted with: ${JSON.stringify(n, null, 2)}`);
		},
		children: [
			/* @__PURE__ */ (0, f.jsxs)(l, {
				isRequired: !0,
				name: "email",
				type: "email",
				validate: (e) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e) ? null : "Please enter a valid email address",
				children: [
					/* @__PURE__ */ (0, f.jsx)(c, { children: "Email" }),
					/* @__PURE__ */ (0, f.jsx)(s, { placeholder: "john@example.com" }),
					/* @__PURE__ */ (0, f.jsx)(a, {})
				]
			}),
			/* @__PURE__ */ (0, f.jsxs)(l, {
				isRequired: !0,
				minLength: 8,
				name: "password",
				type: "password",
				validate: (e) => e.length < 8 ? "Password must be at least 8 characters" : /[A-Z]/.test(e) ? /[0-9]/.test(e) ? null : "Password must contain at least one number" : "Password must contain at least one uppercase letter",
				children: [
					/* @__PURE__ */ (0, f.jsx)(c, { children: "Password" }),
					/* @__PURE__ */ (0, f.jsx)(s, { placeholder: "Enter your password" }),
					/* @__PURE__ */ (0, f.jsx)(i, { children: "Must be at least 8 characters with 1 uppercase and 1 number" }),
					/* @__PURE__ */ (0, f.jsx)(a, {})
				]
			}),
			/* @__PURE__ */ (0, f.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, f.jsxs)(r, {
					type: "submit",
					children: [/* @__PURE__ */ (0, f.jsx)(d, {}), "Submit"]
				}), /* @__PURE__ */ (0, f.jsx)(r, {
					type: "reset",
					variant: "secondary",
					children: "Reset"
				})]
			})
		]
	});
}
export { p as Basic };
