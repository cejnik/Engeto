// Každé písmeno na obrazovku vykreslit V jiné velikosti a barvě

const getRandomColor = () => rgb(   
  ${Math.floor(Math.random() * 255)},    
  ${Math.floor(Math.random() * 255)},   
  ${Math.floor(Math.random() * 255)}   
);

const getRandomFontSize = () => ${Math.floor(Math.random() * 200) + 50}px;

const renderString = (stringValue) => {
  for (let i = 0; i < stringValue.length; i++) {
    const span = document.createElement("span");
    span.innerText = stringValue[i];
    span.style.color = getRandomColor();
    span.style.fontSize = getRandomFontSize();
    document.body.append(span);
  }