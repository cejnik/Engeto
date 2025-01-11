// Funkce
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(sum(5, 10));
// console.log(sum('David', 'Šetek')); //chyba
// Zadávám čísla, v obou typech a výsledek očekávám jako number

//Úkol_1
const introduction = (firstName: string, secondName: string): string => {
  return `${firstName} ${secondName}`;
};

console.log(introduction("David", "Šetek"));

//Úkol_2
const crimeDescription = (
  firstName: string,
  secondName: string,
  crime: string
): string => {
  return `${firstName} ${secondName} spáchal zločin: ${crime}`;
};

console.log(crimeDescription("John", "Dow", "výtržnosti"));

//Úkol_3

const square = (num: number): number => {
  return num * num;
};

square(5);
