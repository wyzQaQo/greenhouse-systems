export const dynamicParams = false;
"use client";
import Link from "next/link";
import { stats } from "@/data/navigation";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full relative z-10">
      <section className="min-h-[40vh] flex items-center border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-16 w-full">
          <div className="section-tag mb-4">ABOUT VERDANT</div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4">Greenhouse <span className="text-[#F59E0B]">Automation</span> Excellence</h1>
          <p className="text-[#81C784] max-w-[600px]">Based in Changzhou — the global greenhouse components capital. 12+ years of precision motor manufacturing for commercial greenhouse projects worldwide.</p>
        </div>
      </section>
      <section className="border-b border-white/5 bg-[#0F2415]/50">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-2">{s.value}{s.suffix}</div>
                <div className="text-[10px] text-[#4A7C59] uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="tech" className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag mb-4">MANUFACTURING</div>
              <h2 className="text-3xl font-bold mb-6">Changzhou <span className="text-[#F59E0B]">Production</span> Base</h2>
              <div className="space-y-4 text-sm text-[#81C784]/80">
                <p>Our 30,000 sqm facility houses complete in-house motor production — from copper wire winding to final assembly and load testing.</p>
                <div className="grid grid-cols-2 gap-2 mt-6">
                  {["CNC Machining", "Motor Winding Line", "Gear Hobbing", "Assembly Line", "Load Test Bench", "IP Test Chamber", "Noise Test Room", "Quality Lab"].map((i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg p-3">
                      <span className="text-[#F59E0B] text-[10px]">&gt;</span>
                      <span className="text-xs text-[#81C784]">{i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="glass-panel overflow-hidden"><img src="https://picsum.photos/seed/greenhouse-factory/800/600" alt="Factory" className="w-full h-[400px] object-cover opacity-80" /></div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-24 border-t border-white/5 bg-[#0F2415]/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="section-tag mb-8">EXPLORE OUR SYSTEMS</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Shading Motors & Drives", desc: "24V DC blackout screen motors, 3-phase 200NM gear motors, and rack & pinion assemblies. IP65 rated for greenhouse environments.", href: "/products" },
              { title: "Screen Fabrics & Materials", desc: "100% blackout aluminum-laminated PET fabrics. UV-stabilized, flame retardant M2/B1 certified, anti-mold. 10-year warranty.", href: "/products" },
              { title: "Climate Controllers & IoT", desc: "Multi-zone automation with MODBUS RS485. PID vent control. Cloud dashboard with temp, humidity, CO2, and PAR light sensing.", href: "/products" },
            ].map((link) => (
              <Link key={link.title} href={link.href} className="glass-card group">
                <h3 className="font-bold text-sm mb-2 group-hover:text-[#F59E0B] transition-colors">{link.title}</h3>
                <p className="text-xs text-[#81C784]/70 leading-relaxed mb-3">{link.desc}</p>
                <span className="text-[10px] text-[#F59E0B] font-bold group-hover:translate-x-1 transition-transform inline-block">LEARN MORE &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="section-tag mb-4">FAQ</div>
          <h2 className="text-3xl font-bold mb-12">Greenhouse Shading <span className="text-[#F59E0B]">Questions</span></h2>
          <div className="space-y-4">
            {[
              { q: "What is the difference between a blackout screen motor and a standard roll-up motor?", a: "Blackout screen motors require higher torque (60NM+) and precise positioning control because the screen fabric is heavier (200-300g/m2 with aluminum lamination) and must achieve 100% light seal. Our blackout motors feature integrated limit switches, soft-start/stop to prevent fabric tearing, and optional MODBUS feedback for climate controller integration. Standard roll-up motors (60-120NM) are designed for sidewall ventilation and lighter shade screens." },
              { q: "How long do greenhouse gear motors typically last?", a: "VERDANT motors are rated for 50,000+ hours of operation — equivalent to 10+ years in a typical commercial greenhouse. Key longevity factors include: IP65 sealed housing (prevents humidity ingress), helical gear design (lower friction than worm gears), and thermal overload protection with auto-reset. All motors undergo 72-hour continuous load testing before shipment." },
              { q: "Can your systems handle desert greenhouse conditions?", a: "Yes. Our motors are rated for -20°C to +70°C ambient operation. For Middle Eastern desert greenhouse projects, we specify high-temperature grease, enhanced UV-stabilized cable sheathing, and dust-sealed enclosures. Our blackout fabrics include aluminum foil lamination that reflects 95%+ of solar radiation — critical for desert climate control." },
              { q: "Do you provide installation support for overseas greenhouse projects?", a: "We provide complete installation manuals, wiring diagrams, and CAD layout drawings with every order. For large commercial projects (20+ motors), we can arrange on-site commissioning support through our partner network. Remote video support is available for all orders. Our engineering team speaks English and can guide your local installation crew through video call during your business hours." },
              { q: "What makes Changzhou the right manufacturing location for greenhouse components?", a: "Changzhou (Jiangsu province) is the world's largest manufacturing cluster for greenhouse motors, gearboxes, and screen fabrics — supplying over 70% of global greenhouse automation components. Our location gives us direct access to the most advanced motor winding facilities, CNC gear hobbing shops, and fabric coating lines in the world, with significantly shorter supply chains and lower costs than European manufacturers." },
            ].map((faq, i) => (
              <details key={i} className="glass-card cursor-pointer group">
                <summary className="font-bold text-sm py-2 list-none flex justify-between items-center group-hover:text-[#F59E0B] transition-colors">
                  {faq.q}
                  <span className="text-[#F59E0B] text-lg ml-4 shrink-0">+</span>
                </summary>
                <p className="text-xs text-[#81C784]/70 leading-relaxed mt-3 pt-3 border-t border-white/5">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
