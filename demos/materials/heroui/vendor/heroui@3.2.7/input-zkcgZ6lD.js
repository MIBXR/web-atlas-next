import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i, t as a } from "./Input-DWAXtMrJ.js";
import { t as o } from "./textfield-DBeG7ze6.js";
import { r as s, t as c } from "./Hidden-B5FjVPor.js";
import { n as l, t as u } from "./Button-Cnex0dS4.js";
import { c as d, d as f, f as p, i as m, l as h, m as g, n as _, r as v, s as y, t as b } from "./utils-UBVJ5JR_.js";
import { n as x } from "./FieldError-BDRHklqb.js";
import { n as S } from "./Autocomplete-By5miKJr.js";
import { n as C } from "./Form-BfBA0JpQ.js";
import { n as w, t as T } from "./Group-VeeQ5avm.js";
import { t as E } from "./Label-CJNHsoCN.js";
import { n as ee, o as D, r as O, s as k } from "./ListBox-DCWNZidc.js";
import { b as te, d as A, f as j, i as ne, u as M } from "./Dialog-C0V2m_6r.js";
import { n as N } from "./Text-CEDDBTEL.js";
import { t as P } from "./LiveAnnouncer-7fiQ12ko.js";
import { t as F } from "./virtualFocus-D_kYTh--.js";
import { E as re, M as I, S as L, V as R, b as z, i as B, t as V, v as H } from "./useKeyboard-CqNSkGJ-.js";
import { t as ie } from "./ListKeyboardDelegate-DtpiEoL1.js";
import { t as ae } from "./useEvent-QtR06JAA.js";
import { t as U } from "./useFormReset-DizqO0T1.js";
import { t as W } from "./useLabels-IW2w8qqV.js";
import { n as oe } from "./useLocalizedStringFormatter-tuzNT5MD.js";
import { i as G, l as se } from "./useMultipleSelectionState-Bgjz_mf2.js";
import { t as ce } from "./useTextField-DliTkFQ-.js";
import { t as le } from "./useUpdateEffect-BWSmjBdc.js";
import { t as ue } from "./getItemCount-DbQDCr5r.js";
import { i as de, s as fe } from "./useFormValidation-NZK9JasV.js";
import { n as pe } from "./CollectionBuilder-DSfSS-yC.js";
import { r as me, t as he } from "./useListState-DvZcaErY.js";
import { t as ge } from "./useOverlayTriggerState-loftJLxJ.js";
import { t as K } from "./useControlledState-BbVlCDcL.js";
import { t as _e } from "./filterDOMProps-CJYy6efO.js";
import { t as q } from "./useFilter-D87ICzES.js";
import { t as J } from "./useListFormatter-B6H1MkdG.js";
import { t as Y } from "./useResizeObserver-Sa6_Psnw.js";
import { t as ve } from "./assertion-CKDD-Pvc.js";
import { t as ye } from "./collection-prop-injection-C79e1x52.js";
import { r as X } from "./compose-ClIOcrt6.js";
import { t as be } from "./dom-CdwaDRL5.js";
import { t as xe } from "./field-slots-gate-CeBWAnDc.js";
import { t as Se } from "./use-popover-exit-hold-Bs6k_a58.js";
import { a as Ce } from "./icons-BUH88Ubz.js";
import { t as we } from "./surface-YzNgM-6T.js";
// node_modules/@heroui/styles/dist/components/combo-box/combo-box.styles.js
var Te = e({
	defaultVariants: { fullWidth: !1 },
	slots: {
		base: "combo-box",
		inputGroup: "combo-box__input-group",
		popover: "combo-box__popover",
		trigger: "combo-box__trigger",
		value: "combo-box__value"
	},
	variants: { fullWidth: {
		false: {},
		true: {
			base: "combo-box--full-width",
			inputGroup: "combo-box__input-group--full-width"
		}
	} }
}), Ee = e({
	base: "input",
	defaultVariants: {
		fullWidth: !1,
		variant: "primary"
	},
	variants: {
		fullWidth: {
			false: "",
			true: "input--full-width"
		},
		variant: {
			primary: "input--primary",
			secondary: "input--secondary"
		}
	}
}), De = {};
De = {
	buttonLabel: "عرض المقترحات",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,
		other: () => `${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
	})} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${e.groupTitle}, \u{645}\u{639} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,
			other: () => `${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", محدد",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "مقترحات",
	selectedAnnouncement: (e) => `${e.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
};
// node_modules/react-aria/dist/private/intl/combobox/bg-BG.mjs
var Oe = {};
Oe = {
	buttonLabel: "Покажи предложения",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
		other: () => `${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
	})} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
			other: () => `${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", избрани",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Предложения",
	selectedAnnouncement: (e) => `${e.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};
