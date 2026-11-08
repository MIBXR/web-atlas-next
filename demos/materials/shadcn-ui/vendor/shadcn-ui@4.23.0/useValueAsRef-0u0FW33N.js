import { t as e } from "./useIsoLayoutEffect-B0B6th0o.js";
import { d as t } from "./useRenderElement-Bc91YjHo.js";
// node_modules/@base-ui/utils/useValueAsRef.mjs
function n(n) {
	let i = t(r, n).current;
	return i.next = n, e(i.effect), i;
}
function r(e) {
	let t = {
		current: e,
		next: e,
		effect: () => {
			t.current = t.next;
		}
	};
	return t;
}
export { n as t };
