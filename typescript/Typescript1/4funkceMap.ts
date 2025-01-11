const students = ["david", "hermiona", "Ron"];

const newStudents = students.map((oneStudent: string) => {
  return oneStudent.toUpperCase();
});

console.log(newStudents);
