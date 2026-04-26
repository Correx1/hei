import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Play, Clock, HeartHandshake, Banknote, Scale, LineChart, Info, BarChart2, Map, HeartPulse, BookOpen, ShieldCheck, Truck, Stethoscope, Utensils, Droplets } from "lucide-react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";

interface CaseItem {
  videoUrl?: string;
  videoThumb?: string;
  title?: string | null;
  story?: string;
  showPlay?: boolean;
}

interface SubPoint {
  icon: React.ElementType;
  color: string;
  title: string | null;
  desc: string;
}

interface Initiative {
  id: string;
  title: string;
  color: string;
  intro: string | null;
  url: string;
  casesLayout: 'grid' | 'sidebar' | 'images-top';
  hideButtons?: boolean;
  storyTextAbove?: string;
  cases: CaseItem[];
  subPointsTitle?: string | null;
  subPoints: SubPoint[];
  ctaSecondaryText?: string;
  ctaSecondaryUrl?: string;
}

export default function WhatWeDoPage() {
  const initiatives: Initiative[] = [
    {
      id: "1",
      title: "HOSPITAL BILL FINANCIAL AID",
      color: "bg-[#E51924]", // brand-red
      intro: "Our medical intervention program seeks to reduce mortalities rising from the widespread poverty and destitution in Nigeria. Many segments of the population are under this menace resulting in avoidable deaths.",
      url: "/hospital-bills",
      casesLayout: "grid",
      cases: [
        {
          videoUrl: "https://www.youtube.com/embed/ivwpIcWdkaM?rel=0",
          title: "MEET MRS. JULIUS",
          story: "Her family had a fire accident that led to the loss of 3 children amidst 4 children. The only surviving child is her 5 year old boy, Testimony Julius, who hid inside the fridge while the fire engulfed his younger siblings helplessly.\n\nThe parents were financially incapable to commence treatment for the children who were victims of fire accident so Health Emergency Initiative (HEI) stepped in to help fight for the children's lives but it was only Testimony that managed to escape death as a result of the fire accident."
        },
        {
          videoUrl: "https://www.youtube.com/embed/4am9FiGW8uk?rel=0",
          title: "Meet Saviour's Mother",
          story: "Saviour's mother would have lost her child, Saviour but for the intervention of Health Emergency Initiative(HEI).\n\nWith little or no financial support from family, HEI emerged to provide financial support needed to save Saviour's life after 3 months coma.\n\nThe mother who feared that she would lose her son is grateful to Health Emergency Initiative for helping in the fight to keep her son alive."
        }
      ],
      subPointsTitle: null,
      subPoints: [
        {
          icon: Clock,
          color: "text-green-600",
          title: "24HR PAYMENT RESPONSE PLAN",
          desc: "We pay hospital bills of indigent accident victims nationwide, within 24 hrs of notification. This platform is to help stabilize injured accident victims, who could have been turned away by medical facilities without payment."
        },
        {
          icon: HeartHandshake,
          color: "text-purple-600",
          title: "INDIGENT PATIENTS ASSISTANCE SCHEME",
          desc: "Identify and assist indigent patients (including pregnant women) who are unable to foot their medical bills before and after they have been treated (medical detention)."
        },
        {
          icon: Banknote,
          color: "text-[#cf7432]",
          title: "SHORT-TERM FINANCIAL ASSISTANCE TO EMERGENCIES",
          desc: "In the medium to long term, collaborate with hospitals, clinics, and maternity homes etc to ensure health emergency issues are not arbitrarily turned down due to money."
        }
      ],
      ctaSecondaryText: "DONATE TO THIS PROJECT",
      ctaSecondaryUrl: "/donate-to-project"
    },
    {
      id: "2",
      title: "POST-CRASH CARE",
      color: "bg-[#e57f32]", // orange
      intro: null,
      url: "/post-crash-care",
      casesLayout: "sidebar",
      cases: [
        {
          videoUrl: "https://www.youtube.com/embed/EE8i_7ZnCrE?rel=0",
          title: null,
          story: "Road traffic accident has been identified by WHO as the highest killer of young people and 65% of Nigeria's population is made up of youth. In the quest of fulfilling the HEI Mission THAT NONE SHOULD DIE Health Emergency Initiative(HEI) provides pre-hospital care to road traffic emergency victims.\n\nWe collaborate with FRSC officials and other emergency agencies to save more lives by swiftly providing financial assistance to road traffic accidents victims."
        }
      ],
      subPointsTitle: "OUR ADVOCACY PROGRAMS SEEK TO:",
      subPoints: [
        {
          icon: Scale,
          color: "text-blue-500",
          title: null,
          desc: "Collaborate with relevant stakeholders to influence legislation and policies to ensure the indigent and vulnerable have access to affordable and free healthcare."
        },
        {
          icon: LineChart,
          color: "text-purple-500",
          title: null,
          desc: "Collate, maintain and provide periodic health related data to the public with a view to curtailing, minimizing and eradicating careless deaths arising from emergencies."
        },
        {
          icon: Info,
          color: "text-orange-400",
          title: null,
          desc: "Grant access to members of the public information on Health related literature towards disease prevention and eradication."
        },
        {
          icon: BarChart2,
          color: "text-gray-800",
          title: null,
          desc: "Ensure reliable statistics on accident-related cases are maintained and shared with relevant stakeholders."
        }
      ],
      ctaSecondaryText: "SUPPORT US",
      ctaSecondaryUrl: "/donate-to-project"
    },
    {
      id: "3",
      title: "FIRST RESPONDERS TRAINING SCHEME",
      color: "bg-[#E51924]", // brand red
      intro: "To address the public apathy in pre-hospital emergency care and stimulate public interest, Health Emergency Initiative proposes a First Responders (FRs) Scheme to create a community/network of volunteers trained to attend to certain kinds of emergencies and provide the right care at the right time with the right skills.\n\nThe first response is the immediate treatment or care given to someone suffering from an injury or illness.",
      url: "/cpr-training",
      casesLayout: "images-top",
      storyTextAbove: "When a sudden medical emergency occurs, the golden hour dictates survival rates. Our specialized FRs Scheme targets everyday citizens, equipping them with rigorous knowledge and hands-on drills in CPR, bleeding control, and fracture immobilization.",
      cases: [
        { videoThumb: "/training2.jpg" },
        { videoThumb: "/training.jpg" }
      ],
      subPointsTitle: null,
      subPoints: [
        {
          icon: Map,
          color: "text-gray-600",
          title: "SAFETY CAMPAIGNS",
          desc: "HEI advocates for safer roads in Nigeria especially through partnerships with the FRSC through campaigns, workshops, trainings, and other initiatives."
        },
        {
          icon: HeartPulse,
          color: "text-pink-500",
          title: "COMMUNITY HEALTH",
          desc: "We are particularly focused to improve the health of communities. We particularly focus on maternal and child health."
        },
        {
          icon: BookOpen,
          color: "text-blue-600",
          title: "EDUCATIONAL PROGRAMS",
          desc: "Outreach programs centred on the educational development and rehabilitation of indigent children and youths."
        }
      ],
      ctaSecondaryText: "BECOME A VOLUNTEER",
      ctaSecondaryUrl: "/get-involved"
    },
    {
      id: "4",
      title: "PPE DONATIONS",
      color: "bg-[#04ADBF]", // teal
      intro: "Protecting frontline healthcare workers is paramount. Through our active Personal Protective Equipment (PPE) distribution campaigns, we ensure that the medical personnel saving indigent lives are shielded from infections.",
      url: "/ppe-donations",
      casesLayout: "sidebar",
      cases: [
        {
          videoUrl: "https://www.youtube.com/embed/r0iCDmmErhg",
          title: null,
          story: "Without adequate protective gear, healthcare systems collapse during infectious outbreaks. HEI intervenes by sourcing, vetting, and distributing high-quality PPE directly to underfunded hospitals and rural clinics.\n\nBy protecting our medical frontline, we exponentially increase the survival rate of the vulnerable populations they serve daily.",
          showPlay: true
        }
      ],
      subPointsTitle: "OUR PPE DISTRIBUTION FOCUS:",
      subPoints: [
        {
          icon: ShieldCheck,
          color: "text-[#04ADBF]",
          title: "RURAL CLINICS",
          desc: "Targeting underfunded medical installations lacking basic infectious protection gear."
        },
        {
          icon: Stethoscope,
          color: "text-gray-700",
          title: "FRONTLINE WARDENS",
          desc: "Equipping triage and trauma center personnel dealing directly with unclassified accident intakes."
        },
        {
          icon: Truck,
          color: "text-[#E51924]",
          title: "RAPID DEPLOYMENT",
          desc: "Maintaining active reserves of protective gear for immediate deployment during public health crises."
        }
      ],
      ctaSecondaryText: "DONATE TO THIS PROJECT",
      ctaSecondaryUrl: "/donate-to-project"
    },
    {
      id: "5",
      title: "OUTREACH PROGRAMS",
      color: "bg-[#1C2033]", // brand dark blue slate
      intro: "Our community-driven medical outreaches deliver free health checks, malnutrition alleviation programs for children under five, and public health education directly to marginalized communities.",
      url: "/outreach",
      casesLayout: "grid",
      hideButtons: true, // Specific flag removing trailing CTAs
      cases: [
        {
          videoUrl: "https://www.youtube.com/embed/mrHajjzimcc",
          title: "RURAL MEDICAL OUTREACH",
          story: "Marginalized communities often lack access to basic primary healthcare resulting in tragic outcomes for preventable illnesses. Our medical outreaches are meticulously planned to deliver comprehensive diagnostic, therapeutic, and educational care simultaneously.",
          showPlay: true
        },
        {
          videoUrl: "https://www.youtube.com/embed/wWbb-ePvi3M",
          title: "COMMUNITY HEALTH CHECKS",
          story: "We bridge the critical gap between hospital infrastructure and impoverished populations. By deploying mobile clinics and medical volunteers directly into these communities, we preempt severe health crises through early detection and care.",
          showPlay: true
        }
      ],
      subPointsTitle: "KEY OUTREACH INITIATIVES:",
      subPoints: [
        {
          icon: Stethoscope,
          color: "text-[#E57F32]",
          title: "FREE HEALTH CHECKS",
          desc: "Comprehensive diagnostic screening covering hypertension, blood glucose, and malaria for adults in rural areas."
        },
        {
          icon: Utensils,
          color: "text-[#E51924]",
          title: "MALNUTRITION AID",
          desc: "Distribution of therapeutic foods and nutritional supplements to combat severe acute malnutrition in children."
        },
        {
          icon: Droplets,
          color: "text-blue-500",
          title: "HEALTH EDUCATION",
          desc: "Sensitizing communities on WASH (Water, Sanitation, and Hygiene) protocols to prevent disease outbreaks."
        }
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-white pb-20">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] py-20 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about3.jpg"
            alt="Medical Intervention" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1a0505]/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white uppercase tracking-tight leading-tight mb-4 text-center">
            What We Do
          </h1>
          <div className="w-24 h-1.5 bg-brand-gold rounded-full mx-auto mb-6"></div>
          <p className="font-sans text-[15px] md:text-[16.5px] text-white/95 leading-relaxed max-w-3xl pt-2 px-4 text-center">
            Our mission to improve emergency lifesaving services drives our active engagement in the following areas:
          </p>
        </div>
      </section>

      {/* Initiatives Content */}
      <section className="w-full">
        <div className="w-full flex flex-col">
          
          {initiatives.map((item, index) => (
            <React.Fragment key={item.id}>
            <div className="w-full flex flex-col items-center pt-8">
              
              {/* Colored Header Bar */}
              <div className={`w-full py-6 md:py-8 ${item.color} text-center flex justify-center shadow-md relative z-20`}>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white tracking-widest uppercase">
                  {item.id}. {item.title}
                </h2>
              </div>
              
              {/* Initiative Body */}
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center">
                
                {/* Intro top */}
                {item.intro && (
                  <div className="w-full max-w-4xl mx-auto mb-8">
                    {item.intro.split('\n\n').map((p, idx) => (
                      <p key={idx} className="text-center text-gray-700 leading-relaxed text-[15px] font-sans mb-3">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {/* CASES: Sidebar Layout (1 video + side text) */}
                {item.casesLayout === 'sidebar' && item.cases.length > 0 && (
                  <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-10 max-w-5xl mx-auto">
                    {/* Left side: Video Node */}
                    <div className="w-full md:w-[45%] lg:w-1/2 aspect-video relative bg-black rounded-md overflow-hidden flex justify-center items-center shadow-sm">
                      {item.cases[0].videoUrl ? (
                         <iframe 
                           className="w-full h-full absolute inset-0 border-0"
                           src={item.cases[0].videoUrl} 
                           title={item.cases[0].title || "Video"}
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                           allowFullScreen 
                         />
                      ) : (
                         <>
                           <Image src={item.cases[0].videoThumb!} alt="Video" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover opacity-90" />
                           {item.cases[0].showPlay && (
                             <div className="w-14 h-10 bg-[#FF0000] rounded-xl flex items-center justify-center relative z-10 shadow-md">
                               <Play className="fill-white text-white w-5 h-5 ml-1" />
                             </div>
                           )}
                         </>
                      )}
                    </div>
                    {/* Right side: Story/Intro */}
                    <div className="w-full md:w-[55%] lg:w-1/2 space-y-4 text-gray-700 text-[14px] md:text-[14.5px] leading-relaxed font-sans text-left">
                      {item.cases[0].title && (
                        <h3 className="font-heading font-bold text-gray-800 uppercase text-[15px] tracking-wider mb-2">{item.cases[0].title}</h3>
                      )}
                      {item.cases[0].story?.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* CASES: Grid Layout (e.g. 2 stories side by side for Section 1 & 5) */}
                {item.casesLayout === 'grid' && item.cases.length > 0 && (
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-16 mt-6 max-w-5xl mx-auto">
                    {item.cases.map((caseItem, idx) => (
                      <div key={idx} className="flex flex-col space-y-6">
                        <div className="w-full aspect-video relative bg-black rounded-md overflow-hidden flex justify-center items-center shadow-md">
                          {caseItem.videoUrl ? (
                             <iframe 
                               className="w-full h-full absolute inset-0 border-0"
                               src={caseItem.videoUrl} 
                               title={caseItem.title || "Video"}
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                               allowFullScreen 
                             />
                          ) : (
                             <>
                               <Image src={caseItem.videoThumb!} alt="Video" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover opacity-90" />
                               {caseItem.showPlay && (
                                 <div className="w-14 h-10 bg-[#FF0000] rounded-xl flex items-center justify-center relative z-10 shadow-md">
                                   <Play className="fill-white text-white w-5 h-5 ml-1" />
                                 </div>
                               )}
                             </>
                          )}
                        </div>
                        <div className="text-left text-gray-600 font-sans">
                          {caseItem.title && (
                            <h3 className="font-sans font-bold text-brand-dark uppercase tracking-widest text-[14.5px] mb-4">{caseItem.title}</h3>
                          )}
                          <div className="space-y-4 text-[14px] md:text-[14.5px] leading-[1.8]">
                            {caseItem.story?.split('\n\n').map((paragraph, pIdx) => (
                              <p key={pIdx}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CASES: Images Top Layout (Section 3 exactly mapping summary top, images below) */}
                {item.casesLayout === 'images-top' && item.cases.length > 0 && (
                  <div className="w-full flex flex-col mb-16 max-w-5xl mx-auto">
                    {item.storyTextAbove && (
                      <div className="text-gray-700 text-[14px] md:text-[14.5px] leading-relaxed font-sans text-center mb-10 w-full max-w-4xl mx-auto">
                         {item.storyTextAbove.split('\n\n').map((paragraph, pIdx) => (
                           <p key={pIdx} className="mb-4">{paragraph}</p>
                         ))}
                      </div>
                    )}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                      {item.cases.map((caseItem, idx) => (
                        <div key={idx} className="w-full aspect-[4/3] relative rounded-md overflow-hidden shadow-md">
                           <Image src={caseItem.videoThumb!} alt="Section Preview" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* SubPoints Grid Container */}
                {item.subPointsTitle && (
                  <h3 className="text-center text-lg md:text-xl font-heading font-bold uppercase tracking-widest text-brand-dark mb-6 mt-4">
                    {item.subPointsTitle}
                  </h3>
                )}

                {/* Optional minor separator if there's no Title for a section but has icons following closely */}
                {!item.subPointsTitle && item.subPoints.length > 0 && (
                  <div className="w-16 h-px bg-gray-200 mx-auto mt-2 mb-8"></div>
                )}

                {/* Refined Card Grids targeting Thick Solid Icons */}
                {item.subPoints && item.subPoints.length > 0 && (
                  <div className={`w-full grid mt-2 gap-5 max-w-6xl mx-auto ${
                    item.subPoints.length === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
                    : item.subPoints.length === 3 ? 'grid-cols-1 md:grid-cols-3' 
                    : 'grid-cols-1 sm:grid-cols-2'
                  }`}>
                    {item.subPoints.map((point, pIdx) => {
                       const IconComp = point.icon;
                       return (
                        <div key={pIdx} className="bg-white border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.06)] p-6 md:p-8 flex flex-col items-center text-center rounded-sm transition-transform hover:-translate-y-1">
                          <IconComp className={`w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 ${point.color}`} strokeWidth={2.5} />
                          {point.title && (
                            <h4 className="font-sans font-bold text-gray-800 uppercase tracking-wide text-[14px] md:text-[14.5px] leading-snug mb-3">
                              {point.title}
                            </h4>
                          )}
                          <p className="text-[14.5px] md:text-[15px] text-gray-600 leading-relaxed font-sans">
                            {point.desc}
                          </p>
                        </div>
                       );
                    })}
                  </div>
                )}

                {/* Dual Read Full Details & Contextual CTA Buttons */}
                {!item.hideButtons && (
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 pb-4">
                    <Link 
                      href={item.url || "#"} 
                      className={`inline-flex items-center gap-2 text-white px-8 py-3.5 font-bold font-sans uppercase tracking-widest text-[13px] hover:bg-black transition-colors shadow-sm ${item.color.replace('bg-', 'bg-').split(' ')[0]}`}
                    >
                      SEE MORE
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </Link>

                    {item.ctaSecondaryUrl && (
                      <Link 
                        href={item.ctaSecondaryUrl} 
                        className="inline-flex items-center justify-center border-2 border-gray-300 text-brand-dark px-8 py-3 font-bold font-sans uppercase tracking-widest text-[13px] transition-colors duration-200 hover:bg-brand-red hover:text-black hover:border-brand-red"
                      >
                        {item.ctaSecondaryText}
                      </Link>
                    )}
                  </div>
                )}
                
              </div>
            </div>
            
            {/* Custom CTA Injected Directly after Section 1 precisely matching screenshot layout */}
            {index === 0 && (
              <div className="w-full bg-[#A41818] py-16 relative flex flex-col items-center shadow-inner mt-4 mb-4">
                {/* Visual Top Notch matching screenshot seamlessly */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[25px] border-r-[25px] border-t-[25px] border-l-transparent border-r-transparent border-t-white"></div>
                <p className="text-white/95 text-center max-w-5xl px-6 md:px-8 font-sans font-medium text-[15px] md:text-[16px] leading-[1.8] mb-8">
                  HEI is unique because our processes are transparent and our programs are credible. This has earned us the trust of individuals and corporate organizations who have supported HEI&apos;s lifesaving programs as we forge ahead to saving more lives and their beautiful dreams.
                </p>
                <Link 
                  href="/donate" 
                  className="bg-brand-yellow text-black font-bold font-sans uppercase tracking-widest text-[13.5px] px-10 py-4 hover:bg-yellow-500 transition-colors shadow-sm"
                >
                  MAKE A DONATION
                </Link>
              </div>
            )}
            
            </React.Fragment>
          ))}

        </div>
      </section>

      <GetInvolvedCTA />

    </div>
  );
}
