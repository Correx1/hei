import React from 'react';
import { HeartHandshake, ShieldCheck, ClipboardCheck, TrendingUp, Leaf } from 'lucide-react';

const CORE_VALUES = [
  { title: "Empathy",       icon: HeartHandshake, color: "text-[#04ADBF]" },
  { title: "Integrity",     icon: ShieldCheck,    color: "text-brand-dark" },
  { title: "Accountability",icon: ClipboardCheck, color: "text-[#E51924]"  },
  { title: "Positive Impact",icon: TrendingUp,    color: "text-[#E51924]"  },
  { title: "Sustainability", icon: Leaf,           color: "text-[#04ADBF]" },
];

export default function MissionVision() {
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Mission & Vision ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 lg:gap-20 mb-10 lg:mb-14">

          {/* Mission */}
          <div className="py-6 md:py-0 border-b md:border-b-0 border-gray-100 flex flex-col items-center text-center">
            <h2 className="text-[22px] md:text-[28px] font-heading font-extrabold text-brand-dark leading-snug mb-3">
              Our Mission
            </h2>
            <div className="w-10 h-1 bg-[#E51924] mb-4"></div>
            <p className="font-sans text-[15.5px] text-gray-600 leading-[1.85] max-w-md">
              To assist in the provision of emergency &amp; life saving response in public health
              institutions and support other related initiatives for the good of humanity.
            </p>
          </div>

          {/* Vision */}
          <div className="py-6 md:py-0 md:border-l border-gray-100 md:pl-12 lg:pl-20 flex flex-col items-center text-center">
            <h2 className="text-[22px] md:text-[28px] font-heading font-extrabold text-brand-dark leading-snug mb-3">
              Our Vision
            </h2>
            <div className="w-10 h-1 bg-brand-dark mb-4"></div>
            <p className="font-sans text-[15.5px] text-gray-600 leading-[1.85] max-w-md">
              To be a trusted global partner and platform that provides health and emergency
              interventions to indigent and vulnerable people in the society, driven by the
              Love of Jesus Christ.
            </p>
          </div>

        </div>

        {/* ── Core Values ──────────────────────────────── */}
        <div className="border-t border-gray-100 pt-8 lg:pt-10">

          <h3 className="text-[20px] md:text-[24px] font-heading font-extrabold text-brand-dark uppercase tracking-tight mb-8 text-center">
            Our Core Values
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 justify-items-center">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className={`flex flex-col items-center text-center px-6 py-5 group ${idx === CORE_VALUES.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}>
                  <span className="text-[11px] font-bold font-sans text-gray-400 uppercase tracking-[0.18em] mb-3">
                    0{idx + 1}
                  </span>
                  <Icon className={`w-6 h-6 mb-3 ${val.color}`} strokeWidth={2} />
                  <span className="font-heading font-extrabold text-[13.5px] text-brand-dark uppercase tracking-widest leading-snug">
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
