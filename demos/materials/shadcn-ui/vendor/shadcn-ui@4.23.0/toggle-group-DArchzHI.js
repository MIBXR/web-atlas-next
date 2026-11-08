import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { i as n, n as r, r as i } from "./toggle-DyecHOaf.js";
import { t as a } from "./useStableCallback-BmDujACN.js";
import { t as o } from "./useControlled-BkmszdIY.js";
import { a as s, t as c, u as l } from "./useRenderElement-Bc91YjHo.js";
import { t as u } from "./CompositeRoot-BhZOjAjJ.js";
import { t as d } from "./ToolbarRootContext-Cn7bfUoC.js";
import { t as f } from "./jsx-runtime-lAxUcZjR.js";
import { t as p } from "./dist-DCi9UB7o.js";
// node_modules/@base-ui/react/toolbar/group/ToolbarGroupContext.mjs
var m = /* @__PURE__ */ e(t(), 1), h = /*#__PURE__*/ m.createContext(void 0);
function g(e) {
	let t = m.useContext(h);
	if (t === void 0 && !e) throw Error(l(68));
	return t;
}
// node_modules/@base-ui/react/toggle-group/ToggleGroupDataAttributes.mjs
var _ = /*#__PURE__*/ function(e) {
	return e.disabled = "data-disabled", e.orientation = "data-orientation", e.multiple = "data-multiple", e;
}({}), v = f(), y = { multiple(e) {
	return e ? { [_.multiple]: "" } : null;
} }, b = /*#__PURE__*/ m.forwardRef(function(e, t) {
	let { defaultValue: r, disabled: i = !1, loopFocus: l = !0, onValueChange: f, orientation: p = "horizontal", multiple: h = !1, value: _, className: b, render: x, style: S, ...C } = e, w = d(!0), T = g(!0), E = m.useMemo(() => _ !== void 0 || r !== void 0, [_, r]), D = (w?.disabled ?? !1) || (T?.disabled ?? !1) || i, [O, k] = o({
		controlled: _,
		default: _ === void 0 ? r ?? s : void 0,
		name: "ToggleGroup",
		state: "value"
	}), A = a((e, t, n) => {
		let r;
		h ? (r = O.slice(), t ? r.push(e) : r.splice(O.indexOf(e), 1)) : r = t ? [e] : [], f?.(r, n), n.isCanceled || k(r);
	}), j = {
		disabled: D,
		multiple: h,
		orientation: p
	}, M = m.useMemo(() => ({
		disabled: D,
		orientation: p,
		setGroupValue: A,
		value: O,
		isValueInitialized: E
	}), [
		D,
		p,
		A,
		O,
		E
	]), N = { role: "group" }, P = c("div", e, {
		enabled: !!w,
		state: j,
		ref: t,
		props: [N, C],
		stateAttributesMapping: y
	});
	return /*#__PURE__*/ (0, v.jsx)(n.Provider, {
		value: M,
		children: w ? P : /*#__PURE__*/ (0, v.jsx)(u, {
			render: x,
			className: b,
			style: S,
			state: j,
			refs: [t],
			props: [N, C],
			stateAttributesMapping: y,
			loopFocus: l,
			enableHomeAndEndKeys: !0,
			orientation: p
		})
	});
}), x = m.createContext({
	size: "default",
	variant: "default",
	spacing: 2,
	orientation: "horizontal"
});
function S({ className: e, variant: t, size: n, spacing: r = 2, orientation: i = "horizontal", children: a, ...o }) {
	return /* @__PURE__ */ (0, v.jsx)(b, {
		"data-slot": "toggle-group",
		"data-variant": t,
		"data-size": n,
		"data-spacing": r,
		"data-orientation": i,
		style: { "--gap": r },
		className: p("cn-toggle-group group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-vertical:flex-col data-vertical:items-stretch", e),
		...o,
		children: /* @__PURE__ */ (0, v.jsx)(x.Provider, {
			value: {
				variant: t,
				size: n,
				spacing: r,
				orientation: i
			},
			children: a
		})
	});
}
function C({ className: e, children: t, variant: n = "default", size: a = "default", ...o }) {
	let s = m.useContext(x);
	return /* @__PURE__ */ (0, v.jsx)(i, {
		"data-slot": "toggle-group-item",
		"data-variant": s.variant || n,
		"data-size": s.size || a,
		"data-spacing": s.spacing,
		className: p("cn-toggle-group-item shrink-0 focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t", r({
			variant: s.variant || n,
			size: s.size || a
		}), e),
		...o,
		children: t
	});
}
export { C as n, S as t };
