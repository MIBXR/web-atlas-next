import { n as e, r as t, t as n } from "./avatar-fiWA5aWw.js";
import { n as r } from "./dist-qnEEIXtT.js";
import { i, n as a, t as o } from "./jsx-runtime-C1t0izHF.js";
import { t as s } from "./compose-ClIOcrt6.js";
import { t as c } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/avatar-group/avatar-group.styles.js
var l = r({
	defaultVariants: {
		isGrid: !1,
		overlap: "clip"
	},
	slots: {
		base: "avatar-group",
		count: "avatar-group__count"
	},
	variants: {
		isGrid: {
			false: {},
			true: { base: "avatar-group--grid" }
		},
		overlap: {
			clip: { base: "avatar-group--clip" },
			ring: { base: "avatar-group--ring" }
		}
	}
}), u = /* @__PURE__ */ i(a(), 1), d = o(), f = ({ children: e, className: r, color: i, size: a, variant: o, ...c }) => {
	let l = (0, u.use)(t), f = a ?? l.size, p = i ?? l.color, m = o ?? l.variant;
	return /*#__PURE__*/ (0, d.jsx)(n, {
		className: s(l.slots?.count, r),
		color: p,
		"data-slot": "avatar-group-count",
		size: f,
		variant: m,
		...c,
		children: /*#__PURE__*/ (0, d.jsx)(n.Fallback, { children: e })
	});
};
f.displayName = "HeroUI.AvatarGroup.Count";
var p = (e) => e.type === f, m = ({ children: n, className: r, color: i, isGrid: a = !1, max: o, overlap: s = "clip", size: m = "md", variant: h, ...g }) => {
	let _ = (0, u.useMemo)(() => l({
		isGrid: a,
		overlap: s
	}), [a, s]), v = (0, u.useMemo)(() => ({
		slots: _,
		size: m,
		color: i,
		variant: h
	}), [
		_,
		m,
		i,
		h
	]), y = [], b = [];
	for (let e of u.Children.toArray(n)) /*#__PURE__*/ (0, u.isValidElement)(e) && (p(e) ? b.push(e) : y.push(e));
	let x = o == null ? y : y.slice(0, Math.max(0, o)), S = o == null ? 0 : Math.max(0, y.length - x.length), C = x.map((t) => /*#__PURE__*/ u.cloneElement(t, { [e]: !0 })), w = b.length > 0 ? b : S > 0 ? /*#__PURE__*/ (0, d.jsxs)(f, { children: ["+", S] }) : null;
	return /*#__PURE__*/ (0, d.jsx)(t, {
		value: v,
		children: /*#__PURE__*/ (0, d.jsxs)(c.div, {
			className: _.base({ className: r }),
			"data-slot": "avatar-group",
			...g,
			children: [C, w]
		})
	});
};
m.displayName = "HeroUI.AvatarGroup";
// node_modules/@heroui/react/dist/components/avatar-group/index.js
var h = Object.assign(m, {
	Root: m,
	Count: f
}), g = [
	{
		id: 1,
		image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%23224462%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EA%3C%2Ftext%3E%3C%2Fsvg%3E",
		name: "John Doe"
	},
	{
		id: 2,
		image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%2353623e%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EB%3C%2Ftext%3E%3C%2Fsvg%3E",
		name: "Kate Wilson"
	},
	{
		id: 3,
		image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%23964b31%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3ED%3C%2Ftext%3E%3C%2Fsvg%3E",
		name: "Emily Chen"
	},
	{
		id: 4,
		image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%236a466e%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EC%3C%2Ftext%3E%3C%2Fsvg%3E",
		name: "Michael Brown"
	},
	{
		id: 5,
		image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%232a6159%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EE%3C%2Ftext%3E%3C%2Fsvg%3E",
		name: "Olivia Davis"
	}
];
function _() {
	return /* @__PURE__ */ (0, d.jsx)(h, { children: g.slice(0, 4).map((e) => /* @__PURE__ */ (0, d.jsxs)(n, { children: [/* @__PURE__ */ (0, d.jsx)(n.Image, {
		alt: e.name,
		src: e.image
	}), /* @__PURE__ */ (0, d.jsx)(n.Fallback, { children: e.name.split(" ").map((e) => e[0]).join("") })] }, e.id)) });
}
export { _ as Basic };
