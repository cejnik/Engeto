const value: unknown = "Data z neznámého zdroje";

const strLength = (value as string).length; //přetypuje hodnotu value na string a poté spočítá její délku

console.log(strLength);
