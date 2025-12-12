"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kalp breathing animasyonu
      gsap.to(heartRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Başlık fade-in animasyonu
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.5,
          ease: "power3.out",
        }
      );

      // Floating hearts arka plan animasyonu
      const hearts = document.querySelectorAll(".bg-heart");
      hearts.forEach((heart, index) => {
        gsap.to(heart, {
          y: -window.innerHeight - 100,
          x: `random(-50, 50)`,
          rotation: `random(-30, 30)`,
          duration: `random(8, 15)`,
          repeat: -1,
          delay: index * 0.5,
          ease: "none",
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-romantic-100 via-romantic-200 to-romantic-300"
    >
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bg-heart absolute text-romantic-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
              fontSize: `${20 + Math.random() * 40}px`,
            }}
          >
            💚
          </div>
        ))}
      </div>

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-romantic-100/30 to-romantic-200/50" />

      <div className="container-romantic relative z-10 text-center py-20">
        {/* Kalp Şeklinde Fotoğraf Çerçevesi */}
        <div
          ref={heartRef}
          className="relative mx-auto mb-12 w-72 h-72 md:w-96 md:h-96"
        >
          {/* SVG Kalp Mask */}
          <svg className="absolute w-0 h-0">
            <defs>
              <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
                <path d="M0.5,0.15 C0.35,0 0,0.1 0,0.4 C0,0.7 0.5,1 0.5,1 C0.5,1 1,0.7 1,0.4 C1,0.1 0.65,0 0.5,0.15" />
              </clipPath>
            </defs>
          </svg>

          {/* Kalp çerçevesi glow efekti */}
          <div
            className="absolute inset-0 bg-romantic-500/30 blur-3xl"
            style={{ clipPath: "url(#heart-clip)" }}
          />

          {/* Fotoğraf container */}
          <div
            className="relative w-full h-full overflow-hidden shadow-2xl"
            style={{ clipPath: "url(#heart-clip)" }}
          >
            {/* Placeholder fotoğraf - sonra değiştirilecek */}
            <Image
              src="/images/couple-photo.jpg"
              alt="Bizim fotoğrafımız"
              fill
              className="object-cover"
              priority
            />
            {/* Fallback gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-romantic-400 to-romantic-600 flex items-center justify-center">
              <span className="text-white/80 text-6xl">💚</span>
            </div>
          </div>

          {/* Dekoratif kalp border */}
          <div
            className="absolute inset-0 border-4 border-romantic-500/50"
            style={{ clipPath: "url(#heart-clip)" }}
          />
        </div>

        {/* Romantik Yazı */}
        <div ref={textRef} className="space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-elegant font-bold text-romantic-800 leading-tight">
            17 Mayıs 2024&apos;ten beri
            <br />
            <span className="gradient-text">kalbimin sahibi sensin...</span>
          </h1>

          <p className="text-lg md:text-xl text-romantic-700 max-w-2xl mx-auto font-light">
            Her anımız bir hazine, her gülüşün bir şiir...
            <br />
            Seninle geçen her gün, hayatımın en güzel hediyesi.
          </p>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={() => {
                document.querySelector("#hikayemiz")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-romantic-600 hover:text-romantic-800 transition-colors"
            >
              <svg
                className="w-8 h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <span className="text-sm font-medium">Hikayemizi Keşfet</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dekoratif köşe kalpleri */}
      <div className="absolute top-20 left-10 text-romantic-400/40 text-4xl animate-float">
        💚
      </div>
      <div className="absolute top-40 right-20 text-romantic-500/30 text-3xl animate-float-slow">
        💚
      </div>
      <div className="absolute bottom-40 left-20 text-romantic-400/35 text-5xl animate-float">
        💚
      </div>
      <div className="absolute bottom-20 right-10 text-romantic-500/25 text-4xl animate-float-slow">
        💚
      </div>
    </section>
  );
}
