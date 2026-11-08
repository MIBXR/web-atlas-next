import { i as e, n as t, t as n } from "./jsx-runtime-C1t0izHF.js";
import { t as r } from "./button-Dd5iSf4T.js";
import { t as i } from "./description-lMFGrfj6.js";
import { t as a } from "./field-error-CdzvyH0q.js";
import { n as o } from "./dist-qnEEIXtT.js";
import { t as s } from "./utils-UBVJ5JR_.js";
import { t as c } from "./Button-Cnex0dS4.js";
import { a as l } from "./Checkbox-DJXTS0dp.js";
import { n as u } from "./Link-BxYXBw9T.js";
import { n as d } from "./RadioGroup-CswDq2f0.js";
import { s as f } from "./Slider-fuumTqJf.js";
import { t as p } from "./ToggleButton-DTyULKri.js";
import { t as m } from "./ToggleButtonGroup-BtCWMJmh.js";
import { t as h } from "./compose-ClIOcrt6.js";
import { t as g } from "./dom-CdwaDRL5.js";
import { t as _ } from "./form-NXqmuFkk.js";
import { t as v } from "./input-zkcgZ6lD.js";
import { t as y } from "./label-Wq1WAbJ3.js";
import { t as b } from "./textarea-B_6YTdoL.js";
import { t as x } from "./textfield-Drv1hMDu.js";
// node_modules/@gravity-ui/icons/esm/FloppyDisk.js
var S = /* @__PURE__ */ e(t()), C = (e) => S.createElement("svg", Object.assign({
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	fill: "none",
	viewBox: "0 0 16 16"
}, e), S.createElement("path", {
	fill: "currentColor",
	fillRule: "evenodd",
	d: "M3 11.5A1.5 1.5 0 0 0 4.5 13v-2.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V13a1.5 1.5 0 0 0 1.5-1.5V6.036a1 1 0 0 0-.293-.708l-2.035-2.035A1 1 0 0 0 9.964 3H6v1a.5.5 0 0 0 .5.5h3a.75.75 0 0 1 0 1.5h-3a2 2 0 0 1-2-2V3A1.5 1.5 0 0 0 3 4.5zm-1.5 0a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V6.036a2.5 2.5 0 0 0-.732-1.768l-2.036-2.036A2.5 2.5 0 0 0 9.964 1.5H4.5a3 3 0 0 0-3 3zm8.5-1V13H6v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5",
	clipRule: "evenodd"
})), w = o({ slots: {
	actions: "fieldset__actions",
	base: "fieldset",
	description: "fieldset__description",
	fieldGroup: "fieldset__field-group",
	legend: "fieldset__legend"
} }), T = n(), E = /*#__PURE__*/ (0, S.createContext)({}), D = ({ children: e, className: t, ...n }) => {
	let r = S.useMemo(() => w({}), []), i = "disabled" in n && n.disabled === !0, a = S.useMemo(() => ({ slots: r }), [r]);
	return /*#__PURE__*/ (0, T.jsx)(E, {
		value: a,
		children: /*#__PURE__*/ (0, T.jsx)(g.fieldset, {
			className: r?.base({ className: t }),
			"data-disabled": i || void 0,
			"data-slot": "fieldset",
			...n,
			children: i ? /*#__PURE__*/ (0, T.jsx)(s, {
				values: [
					[c, { isDisabled: !0 }],
					[l, { isDisabled: !0 }],
					[u, { isDisabled: !0 }],
					[d, { isDisabled: !0 }],
					[f, { isDisabled: !0 }],
					[p, { isDisabled: !0 }],
					[m, { isDisabled: !0 }]
				],
				children: e
			}) : e
		})
	});
};
D.displayName = "HeroUI.Fieldset";
var O = ({ className: e, ...t }) => {
	let { slots: n } = (0, S.use)(E);
	return /*#__PURE__*/ (0, T.jsx)(g.legend, {
		className: h(n?.legend, e),
		"data-slot": "fieldset-legend",
		...t
	});
};
O.displayName = "HeroUI.Fieldset.Legend";
var k = ({ className: e, ...t }) => {
	let { slots: n } = (0, S.use)(E);
	return /*#__PURE__*/ (0, T.jsx)(g.div, {
		className: h(n?.fieldGroup, e),
		"data-slot": "fieldset-field-group",
		...t
	});
};
k.displayName = "HeroUI.Fieldset.Group";
var A = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, S.use)(E);
	return /*#__PURE__*/ (0, T.jsx)(g.div, {
		className: h(r?.actions, t),
		"data-slot": "fieldset-actions",
		...n,
		children: e
	});
};
A.displayName = "HeroUI.Fieldset.Actions";
// node_modules/@heroui/react/dist/components/fieldset/index.js
var j = Object.assign(D, {
	Root: D,
	Legend: O,
	Group: k,
	Actions: A
});
// upstream/demos/en/fieldset/basic.tsx
function M() {
	return /* @__PURE__ */ (0, T.jsx)(_, {
		className: "w-full max-w-96",
		onSubmit: (e) => {
			e.preventDefault();
			let t = new FormData(e.currentTarget), n = {};
			t.forEach((e, t) => {
				n[t] = e.toString();
			}), alert("Form submitted successfully!");
		},
		children: /* @__PURE__ */ (0, T.jsxs)(j, { children: [
			/* @__PURE__ */ (0, T.jsx)(j.Legend, { children: "Profile Settings" }),
			/* @__PURE__ */ (0, T.jsx)(i, { children: "Update your profile information." }),
			/* @__PURE__ */ (0, T.jsxs)(k, { children: [
				/* @__PURE__ */ (0, T.jsxs)(x, {
					isRequired: !0,
					name: "name",
					validate: (e) => e.length < 3 ? "Name must be at least 3 characters" : null,
					children: [
						/* @__PURE__ */ (0, T.jsx)(y, { children: "Name" }),
						/* @__PURE__ */ (0, T.jsx)(v, { placeholder: "John Doe" }),
						/* @__PURE__ */ (0, T.jsx)(a, {})
					]
				}),
				/* @__PURE__ */ (0, T.jsxs)(x, {
					isRequired: !0,
					name: "email",
					type: "email",
					children: [
						/* @__PURE__ */ (0, T.jsx)(y, { children: "Email" }),
						/* @__PURE__ */ (0, T.jsx)(v, { placeholder: "john@example.com" }),
						/* @__PURE__ */ (0, T.jsx)(a, {})
					]
				}),
				/* @__PURE__ */ (0, T.jsxs)(x, {
					isRequired: !0,
					name: "bio",
					validate: (e) => e.length < 10 ? "Bio must be at least 10 characters" : null,
					children: [
						/* @__PURE__ */ (0, T.jsx)(y, { children: "Bio" }),
						/* @__PURE__ */ (0, T.jsx)(b, { placeholder: "Tell us about yourself..." }),
						/* @__PURE__ */ (0, T.jsx)(i, { children: "Minimum 10 characters" }),
						/* @__PURE__ */ (0, T.jsx)(a, {})
					]
				})
			] }),
			/* @__PURE__ */ (0, T.jsxs)(j.Actions, { children: [/* @__PURE__ */ (0, T.jsxs)(r, {
				type: "submit",
				children: [/* @__PURE__ */ (0, T.jsx)(C, {}), "Save changes"]
			}), /* @__PURE__ */ (0, T.jsx)(r, {
				type: "reset",
				variant: "secondary",
				children: "Cancel"
			})] })
		] })
	});
}
export { M as Basic };
