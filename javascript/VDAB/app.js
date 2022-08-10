console.log("Welcome");
console.log("Hello!");

console.log("Programmeren");
console.log("is");
console.log("plezant.");


console.log((125 / 100) * 5);

console.log(11 % 3); //rest berekenen

console.log(29 % 7);
console.log(125 + 6);
console.log(2 * 9);
console.log(12 - 4);

//getallen vergelijken === en !==
// a<b, a<=b, a>b, a>=b
console.log(5.6 <= 7);
console.log(4.6 > 5);


//tekst vergelijken -> in js op basis van het alfabet
console.log("limonade" < "bier");

// Variabelen aanmaken gebruiken we keywords (vooraf gedefinieerde betekenis)
// const: je maakt een variabele en je geeft een beginwaarde. De variabele niet meer wijzigen anders foutmelding.
// const naam=waarde;
const kids = 3;
const name = "Anna";
const married = true;
console.log(kids, name, married);

// let: variabele maken waarvan je de waarde nog kan wijzigen.
let kid = 3;
kid = 4;
console.log(kid);

// var:


const kinderen = 4;
console.log("Totaal kindergeld:", 4 * 300, "euro");

const toegangsprijs = 30
console.log("De totale opbrengst:", 268 * 30, "euro");


// input vragen aan user -> prompt
//const voornaam=prompt("Wat is jouw voornaam");

//const voornaam=prompt("voornaam");
//console.log(voornaam);

//const kids1=Number (prompt ("Aantal kinderen")); // je gebruikt het resultaat van prompt als parameter van de fuctie Number
//console.log(kids1);


//const lengte=Number (prompt ("Lengte"));
//const breedte=Number (prompt ("Breedte"));
//console.log("De oppervlakte van de rechthoek is", lengte*breedte);


//BMI berekenen
//const gewicht=Number (prompt ("Gewicht in kg"));
//const lengte=Number (prompt ("Lengte in m"));
//console.log("Uw bmi is",gewicht/(lengte*lengte));


//Salaris berekenen
//const bedrag=Number (prompt ("Vul uw bruto salaris in"));
//const btw=bedrag*0.21;
//const netto=bedrag-btw;

//console.log("Uw netto loon bedraagt:",netto);




//const prijs=Number(prompt("Wat is de prijs van één ticket:"));
//const aantal=Number(prompt("Hoeveel tickets heeft u nodig:"));
//const totaal=prijs*aantal;
//console.log("Totaal te betalen",totaal,"euro");


//if of true: code die wordt uitgevoerd wanneer de voorwaarde waar is
//else of false: code die wordt uitgevoerd wanneer de voorwaarde niet waar is

//const temperatuur=Number (prompt("Hoeveel graden is het buiten?"));
//if (temperatuur<15) {
//   console.log("Vergeet uw jas aan niet aan te doen!");
//}
//if (temperatuur>=15) {
//    console.log("Geniet van het mooie weer!");
//}
//if (temperatuur<15) {
//   console.log("Vergeet uw jas aan niet aan te doen!");
//}
//else {
//   console.log("Geniet van het mooie weer!");
//}

//console.log(temperatuur<=15?"Doe uw jas aan!":"Je mag zonder jas naar buiten!"); //kortere versie met if?true:false


//const limonade = Number(prompt("Hoeveel limonades wenst u te kopen?"));
//let prijs = 3 * limonade;
//if (limonade > 10) {
//    prijs *= 0.95
//}
//console.log("Totaal te betalen=", prijs);


// SWITCH
/*const plaats=Number (prompt("De hoeveelste ben je geëindigd?"));
switch (plaats) {
    case 1:
    console.log("Goud");
    break;
    case 2:
    console.log("Zilver");
    break;
    case 3:
    console.log("Brons");
    break;
    default:
        console.log("Geen medaille");
}*/


/*const code=(prompt("Landscode"))
switch (code){
    case "CH":
        console.log("Zwitserland");
        break;
        case "GB":
            console.log("Engeland");
            break;
            case "TR":
                console.log("Turkije");
                break;
                default:
                    console.log("Onbekend")
}*/



// WHILE LUS
// verhoog een getal met 1, zolang getal <3. Begin bij 0.

//let getal=1; 
//while (getal < 3){
//   getal++;
//   console.log(getal);
//}




//let aantal = Number(prompt("Aantal limonades"));
//while (aantal <= 0) {
// aantal = Number(prompt("Aantal limonades"));
//}
//console.log(aantal * 3);

