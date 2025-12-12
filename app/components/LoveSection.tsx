"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const loveMessages = [
  "Seni her gün yeniden seviyorum.",
  "Sen güldükçe dünya güzelleşiyor.",
  "İyi ki varsın, iyi ki benimsin.",
  "Seninle her an bir mucize.",
  "Kalbim sadece senin için atıyor.",
  "Sen benim en güzel şansımsın.",
  "Hayatımın anlamı sensin.",
  "Seninle sonsuza dek...",
];

const HEART_IMAGE_URL = "/images/romantik-an.jpeg";

interface FloatingHeartData {
  id: number;
  x: number;
  size: number;
  duration: number;
}

export default function LoveSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeartData[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const heartIdRef = useRef(0);

  // Tıklama ile kalp oluştur
  const createHeart = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    
    const newHeart: FloatingHeartData = {
      id: heartIdRef.current++,
      x: x,
      size: 20 + Math.random() * 30,
      duration: 2 + Math.random() * 2,
    };

    setFloatingHearts((prev) => [...prev, newHeart]);
    setClickCount((prev) => prev + 1);

    // Kalbi animasyonla kaldır
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, newHeart.duration * 1000);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Başlık animasyonu
      gsap.fromTo(
        ".love-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Mesaj kartları animasyonu
      gsap.fromTo(
        ".love-card",
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".love-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover kalpleri animasyonu
      const hoverHearts = document.querySelectorAll(".hover-heart");
      hoverHearts.forEach((heart) => {
        gsap.to(heart, {
          scale: 1.2,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="kalp"
      className="section-padding bg-gradient-to-b from-romantic-300 via-romantic-400 to-romantic-500 relative overflow-hidden cursor-pointer"
      onClick={createHeart}
    >
      {/* Floating hearts from clicks */}
      {floatingHearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart-image pointer-events-none z-50"
          style={{
            left: heart.x,
            bottom: 0,
            width: heart.size,
            height: heart.size,
            animation: `floatUp ${heart.duration}s ease-out forwards`,
            backgroundImage: `url(${HEART_IMAGE_URL})`,
          }}
        >
        </div>
      ))}

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 40}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            💚
          </div>
        ))}
      </div>

      <div className="container-romantic relative z-10">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="love-title text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-white mb-6 drop-shadow-lg">
            Seni Ne Kadar Seviyorum?
          </h2>
          <p className="love-title text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Sayılamayacak kadar çok... Ama yine de deneyeyim 💚
          </p>
          
          {/* Click counter */}
          {clickCount > 0 && (
            <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-white font-medium">
                {clickCount} kalp gönderdin! 💚
              </span>
            </div>
          )}
        </div>

        {/* Love Messages Grid */}
        <div className="love-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loveMessages.map((message, index) => (
            <div
              key={index}
              className="love-card group relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105"
            >
              {/* Hover heart */}
              <div className="hover-heart absolute -top-4 left-1/2 transform -translate-x-1/2 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                💚
              </div>
              
              <p className="text-white font-elegant text-lg leading-relaxed">
                &ldquo;{message}&rdquo;
              </p>
              
              {/* Bottom decoration */}
              <div className="mt-4 flex justify-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <span
                    key={i}
                    className="text-white/60 text-sm"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    💚
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive area hint */}
        <div className="text-center mt-12">
          <p className="text-white/80 text-sm animate-pulse">
            💚 Ekrana tıklayarak kalp gönder!
          </p>
        </div>

        {/* Big heart section */}
        <div className="mt-20 text-center">
          <div className="inline-block relative giant-heart-wrapper">
            <div
              className="giant-heart"
              style={{ backgroundImage: `url(${HEART_IMAGE_URL})` }}
            />
            <div
              aria-hidden="true"
              className="giant-heart giant-heart--glow"
              style={{ backgroundImage: `url(${HEART_IMAGE_URL})` }}
            />
          </div>
          <p className="mt-8 text-2xl md:text-3xl font-elegant text-white font-medium">
            Sonsuza dek seninle...
          </p>
        </div>
      </div>

      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0.5) rotate(360deg);
            opacity: 0;
          }
        }

        .floating-heart-image {
          position: absolute;
          background-size: cover;
          background-position: center;
          clip-path: path(
            "M50 90 C20 70 0 50 0 30 0 15 10 5 25 5 35 5 45 12 50 20 55 12 65 5 75 5 90 5 100 15 100 30 100 50 80 70 50 90 Z"
          );
          -webkit-clip-path: path(
            "M50 90 C20 70 0 50 0 30 0 15 10 5 25 5 35 5 45 12 50 20 55 12 65 5 75 5 90 5 100 15 100 30 100 50 80 70 50 90 Z"
          );
          filter: drop-shadow(0 12px 24px rgba(16, 185, 129, 0.35));
        }

        .giant-heart-wrapper {
          width: clamp(12rem, 24vw, 22rem);
          aspect-ratio: 1;
        }

        .giant-heart {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          clip-path: path(
            "M50 90 C20 70 0 50 0 30 0 15 10 5 25 5 35 5 45 12 50 20 55 12 65 5 75 5 90 5 100 15 100 30 100 50 80 70 50 90 Z"
          );
          -webkit-clip-path: path(
            "M50 90 C20 70 0 50 0 30 0 15 10 5 25 5 35 5 45 12 50 20 55 12 65 5 75 5 90 5 100 15 100 30 100 50 80 70 50 90 Z"
          );
          animation: heartbeat 1.6s ease-in-out infinite;
        }

        .giant-heart--glow {
          filter: blur(40px);
          opacity: 0.35;
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(0.97);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
