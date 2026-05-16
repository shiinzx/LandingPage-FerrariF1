import { useState } from "react";

const specCategories = [
  {
    id: "chassis",
    label: "Sasis",
    icon: "🏗️",
    color: "#cc0000",
    specs: [
      { label: "Material Sasis", value: "Carbon Fiber Honeycomb Composite" },
      { label: "Sistem Keamanan", value: "Halo (Titanium)" },
      { label: "Transmisi", value: "Ferrari Longitudinal 8-Speed + 1 Reverse" },
      { label: "Diferensial", value: "Hydraulic Controlled" },
      { label: "Rem Depan", value: "Brembo Carbon Disc (Ventilated)" },
      { label: "Rem Belakang", value: "Brembo + Brake-by-Wire Elektronik" },
      { label: "Suspensi Depan", value: "Double Wishbone Pull-Rod" },
      { label: "Suspensi Belakang", value: "Double Wishbone Pull-Rod" },
      { label: "Berat Total", value: "800 kg (dengan pengemudi & oli)" },
      { label: "Ukuran Ban", value: "18 inci (Pirelli P Zero)" },
    ],
  },
  {
    id: "engine",
    label: "Mesin",
    icon: "⚙️",
    color: "#f97316",
    specs: [
      { label: "Nama Power Unit", value: "Ferrari 066/15" },
      { label: "Konfigurasi", value: "V6, 90 derajat" },
      { label: "Kapasitas Mesin", value: "1.600 cc" },
      { label: "Turbocharger", value: "Single Stage Turbo" },
      { label: "Max RPM", value: "15.000 RPM" },
      { label: "Bore × Stroke", value: "80 mm × 53 mm" },
      { label: "Jumlah Klep", value: "4 klep per silinder" },
      { label: "Sistem Injeksi", value: "Direct Injection, Max 500 bar" },
      { label: "Konsumsi BBM", value: "Maks 100 kg/jam" },
      { label: "Bahan Bakar", value: "Shell V-Power (E10)" },
    ],
  },
  {
    id: "ers",
    label: "ERS Hybrid",
    icon: "⚡",
    color: "#10b981",
    specs: [
      { label: "Sistem", value: "Hybrid Energy Recovery System" },
      { label: "Baterai", value: "Lithium-Ion, Min 20 kg" },
      { label: "Energi Baterai", value: "4 MJ per lap" },
      { label: "Daya MGU-K", value: "120 kW (163 HP)" },
      { label: "Max RPM MGU-K", value: "50.000 RPM" },
      { label: "Max RPM MGU-H", value: "125.000 RPM" },
      { label: "MGU-K Fungsi", value: "Deploy & Harvest (Kinetik)" },
      { label: "MGU-H Fungsi", value: "Heat Recovery + Anti Turbo Lag" },
      { label: "Total Power", value: "~1.050+ HP (ICE + ERS)" },
      { label: "Voltase Sistem", value: "~900V DC" },
    ],
  },
  {
    id: "performance",
    label: "Performa",
    icon: "🏎️",
    color: "#3b82f6",
    specs: [
      { label: "Top Speed", value: "~363 km/h" },
      { label: "0–100 km/h", value: "~2.3 detik" },
      { label: "0–300 km/h", value: "~10.1 detik" },
      { label: "Downforce Maks", value: "~1.500 kg pada 250 km/h" },
      { label: "G-Force Cornering", value: "~5–6 G" },
      { label: "G-Force Braking", value: "~6 G" },
      { label: "Pengemudi #16", value: "Charles Leclerc (Monaco)" },
      { label: "Pengemudi #44", value: "Lewis Hamilton (Inggris)" },
      { label: "Debut Musim", value: "GP Australia 2025" },
      { label: "Tim", value: "Scuderia Ferrari HP" },
    ],
  },
];

export default function SpecsSection() {
  const [activeCategory, setActiveCategory] = useState("chassis");

  const active = specCategories.find((c) => c.id === activeCategory)!;

  return (
    <section
      id="specs"
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0c0c0c 100%)" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#cc0000]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#cc0000]" />
            <span className="text-[#cc0000] text-xs font-bold tracking-[0.4em] uppercase">Data Sheet</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#cc0000]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Spesifikasi <span className="text-[#cc0000]">Lengkap</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base max-w-xl mx-auto">
            Data teknis resmi Ferrari SF-25 musim Formula 1 2025
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {specCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "text-white scale-105"
                  : "border-white/10 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
              }`}
              style={
                activeCategory === cat.id
                  ? {
                      backgroundColor: `${cat.color}20`,
                      borderColor: `${cat.color}60`,
                      color: cat.color,
                      boxShadow: `0 0 20px ${cat.color}20`,
                    }
                  : {}
              }
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {active.specs.map((spec, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl px-5 py-3.5 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-1.5 h-6 rounded-full flex-shrink-0"
                  style={{ backgroundColor: `${active.color}60` }}
                />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{spec.label}</span>
              </div>
              <span
                className="text-sm font-bold text-right ml-4"
                style={{ color: active.color }}
              >
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <img
            src="/images/ferrari-track.png"
            alt="Ferrari on Track"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #1a0000 0%, #cc000020 50%, #1a0000 100%)" }}
          />
          <div className="absolute inset-0 border border-[#cc0000]/20 rounded-2xl" />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#cc0000] text-xs font-bold tracking-widest uppercase mb-2">Scuderia Ferrari HP — 2025</p>
              <h3 className="text-white text-2xl md:text-3xl font-black">
                "Forza Ferrari, Forza Sempre"
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Charles Leclerc #16 · Lewis Hamilton #44
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              {[
                { label: "76", desc: "Tahun di F1" },
                { label: "16", desc: "Gelar Konstruktor" },
                { label: "243", desc: "Kemenangan F1" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl font-black text-[#cc0000]">{item.label}</div>
                  <div className="text-gray-400 text-xs tracking-widest uppercase">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
