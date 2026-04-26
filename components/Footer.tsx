"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-white pt-64 md:pt-48 lg:pt-36 pb-12 mt-48 md:mt-32">
      
      {/* Floating CTA for Donate */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl bg-gradient-to-r from-brand-red to-[#b30000] rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 z-20 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="text-center lg:text-left space-y-3 relative z-10">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight">
            Help Us Save Lives Today
          </h2>
          <p className="font-sans text-white/90 text-sm md:text-[15px] max-w-2xl leading-relaxed font-medium">
            Your generous donation ensures that indigent patients receive emergency medical care without delay. Partner with us to guarantee <span className="italic font-bold">"That none should die."</span>
          </p>
        </div>
        <Link
                href="/donate"
                className="inline-block font-head text-[0.8rem] xl:text-[0.9rem] font-bold tracking-[0.08em] uppercase px-[12px] xl:px-[18px] py-[8px] border-[1.5px] transition-all duration-250 bg-brand-gold text-brand-dark border-brand-gold hover:bg-brand-gold-dark hover:border-brand-gold-dark hover:shadow-[0_8px_20px_rgba(255,165,0,0.3)] whitespace-nowrap"
              >
                DONATE NOW
              </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: About & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <Image
              src="/logo.png"
              alt="Health Emergency Initiative Logo"
              width={160}
              height={60}
              className="object-contain"
            />
            <p className="font-sans italic font-semibold text-brand-gold text-[13px] tracking-wide -mt-2">&ldquo;That none should die.&rdquo;</p>
            <p className="font-sans text-white/60 text-[14.5px] leading-relaxed max-w-sm">
              We are a community dedicated to providing emergency healthcare to the poorest segments of society. We financially commit to covering medical bills for critical patients.
            </p>
            <div className="flex gap-3 pt-4">
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 text-white/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 text-white/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all duration-300 text-white/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 text-white/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300 text-white/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-heading font-bold text-lg text-white">Quick Links</h4>
            <ul className="space-y-3 font-sans text-[14.5px] text-white/60">
              <li><Link href="/who-we-are" className="hover:text-brand-light-blue transition-colors flex items-center gap-2"><span className="text-[#E51924] text-[10px]">&#9658;</span> Who We Are</Link></li>
              <li><Link href="/what-we-do" className="hover:text-brand-light-blue transition-colors flex items-center gap-2"><span className="text-[#E51924] text-[10px]">&#9658;</span> What We Do</Link></li>
              <li><Link href="/projects" className="hover:text-brand-light-blue transition-colors flex items-center gap-2"><span className="text-[#E51924] text-[10px]">&#9658;</span> Our Projects</Link></li>
              <li><Link href="/media" className="hover:text-brand-light-blue transition-colors flex items-center gap-2"><span className="text-[#E51924] text-[10px]">&#9658;</span> Media Center</Link></li>
              <li><Link href="/membership" className="hover:text-brand-light-blue transition-colors flex items-center gap-2"><span className="text-[#E51924] text-[10px]">&#9658;</span> Become a Member</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading font-bold text-lg text-white">Contact Info</h4>
            <ul className="space-y-4 font-sans text-[14.5px] text-white/60">
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-[#E51924] shrink-0" />
                <span>+234 706 398 5777</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-[#E51924] shrink-0" />
                <span>info@hei.org.ng</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Form */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading font-bold text-lg text-white">Newsletter</h4>
            <p className="font-sans text-[14.5px] text-white/60 leading-relaxed max-w-xs">
              Subscribe to stay updated on our impact, news, and upcoming programs.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-[#262626] border border-white/5 rounded px-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-[#E51924] hover:bg-brand-red-dark text-white font-bold font-sans text-sm uppercase tracking-widest py-3.5 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[13px] text-white/40 text-center md:text-left">
            &copy; {new Date().getFullYear()} Health Emergency Initiative. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-[13px] text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
