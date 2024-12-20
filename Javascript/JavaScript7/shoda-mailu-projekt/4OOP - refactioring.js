/*******************
       Logika
********************/
class TwoContentChecker {
  constructor(twoHTMLtags) {
    this.twoHTMLtags = twoHTMLtags;
  }

  // Funkce
  // - načtení hodnot z políček formuláře
  getInputContent = (input) => {
    return input.value;
  };
  // - naplnění odstavce
  insertContent = (htmlTag, content) => {
    htmlTag.textContent = content;
  };
  // - přidání a odebrání classy
  addClass = (htmltag, className) => {
    htmltag.classList.add(className);
  };
  removeClass = (htmltag, className) => {
    htmltag.classList.remove(className);
  };
  // - vymazání textu v dostavci, pokud jsou políčka prázdná
  htmlTagCleaner = (input1value, input2value, htmlTag) => {
    if (input1value == "" && input2value == "") {
      htmlTag.textContent = "";
    }
  };
}

/*******************
         Použití
  ********************/
const emailInputs = document.querySelectorAll(".email-input");
const paragraphText = document.querySelector(".result-text");

const inputChecker = new TwoContentChecker(emailInputs);

inputChecker.twoHTMLtags.forEach((oneInput) => {
  oneInput.addEventListener("input", () => {
    const email1Value = inputChecker.getInputContent(
      inputChecker.twoHTMLtags[0]
    );
    const email2Value = inputChecker.getInputContent(
      inputChecker.twoHTMLtags[1]
    );

    if (email1Value == email2Value) {
      inputChecker.insertContent(paragraphText, "Emaily jsou shodné");
      inputChecker.addClass(paragraphText, "valid");
      inputChecker.removeClass(paragraphText, "invalid");
    } else {
      inputChecker.insertContent(paragraphText, "Emaily nejsou stejné");
      inputChecker.addClass(paragraphText, "invalid");
      inputChecker.removeClass(paragraphText, "valid");
    }

    inputChecker.htmlTagCleaner(email1Value, email2Value, paragraphText);
  });
});
