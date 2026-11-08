// node_modules/@base-ui/react/internals/serializeValue.mjs
function e(e) {
	if (e == null) return "";
	if (typeof e == "string") return e;
	try {
		return JSON.stringify(e);
	} catch {
		return String(e);
	}
}
export { e as t };
