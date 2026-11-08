import { t as e } from "./jsx-runtime-lAxUcZjR.js";
import { t } from "./dist-DCi9UB7o.js";
// next-image.tsx
var n = e();
function r({ fill: e, priority: t, style: r, ...i }) {
	return /* @__PURE__ */ (0, n.jsx)("img", {
		...i,
		loading: t ? "eager" : i.loading,
		style: e ? {
			position: "absolute",
			inset: 0,
			width: "100%",
			height: "100%",
			...r
		} : r
	});
}
// upstream/registry/bases/base/ui/aspect-ratio.tsx
function i({ ratio: e, className: r, ...i }) {
	return /* @__PURE__ */ (0, n.jsx)("div", {
		"data-slot": "aspect-ratio",
		style: { "--ratio": e },
		className: t("relative aspect-(--ratio)", r),
		...i
	});
}
// upstream/examples/base/aspect-ratio-demo.tsx
function a() {
	return /* @__PURE__ */ (0, n.jsx)(i, {
		ratio: 16 / 9,
		className: "w-full max-w-sm rounded-lg bg-muted",
		children: /* @__PURE__ */ (0, n.jsx)(r, {
			src: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%23224462%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EA%3C%2Ftext%3E%3C%2Fsvg%3E",
			alt: "Photo",
			fill: !0,
			className: "rounded-lg object-cover grayscale dark:brightness-20"
		})
	});
}
export { a as default };
