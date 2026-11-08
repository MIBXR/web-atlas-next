import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
// node_modules/@base-ui/react/internals/useValueChanged.mjs
var i = /* @__PURE__ */ e(t(), 1);
function a(e, t) {
	let a = i.useRef(e), o = r(t);
	n(() => {
		a.current !== e && o(a.current);
	}, [e, o]), n(() => {
		a.current = e;
	}, [e]);
}
export { a as t };
