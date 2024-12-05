//Refactoring
const email1 = document.querySelector(".email1");
const email2 = document.querySelector(".email2");
const paragraphText = document.querySelector(".result-text");

//Function--------------------------------------------------------
const getInputValue = (input) => {
  return input.value;
};

const insertContent = (htmlTag, content) => {
  htmlTag.textContent = content;
};

const addClass = (htmlTag, className) => {
  htmlTag.classList.add(className);
};

const removeClass = (htmlTag, className) => {
  htmlTag.classList.remove(className);
};

const htmlTagCleaner = (input1value, input2value, htmlTag) => {
  if (input1value == "" && input2value == "") {
    htmlTag.textContent = "";
  }
};
//----------------------------------------------------------------

email1.addEventListener("input", () => {
  //Control point for input 1
  const email1value = getInputValue(email1);
  const email2value = getInputValue(email2);

  if (email1value == email2value) {
    insertContent(paragraphText, "Emaily jsou shodné");
    addClass(paragraphText, "valid");
    removeClass(paragraphText, "invalid");
  } else {
    insertContent(paragraphText, "Emaily nejsou shodné");
    addClass(paragraphText, "invalid");
    removeClass(paragraphText, "valid");
  }
  htmlTagCleaner(email1value, email2value, paragraphText);
});

email2.addEventListener("input", () => {
  //Control point for input 2
  const email1value = getInputValue(email1);
  const email2value = getInputValue(email2);

  if (email1value == email2value) {
    insertContent(paragraphText, "Emaily jsou shodné");
    addClass(paragraphText, "valid");
    removeClass(paragraphText, "invalid");
  } else {
    insertContent(paragraphText, "Emaily nejsou shodné");
    addClass(paragraphText, "invalid");
    removeClass(paragraphText, "valid");
  }
  htmlTagCleaner(email1value, email2value, paragraphText);
});
