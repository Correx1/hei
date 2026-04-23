import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function PartnersPage() {
  const partners = [
    {
      id: 1,
      name: "Global Health Foundation",
      description: "Providing critical funding backings for emergency medical interventions across West Africa. They have been pivotal in expanding our indigent patient coverage.",
      image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=600&auto=format&fit=crop",
      websiteLink: "https://example.com"
    },
    {
      id: 2,
      name: "Nigerian Red Cross",
      description: "Our primary training and deployment collaborator for the nationwide First Responders CPR training scheme. Together, we certify thousands of field citizens annually.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600&auto=format&fit=crop",
      websiteLink: "https://example.com"
    },
    {
      id: 3,
      name: "Federal Road Safety Corps (FRSC)",
      description: "Partnering closely to reduce road crash mortality rates. FRSC acts as our strategic frontline partner for post-crash care and emergency rescue operations.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=600&auto=format&fit=crop",
      websiteLink: null
    },
    {
      id: 4,
      name: "Lagos State Ministry of Health",
      description: "Facilitating access to public hospital networks and ensuring regulatory alignment for all our state-level healthcare interventions.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
      websiteLink: null
    },
    {
      id: 5,
      name: "Access Bank Plc",
      description: "Corporate social responsibility sponsor anchoring our maternal emergency funds and contributing significantly to the Project 1 Million outreach programs.",
      image: "https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=600&auto=format&fit=crop",
      websiteLink: "https://example.com"
    },
    {
      id: 6,
      name: "Ashoka Foundation",
      description: "Supporting HEI's systemic expansion and sustainability frameworks through the Ashoka Fellowship network and strategic global mentorship.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      websiteLink: "https://example.com"
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] py-20 lg:py-28 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about2.jpg"
            alt="Business Partnership Meeting" 
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white uppercase tracking-tight leading-tight mb-4 text-center">
            Our Partners
          </h1>
          <div className="w-24 h-1.5 bg-brand-red rounded-full mb-6 mx-auto"></div>
          <p className="text-[15px] md:text-[16.5px] text-white/95 leading-relaxed font-sans max-w-3xl mx-auto px-4 text-center">
            Collaboration is at the heart of saving lives. We work with visionary organizations, corporate sponsors, and government bodies to amplify our impact across Nigeria.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="w-full py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="w-full bg-white border border-gray-200 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]"
              >
                {/* Partner Image / Graphic */}
                <div className="w-full h-72 relative overflow-hidden bg-gray-100 flex items-center justify-center p-8">
                  <Image 
                    src={partner.image} 
                    alt={partner.name} 
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Partner Details */}
                <div className="flex flex-col flex-1 p-5 text-center relative bg-white z-10 border-t-4 border-transparent group-hover:border-brand-red transition-colors duration-300">
                  <h2 className="text-[17px] md:text-lg font-heading font-bold text-brand-dark uppercase tracking-tight leading-snug">
                    {partner.name}
                  </h2>
                  
                  <div className="w-8 h-px bg-gray-300 mx-auto mt-4 mb-4"></div>
                  
                  <p className="text-[13.5px] md:text-[14px] text-gray-600 leading-relaxed font-sans mb-6">
                    {partner.description}
                  </p>

                  <div className="mt-auto">
                    {partner.websiteLink ? (
                      <Link 
                        href={partner.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 text-[12px] font-sans font-bold text-brand-red uppercase tracking-wider hover:text-brand-dark transition-colors"
                      >
                        Visit Site
                        <ExternalLink size={12} strokeWidth={2} />
                      </Link>
                    ) : (
                      <div className="h-[10px]"></div> // Adjusted placeholder space
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
