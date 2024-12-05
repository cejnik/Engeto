//<textarea class="message"></textarea>
//<p class="text-counter">0</p>

const textArea = document.querySelector(".message");
const textCounter = document.querySelector(".text-counter");

textArea.addEventListener("input", () => {
  const lettersCount = 80 - textArea.value.length;
  textCounter.textContent = lettersCount;

  if (lettersCount <= 20) {
    textArea.style.backgroundColor = "red";
  }
});
