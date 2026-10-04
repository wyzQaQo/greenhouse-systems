import Link from "next/link";

export default function ProductsPage() {
  const prods = [
    { name: "24V DC Blackout Screen Motor", tag: "IP65 | 60NM | Silent", desc: "Internal tubular motor for blackout/energy screen systems. 100% light deprivation capability. Anti-condensation heating element.", feat: [{ l: "Torque", v: "60NM" }, { l: "Voltage", v: "24V DC" }, { l: "Speed", v: "3.5 RPM" }, { l: "IP Rating", v: "IP65" }], img: "https://picsum.photos/seed/motor-bk/800/600" },
    { name: "3-Phase Gear Motor 200NM", tag: "380V | 200NM | Industrial", desc: "Heavy-duty rack & pinion drive motor for large commercial greenhouse ventilation and shading systems.", feat: [{ l: "Torque", v: "200NM" }, { l: "Power", v: "0.75kW" }, { l: "Ratio", v: "1:800" }, { l: "Duty", v: "S1 Continuous" }], img: "https://picsum.photos/seed/motor-3ph/800/600" },
    { name: "Roll-Up Sidewall Motor", tag: "120NM | Limit Switch | Quiet", desc: "Tubular motor with integrated mechanical limit switches for greenhouse sidewall roll-up systems.", feat: [{ l: "Torque", v: "120NM" }, { l: "Speed", v: "12 RPM" }, { l: "Noise", v: "<45dB" }, { l: "Tube", v: "60mm" }], img: "https://picsum.photos/seed/motor-roll/800/600" },
    { name: "Blackout Screen Fabric", tag: "100% BLACKOUT | UV | FR", desc: "Aluminum-laminated polyester fabric. Fire retardant M2/B1 certified. Anti-mold and UV stabilized.", feat: [{ l: "Material", v: "PET+AL" }, { l: "Blackout", v: "100%" }, { l: "FR Rating", v: "M2/B1" }, { l: "Warranty", v: "10 Years" }], img: "https://picsum.photos/seed/fabric-bk/800/600" },
    { name: "Multi-Zone Climate Controller", tag: "IoT | MODBUS | Cloud", desc: "Integrated greenhouse climate controller with temperature, humidity, CO2, and PAR light sensing. PID position control.", feat: [{ l: "Zones", v: "Up to 16" }, { l: "Protocol", v: "RS485 MODBUS" }, { l: "Sensors", v: "Temp+RH+CO2" }, { l: "Cloud", v: "Web + App" }], img: "https://picsum.photos/seed/controller-iot/800/600" },
    { name: "Rack & Pinion Assembly", tag: "Galvanized | 2M Lengths", desc: "Hot-dip galvanized steel rack and matching pinion gear for vent and shading drive systems.", feat: [{ l: "Material", v: "Galvanized Steel" }, { l: "Module", v: "M4" }, { l: "Length", v: "2000mm" }, { l: "Pinion", v: "20 teeth" }], img: "https://picsum.photos/seed/rack-pinion/800/600" },
  ];

  return (
    <main className="overflow-x-hidden w-full max-w-full relative z-10">
      <section className="min-h-[40vh] flex items-center border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-16 w-full">
          <div className="section-tag mb-4">PRODUCT CATALOG</div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4">Greenhouse <span className="text-[#F59E0B]">Automation</span> Components</h1>
          <p className="text-[#81C784] max-w-[600px]">Industrial-grade motors, fabrics, controllers, and drive assemblies for commercial greenhouse projects worldwide.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {prods.map((p) => (
              <div key={p.name} className="glass-card group !p-0 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2415]" />
                  <span className="absolute top-3 right-3 text-[8px] bg-[#F59E0B]/20 text-[#F59E0B] px-2 py-1 rounded-full border border-[#F59E0B]/30">{p.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm mb-1 group-hover:text-[#F59E0B] transition-colors">{p.name}</h3>
                  <p className="text-xs text-[#81C784]/70 mb-4">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {p.feat.map((f) => (
                      <div key={f.l} className="bg-white/5 rounded-lg p-2">
                        <div className="text-[8px] text-[#4A7C59] uppercase">{f.l}</div>
                        <div className="text-[10px] font-bold text-white">{f.v}</div>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-glass btn-primary text-[10px] w-full justify-center py-2 text-center block">REQUEST QUOTE</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
