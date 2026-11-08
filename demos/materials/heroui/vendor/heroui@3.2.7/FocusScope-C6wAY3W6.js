import { B as e, C as t, D as n, E as r, I as i, S as a, b as o, g as s, h as c, r as l, v as u } from "./useKeyboard-CqNSkGJ-.js";
import { t as d } from "./focusSafely-BRvDv2aU.js";
import { t as f } from "./useLayoutEffect-Bx2X4QEP.js";
import { i as p, n as m } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/utils/shadowdom/ShadowTreeWalker.mjs
var h = class {
	constructor(e, t, n, r) {
		this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (e) => {
			if (e.nodeType === Node.ELEMENT_NODE) {
				let t = e.shadowRoot;
				if (t) {
					let e = this._doc.createTreeWalker(t, this.whatToShow, { acceptNode: this._acceptNode });
					return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT;
				}
				if (typeof this.filter == "function") return this.filter(e);
				if (this.filter?.acceptNode) return this.filter.acceptNode(e);
				if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
			}
			return NodeFilter.FILTER_SKIP;
		}, this._doc = e, this.root = t, this.filter = r ?? null, this.whatToShow = n ?? NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
		let i = t.shadowRoot;
		if (i) {
			let e = this._doc.createTreeWalker(i, this.whatToShow, { acceptNode: this._acceptNode });
			this._walkerStack.unshift(e);
		}
	}
	get currentNode() {
		return this._currentNode;
	}
	set currentNode(e) {
		if (!u(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
		let t = [], n = e, r = e;
		for (this._currentNode = e; n && n !== this.root;) if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			let e = n, i = this._doc.createTreeWalker(e, this.whatToShow, { acceptNode: this._acceptNode });
			t.push(i), i.currentNode = r, this._currentSetFor.add(i), n = r = e.host;
		} else n = n.parentNode;
		let i = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
		t.push(i), i.currentNode = r, this._currentSetFor.add(i), this._walkerStack = t;
	}
	get doc() {
		return this._doc;
	}
	firstChild() {
		let e = this.currentNode, t = this.nextNode();
		return u(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null);
	}
	lastChild() {
		let e = this._walkerStack[0].lastChild();
		return e && (this.currentNode = e), e;
	}
	nextNode() {
		let e = this._walkerStack[0].nextNode();
		if (e) {
			if (e.shadowRoot) {
				let t;
				if (typeof this.filter == "function" ? t = this.filter(e) : this.filter?.acceptNode && (t = this.filter.acceptNode(e)), t === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
				let n = this.nextNode();
				return n && (this.currentNode = n), n;
			}
			return e && (this.currentNode = e), e;
		}
		if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let e = this.nextNode();
			return e && (this.currentNode = e), e;
		}
		return null;
	}
	previousNode() {
		let e = this._walkerStack[0];
		if (e.currentNode === e.root) {
			if (this._currentSetFor.has(e)) {
				if (this._currentSetFor.delete(e), this._walkerStack.length > 1) {
					this._walkerStack.shift();
					let e = this.previousNode();
					return e && (this.currentNode = e), e;
				}
				return null;
			}
			return null;
		}
		let t = e.previousNode();
		if (t) {
			if (t.shadowRoot) {
				let e;
				if (typeof this.filter == "function" ? e = this.filter(t) : this.filter?.acceptNode && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
				let n = this.lastChild();
				return n && (this.currentNode = n), n;
			}
			return t && (this.currentNode = t), t;
		}
		if (this._walkerStack.length > 1) {
			this._walkerStack.shift();
			let e = this.previousNode();
			return e && (this.currentNode = e), e;
		}
		return null;
	}
	nextSibling() {
		return null;
	}
	previousSibling() {
		return null;
	}
	parentNode() {
		return null;
	}
};
function g(e, n, r, i) {
	return t() ? new h(e, n, r, i) : e.createTreeWalker(n, r, i);
}
// node_modules/react-aria/dist/private/focus/FocusScope.mjs
var _ = /* @__PURE__ */ p(m(), 1), v = /*#__PURE__*/ _.createContext(null), y = "react-aria-focus-scope-restore", b = null;
function x(e) {
	let { children: t, contain: n, restoreFocus: i, autoFocus: a } = e, s = (0, _.useRef)(null), c = (0, _.useRef)(null), l = (0, _.useRef)([]), { parentNode: u } = (0, _.useContext)(v) || {}, d = (0, _.useMemo)(() => new G({ scopeRef: l }), [l]);
	f(() => {
		let e = u || K.root;
		if (K.getTreeNode(e.scopeRef) && b && !M(b, e.scopeRef)) {
			let t = K.getTreeNode(b);
			t && (e = t);
		}
		e.addChild(d), K.addNode(d);
	}, [d, u]), f(() => {
		let e = K.getTreeNode(l);
		e && (e.contain = !!n);
	}, [n]), f(() => {
		let e = s.current?.nextSibling, t = [], n = (e) => e.stopPropagation();
		for (; e && e !== c.current;) t.push(e), e.addEventListener(y, n), e = e.nextSibling;
		return l.current = t, () => {
			for (let e of t) e.removeEventListener(y, n);
		};
	}, [t]), L(l, i, n), D(l, n), z(l, i, n), I(l, a), (0, _.useEffect)(() => {
		let e = o(r(l.current ? l.current[0] : void 0)), t = null;
		if (k(e, l.current)) {
			for (let n of K.traverse()) n.scopeRef && k(e, n.scopeRef.current) && (t = n);
			t === K.getTreeNode(l) && (b = t.scopeRef);
		}
	}, [l]), f(() => () => {
		let e = K.getTreeNode(l)?.parent?.scopeRef ?? null;
		l !== b && !M(l, b) || e && !K.getTreeNode(e) || (b = e), K.removeTreeNode(l);
	}, [l]);
	let p = (0, _.useMemo)(() => S(l), []), m = (0, _.useMemo)(() => ({
		focusManager: p,
		parentNode: d
	}), [d, p]);
	return /*#__PURE__*/ _.createElement(v.Provider, { value: m }, /*#__PURE__*/ _.createElement("span", {
		"data-focus-scope-start": !0,
		hidden: !0,
		ref: s
	}), t, /*#__PURE__*/ _.createElement("span", {
		"data-focus-scope-end": !0,
		hidden: !0,
		ref: c
	}));
}
function S(e) {
	return {
		focusNext(t = {}) {
			let n = e.current, { from: i, tabbable: a, wrap: s, accept: c } = t, l = i || o(r(n[0] ?? void 0)), u = n[0].previousElementSibling, d = V(C(n), {
				tabbable: a,
				accept: c
			}, n);
			d.currentNode = k(l, n) ? l : u;
			let f = d.nextNode();
			return !f && s && (d.currentNode = u, f = d.nextNode()), f && N(f, !0), f;
		},
		focusPrevious(t = {}) {
			let n = e.current, { from: i, tabbable: a, wrap: s, accept: c } = t, l = i || o(r(n[0] ?? void 0)), u = n[n.length - 1].nextElementSibling, d = V(C(n), {
				tabbable: a,
				accept: c
			}, n);
			d.currentNode = k(l, n) ? l : u;
			let f = d.previousNode();
			return !f && s && (d.currentNode = u, f = d.previousNode()), f && N(f, !0), f;
		},
		focusFirst(t = {}) {
			let n = e.current, { tabbable: r, accept: i } = t, a = V(C(n), {
				tabbable: r,
				accept: i
			}, n);
			a.currentNode = n[0].previousElementSibling;
			let o = a.nextNode();
			return o && N(o, !0), o;
		},
		focusLast(t = {}) {
			let n = e.current, { tabbable: r, accept: i } = t, a = V(C(n), {
				tabbable: r,
				accept: i
			}, n);
			a.currentNode = n[n.length - 1].nextElementSibling;
			let o = a.previousNode();
			return o && N(o, !0), o;
		}
	};
}
function C(e) {
	return e[0].parentElement;
}
function w(e) {
	let t = K.getTreeNode(b);
	for (; t && t.scopeRef !== e;) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function T(e) {
	if (!e.form) return Array.from(r(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter((e) => !e.form);
	let t = e.form.elements.namedItem(e.name), i = n(e);
	return t instanceof i.RadioNodeList ? Array.from(t).filter((e) => e instanceof i.HTMLInputElement) : t instanceof i.HTMLInputElement ? [t] : [];
}
function E(e) {
	if (e.checked) return !0;
	let t = T(e);
	return t.length > 0 && !t.some((e) => e.checked);
}
function D(t, s) {
	let c = (0, _.useRef)(void 0), u = (0, _.useRef)(void 0);
	f(() => {
		let d = t.current;
		if (!s) {
			u.current &&= (cancelAnimationFrame(u.current), void 0);
			return;
		}
		let f = r(d ? d[0] : void 0), p = (e) => {
			if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !w(t) || e.isComposing) return;
			let r = o(f), i = t.current;
			if (!i || !k(r, i)) return;
			let a = V(C(i), { tabbable: !0 }, i);
			if (!r) return;
			a.currentNode = r;
			let s = e.shiftKey ? a.previousNode() : a.nextNode();
			s ||= (a.currentNode = e.shiftKey ? i[i.length - 1].nextElementSibling : i[0].previousElementSibling, e.shiftKey ? a.previousNode() : a.nextNode()), e.preventDefault(), s && (N(s, !0), s instanceof n(s).HTMLInputElement && s.select());
		}, m = (e) => {
			(!b || M(b, t)) && k(a(e), t.current) ? (b = t, c.current = a(e)) : w(t) && !A(a(e), t) ? c.current ? N(c.current) : b && b.current && F(b.current) : w(t) && (c.current = a(e));
		}, h = (n) => {
			u.current && cancelAnimationFrame(u.current), u.current = requestAnimationFrame(() => {
				let r = l(), s = (r === "virtual" || r === null) && e() && i(), u = o(f);
				if (!s && u && w(t) && !A(u, t)) {
					b = t;
					let e = a(n);
					e && e.isConnected ? (c.current = e, N(c.current)) : b.current && F(b.current);
				}
			});
		};
		return f.addEventListener("keydown", p, !1), f.addEventListener("focusin", m, !1), d?.forEach((e) => e.addEventListener("focusin", m, !1)), d?.forEach((e) => e.addEventListener("focusout", h, !1)), () => {
			f.removeEventListener("keydown", p, !1), f.removeEventListener("focusin", m, !1), d?.forEach((e) => e.removeEventListener("focusin", m, !1)), d?.forEach((e) => e.removeEventListener("focusout", h, !1));
		};
	}, [t, s]), f(() => () => {
		u.current && cancelAnimationFrame(u.current);
	}, [u]);
}
function O(e) {
	return A(e);
}
function k(e, t) {
	return !e || !t ? !1 : t.some((t) => u(t, e));
}
function A(e, t = null) {
	if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
	for (let { scopeRef: n } of K.traverse(K.getTreeNode(t))) if (n && k(e, n.current)) return !0;
	return !1;
}
function j(e) {
	return A(e, b);
}
function M(e, t) {
	let n = K.getTreeNode(t)?.parent;
	for (; n;) {
		if (n.scopeRef === e) return !0;
		n = n.parent;
	}
	return !1;
}
function N(e, t = !1) {
	if (e != null && !t) try {
		d(e);
	} catch {}
	else if (e != null) try {
		e.focus();
	} catch {}
}
function P(e, t = !0) {
	let n = e[0].previousElementSibling, r = C(e), i = V(r, { tabbable: t }, e);
	i.currentNode = n;
	let a = i.nextNode();
	return t && !a && (r = C(e), i = V(r, { tabbable: !1 }, e), i.currentNode = n, a = i.nextNode()), a;
}
function F(e, t = !0) {
	N(P(e, t));
}
function I(e, t) {
	let n = _.useRef(t);
	(0, _.useEffect)(() => {
		if (n.current) {
			b = e;
			let t = r(e.current ? e.current[0] : void 0);
			!k(o(t), b.current) && e.current && F(e.current);
		}
		n.current = !1;
	}, [e]);
}
function L(e, t, n) {
	f(() => {
		if (t || n) return;
		let i = e.current, o = r(i ? i[0] : void 0), s = (t) => {
			let n = a(t);
			k(n, e.current) ? b = e : O(n) || (b = null);
		};
		return o.addEventListener("focusin", s, !1), i?.forEach((e) => e.addEventListener("focusin", s, !1)), () => {
			o.removeEventListener("focusin", s, !1), i?.forEach((e) => e.removeEventListener("focusin", s, !1));
		};
	}, [
		e,
		t,
		n
	]);
}
function R(e) {
	let t = K.getTreeNode(b);
	for (; t && t.scopeRef !== e;) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return t?.scopeRef === e;
}
function z(e, t, n) {
	let i = (0, _.useRef)(typeof document < "u" ? o(r(e.current ? e.current[0] : void 0)) : null);
	f(() => {
		let i = e.current, a = r(i ? i[0] : void 0);
		if (!t || n) return;
		let s = () => {
			(!b || M(b, e)) && k(o(a), e.current) && (b = e);
		};
		return a.addEventListener("focusin", s, !1), i?.forEach((e) => e.addEventListener("focusin", s, !1)), () => {
			a.removeEventListener("focusin", s, !1), i?.forEach((e) => e.removeEventListener("focusin", s, !1));
		};
	}, [e, n]), f(() => {
		let i = r(e.current ? e.current[0] : void 0);
		if (!t) return;
		let a = (t) => {
			if (t.key !== "Tab" || t.altKey || t.ctrlKey || t.metaKey || !w(e) || t.isComposing) return;
			let n = i.activeElement;
			if (!A(n, e) || !R(e)) return;
			let r = K.getTreeNode(e);
			if (!r) return;
			let a = r.nodeToRestore, o = V(i.body, { tabbable: !0 });
			o.currentNode = n;
			let s = t.shiftKey ? o.previousNode() : o.nextNode();
			if (a && a.isConnected && a !== i.body || (a = void 0, r.nodeToRestore = void 0), (!s || !A(s, e)) && a) {
				o.currentNode = a;
				do
					s = t.shiftKey ? o.previousNode() : o.nextNode();
				while (A(s, e));
				t.preventDefault(), t.stopPropagation(), s ? N(s, !0) : O(a) ? N(a, !0) : n.blur();
			}
		};
		return n || i.addEventListener("keydown", a, !0), () => {
			n || i.removeEventListener("keydown", a, !0);
		};
	}, [
		e,
		t,
		n
	]), f(() => {
		let n = r(e.current ? e.current[0] : void 0);
		if (!t) return;
		let a = K.getTreeNode(e);
		if (a) return a.nodeToRestore = i.current ?? void 0, () => {
			let r = K.getTreeNode(e);
			if (!r) return;
			let i = r.nodeToRestore, a = o(n);
			if (t && i && (a && A(a, e) || a === n.body && R(e))) {
				let t = K.clone();
				requestAnimationFrame(() => {
					if (n.activeElement === n.body) {
						let n = t.getTreeNode(e);
						for (; n;) {
							if (n.nodeToRestore && n.nodeToRestore.isConnected) {
								B(n.nodeToRestore);
								return;
							}
							n = n.parent;
						}
						for (n = t.getTreeNode(e); n;) {
							if (n.scopeRef && n.scopeRef.current && K.getTreeNode(n.scopeRef)) {
								let e = P(n.scopeRef.current, !0);
								if (e) {
									B(e);
									return;
								}
							}
							n = n.parent;
						}
					}
				});
			}
		};
	}, [e, t]);
}
function B(e) {
	e.dispatchEvent(new CustomEvent(y, {
		bubbles: !0,
		cancelable: !0
	})) && N(e);
}
function V(e, t, n) {
	let i = t?.tabbable ? s : c, a = e?.nodeType === Node.ELEMENT_NODE ? e : null, o = r(a), l = g(o, e || o, NodeFilter.SHOW_ELEMENT, { acceptNode(e) {
		return u(t?.from, e) || t?.tabbable && e.tagName === "INPUT" && e.getAttribute("type") === "radio" && (!E(e) || l.currentNode.tagName === "INPUT" && l.currentNode.type === "radio" && l.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : i(e) && (!n || k(e, n)) && (!t?.accept || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	return t?.from && (l.currentNode = t.from), l;
}
function H(e, t = {}) {
	return {
		focusNext(n = {}) {
			let i = e.current;
			if (!i) return null;
			let { from: a, tabbable: s = t.tabbable, wrap: c = t.wrap, accept: l = t.accept } = n, d = a || o(r(i)), f = V(i, {
				tabbable: s,
				accept: l
			});
			u(i, d) && (f.currentNode = d);
			let p = f.nextNode();
			return !p && c && (f.currentNode = i, p = f.nextNode()), p && N(p, !0), p;
		},
		focusPrevious(n = t) {
			let i = e.current;
			if (!i) return null;
			let { from: a, tabbable: s = t.tabbable, wrap: c = t.wrap, accept: l = t.accept } = n, d = a || o(r(i)), f = V(i, {
				tabbable: s,
				accept: l
			});
			if (u(i, d)) f.currentNode = d;
			else {
				let e = U(f);
				return e && N(e, !0), e ?? null;
			}
			let p = f.previousNode();
			if (!p && c) {
				f.currentNode = i;
				let e = U(f);
				if (!e) return null;
				p = e;
			}
			return p && N(p, !0), p ?? null;
		},
		focusFirst(n = t) {
			let r = e.current;
			if (!r) return null;
			let { tabbable: i = t.tabbable, accept: a = t.accept } = n, o = V(r, {
				tabbable: i,
				accept: a
			}).nextNode();
			return o && N(o, !0), o;
		},
		focusLast(n = t) {
			let r = e.current;
			if (!r) return null;
			let { tabbable: i = t.tabbable, accept: a = t.accept } = n, o = U(V(r, {
				tabbable: i,
				accept: a
			}));
			return o && N(o, !0), o ?? null;
		}
	};
}
function U(e) {
	let t, n;
	do
		n = e.lastChild(), n && (t = n);
	while (n);
	return t;
}
var W = class e {
	constructor() {
		this.fastMap = /* @__PURE__ */ new Map(), this.root = new G({ scopeRef: null }), this.fastMap.set(null, this.root);
	}
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(e) {
		return this.fastMap.get(e);
	}
	addTreeNode(e, t, n) {
		let r = this.fastMap.get(t ?? null);
		if (!r) return;
		let i = new G({ scopeRef: e });
		r.addChild(i), i.parent = r, this.fastMap.set(e, i), n && (i.nodeToRestore = n);
	}
	addNode(e) {
		this.fastMap.set(e.scopeRef, e);
	}
	removeTreeNode(e) {
		if (e === null) return;
		let t = this.fastMap.get(e);
		if (!t) return;
		let n = t.parent;
		for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && k(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
		let r = t.children;
		n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
	}
	*traverse(e = this.root) {
		if (e.scopeRef != null && (yield e), e.children.size > 0) for (let t of e.children) yield* this.traverse(t);
	}
	clone() {
		let t = new e();
		for (let e of this.traverse()) t.addTreeNode(e.scopeRef, e.parent?.scopeRef ?? null, e.nodeToRestore);
		return t;
	}
}, G = class {
	constructor(e) {
		this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = e.scopeRef;
	}
	addChild(e) {
		this.children.add(e), e.parent = this;
	}
	removeChild(e) {
		this.children.delete(e), e.parent = void 0;
	}
}, K = new W();
export { g as a, H as i, x as n, V as r, j as t };
