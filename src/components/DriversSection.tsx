const drivers = [
  {
    number: "16",
    name: "Charles Leclerc",
    nationality: "Monaco 🇲🇨",
    role: "Pembalap Utama",
    seasons: "2019 – Sekarang",
    poles: "24+",
    wins: "8+",
    color: "#cc0000",
    helmet: "🪖",
    fact: "Dikenal karena kualifikasi luar biasa dan loyalitas kepada Ferrari. Pembalap terhebat Monaco masa kini.",
  },
  {
    number: "44",
    name: "Lewis Hamilton",
    nationality: "Inggris 🇬🇧",
    role: "Pembalap Baru 2025",
    seasons: "2025 – Sekarang",
    poles: "104+",
    wins: "103+",
    color: "#eab308",
    helmet: "⭐",
    fact: "Peraih 7x Juara Dunia F1, bergabung Ferrari di 2025 menjadikan ini tim impian paling ditunggu sepanjang sejarah.",
  },
];

export default function DriversSection() {
  return (
    <section
      id="drivers"
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d0000 50%, #0a0a0a 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#cc0000]/5 blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#eab308]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#cc0000]" />
            <span className="text-[#cc0000] text-xs font-bold tracking-[0.4em] uppercase">Drivers 2025</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#cc0000]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Para <span className="text-[#cc0000]">Pembalap</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base max-w-xl mx-auto">
            Dua bintang terbesar F1 bersatu dalam satu tim merah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {drivers.map((driver) => (
            <div
              key={driver.number}
              className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden group hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* BG glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${driver.color}10 0%, transparent 100%)` }}
              />

              {/* Number watermark */}
              <div
                className="absolute -right-4 -top-4 text-[120px] font-black opacity-5 leading-none select-none"
                style={{ color: driver.color }}
              >
                {driver.number}
              </div>

              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ backgroundColor: `${driver.color}20`, border: `2px solid ${driver.color}40` }}
                  >
                    {driver.helmet}
                  </div>
                  <div>
                    <div
                      className="text-3xl font-black leading-none"
                      style={{ color: driver.color }}
                    >
                      #{driver.number}
                    </div>
                    <h3 className="text-white text-xl font-black mt-1">{driver.name}</h3>
                    <p className="text-gray-400 text-sm">{driver.nationality}</p>
                  </div>
                </div>

                {/* Role badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                  style={{ backgroundColor: `${driver.color}15`, border: `1px solid ${driver.color}30`, color: driver.color }}
                >
                  {driver.role}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Musim di Ferrari", value: driver.seasons },
                    { label: "Pole Positions", value: driver.poles },
                    { label: "Kemenangan", value: driver.wins },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/5 rounded-xl p-3 text-center"
                    >
                      <div className="text-white font-black text-sm">{stat.value}</div>
                      <div className="text-gray-600 text-[10px] tracking-wider uppercase mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Fact */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {driver.fact}
                </p>

                {/* Bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${driver.color} 0%, ${driver.color}00 100%)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
