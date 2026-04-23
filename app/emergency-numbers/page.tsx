import React from "react";
import Image from "next/image";
import { 
  Shield, 
  Siren, 
  PhoneCall, 
  Star, 
  ShieldAlert, 
  HeartPulse, 
  Eye, 
  Car, 
  Baby, 
  UserX,
  Phone,
  TrafficCone,
  Ambulance,
  AlertTriangle
} from "lucide-react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";

export const metadata = {
  title: "Emergency Numbers",
};

const NATIONAL_NUMBERS = [
  {
    title: "Police Emergency Phone Numbers",
    numbers: "01-4931260, 01-4978899.",
    icon: Shield,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Rapid Response Squad (RRS)",
    numbers: "070-55350249, 070-35068242, 080-79279349",
    icon: Siren,
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    title: "Rape Helpline",
    numbers: "080072732255",
    icon: PhoneCall,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Inspector General of Police (IGP)",
    numbers: "0805966666 (SMS only)",
    icon: Star,
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    title: "Nigerian Army Human Rights",
    numbers: "If you're harassed by Army officials, call 08160134303 or 08161507644",
    icon: ShieldAlert,
    color: "text-green-700",
    bg: "bg-green-50"
  },
  {
    title: "Depression/Suicide prevention initiative",
    numbers: "08062106493, 08092106493, 09080217555, 09034400009, 08111909909, 07013811143",
    icon: HeartPulse,
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  {
    title: "State Security Service (SSS)",
    numbers: "08132222105-9",
    icon: Eye,
    color: "text-slate-800",
    bg: "bg-slate-100"
  },
  {
    title: "Federal Road Safety Corps (FRSC)",
    numbers: "122 or 07002255372",
    icon: Car,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    title: "Child Domestic Violence",
    numbers: "08107572829, 08131643208.",
    icon: Baby,
    color: "text-teal-500",
    bg: "bg-teal-50"
  },
  {
    title: "Violation of Girls and Women helpline",
    numbers: "0800072732255.",
    icon: UserX,
    color: "text-pink-600",
    bg: "bg-pink-50"
  }
];

const LAGOS_NUMBERS = [
  {
    title: "Lagos Emergency Service",
    numbers: "767 or 112, (This covers Police, Ambulance Service, and Traffic Service)",
    icon: Phone,
    color: "text-red-600",
    bg: "bg-red-50"
  },
  {
    title: "Lagos State Traffic Management Authority (LASTMA)",
    numbers: "08075005411, 0802311742, 08023900364 (Emergency Numbers) 08029228271(GM); 08023386921(Provost)",
    icon: TrafficCone,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "FRSC Zonal Office (Lagos State)",
    numbers: "08033706639, 01-7742771",
    icon: Car,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    title: "LASEMA Response Unit (LRU)",
    numbers: "01-7944929, 080-33235892, 080-33235890",
    icon: Ambulance,
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    title: "Fire Service Emergency",
    numbers: "08085753932, 08102678442.",
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-50"
  },
  {
    title: "Domestic Violence Lagos",
    numbers: "08057542266, 08102678443.",
    icon: PhoneCall,
    color: "text-purple-600",
    bg: "bg-purple-50"
  }
];

export default function EmergencyNumbersPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      
      {/* Hero Header with Background Image and Centered Box */}
      <section className="relative w-full h-[350px] md:h-[450px] flex justify-center items-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1548345680-f5475ea90f14?q=80&w=1600&auto=format&fit=crop" 
          alt="Cityscape" 
          fill 
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Centered Content Box */}
        <div className="relative z-10 bg-black/60 backdrop-blur-sm border border-white/20 p-8 md:p-12 max-w-3xl mx-4 text-center rounded-sm">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white uppercase tracking-wider mb-4">
            EMERGENCY NUMBERS
          </h1>
          <p className="text-[14px] md:text-[16px] text-white/90 leading-relaxed font-sans max-w-2xl mx-auto">
            Have you ever needed help but you didn't have the right numbers to dial? That is about to change as we have curated on this page helplines you can call during emergencies.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        
        {/* Warning Header */}
        <div className="w-full text-center mb-16">
          <p className="text-[15px] md:text-[17px] font-bold text-gray-800">
            Please ONLY call these lines when you need help. You can also share this page to save a life.
          </p>
        </div>

        {/* National Emergency Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mb-24">
          {NATIONAL_NUMBERS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start space-x-5">
                <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}>
                  <Icon size={26} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[15px] font-bold text-gray-800 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed font-sans">
                    {item.numbers}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lagos Specific Section */}
        <div className="w-full mb-12">
          <h2 className="text-[22px] md:text-[26px] font-heading font-bold text-gray-800 mb-12 border-b border-gray-100 pb-4">
            Lagos Emergency Numbers and Helplines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mb-24">
          {LAGOS_NUMBERS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start space-x-5">
                <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}>
                  <Icon size={26} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[15px] font-bold text-gray-800 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed font-sans">
                    {item.numbers}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* HEI Fallback Contact Section */}
        <div className="w-full max-w-3xl border-t border-gray-200 pt-12 mt-12">
          <p className="text-[16px] text-gray-800 mb-6 font-medium">
            If all else fail, you can contact Health Emergency Initiative (HEI) on the following numbers:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-600 font-sans mb-8">
            <li>08155554459</li>
            <li>08035766767</li>
            <li>08109942450</li>
            <li>08023142807</li>
          </ul>
          <p className="text-[14px] text-gray-600 italic">
            Thank you.
          </p>
        </div>

      </section>

      {/* Global Bottom CTA */}
      <GetInvolvedCTA />

    </div>
  );
}
