import Link from "next/link";
import { Ambulance, LifeBuoy, Map } from "lucide-react";

export default function EmergencyStrip() {
  return (
    <div id="emergency" className="bg-brand-red py-[18px] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.04)_40px,rgba(255,255,255,0.04)_41px)]">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10 flex flex-wrap items-center justify-center gap-5 md:gap-12">
        
        <div className="flex items-center gap-[0.8rem] text-white font-head tracking-[0.05em]">
          <div className="w-[36px] h-[36px] bg-white/15 rounded-full flex items-center justify-center">
            <Ambulance size={18} strokeWidth={2.5} />
          </div>
          <div>
            <span className="text-[0.7rem] opacity-75 block tracking-[0.1em] uppercase">Lagos Emergency</span>
            <span className="text-[1.3rem] font-bold block">767 &amp; 112</span>
          </div>
        </div>

        <div className="hidden md:block w-[1px] h-[36px] bg-white/25"></div>

        <div className="flex items-center gap-[0.8rem] text-white font-head tracking-[0.05em]">
          <div className="w-[36px] h-[36px] bg-white/15 rounded-full flex items-center justify-center">
            <LifeBuoy size={18} strokeWidth={2.5} />
          </div>
          <div>
            <span className="text-[0.7rem] opacity-75 block tracking-[0.1em] uppercase">Other States</span>
            <span className="text-[1.3rem] font-bold block">122</span>
          </div>
        </div>

        <div className="hidden md:block w-[1px] h-[36px] bg-white/25"></div>

        <div className="flex items-center gap-[0.8rem] text-white font-head tracking-[0.05em]">
          <div className="w-[36px] h-[36px] bg-white/15 rounded-full flex items-center justify-center">
            <Map size={18} strokeWidth={2.5} />
          </div>
          <div>
            <span className="text-[0.7rem] opacity-75 block tracking-[0.1em] uppercase">FRSC National</span>
            <span className="text-[1.3rem] font-bold block">122</span>
          </div>
        </div>

        <div className="hidden md:block w-[1px] h-[36px] bg-white/25"></div>

        <div className="">
          <Link
            href="/emergency-numbers"
            className="inline-flex items-center gap-[0.5rem] bg-white/10 border border-white/30 text-white font-head text-[0.85rem] uppercase tracking-[0.1em] px-[20px] py-[8px] transition-colors hover:bg-white/25"
          >
            See All Emergency Numbers →
          </Link>
        </div>
        
      </div>
    </div>
  );
}
