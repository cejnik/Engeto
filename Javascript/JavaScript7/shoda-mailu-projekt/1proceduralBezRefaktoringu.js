const email1 = document.querySelector(".email1");
const email2 = document.querySelector(".email2");
const paragraphText = document.querySelector(".result-text");

email1.addEventListener("input", () => {
  //kontrola u inputu č1
  const email1value = email1.value;
  const email2value = email2.value;

  if (email1value == email2value) {
    paragraphText.textContent = "Emaily jsou shodné";
    paragraphText.classList.add("valid");
    paragraphText.classList.remove("invalid");
  } else {
    paragraphText.textContent = "Emaily nejsou shodné";
    paragraphText.classList.add("invalid");
    paragraphText.classList.remove("valid");
  }
  if (email1value == "" && email2value == "") {
    paragraphText.textContent = "";
  }
});

email2.addEventListener("input", () => {
  //kontrola u inputu č2
  const email1value = email1.value;
  const email2value = email2.value;

  if (email1value == email2value) {
    paragraphText.textContent = "Emaily jsou shodné";
    paragraphText.classList.add("valid");
    paragraphText.classList.remove("invalid");
  } else {
    paragraphText.textContent = "Emaily nejsou shodné";
    paragraphText.classList.add("invalid");
    paragraphText.classList.remove("valid");
  }
  if (email1value == "" && email2value == "") {
    paragraphText.textContent = "";
  }
});
