import Image from "next/image";

const PARTNERS = Array.from({ length: 14 }, (_, i) => `/partners/${i + 1}.png`);

export default function Partners() {
  // Duplicate array multiple times for seamless infinite scrolling on large screens
  const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="w-full bg-white py-10 lg:py-12 border-b border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Embedded CSS for the marquee animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-33.3333%)); }
          }
          .animate-scroll-left {
            animation: scroll-left 45s linear infinite;
          }
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:w-20 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
          
          <div className="flex gap-6 sm:gap-10 items-center w-max animate-scroll-left">
            {duplicatedPartners.map((logoUrl, idx) => (
              <div 
                key={idx} 
                className="w-28 sm:w-36 lg:w-44 h-16 sm:h-20 relative transition-transform duration-300 cursor-pointer flex-shrink-0 hover:scale-105"
              >
                <Image 
                  src={logoUrl} 
                  alt={`Partner ${idx + 1}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
