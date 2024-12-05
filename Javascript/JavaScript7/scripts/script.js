class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        alert(`Ahoj, jmenuji se ${this.name} a je mi ${this.age} let`);
    }
}

const P1 = new Person("Šimon Janča", 26);

const P2 = new Person("Krteček", 16);

//P2.greet();

function Peerson(name, byear) {
    const age = (new Date).getFullYear() - byear

    return {
        name: name,
        age: age,
        greet: function() {
            alert(`Ahoj, jmenuji se ${this.name} a je mi ${this.age} let`);
        }
    }
}

const P3 = Peerson("Šimon Janča", 1998);

//P3.greet();

const P4 = {
    name: "Šimon",
    age: 42,

    greet: function () {
        alert(`Ahoj, jmenuji se ${this.name} a je mi ${this.age} let`);
    }
};

//P4.greet();

class Car {
    model = "Škoda";

    constructor(date, maxSpeed, model = "") {
        if (model != ""){
            this.model = model;
        }

        this.date = date;
        this.maxSpeed = maxSpeed;
    }

    run(speed){
        if (typeof speed != 'number') {
            throw new Error('Chybné číslo.');
        }

        if (speed > this.maxSpeed){
            throw new Error('Zavařil jsi auto');
        }

        console.log("A jedem!!!");
    }
}

try{
    const skodovka = new Car(1234, 40);
    skodovka.run(30);
} catch (error) {
    console.log("Přátelská chybová hláška. Ahoj!", error)
}

const [a, b] = [1, 2];

const {c, d} = {
    c: 3,
    d: 4,
}

console.log(a, b, c, d);

function abcd(args){
    const {a, b, c, d} = args;


    console.log(a + b, c, d);
}

abcd({
    a: 42,
    b: 13,
    c: "ahoj",
    d: "xyz",
})