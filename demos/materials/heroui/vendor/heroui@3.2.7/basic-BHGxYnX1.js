import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { t as i } from "./use-css-variable-BK30PNYv.js";
import { t as a } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/skeleton/skeleton.styles.js
var o = e({
	defaultVariants: { animationType: "shimmer" },
	slots: { base: "skeleton" },
	variants: { animationType: {
		none: "skeleton--none",
		pulse: "skeleton--pulse",
		shimmer: "skeleton--shimmer"
	} }
}), s = /* @__PURE__ */ t(n(), 1), c = r(), l = ({ animationType: e, className: t, ...n }) => {
	let r = i("--skeleton-animation", e), l = s.useMemo(() => o({ animationType: r }), [r]), u = s.useMemo(() => l.base({ className: t }), [t, l]);
	return /*#__PURE__*/ (0, c.jsx)(a.div, {
		className: u,
		...n
	});
};
l.displayName = "HeroUI.Skeleton";
// node_modules/@heroui/react/dist/components/skeleton/index.js
var u = Object.assign(l, { Root: l });
// upstream/demos/en/skeleton/basic.tsx
function d() {
	return /* @__PURE__ */ (0, c.jsxs)("div", {
		className: "shadow-panel w-[250px] space-y-5 rounded-lg bg-transparent p-4",
		children: [/* @__PURE__ */ (0, c.jsx)(u, { className: "h-32 rounded-lg" }), /* @__PURE__ */ (0, c.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, c.jsx)(u, { className: "h-3 w-3/5 rounded-lg" }),
				/* @__PURE__ */ (0, c.jsx)(u, { className: "h-3 w-4/5 rounded-lg" }),
				/* @__PURE__ */ (0, c.jsx)(u, { className: "h-3 w-2/5 rounded-lg" })
			]
		})]
	});
}
export { d as Basic };
