import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { d as n } from "./useRenderElement-Bc91YjHo.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { t as i } from "./useIsoLayoutEffect-B0B6th0o.js";
import { r as a } from "./useCompositeListItem-BEyYtHBh.js";
import { t as o } from "./jsx-runtime-lAxUcZjR.js";
// node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
var s = /* @__PURE__ */ e(t(), 1), c = o();
function l(e) {
	let { children: t, elementsRef: o, labelsRef: l, onMapChange: p } = e, m = r(p), h = s.useRef(0), g = n(d).current, _ = n(u).current, [v, y] = s.useState(0), b = s.useRef(v), x = r((e, t) => {
		_.set(e, t ?? null), b.current += 1, y(b.current);
	}), S = r((e) => {
		_.delete(e), b.current += 1, y(b.current);
	}), C = s.useMemo(() => {
		let e = /* @__PURE__ */ new Map();
		return Array.from(_.keys()).filter((e) => e.isConnected).sort(f).forEach((t, n) => {
			let r = _.get(t) ?? {};
			e.set(t, {
				...r,
				index: n
			});
		}), e;
	}, [_, v]);
	i(() => {
		if (typeof MutationObserver != "function" || C.size === 0) return;
		let e = new MutationObserver((e) => {
			let t = /* @__PURE__ */ new Set(), n = (e) => t.has(e) ? t.delete(e) : t.add(e);
			e.forEach((e) => {
				e.removedNodes.forEach(n), e.addedNodes.forEach(n);
			}), t.size === 0 && (b.current += 1, y(b.current));
		});
		return C.forEach((t, n) => {
			n.parentElement && e.observe(n.parentElement, { childList: !0 });
		}), () => {
			e.disconnect();
		};
	}, [C]), i(() => {
		b.current === v && (o.current.length !== C.size && (o.current.length = C.size), l && l.current.length !== C.size && (l.current.length = C.size), h.current = C.size), m(C);
	}, [
		m,
		C,
		o,
		l,
		v
	]), i(() => () => {
		o.current = [];
	}, [o]), i(() => () => {
		l && (l.current = []);
	}, [l]);
	let w = r((e) => (g.add(e), () => {
		g.delete(e);
	}));
	i(() => {
		g.forEach((e) => e(C));
	}, [g, C]);
	let T = s.useMemo(() => ({
		register: x,
		unregister: S,
		subscribeMapChange: w,
		elementsRef: o,
		labelsRef: l,
		nextIndexRef: h
	}), [
		x,
		S,
		w,
		o,
		l,
		h
	]);
	return /*#__PURE__*/ (0, c.jsx)(a.Provider, {
		value: T,
		children: t
	});
}
function u() {
	return /* @__PURE__ */ new Map();
}
function d() {
	return /* @__PURE__ */ new Set();
}
function f(e, t) {
	let n = e.compareDocumentPosition(t);
	return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
export { l as t };
