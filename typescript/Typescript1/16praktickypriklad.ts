// Type alias pro uživatele
type User = {
  name: string;
  yearOfBirth: number;
  email?: string;
};

// Funkce na výpočet věku uživatele
const calculateAge = (myUser: User): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - myUser.yearOfBirth;
};

// Funkce na zobrazení uživatelských informací
const displayUserInfo = (myUser: User): string => {
  const userAge = calculateAge(myUser);
  return `Uživatel ${myUser.name}, Věk: ${userAge}, Email: ${
    myUser.email || "neuveden"
  }`;
};

// Funkce pro zpracování formuláře
document.getElementById("userForm")?.addEventListener("submit", (e) => {
  e.preventDefault(); // Zabrání výchozímu chování (načtení stránky)

  // Získání hodnot z formuláře
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const yearOfBirth = parseInt(
    (document.getElementById("yearOfBirth") as HTMLInputElement).value
  );
  const email =
    (document.getElementById("email") as HTMLInputElement).value || undefined;

  // Vytvoření objektu uživatele
  const user: User = {
    name,
    yearOfBirth,
    email,
  };

  // Zobrazení informací o uživateli
  const createUserInfoParagraph = (): HTMLParagraphElement => {
    const p = document.createElement("p");
    p.textContent = displayUserInfo(user);
    return p;
  };

  const userInfo = document.getElementById("userInfo") as HTMLDivElement | null;
  userInfo?.append(createUserInfoParagraph());

  // Vyčištění formuláře
  (document.getElementById("userForm") as HTMLFormElement).reset();
});
