//Type alias

//šablona datových typů
type User = {
  name: string;
  age: number;
  email: string;
};

const john: User = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
};

const anna: { name: string; age: number; email: string } = {
  name: "Anna Doe",
  age: 28,
  email: "anna@example.com",
};
