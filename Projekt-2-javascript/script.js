const backToTopButton = document.getElementById("back-to-top");

window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";

    backToTopButton.classList.add("show-bounce");
  } else {
    backToTopButton.style.display = "none";

    backToTopButton.classList.remove("show-bounce");
  }
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const darkModeToggle = document.getElementById("dark-mode-toggle");

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDarkMode = document.body.classList.contains("dark");

  if (isDarkMode) {
    darkModeToggle.textContent = "Light 🌞";
  } else {
    darkModeToggle.textContent = "Dark 🌙";
  }
}

darkModeToggle.addEventListener("click", toggleDarkMode);

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

const email1ValidateValue = document.getElementById("email1");
const email2ValidateValue = document.getElementById("email2");
const resultText = document.getElementById("warning-text");
const messageField = document.getElementById("message");
const submitButton = document.getElementById("submit");

messageField.disabled = true;

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

email1ValidateValue.addEventListener("input", validateEmails);
email2ValidateValue.addEventListener("input", validateEmails);

submitButton.addEventListener("click", () => {
  alert(message.value);
});
