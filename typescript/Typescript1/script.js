var _a;
// Funkce na výpočet věku uživatele
var calculateAge = function (myUser) {
    var currentYear = new Date().getFullYear();
    return currentYear - myUser.yearOfBirth;
};
// Funkce na zobrazení uživatelských informací
var displayUserInfo = function (myUser) {
    var userAge = calculateAge(myUser);
    return "U\u017Eivatel ".concat(myUser.name, ", V\u011Bk: ").concat(userAge, ", Email: ").concat(myUser.email || "neuveden");
};
// Funkce pro zpracování formuláře
(_a = document.getElementById("userForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault(); // Zabrání výchozímu chování (načtení stránky)
    // Získání hodnot z formuláře
    var name = document.getElementById("name").value;
    var yearOfBirth = parseInt(document.getElementById("yearOfBirth").value);
    var email = document.getElementById("email").value || undefined;
    // Vytvoření objektu uživatele
    var user = {
        name: name,
        yearOfBirth: yearOfBirth,
        email: email,
    };
    // Zobrazení informací o uživateli
    var createUserInfoParagraph = function () {
        var p = document.createElement("p");
        p.textContent = displayUserInfo(user);
        return p;
    };
    var userInfo = document.getElementById("userInfo");
    userInfo === null || userInfo === void 0 ? void 0 : userInfo.append(createUserInfoParagraph());
    // Vyčištění formuláře
    document.getElementById("userForm").reset();
});
