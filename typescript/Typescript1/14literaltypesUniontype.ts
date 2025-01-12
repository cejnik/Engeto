type TestResult = {
  firstPart: number;
  secondPard: number;
};

const allResults: TestResult[] = [
  { firstPart: 80, secondPard: 20 },
  { firstPart: 33, secondPard: 44 },
];

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

const clearNumber = (oneNumber: string | number): number => {
  if (typeof oneNumber === "string") {
    oneNumber = parseFloat(oneNumber.replace("$", ""));
    return oneNumber;
  }
  return oneNumber;
};

console.log(clearNumber("$100"));
console.log(clearNumber(100));

//Literal Types

type DayOfWeek = "po" | "út" | "st" | "čt" | "pá" | "so" | "ne";

type DayOfWeek = "po" | "út" | "st" | "čt" | "pá" | "so" | "ne";

const today: DayOfWeek = "po";
const yesterday: DayOfWeek = "út";

//Procvičení

type direction = "north" | "south" | "east" | "west";

const randomDirection: direction = "north";

console.log(randomDirection);
