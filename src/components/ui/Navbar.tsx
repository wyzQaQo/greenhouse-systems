"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, companyInfo } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0A1A0F]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`} style={{ height: "72px" }}>
      <nav className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#4CAF50] flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold text-sm tracking-tight">{companyInfo.shortName}</div>
            <div className="text-[#4A7C59] text-[9px] tracking-wider">{companyInfo.tagline}</div>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-[#81C784]/70 hover:text-[#F59E0B] transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F59E0B] transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>
        <Link href="/contact" className="hidden lg:block btn-glass btn-primary text-xs px-5 py-2.5">REQUEST QUOTE</Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-3" : ""}`} />
        </button>
      </nav>
      <div className={`lg:hidden fixed top-[72px] left-0 right-0 bg-[#0A1A0F]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${mobileOpen ? "max-h-96" : "max-h-0"} overflow-hidden`}>
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-[#81C784] hover:text-[#F59E0B] transition-colors">{l.label}</Link>)}
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-glass btn-primary text-center text-sm py-3">REQUEST QUOTE</Link>
        </div>
      </div>
    </header>
  );
}
