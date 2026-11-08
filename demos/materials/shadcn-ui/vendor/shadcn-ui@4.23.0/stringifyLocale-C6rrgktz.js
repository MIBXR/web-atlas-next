// node_modules/@base-ui/react/utils/stringifyLocale.mjs
function e(t) {
	return Array.isArray(t) ? t.map((t) => e(t)).join(",") : t == null ? "" : String(t);
}
export { e as t };
