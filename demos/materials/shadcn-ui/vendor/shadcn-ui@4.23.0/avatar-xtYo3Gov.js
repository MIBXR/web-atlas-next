import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { s as i, t as a, u as o } from "./useRenderElement-Bc91YjHo.js";
import { t as s } from "./useIsoLayoutEffect-B0B6th0o.js";
import { a as c, o as l, t as u } from "./useOpenChangeComplete-BfJk_bnM.js";
import { t as d } from "./dist-DCi9UB7o.js";
import { n as f } from "./useTimeout-CP4j_cva.js";
// node_modules/@base-ui/react/avatar/root/AvatarRootContext.mjs
var p = /* @__PURE__ */ e(t(), 1), m = /*#__PURE__*/ p.createContext(void 0);
function h() {
	let e = p.useContext(m);
	if (e === void 0) throw Error(o(13));
	return e;
}
// node_modules/@base-ui/react/avatar/root/stateAttributesMapping.mjs
var g = { imageLoadingStatus: () => null }, _ = n(), v = /*#__PURE__*/ p.forwardRef(function(e, t) {
	let { className: n, render: r, style: i, ...o } = e, [s, c] = p.useState("idle"), l = { imageLoadingStatus: s }, u = p.useMemo(() => ({
		imageLoadingStatus: s,
		setImageLoadingStatus: c
	}), [s, c]), d = a("span", e, {
		state: l,
		ref: t,
		props: o,
		stateAttributesMapping: g
	});
	return /*#__PURE__*/ (0, _.jsx)(m.Provider, {
		value: u,
		children: d
	});
});
// node_modules/@base-ui/react/avatar/image/useImageLoadingStatus.mjs
function y(e, { referrerPolicy: t, crossOrigin: n, sizes: r, srcSet: a }) {
	let [o, c] = p.useState("idle");
	return s(() => {
		if (!e && !a) return c("error"), i;
		let o = !0, s = new window.Image(), l = (e) => () => {
			o && c(e);
		};
		return c("loading"), s.onload = l("loaded"), s.onerror = l("error"), t && (s.referrerPolicy = t), s.crossOrigin = n ?? null, r && (s.sizes = r), a && (s.srcset = a), e && (s.src = e), s.complete && c(s.naturalWidth > 0 ? "loaded" : "error"), () => {
			o = !1;
		};
	}, [
		e,
		a,
		r,
		n,
		t
	]), o;
}
// node_modules/@base-ui/react/avatar/image/AvatarImage.mjs
var b = {
	...g,
	...c
}, x = /*#__PURE__*/ p.forwardRef(function(e, t) {
	let { className: n, render: i, onLoadingStatusChange: o, style: c, ...d } = e, { setImageLoadingStatus: f } = h(), m = y(d.src, d), g = m === "loaded", { mounted: _, transitionStatus: v, setMounted: x } = l(g), S = p.useRef(null), C = r((e) => {
		o?.(e), f(e);
	});
	s(() => {
		m !== "idle" && C(m);
	}, [m, C]), s(() => () => f("idle"), [f]), u({
		open: g,
		ref: S,
		onComplete() {
			g || x(!1);
		}
	});
	let w = a("img", e, {
		state: {
			imageLoadingStatus: m,
			transitionStatus: v
		},
		ref: [t, S],
		props: d,
		stateAttributesMapping: b,
		enabled: _
	});
	return _ ? w : null;
}), S = /*#__PURE__*/ p.forwardRef(function(e, t) {
	let { className: n, render: r, delay: i, style: o, ...s } = e, { imageLoadingStatus: c } = h(), [l, u] = p.useState(i === void 0), d = f();
	return p.useEffect(() => (i === void 0 ? u(!0) : d.start(i, () => u(!0)), d.clear), [d, i]), a("span", e, {
		state: { imageLoadingStatus: c },
		ref: t,
		props: s,
		stateAttributesMapping: g,
		enabled: c !== "loaded" && (i === void 0 || l)
	});
});
// upstream/registry/bases/base/ui/avatar.tsx
function C({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ (0, _.jsx)(v, {
		"data-slot": "avatar",
		"data-size": t,
		className: d("cn-avatar group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten", e),
		...n
	});
}
function w({ className: e, ...t }) {
	return /* @__PURE__ */ (0, _.jsx)(x, {
		"data-slot": "avatar-image",
		className: d("cn-avatar-image aspect-square size-full object-cover", e),
		...t
	});
}
function T({ className: e, ...t }) {
	return /* @__PURE__ */ (0, _.jsx)(S, {
		"data-slot": "avatar-fallback",
		className: d("cn-avatar-fallback flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", e),
		...t
	});
}
function E({ className: e, ...t }) {
	return /* @__PURE__ */ (0, _.jsx)("span", {
		"data-slot": "avatar-badge",
		className: d("cn-avatar-badge absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", e),
		...t
	});
}
function D({ className: e, ...t }) {
	return /* @__PURE__ */ (0, _.jsx)("div", {
		"data-slot": "avatar-group",
		className: d("cn-avatar-group group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", e),
		...t
	});
}
function O({ className: e, ...t }) {
	return /* @__PURE__ */ (0, _.jsx)("div", {
		"data-slot": "avatar-group-count",
		className: d("cn-avatar-group-count relative flex shrink-0 items-center justify-center ring-2 ring-background", "", e),
		...t
	});
}
export { O as a, D as i, E as n, w as o, T as r, C as t };
