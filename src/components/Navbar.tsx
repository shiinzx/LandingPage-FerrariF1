import { useState, useEffect } from "react";

interface NavbarProps {
  onNavigate: (section: "car" | "engine") => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[#cc0000]/20 shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <rect width="40" height="40" rx="4" fill="#cc0000" />
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="serif">SF</text>
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm tracking-widest uppercase leading-none">Scuderia Ferrari</p>
            <p className="text-[#cc0000] text-xs tracking-[0.2em] uppercase leading-none mt-0.5">SF-25 | 2025</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Beranda", href: "#hero" },
            { label: "Mobil", action: () => onNavigate("car") },
            { label: "Mesin", action: () => onNavigate("engine") },
            { label: "Pembalap", href: "#drivers" },
            { label: "Spesifikasi", href: "#specs" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.action) item.action();
                else if (item.href) {
                  const el = document.querySelector(item.href);
                  el?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-gray-300 hover:text-[#cc0000] text-sm font-medium tracking-wider uppercase transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cc0000] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Badge */}
        <div className="hidden md:flex items-center gap-2 bg-[#cc0000]/10 border border-[#cc0000]/30 rounded-full px-4 py-1.5">
          <div className="w-2 h-2 rounded-full bg-[#cc0000] animate-pulse" />
          <span className="text-[#cc0000] text-xs font-medium tracking-widest uppercase">Formula 1</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-[#cc0000]/20 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Beranda", href: "#hero" },
            { label: "Mobil", action: () => { onNavigate("car"); setMenuOpen(false); } },
            { label: "Mesin", action: () => { onNavigate("engine"); setMenuOpen(false); } },
            { label: "Pembalap", href: "#drivers" },
            { label: "Spesifikasi", href: "#specs" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.action) item.action();
                else if (item.href) {
                  const el = document.querySelector(item.href);
                  el?.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }
              }}
              className="text-gray-300 hover:text-[#cc0000] text-sm font-medium tracking-wider uppercase transition-colors duration-300 text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
