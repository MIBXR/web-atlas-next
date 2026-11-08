import { n as e, r as t } from "./dist-qnEEIXtT.js";
import { i as n, n as r, t as i } from "./jsx-runtime-C1t0izHF.js";
// node_modules/@heroui/styles/dist/components/scroll-shadow/scroll-shadow.styles.js
var a = e({
	defaultVariants: {
		hideScrollBar: !1,
		orientation: "vertical",
		variant: "fade"
	},
	slots: { base: "scroll-shadow" },
	variants: {
		hideScrollBar: {
			false: {},
			true: { base: "scroll-shadow--hide-scrollbar" }
		},
		orientation: {
			horizontal: { base: "scroll-shadow--horizontal" },
			vertical: { base: "scroll-shadow--vertical" }
		},
		variant: { fade: { base: "scroll-shadow--fade" } }
	}
}), o = /* @__PURE__ */ n(r(), 1), s = globalThis?.document ? o.useLayoutEffect : o.useEffect, c = (e) => {
	let { containerRef: t, isEnabled: n, offset: r, onVisibilityChange: i, orientation: a, visibility: s } = e, c = (0, o.useRef)(i);
	(0, o.useEffect)(() => {
		c.current = i;
	}, [i]);
	let l = (0, o.useRef)(null), u = (0, o.useRef)(null), d = (0, o.useCallback)(() => {
		let e = t.current;
		if (!e) return;
		let n = a === "vertical", i = n ? e.scrollTop : Math.abs(e.scrollLeft), o = n ? e.scrollHeight : e.scrollWidth, s = n ? e.clientHeight : e.clientWidth, d = i > r, f = i + s + r < o - 1, p = l.current;
		p && p.hasScrollBefore === d && p.hasScrollAfter === f || (l.current = {
			hasScrollBefore: d,
			hasScrollAfter: f
		}, u.current !== null && cancelAnimationFrame(u.current), u.current = requestAnimationFrame(() => {
			u.current = null;
			let t = c.current;
			n ? d && f ? (e.dataset.topBottomScroll = "true", delete e.dataset.topScroll, delete e.dataset.bottomScroll, t?.("both")) : (e.dataset.topScroll = String(d), e.dataset.bottomScroll = String(f), delete e.dataset.topBottomScroll, t && t(d ? "top" : f ? "bottom" : "none")) : d && f ? (e.dataset.leftRightScroll = "true", delete e.dataset.leftScroll, delete e.dataset.rightScroll, t?.("both")) : (e.dataset.leftScroll = String(d), e.dataset.rightScroll = String(f), delete e.dataset.leftRightScroll, t && t(d ? "left" : f ? "right" : "none"));
		}));
	}, [
		t,
		a,
		r
	]);
	(0, o.useEffect)(() => {
		let e = t.current;
		if (!e || !n || s !== "auto") return;
		d(), e.addEventListener("scroll", d, { passive: !0 });
		let r = new ResizeObserver(d);
		r.observe(e);
		let i = new MutationObserver(d);
		return i.observe(e, {
			attributeFilter: ["class", "style"],
			attributes: !0,
			characterData: !0,
			childList: !0,
			subtree: !0
		}), () => {
			e.removeEventListener("scroll", d), r.disconnect(), i.disconnect(), u.current !== null && (cancelAnimationFrame(u.current), u.current = null), l.current = null;
		};
	}, [
		t,
		s,
		n,
		d
	]);
}, l = i(), u = ({ children: e, className: n, hideScrollBar: r = !1, isEnabled: i = !0, offset: u = 0, onVisibilityChange: d, orientation: f = "vertical", ref: p, size: m = 40, style: h, variant: g = "fade", visibility: _ = "auto", ...v }) => {
	let y = (0, o.useRef)(null);
	c({
		containerRef: y,
		isEnabled: i,
		offset: u,
		onVisibilityChange: d,
		orientation: f,
		visibility: _
	}), s(() => {
		let e = y.current;
		!e || _ === "auto" && i || (delete e.dataset.topScroll, delete e.dataset.bottomScroll, delete e.dataset.topBottomScroll, delete e.dataset.leftScroll, delete e.dataset.rightScroll, delete e.dataset.leftRightScroll, _ !== "auto" && (_ === "both" ? e.dataset[f === "vertical" ? "topBottomScroll" : "leftRightScroll"] = "true" : _ !== "none" && (e.dataset[`${_}Scroll`] = "true")));
	}, [
		_,
		f,
		i
	]);
	let b = (0, o.useMemo)(() => a({
		hideScrollBar: r,
		orientation: f,
		variant: g
	}), [
		f,
		r,
		g
	]), x = (0, o.useMemo)(() => b.base({ className: n }), [n, b]), S = {
		"--scroll-shadow-size": `${m}px`,
		"--scroll-shadow-offset": `${u}px`,
		...h
	}, C = (0, o.useMemo)(() => t(y, p), [y, p]);
	return /*#__PURE__*/ (0, l.jsx)("div", {
		ref: C,
		className: x,
		"data-orientation": f,
		"data-scroll-shadow-mode": i && _ === "auto" ? "auto" : "manual",
		"data-scroll-shadow-size": m,
		"data-slot": "scroll-shadow",
		style: S,
		...v,
		children: e
	});
};
u.displayName = "HeroUI.ScrollShadow";
// node_modules/@heroui/react/dist/components/scroll-shadow/index.js
var d = Object.assign(u, { Root: u });
export { d as t };
