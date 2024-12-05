const color = prompt("Zadej název barvy: "); //zeptá se na barvu
const body = document.querySelector("body"); //vybereš body
body.style.backgroundColor = color; // odpoved od uživatele změníš v body

const textColor = prompt("Jaký chceš text? ");
body.style.color = textColor;
