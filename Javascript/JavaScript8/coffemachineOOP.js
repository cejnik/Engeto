class CoffeeMachine {
  constructor() {
    this.waterLevel = 150;
  }

  /**
   * Indikuje, že je potřeba doplnit vodu
   *
   * @returns boolean
   */
  needsRefill() {
    return this.waterLevel < 200;
  }

  /**
   * Hláška po přidání vody do zásobníku
   *
   * @param Number Množství vody v ml
   *
   * @returns
   */
  _messageAddedWater(amount) {
    return `Added ${amount}ml of water, currently theres ${this.waterLevel}ml of water`;
  }

  /**
   * Hláška při výdeji nápoje
   *
   * @returns
   */
  _messageBrewing() {
    return "Brewing coffee";
  }

  /**
   * Přidává vodu v zadaném množství do zásobníku
   *
   * @throws Argument není číslo
   *
   * @param Number Množství vody v ml
   */
  addWater(amount) {
    if (typeof amount !== "number") {
      throw new Error("Parameter is not a number");
    }

    this.waterLevel = this.waterLevel + amount;
    console.log(this._messageAddedWater(amount));
  }

  /**
   * Tato funkce vaří kávu, nejdříve zkontroluje hladinu vody v zásobníku
   *
   * @throws Není dostatek vody v zásobníku
   */
  brew() {
    if (this.needsRefill()) {
      throw new Error("Need to refeill the water");
    }

    this.waterLevel = this.waterLevel - 200;
    console.log(this._messageBrewing());
  }
}

/**
 * Obsahuje objekt kávovaru ze třídy CoffeeMachine
 */
/* const myCoffeeMachine = new CoffeeMachine;
  
  try{
    myCoffeeMachine.brew();
  } catch(error){
    myCoffeeMachine.addWater(200);
  }
  
  myCoffeeMachine.brew(); */

class TeaMachine extends CoffeeMachine {
  /**
   * Indikuje, že je potřeba doplnit vodu, čaj vyžaduje více vody než kafe
   *
   * @returns boolean
   */
  needsRefill() {
    return this.waterLevel < 500;
  }

  /**
   * Přetěžuji originální metodu, měním hlášku
   *
   * @returns
   */
  _messageBrewing() {
    return "Brewing tea";
  }
}

/**
 * Obsahuje objekt kávovaru ze třídy CoffeeMachine
 */
const myTeaMachine = new TeaMachine();

try {
  myTeaMachine.brew();
} catch (error) {
  myTeaMachine.addWater(400);
}

myTeaMachine.brew();
