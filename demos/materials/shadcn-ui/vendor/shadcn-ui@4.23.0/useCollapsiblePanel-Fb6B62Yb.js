import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./useControlled-BkmszdIY.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { l as i, u as a } from "./useRenderElement-Bc91YjHo.js";
import { t as o } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as s } from "./useBaseUiId-BwhhMxTY.js";
import { O as c, t as l, x as u } from "./createBaseUIEventDetails-DG51vPHx.js";
import { t as d } from "./useAnimationFrame-CMIvKrBf.js";
import { i as f, n as p, o as m, t as h } from "./useOpenChangeComplete-BfJk_bnM.js";
import { l as g } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as _ } from "./addEventListener-EiVbnOnq.js";
import { t as v } from "./useValueAsRef-0u0FW33N.js";
// node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs
var y = /* @__PURE__ */ e(t(), 1);
function b(e) {
	let { open: t, defaultOpen: i, onOpenChange: a, disabled: o } = e, [u, d] = n({
		controlled: t,
		default: i,
		name: "Collapsible",
		state: "open"
	}), { mounted: f, setMounted: p, transitionStatus: h } = m(u, !0, !0), g = s(), [_, v] = y.useState(), b = _ ?? g, x = r((e) => {
		let t = !u, n = l(c, e.nativeEvent);
		a(t, n), n.isCanceled || d(t);
	});
	return y.useMemo(() => ({
		disabled: o,
		handleTrigger: x,
		mounted: f,
		open: u,
		panelId: b,
		setMounted: p,
		setOpen: d,
		setPanelIdState: v,
		transitionStatus: h
	}), [
		o,
		x,
		f,
		u,
		b,
		p,
		d,
		v,
		h
	]);
}
// node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs
var x = /*#__PURE__*/ y.createContext(void 0);
function S() {
	let e = y.useContext(x);
	if (e === void 0) throw Error(a(15));
	return e;
}
// node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs
var C = function(e) {
	return e.open = "data-open", e.closed = "data-closed", e[e.startingStyle = f.startingStyle] = "startingStyle", e[e.endingStyle = f.endingStyle] = "endingStyle", e;
}({}), w = /*#__PURE__*/ function(e) {
	return e.panelOpen = "data-panel-open", e;
}({}), T = { [C.open]: "" }, E = { [C.closed]: "" }, D = { open(e) {
	return e ? { [w.panelOpen]: "" } : null;
} }, O = { open(e) {
	return e ? T : E;
} }, k = {
	height: void 0,
	width: void 0
};
function A(e) {
	let { externalRef: t, hiddenUntilFound: n, id: a, keepMounted: s, mounted: c, onOpenChange: f, open: m, setMounted: g, setOpen: b, transitionStatus: x } = e, S = y.useRef(null), w = y.useRef(null), [T, E] = y.useState(k), D = y.useRef(k), O = y.useRef(!1), A = y.useRef(m), N = y.useRef(!1), [I, L] = y.useState(!1), R = y.useRef(null), z = i(t, S), B = v({
		mounted: c,
		open: m
	}), V = p(S, !1, !1), H = !m && !c, U = I ? "idle" : x, W = m && (A.current || N.current), G = !m && c && w.current === "css-animation" && T.height === void 0 && T.width === void 0 ? D.current : T, K = n && H && w.current !== "css-animation", q = r((e, t = !0) => {
		t && (D.current = e), E(e);
	}), J = r(() => {
		R.current?.(), R.current = null;
	}), Y = r((e) => {
		J(), R.current = () => {
			R.current = null, e();
		};
	}), X = r(() => {
		m && c && w.current === "css-animation" && (N.current = !0);
	});
	o(() => {
		I && x !== "starting" && L(!1);
	}, [I, x]), y.useEffect(() => () => {
		X(), J();
	}, [X, J]), o(() => {
		let e = S.current;
		if (!e) return;
		!m && R.current && J();
		let t = M(e, W);
		if (w.current = t, m && x === "idle" && A.current && t === "css-animation") {
			D.current = j(e);
			return;
		}
		if (m && x === "starting") {
			let n = O.current;
			if (O.current = !1, t === "none") {
				q(j(e)), L(!0);
				return;
			}
			if (t === "css-transition") {
				let t = F(e);
				if (q(j(e)), !n) return t;
				let r = P(e, "transition-duration", "0s");
				return Y(r), L(!0), t;
			}
			if (t === "css-animation") {
				if (q(j(e)), !n) {
					P(e, "animation-name", "none")();
					return;
				}
				let t = P(e, "animation-name", "none"), r = P(e, "animation-duration", "0s");
				t(), Y(r), L(!0);
				return;
			}
		}
		if (!m && c && (x === "idle" || x === "starting")) {
			if (A.current = !1, N.current = !1, t === "none") {
				q(k, !1), g(!1);
				return;
			}
			q(j(e));
			return;
		}
		if (x !== "ending") return;
		if (t === "none") {
			g(!1);
			return;
		}
		let n = j(e);
		(n.height ?? 0) > 0 || (n.width ?? 0) > 0 ? (q(n), t === "css-animation" && P(e, "animation-name", "none")()) : g(!1);
	}, [
		c,
		m,
		J,
		q,
		g,
		Y,
		W,
		x
	]), h({
		enabled: m && c && U === "idle",
		open: !0,
		ref: S,
		onComplete() {
			m && q(k, !1);
		}
	}), y.useEffect(() => {
		if (m || !c || U !== "ending" || !S.current) return;
		let e = new AbortController(), t = -1;
		function n() {
			B.current.open || (g(!1), q(k, !1));
		}
		return t = d.request(() => {
			e.signal.aborted || V(n, e.signal);
		}), () => {
			d.cancel(t), e.abort();
		};
	}, [
		B,
		c,
		m,
		U,
		V,
		q,
		g
	]), o(() => {
		let e = S.current;
		e && n && H && e.setAttribute("hidden", "until-found");
	}, [H, n]), y.useEffect(function() {
		let e = S.current;
		if (!e) return;
		function t(e) {
			let t = l(u, e);
			f(!0, t), t.isCanceled || (O.current = !0, b(!0));
		}
		return _(e, "beforematch", t);
	}, [f, b]);
	let Z = s || n || c || m;
	return {
		height: G.height,
		props: {
			...K ? { [C.startingStyle]: "" } : void 0,
			hidden: H,
			id: a
		},
		ref: z,
		shouldPreventOpenAnimation: W,
		shouldRender: Z,
		transitionStatus: U,
		width: G.width
	};
}
function j(e) {
	return {
		height: e.scrollHeight,
		width: e.scrollWidth
	};
}
function M(e, t = !1) {
	let n = g(e).getComputedStyle(e), r = (n.animationName.split(",").map((e) => e.trim()).some((e) => e !== "" && e !== "none") || t) && N(n.animationDuration), i = N(n.transitionDuration);
	return r && i || i ? "css-transition" : r ? "css-animation" : "none";
}
function N(e) {
	return e.split(",").map((e) => e.trim()).some((e) => e !== "" && Number.parseFloat(e) > 0);
}
function P(e, t, n) {
	let r = e.style.getPropertyValue(t), i = e.style.getPropertyPriority(t);
	return e.style.setProperty(t, n), () => {
		r === "" ? e.style.removeProperty(t) : e.style.setProperty(t, r, i);
	};
}
function F(e) {
	let t = {
		"justify-content": e.style.justifyContent,
		"align-items": e.style.alignItems,
		"align-content": e.style.alignContent,
		"justify-items": e.style.justifyItems
	};
	Object.keys(t).forEach((t) => {
		e.style.setProperty(t, "initial", "important");
	});
	function n() {
		Object.entries(t).forEach(([t, n]) => {
			n === "" ? e.style.removeProperty(t) : e.style.setProperty(t, n);
		});
	}
	let r = d.request(n);
	return () => {
		d.cancel(r), n();
	};
}
export { S as a, x as i, O as n, b as o, D as r, A as t };
