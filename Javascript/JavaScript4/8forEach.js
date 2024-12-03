const studentsSection = document.querySelector(".students-list");
const students = [
  "David",
  "Harry",
  "Ron",
  "Hermiona",
  "Draco",
  "Crabbe",
  "Goyle",
];

students.forEach((oneStudent) => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = oneStudent;
  studentsSection.append(newParagraph);
});
