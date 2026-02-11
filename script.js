document.addEventListener("DOMContentLoaded", () => {
    const poster = document.getElementById('poster-area');
    const table = document.getElementById('table-area');
    const bed = document.getElementById('bed-area');
    const popup = document.getElementById('info-popup');
    const closeBtn = document.getElementById('close-popup');
    const bgm = document.getElementById('bgm');

    // 1. Poster -> Open Link
    poster.addEventListener('click', () => {
        window.open('https://doomsage.in', '_blank');
    });

    // 2. Table -> Show Popup
    table.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // 3. Bed -> Play Music
    bed.addEventListener('click', () => {
        bgm.volume = 0.4;
        if (bgm.paused) {
            bgm.play();
        } else {
            bgm.pause();
        }
    });

    // Close popup on background click
    popup.addEventListener('click', (e) => {
        if (e.target === popup) popup.classList.add('hidden');
    });
});