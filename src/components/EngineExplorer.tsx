import { useState } from "react";

interface EnginePart {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  position: { top: string; left: string };
  specs: { label: string; value: string }[];
  color: string;
  icon: string;
}

const engineParts: EnginePart[] = [
  {
    id: "v6-block",
    name: "Blok Mesin V6",
    nameEn: "V6 Engine Block",
    description:
      "Jantung dari Power Unit Ferrari 066/15. Mesin V6 berkapasitas 1600cc dengan sudut silinder 90 derajat menghasilkan tenaga luar biasa melalui pembakaran langsung bertekanan tinggi. Blok mesin dirancang seringan mungkin menggunakan paduan logam khusus.",
    position: { top: "45%", left: "42%" },
    specs: [
      { label: "Konfigurasi", value: "V6, 90°" },
      { label: "Kapasitas", value: "1600 cc" },
      { label: "Bore", value: "80 mm" },
      { label: "Stroke", value: "53 mm" },
      { label: "Jumlah Klep", value: "4 per silinder" },
      { label: "Max RPM", value: "15.000 rpm" },
    ],
    color: "#cc0000",
    icon: "🔴",
  },
  {
    id: "turbocharger",
    name: "Turbocharger",
    nameEn: "Single Turbocharger",
    description:
      "Turbocharger tunggal memampatkan udara masuk ke mesin untuk meningkatkan pembakaran dan tenaga. Gas buang dari mesin memutar turbin yang kemudian memampatkan udara segar masuk ke silinder dengan efisiensi tinggi.",
    position: { top: "28%", left: "62%" },
    specs: [
      { label: "Tipe", value: "Single Turbo" },
      { label: "Kompressor", value: "Sentrifugal" },
      { label: "Tekanan Boost", value: "~3.5 bar" },
      { label: "Intercooler", value: "Air-to-Air" },
      { label: "Material", value: "Titanium Alloy" },
      { label: "Suplai Udara", value: "Massa 100 kg/jam" },
    ],
    color: "#f97316",
    icon: "🌀",
  },
  {
    id: "mgu-k",
    name: "MGU-K",
    nameEn: "Motor Generator Unit - Kinetic",
    description:
      "Motor Generator Unit Kinetic adalah komponen hybrid yang mengubah energi kinetik pengereman menjadi energi listrik (regenerasi) dan sebaliknya memberikan dorongan tenaga tambahan saat akselerasi. Dikenal sebagai 'KERS' di era sebelumnya.",
    position: { top: "60%", left: "30%" },
    specs: [
      { label: "Daya Maksimum", value: "120 kW (163 HP)" },
      { label: "Max RPM", value: "50.000 rpm" },
      { label: "Fungsi", value: "Deploy & Harvest" },
      { label: "Terhubung ke", value: "Crankshaft" },
      { label: "Energi Deploy", value: "33.3 kJ/lap max" },
      { label: "Berat", value: "~7 kg" },
    ],
    color: "#10b981",
    icon: "⚡",
  },
  {
    id: "mgu-h",
    name: "MGU-H",
    nameEn: "Motor Generator Unit - Heat",
    description:
      "MGU-H terhubung langsung ke poros turbocharger. Mampu mengambil energi dari gas buang panas dan menggunakannya untuk listrik atau membantu turbocharger berputar lebih cepat (mengurangi turbo lag). Ini adalah komponen paling kompleks di F1.",
    position: { top: "22%", left: "75%" },
    specs: [
      { label: "Max RPM", value: "125.000 rpm" },
      { label: "Fungsi", value: "Heat Recovery" },
      { label: "Terhubung ke", value: "Turbo shaft" },
      { label: "Anti Turbo Lag", value: "Ya" },
      { label: "Energi Recover", value: "Variabel" },
      { label: "Kompleksitas", value: "Tertinggi di F1" },
    ],
    color: "#a855f7",
    icon: "🔥",
  },
  {
    id: "battery",
    name: "Baterai ES",
    nameEn: "Energy Store (Battery)",
    description:
      "Unit penyimpan energi lithium-ion yang menyimpan listrik hasil dari MGU-K dan MGU-H. Energi ini kemudian didistribusikan kembali ke MGU-K untuk memberikan dorongan tenaga tambahan kepada pengemudi.",
    position: { top: "68%", left: "55%" },
    specs: [
      { label: "Tipe", value: "Lithium-Ion" },
      { label: "Berat Minimum", value: "20 kg" },
      { label: "Kapasitas", value: "4 MJ per lap" },
      { label: "Voltase", value: "~900V" },
      { label: "Letak", value: "Di belakang pengemudi" },
      { label: "Pendingin", value: "Liquid Cooled" },
    ],
    color: "#eab308",
    icon: "🔋",
  },
  {
    id: "exhaust",
    name: "Sistem Exhaust",
    nameEn: "Exhaust System",
    description:
      "Sistem pembuangan yang dirancang untuk mengoptimalkan aliran gas buang ke turbocharger sebelum keluar. Desain exhaust mempengaruhi performa turbo dan juga digunakan untuk mengoptimalkan aerodinamika di bagian belakang mobil.",
    position: { top: "35%", left: "80%" },
    specs: [
      { label: "Material", value: "Inconel (Nikel Alloy)" },
      { label: "Suhu Gas", value: ">1000°C" },
      { label: "Menuju", value: "Turbocharger" },
      { label: "Blow Effect", value: "Aerodinamika aktif" },
      { label: "Standar Emisi", value: "FIA Regulated" },
      { label: "Berat", value: "~4 kg" },
    ],
    color: "#ef4444",
    icon: "💨",
  },
  {
    id: "direct-injection",
    name: "Injeksi Langsung",
    nameEn: "Direct Fuel Injection",
    description:
      "Sistem injeksi bahan bakar langsung bertekanan ultra-tinggi yang menyemprotkan bensin langsung ke ruang bakar. Tekanan injeksi 500 bar memastikan atomisasi bahan bakar yang sempurna untuk pembakaran efisien.",
    position: { top: "52%", left: "55%" },
    specs: [
      { label: "Tekanan Maks", value: "500 bar" },
      { label: "Tipe", value: "GDI (Direct)" },
      { label: "Konsumsi Max", value: "100 kg/jam" },
      { label: "Bahan Bakar", value: "Shell V-Power" },
      { label: "Semprotan", value: "Multi-point" },
      { label: "ECU", value: "FIA Standard" },
    ],
    color: "#06b6d4",
    icon: "💉",
  },
  {
    id: "crankshaft",
    name: "Crankshaft",
    nameEn: "Crankshaft",
    description:
      "Poros engkol yang mengubah gerakan naik-turun piston menjadi gerakan rotasi. Komponen ini menerima beban mekanis paling tinggi dalam mesin dan harus mampu bertahan pada kecepatan 15.000 RPM dengan toleransi mikron.",
    position: { top: "58%", left: "42%" },
    specs: [
      { label: "Max RPM", value: "15.000 rpm" },
      { label: "Material", value: "Steel Alloy" },
      { label: "Jumlah Bearing", value: "7 main bearings" },
      { label: "Toleransi", value: "< 5 mikron" },
      { label: "Balancing", value: "Dinamis" },
      { label: "Berat", value: "~6 kg" },
    ],
    color: "#64748b",
    icon: "⚙️",
  },
];

