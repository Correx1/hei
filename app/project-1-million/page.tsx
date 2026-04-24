import Image from "next/image";
import Link from "next/link";
import React from "react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";
import { Heart } from "lucide-react";

// Centralized Donation Links Object to easily swap with actual Paystack payment URLs later
const DONATION_PLANS = [
  { id: 1, amount: "₦500", link: "#paystack-500" },
  { id: 2, amount: "₦1,000", link: "#paystack-1000" },
  { id: 3, amount: "₦2,000", link: "#paystack-2000" },
  { id: 4, amount: "₦5,000", link: "#paystack-5000" },
  { id: 5, amount: "₦10,000", link: "#paystack-10000" },
  { id: 6, amount: "₦20,000", link: "#paystack-20000" },
  { id: 7, amount: "₦50,000", link: "#paystack-50000" },
];

export default function Project1MillionPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">

      {/* High-Impact Hero Section */}
      <section className="relative w-full min-h-[60vh] py-20 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/outreach2.jpg" 
            alt="Project 1 Million Crowd" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/85"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-8">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight mb-6 text-center drop-shadow-md">
            PROJECT 1 MILLION
          </h1>
          <div className="w-24 h-1.5 bg-[#E51924] rounded-full mb-8 mx-auto"></div>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/95 leading-relaxed font-sans font-medium max-w-4xl mx-auto text-center drop-shadow-sm">
            Our goal is to raise one million Nigerians who will make a monthly commitment of at least ₦500 to vulnerable people's medical care.
          </p>
        </div>
      </section>

      {/* Main Content & Video Section */}
      <section className="w-full pt-16 md:pt-20 pb-12 md:pb-16 bg-white shrink-0 border-b border-gray-100/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 md:gap-14">
          
          {/* Top: Video Integration (Larger) */}
          <div className="w-full aspect-video md:aspect-[16/9] relative bg-black rounded-sm overflow-hidden flex justify-center items-center shadow-lg">
             <iframe 
               className="w-full h-full absolute inset-0 border-0"
               src="https://www.youtube.com/embed/C4jKDPk8ArA?rel=0" 
               title="Project 1 Million Implementation Overview"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen 
             />
             <div className="absolute top-0 left-0 w-full h-1 bg-[#E51924] z-10 pointer-events-none"></div>
          </div>

          {/* Bottom: Text and Messaging with High Emphasis */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-[22px] md:text-[28px] lg:text-[30px] font-heading font-extrabold text-[#E51924] leading-snug tracking-wide mb-8">
              To us, every life counts. Join us in reaching out to many people by donating your little.
            </h2>
            
            <div className="space-y-6 text-[17px] md:text-[20px] text-gray-800 leading-relaxed font-sans border-t-2 border-b-2 border-gray-100 py-10 w-full">
              <p className="font-semibold text-gray-900 max-w-3xl mx-auto">
                Many Nigerians have died as a result of their inability to access healthcare, as we have witnessed firsthand.
              </p>
              <p className="font-semibold text-gray-900 max-w-3xl mx-auto">
                <span className="text-[#E51924]">HEI is dedicated to seeing people live out their beautiful dreams</span> — we can only make this happen with your help.
              </p>
            </div>
            
          </div>

        </div>
      </section>

      {/* Projects Donation Action Grid */}
      <section className="relative w-full py-16 md:py-20 bg-[#fdfdfd]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
          
          <h2 className="text-2xl md:text-xl lg:text-2xl font-heading font-extrabold text-brand-dark uppercase tracking-widest mb-4 text-center">
            BECOME A LIFESAVER TODAY
          </h2>
          <p className="text-[15.5px] md:text-[17px] text-gray-600 font-sans tracking-wide text-center max-w-3xl mb-12">
            Subscribing to any of our project plans will allow us to save lives together. Click an amount below to safely process your payment via Paystack.
          </p>

          {/* Donation Buttons Array */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 w-full max-w-4xl">
            {DONATION_PLANS.map((plan) => (
              <a 
                key={plan.id}
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-3 md:py-4 w-[calc(50%-0.5rem)] sm:w-[160px] md:w-[190px] border-[2px] border-[#E51924] bg-white hover:bg-[#E51924] transition-colors rounded-sm text-center flex items-center justify-center shadow-sm hover:shadow-md"
              >
                <span className="text-[16px] md:text-[18px] tracking-wide font-sans font-bold text-[#E51924] group-hover:text-white transition-colors">
                  {plan.amount}
                </span>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Global Bottom CTA */}
      <GetInvolvedCTA />

    </div>
  );
}
