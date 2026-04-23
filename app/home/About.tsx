import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* --- PART 1: The HEI Story --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Story Text */}
          <div className="space-y-6 lg:pr-6 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark leading-snug">
              Paschal Achunine, HEI’s Executive Director shares the HEI story.
            </h2>
            <div className="space-y-4 font-sans text-brand-dark text-[15px] sm:text-base lg:text-[17px] leading-relaxed">
              <p>
                We are a community of passionate, empathetic individuals dedicated to providing basic healthcare to the poorest segments of society through grassroots initiatives. We believe that every life is precious and should be protected at all costs, which is why our mantra is: <strong className="font-bold">”that None should die.”</strong> This reflects our dissatisfaction with the status quo in Nigeria, where people die from medical conditions that require less than N20,000 ($30) to treat.
              </p>
              <p>
                Every day across Nigerian hospitals, countless of men, women, children and babies die due to an inability to pay bills under N20,000 ($30). Recently, these death rates have become alarming. On the average 1.35 million people are either killed or maimed due to road crashes globally.
              </p>
              <p>
                To ensure that <strong className="font-bold">”that none should die,”</strong> from these non-chronic diseases and crashes, we commit financially to covering the emergency medical bills of qualified indigent patients. To date, we have partnered with 78 hospitals nationwide to ensure these emergency cases are not delayed, once verified. With your continued support, we aim to partner with 144 hospitals by 2024, enabling us to save thousands of more lives.
              </p>
            </div>
          </div>

          {/* 2 YouTube Videos Stacked Up & Down */}
          <div className="flex flex-col gap-8 justify-center lg:h-full">
            {/* Video 1 */}
            <div className="w-full rounded-xl overflow-hidden shadow-md bg-gray-50 border border-gray-100 flex-1 min-h-[220px]">
               <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/s5TWe7ULZ5o" 
                title="HEI Story Video 1" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            {/* Video 2 */}
            <div className="w-full rounded-xl overflow-hidden shadow-md bg-gray-50 border border-gray-100 flex-1 min-h-[220px]">
               <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/MuTMivmPCDA" 
                title="HEI Story Video 2" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>


        {/* --- PART 2: Milestones & Achievements Grid --- */}
        <div className="pt-12 border-t border-gray-100 space-y-10">
          
          <div className="space-y-3 text-center sm:text-left max-w-4xl mx-auto sm:mx-0">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark leading-tight">
              With you, there’s no limit to what we can achieve
            </h2>
            <p className="text-[15px] font-sans text-gray-600 leading-relaxed max-w-2xl">
              Thanks for your contribution, support and sponsorship, we have been able to achieve various milestones and touch more lives.
            </p>
          </div>

          {/* Stats Cards: 3 Per Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard 
              number="35,000" 
              text="Medical bills are covered across 78 hospitals in 12 Nigerian states." 
            />
            <StatCard 
              number="120,000" 
              text="Trained in CPR & First Aid in rural and underserved communities." 
            />
            <StatCard 
              number="1,575" 
              text="Malnourished Children Helped: Therapeutic food, medical aid, and nutrition support were provided." 
            />
            <StatCard 
              number="9,622" 
              text="Emergencies Addressed By trained First Responders nationwide." 
            />
            <StatCard 
              number="3,750 Plus" 
              text="Accident/Fire Victims Supported: Critical injuries were treated with a 72% survival rate." 
            />
            <StatCard 
              number="11,200" 
              text="Health Workers Equipped With essential Personal Protective Equipment (PPE)." 
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <Link href="/donate" className="px-8 py-3 bg-brand-red text-white font-bold font-sans text-[13px] tracking-wider uppercase hover:bg-black transition-colors rounded shadow-sm text-center">
              MAKE A DONATION
            </Link>
            <Link href="/partner" className="px-8 py-3 bg-brand-dark text-white font-bold font-sans text-[13px] tracking-wider uppercase hover:bg-brand-red transition-colors rounded shadow-sm text-center">
              PARTNER WITH US
            </Link>
          </div>
        </div>

        {/* --- PART 3: Standalone Large Video & Award --- */}
        <div className="pt-12 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* Standalone Large Video (Col-7) */}
            <div className="lg:col-span-7 flex justify-center w-full lg:h-full">
              <div className="w-full h-[250px] sm:h-[300px] lg:h-full rounded-xl shadow-lg border border-gray-100 overflow-hidden bg-black relative">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/RwbWkx_QS6o" 
                  title="Reaching out to the less privileged - HEI" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Award Sidebar (Col-5) */}
            <div className="lg:col-span-5 flex justify-center w-full h-full">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden w-full max-w-sm flex flex-col items-center h-full">
                
                {/* Top Red Accent */}
                <div className="w-12 h-12 bg-brand-red mt-6 rounded-sm"></div>
                
                <div className="p-6 pt-2 flex flex-col items-center flex-1">
                  {/* Award Image Placeholder */}
                  <div className="relative w-full h-[180px] sm:h-[220px] mb-4">
                    <Image 
                      src="/award.png" 
                      alt="Best Supporting NGO Award" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-heading font-black text-lg sm:text-xl text-center text-brand-dark uppercase tracking-tight leading-none mb-2">
                    HEALTH EMERGENCY INITIATIVE
                  </h3>
                  <p className="font-sans font-bold text-center text-gray-700 text-[10px] sm:text-xs uppercase tracking-wide">
                    Best Supporting NGO in Lagos State
                  </p>
                </div>

                {/* FB Banner */}
                <div className="w-full flex items-center justify-between px-4 py-3 bg-[#1877F2] text-white font-sans text-[10px] sm:text-xs font-semibold">
                  <div className="flex items-center space-x-2">
                     <span className="bg-white text-[#1877F2] rounded-sm w-4 h-4 flex items-center justify-center font-bold text-xs">f</span>
                     <span className="truncate">/HealthEmergencyInitiative</span>
                  </div>
                  <span>+234 706 398 5777</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left bg-white p-6 rounded-lg shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
      <h3 className="text-3xl font-heading font-bold text-brand-red mb-3">
        {number}
      </h3>
      <p className="text-sm font-sans text-brand-dark leading-relaxed">
        {text}
      </p>
    </div>
  );
}
