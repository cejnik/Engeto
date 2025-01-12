// Data získané z formuláře
const user1: user = {
  name: "John",
  yearOfBirth: 1990,
  email: "john@example.com",
};

const user2: user = {
  name: "Jane",
  yearOfBirth: 1985,
};

// Type alias pro uživatele

type user = {
  name: string;
  yearOfBirth: number;
  email?: string;
};

// Funkce na výpočet věku uživatele

const calcutedYear = (myUser: user): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - myUser.yearOfBirth;
};

// Funkce na zobrazení uživatelských informací

const displayUserInfo = (myUser: user): string => {
  return `Uživatel ${myUser.name}, Věk: ${calcutedYear(myUser)}, Email: ${
    myUser.email || "Neuvedeno" //vyprintuj myUser.email nebo vypiš do konzole "Neuvedeno"
  }`;
};

console.log(displayUserInfo(user2));

// Výpis do konzole
