"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Fotoğraf verileri - placeholder olarak
const photos = [
  {
    id: 1,
    src: "/images/ilk-bulusma.jpeg",
    alt: "Birlikte güzel bir anımız",
    caption: "İlk buluşmamız 💚",
  },
  {
    id: 2,
    src: "/images/mutlu-an.jpeg",
    alt: "Mutlu anlarımız",
    caption: "Gülüşün her şeye değer",
  },
  {
    id: 3,
    src: "/images/romantik-an.jpeg",
    alt: "Özel günümüz",
    caption: "Seninle her an özel",
  },
  {
    id: 4,
    src: "/images/romantik-2.jpeg",
    alt: "Romantik anımız",
    caption: "Kalbimdesin her zaman",
  },
  {
    id: 5,
    src: "/images/sevgi-dolu-ayna.jpeg",
    alt: "Güzel bir gün",
    caption: "Birlikte geçen her gün",
  },
  {
    id: 6,
    src: "/images/yıl-donumu.jpeg",
    alt: "Sevgi dolu an",
    caption: "Sonsuz sevgiyle 💚",
  },
];

interface DraggableCardProps {
  photo: {
    id: number;
    src: string;
    alt: string;
    caption: string;
  };
  index: number;
}

function DraggableCard({ photo, index }: DraggableCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(
    (index % 2 === 0 ? 1 : -1) * (Math.random() * 5 + 2)
  );
  const startPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - startPos.current.x;
    const newY = e.clientY - startPos.current.y;
    setPosition({ x: newX, y: newY });
    setRotation(newX * 0.05);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Yavaşça orijinal pozisyona dön
    gsap.to(cardRef.current, {
      x: 0,
      y: 0,
      rotation: (index % 2 === 0 ? 1 : -1) * (Math.random() * 5 + 2),
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
    setPosition({ x: 0, y: 0 });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    startPos.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const newX = touch.clientX - startPos.current.x;
    const newY = touch.clientY - startPos.current.y;
    setPosition({ x: newX, y: newY });
    setRotation(newX * 0.05);
  };

  return (
    <div
      ref={cardRef}
      className={`gallery-card relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-xl cursor-grab active:cursor-grabbing transition-shadow duration-300 ${
        isDragging ? "shadow-2xl z-50" : "hover:shadow-2xl"
      }`}
      style={{
        transform: `translate(${position.x}px, ${
          position.y
        }px) rotate(${rotation}deg) scale(${isDragging ? 1.05 : 1})`,
        transition: isDragging ? "none" : "transform 0.3s ease",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Fotoğraf */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-100/40 to-romantic-300/40">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          draggable={false}
        />

        {/* Fallback gradient (çok daha yarı saydam) */}
        <div className="absolute inset-0 bg-gradient-to-br from-romantic-200/30 to-romantic-300/30 mix-blend-soft-light flex items-center justify-center">
          <span className="text-white/60 text-6xl">💚</span>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <p className="font-elegant text-lg font-medium">{photo.caption}</p>
      </div>

      {/* Dekoratif köşe */}
      <div className="absolute top-3 right-3 text-white/80 text-xl">💚</div>
    </div>
  );
}

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Başlık animasyonu
      gsap.fromTo(
        ".gallery-title",
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

      // Kartlar animasyonu
      gsap.fromTo(
        ".gallery-card",
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating hearts
      const hearts = document.querySelectorAll(".gallery-heart");
      hearts.forEach((heart, i) => {
        gsap.to(heart, {
          y: -30,
          x: `random(-20, 20)`,
          duration: 3 + i * 0.5,
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
      id="anilar"
      className="section-padding bg-gradient-to-b from-romantic-100 via-romantic-200 to-romantic-300 relative overflow-hidden"
    >
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="gallery-heart absolute text-romantic-400/20"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 30}%`,
              fontSize: `${30 + (i % 4) * 10}px`,
            }}
          >
            💚
          </div>
        ))}
      </div>

      <div className="container-romantic relative z-10">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="gallery-title text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-romantic-800 mb-6">
            Anılarımız
          </h2>
          <p className="gallery-title text-lg md:text-xl text-romantic-700 max-w-2xl mx-auto">
            Her fotoğraf bir hikaye, her an bir hazine...
            <br />
            <span className="text-romantic-500 font-medium">
              Kartları sürükleyerek keşfet 💚
            </span>
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid flex flex-wrap justify-center gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <DraggableCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>

        {/* Alt açıklama */}
        <p className="text-center mt-12 text-romantic-600 text-sm">
          💚 Fotoğrafları sürükleyerek hareket ettirebilirsin
        </p>
      </div>
    </section>
  );
}
