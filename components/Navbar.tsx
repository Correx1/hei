"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    href: "/who-we-are",
    submenus: [
      { title: "Board of trustees", href: "/board" },
      { title: "Our partners", href: "/partners" },
      { title: "Ashoka fellow", href: "https://www.ashoka.org/en-ng/fellow/paschal-achunine" },
    ],
  },
  {
    title: "Programs",
    href: "/what-we-do",
    submenus: [
      { title: "Payment of hospital bills for indigent patients", href: "/hospital-bills" },
      { title: "Post-crash care", href: "/post-crash-care" },
      { title: "First responders/CPR training scheme", href: "/cpr-training" },
      { title: "PPE donations", href: "/ppe-donations" },
      { title: "Outreach programs", href: "/outreach" },
    ],
  },
  {
    title: "Get Involved",
    href: "/get-involved",
    submenus: [
      { title: "Make a donation", href: "/donate" },
      { title: "Volunteer", href: "/volunteer" },
      { title: "Partner with us", href: "/partner" },
      { title: "Project 1 million", href: "/project-1-million" },
      { title: "LFR International partnership with HEI", href: "/lfr-international-partnership-with-hei" },
    ],
  },
  {
    title: "More",
    href: "#",
    submenus: [
      { title: "HEI on the Go", href: "/hei-on-the-go" },
      { title: "Blogs", href: "/blogs" },
      { title: "News and Media", href: "/news-and-media" },
      { title: "Reports", href: "/reports" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  { title: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to handle initial load position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (index: number) => {
    setOpenMobileIndex(openMobileIndex === index ? null : index);
  };

  return (
    <div className="relative w-full z-[101]">


      {/* ─── HEADER (THE NAVBAR - TRANSPARENT INITIALLY, FIXED ON SCROLL) ── */}
      <header 
        className={`w-full z-[100] transition-all duration-300 left-0 ${
          scrolled 
            ? "fixed top-0 bg-[#2a0a0a] shadow-[0_2px_20px_rgba(0,0,0,0.5)]" 
            : "absolute top-full bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between min-h-[90px] gap-4 xl:gap-8">
            
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <Link href="/" className="flex flex-col items-center group gap-0.5">
                <Image 
                  src="/logo.png" 
                  alt="HEI Logo" 
                  width={150}
                  height={55}
                  className="h-[45px] lg:h-[55px] w-auto object-contain transition-transform group-hover:scale-105" 
                />
                <span className="block font-serif italic text-[0.75rem] lg:text-[0.8rem] text-brand-gold whitespace-nowrap">
                  That None Should Die
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block flex-1 max-w-[650px] xl:max-w-none mx-2">
              <ul className="flex gap-[0.25rem] xl:gap-[0.8rem] justify-center list-none m-0 p-0 items-center">
                {NAV_LINKS.map((item, index) => (
                  <li key={index} className="relative group h-full flex items-center">
                    <Link
                      href={item.href}
                      className="font-head text-[0.75rem] xl:text-[0.85rem] font-normal uppercase tracking-[0.05em] text-white/80 px-[0.4em] xl:px-[0.6em] pt-[0.4em] pb-[0.35em] transition-colors relative hover:text-white flex items-center gap-1 after:content-[''] after:absolute after:-bottom-[2px] after:left-[0.6em] after:right-[0.6em] after:h-[2px] after:bg-brand-gold after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 whitespace-nowrap"
                    >
                      {item.title}
                      {item.submenus && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                    
                    {/* Desktop Dropdown */}
                    {item.submenus && (
                      <div className="absolute left-0 top-full mt-0 w-max min-w-[240px] bg-brand-dark border border-brand-gold/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2 flex flex-col font-head text-[0.85rem] uppercase tracking-[0.04em]">
                          {item.submenus.map((sub, subIdx) => (
                            <Link 
                              key={subIdx} 
                              href={sub.href} 
                              target={sub.href.startsWith("http") ? "_blank" : undefined}
                              rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="block px-4 py-3 text-white/75 hover:bg-white/5 hover:text-brand-gold transition-colors duration-150 border-b border-white/5 last:border-0 whitespace-nowrap"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-[0.4rem] xl:gap-[0.6rem] shrink-0 ml-auto xl:ml-0">
              <Link
                href="/donate"
                className="inline-block font-head text-[0.65rem] xl:text-[0.75rem] font-bold tracking-[0.08em] uppercase px-[12px] xl:px-[18px] py-[8px] border-[1.5px] transition-all duration-250 bg-brand-gold text-brand-dark border-brand-gold hover:bg-brand-gold-dark hover:border-brand-gold-dark hover:shadow-[0_8px_20px_rgba(255,165,0,0.3)] whitespace-nowrap"
              >
                DONATE
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-brand-gold p-2 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-brand-dark shadow-lg border-t border-brand-gold/20 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col font-head font-bold text-white uppercase tracking-wide text-[14px]">
              {NAV_LINKS.map((item, index) => {
                const isOpen = openMobileIndex === index;
                
                return (
                  <div key={index} className="flex flex-col border-b border-white/10">
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1 px-6 py-4 hover:bg-white/5 transition-colors"
                      >
                        {item.title}
                      </Link>

                      {item.submenus && (
                        <button 
                          onClick={() => toggleMobileSubmenu(index)}
                          className="px-6 py-4 border-l border-white/10 hover:bg-white/5 transition-colors focus:outline-none"
                        >
                          <svg 
                            className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-gold" : ""}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Submenu links */}
                    {item.submenus && isOpen && (
                      <div className="flex flex-col bg-black/20 font-head text-[0.85rem] uppercase tracking-[0.04em] border-t border-white/5">
                        {item.submenus.map((sub, subIdx) => (
                          <Link 
                            onClick={() => setIsMobileMenuOpen(false)}
                            key={subIdx} 
                            href={sub.href} 
                            target={sub.href.startsWith("http") ? "_blank" : undefined}
                            rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="px-8 py-3 text-white/75 hover:text-brand-gold transition-colors border-b border-white/5 last:border-0"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile CTAs */}
            <div className="p-6 bg-brand-dark-mid flex flex-col gap-3">
              <Link
                href="/donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center font-head text-[0.9rem] font-bold tracking-[0.08em] uppercase px-[22px] py-[12px] border-[2px] transition-all duration-250 bg-brand-gold text-brand-dark border-brand-gold hover:bg-brand-gold-dark hover:border-brand-gold-dark hover:shadow-[0_8px_20px_rgba(255,165,0,0.3)]"
              >
                DONATE
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
