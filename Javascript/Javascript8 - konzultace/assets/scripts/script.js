const zoo = document.getElementById('zoo');

class Animal {
  name = ""
  age = ""
  img = ""
  sound = null
  legCount = ""

  constructor(name, age, img, sound){
    if (typeof name != "string" || name.length < 3){
      throw new Error("Jméno musí být aspoň 3 znaky");
    }
    if (typeof age != 'number' || age < 0 || age > 200){
      throw new Error("Zadejte platný věk");
    }
    if (typeof img != 'string' || img.length < 3){
      throw new Error("Zadejte platnou adresu souboru");
    }
    if (typeof sound != 'string' || sound.length < 3){
      throw new Error("Zadejte platnou adresu souboru");
    }

    const audio = new Audio(sound);
    if (!audio){
      throw new Error("Vložte platný zvukový soubor");
    }

    this.name = name;
    this.age = age;
    this.img = img;
    this.sound = audio;
  }

  render(zoo){
    if (typeof zoo !== 'object'){
      throw new Error("Musí být objekt");
    }

    const anim = document.createElement('div');
    anim.classList.add('animal');

    const h3 = document.createElement('h3');
    h3.innerText = this.name;

    const p = document.createElement('p');
    p.innerText = `Jmenuji se ${this.name} a je mi ${this.age} a mám ${this.legCount} nohou`;

    const img = document.createElement('img');
    img.src = this.img;

    anim.appendChild(h3);
    anim.appendChild(p);
    anim.appendChild(img);

    zoo.appendChild(anim);

    // zvuk se přehrává nebo ne
    let playing = false;
    anim.addEventListener('click', () => {
      if (playing){
        this.sound.pause();
        playing = false;
      } else {
        this.sound.currentTime = 0;
        this.sound.play();
        playing = true;
      }
    });
  }
}

class Dog extends Animal {
  legCount = 4;
}

class Duck extends Animal {
  legCount = 2;
}

class Fox extends Animal {
  legCount = 4;
}

const zvirata = [
  [Dog, 'Ben', 4, './assets/img/dog1.png', './assets/sound/woof1.mp3'],
  [Dog, 'Ben', 4, './assets/img/dog2.png', './assets/sound/woof2.mp3'],
  [Duck, 'Donald', 4, './assets/img/duck.png', './assets/sound/duck-quack.mp3'],
  [Fox, 'Foxy', 4, './assets/img/foxy.png', './assets/sound/fox.mp3'],
];

const ZvirataObjects = zvirata.map(
  (zvire) => {
    const Zvire = new zvire[0](zvire[1], zvire[2], zvire[3], zvire[4]);

    Zvire.render(zoo);

    return Zvire;
  }
);

console.log(ZvirataObjects);