import Image from "next/image";
import Link from "next/link";
import React from "react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";
import { Ambulance, BriefcaseMedical, Stethoscope, Users } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] py-20 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Another-life-was-Saved.jpg"
            alt="Donation Hero Background" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1a0505]/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight mb-6 text-center">
            <span className="text-[#E51924]">YOUR DONATION</span> WILL SAVE A LIFE
          </h1>
          <div className="w-24 h-1.5 bg-brand-gold rounded-full mb-6 mx-auto"></div>
          <p className="text-[15px] md:text-[17px] text-white/95 leading-relaxed font-sans font-medium tracking-wide max-w-3xl mx-auto px-4 text-center">
            HEI works THAT NONE SHOULD DIE by providing financial assistance to indigent patients in public hospitals.
          </p>
        </div>
      </section>

      {/* Video Content Section */}
      <section className="w-full py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: Video Node */}
            <div className="w-full aspect-video md:aspect-[16/9] relative bg-black rounded-lg overflow-hidden flex justify-center items-center shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] lg:order-1">
               <iframe 
                 className="w-full h-full absolute inset-0 border-0"
                 src="https://www.youtube.com/embed/ivwpIcWdkaM?rel=0" 
                 title="HEI Testimony Julius Video"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen 
               />
            </div>

            {/* Right: Text Blocks */}
            <div className="space-y-6 lg:order-2">
              <p className="text-[15.5px] md:text-[18px] text-gray-800 leading-relaxed font-sans font-medium">
                Health Emergency Initiative (HEI) stepped in to help fight for the only surviving child (Testimony Julius) out of 4 children who had a fire accident.
              </p>
              <p className="text-[15.5px] md:text-[18px] text-gray-800 leading-relaxed font-sans font-medium">
                We are glad that Testimony is hale and hearty now. He has been discharged and he is doing well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription/Donation Plans Row */}
      <section className="w-full py-20 bg-[#fdfdfd] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-xl lg:text-2xl font-heading font-extrabold text-brand-dark mb-12 text-center tracking-wide leading-tight px-4">
            Subscribe to join HEI's league of donors, <br className="hidden md:block"/>let's save lives together
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-5xl">
            {/* Applying Standard HEI Brand Button Stylings strictly enforcing Uniform Radius (rounded-sm) */}
            <Link href="#donate-amount" className="px-8 py-4 bg-[#E51924] text-white font-sans font-bold uppercase tracking-widest text-[14px] hover:bg-brand-dark transition-colors shadow-sm rounded-sm text-center flex-1 min-w-[200px] max-w-[240px]">
              Any Amount
            </Link>
            <Link href="#donate-silver" className="px-8 py-4 bg-[#E51924] text-white font-sans font-bold uppercase tracking-widest text-[14px] hover:bg-brand-dark transition-colors shadow-sm rounded-sm text-center flex-1 min-w-[200px] max-w-[240px]">
              Silver Plan<br/><span className="text-[12px] opacity-90">(₦1,000)</span>
            </Link>
            <Link href="#donate-gold" className="px-8 py-4 bg-[#E51924] text-white font-sans font-bold uppercase tracking-widest text-[14px] hover:bg-brand-dark transition-colors shadow-sm rounded-sm text-center flex-1 min-w-[200px] max-w-[240px]">
              Gold Plan<br/><span className="text-[12px] opacity-90">(₦2,500)</span>
            </Link>
            <Link href="#donate-platinum" className="px-8 py-4 bg-[#E51924] text-white font-sans font-bold uppercase tracking-widest text-[14px] hover:bg-brand-dark transition-colors shadow-sm rounded-sm text-center flex-1 min-w-[200px] max-w-[240px]">
              Platinum Plan<br/><span className="text-[12px] opacity-90">(₦5,000)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Account Details Boxes */}
      <section className="w-full py-20 bg-gray-50 shadow-inner">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-dark uppercase tracking-widest mb-16 text-center">
            ACCOUNT DETAILS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
            {/* Naira Account Data Card */}
            <div className="bg-white p-8 lg:p-10 rounded-sm shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border-t-[4px] border-[#E51924] hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-[#E51924] font-bold font-sans tracking-widest uppercase text-[15px] mb-6 border-b border-gray-100 pb-4">
                NAIRA ACCOUNT DETAILS
              </h3>
              <div className="space-y-4">
                <p className="font-sans text-[15px] leading-relaxed">
                  <span className="font-bold text-gray-900 block mb-1 uppercase tracking-wide text-[13px]">ACCOUNT NAME:</span>
                  <span className="text-gray-700 font-medium">Health Emergency Initiative For Indigent Patients</span>
                </p>
                <p className="font-sans text-[15px] leading-relaxed">
                  <span className="font-bold text-gray-900 block mb-1 uppercase tracking-wide text-[13px]">ACCOUNT NO:</span>
                  <span className="text-gray-900 text-xl md:text-2xl font-mono font-bold tracking-wider">0060048591</span>
                </p>
                <p className="font-sans text-[15px] leading-relaxed">
                  <span className="font-bold text-gray-900 block mb-1 uppercase tracking-wide text-[13px]">BANK:</span>
                  <span className="text-gray-700 font-medium">Sterling Bank Plc</span>
                </p>
              </div>
            </div>

            {/* Domiciliary Account Data Card */}
            <div className="bg-white p-8 lg:p-10 rounded-sm shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border-t-[4px] border-[#E51924] hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-[#E51924] font-bold font-sans tracking-widest uppercase text-[15px] mb-6 border-b border-gray-100 pb-4">
                DOMICILIARY (DOLLAR) ACCOUNT DETAILS
              </h3>
              <div className="space-y-4">
                <p className="font-sans text-[15px] leading-relaxed">
                  <span className="font-bold text-gray-900 block mb-1 uppercase tracking-wide text-[13px]">ACCOUNT NAME:</span>
                  <span className="text-gray-700 font-medium">Health Emergency Initiative For Indigent Patients</span>
                </p>
                <p className="font-sans text-[15px] leading-relaxed">
                  <span className="font-bold text-gray-900 block mb-1 uppercase tracking-wide text-[13px]">ACCOUNT NO:</span>
                  <span className="text-gray-900 text-xl md:text-2xl font-mono font-bold tracking-wider">0060344293</span>
                </p>
                <p className="font-sans text-[15px] leading-relaxed">
                  <span className="font-bold text-gray-900 block mb-1 uppercase tracking-wide text-[13px]">BANK:</span>
                  <span className="text-gray-700 font-medium">Sterling Bank Plc</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Area Icons Section Top Overlay */}
      <section className="relative w-full py-24 bg-black overflow-hidden flex flex-col items-center border-t-4 border-[#E51924]">
        {/* Dynamic Dark Hero Image with Overlay mix tracking */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about.jpg" 
            alt="Mountains Backdrop" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover opacity-20 object-center mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
           <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-widest mb-16 text-center drop-shadow-md">
             ALL DONATIONS GO TO
           </h2>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full max-w-6xl">
             
             {/* Service Column 1 */}
             <div className="flex flex-col items-center text-center group">
               <div className=" p-5 rounded-full mb-6 bg-[#E51924] transition-colors duration-400 group-hover:scale-110 shadow-lg border border-white/5">
                 <Ambulance className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5}/>
               </div>
               <h4 className="text-white font-sans font-bold uppercase tracking-wide text-[14px] md:text-[15px] leading-snug">
                 Saving Accident <br/> Victims
               </h4>
             </div>

             {/* Service Column 2 */}
             <div className="flex flex-col items-center text-center group">
               <div className="p-5 rounded-full mb-6 bg-[#E51924] transition-colors duration-400 group-hover:scale-110 shadow-lg border border-white/5">
                 <BriefcaseMedical className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5}/>
               </div>
               <h4 className="text-white font-sans font-bold uppercase tracking-wide text-[14px] md:text-[15px] leading-snug">
                 Providing Medical <br/> Relief
               </h4>
             </div>

             {/* Service Column 3 */}
             <div className="flex flex-col items-center text-center group">
               <div className="p-5 rounded-full mb-6 bg-[#E51924] transition-colors duration-400 group-hover:scale-110 shadow-lg border border-white/5">
                 <Stethoscope className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5}/>
               </div>
               <h4 className="text-white font-sans font-bold uppercase tracking-wide text-[14px] md:text-[15px] leading-snug">
                 Providing Emergency <br/> Healthcare
               </h4>
             </div>

             {/* Service Column 4 */}
             <div className="flex flex-col items-center text-center group">
               <div className="p-5 rounded-full mb-6 bg-[#E51924] transition-colors duration-400 group-hover:scale-110 shadow-lg border border-white/5">
                 <Users className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5}/>
               </div>
               <h4 className="text-white font-sans font-bold uppercase tracking-wide text-[14px] md:text-[15px] leading-snug">
                 Extend our Reach <br/> and Coverage
               </h4>
             </div>

           </div>
        </div>
      </section>

    
    </div>
  );
}
