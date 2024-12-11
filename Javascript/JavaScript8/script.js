class CoffeeMachine {
  constructor() {
    this.waterlevel = 150; //výchozí množství vody v ml
  }
  /**
   *
   * @returns boolean
   */
  needsRefil() {
    return this.waterlevel < 200;
  }

  /**
   * Tato funnkce přidíví vody v zadaném množství do zásobníku
   * @param {*} amount
   *
   * @param number Možnoství vody v mol.
   */

  addWater(amount) {
    if (typeof amount !== "number")
      throw new Error("Parameter is not a number");
    this.waterlevel += amount;
    console.log(
      `Added ${amount}ml of water. Currenly there is ${this.waterlevel} ml of water.`
    );
  }

  /**
   * tato funkce vaří kávu, nejdřív zkontroluje hladinu vody v zásobníku.
   *
   * @throws Není dostatek vody
   */

  brew() {
    if (this.needsRefil()) {
      throw new Error("Je nutné přidat vodu.");
    }

    this.waterlevel = this.waterlevel - 200;
    console.log("Here is your coffee");
  }
}

const newCoffeeMachine = new CoffeeMachine();

try {
  newCoffeeMachine.brew();
} catch (e) {
  newCoffeeMachine.addWater(50);
}

newCoffeeMachine.brew();

class TeaMachine extends CoffeeMachine {
  /**
   * Indikuje, že je potřeba doplnit vodu
   *
   * @returns boolean
   */
  needsRefill() {
    return this.waterLevel < 500;
  }
}
