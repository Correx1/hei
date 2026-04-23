import Image from "next/image";
import React from "react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";

export default function LFRPartnershipPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">

      {/* High-Impact Hero Section */}
      <section className="relative w-full min-h-[50vh] py-20 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1579208575657-302a24ec758a?q=80&w=2000&auto=format&fit=crop" 
            alt="LFR Partnership Background" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/85"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight mb-6 text-center drop-shadow-md">
            LFR International 
          </h1>
          <div className="w-24 h-1.5 bg-[#E51924] rounded-full mb-8 mx-auto"></div>
          <p className="text-[16px] md:text-[18px] lg:text-[22px] text-white/95 leading-relaxed font-sans font-medium max-w-4xl mx-auto text-center drop-shadow-sm">
           Expands to Nigeria via partnership with HEI to train 350 first responders in coming months
          </p>
        </div>
      </section>

      {/* Section 1: First Successful Training */}
      <section className="w-full py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Text Content */}
            <div className="space-y-6 flex flex-col justify-center py-4">
              <h2 className="text-[22px] md:text-[28px] lg:text-[32px] font-heading font-extrabold text-[#E51924] leading-snug tracking-wide mb-2 uppercase">
                LFR First Successful Training in Nigeria
              </h2>
              
              <div className="space-y-5 text-[15.5px] md:text-[16.5px] text-gray-700 leading-relaxed font-sans">
                <p>
                  A new partnership between Lay First Responders International and Health Emergency Initiative [HEI] was announced on Wednesday, 16th of March 2022. The partnership is aimed at improving the skills of Lay First Responders in Nigeria.
                </p>
                <p>
                  As a result, Nigeria is the seventh country in which LFR holds first responder operations, and it is the sixth country in sub-Saharan Africa as well.
                </p>
                <p>
                  For the first time, LFR will be able to implement its successful training programme in Nigeria with the help of HEI. As part of the collaboration, the two organisations signed a Memorandum of Understanding (MOU).
                </p>
                <p>
                  Through LFR’s proven training program, HEI aims to improve outcomes between the site of injury and hospital admission. The LFR/HEI program will enroll 350 first responders, with potential to increase the number over the following year.
                </p>
              </div>
            </div>

            {/* Video Integration (Right Side) */}
            <div className="w-full h-full min-h-[300px] relative bg-black rounded-sm overflow-hidden flex justify-center items-center shadow-xl border-[2px] border-gray-100">
               {/* Generic HEI youtube embed fallback */}
               <iframe 
                 className="w-full h-full absolute inset-0 border-0"
                 src="https://www.youtube.com/embed/C4jKDPk8ArA?rel=0" 
                 title="LFR First Successful Training"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen 
               />
               <div className="absolute top-0 left-0 w-full h-1 bg-[#E51924] z-10 pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Standalone Middle Quote Section */}
      <section className="w-full py-16 md:py-20 bg-[#E51924] flex items-center justify-center border-b-[8px] border-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-sans font-medium text-white leading-relaxed tracking-wide italic drop-shadow-sm">
            “Both organizations aim to reduce youth fatalities caused by road traffic accidents, which are currently Nigeria’s leading cause of death.”
          </h3>
        </div>
      </section>

      {/* Section 2: Zachary Eisner Comment */}
      <section className="w-full py-16 md:py-24 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Image/Media Box (Left side for alternate layout) */}
            <div className="order-2 lg:order-1 w-full h-full min-h-[300px] relative rounded-sm overflow-hidden flex justify-center items-center shadow-xl border-[2px] border-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1559863345-02eae058c2ce?q=80&w=1000&auto=format&fit=crop" 
                  alt="Zachary Eisner LFR" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
                  className="object-cover object-center"
                />
               <div className="absolute top-0 left-0 w-full h-1 bg-[#E51924] z-10 pointer-events-none"></div>
            </div>

            {/* Text Content (Right Side) */}
            <div className="order-1 lg:order-2 space-y-6 flex flex-col justify-center py-4">
              <h2 className="text-[22px] md:text-[28px] lg:text-[32px] font-heading font-extrabold text-brand-dark leading-snug tracking-wide mb-2 uppercase">
                LFR International Co-Founder <span className="text-[#E51924]">Zachary Eisner</span>
              </h2>
              
              <div className="space-y-5 text-[15.5px] md:text-[16.5px] text-gray-700 leading-relaxed font-sans">
                <p>
                  A comment on the development was made by LFR International Co-Founder Zachary Eisner, said: 
                </p>
                <div className="italic font-medium text-gray-900 border-l-4 border-[#E51924] pl-5 py-2 my-4 bg-red-50/50 rounded-r-sm">
                  “HEI has a proven track record of improving post-crash care in Nigeria. We are so grateful for the work that HEI is doing and know that we are aligned in our mission to save lives. We can’t wait to get started with our partners on the ground in Nigeria.”
                </div>
                
                <p>
                  LFR International is a 501(c)(3) non-profit that empowers Lay First Responders. Founded in 2016 by Peter Delaney and Zachary Eisner, the organization has trained over 5,000 first responders to date.
                </p>
                <p>
                  Currently, LFR International is training first responders and conducting research in eight low- and middle-income countries.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <GetInvolvedCTA />

    </div>
  );
}
