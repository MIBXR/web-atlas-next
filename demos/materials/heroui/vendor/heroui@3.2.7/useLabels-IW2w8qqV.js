import { m as e } from "./utils-UBVJ5JR_.js";
// node_modules/react-aria/dist/private/utils/useLabels.mjs
function t(t, n) {
	let { id: r, "aria-label": i, "aria-labelledby": a } = t;
	return r = e(r), a && i ? a = [.../* @__PURE__ */ new Set([r, ...a.trim().split(/\s+/)])].join(" ") : a &&= a.trim().split(/\s+/).join(" "), !i && !a && n && (i = n), {
		id: r,
		"aria-label": i,
		"aria-labelledby": a
	};
}
export { t };
