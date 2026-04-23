import Image from "next/image";
import Link from "next/link";
import React from "react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";
import { ThumbsUp, HeartHandshake, BriefcaseMedical, Lightbulb, TrendingUp, Network } from "lucide-react";

const BENEFITS_DATA = [
  {
    icon: ThumbsUp,
    color: "bg-blue-50 text-blue-600",
    title: "Join a Noble Cause",
    desc: "Nothing feels better than doing something meaningful, and bigger than yourself"
  },
  {
    icon: HeartHandshake,
    color: "bg-red-50 text-[#E51924]",
    title: "Help the less privileged",
    desc: "Help those who are in sincere need of help by extending an arm of kindness to someone in need. We exist to help one another"
  },
  {
    icon: BriefcaseMedical,
    color: "bg-amber-50 text-amber-600",
    title: "Handle Health Emergencies",
    desc: "Gain access to periodic training on health emergencies and learn how to handle them effectively"
  },
  {
    icon: Lightbulb,
    color: "bg-gray-100 text-gray-700",
    title: "Become Experienced",
    desc: "Nothing beats experience. Gain valuable work experience in the NGO field and improve your expertise"
  },
  {
    icon: TrendingUp,
    color: "bg-teal-50 text-teal-600",
    title: "Improve on your skills",
    desc: "By effectively applying your current skills and putting it to good use at HEI, you will definitely improve them"
  },
  {
    icon: Network,
    color: "bg-green-50 text-green-600",
    title: "Network! Network!! Network!!!",
    desc: "Connect to great amazing people in different walks of life and find unique opportunities"
  }
];

export default function VolunteerPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">

      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] py-20 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0 border-t-4 border-[#E51924]">
          <Image 
            src="https://images.unsplash.com/photo-1593113583279-7dd2efb6d915?q=80&w=2000&auto=format&fit=crop" 
            alt="Volunteer Hero" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white uppercase tracking-wider leading-tight mb-5 text-center">
            VOLUNTEER TO SAVE A LIFE
          </h1>
          <p className="text-[14.5px] md:text-[16px] text-white/95 leading-relaxed font-sans font-medium tracking-wide max-w-3xl mx-auto px-4 text-center mb-8">
            HEI volunteers are a significant part of our organization and are essential to our achievements.
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdmJQEFQowXyVWnLr2asp0yzPmeTO4bdTZf-1ucCxyGM063Zw/viewform" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3.5 bg-[#E51924] text-white font-sans font-bold uppercase tracking-widest text-[13.5px] hover:bg-[#c4151f] transition-colors shadow-sm rounded-sm text-center">
            Sign up to volunteer
          </Link>
        </div>
      </section>

      {/* Why Volunteer Section Side By Side */}
      <section className="w-full py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-stretch">
            
            {/* Left: Interactive Graphic Poster */}
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmJQEFQowXyVWnLr2asp0yzPmeTO4bdTZf-1ucCxyGM063Zw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-[350px] md:h-[450px] lg:h-full relative rounded-sm overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] group transition-shadow duration-500"
            >
               <Image 
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                 alt="Volunteer With Us Graphic Link" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
                 className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/10 transition-colors duration-500"></div>
            </Link>

            {/* Right: Text Blocks and Needs */}
            <div className="space-y-6 pt-4 lg:pt-8">
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-brand-dark uppercase tracking-widest mb-6">
                WHY VOLUNTEER WITH HEI?
              </h2>
              
              <p className="text-[14.5px] md:text-[15.5px] text-gray-700 leading-relaxed font-sans">
                Since our establishment, volunteers, working in various capacities have contributed to our interventions and outreaches. As our operations are expanding, we are more in need of volunteers. This is where you come in.
              </p>
              <p className="text-[14.5px] md:text-[15.5px] text-gray-700 leading-relaxed font-sans">
                Lending a hand not only fosters community well-being but is sure to be a rewarding experience. The impact of this on our life saving programs would be phenomenal.
              </p>
              
              <div className="pt-4 border-l-4 border-[#E51924] pl-5 bg-gray-50 py-4 px-2 my-6">
                <p className="text-[14.5px] md:text-[15.5px] text-gray-900 leading-relaxed font-sans font-semibold mb-4 tracking-wide uppercase">
                  Below is our current area of need for next 6 months:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-[14px] md:text-[15px] text-gray-700 font-sans tracking-wide">
                  <li>Partnership and Introductions</li>
                  <li>Finance Management and Accounting Service.</li>
                  <li>Administrative Services</li>
                  <li>Media, Public Relations, Telling the HEI Story & Impact</li>
                  <li>Training and Facilitating</li>
                  <li>Information Technology (IT)</li>
                </ol>
              </div>

              <div className="pt-2">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdmJQEFQowXyVWnLr2asp0yzPmeTO4bdTZf-1ucCxyGM063Zw/viewform" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3.5 bg-[#E51924] text-white font-sans font-bold uppercase tracking-widest text-[13.5px] hover:bg-[#c4151f] transition-colors shadow-sm rounded-sm text-center">
                  VOLUNTEER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="w-full py-20 md:py-28 bg-[#fdfdfd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {BENEFITS_DATA.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="bg-white p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_30px_-10px_rgba(0,0,0,0.1)] rounded transition-transform duration-300 hover:-translate-y-2 relative hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100">
                  <div className={`mb-6 p-5 rounded-full ${card.color}`}>
                    <IconComp className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-sans text-brand-dark mb-4 tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed font-sans grow">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Image Quote Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden flex flex-col items-center justify-center border-t border-gray-200">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
            alt="Life lived for others background" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex justify-center items-center">
          <div className="border-l-4 border-[#E51924] pl-6 md:pl-10 lg:pl-12 py-3 bg-black/20 backdrop-blur-sm rounded-r-xl">
            <h2 className="text-2xl md:text-xl lg:text-2xl italic text-white font-sans tracking-widest leading-relaxed font-bold drop-shadow-lg uppercase shadow-black/50">
              ONLY A LIFE LIVED FOR OTHERS IS WORTH LIVING!
            </h2>
          </div>
        </div>
      </section>

    </div>
  );
}
