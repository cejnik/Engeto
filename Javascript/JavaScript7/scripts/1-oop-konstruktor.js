// // Logika kódu

// // Použití
// const myBook = {
//   title: "Harry Potter a Kámen mudrců",
//   author: "J. K. Rowling",
//   year: 1997,
// };

// const myBook2 = {
//   title: "Harry Potter a Tajemná komnata",
//   author: "J. K. Rowling",
//   year: 1998,
// };

// const myBook3 = {
//   title: "Harry Potter a vezeň z Azkabanu",
//   author: "J. K. Rowling",
//   year: 1999,
// };

// Logika kódu
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

// Použití
const myBook = new Book("Harry Potter a Kámen mudrců", "J. K. Rowling", 1997);
console.log(myBook);

class Department {
  constructor(person, number) {
    this.person = person;
    this.number = number;
  }
}

const dep = new Department("Martin", 196);
console.log(dep);

class Car {
  constructor(color, seats, brand) {
    this.color = color;
    this.seats = seats;
    this.brand = brand;
  }
}

const car = new Car("červená", 4, "audi");
console.log(car);
