const sounds = [
    { name: '好了啦我柒左了喇', file: 'sound1.mp3' },
    { name: '垃圾車', file: 'sound2.mp3' },
    // 添加更多聲音文件
];

const soundboard = document.getElementById('soundboard');

sounds.forEach(sound => {
    const button = document.createElement('button');
    button.classList.add('sound-button');
    button.innerText = sound.name;
    button.onclick = () => {
        const audio = new Audio(`sounds/${sound.file}`);
        audio.play();
    };
    soundboard.appendChild(button);
});