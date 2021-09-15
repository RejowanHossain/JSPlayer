const play = document.getElementById('play');
const togglePlayPause = document.getElementById('toggleIcon');
const audio = document.querySelector('audio');
const img = document.querySelector('img');

const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// song data
const songs = [{
        name: 'jsp-1',
        track: './assets/music/jsp-1.mp3',
        cover: './assets/images/jsp-1.jpeg',
        title: 'Emon Diney',
        artist: 'Warfaze',
    },
    {
        name: 'jsp-2',
        cover: './assets/images/jsp-2.jpg',
        track: './assets/music/jsp-2.mp3',
        title: 'Rezwan',
        artist: 'Grace - Ambient Mix',
    },
    // {
    //     name: 'jsp-3',
    //     cover: './assets/images/jsp-3.jpg',
    //     track: './assets/music/jsp-3.mp3',
    //     title: 'Hard Rock Riff',
    //     artist: 'Rezwan',
    // },
]


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

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);