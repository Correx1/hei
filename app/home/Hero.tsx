"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const SLIDESHOW_IMAGES = [
  "/Another-life-was-Saved.jpg",
  "/about2.jpg",
  "/outreach2.jpg",
  "/campaign.jpg"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] md:min-h-[70vh] flex items-center overflow-hidden">
      
      {/* Slideshow Backgrounds */}
      {SLIDESHOW_IMAGES.map((src, index) => (
        <div 
          key={src}
          className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-[2500ms] ease-in-out ${
            index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(26,5,5,0.95)_0%,rgba(26,5,5,0.75)_50%,rgba(26,5,5,0.95)_100%)] pointer-events-none z-0" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.015)_2px,rgba(255,255,255,0.015)_4px)] pointer-events-none z-0" />

      {/* Decorative cross */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] opacity-[0.05] z-0 before:content-[''] before:absolute before:bg-white before:rounded-[4px] before:w-[60px] before:h-full before:left-1/2 before:-translate-x-1/2 after:content-[''] after:absolute after:bg-white after:rounded-[4px] after:h-[60px] after:w-full after:top-[28%]" />

      <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10">
        <div className="max-w-[680px] pt-[140px] pb-[80px] animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both flex flex-col items-center text-center md:items-start md:text-left mx-auto md:mx-0">
          
          <div className="inline-flex items-center justify-center md:justify-start gap-[0.6rem] font-head text-[0.8rem] tracking-[0.18em] uppercase text-brand-gold mb-[1.2rem] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 ease-out fill-mode-both">
            <span className="w-[32px] h-[2px] bg-brand-gold"></span>
            Project 1 Million
          </div>
          
          <h1 className="font-head text-[clamp(2.8rem,6vw,5.5rem)] md:text-[2.4rem] font-bold leading-[1.08] uppercase text-white mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 ease-out fill-mode-both">
            Your Token Can<br />
            <em className="not-italic text-brand-gold">Save a Life</em>
          </h1>
          
          <p className="font-serif italic text-[1.25rem] text-white/85 mb-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 ease-out fill-mode-both">
            — That None Should Die —
          </p>
          
          <p className="text-[1rem] text-white/80 mb-[2.4rem] max-w-[500px] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-250 ease-out fill-mode-both font-medium">
            Subscribe and become part of a community determined to ensure no Nigerian dies from a medical condition that costs less than ₦20,000 to treat.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 ease-out fill-mode-both w-full sm:w-auto">
            <Link
              href="/donate"
              className="inline-block text-center font-head text-[1rem] font-bold tracking-[0.08em] uppercase px-[38px] py-[14px] border-[2px] transition-all duration-250 bg-brand-gold text-brand-dark border-brand-gold hover:bg-brand-gold-dark hover:border-brand-gold-dark hover:shadow-[0_12px_28px_rgba(255,165,0,0.35)] w-full sm:w-auto"
            >
              Donate to Save a Life
            </Link>
            <Link
              href="#story"
              className="inline-block text-center font-head text-[1rem] font-semibold tracking-[0.08em] uppercase px-[38px] py-[14px] border-[2px] transition-all duration-250 bg-transparent text-white border-white hover:bg-white hover:text-brand-dark w-full sm:w-auto"
            >
              Watch Our Story
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
