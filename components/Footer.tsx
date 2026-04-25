"use client";

import Link from "next/link";
const Facebook = ({size = 18}: {size?: number}) => <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = ({size = 18}: {size?: number}) => <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = ({size = 18}: {size?: number}) => <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Youtube = ({size = 18}: {size?: number}) => <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70 mt-auto">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 py-[60px] pb-[40px] border-b border-white/10">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-[14px] mb-5">
              <img src="/logo.png" alt="HEI Logo" className="h-[60px] w-auto object-contain" />
              <div className="leading-[1.2]">
                <strong className="block font-head text-[1.1rem] font-bold text-white uppercase tracking-[0.08em]">
                  Health Emergency Initiative
                </strong>
                <span className="font-serif italic text-[12.5px] text-brand-gold">
                  That None Should Die
                </span>
              </div>
            </div>
            <p className="text-[14px] leading-[1.7] max-w-[280px] mb-6">
              A community of passionate individuals dedicated to ensuring no Nigerian dies from a medical emergency that costs less than ₦20,000 to treat.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/60 transition-all hover:bg-brand-red hover:border-brand-red hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/60 transition-all hover:bg-brand-red hover:border-brand-red hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/60 transition-all hover:bg-brand-red hover:border-brand-red hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/60 transition-all hover:bg-brand-red hover:border-brand-red hover:text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-head uppercase tracking-[0.1em] text-[13.6px] text-brand-gold mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-[13.6px] text-white/55 transition-colors flex items-center gap-1.5 hover:text-white before:content-['›'] before:text-brand-red before:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="text-[13.6px] text-white/55 transition-colors flex items-center gap-1.5 hover:text-white before:content-['›'] before:text-brand-red before:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-[13.6px] text-white/55 transition-colors flex items-center gap-1.5 hover:text-white before:content-['›'] before:text-brand-red before:text-base">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-[13.6px] text-white/55 transition-colors flex items-center gap-1.5 hover:text-white before:content-['›'] before:text-brand-red before:text-base">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[13.6px] text-white/55 transition-colors flex items-center gap-1.5 hover:text-white before:content-['›'] before:text-brand-red before:text-base">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[13.6px] text-white/55 transition-colors flex items-center gap-1.5 hover:text-white before:content-['›'] before:text-brand-red before:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-head uppercase tracking-[0.1em] text-[13.6px] text-brand-gold mb-5">
              Emergency Numbers
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="tel:767" className="text-[13.6px] text-white/55 transition-colors flex items-center gap-1.5 hover:text-white before:content-['›'] before:text-brand-red before:text-base">
                  Lagos: 767
                </a>
              </li>
              <li>
                <a href="tel:112" className="text-[13.6px] text-white/55 transition-colors flex items-center gap-1.5 hover:text-white before:content-['›'] before:text-brand-red before:text-base">
                  Lagos: 112
                </a>
              </li>
              <li>
                <a href="tel:122" className="text-[13.6px] text-white/55 transition-colors flex items-center gap-1.5 hover:text-white before:content-['›'] before:text-brand-red before:text-base">
                  Other States: 122
                </a>
              </li>
              <li>
                <a href="tel:122" className="text-[13.6px] text-white/55 transition-colors flex items-center gap-1.5 hover:text-white before:content-['›'] before:text-brand-red before:text-base">
                  FRSC National: 122
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#donate" className="block w-full text-center bg-brand-red text-white font-head text-[13.6px] font-semibold tracking-[0.08em] uppercase px-5 py-3 transition-colors hover:bg-brand-red-dark">
                Donate Now
              </a>
            </div>
          </div>

        </div>
        
        <div className="py-[18px] flex flex-col md:flex-row justify-between items-center text-[12.8px] gap-2 text-center md:text-left">
          <span>© 2026 Health Emergency Initiative. All Rights Reserved.</span>
          <span className="bg-brand-red text-white font-head text-[11.2px] uppercase tracking-[0.12em] px-2.5 py-[3px]">
            That None Should Die
          </span>
        </div>
      </div>
    </footer>
  );
}
