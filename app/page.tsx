"use client";

import { useEffect, useState } from "react";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Timeline from "./components/Timeline";
import BloomingFlower from "./components/BloomingFlower";
import KadikoyMap from "./components/KadikoyMap";
import Gallery from "./components/Gallery";
import LoveSection from "./components/LoveSection";
import BirthdayMessage from "./components/BirthdayMessage";
import { FloatingHeartsBackground } from "./components/LottieAnimations";

const PRELOADER_DURATION = 3800;

export default function Home() {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [isPreloaderFading, setIsPreloaderFading] = useState(false);

  useEffect(() => {
    document.body.classList.add("preloader-locked");

    const fadeTimer = window.setTimeout(() => {
      setIsPreloaderFading(true);
      document.body.classList.add("preloader-exit");
    }, Math.max(PRELOADER_DURATION - 900, 0));

    const finishTimer = window.setTimeout(() => {
      setIsPreloaderVisible(false);
      document.body.classList.remove("preloader-locked");
      document.body.classList.add("preloader-complete");
    }, PRELOADER_DURATION);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(finishTimer);
      document.body.classList.remove(
        "preloader-locked",
        "preloader-exit",
        "preloader-complete"
      );
    };
  }, []);

  return (
    <SmoothScroll>
   {isPreloaderVisible && (
        <div
          className={`preloader ${isPreloaderFading ? "preloader--fade" : ""}`}
          aria-hidden="true"
        >
          <div className="preloader__sky">
            <div className="preloader__inner">
              <div className="preloader__daisy-container">
                <svg
                  className="preloader__daisy"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="centerGradient">
                      <stop offset="0%" stopColor="#fff9c4" />
                      <stop offset="40%" stopColor="#ffeb3b" />
                      <stop offset="80%" stopColor="#ffd54f" />
                      <stop offset="100%" stopColor="#ffa726" />
                    </radialGradient>
                    
                    <radialGradient id="petalGradient">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="85%" stopColor="#fafafa" />
                      <stop offset="100%" stopColor="#f5f5f5" />
                    </radialGradient>
                    
                    <filter id="petalShadow">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                      <feOffset dx="0" dy="1" result="offsetblur"/>
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3"/>
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Gölge */}
                  <ellipse cx="100" cy="185" rx="55" ry="6" fill="rgba(0,0,0,0.08)" className="preloader__shadow" />
                  
                  {/* Gövde */}
                  <path d="M100 200 Q98 170 100 130" stroke="#689f38" strokeWidth="5" fill="none" strokeLinecap="round" className="preloader__stem" />
                  
                  {/* Yapraklar */}
                  <path d="M100 155 Q88 153 82 148 Q80 146 82 144 Q88 145 95 147" 
                    fill="#7cb342" 
                    className="preloader__leaf preloader__leaf--left" />
                  <path d="M100 165 Q112 163 118 158 Q120 156 118 154 Q112 155 105 157" 
                    fill="#7cb342" 
                    className="preloader__leaf preloader__leaf--right" />
                  
                  {/* Papatya yaprakları - 16 adet, daha düzenli */}
                  {[...Array(16)].map((_, i) => {
                    const angle = (i * 22.5) - 90;
                    const rad = (angle * Math.PI) / 180;
                    const distance = 48;
                    const cx = 100 + Math.cos(rad) * distance;
                    const cy = 100 + Math.sin(rad) * distance;
                    
                    return (
                      <g key={i}>
                        <ellipse
                          cx={cx}
                          cy={cy}
                          rx="14"
                          ry="24"
                          fill="url(#petalGradient)"
                          stroke="#f0f0f0"
                          strokeWidth="0.5"
                          transform={`rotate(${angle + 90} ${cx} ${cy})`}
                          filter="url(#petalShadow)"
                          className="preloader__petal"
                          style={{ animationDelay: `${i * 0.06}s` }}
                        />
                      </g>
                    );
                  })}
                  
                  {/* Merkez - sarı */}
                  <circle cx="100" cy="100" r="24" fill="url(#centerGradient)" className="preloader__center" />
                  
                  {/* Merkezdeki noktalar - daha düzenli */}
                  {[...Array(3)].map((_, ring) => {
                    const radius = 6 + ring * 6;
                    const count = 6 + ring * 4;
                    return [...Array(count)].map((_, i) => {
                      const angle = (i * 360 / count) + (ring * 10);
                      const rad = (angle * Math.PI) / 180;
                      const x = 100 + Math.cos(rad) * radius;
                      const y = 100 + Math.sin(rad) * radius;
                      
                      return (
                        <circle
                          key={`${ring}-${i}`}
                          cx={x}
                          cy={y}
                          r="1.5"
                          fill="#f57c00"
                          opacity="0.6"
                          className="preloader__center-detail"
                          style={{ animationDelay: `${1.3 + ring * 0.1 + i * 0.01}s` }}
                        />
                      );
                    });
                  })}
                  
                  {/* Merkez parlama efekti */}
                  <circle cx="100" cy="100" r="24" fill="none" stroke="#fff59d" strokeWidth="2" opacity="0.4" className="preloader__center-glow" />
                </svg>
              </div>

              <p className="preloader__text">Sana özel bir şey hazırlanıyor...</p>
            </div>
          </div>
        </div>
      )}

      <main
        className={`relative transition-opacity duration-700 ease-out ${
          isPreloaderVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Floating Hearts Lottie Background */}
        <FloatingHeartsBackground />

        {/* Navigasyon */}
        <Navbar />

        {/* Hero Banner - Kalp maskeli fotoğraf */}
        <HeroSection />

        {/* Hikayemiz - Timeline */}
        <Timeline />

        {/* Çiçek Açılma Animasyonu */}
        <BloomingFlower />

        {/* Kadıköy Haritası */}
        <KadikoyMap />

        {/* Galeri - Draggable Cards */}
        <Gallery />

        {/* Seni Ne Kadar Seviyorum - İnteraktif */}
        <LoveSection />

        {/* Doğum Günü Mesajı */}
        <BirthdayMessage />

        {/* Footer */}
        <footer className="bg-romantic-800 text-white py-8 text-center">
          <div className="container-romantic">
            <p className="text-romantic-300 mb-2">
              💚 Sana özel hazırlandı 💚
            </p>
            <p className="text-sm text-romantic-400">
              17 Mayıs 2024&apos;ten beri seninle...
            </p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
