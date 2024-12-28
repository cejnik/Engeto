const select = document.createElement('select');
document.body.appendChild(select);

const options = [
    {
        label: 'Choose an script',
        scriptfile: '',
    },
    {
        label: 'Play sound',
        scriptfile: 'play_sound.js',
    },
];

options.forEach((option) => {
    const opt = document.createElement('option');
    opt.value = option.scriptfile;
    opt.innerText = option.label;
    select.appendChild(opt);
});

select.addEventListener('change', () => {
    const script = document.getElementById('script');
    script.src = `./files/scripts/${select.value}`;
    document.body.appendChild(script);
});