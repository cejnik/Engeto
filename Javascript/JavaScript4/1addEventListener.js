const heading = document.querySelector("h1");

heading.addEventListener("click", () => {
  if (heading.style.color == "red") {
    heading.style.color = "blue";
  } else {
    heading.style.color = "red";
  }
});

heading.addEventListener("click", () => {
  heading.style.color = heading.style.color === `red` ? `blue` : `red`;
});
