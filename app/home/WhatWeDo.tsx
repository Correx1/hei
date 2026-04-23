import Link from "next/link";
import { ClipboardPlus, Ambulance, HeartPulse, ShieldPlus, Users } from "lucide-react";

const WHAT_WE_DO = [
  {
    title: "Payment of hospital bills for indigent patients",
    overview: "We believe that everyone deserves quality healthcare regardless of their financial status. Our initiative covers emergency medical bills for the poorest patients, ensuring they receive life-saving treatments.",
    icon: ClipboardPlus,
    href: "/hospital-bills"
  },
  {
    title: "Post crash care",
    overview: "Immediate medical response after road traffic accidents is crucial. We provide post-crash care support to victims to stabilize their condition and facilitate their recovery journey.",
    icon: Ambulance,
    href: "/post-crash-care"
  },
  {
    title: "First respondans/cpr training scheme",
    overview: "Empowering the public saves lives. We conduct widespread CPR and first aid training programs across communities to equip everyday citizens with vital emergency response skills.",
    icon: HeartPulse,
    href: "/cpr-training"
  },
  {
    title: "PPE donations",
    overview: "Protecting our frontline health workers is a priority. We actively donate Personal Protective Equipment (PPE) to underserved hospitals and clinics to ensure safe medical environments.",
    icon: ShieldPlus,
    href: "/ppe-donations"
  },
  {
    title: "Outreach programs",
    overview: "Going beyond the hospitals, we organized community outreach programs targeting rural and marginalized populations to raise health awareness and provide basic screenings.",
    icon: Users,
    href: "/outreach"
  }
];

export default function WhatWeDo() {
  return (
    <section className="w-full bg-[#fcfbf9] py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-dark uppercase tracking-tight">
            What We Do
          </h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full"></div>
          <p className="text-[15px] sm:text-base font-sans text-brand-dark/80 leading-relaxed pt-2 font-medium">
            Our interventions are focused on rapid response, direct support, and community empowerment to ensure that that none should die.
          </p>
        </div>

        {/* 5 Cards Centralized using flex wrap */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          {WHAT_WE_DO.map((item, idx) => (
            <Link 
              href={item.href}
              key={idx} 
              className="group flex flex-col items-center text-center bg-white w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm rounded-xl p-8 shadow-sm hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Red Circle Icon */}
              <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center shadow-md mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>

              {/* Card Content */}
              <h3 className="font-heading font-bold text-[19px] text-brand-dark leading-snug mb-3 first-letter:uppercase group-hover:text-brand-red transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed line-clamp-4">
                {item.overview}
              </p>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
