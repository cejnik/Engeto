const mode = prompt("Jaký chcete mod dark/light? ");
const body = document.querySelector("body");

if (mode == "dark") {
  body.style.backgroundColor = "black";
  body.style.color = "white";
} else {
  body.style.backgroundColor = "white";
  body.style.color = "black";
}
