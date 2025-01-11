//Type asserion

const value: unknown = "Data z neznámého zdroje";
const strLength = (value as string).length;

console.log(strLength);

//Type asserion a html prvky

const input = document.getElementById("myInput") as HTMLInputElement;
const image = document.getElementById("image") as HTMLImageElement;

console.log(image.type); //očekávaný error, image nemá type.
