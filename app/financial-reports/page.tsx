import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";

const REPORTS = [
  { id: 1, year: "2024", title: "2024 Audited Financial Report", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 2, year: "2023", title: "2023 Audited Financial Report", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 3, year: "2022", title: "2022 Audited Financial Report", image: "https://images.unsplash.com/photo-1507208758652-303c73bb85fa?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 4, year: "2021", title: "2021 Audited Financial Report", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 5, year: "2020", title: "2020 Audited Financial Report", image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 6, year: "2019", title: "Audited Financial Report, 2019", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 7, year: "2018", title: "2018 Audited Financial Report", image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 8, year: "2017", title: "2017 Audited Financial Report", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop", link: "#" },
  { id: 9, year: "2016", title: "2016 Audited Financial Report", image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=600&auto=format&fit=crop", link: "#" }
];

export const metadata = {
  title: "Financial Reports",
};

export default function FinancialReportsPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 md:py-24 bg-brand-dark flex flex-col justify-center items-center text-center overflow-hidden">
         {/* Subtle background pattern/overlay */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
              AUDITED FINANCIAL REPORTS
            </h1>
            <div className="w-20 h-1.5 bg-[#E51924] rounded-full mb-6"></div>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed font-sans font-medium max-w-2xl">
              Review our annual audited financial statements, a testament to our steadfast commitment to absolute transparency and accountability.
            </p>
         </div>
      </section>

      {/* Intro Text & Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col">
        
        <div className="mb-16 max-w-5xl">
          <p className="text-[15.5px] text-gray-700 leading-relaxed font-sans mb-6">
            Our mission is driven by the urgent need to save lives and ensure that no one dies due to a lack of immediate medical funds.
          </p>
          <p className="text-[15.5px] text-gray-700 leading-relaxed font-sans mb-12">
            The trust you place in us with your generous support is the foundation of our work. We are deeply committed to upholding this trust through the highest standards of transparency and financial accountability.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-heading font-bold text-gray-800 mb-4">
            Download Our Annual Reports
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed font-sans">
            Our financial statements are audited annually by independent, third-party auditors to ensure accuracy, compliance, and accountability. Please find our reports available for download in PDF format, from 2016 to the most recent fiscal year.
          </p>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {REPORTS.map((report) => (
            <a 
              key={report.id} 
              href={report.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-xl transition-shadow duration-300 rounded-sm overflow-hidden"
            >
              {/* Document Cover Thumbnail */}
              <div className="w-full aspect-[3/4] relative bg-gray-100 overflow-hidden">
                <Image 
                  src={report.image} 
                  alt={report.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              
              {/* Card Footer Text */}
              <div className="p-6 text-center flex items-center justify-center min-h-[90px]">
                <h3 className="text-[18px] md:text-[20px] font-heading font-bold text-[#E51924] leading-snug">
                  {report.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom Transparency Section matching the screenshot */}
      <section className="bg-gray-50 py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h3 className="text-[20px] md:text-[24px] font-heading font-bold text-gray-800 mb-6">
              Our Commitment to Transparency
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed font-sans mb-10">
              Every donation, every grant, and every partnership is a sacred trust. We believe that demonstrating how we manage these funds is fundamental to our integrity.
            </p>
            
            <h4 className="text-[18px] md:text-[20px] font-heading font-bold text-gray-800 mb-6">
              Your support helps us continue our transformative work.
            </h4>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <Link 
                href="/donate" 
                className="bg-[#E51924] text-white text-[13px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-sm hover:bg-[#c4151f] transition-colors"
              >
                Donate Now
              </Link>
              <Link 
                href="/partner" 
                className="bg-brand-dark text-white text-[13px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-sm hover:bg-gray-800 transition-colors"
              >
                Become a Partner
              </Link>
            </div>
            
            <p className="text-[13px] text-gray-500 font-sans leading-relaxed">
              Thank you for your interest in our financial accountability. If you have any questions about our reports or how we utilise our funds, please do not hesitate to <Link href="/contact" className="text-[#E51924] hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
