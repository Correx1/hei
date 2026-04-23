import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/medical-outreach.jpg",
    alt: "HEI Medical Action"
  },
  {
    src: "/walk.jpg",
    alt: "HEI Community Outreach"
  },
  {
    src: "/ppe-donation.jpg",
    alt: "HEI Emergency Care"
  },
  {
    src: "/training.jpg",
    alt: "HEI training"
  }
];

export default function FeaturedVideo() {
  return (
    <section className="w-full bg-[#f3fbfc] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optional Header Context */}
        <div className="text-center space-y-4 mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-dark uppercase tracking-tight">
            Our Impact in Action
          </h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full"></div>
        </div>

        {/* 2-Column Grid (Video | 4 Pictures) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-auto lg:h-[45vh] min-h-[400px]">
          
          {/* Left: Video */}
          <div className="w-full h-[350px] lg:h-full rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black relative">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/-dNBnJGdvo0" 
              title="Health Emergency Initiative Showcase Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Right: Grid of 4 Pictures */}
          <div className="w-full h-[350px] lg:h-full grid grid-cols-2 grid-rows-2 gap-3 lg:gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <div key={idx} className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-white/5">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
