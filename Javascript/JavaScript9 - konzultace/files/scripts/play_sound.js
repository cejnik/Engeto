const button = document.createElement('button');
document.body.appendChild(button);

button.innerText = 'Play sound';

const audio = new Audio('../assets/sound/pisnicka.mp3');

let playing = false;

button.addEventListener('click', () => {
    if (playing) {
        audio.pause();
        playing = false;
    } else {
        audio.play();
        playing = true;
    }
});