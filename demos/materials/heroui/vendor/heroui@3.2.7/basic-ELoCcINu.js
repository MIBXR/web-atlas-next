import { t as e } from "./description-lMFGrfj6.js";
import { t } from "./input-zkcgZ6lD.js";
import { t as n } from "./label-Wq1WAbJ3.js";
import { t as r } from "./jsx-runtime-C1t0izHF.js";
// upstream/demos/en/description/basic.tsx
var i = r();
function a() {
	return /* @__PURE__ */ (0, i.jsxs)("div", {
		className: "flex flex-col gap-1",
		children: [
			/* @__PURE__ */ (0, i.jsx)(n, {
				htmlFor: "email",
				children: "Email"
			}),
			/* @__PURE__ */ (0, i.jsx)(t, {
				"aria-describedby": "email-description",
				className: "w-64",
				id: "email",
				placeholder: "you@example.com",
				type: "email"
			}),
			/* @__PURE__ */ (0, i.jsx)(e, {
				id: "email-description",
				children: "We'll never share your email with anyone else."
			})
		]
	});
}
export { a as Basic };
