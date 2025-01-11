const quoteSection = document.querySelector(".result");

const addToWebsite = (tag, content, whereToAdd) => {
  const htmlTag = document.createElement(tag);
  htmlTag.textContent = content;
  whereToAdd.append(htmlTag);
};

//lepší řešení
const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      quoteSection.textContent = "";
      addToWebsite("p", data.iss_position.latitude, quoteSection);
      addToWebsite("p", data.iss_position.longitude, quoteSection);
    });
};

setInterval(() => {
  fetchData("http://api.open-notify.org/iss-now.json");
}, 3000);
