function pozdrav() {
  console.log("Čau, ja jsem martin");
}

pozdrav();

//první styl zápisu
function pozdrav2(firstName) {
  console.log("Vaše křestní jméno je " + firstName);
}

pozdrav2("Martin");

function multiplication(number1, number2) {
  return number1 * number2;
}

const result1 = multiplication(5, 10);
console.log(result1);

//druhý styl - šipková notace
const pozdrav1 = (nmbr1, nmbr2) => {
  return nmbr1 * nmbr2;
};

// const vysledek = pozdrav1(13, 15);
console.log(pozdrav1(14, 16));
