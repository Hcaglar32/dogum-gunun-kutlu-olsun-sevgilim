"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Baby, Heart, Infinity, Sparkles, BookHeart } from "lucide-react";
import { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "17 Aralık",
    title: "Dünyaya Gelişin",
    description:
      "Kadıköy'de, gece saatlerinde dünyaya gelen en güzel insan... O gece gökyüzündeki yıldızlar bile senin için parladı.",
    icon: Star,
    iconColor: "text-yellow-500 fill-yellow-500",
  },
  {
    date: "Yıllar Boyunca",
    title: "Hayat Meleği",
    description:
      "İnsanlara hayat getiren bir ebe oldun. Her doğumda bir mucizeye tanıklık eden, hayatın en güzel anlarına eşlik eden birisin.",
    icon: Baby,
    iconColor: "text-pink-400",
  },
  {
    date: "17 Mayıs 2024",
    title: "Hikayemizin Başlangıcı",
    description:
      "O gün hayatım değişti. Seninle tanıştığım an, kalbim ilk kez gerçek aşkı hissetti. O günden beri her gün sana biraz daha aşık oluyorum.",
    icon: Heart,
    iconColor: "text-romantic-500 fill-romantic-500",
  },
  {
    date: "Bugün ve Sonsuza Dek",
    title: "Birlikte",
    description:
      "Her güne seninle başlamak, her geceyi seninle sonlandırmak... Hayatımın en güzel hediyesi sensin. Sonsuza dek seninle...",
    icon: Infinity,
    iconColor: "text-romantic-600",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Başlık animasyonu
      gsap.fromTo(
        ".timeline-title",
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

      // Timeline çizgisi animasyonu
      gsap.fromTo(
        ".timeline-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          },
        }
      );

      // Timeline kartları animasyonu
      const cards = document.querySelectorAll(".timeline-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Timeline noktaları animasyonu
      const dots = document.querySelectorAll(".timeline-dot");
      dots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: dot,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hikayemiz"
      className="section-padding bg-gradient-to-b from-romantic-300 via-romantic-200 to-romantic-100 relative overflow-hidden"
    >
      {/* Dekoratif arka plan */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Heart className="absolute top-20 left-10 w-24 h-24 text-romantic-500" />
        <Heart className="absolute bottom-20 right-10 w-24 h-24 text-romantic-500" />
        <Sparkles className="absolute top-40 right-20 w-16 h-16 text-romantic-400" />
        <BookHeart className="absolute bottom-40 left-20 w-16 h-16 text-romantic-400" />
      </div>

      <div className="container-romantic relative z-10">
        {/* Başlık */}
        <div className="text-center mb-20">
          <h2 className="timeline-title text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-romantic-800 mb-6">
            Hikayemiz
          </h2>
          <p className="timeline-title text-lg md:text-xl text-romantic-700 max-w-2xl mx-auto">
            Her büyük aşkın bir başlangıcı vardır...
            <br />
            İşte bizim hikayemiz.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Merkez çizgi */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-romantic-300 rounded-full">
            <div className="timeline-line-fill absolute top-0 left-0 w-full h-full bg-gradient-to-b from-romantic-500 to-romantic-700 rounded-full origin-top" />
          </div>

          {/* Timeline kartları */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-card relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Kart */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-romantic-200">
                    <div className="mb-4 flex justify-center">
                      <event.icon className={`w-10 h-10 ${event.iconColor}`} />
                    </div>
                    <span className="text-romantic-500 font-semibold text-sm uppercase tracking-wider">
                      {event.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-elegant font-bold text-romantic-800 mt-2 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-romantic-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Merkez nokta */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="timeline-dot w-6 h-6 bg-romantic-500 rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Boş alan */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
