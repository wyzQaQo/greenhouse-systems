export const dynamicParams = false;
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { companyInfo, stats } from "@/data/navigation";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full relative z-10">
      <HeroSection />
      <StatsBar />
      <ProductShowcase />
      <TechnologySection />
      <WhyChooseUs />
      <ClientsSection />
      <CTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#4CAF50]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#F59E0B]/5 blur-[100px] rounded-full" />
      <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-tag mb-6">
              <span className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
              COMMERCIAL GREENHOUSE SYSTEMS
            </div>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-6">
              Intelligent
              <span className="text-[#F59E0B]"> Shading</span>
              <br />& Drive Systems
            </h1>
            <p className="text-[#81C784] text-lg leading-relaxed max-w-[500px] mb-8">
              Precision-engineered gear motors, blackout screen systems, and climate control automation for next-generation commercial greenhouses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-glass btn-primary">GET A QUOTE &rarr;</Link>
              <Link href="/products" className="btn-glass">VIEW PRODUCTS</Link>
            </div>
            <div className="mt-12 grid grid-cols-4 gap-4">
              {[
                { label: "MOTOR TYPE", value: "DC/AC GEAR" },
                { label: "TORQUE", value: "UP TO 200NM" },
                { label: "PROTECTION", value: "IP65" },
                { label: "CERT", value: "CE / UL" },
              ].map((s) => (
                <div key={s.label} className="glass-card !p-3 text-center">
                  <div className="text-[9px] text-[#4A7C59] uppercase tracking-wider">{s.label}</div>
                  <div className="text-xs font-bold text-white mt-1">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="glass-panel !p-2">
              <img src="https://picsum.photos/seed/greenhouse-tech/800/600" alt="Greenhouse Automation" className="w-full aspect-[4/3] object-cover rounded-xl opacity-80" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-panel p-4 w-56 float">
              <div className="text-[9px] text-[#4A7C59] uppercase tracking-wider mb-2">SYSTEM STATUS</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-[#4CAF50] rounded-full" />
                <span className="text-xs text-[#81C784]">ALL SYSTEMS ACTIVE</span>
              </div>
              {["Shading", "Ventilation", "Irrigation"].map((s) => (
                <div key={s} className="flex justify-between items-center text-[10px] text-[#81C784]/70 py-1 border-b border-white/5">
                  <span>{s}</span><span className="text-[#4CAF50]">ONLINE</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1A0F] to-transparent" />
    </section>
  );
}

function StatsBar() {
  return (
    <section className="border-y border-white/5 bg-[#0F2415]/50 backdrop-blur">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-1">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[10px] text-[#81C784]/50 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [c, setC] = useState(0);
  const r = useRef<HTMLSpanElement>(null);
  const d = useRef(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting && !d.current) { d.current = true; const t = 2000; const s = 60; const inc = end / s; let cur = 0; const timer = setInterval(() => { cur += inc; if (cur >= end) { setC(end); clearInterval(timer); } else setC(Math.floor(cur)); }, t / s); } }, { threshold: 0.3 });
    if (r.current) o.observe(r.current);
    return () => o.disconnect();
  }, [end]);
  return <span ref={r}>{c}{suffix}</span>;
}

function ProductShowcase() {
  const prods = [
    { title: "Blackout Screen Motors", desc: "24V DC internal motors. 100% light deprivation. Anti-mold certified fabric.", img: "https://picsum.photos/seed/blackout-motor/800/600", tag: "IP65 RATED" },
    { title: "Rack & Pinion Drives", desc: "3-phase gear motors. 200NM torque. Continuous duty rated.", img: "https://picsum.photos/seed/gear-motor/800/600", tag: "200NM TORQUE" },
    { title: "Roll-Up Sidewall Motors", desc: "Tubular motors with limit switches. 60-120NM range. Quiet operation.", img: "https://picsum.photos/seed/rollup-motor/800/600", tag: "60-120NM" },
    { title: "Climate Controllers", desc: "Multi-zone automation. Humidity, temp, CO2 sensing. Cloud-connected.", img: "https://picsum.photos/seed/climate-control/800/600", tag: "IoT ENABLED" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="section-tag mb-4">PRODUCT SYSTEMS</div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">Precision <span className="text-[#F59E0B]">Automation</span> Components</h2>
        <p className="text-[#81C784] max-w-[600px] mb-12">From blackout screen motors to full climate control systems. Every component tested under real greenhouse conditions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {prods.map((p) => (
            <Link key={p.title} href="/products" className="glass-card group cursor-pointer !p-0 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2415]" />
                <span className="absolute top-3 right-3 text-[8px] bg-[#F59E0B]/20 text-[#F59E0B] px-2 py-1 rounded-full border border-[#F59E0B]/30">{p.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm mb-2 group-hover:text-[#F59E0B] transition-colors">{p.title}</h3>
                <p className="text-xs text-[#81C784]/70">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const features = [
    { icon: "⚙", title: "German-Design Gearboxes", desc: "Helical gear design. <45dB noise. 50,000-hour service life. IP65 sealed housing for high-humidity greenhouse environments." },
    { icon: "⚡", title: "Smart Motor Control", desc: "RS485/MODBUS communication. Position feedback. Soft start/stop. Overload protection with auto-reset." },
    { icon: "🛡", title: "Anti-Mold Certified Fabrics", desc: "UV-stabilized polyester. Flame retardant (M2/B1). Aluminum foil lamination for 100% blackout. 10-year warranty." },
    { icon: "🌡", title: "Multi-Zone Climate Logic", desc: "Integrated temperature, humidity, and PAR light sensing. PID-controlled vent positioning. Cloud dashboard included." },
  ];
  return (
    <section className="py-24 md:py-32 bg-[#0F2415]/50 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="section-tag mb-4">TECHNOLOGY</div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-16">Engineered for <span className="text-[#F59E0B]">Reliability</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f.title} className="glass-card group">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl shrink-0 group-hover:bg-[#F59E0B]/20 transition-colors">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-xs text-[#81C784]/70 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    { title: "Changzhou Manufacturing Hub", desc: "Located in the global greenhouse components capital. Direct access to the world's largest supply chain for greenhouse motors and accessories." },
    { title: "500+ Projects Delivered", desc: "From North American cannabis facilities to Middle Eastern desert agriculture. Our motors run in 30+ countries." },
    { title: "7-Day Sample Turnaround", desc: "In-house CNC machining and motor winding. Custom torque/speed configurations within 48 hours engineering review." },
    { title: "Complete System Supply", desc: "Motors, rack & pinion, cables, controllers, and fabrics — one supplier, one warranty, one point of contact." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-tag mb-4">WHY VERDANT</div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-6">The <span className="text-[#F59E0B]">Greenhouse</span> Automation Partner</h2>
            <p className="text-[#81C784] leading-relaxed mb-8">We don&apos;t just sell motors — we engineer complete shading and drive solutions that integrate seamlessly with any greenhouse management system.</p>
            <Link href="/contact" className="btn-glass btn-primary">TALK TO AN ENGINEER &rarr;</Link>
          </div>
          <div className="space-y-3">
            {reasons.map((r, i) => (
              <div key={r.title} className="glass-card flex gap-4">
                <div className="text-[#F59E0B] font-bold text-sm shrink-0 mt-0.5">{`0${i + 1}`}</div>
                <div>
                  <h3 className="font-bold text-sm mb-1">{r.title}</h3>
                  <p className="text-xs text-[#81C784]/70">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const clients = ["CANNABIS CULTIVATION", "DESERT AGRICULTURE", "HYDROPONIC FARMS", "RESEARCH GREENHOUSES", "VEGETABLE PRODUCTION", "FLORICULTURE", "VERTICAL FARMING", "UNIVERSITY RESEARCH"];
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="section-tag mb-8">INDUSTRIES</div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {clients.map((c) => (
            <div key={c} className="glass-card !rounded-none !border-0 !border-b !border-r border-white/5 flex items-center justify-center p-6 hover:bg-white/5 transition-colors cursor-default">
              <span className="text-xs text-[#81C784]/70">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 md:py-32 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2415]/50 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
        <div className="section-tag inline-flex mb-6">START YOUR PROJECT</div>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 max-w-[700px] mx-auto">
          Ready to Automate Your <span className="text-[#F59E0B]">Greenhouse?</span>
        </h2>
        <p className="text-[#81C784] max-w-[500px] mx-auto mb-10">Tell us about your greenhouse dimensions and crop type. We&apos;ll deliver a complete shading and drive system proposal within 48 hours.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-glass btn-primary">REQUEST ENGINEERING REVIEW &rarr;</Link>
        </div>
        <div className="mt-16 inline-flex flex-wrap gap-6 px-8 py-4 glass-card">
          {[{ label: "TEL", val: companyInfo.phone }, { label: "WA", val: companyInfo.whatsapp }, { label: "GMT", val: "+8 (BEIJING)" }].map((i) => (
            <div key={i.label} className="flex items-center gap-2">
              <span className="text-[10px] text-[#F59E0B] font-bold">[{i.label}]</span>
              <span className="text-xs text-[#81C784]/70">{i.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
