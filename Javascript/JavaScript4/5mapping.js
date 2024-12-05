const array1 = [1, 4, 9, 16];
const result = array1.map((oneNumber) => {
  return oneNumber * 2;
});
console.log(result);

// Jiný zápis
// const array1 = [1, 4, 9, 16]
// const result = array1.map( oneNumber => oneNumber * 2 )
// console.log(result)

const array2 = [1, 4, 19, 16, 8, 9, 26, 30];
const result1 = array2.filter((oneNumber) => {
  return oneNumber >= 10;
});
console.log(result1);
