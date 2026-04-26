import { HeartHandshake, ShieldCheck, ClipboardCheck, TrendingUp, Leaf } from "lucide-react";

const values = [
  {
    title: "Empathy",
    icon: HeartHandshake,
    desc: "We lead with compassion — every patient is someone's world.",
    accent: "bg-brand-red",
    iconColor: "text-brand-red",
  },
  {
    title: "Integrity",
    icon: ShieldCheck,
    desc: "We act with honesty and transparency in every decision we make.",
    accent: "bg-brand-dark",
    iconColor: "text-brand-dark",
  },
  {
    title: "Accountability",
    icon: ClipboardCheck,
    desc: "We are responsible stewards of every resource entrusted to us.",
    accent: "bg-brand-gold",
    iconColor: "text-brand-gold",
  },
  {
    title: "Positive Impact",
    icon: TrendingUp,
    desc: "Every initiative is measured by the lives it changes for the better.",
    accent: "bg-brand-red",
    iconColor: "text-brand-red",
  },
  {
    title: "Sustainability",
    icon: Leaf,
    desc: "We build systems that outlast us — for generations to come.",
    accent: "bg-brand-dark",
    iconColor: "text-brand-dark",
  },
];

export default function CoreValues() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-widest font-bold text-brand-red mb-2 font-sans">What Drives Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark uppercase tracking-tight">
            Our Core Values
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded-full mx-auto mt-4"></div>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full ${val.accent}`}></div>

              <div className="flex flex-col items-center text-center p-7 space-y-4 flex-1">
                <div className={`w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <val.icon className={`w-6 h-6 ${val.iconColor}`} strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-bold text-brand-dark uppercase tracking-wider text-[14px] leading-snug">
                  {val.title}
                </h3>
                <p className="font-sans text-[13px] text-gray-500 leading-relaxed">
                  {val.desc}
                </p>
              </div>

              {/* Index badge */}
              <div className="absolute top-3 right-3 text-[10px] font-bold text-gray-300 font-sans tracking-widest">
                {String(idx + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
