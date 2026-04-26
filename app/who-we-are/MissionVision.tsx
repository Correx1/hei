import React from 'react';
import { HeartHandshake, ShieldCheck, ClipboardCheck, TrendingUp, Leaf } from 'lucide-react';

const CORE_VALUES = [
  { title: "Empathy",        icon: HeartHandshake, color: "text-[#04ADBF]",  bg: "bg-[#04ADBF]/10" },
  { title: "Integrity",      icon: ShieldCheck,    color: "text-brand-dark", bg: "bg-brand-dark/8" },
  { title: "Accountability", icon: ClipboardCheck, color: "text-brand-red",  bg: "bg-brand-red/10" },
  { title: "Positive Impact",icon: TrendingUp,     color: "text-brand-red",  bg: "bg-brand-red/10" },
  { title: "Sustainability",  icon: Leaf,           color: "text-[#04ADBF]", bg: "bg-[#04ADBF]/10" },
];

export default function MissionVision() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section label */}
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-widest font-bold text-brand-red mb-2 font-sans">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark uppercase tracking-tight">
            Mission, Vision &amp; Values
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded-full mx-auto mt-4"></div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Mission */}
          <div className="flex flex-col border border-gray-100 shadow-sm bg-white overflow-hidden">
            <div className="h-1 bg-brand-red w-full"></div>
            <div className="p-8 lg:p-10 flex flex-col gap-4 text-center items-center flex-1">
              <h3 className="text-[22px] md:text-[26px] font-heading font-extrabold text-brand-dark leading-snug uppercase tracking-tight">
                Our Mission
              </h3>
              <div className="w-10 h-0.5 bg-brand-red"></div>
              <p className="font-sans text-[15.5px] text-gray-600 leading-[1.85] max-w-md">
                To assist in the provision of emergency &amp; life saving response in public health
                institutions and support other related initiatives for the good of humanity.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col border border-gray-100 shadow-sm bg-white overflow-hidden">
            <div className="h-1 bg-brand-gold w-full"></div>
            <div className="p-8 lg:p-10 flex flex-col gap-4 text-center items-center flex-1">
              <h3 className="text-[22px] md:text-[26px] font-heading font-extrabold text-brand-dark leading-snug uppercase tracking-tight">
                Our Vision
              </h3>
              <div className="w-10 h-0.5 bg-brand-gold"></div>
              <p className="font-sans text-[15.5px] text-gray-600 leading-[1.85] max-w-md">
                To be a trusted global partner and platform that provides health and emergency
                interventions to indigent and vulnerable people in the society, driven by the
                Love of Jesus Christ.
              </p>
            </div>
          </div>

        </div>

        {/* Core Values */}
        <div className="border-t border-gray-100 pt-12">
          <div className="text-center mb-10">
            <h3 className="text-[20px] md:text-[24px] font-heading font-extrabold text-brand-dark uppercase tracking-tight">
              Our Core Values
            </h3>
            <div className="w-10 h-0.5 bg-brand-gold mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center px-4 py-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group ${idx === CORE_VALUES.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
                >
                  <span className="text-[10px] font-bold font-sans text-gray-300 uppercase tracking-[0.18em] mb-3">
                    0{idx + 1}
                  </span>
                  <div className={`w-11 h-11 rounded-full ${val.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${val.color}`} strokeWidth={2} />
                  </div>
                  <span className="font-heading font-extrabold text-[12.5px] text-brand-dark uppercase tracking-widest leading-snug">
                    {val.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
