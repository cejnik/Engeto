//Logika kódu
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Zapouzdření
//Dědičnost
//Polymorfismus
//Abstrakce
var Book = /** @class */ (function () {
    function Book(title, author, year, bookNumber) {
        this.material = "paper";
        this.title = title;
        this.author = author;
        this.year = year;
        this.bookNumber = bookNumber;
    }
    //Další metoda
    Book.prototype.bookInfo = function () {
        return "".concat(this.title, " je kniha napsala ").concat(this.author, " a byla vyd\u00E1na v roce ").concat(this.year, ". Kniha m\u00E1 k\u00F3d ").concat(this.bookNumber);
    };
    return Book;
}());
var Bestseller = /** @class */ (function (_super) {
    __extends(Bestseller, _super);
    function Bestseller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bestseller;
}(Book));
//Použití kódu
var book1 = new Book("Harry Potter 1", "J.K. Rowling", 1997, "a54sda12sd21a54d21as");
var book2 = new Book("Harry Potter 2", "J.K. Rowling", 1998, "wq54dj54oi78dwqd12o");
var book3 = new Book("Harry Potter 3", "J.K. Rowling", 1999, "q21dok54pwq54dpko3wd");
var bestSeller1 = new Bestseller("Harry Potter 1", "J.K. Rowling", 1997, "a54sda12sd21a54d21as");
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
