import Link from "next/link";
import Image from "next/image";

const PROJECTS = {
  main: {
    category: "Save a life with your donation today!",
    title: "100% of your donation pays emergency medical bills for indigent and vulnerable patients in public health institutions.",
    image: "/Another-life-was-Saved.jpg",
    primaryButton: { text: "Donate Now", href: "/donate" },
    secondaryButton: { text: "Our Impact", href: "/reports" }
  },
  items: [
    {
      category: "Save a life with your skills",
      title: "Become a Certified First Responder Today",
      image: "/volunteer.jpg",
      button: { text: "Volunteer", href: "/volunteer" }
    },
    {
      category: "Project 1 Million",
      title: "Your token can save a life and the beautiful dreams it holds",
      image: "/project.jpg",
      button: { text: "Join Campaign", href: "/project-1-million" }
    },
    {
      category: "Outreach Program",
      title: "Join us in reaching million beneficiaries across Nigeria",
      image: "/outreach.jpg",
      button: { text: "Join Us", href: "/outreach" }
    },
    {
      category: "Partner with Us",
      title: "Collaborate with us in saving lifes and bringing hope",
      image: "/partner.jpg",
      button: { text: "Join Us", href: "/partner" }
    },
  ],
};

const EXPLORE_LINKS = [
  "Payment of hospital bills for indigine patients",
  "Post-crash care",
  "First responders/CPR training scheme",
  "PPE donations",
  "Outreach programs",
];

export default function Hero() {
  return (
    <section className="w-full bg-[#f4f2ef]">
      {/* Grid Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-1 border-b border-gray-200">
        
        {/* Main Large Item */}
        <div className="relative w-full h-[450px] lg:h-[600px] overflow-hidden group">
          <Image 
            src={PROJECTS.main.image} 
            alt={PROJECTS.main.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Faint Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-700"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 lg:p-10">
            <span className="text-white/90 font-bold font-sans text-xs lg:text-sm tracking-wider uppercase mb-2">
              {PROJECTS.main.category}
            </span>
            <h2 className="text-white font-heading font-bold text-xl lg:text-2xl mb-6">
              {PROJECTS.main.title}
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link href={PROJECTS.main.primaryButton.href} className="px-6 py-3 bg-brand-red text-white font-bold font-sans text-sm uppercase tracking-wide hover:bg-black transition-colors rounded-sm shadow-md text-center">
                {PROJECTS.main.primaryButton.text}
              </Link>
              <Link href={PROJECTS.main.secondaryButton.href} className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/40 font-bold font-sans text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors rounded-sm shadow-md text-center">
                {PROJECTS.main.secondaryButton.text}
              </Link>
            </div>
          </div>
        </div>

        {/* 2x2 Grid Items */}
        <div className="grid grid-cols-2 gap-1 h-full">
          {PROJECTS.items.map((item, index) => (
            <div key={index} className="relative w-full h-[250px] lg:h-[298px] overflow-hidden group">
              <Image 
                src={item.image} 
                alt={item.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Faint Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-700"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4 lg:p-6 opacity-100 transition-opacity">
                <span className="text-white/90 font-bold font-sans text-[10px] lg:text-xs tracking-wider uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-heading font-semibold text-sm lg:text-lg leading-tight mb-4 line-clamp-3">
                  {item.title}
                </h3>
                <div>
                  <Link href={item.button.href} className="px-4 py-2 bg-brand-red text-white font-bold font-sans text-[11px] uppercase tracking-wide hover:bg-black transition-colors rounded-sm shadow-sm inline-block text-center">
                    {item.button.text}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Projects Navbar */}
      <div className="w-full bg-[#f4f2ef] py-6 px-4 lg:py-5 lg:px-8">
        {/* Desktop Explore Row */}
        <div className="hidden lg:flex flex-wrap items-center justify-center max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-sans font-bold text-gray-700 text-xs xl:text-sm">
            {EXPLORE_LINKS.map((link, idx) => (
              <Link key={idx} href={`/${link.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')}`} className="hover:text-brand-red transition-colors uppercase tracking-wide">
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Explore Grid */}
        <div className="lg:hidden flex flex-col items-center justify-center w-full space-y-4 pt-2 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-4 px-2 text-center font-sans font-bold text-gray-700 text-[11px] uppercase tracking-wide">
            {EXPLORE_LINKS.map((link, idx) => (
              <Link key={idx} href={`/${link.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')}`} className="hover:text-brand-red transition-colors block">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
