const play = document.getElementById('play');
const togglePlayPause = document.getElementById('toggleIcon');
const audio = document.querySelector('audio');
const img = document.querySelector('img');

let isPlaying = false;


const playMusic = () => {
    isPlaying = true;
    audio.play();
    play.innerHTML = `<i class="fas fa-pause main_button"></i>`;
    img.classList.add('anime');
};

const pauseMusic = () => {
    isPlaying = false;
    audio.pause();
    play.innerHTML = `<i class="fas fa-play main_button"></i>`;
    img.classList.remove('anime');
};



play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
})