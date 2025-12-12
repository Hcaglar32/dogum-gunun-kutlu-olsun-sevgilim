# 💚 Doğum Günün Kutlu Olsun Sevgilim

Sevgilime özel hazırlanmış romantik doğum günü web sitesi.

## 🎨 Özellikler

- **Yeşil Romantik Tema**: Yumuşak yeşil tonlarında zarif tasarım
- **GSAP Animasyonları**: Smooth scroll, fade-in, parallax efektleri
- **Kalp Maskeli Fotoğraf**: Hero bölümünde kalp şeklinde fotoğraf çerçevesi
- **Draggable Galeri**: Sürüklenebilir fotoğraf kartları
- **İnteraktif Kalpler**: Tıklama ile uçan kalpler
- **Responsive Tasarım**: Mobil uyumlu

## 🚀 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
```

## 📷 Fotoğraf Ekleme

`public/images/` klasörüne aşağıdaki fotoğrafları ekleyin:

- `couple-photo.jpg` - Hero bölümündeki kalp içindeki ana fotoğraf
- `memory-1.jpg` - Galeri fotoğrafı 1
- `memory-2.jpg` - Galeri fotoğrafı 2
- `memory-3.jpg` - Galeri fotoğrafı 3
- `memory-4.jpg` - Galeri fotoğrafı 4
- `memory-5.jpg` - Galeri fotoğrafı 5
- `memory-6.jpg` - Galeri fotoğrafı 6

## 📁 Proje Yapısı

```
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigasyon menüsü
│   │   ├── HeroSection.tsx     # Kalp maskeli hero bölümü
│   │   ├── Timeline.tsx        # Hikayemiz timeline
│   │   ├── Gallery.tsx         # Draggable fotoğraf galerisi
│   │   ├── LoveSection.tsx     # İnteraktif sevgi bölümü
│   │   ├── BirthdayMessage.tsx # Doğum günü mesajı
│   │   └── SmoothScroll.tsx    # Lenis smooth scroll
│   ├── globals.css             # Global stiller
│   ├── layout.tsx              # Ana layout
│   └── page.tsx                # Ana sayfa
├── lib/
│   └── utils.ts                # Utility fonksiyonlar
├── public/
│   └── images/                 # Fotoğraflar
├── tailwind.config.ts          # Tailwind konfigürasyonu
└── package.json
```

## 🎯 Bölümler

1. **Hero Banner**: Kalp şeklinde mask uygulanmış fotoğraf, breathing animasyonu
2. **Hikayemiz**: Timeline formatında romantik hikaye
3. **Anılar**: Sürüklenebilir fotoğraf kartları galerisi
4. **Kalbimin Söyledikleri**: İnteraktif kalp animasyonları
5. **Doğum Günü Mesajı**: Özel mesaj bölümü

## 🛠️ Teknolojiler

- **Next.js 14** (App Router)
- **TailwindCSS** - Styling
- **GSAP** - Animasyonlar
- **Lenis** - Smooth scroll
- **TypeScript** - Type safety

## 💚 Özelleştirme

### Renkleri Değiştirme
`tailwind.config.ts` dosyasındaki `romantic` renk paletini düzenleyin.

### Metinleri Değiştirme
Her komponentin içindeki metinleri kendi mesajlarınızla değiştirin.

### Fotoğrafları Değiştirme
`public/images/` klasöründeki fotoğrafları kendi fotoğraflarınızla değiştirin.

---

💚 Sevgiyle hazırlandı
