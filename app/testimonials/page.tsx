import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Fatima Adebowale",
    label: "Beneficiary — Hospital Bills",
    summary: "When medical bills became overwhelming, this mother had nowhere else to turn. HEI stepped in to pay her child's hospital bills, ensuring the child received urgent care. A story of restored hope and life-saving support for a family in need.",
    videoUrl: "https://www.youtube.com/embed/wesvDfGVbCM?rel=0"
  },
  {
    id: 2,
    name: "Mrs. Opeoluwa Folashade",
    label: "Beneficiary — Child Healthcare",
    summary: "No parent should have to choose between healthcare and survival. This mother shares how HEI helped cover her child's hospital bills, allowing treatment to continue without delay — because every child matters.",
    videoUrl: "https://www.youtube.com/embed/lUl0rwEZDwY?rel=0"
  },
  {
    id: 3,
    name: "HEI Malnutrition Intervention Program",
    label: "Program — Child Nutrition",
    summary: "Malnutrition in children is driven by poor dietary intake, poverty, and limited healthcare access. Through our CSR partner Spectranet, HEI is delivering nutrient-rich food solutions in resource-limited settings to fight child malnutrition.",
    videoUrl: "https://www.youtube.com/embed/mrHajjzimcc?rel=0"
  },
  {
    id: 4,
    name: "Mrs. Labake",
    label: "Beneficiary — Emergency Blood Support",
    summary: "Saving lives is what we do. When baby Raymond faced a critical blood shortage and was on the brink of death, HEI intervened swiftly — because no child should die from a condition we can prevent.",
    videoUrl: "https://www.youtube.com/embed/UXItHfk75lw?rel=0"
  },
  {
    id: 5,
    name: "Esther Obiora",
    label: "Beneficiary — Emergency Care",
    summary: "As part of our mission that no life should be lost due to lack of funds, HEI took up the case of Jonathan to prevent an avoidable death. Your donation helps us reach more families like his.",
    videoUrl: "https://www.youtube.com/embed/iQGuod6Y7x8?rel=0"
  },
  {
    id: 6,
    name: "HEI First Responders Training",
    label: "Program — CPR & First Aid",
    summary: "An intensive, AHA-certified training that equips individuals and organisations with the skills to double the survival chances of emergency victims. Every trained responder is a life saved.",
    videoUrl: "https://www.youtube.com/embed/j3cs_yZC2QM?rel=0"
  },
];

export const metadata = {
  title: "Testimonials | Health Emergency Initiative",
};

export default function TestimonialsPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">

      {/* Hero Header */}
      <section className="relative w-full min-h-[70vh] py-20 lg:py-28 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/about2.jpg" alt="Testimonials Hero" sizes="100vw" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-[#1a0505]/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
            Testimonials
          </h1>
          <div className="w-20 h-1.5 bg-brand-gold rounded-full mb-6"></div>
          <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed font-sans font-medium max-w-2xl">
            Real stories from people whose lives have been touched by our interventions — survivors, beneficiaries, and partners on the front lines.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 group"
              >
                {/* Red top accent */}
                <div className="h-1 w-full bg-brand-red shrink-0"></div>

                {/* Video */}
                <div className="w-full aspect-video relative bg-black shrink-0">
                  <iframe
                    className="w-full h-full absolute inset-0 border-0"
                    src={item.videoUrl}
                    title={`${item.name} — HEI`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-1 gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red font-sans">{item.label}</span>
                  <h4 className="text-[15px] font-bold text-brand-dark uppercase tracking-wide font-heading">
                    {item.name}
                  </h4>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed font-sans mt-1">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-14 text-center">
            <Link
              href="https://www.youtube.com/@healthemergencyinitiative3267/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading font-bold text-[0.9rem] uppercase tracking-widest px-8 py-4 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-2.95 12.68 12.68 0 0 0-7.64 0A4.83 4.83 0 0 1 4.41 6.69 49.11 49.11 0 0 0 4 12a49.11 49.11 0 0 0 .41 5.31 4.83 4.83 0 0 1 3.77 2.95 12.68 12.68 0 0 0 7.64 0 4.83 4.83 0 0 1 3.77-2.95A49.11 49.11 0 0 0 20 12a49.11 49.11 0 0 0-.41-5.31zM10 15V9l5 3-5 3z"/>
              </svg>
              View More on YouTube
            </Link>
          </div>

        </div>
      </section>

      <GetInvolvedCTA />

    </div>
  );
}
