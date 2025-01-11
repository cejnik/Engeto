//Void Type
const sayHello = (firstName: string): void => {
  console.log("Hello " + firstName);
  //void - návratová datový typ, který nic nevrací.
};

sayHello("Martin");

//Never type -vrací chybu, nikdy nekončící hodnotu
const errorFunction = (errorText: string): never => {
  throw new Error(errorText);
};

const result = errorFunction("Pozor chyba!!!!");
console.log(result);
