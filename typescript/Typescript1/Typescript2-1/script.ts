//Logika kódu

//Zapouzdření
//Dědičnost
//Polymorfismus
//Abstrakce
class Book {
  public readonly title: string;
  public readonly author: string;
  public readonly year: number;
  public readonly material = "paper";
  protected bookNumber: string; //aby to sdědil Bestseller

  constructor(title: string, author: string, year: number, bookNumber: string) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.bookNumber = bookNumber;
  }

  //Další metoda
  bookInfo() {
    return `${this.title} je kniha napsala ${this.author} a byla vydána v roce ${this.year}. Kniha má kód ${this.bookNumber}`;
  }
}

class Bestseller extends Book {}

//Použití kódu
const book1 = new Book(
  "Harry Potter 1",
  "J.K. Rowling",
  1997,
  "a54sda12sd21a54d21as"
);
const book2 = new Book(
  "Harry Potter 2",
  "J.K. Rowling",
  1998,
  "wq54dj54oi78dwqd12o"
);
const book3 = new Book(
  "Harry Potter 3",
  "J.K. Rowling",
  1999,
  "q21dok54pwq54dpko3wd"
);

const bestSeller1 = new Bestseller(
  "Harry Potter 1",
  "J.K. Rowling",
  1997,
  "a54sda12sd21a54d21as"
);

// book1.title = "Nový název knihy";
console.log(book1.title);
console.log(book1.material);

console.log(book1.bookInfo());
console.log(book2.bookInfo());
console.log(book3.bookInfo());

//public - je přístupné uvnitř classy, ale také mimo classu
//private - je přístupná pouze uvnitř clasy, nikoliv objektu
//protected - je pouze přístupní v classe, a jejich dědicích. Nikoliv mimo classu
//abstract před classou - mohu z toho jen dědit
