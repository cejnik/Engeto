const quoteSection = document.querySelector(".result");

const addToWebsite = (tag, content, whereToAdd) => {
  const htmlTag = document.createElement(tag);
  htmlTag.textContent = content;
  whereToAdd.append(htmlTag);
};

// lepší řešení
// const fetchData = (url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       addToWebsite("p", data.quote, quoteSection);
//     });
// };

// fetchData("https://api.kanye.rest/");

// const request = fetch("https://api.kanye.rest/")
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data.quote);
//     addToWebsite("p", data.quote, quoteSection);
//   });

//Alternativa k fetchData

const fetchData = async () => {
  const response = await fetch("https://api.kanye.rest/");
  const data = await response.json();
  console.log(data.quote);
};

fetchData();
