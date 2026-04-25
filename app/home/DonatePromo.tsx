import Link from "next/link";
import Image from "next/image";

export default function DonatePromo() {
  return (
    <section id="donate" className="grid grid-cols-1 md:grid-cols-2">
      
      {/* Donate Panel */}
      <div className="relative min-h-[420px] flex flex-col items-center justify-center text-center p-[4rem_3rem] overflow-hidden group">
        <Image 
          src="/volunteer.jpg"
          alt="Donate"
          fill
          className="absolute inset-0 object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-red/78"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <h3 className="font-head text-[1.6rem] font-bold uppercase text-white mb-[0.75rem] leading-[1.2]">
            Make a Donation<br />
            — Save a Life Today
          </h3>
          <p className="text-[0.9rem] text-white/70 mb-[1.5rem] max-w-[320px]">
            Every naira you give goes directly to covering emergency medical bills for the poorest patients.
          </p>
          <Link
            href="#donate"
            className="inline-block font-head text-[1rem] font-semibold tracking-[0.08em] uppercase px-[38px] py-[14px] border-[2px] transition-all duration-250 bg-transparent text-white border-white hover:bg-white hover:text-brand-dark"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Member Panel */}
      <div className="relative min-h-[420px] flex flex-col items-center justify-center text-center p-[4rem_3rem] overflow-hidden group">
        <Image 
          src="/walk.jpg"
          alt="Become a Member"
          fill
          className="absolute inset-0 object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-dark/82"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <h3 className="font-head text-[1.6rem] font-bold uppercase text-white mb-[0.75rem] leading-[1.2]">
            Become a Member<br />
            of Project 1 Million
          </h3>
          <p className="text-[0.9rem] text-white/70 mb-[1.5rem] max-w-[320px]">
            Subscribe monthly and join a community determined to ensure no Nigerian dies from a preventable emergency.
          </p>
          <Link
            href="#donate"
            className="inline-block font-head text-[1rem] font-semibold tracking-[0.08em] uppercase px-[38px] py-[14px] border-[2px] transition-all duration-250 bg-brand-gold text-brand-dark border-brand-gold hover:bg-brand-gold-dark hover:border-brand-gold-dark hover:shadow-[0_12px_28px_rgba(255,165,0,0.4)]"
          >
            Subscribe Now
          </Link>
        </div>
      </div>

    </section>
  );
}
