"use client";

import { useEffect, useRef } from "react";
import { Star, Baby, Heart, Infinity, Sparkles, BookHeart } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: any;
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
      "O gün hayatım değişti. Seninle tanıştığım an, hayatımı seninle geçirmek istediğimi anladım. O günden beri her gün sana biraz daha aşık oluyorum.",
    icon: Heart,
    iconColor: "text-green-600 fill-green-600",
  },
  {
    date: "Bugün ve Sonsuza Dek",
    title: "Birlikte",
    description:
      "Her güne seninle başlamak, her geceyi seninle sonlandırmak... Hayatımın en güzel hediyesi sensin. Sonsuza dek seninle...",
    icon: Infinity,
    iconColor: "text-teal-600",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hikayemiz"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50 overflow-hidden"
    >
      {/* Dekoratif arka plan */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Heart className="absolute top-20 left-5 md:left-10 w-16 md:w-24 h-16 md:h-24 text-green-500 animate-pulse" />
        <Heart className="absolute bottom-20 right-5 md:right-10 w-16 md:w-24 h-16 md:h-24 text-emerald-500 animate-pulse delay-1000" />
        <Sparkles className="absolute top-40 right-10 md:right-20 w-12 md:w-16 h-12 md:h-16 text-teal-400 animate-bounce" />
        <BookHeart className="absolute bottom-40 left-10 md:left-20 w-12 md:w-16 h-12 md:h-16 text-green-400 animate-bounce delay-500" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Başlık */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 mb-4 md:mb-6">
            Hikayemiz
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            Her büyük aşkın bir başlangıcı vardır...
            <br />
            İşte bizim hikayemiz.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Merkez çizgi */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-300 via-emerald-300 to-teal-300 rounded-full" />

          {/* Timeline kartları */}
          <div className="space-y-16 lg:space-y-24">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Kart */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 lg:pr-12 text-right" : "pl-8 lg:pl-12 text-left"
                  }`}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-200/50 hover:scale-105 hover:border-green-300">
                    <div className={`mb-4 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className="bg-gradient-to-br from-green-100 to-teal-100 p-3 lg:p-4 rounded-full">
                        <event.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${event.iconColor}`} />
                      </div>
                    </div>
                    <span className="text-green-600 font-semibold text-xs lg:text-sm uppercase tracking-wider">
                      {event.date}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-serif font-bold text-gray-800 mt-2 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Merkez nokta */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-4 border-white shadow-lg" />
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-50" />
                  </div>
                </div>

                {/* Boş alan */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="md:hidden relative max-w-xl mx-auto">
          {/* Sol çizgi */}
          <div className="absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-green-300 via-emerald-300 to-teal-300 rounded-full" />

          {/* Timeline kartları */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 relative flex gap-4"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Nokta */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <event.icon className={`w-6 h-6 ${event.iconColor}`} />
                  </div>
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30" />
                </div>

                {/* Kart */}
                <div className="flex-1 pb-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-200/50">
                    <span className="text-green-600 font-semibold text-xs uppercase tracking-wider">
                      {event.date}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-gray-800 mt-2 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          transform: translateY(30px);
        }

        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0);
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}