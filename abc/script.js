// JavaScript for handling music player functionality
const audioPlayer = document.getElementById('audio-player');
const playlistLinks = document.querySelectorAll('.playlist a');

playlistLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const songUrl = this.getAttribute('href');
        audioPlayer.src = songUrl;
        audioPlayer.play();
    });
});