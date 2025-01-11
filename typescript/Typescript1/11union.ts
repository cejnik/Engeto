//Union Types

let age: number | string = 50;
age = "padesát";

let firstName: null | string = null;
firstName = "David";
fisrtName = null;

const getValue = (num: number): number | string => {
  if (num % 2 === 0) {
    return num * 2;
  } else {
    return `Číslo ${num} je liché`;
  }
};

// Příklady použití:
console.log(getValue(4));
console.log(getValue(7));
