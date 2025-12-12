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
            <div className="preloader__haze preloader__haze--one" />
            <div className="preloader__haze preloader__haze--two" />
            <div className="preloader__haze preloader__haze--three" />

            <div className="preloader__cloud-belt preloader__cloud-belt--top">
              {[...Array(7)].map((_, index) => (
                <span key={`top-cloud-${index}`} className="preloader__puff" />
              ))}
            </div>

            <div className="preloader__cloud-belt preloader__cloud-belt--bottom">
              {[...Array(7)].map((_, index) => (
                <span key={`bottom-cloud-${index}`} className="preloader__puff" />
              ))}
            </div>

            <div className="preloader__cloud-ring">
              <div className="preloader__cloud preloader__cloud--halo" />
              <div className="preloader__cloud preloader__cloud--halo preloader__cloud--halo-delay" />
              <div className="preloader__cloud preloader__cloud--halo preloader__cloud--halo-slower" />
            </div>

            <div className="preloader__inner">
              <div className="preloader__heart-pocket">
                <div className="preloader__heart-portal">
                  <svg
                    className="preloader__heart"
                    viewBox="0 0 120 120"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M60 106 L12 58 C-6 40 -6 11 16 0 C30 -7 48 -1 60 18 C72 -1 90 -7 104 0 C126 11 126 40 108 58 Z" />
                  </svg>
                </div>
              </div>

              <p className="preloader__text">Sevgi bulutlarının arasından...</p>
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
