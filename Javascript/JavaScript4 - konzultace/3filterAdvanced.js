/**
 * Accepts array, filters it based on value parameter and return
 * filtered array
 * @param {array} array - array to filter
 * @param {number} value - seach value
 * @return {array}
 * */

//řešení dle chatGPT s ES6+ metodou
// const findNumbers = (array, value) => {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= value) {
//       result.push(array[i]);
//     }
//   }
// };

//

const findNumber = (array, value) => {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      filteredArray[filteredArray.length] = value;
    }
  }

  return filteredArray;
};

console.log(findNumber([50, 25, 30, 25, 1], 25));
