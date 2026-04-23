import { HeartHandshake, ShieldCheck, ClipboardCheck, TrendingUp, Leaf } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      title: "EMPATHY",
      icon: HeartHandshake,
      color: "text-[#04ADBF]",
    },
    {
      title: "INTEGRITY",
      icon: ShieldCheck,
      color: "text-brand-dark",
    },
    {
      title: "ACCOUNTABILITY",
      icon: ClipboardCheck,
      color: "text-brand-red",
    },
    {
      title: "POSITIVE IMPACT",
      icon: TrendingUp,
      color: "text-brand-red",
    },
    {
      title: "SUSTAINABILITY",
      icon: Leaf,
      color: "text-[#04ADBF]",
    }
  ];

  return (
    <section className="w-full py-16 bg-[#fcfbf9] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="w-full max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark uppercase tracking-tight">
            Our Core Values
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto rounded-full"></div>
          <p className="text-[15px] md:text-base text-gray-600 leading-relaxed font-medium">
            Our core values are the principles that influence and guide all our processes and projects execution.
          </p>
        </div>

        {/* Values Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 py-3.5 px-6 md:px-8 bg-white border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              <val.icon className={`w-5 h-5 ${val.color} group-hover:scale-110 transition-transform`} strokeWidth={2.5} />
              <span className="text-[13px] md:text-[14.5px] font-heading font-bold text-brand-dark uppercase tracking-widest mt-0.5">
                {val.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
