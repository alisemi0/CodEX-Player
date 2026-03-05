# 🎬 CodEX Player - Premium Web Oynatıcı

CodEX Town tarafından tasarlanan ve geliştirilen; modern "Glassmorphism" arayüzüne sahip, HLS (m3u8) yayınlarını destekleyen ve yüksek performans sunan gelişmiş web video oynatıcı vitrin projesi.

Standart tarayıcı oynatıcılarının sınırlarını aşarak, kullanıcılara pürüzsüz, özelleştirilebilir ve profesyonel bir medya izleme deneyimi sunmak için inşa edilmiştir.

## ✨ Öne Çıkan Gelişmiş Özellikler

* **HLS (m3u8) Desteği:** `hls.js` entegrasyonu sayesinde adaptif bit hızı akışlarını ve canlı yayınları kesintisiz oynatma yeteneği.
* **Modern Glassmorphism Arayüzü:** Yarı şeffaf, buzlu cam efektli ve modern CSS animasyonlarıyla donatılmış, videonun atmosferini bozmayan premium kontrol paneli.
* **Akıllı Klavye Kısayolları:** * `Boşluk (Space)`: Oynat / Duraklat
  * `F`: Tam Ekran Modu (Aç/Kapat)
  * `Sağ / Sol Ok`: 10 saniye İleri / Geri sarma
  * `M`: Sesi Kapat / Aç (Mute)
* **Picture-in-Picture (PiP):** Kullanıcıların videoyu ekranın köşesine alıp diğer sekmelerde gezinmesine olanak tanıyan pencere içinde pencere modu.
* **Sıfır Dışa Bağımlılık (HLS Hariç):** Çekirdek UI ve mantık tamamen Vanilla JS ve CSS3 ile, yüksek performans odaklı yazılmıştır.

---

## 💻 Çekirdek Kod Mimarisi ve Entegrasyonlar

Aşağıda CodEX Player'ın yeteneklerini gösteren temel kod mimarisinden örnekler bulunmaktadır.

### 1. HTML5 İskeleti ve HLS Entegrasyonu (`index.html`)
HLS kütüphanesi CDN üzerinden projeye dahil edilmiş ve PiP gibi yeni butonlar arayüze eklenmiştir.

```html
<script src="[https://cdn.jsdelivr.net/npm/hls.js@latest](https://cdn.jsdelivr.net/npm/hls.js@latest)"></script>

<div class="codex-player-wrapper" id="player-wrapper">
    <video id="codex-video" poster="assets/poster.jpg"></video>
    
    <div class="codex-glass-controls">
        <div class="progress-area" id="progress-area">
            <div id="progress-bar"></div>
        </div>
        
        <div class="controls-main">
            <div class="controls-left">
                <button id="play-btn" class="icon-btn">▶</button>
                <div class="volume-container">
                    <button id="mute-btn" class="icon-btn">🔊</button>
                    <input type="range" id="volume-slider" min="0" max="1" step="0.05" value="1">
                </div>
                <div class="time-display">
                    <span id="current-time">00:00</span> / <span id="total-time">00:00</span>
                </div>
            </div>
            
            <div class="controls-right">
                <button id="pip-btn" class="icon-btn" title="Pencere İçinde Pencere">⧉</button>
                <button id="fullscreen-btn" class="icon-btn" title="Tam Ekran">⛶</button>
            </div>
        </div>
    </div>
</div>
```
---
<div align="center">
  
  # 🎬 CodEX Player
  **Premium Web Video Oynatıcı Vitrini**

  [![Canlı Önizleme](https://img.shields.io/badge/🔴_Canlı_Önizleme_İçin_Tıklayın-00a8ff?style=for-the-badge&logo=googlechrome&logoColor=white)](https://testdizify.blogspot.com/2026/02/0854.html)

  [![Lisans: MIT](https://img.shields.io/badge/Lisans-MIT-yellow.svg?style=flat-square)](#)
  [![Vanilla JS](https://img.shields.io/badge/Çekirdek-Vanilla_JS-f7df1e.svg?style=flat-square&logo=javascript&logoColor=black)](#)
  [![HLS Desteği](https://img.shields.io/badge/Yayın-HLS_(m3u8)-ff69b4.svg?style=flat-square)](#)

  *CodEX Town tarafından tasarlanan, modern "Glassmorphism" arayüzüne sahip, hafif ve yüksek performanslı web oynatıcısı.*

</div>






</div>