// node_modules/react-aria/dist/private/intl/combobox/cs-CZ.mjs
var ke = {};
ke = {
	buttonLabel: "Zobrazit doporučení",
	countAnnouncement: (e, t) => `K dispozici ${t.plural(e.optionCount, {
		one: () => `je ${t.number(e.optionCount)} mo\u{17E}nost`,
		other: () => `jsou/je ${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Zadan\xe1 skupina \u{201E}${e.groupTitle}\u{201C} ${t.plural(e.groupCount, {
			one: () => `s ${t.number(e.groupCount)} mo\u{17E}nost\xed`,
			other: () => `se ${t.number(e.groupCount)} mo\u{17E}nostmi`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: " (vybráno)",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Návrhy",
	selectedAnnouncement: (e) => `${e.optionText}, vybr\xe1no`
};
// node_modules/react-aria/dist/private/intl/combobox/da-DK.mjs
var Ae = {};
Ae = {
	buttonLabel: "Vis forslag",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} mulighed tilg\xe6ngelig`,
		other: () => `${t.number(e.optionCount)} muligheder tilg\xe6ngelige`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Angivet gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} mulighed`,
			other: () => `${t.number(e.groupCount)} muligheder`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valgt",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Forslag",
	selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
// node_modules/react-aria/dist/private/intl/combobox/de-DE.mjs
var je = {};
je = {
	buttonLabel: "Empfehlungen anzeigen",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} Option`,
		other: () => `${t.number(e.optionCount)} Optionen`
	})} verf\xfcgbar.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Eingetretene Gruppe ${e.groupTitle}, mit ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} Option`,
			other: () => `${t.number(e.groupCount)} Optionen`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", ausgewählt",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Empfehlungen",
	selectedAnnouncement: (e) => `${e.optionText}, ausgew\xe4hlt`
};
// node_modules/react-aria/dist/private/intl/combobox/el-GR.mjs
var Me = {};
Me = {
	buttonLabel: "Προβολή προτάσεων",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
		other: () => `${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `
	})} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${e.groupTitle}, \u{3BC}\u{3B5} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
			other: () => `${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", επιλεγμένο",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Προτάσεις",
	selectedAnnouncement: (e) => `${e.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`
};
// node_modules/react-aria/dist/private/intl/combobox/en-US.mjs
var Ne = {};
Ne = {
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Entered group ${e.groupTitle}, with ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} option`,
			other: () => `${t.number(e.groupCount)} options`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selected",
		other: ""
	}, e.isSelected)}`,
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} option`,
		other: () => `${t.number(e.optionCount)} options`
	})} available.`,
	selectedAnnouncement: (e) => `${e.optionText}, selected`,
	buttonLabel: "Show suggestions",
	listboxLabel: "Suggestions"
};
// node_modules/react-aria/dist/private/intl/combobox/es-ES.mjs
var Pe = {};
Pe = {
	buttonLabel: "Mostrar sugerencias",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opci\xf3n`,
		other: () => `${t.number(e.optionCount)} opciones`
	})} disponible(s).`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Se ha unido al grupo ${e.groupTitle}, con ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opci\xf3n`,
			other: () => `${t.number(e.groupCount)} opciones`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", seleccionado",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugerencias",
	selectedAnnouncement: (e) => `${e.optionText}, seleccionado`
};
// node_modules/react-aria/dist/private/intl/combobox/et-EE.mjs
var Fe = {};
Fe = {
	buttonLabel: "Kuva soovitused",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} valik`,
		other: () => `${t.number(e.optionCount)} valikud`
	})} saadaval.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Sisestatud r\xfchm ${e.groupTitle}, valikuga ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} valik`,
			other: () => `${t.number(e.groupCount)} valikud`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valitud",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Soovitused",
	selectedAnnouncement: (e) => `${e.optionText}, valitud`
};
// node_modules/react-aria/dist/private/intl/combobox/fi-FI.mjs
var Ie = {};
Ie = {
	buttonLabel: "Näytä ehdotukset",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} vaihtoehto`,
		other: () => `${t.number(e.optionCount)} vaihtoehtoa`
	})} saatavilla.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Siirtyi ryhm\xe4\xe4n ${e.groupTitle}, jossa ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} vaihtoehto`,
			other: () => `${t.number(e.groupCount)} vaihtoehtoa`
		})}.`,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valittu",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Ehdotukset",
	selectedAnnouncement: (e) => `${e.optionText}, valittu`
};
// node_modules/react-aria/dist/private/intl/combobox/fr-FR.mjs
var Le = {};
Le = {
	buttonLabel: "Afficher les suggestions",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} option`,
		other: () => `${t.number(e.optionCount)} options`
	})} disponible(s).`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Groupe ${e.groupTitle} rejoint, avec ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} option`,
			other: () => `${t.number(e.groupCount)} options`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", sélectionné(s)",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Suggestions",
	selectedAnnouncement: (e) => `${e.optionText}, s\xe9lectionn\xe9`
};
// node_modules/react-aria/dist/private/intl/combobox/he-IL.mjs
var Re = {};
Re = {
	buttonLabel: "הצג הצעות",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.optionCount)}`,
		other: () => `${t.number(e.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
	})} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${e.groupTitle}, \u{5E2}\u{5DD} ${t.plural(e.groupCount, {
			one: () => `\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.groupCount)}`,
			other: () => `${t.number(e.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", נבחר",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "הצעות",
	selectedAnnouncement: (e) => `${e.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};
// node_modules/react-aria/dist/private/intl/combobox/hr-HR.mjs
var ze = {};
ze = {
	buttonLabel: "Prikaži prijedloge",
	countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije/a`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcijom`,
			other: () => `${t.number(e.groupCount)} opcije/a`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", odabranih",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Prijedlozi",
	selectedAnnouncement: (e) => `${e.optionText}, odabrano`
};
// node_modules/react-aria/dist/private/intl/combobox/hu-HU.mjs
var Be = {};
Be = {
	buttonLabel: "Javaslatok megjelenítése",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} lehet\u{151}s\xe9g`,
		other: () => `${t.number(e.optionCount)} lehet\u{151}s\xe9g`
	})} \xe1ll rendelkez\xe9sre.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Bel\xe9pett a(z) ${e.groupTitle} csoportba, amely ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} lehet\u{151}s\xe9get`,
			other: () => `${t.number(e.groupCount)} lehet\u{151}s\xe9get`
		})} tartalmaz. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", kijelölve",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Javaslatok",
	selectedAnnouncement: (e) => `${e.optionText}, kijel\xf6lve`
};
// node_modules/react-aria/dist/private/intl/combobox/it-IT.mjs
var Ve = {};
Ve = {
	buttonLabel: "Mostra suggerimenti",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opzione disponibile`,
		other: () => `${t.number(e.optionCount)} opzioni disponibili`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ingresso nel gruppo ${e.groupTitle}, con ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opzione`,
			other: () => `${t.number(e.groupCount)} opzioni`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selezionato",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Suggerimenti",
	selectedAnnouncement: (e) => `${e.optionText}, selezionato`
};
// node_modules/react-aria/dist/private/intl/combobox/ja-JP.mjs
var He = {};
He = {
	buttonLabel: "候補を表示",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
		other: () => `${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
	})}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${e.groupTitle}\u{3001}${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
			other: () => `${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
		})}\u{3092}\u{542B}\u{3080}\u{3002}`,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: "、選択済み",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "候補",
	selectedAnnouncement: (e) => `${e.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`
};
// node_modules/react-aria/dist/private/intl/combobox/ko-KR.mjs
var Ue = {};
Ue = {
	buttonLabel: "제안 사항 표시",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`,
		other: () => `${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`
	})}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${e.groupTitle}, ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`,
			other: () => `${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", 선택됨",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "제안",
	selectedAnnouncement: (e) => `${e.optionText}, \u{C120}\u{D0DD}\u{B428}`
};
// node_modules/react-aria/dist/private/intl/combobox/lt-LT.mjs
var We = {};
We = {
	buttonLabel: "Rodyti pasiūlymus",
	countAnnouncement: (e, t) => `Yra ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} parinktis`,
		other: () => `${t.number(e.optionCount)} parinktys (-i\u{173})`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{12E}vesta grup\u{117} ${e.groupTitle}, su ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} parinktimi`,
			other: () => `${t.number(e.groupCount)} parinktimis (-i\u{173})`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", pasirinkta",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Pasiūlymai",
	selectedAnnouncement: (e) => `${e.optionText}, pasirinkta`
};
// node_modules/react-aria/dist/private/intl/combobox/lv-LV.mjs
var Ge = {};
Ge = {
	buttonLabel: "Rādīt ieteikumus",
	countAnnouncement: (e, t) => `Pieejamo opciju skaits: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcijas`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ievad\u{12B}ta grupa ${e.groupTitle}, ar ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opciju`,
			other: () => `${t.number(e.groupCount)} opcij\u{101}m`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", atlasīta",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Ieteikumi",
	selectedAnnouncement: (e) => `${e.optionText}, atlas\u{12B}ta`
};
// node_modules/react-aria/dist/private/intl/combobox/nb-NO.mjs
var Ke = {};
Ke = {
	buttonLabel: "Vis forslag",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} alternativ`,
		other: () => `${t.number(e.optionCount)} alternativer`
	})} finnes.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Angitt gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} alternativ`,
			other: () => `${t.number(e.groupCount)} alternativer`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valgt",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Forslag",
	selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
