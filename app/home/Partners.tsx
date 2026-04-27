import Link from "next/link";

export default function Partners() {
  return (
    <section className="py-[80px] bg-brand-white border-t-[4px] border-brand-red">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] lg:gap-[4rem] items-center">
          
          <div className="flex flex-col">
            <h2 className="font-head font-bold uppercase leading-[1.15] tracking-[0.02em] text-[clamp(1.6rem,2.5vw,2.2rem)] text-brand-dark mb-[1rem]">
              Quality Care<br />
              <em className="not-italic text-brand-red">Monitored</em> From<br />
              The First Stage
            </h2>
            
            <div className="inline-flex items-center gap-[0.6rem] bg-brand-light border-[1px] border-[rgba(226,29,36,0.2)] p-[0.6rem_1.2rem] my-[1rem]">
              <span className="font-head text-[1.4rem] font-bold text-brand-red">78</span>
              <span className="text-[0.82rem] text-brand-muted font-head uppercase tracking-[0.06em]">
                Partner Hospitals Nationwide — targeting 144 by 2024
              </span>
            </div>
            
            <p className="text-brand-muted text-[0.97rem] mb-[1.5rem]">
              Every emergency case is verified before coverage is released. We partner only with certified hospitals to ensure every naira reaches patients who truly need it.
            </p>
            
            <div className="mt-[0.5rem]">
              <Link
                href="/who-we-are"
                className="inline-block font-head text-[1rem] font-semibold tracking-[0.08em] uppercase px-[38px] py-[14px] border-[2px] transition-all duration-250 bg-brand-red text-white border-brand-red hover:bg-brand-red-dark hover:border-brand-red-dark hover:shadow-[0_12px_28px_rgba(226,29,36,0.35)]"
              >
                View More Info
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-[1rem]">
            
            <div className="flex items-start gap-[1rem] p-[1.2rem] bg-brand-light border-l-[3px] border-brand-gold transition-colors duration-200 hover:border-brand-red">
              <div className="w-[40px] h-[40px] bg-brand-red text-white flex items-center justify-center text-[1.1rem] shrink-0">
                🏥
              </div>
              <div>
                <h5 className="font-head text-[0.95rem] uppercase tracking-[0.04em] text-brand-dark mb-[0.2rem] font-semibold">
                  Emergency Bills Verified Same Day
                </h5>
                <p className="text-[0.82rem] text-brand-muted leading-[1.45]">
                  Once a case is submitted and verified, coverage is released immediately — no bureaucratic delays.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[1rem] p-[1.2rem] bg-brand-light border-l-[3px] border-brand-gold transition-colors duration-200 hover:border-brand-red">
              <div className="w-[40px] h-[40px] bg-brand-red text-white flex items-center justify-center text-[1.1rem] shrink-0">
                🌡️
              </div>
              <div>
                <h5 className="font-head text-[0.95rem] uppercase tracking-[0.04em] text-brand-dark mb-[0.2rem] font-semibold">
                  Cold Chain — Delivered With Care
                </h5>
                <p className="text-[0.82rem] text-brand-muted leading-[1.45]">
                  All medical supplies and PPE distributed to partner hospitals meet quality standards before dispatch.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[1rem] p-[1.2rem] bg-brand-light border-l-[3px] border-brand-gold transition-colors duration-200 hover:border-brand-red">
              <div className="w-[40px] h-[40px] bg-brand-red text-white flex items-center justify-center text-[1.1rem] shrink-0">
                🔬
              </div>
              <div>
                <h5 className="font-head text-[0.95rem] uppercase tracking-[0.04em] text-brand-dark mb-[0.2rem] font-semibold">
                  Outcomes Tracked With Latest Data
                </h5>
                <p className="text-[0.82rem] text-brand-muted leading-[1.45]">
                  We monitor every case outcome to ensure our resources achieve maximum life-saving impact.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
