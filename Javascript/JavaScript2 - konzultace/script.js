const question = prompt("Co chceš zobrazit? Odpověd v angličtině? ");
const selectedObject = document.querySelector("." + question);
selectedObject.style.display = "block";

const questionBorder = prompt("Jaký chceš border? ");
const questionBackgroundColor = prompt("Jaký chceš pozadí?");
const questionText = prompt("Jaký chceš text?");

selectedObject.style.border = questionBorder;
selectedObject.style.backgroundColor = questionBackgroundColor;
selectedObject.textContent = questionText;
