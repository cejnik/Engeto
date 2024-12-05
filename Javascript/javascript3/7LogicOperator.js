// Logické operátory &&&&

// A && B, pravý Alt + C
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// const age = parseInt(prompt("Zadejte věk"));

// if (age >= 18 && age < 65) {
//   console.log("Dospělý, ale není v duchodu");
// } else if (age < 18) {
//   console.log("Není dospělý");
// } else {
//   console.log("Člověk v důchodu");
// }

//&& - zároven altgr + C

const doorCode = parseInt(prompt("Zadejte kód ke dveřím? "));

if (doorCode === 7223 || doorCode === 3189) {
  console.log("Dveře otevřeny");
} else {
  console.log("Špatný kód");
}

// || = pravý alt +w nebo shift levé lomítko
