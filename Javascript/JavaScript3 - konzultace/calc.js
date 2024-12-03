// const calculate = (firstNo, secondNo, operation) => {
//     switch (operation) {
//       case "+":
//         return firstNo + secondNo;
//       case "-":
//         return firstNo - secondNo;
//       case "*":
//         return firstNo * secondNo;
//       case "/":
//         return firstNo / secondNo;
//       default:
//         return "Neznámá operace";
//     }
//   };

const calculation = (firstNo, secondNo, operation) => {
  if (operation == "+") return firstNo + secondNo;
  if (operation == "-") return firstNo - secondNo;
  if (operation == "*") return firstNo * secondNo;
  if (operation == "/") return firstNo / secondNo;
  return "Neznámá operace";
};
const getElementantByClassNameAndAssignContent = (content, className) => {
  const resultEl = document.querySelector(`.${className}`);
  resultEl.textContent = content;
};

const app = () => {
  const firstNumber = parseFloat(prompt("Zadej první číslo? "));
  const secondNumber = parseFloat(prompt("Zadej druhé číslo? "));
  const operation = prompt("Zadej operaci? + / * - ?");

  const result = calculation(firstNumber, secondNumber, operation);

  getElementantByClassNameAndAssignContent(result, "calc-result");
};

app();
