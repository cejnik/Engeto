const formular = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const notName = document.querySelector(".notifName");
const notEmail = document.querySelector(".notifEmail");

formular.addEventListener("submit", (event) => {
  event.preventDefault();
  if (fullName.value === "") {
    notName.style.display = "block";
  }

  if (email.value === "") {
    notEmail.style.display = "block";
  }

  fullName.value = "";
  email.value = "";
});

//event se píše do funkce, aby vypnul defaultní nastavení browseru
//event.preventDefault(); tato funkce drží formulář.
