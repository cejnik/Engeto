const section = document.querySelector(".about-us");
console.log(section);

const paragraph = document.createElement("p");
paragraph.className = "insert text";
paragraph.textContent = "Text v odstavci";

console.log(paragraph);

section.Child(paragraph); //vkládá

const heading = document.createElement("h1");
heading.textContent = "Nadpis";
section.prepend(heading); //přidej mi to nahoru, jako prvního potomka
