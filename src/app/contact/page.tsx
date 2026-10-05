"use client";
import { useState } from "react";
import Link from "next/link";
import { companyInfo, stats } from "@/data/navigation";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", product: "", quantity: "", message: "" });

  if (submitted) return (
    <main className="min-h-[80vh] flex items-center justify-center relative z-10">
      <div className="text-center max-w-[500px] mx-auto px-6">
        <div className="w-20 h-20 rounded-2xl bg-[#4CAF50]/20 border border-[#4CAF50]/30 flex items-center justify-center mx-auto mb-8">
          <span className="text-[#4CAF50] text-3xl">&#10003;</span>
        </div>
        <div className="section-tag inline-flex mb-4">INQUIRY RECEIVED</div>
        <h2 className="text-2xl font-bold mb-4">Thank <span className="text-[#F59E0B]">You!</span></h2>
        <p className="text-[#81C784] mb-4">Our engineering team will respond within 24 hours.</p>
        <p className="text-[10px] text-[#4A7C59]">REF: VG-{Date.now().toString(36).toUpperCase()}</p>
      </div>
    </main>
  );

  return (
    <main className="overflow-x-hidden w-full max-w-full relative z-10">
      <section className="min-h-[40vh] flex items-center border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-16 w-full">
          <div className="section-tag mb-4">GET IN TOUCH</div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4">Request a <span className="text-[#F59E0B]">Quote</span></h1>
          <p className="text-[#81C784] max-w-[600px]">Tell us about your greenhouse project. Our engineers will provide specifications, pricing, and lead time within 24-48 hours.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[{ l: "NAME *", p: "Full name", k: "name" as const, t: "text" }, { l: "EMAIL *", p: "email@company.com", k: "email" as const, t: "email" }].map((f) => (
                    <div key={f.k}><label className="block text-[10px] text-[#4A7C59] uppercase tracking-wider mb-2">{f.l}</label><input type={f.t} required value={form[f.k]} onChange={(e) => setForm({ ...form, [f.k]: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-[#F59E0B] focus:outline-none transition-colors" placeholder={f.p} /></div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className="block text-[10px] text-[#4A7C59] uppercase tracking-wider mb-2">COMPANY</label><input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-[#F59E0B] focus:outline-none transition-colors" placeholder="Company name" /></div>
                  <div><label className="block text-[10px] text-[#4A7C59] uppercase tracking-wider mb-2">PHONE</label><input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-[#F59E0B] focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" /></div>
                </div>
                <div>
                  <label className="block text-[10px] text-[#4A7C59] uppercase tracking-wider mb-2">PROJECT DETAILS *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-[#F59E0B] focus:outline-none transition-colors resize-none" placeholder="Greenhouse dimensions, crop type, climate zone, required automation scope..." />
                </div>
                <button type="submit" className="btn-glass btn-primary w-full justify-center">SUBMIT INQUIRY &rarr;</button>
              </form>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card">
                <h3 className="font-bold text-sm mb-4">Direct Contact</h3>
                <div className="space-y-3 text-xs text-[#81C784]/70">
                  <p>T: {companyInfo.phone}</p><p>E: {companyInfo.email}</p><p>W: {companyInfo.whatsapp}</p>
                </div>
              </div>
              <div className="glass-card">
                <h3 className="font-bold text-sm mb-4">Changzhou HQ</h3>
                <p className="text-xs text-[#81C784]/70 leading-relaxed">{companyInfo.address}</p>
              </div>
              <a href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener" className="glass-card flex items-center gap-4 hover:border-[#4CAF50]/30 transition-colors block cursor-pointer">
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center"><span className="text-white font-bold">WA</span></div>
                <div><div className="font-bold text-sm">WhatsApp Chat</div><div className="text-[10px] text-[#4A7C59]">Instant response during business hours</div></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 border-t border-white/5 bg-[#0F2415]/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="section-tag mb-6">OUR PRODUCT LINES</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Shading Motors →", desc: "24V DC to 380V 3-phase. 60NM to 200NM. IP65 sealed for high-humidity greenhouse environments." },
              { title: "Drive Components →", desc: "Rack & pinion assemblies, limit switches, cable systems. Galvanized steel, modular design." },
              { title: "Climate Control →", desc: "Multi-zone IoT controllers. MODBUS RS485. Cloud dashboard. PID vent positioning." },
            ].map((link) => (
              <Link key={link.title} href="/products" className="glass-card group">
                <h3 className="font-bold text-sm mb-2 group-hover:text-[#F59E0B] transition-colors">{link.title}</h3>
                <p className="text-xs text-[#81C784]/70 leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="section-tag mb-4">ORDERING FAQ</div>
          <h2 className="text-2xl font-bold mb-10">Ordering & <span className="text-[#F59E0B]">Shipping</span></h2>
          <div className="space-y-3">
            {[
              { q: "What information do I need to provide for a greenhouse motor quote?", a: "For an accurate quotation, please provide: greenhouse dimensions (length x width x gutter height), number of spans, crop type, climate zone, and the specific function (shading / ventilation / blackout). If you have a greenhouse layout drawing, attaching it will help our engineers recommend the optimal motor configuration and quantity." },
              { q: "How quickly can I receive a shipment for my greenhouse project?", a: "Standard motors and fabrics ship within 15-25 days. Custom torque/speed configurations add 3-5 days for engineering review. Full-container greenhouse projects ship from Shanghai/Ningbo with 25-day average transit to US West Coast. We coordinate with your construction timeline to ensure components arrive before installation begins." },
              { q: "What warranty do VERDANT motors include?", a: "All VERDANT motors carry a 3-year warranty against manufacturing defects. Gearboxes are rated for 50,000+ hours. Screen fabrics carry a 10-year UV degradation warranty. We maintain spare parts inventory for all current models and provide technical support throughout the warranty period via email, WhatsApp, and video call." },
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
