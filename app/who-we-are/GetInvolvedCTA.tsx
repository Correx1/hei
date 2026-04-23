import Image from "next/image";
import Link from "next/link";
import { Wallet, Globe2, Users2 } from "lucide-react";

export default function GetInvolvedCTA() {
  const cards = [
    {
      icon: Wallet,
      title: "MAKE A DONATION",
      text: "Save a life by making a donation today. No act of kindness no matter how small is wasted.",
      buttonText: "DONATE",
      href: "/donate"
    },
    {
      icon: Globe2,
      title: "BECOME A VOLUNTEER",
      text: "Work with amazing people who are changing the world positively and touch lives immensely.",
      buttonText: "VOLUNTEER",
      href: "/volunteer"
    },
    {
      icon: Users2,
      title: "ACCREDITED LIFE SAVER",
      text: "Let's partner with your business under a strong ethical framework and save lives.",
      buttonText: "GET STARTED",
      href: "/partner"
    }
  ];

  return (
    <section className="relative w-full py-12 lg:py-16 overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/volunteer.jpg"
          alt="HEI Volunteers" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
          className="object-cover object-center"
        />
        {/* Warm slightly dark overlay to match the reference feel but cleaner */}
        <div className="absolute inset-0 bg-[#111]/80 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title above cards (optional but usually good) */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight shadow-sm">
            Join Us in Saving Lives
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 flex flex-col items-center text-center shadow-2xl transition-transform duration-300 hover:-translate-y-2 border border-white/20"
            >
              {/* Clean minimal icon */}
              <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center mb-6">
                <card.icon className="text-brand-red" size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-lg md:text-xl font-heading font-bold text-brand-dark uppercase tracking-tight mb-4">
                {card.title}
              </h3>
              
              <p className="font-sans text-[15px] sm:text-base text-gray-600 leading-relaxed mb-8 flex-1">
                {card.text}
              </p>
              
              <Link 
                href={card.href}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-red text-white py-3.5 px-8 rounded-sm font-sans font-bold text-[13px] uppercase tracking-widest hover:bg-black transition-colors duration-300"
              >
                {card.buttonText}
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
