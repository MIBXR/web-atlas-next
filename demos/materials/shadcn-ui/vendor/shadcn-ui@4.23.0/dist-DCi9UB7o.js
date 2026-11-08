// node_modules/cn/dist/tables.js
var e = (e, t = 0) => {
	let n = new Int32Array(e.length);
	for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r) - 48 - t;
	return n;
}, t = (e) => {
	let t = new Int32Array(e.length + 1);
	for (let n = 0; n < e.length; n++) t[n + 1] = t[n] + e[n];
	return t;
}, n = (e) => {
	let t = new Int32Array(e.length), n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e.charCodeAt(r) - 48;
		n += i >>> 1 ^ -(i & 1), t[r] = n;
	}
	return t;
}, r = 379, i = [], a = t(e("E050000200528200000000200015000002002182000001120000000302220200020004200120000200420001200021200301200010400162000010000220021010:2192001200220012000220012000200200200400010200040000000000400200108200110100000022010313000162002000020020012020080213000228200000000082000000000120002000120020020040101020300130001001010")), o = t(e(":11111111211111119311546544411119731869:67139741568643244111111111116111415121431343415:78311132233313187211117221449443411141111151152226611131111112212518142224214215421421542142424242516171151615616347111111111197911327451111111111111111111113134714133513411111311111111111111111111112444411111342312715245411117:3")), s = "@containerabcdefghinlmoprstunderlineviawzccentlignnimatespectuto-colsrowsaglorightnessckdrop-sisbcontrastfiltergrayscalehue-rotateinvertopacityslurrightnessaturateepia-coniclinearpositionradialsizeockurrderttom-belrstxyespacing-xyaretoursorlnt-umnsendspantartentrasteividerop-shadowurationcorationlay-xyasendillexontromlter-featuresstretchapr-xyayscaleidow-colsrowsue-rotatedentlinesetvert-beringsxyeshadoweiadingftnest-clamp-imageabein-lrstxyskx--b-coniclpositionrsizet-x-y-fromto-fromto-inearfromto-fromto-adialfromto-fromtofromtofromtofromtoblockhinlinew-screenesblockhinlinewbjectpacityrutlinederigin-offsetbelrstxyesrspective-originaceholderioghtng-offsettateundedw-xyz-belrstlreseslr-endspantartaturatecepiahizekewpace-taleroll-xyz-barmpbelrstxyesbelrstxyes-thumbrackadowrink-xyxyartrokeabextora-shadowpckingnsformitionlate-xyz-offsetill-changeoom", c = (() => {
	let e = a.length - 1, t = new Int32Array(e);
	for (let n = e - 1; n >= 0; n--) {
		let e = 1, r = n + 1;
		for (let i = a[n]; i < a[n + 1]; i++) e += t[r], r += t[r];
		t[n] = e;
	}
	let n = new Int32Array(a[e]), r = 0;
	for (let i = 0; i < e; i++) {
		let e = i + 1;
		for (let o = a[i]; o < a[i + 1]; o++) n[r++] = e, e += t[e];
	}
	return n;
})(), l = e("02000000000000900<=0?000B000000F00ŎI0J0LNPRTVX0000]_a0000000000000000000000qrs0000000yŎ00000000000Ŏ0000000Ŏ00000000000000000000000000000000000000000000000000000000000000Ê000000000000000000000Ý000000000000000000ï0000000÷0øùúûüýþÿĀāĂăĄą000000000000000000000000000000000000000000Ħ0ħĩ00000000000000000000Ļļ00000ū000000", 1), u = t(e("123333593463463635126367151576")), d = e("93203242383253248325D>E?F@03263243255B:032325523853:0325B:8GA032542H<C=12727B:03253;D>E?3257D>03258432585:0325B:;0328B:032"), f = e("01211311455155555567811194::::::::;;;:::952888<151=52>>?51921@ABCD;;;588595;9999:9?995;9E11;FGGHGGGGHGG1GG1GG1GGGGGG999IJ;;;;999I;;;;;;1581:5;;;;;11;2;;;;;9:K555544444444444444488855555;;;;;;;;;;;;;;;;;;;;;;225?59555;;L8M?D911199995DI188"), p = n("0202002020200202020020020020200200200200200200200002020202001003040106000200200200200200200200200200200200200200200200200200200200200200200200200200200200020020020020020020002020020200200200200200200200200200202000200202002020022020020020020020020020020020020002002002000200020002000200200200020020020002000200200200020020202002020202000200200020022000200200020020002002000200220002002000200W0Z00020020002002020002002000200g0j00020020002002000200200020020002002000200200020002000200000200200200200200020002000200002002002002002002002020020020200200200200200200200200202020020020020020020020020002002002020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020002002002002002002000200200200200200200200200200020202020002000200020002002002002000020200200"), m = (() => {
	let e = (/* @__PURE__ */ new Int32Array(318)).fill(-1), t = n("02422242:22222224222422224244222222242222224444224226224222426222422442462222422622222222626222462242622422622422424242422222222422222222242422222222222222222622442224222222222222224424442262222222222222222222226224222424242422224422422422222"), r = n("0222222222222222222220222222222222222222222222142222222222222222222222222222222222Y\\222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221422222222222222222222222222222222222222Ŀł222222222222222222");
	for (let n = 0; n < t.length; n++) e[t[n]] = r[n];
	return e;
})(), h = "container|break-after-all break-after-auto break-after-avoid break-after-avoid-page break-after-column break-after-left break-after-page break-after-right|break-before-all break-before-auto break-before-avoid break-before-avoid-page break-before-column break-before-left break-before-page break-before-right|break-inside-auto break-inside-avoid break-inside-avoid-column break-inside-avoid-page|box-decoration-clone box-decoration-slice|box-border box-content|contents flow-root hidden table table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group|not-sr-only sr-only|float-end float-left float-none float-right float-start|clear-both clear-end clear-left clear-none clear-right clear-start|isolate isolation-auto|overflow-auto overflow-clip overflow-hidden overflow-scroll overflow-visible|overflow-x-auto overflow-x-clip overflow-x-hidden overflow-x-scroll overflow-x-visible|overflow-y-auto overflow-y-clip overflow-y-hidden overflow-y-scroll overflow-y-visible|overscroll-auto overscroll-contain overscroll-none|overscroll-x-auto overscroll-x-contain overscroll-x-none|overscroll-y-auto overscroll-y-contain overscroll-y-none|absolute fixed relative static sticky|collapse invisible visible|justify-around justify-baseline justify-between justify-center justify-center-safe justify-end justify-end-safe justify-evenly justify-normal justify-start justify-stretch|justify-items-center justify-items-center-safe justify-items-end justify-items-end-safe justify-items-normal justify-items-start justify-items-stretch|justify-self-auto justify-self-center justify-self-center-safe justify-self-end justify-self-end-safe justify-self-start justify-self-stretch|items-baseline items-baseline-last items-center items-center-safe items-end items-end-safe items-start items-stretch|self-auto self-baseline self-baseline-last self-center self-center-safe self-end self-end-safe self-start self-stretch|place-content-around place-content-baseline place-content-between place-content-center place-content-center-safe place-content-end place-content-end-safe place-content-evenly place-content-start place-content-stretch|place-items-baseline place-items-center place-items-center-safe place-items-end place-items-end-safe place-items-start place-items-stretch|place-self-auto place-self-center place-self-center-safe place-self-end place-self-end-safe place-self-start place-self-stretch|antialiased subpixel-antialiased|italic not-italic|normal-nums|ordinal|slashed-zero|lining-nums oldstyle-nums|proportional-nums tabular-nums|diagonal-fractions stacked-fractions|no-underline overline|capitalize lowercase normal-case uppercase|truncate|whitespace-break-spaces whitespace-normal whitespace-nowrap whitespace-pre whitespace-pre-line whitespace-pre-wrap|break-all break-keep break-normal break-words|wrap-anywhere wrap-break-word wrap-normal|hyphens-auto hyphens-manual hyphens-none|mix-blend-color mix-blend-color-burn mix-blend-color-dodge mix-blend-darken mix-blend-difference mix-blend-exclusion mix-blend-hard-light mix-blend-hue mix-blend-lighten mix-blend-luminosity mix-blend-multiply mix-blend-normal mix-blend-overlay mix-blend-plus-darker mix-blend-plus-lighter mix-blend-saturation mix-blend-screen mix-blend-soft-light|table-auto table-fixed|caption-bottom caption-top|backface-hidden backface-visible|appearance-auto appearance-none|scheme-dark scheme-light scheme-light-dark scheme-normal scheme-only-dark scheme-only-light|field-sizing-content field-sizing-fixed|pointer-events-auto pointer-events-none|resize resize-none resize-x resize-y|snap-align-none snap-center snap-end snap-start|snap-always snap-normal|snap-both snap-none snap-x snap-y|snap-mandatory snap-proximity|touch-auto touch-manipulation touch-none|touch-pan-left touch-pan-right touch-pan-x|touch-pan-down touch-pan-up touch-pan-y|touch-pinch-zoom|select-all select-auto select-none select-text|forced-color-adjust-auto forced-color-adjust-none|normal size|baseline bottom middle sub super text-bottom text-top top|bounce none ping pulse spin|auto square video|auto fr max min|none|auto full px|fixed local scroll|clip-border clip-content clip-padding clip-text|origin-border origin-content origin-padding|bottom bottom-left bottom-right center left left-bottom left-top right right-bottom right-top top top-left top-right|no-repeat repeat repeat-round repeat-space repeat-x repeat-y|auto contain cover|blend-color blend-color-burn blend-color-dodge blend-darken blend-difference blend-exclusion blend-hard-light blend-hue blend-lighten blend-luminosity blend-multiply blend-normal blend-overlay blend-saturation blend-screen blend-soft-light|to-b to-bl to-br to-l to-r to-t to-tl to-tr|auto dvh fit full lh lvh max min px screen svh|dashed dotted double hidden none solid|collapse separate|px|auto|full|around baseline between center center-safe end end-safe evenly normal start stretch|alias all-scroll auto cell col-resize context-menu copy crosshair default e-resize ew-resize grab grabbing help move n-resize ne-resize nesw-resize no-drop none not-allowed ns-resize nw-resize nwse-resize pointer progress row-resize s-resize se-resize sw-resize text vertical-text w-resize wait zoom-in zoom-out|dashed dotted double solid wavy|auto from-font|reverse|initial|in in-out initial linear out|col col-reverse row row-reverse|nowrap wrap wrap-reverse|auto initial none|black bold extrabold extralight light medium normal semibold thin|condensed expanded extra-condensed extra-expanded normal semi-condensed semi-expanded ultra-condensed ultra-expanded|flow-col flow-col-dense flow-dense flow-row flow-row-dense|none subgrid|auto dvh dvw fit full lh lvh lvw max min px screen svh svw|block flex grid table|auto dvw fit full lvw max min px screen svw|loose none normal px relaxed snug tight|through|item|inside outside|decimal disc none|auto px|clip-border clip-content clip-fill clip-padding clip-stroke clip-view no-clip|add exclude intersect subtract|alpha luminance match|origin-border origin-content origin-fill origin-padding origin-stroke origin-view|type-alpha type-luminance|circle ellipse|closest-corner closest-side farthest-corner farthest-side|at-bottom at-bottom-left at-bottom-right at-center at-left at-left-bottom at-left-top at-right at-right-bottom at-right-top at-top at-top-left at-top-right|dvh fit full lh lvh max min none px screen svh|dvw fit full lvw max min none px screen svw|auto dvh dvw fit full lvh lvw max min none prose px svh svw|auto dvh dvw fit full lh lvh lvw max min none px screen svh svw|auto dvh dvw fit full lvh lvw max min none px screen svh svw|contain cover fill none scale-down|first last none|distant dramatic midrange near none normal|inset|full none|3d|auto smooth|gutter-auto gutter-both gutter-stable|auto none thin|auto dvh dvw fit full lvh lvw max min px svh svw|base|center end justify left right start|clip ellipsis|balance nowrap pretty wrap|normal tight tighter wide wider widest|cpu gpu none|3d flat|all colors none opacity shadow transform|discrete normal|full px|auto dvh dvw fit full lvh lvw max min px screen svh svw|auto contents scroll transform".split("|").map((e) => e.split(" ")), g = n("0000000000000000000000000000000000000000000000000000000000000262242:6@200000006:240B428:4426046044222426220026642642462026224222824220022400000000\\00N222422242222222224062242222222422226264222422222222222222442804222422222222222222222222220<4<0204260002444020204224422"), _ = n("ɞ222222222222222222222222222222222222222222222222222222222222˓4222226>6ʮ22ʵʸʵʸʵ42ʲ2ʑ22>62144ɴɯɲɯɲ22ɩ42222ɠ2ɟ26622ɐɋ244ƸƵ222]d24242ǖǓƚ¼ȣ2263ȠȝȠ2222222Ǜ222222222222222222ƺƵ2ƶƭ2222222422222ƔƉ22222222222222222222144Şś22Śŗ222222222222222222222İ2ĩ68ĞěĞəŰ4Ę£¦ĕ822ČĉČ2ċ2222622"), v = n("02222222222222222222222222222222222222222222222222222222222222222202021422222222CF2200GJ021KP222?B0WZ2Y10^2222K00N202QT2m0000120porsv22y|{:22p22222222QT2E000gSVI00000q2<40000@00000G000\xA000000000000000021K¢¡00¤0000000000000000000002§ª>=>U1¬222±2²2222»¾000¡¤2¥"), y = /* @__PURE__ */ new Int32Array(974), b = /* @__PURE__ */ new Int32Array(974), x = /* @__PURE__ */ new Int32Array(974), S = "", C = /* @__PURE__ */ new Int32Array(1008);
{
	let e = /* @__PURE__ */ new Map(), t = 0, n = 0;
	for (let r = 0; r < g.length; r++) for (let i of h[v[r]]) {
		let a = e.get(i);
		a === void 0 && (a = t++, e.set(i, a), C[a * 2] = S.length, C[a * 2 + 1] = i.length, S += i), y[n] = g[r], b[n] = _[r], x[n] = a, n++;
	}
}
var w = n("0b2N:222`>F@286¦2@H2D266226FB22B2>BD\\6N22222Z222"), ee = t(e("1::2222232:222:22:22>222222:22:222132251111131114")), T = n("24A;33N=C@H4A;33N=C@<2;363@QTQC¸ŴŽ2R2=18cƴÅŅÜÛŲǛȆ:ħ25=11D3A@216Er25;11B3?<438Cn9@7=<8192>2E121@9@EHE@9>2T25511<398216=V25511<398216=ƧNž2ĈÝ242L222290000f22500³222"), E = e("Ĳ"), D = e(""), te = e("1"), ne = {
	GROUP_COUNT: r,
	customValidatorNames: i,
	edgeStart: a,
	labelStart: o,
	labelText: s,
	edgeTarget: c,
	nodeGroup: l,
	nodeVlist: m,
	vlistPat: u,
	vlistOps: d,
	vlistRef: f,
	vlistGroup: p,
	litAnchor: y,
	litGroup: b,
	litPool: x,
	poolOffsets: C,
	poolText: S,
	adjGid: w,
	adjStart: ee,
	adjTgt: T,
	patGid: E,
	patTgt: D,
	postfixLookupGroups: te,
	orderSensitiveModifiers: "* ** after backdrop before details-content file first-letter first-line marker placeholder selection"
}, O = -1, k = -1, A = (e, t, n) => {
	let r = 2166136261;
	for (let i = t; i < n; i++) r = Math.imul(r ^ e.charCodeAt(i), 16777619);
	return r;
}, re = (e, t, n) => {
	let r = n - t, i = Math.imul(r, 2654435761) ^ e.charCodeAt(t);
	if (r > 3) {
		let a = r >> 2, o = r >> 1;
		i = Math.imul(i ^ e.charCodeAt(t + 1) << 8 ^ e.charCodeAt(t + 2) << 16 ^ e.charCodeAt(t + a), 2246822507), i = Math.imul(i ^ e.charCodeAt(t + o) << 8 ^ e.charCodeAt(t + o + a) << 16 ^ e.charCodeAt(n - 3), 3266489909), i ^= e.charCodeAt(n - 2) << 8 ^ e.charCodeAt(n - 1) << 16;
	}
	return i ^ i >>> 15;
}, ie = (e, t, n = {}) => {
	let { GROUP_COUNT: r, edgeStart: i, labelStart: a, labelText: o, edgeTarget: s, nodeGroup: c, nodeVlist: l, vlistPat: u, vlistOps: d, vlistRef: f, vlistGroup: p, litAnchor: m, litGroup: h, litPool: g, poolOffsets: _, poolText: v, adjGid: y, adjStart: b, adjTgt: x, patGid: S, patTgt: C, postfixLookupGroups: w, customValidatorNames: ee, orderSensitiveModifiers: T } = e, E = new Int32Array(r).fill(-1);
	for (let e = 0; e < y.length; e++) E[y[e]] = e;
	let D = new Int32Array(f.length + 1);
	for (let e = 0; e < f.length; e++) D[e + 1] = D[e] + u[f[e] + 1] - u[f[e]];
	let te = new Uint8Array(r);
	for (let e = 0; e < w.length; e++) te[w[e]] = 1;
	let ne = i.length - 1, ie = new Uint8Array(ne), j = 0, M = !0;
	for (let e = 0; e < m.length; e++) {
		ie[m[e]] = 1;
		let t = _[g[e] * 2 + 1];
		t > j && (j = t);
		let n = v.charCodeAt(_[g[e] * 2]);
		(n === 91 || n === 40) && (M = !1);
	}
	let P = 1;
	for (; P < m.length * 2;) P <<= 1;
	let F = new Int32Array(P).fill(-1);
	for (let e = 0; e < m.length; e++) {
		let t = _[g[e] * 2], n = (A(v, t, t + _[g[e] * 2 + 1]) ^ Math.imul(m[e], 2654435761) | 0) & P - 1;
		for (; F[n] !== -1;) n = n + 1 & P - 1;
		F[n] = e;
	}
	let I = (e, t, n, r) => {
		let i = (A(t, n, r) ^ Math.imul(e, 2654435761) | 0) & P - 1, a = r - n;
		for (;;) {
			let r = F[i];
			if (r === -1) return -1;
			if (m[r] === e && _[g[r] * 2 + 1] === a) {
				let e = _[g[r] * 2], i = !0;
				for (let r = 0; r < a; r++) if (v.charCodeAt(e + r) !== t.charCodeAt(n + r)) {
					i = !1;
					break;
				}
				if (i) return h[r];
			}
			i = i + 1 & P - 1;
		}
	}, L = n.cacheSize ?? 8192, R = n.prefix ?? e.prefix ?? "", ae = R === "" ? "" : R + ":", oe = ae.length, z = (ee ?? []).map((e) => {
		let n = t && t[e];
		if (!n) throw Error("cn: missing validator " + e);
		return n;
	}), B = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, se = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ce = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, le = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, V = 0, ue = -1, de = -1, H = -1, U = -1, fe = (e) => e >= 97 && e <= 122 || e >= 65 && e <= 90 || e >= 48 && e <= 57 || e === 95, pe = (e, t, n) => {
		if (V = 0, ue = -1, n - t < 3) return;
		let r = e.charCodeAt(t), i = e.charCodeAt(n - 1);
		if (r === 91 && i === 93) V = 1;
		else if (r === 40 && i === 41) V = 2;
		else return;
		H = t + 1, U = n - 1;
		let a = t + 1;
		if (fe(e.charCodeAt(a))) {
			for (a++; a < n - 1;) {
				let t = e.charCodeAt(a);
				if (!fe(t) && t !== 45) break;
				a++;
			}
			a < n - 2 && e.charCodeAt(a) === 58 && (ue = t + 1, de = a, H = a + 1);
		}
	}, me = (e, t, n, r) => {
		if (n - t !== r.length) return !1;
		for (let n = 0; n < r.length; n++) if (e.charCodeAt(t + n) !== r.charCodeAt(n)) return !1;
		return !0;
	}, he = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ge = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _e = (e) => !!e && !Number.isNaN(Number(e)), ve = (e, t, n) => {
		if (n - t < 11 || !me(e, t, t + 10, "@container")) return !1;
		if (e.charCodeAt(t + 10) === 47) return n - t >= 12;
		let r = e.charCodeAt(t + 11);
		return r === 115 && n - t >= 17 && me(e, t + 10, t + 16, "-size/") || r === 110 && n - t >= 19 && me(e, t + 10, t + 18, "-normal/");
	}, ye = [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		2,
		2,
		2,
		2,
		2
	], be = "length|number|number weight|family-name|position percentage|length size bg-size|image url|shadow|length|family-name|position percentage|length size bg-size|image url|shadow|number weight".split("|").map((e) => e.split(" ")), xe = [
		2,
		3,
		1,
		0,
		0,
		0,
		4,
		5,
		0,
		0,
		0,
		0,
		0,
		1,
		1
	], Se = (e, t, n, r) => {
		if (e >= 10) {
			if (e >= 25) return z[e - 25](t.slice(n, r));
			let i = e - 10;
			if (V !== ye[i]) return !1;
			if (ue >= 0) {
				for (let e of be[i]) if (me(t, ue, de, e)) return !0;
				return !1;
			}
			switch (xe[i]) {
				case 0: return !1;
				case 1: return !0;
				case 2: {
					let e = t.slice(H, U);
					return B.test(e) && !se.test(e);
				}
				case 3: return _e(t.slice(H, U));
				case 4: return le.test(t.slice(H, U));
				default: return ce.test(t.slice(H, U));
			}
		}
		switch (e) {
			case 0: return !0;
			case 1: return V === 0;
			case 2: return V === 1;
			case 3: return V === 2;
			case 4: return he.test(t.slice(n, r));
			case 5: return _e(t.slice(n, r));
			case 6: {
				let e = t.slice(n, r);
				return !!e && Number.isInteger(Number(e));
			}
			case 7: return r > n && t.charCodeAt(r - 1) === 37 && _e(t.slice(n, r - 1));
			case 8: return ge.test(t.slice(n, r));
			default: return ve(t, n, r);
		}
	}, Ce = new Set(typeof T == "string" ? T.split(" ") : T), we = (e, t, n, r, i, a) => {
		let o = A(t, n, r) ^ (i ? 2654435769 : 0), s = e.get(o);
		if (s !== void 0) outer: for (let e = 0; e < s.length; e++) {
			let a = s[e];
			if (a.imp === i && a.k.length === r - n) {
				for (let e = 0; e < a.k.length; e++) if (a.k.charCodeAt(e) !== t.charCodeAt(n + e)) continue outer;
				return a.id;
			}
		}
		else e.set(o, s = []);
		let c = t.slice(n, r), l = a(c);
		return s.push({
			k: c,
			imp: i,
			id: l
		}), l;
	}, Te = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), De = 2, Oe = (e, t) => {
		let n = [], r = 0, i = 0, a = 0;
		for (let t = 0; t < e.length; t++) {
			let o = e.charCodeAt(t);
			r === 0 && i === 0 && o === 58 ? (n.push(e.slice(a, t)), a = t + 1) : o === 91 ? r++ : o === 93 ? r-- : o === 40 ? i++ : o === 41 && i--;
		}
		n.push(e.slice(a));
		let o = n[0];
		if (n.length > 1) {
			let e = [], t = [];
			for (let r of n) r.charCodeAt(0) === 91 || Ce.has(r) ? (t.length && (e.push(...t.sort()), t = []), e.push(r)) : t.push(r);
			t.length && e.push(...t.sort()), o = e.join(":");
		}
		let s = t ? o + " !" : o, c = Ee.get(s);
		return c === void 0 && Ee.set(s, c = De++), c;
	}, ke = /* @__PURE__ */ new Map(), Ae = r, je = r + 4096, Me = () => Ae++, W = 8192, Ne = new Int32Array(W), G = Array(W).fill(null), Pe = new Int32Array(W), Fe = new Int32Array(W), Ie = new Uint8Array(W), Le = 0, Re = (e, t, n, r, i, a, o, s) => {
		let c = e;
		if (G[e] !== null) {
			if (G[e | 1] === null) c = e | 1;
			else if (!(Le++ & 3)) c = e | Le >> 2 & 1;
			else return;
		}
		G[c] = t.slice(n, r), Ne[c] = i, Pe[c] = a, Fe[c] = o, Ie[c] = s;
	}, ze = () => G.fill(null), K = 256, Be = [
		new Int32Array(K),
		new Int32Array(K),
		new Int32Array(K),
		new Int32Array(K)
	], [q, J, Y, Ve] = Be, He = new Uint8Array(K), X = new Uint8Array(K), Ue = () => {
		K *= 2, Be = Be.map((e) => {
			let t = new Int32Array(K);
			return t.set(e), t;
		}), [q, J, Y, Ve] = Be;
		let e = new Uint8Array(K);
		e.set(He), He = e, X = new Uint8Array(K);
	}, Z = 64, We = new Int32Array(Z), Ge = new Int32Array(Z), Ke = new Int32Array(r), Q = 2048, qe = 21, Je = new Int32Array(Q), Ye = new Int32Array(Q), $ = 0, Xe = (e, t) => {
		if (e === 0 && t < r) return Ke[t] === $ ? 1 : (Ke[t] = $, 0);
		let n = (e << 13 | t) + 1, i = Math.imul(n, 2654435761) >>> qe;
		for (; Ye[i] === $;) {
			if (Je[i] === n) return 1;
			i = i + 1 & Q - 1;
		}
		return Je[i] = n, Ye[i] = $, 0;
	}, Ze = (e, t, n, r, i) => {
		if (n - t >= 2 && e.charCodeAt(t) === 91 && e.charCodeAt(n - 1) === 93) {
			let r = -1;
			for (let i = t + 1; i < n - 1; i++) if (e.charCodeAt(i) === 58) {
				r = i;
				break;
			}
			return r === -1 || r === t + 1 ? O : we(ke, e, t + 1, r, 0, Me);
		}
		if (r >= 0 && c[r] >= 0) return c[r];
		for (let t = i - 1; t >= 0; t--) {
			let r = Ge[t];
			if (r > n) continue;
			let i = We[t], a = n - r;
			if (ie[i] === 1 && a > 0 && a <= j) {
				let t = e.charCodeAt(r);
				if (M === !1 || t !== 91 && t !== 40) {
					let t = I(i, e, r, n);
					if (t >= 0) return t;
				}
			}
			let o = l[i];
			if (o < 0) continue;
			let s = f[o], c = u[s], m = u[s + 1];
			if (c === m) continue;
			pe(e, r, n);
			let h = D[o] - c;
			for (let t = c; t < m; t++) if (Se(d[t], e, r, n)) return p[h + t];
		}
		return O;
	}, Qe = (e) => {
		let t = e.length, n = 0, c = 0, u = !1;
		De > 4096 && (Te = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), De = 2, ze()), Ae > je && (ke = /* @__PURE__ */ new Map(), Ae = r, ze());
		let d = 0;
		for (; d < t;) {
			let f = e.charCodeAt(d);
			if (f === 32 || f >= 9 && f <= 13) {
				f !== 32 && (u = !0), d++;
				continue;
			}
			let p = d, m = 0;
			for (; d < t;) {
				if (f = e.charCodeAt(d), f <= 32) {
					if (f === 32) break;
					if (f >= 9 && f <= 13) {
						u = !0;
						break;
					}
				}
				m = Math.imul(m ^ f, 16777619), d++;
			}
			let h = d, g = h - p;
			n === K && Ue();
			let _ = n++;
			q[_] = p, J[_] = h, c += g, m ^= Math.imul(g, 2654435761);
			let v = m ^ m >>> 15, y = v & 8190;
			{
				let t = -1;
				if (Ne[y] === v && G[y] !== null && G[y].length === g ? t = y : Ne[y | 1] === v && G[y | 1] !== null && G[y | 1].length === g && (t = y | 1), t >= 0) {
					let n = G[t], r = !0;
					for (let t = 0; t < g; t++) if (n.charCodeAt(t) !== e.charCodeAt(p + t)) {
						r = !1;
						break;
					}
					if (r) {
						Y[_] = Pe[t], Ve[_] = Fe[t], He[_] = Ie[t];
						continue;
					}
				}
			}
			let b = p;
			if (oe !== 0) {
				if (h - p <= oe || !e.startsWith(ae, p)) {
					Y[_] = O, Re(y, e, p, h, v, O, 0, 0);
					continue;
				}
				b = p + oe;
			}
			let x = 0, S = 0, C = -1, w = -1;
			for (let t = b; t < h; t++) {
				let n = e.charCodeAt(t);
				if (x === 0 && S === 0) {
					if (n === 58) {
						C = t;
						continue;
					}
					if (n === 47) {
						w = t;
						continue;
					}
				}
				n === 91 ? x++ : n === 93 ? x-- : n === 40 ? S++ : n === 41 && S--;
			}
			let ee = C >= b ? C + 1 : b, T = ee, E = h, D = !1, ne = 0;
			E > T && e.charCodeAt(E - 1) === 33 ? (D = !0, E--) : E > T && e.charCodeAt(T) === 33 && (D = !0, T++, ne = 1);
			let A = -1;
			w > ee && (A = w + ne, A >= E && (A = -1));
			let re = T;
			E - T > 1 && e.charCodeAt(T) === 45 && (re = T + 1);
			let j = 0, M = 0, N = 0, P = -1, F = 0;
			(l[0] >= 0 || ie[0] === 1) && (We[0] = 0, Ge[0] = re, F = 1);
			let I = k, L = 0;
			for (let t = re; t < E; t++) if (t === A && (I = M < N ? k : j, L = F), j !== k) {
				let n = e.charCodeAt(t), r = -1;
				if (M < N) o.charCodeAt(M) === n ? (M++, M === N && (r = j = P)) : j = k;
				else {
					let e = i[j], t = i[j + 1], c = k;
					for (let i = e; i < t; i++) {
						let e = a[i];
						if (o.charCodeAt(e) === n) {
							a[i + 1] - e === 1 ? r = c = s[i] : (M = e + 1, N = a[i + 1], P = s[i], c = j);
							break;
						}
					}
					j = c;
				}
				if (r >= 0 && (l[r] >= 0 || ie[r] === 1) && t + 1 < E && e.charCodeAt(t + 1) === 45) {
					if (F === Z) {
						Z *= 2;
						let e = new Int32Array(Z);
						e.set(We), We = e;
						let t = new Int32Array(Z);
						t.set(Ge), Ge = t;
					}
					We[F] = r, Ge[F] = t + 2, F++;
				}
			}
			A === E && (I = M < N ? k : j, L = F);
			let R = M < N ? k : j, z, B = !1;
			if (A >= 0) {
				if (B = !0, z = Ze(e, T, A, I, L), z !== O && z < r && te[z]) {
					let t = Ze(e, T, E, R, F);
					t !== O && t !== z && (z = t, B = !1);
				} else z === O && (z = Ze(e, T, E, R, F), B = !1);
			} else z = Ze(e, T, E, R, F);
			let se = 0, ce = 0;
			z === O ? Y[_] = O : (ce = +!!B, se = b >= C ? +!!D : we(Te, e, b, C, +!!D, (e) => Oe(e, D)), Y[_] = z, He[_] = ce, Ve[_] = se), Re(y, e, p, h, v, z, se, ce);
		}
		if (n === 0) return "";
		if (n === 1) return q[0] === 0 && J[0] === t ? e : e.slice(q[0], J[0]);
		if (n * 32 > Q) {
			for (; n * 32 > Q;) Q <<= 1, qe--;
			Je = new Int32Array(Q), Ye = new Int32Array(Q);
		}
		$ = $ + 1 | 0, $ === 0 && (Ke.fill(0), Ye.fill(0), $ = 1);
		let f = !1;
		for (let e = n - 1; e >= 0; e--) {
			let t = Y[e];
			if (t === O) {
				X[e] = 1;
				continue;
			}
			let n = Ve[e];
			if (Xe(n, t) === 1) X[e] = 0, f = !0;
			else if (X[e] = 1, t < r) {
				let r = E[t];
				if (r >= 0) for (let e = b[r]; e < b[r + 1]; e++) Xe(n, x[e]);
				if (He[e] & 1) for (let e = 0; e < S.length; e++) S[e] === t && Xe(n, C[e]);
			}
		}
		if (!f && !u && t === c + n - 1) return e;
		let p = "", m = 0;
		for (; m < n;) {
			if (!X[m]) {
				m++;
				continue;
			}
			let t = q[m], r = J[m], i = m + 1;
			for (; i < n && X[i] && q[i] === r + 1 && e.charCodeAt(r) === 32;) r = J[i], i++;
			p.length > 0 && (p += " "), p += e.slice(t, r), m = i;
		}
		return p;
	}, $e = 16384, et = new Int32Array($e * 2), tt = 0, nt = 1, rt = Object.create(null), it = Object.create(null), at = 0, ot = 0, st = () => {
		tt ^= $e, nt = nt + 1 | 0, ot = 0;
	}, ct = L > 0 ? (e) => {
		let t = rt[e];
		if (t !== void 0) return t;
		let n = re(e, 0, e.length), r = (n & 16383) + tt, i = et[r] === (n ^ nt) || et[r ^ $e] === (n ^ nt - 1);
		return i && (t = it[e], t !== void 0) ? (rt[e] = t, t) : (t = Qe(e), i ? (rt[e] = t, ++at > L && (at = 0, it = rt, rt = Object.create(null), st())) : (et[r] = n ^ nt, ++ot > $e && st()), t);
	} : Qe;
	return {
		merge: function() {
			return arguments.length === 1 && typeof arguments[0] == "string" ? ct(arguments[0]) : ct(N.apply(null, arguments));
		},
		mergeString: ct,
		mergeUncached: Qe
	};
}, j = (e, t) => {
	if (!e) return "";
	if (typeof e == "string") return e;
	let n = "";
	if (typeof e.length == "number" && Array.isArray(e)) {
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (!i) continue;
			let a = typeof i == "string" ? i : j(i, t);
			a && (n && (n += " "), n += a);
		}
		return n;
	}
	if (t) {
		if (typeof e == "number") return "" + e;
		if (typeof e == "object") for (let t in e) e[t] && (n && (n += " "), n += t);
	}
	return n;
}, M = (e, t) => {
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (!i) continue;
		let a = typeof i == "string" ? i : j(i, t);
		a && (n && (n += " "), n += a);
	}
	return n;
}, N = function() {
	return M(arguments, !1);
}, P = function() {
	return M(arguments, !0);
}, F = (e) => {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = 0, i = null, a = (e, t, n, r) => {
		let i = 0;
		if (t) {
			if (t !== e.a0) return !1;
			i = 1;
		}
		if (n) {
			if (n !== (i === 0 ? e.a0 : e.a1)) return !1;
			i++;
		}
		if (r) {
			if (r !== (i === 0 ? e.a0 : i === 1 ? e.a1 : e.a2)) return !1;
			i++;
		}
		return i === e.t;
	}, o = (e, t) => {
		let n = e.a, r = 0;
		for (let e = 0; e < t.length; e++) {
			let i = t[e];
			if (i) {
				if (i !== n[r]) return !1;
				r++;
			}
		}
		return r === e.t;
	}, s = (a, s) => {
		let c = a.length, l = i === null ? null : i.n;
		if (!s) {
			if (l !== null && o(l, a)) return i = l, l.r;
			if (i !== null && i !== l && o(i, a)) return i.r;
		}
		let u = "", d = -1, f = 0;
		for (let t = 0; t < c; t++) {
			let n = a[t];
			if (n) {
				if (typeof n != "string") return e(P.apply(null, a));
				d < 0 && (u = n, d = t), f++;
			}
		}
		if (f === 0) return "";
		if (f === 1) return e(u);
		let p = t.get(u);
		p === void 0 && (p = n.get(u), p !== void 0 && t.set(u, p));
		let m = null;
		if (p !== void 0) outer: for (let e = 0; e < p.length; e++) {
			let t = p[e];
			if (t.t !== f) continue;
			let n = t.a, r = 1;
			for (let e = d + 1; e < c; e++) {
				let t = a[e];
				if (t && t !== n[r++]) continue outer;
			}
			m = t;
			break;
		}
		if (m === null) {
			let i = u, o = [u];
			for (let e = d + 1; e < c; e++) {
				let t = a[e];
				t && (i += " " + t, o.push(t));
			}
			m = {
				r: e(i),
				t: o.length,
				a0: o[0],
				a1: o[1],
				a2: o[2] ?? "",
				a: o,
				n: null
			}, p === void 0 && t.set(u, p = []), p.length >= 8 && p.shift(), p.push(m), ++r > 1e3 && (r = 0, n = t, t = /* @__PURE__ */ new Map());
		}
		return i !== null && i !== m && (i.n = m), i = m, m.r;
	};
	return function(t, n, r) {
		let o = arguments.length;
		if ((o | 1) == 3) {
			let e = i;
			if (e !== null) {
				let o = e.n;
				if (o !== null && a(o, t, n, r)) return i = o, o.r;
				if (e !== o && a(e, t, n, r)) return e.r;
			}
			return s([
				t,
				n,
				r
			], !0);
		}
		if (o === 1) return e(typeof t == "string" ? t : j(t, !0));
		let c = i;
		if (c !== null) {
			let e = c.n;
			if (e !== null) {
				let t = e.a, n = 0, r = !0;
				for (let e = 0; e < o; e++) {
					let i = arguments[e];
					if (i) {
						if (i !== t[n]) {
							r = !1;
							break;
						}
						n++;
					}
				}
				if (r && n === e.t) return i = e, e.r;
			}
			if (c !== e) {
				let e = c.a, t = 0, n = !0;
				for (let r = 0; r < o; r++) {
					let i = arguments[r];
					if (i) {
						if (i !== e[t]) {
							n = !1;
							break;
						}
						t++;
					}
				}
				if (n && t === c.t) return c.r;
			}
		}
		let l = [];
		for (let e = 0; e < o; e++) l.push(arguments[e]);
		return s(l, !0);
	};
}, I = /* @__PURE__ */ ie(ne), L = /* @__PURE__ */ F(I.mergeString);
I.merge;
export { L as t };
