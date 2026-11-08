import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
import { o as n } from "./useKeyboard-CqNSkGJ-.js";
import { t as r } from "./useUpdateEffect-BWSmjBdc.js";
import { r as i } from "./scrollIntoView-D_15IrGl.js";
import { t as a } from "./LiveAnnouncer-7fiQ12ko.js";
import { n as o } from "./useLocalizedStringFormatter-tuzNT5MD.js";
// node_modules/react-aria/dist/private/intl/grid/ar-AE.mjs
var s = {};
s = {
	deselectedItem: (e) => `${e.item} \u{63A}\u{64A}\u{631} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
	longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
	select: "تحديد",
	selectedAll: "جميع العناصر المحددة.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "لم يتم تحديد عناصر",
		one: () => `${t.number(e.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}`,
		other: () => `${t.number(e.count)} \u{639}\u{646}\u{635}\u{631} \u{645}\u{62D}\u{62F}\u{62F}`
	})}.`,
	selectedItem: (e) => `${e.item} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`
};
// node_modules/react-aria/dist/private/intl/grid/bg-BG.mjs
var c = {};
c = {
	deselectedItem: (e) => `${e.item} \u{43D}\u{435} \u{435} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}.`,
	longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
	select: "Изберете",
	selectedAll: "Всички елементи са избрани.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Няма избрани елементи",
		one: () => `${t.number(e.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
		other: () => `${t.number(e.count)} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{438}`
	})}.`,
	selectedItem: (e) => `${e.item} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}.`
};
// node_modules/react-aria/dist/private/intl/grid/cs-CZ.mjs
var l = {};
l = {
	deselectedItem: (e) => `Polo\u{17E}ka ${e.item} nen\xed vybr\xe1na.`,
	longPressToSelect: "Dlouhým stisknutím přejdete do režimu výběru.",
	select: "Vybrat",
	selectedAll: "Vybrány všechny položky.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nevybrány žádné položky",
		one: () => `Vybr\xe1na ${t.number(e.count)} polo\u{17E}ka`,
		other: () => `Vybr\xe1no ${t.number(e.count)} polo\u{17E}ek`
	})}.`,
	selectedItem: (e) => `Vybr\xe1na polo\u{17E}ka ${e.item}.`
};
// node_modules/react-aria/dist/private/intl/grid/da-DK.mjs
var u = {};
u = {
	deselectedItem: (e) => `${e.item} ikke valgt.`,
	longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
	select: "Vælg",
	selectedAll: "Alle elementer valgt.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Ingen elementer valgt",
		one: () => `${t.number(e.count)} element valgt`,
		other: () => `${t.number(e.count)} elementer valgt`
	})}.`,
	selectedItem: (e) => `${e.item} valgt.`
};
// node_modules/react-aria/dist/private/intl/grid/de-DE.mjs
var d = {};
d = {
	deselectedItem: (e) => `${e.item} nicht ausgew\xe4hlt.`,
	longPressToSelect: "Gedrückt halten, um Auswahlmodus zu öffnen.",
	select: "Auswählen",
	selectedAll: "Alle Elemente ausgewählt.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Keine Elemente ausgewählt",
		one: () => `${t.number(e.count)} Element ausgew\xe4hlt`,
		other: () => `${t.number(e.count)} Elemente ausgew\xe4hlt`
	})}.`,
	selectedItem: (e) => `${e.item} ausgew\xe4hlt.`
};
// node_modules/react-aria/dist/private/intl/grid/el-GR.mjs
var f = {};
f = {
	deselectedItem: (e) => `\u{394}\u{3B5}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} \u{3C4}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF} ${e.item}.`,
	longPressToSelect: "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
	select: "Επιλογή",
	selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Δεν επιλέχθηκαν στοιχεία",
		one: () => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${t.number(e.count)} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF}`,
		other: () => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B1}\u{3BD} ${t.number(e.count)} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3B1}`
	})}.`,
	selectedItem: (e) => `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} \u{3C4}\u{3BF} \u{3C3}\u{3C4}\u{3BF}\u{3B9}\u{3C7}\u{3B5}\u{3AF}\u{3BF} ${e.item}.`
};
// node_modules/react-aria/dist/private/intl/grid/en-US.mjs
var p = {};
p = {
	deselectedItem: (e) => `${e.item} not selected.`,
	select: "Select",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "No items selected",
		one: () => `${t.number(e.count)} item selected`,
		other: () => `${t.number(e.count)} items selected`
	})}.`,
	selectedAll: "All items selected.",
	selectedItem: (e) => `${e.item} selected.`,
	longPressToSelect: "Long press to enter selection mode."
};
// node_modules/react-aria/dist/private/intl/grid/es-ES.mjs
var m = {};
m = {
	deselectedItem: (e) => `${e.item} no seleccionado.`,
	longPressToSelect: "Mantenga pulsado para abrir el modo de selección.",
	select: "Seleccionar",
	selectedAll: "Todos los elementos seleccionados.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Ningún elemento seleccionado",
		one: () => `${t.number(e.count)} elemento seleccionado`,
		other: () => `${t.number(e.count)} elementos seleccionados`
	})}.`,
	selectedItem: (e) => `${e.item} seleccionado.`
};
// node_modules/react-aria/dist/private/intl/grid/et-EE.mjs
var h = {};
h = {
	deselectedItem: (e) => `${e.item} pole valitud.`,
	longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
	select: "Vali",
	selectedAll: "Kõik üksused valitud.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Üksusi pole valitud",
		one: () => `${t.number(e.count)} \xfcksus valitud`,
		other: () => `${t.number(e.count)} \xfcksust valitud`
	})}.`,
	selectedItem: (e) => `${e.item} valitud.`
};
// node_modules/react-aria/dist/private/intl/grid/fi-FI.mjs
var g = {};
g = {
	deselectedItem: (e) => `Kohdetta ${e.item} ei valittu.`,
	longPressToSelect: "Siirry valintatilaan painamalla pitkään.",
	select: "Valitse",
	selectedAll: "Kaikki kohteet valittu.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Ei yhtään kohdetta valittu",
		one: () => `${t.number(e.count)} kohde valittu`,
		other: () => `${t.number(e.count)} kohdetta valittu`
	})}.`,
	selectedItem: (e) => `${e.item} valittu.`
};
// node_modules/react-aria/dist/private/intl/grid/fr-FR.mjs
var _ = {};
_ = {
	deselectedItem: (e) => `${e.item} non s\xe9lectionn\xe9.`,
	longPressToSelect: "Appuyez de manière prolongée pour passer en mode de sélection.",
	select: "Sélectionner",
	selectedAll: "Tous les éléments sélectionnés.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Aucun élément sélectionné",
		one: () => `${t.number(e.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
		other: () => `${t.number(e.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
	})}.`,
	selectedItem: (e) => `${e.item} s\xe9lectionn\xe9.`
};
// node_modules/react-aria/dist/private/intl/grid/he-IL.mjs
var v = {};
v = {
	deselectedItem: (e) => `${e.item} \u{5DC}\u{5D0} \u{5E0}\u{5D1}\u{5D7}\u{5E8}.`,
	longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
	select: "בחר",
	selectedAll: "כל הפריטים נבחרו.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "לא נבחרו פריטים",
		one: () => `\u{5E4}\u{5E8}\u{5D9}\u{5D8} ${t.number(e.count)} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
		other: () => `${t.number(e.count)} \u{5E4}\u{5E8}\u{5D9}\u{5D8}\u{5D9}\u{5DD} \u{5E0}\u{5D1}\u{5D7}\u{5E8}\u{5D5}`
	})}.`,
	selectedItem: (e) => `${e.item} \u{5E0}\u{5D1}\u{5D7}\u{5E8}.`
};
// node_modules/react-aria/dist/private/intl/grid/hr-HR.mjs
var y = {};
y = {
	deselectedItem: (e) => `Stavka ${e.item} nije odabrana.`,
	longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
	select: "Odaberite",
	selectedAll: "Odabrane su sve stavke.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nije odabrana nijedna stavka",
		one: () => `Odabrana je ${t.number(e.count)} stavka`,
		other: () => `Odabrano je ${t.number(e.count)} stavki`
	})}.`,
	selectedItem: (e) => `Stavka ${e.item} je odabrana.`
};
// node_modules/react-aria/dist/private/intl/grid/hu-HU.mjs
var b = {};
b = {
	deselectedItem: (e) => `${e.item} nincs kijel\xf6lve.`,
	longPressToSelect: "Nyomja hosszan a kijelöléshez.",
	select: "Kijelölés",
	selectedAll: "Az összes elem kijelölve.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Egy elem sincs kijelölve",
		one: () => `${t.number(e.count)} elem kijel\xf6lve`,
		other: () => `${t.number(e.count)} elem kijel\xf6lve`
	})}.`,
	selectedItem: (e) => `${e.item} kijel\xf6lve.`
};
// node_modules/react-aria/dist/private/intl/grid/it-IT.mjs
var x = {};
x = {
	deselectedItem: (e) => `${e.item} non selezionato.`,
	longPressToSelect: "Premi a lungo per passare alla modalità di selezione.",
	select: "Seleziona",
	selectedAll: "Tutti gli elementi selezionati.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nessun elemento selezionato",
		one: () => `${t.number(e.count)} elemento selezionato`,
		other: () => `${t.number(e.count)} elementi selezionati`
	})}.`,
	selectedItem: (e) => `${e.item} selezionato.`
};
// node_modules/react-aria/dist/private/intl/grid/ja-JP.mjs
var S = {};
S = {
	deselectedItem: (e) => `${e.item} \u{304C}\u{9078}\u{629E}\u{3055}\u{308C}\u{3066}\u{3044}\u{307E}\u{305B}\u{3093}\u{3002}`,
	longPressToSelect: "長押しして選択モードを開きます。",
	select: "選択",
	selectedAll: "すべての項目を選択しました。",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "項目が選択されていません",
		one: () => `${t.number(e.count)} \u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}`,
		other: () => `${t.number(e.count)} \u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}`
	})}\u{3002}`,
	selectedItem: (e) => `${e.item} \u{3092}\u{9078}\u{629E}\u{3057}\u{307E}\u{3057}\u{305F}\u{3002}`
};
// node_modules/react-aria/dist/private/intl/grid/ko-KR.mjs
var C = {};
C = {
	deselectedItem: (e) => `${e.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C9C0} \u{C54A}\u{C558}\u{C2B5}\u{B2C8}\u{B2E4}.`,
	longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
	select: "선택",
	selectedAll: "모든 항목이 선택되었습니다.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "선택된 항목이 없습니다",
		one: () => `${t.number(e.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}`,
		other: () => `${t.number(e.count)}\u{AC1C} \u{D56D}\u{BAA9}\u{C774} \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}`
	})}.`,
	selectedItem: (e) => `${e.item}\u{C774}(\u{AC00}) \u{C120}\u{D0DD}\u{B418}\u{C5C8}\u{C2B5}\u{B2C8}\u{B2E4}.`
};
// node_modules/react-aria/dist/private/intl/grid/lt-LT.mjs
var w = {};
w = {
	deselectedItem: (e) => `${e.item} nepasirinkta.`,
	longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
	select: "Pasirinkti",
	selectedAll: "Pasirinkti visi elementai.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nepasirinktas nė vienas elementas",
		one: () => `Pasirinktas ${t.number(e.count)} elementas`,
		other: () => `Pasirinkta element\u{173}: ${t.number(e.count)}`
	})}.`,
	selectedItem: (e) => `Pasirinkta: ${e.item}.`
};
// node_modules/react-aria/dist/private/intl/grid/lv-LV.mjs
var T = {};
T = {
	deselectedItem: (e) => `Vienums ${e.item} nav atlas\u{12B}ts.`,
	longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
	select: "Atlasīt",
	selectedAll: "Atlasīti visi vienumi.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nav atlasīts neviens vienums",
		one: () => `Atlas\u{12B}to vienumu skaits: ${t.number(e.count)}`,
		other: () => `Atlas\u{12B}to vienumu skaits: ${t.number(e.count)}`
	})}.`,
	selectedItem: (e) => `Atlas\u{12B}ts vienums ${e.item}.`
};
// node_modules/react-aria/dist/private/intl/grid/nb-NO.mjs
var E = {};
E = {
	deselectedItem: (e) => `${e.item} er ikke valgt.`,
	longPressToSelect: "Bruk et langt trykk for å gå inn i valgmodus.",
	select: "Velg",
	selectedAll: "Alle elementer er valgt.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Ingen elementer er valgt",
		one: () => `${t.number(e.count)} element er valgt`,
		other: () => `${t.number(e.count)} elementer er valgt`
	})}.`,
	selectedItem: (e) => `${e.item} er valgt.`
};
// node_modules/react-aria/dist/private/intl/grid/nl-NL.mjs
var D = {};
D = {
	deselectedItem: (e) => `${e.item} niet geselecteerd.`,
	longPressToSelect: "Druk lang om de selectiemodus te openen.",
	select: "Selecteren",
	selectedAll: "Alle items geselecteerd.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Geen items geselecteerd",
		one: () => `${t.number(e.count)} item geselecteerd`,
		other: () => `${t.number(e.count)} items geselecteerd`
	})}.`,
	selectedItem: (e) => `${e.item} geselecteerd.`
};
// node_modules/react-aria/dist/private/intl/grid/pl-PL.mjs
var O = {};
O = {
	deselectedItem: (e) => `Nie zaznaczono ${e.item}.`,
	longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
	select: "Zaznacz",
	selectedAll: "Wszystkie zaznaczone elementy.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nie zaznaczono żadnych elementów",
		one: () => `${t.number(e.count)} zaznaczony element`,
		other: () => `${t.number(e.count)} zaznaczonych element\xf3w`
	})}.`,
	selectedItem: (e) => `Zaznaczono ${e.item}.`
};
// node_modules/react-aria/dist/private/intl/grid/pt-BR.mjs
var k = {};
k = {
	deselectedItem: (e) => `${e.item} n\xe3o selecionado.`,
	longPressToSelect: "Mantenha pressionado para entrar no modo de seleção.",
	select: "Selecionar",
	selectedAll: "Todos os itens selecionados.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nenhum item selecionado",
		one: () => `${t.number(e.count)} item selecionado`,
		other: () => `${t.number(e.count)} itens selecionados`
	})}.`,
	selectedItem: (e) => `${e.item} selecionado.`
};
// node_modules/react-aria/dist/private/intl/grid/pt-PT.mjs
var A = {};
A = {
	deselectedItem: (e) => `${e.item} n\xe3o selecionado.`,
	longPressToSelect: "Prima continuamente para entrar no modo de seleção.",
	select: "Selecionar",
	selectedAll: "Todos os itens selecionados.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nenhum item selecionado",
		one: () => `${t.number(e.count)} item selecionado`,
		other: () => `${t.number(e.count)} itens selecionados`
	})}.`,
	selectedItem: (e) => `${e.item} selecionado.`
};
// node_modules/react-aria/dist/private/intl/grid/ro-RO.mjs
var j = {};
j = {
	deselectedItem: (e) => `${e.item} neselectat.`,
	longPressToSelect: "Apăsați lung pentru a intra în modul de selectare.",
	select: "Selectare",
	selectedAll: "Toate elementele selectate.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Niciun element selectat",
		one: () => `${t.number(e.count)} element selectat`,
		other: () => `${t.number(e.count)} elemente selectate`
	})}.`,
	selectedItem: (e) => `${e.item} selectat.`
};
// node_modules/react-aria/dist/private/intl/grid/ru-RU.mjs
var M = {};
M = {
	deselectedItem: (e) => `${e.item} \u{43D}\u{435} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
	longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
	select: "Выбрать",
	selectedAll: "Выбраны все элементы.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Нет выбранных элементов",
		one: () => `${t.number(e.count)} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}`,
		other: () => `${t.number(e.count)} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{43E}\u{432} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
	})}.`,
	selectedItem: (e) => `${e.item} \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`
};
// node_modules/react-aria/dist/private/intl/grid/sk-SK.mjs
var N = {};
N = {
	deselectedItem: (e) => `Nevybrat\xe9 polo\u{17E}ky: ${e.item}.`,
	longPressToSelect: "Dlhším stlačením prejdite do režimu výberu.",
	select: "Vybrať",
	selectedAll: "Všetky vybraté položky.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Žiadne vybraté položky",
		one: () => `${t.number(e.count)} vybrat\xe1 polo\u{17E}ka`,
		other: () => `Po\u{10D}et vybrat\xfdch polo\u{17E}iek:${t.number(e.count)}`
	})}.`,
	selectedItem: (e) => `Vybrat\xe9 polo\u{17E}ky: ${e.item}.`
};
// node_modules/react-aria/dist/private/intl/grid/sl-SI.mjs
var P = {};
P = {
	deselectedItem: (e) => `Element ${e.item} ni izbran.`,
	longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
	select: "Izberite",
	selectedAll: "Vsi elementi so izbrani.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Noben element ni izbran",
		one: () => `${t.number(e.count)} element je izbran`,
		other: () => `${t.number(e.count)} elementov je izbranih`
	})}.`,
	selectedItem: (e) => `Element ${e.item} je izbran.`
};
// node_modules/react-aria/dist/private/intl/grid/sr-SP.mjs
var F = {};
F = {
	deselectedItem: (e) => `${e.item} nije izabrano.`,
	longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
	select: "Izaberite",
	selectedAll: "Izabrane su sve stavke.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Nije izabrana nijedna stavka",
		one: () => `Izabrana je ${t.number(e.count)} stavka`,
		other: () => `Izabrano je ${t.number(e.count)} stavki`
	})}.`,
	selectedItem: (e) => `${e.item} je izabrano.`
};
// node_modules/react-aria/dist/private/intl/grid/sv-SE.mjs
var I = {};
I = {
	deselectedItem: (e) => `${e.item} ej markerat.`,
	longPressToSelect: "Tryck länge när du vill öppna väljarläge.",
	select: "Markera",
	selectedAll: "Alla markerade objekt.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Inga markerade objekt",
		one: () => `${t.number(e.count)} markerat objekt`,
		other: () => `${t.number(e.count)} markerade objekt`
	})}.`,
	selectedItem: (e) => `${e.item} markerat.`
};
// node_modules/react-aria/dist/private/intl/grid/tr-TR.mjs
var L = {};
L = {
	deselectedItem: (e) => `${e.item} se\xe7ilmedi.`,
	longPressToSelect: "Seçim moduna girmek için uzun basın.",
	select: "Seç",
	selectedAll: "Tüm ögeler seçildi.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Hiçbir öge seçilmedi",
		one: () => `${t.number(e.count)} \xf6ge se\xe7ildi`,
		other: () => `${t.number(e.count)} \xf6ge se\xe7ildi`
	})}.`,
	selectedItem: (e) => `${e.item} se\xe7ildi.`
};
// node_modules/react-aria/dist/private/intl/grid/uk-UA.mjs
var R = {};
R = {
	deselectedItem: (e) => `${e.item} \u{43D}\u{435} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`,
	longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
	select: "Вибрати",
	selectedAll: "Усі елементи вибрано.",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "Жодних елементів не вибрано",
		one: () => `${t.number(e.count)} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`,
		other: () => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}\u{456}\u{432}: ${t.number(e.count)}`
	})}.`,
	selectedItem: (e) => `${e.item} \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}.`
};
// node_modules/react-aria/dist/private/intl/grid/zh-CN.mjs
var z = {};
z = {
	deselectedItem: (e) => `\u{672A}\u{9009}\u{62E9} ${e.item}\u{3002}`,
	longPressToSelect: "长按以进入选择模式。",
	select: "选择",
	selectedAll: "已选择所有项目。",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "未选择项目",
		one: () => `\u{5DF2}\u{9009}\u{62E9} ${t.number(e.count)} \u{4E2A}\u{9879}\u{76EE}`,
		other: () => `\u{5DF2}\u{9009}\u{62E9} ${t.number(e.count)} \u{4E2A}\u{9879}\u{76EE}`
	})}\u{3002}`,
	selectedItem: (e) => `\u{5DF2}\u{9009}\u{62E9} ${e.item}\u{3002}`
};
// node_modules/react-aria/dist/private/intl/grid/zh-TW.mjs
var B = {};
B = {
	deselectedItem: (e) => `\u{672A}\u{9078}\u{53D6}\u{300C}${e.item}\u{300D}\u{3002}`,
	longPressToSelect: "長按以進入選擇模式。",
	select: "選取",
	selectedAll: "已選取所有項目。",
	selectedCount: (e, t) => `${t.plural(e.count, {
		"=0": "未選取任何項目",
		one: () => `\u{5DF2}\u{9078}\u{53D6} ${t.number(e.count)} \u{500B}\u{9805}\u{76EE}`,
		other: () => `\u{5DF2}\u{9078}\u{53D6} ${t.number(e.count)} \u{500B}\u{9805}\u{76EE}`
	})}\u{3002}`,
	selectedItem: (e) => `\u{5DF2}\u{9078}\u{53D6}\u{300C}${e.item}\u{300D}\u{3002}`
};
// node_modules/react-aria/dist/private/grid/intlStrings.mjs
var V = {};
V = {
	"ar-AE": s,
	"bg-BG": c,
	"cs-CZ": l,
	"da-DK": u,
	"de-DE": d,
	"el-GR": f,
	"en-US": p,
	"es-ES": m,
	"et-EE": h,
	"fi-FI": g,
	"fr-FR": _,
	"he-IL": v,
	"hr-HR": y,
	"hu-HU": b,
	"it-IT": x,
	"ja-JP": S,
	"ko-KR": C,
	"lt-LT": w,
	"lv-LV": T,
	"nb-NO": E,
	"nl-NL": D,
	"pl-PL": O,
	"pt-BR": k,
	"pt-PT": A,
	"ro-RO": j,
	"ru-RU": M,
	"sk-SK": N,
	"sl-SI": P,
	"sr-SP": F,
	"sv-SE": I,
	"tr-TR": L,
	"uk-UA": R,
	"zh-CN": z,
	"zh-TW": B
};
// node_modules/react-aria/dist/private/grid/useGridSelectionAnnouncement.mjs
var H = /* @__PURE__ */ e(t(), 1);
function U(e) {
	return e && e.__esModule ? e.default : e;
}
function W(e, t) {
	let { getRowText: n = (e) => t.collection.getTextValue?.(e) ?? t.collection.getItem(e)?.textValue } = e, i = o(U(V), "@react-aria/grid"), s = t.selectionManager.rawSelection, c = (0, H.useRef)(s), l = (0, H.useCallback)(() => {
		if (!t.selectionManager.isFocused || s === c.current) {
			c.current = s;
			return;
		}
		let e = G(s, c.current), r = G(c.current, s), o = t.selectionManager.selectionBehavior === "replace", l = [];
		if (t.selectionManager.selectedKeys.size === 1 && o) {
			let e = t.selectionManager.selectedKeys.keys().next().value;
			if (e != null && t.collection.getItem(e)) {
				let t = n(e);
				t && l.push(i.format("selectedItem", { item: t }));
			}
		} else if (e.size === 1 && r.size === 0) {
			let t = e.keys().next().value;
			if (t != null) {
				let e = n(t);
				e && l.push(i.format("selectedItem", { item: e }));
			}
		} else if (r.size === 1 && e.size === 0) {
			let e = r.keys().next().value;
			if (e != null && t.collection.getItem(e)) {
				let t = n(e);
				t && l.push(i.format("deselectedItem", { item: t }));
			}
		}
		t.selectionManager.selectionMode === "multiple" && (l.length === 0 || s === "all" || s.size > 1 || c.current === "all" || c.current?.size > 1) && l.push(s === "all" ? i.format("selectedAll") : i.format("selectedCount", { count: s.size })), l.length > 0 && a(l.join(" ")), c.current = s;
	}, [
		s,
		t.selectionManager.selectedKeys,
		t.selectionManager.isFocused,
		t.selectionManager.selectionBehavior,
		t.selectionManager.selectionMode,
		t.collection,
		n,
		i
	]);
	r(() => {
		if (t.selectionManager.isFocused) l();
		else {
			let e = requestAnimationFrame(l);
			return () => cancelAnimationFrame(e);
		}
	}, [s, t.selectionManager.isFocused]);
}
function G(e, t) {
	let n = /* @__PURE__ */ new Set();
	if (e === "all" || t === "all") return n;
	for (let r of e.keys()) t.has(r) || n.add(r);
	return n;
}
// node_modules/react-aria/dist/private/grid/useHighlightSelectionDescription.mjs
function K(e) {
	return e && e.__esModule ? e.default : e;
}
function q(e) {
	let t = o(K(V), "@react-aria/grid"), r = n(), a = (r === "pointer" || r === "virtual" || r == null) && typeof window < "u" && "ontouchstart" in window, s = (0, H.useMemo)(() => {
		let n = e.selectionManager.selectionMode, r = e.selectionManager.selectionBehavior, i;
		return a && (i = t.format("longPressToSelect")), r === "replace" && n !== "none" && e.hasItemActions ? i : void 0;
	}, [
		e.selectionManager.selectionMode,
		e.selectionManager.selectionBehavior,
		e.hasItemActions,
		t,
		a
	]);
	return i(s);
}
export { W as n, V as r, q as t };
