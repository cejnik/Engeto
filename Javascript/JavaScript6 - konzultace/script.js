const content = [
  [
    "Title 1",
    "image_1.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, voluptate, quia quod quos voluptas exercitationem quas voluptatibus quidem doloribus. Quisquam quia quod quos voluptas.",
  ],
  [
    "Title 2",
    "image_2.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, voluptate, quia quod quos voluptas exercitationem quas voluptatibus quidem doloribus. Quisquam quia quod quos voluptas.",
  ],
  [
    "Title 3",
    "image_3.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, voluptate, quia quod quos voluptas exercitationem quas voluptatibus quidem doloribus. Quisquam quia quod quos voluptas.",
  ],
  [
    "Title 4",
    "image_4.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, voluptate, quia quod quos voluptas exercitationem quas voluptatibus quidem doloribus. Quisquam quia quod quos voluptas.",
  ],
];

const generateArticles = (articles) => {
  articles.forEach((article) => {
    const articleWrapper = document.createElement("div");
    const heading = document.createElement("h3");
    const content = document.createElement("p");

    heading.textContent = article[0];
    content.textContent = article[2];

    articleWrapper.appendChild(heading);
    articleWrapper.appendChild(content);
    document.body.appendChild(articleWrapper);
  });
};

generateArticles(content);
