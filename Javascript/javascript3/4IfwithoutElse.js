const firstName = prompt("Zadejte křestní jméno");

if (firstName != "") {
  console.log("Vaše křestní jméno je " + firstName);
}

if (firstName.includes("a")) {
  console.log("Křestní jméno obsahuje písmeno a");
}
