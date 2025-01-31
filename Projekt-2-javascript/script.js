//BackToTopButton-----------------------------------------------------
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
    // Přidat bounce animaci při zobrazení tlačítka
    backToTopButton.classList.add("show-bounce");
  } else {
    backToTopButton.style.display = "none";
    // Odstranit bounce animaci, pokud je tlačítko skryté
    backToTopButton.classList.remove("show-bounce");
  }
};

// Funkce pro posun zpět na začátek s pomalým efektem
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//BackToTopButton-----------------------------------------------------
//DarkMode------------------------------------------------------------

const darkModeToggle = document.getElementById("dark-mode-toggle");

// Funkce pro přepnutí mezi světelným a temným režimem
function toggleDarkMode() {
  document.body.classList.toggle("dark"); // Přepne třídu "dark" na body
  const isDarkMode = document.body.classList.contains("dark"); // Zjištění, zda je aktivní temný režim

  // Změna textu tlačítka podle režimu
  if (isDarkMode) {
    darkModeToggle.textContent = "Light 🌞"; // Pokud je temný režim, text na tlačítku bude "Light"
  } else {
    darkModeToggle.textContent = "Dark 🌙"; // Pokud není temný režim, text na tlačítku bude "Dark"
  }
}

// Přidání event listeneru na tlačítko pro přepínání režimů
darkModeToggle.addEventListener("click", toggleDarkMode);
//DarkMode------------------------------------------------------------
//Menu for phone------------------------------------------------------
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] == "fa-bars") {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
    menuList.style.display = "none";
  }
});
//Menu for phone------------------------------------------------------
const email1ValidateValue = document.getElementById("email1");
const email2ValidateValue = document.getElementById("email2");
const resultText = document.getElementById("warning-text");
const messageField = document.getElementById("message");
const submitButton = document.getElementById("submit");

messageField.disabled = true;

// Funkce pro kontrolu shody e-mailů
function validateEmails() {
  if (!email1ValidateValue.value && !email2ValidateValue.value) {
    resultText.textContent = "";
  } else if (email1ValidateValue.value === email2ValidateValue.value) {
    resultText.textContent = "Emaily jsou shodné ✅";
    resultText.style.color = "green";
    messageField.disabled = false;
  } else {
    resultText.textContent = "Emaily nejsou shodné ❌";
    resultText.style.color = "red";
    messageField.disabled = true;
  }
}

// Události pro validaci při změně nebo opuštění polí
email1ValidateValue.addEventListener("input", validateEmails);
email2ValidateValue.addEventListener("input", validateEmails);

submitButton.addEventListener("click", () => {
  alert(message.value);
});
