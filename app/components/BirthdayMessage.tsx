"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BirthdayMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ana mesaj fade-up animasyonu
      gsap.fromTo(
        ".birthday-message",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Dekoratif elementler animasyonu
      gsap.fromTo(
        ".birthday-decor",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Kalp partikülleri animasyonu
      const particles = document.querySelectorAll(".birthday-particle");
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: `random(-50, 50)`,
          x: `random(-30, 30)`,
          rotation: `random(-20, 20)`,
          duration: 3 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      });

      // İmza animasyonu
      gsap.fromTo(
        ".birthday-signature",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".birthday-signature",
            start: "top 90%",
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
      id="mesaj"
      className="section-padding relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: "linear-gradient(135deg, #064e3b 0%, #065f46 25%, #047857 50%, #059669 75%, #10b981 100%)"
      }}
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent animate-pulse" />
      
      {/* Floating particles with blur effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="birthday-particle absolute rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${8 + Math.random() * 20}px`,
              height: `${8 + Math.random() * 20}px`,
              background: `rgba(255, 255, 255, ${0.05 + Math.random() * 0.1})`,
            }}
          />
        ))}
      </div>

      {/* Modern corner decorations */}
      <div className="birthday-decor absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-white/20 rounded-tl-3xl" />
      <div className="birthday-decor absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-white/20 rounded-tr-3xl" />
      <div className="birthday-decor absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-white/20 rounded-bl-3xl" />
      <div className="birthday-decor absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-white/20 rounded-br-3xl" />

      <div className="container-romantic relative z-10">
        <div
          ref={messageRef}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated Heart Icon - Main Feature */}
          <div className="birthday-message flex justify-center mb-10">
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 -m-8 border-2 border-emerald-300/20 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
              <div className="absolute inset-0 -m-6 border border-emerald-200/30 rounded-full animate-pulse" />
              <div className="absolute inset-0 -m-4 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              
              {/* Main animated heart */}
              <svg 
                className="w-20 h-20 md:w-24 md:h-24 text-emerald-300 animate-heartbeat animate-glow drop-shadow-2xl"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              
              {/* Sparkle effects around heart */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full animate-ping opacity-60" />
              <div className="absolute -bottom-1 -left-3 w-2 h-2 bg-emerald-200 rounded-full animate-ping opacity-40" style={{ animationDelay: "0.3s" }} />
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-white rounded-full animate-ping opacity-50" style={{ animationDelay: "0.6s" }} />
            </div>
          </div>

          {/* Ana başlık - Romantic font */}
          <h2 className="birthday-message text-5xl md:text-6xl lg:text-7xl font-romantic text-white mb-4 leading-tight drop-shadow-lg">
            Doğum Günün Kutlu Olsun
          </h2>
          <h3 className="birthday-message text-3xl md:text-4xl lg:text-5xl font-romantic text-emerald-200 mb-12">
            Canım Sevgilim
          </h3>

          {/* Modern glass card */}
          <div className="birthday-message relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 lg:p-16 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            {/* Card inner glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            
            <p className="relative text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-romantic-alt mb-8">
              Bu siteyi senin için yaptım...
            </p>
            
            {/* Modern divider */}
            <div className="flex items-center justify-center gap-4 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
              <svg className="w-6 h-6 text-emerald-300 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
            </div>

            <p className="relative text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 font-romantic-alt">
              Doğduğun gün dünyaya bir güzellik gelmiş.
              <br />
              <span className="text-emerald-200">Kadıköy&apos;de, 17 Aralık gecesi, yıldızlar senin için parlamış.</span>
            </p>

            <p className="relative text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 font-romantic-alt">
              İnsanlara hayat getiren bir melek oldun.
              <br />
              <span className="text-emerald-200">Her doğumda bir mucizeye tanıklık eden, hayatın en güzel anlarına eşlik eden birisin.</span>
            </p>

            <p className="relative text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 font-romantic-alt">
              17 Mayıs 2024&apos;te hayatıma girdin ve her şey değişti.
              <br />
              <span className="text-emerald-200">O günden beri her gün sana biraz daha aşık oluyorum.</span>
            </p>

            {/* Modern divider */}
            <div className="flex items-center justify-center gap-4 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
              <div className="w-3 h-3 bg-emerald-300 rounded-full animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />
            </div>

            <p className="relative text-2xl md:text-3xl lg:text-4xl text-white font-romantic leading-relaxed">
              İyi ki doğdun, iyi ki benim oldun.
            </p>
            <p className="relative text-xl md:text-2xl lg:text-3xl text-emerald-200 font-romantic mt-4">
              Sonsuza dek seninle...
            </p>
          </div>

          {/* Modern signature */}
          <div className="birthday-signature mt-16 flex flex-col items-end">
            <p className="text-white/70 text-lg md:text-xl font-romantic-alt italic">
              Seni çok seven,
            </p>
            <div className="flex items-center gap-3 mt-3">
              <p className="text-white text-2xl md:text-3xl font-romantic">
                Sevgilin
              </p>
              <svg className="w-8 h-8 text-emerald-300 animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          {/* Animated hearts row */}
          <div className="birthday-message mt-16 flex justify-center items-center gap-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-8 h-8 md:w-10 md:h-10 text-emerald-300/80 animate-heartbeat"
                style={{ animationDelay: `${i * 0.15}s` }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-emerald-950/50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".3"></path>
        </svg>
      </div>
    </section>
  );
}
