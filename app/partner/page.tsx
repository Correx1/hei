import Image from "next/image";
import Link from "next/link";
import React from "react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";
import { HeartHandshake, Globe, Network, Stethoscope, BadgePercent, Share2, ClipboardList, Banknote, Coins, Heart } from "lucide-react";
import { PARTNERS } from "./partners-data";

export default function PartnerPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] py-20 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about2.jpg" 
            alt="Partner With Us Hero" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover object-center mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-[#1a0505]/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-wider leading-tight mb-5 text-center">
            PARTNER WITH US
          </h1>
          <div className="w-24 h-1.5 bg-brand-gold rounded-full mb-6 mx-auto"></div>
          <p className="text-[14.5px] md:text-[16px] text-white/95 leading-relaxed font-sans font-medium tracking-wide max-w-3xl mx-auto px-4 text-center mb-8">
            HEI is willing to partner and collaborate with Individuals, Groups, and Institutions under a strong ethical framework that would bring succor to indigent communities across the Globe.
          </p>
          <Link href="#partner-form" className="inline-block px-8 py-3.5 bg-[#E51924] text-white font-sans font-bold uppercase tracking-widest text-[13.5px] hover:bg-[#c4151f] transition-colors shadow-sm rounded-sm text-center">
            PARTNER WITH US
          </Link>
        </div>
      </section>

      {/* Why Partner With HEI Section */}
      <section className="w-full py-20 md:py-28 bg-white border-b border-gray-100">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
             <h2 className="text-2xl md:text-xl lg:text-2xl font-heading font-extrabold text-brand-dark uppercase tracking-widest mb-4 text-center">
                 WHY PARTNER WITH HEI?
             </h2>
             <p className="text-[15px] md:text-[16px] text-gray-500 font-sans tracking-wide text-center mb-16 max-w-4xl">
                 Partnerships form an integral part of HEI work, and together with other stakeholders, we are maximizing impact.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 w-full">
                 
                 {/* Item 1 */}
                 <div className="flex flex-col items-center text-center group">
                     <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-200 shadow-md flex items-center justify-center mb-6 group-hover:border-[#E51924] group-hover:scale-105 transition-all duration-300">
                         <HeartHandshake className="w-10 h-10 md:w-12 md:h-12 text-brand-dark group-hover:text-[#E51924] transition-colors" strokeWidth={1.5}/>
                     </div>
                     <h3 className="text-lg md:text-xl font-bold font-sans tracking-widest uppercase mb-4 text-gray-900 group-hover:text-[#E51924] transition-colors">
                         INTEGRITY
                     </h3>
                     <p className="text-[14px] md:text-[14.5px] text-gray-600 font-sans leading-relaxed">
                         Honesty and transparency is at the center of what we do. We account and are highly responsible for all funds, activity, assets etc.
                     </p>
                 </div>

                 {/* Item 2 */}
                 <div className="flex flex-col items-center text-center group">
                     <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-200 shadow-md flex items-center justify-center mb-6 group-hover:border-[#E51924] group-hover:scale-105 transition-all duration-300">
                         <Network className="w-10 h-10 md:w-12 md:h-12 text-brand-dark group-hover:text-[#E51924] transition-colors" strokeWidth={1.5}/>
                     </div>
                     <h3 className="text-lg md:text-xl font-bold font-sans tracking-widest uppercase mb-4 text-gray-900 group-hover:text-[#E51924] transition-colors">
                         REACH
                     </h3>
                     <p className="text-[14px] md:text-[14.5px] text-gray-600 font-sans leading-relaxed">
                         We go far and wide into the most remote place where others can&apos;t go or are not willing to go in order to reach the most disadvantaged.
                     </p>
                 </div>

                 {/* Item 3 */}
                 <div className="flex flex-col items-center text-center group">
                     <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-200 shadow-md flex items-center justify-center mb-6 group-hover:border-[#E51924] group-hover:scale-105 transition-all duration-300">
                         <Globe className="w-10 h-10 md:w-12 md:h-12 text-brand-dark group-hover:text-[#E51924] transition-colors" strokeWidth={1.5}/>
                     </div>
                     <h3 className="text-lg md:text-xl font-bold font-sans tracking-widest uppercase mb-4 text-gray-900 group-hover:text-[#E51924] transition-colors">
                         DEDICATION
                     </h3>
                     <p className="text-[14px] md:text-[14.5px] text-gray-600 font-sans leading-relaxed">
                         We are highly passionate and dedicated to what we do and will not leave any stone unturned in discharging our duties effectively.
                     </p>
                 </div>

             </div>
         </div>
      </section>

      {/* Partnering Implies That */}
      <section className="w-full py-16 md:py-20 bg-black">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
             <h2 className="text-xl md:text-3xl font-heading font-extrabold text-white uppercase tracking-widest mb-12 md:mb-16 text-center">
                 PARTNERING WITH HEI IMPLIES THAT:
             </h2>

             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 lg:gap-8 w-full">
                 
                 {/* Card 1 */}
                 <div className="flex flex-col items-center text-center">
                     <div className="mb-4 md:mb-6 opacity-90">
                         <Stethoscope className="w-10 h-10 md:w-14 md:h-14 text-indigo-400" strokeWidth={1.5}/>
                     </div>
                     <p className="text-white/90 text-[12px] md:text-[14px] font-sans leading-relaxed">
                         You contribute to saving thousands of lives every year. (Your organisation is a life saver)
                     </p>
                 </div>

                 {/* Card 2 */}
                 <div className="flex flex-col items-center text-center">
                     <div className="mb-4 md:mb-6 opacity-90">
                         <Globe className="w-10 h-10 md:w-14 md:h-14 text-blue-400" strokeWidth={1.5}/>
                     </div>
                     <p className="text-white/90 text-[12px] md:text-[14px] font-sans leading-relaxed">
                         You meet your Corporate social responsibility (CSR) objectives
                     </p>
                 </div>

                 {/* Card 3 */}
                 <div className="flex flex-col items-center text-center">
                     <div className="mb-4 md:mb-6 opacity-90">
                         <Share2 className="w-10 h-10 md:w-14 md:h-14 text-teal-400" strokeWidth={1.5}/>
                     </div>
                     <p className="text-white/90 text-[12px] md:text-[14px] font-sans leading-relaxed">
                         Get positive press releases in supporting charity and boost brand image
                     </p>
                 </div>

                 {/* Card 4 */}
                 <div className="flex flex-col items-center text-center">
                     <div className="mb-4 md:mb-6 opacity-90">
                         <BadgePercent className="w-10 h-10 md:w-14 md:h-14 text-[#E51924]" strokeWidth={1.5}/>
                     </div>
                     <p className="text-white/90 text-[12px] md:text-[14px] font-sans leading-relaxed">
                         Employees get discounts on paid training and events
                     </p>
                 </div>

             </div>
         </div>
      </section>

      {/* How Organizations Can Get Involved */}
      <section className="w-full py-20 border-t" style={{ backgroundColor: '#e67300' }}>
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
             <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-white uppercase tracking-widest mb-4 text-center">
                 HOW YOUR ORGANIZATION CAN GET INVOLVED
             </h2>
             <p className="text-[14.5px] md:text-[16px] text-white/90 font-sans tracking-wide text-center max-w-4xl">
                 Whether you are a large company or a start up, a little contribution can make a world of difference. Here is how you can support.
             </p>
         </div>
      </section>
      
      {/* Involved Options Grid */}
      <section className="w-full py-16 md:py-20 bg-[#111111]">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 lg:gap-8 w-full">
                 
                 {/* Card 1 */}
                 <div className="flex flex-col items-center text-center group">
                     <div className="mb-4 md:mb-6 opacity-90 group-hover:-translate-y-2 transition-transform duration-300">
                         <ClipboardList className="w-12 h-12 md:w-16 md:h-16 text-yellow-500" strokeWidth={1.5}/>
                     </div>
                     <h3 className="text-white font-bold font-sans uppercase tracking-widest text-[13px] md:text-[15px] mb-3 md:mb-4">ORGANIZE</h3>
                     <p className="text-white/70 text-[11.5px] md:text-[14px] font-sans leading-relaxed">
                         Your organization can organize a fundraising event for HEI to support our various causes
                     </p>
                 </div>

                 {/* Card 2 */}
                 <div className="flex flex-col items-center text-center group">
                     <div className="mb-4 md:mb-6 opacity-90 group-hover:-translate-y-2 transition-transform duration-300">
                         <Banknote className="w-12 h-12 md:w-16 md:h-16 text-green-500" strokeWidth={1.5}/>
                     </div>
                     <h3 className="text-white font-bold font-sans uppercase tracking-widest text-[13px] md:text-[15px] mb-3 md:mb-4">SPONSOR</h3>
                     <p className="text-white/70 text-[11.5px] md:text-[14px] font-sans leading-relaxed">
                         Your organization can sponsor HEI projects, publications, events and campaigns
                     </p>
                 </div>

                 {/* Card 3 */}
                 <div className="flex flex-col items-center text-center group">
                     <div className="mb-4 md:mb-6 opacity-90 group-hover:-translate-y-2 transition-transform duration-300">
                         <Coins className="w-12 h-12 md:w-16 md:h-16 text-amber-500" strokeWidth={1.5}/>
                     </div>
                     <h3 className="text-white font-bold font-sans uppercase tracking-widest text-[13px] md:text-[15px] mb-3 md:mb-4">DONATE</h3>
                     <p className="text-white/70 text-[11.5px] md:text-[14px] font-sans leading-relaxed">
                         Your organization can get involved by making a regular donation and becoming a member of HEI
                     </p>
                 </div>

                 {/* Card 4 */}
                 <div className="flex flex-col items-center text-center group">
                     <div className="mb-4 md:mb-6 opacity-90 group-hover:-translate-y-2 transition-transform duration-300">
                         <Heart className="w-12 h-12 md:w-16 md:h-16 text-[#E51924]" strokeWidth={1.5}/>
                     </div>
                     <h3 className="text-white font-bold font-sans uppercase tracking-widest text-[13px] md:text-[15px] mb-3 md:mb-4">ADOPT HEI</h3>
                     <p className="text-white/70 text-[11.5px] md:text-[14px] font-sans leading-relaxed">
                         Your organization can get involved by adopting HEI as a CSR partner
                     </p>
                 </div>

             </div>
         </div>
      </section>

      {/* Our Partners Grid */}
      <section className="w-full py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-widest font-bold text-brand-red mb-2 font-sans">Trusted By</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark uppercase tracking-tight">Our Partners</h2>
            <div className="w-16 h-1 bg-brand-gold rounded-full mx-auto mt-4"></div>
            <p className="text-[15px] text-gray-500 font-sans mt-5 max-w-2xl mx-auto">
              We are proud to work alongside these incredible organisations who share our vision of saving lives and building healthier communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((p) => (
              <div key={p.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="h-0.5 w-full bg-brand-red shrink-0"></div>
                <div className="flex flex-col items-center text-center p-7 gap-4 flex-1">
                  <div className="h-40 w-full flex items-center justify-center p-2">
                    <div className="relative w-full h-full max-w-[280px]">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-brand-dark uppercase tracking-wide text-[13px] leading-snug">{p.name}</h3>
                  <p className="font-sans text-[13px] text-gray-500 leading-relaxed flex-1">{p.description}</p>
                  <Link
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold uppercase tracking-widest text-brand-red border-b border-brand-red/30 hover:border-brand-red pb-0.5 transition-colors font-sans"
                  >
                    Visit Website →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="partner-form" className="relative w-full py-20 md:py-28 border-t border-gray-100 bg-[#f9fafb]">

        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1579208575657-302a24ec758a?q=80&w=2000&auto=format&fit=crop" 
            alt="Hospital Check" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover object-center opacity-[0.03] pointer-events-none"
          />
        </div>
         
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-white rounded-sm p-6 sm:p-12 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.1)] border-t-[4px] border-[#E51924]">
            
            <div className="text-center mb-10">
               <h2 className="text-lg md:text-3xl font-heading font-extrabold text-brand-dark uppercase tracking-widest leading-tight mb-4">
                  TIME FOR YOUR ORGANIZATION <br className="hidden md:block"/> TO SAVE MORE LIVES!
               </h2>
               <p className="text-[14.5px] md:text-[15.5px] text-gray-600 font-sans leading-relaxed max-w-2xl mx-auto">
                  We are excited your organisation is joining us. This means more lives will be saved and that is awesome. Please fill the form below and we will get back to you asap!
               </p>
            </div>

            <form className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div className="flex flex-col space-y-2">
                        <label className="text-[13px] font-bold text-gray-800 uppercase tracking-wide">First Name <span className="text-[#E51924]">*</span></label>
                        <input required type="text" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#E51924] focus:ring-1 focus:ring-[#E51924] transition-colors bg-white font-sans text-[15px]" />
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                        <label className="text-[13px] font-bold text-gray-800 uppercase tracking-wide">Last Name <span className="text-[#E51924]">*</span></label>
                        <input required type="text" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#E51924] focus:ring-1 focus:ring-[#E51924] transition-colors bg-white font-sans text-[15px]" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div className="flex flex-col space-y-2">
                        <label className="text-[13px] font-bold text-gray-800 uppercase tracking-wide">Your Email <span className="text-[#E51924]">*</span></label>
                        <input required type="email" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#E51924] focus:ring-1 focus:ring-[#E51924] transition-colors bg-white font-sans text-[15px]" />
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                        <label className="text-[13px] font-bold text-gray-800 uppercase tracking-wide">Your Phone <span className="text-[#E51924]">*</span></label>
                        <input required type="tel" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#E51924] focus:ring-1 focus:ring-[#E51924] transition-colors bg-white font-sans text-[15px]" />
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-[13px] font-bold text-gray-800 uppercase tracking-wide">Company Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#E51924] focus:ring-1 focus:ring-[#E51924] transition-colors bg-white font-sans text-[15px]" />
                </div>

                <div className="flex flex-col space-y-4 pt-6 pb-2 border-b border-gray-100">
                    <label className="text-[14px] font-extrabold text-brand-dark uppercase tracking-widest text-center">Donation Plan / Partnership Type</label>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-2">
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 text-[#E51924] border-gray-300 rounded-sm bg-gray-50 focus:ring-2 focus:ring-[#E51924] cursor-pointer" />
                            <span className="text-[14.5px] text-gray-700 font-sans font-medium group-hover:text-gray-900 transition-colors">Monthly</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 text-[#E51924] border-gray-300 rounded-sm bg-gray-50 focus:ring-2 focus:ring-[#E51924] cursor-pointer" />
                            <span className="text-[14.5px] text-gray-700 font-sans font-medium group-hover:text-gray-900 transition-colors">Quarterly</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 text-[#E51924] border-gray-300 rounded-sm bg-gray-50 focus:ring-2 focus:ring-[#E51924] cursor-pointer" />
                            <span className="text-[14.5px] text-gray-700 font-sans font-medium group-hover:text-gray-900 transition-colors">Yearly</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 text-[#E51924] border-gray-300 rounded-sm bg-gray-50 focus:ring-2 focus:ring-[#E51924] cursor-pointer" />
                            <span className="text-[14.5px] text-gray-700 font-sans font-medium group-hover:text-gray-900 transition-colors">One-Time Donation</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 text-[#E51924] border-gray-300 rounded-sm bg-gray-50 focus:ring-2 focus:ring-[#E51924] cursor-pointer" />
                            <span className="text-[14.5px] text-gray-700 font-sans font-medium group-hover:text-gray-900 transition-colors">Others</span>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col space-y-2 pt-4">
                    <label className="text-[13px] font-bold text-gray-800 uppercase tracking-wide">Your Message</label>
                    <textarea rows={5} className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#E51924] focus:ring-1 focus:ring-[#E51924] transition-colors resize-y bg-white font-sans text-[15px]"></textarea>
                </div>

                <div className="flex justify-center pt-6">
                    <button type="submit" className="px-10 py-4 bg-[#E51924] text-white font-sans font-bold uppercase tracking-widest text-[14px] hover:bg-brand-dark transition-colors shadow-sm rounded-sm">
                        Submit Application
                    </button>
                </div>

            </form>
         </div>

      </section>

      {/* Global Bottom CTA */}
      <GetInvolvedCTA />

    </div>
  );
}
