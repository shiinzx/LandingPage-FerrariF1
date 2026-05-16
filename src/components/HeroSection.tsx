import { useEffect, useState } from "react";

interface HeroProps {
  onExplore: (section: "car" | "engine") => void;
}

export default function HeroSection({ onExplore }: HeroProps) {
  const [loaded, setLoaded] = useState(false);
  const [countUp, setCountUp] = useState({ speed: 0, power: 0, rpm: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const targets = { speed: 363, power: 1050, rpm: 15000 };

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCountUp({
        speed: Math.round(targets.speed * ease),
        power: Math.round(targets.power * ease),
        rpm: Math.round(targets.rpm * ease),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [loaded]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a0000 40%, #0a0a0a 100%)",
      }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#cc0000" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Red glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#cc0000]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#cc0000]/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#880000]/10 blur-[80px] pointer-events-none" />

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#cc0000]/30 via-transparent to-transparent transform -skew-x-12" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#cc0000]/20 to-transparent transform skew-x-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        {/* Top label */}
        <div
          className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#cc0000]" />
          <span className="text-[#cc0000] text-xs font-bold tracking-[0.4em] uppercase">Scuderia Ferrari HP</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#cc0000]" />
        </div>

        {/* Main Title */}
        <div className="text-center">
          <h1
            className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-none transition-all duration-1000 delay-100 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#cc0000]">SF</span>
            <span className="text-white">-25</span>
          </h1>
          <p
            className={`mt-4 text-lg md:text-2xl text-gray-400 font-light tracking-[0.3em] uppercase transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Mahakarya Kecepatan
          </p>
        </div>

        {/* Ferrari Car Image */}
        <div
          className={`relative mx-auto mt-10 transition-all duration-1200 delay-300 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative">
            {/* Car glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#cc0000]/20 blur-2xl rounded-full" />
            <img
              src="/images/ferrari-sf25.png"
              alt="Ferrari SF-25"
              className="w-full max-w-4xl mx-auto object-contain relative z-10 drop-shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-500"
              style={{ filter: "drop-shadow(0 0 40px rgba(204,0,0,0.3))" }}
              onClick={() => onExplore("car")}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
              <div className="flex flex-col items-center gap-1 animate-bounce">
                <span className="text-[#cc0000] text-xs font-bold tracking-widest uppercase">Klik Untuk Jelajahi</span>
                <svg className="w-4 h-4 text-[#cc0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { label: "Top Speed", value: countUp.speed, unit: "km/h", icon: "⚡" },
            { label: "Total Power", value: countUp.power, unit: "HP", icon: "🔥" },
            { label: "Max RPM", value: countUp.rpm.toLocaleString(), unit: "rpm", icon: "🏎️" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 text-center hover:border-[#cc0000]/40 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#cc0000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl md:text-4xl font-black text-white">{stat.value}</div>
              <div className="text-[#cc0000] text-xs font-bold tracking-wider uppercase mt-1">{stat.unit}</div>
              <div className="text-gray-500 text-xs mt-1 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => onExplore("car")}
            className="group flex items-center gap-3 bg-[#cc0000] hover:bg-[#ee0000] text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#cc0000]/40 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Jelajahi Mobil
          </button>
          <button
            onClick={() => onExplore("engine")}
            className="group flex items-center gap-3 border border-[#cc0000]/50 hover:border-[#cc0000] text-[#cc0000] hover:text-white hover:bg-[#cc0000] px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Jelajahi Mesin
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-[#cc0000] to-transparent" />
      </div>
    </section>
  );
}
