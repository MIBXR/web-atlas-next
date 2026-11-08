import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { d as n } from "./useRenderElement-Bc91YjHo.js";
var r = { .../* @__PURE__ */ e(t(), 1) }, i = r.useInsertionEffect, a = i && i !== r.useLayoutEffect ? i : (e) => e();
function o(e) {
	let t = n(s).current;
	return t.next = e, a(t.effect), t.trampoline;
}
function s() {
	let e = {
		next: void 0,
		callback: c,
		trampoline: (...t) => e.callback?.(...t),
		effect: () => {
			e.callback = e.next;
		}
	};
	return e;
}
function c() {}
export { r as n, o as t };
