import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PARTNERS } from "@/app/partner/partners-data";

export default function PartnersPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] py-20 lg:py-28 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about2.jpg"
            alt="Our Partners"
            sizes="100vw"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1a0505]/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase tracking-tight leading-tight mb-4 text-center">
            Our Partners
          </h1>
          <div className="w-24 h-1.5 bg-brand-gold rounded-full mb-6 mx-auto"></div>
          <p className="text-[15px] md:text-[16.5px] text-white/95 leading-relaxed font-sans max-w-3xl mx-auto px-4 text-center">
            Collaboration is at the heart of saving lives. We work with visionary organisations, corporate sponsors, and government bodies to amplify our impact across Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="w-full py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-widest font-bold text-brand-red mb-2 font-sans">Trusted By</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark uppercase tracking-tight">33 Partners & Counting</h2>
            <div className="w-16 h-1 bg-brand-gold rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group"
              >
                <div className="h-1 w-full bg-brand-red shrink-0 group-hover:bg-brand-gold transition-colors duration-300"></div>

                <div className="flex flex-col items-center text-center p-8 gap-4 flex-1">
                  {/* Logo */}
                  <div className="h-16 w-full flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={160}
                      height={56}
                      className="object-contain"
                      style={{ width: 'auto', height: '52px', maxWidth: '150px' }}
                      unoptimized
                    />
                  </div>

                  <h3 className="font-heading font-bold text-brand-dark uppercase tracking-wide text-[13px] leading-snug mt-1">
                    {partner.name}
                  </h3>

                  <div className="w-8 h-px bg-gray-200"></div>

                  <p className="font-sans text-[13px] text-gray-500 leading-relaxed flex-1">
                    {partner.description}
                  </p>

                  <Link
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-red hover:text-brand-dark transition-colors font-sans mt-1"
                  >
                    Visit Website <ExternalLink size={11} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