export default function EngineExplorer() {
  const [selectedPart, setSelectedPart] = useState<EnginePart | null>(null);
  const [activeTab, setActiveTab] = useState<"diagram" | "list">("diagram");

  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #0f0505 50%, #0a0a0a 100%)" }}
    >
      {/* BG Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#cc0000]/8 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#f97316]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#cc0000]" />
            <span className="text-[#cc0000] text-xs font-bold tracking-[0.4em] uppercase">Power Unit</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#cc0000]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Ferrari <span className="text-[#cc0000]">066/15</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base max-w-xl mx-auto">
            Jelajahi setiap komponen mesin hybrid F1 — klik bagian mesin untuk detail lengkap
          </p>

          {/* Engine key stat */}
          <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
            {[
              { v: "1050+ HP", l: "Total Power" },
              { v: "V6 Turbo", l: "Engine Type" },
              { v: "6 ERS", l: "Hybrid System" },
            ].map((s) => (
              <div key={s.l} className="bg-[#cc0000]/10 border border-[#cc0000]/20 rounded-xl px-5 py-2 text-center">
                <div className="text-[#cc0000] font-black text-lg">{s.v}</div>
                <div className="text-gray-500 text-xs tracking-widest uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#111] border border-white/10 rounded-full p-1 flex gap-1">
            {[
              { id: "diagram", label: "Diagram Interaktif" },
              { id: "list", label: "Daftar Komponen" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "diagram" | "list")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#cc0000] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "diagram" ? (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Engine Diagram */}
            <div className="flex-1">
              <div className="relative bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-2xl border border-white/5 p-4 md:p-8 overflow-hidden">
                {/* Grid */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="enginegrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#cc0000" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#enginegrid)" />
                  </svg>
                </div>

                <div className="relative">
                  <img
                    src="/images/ferrari-engine-v6.png"
                    alt="Ferrari 066/15 Engine"
                    className="w-full object-contain rounded-xl"
                    style={{
                      filter: "drop-shadow(0 0 40px rgba(204,0,0,0.2)) saturate(1.2)",
                      minHeight: "300px",
                    }}
                  />

                  {/* Hotspots */}
                  {engineParts.map((part) => (
                    <button
                      key={part.id}
                      className="absolute group"
                      style={{ top: part.position.top, left: part.position.left, transform: "translate(-50%, -50%)" }}
                      onClick={() => setSelectedPart(part.id === selectedPart?.id ? null : part)}
                    >
                      {/* Pulse */}
                      <div
                        className="absolute rounded-full animate-ping opacity-50"
                        style={{
                          backgroundColor: part.color,
                          width: "30px",
                          height: "30px",
                          top: "-5px",
                          left: "-5px",
                        }}
                      />
                      {/* Dot */}
                      <div
                        className="w-5 h-5 rounded-full border-2 border-white relative z-10 flex items-center justify-center transition-all duration-300 hover:scale-150"
                        style={{
                          backgroundColor: selectedPart?.id === part.id ? part.color : `${part.color}cc`,
                          boxShadow: selectedPart?.id === part.id ? `0 0 20px ${part.color}` : `0 0 10px ${part.color}60`,
                        }}
                      >
                        <span className="text-[8px]">{part.icon}</span>
                      </div>

                      {/* Label */}
                      <div
                        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`}
                      >
                        <div
                          className="px-2 py-1 rounded text-white text-[10px] font-bold whitespace-nowrap"
                          style={{ backgroundColor: part.color }}
                        >
                          {part.name}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* ERS Flow Diagram */}
                <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-3 text-center">Aliran Sistem ERS (Energy Recovery System)</p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    {[
                      { label: "Mesin ICE", color: "#cc0000", icon: "🔴" },
                      { label: "→", color: "#fff", icon: "" },
                      { label: "MGU-H", color: "#a855f7", icon: "🔥" },
                      { label: "↕", color: "#fff", icon: "" },
                      { label: "ES Baterai", color: "#eab308", icon: "🔋" },
                      { label: "↕", color: "#fff", icon: "" },
                      { label: "MGU-K", color: "#10b981", icon: "⚡" },
                      { label: "→", color: "#fff", icon: "" },
                      { label: "Roda", color: "#3b82f6", icon: "🏎️" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-1">
                        {item.icon && (
                          <div
                            className="px-2 py-1 rounded-lg text-xs font-bold text-white flex items-center gap-1"
                            style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}40` }}
                          >
                            <span>{item.icon}</span>
                            <span style={{ color: item.color }}>{item.label}</span>
                          </div>
                        )}
                        {!item.icon && (
                          <span className="text-gray-600 font-bold text-lg">{item.label}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="lg:w-[380px] space-y-4">
              {selectedPart ? (
                <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div
                    className="p-6 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${selectedPart.color}20 0%, transparent 100%)`,
                      borderBottom: `1px solid ${selectedPart.color}30`,
                    }}
                  >
                    <div className="absolute -top-4 -right-4 text-6xl opacity-10">{selectedPart.icon}</div>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                        style={{ backgroundColor: `${selectedPart.color}20`, border: `1px solid ${selectedPart.color}40` }}
                      >
                        {selectedPart.icon}
                      </div>
                      <div>
                        <p
                          className="text-xs font-bold tracking-widest uppercase mb-1"
                          style={{ color: selectedPart.color }}
                        >
                          {selectedPart.nameEn}
                        </p>
                        <h3 className="text-xl font-black text-white">{selectedPart.name}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {selectedPart.description}
                    </p>

                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Spesifikasi Teknis</p>
                    <div className="space-y-2">
                      {selectedPart.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm bg-white/5 rounded-lg px-4 py-2.5"
                        >
                          <span className="text-gray-400">{spec.label}</span>
                          <span
                            className="font-bold"
                            style={{ color: selectedPart.color }}
                          >
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#cc0000]/20 flex items-center justify-center text-xl">
                        🔧
                      </div>
                      <h3 className="text-white font-bold text-lg">Jelajahi Mesin</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Klik titik-titik pada diagram mesin untuk melihat informasi detail dan spesifikasi teknis setiap komponen Power Unit Ferrari 066/15.
                    </p>
                  </div>

                  {/* Quick parts */}
                  <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Komponen Mesin</p>
                    <div className="grid grid-cols-2 gap-2">
                      {engineParts.map((part) => (
                        <button
                          key={part.id}
                          onClick={() => setSelectedPart(part)}
                          className="flex items-center gap-2 text-xs text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2 transition-all duration-200 text-left group"
                        >
                          <span>{part.icon}</span>
                          <span className="truncate">{part.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* List View */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {engineParts.map((part) => (
              <button
                key={part.id}
                onClick={() => {
                  setSelectedPart(part);
                  setActiveTab("diagram");
                }}
                className="bg-[#111] border border-white/10 hover:border-white/20 rounded-2xl p-6 text-left transition-all duration-300 hover:scale-[1.02] group overflow-hidden relative"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${part.color}10 0%, transparent 100%)` }}
                />

                <div className="flex items-start gap-4 relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: `${part.color}20`, border: `1px solid ${part.color}30` }}
                  >
                    {part.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: part.color }}>
                      {part.nameEn}
                    </p>
                    <h3 className="text-white font-bold">{part.name}</h3>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 text-xs leading-relaxed line-clamp-3 relative">
                  {part.description}
                </p>

                <div className="mt-4 flex items-center gap-2 relative">
                  <div
                    className="h-1 flex-1 rounded-full"
                    style={{ backgroundColor: `${part.color}30` }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{ backgroundColor: part.color, width: "70%" }}
                    />
                  </div>
                  <span className="text-xs font-bold" style={{ color: part.color }}>
                    {part.specs[0]?.value}
                  </span>
                </div>

                <div
                  className="mt-3 text-xs font-bold tracking-wider uppercase flex items-center gap-1"
                  style={{ color: part.color }}
                >
                  Lihat Detail
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
