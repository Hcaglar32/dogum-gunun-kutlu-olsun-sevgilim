"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import { TwinklingStars } from "./LottieAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function BloomingFlower() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flowerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Papatya yapraklarının başlangıç durumu
      gsap.set(".daisy-petal", {
        scale: 0,
        opacity: 0,
        transformOrigin: "center bottom",
      });

      gsap.set(".flower-center", {
        scale: 0,
        opacity: 0,
      });

      gsap.set(".center-heart", {
        scale: 0,
        opacity: 0,
      });

      gsap.set(".flower-stem", {
        scaleY: 0,
        transformOrigin: "bottom center",
      });

      gsap.set(".flower-leaf", {
        scale: 0,
        opacity: 0,
        transformOrigin: "bottom center",
      });

      // Ana timeline - scroll ile tetiklenir
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 95%",
          scrub: 1,
        },
      });

      // Sap büyümesi
      tl.to(".flower-stem", {
        scaleY: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      // Yapraklar
      tl.to(
        ".flower-leaf",
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );

      // Papatya yaprakları açılıyor - sırayla
      tl.to(
        ".daisy-petal",
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: {
            each: 0.03,
            from: "start",
          },
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );

      // Sarı merkez
      tl.to(
        ".flower-center",
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(2)",
        },
        "-=0.2"
      );

      // Kalp ortaya çıkıyor
      tl.to(
        ".center-heart",
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.1"
      );

      // Yazı animasyonu
      gsap.fromTo(
        ".bloom-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bloom-text",
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
      className="min-h-screen bg-gradient-to-b from-romantic-100 via-romantic-50 to-romantic-100 flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Lottie yıldızlar */}
      <TwinklingStars />

      {/* Papatya SVG */}
      <div className="relative w-80 h-96 md:w-[28rem] md:h-[32rem]">
        <svg
          ref={flowerRef}
          viewBox="0 0 200 280"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sap */}
          <path
            className="flower-stem"
            d="M100 280 L100 130"
            stroke="#16a34a"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Sol yaprak */}
          <ellipse
            className="flower-leaf"
            cx="72"
            cy="210"
            rx="22"
            ry="10"
            fill="#22c55e"
            transform="rotate(-35 72 210)"
          />

          {/* Sağ yaprak */}
          <ellipse
            className="flower-leaf"
            cx="128"
            cy="190"
            rx="22"
            ry="10"
            fill="#22c55e"
            transform="rotate(35 128 190)"
          />

          {/* Papatya yaprakları - 16 adet beyaz yaprak */}
          {[...Array(16)].map((_, i) => (
            <ellipse
              key={`petal-${i}`}
              className="daisy-petal"
              cx="100"
              cy="60"
              rx="12"
              ry="40"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="0.5"
              transform={`rotate(${i * 22.5} 100 100)`}
              style={{ filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))" }}
            />
          ))}

          {/* Sarı merkez - papatya ortası */}
          <circle
            className="flower-center"
            cx="100"
            cy="100"
            r="22"
            fill="#fbbf24"
          />
          
          {/* Merkez detayları */}
          <circle
            className="flower-center"
            cx="100"
            cy="100"
            r="18"
            fill="#f59e0b"
          />

          {/* Merkez kalp */}
          <g className="center-heart" transform="translate(100, 100)">
            <path
              d="M0,-8 C-4,-12 -12,-8 -12,-2 C-12,5 0,12 0,12 C0,12 12,5 12,-2 C12,-8 4,-12 0,-8"
              fill="#16a34a"
            />
          </g>
        </svg>

        {/* Parıltı efekti */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Yazı */}
      <div className="bloom-text text-center mt-8 px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-6 h-6 text-romantic-500 fill-romantic-500" />
          <p className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-romantic-800 leading-relaxed">
            &ldquo;Aşkımız zamanla böyle büyüdü.&rdquo;
          </p>
          <Heart className="w-6 h-6 text-romantic-500 fill-romantic-500" />
        </div>
        <p className="text-romantic-600 mt-4 text-lg flex items-center justify-center gap-2">
          Her gün biraz daha, sonsuza dek...
          <Heart className="w-5 h-5 text-romantic-500 fill-romantic-500 animate-heart-beat" />
        </p>
      </div>
    </section>
  );
}
