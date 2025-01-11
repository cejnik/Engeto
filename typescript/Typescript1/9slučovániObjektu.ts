type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  jobTitle: string;
};

type PersonEmploeyee = Person & Employee;

const employee1: PersonEmploeyee = {
  name: "John",
  age: 30,
  company: "tech Co.",
  jobTitle: "Developer",
};
