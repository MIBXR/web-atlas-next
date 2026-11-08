import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./react-dom-BasjwewA.js";
import { n as r } from "./shadowDom-D66trjQm.js";
import { B as i, I as a, R as o, z as s } from "./popupStateMapping-CSyRbb7j.js";
import { t as c, u as l } from "./createBaseUIEventDetails-DG51vPHx.js";
// node_modules/@base-ui/react/utils/popups/useTriggerFocusGuards.mjs
var u = /* @__PURE__ */ e(t(), 1), d = /* @__PURE__ */ e(n(), 1);
function f(e, t) {
	let n = u.useRef(null);
	function f(t) {
		d.flushSync(() => {
			e.setOpen(!1, c(l, t.nativeEvent, t.currentTarget));
		}), s(n.current)?.focus();
	}
	function p(n) {
		let s = e.select("positionerElement");
		if (s && i(n, s)) e.context.beforeContentFocusGuardRef.current?.focus();
		else {
			d.flushSync(() => {
				e.setOpen(!1, c(l, n.nativeEvent, n.currentTarget));
			});
			let i = o(e.context.triggerFocusTargetRef.current || t.current);
			for (; i !== null && r(s, i);) {
				let e = i;
				if (i = a(i), i === e) break;
			}
			i?.focus();
		}
	}
	return {
		preFocusGuardRef: n,
		handlePreFocusGuardFocus: f,
		handleFocusTargetFocus: p
	};
}
export { f as t };
