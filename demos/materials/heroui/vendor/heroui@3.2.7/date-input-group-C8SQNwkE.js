import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { c as i, d as a, i as o, l as s, m as c, n as l, r as u, s as d, t as f, u as p } from "./utils-UBVJ5JR_.js";
import { n as m } from "./FieldError-BDRHklqb.js";
import { n as h } from "./Form-BfBA0JpQ.js";
import { n as g, t as _ } from "./Group-VeeQ5avm.js";
import { D as v, M as y, O as b, T as x, a as S, c as C, d as w, f as T, g as E, i as D, l as O, n as k, o as ee, p as A, r as j, s as te, t as M, u as N } from "./useDateFormatter-l1bqfb5m.js";
import { H as ne, S as P, b as re, t as F, v as I } from "./useKeyboard-CqNSkGJ-.js";
import { n as ie } from "./VisuallyHidden-CRCgxFfe.js";
import { n as L, t as R } from "./Input-DWAXtMrJ.js";
import { t as z } from "./Label-CJNHsoCN.js";
import { n as B } from "./Text-CEDDBTEL.js";
import { i as ae, r as oe } from "./FocusScope-C6wAY3W6.js";
import { t as V } from "./filterDOMProps-CJYy6efO.js";
import { t as H } from "./I18nProvider-zGzu-4zN.js";
import { t as se } from "./usePress-C9PowRxI.js";
import { n as ce, r as le } from "./scrollIntoView-D_15IrGl.js";
import { t as ue } from "./useField-CfrwMMou.js";
import { n as de, r as fe, t as pe } from "./useHover-DxA7bNQs.js";
import { t as me } from "./useFormReset-DizqO0T1.js";
import { a as he, r as ge, s as _e, t as ve } from "./useFormValidation-NZK9JasV.js";
import { n as ye, t as be } from "./useLocalizedStringFormatter-tuzNT5MD.js";
import { t as xe } from "./getScrollParent-Bt53c7cQ.js";
import { t as Se } from "./useEvent-QtR06JAA.js";
import { t as Ce } from "./useFilter-D87ICzES.js";
import { t as we } from "./useLabels-IW2w8qqV.js";
import { t as Te } from "./useLayoutEffect-Bx2X4QEP.js";
import { n as Ee, t as De } from "./useSpinButton-DgIN7nKK.js";
import { n as U, t as Oe } from "./LocalizedStringFormatter-BlBKDE8E.js";
import { t as ke } from "./useControlledState-BbVlCDcL.js";
import { t as Ae } from "./NumberFormatter-C0OI5DOG.js";
import { r as je, t as W } from "./compose-ClIOcrt6.js";
import { t as Me } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/date-input-group/date-input-group.styles.js
var Ne = e({
	defaultVariants: {
		fullWidth: !1,
		variant: "primary"
	},
	slots: {
		base: "date-input-group",
		input: "date-input-group__input",
		inputContainer: "date-input-group__input-container",
		prefix: "date-input-group__prefix",
		segment: "date-input-group__segment",
		suffix: "date-input-group__suffix"
	},
	variants: {
		fullWidth: {
			false: {},
			true: { base: "date-input-group--full-width" }
		},
		variant: {
			primary: { base: "date-input-group--primary" },
			secondary: { base: "date-input-group--secondary" }
		}
	}
}), G = /* @__PURE__ */ t(n(), 1), Pe = [
	"day",
	"month",
	"year"
], Fe = {
	hour: 1,
	minute: 2,
	second: 3
};
function Ie(e, t) {
	let { autoComplete: n, isDisabled: r, name: i } = e, { visuallyHiddenProps: a } = ie({ style: {
		position: "fixed",
		top: 0,
		left: 0
	} }), o = 60;
	t.granularity === "second" ? o = 1 : t.granularity === "hour" && (o = 3600);
	let s = "";
	t.value && (s = t.granularity === "day" ? O(t.value).toString() : N("timeZone" in t.value ? A(t.value) : t.value).toString());
	let c = t.granularity === "day" ? "date" : "datetime-local", l = [
		"hour",
		"minute",
		"second"
	], u = 0;
	return l.includes(t.granularity) && (u = Fe[t.granularity], l = l.slice(0, u)), {
		containerProps: {
			...a,
			"aria-hidden": !0,
			"data-react-aria-prevent-focus": !0,
			"data-a11y-ignore": "aria-hidden-focus"
		},
		inputProps: {
			tabIndex: -1,
			autoComplete: n,
			disabled: r,
			type: c,
			form: "",
			name: i,
			step: o,
			value: s,
			onChange: (e) => {
				let n = P(e).value.toString();
				if (n) try {
					let e = ee(n);
					if (t.granularity === "day" && (e = te(n)), "setSegment" in t) for (let n in e) Pe.includes(n) && t.setSegment(n, e[n]), l.includes(n) && t.setSegment(n, e[n]);
					t.setValue(e);
				} catch {}
			}
		}
	};
}
function Le(e) {
	let { state: t } = e, { containerProps: n, inputProps: r } = Ie({ ...e }, t);
	return /*#__PURE__*/ G.createElement("div", {
		...n,
		"data-testid": "hidden-dateinput-container"
	}, /*#__PURE__*/ G.createElement("input", r));
}
// node_modules/react-aria/dist/private/intl/datepicker/ar-AE.mjs
var Re = {};
Re = {
	calendar: "التقويم",
	day: "يوم",
	dayPeriod: "ص/م",
	endDate: "تاريخ الانتهاء",
	era: "العصر",
	hour: "الساعات",
	minute: "الدقائق",
	month: "الشهر",
	second: "الثواني",
	selectedDateDescription: (e) => `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{627}\u{644}\u{648}\u{642}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.time}`,
	startDate: "تاريخ البدء",
	timeZoneName: "التوقيت",
	weekday: "اليوم",
	year: "السنة"
};
// node_modules/react-aria/dist/private/intl/datepicker/bg-BG.mjs
var ze = {};
ze = {
	calendar: "Календар",
	day: "ден",
	dayPeriod: "пр.об./сл.об.",
	endDate: "Крайна дата",
	era: "ера",
	hour: "час",
	minute: "минута",
	month: "месец",
	second: "секунда",
	selectedDateDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{434}\u{43E} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}: ${e.time}`,
	startDate: "Начална дата",
	timeZoneName: "часова зона",
	weekday: "ден от седмицата",
	year: "година"
};
// node_modules/react-aria/dist/private/intl/datepicker/cs-CZ.mjs
var Be = {};
Be = {
	calendar: "Kalendář",
	day: "den",
	dayPeriod: "část dne",
	endDate: "Konečné datum",
	era: "letopočet",
	hour: "hodina",
	minute: "minuta",
	month: "měsíc",
	second: "sekunda",
	selectedDateDescription: (e) => `Vybran\xe9 datum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybran\xe9 obdob\xed: ${e.startDate} a\u{17E} ${e.endDate}`,
	selectedTimeDescription: (e) => `Vybran\xfd \u{10D}as: ${e.time}`,
	startDate: "Počáteční datum",
	timeZoneName: "časové pásmo",
	weekday: "den v týdnu",
	year: "rok"
};
// node_modules/react-aria/dist/private/intl/datepicker/da-DK.mjs
var Ve = {};
Ve = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "AM/PM",
	endDate: "Slutdato",
	era: "æra",
	hour: "time",
	minute: "minut",
	month: "måned",
	second: "sekund",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt interval: ${e.startDate} til ${e.endDate}`,
	selectedTimeDescription: (e) => `Valgt tidspunkt: ${e.time}`,
	startDate: "Startdato",
	timeZoneName: "tidszone",
	weekday: "ugedag",
	year: "år"
};
// node_modules/react-aria/dist/private/intl/datepicker/de-DE.mjs
var He = {};
He = {
	calendar: "Kalender",
	day: "Tag",
	dayPeriod: "Tageshälfte",
	endDate: "Enddatum",
	era: "Epoche",
	hour: "Stunde",
	minute: "Minute",
	month: "Monat",
	second: "Sekunde",
	selectedDateDescription: (e) => `Ausgew\xe4hltes Datum: ${e.date}`,
	selectedRangeDescription: (e) => `Ausgew\xe4hlter Bereich: ${e.startDate} bis ${e.endDate}`,
	selectedTimeDescription: (e) => `Ausgew\xe4hlte Zeit: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "Zeitzone",
	weekday: "Wochentag",
	year: "Jahr"
};
// node_modules/react-aria/dist/private/intl/datepicker/el-GR.mjs
var Ue = {};
Ue = {
	calendar: "Ημερολόγιο",
	day: "ημέρα",
	dayPeriod: "π.μ./μ.μ.",
	endDate: "Ημερομηνία λήξης",
	era: "περίοδος",
	hour: "ώρα",
	minute: "λεπτό",
	month: "μήνας",
	second: "δευτερόλεπτο",
	selectedDateDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}: ${e.time}`,
	startDate: "Ημερομηνία έναρξης",
	timeZoneName: "ζώνη ώρας",
	weekday: "καθημερινή",
	year: "έτος"
};
// node_modules/react-aria/dist/private/intl/datepicker/en-US.mjs
var We = {};
We = {
	era: "era",
	year: "year",
	month: "month",
	day: "day",
	hour: "hour",
	minute: "minute",
	second: "second",
	dayPeriod: "AM/PM",
	calendar: "Calendar",
	startDate: "Start Date",
	endDate: "End Date",
	weekday: "day of the week",
	timeZoneName: "time zone",
	selectedDateDescription: (e) => `Selected Date: ${e.date}`,
	selectedRangeDescription: (e) => `Selected Range: ${e.startDate} to ${e.endDate}`,
	selectedTimeDescription: (e) => `Selected Time: ${e.time}`
};
// node_modules/react-aria/dist/private/intl/datepicker/es-ES.mjs
var Ge = {};
Ge = {
	calendar: "Calendario",
	day: "día",
	dayPeriod: "a.\xA0m./p.\xA0m.",
	endDate: "Fecha final",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mes",
	second: "segundo",
	selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
	selectedRangeDescription: (e) => `Rango seleccionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora seleccionada: ${e.time}`,
	startDate: "Fecha de inicio",
	timeZoneName: "zona horaria",
	weekday: "día de la semana",
	year: "año"
};
// node_modules/react-aria/dist/private/intl/datepicker/et-EE.mjs
var Ke = {};
Ke = {
	calendar: "Kalender",
	day: "päev",
	dayPeriod: "enne/pärast lõunat",
	endDate: "Lõppkuupäev",
	era: "ajastu",
	hour: "tund",
	minute: "minut",
	month: "kuu",
	second: "sekund",
	selectedDateDescription: (e) => `Valitud kuup\xe4ev: ${e.date}`,
	selectedRangeDescription: (e) => `Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,
	selectedTimeDescription: (e) => `Valitud aeg: ${e.time}`,
	startDate: "Alguskuupäev",
	timeZoneName: "ajavöönd",
	weekday: "nädalapäev",
	year: "aasta"
};
// node_modules/react-aria/dist/private/intl/datepicker/fi-FI.mjs
var qe = {};
qe = {
	calendar: "Kalenteri",
	day: "päivä",
	dayPeriod: "vuorokaudenaika",
	endDate: "Päättymispäivä",
	era: "aikakausi",
	hour: "tunti",
	minute: "minuutti",
	month: "kuukausi",
	second: "sekunti",
	selectedDateDescription: (e) => `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
	selectedRangeDescription: (e) => `Valittu aikav\xe4li: ${e.startDate} \u{2013} ${e.endDate}`,
	selectedTimeDescription: (e) => `Valittu aika: ${e.time}`,
	startDate: "Alkamispäivä",
	timeZoneName: "aikavyöhyke",
	weekday: "viikonpäivä",
	year: "vuosi"
};
// node_modules/react-aria/dist/private/intl/datepicker/fr-FR.mjs
var Je = {};
Je = {
	calendar: "Calendrier",
	day: "jour",
	dayPeriod: "cadran",
	endDate: "Date de fin",
	era: "ère",
	hour: "heure",
	minute: "minute",
	month: "mois",
	second: "seconde",
	selectedDateDescription: (e) => `Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
	selectedRangeDescription: (e) => `Plage s\xe9lectionn\xe9e\xa0: ${e.startDate} au ${e.endDate}`,
	selectedTimeDescription: (e) => `Heure choisie\xa0: ${e.time}`,
	startDate: "Date de début",
	timeZoneName: "fuseau horaire",
	weekday: "jour de la semaine",
	year: "année"
};
// node_modules/react-aria/dist/private/intl/datepicker/he-IL.mjs
var Ye = {};
Ye = {
	calendar: "לוח שנה",
	day: "יום",
	dayPeriod: "לפנה״צ/אחה״צ",
	endDate: "תאריך סיום",
	era: "תקופה",
	hour: "שעה",
	minute: "דקה",
	month: "חודש",
	second: "שנייה",
	selectedDateDescription: (e) => `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{5D6}\u{5DE}\u{5DF} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.time}`,
	startDate: "תאריך התחלה",
	timeZoneName: "אזור זמן",
	weekday: "יום בשבוע",
	year: "שנה"
};
// node_modules/react-aria/dist/private/intl/datepicker/hr-HR.mjs
var Xe = {};
Xe = {
	calendar: "Kalendar",
	day: "dan",
	dayPeriod: "AM/PM",
	endDate: "Datum završetka",
	era: "era",
	hour: "sat",
	minute: "minuta",
	month: "mjesec",
	second: "sekunda",
	selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Odabrani raspon: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Odabrano vrijeme: ${e.time}`,
	startDate: "Datum početka",
	timeZoneName: "vremenska zona",
	weekday: "dan u tjednu",
	year: "godina"
};
// node_modules/react-aria/dist/private/intl/datepicker/hu-HU.mjs
var Ze = {};
Ze = {
	calendar: "Naptár",
	day: "nap",
	dayPeriod: "napszak",
	endDate: "Befejező dátum",
	era: "éra",
	hour: "óra",
	minute: "perc",
	month: "hónap",
	second: "másodperc",
	selectedDateDescription: (e) => `Kijel\xf6lt d\xe1tum: ${e.date}`,
	selectedRangeDescription: (e) => `Kijel\xf6lt tartom\xe1ny: ${e.startDate}\u{2013}${e.endDate}`,
	selectedTimeDescription: (e) => `Kijel\xf6lt id\u{151}: ${e.time}`,
	startDate: "Kezdő dátum",
	timeZoneName: "időzóna",
	weekday: "hét napja",
	year: "év"
};
// node_modules/react-aria/dist/private/intl/datepicker/it-IT.mjs
var Qe = {};
Qe = {
	calendar: "Calendario",
	day: "giorno",
	dayPeriod: "AM/PM",
	endDate: "Data finale",
	era: "era",
	hour: "ora",
	minute: "minuto",
	month: "mese",
	second: "secondo",
	selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
	selectedRangeDescription: (e) => `Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Ora selezionata: ${e.time}`,
	startDate: "Data iniziale",
	timeZoneName: "fuso orario",
	weekday: "giorno della settimana",
	year: "anno"
};
// node_modules/react-aria/dist/private/intl/datepicker/ja-JP.mjs
var $e = {};
$e = {
	calendar: "カレンダー",
	day: "日",
	dayPeriod: "午前/午後",
	endDate: "終了日",
	era: "時代",
	hour: "時",
	minute: "分",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,
	selectedRangeDescription: (e) => `\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.startDate} \u{304B}\u{3089} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{9078}\u{629E}\u{3057}\u{305F}\u{6642}\u{9593} : ${e.time}`,
	startDate: "開始日",
	timeZoneName: "タイムゾーン",
	weekday: "曜日",
	year: "年"
};
// node_modules/react-aria/dist/private/intl/datepicker/ko-KR.mjs
var et = {};
et = {
	calendar: "달력",
	day: "일",
	dayPeriod: "오전/오후",
	endDate: "종료일",
	era: "연호",
	hour: "시",
	minute: "분",
	month: "월",
	second: "초",
	selectedDateDescription: (e) => `\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.startDate} ~ ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{C120}\u{D0DD} \u{C2DC}\u{AC04}: ${e.time}`,
	startDate: "시작일",
	timeZoneName: "시간대",
	weekday: "요일",
	year: "년"
};
// node_modules/react-aria/dist/private/intl/datepicker/lt-LT.mjs
var tt = {};
tt = {
	calendar: "Kalendorius",
	day: "diena",
	dayPeriod: "iki pietų / po pietų",
	endDate: "Pabaigos data",
	era: "era",
	hour: "valanda",
	minute: "minutė",
	month: "mėnuo",
	second: "sekundė",
	selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
	selectedRangeDescription: (e) => `Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,
	selectedTimeDescription: (e) => `Pasirinktas laikas: ${e.time}`,
	startDate: "Pradžios data",
	timeZoneName: "laiko juosta",
	weekday: "savaitės diena",
	year: "metai"
};
// node_modules/react-aria/dist/private/intl/datepicker/lv-LV.mjs
var nt = {};
nt = {
	calendar: "Kalendārs",
	day: "diena",
	dayPeriod: "priekšpusdienā/pēcpusdienā",
	endDate: "Beigu datums",
	era: "ēra",
	hour: "stundas",
	minute: "minūtes",
	month: "mēnesis",
	second: "sekundes",
	selectedDateDescription: (e) => `Atlas\u{12B}tais datums: ${e.date}`,
	selectedRangeDescription: (e) => `Atlas\u{12B}tais diapazons: no ${e.startDate} l\u{12B}dz ${e.endDate}`,
	selectedTimeDescription: (e) => `Atlas\u{12B}tais laiks: ${e.time}`,
	startDate: "Sākuma datums",
	timeZoneName: "laika josla",
	weekday: "nedēļas diena",
	year: "gads"
};
// node_modules/react-aria/dist/private/intl/datepicker/nb-NO.mjs
var rt = {};
rt = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "a.m./p.m.",
	endDate: "Sluttdato",
	era: "tidsalder",
	hour: "time",
	minute: "minutt",
	month: "måned",
	second: "sekund",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt omr\xe5de: ${e.startDate} til ${e.endDate}`,
	selectedTimeDescription: (e) => `Valgt tid: ${e.time}`,
	startDate: "Startdato",
	timeZoneName: "tidssone",
	weekday: "ukedag",
	year: "år"
};
// node_modules/react-aria/dist/private/intl/datepicker/nl-NL.mjs
var it = {};
it = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "a.m./p.m.",
	endDate: "Einddatum",
	era: "tijdperk",
	hour: "uur",
	minute: "minuut",
	month: "maand",
	second: "seconde",
	selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
	selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,
	selectedTimeDescription: (e) => `Geselecteerde tijd: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "tijdzone",
	weekday: "dag van de week",
	year: "jaar"
};
// node_modules/react-aria/dist/private/intl/datepicker/pl-PL.mjs
var at = {};
at = {
	calendar: "Kalendarz",
	day: "dzień",
	dayPeriod: "rano / po południu / wieczorem",
	endDate: "Data końcowa",
	era: "era",
	hour: "godzina",
	minute: "minuta",
	month: "miesiąc",
	second: "sekunda",
	selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
	selectedRangeDescription: (e) => `Wybrany zakres: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Wybrany czas: ${e.time}`,
	startDate: "Data początkowa",
	timeZoneName: "strefa czasowa",
	weekday: "dzień tygodnia",
	year: "rok"
};
// node_modules/react-aria/dist/private/intl/datepicker/pt-BR.mjs
var ot = {};
ot = {
	calendar: "Calendário",
	day: "dia",
	dayPeriod: "AM/PM",
	endDate: "Data final",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mês",
	second: "segundo",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
	startDate: "Data inicial",
	timeZoneName: "fuso horário",
	weekday: "dia da semana",
	year: "ano"
};
// node_modules/react-aria/dist/private/intl/datepicker/pt-PT.mjs
var st = {};
st = {
	calendar: "Calendário",
	day: "dia",
	dayPeriod: "am/pm",
	endDate: "Data de Término",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mês",
	second: "segundo",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
	startDate: "Data de Início",
	timeZoneName: "fuso horário",
	weekday: "dia da semana",
	year: "ano"
};
// node_modules/react-aria/dist/private/intl/datepicker/ro-RO.mjs
var ct = {};
ct = {
	calendar: "Calendar",
	day: "zi",
	dayPeriod: "a.m/p.m.",
	endDate: "Dată final",
	era: "eră",
	hour: "oră",
	minute: "minut",
	month: "lună",
	second: "secundă",
	selectedDateDescription: (e) => `Dat\u{103} selectat\u{103}: ${e.date}`,
	selectedRangeDescription: (e) => `Interval selectat: de la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,
	selectedTimeDescription: (e) => `Ora selectat\u{103}: ${e.time}`,
	startDate: "Dată început",
	timeZoneName: "fus orar",
	weekday: "ziua din săptămână",
	year: "an"
};
// node_modules/react-aria/dist/private/intl/datepicker/ru-RU.mjs
var lt = {};
lt = {
	calendar: "Календарь",
	day: "день",
	dayPeriod: "AM/PM",
	endDate: "Дата окончания",
	era: "эра",
	hour: "час",
	minute: "минута",
	month: "месяц",
	second: "секунда",
	selectedDateDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: \u{441} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F}: ${e.time}`,
	startDate: "Дата начала",
	timeZoneName: "часовой пояс",
	weekday: "день недели",
	year: "год"
};
// node_modules/react-aria/dist/private/intl/datepicker/sk-SK.mjs
var ut = {};
ut = {
	calendar: "Kalendár",
	day: "deň",
	dayPeriod: "AM/PM",
	endDate: "Dátum ukončenia",
	era: "letopočet",
	hour: "hodina",
	minute: "minúta",
	month: "mesiac",
	second: "sekunda",
	selectedDateDescription: (e) => `Vybrat\xfd d\xe1tum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybrat\xfd rozsah: od ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Vybrat\xfd \u{10D}as: ${e.time}`,
	startDate: "Dátum začatia",
	timeZoneName: "časové pásmo",
	weekday: "deň týždňa",
	year: "rok"
};
// node_modules/react-aria/dist/private/intl/datepicker/sl-SI.mjs
var dt = {};
dt = {
	calendar: "Koledar",
	day: "dan",
	dayPeriod: "dop/pop",
	endDate: "Datum konca",
	era: "doba",
	hour: "ura",
	minute: "minuta",
	month: "mesec",
	second: "sekunda",
	selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izbrano obmo\u{10D}je: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Izbrani \u{10D}as: ${e.time}`,
	startDate: "Datum začetka",
	timeZoneName: "časovni pas",
	weekday: "dan v tednu",
	year: "leto"
};
// node_modules/react-aria/dist/private/intl/datepicker/sr-SP.mjs
var ft = {};
ft = {
	calendar: "Kalendar",
	day: "дан",
	dayPeriod: "пре подне/по подне",
	endDate: "Datum završetka",
	era: "ера",
	hour: "сат",
	minute: "минут",
	month: "месец",
	second: "секунд",
	selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izabrani opseg: od ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Izabrano vreme: ${e.time}`,
	startDate: "Datum početka",
	timeZoneName: "временска зона",
	weekday: "дан у недељи",
	year: "година"
};
// node_modules/react-aria/dist/private/intl/datepicker/sv-SE.mjs
var pt = {};
pt = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "fm/em",
	endDate: "Slutdatum",
	era: "era",
	hour: "timme",
	minute: "minut",
	month: "månad",
	second: "sekund",
	selectedDateDescription: (e) => `Valt datum: ${e.date}`,
	selectedRangeDescription: (e) => `Valt intervall: ${e.startDate} till ${e.endDate}`,
	selectedTimeDescription: (e) => `Vald tid: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "tidszon",
	weekday: "veckodag",
	year: "år"
};
// node_modules/react-aria/dist/private/intl/datepicker/tr-TR.mjs
var mt = {};
mt = {
	calendar: "Takvim",
	day: "gün",
	dayPeriod: "ÖÖ/ÖS",
	endDate: "Bitiş Tarihi",
	era: "çağ",
	hour: "saat",
	minute: "dakika",
	month: "ay",
	second: "saniye",
	selectedDateDescription: (e) => `Se\xe7ilen Tarih: ${e.date}`,
	selectedRangeDescription: (e) => `Se\xe7ilen Aral\u{131}k: ${e.startDate} - ${e.endDate}`,
	selectedTimeDescription: (e) => `Se\xe7ilen Zaman: ${e.time}`,
	startDate: "Başlangıç Tarihi",
	timeZoneName: "saat dilimi",
	weekday: "haftanın günü",
	year: "yıl"
};
// node_modules/react-aria/dist/private/intl/datepicker/uk-UA.mjs
var ht = {};
ht = {
	calendar: "Календар",
	day: "день",
	dayPeriod: "дп/пп",
	endDate: "Дата завершення",
	era: "ера",
	hour: "година",
	minute: "хвилина",
	month: "місяць",
	second: "секунда",
	selectedDateDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
	selectedRangeDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{2014} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{447}\u{430}\u{441}: ${e.time}`,
	startDate: "Дата початку",
	timeZoneName: "часовий пояс",
	weekday: "день тижня",
	year: "рік"
};
// node_modules/react-aria/dist/private/intl/datepicker/zh-CN.mjs
var gt = {};
gt = {
	calendar: "日历",
	day: "日",
	dayPeriod: "上午/下午",
	endDate: "结束日期",
	era: "纪元",
	hour: "小时",
	minute: "分钟",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
	selectedRangeDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{9009}\u{5B9A}\u{7684}\u{65F6}\u{95F4}\u{FF1A}${e.time}`,
	startDate: "开始日期",
	timeZoneName: "时区",
	weekday: "工作日",
	year: "年"
};
// node_modules/react-aria/dist/private/intl/datepicker/zh-TW.mjs
var _t = {};
_t = {
	calendar: "日曆",
	day: "日",
	dayPeriod: "上午/下午",
	endDate: "結束日期",
	era: "纪元",
	hour: "小时",
	minute: "分钟",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
	selectedRangeDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,
	selectedTimeDescription: (e) => `\u{9078}\u{5B9A}\u{7684}\u{6642}\u{9593}\u{FF1A}${e.time}`,
	startDate: "開始日期",
	timeZoneName: "时区",
	weekday: "工作日",
	year: "年"
};
// node_modules/react-aria/dist/private/datepicker/intlStrings.mjs
var vt = {};
vt = {
	"ar-AE": Re,
	"bg-BG": ze,
	"cs-CZ": Be,
	"da-DK": Ve,
	"de-DE": He,
	"el-GR": Ue,
	"en-US": We,
	"es-ES": Ge,
	"et-EE": Ke,
	"fi-FI": qe,
	"fr-FR": Je,
	"he-IL": Ye,
	"hr-HR": Xe,
	"hu-HU": Ze,
	"it-IT": Qe,
	"ja-JP": $e,
	"ko-KR": et,
	"lt-LT": tt,
	"lv-LV": nt,
	"nb-NO": rt,
	"nl-NL": it,
	"pl-PL": at,
	"pt-BR": ot,
	"pt-PT": st,
	"ro-RO": ct,
	"ru-RU": lt,
	"sk-SK": ut,
	"sl-SI": dt,
	"sr-SP": ft,
	"sv-SE": pt,
	"tr-TR": mt,
	"uk-UA": ht,
	"zh-CN": gt,
	"zh-TW": _t
};
// node_modules/react-aria/dist/private/datepicker/useDatePickerGroup.mjs
function yt(e, t, n) {
	let { direction: r } = H(), i = (0, G.useMemo)(() => ae(t), [t]), { keyboardProps: o } = F({
		shortcuts: {
			"Alt+ArrowDown": () => {
				if ("setOpen" in e) e.setOpen(!0);
				else return !1;
			},
			"Alt+ArrowUp": () => {
				if ("setOpen" in e) e.setOpen(!0);
				else return !1;
			},
			ArrowLeft: (e) => {
				if (n) return !1;
				if (r === "rtl") {
					if (t.current) {
						let n = P(e), r = bt(t.current, n.getBoundingClientRect().left, -1);
						if (r) {
							r.focus();
							return;
						}
					}
				} else {
					i.focusPrevious();
					return;
				}
				return !1;
			},
			ArrowRight: (e) => {
				if (n) return !1;
				if (r === "rtl") {
					if (t.current) {
						let n = P(e), r = bt(t.current, n.getBoundingClientRect().left, 1);
						if (r) {
							r.focus();
							return;
						}
					}
				} else {
					i.focusNext();
					return;
				}
				return !1;
			}
		},
		allowRepeats: !0
	}), s = () => {
		if (!t.current) return;
		let e = window.event ? P(window.event) : null, n = oe(t.current, { tabbable: !0 });
		if (e &&= (n.currentNode = e, n.previousNode()), !e) {
			let t;
			do
				t = n.lastChild(), t && (e = t);
			while (t);
		}
		for (; e?.hasAttribute("data-placeholder");) {
			let t = n.previousNode();
			if (t && t.hasAttribute("data-placeholder")) e = t;
			else break;
		}
		e && e.focus();
	}, { pressProps: c } = se({
		preventFocusOnPress: !0,
		allowTextSelectionOnPress: !0,
		onPressStart(e) {
			e.pointerType === "mouse" && s();
		},
		onPress(e) {
			(e.pointerType === "touch" || e.pointerType === "pen") && s();
		}
	});
	return a(c, o);
}
function bt(e, t, n) {
	let r = oe(e, { tabbable: !0 }), i = r.nextNode(), a = null, o = Infinity;
	for (; i;) {
		let e = i.getBoundingClientRect().left - t, s = Math.abs(e);
		Math.sign(e) === n && s < o && (a = i, o = s), i = r.nextNode();
	}
	return a;
}
// node_modules/react-aria/dist/private/datepicker/useDateField.mjs
function xt(e) {
	return e && e.__esModule ? e.default : e;
}
var St = /* @__PURE__ */ new WeakMap(), Ct = "__reactAriaDateFieldRole", wt = "__reactAriaDateFieldFocusManager";
function Tt(e, t, n) {
	let { isInvalid: r, validationErrors: i, validationDetails: o } = t.displayValidation, { labelProps: s, fieldProps: c, descriptionProps: l, errorMessageProps: u } = ue({
		...e,
		labelElementType: "span",
		isInvalid: r,
		errorMessage: e.errorMessage || i
	}), d = (0, G.useRef)(null), { focusWithinProps: f } = fe({
		...e,
		onFocusWithin(n) {
			d.current = t.value, e.onFocus?.(n);
		},
		onBlurWithin: (n) => {
			t.confirmPlaceholder(), t.value !== d.current && t.commitValidation(), e.onBlur?.(n);
		},
		onFocusWithinChange: e.onFocusChange
	}), p = ye(xt(vt), "@react-aria/datepicker"), m = t.maxGranularity === "hour" ? "selectedTimeDescription" : "selectedDateDescription", h = t.maxGranularity === "hour" ? "time" : "date", g = t.value ? p.format(m, { [h]: t.formatValue({ month: "long" }) }) : "", _ = le(g), v = e.__reactAriaDateFieldRole === "presentation" ? c["aria-describedby"] : [_["aria-describedby"], c["aria-describedby"]].filter(Boolean).join(" ") || void 0, y = e[wt], b = (0, G.useMemo)(() => y || ae(n), [y, n]), x = yt(t, n, e[Ct] === "presentation");
	St.set(t, {
		ariaLabel: e["aria-label"],
		ariaLabelledBy: [s.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
		ariaDescribedBy: v,
		focusManager: b
	});
	let S = (0, G.useRef)(e.autoFocus), C;
	C = e.__reactAriaDateFieldRole === "presentation" ? { role: "presentation" } : a(c, {
		role: "group",
		"aria-disabled": e.isDisabled || void 0,
		"aria-describedby": v
	}), (0, G.useEffect)(() => {
		S.current && b.focusFirst(), S.current = !1;
	}, [b]), me(e.inputRef, t.defaultValue, t.setValue), ve({
		...e,
		focus() {
			b.focusFirst();
		}
	}, t, e.inputRef);
	let w = {
		type: "hidden",
		name: e.name,
		form: e.form,
		value: t.value?.toString() || "",
		disabled: e.isDisabled
	};
	e.validationBehavior === "native" && (w.type = "text", w.hidden = !0, w.required = e.isRequired, w.onChange = () => {});
	let T = V(e);
	return {
		labelProps: {
			...s,
			onClick: () => {
				b.focusFirst();
			}
		},
		fieldProps: a(T, C, x, f, {
			onKeyDown: e.onKeyDown,
			onKeyUp: e.onKeyUp,
			style: { unicodeBidi: "isolate" }
		}),
		inputProps: w,
		descriptionProps: l,
		errorMessageProps: u,
		isInvalid: r,
		validationErrors: i,
		validationDetails: o
	};
}
function Et(e, t, n) {
	let r = Tt(e, t, n);
	return r.inputProps.value = t.timeValue?.toString() || "", r;
}
// node_modules/react-aria/dist/private/datepicker/useDisplayNames.mjs
function Dt(e) {
	return e && e.__esModule ? e.default : e;
}
function Ot() {
	let { locale: e } = H(), t = be(Dt(vt), "@react-aria/datepicker");
	return (0, G.useMemo)(() => {
		try {
			return new Intl.DisplayNames(e, { type: "dateTimeField" });
		} catch {
			return new kt(e, t);
		}
	}, [e, t]);
}
var kt = class {
	constructor(e, t) {
		this.locale = e, this.dictionary = t;
	}
	of(e) {
		return this.dictionary.getStringForLocale(e, this.locale);
	}
};
// node_modules/react-aria/dist/private/datepicker/useDateSegment.mjs
function At(e, t, n) {
	let r = (0, G.useRef)(""), { locale: i, direction: o } = H(), s = Ot(), { ariaLabel: l, ariaLabelledBy: u, ariaDescribedBy: d, focusManager: f } = St.get(t), p = e.isPlaceholder ? "" : e.text, m = (0, G.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]), h = M({
		month: "long",
		timeZone: m.timeZone
	}), g = M({
		hour: "numeric",
		hour12: m.hour12,
		timeZone: m.timeZone
	});
	if (e.type === "month" && !e.isPlaceholder) {
		let e = h.format(t.dateValue);
		p = e === p ? e : `${p} \u{2013} ${e}`;
	} else e.type === "hour" && !e.isPlaceholder && (p = g.format(t.dateValue));
	let { spinButtonProps: _ } = De({
		value: e.value ?? void 0,
		textValue: p,
		minValue: e.minValue,
		maxValue: e.maxValue,
		isDisabled: t.isDisabled,
		isReadOnly: t.isReadOnly || !e.isEditable,
		isRequired: t.isRequired,
		onIncrement: () => {
			r.current = "", t.increment(e.type);
		},
		onDecrement: () => {
			r.current = "", t.decrement(e.type);
		},
		onIncrementPage: () => {
			r.current = "", t.incrementPage(e.type);
		},
		onDecrementPage: () => {
			r.current = "", t.decrementPage(e.type);
		},
		onIncrementToMax: () => {
			r.current = "", t.incrementToMax(e.type);
		},
		onDecrementToMin: () => {
			r.current = "", t.decrementToMin(e.type);
		}
	}), v = (0, G.useMemo)(() => new Ee(i, { maximumFractionDigits: 0 }), [i]), y = () => {
		if (e.text === e.placeholder && f.focusPrevious(), v.isValidPartialNumber(e.text) && !t.isReadOnly && !e.isPlaceholder) {
			let n = e.text.slice(0, -1), i = v.parse(n);
			n = i === 0 ? "" : n, n.length === 0 || i === 0 ? t.clearSegment(e.type) : t.setSegment(e.type, i), r.current = n;
		} else (e.type === "dayPeriod" || e.type === "era") && t.clearSegment(e.type);
	}, { keyboardProps: b } = F({
		shortcuts: {
			Backspace: () => {
				y();
			},
			Delete: () => {
				y();
			},
			"Mod+a": () => {}
		},
		allowRepeats: !0
	}), { startsWith: x } = Ce({ sensitivity: "base" }), C = M({
		hour: "numeric",
		hour12: !0
	}), T = (0, G.useMemo)(() => {
		let e = /* @__PURE__ */ new Date();
		return e.setHours(0), C.formatToParts(e).find((e) => e.type === "dayPeriod").value;
	}, [C]), E = (0, G.useMemo)(() => {
		let e = /* @__PURE__ */ new Date();
		return e.setHours(12), C.formatToParts(e).find((e) => e.type === "dayPeriod").value;
	}, [C]), D = M({
		year: "numeric",
		era: "narrow",
		timeZone: "UTC"
	}), O = (0, G.useMemo)(() => {
		if (e.type !== "era") return [];
		let n = w(new S(1, 1, 1), t.calendar), r = t.calendar.getEras().map((e) => {
			let t = n.set({
				year: 1,
				month: 1,
				day: 1,
				era: e
			}).toDate("UTC");
			return {
				era: e,
				formatted: D.formatToParts(t).find((e) => e.type === "era")?.value ?? e
			};
		}), i = jt(r.map((e) => e.formatted));
		if (i) for (let e of r) e.formatted = e.formatted.slice(i);
		return r;
	}, [
		D,
		t.calendar,
		e.type
	]), k = (n) => {
		if (t.isDisabled || t.isReadOnly) return;
		let i = r.current + n;
		switch (e.type) {
			case "dayPeriod":
				if (x(T, n)) t.setSegment("dayPeriod", 0);
				else if (x(E, n)) t.setSegment("dayPeriod", 1);
				else break;
				f.focusNext();
				break;
			case "era": {
				let e = O.find((e) => x(e.formatted, n));
				e && (t.setSegment("era", e.era), f.focusNext());
				break;
			}
			case "day":
			case "hour":
			case "minute":
			case "second":
			case "month":
			case "year": {
				if (!v.isValidPartialNumber(i)) return;
				let a = v.parse(i), o = a;
				if (e.maxValue !== void 0 && a > e.maxValue && (o = v.parse(n)), isNaN(a)) return;
				t.setSegment(e.type, o), e.maxValue !== void 0 && (Number(a + "0") > e.maxValue || i.length >= String(e.maxValue).length) ? (r.current = "", f.focusNext()) : r.current = i;
				break;
			}
		}
	}, ee = () => {
		r.current = "", n.current && ce(n.current, { containingElement: xe(n.current) }), window.getSelection()?.collapse(n.current);
	}, A = (0, G.useRef)(typeof document < "u" ? document : null);
	Se(A, "selectionchange", () => {
		let e = window.getSelection();
		e?.anchorNode && I(n.current, e?.anchorNode) && re() === n.current && e.collapse(n.current);
	});
	let j = (0, G.useRef)("");
	Se(n, "beforeinput", (r) => {
		if (n.current) switch (r.preventDefault(), r.inputType) {
			case "deleteContentBackward":
			case "deleteContentForward":
				v.isValidPartialNumber(e.text) && !t.isReadOnly && y();
				break;
			case "insertCompositionText":
				j.current = n.current.textContent, n.current.textContent = n.current.textContent;
				break;
			default: r.data != null && k(r.data);
		}
	}), Se(n, "input", (e) => {
		let { inputType: t, data: r } = e;
		t === "insertCompositionText" && (n.current && (n.current.textContent = j.current), r != null && (x(T, r) || x(E, r)) && k(r));
	}), Te(() => {
		let e = n.current;
		return () => {
			re() === e && (f.focusPrevious() || f.focusNext());
		};
	}, [n, f]);
	let te = ne() || e.type === "timeZoneName" ? {
		role: "textbox",
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuetext": null,
		"aria-valuenow": null
	} : {};
	e !== (0, G.useMemo)(() => t.segments.find((e) => e.isEditable), [t.segments]) && !t.isInvalid && (d = void 0);
	let N = c(), P = !t.isDisabled && !t.isReadOnly && e.isEditable, ie = e.type === "literal" ? "" : s.of(e.type), L = we({
		"aria-label": `${ie}${l ? `, ${l}` : ""}${u ? ", " : ""}`,
		"aria-labelledby": u
	});
	if (e.type === "literal") return { segmentProps: { "aria-hidden": !0 } };
	let R = { caretColor: "transparent" };
	if (o === "rtl") {
		R.unicodeBidi = "embed";
		let t = m[e.type];
		(t === "numeric" || t === "2-digit") && (R.direction = "ltr");
	}
	return { segmentProps: a(_, L, {
		id: N,
		...te,
		...b,
		"aria-invalid": t.isInvalid ? "true" : void 0,
		"aria-describedby": d,
		"aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
		"data-placeholder": e.isPlaceholder || void 0,
		contentEditable: P,
		suppressContentEditableWarning: P,
		spellCheck: P ? "false" : void 0,
		autoCorrect: P ? "off" : void 0,
		enterKeyHint: P ? "next" : void 0,
		inputMode: t.isDisabled || e.type === "dayPeriod" || e.type === "era" || !P ? void 0 : "numeric",
		tabIndex: t.isDisabled ? void 0 : 0,
		onFocus: ee,
		style: R,
		onPointerDown(e) {
			e.stopPropagation();
		},
		onMouseDown(e) {
			e.stopPropagation();
		}
	}) };
}
function jt(e) {
	e.sort();
	let t = e[0], n = e[e.length - 1];
	for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return e;
	return 0;
}
// node_modules/react-stately/dist/private/intl/datepicker/ar-AE.mjs
var Mt = {};
Mt = {
	rangeOverflow: (e) => `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,
	rangeReversed: "تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.",
	rangeUnderflow: (e) => `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,
	unavailableDate: "البيانات المحددة غير متاحة."
};
// node_modules/react-stately/dist/private/intl/datepicker/bg-BG.mjs
var Nt = {};
Nt = {
	rangeOverflow: (e) => `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,
	rangeReversed: "Началната дата трябва да е преди крайната.",
	rangeUnderflow: (e) => `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,
	unavailableDate: "Избраната дата не е налична."
};
// node_modules/react-stately/dist/private/intl/datepicker/cs-CZ.mjs
var Pt = {};
Pt = {
	rangeOverflow: (e) => `Hodnota mus\xed b\xfdt ${e.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,
	rangeReversed: "Datum zahájení musí předcházet datu ukončení.",
	rangeUnderflow: (e) => `Hodnota mus\xed b\xfdt ${e.minValue} nebo pozd\u{11B}j\u{161}\xed.`,
	unavailableDate: "Vybrané datum není k dispozici."
};
// node_modules/react-stately/dist/private/intl/datepicker/da-DK.mjs
var Ft = {};
Ft = {
	rangeOverflow: (e) => `V\xe6rdien skal v\xe6re ${e.maxValue} eller tidligere.`,
	rangeReversed: "Startdatoen skal være før slutdatoen.",
	rangeUnderflow: (e) => `V\xe6rdien skal v\xe6re ${e.minValue} eller nyere.`,
	unavailableDate: "Den valgte dato er ikke tilgængelig."
};
// node_modules/react-stately/dist/private/intl/datepicker/de-DE.mjs
var It = {};
It = {
	rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder fr\xfcher sein.`,
	rangeReversed: "Das Startdatum muss vor dem Enddatum liegen.",
	rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder sp\xe4ter sein.`,
	unavailableDate: "Das ausgewählte Datum ist nicht verfügbar."
};
// node_modules/react-stately/dist/private/intl/datepicker/el-GR.mjs
var Lt = {};
Lt = {
	rangeOverflow: (e) => `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
	rangeReversed: "Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.",
	rangeUnderflow: (e) => `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
	unavailableDate: "Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη."
};
// node_modules/react-stately/dist/private/intl/datepicker/en-US.mjs
var Rt = {};
Rt = {
	rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
	rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
	rangeReversed: "Start date must be before end date.",
	unavailableDate: "Selected date unavailable."
};
// node_modules/react-stately/dist/private/intl/datepicker/es-ES.mjs
var zt = {};
zt = {
	rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
	rangeReversed: "La fecha de inicio debe ser anterior a la fecha de finalización.",
	rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
	unavailableDate: "Fecha seleccionada no disponible."
};
// node_modules/react-stately/dist/private/intl/datepicker/et-EE.mjs
var Bt = {};
Bt = {
	rangeOverflow: (e) => `V\xe4\xe4rtus peab olema ${e.maxValue} v\xf5i varasem.`,
	rangeReversed: "Alguskuupäev peab olema enne lõppkuupäeva.",
	rangeUnderflow: (e) => `V\xe4\xe4rtus peab olema ${e.minValue} v\xf5i hilisem.`,
	unavailableDate: "Valitud kuupäev pole saadaval."
};
// node_modules/react-stately/dist/private/intl/datepicker/fi-FI.mjs
var Vt = {};
Vt = {
	rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sit\xe4 aikaisempi.`,
	rangeReversed: "Aloituspäivän on oltava ennen lopetuspäivää.",
	rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,
	unavailableDate: "Valittu päivämäärä ei ole käytettävissä."
};
// node_modules/react-stately/dist/private/intl/datepicker/fr-FR.mjs
var Ht = {};
Ht = {
	rangeOverflow: (e) => `La valeur doit \xeatre ${e.maxValue} ou ant\xe9rieure.`,
	rangeReversed: "La date de début doit être antérieure à la date de fin.",
	rangeUnderflow: (e) => `La valeur doit \xeatre ${e.minValue} ou ult\xe9rieure.`,
	unavailableDate: "La date sélectionnée n’est pas disponible."
};
// node_modules/react-stately/dist/private/intl/datepicker/he-IL.mjs
var Ut = {};
Ut = {
	rangeOverflow: (e) => `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
	rangeReversed: "תאריך ההתחלה חייב להיות לפני תאריך הסיום.",
	rangeUnderflow: (e) => `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
	unavailableDate: "התאריך הנבחר אינו זמין."
};
// node_modules/react-stately/dist/private/intl/datepicker/hr-HR.mjs
var Wt = {};
Wt = {
	rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
	rangeReversed: "Datum početka mora biti prije datuma završetka.",
	rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
	unavailableDate: "Odabrani datum nije dostupan."
};
// node_modules/react-stately/dist/private/intl/datepicker/hu-HU.mjs
var Gt = {};
Gt = {
	rangeOverflow: (e) => `Az \xe9rt\xe9knek ${e.maxValue} vagy kor\xe1bbinak kell lennie.`,
	rangeReversed: "A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.",
	rangeUnderflow: (e) => `Az \xe9rt\xe9knek ${e.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,
	unavailableDate: "A kiválasztott dátum nem érhető el."
};
// node_modules/react-stately/dist/private/intl/datepicker/it-IT.mjs
var Kt = {};
Kt = {
	rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
	rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
	rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
	unavailableDate: "Data selezionata non disponibile."
};
// node_modules/react-stately/dist/private/intl/datepicker/ja-JP.mjs
var qt = {};
qt = {
	rangeOverflow: (e) => `\u{5024}\u{306F} ${e.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
	rangeReversed: "開始日は終了日より前にする必要があります。",
	rangeUnderflow: (e) => `\u{5024}\u{306F} ${e.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
	unavailableDate: "選択した日付は使用できません。"
};
// node_modules/react-stately/dist/private/intl/datepicker/ko-KR.mjs
var Jt = {};
Jt = {
	rangeOverflow: (e) => `\u{AC12}\u{C740} ${e.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
	rangeReversed: "시작일은 종료일 이전이어야 합니다.",
	rangeUnderflow: (e) => `\u{AC12}\u{C740} ${e.minValue} \u{C774}\u{D6C4}\u{C5EC}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
	unavailableDate: "선택한 날짜를 사용할 수 없습니다."
};
// node_modules/react-stately/dist/private/intl/datepicker/lt-LT.mjs
var Yt = {};
Yt = {
	rangeOverflow: (e) => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.maxValue} arba ankstesn\u{117}.`,
	rangeReversed: "Pradžios data turi būti ankstesnė nei pabaigos data.",
	rangeUnderflow: (e) => `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.minValue} arba naujesn\u{117}.`,
	unavailableDate: "Pasirinkta data nepasiekiama."
};
// node_modules/react-stately/dist/private/intl/datepicker/lv-LV.mjs
var Xt = {};
Xt = {
	rangeOverflow: (e) => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.maxValue} vai agr\u{101}kai.`,
	rangeReversed: "Sākuma datumam ir jābūt pirms beigu datuma.",
	rangeUnderflow: (e) => `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.minValue} vai v\u{113}l\u{101}kai.`,
	unavailableDate: "Atlasītais datums nav pieejams."
};
// node_modules/react-stately/dist/private/intl/datepicker/nb-NO.mjs
var Zt = {};
Zt = {
	rangeOverflow: (e) => `Verdien m\xe5 v\xe6re ${e.maxValue} eller tidligere.`,
	rangeReversed: "Startdatoen må være før sluttdatoen.",
	rangeUnderflow: (e) => `Verdien m\xe5 v\xe6re ${e.minValue} eller senere.`,
	unavailableDate: "Valgt dato utilgjengelig."
};
// node_modules/react-stately/dist/private/intl/datepicker/nl-NL.mjs
var Qt = {};
Qt = {
	rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
	rangeReversed: "De startdatum moet voor de einddatum liggen.",
	rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
	unavailableDate: "Geselecteerde datum niet beschikbaar."
};
// node_modules/react-stately/dist/private/intl/datepicker/pl-PL.mjs
var $t = {};
$t = {
	rangeOverflow: (e) => `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.maxValue} lub wcze\u{15B}niejsz\u{105}.`,
	rangeReversed: "Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",
	rangeUnderflow: (e) => `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,
	unavailableDate: "Wybrana data jest niedostępna."
};
// node_modules/react-stately/dist/private/intl/datepicker/pt-BR.mjs
var en = {};
en = {
	rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
	rangeReversed: "A data inicial deve ser anterior à data final.",
	rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
	unavailableDate: "Data selecionada indisponível."
};
// node_modules/react-stately/dist/private/intl/datepicker/pt-PT.mjs
var tn = {};
tn = {
	rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
	rangeReversed: "A data de início deve ser anterior à data de fim.",
	rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
	unavailableDate: "Data selecionada indisponível."
};
// node_modules/react-stately/dist/private/intl/datepicker/ro-RO.mjs
var nn = {};
nn = {
	rangeOverflow: (e) => `Valoarea trebuie s\u{103} fie ${e.maxValue} sau anterioar\u{103}.`,
	rangeReversed: "Data de început trebuie să fie anterioară datei de sfârșit.",
	rangeUnderflow: (e) => `Valoarea trebuie s\u{103} fie ${e.minValue} sau ulterioar\u{103}.`,
	unavailableDate: "Data selectată nu este disponibilă."
};
// node_modules/react-stately/dist/private/intl/datepicker/ru-RU.mjs
var rn = {};
rn = {
	rangeOverflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${e.maxValue}.`,
	rangeReversed: "Дата начала должна предшествовать дате окончания.",
	rangeUnderflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${e.minValue}.`,
	unavailableDate: "Выбранная дата недоступна."
};
// node_modules/react-stately/dist/private/intl/datepicker/sk-SK.mjs
var an = {};
an = {
	rangeOverflow: (e) => `Hodnota mus\xed by\u{165} ${e.maxValue} alebo skor\u{161}ia.`,
	rangeReversed: "Dátum začiatku musí byť skorší ako dátum konca.",
	rangeUnderflow: (e) => `Hodnota mus\xed by\u{165} ${e.minValue} alebo neskor\u{161}ia.`,
	unavailableDate: "Vybratý dátum je nedostupný."
};
// node_modules/react-stately/dist/private/intl/datepicker/sl-SI.mjs
var on = {};
on = {
	rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starej\u{161}a.`,
	rangeReversed: "Začetni datum mora biti pred končnim datumom.",
	rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novej\u{161}a.`,
	unavailableDate: "Izbrani datum ni na voljo."
};
// node_modules/react-stately/dist/private/intl/datepicker/sr-SP.mjs
var sn = {};
sn = {
	rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
	rangeReversed: "Datum početka mora biti pre datuma završetka.",
	rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
	unavailableDate: "Izabrani datum nije dostupan."
};
// node_modules/react-stately/dist/private/intl/datepicker/sv-SE.mjs
var cn = {};
cn = {
	rangeOverflow: (e) => `V\xe4rdet m\xe5ste vara ${e.maxValue} eller tidigare.`,
	rangeReversed: "Startdatumet måste vara före slutdatumet.",
	rangeUnderflow: (e) => `V\xe4rdet m\xe5ste vara ${e.minValue} eller senare.`,
	unavailableDate: "Det valda datumet är inte tillgängligt."
};
// node_modules/react-stately/dist/private/intl/datepicker/tr-TR.mjs
var ln = {};
ln = {
	rangeOverflow: (e) => `De\u{11F}er, ${e.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,
	rangeReversed: "Başlangıç tarihi bitiş tarihinden önce olmalıdır.",
	rangeUnderflow: (e) => `De\u{11F}er, ${e.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,
	unavailableDate: "Seçilen tarih kullanılamıyor."
};
// node_modules/react-stately/dist/private/intl/datepicker/uk-UA.mjs
var un = {};
un = {
	rangeOverflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${e.maxValue}.`,
	rangeReversed: "Дата початку має передувати даті завершення.",
	rangeUnderflow: (e) => `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${e.minValue}.`,
	unavailableDate: "Вибрана дата недоступна."
};
// node_modules/react-stately/dist/private/intl/datepicker/zh-CN.mjs
var dn = {};
dn = {
	rangeOverflow: (e) => `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,
	rangeReversed: "开始日期必须早于结束日期。",
	rangeUnderflow: (e) => `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,
	unavailableDate: "所选日期不可用。"
};
// node_modules/react-stately/dist/private/intl/datepicker/zh-TW.mjs
var fn = {};
fn = {
	rangeOverflow: (e) => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,
	rangeReversed: "開始日期必須在結束日期之前。",
	rangeUnderflow: (e) => `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,
	unavailableDate: "所選日期無法使用。"
};
// node_modules/react-stately/dist/private/datepicker/intlStrings.mjs
var pn = {};
pn = {
	"ar-AE": Mt,
	"bg-BG": Nt,
	"cs-CZ": Pt,
	"da-DK": Ft,
	"de-DE": It,
	"el-GR": Lt,
	"en-US": Rt,
	"es-ES": zt,
	"et-EE": Bt,
	"fi-FI": Vt,
	"fr-FR": Ht,
	"he-IL": Ut,
	"hr-HR": Wt,
	"hu-HU": Gt,
	"it-IT": Kt,
	"ja-JP": qt,
	"ko-KR": Jt,
	"lt-LT": Yt,
	"lv-LV": Xt,
	"nb-NO": Zt,
	"nl-NL": Qt,
	"pl-PL": $t,
	"pt-BR": en,
	"pt-PT": tn,
	"ro-RO": nn,
	"ru-RU": rn,
	"sk-SK": an,
	"sl-SI": on,
	"sr-SP": sn,
	"sv-SE": cn,
	"tr-TR": ln,
	"uk-UA": un,
	"zh-CN": dn,
	"zh-TW": fn
};
// node_modules/react-stately/dist/private/datepicker/utils.mjs
function mn(e) {
	return e && e.__esModule ? e.default : e;
}
var hn = new U(mn(pn));
function gn() {
	let e = typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = "en-US";
	}
	return e;
}
function _n(e, t, n, r, i) {
	let a = e != null && n != null && e.compare(n) > 0, o = e != null && t != null && e.compare(t) < 0, s = e != null && r?.(e) || !1, c = a || o || s, l = [];
	if (c) {
		let e = gn(), r = U.getGlobalDictionaryForPackage("@react-stately/datepicker") || hn, c = new Oe(e, r), u = new k(e, K({}, i)), d = u.resolvedOptions().timeZone;
		o && t != null && l.push(c.format("rangeUnderflow", { minValue: u.format(t.toDate(d)) })), a && n != null && l.push(c.format("rangeOverflow", { maxValue: u.format(n.toDate(d)) })), s && l.push(c.format("unavailableDate"));
	}
	return {
		isInvalid: c,
		validationErrors: l,
		validationDetails: {
			badInput: s,
			customError: !1,
			patternMismatch: !1,
			rangeOverflow: a,
			rangeUnderflow: o,
			stepMismatch: !1,
			tooLong: !1,
			tooShort: !1,
			typeMismatch: !1,
			valueMissing: !1,
			valid: !c
		}
	};
}
function vn(e, t, n, r, i) {
	let a = _n(e?.start ?? null, t, n, r, i), o = _n(e?.end ?? null, t, n, r, i), s = ge(a, o);
	if (e?.end != null && e.start != null && e.end.compare(e.start) < 0) {
		let e = U.getGlobalDictionaryForPackage("@react-stately/datepicker") || hn;
		s = ge(s, {
			isInvalid: !0,
			validationErrors: [e.getStringForLocale("rangeReversed", gn())],
			validationDetails: {
				...he,
				rangeUnderflow: !0,
				rangeOverflow: !0,
				valid: !1
			}
		});
	}
	return s;
}
var yn = {
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "2-digit",
	second: "2-digit"
}, bn = {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit"
};
function K(e, t) {
	e = {
		...t.shouldForceLeadingZeros ? bn : yn,
		...e
	};
	let n = t.granularity || "minute", r = Object.keys(e), i = r.indexOf(t.maxGranularity ?? "year");
	i < 0 && (i = 0);
	let a = r.indexOf(n);
	if (a < 0 && (a = 2), i > a) throw Error("maxGranularity must be greater than granularity");
	let o = r.slice(i, a + 1).reduce((t, n) => (t[n] = e[n], t), {});
	return t.hourCycle != null && (o.hour12 = t.hourCycle === 12), o.timeZone = t.timeZone || "UTC", (n === "hour" || n === "minute" || n === "second") && t.timeZone && !t.hideTimeZone && (o.timeZoneName = "short"), t.showEra && i === 0 && (o.era = "short"), o;
}
function xn(e) {
	return e && "hour" in e ? e : new D();
}
function Sn(e, t) {
	if (e === null) return null;
	if (e) return w(e, t);
}
function Cn(e, t, n, r) {
	if (e) return Sn(e, n);
	let i = w(E(r ?? x()).set({
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	}), n);
	return t === "year" || t === "month" || t === "day" ? O(i) : r ? i : N(i);
}
function wn(e, t) {
	let n = e && "timeZone" in e ? e.timeZone : void 0, r = e && "minute" in e ? "minute" : "day";
	if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
	let [i, a] = (0, G.useState)([r, n]);
	e && (i[0] !== r || i[1] !== n) && a([r, n]), t ||= e ? r : i[0];
	let o = e ? n : i[1];
	return [t, o];
}
// node_modules/react-stately/dist/private/datepicker/placeholders.mjs
var Tn = new U({
	ach: {
		year: "mwaka",
		month: "dwe",
		day: "nino"
	},
	af: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	am: {
		year: "ዓዓዓዓ",
		month: "ሚሜ",
		day: "ቀቀ"
	},
	an: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	ar: {
		year: "سنة",
		month: "شهر",
		day: "يوم"
	},
	ast: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	az: {
		year: "iiii",
		month: "aa",
		day: "gg"
	},
	be: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	bg: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	bn: {
		year: "yyyy",
		month: "মিমি",
		day: "dd"
	},
	br: {
		year: "bbbb",
		month: "mm",
		day: "dd"
	},
	bs: {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	ca: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	cak: {
		year: "jjjj",
		month: "ii",
		day: "q'q'"
	},
	ckb: {
		year: "ساڵ",
		month: "مانگ",
		day: "ڕۆژ"
	},
	cs: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	cy: {
		year: "bbbb",
		month: "mm",
		day: "dd"
	},
	da: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	de: {
		year: "jjjj",
		month: "mm",
		day: "tt"
	},
	dsb: {
		year: "llll",
		month: "mm",
		day: "źź"
	},
	el: {
		year: "εεεε",
		month: "μμ",
		day: "ηη"
	},
	en: {
		year: "yyyy",
		month: "mm",
		day: "dd"
	},
	eo: {
		year: "jjjj",
		month: "mm",
		day: "tt"
	},
	es: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	et: {
		year: "aaaa",
		month: "kk",
		day: "pp"
	},
	eu: {
		year: "uuuu",
		month: "hh",
		day: "ee"
	},
	fa: {
		year: "سال",
		month: "ماه",
		day: "روز"
	},
	ff: {
		year: "hhhh",
		month: "ll",
		day: "ññ"
	},
	fi: {
		year: "vvvv",
		month: "kk",
		day: "pp"
	},
	fr: {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	fy: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	ga: {
		year: "bbbb",
		month: "mm",
		day: "ll"
	},
	gd: {
		year: "bbbb",
		month: "mm",
		day: "ll"
	},
	gl: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	he: {
		year: "שנה",
		month: "חודש",
		day: "יום"
	},
	hr: {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	hsb: {
		year: "llll",
		month: "mm",
		day: "dd"
	},
	hu: {
		year: "éééé",
		month: "hh",
		day: "nn"
	},
	ia: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	id: {
		year: "tttt",
		month: "bb",
		day: "hh"
	},
	is: {
		year: "áááá",
		month: "mm",
		day: "dd"
	},
	it: {
		year: "aaaa",
		month: "mm",
		day: "gg"
	},
	ja: {
		year: "年",
		month: "月",
		day: "日"
	},
	ka: {
		year: "წწწწ",
		month: "თთ",
		day: "რრ"
	},
	kk: {
		year: "жжжж",
		month: "аа",
		day: "кк"
	},
	kn: {
		year: "ವವವವ",
		month: "ಮಿಮೀ",
		day: "ದಿದಿ"
	},
	ko: {
		year: "연도",
		month: "월",
		day: "일"
	},
	lb: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	lo: {
		year: "ປປປປ",
		month: "ດດ",
		day: "ວວ"
	},
	lt: {
		year: "mmmm",
		month: "mm",
		day: "dd"
	},
	lv: {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	meh: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	ml: {
		year: "വർഷം",
		month: "മാസം",
		day: "തീയതി"
	},
	ms: {
		year: "tttt",
		month: "mm",
		day: "hh"
	},
	nb: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	nl: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	nn: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	no: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	oc: {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	pl: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	pt: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	rm: {
		year: "oooo",
		month: "mm",
		day: "dd"
	},
	ro: {
		year: "aaaa",
		month: "ll",
		day: "zz"
	},
	ru: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	sc: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	scn: {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	sk: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	sl: {
		year: "llll",
		month: "mm",
		day: "dd"
	},
	sr: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	"sr-Latn": {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	sv: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	szl: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	tg: {
		year: "сссс",
		month: "мм",
		day: "рр"
	},
	th: {
		year: "ปปปป",
		month: "ดด",
		day: "วว"
	},
	tr: {
		year: "yyyy",
		month: "aa",
		day: "gg"
	},
	uk: {
		year: "рррр",
		month: "мм",
		day: "дд"
	},
	"zh-CN": {
		year: "年",
		month: "月",
		day: "日"
	},
	"zh-TW": {
		year: "年",
		month: "月",
		day: "日"
	}
}, "en");
function En(e, t, n) {
	return e === "era" || e === "dayPeriod" ? t : e === "year" || e === "month" || e === "day" ? Tn.getStringForLocale(e, n) : "––";
}
// node_modules/react-stately/dist/private/datepicker/IncompleteDate.mjs
var q = class e {
	constructor(e, t, n) {
		if (this.era = n?.era ?? null, this.calendar = e, this.year = n?.year ?? null, this.month = n?.month ?? null, this.day = n?.day ?? null, this.hour = n?.hour ?? null, this.hourCycle = t, this.dayPeriod = null, this.minute = n?.minute ?? null, this.second = n?.second ?? null, this.millisecond = n?.millisecond ?? null, this.offset = "offset" in (n ?? {}) ? n.offset : null, this.hour != null) {
			let [e, n] = Y(this.hour, t);
			this.dayPeriod = e, this.hour = n;
		}
	}
	copy() {
		let t = new e(this.calendar, this.hourCycle);
		return t.era = this.era, t.year = this.year, t.month = this.month, t.day = this.day, t.hour = this.hour, t.dayPeriod = this.dayPeriod, t.minute = this.minute, t.second = this.second, t.millisecond = this.millisecond, t.offset = this.offset, t;
	}
	isComplete(e) {
		return e.every((e) => this[e] != null);
	}
	validate(e, t) {
		return t.every((t) => {
			if ((t === "hour" || t === "dayPeriod") && "hour" in e) {
				let [t, n] = Y(e.hour, this.hourCycle);
				return this.dayPeriod === t && this.hour === n;
			}
			return this[t] === e[t];
		});
	}
	isCleared(e) {
		return e.every((e) => this[e] === null);
	}
	set(e, t, n) {
		let r = this.copy();
		return r[e] = t, e === "hour" && r.dayPeriod == null && "hour" in n && (r.dayPeriod = Y(n.hour, this.hourCycle)[0]), e === "year" && r.era == null && (r.era = n.era), e !== "second" && e !== "literal" && e !== "timeZoneName" && (r.offset = null), r;
	}
	clear(e) {
		let t = this.copy();
		return t[e] = null, e === "year" && (t.era = null), t.offset = null, t;
	}
	cycle(e, t, n, r) {
		let i = this.copy();
		if (i[e] == null && e !== "dayPeriod" && e !== "era") {
			if (e === "hour" && "hour" in n) {
				let [e, t] = Y(n.hour, this.hourCycle);
				i.dayPeriod = e, i.hour = t;
			} else i[e] = n[e];
			return e === "year" && i.era == null && (i.era = n.era), i;
		}
		switch (e) {
			case "era": {
				let e = this.calendar.getEras(), n = e.indexOf(i.era);
				n = J(n, t, 0, e.length - 1), i.era = e[n];
				break;
			}
			case "year": {
				let r = new S(this.calendar, this.era ?? n.era, this.year ?? n.year, this.month ?? 1, this.day ?? 1);
				r = r.cycle(e, t, { round: e === "year" }), i.era = r.era, i.year = r.year;
				break;
			}
			case "month":
				i.month = J(i.month ?? 1, t, 1, this.calendar.getMaximumMonthsInYear());
				break;
			case "day":
				i.day = J(i.day ?? 1, t, 1, this.calendar.getMaximumDaysInMonth());
				break;
			case "hour": {
				let e = r.some((e) => [
					"year",
					"month",
					"day"
				].includes(e));
				if ("timeZone" in n && (!e || i.year != null && i.month != null && i.day != null)) {
					let e = this.toValue(n);
					e = e.cycle("hour", t, {
						hourCycle: this.hourCycle === "h12" ? 12 : 24,
						round: !1
					});
					let [r, a] = Y(e.hour, this.hourCycle);
					i.hour = a, i.dayPeriod = r, i.offset = e.offset;
				} else {
					let e = i.hour ?? 0, r = this.getSegmentLimits("hour");
					i.hour = J(e, t, r.minValue, r.maxValue), i.dayPeriod == null && "hour" in n && (i.dayPeriod = Y(n.hour, this.hourCycle)[0]);
				}
				break;
			}
			case "dayPeriod":
				i.dayPeriod = J(i.dayPeriod ?? 0, t, 0, 1);
				break;
			case "minute":
				i.minute = J(i.minute ?? 0, t, 0, 59, !0);
				break;
			case "second": i.second = J(i.second ?? 0, t, 0, 59, !0);
		}
		return i;
	}
	toValue(e) {
		if ("hour" in e) {
			let t = this.hour;
			t == null ? (this.hourCycle === "h12" || this.hourCycle === "h11") && (t = this.dayPeriod === 1 ? 12 : 0) : t = Dn(t, this.dayPeriod ?? 0, this.hourCycle);
			let n = e.set({
				era: this.era ?? e.era,
				year: this.year ?? e.year,
				month: this.month ?? e.month,
				day: this.day ?? e.day,
				hour: t ?? e.hour,
				minute: this.minute ?? e.minute,
				second: this.second ?? e.second,
				millisecond: this.millisecond ?? e.millisecond
			});
			return "offset" in n && this.offset != null && n.offset !== this.offset && (n = n.add({ milliseconds: n.offset - this.offset })), n;
		}
		return e.set({
			era: this.era ?? e.era,
			year: this.year ?? e.year,
			month: this.month ?? e.month,
			day: this.day ?? e.day
		});
	}
	getSegmentLimits(e) {
		switch (e) {
			case "era": {
				let e = this.calendar.getEras();
				return {
					value: this.era == null ? e.length - 1 : e.indexOf(this.era),
					minValue: 0,
					maxValue: e.length - 1
				};
			}
			case "year": return {
				value: this.year,
				minValue: 1,
				maxValue: 9999
			};
			case "month": return {
				value: this.month,
				minValue: 1,
				maxValue: this.calendar.getMaximumMonthsInYear()
			};
			case "day": return {
				value: this.day,
				minValue: 1,
				maxValue: this.calendar.getMaximumDaysInMonth()
			};
			case "dayPeriod": return {
				value: this.dayPeriod,
				minValue: 0,
				maxValue: 1
			};
			case "hour": {
				let e = 0, t = 23;
				return this.hourCycle === "h12" ? (e = 1, t = 12) : this.hourCycle === "h11" && (e = 0, t = 11), {
					value: this.hour,
					minValue: e,
					maxValue: t
				};
			}
			case "minute": return {
				value: this.minute,
				minValue: 0,
				maxValue: 59
			};
			case "second": return {
				value: this.second,
				minValue: 0,
				maxValue: 59
			};
		}
	}
};
function J(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function Y(e, t) {
	let n = +(e >= 12);
	switch (t) {
		case "h11":
			e >= 12 && (e -= 12);
			break;
		case "h12":
			e === 0 ? e = 12 : e > 12 && (e -= 12);
			break;
		case "h23":
			n = null;
			break;
		case "h24": e += 1, n = null;
	}
	return [n, e];
}
function Dn(e, t, n) {
	switch (n) {
		case "h11":
			t === 1 && (e += 12);
			break;
		case "h12":
			e === 12 && (e = 0), t === 1 && (e += 12);
			break;
		case "h24": --e;
	}
	return e;
}
// node_modules/react-stately/dist/private/datepicker/useDateFieldState.mjs
var On = {
	year: !0,
	month: !0,
	day: !0,
	hour: !0,
	minute: !0,
	second: !0,
	dayPeriod: !0,
	era: !0
}, kn = {
	year: 5,
	month: 2,
	day: 7,
	hour: 2,
	minute: 15,
	second: 15
}, An = {
	dayperiod: "dayPeriod",
	relatedYear: "year",
	yearName: "literal",
	unknown: "literal"
};
function jn(e) {
	let { locale: t, createCalendar: n, hideTimeZone: r, isDisabled: i = !1, isReadOnly: a = !1, isRequired: o = !1, minValue: s, maxValue: c, isDateUnavailable: l } = e, u = e.value || e.defaultValue || e.placeholderValue || null, [d, f] = wn(u, e.granularity), p = f || "UTC";
	if (u && !(d in u)) throw Error("Invalid granularity " + d + " for value " + u.toString());
	let [m, h] = (0, G.useMemo)(() => {
		let r = new k(t, {
			dateStyle: "short",
			timeStyle: "short",
			hour12: e.hourCycle == null ? void 0 : e.hourCycle === 12
		}).resolvedOptions();
		return [n(r.calendar), r.hourCycle];
	}, [
		t,
		e.hourCycle,
		n
	]), [g, _] = ke(e.value, e.defaultValue ?? null, e.onChange), [v] = (0, G.useState)(g), x = (0, G.useMemo)(() => Sn(g, m) ?? null, [g, m]), [S, C] = (0, G.useState)(() => new q(m, h, x)), T = m.identifier === "gregory" && S.era === "BC", E = (0, G.useMemo)(() => ({
		granularity: d,
		maxGranularity: e.maxGranularity ?? "year",
		timeZone: f,
		hideTimeZone: r,
		hourCycle: e.hourCycle,
		showEra: T,
		shouldForceLeadingZeros: e.shouldForceLeadingZeros
	}), [
		e.maxGranularity,
		d,
		e.hourCycle,
		e.shouldForceLeadingZeros,
		f,
		r,
		T
	]), D = (0, G.useMemo)(() => K({}, E), [E]), O = (0, G.useMemo)(() => new k(t, D), [t, D]), ee = (0, G.useMemo)(() => O.resolvedOptions(), [O]), A = (0, G.useMemo)(() => Cn(e.placeholderValue, d, m, f), [
		e.placeholderValue,
		d,
		m,
		f
	]), j = (0, G.useMemo)(() => {
		let t = h === "h11" || h === "h12", n = [
			"era",
			"year",
			"month",
			"day",
			"hour",
			...t ? ["dayPeriod"] : [],
			"minute",
			"second"
		], r = n.indexOf(e.maxGranularity || "era"), i = n.indexOf(d === "hour" && t ? "dayPeriod" : d);
		return n.slice(r, i + 1);
	}, [
		e.maxGranularity,
		d,
		h
	]), [te, M] = (0, G.useState)(x), [N, ne] = (0, G.useState)(m), [P, re] = (0, G.useState)(h);
	x === te && h === P && b(m, N) || (S = new q(m, h, x), M(x), ne(m), re(h), C(S));
	let F = (t) => {
		if (!(e.isDisabled || e.isReadOnly)) {
			if (t == null || t instanceof q && t.isCleared(j)) C(new q(m, h, x)), _(null);
			else if (!(t instanceof q)) t = w(t, u?.calendar || new y()), C(new q(m, h, x)), _(t);
			else {
				if (t.isComplete(j)) {
					let e = t.toValue(x ?? A);
					if (t.validate(e, j)) {
						let t = w(e, u?.calendar || new y());
						if (!g || t.compare(g) !== 0) {
							C(new q(m, h, x)), _(t);
							return;
						}
					}
				}
				C(t);
			}
		}
	}, I = (0, G.useMemo)(() => S.toValue(x ?? A).toDate(p), [
		S,
		p,
		x,
		A
	]), ie = (0, G.useMemo)(() => Mn(I, S, O, ee, m, t, d), [
		I,
		O,
		ee,
		S,
		m,
		t,
		d
	]), L = (e, t) => {
		F(S.cycle(e, t, A, j));
	}, R = (0, G.useMemo)(() => _n(g, s, c, l, E), [
		g,
		s,
		c,
		l,
		E
	]), z = _e({
		...e,
		value: g,
		builtinValidation: R
	}), B = z.displayValidation.isInvalid, ae = e.validationState || (B ? "invalid" : null);
	return {
		...z,
		value: x,
		defaultValue: e.defaultValue ?? v,
		dateValue: I,
		calendar: m,
		setValue: F,
		segments: ie,
		dateFormatter: O,
		validationState: ae,
		isInvalid: B,
		granularity: d,
		maxGranularity: e.maxGranularity ?? "year",
		isDisabled: i,
		isReadOnly: a,
		isRequired: o,
		increment(e) {
			L(e, 1);
		},
		decrement(e) {
			L(e, -1);
		},
		incrementPage(e) {
			L(e, kn[e] || 1);
		},
		decrementPage(e) {
			L(e, -(kn[e] || 1));
		},
		incrementToMax(e) {
			let t = e === "hour" && h === "h12" ? 11 : S.getSegmentLimits(e).maxValue;
			F(S.set(e, t, A));
		},
		decrementToMin(e) {
			let t = e === "hour" && h === "h12" ? 12 : S.getSegmentLimits(e).minValue;
			F(S.set(e, t, A));
		},
		setSegment(e, t) {
			F(S.set(e, t, A));
		},
		confirmPlaceholder() {
			if (!(e.isDisabled || e.isReadOnly) && S.isComplete(j)) {
				let e = S.toValue(x ?? A), t = w(e, u?.calendar || new y());
				g && t.compare(g) === 0 || _(t), C(new q(m, h, x));
			}
		},
		clearSegment(e) {
			let t = S;
			e !== "timeZoneName" && e !== "literal" && (t = S.clear(e)), F(t);
		},
		formatValue(e) {
			if (!x) return "";
			let n = K(e, E);
			return new k(t, n).format(I);
		},
		getDateFormatter(e, t) {
			let n = K({}, {
				...E,
				...t
			});
			return new k(e, n);
		}
	};
}
function Mn(e, t, n, r, i, a, o) {
	let s = [
		"hour",
		"minute",
		"second"
	], c = n.formatToParts(e), l = new Ae(a, { useGrouping: !1 }), u = new Ae(a, {
		useGrouping: !1,
		minimumIntegerDigits: 2
	});
	for (let e of c) if (e.type === "year" || e.type === "month" || e.type === "day" || e.type === "hour") {
		let n = t[e.type] ?? 0;
		e.value = r[e.type] === "2-digit" ? u.format(n) : l.format(n);
	}
	let d = [];
	for (let e of c) {
		let n = An[e.type] || e.type, r = On[n];
		n === "era" && i.getEras().length === 1 && (r = !1);
		let c = On[n] && t[e.type] == null, l = On[n] ? En(n, e.value, a) : null, u = {
			type: n,
			text: c ? l : e.value,
			...t.getSegmentLimits(n),
			isPlaceholder: c,
			placeholder: l,
			isEditable: r
		};
		n === "hour" ? (d.push({
			type: "literal",
			text: "⁦",
			isPlaceholder: !1,
			placeholder: "",
			isEditable: !1
		}), d.push(u), n === o && d.push({
			type: "literal",
			text: "⁩",
			isPlaceholder: !1,
			placeholder: "",
			isEditable: !1
		})) : s.includes(n) && n === o ? (d.push(u), d.push({
			type: "literal",
			text: "⁩",
			isPlaceholder: !1,
			placeholder: "",
			isEditable: !1
		})) : d.push(u);
	}
	return d;
}
// node_modules/react-stately/dist/private/datepicker/useTimeFieldState.mjs
function Nn(e) {
	let { placeholderValue: t = new D(), minValue: n, maxValue: r, defaultValue: i, granularity: a, validate: o } = e, [s, c] = ke(e.value, i ?? null, e.onChange), l = s || t, u = l && "day" in l ? l : void 0, d = i && "timeZone" in i ? i.timeZone : void 0, f = (0, G.useMemo)(() => {
		let e = l && "timeZone" in l ? l.timeZone : void 0;
		return (e || d) && t ? C(X(t), e || d) : X(t);
	}, [
		t,
		l,
		d
	]), p = (0, G.useMemo)(() => X(n, u), [n, u]), m = (0, G.useMemo)(() => X(r, u), [r, u]), h = (0, G.useMemo)(() => s && "day" in s ? T(s) : s, [s]), g = (0, G.useMemo)(() => s == null ? null : X(s), [s]), _ = (0, G.useMemo)(() => i == null ? null : X(i), [i]), v = (e) => {
		c(u || d ? e : e && T(e));
	};
	return {
		...jn({
			...e,
			value: g,
			defaultValue: _,
			minValue: p,
			maxValue: m,
			onChange: v,
			granularity: a || "minute",
			maxGranularity: "hour",
			placeholderValue: f ?? void 0,
			createCalendar: () => new y(),
			validate: (0, G.useCallback)(() => o?.(s), [o, s])
		}),
		timeValue: h
	};
}
function X(e, t = v(x())) {
	return e ? "day" in e ? e : N(t, e) : null;
}
// node_modules/react-aria-components/dist/private/DateField.mjs
var Pn = /*#__PURE__*/ (0, G.createContext)(null), Fn = /*#__PURE__*/ (0, G.createContext)(null), Z = /*#__PURE__*/ (0, G.createContext)(null), In = /*#__PURE__*/ (0, G.createContext)(null), Ln = /*#__PURE__*/ (0, G.forwardRef)(function(e, t) {
	[e, t] = l(e, t, Pn);
	let { validationBehavior: n } = s(h) || {}, r = e.validationBehavior ?? n ?? "native", { locale: a } = H(), c = jn({
		...e,
		locale: a,
		createCalendar: j,
		validationBehavior: r
	}), p = (0, G.useRef)(null), [_, v] = o(!e["aria-label"] && !e["aria-labelledby"]), y = (0, G.useRef)(null), { labelProps: b, fieldProps: x, inputProps: S, descriptionProps: C, errorMessageProps: w, ...T } = Tt({
		...i(e),
		label: v,
		inputRef: y,
		validationBehavior: r
	}, c, p), E = u({
		...i(e),
		values: {
			state: c,
			isInvalid: c.isInvalid,
			isDisabled: c.isDisabled,
			isReadOnly: c.isReadOnly,
			isRequired: e.isRequired || !1
		},
		defaultClassName: "react-aria-DateField"
	}), D = V(e, { global: !0 });
	return delete D.id, /*#__PURE__*/ G.createElement(f, { values: [
		[Z, c],
		[g, {
			...x,
			ref: p,
			isInvalid: c.isInvalid,
			isDisabled: c.isDisabled
		}],
		[R, {
			...S,
			ref: y
		}],
		[z, {
			...b,
			ref: _,
			elementType: "span"
		}],
		[B, { slots: {
			description: C,
			errorMessage: w
		} }],
		[m, T]
	] }, /*#__PURE__*/ G.createElement(d.div, {
		...D,
		...E,
		ref: t,
		slot: e.slot || void 0,
		"data-invalid": c.isInvalid || void 0,
		"data-disabled": c.isDisabled || void 0,
		"data-readonly": c.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}), /*#__PURE__*/ G.createElement(Le, {
		autoComplete: e.autoComplete,
		name: e.name,
		isDisabled: e.isDisabled,
		state: c
	}));
}), Rn = /*#__PURE__*/ (0, G.forwardRef)(function(e, t) {
	[e, t] = l(e, t, Fn);
	let { validationBehavior: n } = s(h) || {}, r = e.validationBehavior ?? n ?? "native", { locale: a } = H(), c = Nn({
		...e,
		locale: a,
		validationBehavior: r
	}), p = (0, G.useRef)(null), [_, v] = o(!e["aria-label"] && !e["aria-labelledby"]), y = (0, G.useRef)(null), { labelProps: b, fieldProps: x, inputProps: S, descriptionProps: C, errorMessageProps: w, ...T } = Et({
		...i(e),
		label: v,
		inputRef: y,
		validationBehavior: r
	}, c, p), E = u({
		...e,
		values: {
			state: c,
			isInvalid: c.isInvalid,
			isDisabled: c.isDisabled,
			isReadOnly: c.isReadOnly,
			isRequired: e.isRequired || !1
		},
		defaultClassName: "react-aria-TimeField"
	}), D = V(e, { global: !0 });
	return delete D.id, /*#__PURE__*/ G.createElement(f, { values: [
		[In, c],
		[g, {
			...x,
			ref: p,
			isInvalid: c.isInvalid,
			isDisabled: c.isDisabled
		}],
		[R, {
			...S,
			ref: y
		}],
		[z, {
			...b,
			ref: _,
			elementType: "span"
		}],
		[B, { slots: {
			description: C,
			errorMessage: w
		} }],
		[m, T]
	] }, /*#__PURE__*/ G.createElement(d.div, {
		...D,
		...E,
		ref: t,
		slot: e.slot || void 0,
		"data-invalid": c.isInvalid || void 0,
		"data-disabled": c.isDisabled || void 0,
		"data-readonly": c.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}));
}), zn = /*#__PURE__*/ (0, G.forwardRef)(function(e, t) {
	let n = (0, G.useContext)(Z), r = (0, G.useContext)(In);
	return n || r ? /*#__PURE__*/ G.createElement(Vn, {
		...e,
		ref: t
	}) : /*#__PURE__*/ G.createElement(Bn, {
		...e,
		ref: t
	});
}), Bn = /*#__PURE__*/ (0, G.forwardRef)((e, t) => {
	let [n, r] = l({ slot: e.slot }, t, Pn), { locale: i } = H(), a = jn({
		...n,
		locale: i,
		createCalendar: j
	}), o = (0, G.useRef)(null), { fieldProps: s, inputProps: c } = Tt({
		...n,
		inputRef: o
	}, a, r);
	return /*#__PURE__*/ G.createElement(f, { values: [
		[Z, a],
		[R, {
			...c,
			ref: o
		}],
		[g, {
			...s,
			ref: r,
			isInvalid: a.isInvalid,
			isDisabled: a.isDisabled
		}]
	] }, /*#__PURE__*/ G.createElement(Vn, e));
}), Vn = /*#__PURE__*/ (0, G.forwardRef)((e, t) => {
	let { className: n, children: r } = e, i = (0, G.useContext)(Z), a = (0, G.useContext)(In), o = i ?? a;
	return /*#__PURE__*/ G.createElement(G.Fragment, null, /*#__PURE__*/ G.createElement(_, {
		...e,
		ref: t,
		slot: e.slot || void 0,
		className: n ?? "react-aria-DateInput",
		isReadOnly: o.isReadOnly,
		isInvalid: o.isInvalid,
		isDisabled: o.isDisabled
	}, o.segments.map((e, t) => /*#__PURE__*/ (0, G.cloneElement)(r(e), { key: t }))), /*#__PURE__*/ G.createElement(L, { className: "" }));
}), Hn = /*#__PURE__*/ (0, G.forwardRef)(function({ segment: e, ...t }, n) {
	let r = (0, G.useContext)(Z), i = (0, G.useContext)(In), o = r ?? i, s = p(n), { segmentProps: c } = At(e, o, s), { focusProps: l, isFocused: f, isFocusVisible: m } = de(), { hoverProps: h, isHovered: g } = pe({
		...t,
		isDisabled: o.isDisabled || e.type === "literal"
	}), _ = u({
		...t,
		values: {
			...e,
			isReadOnly: o.isReadOnly,
			isInvalid: o.isInvalid,
			isDisabled: o.isDisabled,
			isHovered: g,
			isFocused: f,
			isFocusVisible: m
		},
		defaultChildren: e.text,
		defaultClassName: "react-aria-DateSegment"
	});
	return /*#__PURE__*/ G.createElement(d.span, {
		...a(V(t, { global: !0 }), c, l, h),
		..._,
		style: c.style,
		ref: s,
		"data-placeholder": e.isPlaceholder || void 0,
		"data-invalid": o.isInvalid || void 0,
		"data-readonly": o.isReadOnly || void 0,
		"data-disabled": o.isDisabled || void 0,
		"data-type": e.type,
		"data-hovered": g || void 0,
		"data-focused": f || void 0,
		"data-focus-visible": m || void 0
	});
}), Q = r(), $ = /*#__PURE__*/ (0, G.createContext)({}), Un = ({ children: e, className: t, fullWidth: n, variant: r, ...i }) => {
	let a = G.useMemo(() => Ne({
		fullWidth: n,
		variant: r
	}), [n, r]), o = G.useMemo(() => ({ slots: a }), [a]);
	return /*#__PURE__*/ (0, Q.jsx)($, {
		value: o,
		children: /*#__PURE__*/ (0, Q.jsx)(_, {
			className: je(t, a?.base()),
			"data-slot": "date-input-group",
			...i,
			children: e
		})
	});
};
Un.displayName = "HeroUI.DateInputGroup";
var Wn = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, G.use)($);
	return /*#__PURE__*/ (0, Q.jsx)(Me.div, {
		className: W(r?.prefix, t),
		"data-slot": "date-input-group-prefix",
		...n,
		children: e
	});
};
Wn.displayName = "HeroUI.DateInputGroup.Prefix";
var Gn = ({ className: e, ...t }) => {
	let { slots: n } = (0, G.use)($);
	return /*#__PURE__*/ (0, Q.jsx)(zn, {
		className: je(e, n?.input()),
		"data-slot": "date-input-group-input",
		...t
	});
};
Gn.displayName = "HeroUI.DateInputGroup.Input";
var Kn = ({ className: e, segment: t, ...n }) => {
	let { slots: r } = (0, G.use)($);
	return /*#__PURE__*/ (0, Q.jsx)(Hn, {
		className: W(r?.segment, e),
		"data-slot": "date-input-group-segment",
		segment: t,
		...n
	});
};
Kn.displayName = "HeroUI.DateInputGroup.Segment";
var qn = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, G.use)($);
	return /*#__PURE__*/ (0, Q.jsx)(Me.div, {
		className: W(r?.inputContainer, t),
		"data-slot": "date-input-group-input-container",
		...n,
		children: e
	});
};
qn.displayName = "HeroUI.DateInputGroup.InputContainer";
var Jn = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, G.use)($);
	return /*#__PURE__*/ (0, Q.jsx)(Me.div, {
		className: W(r?.suffix, t),
		"data-slot": "date-input-group-suffix",
		...n,
		children: e
	});
};
Jn.displayName = "HeroUI.DateInputGroup.Suffix";
export { yt as _, Kn as a, Pn as c, K as d, vn as f, wt as g, Ct as h, Un as i, Ln as l, _n as m, qn as n, Jn as o, xn as p, Wn as r, Rn as s, Gn as t, wn as u, vt as v, Le as y };
