import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function OurStory() {
  const partnerHospitals = [
    "Ajeromi General Hospital, Ajegunle, Lagos",
    "Alimosho General Hospital, Igando, Lagos",
    "Apapa General Hospital, Lagos",
    "Badagry General Hospital",
    "Ebutte Metta Health Centre, Lagos",
    "Federal Medical Centre Ebutte Metta, Lagos",
    "Gbagada General Hospital, Lagos",
    "Isolo General Hospital, Lagos",
    "Lagos Island Maternity",
    "Lagos State University Teaching Hospital, (LASUTH)",
    "Lagos University Teaching Hospital, (LUTH)",
    "Massey Children Hospital, Lagos",
    "Mushin General Hospital, Lagos",
    "Police Medical Clinic Falomo, Lagos",
    "Randle General Hospital, Surulere, Lagos",
    "Shomolu General Hospital, Shomolu, Lagos",
    "University College Hospital Ibadan (UCH)",
    "Federal Medical Centre, Owerri"
  ];

  const impactStats = [
    "Provided emergency medical assistance to over 35,700 indigent patients, including more than 21,800 children.",
    "Supported 6,870+ road traffic crash victims with post-crash care.",
    "Provided Therapeutic food for 8,200 malnourished children.",
    "Trained 147,500+ First Responders across communities, schools, and organizations."
  ];

  const goalsList = [
    "Partner with at least 274 hospitals nationwide.",
    "Provide lifesaving medical care to 172,000 indigent patients.",
    "Train 375,000+ First Aid Responders.",
    "Provide malnutrition Alleviation Program for 50,000 malnourished children of 0 to 5 years.",
    "Improve our health emergency awareness outreach through better social media awareness programs and campaigns."
  ];

  return (
    <div className="w-full bg-white flex flex-col font-sans text-gray-700">
      
      {/* 1–3. Our Initiatives — concise scannable layout */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-widest font-bold text-brand-red mb-2 font-sans">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark uppercase tracking-tight">
              Our Initiatives
            </h2>
            <div className="w-16 h-1 bg-brand-gold rounded-full mx-auto mt-4"></div>
          </div>

          {/* Initiative 1 — Medical Bills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-16 pb-16 border-b border-gray-100">
            <div className="relative h-[300px] lg:h-[380px] w-full overflow-hidden shadow-lg rounded-sm">
              <Image src="/outreach.jpg" alt="Hospital Intervention" sizes="(max-width: 768px) 100vw, 50vw" fill className="object-cover" />
            </div>
            <div className="space-y-5">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-brand-red font-sans border-b-2 border-brand-red pb-1">Initiative 01</span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark leading-snug uppercase">
                Emergency Medical Bills
              </h3>
              <p className="font-sans text-[15px] text-gray-600 leading-relaxed">
                Thousands of Nigerians die in hospitals unable to afford basic emergency care. HEI covers medical bills for indigent patients — no family left behind at the ward door.
              </p>
              <div className="flex items-center gap-4 pt-2 border-l-4 border-brand-red pl-5">
                <div>
                  <p className="font-heading font-bold text-3xl text-brand-dark">91+</p>
                  <p className="font-sans text-[12px] uppercase tracking-widest text-gray-500">Partner Hospitals</p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <p className="font-heading font-bold text-3xl text-brand-dark">85%</p>
                  <p className="font-sans text-[12px] uppercase tracking-widest text-gray-500">Crash Victim Survival Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Initiative 2 — First Responders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="space-y-5 lg:order-1 order-2">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-brand-red font-sans border-b-2 border-brand-red pb-1">Initiative 02</span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark leading-snug uppercase">
                First Responder Training
              </h3>
              <p className="font-sans text-[15px] text-gray-600 leading-relaxed">
                We train communities, schools, and organizations in CPR, First Aid, and BLS — turning everyday Nigerians into life-savers. Approved by 3 State Ministries of Education.
              </p>
              <div className="flex items-center gap-4 pt-2 border-l-4 border-brand-gold pl-5">
                <div>
                  <p className="font-heading font-bold text-3xl text-brand-dark">147,600+</p>
                  <p className="font-sans text-[12px] uppercase tracking-widest text-gray-500">Responders Trained</p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <p className="font-heading font-bold text-3xl text-brand-dark">950K</p>
                  <p className="font-sans text-[12px] uppercase tracking-widest text-gray-500">Target (3 Years)</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[380px] w-full overflow-hidden shadow-lg rounded-sm lg:order-2 order-1">
              <Image src="/training.jpg" alt="First Responder Training" sizes="(max-width: 768px) 100vw, 50vw" fill className="object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Impact & Goals */}
      <section className="py-20 lg:py-28 bg-brand-dark text-white relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,#fff,#fff_1px,transparent_1px,transparent_10px)] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-widest font-bold text-brand-gold mb-3 font-sans">What We Have Done & Where We Are Going</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white uppercase tracking-tight">
              Impact &amp; Goals
            </h2>
            <div className="w-20 h-1 bg-brand-gold rounded-full mx-auto mt-5"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

            {/* Impact Column */}
            <div className="pb-16 lg:pb-0 lg:pr-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-10 bg-brand-red rounded-full shrink-0"></div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-wide">
                  Our Impact <span className="text-white/40 text-base font-sans normal-case tracking-normal font-normal ml-1">2015 – Present</span>
                </h3>
              </div>
              <ul className="space-y-0">
                {impactStats.map((text, idx) => (
                  <li key={idx} className="flex items-start gap-5 py-4 border-b border-white/8 last:border-0 group">
                    <span className="text-[11px] font-bold text-brand-red/60 font-sans uppercase tracking-widest mt-1 shrink-0 w-5 text-right">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-[15px] text-white/75 leading-relaxed group-hover:text-white/95 transition-colors font-sans">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Goals Column */}
            <div className="pt-16 lg:pt-0 lg:pl-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-10 bg-brand-gold rounded-full shrink-0"></div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-wide">
                  Our Goals
                </h3>
              </div>
              <ul className="space-y-0">
                {goalsList.map((text, idx) => (
                  <li key={idx} className="flex items-start gap-5 py-4 border-b border-white/8 last:border-0 group">
                    <span className="text-[11px] font-bold text-brand-gold/60 font-sans uppercase tracking-widest mt-1 shrink-0 w-5 text-right">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-[15px] text-white/75 leading-relaxed group-hover:text-white/95 transition-colors font-sans">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* 5. Partner Hospitals */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark uppercase tracking-tight">
              Some of Our Partner Hospitals
            </h3>
            <div className="w-16 h-1 bg-brand-red rounded-full"></div>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
              The Nigerian healthcare system grapples with numerous challenges, significantly heightening the risk of avoidable deaths. HEI responds by bridging these gaps, offering timely medical intervention through collaborations with key public hospitals, including:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
            {partnerHospitals.map((hospital, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 py-3 border-b border-gray-100"
              >
                <div className="w-[6px] h-[6px] rounded-full bg-brand-dark/20 mt-2.5 shrink-0"></div>
                <span className="text-[15px] text-brand-dark/80 leading-snug">{hospital}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
