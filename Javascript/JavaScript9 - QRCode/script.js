const qrImage = document.getElementById("qrImage");
const inputText = document.getElementById("qrText");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (inputText.value.length > 0) {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`;

    const request = fetch(url).then((response) => {
      qrImage.src = response.url;
    });
  }
});
