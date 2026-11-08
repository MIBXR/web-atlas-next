import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./dist-DCi9UB7o.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
import { t as i, u as a } from "./useRenderElement-Bc91YjHo.js";
import { t as o } from "./useValueAsRef-0u0FW33N.js";
import { t as s } from "./visuallyHidden-DvzvoEuP.js";
import { r as c, t as l } from "./valueToPercent-CG1Ng_RN.js";
// node_modules/@base-ui/react/progress/root/ProgressRootContext.mjs
var u = /* @__PURE__ */ e(t(), 1), d = /*#__PURE__*/ u.createContext(void 0);
function f() {
	let e = u.useContext(d);
	if (e === void 0) throw Error(a(51));
	return e;
}
// node_modules/@base-ui/react/progress/root/ProgressRootDataAttributes.mjs
var p = /*#__PURE__*/ function(e) {
	return e.complete = "data-complete", e.indeterminate = "data-indeterminate", e.progressing = "data-progressing", e;
}({}), m = { status(e) {
	return e === "progressing" ? { [p.progressing]: "" } : e === "complete" ? { [p.complete]: "" } : e === "indeterminate" ? { [p.indeterminate]: "" } : null;
} }, h = r();
function g(e, t) {
	return t == null ? "indeterminate progress" : e || `${t}%`;
}
var _ = /*#__PURE__*/ u.forwardRef(function(e, t) {
	let { format: n, getAriaValueText: r = g, locale: a, max: l = 100, min: f = 0, value: p, render: _, className: v, children: y, style: b, ...x } = e, [S, C] = u.useState(), w = o(n), T = "indeterminate";
	Number.isFinite(p) && (T = p === l ? "complete" : "progressing");
	let E = c(p, a, w.current), D = u.useMemo(() => ({ status: T }), [T]), O = {
		"aria-labelledby": S,
		"aria-valuemax": l,
		"aria-valuemin": f,
		"aria-valuenow": p ?? void 0,
		"aria-valuetext": r(E, p),
		role: "progressbar",
		children: /*#__PURE__*/ (0, h.jsxs)(u.Fragment, { children: [y, /*#__PURE__*/ (0, h.jsx)("span", {
			role: "presentation",
			style: s,
			children: "x"
		})] })
	}, k = u.useMemo(() => ({
		formattedValue: E,
		max: l,
		min: f,
		setLabelId: C,
		state: D,
		status: T,
		value: p
	}), [
		E,
		l,
		f,
		C,
		D,
		T,
		p
	]), A = i("div", e, {
		state: D,
		ref: t,
		props: [O, x],
		stateAttributesMapping: m
	});
	return /*#__PURE__*/ (0, h.jsx)(d.Provider, {
		value: k,
		children: A
	});
}), v = /*#__PURE__*/ u.forwardRef(function(e, t) {
	let { render: n, className: r, style: a, ...o } = e, { state: s } = f();
	return i("div", e, {
		state: s,
		ref: t,
		props: o,
		stateAttributesMapping: m
	});
}), y = /*#__PURE__*/ u.forwardRef(function(e, t) {
	let { render: n, className: r, style: a, ...o } = e, { max: s, min: c, value: u, state: d } = f(), p = Number.isFinite(u) && u !== null ? l(u, c, s) : null, h = p == null ? {} : {
		insetInlineStart: 0,
		height: "inherit",
		width: `${p}%`
	};
	return i("div", e, {
		state: d,
		ref: t,
		props: [{ style: h }, o],
		stateAttributesMapping: m
	});
});
// upstream/registry/bases/base/ui/progress.tsx
function b({ className: e, children: t, value: r, ...i }) {
	return /* @__PURE__ */ (0, h.jsxs)(_, {
		value: r,
		"data-slot": "progress",
		className: n("cn-progress-root flex flex-wrap gap-3", e),
		...i,
		children: [t, /* @__PURE__ */ (0, h.jsx)(x, { children: /* @__PURE__ */ (0, h.jsx)(S, {}) })]
	});
}
function x({ className: e, ...t }) {
	return /* @__PURE__ */ (0, h.jsx)(v, {
		className: n("cn-progress-track relative flex w-full items-center overflow-x-hidden", e),
		"data-slot": "progress-track",
		...t
	});
}
function S({ className: e, ...t }) {
	return /* @__PURE__ */ (0, h.jsx)(y, {
		"data-slot": "progress-indicator",
		className: n("cn-progress-indicator h-full transition-all", e),
		...t
	});
}
// upstream/examples/base/progress-demo.tsx
function C() {
	let [e, t] = u.useState(13);
	return u.useEffect(() => {
		let e = setTimeout(() => t(66), 500);
		return () => clearTimeout(e);
	}, []), /* @__PURE__ */ (0, h.jsx)(b, {
		value: e,
		className: "w-[60%]"
	});
}
export { C as default };
