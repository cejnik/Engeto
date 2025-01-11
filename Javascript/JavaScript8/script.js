class Operace {
  constructor(a, b) {
    if (typeof a != "number" || typeof b != "number") {
      throw new Error("Operandy musí být čísla");
    }

    this.a = a;
    this.b = b;
  }

  /**
   * Abstraktní metoda vrací výsledek operace.
   * Vždy je potřeba ji přetížit (nahradit) v odvozené/dědické třídě
   *
   * @return number Výsledek operace s čísly A a B
   */
  result() {
    throw new Error("Metoda result musí být implementována");
  }
}

class Nasobeni extends Operace {
  /**
   * Vrací výsledek po násobení A a B
   */
  result() {
    return this.a * this.b;
  }
}

class Soucet extends Operace {
  result() {
    return this.a + this.b;
  }
}

class Minus extends Operace {
  result() {
    return this.a - this.b;
  }
}

class Deleno extends Operace {
  result() {
    return this.a / this.b;
  }
}

// iniciuji objekt operace s operandy A a B
const Op = new Nasobeni(4, 5);
console.log(Op.result());

// iniciuji objekt operace s operandy A a B
const Op2 = new Soucet(4, 5);
console.log(Op2.result());

const Op3 = new Minus(4, 5);
console.log(Op3.result());

const Op4 = new Deleno(4, 5);
console.log(Op4.result());
