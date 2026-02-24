const video = document.getElementById('codex-video');
const videoSrc = '[https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8](https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8)'; // Örnek HLS yayını

// 1. HLS (m3u8) Başlatma Motoru
if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        console.log("CodEX Player: HLS Yayını Hazır.");
    });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // Safari için yerleşik HLS desteği
    video.src = videoSrc;
}

// 2. Akıllı Klavye Kısayolları (Keyboard Events)
document.addEventListener('keydown', (e) => {
    // Sadece video görünürken/odaktayken çalışması için kontroller eklenebilir
    switch(e.key.toLowerCase()) {
        case ' ': // Boşluk Tuşu
            e.preventDefault(); // Sayfayı aşağı kaydırmayı engelle
            togglePlay();
            break;
        case 'f': // Tam Ekran
            toggleFullscreen();
            break;
        case 'm': // Sessiz
            toggleMute();
            break;
        case 'arrowright': // 10 sn İleri
            video.currentTime += 10;
            break;
        case 'arrowleft': // 10 sn Geri
            video.currentTime -= 10;
            break;
    }
});

// 3. Picture-in-Picture (PiP) Desteği
const pipBtn = document.getElementById('pip-btn');
pipBtn.addEventListener('click', async () => {
    try {
        if (video !== document.pictureInPictureElement) {
            await video.requestPictureInPicture();
        } else {
            await document.exitPictureInPicture();
        }
    } catch (error) {
        console.error("PiP desteklenmiyor veya bir hata oluştu:", error);
    }
});
