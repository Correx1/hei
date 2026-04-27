import Link from "next/link";
import Image from "next/image";

export default function WhatWeDo() {
  const programs = [
    {
      tag: "Core Program",
      title: "Emergency Bill Coverage",
      text: "Covering medical bills under ₦20,000 for verified indigent patients at partner hospitals.",
      image: "/outreach3.jpg",
      link: "/hospital-bills",
    },
    {
      tag: "Training",
      title: "CPR & First Aid Training",
      text: "Building a nationwide network of trained first responders in rural and underserved communities.",
      image: "/training2.jpg",
      link: "/cpr-training",
    },
    {
      tag: "Child Health",
      title: "Malnutrition Relief",
      text: "Providing therapeutic food, medical aid and nutrition support to malnourished children.",
      image: "/Another-life-was-Saved.jpg",
      link: "/outreach",
    },
  ];

  return (
    <section id="programs" className="py-[90px] pb-[60px] bg-brand-white">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="text-center mb-[3.5rem]">
          <span className="block font-serif italic text-[0.95rem] text-brand-gold tracking-[0.04em] mb-[0.6rem]">
            Our Best Programs
          </span>
          <h2 className="font-head font-bold uppercase leading-[1.15] tracking-[0.02em] text-[clamp(1.8rem,3vw,2.6rem)] text-brand-dark mb-[1rem]">
            More Than Just an NGO —<br />
            A Life-Saving Movement
          </h2>
          <p className="text-brand-muted max-w-[560px] mx-auto">
            From emergency bill coverage to first-responder training, every HEI program is designed to close the gap between life and death.
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {programs.map((program, idx) => (
          <Link href={program.link} key={idx} className="relative min-h-[380px] flex flex-col justify-end overflow-hidden group cursor-pointer block">
            
            <Image 
              src={program.image}
              alt={program.title}
              fill
              className="absolute inset-0 object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105 brightness-[0.55] saturate-[0.8] group-hover:brightness-[0.4] group-hover:saturate-[0.7]"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,5,5,0.92)] via-transparent to-transparent"></div>
            
            <div className="relative z-10 p-[2rem]">
              <span className="inline-block bg-brand-red text-white font-head text-[0.65rem] uppercase tracking-[0.15em] px-[10px] py-[3px] mb-[0.75rem]">
                {program.tag}
              </span>
              <h3 className="font-head text-[1.2rem] font-semibold uppercase text-white mb-[0.5rem] leading-[1.2]">
                {program.title}
              </h3>
              <p className="text-[0.82rem] text-white/60 leading-[1.5]">
                {program.text}
              </p>
              
              <div className="inline-flex items-center gap-[0.4rem] font-head text-[0.75rem] uppercase tracking-[0.1em] text-brand-gold mt-[0.8rem] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Learn More →
              </div>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}
