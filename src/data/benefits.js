import medici from "../assets/images/benefitsIcons/user-doctor-solid.svg";
import filter from "../assets/images/benefitsIcons/filter-solid.svg";
import support from "../assets/images/benefitsIcons/headset-solid.svg";
import secure from "../assets/images/benefitsIcons/shield-halved-solid.svg";
import community from "../assets/images/benefitsIcons/comments-solid.svg";
import gratuit from "../assets/images/benefitsIcons/hand-holding-dollar-solid.svg";

const benefits = [
	{
		id: 1,
		title: "Acces Rapid la Medici Români",
		description:
			"Avem o rețea extinsă de medici români cu experiență și calificați în Germania. Cu ajutorul nostru, puteți găsi cu ușurință un medic adecvat specializat pentru nevoile dvs. de sănătate",
		icon: medici,
	},
	{
		id: 2,
		title: "Filtrare Avansată",
		description:
			"Folosind funcția noastră de căutare și filtrare, puteți selecta medici în funcție de specializare și regiune. Acest lucru vă permite să găsiți medicul potrivit în funcție de preferințele și nevoile dvs. personale",
		icon: filter,
	},
	{
		id: 3,
		title: "Suport Personalizat",
		description:
			"Echipa noastră de asistență este mereu disponibilă pentru a vă ajuta. Dacă aveți întrebări sau aveți nevoie de asistență suplimentară în procesul de găsire a unui medic, suntem aici să vă ghidăm",
		icon: support,
	},
	{
		id: 4,
		title: "Confidențialitate și Siguranță",
		description:
			"Respectăm confidențialitatea datelor dvs. personale și punem securitatea înainte de toate. Datele dvs. sunt protejate și folosite doar în scopurile specifice ale platformei noastre",
		icon: secure,
	},
	{
		id: 5,
		title: "Gratuit și Ușor de Folosit",
		description:
			"Folosirea platformei noastre este complet gratuită pentru pacienți. Interfața noastră intuitivă face navigarea și căutarea medicilor să fie ușoară pentru oricine",
		icon: gratuit,
	},
	{
		id: 6,
		title: "Conectarea cu Comunitatea",
		description:
			"Alăturați-vă comunității noastre de pacienți și medici pentru a primi sfaturi, informații și sprijin din partea celor care au trecut prin experiențe similare",
		icon: community,
	},
];

export default benefits;
