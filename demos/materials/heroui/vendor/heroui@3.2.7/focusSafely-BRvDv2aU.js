import { E as e, P as t, _ as n, b as r, r as i } from "./useKeyboard-CqNSkGJ-.js";
import { t as a } from "./useLayoutEffect-Bx2X4QEP.js";
// node_modules/react-aria/dist/private/utils/useSyncRef.mjs
function o(e, t) {
	a(() => {
		if (e && e.ref && t) return e.ref.current = t.current, () => {
			e.ref && (e.ref.current = null);
		};
	});
}
// node_modules/react-aria/dist/private/interactions/focusSafely.mjs
function s(a) {
	if (!a.isConnected) return;
	let o = e(a);
	if (i() === "virtual") {
		let e = r(o);
		n(() => {
			let n = r(o);
			(n === e || n === o.body) && a.isConnected && t(a);
		});
	} else t(a);
}
export { o as n, s as t };
