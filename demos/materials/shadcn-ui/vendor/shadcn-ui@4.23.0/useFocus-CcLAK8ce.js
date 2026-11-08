import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./addEventListener-EiVbnOnq.js";
import { A as r, W as i } from "./popupStateMapping-CSyRbb7j.js";
import { t as a } from "./owner-C-FapX6G.js";
import { n as o } from "./useTimeout-CP4j_cva.js";
import { L as s } from "./composite-BYPOq3H3.js";
import { n as c } from "./engine-DPfrNvZF.js";
import { d as l, f as u, l as d } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { a as f, c as p, s as m } from "./element-DbCN1dg9.js";
import { n as h, r as g, t as _ } from "./shadowDom-D66trjQm.js";
import { E as v, t as y } from "./createBaseUIEventDetails-DG51vPHx.js";
// node_modules/@base-ui/react/floating-ui-react/hooks/useFocus.mjs
var b = /* @__PURE__ */ e(t(), 1), x = s && c;
function S(e, t = {}) {
	let { enabled: s = !0, delay: c } = t, S = "rootStore" in e ? e.rootStore : e, { events: C, dataRef: w } = S.context, T = b.useRef(!1), E = b.useRef(null), D = b.useRef(!0), O = o();
	b.useEffect(() => {
		let e = S.select("domReferenceElement");
		if (!s) return;
		let t = d(e);
		function r() {
			let e = S.select("domReferenceElement");
			!S.select("open") && u(e) && e === _(a(e)) && (T.current = !0);
		}
		function o() {
			D.current = !0;
		}
		function c() {
			D.current = !1;
		}
		return i(n(t, "blur", r), x && n(t, "keydown", o, !0), x && n(t, "pointerdown", c, !0));
	}, [S, s]), b.useEffect(() => {
		if (!s) return;
		function e(e) {
			if (e.reason === "trigger-press" || e.reason === "escape-key") {
				let e = S.select("domReferenceElement");
				l(e) && (E.current = e, T.current = !0);
			}
		}
		return C.on("openchange", e), () => {
			C.off("openchange", e);
		};
	}, [
		C,
		s,
		S
	]);
	let k = b.useMemo(() => {
		function e() {
			T.current = !1, E.current = null;
		}
		return {
			onMouseLeave() {
				e();
			},
			onFocus(t) {
				let n = t.currentTarget;
				if (T.current) {
					if (E.current === n) return;
					e();
				}
				let r = g(t.nativeEvent);
				if (l(r)) {
					if (x && !t.relatedTarget) {
						if (!D.current && !m(r)) return;
					} else if (!p(r)) return;
				}
				let i = f(t.relatedTarget, S.context.triggerElements), { nativeEvent: a, currentTarget: o } = t, s = typeof c == "function" ? c() : c;
				S.select("open") && i || s === 0 || s === void 0 ? S.setOpen(!0, y(v, a, o)) : O.start(s, () => {
					T.current || S.setOpen(!0, y(v, a, o));
				});
			},
			onBlur(t) {
				e();
				let n = t.relatedTarget, i = t.nativeEvent, o = l(n) && n.hasAttribute(r("focus-guard")) && n.getAttribute("data-type") === "outside";
				O.start(0, () => {
					let e = S.select("domReferenceElement"), t = _(a(e));
					!n && t === e || h(w.current.floatingContext?.refs.floating.current, t) || h(e, t) || o || f(n ?? t, S.context.triggerElements) || S.setOpen(!1, y(v, i));
				});
			}
		};
	}, [
		w,
		c,
		S,
		O
	]);
	return b.useMemo(() => s ? {
		reference: k,
		trigger: k
	} : {}, [s, k]);
}
export { S as t };
