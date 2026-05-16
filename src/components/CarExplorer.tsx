import { useState } from "react";

interface CarPart {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  position: { top: string; left: string };
  detail: string[];
  color: string;
}

const carParts: CarPart[] = [
  {
    id: "front-wing",
    name: "Sayap Depan",
    nameEn: "Front Wing",
    description:
      "Sayap depan adalah komponen aerodinamika pertama yang membelah udara. Fungsinya menghasilkan downforce untuk menekan ban depan ke aspal, meningkatkan traksi dan kontrol saat berbelok.",
    position: { top: "52%", left: "6%" },
    detail: [
      "Menghasilkan ~25% total downforce",
      "Dapat diatur hingga 20 derajat",
      "Material: Carbon Fiber",
      "Berat: ~8 kg",
    ],
    color: "#cc0000",
  },
  {
    id: "halo",
    name: "Halo",
    nameEn: "Halo System",
    description:
      "Sistem pelindung kokpit berbentuk seperti sandal yang terbuat dari titanium padat. Dirancang untuk melindungi kepala pengemudi dari benda-benda yang masuk ke area kokpit dengan kecepatan tinggi.",
    position: { top: "18%", left: "42%" },
    detail: [
      "Material: Titanium Grade 5",
      "Kekuatan: 125 kN",
      "Berat: ~9 kg",
      "Wajib sejak 2018",
    ],
    color: "#f59e0b",
  },
  {
    id: "sidepod",
    name: "Sidepod",
    nameEn: "Sidepod",
    description:
      "Sidepod adalah panel samping yang mengarahkan aliran udara ke radiator pendingin mesin dan unit daya. Desainnya kritis untuk efisiensi aerodinamika keseluruhan.",
    position: { top: "45%", left: "42%" },
    detail: [
      "Menampung radiator mesin",
      "Mengoptimalkan aliran udara",
      "Desain undercut untuk downforce",
      "Material: Carbon Fiber",
    ],
    color: "#3b82f6",
  },
  {
    id: "rear-wing",
    name: "Sayap Belakang",
    nameEn: "Rear Wing",
    description:
      "Sayap belakang menghasilkan sebagian besar downforce keseluruhan. Dilengkapi DRS (Drag Reduction System) yang dapat membuka flap untuk mengurangi hambatan udara pada trek lurus.",
    position: { top: "20%", left: "85%" },
    detail: [
      "Menghasilkan ~40% total downforce",
      "DRS mengurangi drag 0.05-0.1 s/lap",
      "Sudut bisa diatur sesuai sirkuit",
      "Material: Carbon Fiber",
    ],
    color: "#cc0000",
  },
  {
    id: "cockpit",
    name: "Kokpit",
    nameEn: "Cockpit",
    description:
      "Ruang pengemudi yang dirancang secara ergonomis dan sangat sempit. Dilindungi oleh struktur survival cell dari carbon fiber yang mampu menahan benturan ekstrem.",
    position: { top: "25%", left: "55%" },
    detail: [
      "Survival cell carbon fiber",
      "Kursi disesuaikan tiap pengemudi",
      "Suhu dalam bisa 50°C",
      "Setir: 30+ tombol fungsi",
    ],
    color: "#10b981",
  },
  {
    id: "floor",
    name: "Lantai Aero",
    nameEn: "Aerodynamic Floor",
    description:
      "Lantai adalah area penghasil downforce terbesar di era ground effect. Terowongan venturi di bawah mobil menciptakan efek hisap yang menekan mobil ke aspal.",
    position: { top: "72%", left: "55%" },
    detail: [
      "Menghasilkan ~50% total downforce",
      "Ground clearance: ~10mm",
      "Ground effect teknologi",
      "Area paling kritis secara regulasi",
    ],
    color: "#8b5cf6",
  },
  {
    id: "tires",
    name: "Ban Pirelli",
    nameEn: "Pirelli Tires",
    description:
      "Ban Pirelli P Zero 18 inci adalah satu-satunya titik kontak antara mobil dan aspal. Tersedia dalam berbagai kompon dari Soft (merah) hingga Hard (putih) dengan karakteristik berbeda.",
    position: { top: "75%", left: "20%" },
    detail: [
      "Diameter: 18 inci",
      "Kompon: Soft/Medium/Hard",
      "Suhu kerja: 80-110°C",
      "Berat per ban: ~9.5 kg",
    ],
    color: "#eab308",
  },
  {
    id: "drs",
    name: "DRS",
    nameEn: "Drag Reduction System",
    description:
      "Sistem pengurangan hambatan udara yang membuka celah pada sayap belakang. Aktif ketika pembalap berada dalam jarak 1 detik di belakang lawan di zona DRS yang ditentukan.",
    position: { top: "12%", left: "80%" },
    detail: [
      "Membuka flap sayap belakang",
      "Pengurangan drag: ~80 counts",
      "Aktif di zona tertentu",
      "Dinonaktifkan saat hujan",
    ],
    color: "#06b6d4",
  },
];

interface CarExplorerProps {
  onViewEngine: () => void;
}