// node_modules/react-aria/dist/private/intl/combobox/nl-NL.mjs
var qe = {};
qe = {
	buttonLabel: "Suggesties weergeven",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} optie`,
		other: () => `${t.number(e.optionCount)} opties`
	})} beschikbaar.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} optie`,
			other: () => `${t.number(e.groupCount)} opties`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", geselecteerd",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Suggesties",
	selectedAnnouncement: (e) => `${e.optionText}, geselecteerd`
};
// node_modules/react-aria/dist/private/intl/combobox/pl-PL.mjs
var Je = {};
Je = {
	buttonLabel: "Wyświetlaj sugestie",
	countAnnouncement: (e, t) => `dost\u{119}pna/dost\u{119}pne(-nych) ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcja`,
		other: () => `${t.number(e.optionCount)} opcje(-i)`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Do\u{142}\u{105}czono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcj\u{105}`,
			other: () => `${t.number(e.groupCount)} opcjami`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", wybrano",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestie",
	selectedAnnouncement: (e) => `${e.optionText}, wybrano`
};
// node_modules/react-aria/dist/private/intl/combobox/pt-BR.mjs
var Ye = {};
Ye = {
	buttonLabel: "Mostrar sugestões",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} op\xe7\xe3o`,
		other: () => `${t.number(e.optionCount)} op\xe7\xf5es`
	})} dispon\xedvel.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} op\xe7\xe3o`,
			other: () => `${t.number(e.groupCount)} op\xe7\xf5es`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selecionado",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestões",
	selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
// node_modules/react-aria/dist/private/intl/combobox/pt-PT.mjs
var Xe = {};
Xe = {
	buttonLabel: "Apresentar sugestões",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} op\xe7\xe3o`,
		other: () => `${t.number(e.optionCount)} op\xe7\xf5es`
	})} dispon\xedvel.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grupo introduzido ${e.groupTitle}, com ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} op\xe7\xe3o`,
			other: () => `${t.number(e.groupCount)} op\xe7\xf5es`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selecionado",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestões",
	selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
// node_modules/react-aria/dist/private/intl/combobox/ro-RO.mjs
var Ze = {};
Ze = {
	buttonLabel: "Afișare sugestii",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} op\u{21B}iune`,
		other: () => `${t.number(e.optionCount)} op\u{21B}iuni`
	})} disponibile.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} op\u{21B}iune`,
			other: () => `${t.number(e.groupCount)} op\u{21B}iuni`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", selectat",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Sugestii",
	selectedAnnouncement: (e) => `${e.optionText}, selectat`
};
// node_modules/react-aria/dist/private/intl/combobox/ru-RU.mjs
var Qe = {};
Qe = {
	buttonLabel: "Показать предложения",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
		other: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`
	})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,
			other: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", выбранными",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Предложения",
	selectedAnnouncement: (e) => `${e.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};
// node_modules/react-aria/dist/private/intl/combobox/sk-SK.mjs
var $e = {};
$e = {
	buttonLabel: "Zobraziť návrhy",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} mo\u{17E}nos\u{165}`,
		other: () => `${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`
	})} k dispoz\xedcii.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Zadan\xe1 skupina ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} mo\u{17E}nos\u{165}ou`,
			other: () => `${t.number(e.groupCount)} mo\u{17E}nos\u{165}ami`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", vybraté",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Návrhy",
	selectedAnnouncement: (e) => `${e.optionText}, vybrat\xe9`
};
// node_modules/react-aria/dist/private/intl/combobox/sl-SI.mjs
var et = {};
et = {
	buttonLabel: "Prikaži predloge",
	countAnnouncement: (e, t) => `Na voljo je ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Vnesena skupina ${e.groupTitle}, z ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcija`,
			other: () => `${t.number(e.groupCount)} opcije`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", izbrano",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Predlogi",
	selectedAnnouncement: (e) => `${e.optionText}, izbrano`
};
// node_modules/react-aria/dist/private/intl/combobox/sr-SP.mjs
var tt = {};
tt = {
	buttonLabel: "Prikaži predloge",
	countAnnouncement: (e, t) => `Dostupno jo\u{161}: ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} opcija`,
		other: () => `${t.number(e.optionCount)} opcije/a`
	})}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Unesena grupa ${e.groupTitle}, s ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} opcijom`,
			other: () => `${t.number(e.groupCount)} optione/a`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", izabranih",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Predlozi",
	selectedAnnouncement: (e) => `${e.optionText}, izabrano`
};
// node_modules/react-aria/dist/private/intl/combobox/sv-SE.mjs
var nt = {};
nt = {
	buttonLabel: "Visa förslag",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} alternativ`,
		other: () => `${t.number(e.optionCount)} alternativ`
	})} tillg\xe4ngliga.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Ingick i gruppen ${e.groupTitle} med ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} alternativ`,
			other: () => `${t.number(e.groupCount)} alternativ`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", valda",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Förslag",
	selectedAnnouncement: (e) => `${e.optionText}, valda`
};
// node_modules/react-aria/dist/private/intl/combobox/tr-TR.mjs
var rt = {};
rt = {
	buttonLabel: "Önerileri göster",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} se\xe7enek`,
		other: () => `${t.number(e.optionCount)} se\xe7enekler`
	})} kullan\u{131}labilir.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `Girilen grup ${e.groupTitle}, ile ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} se\xe7enek`,
			other: () => `${t.number(e.groupCount)} se\xe7enekler`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", seçildi",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Öneriler",
	selectedAnnouncement: (e) => `${e.optionText}, se\xe7ildi`
};
// node_modules/react-aria/dist/private/intl/combobox/uk-UA.mjs
var it = {};
it = {
	buttonLabel: "Показати пропозиції",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
		other: () => `${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
	})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{437} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
			other: () => `${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", вибрано",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "Пропозиції",
	selectedAnnouncement: (e) => `${e.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};
