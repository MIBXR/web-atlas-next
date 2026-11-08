import { i as e, n as t, t as n } from "./jsx-runtime-C1t0izHF.js";
import { n as r } from "./dist-qnEEIXtT.js";
import { t as i } from "./Group-VeeQ5avm.js";
import { n as a } from "./Input-DWAXtMrJ.js";
import { r as o, t as s } from "./textfield-DBeG7ze6.js";
import { r as c, t as l } from "./compose-ClIOcrt6.js";
import { t as u } from "./label-Wq1WAbJ3.js";
import { t as d } from "./textfield-Drv1hMDu.js";
// node_modules/@gravity-ui/icons/esm/Envelope.js
var f = /* @__PURE__ */ e(t()), p = (e) => f.createElement("svg", Object.assign({
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	fill: "none",
	viewBox: "0 0 16 16"
}, e), f.createElement("path", {
	fill: "currentColor",
	fillRule: "evenodd",
	d: "M3.5 4h9c.25 0 .485.06.692.169L8.75 7.5a1.25 1.25 0 0 1-1.5 0L2.808 4.169C3.015 4.06 3.251 4 3.5 4M2.001 5.438 2 5.5v5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-5l-.001-.062L9.65 8.7a2.75 2.75 0 0 1-3.3 0zM.5 5.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z",
	clipRule: "evenodd"
})), m = r({
	defaultVariants: {
		fullWidth: !1,
		variant: "primary"
	},
	slots: {
		base: "input-group",
		input: "input-group__input",
		prefix: "input-group__prefix",
		suffix: "input-group__suffix"
	},
	variants: {
		fullWidth: {
			false: {},
			true: { base: "input-group--full-width" }
		},
		variant: {
			primary: { base: "input-group--primary" },
			secondary: { base: "input-group--secondary" }
		}
	}
}), h = n(), g = /*#__PURE__*/ (0, f.createContext)({}), _ = ({ children: e, className: t, fullWidth: n, onClick: r, variant: a, ...o }) => {
	let l = (0, f.use)(s), u = a ?? l?.variant, d = f.useRef(null), p = f.useMemo(() => m({
		fullWidth: n,
		variant: u
	}), [n, u]), _ = (e) => {
		let t = e.target, n = d.current?.querySelector("input");
		n && t !== n && !n.contains(t) && n.focus(), r?.(e);
	}, v = f.useMemo(() => ({ slots: p }), [p]);
	return /*#__PURE__*/ (0, h.jsx)(g, {
		value: v,
		children: /*#__PURE__*/ (0, h.jsx)(i, {
			...o,
			ref: d,
			className: c(t, p?.base()),
			"data-slot": "input-group",
			onClick: _,
			children: e
		})
	});
};
_.displayName = "HeroUI.InputGroup";
var v = ({ className: e, ...t }) => {
	let { slots: n } = (0, f.use)(g);
	return /*#__PURE__*/ (0, h.jsx)(a, {
		className: c(e, n?.input()),
		"data-slot": "input-group-input",
		...t
	});
};
v.displayName = "HeroUI.InputGroup.Input";
var y = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, f.use)(g);
	return /*#__PURE__*/ (0, h.jsx)("div", {
		className: l(r?.prefix, t),
		"data-slot": "input-group-prefix",
		...n,
		children: e
	});
};
y.displayName = "HeroUI.InputGroup.Prefix";
var b = ({ className: e, ...t }) => {
	let { slots: n } = (0, f.use)(g);
	return /*#__PURE__*/ (0, h.jsx)(o, {
		className: c(e, n?.input()),
		"data-slot": "input-group-textarea",
		...t
	});
};
b.displayName = "HeroUI.InputGroup.TextArea";
var x = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, f.use)(g);
	return /*#__PURE__*/ (0, h.jsx)("div", {
		className: l(r?.suffix, t),
		"data-slot": "input-group-suffix",
		...n,
		children: e
	});
};
x.displayName = "HeroUI.InputGroup.Suffix";
// node_modules/@heroui/react/dist/components/input-group/index.js
var S = Object.assign(_, {
	Root: _,
	Input: v,
	TextArea: b,
	Prefix: y,
	Suffix: x
});
// upstream/demos/en/input-group/default.tsx
function C() {
	return /* @__PURE__ */ (0, h.jsxs)(d, {
		className: "w-full max-w-[280px]",
		name: "email",
		children: [/* @__PURE__ */ (0, h.jsx)(u, { children: "Email address" }), /* @__PURE__ */ (0, h.jsxs)(S, { children: [/* @__PURE__ */ (0, h.jsx)(S.Prefix, { children: /* @__PURE__ */ (0, h.jsx)(p, { className: "size-4 text-muted" }) }), /* @__PURE__ */ (0, h.jsx)(S.Input, {
			className: "w-full max-w-[280px]",
			placeholder: "name@email.com"
		})] })]
	});
}
export { C as Default };
