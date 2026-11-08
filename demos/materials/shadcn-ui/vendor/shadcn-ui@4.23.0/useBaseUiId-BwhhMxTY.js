import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { n } from "./useStableCallback-BmDujACN.js";
// node_modules/@base-ui/utils/useId.mjs
var r = /* @__PURE__ */ e(t(), 1), i = 0;
function a(e, t = "mui") {
	let [n, a] = r.useState(e), o = e || n;
	return r.useEffect(() => {
		n ?? (i += 1, a(`${t}-${i}`));
	}, [n, t]), o;
}
var o = n.useId;
function s(e, t) {
	if (o !== void 0) {
		let n = o();
		return e ?? (t ? `${t}-${n}` : n);
	}
	return a(e, t);
}
// node_modules/@base-ui/react/internals/useBaseUiId.mjs
function c(e) {
	return s(e, "base-ui");
}
export { s as n, c as t };
