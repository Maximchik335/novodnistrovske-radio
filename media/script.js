<script>
// Список пісень для демонстрації
const songs = [
    { id: 1, title: "Червона рута", artist: "Софія Ротару" },
    { id: 2, title: "Стефанія", artist: "Kalush Orchestra" },
    { id: 3, title: "Ой у лузі червона калина", artist: "Бумбокс" },
    { id: 4, title: "Плакала", artist: "KAZKA" },
    { id: 5, title: "Тримай", artist: "Океан Ельзи" }
];

let currentSong = null;
let repeat = false;
let favorites = [];

// Пошук пісень за назвою або артистом
function searchSongs() {
    const searchTerm = document.getElementById('searchQuery').value.toLowerCase();
    const filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );
    displaySongs(filteredSongs);
}

// Відображення пісень у списку
function displaySongs(songsToDisplay) {
    const songList = document.getElementById('song-list');
    songList.innerHTML = ''; // Очищаємо поточний список пісень
    songsToDisplay.forEach(song => {
        const songItem = document.createElement('div');
        songItem.className = 'song-item';
        songItem.innerHTML = `
            <span>${song.title} - ${song.artist}</span>
            <button onclick="playSong(${song.id})">▶️</button>
        `;
        songList.appendChild(songItem);
    });
}

// Відтворення вибраної пісні
function playSong(songId) {
    currentSong = songs.find(song => song.id === songId);
    const titleElem = document.getElementById('current-title');
    const artistElem = document.getElementById('current-artist');
    titleElem.textContent = `Зараз грає: ${currentSong.title}`;
    artistElem.textContent = currentSong.artist;
    document.getElementById('current-song').style.display = 'block';
}

// Випадкове відтворення пісні
function playRandomSong() {
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    playSong(randomSong.id);
}

// Увімкнення/вимкнення повтору пісні
function toggleRepeat() {
    repeat = !repeat;
    alert(repeat ? "Повторення увімкнено" : "Повторення вимкнено");
}

// Додавання пісні в улюблені
function addToFavorites() {
    if (!currentSong) return;
    if (!favorites.includes(currentSong.id)) {
        favorites.push(currentSong.id);
        const favoritesList = document.getElementById('favorites-list');
        const favoriteItem = document.createElement('li');
        favoriteItem.textContent = `${currentSong.title} - ${currentSong.artist}`;
        favoritesList.appendChild(favoriteItem);
        alert(`Пісня "${currentSong.title}" додана в улюблені!`);
    } else {
        alert("Ця пісня вже в улюблених!");
    }
}

// 🎚 Мікшер гучності
const audioPlayer = document.getElementById('audio');
const volumeControl = document.getElementById('volume-control');

if (audioPlayer && volumeControl) {
    volumeControl.addEventListener('input', () => {
        audioPlayer.volume = volumeControl.value;
    });
}
</script>




