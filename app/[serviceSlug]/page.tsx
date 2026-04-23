import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] py-20 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.heroImage} 
            alt={service.title} 
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white uppercase tracking-tight leading-tight mb-4">
            {service.title}
          </h1>
          <div className="w-24 h-1.5 bg-brand-red rounded-full mb-6 mx-auto"></div>
        </div>
      </section>

      {/* Main Content Rendered Dynamically from Content Blocks */}
      {/* Main Content Rendered Dynamically from Content Blocks */}
      {(service.sections && service.sections.length > 0) && (
        <div className="w-full flex flex-col space-y-16 lg:space-y-24 py-16 lg:py-24 overflow-hidden">
            
            {service.sections.map((section, idx) => {
              if (section.isCenteredEmphasis) {
                return (
                  <section key={idx} className="w-full bg-[#E51924] py-16 lg:py-20 px-4 sm:px-6 shadow-inner mx-0 relative">
                    <div className="max-w-4xl mx-auto text-center text-white/95 relative z-10 flex flex-col items-center">
                      <div className="text-[#a41818]/40 text-7xl md:text-9xl font-serif absolute -top-10 md:-top-16 left-0 md:-left-8 select-none">"</div>
                      {section.paragraphs.map((p, pIdx) => (
                        <p 
                          key={pIdx} 
                          className="text-[17px] md:text-xl lg:text-[22px] font-sans font-medium leading-relaxed tracking-wide italic relative z-10"
                          dangerouslySetInnerHTML={{ __html: p }} 
                        />
                      ))}
                      <div className="text-[#a41818]/40 text-7xl md:text-9xl font-serif absolute -bottom-20 md:-bottom-24 right-0 md:-right-8 select-none">"</div>
                      
                      {section.buttonText && section.buttonUrl && (
                        <Link 
                          href={section.buttonUrl} 
                          className="mt-10 md:mt-12 inline-block px-10 py-4 bg-white text-[#E51924] font-sans font-bold uppercase tracking-widest text-[14px] md:text-[15px] hover:bg-[#1C2033] hover:text-white hover:shadow-xl transition-all rounded shadow-md relative z-10"
                        >
                          {section.buttonText}
                        </Link>
                      )}
                    </div>
                  </section>
                );
              }

              return (
                <section key={idx} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className={`w-full ${section.galleryMedia ? 'grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start' : section.media ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch' : 'max-w-4xl mx-auto space-y-5'}`}>
                    
                    {/* Text Container */}
                    <div className={`space-y-5 flex flex-col justify-center ${section.media && section.mediaPosition === 'left' ? 'lg:order-2' : 'lg:order-1'} ${section.galleryMedia ? 'lg:col-span-1 lg:sticky lg:top-32 lg:pt-4' : ''}`}>
                      {section.buttonText && section.buttonUrl && (
                        <div>
                          <Link 
                            href={section.buttonUrl} 
                            className="inline-block text-[#E51924] underline font-bold text-[14px] md:text-[15px] hover:text-brand-blue transition-colors uppercase tracking-widest mb-1 shadow-none"
                          >
                            {section.buttonText}
                          </Link>
                        </div>
                      )}
                      
                      {section.heading && (
                        <div>
                          {section.kicker && (
                            <span className="block mb-2 text-[#E51924] text-[13px] md:text-[14px] font-bold uppercase tracking-widest">
                              {section.kicker}
                            </span>
                          )}
                          {section.headingUrl ? (
                            <Link 
                              href={section.headingUrl} 
                              className="inline-block text-[#E51924] underline font-normal text-xl md:text-2xl font-heading tracking-tight hover:text-brand-blue transition-colors"
                            >
                              {section.heading}
                            </Link>
                          ) : (
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark uppercase tracking-tight">
                              {section.heading}
                            </h2>
                          )}
                        </div>
                      )}
                      <div className="space-y-5 text-[15.5px] leading-relaxed text-justify">
                        {section.paragraphs.map((p, pIdx) => {
                          const isBold = p.startsWith("HEI provides post crash care") || p.startsWith("Lives lost to needless");
                          return (
                            <p 
                              key={pIdx} 
                              className={isBold ? "font-bold text-brand-dark pt-2" : ""}
                              dangerouslySetInnerHTML={{ __html: p }}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Media Container */}
                    {section.media && (
                      <div className={`w-full flex ${section.mediaClassName ? 'justify-center items-center' : ''} ${section.mediaPosition === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className={`relative rounded-2xl overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] border border-gray-100 ${section.mediaClassName || 'w-full min-h-[280px] lg:min-h-full'}`}>
                          {section.media.type === 'video' ? (
                            <iframe 
                              className="w-full h-full absolute inset-0 border-0"
                              src={section.media.url} 
                              title="Section Media"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen 
                            />
                          ) : (
                            <Image 
                              src={section.media.url} 
                              alt={section.heading || "Section Media Image"} 
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-700" 
                            />
                          )}
                        </div>
                      </div>
                    )}

                    {/* Gallery Media Container */}
                    {section.galleryMedia && (
                      <div className="w-full grid grid-cols-2 gap-3 md:gap-5 lg:col-span-2 lg:order-2">
                        {section.galleryMedia.map((m, mIdx) => (
                          <div 
                            key={mIdx} 
                            className={`relative rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-square sm:aspect-video ${mIdx === 0 && section.galleryMedia!.length % 2 !== 0 ? 'col-span-2 aspect-[21/9]' : ''}`}
                          >
                            <Image 
                              src={m.url} 
                              alt="Gallery Image" 
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-700" 
                            />
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                </section>
              );
            })}

        </div>
      )}

      {/* Dynamic Multi-Media Gallery Section */}
      {(service.media && service.media.length > 0) && (
        <section className={`w-full bg-[#fcfbf9] ${service.callout ? 'pb-10 lg:pb-16' : 'pb-20 lg:pb-32'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className={`grid grid-cols-1 gap-8 md:gap-10 ${
              service.media.length === 1 ? 'md:grid-cols-1 max-w-4xl mx-auto' : 
              service.media.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 
              'sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {service.media.map((mediaItem, idx) => (
                <div key={idx} className="flex flex-col space-y-4 relative group">
                  <div className="w-full aspect-video relative bg-black rounded-sm overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1">
                    {mediaItem.type === 'video' ? (
                      <iframe 
                        className="w-full h-full absolute inset-0 border-0"
                        src={mediaItem.url} 
                        title={mediaItem.title || "Embedded Video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                      />
                    ) : (
                      <Image 
                        src={mediaItem.url} 
                        alt={mediaItem.title || "Gallery Image"} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    )}
                  </div>
                  {mediaItem.title && (
                    <p className="font-heading font-bold text-[14px] text-brand-dark uppercase tracking-wide text-center">
                       {mediaItem.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
            
          </div>
        </section>
      )}

      {/* Dynamic Callout & Statistics Section */}
      {service.callout && (
        <section className="w-full pb-20 lg:pb-28 bg-[#fcfbf9]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            
            {/* Dark Red Alert Container matches screenshot */}
            <div className="w-full bg-[#A41818] py-4 md:py-5 px-6 shadow-sm text-center mb-10 md:mb-12">
              <h3 className="text-white font-sans font-bold uppercase tracking-wider md:tracking-widest text-[14px] md:text-[16px]">
                {service.callout.title}
              </h3>
            </div>

            {/* Statistics Numeric Iterator */}
            <div className={`grid grid-cols-1 w-full gap-8 text-center ${service.callout.stats.length > 1 ? 'md:grid-cols-2 lg:grid-cols-' + service.callout.stats.length : ''}`}>
              {service.callout.stats.map((stat, sIdx) => (
                <div key={sIdx} className="flex flex-col items-center justify-center">
                  <p className="text-[26px] md:text-[32px] font-sans font-bold text-gray-800 tracking-tight leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-[15px] md:text-[16px] text-gray-500 font-sans tracking-wide mt-1 md:mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
