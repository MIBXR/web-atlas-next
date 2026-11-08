import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./dist-DCi9UB7o.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./react-D9cguz4v.js";
// node_modules/react-resizable-panels/dist/react-resizable-panels.js
var i = n(), a = /* @__PURE__ */ e(r(), 1);
function o(e, t = "Assertion error") {
	if (!e) throw Error(t);
}
function s({ group: e }) {
	let { orientation: t, panels: n } = e;
	return n.reduce((e, n) => (e += t === "horizontal" ? n.element.offsetWidth : n.element.offsetHeight, e), 0);
}
function c(e, t) {
	return Array.from(t).sort(e === "horizontal" ? l : u);
}
function l(e, t) {
	let n = e.element.offsetLeft - t.element.offsetLeft;
	return n === 0 ? e.element.offsetWidth - t.element.offsetWidth : n;
}
function u(e, t) {
	let n = e.element.offsetTop - t.element.offsetTop;
	return n === 0 ? e.element.offsetHeight - t.element.offsetHeight : n;
}
function d(e) {
	return typeof e == "object" && !!e && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function f(e, t) {
	return {
		x: e.x >= t.left && e.x <= t.right ? 0 : Math.min(Math.abs(e.x - t.left), Math.abs(e.x - t.right)),
		y: e.y >= t.top && e.y <= t.bottom ? 0 : Math.min(Math.abs(e.y - t.top), Math.abs(e.y - t.bottom))
	};
}
function p({ orientation: e, rects: t, targetRect: n }) {
	let r = {
		x: n.x + n.width / 2,
		y: n.y + n.height / 2
	}, i, a = Number.MAX_VALUE;
	for (let n of t) {
		let { x: t, y: o } = f(r, n), s = e === "horizontal" ? t : o;
		s < a && (a = s, i = n);
	}
	return o(i, "No rect found"), i;
}
var m;
function h() {
	return m === void 0 && (m = typeof matchMedia == "function" && !!matchMedia("(pointer:coarse)").matches), m;
}
function g(e) {
	let { element: t, orientation: n, panels: r, separators: i } = e, a = c(n, Array.from(t.children).filter(d).map((e) => ({ element: e }))).map(({ element: e }) => e), o = [], l = !1, u, f = [];
	for (let t of a) if (t.hasAttribute("data-panel")) {
		let i = r.find((e) => e.element === t);
		if (i) {
			if (u) {
				let r = u.element.getBoundingClientRect(), a = t.getBoundingClientRect(), c;
				if (l) {
					let e = n === "horizontal" ? new DOMRect(r.right, r.top, 0, r.height) : new DOMRect(r.left, r.bottom, r.width, 0), t = n === "horizontal" ? new DOMRect(a.left, a.top, 0, a.height) : new DOMRect(a.left, a.top, a.width, 0);
					switch (f.length) {
						case 0:
							c = [e, t];
							break;
						case 1: {
							let i = f[0];
							c = [i, p({
								orientation: n,
								rects: [r, a],
								targetRect: i.element.getBoundingClientRect()
							}) === r ? t : e];
							break;
						}
						default: c = f;
					}
				} else c = f.length ? f : [n === "horizontal" ? new DOMRect(r.right, a.top, a.left - r.right, a.height) : new DOMRect(a.left, r.bottom, a.width, a.top - r.bottom)];
				for (let t of c) {
					let n = "width" in t ? t : t.element.getBoundingClientRect(), r = h() ? e.resizeTargetMinimumSize.coarse : e.resizeTargetMinimumSize.fine;
					if (n.width < r) {
						let e = r - n.width;
						n = new DOMRect(n.x - e / 2, n.y, n.width + e, n.height);
					}
					if (n.height < r) {
						let e = r - n.height;
						n = new DOMRect(n.x, n.y - e / 2, n.width, n.height + e);
					}
					o.push({
						group: e,
						groupSize: s({ group: e }),
						panels: [u, i],
						separator: "width" in t ? void 0 : t,
						rect: n
					});
				}
			}
			l = !1, u = i, f = [];
		}
	} else if (t.hasAttribute("data-separator")) {
		let e = i.find((e) => e.element === t);
		e ? f.push(e) : (u = void 0, f = []);
	} else l = !0;
	return o;
}
function _(e, t) {
	let n = getComputedStyle(e);
	return t * parseFloat(n.fontSize);
}
function v(e, t) {
	let n = getComputedStyle(e.ownerDocument.body);
	return t * parseFloat(n.fontSize);
}
function y(e) {
	return e / 100 * window.innerHeight;
}
function b(e) {
	return e / 100 * window.innerWidth;
}
function x(e) {
	switch (typeof e) {
		case "number": return [e, "px"];
		case "string": {
			let t = parseFloat(e);
			return e.endsWith("%") ? [t, "%"] : e.endsWith("px") ? [t, "px"] : e.endsWith("rem") ? [t, "rem"] : e.endsWith("em") ? [t, "em"] : e.endsWith("vh") ? [t, "vh"] : e.endsWith("vw") ? [t, "vw"] : [t, "%"];
		}
	}
}
function S({ groupSize: e, panelElement: t, styleProp: n }) {
	let r, [i, a] = x(n);
	switch (a) {
		case "%":
			r = i / 100 * e;
			break;
		case "px":
			r = i;
			break;
		case "rem":
			r = v(t, i);
			break;
		case "em":
			r = _(t, i);
			break;
		case "vh":
			r = y(i);
			break;
		case "vw": r = b(i);
	}
	return r;
}
function C(e) {
	return parseFloat(e.toFixed(3));
}
function w(e) {
	let { panels: t } = e, n = s({ group: e });
	return n === 0 ? t.map((e) => ({
		collapsedSize: 0,
		collapsible: e.panelConstraints.collapsible === !0,
		defaultSize: void 0,
		minSize: 0,
		maxSize: 100,
		panelId: e.id
	})) : t.map((e) => {
		let { element: t, panelConstraints: r } = e, i = 0;
		r.collapsedSize !== void 0 && (i = C(S({
			groupSize: n,
			panelElement: t,
			styleProp: r.collapsedSize
		}) / n * 100));
		let a;
		r.defaultSize !== void 0 && (a = C(S({
			groupSize: n,
			panelElement: t,
			styleProp: r.defaultSize
		}) / n * 100));
		let o = 0;
		r.minSize !== void 0 && (o = C(S({
			groupSize: n,
			panelElement: t,
			styleProp: r.minSize
		}) / n * 100));
		let s = 100;
		return r.maxSize !== void 0 && (s = C(S({
			groupSize: n,
			panelElement: t,
			styleProp: r.maxSize
		}) / n * 100)), {
			collapsedSize: i,
			collapsible: r.collapsible === !0,
			defaultSize: a,
			minSize: o,
			maxSize: s,
			panelId: e.id
		};
	});
}
var T = class {
	#e = {};
	addListener(e, t) {
		let n = this.#e[e];
		return n === void 0 ? this.#e[e] = [t] : n.includes(t) || n.push(t), () => {
			this.removeListener(e, t);
		};
	}
	emit(e, t) {
		let n = this.#e[e];
		if (n !== void 0) {
			if (n.length === 1) n[0].call(null, t);
			else {
				let e = !1, r = null, i = Array.from(n);
				for (let n = 0; n < i.length; n++) {
					let a = i[n];
					try {
						a.call(null, t);
					} catch (t) {
						r === null && (e = !0, r = t);
					}
				}
				if (e) throw r;
			}
		}
	}
	removeAllListeners() {
		this.#e = {};
	}
	removeListener(e, t) {
		let n = this.#e[e];
		if (n !== void 0) {
			let e = n.indexOf(t);
			e >= 0 && n.splice(e, 1);
		}
	}
};
function E(e, t, n = 0) {
	return Math.abs(C(e) - C(t)) <= n;
}
var D = {
	cursorFlags: 0,
	interactionState: { state: "inactive" },
	mountedGroups: /* @__PURE__ */ new Map()
}, O = new T();
function k() {
	return D;
}
function A(e) {
	let t = typeof e == "function" ? e(D) : e;
	if (D === t) return D;
	let n = D;
	return D = {
		...D,
		...t
	}, t.cursorFlags !== void 0 && O.emit("cursorFlagsChange", D.cursorFlags), t.interactionState !== void 0 && O.emit("interactionStateChange", D.interactionState), t.mountedGroups !== void 0 && (D.mountedGroups.forEach((e, t) => {
		e.derivedPanelConstraints.forEach((r) => {
			if (r.collapsible) {
				let { layout: i } = n.mountedGroups.get(t) ?? {};
				if (i) {
					let n = E(r.collapsedSize, e.layout[r.panelId]), a = E(r.collapsedSize, i[r.panelId]);
					n && !a && (t.inMemoryLastExpandedPanelSizes[r.panelId] = i[r.panelId]);
				}
			}
		});
	}), O.emit("mountedGroupsChange", D.mountedGroups)), D;
}
function j(e, t, n) {
	let r, i = {
		x: 1 / 0,
		y: 1 / 0
	};
	for (let a of t) {
		let t = f(n, a.rect);
		switch (e) {
			case "horizontal":
				t.x <= i.x && (r = a, i = t);
				break;
			case "vertical": t.y <= i.y && (r = a, i = t);
		}
	}
	return r ? {
		distance: i,
		hitRegion: r
	} : void 0;
}
function ee(e) {
	return typeof e == "object" && !!e && "nodeType" in e && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
function te(e, t) {
	if (e === t) throw Error("Cannot compare node with itself");
	let n = {
		a: oe(e),
		b: oe(t)
	}, r;
	for (; n.a.at(-1) === n.b.at(-1);) r = n.a.pop(), n.b.pop();
	o(r, "Stacking order can only be calculated for elements with a common ancestor");
	let i = {
		a: M(ae(n.a)),
		b: M(ae(n.b))
	};
	if (i.a === i.b) {
		let e = r.childNodes, t = {
			a: n.a.at(-1),
			b: n.b.at(-1)
		}, i = e.length;
		for (; i--;) {
			let n = e[i];
			if (n === t.a) return 1;
			if (n === t.b) return -1;
		}
	}
	return Math.sign(i.a - i.b);
}
var ne = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function re(e) {
	let t = getComputedStyle(se(e) ?? e).display;
	return t === "flex" || t === "inline-flex";
}
function ie(e) {
	let t = getComputedStyle(e);
	return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || re(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || ne.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function ae(e) {
	let t = e.length;
	for (; t--;) {
		let n = e[t];
		if (o(n, "Missing node"), ie(n)) return n;
	}
	return null;
}
function M(e) {
	return e && Number(getComputedStyle(e).zIndex) || 0;
}
function oe(e) {
	let t = [];
	for (; e;) t.push(e), e = se(e);
	return t;
}
function se(e) {
	let { parentNode: t } = e;
	return ee(t) ? t.host : t;
}
function ce(e, t) {
	return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function le({ groupElement: e, hitRegion: t, pointerEventTarget: n }) {
	if (!d(n) || n.contains(e) || e.contains(n)) return !0;
	if (te(n, e) > 0) {
		let r = n;
		for (; r;) {
			if (r.contains(e)) return !0;
			if (ce(r.getBoundingClientRect(), t)) return !1;
			r = r.parentElement;
		}
	}
	return !0;
}
function N(e, t) {
	let n = [];
	return t.forEach((t, r) => {
		if (r.disabled) return;
		let i = g(r), a = j(r.orientation, i, {
			x: e.clientX,
			y: e.clientY
		});
		a && a.distance.x <= 0 && a.distance.y <= 0 && le({
			groupElement: r.element,
			hitRegion: a.hitRegion.rect,
			pointerEventTarget: e.target
		}) && n.push(a.hitRegion);
	}), n;
}
function ue(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
	return !0;
}
function P(e, t) {
	return E(e, t) ? 0 : e > t ? 1 : -1;
}
function F({ panelConstraints: e, size: t }) {
	let { collapsedSize: n = 0, collapsible: r, maxSize: i = 100, minSize: a = 0 } = e;
	if (P(t, a) < 0) {
		if (r) {
			let e = (n + a) / 2;
			t = P(t, e) < 0 ? n : a;
		} else t = a;
	}
	return t = Math.min(i, t), t = C(t), t;
}
function I({ delta: e, initialLayout: t, panelConstraints: n, pivotIndices: r, prevLayout: i, trigger: a }) {
	if (E(e, 0)) return t;
	let s = Object.values(t), c = Object.values(i), l = [...s], [u, d] = r;
	o(u != null, "Invalid first pivot index"), o(d != null, "Invalid second pivot index");
	let f = 0;
	if (a === "keyboard") {
		{
			let t = e < 0 ? d : u, r = n[t];
			o(r, `Panel constraints not found for index ${t}`);
			let { collapsedSize: i = 0, collapsible: a, minSize: c = 0 } = r;
			if (a) {
				let n = s[t];
				if (o(n != null, `Previous layout not found for panel index ${t}`), E(n, i)) {
					let t = c - n;
					P(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
		{
			let t = e < 0 ? u : d, r = n[t];
			o(r, `No panel constraints found for index ${t}`);
			let { collapsedSize: i = 0, collapsible: a, minSize: c = 0 } = r;
			if (a) {
				let n = s[t];
				if (o(n != null, `Previous layout not found for panel index ${t}`), E(n, c)) {
					let t = n - i;
					P(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
	}
	{
		let t = e < 0 ? 1 : -1, r = e < 0 ? d : u, i = 0;
		for (;;) {
			let e = s[r];
			o(e != null, `Previous layout not found for panel index ${r}`);
			let a = F({
				panelConstraints: n[r],
				size: 100
			}) - e;
			if (i += a, r += t, r < 0 || r >= n.length) break;
		}
		let a = Math.min(Math.abs(e), Math.abs(i));
		e = e < 0 ? 0 - a : a;
	}
	{
		let t = e < 0 ? u : d;
		for (; t >= 0 && t < n.length;) {
			let r = Math.abs(e) - Math.abs(f), i = s[t];
			o(i != null, `Previous layout not found for panel index ${t}`);
			let a = i - r, c = F({
				panelConstraints: n[t],
				size: a
			});
			if (!E(i, c) && (f += i - c, l[t] = c, f.toFixed(3).localeCompare(Math.abs(e).toFixed(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? t-- : t++;
		}
	}
	if (ue(c, l)) return i;
	{
		let t = e < 0 ? d : u, r = s[t];
		o(r != null, `Previous layout not found for panel index ${t}`);
		let i = r + f, a = F({
			panelConstraints: n[t],
			size: i
		});
		if (l[t] = a, !E(a, i)) {
			let t = i - a, r = e < 0 ? d : u;
			for (; r >= 0 && r < n.length;) {
				let i = l[r];
				o(i != null, `Previous layout not found for panel index ${r}`);
				let a = i + t, s = F({
					panelConstraints: n[r],
					size: a
				});
				if (E(i, s) || (t -= s - i, l[r] = s), E(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	if (!E(Object.values(l).reduce((e, t) => t + e, 0), 100, .1)) return i;
	let p = Object.keys(i);
	return l.reduce((e, t, n) => (e[p[n]] = t, e), {});
}
function L(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (t[n] === void 0 || P(e[n], t[n]) !== 0) return !1;
	return !0;
}
function R({ layout: e, panelConstraints: t }) {
	let n = [...Object.values(e)], r = n.reduce((e, t) => e + t, 0);
	if (n.length !== t.length) throw Error(`Invalid ${t.length} panel layout: ${n.map((e) => `${e}%`).join(", ")}`);
	if (!E(r, 100) && n.length > 0) for (let e = 0; e < t.length; e++) {
		let t = n[e];
		o(t != null, `No layout data found for index ${e}`);
		let i = 100 / r * t;
		n[e] = i;
	}
	let i = 0;
	for (let e = 0; e < t.length; e++) {
		let r = n[e];
		o(r != null, `No layout data found for index ${e}`);
		let a = F({
			panelConstraints: t[e],
			size: r
		});
		r != a && (i += r - a, n[e] = a);
	}
	if (!E(i, 0)) for (let e = 0; e < t.length; e++) {
		let r = n[e];
		o(r != null, `No layout data found for index ${e}`);
		let a = r + i, s = F({
			panelConstraints: t[e],
			size: a
		});
		if (r !== s && (i -= s - r, n[e] = s, E(i, 0))) break;
	}
	let a = Object.keys(e);
	return n.reduce((e, t, n) => (e[a[n]] = t, e), {});
}
function de({ groupId: e, panelId: t }) {
	let n = () => {
		let { mountedGroups: t } = k();
		for (let [n, { defaultLayoutDeferred: r, derivedPanelConstraints: i, layout: a, separatorToPanels: o }] of t) if (n.id === e) return {
			defaultLayoutDeferred: r,
			derivedPanelConstraints: i,
			group: n,
			layout: a,
			separatorToPanels: o
		};
		throw Error(`Group ${e} not found`);
	}, r = () => {
		let e = n().derivedPanelConstraints.find((e) => e.panelId === t);
		if (e !== void 0) return e;
		throw Error(`Panel constraints not found for Panel ${t}`);
	}, i = () => {
		let e = n().group.panels.find((e) => e.id === t);
		if (e !== void 0) return e;
		throw Error(`Layout not found for Panel ${t}`);
	}, a = () => {
		let e = n().layout[t];
		if (e !== void 0) return e;
		throw Error(`Layout not found for Panel ${t}`);
	}, o = (e) => {
		let r = a();
		if (e === r) return;
		let { defaultLayoutDeferred: i, derivedPanelConstraints: o, group: s, layout: c, separatorToPanels: l } = n(), u = s.panels.findIndex((e) => e.id === t), d = u === s.panels.length - 1, f = R({
			layout: I({
				delta: d ? r - e : e - r,
				initialLayout: c,
				panelConstraints: o,
				pivotIndices: d ? [u - 1, u] : [u, u + 1],
				prevLayout: c,
				trigger: "imperative-api"
			}),
			panelConstraints: o
		});
		L(c, f) || A((e) => ({ mountedGroups: new Map(e.mountedGroups).set(s, {
			defaultLayoutDeferred: i,
			derivedPanelConstraints: o,
			layout: f,
			separatorToPanels: l
		}) }));
	};
	return {
		collapse: () => {
			let { collapsible: e, collapsedSize: t } = r(), { mutableValues: n } = i(), s = a();
			e && s !== t && (n.expandToSize = s, o(t));
		},
		expand: () => {
			let { collapsible: e, collapsedSize: t, minSize: n } = r(), { mutableValues: s } = i(), c = a();
			if (e && c === t) {
				let e = s.expandToSize ?? n;
				e === 0 && (e = 1), o(e);
			}
		},
		getSize: () => {
			let { group: e } = n(), t = a(), { element: r } = i();
			return {
				asPercentage: t,
				inPixels: e.orientation === "horizontal" ? r.offsetWidth : r.offsetHeight
			};
		},
		isCollapsed: () => {
			let { collapsible: e, collapsedSize: t } = r(), n = a();
			return e && E(t, n);
		},
		resize: (e) => {
			if (a() !== e) {
				let t;
				switch (typeof e) {
					case "number": {
						let { group: r } = n();
						t = C(e / s({ group: r }) * 100);
						break;
					}
					case "string": t = parseFloat(e);
				}
				o(t);
			}
		}
	};
}
function fe(e) {
	if (e.defaultPrevented) return;
	let { mountedGroups: t } = k();
	N(e, t).forEach((t) => {
		if (t.separator) {
			let n = t.panels.find((e) => e.panelConstraints.defaultSize !== void 0);
			if (n) {
				let r = n.panelConstraints.defaultSize, i = de({
					groupId: t.group.id,
					panelId: n.id
				});
				i && r !== void 0 && (i.resize(r), e.preventDefault());
			}
		}
	});
}
function z(e) {
	let { mountedGroups: t } = k();
	for (let [n] of t) if (n.separators.some((t) => t.element === e)) return n;
	throw Error("Could not find parent Group for separator element");
}
function B({ groupId: e }) {
	let t = () => {
		let { mountedGroups: t } = k();
		for (let [n, r] of t) if (n.id === e) return {
			group: n,
			...r
		};
		throw Error(`Could not find Group with id "${e}"`);
	};
	return {
		getLayout() {
			let { defaultLayoutDeferred: e, layout: n } = t();
			return e ? {} : n;
		},
		setLayout(e) {
			let { defaultLayoutDeferred: n, derivedPanelConstraints: r, group: i, layout: a, separatorToPanels: o } = t(), s = R({
				layout: e,
				panelConstraints: r
			});
			return n ? a : (L(a, s) || A((e) => ({ mountedGroups: new Map(e.mountedGroups).set(i, {
				defaultLayoutDeferred: n,
				derivedPanelConstraints: r,
				layout: s,
				separatorToPanels: o
			}) })), s);
		}
	};
}
function V(e) {
	let { mountedGroups: t } = k(), n = t.get(e);
	return o(n, `Mounted Group ${e.id} not found`), n;
}
function H(e, t) {
	let n = z(e), r = V(n), i = n.separators.find((t) => t.element === e);
	o(i, "Matching separator not found");
	let a = r.separatorToPanels.get(i);
	o(a, "Matching panels not found");
	let s = a.map((e) => n.panels.indexOf(e)), c = B({ groupId: n.id }).getLayout(), l = R({
		layout: I({
			delta: t,
			initialLayout: c,
			panelConstraints: r.derivedPanelConstraints,
			pivotIndices: s,
			prevLayout: c,
			trigger: "keyboard"
		}),
		panelConstraints: r.derivedPanelConstraints
	});
	L(c, l) || A((e) => ({ mountedGroups: new Map(e.mountedGroups).set(n, {
		defaultLayoutDeferred: r.defaultLayoutDeferred,
		derivedPanelConstraints: r.derivedPanelConstraints,
		layout: l,
		separatorToPanels: r.separatorToPanels
	}) }));
}
function pe(e) {
	if (e.defaultPrevented) return;
	let t = e.currentTarget, n = z(t);
	if (!n.disabled) switch (e.key) {
		case "ArrowDown":
			e.preventDefault(), n.orientation === "vertical" && H(t, 5);
			break;
		case "ArrowLeft":
			e.preventDefault(), n.orientation === "horizontal" && H(t, -5);
			break;
		case "ArrowRight":
			e.preventDefault(), n.orientation === "horizontal" && H(t, 5);
			break;
		case "ArrowUp":
			e.preventDefault(), n.orientation === "vertical" && H(t, -5);
			break;
		case "End":
			e.preventDefault(), H(t, 100);
			break;
		case "Enter": {
			e.preventDefault();
			let n = z(t), { derivedPanelConstraints: r, layout: i, separatorToPanels: a } = V(n), s = n.separators.find((e) => e.element === t);
			o(s, "Matching separator not found");
			let c = a.get(s);
			o(c, "Matching panels not found");
			let l = c[0], u = r.find((e) => e.panelId === l.id);
			if (o(u, "Panel metadata not found"), u.collapsible) {
				let e = i[l.id];
				H(t, (u.collapsedSize === e ? n.inMemoryLastExpandedPanelSizes[l.id] ?? u.minSize : u.collapsedSize) - e);
			}
			break;
		}
		case "F6": {
			e.preventDefault();
			let n = z(t).separators.map((e) => e.element), r = Array.from(n).findIndex((t) => t === e.currentTarget);
			o(r !== null, "Index not found"), n[e.shiftKey ? r > 0 ? r - 1 : n.length - 1 : r + 1 < n.length ? r + 1 : 0].focus();
			break;
		}
		case "Home": e.preventDefault(), H(t, -100);
	}
}
function me(e) {
	if (e.defaultPrevented || e.pointerType === "mouse" && e.button > 0) return;
	let { mountedGroups: t } = k(), n = N(e, t), r = /* @__PURE__ */ new Map(), i = !1;
	n.forEach((e) => {
		e.separator && (i || (i = !0, e.separator.element.focus()));
		let n = t.get(e.group);
		n && r.set(e.group, n.layout);
	}), A({ interactionState: {
		hitRegions: n,
		initialLayoutMap: r,
		pointerDownAtPoint: {
			x: e.clientX,
			y: e.clientY
		},
		state: "active"
	} }), n.length && e.preventDefault();
}
var he = (e) => e, U = () => {}, ge = 1, _e = 2, ve = 4, ye = 8, be = 3, xe = 12, W;
function Se() {
	return W === void 0 && (W = !1, typeof window < "u" && (window.navigator.userAgent.includes("Chrome") || window.navigator.userAgent.includes("Firefox")) && (W = !0)), W;
}
function Ce({ cursorFlags: e, groups: t, state: n }) {
	let r = 0, i = 0;
	switch (n) {
		case "active":
		case "hover": t.forEach((e) => {
			if (!e.disableCursor) switch (e.orientation) {
				case "horizontal":
					r++;
					break;
				case "vertical": i++;
			}
		});
	}
	if (r === 0 && i === 0) return null;
	if (n === "active" && e && Se()) {
		let t = (e & ge) !== 0, n = (e & _e) !== 0, r = (e & ve) !== 0, i = (e & ye) !== 0;
		if (t) return r ? "se-resize" : i ? "ne-resize" : "e-resize";
		if (n) return r ? "sw-resize" : i ? "nw-resize" : "w-resize";
		if (r) return "s-resize";
		if (i) return "n-resize";
	}
	return Se() ? r > 0 && i > 0 ? "move" : r > 0 ? "ew-resize" : "ns-resize" : r > 0 && i > 0 ? "grab" : r > 0 ? "col-resize" : "row-resize";
}
var we = /* @__PURE__ */ new WeakMap();
function G(e) {
	if (e.defaultView === null || e.defaultView === void 0) return;
	let { prevStyle: t, styleSheet: n } = we.get(e) ?? {};
	n === void 0 && (n = new e.defaultView.CSSStyleSheet(), e.adoptedStyleSheets.push(n));
	let { cursorFlags: r, interactionState: i } = k();
	switch (i.state) {
		case "active":
		case "hover": {
			let e = Ce({
				cursorFlags: r,
				groups: i.hitRegions.map((e) => e.group),
				state: i.state
			}), a = `*, *:hover {cursor: ${e} !important; ${i.state === "active" ? "touch-action: none;" : ""} }`;
			if (t === a) return;
			t = a, e ? n.cssRules.length === 0 ? n.insertRule(a) : n.replaceSync(a) : n.cssRules.length === 1 && n.deleteRule(0);
			break;
		}
		case "inactive": t = void 0, n.cssRules.length === 1 && n.deleteRule(0);
	}
	we.set(e, {
		prevStyle: t,
		styleSheet: n
	});
}
function Te({ document: e, event: t, hitRegions: n, initialLayoutMap: r, mountedGroups: i, pointerDownAtPoint: a, prevCursorFlags: o }) {
	let s = 0, c = new Map(i);
	n.forEach((e) => {
		let { group: n, groupSize: o } = e, { disableCursor: l, orientation: u, panels: d } = n, f = 0;
		f = a ? u === "horizontal" ? (t.clientX - a.x) / o * 100 : (t.clientY - a.y) / o * 100 : u === "horizontal" ? t.clientX < 0 ? -100 : 100 : t.clientY < 0 ? -100 : 100;
		let p = r.get(n), { defaultLayoutDeferred: m, derivedPanelConstraints: h, layout: g, separatorToPanels: _ } = i.get(n) ?? { defaultLayoutDeferred: !1 };
		if (h && p && g && _) {
			let t = I({
				delta: f,
				initialLayout: p,
				panelConstraints: h,
				pivotIndices: e.panels.map((e) => d.indexOf(e)),
				prevLayout: g,
				trigger: "mouse-or-touch"
			});
			if (L(t, g)) {
				if (f !== 0 && !l) switch (u) {
					case "horizontal":
						s |= f < 0 ? ge : _e;
						break;
					case "vertical": s |= f < 0 ? ve : ye;
				}
			} else {
				c.set(e.group, {
					defaultLayoutDeferred: m,
					derivedPanelConstraints: h,
					layout: t,
					separatorToPanels: _
				});
				let n = e.group.panels.map(({ id: e }) => e).join(",");
				e.group.inMemoryLayouts[n] = t;
			}
		}
	});
	let l = 0;
	t.movementX === 0 ? l |= o & be : l |= s & be, t.movementY === 0 ? l |= o & xe : l |= s & xe, A({
		cursorFlags: l,
		mountedGroups: c
	}), G(e);
}
function Ee(e) {
	let { cursorFlags: t, interactionState: n, mountedGroups: r } = k();
	n.state === "active" && Te({
		document: e.currentTarget,
		event: e,
		hitRegions: n.hitRegions,
		initialLayoutMap: n.initialLayoutMap,
		mountedGroups: r,
		prevCursorFlags: t
	});
}
function De(e) {
	if (e.defaultPrevented) return;
	let { cursorFlags: t, interactionState: n, mountedGroups: r } = k();
	switch (n.state) {
		case "active":
			if (e.buttons === 0) {
				A((e) => e.interactionState.state === "inactive" ? e : {
					cursorFlags: 0,
					interactionState: { state: "inactive" }
				}), A((e) => ({ mountedGroups: new Map(e.mountedGroups) }));
				return;
			}
			Te({
				document: e.currentTarget,
				event: e,
				hitRegions: n.hitRegions,
				initialLayoutMap: n.initialLayoutMap,
				mountedGroups: r,
				pointerDownAtPoint: n.pointerDownAtPoint,
				prevCursorFlags: t
			});
			break;
		default: {
			let t = N(e, r);
			t.length === 0 ? n.state !== "inactive" && A({ interactionState: { state: "inactive" } }) : A({ interactionState: {
				hitRegions: t,
				state: "hover"
			} }), G(e.currentTarget);
			break;
		}
	}
}
function Oe(e) {
	if (e.relatedTarget instanceof HTMLIFrameElement) {
		let { interactionState: e } = k();
		e.state === "hover" && A({ interactionState: { state: "inactive" } });
	}
}
function ke(e) {
	if (e.defaultPrevented || e.pointerType === "mouse" && e.button > 0) return;
	let { interactionState: t } = k();
	t.state === "active" && (A({
		cursorFlags: 0,
		interactionState: { state: "inactive" }
	}), t.hitRegions.length > 0 && (G(e.currentTarget), A((e) => ({ mountedGroups: new Map(e.mountedGroups) })), e.preventDefault()));
}
function Ae(e) {
	let t = 0, n = 0, r = {};
	for (let i of e) if (i.defaultSize !== void 0) {
		t++;
		let e = C(i.defaultSize);
		n += e, r[i.panelId] = e;
	} else r[i.panelId] = void 0;
	let i = e.length - t;
	if (i !== 0) {
		let t = C((100 - n) / i);
		for (let n of e) n.defaultSize === void 0 && (r[n.panelId] = t);
	}
	return r;
}
function je(e, t, n) {
	if (!n[0]) return;
	let r = e.panels.find((e) => e.element === t);
	if (!r || !r.onResize) return;
	let i = s({ group: e }), a = e.orientation === "horizontal" ? r.element.offsetWidth : r.element.offsetHeight, o = r.mutableValues.prevSize, c = {
		asPercentage: C(a / i * 100),
		inPixels: a
	};
	r.mutableValues.prevSize = c, r.onResize(c, r.id, o);
}
function Me(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function Ne(e, t) {
	let n = e.map((e) => e.id), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let e of n) if (!r.includes(e)) return !1;
	return !0;
}
var K = /* @__PURE__ */ new Map();
function Pe(e) {
	let t = !0;
	o(e.element.ownerDocument.defaultView, "Cannot register an unmounted Group");
	let n = e.element.ownerDocument.defaultView.ResizeObserver, r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = new n((n) => {
		for (let r of n) {
			let { borderBoxSize: n, target: i } = r;
			if (i === e.element) {
				if (t) {
					if (s({ group: e }) === 0) return;
					A((t) => {
						let n = t.mountedGroups.get(e);
						if (n) {
							let r = w(e), i = n.defaultLayoutDeferred ? Ae(r) : n.layout, a = R({
								layout: i,
								panelConstraints: r
							});
							return !n.defaultLayoutDeferred && L(i, a) && Me(n.derivedPanelConstraints, r) ? t : { mountedGroups: new Map(t.mountedGroups).set(e, {
								defaultLayoutDeferred: !1,
								derivedPanelConstraints: r,
								layout: a,
								separatorToPanels: n.separatorToPanels
							}) };
						}
						return t;
					});
				}
			} else je(e, i, n);
		}
	});
	a.observe(e.element), e.panels.forEach((e) => {
		o(!r.has(e.id), `Panel ids must be unique; id "${e.id}" was used more than once`), r.add(e.id), e.onResize && a.observe(e.element);
	});
	let c = s({ group: e }), l = w(e), u = e.panels.map(({ id: e }) => e).join(","), d = e.defaultLayout;
	d && (Ne(e.panels, d) || (d = void 0));
	let f = R({
		layout: e.inMemoryLayouts[u] ?? d ?? Ae(l),
		panelConstraints: l
	}), p = g(e), m = e.element.ownerDocument;
	return A((t) => {
		let n = /* @__PURE__ */ new Map();
		return K.set(m, (K.get(m) ?? 0) + 1), p.forEach((e) => {
			e.separator && n.set(e.separator, e.panels);
		}), { mountedGroups: new Map(t.mountedGroups).set(e, {
			defaultLayoutDeferred: c === 0,
			derivedPanelConstraints: l,
			layout: f,
			separatorToPanels: n
		}) };
	}), e.separators.forEach((e) => {
		o(!i.has(e.id), `Separator ids must be unique; id "${e.id}" was used more than once`), i.add(e.id), e.element.addEventListener("keydown", pe);
	}), K.get(m) === 1 && (m.addEventListener("dblclick", fe, !0), m.addEventListener("pointerdown", me, !0), m.addEventListener("pointerleave", Ee), m.addEventListener("pointermove", De), m.addEventListener("pointerout", Oe), m.addEventListener("pointerup", ke, !0)), function() {
		t = !1, K.set(m, Math.max(0, (K.get(m) ?? 0) - 1)), A((t) => {
			let n = new Map(t.mountedGroups);
			return n.delete(e), { mountedGroups: n };
		}), e.separators.forEach((e) => {
			e.element.removeEventListener("keydown", pe);
		}), K.get(m) || (m.removeEventListener("dblclick", fe, !0), m.removeEventListener("pointerdown", me, !0), m.removeEventListener("pointerleave", Ee), m.removeEventListener("pointermove", De), m.removeEventListener("pointerout", Oe), m.removeEventListener("pointerup", ke, !0)), a.disconnect();
	};
}
function Fe() {
	let [e, t] = (0, a.useState)({});
	return [e, (0, a.useCallback)(() => t({}), [])];
}
function q(e) {
	let t = (0, a.useId)();
	return `${e ?? t}`;
}
var J = typeof window < "u" ? a.useLayoutEffect : a.useEffect;
function Y(e) {
	let t = (0, a.useRef)(e);
	return J(() => {
		t.current = e;
	}, [e]), (0, a.useCallback)((...e) => t.current?.(...e), [t]);
}
function X(...e) {
	return Y((t) => {
		e.forEach((e) => {
			if (e) switch (typeof e) {
				case "function":
					e(t);
					break;
				case "object": e.current = t;
			}
		});
	});
}
function Ie(e) {
	let t = (0, a.useRef)({ ...e });
	return J(() => {
		for (let n in e) t.current[n] = e[n];
	}, [e]), t.current;
}
var Le = (0, a.createContext)(null);
function Re(e, t) {
	let n = (0, a.useRef)({
		getLayout: () => ({}),
		setLayout: he
	});
	(0, a.useImperativeHandle)(t, () => n.current, []), J(() => {
		Object.assign(n.current, B({ groupId: e }));
	});
}
function ze({ children: e, className: t, defaultLayout: n, disableCursor: r, disabled: o, elementRef: s, groupRef: l, id: u, onLayoutChange: d, onLayoutChanged: f, orientation: p = "horizontal", resizeTargetMinimumSize: m = {
	coarse: 20,
	fine: 10
}, style: h, ...g }) {
	let _ = (0, a.useRef)({
		onLayoutChange: {},
		onLayoutChanged: {}
	}), v = Y((e) => {
		L(_.current.onLayoutChange, e) || (_.current.onLayoutChange = e, d?.(e));
	}), y = Y((e) => {
		L(_.current.onLayoutChanged, e) || (_.current.onLayoutChanged = e, f?.(e));
	}), b = q(u), x = (0, a.useRef)(null), [S, C] = Fe(), w = (0, a.useRef)({
		lastExpandedPanelSizes: {},
		layouts: {},
		panels: [],
		resizeTargetMinimumSize: m,
		separators: []
	}), T = X(x, s);
	Re(b, l);
	let E = Y((e, t) => {
		let { interactionState: r, mountedGroups: i } = k();
		for (let n of i.keys()) if (n.id === e) {
			let e = i.get(n);
			if (e) {
				let i = !1;
				return r.state === "active" && (i = r.hitRegions.some((e) => e.group === n)), {
					flexGrow: e.layout[t] ?? 1,
					pointerEvents: i ? "none" : void 0
				};
			}
		}
		return { flexGrow: n?.[t] ?? 1 };
	}), D = (0, a.useMemo)(() => ({
		getPanelStyles: E,
		id: b,
		orientation: p,
		registerPanel: (e) => {
			let t = w.current;
			return t.panels = c(p, [...t.panels, e]), C(), () => {
				t.panels = t.panels.filter((t) => t !== e), C();
			};
		},
		registerSeparator: (e) => {
			let t = w.current;
			return t.separators = c(p, [...t.separators, e]), C(), () => {
				t.separators = t.separators.filter((t) => t !== e), C();
			};
		}
	}), [
		E,
		b,
		C,
		p
	]), A = Ie({
		defaultLayout: n,
		disableCursor: r
	}), j = (0, a.useRef)(null);
	return J(() => {
		let e = x.current;
		if (e === null) return;
		let t = w.current, n = {
			defaultLayout: A.defaultLayout,
			disableCursor: !!A.disableCursor,
			disabled: !!o,
			element: e,
			id: b,
			inMemoryLastExpandedPanelSizes: w.current.lastExpandedPanelSizes,
			inMemoryLayouts: w.current.layouts,
			orientation: p,
			panels: t.panels,
			resizeTargetMinimumSize: t.resizeTargetMinimumSize,
			separators: t.separators
		};
		j.current = n;
		let r = Pe(n), i = k().mountedGroups.get(n);
		if (i) {
			let { defaultLayoutDeferred: e, derivedPanelConstraints: n, layout: r } = i;
			!e && n.length > 0 && (v(r), y(r), t.panels.forEach((e) => {
				e.scheduleUpdate();
			}));
		}
		let a = !1, s = O.addListener("interactionStateChange", (e) => {
			let n = e.state === "active";
			a !== n && (a = n, t.panels.forEach((e) => {
				e.scheduleUpdate();
			}));
		}), c = O.addListener("mountedGroupsChange", (e) => {
			let r = e.get(n);
			if (r) {
				let { defaultLayoutDeferred: e, derivedPanelConstraints: n, layout: i } = r;
				if (e || n.length === 0) return;
				let { interactionState: a } = k(), o = a.state !== "active";
				v(i), o && y(i), t.panels.forEach((e) => {
					e.scheduleUpdate();
				});
			}
		});
		return () => {
			j.current = null, r(), s(), c();
		};
	}, [
		o,
		b,
		y,
		v,
		p,
		S,
		A
	]), (0, a.useEffect)(() => {
		let e = j.current;
		e && (e.defaultLayout = n, e.disableCursor = !!r);
	}), /* @__PURE__ */ (0, i.jsx)(Le.Provider, {
		value: D,
		children: /* @__PURE__ */ (0, i.jsx)("div", {
			...g,
			className: t,
			"data-group": !0,
			"data-testid": b,
			id: b,
			ref: T,
			style: {
				height: "100%",
				width: "100%",
				overflow: "hidden",
				...h,
				display: "flex",
				flexDirection: p === "horizontal" ? "row" : "column",
				flexWrap: "nowrap"
			},
			children: e
		})
	});
}
ze.displayName = "Group";
function Z() {
	let e = (0, a.useContext)(Le);
	return o(e, "Group Context not found; did you render a Panel or Separator outside of a Group?"), e;
}
function Be(e, t) {
	let { id: n } = Z(), r = (0, a.useRef)({
		collapse: U,
		expand: U,
		getSize: () => ({
			asPercentage: 0,
			inPixels: 0
		}),
		isCollapsed: () => !1,
		resize: U
	});
	(0, a.useImperativeHandle)(t, () => r.current, []), J(() => {
		Object.assign(r.current, de({
			groupId: n,
			panelId: e
		}));
	});
}
function Q({ children: e, className: t, collapsedSize: n = "0%", collapsible: r = !1, defaultSize: o, elementRef: s, id: c, maxSize: l = "100%", minSize: u = "0%", onResize: d, panelRef: f, style: p, ...m }) {
	let h = !!c, g = q(c), _ = (0, a.useRef)(null), v = X(_, s), [, y] = Fe(), { getPanelStyles: b, id: x, registerPanel: S } = Z(), C = d !== null, w = Y((e, t, n) => {
		d?.(e, c, n);
	});
	J(() => {
		let e = _.current;
		if (e !== null) return S({
			element: e,
			id: g,
			idIsStable: h,
			mutableValues: {
				expandToSize: void 0,
				prevSize: void 0
			},
			onResize: C ? w : void 0,
			panelConstraints: {
				collapsedSize: n,
				collapsible: r,
				defaultSize: o,
				maxSize: l,
				minSize: u
			},
			scheduleUpdate: y
		});
	}, [
		n,
		r,
		o,
		y,
		C,
		g,
		h,
		l,
		u,
		w,
		S
	]), Be(g, f);
	let T = b(x, g);
	return /* @__PURE__ */ (0, i.jsx)("div", {
		...m,
		"data-panel": !0,
		"data-testid": g,
		id: g,
		ref: v,
		style: {
			...Ve,
			display: "flex",
			flexBasis: 0,
			flexShrink: 1,
			overflow: "hidden",
			...T
		},
		children: /* @__PURE__ */ (0, i.jsx)("div", {
			className: t,
			style: {
				maxHeight: "100%",
				maxWidth: "100%",
				flexGrow: 1,
				...p
			},
			children: e
		})
	});
}
Q.displayName = "Panel";
var Ve = {
	minHeight: 0,
	maxHeight: "100%",
	height: "auto",
	minWidth: 0,
	maxWidth: "100%",
	width: "auto",
	border: "none",
	borderWidth: 0,
	padding: 0,
	margin: 0
};
function He({ layout: e, panelConstraints: t, panelId: n, panelIndex: r }) {
	let i, a, o = e[n], s = t.find((e) => e.panelId === n);
	if (s) {
		let c = s.maxSize, l = s.collapsible ? s.collapsedSize : s.minSize, u = [r, r + 1];
		a = R({
			layout: I({
				delta: l - o,
				initialLayout: e,
				panelConstraints: t,
				pivotIndices: u,
				prevLayout: e
			}),
			panelConstraints: t
		})[n], i = R({
			layout: I({
				delta: c - o,
				initialLayout: e,
				panelConstraints: t,
				pivotIndices: u,
				prevLayout: e
			}),
			panelConstraints: t
		})[n];
	}
	return {
		valueControls: n,
		valueMax: i,
		valueMin: a,
		valueNow: o
	};
}
function Ue({ children: e, className: t, elementRef: n, id: r, style: o, ...s }) {
	let c = q(r), [l, u] = (0, a.useState)({}), [d, f] = (0, a.useState)("inactive"), p = (0, a.useRef)(null), m = X(p, n), { id: h, orientation: g, registerSeparator: _ } = Z(), v = g === "horizontal" ? "vertical" : "horizontal";
	return J(() => {
		let e = p.current;
		if (e !== null) {
			let t = {
				element: e,
				id: c
			}, n = _(t), r = O.addListener("interactionStateChange", (e) => {
				f(e.state !== "inactive" && e.hitRegions.some((e) => e.separator === t) ? e.state : "inactive");
			}), i = O.addListener("mountedGroupsChange", (e) => {
				e.forEach(({ derivedPanelConstraints: e, layout: n, separatorToPanels: r }, i) => {
					if (i.id === h) {
						let a = r.get(t);
						if (a) {
							let t = a[0], r = i.panels.indexOf(t);
							u(He({
								layout: n,
								panelConstraints: e,
								panelId: t.id,
								panelIndex: r
							}));
						}
					}
				});
			});
			return () => {
				r(), i(), n();
			};
		}
	}, [
		h,
		c,
		_
	]), /* @__PURE__ */ (0, i.jsx)("div", {
		...s,
		"aria-controls": l.valueControls,
		"aria-orientation": v,
		"aria-valuemax": l.valueMax,
		"aria-valuemin": l.valueMin,
		"aria-valuenow": l.valueNow,
		children: e,
		className: t,
		"data-separator": d,
		"data-testid": c,
		id: c,
		ref: m,
		role: "separator",
		style: {
			flexBasis: "auto",
			...o,
			flexGrow: 0,
			flexShrink: 0
		},
		tabIndex: 0
	});
}
Ue.displayName = "Separator";
// upstream/registry/bases/base/ui/resizable.tsx
function We({ className: e, ...n }) {
	return /* @__PURE__ */ (0, i.jsx)(ze, {
		"data-slot": "resizable-panel-group",
		className: t("cn-resizable-panel-group flex h-full w-full aria-[orientation=vertical]:flex-col", e),
		...n
	});
}
function $({ ...e }) {
	return /* @__PURE__ */ (0, i.jsx)(Q, {
		"data-slot": "resizable-panel",
		...e
	});
}
function Ge({ withHandle: e, className: n, ...r }) {
	return /* @__PURE__ */ (0, i.jsx)(Ue, {
		"data-slot": "resizable-handle",
		className: t("cn-resizable-handle relative flex w-px items-center justify-center bg-border ring-offset-background after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90", n),
		...r,
		children: e && /* @__PURE__ */ (0, i.jsx)("div", { className: "cn-resizable-handle-icon z-10 flex shrink-0" })
	});
}
// upstream/examples/base/resizable-demo.tsx
function Ke() {
	return /* @__PURE__ */ (0, i.jsxs)(We, {
		orientation: "horizontal",
		className: "max-w-sm rounded-lg border",
		children: [
			/* @__PURE__ */ (0, i.jsx)($, {
				defaultSize: "50%",
				children: /* @__PURE__ */ (0, i.jsx)("div", {
					className: "flex h-[200px] items-center justify-center p-6",
					children: /* @__PURE__ */ (0, i.jsx)("span", {
						className: "font-semibold",
						children: "One"
					})
				})
			}),
			/* @__PURE__ */ (0, i.jsx)(Ge, { withHandle: !0 }),
			/* @__PURE__ */ (0, i.jsx)($, {
				defaultSize: "50%",
				children: /* @__PURE__ */ (0, i.jsxs)(We, {
					orientation: "vertical",
					children: [
						/* @__PURE__ */ (0, i.jsx)($, {
							defaultSize: "25%",
							children: /* @__PURE__ */ (0, i.jsx)("div", {
								className: "flex h-full items-center justify-center p-6",
								children: /* @__PURE__ */ (0, i.jsx)("span", {
									className: "font-semibold",
									children: "Two"
								})
							})
						}),
						/* @__PURE__ */ (0, i.jsx)(Ge, { withHandle: !0 }),
						/* @__PURE__ */ (0, i.jsx)($, {
							defaultSize: "75%",
							children: /* @__PURE__ */ (0, i.jsx)("div", {
								className: "flex h-full items-center justify-center p-6",
								children: /* @__PURE__ */ (0, i.jsx)("span", {
									className: "font-semibold",
									children: "Three"
								})
							})
						})
					]
				})
			})
		]
	});
}
export { Ke as default };
