import { i as e } from "./scrollIntoView-D_15IrGl.js";
// node_modules/react-aria/dist/private/utils/getScrollParent.mjs
function t(t, n) {
	let r = t;
	for (e(r, n) && (r = r.parentElement); r && !e(r, n);) r = r.parentElement;
	return r || document.scrollingElement || document.documentElement;
}
export { t };
