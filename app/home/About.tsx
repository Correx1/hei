import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-[100px] bg-brand-white relative">
      <div className="absolute inset-0 opacity-[0.025] bg-[repeating-linear-gradient(45deg,var(--color-brand-red)_0,var(--color-brand-red)_1px,transparent_0,transparent_50%)] bg-[size:16px_16px] pointer-events-none"></div>
      
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="flex flex-col">
            <span className="block font-serif italic text-[0.95rem] text-brand-gold tracking-[0.04em] mb-[0.6rem]">
              Our Meat Market — Our Mission
            </span>
            <h2 className="font-head font-bold uppercase leading-[1.15] tracking-[0.02em] text-[clamp(1.8rem,3vw,2.6rem)] text-brand-dark mb-[1.2rem]">
              We Go All Out<br />
              For <em className="not-italic text-brand-red">Every Life</em><br />
              That Matters
            </h2>
            
            <blockquote className="border-l-[4px] border-brand-gold py-4 px-6 my-6 bg-brand-light font-serif italic text-[1.1rem] text-brand-dark">
              "That None Should Die" from a condition that costs less than ₦20,000 to treat.
            </blockquote>
            
            <p className="text-brand-muted text-[0.98rem] mb-4">
              We are a community of passionate, empathetic individuals dedicated to providing basic emergency healthcare to the poorest segments of society through grassroots initiatives.
            </p>
            <p className="text-brand-muted text-[0.98rem] mb-4">
              Every day across Nigerian hospitals, men, women, children and babies die due to an inability to pay bills under ₦20,000 ($30). We commit financially to covering the emergency medical bills of qualified indigent patients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 bg-brand-red mt-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.04)_40px,rgba(255,255,255,0.04)_41px)]">
              <div className="p-[22px_18px] text-center border-r-[1px] border-white/15 last:border-r-0 relative z-10">
                <strong className="block font-head text-[1.9rem] font-bold text-white leading-none">78</strong>
                <span className="text-[0.7rem] text-white/70 uppercase tracking-[0.1em] font-head">Partner Hospitals</span>
              </div>
              <div className="p-[22px_18px] text-center border-r-[1px] border-white/15 md:border-b-0 border-b last:border-b-0 relative z-10">
                <strong className="block font-head text-[1.9rem] font-bold text-white leading-none">12</strong>
                <span className="text-[0.7rem] text-white/70 uppercase tracking-[0.1em] font-head">Nigerian States</span>
              </div>
              <div className="p-[22px_18px] text-center border-r-[1px] border-white/15 last:border-r-0 relative z-10">
                <strong className="block font-head text-[1.9rem] font-bold text-white leading-none">33,500+</strong>
                <span className="text-[0.7rem] text-white/70 uppercase tracking-[0.1em] font-head">Bills Covered</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#donate"
                className="inline-block font-head text-[1rem] font-semibold tracking-[0.08em] uppercase px-[38px] py-[14px] border-[2px] transition-all duration-250 bg-brand-red text-white border-brand-red hover:bg-brand-red-dark hover:border-brand-red-dark hover:shadow-[0_12px_28px_rgba(226,29,36,0.35)]"
              >
                Make a Donation
              </Link>
              <Link
                href="#about"
                className="inline-block font-head text-[1rem] font-semibold tracking-[0.08em] uppercase px-[38px] py-[14px] border-[2px] transition-all duration-250 bg-brand-gold text-brand-dark border-brand-gold hover:bg-brand-gold-dark hover:border-brand-gold-dark hover:shadow-[0_12px_28px_rgba(255,165,0,0.4)]"
              >
                Become a Member
              </Link>
            </div>
          </div>
          
          <div className="relative h-[280px] md:h-[360px] lg:h-[520px]">
            <Image 
              src="/campaign.jpg" 
              alt="Healthcare worker"
              width={800}
              height={800}
              className="absolute top-0 left-0 w-[70%] h-[80%] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />
            <Image 
              src="/outreach.jpg" 
              alt="Community health" 
              width={600}
              height={600}
              className="absolute bottom-0 right-0 w-[55%] h-[55%] object-cover border-[12px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] z-10"
            />
            <div className="absolute top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2 bg-brand-gold w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center z-20 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
              <strong className="font-head text-[1.3rem] font-bold text-brand-dark leading-none">100%</strong>
              <span className="text-[0.55rem] uppercase tracking-[0.1em] text-brand-dark font-head text-center mt-1">Non-Profit<br/>Mission</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
