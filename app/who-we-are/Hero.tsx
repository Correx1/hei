import Image from "next/image";

export default function WhoWeAreHero() {
  return (
    <section className="relative w-full min-h-[60vh] py-20 lg:py-28 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/about.jpg" 
          alt="Health Emergency Initiative Team" 
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/75"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white uppercase tracking-tight leading-tight mb-4">
          About Us
        </h1>
        <div className="w-24 h-1.5 bg-brand-red rounded-full mx-auto mb-6"></div>
        <p className="font-sans text-[15px] md:text-[16.5px] text-white/95 leading-relaxed max-w-3xl pt-2 px-4 shadow-sm">
          Health Emergency Initiative (HEI) is an award winning nonprofit organization that resiliently works to provide financial assistance to indigent and vulnerable patients in public hospitals for the overall purpose of saving lives via all her lifesaving programs.
        </p>
      </div>

    </section>
  );
}
