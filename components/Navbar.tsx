"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  {
    title: "Who we are",
    href: "/who-we-are",
    submenus: [
      { title: "Board of trusties", href: "/board" },
      { title: "Our partners", href: "/partners" },
      { title: "Ashoka fellow", href: "https://www.ashoka.org/en-ng/fellow/paschal-achunine" },
    ],
  },
  {
    title: "What we do",
    href: "/what-we-do",
    submenus: [
      { title: "Payment of hospital bills for indigent patients", href: "/hospital-bills" },
      { title: "Post-crash care", href: "/post-crash-care" },
      { title: "First respondans/cpr training scheme", href: "/cpr-training" },
      { title: "PPE donations", href: "/ppe-donations" },
      { title: "Outreach programs", href: "/outreach" },
    ],
  },
  {
    title: "Get involved",
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
    title: "HEI on the Go",
    href: "/hei-on-the-go",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "News and Media",
    href: "/news-and-media",
    submenus: [
      { title: "Gallery", href: "/outreach-gallery" },
      { title: "Videos", href: "/videos" },
      { title: "Testimonials", href: "/testimonials" },
    ], 
  },
  {
    title: "Reports",
    href: "/reports",
    submenus: [
      { title: "Corporate publications", href: "/corporate-publications" },
      { title: "Audited financial reports", href: "/financial-reports" },
    ],
  },
  {
    title: "FAQ",
    href: "/faq",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);

  const toggleMobileSubmenu = (index: number) => {
    setOpenMobileIndex(openMobileIndex === index ? null : index);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 sticky relativ z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-[90px]">
          
          {/* Logo */}
          <div className="flex items-center shrink-0 mr-4 lg:mr-8">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Health Emergency Initiative Logo" 
                width={160} 
                height={90} 
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full flex-1 justify-end">
            <div className="flex items-center space-x-3 xl:space-x-5 h-full font-sans text-[11px] xl:text-[12px] font-bold text-black uppercase tracking-wide">
              {NAV_LINKS.map((item, index) => (
                <div key={index} className="relative group h-full flex items-center">
                  <Link 
                    href={item.href} 
                    className="flex items-center h-full text-black hover:text-brand-red transition-colors duration-200"
                  >
                    {item.title}
                    {item.submenus && <ChevronDown className="ml-1 opacity-60 group-hover:opacity-100" />}
                  </Link>
                  
                  {/* Desktop Dropdown */}
                  {item.submenus && (
                    <div className="absolute left-0 top-full mt-0 w-max min-w-[220px] bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2 flex flex-col font-semibold text-black lowercase first-letter:uppercase normal-case">
                        {item.submenus.map((sub, subIdx) => (
                          <Link 
                            key={subIdx} 
                            href={sub.href} 
                            target={sub.href.startsWith("http") ? "_blank" : undefined}
                            rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-brand-red transition-colors duration-150 border-b border-gray-100 last:border-0"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Donate Button */}
            <div className="ml-4 xl:ml-6 hidden lg:flex items-center h-full">
              <Link 
                href="/donate" 
                className="flex items-center justify-center text-center px-4 py-3 bg-brand-red text-white hover:bg-black font-bold font-sans text-[10px] xl:text-[11px] leading-tight tracking-wider uppercase transition-colors"
              >
                <span>DONATE TO PROJECT</span>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-brand-red p-2 transition-colors focus:outline-none"
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-200">
          <div className="flex flex-col font-sans font-bold text-black max-h-[75vh] overflow-y-auto uppercase tracking-wide text-sm">
            {NAV_LINKS.map((item, index) => {
              const isOpen = openMobileIndex === index;
              
              return (
                <div key={index} className="flex flex-col border-b border-gray-100">
                  <div className="flex items-center justify-between w-full">
                    {/* The menu itself links to a page */}
                    <Link 
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 px-5 py-4 text-black hover:text-brand-red transition-colors"
                    >
                      {item.title}
                    </Link>

                    {/* Separate toggle button for submenu */}
                    {item.submenus && (
                      <button 
                        onClick={() => toggleMobileSubmenu(index)}
                        className="px-5 py-4 border-l border-gray-100 text-black hover:bg-gray-50 transition-colors focus:outline-none"
                        aria-label="Toggle submenu"
                      >
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-red" : ""}`} 
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
                    <div className="flex flex-col bg-gray-50 border-t border-gray-100 font-semibold text-[13px] normal-case lowercase first-letter:uppercase">
                      {item.submenus.map((sub, subIdx) => (
                        <Link 
                          onClick={() => setIsMobileMenuOpen(false)}
                          key={subIdx} 
                          href={sub.href} 
                          target={sub.href.startsWith("http") ? "_blank" : undefined}
                          rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="px-8 py-3 text-gray-700 hover:text-brand-red transition-colors border-b border-gray-200 last:border-0"
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

          {/* Mobile Donate Button */}
          <div className="p-6 bg-white border-t border-gray-200">
            <Link 
              href="/donate" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-4 bg-brand-red text-white hover:bg-black font-bold font-sans text-sm tracking-wider uppercase transition-colors"
            >
              DONATE TO PROJECT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
