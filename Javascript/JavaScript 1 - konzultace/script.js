const square = document.querySelector(".square");
console.log({ square });

square.style.backgroundColor = "blue";
square.style.width = "200px";
square.style.height = "200px";

square.style.borderRadius = "50%";

const nadpis = document.querySelector("h1");
nadpis.style.fontSize = "48px";
nadpis.style.fontFamily = "Comic Sans MS";
nadpis.style.textTransform = "uppercase";

// document.getElementById("heading").innerHTML = "Martin Chejn";

heading.textContent = "Martin";

// span = document.getElementById("heading");
// txt = document.createTextNode(" martin Chejn");
// span.appendChild(txt);

const testing = prompt("zadej změnu textu: ");
const heading1 = document.querySelector("h1");
heading1.textContent = testing;
