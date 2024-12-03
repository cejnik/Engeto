const array = [1, 7, 2, 65, 158, 1, 7, 150, 951];
const filteredArray = array.filter((number) => {
  return number >= 100;
});

console.log(filteredArray);
