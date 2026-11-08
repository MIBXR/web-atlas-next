import { t as e } from "./description-lMFGrfj6.js";
import { n as t } from "./dist-qnEEIXtT.js";
import { i as n, n as r, t as i } from "./jsx-runtime-C1t0izHF.js";
import { t as a } from "./Text-CEDDBTEL.js";
import { n as o } from "./use-has-text-slot-D2WxsmuX.js";
import { t as s } from "./label-Wq1WAbJ3.js";
import { n as c, t as l } from "./tag-K_5WiDt3.js";
// node_modules/@heroui/styles/dist/components/error-message/error-message.styles.js
var u = t({ base: "error-message" }), d = /* @__PURE__ */ n(r(), 1), f = i(), p = ({ children: e, className: t, ...n }) => {
	let r = (0, d.useMemo)(() => u({ className: t }), [t]);
	return o("errorMessage") ? /*#__PURE__*/ (0, f.jsx)(a, {
		className: r,
		"data-slot": "error-message",
		slot: "errorMessage",
		...n,
		children: e
	}) : null;
};
p.displayName = "HeroUI.ErrorMessage";
// node_modules/@heroui/react/dist/components/error-message/index.js
var m = Object.assign(p, { Root: p });
// upstream/demos/en/error-message/basic.tsx
function h() {
	let [t, n] = (0, d.useState)(/* @__PURE__ */ new Set()), r = (0, d.useMemo)(() => Array.from(t).length === 0, [t]);
	return /* @__PURE__ */ (0, f.jsxs)(c, {
		selectedKeys: t,
		selectionMode: "multiple",
		onSelectionChange: (e) => n(e),
		children: [
			/* @__PURE__ */ (0, f.jsx)(s, { children: "Required Categories" }),
			/* @__PURE__ */ (0, f.jsxs)(c.List, { children: [
				/* @__PURE__ */ (0, f.jsx)(l, {
					id: "news",
					children: "News"
				}),
				/* @__PURE__ */ (0, f.jsx)(l, {
					id: "travel",
					children: "Travel"
				}),
				/* @__PURE__ */ (0, f.jsx)(l, {
					id: "gaming",
					children: "Gaming"
				}),
				/* @__PURE__ */ (0, f.jsx)(l, {
					id: "shopping",
					children: "Shopping"
				})
			] }),
			/* @__PURE__ */ (0, f.jsx)(e, { children: "Select at least one category" }),
			/* @__PURE__ */ (0, f.jsx)(m, { children: !!r && /* @__PURE__ */ (0, f.jsx)(f.Fragment, { children: "Please select at least one category" }) })
		]
	});
}
export { h as ErrorMessageBasic };
