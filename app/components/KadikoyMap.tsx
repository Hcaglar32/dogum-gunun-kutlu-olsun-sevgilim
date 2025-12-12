"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Heart, Sparkles, Star } from "lucide-react";
import { LottieAnimation } from "./LottieAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function KadikoyMap() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Harita fade-in
      gsap.fromTo(
        ".map-container",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Kalp pin animasyonu
      gsap.fromTo(
        ".heart-pin",
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: ".map-container",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Pin pulse efekti
      gsap.to(".pin-pulse", {
        scale: 2.5,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out",
      });

      // Yazı animasyonu
      gsap.fromTo(
        ".map-text",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".map-text-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-romantic-100 to-romantic-200 relative overflow-hidden"
    >
      {/* Lottie çiçek animasyonları köşelerde */}
      <div className="absolute top-10 left-10 w-16 h-16 opacity-60">
        <LottieAnimation type="flower" />
      </div>
      <div className="absolute top-10 right-10 w-16 h-16 opacity-60">
        <LottieAnimation type="flower" />
      </div>
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-60">
        <LottieAnimation type="flower" />
      </div>
      <div className="absolute bottom-10 right-10 w-16 h-16 opacity-60">
        <LottieAnimation type="flower" />
      </div>

      <div className="container-romantic">
        <div className="max-w-4xl mx-auto text-center">
          {/* Başlık */}
          <div className="map-text flex items-center justify-center gap-3 mb-10">
            <MapPin className="w-8 h-8 text-romantic-600" />
            <h3 className="text-3xl md:text-4xl font-elegant font-bold text-romantic-800">
              Kadıköy, İstanbul
            </h3>
            <MapPin className="w-8 h-8 text-romantic-600" />
          </div>

          {/* Büyük Harita Container */}
          <div className="map-container relative mx-auto w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]">
            {/* Harita arka planı - pastel yeşil stilize harita */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70">
              {/* Stilize harita SVG */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Arka plan - daha canlı pastel */}
                <rect width="200" height="200" fill="#dcfce7" />
                
                {/* Marmara Denizi - sol alt */}
                <path
                  d="M0 130 Q40 110 70 140 Q90 160 70 185 Q50 200 0 200 Z"
                  fill="#86efac"
                  opacity="0.5"
                />

                {/* Binalar/bloklar */}
                <rect x="30" y="30" width="25" height="20" rx="3" fill="#bbf7d0" opacity="0.7" />
                <rect x="70" y="25" width="30" height="25" rx="3" fill="#bbf7d0" opacity="0.6" />
                <rect x="130" y="40" width="35" height="20" rx="3" fill="#bbf7d0" opacity="0.7" />
                <rect x="150" y="120" width="25" height="30" rx="3" fill="#bbf7d0" opacity="0.6" />
                <rect x="20" y="80" width="20" height="25" rx="3" fill="#bbf7d0" opacity="0.7" />

                {/* Ana yollar - daha belirgin */}
                <path
                  d="M40 0 Q60 50 100 100 Q140 150 180 200"
                  stroke="#4ade80"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M0 60 Q50 80 100 100 Q150 120 200 100"
                  stroke="#4ade80"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M100 0 Q90 50 100 100 Q110 150 90 200"
                  stroke="#4ade80"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Küçük sokaklar */}
                <path d="M20 100 L55 92" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
                <path d="M145 75 L175 55" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
                <path d="M115 145 L155 165" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
                <path d="M60 140 L40 165" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
                <path d="M120 60 L145 45" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />

                {/* Parklar/yeşil alanlar */}
                <circle cx="155" cy="55" r="12" fill="#22c55e" opacity="0.4" />
                <circle cx="45" cy="155" r="10" fill="#22c55e" opacity="0.4" />
                <ellipse cx="175" cy="145" rx="18" ry="12" fill="#22c55e" opacity="0.35" />
                <circle cx="85" cy="160" r="8" fill="#22c55e" opacity="0.4" />
              </svg>

              {/* Hafif overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
            </div>

            {/* Kalp şeklinde pin - daha büyük */}
            <div className="heart-pin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              {/* Pulse efekti */}
              <div className="pin-pulse absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-romantic-500/40 rounded-full" />
              
              {/* Pin gövdesi - daha büyük */}
              <div className="relative">
                <svg
                  width="64"
                  height="80"
                  viewBox="0 0 48 60"
                  className="drop-shadow-xl"
                >
                  {/* Pin alt ucu */}
                  <path
                    d="M24 60 L24 45"
                    stroke="#16a34a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  
                  {/* Kalp şekli */}
                  <path
                    d="M24 8 C16 0 4 4 4 16 C4 28 24 42 24 42 C24 42 44 28 44 16 C44 4 32 0 24 8"
                    fill="#16a34a"
                  />
                  
                  {/* İç kalp highlight */}
                  <path
                    d="M24 14 C20 10 14 12 14 18 C14 24 24 32 24 32 C24 32 34 24 34 18 C34 12 28 10 24 14"
                    fill="#4ade80"
                  />
                </svg>
              </div>
            </div>

            {/* Köşe dekorasyonları - Lucide ikonları */}
            <div className="absolute -top-3 -left-3">
              <Star className="w-6 h-6 text-romantic-400 fill-romantic-200" />
            </div>
            <div className="absolute -top-3 -right-3">
              <Sparkles className="w-6 h-6 text-romantic-400" />
            </div>
            <div className="absolute -bottom-3 -left-3">
              <Sparkles className="w-6 h-6 text-romantic-400" />
            </div>
            <div className="absolute -bottom-3 -right-3">
              <Star className="w-6 h-6 text-romantic-400 fill-romantic-200" />
            </div>
          </div>

          {/* Yazılar */}
          <div className="map-text-container mt-10 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 text-romantic-500 fill-romantic-500" />
              <p className="map-text text-2xl md:text-3xl font-elegant font-bold text-romantic-800">
                &ldquo;Dünyanın en güzel kalbi burada doğdu.&rdquo;
              </p>
              <Heart className="w-6 h-6 text-romantic-500 fill-romantic-500" />
            </div>
            <p className="map-text text-romantic-600 text-base md:text-lg flex items-center justify-center gap-2">
              17 Aralık gecesi, yıldızlar altında...
              <Sparkles className="w-5 h-5 text-romantic-500" />
            </p>
          </div>

          {/* Alt dekorasyon - Lucide kalpler */}
          <div className="mt-10 flex justify-center gap-4">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-5 h-5 text-romantic-400 fill-romantic-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