// de opdrachten die JS moet uitvoeren zet je tsn {}


// FOR (initialiseer variable, voorwaarde, verhoog of verlaag variable)
// const getal=Number (prompt("Getal"));
// for (let getal2 = 1, getal2 <= 10; getal2++)
// {console.log(getal*getal2);
// }


//NESTEN -> binnen if/else/while/for nog eens een if/else/while/for gebruikt

//const werk = prompt("Heb je werk (ja/nee)?");
//if (werk === "ja") {
//   console.log("Veel werkplezier.");
//} else {
//   const opleiding = prompt("Wil je een opleiding volgen (ja/nee)?");
//   if (opleiding === "ja") {
//      console.log("Je vindt opleidingen op www.vdab.be/opleidingen.");
//  } else {
//     console.log("Je vindt vacatures op www.vdab.be/jobs.");
//  }
//}


// TRUE AND FALSE -> twee waarden met elkaar vgl
// OR & AND -> kan je meerdere voorwaarden combineren
// OR= de combinatie is true als minstens één van de vw true is. In alle andere gevallen is het resultaat false.
//AND= de combinatie is true als alle vw true zijn. In alle andere gevallen is het resultaat false.



//const leeftijd = Number(prompt("Hoe oud is de auto?"));
//const kilometers = Number(prompt("Hoeveel kilometers staan er op de teller?"));
//if (leeftijd < 5 && kilometers < 180000) {
//   console.log("Dit contract mag verlengd worden.");
//} else {
//   console.log("Dit contract mag niet meer verlengd worden.");
//}


//let korting = 0;
//let leeftijd = Number(prompt("Leeftijd (Typ 0 om te stoppen)"));
//while (leeftijd !== 0) {
//  if (leeftijd < 7 || leeftijd > 80) {
//     korting++;
//  }
//  leeftijd = Number(prompt("Leeftijd (Typ 0 om te stoppen)"));
//}
//console.log("Aantal bezoekers met korting:", korting);



// FUNCTION ()
// = reeks instructies die taak uitvoert of een waarde berekent.
// stuk code die je een naam geeft, zodat je dit stuk later kan hergebruiken.
// functie functienaam () {
// code die moet worden uitgevoerd
// }
// functienaam ();
function zeghallo() {
    console.log("Hallo");
}
zeghallo();


function keuze() {
    let antwoord = prompt("Maak uw keuze (+ voor som, - voor verschil)");
    while (antwoord !== "+" && antwoord !== "-") {
        antwoord = prompt("Verkeerde keuze, probeer opnieuw.");
    }
    return antwoord;
}
const getal1 = 30;
const getal2 = 10;
const bewerking = keuze();
console.log("We hebben voor u de getallen ", getal1, " en ", getal2);
if (bewerking === "+") {
    console.log("De som is ", getal1 + getal2);
} else {
    console.log("Het verschil is ", getal1 - getal2);
}


// FUNCTION met (parameters)
function oppervlakte(breedte, hoogte) {
    return breedte * hoogte;
}

function kwadraat(getal) {
    return getal * getal;
}
console.log(kwadraat(4));




// ARRAY []
// =een variabele die meerdere waarden bevat. Niet per se vh zelfde type
// vb. const kleuren=["rood","geel","groen"];



// OBJECT LITERAL ()
// met dit kan je de eigenschappen (properties) ve object beschrijven. 
// bev. AUTO: kleur: rood, brandstof: benzine: merk VW
// const naamVariabele = { eigenschap1:waarde1, eigenschap2:waarde2, eigenschap3:waarde3 };
// console.log(naamVariabele.eigenschap1);

// maak een rechthoek met volgende properties: lengte 3, breedte 2 en kleur groen. Wijzig daarna de property lengte naar 4.
const rechthoek = { lengte: 3, breedte: 2, kleur: "groen" };
console.log(rechthoek.lengte);
rechthoek.lengte = 4;
console.log(rechthoek.lengte);




// OJECT LITERAL
// een property ve object literal kan zelf een object literal zijn.
// kan ook een array zijn

const personen = [];
let naam = prompt("Naam");
while (naam !== "stop") {
   personen.push({
      naam: naam,
      gewicht: Number(prompt("Gewicht")),
      lengte: Number(prompt("Lengte"))
   })
   naam = prompt("Naam");
}
for (const persoon of personen) {
   console.log(persoon.naam, persoon.gewicht/(persoon.lengte*persoon.lengte));
}