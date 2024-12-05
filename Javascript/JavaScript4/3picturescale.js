const image1 = document.querySelector(".image1");
image1.addEventListener("mouseenter", () => {
  image1.style.transform = "scale(1.1)";
  console.log("Bylo najeto myší");
});
image1.addEventListener("mouseleave", () => {
  image1.style.transform = "scale(1)";
});
//const image1 = document.querySelector(".image2")
