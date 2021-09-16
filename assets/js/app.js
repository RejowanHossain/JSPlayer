const play = document.getElementById('play');
const togglePlayPause = document.getElementById('toggleIcon');
const audio = document.querySelector('audio');
const img = document.querySelector('img');

const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let progress = document.getElementById('progress');
let total_duration = document.getElementById('duration');
let total_currentTime = document.getElementById('current_time');

let progress_div = document.getElementById('progress_div');

// song data
const songs = [{
        name: 'jsp-1',
        track: './assets/music/jsp-1.mp3',
        cover: './assets/images/jsp-1.jpg',
        title: 'A night to remember',
        artist: 'Rezwan',
    },
    {
        name: 'jsp-2',
        cover: './assets/images/jsp-2.jpg',
        track: './assets/music/jsp-2.mp3',
        title: 'Outer Isolation',
        artist: 'Rezwan',
    },
    {
        name: 'jsp-3',
        cover: './assets/images/jsp-3.jpeg',
        track: './assets/music/jsp-3.mp3',
        title: 'Grace - Ambient Mix',
        artist: 'Rezwan',
    },
    {
        name: 'jsp-4',
        cover: './assets/images/jsp-4.jpg',
        track: './assets/music/jsp-4.mp3',
        title: 'Pulverized',
        artist: 'Rezwan',
    },
]


let isPlaying = false;

const playMusic = () => {
    isPlaying = true;
    audio.play();
    play.innerHTML = `<i class="fas fa-pause main_button"></i>`;
    play.classList.add('anime');
};

const pauseMusic = () => {
    isPlaying = false;
    audio.pause();
    play.innerHTML = `<i class="fas fa-play main_button"></i>`;
    play.classList.remove('anime');
};


play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
})

// change the song data
const loadSongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    img.src = songs.cover;
    audio.src = songs.track;
}

songIndex = 0;

const nextSong = () => {

    songIndex = (songIndex + 1) % songs.length;

    loadSongs(songs[songIndex]);

    playMusic();

}

const prevSong = () => {

    songIndex = (songIndex - 1 + songs.length) % songs.length;

    loadSongs(songs[songIndex]);

    playMusic();

}

// progress bar functionality

audio.addEventListener('timeupdate', (e) => {

    // destructuring elements from timeupdate event
    const { currentTime, duration } = e.srcElement;

    let progress_time = (currentTime / duration) * 100;

    progress.style.width = `${progress_time}%`;

    // music duration update
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);

    let update_duration = `${min_duration}: ${sec_duration}`;

    if (sec_duration < 10) {
        update_duration = `${min_duration}: 0${sec_duration}`;
    }

    if (duration) {
        total_duration.textContent = `${update_duration}`;
    }




    // current time update
    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);


    if (sec_currentTime < 10) {
        sec_currentTime = `0${sec_currentTime}`;
    }

    let update_currentTime = `${min_currentTime}: ${sec_currentTime}`;

    total_currentTime.textContent = `${update_currentTime}`;






})

// progress on click functinality

progress_div.addEventListener('click', (e) => {

    const { duration } = audio;
    let move_progress = (e.offsetX / e.srcElement.clientWidth) * duration;
    audio.currentTime = move_progress;
    audio.play();
})


// switches to next song when a song is ended
audio.addEventListener('ended', nextSong);


next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);