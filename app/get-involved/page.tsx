import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CreditCard, HeartHandshake, Network, Users } from "lucide-react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";

const CARDS_DATA = [
  {
    icon: CreditCard,
    title: "Become a Member",
    desc: "Join us in making history, as we work together to make the world a better place. Become a member of HEI either as a business, organisation or as an individual and touch lives immensely. No act of kindness is wasted.",
    btnText: "JOIN US NOW",
    btnUrl: "/partner"
  },
  {
    icon: HeartHandshake,
    title: "Make a Donation",
    desc: "Your little or big donation can go a long way in saving lives. We can't help everyone, but everyone can help someone! Giving is not about making a donation, its about making a difference. Make a difference with your donation today!",
    btnText: "HELP SOMEONE NOW",
    btnUrl: "/donate"
  },
  {
    icon: Network,
    title: "Partner With Us",
    desc: "We are willing to partner with you. Whether you are a group, association, business or Institutions as long as you have a strong ethical framework and really want to provide love, care and support to indigent communities across the Globe.",
    btnText: "LET'S PARTNER",
    btnUrl: "/partner"
  },
  {
    icon: Users,
    title: "Become a Volunteer",
    desc: "It is said that Volunteers are love in motion. Support our works by volunteering to various causes and campaigns at HEI. Volunteers are our priceless treasures that are cherished and needed in our organisation. Become one today!",
    btnText: "VOLUNTEER NOW",
    btnUrl: "/volunteer"
  }
];

const SOCIAL_LINKS = [
  {
    name: "FACEBOOK",
    url: "#",
    color: "bg-[#3b5998]",
    icon: (
      <svg className="w-4 h-4 md:w-4 md:h-4 fill-white" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: "TWITTER",
    url: "#",
    color: "bg-[#1DA1F2]",
    icon: (
      <svg className="w-4 h-4 md:w-4 md:h-4 fill-white" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )
  },
  {
    name: "INSTAGRAM",
    url: "#",
    color: "bg-[#E1306C]",
    icon: (
      <svg className="w-4 h-4 md:w-4 md:h-4 fill-white" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    )
  },
  {
    name: "YOUTUBE",
    url: "#",
    color: "bg-[#FF0000]",
    icon: (
      <svg className="w-4 h-4 md:w-4 md:h-4 fill-white" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
];

export default function GetInvolvedPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] py-20 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/get-involve.jpg"
            alt="Get Involved" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1a0505]/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white uppercase tracking-tight leading-tight mb-4 text-center">
            WE NEED YOU!
          </h1>
          <div className="w-24 h-1.5 bg-brand-gold rounded-full mb-6 mx-auto"></div>
          <p className="text-[15px] md:text-[17px] text-white/95 leading-relaxed font-sans font-medium tracking-wide max-w-3xl mx-auto px-4 text-center">
            No one can do everything, but everyone can do something. Be a part of something bigger than yourself.
          </p>
        </div>
      </section>

      {/* Main Content Area - How You Can Help */}
      <section className="w-full py-20 lg:py-28 bg-[#fcfbf9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 uppercase tracking-widest mb-6 text-center">
            HOW YOU CAN HELP
          </h2>
          <p className="text-gray-600 text-[15px] md:text-[16px] max-w-4xl text-center leading-relaxed mb-16 md:mb-20 font-sans">
            Your support will propel further provision of programs and interventions for the purpose of saving more lives. Here are some of the many ways you can contribute to this impactful cause:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl">
            {CARDS_DATA.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="bg-white p-8 md:p-12 flex flex-col items-center text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded transition-transform duration-300 hover:-translate-y-2 relative border-t-2 border-transparent hover:border-[#E51924]">
                  <div className="mb-6 bg-red-50 p-6 rounded-full">
                    <IconComp className="w-16 h-16 text-[#E51924]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-brand-dark mb-4 tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-[14.5px] text-gray-600 leading-[1.8] font-sans mb-8 grow">
                    {card.desc}
                  </p>
                  <Link 
                    href={card.btnUrl} 
                    className="inline-block px-8 py-3.5 bg-[#E51924] text-white font-sans font-bold uppercase tracking-widest text-[13.5px] hover:bg-brand-dark transition-colors shadow-sm"
                  >
                    {card.btnText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spread The Word Section */}
      <section className="w-full mb-12 py-8 lg:py-10 min-h-[30vh] flex flex-col justify-center bg-[#E51924] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-widest mb-3 text-center">
            SPREAD THE WORD
          </h2>
          <p className="text-white/90 text-[13.5px] md:text-[14.5px] max-w-4xl text-center leading-relaxed mb-8 md:mb-10 font-sans font-medium tracking-wide">
            You can still save a life by telling the world about us. We know that not everyone has enough resources to donate or join us, but the act of spreading the word about us to your tribe will make a huge difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl gap-8 md:gap-0 relative">
            
            {/* Desktop Center Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/30 -translate-x-1/2"></div>

            {/* Left Column: Support Us On */}
            <div className="flex flex-col items-center md:items-end md:pr-12 lg:pr-24">
              <h3 className="text-lg md:text-xl font-bold font-heading uppercase tracking-widest mb-4 md:mb-6 w-full md:text-right text-center">
                SUPPORT US ON:
              </h3>
              
              <div className="flex flex-col space-y-3 w-full md:items-end items-center">
                {SOCIAL_LINKS.map((social, idx) => (
                  <a key={idx} href={social.url} className="flex items-center gap-3 group hover:-translate-y-1 transition-transform">
                    <div className={`w-8 h-8 md:w-9 md:h-9 ${social.color} flex items-center justify-center rounded shadow-sm group-hover:shadow-md transition-shadow`}>
                      {social.icon}
                    </div>
                    <span className="font-sans font-bold uppercase tracking-wider text-[13px] md:text-[13.5px] group-hover:text-gray-200 transition-colors w-24 md:w-28 md:text-right">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Tell The World */}
            <div className="flex flex-col items-center md:items-start md:pl-12 lg:pl-24">
              <h3 className="text-lg md:text-xl font-bold font-heading uppercase tracking-widest mb-4 md:mb-6 text-center md:text-left">
                TELL THE WORLD
              </h3>
              
              <blockquote className="text-center md:text-left text-[14px] md:text-[15px] leading-loose font-sans italic text-white/95 font-medium">
                &ldquo;Everyone deserves better. I believe that none should die either in accidents or from other avoidable health emergencies. I stand With HEI! I am a Life Saver! Are you?&rdquo;
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <GetInvolvedCTA />

    </div>
  );
}