export default function CarExplorer({ onViewEngine }: CarExplorerProps) {
  const [selectedPart, setSelectedPart] = useState<CarPart | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)" }}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#cc0000]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#cc0000]" />
            <span className="text-[#cc0000] text-xs font-bold tracking-[0.4em] uppercase">Jelajahi Mobil</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#cc0000]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Ferrari <span className="text-[#cc0000]">SF-25</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base max-w-xl mx-auto">
            Klik pada bagian-bagian mobil untuk melihat deskripsi detail setiap komponen
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Car Interactive Area */}
          <div className="flex-1 relative">
            <div className="relative bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-2xl border border-white/5 p-4 md:p-8 overflow-hidden">
              {/* Grid background */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="smallgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#cc0000" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#smallgrid)" />
                </svg>
              </div>

              {/* Car image with hotspots */}
              <div className="relative">
                <img
                  src="/images/ferrari-sf25.png"
                  alt="Ferrari SF-25 Interactive"
                  className="w-full object-contain"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(204,0,0,0.25))",
                    minHeight: "280px",
                  }}
                />

                {/* Hotspot Dots */}
                {carParts.map((part) => (
                  <button
                    key={part.id}
                    className="absolute group"
                    style={{ top: part.position.top, left: part.position.left, transform: "translate(-50%, -50%)" }}
                    onClick={() => setSelectedPart(part.id === selectedPart?.id ? null : part)}
                    onMouseEnter={() => setHoveredPart(part.id)}
                    onMouseLeave={() => setHoveredPart(null)}
                  >
                    {/* Pulse rings */}
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-60"
                      style={{ backgroundColor: part.color, width: "28px", height: "28px", top: "-4px", left: "-4px" }}
                    />
                    {/* Main dot */}
                    <div
                      className="w-5 h-5 rounded-full border-2 border-white relative z-10 flex items-center justify-center transition-all duration-300 hover:scale-125"
                      style={{
                        backgroundColor: part.color,
                        boxShadow: `0 0 15px ${part.color}80`,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>

                    {/* Tooltip */}
                    {hoveredPart === part.id && (
                      <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none">
                        <div
                          className="px-3 py-1.5 rounded-lg text-white text-xs font-bold whitespace-nowrap shadow-xl"
                          style={{ backgroundColor: part.color }}
                        >
                          {part.name}
                        </div>
                        <div
                          className="w-2 h-2 mx-auto -mt-1 rotate-45"
                          style={{ backgroundColor: part.color }}
                        />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {carParts.slice(0, 4).map((part) => (
                  <button
                    key={part.id}
                    onClick={() => setSelectedPart(part.id === selectedPart?.id ? null : part)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105"
                    style={{
                      borderColor: `${part.color}60`,
                      color: selectedPart?.id === part.id ? "#000" : part.color,
                      backgroundColor: selectedPart?.id === part.id ? part.color : `${part.color}15`,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: part.color }} />
                    {part.name}
                  </button>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-2 justify-center">
                {carParts.slice(4).map((part) => (
                  <button
                    key={part.id}
                    onClick={() => setSelectedPart(part.id === selectedPart?.id ? null : part)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105"
                    style={{
                      borderColor: `${part.color}60`,
                      color: selectedPart?.id === part.id ? "#000" : part.color,
                      backgroundColor: selectedPart?.id === part.id ? part.color : `${part.color}15`,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: part.color }} />
                    {part.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Engine CTA */}
            <button
              onClick={onViewEngine}
              className="mt-6 w-full flex items-center justify-center gap-3 border border-[#cc0000]/30 hover:border-[#cc0000] bg-[#cc0000]/5 hover:bg-[#cc0000]/10 text-[#cc0000] px-6 py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Lihat Detail Mesin Ferrari 066/15
            </button>
          </div>

          {/* Info Panel */}
          <div className="lg:w-[380px] space-y-4">
            {selectedPart ? (
              <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden animate-fadeIn">
                {/* Header */}
                <div
                  className="p-6 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${selectedPart.color}20 0%, transparent 100%)`,
                    borderBottom: `1px solid ${selectedPart.color}30`,
                  }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 -translate-y-6 translate-x-6"
                    style={{ backgroundColor: selectedPart.color }} />
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${selectedPart.color}25`, border: `1px solid ${selectedPart.color}40` }}
                    >
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: selectedPart.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: selectedPart.color }}>
                        {selectedPart.nameEn}
                      </p>
                      <h3 className="text-2xl font-black text-white">{selectedPart.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {selectedPart.description}
                  </p>

                  {/* Details */}
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">Detail Teknis</p>
                    <div className="space-y-2">
                      {selectedPart.detail.map((d, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm text-gray-300 bg-white/5 rounded-lg px-4 py-2.5"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: selectedPart.color }}
                          />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Default state */}
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#cc0000]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#cc0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-lg">Cara Menggunakan</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Klik pada titik-titik berwarna pada gambar mobil atau tombol label di bawah gambar untuk melihat informasi detail setiap komponen Ferrari SF-25.
                  </p>
                </div>

                {/* Parts list */}
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">Komponen Tersedia</p>
                  <div className="space-y-2">
                    {carParts.map((part) => (
                      <button
                        key={part.id}
                        onClick={() => setSelectedPart(part)}
                        className="w-full flex items-center gap-3 text-sm text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-4 py-2.5 transition-all duration-200 text-left group"
                      >
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
                          style={{ backgroundColor: part.color }}
                        />
                        <span>{part.name}</span>
                        <svg className="w-3 h-3 text-gray-600 group-hover:text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
