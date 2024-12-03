const array1 = [1, 4, 19, 16, 8, 9, 26, 30];
const result = array1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(result);
