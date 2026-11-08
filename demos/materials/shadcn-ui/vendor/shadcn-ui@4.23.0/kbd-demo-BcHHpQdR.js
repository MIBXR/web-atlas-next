import { t as e } from "./dist-DCi9UB7o.js";
import { t } from "./jsx-runtime-lAxUcZjR.js";
// upstream/registry/bases/base/ui/kbd.tsx
var n = t();
function r({ className: t, ...r }) {
	return /* @__PURE__ */ (0, n.jsx)("kbd", {
		"data-slot": "kbd",
		className: e("cn-kbd pointer-events-none inline-flex items-center justify-center select-none", t),
		...r
	});
}
function i({ className: t, ...r }) {
	return /* @__PURE__ */ (0, n.jsx)("kbd", {
		"data-slot": "kbd-group",
		className: e("cn-kbd-group inline-flex items-center", t),
		...r
	});
}
// upstream/examples/base/kbd-demo.tsx
function a() {
	return /* @__PURE__ */ (0, n.jsxs)("div", {
		className: "flex flex-col items-center gap-4",
		children: [/* @__PURE__ */ (0, n.jsxs)(i, { children: [
			/* @__PURE__ */ (0, n.jsx)(r, { children: "⌘" }),
			/* @__PURE__ */ (0, n.jsx)(r, { children: "⇧" }),
			/* @__PURE__ */ (0, n.jsx)(r, { children: "⌥" }),
			/* @__PURE__ */ (0, n.jsx)(r, { children: "⌃" })
		] }), /* @__PURE__ */ (0, n.jsxs)(i, { children: [
			/* @__PURE__ */ (0, n.jsx)(r, { children: "Ctrl" }),
			/* @__PURE__ */ (0, n.jsx)("span", { children: "+" }),
			/* @__PURE__ */ (0, n.jsx)(r, { children: "B" })
		] })]
	});
}
export { a as default };
