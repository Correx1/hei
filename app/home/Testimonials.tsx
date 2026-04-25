export default function Testimonials() {
  const testimonials = [
    {
      quote: "\"HEI paid my son's hospital bill when we had nothing.\"",
      text: "We were turned away at the gate. A nurse told us about HEI. Within hours, the bill was verified and covered. My son is alive today because of this organisation.",
      initials: "AM",
      name: "Amaka M.",
      role: "Beneficiary, Lagos State",
    },
    {
      quote: "\"The CPR training they gave us saved a life at our market.\"",
      text: "I never thought I'd use it. A man collapsed and I remembered exactly what to do. HEI trained us six months before. He survived. That training is priceless.",
      initials: "EO",
      name: "Emmanuel O.",
      role: "CPR Trainee, Onitsha",
    },
    {
      quote: "\"Partnering with HEI has transformed how we treat indigent patients.\"",
      text: "Before HEI, we had to turn patients away who couldn't pay. Now we have a verified fast-track system. Lives are being saved that would have been lost.",
      initials: "Dr",
      name: "Dr. Chukwu B.",
      role: "Medical Director, Partner Hospital",
    },
  ];

  return (
    <section id="testimonials" className="py-[100px] bg-[linear-gradient(rgba(26,5,5,0.92),rgba(26,5,5,0.92)),url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=60')] bg-center bg-cover relative">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-[3rem]">
          <span className="block text-center font-serif italic text-[0.95rem] text-brand-gold tracking-[0.04em] mb-[0.5rem]">
            Why People Believe in Us
          </span>
          <h2 className="font-head font-bold uppercase leading-[1.15] tracking-[0.02em] text-[clamp(1.8rem,3vw,2.8rem)] text-white mb-[1rem]">
            Lives Touched,<br />
            Voices That Matter
          </h2>
          <p className="text-white/50 max-w-[520px] mx-auto text-[0.95rem]">
            Real stories from the communities and partners who have experienced HEI's work firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-white/5 border-[1px] border-white/10 p-[2.2rem] relative transition-all duration-250 hover:bg-white/10 hover:-translate-y-1">
              
              <div className="font-head text-[4rem] text-brand-red leading-[0.7] mb-[1rem] opacity-60">
                &quot;
              </div>
              
              <h4 className="font-head text-[1rem] font-semibold uppercase text-white mb-[0.75rem] tracking-[0.03em] leading-[1.3]">
                {testi.quote}
              </h4>
              
              <p className="font-serif italic text-[0.9rem] text-white/55 leading-[1.65] mb-[1.5rem]">
                {testi.text}
              </p>
              
              <div className="flex items-center gap-[0.8rem] pt-[1rem] border-t-[1px] border-white/10">
                <div className="w-[44px] h-[44px] rounded-full border-[2px] border-brand-gold bg-brand-charcoal flex items-center justify-center font-head font-bold text-white text-[0.9rem] shrink-0">
                  {testi.initials}
                </div>
                <div>
                  <strong className="block font-head text-[0.8rem] uppercase tracking-[0.06em] text-white">
                    {testi.name}
                  </strong>
                  <span className="text-[0.75rem] text-white/40 font-serif italic">
                    {testi.role}
                  </span>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
