import React from "react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Emmanuel Okon",
    summary: "How HEI's rapid response fund completely transformed our hospital's trauma care unit by removing financial delays during the golden hour.",
    videoUrl: "https://www.youtube.com/embed/C4jKDPk8ArA?rel=0"
  },
  {
    id: 2,
    name: "Chinedu M.",
    summary: "A survivor's tale: Rescued from a fatal road crash on the expressway, stabilized by first responders, and given a second chance at life.",
    videoUrl: "https://www.youtube.com/embed/C4jKDPk8ArA?rel=0"
  },
  {
    id: 3,
    name: "Sarah Adeyemi",
    summary: "A dedicated Volunteer First Responder explains the life-saving impact of HEI's community CPR and prehospital care training.",
    videoUrl: "https://www.youtube.com/embed/C4jKDPk8ArA?rel=0"
  },
  {
    id: 4,
    name: "Inspector Yusuf",
    summary: "FRSC officer discusses the critical importance of post-crash care coordination and how first aid kits are keeping victims alive.",
    videoUrl: "https://www.youtube.com/embed/C4jKDPk8ArA?rel=0"
  },
  {
    id: 5,
    name: "Mrs. Florence T.",
    summary: "A mother shares her deep gratitude after Health Emergency Initiative stepped in to cover the costs of her emergency C-Section surgery.",
    videoUrl: "https://www.youtube.com/embed/C4jKDPk8ArA?rel=0"
  },
  {
    id: 6,
    name: "Mr. Tunde B.",
    summary: "Why Corporate Partners trust HEI for impactful, transparent, and accountable Corporate Social Responsibility (CSR) programs.",
    videoUrl: "https://www.youtube.com/embed/C4jKDPk8ArA?rel=0"
  }
];

export const metadata = {
  title: "Testimonials",
};

export default function TestimonialsPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">

      {/* Hero Header */}
      <section className="relative w-full py-16 md:py-24 bg-brand-dark flex flex-col justify-center items-center text-center overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
              TESTIMONIALS
            </h1>
            <div className="w-20 h-1.5 bg-[#E51924] rounded-full mb-6"></div>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed font-sans font-medium max-w-2xl">
              Real stories from the people whose lives have been touched by our interventions. Hear from survivors, partners, and the medical professionals on the front lines.
            </p>
         </div>
      </section>

      {/* Testimonials Video Grid Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-sm shadow-sm overflow-hidden flex flex-col h-full border-t-4 border-[#E51924] hover:shadow-md transition-shadow duration-300"
              >
                {/* Video Container */}
                <div className="w-full aspect-video relative bg-black shrink-0">
                  <iframe 
                    className="w-full h-full absolute inset-0 border-0"
                    src={item.videoUrl} 
                    title={`${item.name} Testimonial`}
                    allow="autoplay; encrypted-media; picture-in-picture" 
                    allowFullScreen 
                  />
                </div>
                
                {/* Text Details Container */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h4 className="text-[16px] font-bold text-brand-dark uppercase tracking-wide mb-3">
                    {item.name}
                  </h4>
                  <p className="text-[14.5px] text-gray-700 leading-relaxed font-sans">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Bottom CTA */}
      <GetInvolvedCTA />

    </div>
  );
}
