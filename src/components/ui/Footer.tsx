"use client";
import Link from "next/link";
import { companyInfo, navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A1A0F] relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#4CAF50] flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm">{companyInfo.shortName}</div>
                <div className="text-[#4A7C59] text-[8px] tracking-wider">AUTOMATION</div>
              </div>
            </div>
            <p className="text-xs text-[#81C784]/70 leading-relaxed mb-4">{companyInfo.tagline}. CE & UL certified motors for global greenhouse projects.</p>
          </div>
          <div>
            <h4 className="text-[10px] text-[#4A7C59] uppercase tracking-[0.2em] mb-4">Navigation</h4>
            <div className="space-y-2">
              {navLinks.map((l) => <Link key={l.href} href={l.href} className="block text-xs text-[#81C784]/70 hover:text-[#F59E0B] transition-colors">{l.label}</Link>)}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] text-[#4A7C59] uppercase tracking-[0.2em] mb-4">Contact</h4>
            <div className="space-y-2 text-xs text-[#81C784]/70">
              <p>T: {companyInfo.phone}</p>
              <p>E: {companyInfo.email}</p>
              <p className="mt-2">{companyInfo.address}</p>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] text-[#4A7C59] uppercase tracking-[0.2em] mb-4">Certifications</h4>
            <div className="space-y-1 text-xs text-[#81C784]/70">
              <p>CE Certified</p><p>UL Listed Motors</p><p>ISO 9001:2015</p><p>IP65 Waterproof</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#4A7C59]">&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[10px] text-[#4A7C59] hover:text-[#81C784] transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[10px] text-[#4A7C59] hover:text-[#81C784] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
