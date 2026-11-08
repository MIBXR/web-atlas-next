// node_modules/@base-ui/utils/isElementDisabled.mjs
function e(e) {
	return e == null || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true";
}
export { e as t };
