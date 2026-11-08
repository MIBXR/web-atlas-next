import { i as e, n as t, r as n, t as r } from "./toggle-button-group-asUQ3QZ2.js";
import { i, n as a, t as o } from "./jsx-runtime-C1t0izHF.js";
import { t as s } from "./button-Dd5iSf4T.js";
import { t as c } from "./button-group-5jfuJn2m.js";
import { t as l } from "./separator-BSPhQk7w.js";
import { t as u } from "./toggle-button-Bw71pmx-.js";
import { n as d } from "./dist-qnEEIXtT.js";
import { n as f } from "./Separator-CZCR6UjL.js";
import { a as p, t as m } from "./ToggleButtonGroup-BtCWMJmh.js";
import { d as h, n as g, r as _, s as v } from "./utils-UBVJ5JR_.js";
import { t as y } from "./filterDOMProps-CJYy6efO.js";
import { r as b } from "./compose-ClIOcrt6.js";
// node_modules/@gravity-ui/icons/esm/Copy.js
var x = /* @__PURE__ */ i(a()), S = (e) => x.createElement("svg", Object.assign({
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	fill: "none",
	viewBox: "0 0 16 16"
}, e), x.createElement("path", {
	fill: "currentColor",
	fillRule: "evenodd",
	d: "M12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5M11 11h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3zM4 6.5h4A1.5 1.5 0 0 1 9.5 8v4A1.5 1.5 0 0 1 8 13.5H4A1.5 1.5 0 0 1 2.5 12V8A1.5 1.5 0 0 1 4 6.5",
	clipRule: "evenodd"
})), C = (e) => x.createElement("svg", Object.assign({
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	fill: "none",
	viewBox: "0 0 16 16"
}, e), x.createElement("path", {
	fill: "currentColor",
	fillRule: "evenodd",
	d: "M4.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-3-1.5a3 3 0 0 0 4.524 2.585L6.939 8l-.915.915a3 3 0 1 0 1.06 1.06L8.122 8.94l5.501 3.209a.75.75 0 1 0 .756-1.296L9.488 8l4.89-2.852a.75.75 0 0 0-.756-1.296l-5.5 3.209-1.037-1.037A3 3 0 1 0 1.5 4.5m3 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3",
	clipRule: "evenodd"
})), w = d({
	base: "toolbar",
	defaultVariants: {
		isAttached: !1,
		orientation: "horizontal"
	},
	variants: {
		isAttached: { true: "toolbar--attached" },
		orientation: {
			horizontal: "toolbar--horizontal",
			vertical: "toolbar--vertical"
		}
	}
}), T = /*#__PURE__*/ (0, x.createContext)({}), E = /*#__PURE__*/ (0, x.forwardRef)(function(e, t) {
	[e, t] = g(e, t, T);
	let { toolbarProps: n } = p(e, t), r = _({
		...e,
		values: { orientation: e.orientation || "horizontal" },
		defaultClassName: "react-aria-Toolbar"
	}), i = y(e, { global: !0 });
	return delete i.id, /*#__PURE__*/ x.createElement(v.div, {
		...h(i, r, n),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || "horizontal"
	}, r.children);
}), D = o(), O = ({ children: e, className: t, isAttached: n, orientation: r = "horizontal", ...i }) => {
	let a = x.useMemo(() => w({
		isAttached: n,
		orientation: r
	}), [n, r]);
	return /*#__PURE__*/ (0, D.jsx)(m.Provider, {
		value: { orientation: r },
		children: /*#__PURE__*/ (0, D.jsx)(f.Provider, {
			value: { orientation: r === "horizontal" ? "vertical" : "horizontal" },
			children: /*#__PURE__*/ (0, D.jsx)(E, {
				className: b(t, a),
				"data-slot": "toolbar",
				orientation: r,
				...i,
				children: e
			})
		})
	});
};
O.displayName = "HeroUI.Toolbar";
// node_modules/@heroui/react/dist/components/toolbar/index.js
var k = Object.assign(O, { Root: O });
// upstream/demos/en/toolbar/basic.tsx
function A() {
	return /* @__PURE__ */ (0, D.jsxs)(k, {
		"aria-label": "Text formatting",
		children: [
			/* @__PURE__ */ (0, D.jsxs)(r, {
				"aria-label": "Text style",
				selectionMode: "multiple",
				children: [
					/* @__PURE__ */ (0, D.jsx)(u, {
						isIconOnly: !0,
						"aria-label": "Bold",
						id: "bold",
						children: /* @__PURE__ */ (0, D.jsx)(e, {})
					}),
					/* @__PURE__ */ (0, D.jsxs)(u, {
						isIconOnly: !0,
						"aria-label": "Italic",
						id: "italic",
						children: [/* @__PURE__ */ (0, D.jsx)(r.Separator, {}), /* @__PURE__ */ (0, D.jsx)(n, {})]
					}),
					/* @__PURE__ */ (0, D.jsxs)(u, {
						isIconOnly: !0,
						"aria-label": "Underline",
						id: "underline",
						children: [/* @__PURE__ */ (0, D.jsx)(r.Separator, {}), /* @__PURE__ */ (0, D.jsx)(t, {})]
					})
				]
			}),
			/* @__PURE__ */ (0, D.jsx)(l, {}),
			/* @__PURE__ */ (0, D.jsxs)(c, {
				variant: "tertiary",
				children: [/* @__PURE__ */ (0, D.jsx)(s, {
					isIconOnly: !0,
					"aria-label": "Copy",
					children: /* @__PURE__ */ (0, D.jsx)(S, {})
				}), /* @__PURE__ */ (0, D.jsxs)(s, {
					isIconOnly: !0,
					"aria-label": "Cut",
					children: [/* @__PURE__ */ (0, D.jsx)(c.Separator, {}), /* @__PURE__ */ (0, D.jsx)(C, {})]
				})]
			})
		]
	});
}
export { A as Basic };
