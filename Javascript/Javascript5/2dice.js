const btn = document.querySelector(".btn");
const cubeImage = document.querySelector(".cube-image");
const result = document.querySelector(".result");
let counter = 0;
let clicks = 0;

//Funkce
const createParagraph = (content) => {
  const p = document.createElement("p");
  p.textContent = content;
  result.append(p);
};

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  cubeImage.src = "img/" + randomNumber + ".jpg";
  //   cubeImage.src = `img/${randomNumber}.jpg`;
  counter = counter + randomNumber;
  //   counter +=randomNumber

  //načítání pokusů
  clicks += 1;

  //Pročištění sekce
  result.textContent = "";
  createParagraph(counter);

  // Hodnotíme stav hry - hrát dál, vítězství, prohra.
  if (clicks < 5 && counter < 20) {
    createParagraph("Házejte dál");
  } else if (clicks <= 5 && counter >= 20) {
    createParagraph("Vyhráli jsi!");
  } else if (clicks > 4) {
    createParagraph("Prohráli jsi!");
    btn.style.visibility = "hidden";
  }
});
