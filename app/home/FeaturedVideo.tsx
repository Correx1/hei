import Link from "next/link";

export default function FeaturedVideo() {
  return (
    <section id="story" className="py-[100px] bg-brand-light relative">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] lg:gap-[4rem] items-center">
          
          <div className="relative pb-[56.25%] border-[12px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/s5TWe7ULZ5o?start=14"
              title="HEI Story — Paschal Achunine"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-none"
            ></iframe>
          </div>

          <div className="flex flex-col">
            <span className="block font-serif italic text-[0.95rem] text-brand-gold tracking-[0.04em] mb-[0.5rem]">
              The HEI Story
            </span>
            
            <h2 className="font-head font-bold uppercase leading-[1.15] tracking-[0.02em] text-[clamp(1.7rem,3vw,2.4rem)] text-brand-dark mb-[1rem]">
              Hear From Our<br />
              Executive Director
            </h2>
            
            <div className="flex items-center gap-[1rem] p-[1.2rem] bg-white border-l-[4px] border-brand-red my-[1.5rem]">
              <div className="w-[52px] h-[52px] bg-brand-red rounded-full shrink-0 flex items-center justify-center font-head font-bold text-white text-[1.2rem]">
                PA
              </div>
              <div>
                <strong className="block font-head uppercase text-[0.9rem] tracking-[0.05em] text-brand-dark">
                  Paschal Achunine
                </strong>
                <span className="text-[0.8rem] text-brand-muted font-serif italic">
                  Executive Director, Health Emergency Initiative
                </span>
              </div>
            </div>
            
            <p className="text-brand-muted text-[0.97rem] mb-[1.2rem]">
              We believe that every life is precious and should be protected at all costs. People die daily from medical conditions that require less than ₦20,000 ($30) to treat — and we refuse to accept that as inevitable.
            </p>
            
            <p className="text-brand-muted text-[0.97rem] mb-[1.2rem]">
              To date, we have partnered with <strong className="text-brand-dark">78 hospitals nationwide</strong>. With your continued support, we aim to expand to <strong className="text-brand-dark">144 hospitals</strong>, enabling us to save thousands more lives.
            </p>
            
            <div className="mt-[0.5rem]">
              <Link
                href="/donate"
                className="inline-block font-head text-[1rem] font-semibold tracking-[0.08em] uppercase px-[38px] py-[14px] border-[2px] transition-all duration-250 bg-brand-red text-white border-brand-red hover:bg-brand-red-dark hover:border-brand-red-dark hover:shadow-[0_12px_28px_rgba(226,29,36,0.35)]"
              >
                Support the Mission
              </Link>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
