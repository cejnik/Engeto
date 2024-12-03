//Pokročilý JS
// u skrolování se používá window

const header = document.querySelector("header");
const h1 = document.querySelector("header h1");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.style.height = "60px";
    h1.style.lineHeight = "60px";
    h1.style.fontSize = "25px";
  } else {
    header.style.height = "80px";
    h1.style.lineHeight = "80px";
    h1.style.fontSize = "32px";
  }
});
