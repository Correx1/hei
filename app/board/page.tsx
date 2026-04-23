"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function BoardOfTrusteesPage() {
  const [openBioId, setOpenBioId] = useState<number | null>(null);

  const toggleBio = (id: number) => {
    setOpenBioId(openBioId === id ? null : id);
  };

  const boardMembers = [
    {
      id: 1,
      name: "DR. EMMANUEL OGBEIDE IMAFIDON",
      role: "CHAIRMAN BOARD OF TRUSTEES",
      image: "/board/Emmanuel-imafidon.jpg",
      bio: "Dr. Emmanuel Ogbeide Imafidon brings decades of experience in governance and public health policy. He is dedicated to overseeing the strategic direction of HEI, ensuring transparency, accountability, and the continuous expansion of our life-saving programs across Nigeria."
    },
    {
      id: 2,
      name: "MR. PASCHAL ACHUNINE",
      role: "EXECUTIVE DIRECTOR AND MEMBER BOT",
      image: "/board/mr-paschal-achunine.jpeg",
      bio: "As the Executive Director, Mr. Paschal drives the operational execution of HEI’s core initiatives. His leadership has been instrumental in expanding our hospital partnerships and scaling the First Responders training scheme to reach thousands nationwide."
    },
    {
      id: 3,
      name: "MRS. NNENNA NWAOKOBIA",
      role: "SECRETARY",
      image: "/board/mrs-nnena.jpg",
      bio: "Mrs. Nnenna Nwaokobia manages the administrative framework and coordination of HEI's Board. Her meticulous oversight ensures strictly ethical and legal compliance across all NGO activities and stakeholder engagements."
    },
    {
      id: 4,
      name: "AUGUSTINE A. ONYEAGHALA",
      role: "PH.D. CLINICAL AND TRANSNATIONAL RESEARCH",
      image: "/board/augustine.jpeg",
      bio: "Augustine provides vital scientific and research-driven insights. His expertise in clinical research ensures HEI’s interventions remain aligned with global best practices in emergency response and trauma care."
    },
    {
      id: 5,
      name: "MRS. FRANCA OKOLO",
      role: "MEMBER BOT",
      image: "/board/Mrs-okolo.jpg",
      bio: "Mrs. Franca Okolo brings strong advocacy and social outreach experience to the Board. She champions community inclusion initiatives, focusing specifically on maternal and child emergency health frameworks."
    },
    {
      id: 6,
      name: "OLADELE AKINYEMI",
      role: "MEMBER BOT",
      image: "/board/oladele.jpg",
      bio: "Oladele Akinyemi serves as an essential pillar in our strategy and partnerships structure. He leverages his extensive corporate network to secure funding for indigent patients' hospital bills."
    },
    {
      id: 7,
      name: "DR. OLAOLU C. AKINBO",
      role: "MEMBER BOT",
      image: "/board/dr-akinbo.png",
      bio: "A practicing medical professional, Dr. Olaolu C. Akinbo provides the critical frontline medical perspective needed to assess HEI's post-crash care protocols and evaluate partner hospital response efficiency."
    },
    {
      id: 8,
      name: "MRS. MARGRET GIN-MAIKANO NGUSEER AMEENA",
      role: "MEMBER BOT",
      image: "/board/Mrs-Magret.png",
      bio: "Mrs. Margret is a dedicated governance advocate, ensuring HEI’s organizational structures empower marginalized groups and successfully deliver therapeutic food programs for malnourished children."
    },
    {
      id: 9,
      name: "MRS. EVI IFEKWE",
      role: "MEMBER BOT",
      image: "/board/Evi-ifekwe.jpg",
      bio: "Mrs. Evi Ifekwe provides strategic management skills to the board. She contributes immensely to HEI's long-term sustainability plans and resource mobilization efforts."
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] py-20 lg:py-28 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about2.jpg"
            alt="Board Members Meeting" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white uppercase tracking-tight leading-tight mb-4">
            Board of Trustees
          </h1>
          <div className="w-24 h-1.5 bg-brand-red rounded-full mb-6"></div>
          <p className="text-[15px] md:text-[16.5px] text-white/95 leading-relaxed font-sans max-w-3xl mx-auto px-4">
            Every great achievement begins with a great personality. Our board of trustees sets the policies of our organization, guiding our mission to save lives.
          </p>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {boardMembers.map((member) => {
              const isOpen = openBioId === member.id;

              return (
                <div 
                  key={member.id} 
                  className="w-full bg-white border border-gray-200 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row relative">
                    
                    {/* Member Image - Square Side Cut */}
                    <div className="w-full h-64 sm:w-40 sm:h-auto xl:w-48 shrink-0 relative overflow-hidden bg-gray-100">
                      <Image 
                        src={member.image} 
                        alt={member.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Member Details */}
                    <div className="flex flex-col flex-1 p-6 relative bg-white z-10 text-left border-l-0 sm:border-l border-transparent transition-colors duration-300 group-hover:border-brand-red/20">
                      <h2 className="text-[17px] md:text-[18px] font-heading font-bold text-brand-dark uppercase tracking-tight leading-snug">
                        {member.name}
                      </h2>
                      <p className="text-[12px] md:text-[12.5px] font-sans font-bold text-gray-500 uppercase tracking-widest mt-1.5 mb-4">
                        {member.role || "MEMBER BOT"}
                      </p>
                      
                      {/* Brief Excerpt */}
                      <p className="text-[14px] text-gray-600 line-clamp-2 leading-relaxed mb-5">
                        {member.bio}
                      </p>

                      <div className="mt-auto">
                        {/* Accordion Toggle */}
                        <button 
                          onClick={() => toggleBio(member.id)}
                          className="inline-flex items-center gap-1.5 text-[13px] font-sans font-bold text-brand-red uppercase tracking-wider focus:outline-none w-fit transition-colors hover:text-brand-dark"
                        >
                          {isOpen ? "View Less" : "View More"}
                          <ChevronDown size={16} strokeWidth={2.5} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Accordion Content */}
                  <div 
                    className={`transition-all duration-500 ease-in-out px-6 sm:px-6 bg-[#fcfbf9] ${
                      isOpen ? "max-h-96 py-6 opacity-100 border-t border-gray-200" : "max-h-0 py-0 opacity-0 overflow-hidden border-t-0 border-transparent"
                    }`}
                  >
                    <p className="text-[14.5px] md:text-[15px] text-gray-700 leading-relaxed font-sans text-left">
                      {member.bio}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
