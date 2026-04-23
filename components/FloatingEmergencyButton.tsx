import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function FloatingEmergencyButton() {
  return (
    <Link 
      href="/emergency-numbers"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex items-center justify-center
        w-11 h-11
        md:w-auto md:h-auto md:gap-2.5 md:px-5 md:py-3.5
        bg-[#E51924] text-white rounded-full
        shadow-[0_4px_20px_rgba(229,25,36,0.45)]
        hover:bg-black hover:shadow-[0_4px_20px_rgba(0,0,0,0.35)]
        transition-all duration-300 group"
      aria-label="Emergency Numbers"
    >
      <PhoneCall className="w-5 h-5 shrink-0" />
      {/* Label — hidden on mobile, visible on md+ */}
      <span className="hidden md:inline font-sans font-bold text-[13px] uppercase tracking-widest leading-none">
        Emergency
      </span>
    </Link>
  );
}
