import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { d as i, s as a } from "./useRenderElement-Bc91YjHo.js";
import { d as o } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as s } from "./useBaseUiId-BwhhMxTY.js";
import { n as c } from "./useRegisterFieldControl-Crjc5EN3.js";
// node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
var l = /* @__PURE__ */ e(t(), 1);
function u(e = {}) {
	let { id: t, implicit: u = !1, controlRef: d } = e, { controlId: f, registerControlId: p } = c(), m = s(t), h = u ? f : void 0, g = i(() => Symbol("labelable-control")), _ = l.useRef(!1), v = l.useRef(t != null), y = r(() => {
		_.current && p !== a && (_.current = !1, p(g.current, void 0));
	});
	return n(() => {
		if (p === a) return;
		let e;
		if (u) {
			let n = d?.current;
			e = o(n) && n.closest("label") != null ? t ?? null : h ?? m;
		} else if (t != null) v.current = !0, e = t;
		else if (v.current) e = m;
		else {
			y();
			return;
		}
		e === void 0 ? y() : (_.current = !0, p(g.current, e));
	}, [
		t,
		d,
		h,
		p,
		u,
		m,
		g,
		y
	]), l.useEffect(() => y, [y]), f ?? m;
}
export { u as t };
