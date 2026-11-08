import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { n } from "./useAnimationFrame-CMIvKrBf.js";
import { n as r } from "./useTimeout-CP4j_cva.js";
import { o as i } from "./useRenderElement-Bc91YjHo.js";
import { s as a } from "./element-DbCN1dg9.js";
import { k as o } from "./composite-BYPOq3H3.js";
import { r as s } from "./shadowDom-D66trjQm.js";
import { O as c, t as l } from "./createBaseUIEventDetails-DG51vPHx.js";
// node_modules/@base-ui/react/floating-ui-react/hooks/useClick.mjs
var u = /* @__PURE__ */ e(t(), 1);
function d(e, t = {}) {
	let { enabled: d = !0, event: f = "click", toggle: p = !0, ignoreMouse: m = !1, stickIfOpen: h = !0, touchOpenDelay: g = 0, reason: _ = c } = t, v = "rootStore" in e ? e.rootStore : e, y = v.context.dataRef, b = u.useRef(void 0), x = n(), S = r(), C = u.useMemo(() => {
		function e(e, t, n, r) {
			let i = l(_, t, n);
			e && r === "touch" && g > 0 ? S.start(g, () => {
				v.setOpen(!0, i);
			}) : v.setOpen(e, i);
		}
		function t(e, t, n) {
			let r = y.current.openEvent, i = v.select("domReferenceElement") !== t;
			return e && i || !e || !p ? !0 : r && h ? !n(r.type) : !1;
		}
		return {
			onPointerDown(e) {
				b.current = e.pointerType;
			},
			onMouseDown(n) {
				let r = b.current, i = n.nativeEvent, c = v.select("open");
				if (n.button !== 0 || f === "click" || o(r, !0) && m) return;
				let l = t(c, n.currentTarget, (e) => e === "click" || e === "mousedown"), u = s(i);
				if (a(u)) {
					e(l, i, u, r);
					return;
				}
				let d = n.currentTarget;
				x.request(() => {
					e(l, i, d, r);
				});
			},
			onClick(n) {
				if (f === "mousedown-only") return;
				let r = b.current;
				f === "mousedown" && r ? b.current = void 0 : o(r, !0) && m || e(t(v.select("open"), n.currentTarget, (e) => e === "click" || e === "mousedown" || e === "keydown" || e === "keyup"), n.nativeEvent, n.currentTarget, r);
			},
			onKeyDown() {
				b.current = void 0;
			}
		};
	}, [
		y,
		f,
		m,
		_,
		v,
		h,
		p,
		x,
		S,
		g
	]);
	return u.useMemo(() => d ? { reference: C } : i, [d, C]);
}
export { d as t };
