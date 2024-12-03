console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

// Zaokrouhlování
console.log(Math.round(5.8));
console.log(Math.round(5.2));
console.log(Math.round(5.5));

//Zaokrouhlování vždy nahoru
console.log(Math.ceil(3.1));
console.log(Math.ceil(3.1));
//Zaokrouhlování vždy dolu
console.log(Math.floor(3.1));
console.log(Math.floor(3.9));
//zaokrouhlová na určitý počet míst

const number = 2.26262626;
console.log(parseFloat(number.toFixed(2)));

// Náhodná číslo s zaokrouhlením
console.log(Math.ceil(Math.random() * 6));

//Podmínka kdyby 0, ale sance je skoro nulová
console.log(Math.floor(Math.random() * 6) + 1);
