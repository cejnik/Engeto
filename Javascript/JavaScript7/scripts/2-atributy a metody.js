// Logika kódu
class Book {
  constructor(title, author, year, price) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
  }
  // metoda na změnu ceny
  changePriceCurrency(amount) {
    this.price = this.price + amount;
  }

  // metoda na změnu ceny pomocí %
  changePricePercent(percentage) {
    this.price = this.price + (percentage / 100) * this.price;
  }
}

// Použití
const myBook = new Book(
  "Harry Potter a Kámen mudrců",
  "J. K. Rowling",
  1997,
  300
);

myBook.changePriceCurrency(50);
myBook.changePricePercent(10);

console.log(myBook);
console.log(myBook.price);
console.log(myBook.price);
