import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./owner-C-FapX6G.js";
import { o as r } from "./useOpenInteractionType-DPoQCspH.js";
import { t as i } from "./useIsoLayoutEffect-B0B6th0o.js";
// node_modules/@base-ui/react/utils/useAnchoredPopupScrollLock.mjs
var a = /* @__PURE__ */ e(t(), 1), o = 20;
function s(e, t, s, c) {
	let [l, u] = a.useState(!1);
	i(() => {
		if (!e || !t || s == null) {
			u(!1);
			return;
		}
		let r = n(s).documentElement.clientWidth, i = s.offsetWidth;
		u(r > 0 && i > 0 && i >= r - o);
	}, [
		e,
		t,
		s
	]), r(e && (!t || l), c);
}
export { s as t };
