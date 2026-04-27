import Link from "next/link";

export default function Impact() {
  const impacts = [
    {
      number: "33,500",
      plus: true,
      title: "Medical Bills Covered",
      text: "Across 78 hospitals in 12 Nigerian states. No indigent patient turned away.",
    },
    {
      number: "1,575",
      plus: false,
      title: "Malnourished Children Helped",
      text: "Therapeutic food, medical aid, and nutrition support provided to children in crisis.",
    },
    {
      number: "126,000",
      plus: false,
      title: "Trained in CPR & First Aid",
      text: "In rural and underserved communities — creating a first-responder network nationwide.",
    },
    {
      number: "9,622",
      plus: false,
      title: "Emergencies Addressed",
      text: "By trained First Responders deployed nationwide to critical incident scenes.",
    },
    {
      number: "3,750",
      plus: true,
      title: "Accident & Fire Victims",
      text: "Critical injuries treated with a <strong style='color:var(--color-brand-gold)'>72% survival rate</strong> among supported cases.",
    },
    {
      number: "11,200",
      plus: false,
      title: "Health Workers Equipped",
      text: "With essential Personal Protective Equipment (PPE) for frontline healthcare delivery.",
    },
  ];

  return (
    <section id="impact" className="py-[90px] bg-brand-dark relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(226,29,36,0.12)_0%,transparent_70%)] before:pointer-events-none">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-[3.5rem] relative">
          <span className="block text-center mb-[0.5rem] font-serif italic text-[0.95rem] text-brand-gold tracking-[0.04em]">
            With You, There&apos;s No Limit
          </span>
          <h2 className="font-head font-bold uppercase leading-[1.15] tracking-[0.02em] text-[clamp(1.8rem,3vw,2.8rem)] text-white max-w-[640px] mx-auto mb-[1rem]">
            Our Impact — Lives<br />
            Changed, Lives Saved 
          </h2>
          <p className="text-white/50 max-w-[560px] mx-auto text-[0.95rem]">
            Thanks to your contribution, support and sponsorship, we have achieved these milestones and touched more lives than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.5px] bg-brand-gold/10">
          {impacts.map((item, index) => (
            <div key={index} className="bg-white/5 p-[2.5rem_2rem] border-[1px] border-white/5 transition-all duration-250 relative overflow-hidden group hover:bg-white/10 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-red scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              
              <div className="font-head text-[3rem] font-bold text-brand-gold leading-none mb-[0.5rem] flex items-baseline gap-[0.2rem]">
                {item.number}{item.plus && <sup className="text-[1.2rem]">+</sup>}
              </div>
              
              <h3 className="font-head text-[1rem] font-semibold text-white uppercase tracking-[0.05em] mb-[0.6rem]">
                {item.title}
              </h3>
              
              <p 
                className="text-[0.85rem] text-white/45 leading-[1.55]" 
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></p>
            </div>
          ))}
        </div>

        <div className="text-center mt-[3rem] flex flex-wrap gap-4  justify-center">
             <Link
                href="/donate"
                className="text-center font-head text-[0.85rem] md:text-[0.9rem] font-semibold tracking-[0.08em] uppercase px-7 py-3 md:px-8 md:py-3.5 border-[2px] transition-all duration-250 bg-brand-red text-white border-brand-red hover:bg-brand-red-dark hover:border-brand-red-dark hover:shadow-[0_12px_28px_rgba(226,29,36,0.35)]"
              >
                Make a Donation
              </Link>
              <Link
                href="/volunteer"
                className="text-center font-head text-[0.85rem] md:text-[0.9rem] font-semibold tracking-[0.08em] uppercase px-7 py-3 md:px-8 md:py-3.5 border-[2px] transition-all duration-250 bg-brand-gold text-brand-dark border-brand-gold hover:bg-brand-gold-dark hover:border-brand-gold-dark hover:shadow-[0_12px_28px_rgba(255,165,0,0.4)]"
              >
                Become a Member
          </Link>
          </div>

      </div>
    </section>
  );
}


 
        