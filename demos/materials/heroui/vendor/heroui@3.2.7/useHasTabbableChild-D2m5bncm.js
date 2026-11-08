import { r as e } from "./FocusScope-C6wAY3W6.js";
import { t } from "./useLayoutEffect-Bx2X4QEP.js";
import { i as n, n as r } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/focus/useHasTabbableChild.mjs
var i = /* @__PURE__ */ n(r(), 1);
function a(n, r) {
	let a = r?.isDisabled, [o, s] = (0, i.useState)(!1);
	return t(() => {
		if (n?.current && !a) {
			let t = () => {
				if (n.current) {
					let t = e(n.current, { tabbable: !0 });
					s(!!t.nextNode());
				}
			};
			t();
			let r = new MutationObserver(t);
			return r.observe(n.current, {
				subtree: !0,
				childList: !0,
				attributes: !0,
				attributeFilter: ["tabIndex", "disabled"]
			}), () => {
				r.disconnect();
			};
		}
	}), !a && o;
}
export { a as t };
