import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./react-dom-BasjwewA.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { t as i } from "./useIsoLayoutEffect-B0B6th0o.js";
import { n as a, t as o } from "./useAnimationFrame-CMIvKrBf.js";
// node_modules/@base-ui/react/internals/useTransitionStatus.mjs
var s = /* @__PURE__ */ e(t(), 1);
function c(e, t = !1, n = !1) {
	let [r, a] = s.useState(e && t ? "idle" : void 0), [c, l] = s.useState(e);
	return e && !c && (l(!0), a("starting")), !e && c && r !== "ending" && !n && a("ending"), !e && !c && r === "ending" && a(void 0), i(() => {
		if (!e && c && r !== "ending" && n) {
			let e = o.request(() => {
				a("ending");
			});
			return () => {
				o.cancel(e);
			};
		}
	}, [
		e,
		c,
		r,
		n
	]), i(() => {
		if (!e || t) return;
		let n = o.request(() => {
			a(void 0);
		});
		return () => {
			o.cancel(n);
		};
	}, [t, e]), i(() => {
		if (!e || !t) return;
		e && c && r !== "idle" && a("starting");
		let n = o.request(() => {
			a("idle");
		});
		return () => {
			o.cancel(n);
		};
	}, [
		t,
		e,
		c,
		r
	]), {
		mounted: c,
		setMounted: l,
		transitionStatus: r
	};
}
// node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
var l = /* @__PURE__ */ e(n(), 1), u = /*#__PURE__*/ function(e) {
	return e.startingStyle = "data-starting-style", e.endingStyle = "data-ending-style", e;
}({}), d = { [u.startingStyle]: "" }, f = { [u.endingStyle]: "" }, p = { transitionStatus(e) {
	return e === "starting" ? d : e === "ending" ? f : null;
} };
// node_modules/@base-ui/react/utils/resolveRef.mjs
function m(e) {
	return e == null ? e : "current" in e ? e.current : e;
}
// node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
function h(e, t = !1, n = !0) {
	let i = a();
	return r((r, a = null) => {
		i.cancel();
		let o = m(e);
		if (o == null) return;
		let s = o, c = () => {
			l.flushSync(r);
		};
		if (typeof s.getAnimations != "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
			r();
			return;
		}
		function d() {
			Promise.all(s.getAnimations().map((e) => e.finished)).then(() => {
				a?.aborted || c();
			}).catch(() => {
				if (n) {
					a?.aborted || c();
					return;
				}
				let e = s.getAnimations();
				!a?.aborted && e.length > 0 && e.some((e) => e.pending || e.playState !== "finished") && d();
			});
		}
		if (t) {
			let e = u.startingStyle;
			if (!s.hasAttribute(e)) {
				i.request(d);
				return;
			}
			let t = new MutationObserver(() => {
				s.hasAttribute(e) || (t.disconnect(), d());
			});
			t.observe(s, {
				attributes: !0,
				attributeFilter: [e]
			}), a?.addEventListener("abort", () => t.disconnect(), { once: !0 });
		} else i.request(d);
	});
}
// node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
function g(e) {
	let { enabled: t = !0, open: n, ref: i, onComplete: a } = e, o = r(a), c = h(i, n, !1);
	s.useEffect(() => {
		if (!t) return;
		let e = new AbortController();
		return c(o, e.signal), () => {
			e.abort();
		};
	}, [
		t,
		n,
		o,
		c
	]);
}
export { p as a, u as i, h as n, c as o, m as r, g as t };
