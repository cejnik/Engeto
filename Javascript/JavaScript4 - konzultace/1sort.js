const array = [1, 7, 2, 65, 158, 1, 7, 150, 951];

//Nejmenší => největší

array.sort((a, b) => a - b);

console.log(array);

//největší => nejmenší
array.sort((a, b) => b - a);

console.log(array);

const array1 = [1, 7, 2, 65, 158, 1, 7, 150, 951];

// Seřazení od nejmenšího po největší a pak obrácení
array1.sort((a, b) => a - b).reverse();

console.log(array);
