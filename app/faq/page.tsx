import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";
import Link from "next/link";

const FAQ_DATA = [
  {
    question: "What is HEI?",
    answer: (
      <p>
        HEI is an acronym that stands for Health Emergency Initiative, a Non-Governmental organization registered in Nigeria with the Corporate Affairs Commission. Since its establishment in October 2015, HEI has been aiding indigent and vulnerable patients in the hospital who are unable to afford basic medical care. HEI is a beacon of hope in Nigeria, ensuring timely healthcare access for the vulnerable. Beyond charity, it acts as next of kin for emergency victims, providing the initial deposits to resuscitate/stabilize them within crucial first hours. By empowering citizens as first responders with tech-enabled training, HEI transforms emergency care. Through strategic collaborations, it systematically addresses critical gaps, aiming for a resilient and compassionate healthcare system.
      </p>
    )
  },
  {
    question: "What services does Health Emergency Initiative (HEI) provide?",
    answer: (
      <div className="space-y-4">
        <p>HEI offers a range of services, including:</p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Payment of Hospital Bills:</strong> HEI covers medical expenses for indigent patients, particularly children aged 0-5, suffering from non-chronic/acute illnesses like Malaria, Sepsis, Tetanus, malnutrition, diarrhea, jaundice, pneumonia and more. This initiative aims to reduce infant mortality, with typical costs under N40,000.</li>
          <li><strong>Support for Women in Medical Detention:</strong> HEI assists women detained in hospitals post-childbirth by settling their medical bills, often as low as N35,000, and facilitating their reunion with families.</li>
          <li><strong>Medical Outreach:</strong> HEI conducts outreach programs in rural and underserved communities, providing essential healthcare services to those in need.</li>
          <li><strong>CPR and First Aid Training:</strong> HEI provides training in First Aid, CPR, AED usage, crowd control, and other pre-hospital capacity building initiatives. This equips citizens with skills to effectively respond to emergencies and reduce fatalities from crashes, trauma, and Non-Communicable Diseases.</li>
          <li><strong>Financial Deposit for Trauma Victims/Post-Crash Care:</strong> HEI provides timely/initial deposit for immediate resuscitation and stabilization of critically injured victims within the first 24 hours, typically covering costs up to N60,000. Through this initiative, we stand as next of kin to such victims.</li>
          <li><strong>Provision of PPE and Equipment:</strong> In partnership with funders, HEI supplies PPE and medical equipment to health workers and public health facilities, ensuring their safety during epidemics and pandemics, including COVID-19.</li>
          <li><strong>Tech-Driven Data Management:</strong> HEI maintains a technology-driven system for data collection and retrieval, supporting research and planning in the health sector.</li>
        </ul>
      </div>
    )
  },
  {
    question: "How many people has HEI helped so far?",
    answer: (
      <p>Over the past 9 years, HEI has trained over 46,000 first responders, settled hospital bills for more than 950 accident victims, and assisted over 7,850 indigent and vulnerable patients in public health facilities.</p>
    )
  },
  {
    question: "Who can benefit from HEI’s services?",
    answer: (
      <p>Our services are primarily targeted towards indigent patients including children, women facing medical detention post-childbirth, and critically injured victims of emergencies such as road traffic accidents, burns, and building collapses. We also support healthcare workers by providing necessary PPE and training.</p>
    )
  },
  {
    question: "How can I support HEI’s initiatives?",
    answer: (
      <div className="space-y-4">
        <p>You can support HEI by donating, volunteering, or partnering with us. Your contributions help us continue to provide critical services and support to those in need.</p>
        <div className="bg-red-50/50 p-5 md:p-6 border-l-4 border-[#E51924] rounded-r-sm text-gray-800">
          <p className="font-bold mb-3 uppercase tracking-widest text-[#E51924] text-[13px]">Banking Details</p>
          <div className="space-y-1">
            <p><strong>Account Number:</strong> 0060048591</p>
            <p><strong>Account Name:</strong> HEALTH EMERGENCY INITIATIVE FOR INDIGENT PATIENTS</p>
            <p><strong>Bank:</strong> Sterling Bank Plc</p>
          </div>
        </div>
      </div>
    )
  },
  {
    question: "How can I get trained in First Aid and CPR by HEI?",
    answer: (
      <p>HEI offers regular training sessions in First Aid, CPR, AED usage, and other prehospital care skills. Please visit our website or contact us directly for information on upcoming training sessions and how to register.</p>
    )
  },
  {
    question: "Does HEI provide services outside Lagos?",
    answer: (
      <p>While many of our activities are based in Lagos, we conduct medical outreaches and provide support in rural and underserved communities across Nigeria.</p>
    )
  },
  {
    question: "What are HEI’s future plans?",
    answer: (
      <p>HEI aims to expand its reach and continue enhancing healthcare access and emergency response in Nigeria. We are constantly seeking new partnerships and funding opportunities to support our initiatives.</p>
    )
  },
  {
    question: "What is HEI’s role in emergencies like pandemics?",
    answer: (
      <p>During emergencies such as pandemics, HEI provides Personal Protective Equipment (PPE) and essential medical supplies to healthcare workers, ensuring their safety and enabling them to continue providing care.</p>
    )
  },
  {
    question: "How can I contact HEI for assistance or more information?",
    answer: (
      <div className="space-y-4">
        <p>You can reach out to us via our contact page on the website or call our helpline. We are here to assist you with any queries or support you may need.</p>
        <p>For more details about our programs and initiatives, visit our website or follow us on social media:</p>
        <ul className="space-y-2">
          <li><strong>Website:</strong> <a href="https://www.hei.org.ng/" target="_blank" rel="noopener noreferrer" className="text-[#E51924] hover:underline transition-colors">www.hei.org.ng</a></li>
          <li><strong>Facebook:</strong> <a href="https://www.facebook.com/HEInigeria" target="_blank" rel="noopener noreferrer" className="text-[#E51924] hover:underline transition-colors">www.facebook.com/HEInigeria</a></li>
          <li><strong>Twitter:</strong> <a href="https://x.com/InitiativeHe" target="_blank" rel="noopener noreferrer" className="text-[#E51924] hover:underline transition-colors">x.com/InitiativeHe</a></li>
          <li><strong>Instagram:</strong> <a href="https://www.instagram.com/healthemergencyinitiative/?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#E51924] hover:underline transition-colors">@healthemergencyinitiative</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/health-emergency-initiative/" target="_blank" rel="noopener noreferrer" className="text-[#E51924] hover:underline transition-colors">Health Emergency Initiative</a></li>
        </ul>
        <div className="pt-4 border-t border-gray-200 mt-4">
          <p className="font-bold text-brand-dark mb-2">Telephone Lines with WhatsApp facilities:</p>
          <div className="space-y-1">
            <p>+234 706 398 5777</p>
            <p>+234 706 420 3748</p>
          </div>
        </div>
      </div>
    )
  }
];

export const metadata = {
  title: "FAQ",
};

export default function FAQPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">

      {/* Hero Header */}
      <section className="relative w-full min-h-[70vh] py-20 lg:py-28 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/about2.jpg" alt="FAQ Hero" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-[#1a0505]/85"></div>
        </div>
         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <div className="w-20 h-1.5 bg-brand-gold rounded-full mb-6"></div>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed font-sans font-medium max-w-2xl">
              Find answers to the most common questions regarding our mission, operations, training programs, and how you can get involved.
            </p>
         </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details 
                key={index} 
                className="group bg-white border border-gray-200 rounded-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                open={index === 0} // Keep the first item open by default
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 font-bold text-gray-800 text-[16px] md:text-[18px] leading-snug outline-none focus-visible:ring-2 focus-visible:ring-[#E51924] select-none">
                  <span className="pr-6">{faq.question}</span>
                  <ChevronDown className="w-6 h-6 text-[#E51924] transition-transform duration-300 group-open:rotate-180 shrink-0" />
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 text-[15px] leading-relaxed font-sans border-t border-gray-100 pt-5">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Call to Action Section (Custom for FAQ) */}
      <section className="bg-gray-50 py-16 border-t border-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
           <h3 className="text-[20px] md:text-[24px] font-heading font-bold text-brand-dark mb-4">
             Still have questions?
           </h3>
           <p className="text-[15.5px] text-gray-600 leading-relaxed mb-8">
             Your support can make a significant difference. Donate today to help us continue providing life-saving services and support to those in need!
           </p>
           <div className="flex flex-wrap items-center justify-center gap-4">
             <Link 
                href="/donate" 
                className="bg-[#E51924] text-white text-[13px] font-bold uppercase tracking-widest px-10 py-4 rounded-sm shadow-sm hover:bg-brand-dark transition-colors"
             >
                Donate Today
             </Link>
             <Link 
                href="/contact" 
                className="bg-white border-2 border-[#E51924] text-[#E51924] text-[13px] font-bold uppercase tracking-widest px-10 py-[14px] rounded-sm shadow-sm hover:bg-[#E51924] hover:text-white transition-colors"
             >
                Contact Us
             </Link>
           </div>
        </div>
      </section>

      {/* Global Bottom CTA */}
      <GetInvolvedCTA />

    </div>
  );
}