// node_modules/react-aria/dist/private/intl/combobox/zh-CN.mjs
var at = {};
at = {
	buttonLabel: "显示建议",
	countAnnouncement: (e, t) => `\u{6709} ${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`,
		other: () => `${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`
	})}\u{53EF}\u{7528}\u{3002}`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{8FDB}\u{5165}\u{4E86} ${e.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`,
			other: () => `${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", 已选择",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "建议",
	selectedAnnouncement: (e) => `${e.optionText}, \u{5DF2}\u{9009}\u{62E9}`
};
// node_modules/react-aria/dist/private/intl/combobox/zh-TW.mjs
var ot = {};
ot = {
	buttonLabel: "顯示建議",
	countAnnouncement: (e, t) => `${t.plural(e.optionCount, {
		one: () => `${t.number(e.optionCount)} \u{9078}\u{9805}`,
		other: () => `${t.number(e.optionCount)} \u{9078}\u{9805}`
	})} \u{53EF}\u{7528}\u{3002}`,
	focusAnnouncement: (e, t) => `${t.select({
		true: () => `\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${e.groupTitle}, \u{6709} ${t.plural(e.groupCount, {
			one: () => `${t.number(e.groupCount)} \u{9078}\u{9805}`,
			other: () => `${t.number(e.groupCount)} \u{9078}\u{9805}`
		})}. `,
		other: ""
	}, e.isGroupChange)}${e.optionText}${t.select({
		true: ", 已選取",
		other: ""
	}, e.isSelected)}`,
	listboxLabel: "建議",
	selectedAnnouncement: (e) => `${e.optionText}, \u{5DF2}\u{9078}\u{53D6}`
};
// node_modules/react-aria/dist/private/combobox/intlStrings.mjs
var st = {};
st = {
	"ar-AE": De,
	"bg-BG": Oe,
	"cs-CZ": ke,
	"da-DK": Ae,
	"de-DE": je,
	"el-GR": Me,
	"en-US": Ne,
	"es-ES": Pe,
	"et-EE": Fe,
	"fi-FI": Ie,
	"fr-FR": Le,
	"he-IL": Re,
	"hr-HR": ze,
	"hu-HU": Be,
	"it-IT": Ve,
	"ja-JP": He,
	"ko-KR": Ue,
	"lt-LT": We,
	"lv-LV": Ge,
	"nb-NO": Ke,
	"nl-NL": qe,
	"pl-PL": Je,
	"pt-BR": Ye,
	"pt-PT": Xe,
	"ro-RO": Ze,
	"ru-RU": Qe,
	"sk-SK": $e,
	"sl-SI": et,
	"sr-SP": tt,
	"sv-SE": nt,
	"tr-TR": rt,
	"uk-UA": it,
	"zh-CN": at,
	"zh-TW": ot
};
// node_modules/react-aria/dist/private/combobox/useComboBox.mjs
var Z = /* @__PURE__ */ t(n(), 1);
function ct(e) {
	return e && e.__esModule ? e.default : e;
}
function lt(e, t) {
	let { buttonRef: n, popoverRef: r, inputRef: i, listBoxRef: a, keyboardDelegate: o, layoutDelegate: s, shouldFocusWrap: c, isReadOnly: l, isDisabled: u } = e, d = (0, Z.useRef)(null);
	n ??= d;
	let m = oe(ct(st), "@react-aria/combobox"), { menuTriggerProps: h, menuProps: g } = M({
		type: "listbox",
		isDisabled: u || l
	}, t, n);
	D.set(t, { id: g.id });
	let { collection: _ } = t, { disabledKeys: v } = t.selectionManager, y = (0, Z.useMemo)(() => o || new ie({
		collection: _,
		disabledKeys: v,
		ref: a,
		layoutDelegate: s
	}), [
		o,
		s,
		_,
		v,
		a
	]), { collectionProps: b } = se({
		selectionManager: t.selectionManager,
		keyboardDelegate: y,
		disallowTypeAhead: !0,
		disallowEmptySelection: !0,
		shouldFocusWrap: c,
		ref: i,
		isVirtualized: !0
	}), x = I(), { keyboardProps: S } = V({ shortcuts: {
		Enter: (e) => {
			let n = t.isOpen;
			if (t.isOpen && a.current && t.selectionManager.focusedKey != null) {
				let r = t.collection.getItem(t.selectionManager.focusedKey);
				if (r?.props.href) {
					let i = a.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
					return i instanceof HTMLAnchorElement && x.open(i, e, r.props.href, r.props.routerOptions), t.close(), { shouldPreventDefault: n };
				}
				if (r?.props.onAction) return r.props.onAction(), t.close(), { shouldPreventDefault: n };
			}
			return t.commit(), { shouldPreventDefault: n };
		},
		Tab: () => {
			if (t.isOpen && a.current && t.selectionManager.focusedKey != null) {
				let e = t.collection.getItem(t.selectionManager.focusedKey);
				if (e?.props.href) return t.close(), { shouldPreventDefault: !1 };
				if (e?.props.onAction) return e.props.onAction(), t.close(), {
					shouldPreventDefault: !1,
					shouldContinuePropagation: !0
				};
			}
			return t.isOpen && t.commit(), {
				shouldPreventDefault: !1,
				shouldContinuePropagation: !0
			};
		},
		Escape: () => {
			let n = !1;
			return (!t.selectionManager.isEmpty || t.inputValue === "" || e.allowsCustomValue) && (n = !0), t.revert(), { shouldContinuePropagation: n };
		}
	} }), { keyboardProps: C } = V({
		shortcuts: {
			ArrowDown: () => (t.open("first", "manual"), { shouldPreventDefault: !1 }),
			ArrowUp: () => (t.open("last", "manual"), { shouldPreventDefault: !1 }),
			ArrowLeft: () => (t.selectionManager.setFocusedKey(null), { shouldPreventDefault: !1 }),
			ArrowRight: () => (t.selectionManager.setFocusedKey(null), { shouldPreventDefault: !1 })
		},
		allowRepeats: !0
	}), w = (i) => {
		let a = H(n.current, i.relatedTarget), o = H(r.current, i.relatedTarget);
		a || o || (e.onBlur && e.onBlur(i), t.setFocused(!1));
	}, T = (n) => {
		t.isFocused || (e.onFocus && e.onFocus(n), t.setFocused(!0));
	}, E = ut([t.selectionManager.selectedKeys, t.selectionManager.selectionMode]), { isInvalid: ee, validationErrors: O, validationDetails: A } = t.displayValidation, { labelProps: j, inputProps: ne, descriptionProps: N, errorMessageProps: fe } = ce({
		...e,
		isRequired: e.selectionMode === "multiple" ? e.isRequired && t.selectionManager.isEmpty : e.isRequired,
		onChange: t.setInputValue,
		onKeyDown: l ? e.onKeyDown : p(t.isOpen && b.onKeyDown, S.onKeyDown, C.onKeyDown, e.onKeyDown),
		onBlur: w,
		value: t.inputValue,
		defaultValue: t.defaultInputValue,
		onFocus: T,
		autoComplete: "off",
		validate: void 0,
		[de]: t,
		"aria-describedby": [E, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
	}, i);
	U(i, t.defaultValue, t.setValue);
	let pe = (e) => {
		e.pointerType === "touch" && (i.current?.focus(), t.toggle(null, "manual"));
	}, me = (e) => {
		e.pointerType !== "touch" && (i.current?.focus(), t.toggle(e.pointerType === "keyboard" || e.pointerType === "virtual" ? "first" : null, "manual"));
	}, he = W({
		id: h.id,
		"aria-label": m.format("buttonLabel"),
		"aria-labelledby": e["aria-labelledby"] || j.id
	}), ge = W({
		id: g.id,
		"aria-label": m.format("listboxLabel"),
		"aria-labelledby": e["aria-labelledby"] || j.id
	}), K = (0, Z.useRef)(0), _e = (e) => {
		if (u || l) return;
		if (e.timeStamp - K.current < 500) {
			e.preventDefault(), i.current?.focus();
			return;
		}
		let n = L(e).getBoundingClientRect(), r = e.changedTouches[0], a = Math.ceil(n.left + .5 * n.width), o = Math.ceil(n.top + .5 * n.height);
		r.clientX === a && r.clientY === o && (e.preventDefault(), i.current?.focus(), t.toggle(null, "manual"), K.current = e.timeStamp);
	}, q = t.selectionManager.focusedKey != null && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0, J = q?.parentKey ?? null, Y = t.selectionManager.focusedKey ?? null, ve = (0, Z.useRef)(J), ye = (0, Z.useRef)(Y);
	(0, Z.useEffect)(() => {
		if (R() && q != null && Y != null && Y !== ye.current) {
			let e = t.selectionManager.isSelected(Y), n = J == null ? null : t.collection.getItem(J), r = n?.["aria-label"] || (typeof n?.rendered == "string" ? n.rendered : "") || "", i = m.format("focusAnnouncement", {
				isGroupChange: (n && J !== ve.current) ?? !1,
				groupTitle: r,
				groupCount: n ? [...G(n, t.collection)].length : 0,
				optionText: q["aria-label"] || q.textValue || "",
				isSelected: e
			});
			P(i);
		}
		ve.current = J, ye.current = Y;
	});
	let X = ue(t.collection), be = (0, Z.useRef)(X), xe = (0, Z.useRef)(t.isOpen);
	(0, Z.useEffect)(() => {
		let e = t.isOpen !== xe.current && (t.selectionManager.focusedKey == null || R());
		if (t.isOpen && (e || X !== be.current)) {
			let e = m.format("countAnnouncement", { optionCount: X });
			P(e);
		}
		be.current = X, xe.current = t.isOpen;
	});
	let Se = (0, Z.useRef)(t.selectedKey);
	return (0, Z.useEffect)(() => {
		if (R() && t.isFocused && t.selectedItem && t.selectedKey !== Se.current) {
			let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "", n = m.format("selectedAnnouncement", { optionText: e });
			P(n);
		}
		Se.current = t.selectedKey;
	}), (0, Z.useEffect)(() => {
		if (t.isOpen) return te([i.current, r.current].filter((e) => e != null));
	}, [
		t.isOpen,
		i,
		r
	]), le(() => {
		!q && i.current && z(re(i.current)) === i.current && F(i.current, null);
	}, [q]), ae(a, "react-aria-item-action", t.isOpen ? () => {
		t.close();
	} : void 0), {
		labelProps: {
			...j,
			onClick: "htmlFor" in j && j.htmlFor || e.isDisabled ? void 0 : () => {
				i.current?.focus(), B("keyboard");
			}
		},
		buttonProps: {
			...h,
			...he,
			excludeFromTabOrder: !0,
			preventFocusOnPress: !0,
			onPress: pe,
			onPressStart: me,
			isDisabled: u || l
		},
		inputProps: f(ne, {
			role: "combobox",
			"aria-expanded": h["aria-expanded"],
			"aria-controls": t.isOpen ? g.id : void 0,
			"aria-autocomplete": "list",
			"aria-activedescendant": q ? k(t, q.key) : void 0,
			onTouchEnd: _e,
			autoCorrect: "off",
			spellCheck: "false"
		}),
		listBoxProps: f(g, ge, {
			onAction: void 0,
			autoFocus: t.focusStrategy || !0,
			shouldUseVirtualFocus: !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			linkBehavior: "selection",
			UNSTABLE_itemBehavior: "action"
		}),
		valueProps: { id: E },
		descriptionProps: N,
		errorMessageProps: fe,
		isInvalid: ee,
		validationErrors: O,
		validationDetails: A
	};
}
function ut(e = []) {
	let t = g(), [n, r] = (0, Z.useState)(!0), [i, a] = (0, Z.useState)(e);
	return i.some((t, n) => !Object.is(t, e[n])) && (r(!0), a(e)), (0, Z.useEffect)(() => {
		n && !document.getElementById(t) && r(!1);
	}, [
		t,
		n,
		i
	]), n ? t : void 0;
}
// node_modules/react-stately/dist/private/combobox/useComboBoxState.mjs
function dt(e) {
	let { defaultFilter: t, menuTrigger: n = "input", allowsEmptyCollection: r = !1, allowsCustomValue: i, shouldCloseOnBlur: a = !0, selectionMode: o = "single" } = e, [s, c] = (0, Z.useState)(!1), [l, u] = (0, Z.useState)(!1), [d, f] = (0, Z.useState)(null), p = (0, Z.useRef)(!1), m = (0, Z.useMemo)(() => e.defaultValue === void 0 ? o === "single" ? e.defaultSelectedKey ?? null : [] : e.defaultValue, [
		e.defaultValue,
		e.defaultSelectedKey,
		o
	]), h = (0, Z.useMemo)(() => e.value === void 0 ? o === "single" ? e.selectedKey : void 0 : e.value, [
		e.value,
		e.selectedKey,
		o
	]), [g, _] = K(h, m, e.onChange), v = o === "single" && Array.isArray(g) ? g[0] : g, y = (t) => {
		if (o === "single") {
			let n = Array.isArray(t) ? t[0] ?? null : t;
			_(n), n !== v && e.onSelectionChange?.(n);
		} else {
			let e = [];
			Array.isArray(t) ? e = t : t != null && (e = [t]), _(e);
		}
	}, { collection: b, selectionManager: x, disabledKeys: S } = he({
		...e,
		items: e.items ?? e.defaultItems,
		selectionMode: o,
		disallowEmptySelection: o === "single",
		allowDuplicateSelectionEvents: !0,
		selectedKeys: (0, Z.useMemo)(() => ht(v), [v]),
		onSelectionChange: (t) => {
			if (t !== "all") {
				if (o === "single") {
					let n = t.values().next().value ?? null;
					n === v ? (e.onSelectionChange?.(n), z(), I()) : y(n);
				} else y([...t]);
			}
		}
	}), C = o === "single" ? x.firstSelectedKey : null, w = (0, Z.useMemo)(() => [...x.selectedKeys].map((e) => b.getItem(e)).filter((e) => e != null), [x.selectedKeys, b]), [T, E] = K(e.inputValue, mt(e.defaultInputValue, C, b) || "", e.onInputChange), [ee] = (0, Z.useState)(v), [D] = (0, Z.useState)(T), O = b, k = (0, Z.useMemo)(() => e.items != null || !t ? b : ft(b, T, t), [
		b,
		T,
		t,
		e.items
	]), [te, A] = (0, Z.useState)(k), j = (0, Z.useRef)("focus"), ne = (t) => {
		e.onOpenChange && e.onOpenChange(t, t ? j.current : void 0), x.setFocused(t), t || x.setFocusedKey(null);
	}, M = ge({
		...e,
		onOpenChange: ne,
		isOpen: void 0,
		defaultOpen: void 0
	}), N = (t = null, i) => {
		let a = i === "manual" || i === "focus" && n === "focus";
		(r || k.size > 0 || a && O.size > 0 || e.items) && (a && !M.isOpen && e.items === void 0 && c(!0), j.current = i, f(t), M.open());
	}, P = (t = null, i) => {
		let a = i === "manual" || i === "focus" && n === "focus";
		(r || k.size > 0 || a && O.size > 0 || e.items || M.isOpen) && (a && !M.isOpen && e.items === void 0 && c(!0), M.isOpen || (j.current = i), re(t));
	}, F = (0, Z.useCallback)(() => {
		A(s ? O : k);
	}, [
		s,
		O,
		k
	]), re = (0, Z.useCallback)((e = null) => {
		M.isOpen && F(), f(e), M.toggle();
	}, [M, F]), I = (0, Z.useCallback)(() => {
		M.isOpen && (F(), M.close());
	}, [M, F]), [L, R] = (0, Z.useState)(T), z = () => {
		let e = C == null ? "" : b.getItem(C)?.textValue ?? "";
		R(e), E(e);
	}, B = (0, Z.useRef)(v), V = (0, Z.useRef)(C == null ? "" : b.getItem(C)?.textValue ?? "");
	(0, Z.useEffect)(() => {
		l && (k.size > 0 || r) && !M.isOpen && T !== L && n !== "manual" && N(null, "input"), !s && !r && M.isOpen && k.size === 0 && (p.current = !0, I()), l && p.current && k.size > 0 && !M.isOpen && n !== "manual" && (p.current = !1, N(null, "input")), v != null && v !== B.current && o === "single" && I(), T !== L && (x.setFocusedKey(null), c(!1), o === "single" && T === "" && (e.inputValue === void 0 || h === void 0) && y(null)), v !== B.current && (e.inputValue === void 0 || h === void 0) ? z() : L !== T && R(T);
		let t = C == null ? "" : b.getItem(C)?.textValue ?? "";
		!l && C != null && e.inputValue === void 0 && C === B.current && V.current !== t && (R(t), E(t)), B.current = v, V.current = t;
	});
	let H = fe({
		...e,
		value: (0, Z.useMemo)(() => Array.isArray(v) && v.length === 0 ? null : {
			inputValue: T,
			value: v,
			selectedKey: C
		}, [
			T,
			C,
			v
		])
	}), ie = () => {
		p.current = !1, i && C == null ? ae() : U();
	}, ae = () => {
		o === "multiple" ? (R(T), I()) : (B.current = null, y(null), I());
	}, U = (t = !1) => {
		if (h !== void 0 && e.inputValue !== void 0) {
			let n = C == null ? "" : b.getItem(C)?.textValue ?? "";
			(t || o === "multiple" || T !== n) && (e.onSelectionChange?.(C), e.onChange?.(v)), R(n), I();
		} else z(), I();
	}, W = () => {
		if (p.current = !1, i) {
			let e = C == null ? "" : b.getItem(C)?.textValue ?? "";
			T === e ? U() : ae();
		} else U();
	}, oe = () => {
		M.isOpen && x.focusedKey != null ? x.isSelected(x.focusedKey) && o === "single" ? U(!0) : x.select(x.focusedKey) : W();
	}, G = (0, Z.useRef)([T, v]), se = (t) => {
		t ? (G.current = [T, v], n === "focus" && !e.isReadOnly && N(null, "focus")) : (a && W(), (T !== G.current[0] || v !== G.current[1]) && H.commitValidation()), u(t);
	}, ce = (0, Z.useMemo)(() => M.isOpen ? s ? O : k : te, [
		M.isOpen,
		O,
		k,
		s,
		te
	]), le = e.defaultSelectedKey ?? (o === "single" ? ee : null);
	return {
		...H,
		...M,
		focusStrategy: d,
		toggle: P,
		open: N,
		close: W,
		selectionManager: x,
		value: v,
		defaultValue: m ?? ee,
		setValue: y,
		selectedKey: C,
		selectedItems: w,
		defaultSelectedKey: le,
		setSelectedKey: y,
		disabledKeys: S,
		isFocused: l,
		setFocused: se,
		selectedItem: w[0] ?? null,
		collection: ce,
		inputValue: T,
		defaultInputValue: mt(e.defaultInputValue, le, b) ?? D,
		setInputValue: E,
		commit: oe,
		revert: ie
	};
}
function ft(e, t, n) {
	return new me(pt(e, e, t, n));
}
function pt(e, t, n, r) {
	let i = [];
	for (let a of t) if (a.type === "section" && a.hasChildNodes) {
		let t = pt(e, G(a, e), n, r);
		[...t].some((e) => e.type === "item") && i.push({
			...a,
			childNodes: t
		});
	} else (a.type === "item" && r(a.textValue, n) || a.type !== "item") && i.push({ ...a });
	return i;
}
function mt(e, t, n) {
	return e == null && t != null ? n.getItem(t)?.textValue ?? "" : e;
}
function ht(e) {
	if (e !== void 0) return e === null ? [] : Array.isArray(e) ? e : [e];
}
// node_modules/react-aria-components/dist/private/ComboBox.mjs
var gt = /*#__PURE__*/ (0, Z.createContext)(null), _t = /*#__PURE__*/ (0, Z.createContext)(null), vt = /*#__PURE__*/ c(function(e, t) {
	[e, t] = _(e, t, gt);
	let { children: n, isDisabled: r = !1, isInvalid: i = !1, isRequired: a = !1, isReadOnly: o = !1 } = e, s = (0, Z.useMemo)(() => /*#__PURE__*/ Z.createElement(O.Provider, { value: { items: e.items ?? e.defaultItems } }, typeof n == "function" ? n({
		isOpen: !1,
		isDisabled: r,
		isInvalid: i,
		isRequired: a,
		defaultChildren: null,
		isReadOnly: o
	}) : n), [
		n,
		r,
		i,
		a,
		o,
		e.items,
		e.defaultItems
	]);
	return /*#__PURE__*/ Z.createElement(pe, { content: s }, (n) => /*#__PURE__*/ Z.createElement(bt, {
		props: e,
		collection: n,
		comboBoxRef: t
	}));
}), yt = [
	E,
	u,
	a,
	S,
	w,
	N
];
function bt({ props: e, collection: t, comboBoxRef: n }) {
	let { name: r, formValue: i = "key", allowsCustomValue: o } = e;
	o && (i = "text");
	let { validationBehavior: s } = h(C) || {}, c = e.validationBehavior ?? s ?? "native", { contains: l } = q({ sensitivity: "base" }), f = dt({
		...e,
		defaultFilter: e.defaultFilter || l,
		items: e.items,
		children: void 0,
		collection: t,
		validationBehavior: c
	}), p = (0, Z.useRef)(null), g = (0, Z.useRef)(null), _ = (0, Z.useRef)(null), T = (0, Z.useRef)(null), D = (0, Z.useRef)(null), [k, te] = m(!e["aria-label"] && !e["aria-labelledby"]), [A, M] = (0, Z.useState)("label"), { buttonProps: P, inputProps: F, listBoxProps: re, labelProps: I, descriptionProps: L, errorMessageProps: R, valueProps: z, ...B } = lt({
		...d(e),
		label: te,
		inputRef: g,
		buttonRef: p,
		listBoxRef: T,
		popoverRef: D,
		name: i === "text" ? r : void 0,
		validationBehavior: c,
		labelElementType: A
	}, f), [V, H] = (0, Z.useState)(null), ie = (0, Z.useCallback)(() => {
		if (g.current && !_.current) {
			let e = p.current?.getBoundingClientRect(), t = g.current.getBoundingClientRect(), n = e ? Math.min(e.left, t.left) : t.left, r = e ? Math.max(e.right, t.right) : t.right;
			H(r - n + "px");
		}
	}, [
		p,
		g,
		H
	]);
	Y({
		ref: g,
		onResize: ie
	});
	let ae = (0, Z.useMemo)(() => ({ get current() {
		return _.current || g.current;
	} }), [_, g]), U = (0, Z.useMemo)(() => ({
		isOpen: f.isOpen,
		isDisabled: e.isDisabled || !1,
		isInvalid: B.isInvalid || !1,
		isRequired: e.isRequired || !1,
		isReadOnly: e.isReadOnly || !1
	}), [
		f.isOpen,
		e.isDisabled,
		B.isInvalid,
		e.isRequired,
		e.isReadOnly
	]), W = v({
		...e,
		values: U,
		defaultClassName: "react-aria-ComboBox"
	}), oe = _e(e, { global: !0 });
	delete oe.id;
	let G = [];
	if (r && i === "key") {
		let t = Array.isArray(f.value) ? f.value : [f.value];
		t.length === 0 && (t = [null]), G = t.map((t, n) => /*#__PURE__*/ Z.createElement("input", {
			key: n,
			type: "hidden",
			name: r,
			form: e.form,
			value: t ?? ""
		}));
	}
	return /*#__PURE__*/ Z.createElement(b, { values: [
		[_t, f],
		[E, {
			...I,
			elementType: A,
			ref: k
		}],
		[u, {
			...P,
			ref: p,
			isPressed: f.isOpen
		}],
		[a, {
			...F,
			ref: g
		}],
		[S, {
			...F,
			ref: (0, Z.useCallback)((e) => {
				g.current = e, e && M(e.tagName.toLowerCase() === "input" ? "label" : "span");
			}, []),
			value: f.inputValue,
			onChange: (e) => f.setInputValue(e)
		}],
		[ne, f],
		[j, {
			ref: D,
			triggerRef: ae,
			scrollRef: T,
			placement: "bottom start",
			isNonModal: !0,
			trigger: "ComboBox",
			style: { "--trigger-width": V },
			clearContexts: yt
		}],
		[O, {
			...re,
			ref: T
		}],
		[ee, f],
		[N, { slots: {
			description: L,
			errorMessage: R
		} }],
		[w, {
			ref: _,
			isInvalid: B.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[x, B],
		[xt, z]
	] }, /*#__PURE__*/ Z.createElement(y.div, {
		...oe,
		...W,
		ref: n,
		slot: e.slot || void 0,
		"data-focused": f.isFocused || void 0,
		"data-open": f.isOpen || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-invalid": B.isInvalid || void 0,
		"data-required": e.isRequired || void 0
	}, W.children, G));
}
var xt = /*#__PURE__*/ (0, Z.createContext)(null), St = /*#__PURE__*/ c(function(e, t) {
	[e, t] = _(e, t, xt);
	let n = (0, Z.useContext)(_t), r = J(), i = (0, Z.useMemo)(() => r.format(n.selectedItems.map((e) => e?.textValue || "").filter((e) => e !== "")), [r, n.selectedItems]), a = v({
		...e,
		defaultChildren: i || e.placeholder,
		defaultClassName: "react-aria-ComboBoxValue",
		values: {
			selectedItems: (0, Z.useMemo)(() => n.selectedItems.map((e) => e.value ?? null), [n.selectedItems]),
			selectedText: i,
			isPlaceholder: n.selectedItems.length === 0,
			state: n
		}
	}), o = _e(e, { global: !0 });
	return /*#__PURE__*/ Z.createElement(y.div, {
		ref: t,
		...o,
		...a,
		"data-placeholder": n.selectedItems.length === 0 || void 0
	});
}), Q = r(), $ = /*#__PURE__*/ (0, Z.createContext)({}), Ct = ye("combo-box.inputGroup"), wt = [], Tt = ({ children: e, className: t, fullWidth: n, menuTrigger: r = "focus", variant: i, ...a }) => {
	let o = Z.useMemo(() => Te({ fullWidth: n }), [n]), s = Z.useMemo(() => ({
		slots: o,
		variant: i
	}), [o, i]);
	return /*#__PURE__*/ (0, Q.jsx)(xe, { children: /*#__PURE__*/ (0, Q.jsx)($, {
		value: s,
		children: /*#__PURE__*/ (0, Q.jsx)(vt, {
			"data-slot": "combo-box",
			menuTrigger: r,
			...a,
			className: X(t, o?.base()),
			children: e
		})
	}) });
};
Tt.displayName = "HeroUI.ComboBox";
var Et = ({ children: e, className: t, render: n, ...r }) => {
	let i = Z.Children.toArray(e).filter(Z.isValidElement), a = i.at(-1), o = i.slice(0, -1);
	return a ? /*#__PURE__*/ (0, Q.jsx)(Ct.Injector, {
		...r,
		className: t,
		render: n,
		siblings: o,
		children: a
	}) : null;
};
Et.displayName = "HeroUI.ComboBox.InputGroup";
var Dt = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, Z.use)($);
	return /*#__PURE__*/ (0, Q.jsx)(St, {
		className: X(t, r?.value()),
		"data-slot": "combo-box-value",
		...n,
		children: e
	});
};
Dt.displayName = "HeroUI.ComboBox.Value";
var Ot = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, Z.use)($), i = (0, Z.use)(_t), a = s(), [o, c] = Ct.useSlot(n), u = X(t, r?.trigger()), d = X(o?.className, r?.inputGroup());
	if (!o) return /*#__PURE__*/ (0, Q.jsx)(l, {
		className: u,
		"data-open": ve(i?.isOpen),
		"data-slot": "combo-box-trigger",
		...c,
		children: e ?? /*#__PURE__*/ (0, Q.jsx)(Ce, { "data-slot": "combo-box-trigger-default-icon" })
	});
	if (a) return null;
	let { render: f, siblings: p = wt, ...m } = o;
	return /*#__PURE__*/ (0, Q.jsx)(T, {
		...m,
		className: d,
		"data-slot": "combo-box-input-group",
		render: (t) => {
			let { children: n, className: r, ref: a, ...o } = t;
			return /*#__PURE__*/ (0, Q.jsxs)(be.div, {
				className: r,
				"data-slot": "combo-box-input-group",
				render: f,
				...o,
				ref: a,
				children: [p, /*#__PURE__*/ (0, Q.jsx)(l, {
					className: u,
					"data-open": ve(i?.isOpen),
					"data-slot": "combo-box-trigger",
					...c,
					children: e ?? /*#__PURE__*/ (0, Q.jsx)(Ce, { "data-slot": "combo-box-trigger-default-icon" })
				})]
			});
		}
	});
};
Ot.displayName = "HeroUI.ComboBox.Trigger";
var kt = ({ children: e, className: t, defaultOpen: n, isExiting: r, isOpen: i, placement: a = "bottom", ref: o, ...s }) => {
	let { slots: c } = (0, Z.use)($), { isExiting: l, ref: u } = Se({
		...s,
		defaultOpen: n,
		isOpen: i
	}, { ref: o });
	return /*#__PURE__*/ (0, Q.jsx)(we, {
		value: { variant: "default" },
		children: /*#__PURE__*/ (0, Q.jsx)(A, {
			...s,
			ref: u,
			className: X(t, c?.popover()),
			"data-slot": "combo-box-popover",
			defaultOpen: n,
			isExiting: l || r,
			isOpen: i,
			placement: a,
			children: e
		})
	});
};
kt.displayName = "HeroUI.ComboBox.Popover";
// node_modules/@heroui/react/dist/components/input/input.js
var At = ({ className: e, fullWidth: t, variant: n, ...r }) => {
	let a = (0, Z.use)(o), s = (0, Z.use)($), c = n ?? a.variant ?? s.variant, l = (0, Z.useMemo)(() => Ee({
		fullWidth: t,
		variant: c
	}), [t, c]), u = X(e, l);
	return /*#__PURE__*/ (0, Q.jsx)(i, {
		className: u,
		"data-slot": "input",
		...r
	});
};
At.displayName = "HeroUI.Input";
// node_modules/@heroui/react/dist/components/input/index.js
var jt = Object.assign(At, { Root: At });
export { Ot as a, Tt as i, Et as n, Dt as o, kt as r, jt as t };
