import React from "react";
import Image from "next/image";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";

// Simple object array mapping Corporate Publications linking out to Google Drive
const PUBLICATIONS = [
  {
    id: 1,
    summary: "Health Emergency Initiative 2024 Annual Impact Report",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/example1/view"
  },
  {
    id: 2,
    summary: "Post-Crash Care & Trauma Intervention Framework 2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/example2/view"
  },
  {
    id: 3,
    summary: "HEI Project 1 Million: Strategic Masterplan (2025-2030)",
    image: "https://images.unsplash.com/photo-1507208758652-303c73bb85fa?q=80&w=800&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/example3/view"
  },
  {
    id: 4,
    summary: "Maternal Health Emergency Fund: Q1 Operational Review",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/example4/view"
  },
  {
    id: 5,
    summary: "First Responders Training Curriculum & Guidelines v2.0",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=800&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/example5/view"
  },
  {
    id: 6,
    summary: "10th Anniversary Commemorative Magazine & Partners Directory",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/example6/view"
  }
];

export const metadata = {
  title: "Corporate Publications",
};

export default function CorporatePublicationsPage() {
  return (
    <div className="w-full min-h-screen bg-[#fcfbf9]">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 md:py-24 bg-brand-dark flex flex-col justify-center items-center text-center overflow-hidden">
         {/* Subtle background pattern/overlay */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
              CORPORATE PUBLICATIONS
            </h1>
            <div className="w-20 h-1.5 bg-[#E51924] rounded-full mb-6"></div>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed font-sans font-medium max-w-2xl">
              Access and download our comprehensive corporate materials, strategic impact reports, guidelines, and official operational publications.
            </p>
         </div>
      </section>

      {/* Publications Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 items-start">
          {PUBLICATIONS.map((item) => (
            <a 
              key={item.id} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center text-center outline-none focus-visible:ring-2 focus-visible:ring-[#E51924] rounded-sm bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-2 border-transparent hover:border-[#E51924]"
            >
              {/* Document Cover Container (Using document/portrait aspect ratio roughly 3:4) */}
              <div className="w-full aspect-[3/4] relative rounded-sm overflow-hidden mb-6 bg-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)]">
                <Image 
                  src={item.image} 
                  alt={item.summary} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual hover overlay indicating it's a downloadable/viewable link */}
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-[#E51924] text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-sm shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Document
                  </span>
                </div>
              </div>
              
              {/* Summary Text */}
              <h3 className="text-[15px] font-sans font-semibold text-brand-dark leading-relaxed group-hover:text-[#E51924] transition-colors max-w-sm px-2">
                {item.summary}
              </h3>
            </a>
          ))}
        </div>

      </div>

      <GetInvolvedCTA />
    </div>
  );
}
