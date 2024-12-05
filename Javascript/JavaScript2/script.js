const section = document.querySelector(".result");

//Získání dat:
const spending = parseFloat(prompt("Kolik jsi utratil? "));
const tip = parseInt(prompt("Kolik je spropitné v %? "));
const people = parseInt(prompt("Kolik bylo lidi? "));

const result = (spending * ((tip + 100) / 100)) / people;
console.log(result);

//Přidání do stránky
const paragraph = document.createElement("p");
paragraph.textContent = "Jeden člověk zaplatí " + result + " Kč";
section.append(paragraph);

//paragraph.textContent = `Jeden člověk utratí ${result} kč. `;
section.append(paragraph);
//template string
