const animal = prompt("Napiš zvíře: ");
const choosenEl = document.querySelector(".funkce");
const newParagraph = document.createElement("p");

if (animal === "pes") {
  newParagraph.textContent = "Krmivo pro psy je ve 3. uličce";
} else if (animal === "kočka") {
  newParagraph.textContent = "Krmivo pro kočky najdete v 1. patře";
} else if (animal === "křeček") {
  newParagraph.textContent = "Krmivo pro křečky najdete ve 2. uličce";
} else {
  newParagraph.textContent =
    "Zdá se, že vámi požadované krmivo nemáme. Prosím domluvte se s obsluhou na objednání";
}

choosenEl.append(newParagraph);
