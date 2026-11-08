import { a as e, o as t, r as n, t as r } from "./item-kj5v2dv2.js";
import { t as i } from "./spinner-C6I5U442.js";
import { t as a } from "./jsx-runtime-lAxUcZjR.js";
// upstream/examples/base/spinner-demo.tsx
var o = a();
function s() {
	return /* @__PURE__ */ (0, o.jsx)("div", {
		className: "flex w-full max-w-xs flex-col gap-4 [--radius:1rem]",
		children: /* @__PURE__ */ (0, o.jsxs)(r, {
			variant: "muted",
			children: [
				/* @__PURE__ */ (0, o.jsx)(e, { children: /* @__PURE__ */ (0, o.jsx)(i, {}) }),
				/* @__PURE__ */ (0, o.jsx)(n, { children: /* @__PURE__ */ (0, o.jsx)(t, {
					className: "line-clamp-1",
					children: "Processing payment..."
				}) }),
				/* @__PURE__ */ (0, o.jsx)(n, {
					className: "flex-none justify-end",
					children: /* @__PURE__ */ (0, o.jsx)("span", {
						className: "text-sm tabular-nums",
						children: "$100.00"
					})
				})
			]
		})
	});
}
export { s as SpinnerDemo };
