export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 relative overflow-hidden" style={{ background: "#080808" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full bg-[#cc0000]/5 blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cc0000] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">SF</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-widest uppercase">Scuderia Ferrari</p>
                <p className="text-[#cc0000] text-xs tracking-widest uppercase">SF-25 Interactive</p>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-2 text-center md:text-left">
              Website interaktif eksplorasi Ferrari SF-25 F1 2025
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Beranda",
              "Eksplorasi Mobil",
              "Eksplorasi Mesin",
              "Spesifikasi",
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === "Beranda") document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                  if (item === "Spesifikasi") document.getElementById("specs")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-500 hover:text-[#cc0000] text-xs font-medium tracking-wider uppercase transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Badges */}
          <div className="flex gap-3 flex-wrap justify-center">
            {[
              { label: "Formula 1", icon: "🏎️" },
              { label: "2025 Season", icon: "📅" },
              { label: "Maranello", icon: "🇮🇹" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
              >
                <span className="text-xs">{badge.icon}</span>
                <span className="text-gray-400 text-xs">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-700 text-xs">
            © 2025 Ferrari SF-25 Interactive Explorer. Dibuat sebagai referensi edukatif.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#cc0000] animate-pulse" />
            <span className="text-gray-700 text-xs">Forza Ferrari 🐴</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
