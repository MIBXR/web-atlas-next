import { a as e, i as t, n, r } from "./rolldown-runtime-DUcC5eAW.js";
import { t as i } from "./react-D9cguz4v.js";
import { t as a } from "./createLucideIcon-B1HI5iko.js";
import { t as o } from "./jsx-runtime-lAxUcZjR.js";
import { n as s, t as c } from "./bubble-B4wkPswj.js";
import { r as l, t as u } from "./message-Ds5bzUnl.js";
import { n as d, r as f, t as p } from "./chunk-HBS6WEDP-DTh5Z2I9.js";
import { t as m } from "./dist-DCi9UB7o.js";
import { t as h } from "./button-DmMhlFcj.js";
import { t as g } from "./icon-placeholder-BTF3H_W7.js";
import { a as _, i as v, o as y, r as b, s as x, t as S } from "./card-Cc7Sw7Ur.js";
var C = a("Brain", [
	["path", {
		d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
		key: "l5xja"
	}],
	["path", {
		d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
		key: "ep3f8r"
	}],
	["path", {
		d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
		key: "1p4c4q"
	}],
	["path", {
		d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
		key: "tmeiqw"
	}],
	["path", {
		d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
		key: "105sqy"
	}],
	["path", {
		d: "M3.477 10.896a4 4 0 0 1 .585-.396",
		key: "ql3yin"
	}],
	["path", {
		d: "M19.938 10.5a4 4 0 0 1 .585.396",
		key: "1qfode"
	}],
	["path", {
		d: "M6 18a4 4 0 0 1-1.967-.516",
		key: "2e4loj"
	}],
	["path", {
		d: "M19.967 17.484A4 4 0 0 1 18 18",
		key: "159ez6"
	}]
]), w = /* @__PURE__ */ e(i(), 1), ee = (0, w.createContext)({});
// node_modules/framer-motion/dist/es/utils/use-constant.mjs
function T(e) {
	let t = (0, w.useRef)(null);
	return t.current === null && (t.current = e()), t.current;
}
// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var te = typeof window < "u" ? w.useLayoutEffect : w.useEffect, ne = /* @__PURE__ */ (0, w.createContext)(null);
// node_modules/motion-utils/dist/es/array.mjs
function E(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function D(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
// node_modules/motion-utils/dist/es/clamp.mjs
var O = (e, t, n) => n > t ? t : n < e ? e : n, k = {}, A = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), j = (e) => typeof e == "object" && !!e, M = (e) => /^0[^.\s]+$/u.test(e);
// node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function re(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
// node_modules/motion-utils/dist/es/noop.mjs
var N = /* @__NO_SIDE_EFFECTS__ */ (e) => e, ie = (...e) => e.reduce((e, t) => (n) => t(e(n))), ae = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r ? (n - e) / r : 1;
}, oe = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return E(this.subscriptions, e), () => D(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) {
			if (r === 1) this.subscriptions[0](e, t, n);
			else for (let i = 0; i < r; i++) {
				let r = this.subscriptions[i];
				r && r(e, t, n);
			}
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, P = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, F = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, I = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? 1e3 / t * e : 0, se = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, ce = 1e-7, le = 12;
function L(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = se(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > ce && ++s < le);
	return o;
}
/*#__NO_SIDE_EFFECTS__*/
function ue(e, t, n, r) {
	if (e === t && n === r) return N;
	let i = (t) => L(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : se(i(e), t, r);
}
// node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var de = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, fe = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t), pe = /*@__PURE__*/ ue(.33, 1.53, .69, .99), me = /*@__PURE__*/ fe(pe), he = /*@__PURE__*/ de(me), ge = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * me(e) : .5 * (2 - 2 ** (-10 * (e - 1))), _e = (e) => 1 - Math.sin(Math.acos(e)), ve = /* @__PURE__ */ fe(_e), ye = /* @__PURE__ */ de(_e), be = /*@__PURE__*/ ue(.42, 0, 1, 1), xe = /*@__PURE__*/ ue(0, 0, .58, 1), Se = /*@__PURE__*/ ue(.42, 0, .58, 1), Ce = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != "number", we = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == "number", Te = {
	linear: N,
	easeIn: be,
	easeInOut: Se,
	easeOut: xe,
	circIn: _e,
	circInOut: ye,
	circOut: ve,
	backIn: me,
	backInOut: he,
	backOut: pe,
	anticipate: ge
}, Ee = (e) => typeof e == "string", De = (e) => {
	if (/* @__PURE__ */ we(e)) {
		e.length;
		let [t, n, r, i] = e;
		return /* @__PURE__ */ ue(t, n, r, i);
	}
	return Ee(e) ? (Te[e], `${e}`, Te[e]) : e;
}, Oe = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];
// node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function ke(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1, a = /* @__PURE__ */ new WeakSet(), o = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	};
	function s(t) {
		a.has(t) && (c.schedule(t), e()), t(o);
	}
	let c = {
		schedule: (e, i = !1, o = !1) => {
			let s = o && r ? t : n;
			return i && a.add(e), s.add(e), e;
		},
		cancel: (e) => {
			n.delete(e), a.delete(e);
		},
		process: (e) => {
			if (o = e, r) {
				i = !0;
				return;
			}
			r = !0;
			let a = t;
			t = n, n = a, t.forEach(s), t.clear(), r = !1, i && (i = !1, c.process(e));
		}
	};
	return c;
}
// node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var Ae = 40;
function je(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = Oe.reduce((e, t) => (e[t] = ke(a), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = k.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, Ae), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: Oe.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < Oe.length; t++) o[Oe[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
// node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: R, cancel: Me, state: z, steps: Ne } = /* @__PURE__ */ je(typeof requestAnimationFrame < "u" ? requestAnimationFrame : N, !0), Pe;
function Fe() {
	Pe = void 0;
}
var B = {
	now: () => (Pe === void 0 && B.set(z.isProcessing || k.useManualTiming ? z.timestamp : performance.now()), Pe),
	set: (e) => {
		Pe = e, queueMicrotask(Fe);
	}
}, Ie = (e) => (t) => typeof t == "string" && t.startsWith(e), Le = /*@__PURE__*/ Ie("--"), Re = /*@__PURE__*/ Ie("var(--"), ze = (e) => Re(e) ? Be.test(e.split("/*")[0].trim()) : !1, Be = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ve(e) {
	return typeof e == "string" && e.split("/*")[0].includes("var(--");
}
// node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var He = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, Ue = {
	...He,
	transform: (e) => O(0, 1, e)
}, We = {
	...He,
	default: 1
}, Ge = (e) => Math.round(e * 1e5) / 1e5, Ke = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
// node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function qe(e) {
	return e == null;
}
// node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var Je = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ye = (e, t) => (n) => !!(typeof n == "string" && Je.test(n) && n.startsWith(e) || t && !qe(n) && Object.prototype.hasOwnProperty.call(n, t)), Xe = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Ke);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, Ze = (e) => O(0, 255, e), Qe = {
	...He,
	transform: (e) => Math.round(Ze(e))
}, $e = {
	test: /*@__PURE__*/ Ye("rgb", "red"),
	parse: /*@__PURE__*/ Xe("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Qe.transform(e) + ", " + Qe.transform(t) + ", " + Qe.transform(n) + ", " + Ge(Ue.transform(r)) + ")"
};
// node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function et(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var tt = {
	test: /*@__PURE__*/ Ye("#"),
	parse: et,
	transform: $e.transform
}, nt = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), rt = /*@__PURE__*/ nt("deg"), V = /*@__PURE__*/ nt("%"), H = /*@__PURE__*/ nt("px"), it = /*@__PURE__*/ nt("vh"), at = /*@__PURE__*/ nt("vw"), ot = {
	...V,
	parse: (e) => V.parse(e) / 100,
	transform: (e) => V.transform(e * 100)
}, st = {
	test: /*@__PURE__*/ Ye("hsl", "hue"),
	parse: /*@__PURE__*/ Xe("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + V.transform(Ge(t)) + ", " + V.transform(Ge(n)) + ", " + Ge(Ue.transform(r)) + ")"
}, U = {
	test: (e) => $e.test(e) || tt.test(e) || st.test(e),
	parse: (e) => $e.test(e) ? $e.parse(e) : st.test(e) ? st.parse(e) : tt.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? $e.transform(e) : st.transform(e),
	getAnimatableNone: (e) => {
		let t = U.parse(e);
		return t.alpha = 0, U.transform(t);
	}
}, ct = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
// node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function lt(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Ke)?.length || 0) + (e.match(ct)?.length || 0) > 0;
}
var ut = "number", dt = "color", ft = "var", pt = "var(", mt = "${}", ht = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function gt(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(ht, (e) => (U.test(e) ? (r.color.push(a), i.push(dt), n.push(U.parse(e))) : e.startsWith(pt) ? (r.var.push(a), i.push(ft), n.push(e)) : (r.number.push(a), i.push(ut), n.push(parseFloat(e))), ++a, mt)).split(mt),
		indexes: r,
		types: i
	};
}
function _t(e) {
	return gt(e).values;
}
function vt({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			i += e === ut ? Ge(r[a]) : e === dt ? U.transform(r[a]) : r[a];
		}
		return i;
	};
}
function yt(e) {
	return vt(gt(e));
}
var bt = (e) => typeof e == "number" ? 0 : U.test(e) ? U.getAnimatableNone(e) : e, xt = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : bt(e);
function St(e) {
	let t = gt(e);
	return vt(t)(t.values.map((e, n) => xt(e, t.split[n])));
}
var W = {
	test: lt,
	parse: _t,
	createTransformer: yt,
	getAnimatableNone: St
};
// node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function Ct(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function wt({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = Ct(s, r, e + 1 / 3), a = Ct(s, r, e), o = Ct(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
// node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function Tt(e, t) {
	return (n) => n > 0 ? t : e;
}
// node_modules/motion-dom/dist/es/utils/mix/number.mjs
var G = (e, t, n) => e + (t - e) * n, Et = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, Dt = [
	tt,
	$e,
	st
], Ot = (e) => Dt.find((t) => t.test(e));
function kt(e) {
	let t = Ot(e);
	if (`${e}`, !t) return !1;
	let n = t.parse(e);
	return t === st && (n = wt(n)), n;
}
var At = (e, t) => {
	let n = kt(e), r = kt(t);
	if (!n || !r) return Tt(e, t);
	let i = { ...n };
	return (e) => (i.red = Et(n.red, r.red, e), i.green = Et(n.green, r.green, e), i.blue = Et(n.blue, r.blue, e), i.alpha = G(n.alpha, r.alpha, e), $e.transform(i));
}, jt = /* @__PURE__ */ new Set(["none", "hidden"]);
function Mt(e, t) {
	return jt.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
// node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function Nt(e, t) {
	return (n) => G(e, t, n);
}
function Pt(e) {
	return typeof e == "number" ? Nt : typeof e == "string" ? ze(e) ? Tt : U.test(e) ? At : Rt : Array.isArray(e) ? Ft : typeof e == "object" ? U.test(e) ? At : It : Tt;
}
function Ft(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => Pt(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function It(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Pt(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function Lt(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]], s = e.values[o] ?? 0;
		n[i] = s, r[a]++;
	}
	return n;
}
var Rt = (e, t) => {
	let n = W.createTransformer(t), r = gt(e), i = gt(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? jt.has(e) && !i.values.length || jt.has(t) && !r.values.length ? Mt(e, t) : ie(Ft(Lt(r, i), i.values), n) : (`${e}${t}`, Tt(e, t));
};
// node_modules/motion-dom/dist/es/utils/mix/index.mjs
function zt(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? G(e, t, n) : Pt(e)(e, t);
}
// node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var Bt = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => R.update(t, e),
		stop: () => Me(t),
		now: () => z.isProcessing ? z.timestamp : B.now()
	};
}, Vt = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, Ht = 2e4;
function Ut(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
// node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function Wt(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(Ut(r), Ht);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ F(i)
	};
}
// node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var K = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function Gt(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var Kt = 12;
function qt(e, t, n) {
	let r = n;
	for (let n = 1; n < Kt; n++) r -= e(r) / t(r);
	return r;
}
var Jt = .001;
function Yt({ duration: e = K.duration, bounce: t = K.bounce, velocity: n = K.velocity, mass: r = K.mass }) {
	let i, a;
	K.maxDuration;
	let o = 1 - t;
	o = O(K.minDamping, K.maxDamping, o), e = O(K.minDuration, K.maxDuration, /* @__PURE__ */ F(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = Gt(t, o), c = Math.exp(-i);
		return Jt - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = Gt(t ** 2, o);
		return (-i(t) + Jt > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = qt(i, a, s);
	if (e = /* @__PURE__ */ P(e), isNaN(c)) return {
		stiffness: K.stiffness,
		damping: K.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var Xt = ["duration", "bounce"], Zt = [
	"stiffness",
	"damping",
	"mass"
];
function Qt(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function $t(e) {
	let t = {
		velocity: K.velocity,
		stiffness: K.stiffness,
		damping: K.damping,
		mass: K.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Qt(e, Zt) && Qt(e, Xt)) {
		if (t.velocity = 0, e.visualDuration) {
			let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * O(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
			t = {
				...t,
				mass: K.mass,
				stiffness: i,
				damping: a
			};
		} else {
			let n = Yt({
				...e,
				velocity: 0
			});
			t = {
				...t,
				...n,
				mass: K.mass
			}, t.isResolvedFromDuration = !0;
		}
	}
	return t;
}
function en(e = K.visualDuration, t = K.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = $t({
		...n,
		velocity: -/* @__PURE__ */ F(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ F(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? K.restSpeed.granular : K.restSpeed.default, i ||= v ? K.restDelta.granular : K.restDelta.default;
	let y, b, x, S, C, w;
	if (h < 1) x = Gt(_, h), S = (m + h * _ * g) / x, y = (e) => {
		let t = Math.exp(-h * _ * e);
		return o - t * (S * Math.sin(x * e) + g * Math.cos(x * e));
	}, C = h * _ * S + g * x, w = h * _ * g - S * x, b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + w * Math.cos(x * e));
	else if (h === 1) {
		y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
		let e = m + _ * g;
		b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
	} else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
		let t = (m + h * _ * g) / e, n = h * _ * t - g * e, r = h * _ * g - t * e;
		b = (t) => {
			let i = Math.exp(-h * _ * t), a = Math.min(e * t, 300);
			return i * (n * Math.sinh(a) + r * Math.cosh(a));
		};
	}
	let ee = {
		calculatedDuration: p && d || null,
		velocity: (e) => /* @__PURE__ */ P(b(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(x * e), a = Math.cos(x * e), c = o - t * (S * n + g * a), l = /* @__PURE__ */ P(t * (C * n + w * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ P(b(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(Ut(ee), Ht), t = Vt((t) => ee.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return ee;
}
en.applyToOptions = (e) => {
	let t = Wt(e, 100, en);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ P(t.duration), e.type = "keyframes", e;
};
// node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var tn = 5;
function nn(e, t, n) {
	let r = Math.max(t - tn, 0);
	return /* @__PURE__ */ I(n - e(r), t - r);
}
// node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function rn({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = en({
			keyframes: [f.value, m(f.value)],
			velocity: nn(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
// node_modules/motion-dom/dist/es/utils/interpolate.mjs
function an(e, t, n) {
	let r = [], i = n || k.mix || zt, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = ie(Array.isArray(t) ? t[n] || N : t, a)), r.push(a);
	}
	return r;
}
function on(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (t.length, a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = an(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ ae(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(O(e[0], e[a - 1], t)) : l;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function sn(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ ae(0, t, r);
		e.push(G(n, 1, i));
	}
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function cn(e) {
	let t = [0];
	return sn(t, e.length - 1), t;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function ln(e, t) {
	return e.map((e) => e * t);
}
// node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function un(e, t) {
	return e.map(() => t || Se).splice(0, e.length - 1);
}
function dn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = /* @__PURE__ */ Ce(r) ? r.map(De) : De(r), a = {
		done: !1,
		value: t[0]
	}, o = on(ln(n && n.length === t.length ? n : cn(t), e), t, { ease: Array.isArray(i) ? i : un(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
// node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var fn = (e) => e !== null;
function pn(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(fn), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
// node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var mn = {
	decay: rn,
	inertia: rn,
	tween: dn,
	keyframes: dn,
	spring: en
};
function hn(e) {
	typeof e.type == "string" && (e.type = mn[e.type]);
}
// node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var gn = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, _n = (e) => e / 100, vn = class extends gn {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== B.now() && this.tick(B.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		hn(e);
		let { type: t = dn, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || dn;
		s !== dn && typeof o[0] != "number" && (this.mixKeyframes = ie(_n, zt(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = Ut(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.currentTime = this.holdTime === null ? t : this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
		this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let v = this.currentTime, y = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = O(0, 1, n) * o;
		}
		let b;
		_ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== rn && (b.value = pn(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ F(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ F(e);
	}
	get time() {
		return /* @__PURE__ */ F(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ P(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return nn((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(B.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ F(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = Bt, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(B.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
// node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function yn(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
// node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var bn = (e) => e * 180 / Math.PI, xn = (e) => Cn(bn(Math.atan2(e[1], e[0]))), Sn = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: xn,
	rotateZ: xn,
	skewX: (e) => bn(Math.atan(e[1])),
	skewY: (e) => bn(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Cn = (e) => (e %= 360, e < 0 && (e += 360), e), wn = xn, Tn = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), En = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Dn = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: Tn,
	scaleY: En,
	scale: (e) => (Tn(e) + En(e)) / 2,
	rotateX: (e) => Cn(bn(Math.atan2(e[6], e[5]))),
	rotateY: (e) => Cn(bn(Math.atan2(-e[2], e[0]))),
	rotateZ: wn,
	rotate: wn,
	skewX: (e) => bn(Math.atan(e[4])),
	skewY: (e) => bn(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function On(e) {
	return +!!e.includes("scale");
}
function kn(e, t) {
	if (!e || e === "none") return On(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = Dn, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = Sn, i = t;
	}
	if (!i) return On(t);
	let a = r[t], o = i[1].split(",").map(jn);
	return typeof a == "function" ? a(o) : o[a];
}
var An = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return kn(n, t);
};
function jn(e) {
	return parseFloat(e.trim());
}
// node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var Mn = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], Nn = /* @__PURE__ */ new Set([...Mn, "pathRotation"]), Pn = (e) => e === He || e === H, Fn = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), In = Mn.filter((e) => !Fn.has(e));
function Ln(e) {
	let t = [];
	return In.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var Rn = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => kn(t, "x"),
	y: (e, { transform: t }) => kn(t, "y")
};
Rn.translateX = Rn.x, Rn.translateY = Rn.y;
// node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var zn = /* @__PURE__ */ new Set(), Bn = !1, Vn = !1, Hn = !1;
function Un() {
	if (Vn) {
		let e = Array.from(zn).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = Ln(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	Vn = !1, Bn = !1, zn.forEach((e) => e.complete(Hn)), zn.clear();
}
function Wn() {
	zn.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Vn = !0);
	});
}
function Gn() {
	Hn = !0, Wn(), Un(), Hn = !1;
}
var Kn = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (zn.add(this), Bn || (Bn = !0, R.read(Wn), R.resolveKeyframes(Un))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		yn(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), zn.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (zn.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, qn = (e) => e.startsWith("--");
// node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function Jn(e, t, n) {
	qn(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var Yn = {};
// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function Xn(e, t) {
	let n = /* @__PURE__ */ re(e);
	return () => Yn[t] ?? n();
}
// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var Zn = /* @__PURE__ */ Xn(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Qn = /*@__PURE__*/ Xn(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), $n = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, er = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ $n([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ $n([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ $n([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ $n([
		.33,
		1.53,
		.69,
		.99
	])
};
// node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function tr(e, t) {
	if (e) return typeof e == "function" ? Qn() ? Vt(e, t) : "ease-out" : /* @__PURE__ */ we(e) ? $n(e) : Array.isArray(e) ? e.map((e) => tr(e, t) || er.easeOut) : er[e];
}
// node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function nr(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = tr(s, i);
	Array.isArray(d) && (u.easing = d);
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	return l && (f.pseudoElement = l), e.animate(u, f);
}
// node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function rr(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function ir({ type: e, ...t }) {
	return rr(e) && Qn() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
// node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var ar = class extends gn {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, e.type;
		let c = ir(e);
		this.animation = nr(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = pn(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), Jn(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e !== "idle" && e !== "finished" && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ F(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ F(e);
	}
	get time() {
		return /* @__PURE__ */ F(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ P(e), t && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Zn() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), N) : r(this);
	}
}, or = {
	anticipate: ge,
	backInOut: he,
	circInOut: ye
};
function sr(e) {
	return e in or;
}
function cr(e) {
	typeof e.ease == "string" && sr(e.ease) && (e.ease = or[e.ease]);
}
// node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var lr = 10, ur = class extends ar {
	constructor(e) {
		cr(e), hn(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new vn({
			...a,
			autoplay: !1
		}), s = Math.max(lr, B.now() - this.startTime), c = O(0, lr, s - lr), l = o.sample(s).value, { name: u } = this.options;
		i && u && Jn(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
	}
}, dr = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (W.test(e) || e === "0") && !e.startsWith("url("));
// node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function fr(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function pr(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = dr(i, t), s = dr(a, t);
	return `${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : fr(e) || (n === "spring" || rr(n)) && r;
}
// node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function mr(e) {
	e.duration = 0, e.type = "keyframes";
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var hr = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform",
	"backgroundColor"
]), gr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function _r(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && gr.test(e[t])) return !0;
	return !1;
}
// node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var vr = /* @__PURE__ */ new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]), yr = /*@__PURE__*/ re(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function br(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e, c = t?.owner?.current;
	if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
	let { onUpdate: l, transformTemplate: u } = t.owner.getProps();
	return yr() && n && (hr.has(n) || vr.has(n) && _r(s)) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
// node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var xr = 40, Sr = class extends gn {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = B.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || Kn;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = B.now();
		let u = !0;
		pr(e, i, a, o) || (u = !1, (k.instantAnimations || !s) && l?.(pn(e, n, t)), e[0] = e[e.length - 1], mr(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > xr ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && br(d), p = d.motionValue?.owner?.current, m;
		if (f) try {
			m = new ur({
				...d,
				element: p
			});
		} catch {
			m = new vn(d);
		}
		else m = new vn(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(N), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), Gn()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
};
// node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function Cr(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
// node_modules/motion-dom/dist/es/value/index.mjs
var wr = 30, Tr = (e) => !isNaN(parseFloat(e)), Er = { current: void 0 }, Dr = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = B.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = B.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Tr(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new oe());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), R.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return Er.current && Er.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = B.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > wr) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, wr);
		return /* @__PURE__ */ I(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function Or(e, t) {
	return new Dr(e, t);
}
// node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function kr(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
// node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function Ar(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : kr(n, e);
}
// node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var jr = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, Mr = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), Nr = {
	type: "keyframes",
	duration: .8
}, Pr = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, Fr = (e, { keyframes: t }) => t.length > 2 ? Nr : Nn.has(e) ? e.startsWith("scale") ? Mr(t[1]) : jr : Pr, Ir = /* @__PURE__ */ new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
function Lr(e) {
	for (let t in e) if (!Ir.has(t)) return !0;
	return !1;
}
// node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var Rr = (e, t, n, r = {}, i, a) => (o) => {
	let s = Ar(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ P(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	Lr(s) || Object.assign(u, Fr(e, u)), u.duration &&= /* @__PURE__ */ P(u.duration), u.repeatDelay &&= /* @__PURE__ */ P(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (mr(u), u.delay === 0 && (d = !0)), (k.instantAnimations || k.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) && (d = !0, mr(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = pn(u.keyframes, s);
		if (e !== void 0) {
			R.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new vn(u) : new Sr(u);
}, zr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Br(e) {
	let t = zr.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
function Vr(e, t, n = 1) {
	`${e}`;
	let [r, i] = Br(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return A(e) ? parseFloat(e) : e;
	}
	return ze(i) ? Vr(i, t, n + 1) : i;
}
// node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function Hr(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function Ur(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = Hr(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = Hr(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
// node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function Wr(e, t, n) {
	let r = e.getProps();
	return Ur(r, t, n === void 0 ? r.custom : n, e);
}
// node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var Gr = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...Mn
]), Kr = (e) => Array.isArray(e);
// node_modules/motion-dom/dist/es/render/utils/setters.mjs
function qr(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Or(n));
}
function Jr(e) {
	return Kr(e) ? e[e.length - 1] || 0 : e;
}
function Yr(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = Wr(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) qr(e, t, Jr(i[t]));
}
// node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var q = (e) => !!(e && e.getVelocity);
// node_modules/motion-dom/dist/es/value/will-change/is.mjs
function Xr(e) {
	return !!(q(e) && e.add);
}
// node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function Zr(e, t) {
	let n = e.getValue("willChange");
	if (Xr(n)) return n.add(t);
	if (!n && k.WillChange) {
		let n = new k.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
// node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function Qr(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var $r = "data-" + Qr("framerAppearId");
// node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function ei(e) {
	return e.props[$r];
}
// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function ti({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function ni(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? kr(a, c) : c;
	let l = a?.reduceMotion, u = a?.skipAnimations;
	r && (a = r);
	let d = [], f = i && e.animationState && e.animationState.getState()[i], p = a?.path;
	p && p.animateVisualElement(e, s, a, n, d);
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || f && ti(f, t)) continue;
		let o = {
			delay: n,
			...Ar(a || {}, t)
		};
		u && (o.skipAnimations = !0);
		let c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			R.update(() => r.set(i));
			continue;
		}
		let p = !1;
		if (window.MotionHandoffAnimation) {
			let n = ei(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, R);
				e !== null && (o.startTime = e, p = !0);
			}
		}
		Zr(e, t);
		let m = l ?? e.shouldReduceMotion;
		r.start(Rr(t, r, i, m && Gr.has(t) ? { type: !1 } : o, e, p));
		let h = r.animation;
		h && d.push(h);
	}
	if (o) {
		let t = () => R.update(() => {
			o && Yr(e, o);
		});
		d.length ? Promise.all(d).then(t) : t();
	}
	return d;
}
// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function ri(e, t, n = {}) {
	let r = Wr(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(ni(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return ii(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	}
	return Promise.all([a(), o(n.delay)]);
}
function ii(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(ri(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + Cr(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
// node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function ai(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => ri(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = ri(e, t, n);
	else {
		let i = typeof t == "function" ? Wr(e, t, n.custom) : t;
		r = Promise.all(ni(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
// node_modules/motion-dom/dist/es/value/types/auto.mjs
var oi = {
	test: (e) => e === "auto",
	parse: (e) => e
}, si = (e) => (t) => t.test(e), ci = [
	He,
	H,
	V,
	rt,
	at,
	it,
	oi
], li = (e) => ci.find(si(e));
// node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function ui(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || M(e);
}
// node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var di = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function fi(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Ke) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!di.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var pi = /\b([a-z-]*)\(.*?\)/gu, mi = {
	...W,
	getAnimatableNone: (e) => {
		let t = e.match(pi);
		return t ? t.map(fi).join(" ") : e;
	}
}, hi = {
	...W,
	getAnimatableNone: (e) => {
		let t = W.parse(e);
		return W.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, gi = {
	...He,
	transform: Math.round
}, _i = {
	borderWidth: H,
	borderTopWidth: H,
	borderRightWidth: H,
	borderBottomWidth: H,
	borderLeftWidth: H,
	borderRadius: H,
	borderTopLeftRadius: H,
	borderTopRightRadius: H,
	borderBottomRightRadius: H,
	borderBottomLeftRadius: H,
	width: H,
	maxWidth: H,
	height: H,
	maxHeight: H,
	top: H,
	right: H,
	bottom: H,
	left: H,
	inset: H,
	insetBlock: H,
	insetBlockStart: H,
	insetBlockEnd: H,
	insetInline: H,
	insetInlineStart: H,
	insetInlineEnd: H,
	padding: H,
	paddingTop: H,
	paddingRight: H,
	paddingBottom: H,
	paddingLeft: H,
	paddingBlock: H,
	paddingBlockStart: H,
	paddingBlockEnd: H,
	paddingInline: H,
	paddingInlineStart: H,
	paddingInlineEnd: H,
	margin: H,
	marginTop: H,
	marginRight: H,
	marginBottom: H,
	marginLeft: H,
	marginBlock: H,
	marginBlockStart: H,
	marginBlockEnd: H,
	marginInline: H,
	marginInlineStart: H,
	marginInlineEnd: H,
	fontSize: H,
	backgroundPositionX: H,
	backgroundPositionY: H,
	rotate: rt,
	pathRotation: rt,
	rotateX: rt,
	rotateY: rt,
	rotateZ: rt,
	scale: We,
	scaleX: We,
	scaleY: We,
	scaleZ: We,
	skew: rt,
	skewX: rt,
	skewY: rt,
	distance: H,
	translateX: H,
	translateY: H,
	translateZ: H,
	x: H,
	y: H,
	z: H,
	perspective: H,
	transformPerspective: H,
	opacity: Ue,
	originX: ot,
	originY: ot,
	originZ: H,
	zIndex: gi,
	fillOpacity: Ue,
	strokeOpacity: Ue,
	numOctaves: gi
}, vi = {
	..._i,
	color: U,
	backgroundColor: U,
	outlineColor: U,
	fill: U,
	stroke: U,
	borderColor: U,
	borderTopColor: U,
	borderRightColor: U,
	borderBottomColor: U,
	borderLeftColor: U,
	filter: mi,
	WebkitFilter: mi,
	mask: hi,
	WebkitMask: hi
}, yi = (e) => vi[e], bi = /*@__PURE__*/ new Set([mi, hi]);
function xi(e, t) {
	let n = yi(e);
	return bi.has(n) || (n = W), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
// node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var Si = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function Ci(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !Si.has(t) && gt(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = xi(n, i);
}
// node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var wi = class extends Kn {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), ze(r))) {
				let i = Vr(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !Gr.has(n) || e.length !== 2) return;
		let [r, i] = e, a = li(r), o = li(i);
		if (Ve(r) !== Ve(i) && Rn[n]) this.needsMeasurement = !0;
		else if (a !== o) {
			if (Pn(a) && Pn(o)) for (let t = 0; t < e.length; t++) {
				let n = e[t];
				typeof n == "string" && (e[t] = parseFloat(n));
			}
			else Rn[n] && (this.needsMeasurement = !0);
		}
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || ui(e[t])) && n.push(t);
		n.length && Ci(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Rn[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = Rn[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
}, Ti = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomRightRadius",
	"borderBottomLeftRadius"
];
// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function Ei(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
// node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var Di = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
// node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function Oi(e) {
	return j(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
// node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: ki, cancel: Ai } = /* @__PURE__ */ je(queueMicrotask, !1), J = {
	x: !1,
	y: !1
};
function ji() {
	return J.x || J.y;
}
// node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function Mi(e) {
	return e === "x" || e === "y" ? J[e] ? null : (J[e] = !0, () => {
		J[e] = !1;
	}) : J.x || J.y ? null : (J.x = J.y = !0, () => {
		J.x = J.y = !1;
	});
}
// node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function Ni(e, t) {
	let n = Ei(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
// node_modules/motion-dom/dist/es/gestures/hover.mjs
function Pi(e) {
	return !(e.pointerType === "touch" || ji());
}
function Fi(e, t, n = {}) {
	let [r, i, a] = Ni(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", u);
		}, s = (e) => {
			a &&= (a(e), void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", c, i);
		}, u = (e) => {
			e.pointerType !== "touch" && (n ? r = !0 : s(e));
		};
		e.addEventListener("pointerenter", (n) => {
			if (!Pi(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
// node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var Ii = (e, t) => t ? e === t || Ii(e, t.parentElement) : !1, Li = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Ri = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function zi(e) {
	return Ri.has(e.tagName) || e.isContentEditable === !0;
}
var Bi = /* @__PURE__ */ new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function Vi(e) {
	return Bi.has(e.tagName) || e.isContentEditable === !0;
}
// node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var Hi = /* @__PURE__ */ new WeakSet();
// node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function Ui(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function Wi(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var Gi = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = Ui(() => {
		if (Hi.has(n)) return;
		Wi(n, "down");
		let e = Ui(() => {
			Wi(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => Wi(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
// node_modules/motion-dom/dist/es/gestures/press/index.mjs
function Ki(e) {
	return Li(e) && !ji();
}
var qi = /* @__PURE__ */ new WeakSet();
function Ji(e, t, n = {}) {
	let [r, i, a] = Ni(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!Ki(e) || qi.has(e)) return;
		Hi.add(r), n.stopPropagation && qi.add(e);
		let a = t(r, e), o = {
			...i,
			capture: !0
		}, s = (e, t) => {
			window.removeEventListener("pointerup", c, o), window.removeEventListener("pointercancel", l, o), Hi.has(r) && Hi.delete(r), Ki(e) && typeof a == "function" && a(e, { success: t });
		}, c = (e) => {
			s(e, r === window || r === document || n.useGlobalTarget || Ii(r, e.target));
		}, l = (e) => {
			s(e, !1);
		};
		window.addEventListener("pointerup", c, o), window.addEventListener("pointercancel", l, o);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), Oi(e) && (e.addEventListener("focus", (e) => Gi(e, i)), !zi(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
// node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function Yi(e) {
	return j(e) && "ownerSVGElement" in e;
}
// node_modules/motion-dom/dist/es/resize/handle-element.mjs
var Xi = /* @__PURE__ */ new WeakMap(), Zi, Qi = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : Yi(r) && "getBBox" in r ? r.getBBox()[t] : r[n], $i = /*@__PURE__*/ Qi("inline", "width", "offsetWidth"), ea = /*@__PURE__*/ Qi("block", "height", "offsetHeight");
function ta({ target: e, borderBoxSize: t }) {
	Xi.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return $i(e, t);
			},
			get height() {
				return ea(e, t);
			}
		});
	});
}
function na(e) {
	e.forEach(ta);
}
function ra() {
	typeof ResizeObserver < "u" && (Zi = new ResizeObserver(na));
}
function ia(e, t) {
	Zi || ra();
	let n = Ei(e);
	return n.forEach((e) => {
		let n = Xi.get(e);
		n || (n = /* @__PURE__ */ new Set(), Xi.set(e, n)), n.add(t), Zi?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = Xi.get(e);
			n?.delete(t), n?.size || Zi?.unobserve(e);
		});
	};
}
// node_modules/motion-dom/dist/es/resize/handle-window.mjs
var aa = /* @__PURE__ */ new Set(), oa;
function sa() {
	oa = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		aa.forEach((t) => t(e));
	}, window.addEventListener("resize", oa);
}
function ca(e) {
	return aa.add(e), oa || sa(), () => {
		aa.delete(e), !aa.size && typeof oa == "function" && (window.removeEventListener("resize", oa), oa = void 0);
	};
}
// node_modules/motion-dom/dist/es/resize/index.mjs
function la(e, t) {
	return typeof e == "function" ? ca(e) : ia(e, t);
}
// node_modules/motion-dom/dist/es/stats/buffer.mjs
var ua = {
	value: null,
	addProjectionMetrics: null
};
// node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function da(e) {
	return Yi(e) && e.tagName === "svg";
}
// node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var fa = [
	...ci,
	U,
	W
], pa = (e) => fa.find(si(e)), ma = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), ha = () => ({
	x: ma(),
	y: ma()
}), ga = () => ({
	min: 0,
	max: 0
}), Y = () => ({
	x: ga(),
	y: ga()
}), _a = /* @__PURE__ */ new WeakMap();
// node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function va(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
// node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function ya(e) {
	return typeof e == "string" || Array.isArray(e);
}
// node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var ba = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], xa = ["initial", ...ba];
// node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function Sa(e) {
	return va(e.animate) || xa.some((t) => ya(e[t]));
}
function Ca(e) {
	return !!(Sa(e) || e.variants);
}
// node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function wa(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (q(i)) e.addValue(r, i);
		else if (q(a)) e.addValue(r, Or(i, { owner: e }));
		else if (a !== i) {
			if (e.hasValue(r)) {
				let t = e.getValue(r);
				t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
			} else {
				let t = e.getStaticValue(r);
				e.addValue(r, Or(t === void 0 ? i : t, { owner: e }));
			}
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
// node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var Ta = { current: null }, Ea = { current: !1 }, Da = typeof window < "u";
function Oa() {
	if (Ea.current = !0, Da) {
		if (window.matchMedia) {
			let e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ta.current = e.matches;
			e.addEventListener("change", t), t();
		} else Ta.current = !1;
	}
}
// node_modules/motion-dom/dist/es/render/VisualElement.mjs
var ka = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Aa = {};
function ja(e) {
	Aa = e;
}
function Ma() {
	return Aa;
}
var Na = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Kn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = B.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, R.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = Sa(t), this.isVariantNode = Ca(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && q(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, _a.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Ea.current || Oa(), this.shouldReduceMotion = Ta.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), Me(this.notifyUpdate), Me(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && hr.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new ar({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ P(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = Nn.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && R.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in Aa) {
			let t = Aa[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Y();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < ka.length; t++) {
			let n = ka[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = wa(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = Or(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (A(n) || M(n)) ? n = parseFloat(n) : !pa(n) && W.test(t) && (n = xi(e, t)), this.setBaseTarget(e, q(n) ? n.get() : n)), q(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = Ur(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !q(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new oe()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		ki.render(this.render);
	}
}, Pa = class extends Na {
	constructor() {
		super(...arguments), this.KeyframeResolver = wi;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		q(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, Fa = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
// node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function Ia({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function La({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function Ra(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
// node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function za(e) {
	return e === void 0 || e === 1;
}
function Ba({ scale: e, scaleX: t, scaleY: n }) {
	return !za(e) || !za(t) || !za(n);
}
function Va(e) {
	return Ba(e) || Ha(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Ha(e) {
	return Ua(e.x) || Ua(e.y);
}
function Ua(e) {
	return e && e !== "0%";
}
// node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function Wa(e, t, n) {
	return n + t * (e - n);
}
function Ga(e, t, n, r, i) {
	return i !== void 0 && (e = Wa(e, i, r)), Wa(e, n, r) + t;
}
function Ka(e, t = 0, n = 1, r, i) {
	e.min = Ga(e.min, t, n, r, i), e.max = Ga(e.max, t, n, r, i);
}
function qa(e, { x: t, y: n }) {
	Ka(e.x, t.translate, t.scale, t.originPoint), Ka(e.y, n.translate, n.scale, n.originPoint);
}
var Ja = .999999999999, Ya = 1.0000000000001;
function Xa(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && (Za(e.x, -a.scroll.offset.x), Za(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, qa(e, o)), r && Va(a.latestValues) && eo(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < Ya && t.x > Ja && (t.x = 1), t.y < Ya && t.y > Ja && (t.y = 1);
}
function Za(e, t) {
	e.min += t, e.max += t;
}
function Qa(e, t, n, r, i = .5) {
	Ka(e, t, n, G(e.min, e.max, i), r);
}
function $a(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function eo(e, t, n) {
	let r = n ?? e;
	Qa(e.x, $a(t.x, r.x), t.scaleX, t.scale, t.originX), Qa(e.y, $a(t.y, r.y), t.scaleY, t.scale, t.originY);
}
// node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function to(e, t) {
	return Ia(Ra(e.getBoundingClientRect(), t));
}
function no(e, t, n) {
	let r = to(e, n), { scroll: i } = t;
	return i && (Za(r.x, i.offset.x), Za(r.y, i.offset.y)), r;
}
// node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var ro = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, io = Mn.length;
function ao(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < io; a++) {
		let o = Mn[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = Di(s, _i[o]);
			if (!c) {
				i = !1;
				let t = ro[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	let a = e.pathRotation;
	return a && (i = !1, r += `rotate(${Di(a, _i.pathRotation)}) `), r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
// node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function oo(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (Nn.has(e)) o = !0;
		else if (Le(e)) i[e] = n;
		else {
			let t = Di(n, _i[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = ao(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
// node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function so(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
// node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function co(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var lo = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") {
		if (H.test(e)) e = parseFloat(e);
		else return e;
	}
	return `${co(e, t.target.x)}% ${co(e, t.target.y)}%`;
} }, uo = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = W.parse(e);
	if (i.length > 5) return r;
	let a = W.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = G(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, fo = {
	borderRadius: {
		...lo,
		applyTo: [...Ti]
	},
	borderTopLeftRadius: lo,
	borderTopRightRadius: lo,
	borderBottomLeftRadius: lo,
	borderBottomRightRadius: lo,
	boxShadow: uo
};
// node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function po(e, { layout: t, layoutId: n }) {
	return Nn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!fo[e] || e === "opacity");
}
// node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function mo(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (q(r[t]) || i && q(i[t]) || po(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
// node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function ho(e) {
	return window.getComputedStyle(e);
}
var go = class extends Pa {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = so;
	}
	mount(e) {
		e.style, super.mount(e);
	}
	readValueFromInstance(e, t) {
		if (Nn.has(t)) return this.projection?.isProjecting ? On(t) : An(e, t);
		{
			let n = ho(e), r = (Le(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return to(e, t);
	}
	build(e, t, n) {
		oo(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return mo(e, t, n);
	}
}, _o = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, vo = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function yo(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? _o : vo;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
// node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var bo = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function xo(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (oo(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of bo) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && yo(d, i, a, o, !1);
}
// node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var So = /* @__PURE__ */ new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]), Co = (e) => typeof e == "string" && e.toLowerCase() === "svg";
// node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function wo(e, t, n, r) {
	so(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(So.has(n) ? n : Qr(n), t.attrs[n]);
}
// node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function To(e, t, n) {
	let r = mo(e, t, n);
	for (let n in e) if (q(e[n]) || q(t[n])) {
		let t = Mn.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
// node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var Eo = class extends Pa {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Y;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (Nn.has(t)) {
			let e = yi(t);
			return e && e.default || 0;
		}
		return t = So.has(t) ? t : Qr(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return To(e, t, n);
	}
	build(e, t, n) {
		xo(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		wo(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = Co(e.tagName), super.mount(e);
	}
}, Do = xa.length;
function Oo(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Oo(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < Do; n++) {
		let r = xa[n], i = e.props[r];
		(ya(i) || i === !1) && (t[r] = i);
	}
	return t;
}
// node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function ko(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
// node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var Ao = [...ba].reverse(), jo = ba.length;
function Mo(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => ai(e, t, n)));
}
function No(e) {
	let t = Mo(e), n = Io(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = Wr(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function o(n) {
		t = n(e);
	}
	function s(o) {
		let { props: s } = e, c = Oo(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < jo; t++) {
			let p = Ao[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = ya(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || va(h) || typeof h == "boolean") continue;
			if (p === "exit" && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = Po(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: w = {} } = m, ee = {
				...w,
				...C
			}, T = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in ee) {
				let t = C[e], n = w[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = Kr(t) && Kr(n) ? !ko(t, n) || y : t !== n, r ? t == null ? u.add(e) : T(e) : t !== void 0 && u.has(e) ? T(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let te = v && y;
			b && (!te || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !te && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = Wr(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = Cr(r.enteringChildren, e, t);
					}
				}
				return {
					animation: t,
					options: n
				};
			}));
		}
		if (u.size) {
			let t = {};
			if (typeof s.initial != "boolean") {
				let n = Wr(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
				n && n.transition && (t.transition = n.transition);
			}
			u.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), l.push({ animation: t });
		}
		let p = !!l.length;
		return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve();
	}
	function c(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = s(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: s,
		setActive: c,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			n = Io(), i = !0;
		}
	};
}
function Po(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !ko(t, e) : !1;
}
function Fo(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function Io() {
	return {
		animate: Fo(!0),
		whileInView: Fo(),
		whileHover: Fo(),
		whileTap: Fo(),
		whileDrag: Fo(),
		whileFocus: Fo(),
		exit: Fo()
	};
}
// node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function Lo(e, t) {
	e.min = t.min, e.max = t.max;
}
function X(e, t) {
	Lo(e.x, t.x), Lo(e.y, t.y);
}
function Ro(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
// node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var zo = .9999, Bo = 1.0001, Vo = -.01, Ho = .01;
function Z(e) {
	return e.max - e.min;
}
function Uo(e, t, n) {
	return Math.abs(e - t) <= n;
}
function Wo(e, t, n, r = .5) {
	e.origin = r, e.originPoint = G(t.min, t.max, e.origin), e.scale = Z(n) / Z(t), e.translate = G(n.min, n.max, e.origin) - e.originPoint, (e.scale >= zo && e.scale <= Bo || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Vo && e.translate <= Ho || isNaN(e.translate)) && (e.translate = 0);
}
function Go(e, t, n, r) {
	Wo(e.x, t.x, n.x, r ? r.originX : void 0), Wo(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ko(e, t, n, r = 0) {
	e.min = (r ? G(n.min, n.max, r) : n.min) + t.min, e.max = e.min + Z(t);
}
function qo(e, t, n, r) {
	Ko(e.x, t.x, n.x, r?.x), Ko(e.y, t.y, n.y, r?.y);
}
function Jo(e, t, n, r = 0) {
	let i = r ? G(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + Z(t);
}
function Yo(e, t, n, r) {
	Jo(e.x, t.x, n.x, r?.x), Jo(e.y, t.y, n.y, r?.y);
}
// node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function Xo(e, t, n, r, i) {
	return e -= t, e = Wa(e, 1 / n, r), i !== void 0 && (e = Wa(e, 1 / i, r)), e;
}
function Zo(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (V.test(t) && (t = parseFloat(t), t = G(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = G(a.min, a.max, r);
	e === a && (s -= t), e.min = Xo(e.min, t, n, s, i), e.max = Xo(e.max, t, n, s, i);
}
function Qo(e, t, [n, r, i], a, o) {
	Zo(e, t[n], t[r], t[i], t.scale, a, o);
}
var $o = [
	"x",
	"scaleX",
	"originX"
], es = [
	"y",
	"scaleY",
	"originY"
];
function ts(e, t, n, r) {
	Qo(e.x, t, $o, n ? n.x : void 0, r ? r.x : void 0), Qo(e.y, t, es, n ? n.y : void 0, r ? r.y : void 0);
}
// node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function ns(e) {
	return e.translate === 0 && e.scale === 1;
}
function rs(e) {
	return ns(e.x) && ns(e.y);
}
function is(e, t) {
	return e.min === t.min && e.max === t.max;
}
function as(e, t) {
	return is(e.x, t.x) && is(e.y, t.y);
}
function os(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ss(e, t) {
	return os(e.x, t.x) && os(e.y, t.y);
}
function cs(e) {
	return Z(e.x) / Z(e.y);
}
function ls(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
// node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function Q(e) {
	return [e("x"), e("y")];
}
// node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function us(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, pathRotation: i, rotateX: a, rotateY: o, skewX: s, skewY: c } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotate(${i}deg) `), a && (r += `rotateX(${a}deg) `), o && (r += `rotateY(${o}deg) `), s && (r += `skewX(${s}deg) `), c && (r += `skewY(${c}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
// node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var ds = Ti.length, fs = (e) => typeof e == "string" ? parseFloat(e) : e, ps = (e) => typeof e == "number" || H.test(e);
function ms(e, t, n, r, i, a) {
	i ? (e.opacity = G(0, n.opacity ?? 1, gs(r)), e.opacityExit = G(t.opacity ?? 1, 0, _s(r))) : a && (e.opacity = G(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < ds; i++) {
		let a = Ti[i], o = hs(t, a), s = hs(n, a);
		(o !== void 0 || s !== void 0) && (o ||= 0, s ||= 0, o === 0 || s === 0 || ps(o) === ps(s) ? (e[a] = Math.max(G(fs(o), fs(s), r), 0), (V.test(s) || V.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r));
}
function hs(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var gs = /*@__PURE__*/ vs(0, .5, ve), _s = /*@__PURE__*/ vs(.5, .95, N);
function vs(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ ae(e, t, r));
}
// node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function ys(e, t, n) {
	let r = q(e) ? e : Or(e);
	return r.start(Rr("", r, t, n)), r.animation;
}
// node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function bs(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
// node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var xs = (e, t) => e.depth - t.depth, Ss = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		E(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		D(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(xs), this.isDirty = !1, this.children.forEach(e);
	}
};
// node_modules/motion-dom/dist/es/utils/delay.mjs
function Cs(e, t) {
	let n = B.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (Me(r), e(a - t));
	};
	return R.setup(r, !0), () => Me(r);
}
// node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function ws(e) {
	return q(e) ? e.get() : e;
}
// node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var Ts = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		E(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			r && r.isConnected !== !1 || n.snapshot || (D(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (D(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
			let e = this.members[t];
			if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return this.promote(e), !0;
		}
		return !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.updateSnapshot(), e.scheduleRender();
			let { layoutDependency: r } = n.options, { layoutDependency: i } = e.options;
			(r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => e.instance && e.scheduleRender(!1));
	}
	removeLeadSnapshot() {
		this.lead?.snapshot && (this.lead.snapshot = void 0);
	}
}, Es = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, Ds = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, Os = [
	"",
	"X",
	"Y",
	"Z"
], ks = 1e3, As = 0;
function js(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ms(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = ei(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", R, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && Ms(r);
}
function Ns({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = As++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, ua.value && (Ds.nodes = Ds.calculatedTargetDeltas = Ds.calculatedProjections = 0), this.nodes.forEach(Is), this.nodes.forEach(Gs), this.nodes.forEach(Ks), this.nodes.forEach(Ls), ua.addProjectionMetrics && ua.addProjectionMetrics(Ds);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Ss());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new oe()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = Yi(t) && !da(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				R.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = Cs(i, 250), Es.hasAnimatedSinceResize && (Es.hasAnimatedSinceResize = !1, this.nodes.forEach(Ws)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || $s, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !ss(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...Ar(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l, t.path);
				} else t || Ws(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Me(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(qs), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ms(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, (typeof t.latestValues.x == "string" || typeof t.latestValues.y == "string") && (t.isLayoutDirty = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				let e = this.updateBlockedByResize;
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Bs), this.nodes.forEach(zs);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Vs);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Hs), this.nodes.forEach(Us), this.nodes.forEach(Ps), this.nodes.forEach(Fs)) : this.nodes.forEach(Vs), this.clearAllSnapshots();
			let e = B.now();
			z.delta = O(0, 1e3 / 60, e - z.timestamp), z.timestamp = e, z.isProcessing = !0, Ne.update.process(z), Ne.preRender.process(z), Ne.render.process(z), z.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, ki.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Rs), this.sharedNodes.forEach(Js);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, R.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			R.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			!this.snapshot && this.instance && (this.snapshot = this.measure(), this.snapshot && !Z(this.snapshot.measuredBox.x) && !Z(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= Y(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !rs(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || Va(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), rc(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return Y();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(ac))) {
				let { scroll: e } = this.root;
				e && (Za(t.x, e.offset.x), Za(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = Y();
			if (X(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && X(t, e), Za(t.x, i.offset.x), Za(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n) {
			let r = n || Y();
			X(r, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (Za(r.x, -n.scroll.offset.x), Za(r.y, -n.scroll.offset.y)), Va(n.latestValues) && eo(r, n.latestValues, n.layout?.layoutBox);
			}
			return Va(this.latestValues) && eo(r, this.latestValues, this.layout?.layoutBox), r;
		}
		removeTransform(e) {
			let t = Y();
			X(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!Va(n.latestValues)) continue;
				let r;
				n.instance && (Ba(n.latestValues) && n.updateSnapshot(), r = Y(), X(r, n.measurePageBox())), ts(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return Va(this.latestValues) && ts(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 || e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== z.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = z.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = Y(), this.targetWithTransforms = Y()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), qo(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : X(this.target, this.layout.layoutBox), qa(this.target, this.targetDelta)) : X(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), ua.value && Ds.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Ba(this.parent.latestValues) || Ha(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), Yo(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), X(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === z.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			X(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			Xa(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = Y());
			let { target: s } = e;
			s ? (!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ro(this.prevProjectionDelta.x, this.projectionDelta.x), Ro(this.prevProjectionDelta.y, this.projectionDelta.y)), Go(this.projectionDelta, this.layoutCorrected, s, this.latestValues), this.treeScale.x === a && this.treeScale.y === o && ls(this.projectionDelta.x, this.prevProjectionDelta.x) && ls(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), ua.value && Ds.calculatedProjections++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = ha(), this.projectionDelta = ha(), this.projectionDeltaWithTransform = ha();
		}
		setAnimationOrigin(e, t = !1, n) {
			let r = this.snapshot, i = r ? r.latestValues : {}, a = { ...this.latestValues }, o = ha();
			this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let s = Y(), c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0), l = this.getStack(), u = !l || l.members.length <= 1, d = !(!c || u || this.options.crossfade !== !0 || this.path.some(Qs));
			this.animationProgress = 0;
			let f, p = n?.interpolateProjection(e);
			this.mixTargetDelta = (t) => {
				let n = t / 1e3, r = p?.(n);
				r ? (o.x.translate = r.x, o.x.scale = G(e.x.scale, 1, n), o.x.origin = e.x.origin, o.x.originPoint = e.x.originPoint, o.y.translate = r.y, o.y.scale = G(e.y.scale, 1, n), o.y.origin = e.y.origin, o.y.originPoint = e.y.originPoint) : (Ys(o.x, e.x, n), Ys(o.y, e.y, n)), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Yo(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Zs(this.relativeTarget, this.relativeTargetOrigin, s, n), f && as(this.relativeTarget, f) && (this.isProjectionDirty = !1), f ||= Y(), X(f, this.relativeTarget)), c && (this.animationValues = a, ms(a, i, this.latestValues, n, d, u)), r && r.rotate !== void 0 && (this.animationValues ||= a, this.animationValues.pathRotation = r.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (Me(this.pendingAnimation), void 0), this.pendingAnimation = R.update(() => {
				Es.hasAnimatedSinceResize = !0, this.motionValue ||= Or(0), this.motionValue.jump(0, !1), this.currentAnimation = ys(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onComplete: () => {
						e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ks), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (t && n && r) {
				if (this !== e && this.layout && r && ic(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || Y();
					let t = Z(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = Z(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				X(t, n), eo(t, i), Go(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new Ts()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return !e || e.lead === this;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && js("z", e, r, this.animationValues);
			for (let t = 0; t < Os.length; t++) js(`rotate${Os[t]}`, e, r, this.animationValues), js(`skew${Os[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		applyProjectionStyles(e, t) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				e.visibility = "hidden";
				return;
			}
			let n = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = ws(t?.pointerEvents) || "", e.transform = n ? n(this.latestValues, "") : "none";
				return;
			}
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = ws(t?.pointerEvents) || ""), this.hasProjected && !Va(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = us(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, e.opacity = r.animationValues ? r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in fo) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: s } = fo[t], c = a === "none" ? i[t] : n(i[t], r);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = r === this ? ws(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(zs), this.root.sharedNodes.clear();
		}
	};
}
function Ps(e) {
	e.updateLayout();
}
function Fs(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		if (i === "size") Q((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = Z(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === "x" || i === "y") {
			let e = i === "x" ? "y" : "x";
			Lo(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else ic(i, t.layoutBox, n) && Q((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = Z(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = ha();
		Go(o, n, t.layoutBox);
		let s = ha();
		a ? Go(s, e.applyTransform(r, !0), t.measuredBox) : Go(s, n, t.layoutBox);
		let c = !rs(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = Y();
					Yo(s, t.layoutBox, i.layoutBox, o);
					let c = Y();
					Yo(c, n, a.layoutBox, o), ss(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: l
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function Is(e) {
	ua.value && Ds.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function Ls(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Rs(e) {
	e.clearSnapshot();
}
function zs(e) {
	e.clearMeasurements();
}
function Bs(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function Vs(e) {
	e.isLayoutDirty = !1;
}
function Hs(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function Us(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Ws(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Gs(e) {
	e.resolveTargetDelta();
}
function Ks(e) {
	e.calcProjection();
}
function qs(e) {
	e.resetSkewAndRotation();
}
function Js(e) {
	e.removeLeadSnapshot();
}
function Ys(e, t, n) {
	e.translate = G(t.translate, 0, n), e.scale = G(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Xs(e, t, n, r) {
	e.min = G(t.min, n.min, r), e.max = G(t.max, n.max, r);
}
function Zs(e, t, n, r) {
	Xs(e.x, t.x, n.x, r), Xs(e.y, t.y, n.y, r);
}
function Qs(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var $s = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, ec = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), tc = ec("applewebkit/") && !ec("chrome/") ? Math.round : N;
function nc(e) {
	e.min = tc(e.min), e.max = tc(e.max);
}
function rc(e) {
	nc(e.x), nc(e.y);
}
function ic(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !Uo(cs(t), cs(n), .2);
}
function ac(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
// node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var oc = Ns({
	attachResizeListener: (e, t) => bs(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), sc = { current: void 0 }, cc = Ns({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!sc.current) {
			let e = new oc({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), sc.current = e;
		}
		return sc.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), lc = (0, w.createContext)({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function uc(e = !0) {
	let t = (0, w.useContext)(ne);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = (0, w.useId)();
	(0, w.useEffect)(() => {
		if (e) return i(a);
	}, [e]);
	let o = (0, w.useCallback)(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var dc = (0, w.createContext)({ strict: !1 }), fc = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, pc = !1;
function mc() {
	if (pc) return;
	let e = {};
	for (let t in fc) e[t] = { isEnabled: (e) => fc[t].some((t) => !!e[t]) };
	ja(e), pc = !0;
}
function hc() {
	return mc(), Ma();
}
// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function gc(e) {
	let t = hc();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	ja(t);
}
// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var _c = /* @__PURE__ */ new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function vc(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || _c.has(e);
}
// __vite-optional-peer-dep:@emotion/is-prop-valid:framer-motion
var yc = /* @__PURE__ */ r({ default: () => bc }), bc, xc = n((() => {
	throw bc = {}, Error("Could not resolve \"@emotion/is-prop-valid\" imported by \"framer-motion\". Is it installed?");
})), Sc = (e) => !vc(e);
function Cc(e) {
	typeof e == "function" && (Sc = (t) => t.startsWith("on") ? !vc(t) : e(t));
}
try {
	Cc((xc(), t(yc)).default);
} catch {}
function wc(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || q(e[i]) || (Sc(i) || n === !0 && vc(i) || !t && !vc(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var Tc = /* @__PURE__ */ (0, w.createContext)({});
// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function Ec(e, t) {
	if (Sa(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || ya(t) ? t : void 0,
			animate: ya(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function Dc(e) {
	let { initial: t, animate: n } = Ec(e, (0, w.useContext)(Tc));
	return (0, w.useMemo)(() => ({
		initial: t,
		animate: n
	}), [Oc(t), Oc(n)]);
}
function Oc(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var kc = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function Ac(e, t, n) {
	for (let r in t) !q(t[r]) && !po(r, n) && (e[r] = t[r]);
}
function jc({ transformTemplate: e }, t) {
	return (0, w.useMemo)(() => {
		let n = kc();
		return oo(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Mc(e, t) {
	let n = e.style || {}, r = {};
	return Ac(r, n, e), Object.assign(r, jc(e, t)), r;
}
function Nc(e, t) {
	let n = {}, r = Mc(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var Pc = () => ({
	...kc(),
	attrs: {}
});
// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function Fc(e, t, n, r) {
	let i = (0, w.useMemo)(() => {
		let n = Pc();
		return xo(n, t, Co(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		Ac(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var Ic = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function Lc(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(Ic.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function Rc(e, t, n, { latestValues: r }, i, a = !1, o) {
	let s = (o ?? Lc(e) ? Fc : Nc)(t, r, i, e), c = wc(t, typeof e == "string", a), l = e === w.Fragment ? {} : {
		...c,
		...s,
		ref: n
	}, { children: u } = t, d = (0, w.useMemo)(() => q(u) ? u.get() : u, [u]);
	return (0, w.createElement)(e, {
		...l,
		children: d
	});
}
// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function zc({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: Bc(n, r, i, e),
		renderState: t()
	};
}
function Bc(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = ws(a[e]);
	let { initial: o, animate: s } = e, c = Sa(e), l = Ca(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !va(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = Ur(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
var Vc = (e) => (t, n) => {
	let r = (0, w.useContext)(Tc), i = (0, w.useContext)(ne), a = () => zc(e, t, r, i);
	return n ? a() : T(a);
}, Hc = /*@__PURE__*/ Vc({
	scrapeMotionValuesFromProps: mo,
	createRenderState: kc
}), Uc = /*@__PURE__*/ Vc({
	scrapeMotionValuesFromProps: To,
	createRenderState: Pc
}), Wc = Symbol.for("motionComponentSymbol");
// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function Gc(e, t, n) {
	let r = (0, w.useRef)(n);
	(0, w.useInsertionEffect)(() => {
		r.current = n;
	});
	let i = (0, w.useRef)(null);
	return (0, w.useCallback)((n) => {
		n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
		let a = r.current;
		if (typeof a == "function") {
			if (n) {
				let e = a(n);
				typeof e == "function" && (i.current = e);
			} else i.current ? (i.current(), i.current = null) : a(n);
		} else a && (a.current = n);
	}, [t]);
}
// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var Kc = (0, w.createContext)({});
// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function qc(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function Jc(e, t, n, r, i, a) {
	let { visualElement: o } = (0, w.useContext)(Tc), s = (0, w.useContext)(dc), c = (0, w.useContext)(ne), l = (0, w.useContext)(lc), u = l.reducedMotion, d = l.skipAnimations, f = (0, w.useRef)(null), p = (0, w.useRef)(!1);
	r ||= s.renderer, !f.current && r && (f.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: c,
		blockInitialAnimation: c ? c.initial === !1 : !1,
		reducedMotionConfig: u,
		skipAnimations: d,
		isSVG: a
	}), p.current && f.current && (f.current.manuallyAnimateOnMount = !0));
	let m = f.current, h = (0, w.useContext)(Kc);
	m && !m.projection && i && (m.type === "html" || m.type === "svg") && Yc(f.current, n, i, h);
	let g = (0, w.useRef)(!1);
	(0, w.useInsertionEffect)(() => {
		m && g.current && m.update(n, c);
	});
	let _ = n[$r], v = (0, w.useRef)(!!_ && typeof window < "u" && !window.MotionHandoffIsComplete?.(_) && window.MotionHasOptimisedAnimation?.(_));
	return te(() => {
		p.current = !0, m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges());
	}), (0, w.useEffect)(() => {
		m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(_);
		}), !1), m.enteringChildren = void 0);
	}), m;
}
function Yc(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Xc(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && qc(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: c,
		layoutRoot: l,
		layoutAnchor: u
	});
}
function Xc(e) {
	if (e) return e.options.allowProjection === !1 ? Xc(e.parent) : e.projection;
}
// node_modules/framer-motion/dist/es/motion/index.mjs
var $ = o();
function Zc(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	r && gc(r);
	let a = n ? n === "svg" : Lc(e), o = a ? Uc : Hc;
	function s(n, s) {
		let c, l = {
			...(0, w.useContext)(lc),
			...n,
			layoutId: Qc(n)
		}, { isStatic: u } = l, d = Dc(n), f = o(n, u);
		if (!u && typeof window < "u") {
			$c(l, r);
			let t = el(l);
			c = t.MeasureLayout, d.visualElement = Jc(e, f, l, i, t.ProjectionNode, a);
		}
		return (0, $.jsxs)(Tc.Provider, {
			value: d,
			children: [c && d.visualElement ? (0, $.jsx)(c, {
				visualElement: d.visualElement,
				...l
			}) : null, Rc(e, n, Gc(f, d.visualElement, s), f, u, t, a)]
		});
	}
	s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let c = (0, w.forwardRef)(s);
	return c[Wc] = e, c;
}
function Qc({ layoutId: e }) {
	let t = (0, w.useContext)(ee).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function $c(e, t) {
	(0, w.useContext)(dc).strict;
}
function el(e) {
	let { drag: t, layout: n } = hc();
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
// node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function tl(e, t) {
	if (typeof Proxy > "u") return Zc;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => Zc(n, r, e, t);
	return new Proxy((e, t) => r(e, t), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, Zc(a, void 0, e, t)), n.get(a)) });
}
// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var nl = (e, t) => t.isSVG ?? Lc(e) ? new Eo(t) : new go(t, { allowProjection: e !== w.Fragment }), rl = class extends Fa {
	constructor(e) {
		super(e), e.animationState ||= No(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		va(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, il = 0, al = {
	animation: { Feature: rl },
	exit: { Feature: class extends Fa {
		constructor() {
			super(...arguments), this.id = il++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == "string" || typeof e == "object" && e && !Array.isArray(e)) {
						let n = Wr(this.node, e, t);
						if (n) {
							let { transition: e, transitionEnd: t, ...r } = n;
							for (let e in r) this.node.getValue(e)?.jump(r[e]);
						}
					}
					this.node.animationState.reset(), this.node.animationState.animateChanges();
				} else this.node.animationState.setActive("exit", !1);
				this.isExitComplete = !1;
				return;
			}
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				this.isExitComplete = !0, t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
// node_modules/framer-motion/dist/es/events/event-info.mjs
function ol(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var sl = (e) => (t) => Li(t) && e(t, ol(t));
// node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function cl(e, t, n, r) {
	return bs(e, t, sl(n), r);
}
// node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var ll = ({ current: e }) => e ? e.ownerDocument.defaultView : null, ul = (e, t) => Math.abs(e - t);
function dl(e, t) {
	let n = ul(e.x, t.x), r = ul(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
// node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var fl = /*#__PURE__*/ new Set(["auto", "scroll"]), pl = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.lastRawMoveEventInfo && (this.lastMoveEventInfo = ml(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = gl(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = dl(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = z;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = ml(t, this.transformPagePoint), R.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = gl(e.type === "pointercancel" ? this.lastMoveEventInfo : ml(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !Li(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let s = ml(ol(e), this.transformPagePoint), { point: c } = s, { timestamp: l } = z;
		this.history = [{
			...c,
			timestamp: l
		}];
		let { onSessionStart: u } = t;
		u && u(e, gl(s, this.history));
		let d = {
			passive: !0,
			capture: !0
		};
		this.removeListeners = ie(cl(this.contextWindow, "pointermove", this.handlePointerMove, d), cl(this.contextWindow, "pointerup", this.handlePointerUp, d), cl(this.contextWindow, "pointercancel", this.handlePointerUp, d)), o && this.startScrollTracking(o);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(fl.has(e.overflowX) || fl.has(e.overflowY)) && this.scrollPositions.set(t, {
				x: t.scrollLeft,
				y: t.scrollTop
			}), t = t.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		}), window.addEventListener("scroll", this.onElementScroll, { capture: !0 }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	handleScroll(e) {
		let t = this.scrollPositions.get(e);
		if (!t) return;
		let n = e === window, r = n ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: e.scrollLeft,
			y: e.scrollTop
		}, i = {
			x: r.x - t.x,
			y: r.y - t.y
		};
		(i.x !== 0 || i.y !== 0) && (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), R.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Me(this.updatePoint);
	}
};
function ml(e, t) {
	return t ? { point: t(e.point) } : e;
}
function hl(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function gl({ point: e }, t) {
	return {
		point: e,
		delta: hl(e, vl(t)),
		offset: hl(e, _l(t)),
		velocity: yl(t, .1)
	};
}
function _l(e) {
	return e[0];
}
function vl(e) {
	return e[e.length - 1];
}
function yl(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = vl(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ P(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ P(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ F(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function bl(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? G(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)), e;
}
function xl(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function Sl(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: xl(e.x, n, i),
		y: xl(e.y, t, r)
	};
}
function Cl(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function wl(e, t) {
	return {
		x: Cl(e.x, t.x),
		y: Cl(e.y, t.y)
	};
}
function Tl(e, t) {
	let n = .5, r = Z(e), i = Z(t);
	return i > r ? n = /* @__PURE__ */ ae(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ ae(e.min, e.max - i, t.min)), O(0, 1, n);
}
function El(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Dl = .35;
function Ol(e = Dl) {
	return e === !1 ? e = 0 : e === !0 && (e = Dl), {
		x: kl(e, "left", "right"),
		y: kl(e, "top", "bottom")
	};
}
function kl(e, t, n) {
	return {
		min: Al(e, t),
		max: Al(e, n)
	};
}
function Al(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var jl = /* @__PURE__ */ new WeakMap(), Ml = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Y(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(ol(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = Mi(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Q((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (V.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = Z(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && R.update(() => i(e, t), !1, !0), Zr(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			r && this.currentDirection === null ? (this.currentDirection = Il(o), this.currentDirection !== null && i && i(this.currentDirection)) : (this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && R.update(() => a(e, t), !1, !0));
		}, s = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, c = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: l } = this.getProps();
		this.panSession = new pl(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: s,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: l,
			distanceThreshold: n,
			contextWindow: ll(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && R.postRender(() => o(n, r));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.endPanSession();
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1);
	}
	endPanSession() {
		this.panSession && this.panSession.end(), this.panSession = void 0;
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !Fl(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = bl(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && qc(e) ? this.constraints ||= this.resolveRefConstraints() : this.constraints = e && n ? Sl(n.layoutBox, e) : !1, this.elastic = Ol(t), r !== this.constraints && !qc(e) && n && this.constraints && !this.hasMutatedConstraints && Q((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = El(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !qc(e)) return !1;
		let n = e.current, { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		r.root && (r.root.scroll = void 0, r.root.updateScroll());
		let i = no(n, r.root, this.visualElement.getTransformPagePoint()), a = wl(r.layout.layoutBox, i);
		if (t) {
			let e = t(La(a));
			this.hasMutatedConstraints = !!e, e && (a = Ia(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = Q((o) => {
			if (!Fl(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			(a === !0 || a === o) && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return Zr(this.visualElement, e), n.start(Rr(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		Q((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`;
		return this.visualElement.getProps()[t] || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
	}
	snapToCursor(e) {
		Q((t) => {
			let { drag: n } = this.getProps();
			if (!Fl(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - G(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!qc(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		Q((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = Tl({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), Q((t) => {
			if (!Fl(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(G(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		jl.set(this.visualElement, this);
		let e = this.visualElement.current, t = cl(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && Vi(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			qc(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= Pl(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), R.read(r);
		let o = bs(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (Q((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			o(), t(), a(), s && s(), n && n();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = Dl, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function Nl(e) {
	let t = !0;
	return () => {
		t ? t = !1 : e();
	};
}
function Pl(e, t, n) {
	let r = la(e, Nl(n)), i = la(t, Nl(n));
	return () => {
		r(), i();
	};
}
function Fl(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function Il(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var Ll = class extends Fa {
	constructor(e) {
		super(e), this.removeGroupControls = N, this.removeListeners = N, this.controls = new Ml(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || N;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, Rl = (e) => (t, n) => {
	e && R.update(() => e(t, n), !1, !0);
}, zl = class extends Fa {
	constructor() {
		super(...arguments), this.removePointerDownListener = N;
	}
	onPointerDown(e) {
		this.session = new pl(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: ll(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: Rl(e),
			onStart: Rl(t),
			onMove: Rl(n),
			onEnd: (e, t) => {
				delete this.session, r && R.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = cl(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, Bl = !1, Vl = class extends w.Component {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), Bl && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), Es.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a && (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), Bl = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || R.postRender(() => {
			let e = a.getStack();
			e && e.members.length || this.safeToRemove();
		}))), null;
	}
	componentDidUpdate() {
		let { visualElement: e, layoutAnchor: t } = this.props, { projection: n } = e;
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), ki.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		Bl = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function Hl(e) {
	let [t, n] = uc(), r = (0, w.useContext)(ee);
	return (0, $.jsx)(Vl, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: (0, w.useContext)(Kc),
		isPresent: t,
		safeToRemove: n
	});
}
// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var Ul = {
	pan: { Feature: zl },
	drag: {
		Feature: Ll,
		ProjectionNode: cc,
		MeasureLayout: Hl
	}
};
// node_modules/framer-motion/dist/es/gestures/hover.mjs
function Wl(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && R.postRender(() => i(t, ol(t)));
}
var Gl = class extends Fa {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = Fi(e, (e, t) => (Wl(this.node, t, "Start"), (e) => Wl(this.node, e, "End"))));
	}
	unmount() {}
}, Kl = class extends Fa {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = ie(bs(this.node.current, "focus", () => this.onFocus()), bs(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
// node_modules/framer-motion/dist/es/gestures/press.mjs
function ql(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && R.postRender(() => i(t, ol(t)));
}
var Jl = class extends Fa {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = Ji(e, (e, t) => (ql(this.node, t, "Start"), (e, { success: t }) => ql(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, Yl = /* @__PURE__ */ new WeakMap(), Xl = /* @__PURE__ */ new WeakMap(), Zl = (e) => {
	let t = Yl.get(e.target);
	t && t(e);
}, Ql = (e) => {
	e.forEach(Zl);
};
function $l({ root: e, ...t }) {
	let n = e || document;
	Xl.has(n) || Xl.set(n, {});
	let r = Xl.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(Ql, {
		root: e,
		...t
	})), r[i];
}
function eu(e, t, n) {
	let r = $l(t);
	return Yl.set(e, n), r.observe(e), () => {
		Yl.delete(e), r.unobserve(e);
	};
}
// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var tu = {
	some: 0,
	all: 1
}, nu = class extends Fa {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : tu[r]
		}, o = (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		};
		this.stopObserver = eu(this.node.current, a, o);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(ru(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function ru({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var iu = {
	inView: { Feature: nu },
	tap: { Feature: Jl },
	focus: { Feature: Kl },
	hover: { Feature: Gl }
}, au = { layout: {
	ProjectionNode: cc,
	MeasureLayout: Hl
} }, ou = /*@__PURE__*/ tl({
	...al,
	...iu,
	...Ul,
	...au
}, nl);
// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
function su() {
	!Ea.current && Oa();
	let [e] = (0, w.useState)(Ta.current);
	return e;
}
// upstream/lib/message-animations.ts
var cu = [
	{
		id: "fade",
		name: "Fade",
		variants: {
			initial: { opacity: 0 },
			animate: {
				opacity: 1,
				transition: {
					duration: .22,
					ease: "easeOut"
				}
			},
			exit: {
				opacity: 0,
				transition: { duration: .15 }
			}
		}
	},
	{
		id: "slide-up",
		name: "Slide Up",
		variants: {
			initial: {
				opacity: 0,
				y: 10
			},
			animate: {
				opacity: 1,
				y: 0,
				transition: {
					duration: .26,
					ease: [
						.16,
						1,
						.3,
						1
					]
				}
			},
			exit: {
				opacity: 0,
				y: 4,
				transition: { duration: .15 }
			}
		}
	},
	{
		id: "slide-side",
		name: "Slide Side",
		variants: {
			initial: {
				opacity: 0,
				x: 18
			},
			animate: {
				opacity: 1,
				x: 0,
				transition: {
					duration: .28,
					ease: [
						.16,
						1,
						.3,
						1
					]
				}
			},
			exit: {
				opacity: 0,
				x: 8,
				transition: { duration: .15 }
			}
		}
	},
	{
		id: "pop",
		name: "Pop",
		variants: {
			initial: {
				opacity: 0,
				scale: .94,
				y: 6,
				originX: 1,
				originY: 1
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1,
				transition: {
					type: "spring",
					stiffness: 500,
					damping: 34,
					mass: .7
				}
			},
			exit: {
				opacity: 0,
				scale: .98,
				transition: { duration: .12 }
			}
		}
	},
	{
		id: "spring-bounce",
		name: "Spring Bounce",
		variants: {
			initial: {
				opacity: 0,
				y: 12,
				scale: .96
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1,
				transition: {
					type: "spring",
					stiffness: 520,
					damping: 30,
					mass: .7
				}
			},
			exit: {
				opacity: 0,
				scale: .98,
				transition: { duration: .12 }
			}
		}
	},
	{
		id: "blur-fade",
		name: "Blur Fade",
		variants: {
			initial: {
				opacity: 0,
				filter: "blur(4px)",
				y: 6
			},
			animate: {
				opacity: 1,
				y: 0,
				filter: "blur(0px)",
				transition: {
					duration: .28,
					ease: "easeOut"
				}
			},
			exit: {
				opacity: 0,
				filter: "blur(2px)",
				transition: { duration: .15 }
			}
		}
	},
	{
		id: "scale-fade",
		name: "Scale Fade",
		variants: {
			initial: {
				opacity: 0,
				scale: .98
			},
			animate: {
				opacity: 1,
				scale: 1,
				transition: {
					duration: .24,
					ease: "easeOut"
				}
			},
			exit: {
				opacity: 0,
				scale: .99,
				transition: { duration: .12 }
			}
		}
	}
].reduce((e, t) => (e[t.id] = t, e), {}), lu = 8, uu = 64, du = 0, fu = .5, pu = 180, mu = /* @__PURE__ */ new Set([
	"ArrowDown",
	"ArrowUp",
	"End",
	"Home",
	"PageDown",
	"PageUp",
	" "
]), hu = {
	start: !1,
	end: !1
}, gu = {
	currentAnchorId: null,
	visibleMessageIds: []
};
function _u({ content: e, scrollEdgeThreshold: t, spacer: n, viewport: r }) {
	if (!r || !e) return hu;
	let i = ku({
		content: e,
		spacer: n,
		viewport: r
	});
	return {
		start: r.scrollTop > t,
		end: i - r.scrollTop - r.clientHeight > t
	};
}
function vu({ content: e, scrollMargin: t, scrollPreviousItemPeek: n, spacer: r, viewport: i, visibleMessageIds: a }) {
	if (!e || !i) return gu;
	let o = i.getBoundingClientRect(), s = o.top + t + n, c = typeof IntersectionObserver > "u", l = [], u = null;
	for (let t of yu(e, r)) {
		let e = t.dataset.messageId;
		if (!e) continue;
		let n = t.dataset.scrollAnchor === "true", r = n || c ? t.getBoundingClientRect() : null;
		(c && r ? r.bottom > s && r.top < o.bottom : a.has(e)) && l.push(e), n && r && r.top <= s + fu && (u = e);
	}
	return l.length === 0 && u === null ? gu : {
		currentAnchorId: u,
		visibleMessageIds: l
	};
}
function yu(e, t) {
	return Array.from(e.children).filter((e) => e instanceof HTMLElement && e !== t);
}
function bu(e, t) {
	for (let n = t; n < e.length; n++) {
		let t = e[n];
		if (t?.dataset.scrollAnchor === "true") return t;
	}
	return null;
}
function xu(e, t) {
	for (let n of e) if (n.dataset.scrollAnchor === "true" && !t.has(n)) return n;
	return null;
}
function Su(e, t) {
	let n = 0;
	for (let r = t; r < e.length; r++) if (e[r]?.dataset.scrollAnchor === "true" && (n += 1, n > 1)) return !0;
	return !1;
}
function Cu(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (n?.dataset.scrollAnchor === "true") return n;
	}
	return null;
}
function wu({ content: e, spacer: t, viewport: n }) {
	let r = n.getBoundingClientRect();
	for (let n of yu(e, t)) {
		if (!n.dataset.messageId) continue;
		let e = n.getBoundingClientRect();
		if (e.bottom > r.top && e.top < r.bottom) return n;
	}
	return null;
}
function Tu({ align: e, element: t, scrollMargin: n, spacer: r, viewport: i }) {
	let a = Eu(t, i), o = t.getBoundingClientRect().height, s = Mu(r);
	if (e === "center") {
		let e = Math.max(0, i.clientHeight - s.start - s.end);
		return a - s.start - (e - o) / 2 - n;
	}
	if (e === "end") return a - i.clientHeight + o + s.end + n;
	if (e === "nearest") {
		let e = a + o, t = i.scrollTop + s.start, r = i.scrollTop + i.clientHeight - s.end;
		return a >= t && e <= r ? i.scrollTop : a < t ? a - s.start - n : e - i.clientHeight + s.end + n;
	}
	return a - s.start - n;
}
function Eu(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
	return n.top - r.top + t.scrollTop;
}
function Du(e, t) {
	return e.getBoundingClientRect().top - t.getBoundingClientRect().top;
}
function Ou({ content: e, scrollTop: t, spacer: n, viewport: r }) {
	let i = ku({
		content: e,
		spacer: n,
		viewport: r
	});
	return t + r.clientHeight - i;
}
function ku({ content: e, spacer: t, viewport: n }) {
	let r = yu(e, t), i = ju(e), a = n.getBoundingClientRect(), o = n.scrollTop, s = i.start + i.end;
	for (let e of r) {
		let t = e.getBoundingClientRect();
		s = Math.max(s, t.bottom - a.top + o + i.end);
	}
	return s;
}
function Au(e) {
	return Math.max(0, e.scrollHeight - e.clientHeight);
}
function ju(e) {
	let t = window.getComputedStyle(e);
	return {
		end: Pu(t.paddingBlockEnd || t.paddingBottom),
		start: Pu(t.paddingBlockStart || t.paddingTop)
	};
}
function Mu(e) {
	let t = e?.parentElement;
	return t ? ju(t) : {
		end: 0,
		start: 0
	};
}
function Nu(e) {
	if (!e) return 0;
	let t = window.getComputedStyle(e);
	return Pu(t.rowGap === "normal" ? t.gap : t.rowGap);
}
function Pu(e) {
	if (!e) return 0;
	let t = Number.parseFloat(e);
	return Number.isFinite(t) ? t : 0;
}
function Fu(e, t) {
	let n = e, r = /* @__PURE__ */ new Set();
	return {
		getSnapshot: () => n,
		hasListeners: () => r.size > 0,
		setSnapshot: (e) => {
			t(n, e) || (n = e, r.forEach((e) => e()));
		},
		subscribe: (e, t, n) => {
			let i = r.size === 0;
			return r.add(e), i && t?.(), () => {
				r.delete(e), r.size === 0 && n?.();
			};
		}
	};
}
function Iu(e, t) {
	return Fu(e, t);
}
function Lu() {
	return Fu(gu, zu);
}
function Ru(e, t) {
	return e.start === t.start && e.end === t.end;
}
function zu(e, t) {
	return e.currentAnchorId !== t.currentAnchorId || e.visibleMessageIds.length !== t.visibleMessageIds.length ? !1 : e.visibleMessageIds.every((e, n) => e === t.visibleMessageIds[n]);
}
function Bu({ autoScroll: e, defaultScrollPosition: t, scrollEdgeThreshold: n, scrollMargin: r, scrollPreviousItemPeek: i }) {
	let a = w.useRef(e), o = w.useRef(!1), s = w.useRef(null), c = w.useRef(!1), l = w.useRef(n), u = w.useRef(0), d = w.useRef(null), f = w.useRef(0), p = w.useRef(e ? "following-bottom" : "free-scrolling"), m = w.useRef(/* @__PURE__ */ new Map()), h = w.useRef(null), g = w.useRef(null), _ = w.useRef(null), v = w.useRef(i), y = w.useRef(!0), b = w.useRef(null), x = w.useRef(r), S = w.useRef(null), C = w.useRef(0), ee = w.useRef(0), T = w.useRef(null), te = w.useRef(null), ne = w.useRef(null), E = w.useRef(null), D = w.useRef(null), O = w.useRef(null), k = w.useRef(null), A = w.useRef(null), j = w.useRef(null), M = w.useRef(/* @__PURE__ */ new Set()), re = w.useRef(/* @__PURE__ */ new WeakSet());
	return ne.current === null && (ne.current = Iu(t === "end" || t === "last-anchor", (e, t) => e === t)), E.current === null && (E.current = Iu(hu, Ru)), j.current === null && (j.current = Lu()), a.current = e, l.current = n, x.current = r, v.current = i, {
		autoScrollRef: a,
		autoscrollingRef: o,
		autoscrollingTimeoutRef: D,
		streamingTurnRef: _,
		contentRef: s,
		defaultScrollPositionAppliedRef: c,
		firstItemRef: d,
		itemCountRef: u,
		lastScrollTopRef: f,
		messageElementsRef: m,
		modeRef: p,
		pendingScrollFrameRef: S,
		pendingScrollToMessageRef: h,
		prependRestoreRef: g,
		preserveScrollOnPrependRef: y,
		pendingDefaultScrollStore: ne.current,
		rootRef: b,
		scrollEdgeThresholdRef: l,
		scrollMarginRef: x,
		scrollPreviousItemPeekRef: v,
		spacerGapRef: C,
		spacerHeightRef: ee,
		spacerRef: T,
		stateFrameRef: te,
		stateStore: E.current,
		viewportRef: O,
		visibilityFrameRef: k,
		visibilityObserverRef: A,
		visibilityStore: j.current,
		visibleMessageIdsRef: M,
		handledScrollAnchorsRef: re
	};
}
function Vu(e) {
	e.pendingDefaultScrollStore.setSnapshot(!1);
}
function Hu(e) {
	e.defaultScrollPositionAppliedRef.current = !0, Vu(e);
}
function Uu({ refs: e, commitScrollState: t, scheduleStateCommit: n, scheduleVisibilitySync: r }) {
	let { streamingTurnRef: i, autoScrollRef: a, autoscrollingRef: o, autoscrollingTimeoutRef: s, contentRef: c, itemCountRef: l, messageElementsRef: u, modeRef: d, pendingScrollToMessageRef: f, prependRestoreRef: p, scrollMarginRef: m, scrollPreviousItemPeekRef: h, spacerGapRef: g, spacerHeightRef: _, spacerRef: v, viewportRef: y } = e, b = w.useCallback((e) => {
		s.current !== null && (window.clearTimeout(s.current), s.current = null), o.current !== e && (o.current = e, t()), e && (s.current = window.setTimeout(() => {
			s.current = null, o.current = !1, t();
		}, pu));
	}, [t]), x = w.useCallback((e) => {
		let t = v.current;
		if (!t) return;
		let n = Math.max(0, Math.ceil(e));
		_.current !== n && (_.current = n, t.hidden = n === 0, t.style.height = `${n}px`, t.style.marginTop = n > 0 ? `${-g.current}px` : "");
	}, []), S = w.useCallback((e, { behavior: r = "auto", autoscrolling: i = !1 } = {}) => {
		let a = y.current;
		if (!a) return;
		let o = Math.max(0, e);
		Math.abs(a.scrollTop - o) <= fu ? (a.scrollTop = o, t()) : (i && b(!0), a.scrollTo({
			top: o,
			behavior: r
		}), n());
	}, [
		t,
		n,
		b
	]), C = w.useCallback(({ behavior: e = "auto" } = {}) => y.current ? (x(0), i.current = null, d.current = "free-scrolling", S(0, { behavior: e }), r(), !0) : !1, [
		r,
		S,
		x
	]), ee = w.useCallback(({ behavior: e = "auto" } = {}) => {
		let t = y.current;
		return t ? (x(0), i.current = null, d.current = a.current ? "following-bottom" : "free-scrolling", S(Au(t), {
			autoscrolling: !0,
			behavior: e
		}), r(), !0) : !1;
	}, [
		r,
		S,
		x
	]), T = w.useCallback((e, { align: t = "start", behavior: n = "auto", scrollMargin: a = m.current } = {}, { keepPreviousPeek: o = !1 } = {}) => {
		let s = c.current, l = y.current;
		if (!s || !l || !s.contains(e)) return !1;
		let u = Tu({
			align: t,
			element: e,
			scrollMargin: o ? a + h.current : a,
			spacer: v.current,
			viewport: l
		}), f = Ou({
			content: s,
			scrollTop: u,
			spacer: v.current,
			viewport: l
		});
		return x(f), p.current = {
			element: e,
			viewportTop: Du(e, l)
		}, d.current = o ? "anchored-to-message" : "settling-jump", i.current = o ? e : null, S(u, { behavior: n }), r(), !0;
	}, [
		r,
		S,
		x
	]), te = w.useCallback(() => {
		let e = i.current;
		return !e || !e.isConnected || d.current !== "anchored-to-message" ? !1 : T(e, { align: "start" }, { keepPreviousPeek: !0 });
	}, [T]), ne = w.useCallback((t, n) => {
		let r = u.current.get(t);
		return r ? (Hu(e), T(r, n) ? (f.current = null, !0) : (f.current = {
			messageId: t,
			options: n
		}, !0)) : l.current === 0 && (f.current = {
			messageId: t,
			options: n
		}, Hu(e), !0);
	}, [T]);
	return {
		flushPendingScrollToMessage: w.useCallback(() => {
			let t = f.current;
			if (!t) return !1;
			let n = u.current.get(t.messageId);
			return !n || !T(n, t.options) ? !1 : (f.current = null, Hu(e), !0);
		}, [T]),
		reanchorToAnchoredMessage: te,
		scrollToElement: T,
		scrollToEnd: ee,
		scrollToMessage: ne,
		scrollToStart: C
	};
}
function Wu(e, t) {
	return w.useCallback((n) => {
		e.current = n, n && t();
	}, [e, t]);
}
function Gu({ autoScroll: e = !1, defaultScrollPosition: t = "end", scrollEdgeThreshold: n = lu, scrollPreviousItemPeek: r = uu, scrollMargin: i = du }) {
	let a = Bu({
		autoScroll: e,
		defaultScrollPosition: t,
		scrollEdgeThreshold: n,
		scrollMargin: i,
		scrollPreviousItemPeek: r
	}), { streamingTurnRef: o, autoScrollRef: s, autoscrollingRef: c, autoscrollingTimeoutRef: l, contentRef: u, defaultScrollPositionAppliedRef: d, firstItemRef: f, itemCountRef: p, lastScrollTopRef: m, messageElementsRef: h, modeRef: g, pendingScrollFrameRef: _, pendingScrollToMessageRef: v, prependRestoreRef: y, preserveScrollOnPrependRef: b, pendingDefaultScrollStore: x, rootRef: S, scrollEdgeThresholdRef: C, scrollMarginRef: ee, scrollPreviousItemPeekRef: T, spacerGapRef: te, spacerHeightRef: ne, spacerRef: E, stateFrameRef: D, stateStore: O, viewportRef: k, visibilityFrameRef: A, visibilityObserverRef: j, visibilityStore: M, visibleMessageIdsRef: re, handledScrollAnchorsRef: N } = a, ie = w.useRef(t);
	ie.current !== t && (ie.current = t, d.current = !1);
	let ae = w.useCallback((e) => {
		let t = S.current, n = k.current, r = [e.start && "start", e.end && "end"].filter(Boolean).join(" "), i = c.current;
		for (let e of [t, n]) e && (r ? e.setAttribute("data-scrollable", r) : e.removeAttribute("data-scrollable"), e.toggleAttribute("data-autoscrolling", i));
	}, []), oe = w.useCallback((e) => {
		let t = k.current?.scrollTop ?? 0, n = t < m.current - fu;
		m.current = t, s.current && !e.end && g.current !== "settling-jump" && g.current !== "anchored-to-message" ? g.current = "following-bottom" : g.current === "following-bottom" && e.end && n && !c.current && (g.current = "free-scrolling");
	}, []), P = w.useCallback(() => {
		let e = _u({
			content: u.current,
			scrollEdgeThreshold: C.current,
			spacer: E.current,
			viewport: k.current
		});
		oe(e);
		let t = g.current === "following-bottom" ? {
			...e,
			end: !1
		} : e;
		ae(t), O.setSnapshot(t);
	}, [
		oe,
		O,
		ae
	]), F = w.useCallback(() => {
		D.current === null && (D.current = window.requestAnimationFrame(() => {
			D.current = null, P();
		}));
	}, [P]), I = w.useCallback(() => {
		M.hasListeners() && A.current === null && (A.current = window.requestAnimationFrame(() => {
			A.current = null, M.hasListeners() && M.setSnapshot(vu({
				content: u.current,
				scrollMargin: ee.current,
				scrollPreviousItemPeek: T.current,
				spacer: E.current,
				viewport: k.current,
				visibleMessageIds: re.current
			}));
		}));
	}, [M]), { flushPendingScrollToMessage: se, reanchorToAnchoredMessage: ce, scrollToElement: le, scrollToEnd: L, scrollToMessage: ue, scrollToStart: de } = Uu({
		refs: a,
		commitScrollState: P,
		scheduleStateCommit: F,
		scheduleVisibilitySync: I
	}), fe = w.useCallback(() => {
		let e = y.current, t = k.current;
		if (!e || !t || !e.element.isConnected) return !1;
		let n = Du(e.element, t) - e.viewportTop;
		return Math.abs(n) <= fu ? !1 : (t.scrollTop += n, e.viewportTop = Du(e.element, t), F(), I(), !0);
	}, [F, I]), pe = w.useCallback(() => {
		let e = u.current, t = k.current;
		if (!e || !t) {
			y.current = null;
			return;
		}
		let n = wu({
			content: e,
			spacer: E.current,
			viewport: t
		});
		y.current = n ? {
			element: n,
			viewportTop: Du(n, t)
		} : null;
	}, []), me = w.useCallback(() => {
		_.current === null && (_.current = window.requestAnimationFrame(() => {
			_.current = null, se() && pe();
		}));
	}, [pe, se]), he = w.useCallback(() => {
		if (!t || d.current || p.current === 0) return !1;
		let e = !1;
		if (t === "last-anchor") {
			let t = u.current, n = k.current, r = t && n ? Cu(yu(t, E.current)) : null;
			if (!t || !n || !r) e = L({ behavior: "auto" });
			else {
				let i = Eu(r, n);
				e = ku({
					content: t,
					spacer: E.current,
					viewport: n
				}) - i <= n.clientHeight ? L({ behavior: "auto" }) : le(r, { align: "start" }, { keepPreviousPeek: !0 });
			}
		} else e = t === "end" ? L({ behavior: "auto" }) : de({ behavior: "auto" });
		return e ? (Hu(a), !0) : !1;
	}, [
		t,
		le,
		L,
		de
	]), ge = w.useCallback(() => {
		let e = u.current;
		if (!e) return;
		let t = yu(e, E.current), n = p.current, r = f.current;
		p.current = t.length, f.current = t[0] ?? null, (() => {
			if (se()) return;
			if (n === 0) {
				if (he() || t.length > 0 && s.current && L({ behavior: "auto" })) return;
				P(), I();
				return;
			}
			let e = r ? t.indexOf(r) : -1;
			if (b.current && e > 0) fe();
			else {
				if (t.length > n) {
					let e = bu(t, n);
					if (e) {
						if (s.current && g.current === "following-bottom" && Su(t, n)) {
							L({ behavior: "auto" });
							return;
						}
						le(e, { align: "start" }, { keepPreviousPeek: !0 }), N.current.add(e);
						return;
					}
				}
				if (t.length === n) {
					let e = xu(t, N.current);
					if (e) {
						le(e, { align: "start" }, { keepPreviousPeek: !0 }), N.current.add(e);
						return;
					}
				}
				g.current === "following-bottom" && s.current ? L({ behavior: "auto" }) : (P(), I());
			}
		})(), pe();
	}, [
		he,
		pe,
		P,
		se,
		fe,
		I,
		le,
		L
	]), _e = w.useCallback(() => {
		if (g.current === "following-bottom" && s.current) {
			L({ behavior: "auto" });
			return;
		}
		let e = ne.current;
		ce() ? s.current && e > 0 && ne.current === 0 && L({ behavior: "auto" }) : (F(), I());
	}, [
		ce,
		F,
		I,
		L
	]), ve = w.useCallback(() => {
		let e = k.current;
		if (e && M.hasListeners()) {
			if (typeof IntersectionObserver > "u") {
				I();
				return;
			}
			j.current ||= new IntersectionObserver((e) => {
				for (let t of e) {
					let e = t.target.dataset.messageId;
					e && (t.isIntersecting ? re.current.add(e) : re.current.delete(e));
				}
				I();
			}, {
				root: e,
				rootMargin: `${-(ee.current + T.current)}px 0px 0px 0px`,
				threshold: [
					0,
					.01,
					.5,
					1
				]
			}), h.current.forEach((e) => {
				j.current?.observe(e);
			}), I();
		}
	}, [I, M]), ye = w.useCallback(() => {
		A.current !== null && (window.cancelAnimationFrame(A.current), A.current = null), j.current?.disconnect(), j.current = null, re.current.clear(), M.setSnapshot(gu);
	}, [M]), be = w.useCallback((e, t, n) => {
		t ? (h.current.set(e, t), j.current?.observe(t), I(), v.current?.messageId === e && me()) : n && h.current.get(e) === n && (h.current.delete(e), re.current.delete(e), j.current?.unobserve(n), I());
	}, [me, I]), xe = w.useCallback(() => {
		(g.current === "following-bottom" || g.current === "anchored-to-message" || g.current === "settling-jump") && (o.current = null, g.current = "free-scrolling");
	}, []), Se = w.useCallback(() => ae(O.getSnapshot()), [O, ae]), Ce = Wu(S, Se), we = Wu(k, Se), Te = w.useCallback((e) => {
		u.current = e;
	}, []), Ee = w.useCallback((e) => {
		E.current = e, te.current = Nu(e?.parentElement ?? null);
	}, []), De = w.useCallback(() => {
		P(), I(), pe();
	}, [
		pe,
		P,
		I
	]), Oe = w.useMemo(() => ({
		handleContentChange: ge,
		handleResize: _e,
		observeVisibility: ve,
		pendingDefaultScrollStore: x,
		preserveScrollOnPrependRef: b,
		scrollToEnd: L,
		scrollToMessage: ue,
		scrollToStart: de,
		setContentElement: Te,
		setRootElement: Ce,
		setSpacerElement: Ee,
		setViewportElement: we,
		stateStore: O,
		syncAfterScroll: De,
		unobserveVisibility: ye,
		userScrollIntent: xe,
		viewportRef: k,
		visibilityStore: M
	}), [
		ge,
		_e,
		ve,
		x,
		L,
		ue,
		de,
		Te,
		Ce,
		Ee,
		we,
		O,
		De,
		ye,
		xe,
		M
	]);
	return w.useLayoutEffect(() => {
		he() || p.current === 0 && Vu(a);
	}, [he]), w.useEffect(() => () => {
		D.current !== null && (window.cancelAnimationFrame(D.current), D.current = null), A.current !== null && (window.cancelAnimationFrame(A.current), A.current = null), l.current !== null && (window.clearTimeout(l.current), l.current = null), _.current !== null && (window.cancelAnimationFrame(_.current), _.current = null), j.current?.disconnect(), j.current = null;
	}, []), w.useLayoutEffect(() => {
		e && g.current === "following-bottom" && p.current > 0 ? L({ behavior: "auto" }) : P();
	}, [
		e,
		P,
		L
	]), {
		context: Oe,
		registerMessage: be
	};
}
function Ku(e) {
	let t = w.useRef(e);
	return t.current = e, t;
}
var qu = w.createContext(null), Ju = w.createContext(null);
function Yu() {
	let e = w.useContext(qu);
	if (!e) throw Error("useMessageScroller must be used within a MessageScroller.");
	return e;
}
function Xu() {
	let e = w.useContext(Ju);
	if (!e) throw Error("MessageScrollerItem must be used within a MessageScroller.");
	return e;
}
function Zu() {
	let { stateStore: e } = Yu();
	return w.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Qu({ autoScroll: e = !1, children: t, defaultScrollPosition: n = "end", scrollEdgeThreshold: r, scrollPreviousItemPeek: i, scrollMargin: a }) {
	let { context: o, registerMessage: s } = Gu({
		autoScroll: e,
		defaultScrollPosition: n,
		scrollEdgeThreshold: r,
		scrollPreviousItemPeek: i,
		scrollMargin: a
	});
	return (0, $.jsx)(qu.Provider, {
		value: o,
		children: (0, $.jsx)(Ju.Provider, {
			value: s,
			children: t
		})
	});
}
function $u() {
	let { pendingDefaultScrollStore: e } = Yu();
	return w.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function ed({ children: e, ...t }) {
	let { setRootElement: n } = Yu(), r = $u();
	return (0, $.jsx)("div", {
		ref: n,
		...t,
		...r ? { "data-pending-scroll": "" } : null,
		children: e
	});
}
function td({ "aria-label": e, children: t, onKeyDown: n, onScroll: r, onTouchMove: i, onWheel: a, preserveScrollOnPrepend: o = !0, ref: s, role: c, tabIndex: l, ...u }) {
	let { handleResize: d, preserveScrollOnPrependRef: p, setViewportElement: m, syncAfterScroll: h, userScrollIntent: g, viewportRef: _ } = Yu(), v = $u();
	p.current = o;
	let y = w.useCallback((e) => {
		m(e), f(s)?.(e);
	}, [s, m]);
	function b(e) {
		h(), r?.(e);
	}
	function x(e) {
		g(), a?.(e);
	}
	function S(e) {
		g(), i?.(e);
	}
	function C(e) {
		mu.has(e.key) && g(), n?.(e);
	}
	return w.useEffect(() => {
		let e = _.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = 0, n = new ResizeObserver(() => {
			window.cancelAnimationFrame(t), t = window.requestAnimationFrame(d);
		});
		return n.observe(e), () => {
			window.cancelAnimationFrame(t), n.disconnect();
		};
	}, [d, _]), (0, $.jsx)("div", {
		ref: y,
		role: c ?? "region",
		"aria-label": e ?? "Messages",
		tabIndex: l ?? 0,
		onKeyDown: C,
		onScroll: b,
		onTouchMove: S,
		onWheel: x,
		...u,
		...v ? { "data-pending-scroll": "" } : null,
		children: t
	});
}
function nd({ "aria-relevant": e, children: t, ref: n, role: r, spacerClassName: i, ...a }) {
	let { handleContentChange: o, handleResize: s, setContentElement: c, setSpacerElement: l } = Yu(), u = w.useRef(null), d = w.useCallback((e) => {
		u.current = e, c(e), f(n)?.(e);
	}, [n, c]);
	return w.useLayoutEffect(() => {
		let e = u.current;
		if (!e || (o(), typeof MutationObserver > "u")) return;
		let t = new MutationObserver(() => {
			o();
		});
		return t.observe(e, { childList: !0 }), () => t.disconnect();
	}, [o]), w.useEffect(() => {
		let e = u.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = 0, n = new ResizeObserver(() => {
			window.cancelAnimationFrame(t), t = window.requestAnimationFrame(s);
		});
		return n.observe(e), () => {
			window.cancelAnimationFrame(t), n.disconnect();
		};
	}, [s]), (0, $.jsxs)("div", {
		ref: d,
		role: r ?? "log",
		"aria-relevant": e ?? "additions",
		...a,
		children: [t, (0, $.jsx)("div", {
			ref: l,
			"aria-hidden": "true",
			"data-message-scroller-spacer": "",
			hidden: !0,
			className: i
		})]
	});
}
function rd({ messageId: e, ref: t, scrollAnchor: n = !1, ...r }) {
	let i = Xu(), a = w.useRef(null), o = w.useCallback((n) => {
		let r = a.current;
		a.current = n, e && i(e, n, r), f(t)?.(n);
	}, [
		e,
		t,
		i
	]);
	return (0, $.jsx)("div", {
		ref: o,
		"data-message-id": e,
		"data-scroll-anchor": n ? "true" : "false",
		...r
	});
}
function id({ behavior: e = "smooth", children: t, direction: n = "end", onClick: r, render: i, tabIndex: a, type: o = "button", ...s }) {
	let { scrollToEnd: c, scrollToStart: l, stateStore: u } = Yu(), f = Ku(r), m = w.useCallback((e) => u.subscribe(e), [u]), h = w.useCallback(() => {
		let e = u.getSnapshot();
		return n === "start" ? e.start : e.end;
	}, [n, u]), g = w.useSyncExternalStore(m, h, h), _ = w.useCallback((t) => {
		g && (f.current?.(t), t.defaultPrevented || (t.currentTarget.blur(), n === "start" ? l({ behavior: e }) : c({ behavior: e })));
	}, [
		e,
		n,
		g,
		f,
		c,
		l
	]);
	return p({
		defaultTagName: "button",
		props: d({
			type: o,
			inert: !g,
			tabIndex: g ? a : -1,
			children: t ?? (0, $.jsxs)("span", { children: ["Scroll to ", n] }),
			onClick: _
		}, s),
		render: i,
		state: {
			active: g,
			direction: n
		},
		stateAttributesMapping: { active: (e) => ({ "data-active": e ? "true" : "false" }) }
	});
}
var ad = {
	Provider: Qu,
	Root: ed,
	Viewport: td,
	Content: nd,
	Item: rd,
	Button: id
};
// upstream/registry/bases/base/ui/message-scroller.tsx
function od(e) {
	return /* @__PURE__ */ (0, $.jsx)(ad.Provider, { ...e });
}
function sd({ className: e, ...t }) {
	return /* @__PURE__ */ (0, $.jsx)(ad.Root, {
		"data-slot": "message-scroller",
		className: m("cn-message-scroller group/message-scroller relative flex size-full min-h-0 flex-col overflow-hidden", e),
		...t
	});
}
function cd({ className: e, ...t }) {
	return /* @__PURE__ */ (0, $.jsx)(ad.Viewport, {
		"data-slot": "message-scroller-viewport",
		className: m("cn-message-scroller-viewport size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent data-pending-scroll:invisible", e),
		...t
	});
}
function ld({ className: e, ...t }) {
	return /* @__PURE__ */ (0, $.jsx)(ad.Content, {
		"data-slot": "message-scroller-content",
		className: m("cn-message-scroller-content flex h-max min-h-full flex-col", e),
		...t
	});
}
function ud({ className: e, scrollAnchor: t = !1, ...n }) {
	return /* @__PURE__ */ (0, $.jsx)(ad.Item, {
		"data-slot": "message-scroller-item",
		scrollAnchor: t,
		className: m("cn-message-scroller-item min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto]", e),
		...n
	});
}
function dd({ direction: e = "end", className: t, children: n, render: r, variant: i = "secondary", size: a = "icon-sm", ...o }) {
	return /* @__PURE__ */ (0, $.jsx)(ad.Button, {
		"data-slot": "message-scroller-button",
		"data-direction": e,
		"data-variant": i,
		"data-size": a,
		direction: e,
		className: m("cn-message-scroller-button absolute inset-s-1/2 -translate-x-1/2 border-border bg-background text-foreground transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-foreground data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&_svg]:rotate-180", t),
		render: r ?? /* @__PURE__ */ (0, $.jsx)(h, {
			variant: i,
			size: a
		}),
		...o,
		children: n ?? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(g, {
			lucide: "ArrowDownIcon",
			tabler: "IconArrowDown",
			hugeicons: "ArrowDown02Icon",
			phosphor: "ArrowDownIcon",
			remixicon: "RiArrowDownLine"
		}), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "sr-only",
			children: e === "end" ? "Scroll to end" : "Scroll to start"
		})] })
	});
}
// upstream/components/message-animated.tsx
var fd = ou.create(ud);
function pd({ message: e, animationPreset: t = cu["slide-up"], assistantVariant: n = "ghost", scrollAnchor: r, userVariant: i = "muted", ...a }) {
	let o = su();
	return e.role === "user" ? /* @__PURE__ */ (0, $.jsx)(fd, {
		messageId: e.id,
		scrollAnchor: r ?? !0,
		variants: t.variants,
		initial: !o && "initial",
		animate: "animate",
		exit: o ? void 0 : "exit",
		...a,
		children: /* @__PURE__ */ (0, $.jsx)(md, {
			message: e,
			assistantVariant: n,
			userVariant: i
		})
	}) : /* @__PURE__ */ (0, $.jsx)(fd, {
		messageId: e.id,
		scrollAnchor: r,
		initial: !1,
		...a,
		children: /* @__PURE__ */ (0, $.jsx)(md, {
			message: e,
			assistantVariant: n,
			userVariant: i
		})
	});
}
function md({ message: e, assistantVariant: t, userVariant: n }) {
	let r = e.role === "user", i = hd(e);
	return /* @__PURE__ */ (0, $.jsx)(u, {
		align: r ? "end" : "start",
		children: /* @__PURE__ */ (0, $.jsx)(l, { children: i.map((e) => {
			let i = e.text.split(/\n\s*\n/).map((e) => e.trim()).filter(Boolean);
			return e.type === "reasoning" ? /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "w-full border-l-2 border-muted-foreground/30 pl-3 text-muted-foreground",
				children: [/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "mb-1 flex items-center gap-1.5 text-xs font-medium",
					children: [/* @__PURE__ */ (0, $.jsx)(C, { className: "size-3.5" }), "Reasoning"]
				}), /* @__PURE__ */ (0, $.jsx)("div", {
					className: "space-y-1.5 text-sm",
					children: i.map((t, n) => /* @__PURE__ */ (0, $.jsx)("p", {
						className: "whitespace-pre-wrap",
						children: t
					}, `${e.key}-${n}`))
				})]
			}, e.key) : /* @__PURE__ */ (0, $.jsx)(c, {
				variant: r ? n : t,
				children: /* @__PURE__ */ (0, $.jsx)(s, {
					className: "space-y-2",
					children: i.map((t, n) => /* @__PURE__ */ (0, $.jsx)("p", {
						className: "whitespace-pre-wrap",
						children: t
					}, `${e.key}-${n}`))
				})
			}, e.key);
		}) })
	});
}
function hd(e) {
	return e.parts ? e.parts.flatMap((t, n) => {
		let r = t.type === "reasoning" || t.type === "thinking" ? "reasoning" : t.type === "text" ? "text" : null, i = typeof t.text == "string" ? t.text : typeof t.content == "string" ? t.content : null;
		return !r || i === null ? [] : [{
			key: `${e.id}-${n}`,
			text: i,
			type: r
		}];
	}) : typeof e.text == "string" ? [{
		key: `${e.id}-text`,
		text: e.text,
		type: "text"
	}] : [];
}
// upstream/examples/base/message-scroller-scrollable.tsx
var gd = Array.from({ length: 12 }, (e, t) => ({
	id: `scrollable-${t + 1}`,
	role: t % 2 == 0 ? "user" : "assistant",
	text: t % 2 == 0 ? `Review scroll checkpoint ${t + 1}.` : `Checkpoint ${t + 1} is synced. The scrollable hook updates as the viewport moves.\n\nWhen the reader is at the first message, the footer should only point them down. Once they move into the middle of the transcript, it should explain that both directions are available.\n\nAt the latest message, the footer should switch again and only point them back up.`
}));
function _d() {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "mx-auto flex w-full max-w-sm flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsxs)(S, {
			className: "h-140 w-full gap-0 overflow-hidden",
			children: [/* @__PURE__ */ (0, $.jsxs)(y, {
				className: "gap-1 border-b",
				children: [/* @__PURE__ */ (0, $.jsx)(x, { children: "Scroll Status" }), /* @__PURE__ */ (0, $.jsx)(v, { children: "Where the reader can go scroll to based on current scroll position." })]
			}), /* @__PURE__ */ (0, $.jsxs)(od, {
				defaultScrollPosition: "start",
				children: [/* @__PURE__ */ (0, $.jsx)(b, {
					className: "flex-1 overflow-hidden p-0",
					children: /* @__PURE__ */ (0, $.jsxs)(sd, { children: [/* @__PURE__ */ (0, $.jsx)(cd, { children: /* @__PURE__ */ (0, $.jsx)(ld, {
						className: "gap-4 p-(--card-spacing)",
						children: /* @__PURE__ */ (0, $.jsx)(vd, {})
					}) }), /* @__PURE__ */ (0, $.jsx)(dd, {})] })
				}), /* @__PURE__ */ (0, $.jsx)(yd, {})]
			})]
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			className: "px-0.5 text-center text-xs text-muted-foreground",
			children: "Scroll the transcript to see the footer update."
		})]
	});
}
function vd() {
	return gd.map((e) => /* @__PURE__ */ (0, $.jsx)(pd, {
		message: e,
		scrollAnchor: e.role === "user",
		userVariant: "muted",
		assistantVariant: "ghost"
	}, e.id));
}
function yd() {
	let { start: e, end: t } = Zu(), n = bd({
		start: e,
		end: t
	});
	return /* @__PURE__ */ (0, $.jsx)(_, {
		className: "justify-center border-t text-center text-sm text-muted-foreground",
		children: n
	});
}
function bd({ start: e, end: t }) {
	return e && t ? "You can scroll both ways." : t ? "You are at the top. You can only scroll down." : e ? "You are at the bottom. You can only scroll up." : "All messages fit in the viewport.";
}
export { _d as MessageScrollerScrollable };
