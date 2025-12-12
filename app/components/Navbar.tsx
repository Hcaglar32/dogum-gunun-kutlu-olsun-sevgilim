"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Heart, Menu, X, Home, BookHeart, Images, MessageCircleHeart, Gift } from "lucide-react";

const navItems = [
  { name: "Biz", href: "#hero", icon: Home },
  { name: "Hikayemiz", href: "#hikayemiz", icon: BookHeart },
  { name: "Anılar", href: "#anilar", icon: Images },
  { name: "Kalbimin Söyledikleri", href: "#kalp", icon: MessageCircleHeart },
  { name: "Senin İçin", href: "#mesaj", icon: Gift },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Navbar animasyonu
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    // Scroll event listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-romantic">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Kalp */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="nav-item flex items-center gap-2 text-romantic-800 hover:text-romantic-600 transition-colors"
          >
            <Heart className="w-8 h-8 text-romantic-500 fill-romantic-500 animate-heart-beat" />
            <span className="font-elegant text-lg font-semibold hidden sm:block">
              Bizim Hikayemiz
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-item flex items-center gap-1.5 text-romantic-800 hover:text-romantic-500 transition-colors font-medium text-sm tracking-wide relative group"
                >
                  <IconComponent className="w-4 h-4" />
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-romantic-500 transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden nav-item p-2 text-romantic-800 hover:text-romantic-500 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 text-left text-romantic-800 hover:text-romantic-500 hover:bg-romantic-100 transition-all py-3 px-4 rounded-xl font-medium"
                >
                  <IconComponent className="w-5 h-5" />
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
