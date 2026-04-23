import React from "react";
import Image from "next/image";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";

// Simple object array mapping News and Media items exactly as requested
const NEWS_MEDIA = [
  {
    id: 1,
    title: "Good deeds create heroes by Daibau",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    link: "https://daibau.ng",
  },
  {
    id: 2,
    title: "Let's Waka with Q-Life and HEI",
    image: "https://images.unsplash.com/photo-1559863345-02eae058c2ce?q=80&w=800&auto=format&fit=crop",
    link: "https://youtube.com",
  },
  {
    id: 3,
    title: "LFR Int'l partners HEI to train 350 emergency responders",
    image: "https://images.unsplash.com/photo-1579208575657-302a24ec758a?q=80&w=800&auto=format&fit=crop",
    link: "https://lfrinternational.org",
  },
  {
    id: 4,
    title: "ED of HEI Speaking on TVC Breakfast about Curbing the Spread of Omicron Variant.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
    link: "https://tvcnews.tv",
  },
  {
    id: 5,
    title: "Vanguard News – HEI calls for private sector involvement in reduction of road traffic accidents",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d786a2b?q=80&w=800&auto=format&fit=crop",
    link: "https://vanguardngr.com",
  },
  {
    id: 6,
    title: "People & Power – Touching Lives Through Medical Charity",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    link: "https://peopleandpower.com",
  },
  {
    id: 7,
    title: "The ED of Health Emergency Initiative on TVC Breakfast | W.H.O Enlists Nigerians in Team to Probe Covid-19.",
    image: "https://images.unsplash.com/photo-1601625463687-25bf029e2e8e?q=80&w=800&auto=format&fit=crop",
    link: "https://tvcnews.tv",
  },
  {
    id: 8,
    title: "Health Emergency Initiative – Lagos",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=800&auto=format&fit=crop",
    link: "https://example.com",
  },
  {
    id: 9,
    title: "How Sterling Bank, HEI are Saving Lives of Accident",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    link: "https://thisdaylive.com",
  },
  {
    id: 10,
    title: "HEI Interview Session with Moments, discussing the topic Making a Difference",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    link: "https://youtube.com",
  }
];

export const metadata = {
  title: "News and Media",
};

export default function NewsAndMediaPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 md:py-24 bg-brand-dark flex flex-col justify-center items-center text-center overflow-hidden">
         {/* Subtle background pattern/overlay */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
              NEWS AND MEDIA
            </h1>
            <div className="w-20 h-1.5 bg-[#E51924] rounded-full mb-6"></div>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed font-sans font-medium max-w-2xl">
              Explore our press coverage, media mentions, television features, and external publications highlighting our life-saving initiatives.
            </p>
         </div>
      </section>

      {/* Grid Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* We use a simple grid that allows items to naturally align at the start (top) 
            so varying image heights don't force weird stretching, directly mimicking the screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 items-start">
          {NEWS_MEDIA.map((item) => (
            <a 
              key={item.id} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center text-center outline-none focus-visible:ring-2 focus-visible:ring-[#E51924] rounded-sm"
            >
              {/* Uniform Image Container */}
              <div className="w-full aspect-[4/3] relative rounded-sm overflow-hidden mb-5 bg-gray-100 shadow-sm">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Summary / Title Text */}
              <h3 className="text-[14.5px] font-sans font-semibold text-brand-dark leading-snug group-hover:text-[#E51924] transition-colors max-w-sm px-2">
                {item.title}
              </h3>
            </a>
          ))}
        </div>

      </div>

      <GetInvolvedCTA />
    </div>
  );
}
