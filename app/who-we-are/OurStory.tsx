import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function OurStory() {
  const partnerHospitals = [
    "Ajeromi General Hospital, Ajegunle, Lagos",
    "Alimosho General Hospital, Igando, Lagos",
    "Apapa General Hospital, Lagos",
    "Badagry General Hospital",
    "Ebutte Metta Health Centre, Lagos",
    "Federal Medical Centre Ebutte Metta, Lagos",
    "Gbagada General Hospital, Lagos",
    "Isolo General Hospital, Lagos",
    "Lagos Island Maternity",
    "Lagos State University Teaching Hospital, (LASUTH)",
    "Lagos University Teaching Hospital, (LUTH)",
    "Massey Children Hospital, Lagos",
    "Mushin General Hospital, Lagos",
    "Police Medical Clinic Falomo, Lagos",
    "Randle General Hospital, Surulere, Lagos",
    "Shomolu General Hospital, Shomolu, Lagos",
    "University College Hospital Ibadan (UCH)",
    "Federal Medical Centre, Owerri"
  ];

  const impactStats = [
    "Provided emergency medical assistance to over 35,700 indigent patients, including more than 21,800 children.",
    "Supported 6,870+ road traffic crash victims with post-crash care.",
    "Provided Therapeutic food for 8,200 malnourished children.",
    "Trained 147,500+ First Responders across communities, schools, and organizations."
  ];

  const goalsList = [
    "Partner with at least 274 hospitals nationwide.",
    "Provide lifesaving medical care to 172,000 indigent patients.",
    "Train 375,000+ First Aid Responders.",
    "Provide malnutrition Alleviation Program for 50,000 malnourished children of 0 to 5 years.",
    "Improve our health emergency awareness outreach through better social media awareness programs and campaigns."
  ];

  return (
    <div className="w-full bg-white flex flex-col font-sans text-gray-700">
      
      {/* 1. Introduction: Our Initiatives */}
      <section className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-xl lg:text-2xl font-heading font-black text-brand-dark uppercase tracking-tight">
          Our Initiatives
        </h2>
        <div className="w-16 h-1 bg-brand-red mx-auto rounded-full"></div>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
          Since founding in 2015, we have actively saved thousands of lives through our grassroots initiatives, addressing the pain points of indigent and vulnerable Nigerians.
        </p>
      </section>

      {/* 2. Feature 1: Covering Emergency Bills */}
      <section className="py-12 lg:py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="space-y-6 pr-0 lg:pr-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark leading-snug">
                Covering Emergency Medical Bills of Indigent Patients
              </h3>
              <div className="w-12 h-1 bg-brand-red rounded-full"></div>
              <div className="space-y-3 text-[15px] sm:text-[16px] leading-relaxed text-gray-600 pt-2">
                <p>
                  Every day across Nigeria, countless men, women, and children die in hospitals simply because they cannot afford small emergency medical bills. Road crashes further worsen the statistics, with an estimated 1.35 million people globally killed or maimed annually.
                </p>
                <p>
                  HEI bridges this gap by covering the emergency medical bills of indigent patients for acute, non-chronic conditions and road traffic accidents. To date, we have partnered with 91 hospitals nationwide, ensuring verified emergency cases are treated without delay. With your support, we aim to expand to 275 hospitals, saving thousands more lives across Nigeria.
                </p>
                <p>
                  To tackle preventable road crash deaths, we also work with key emergency institutions, including the Federal Road Safety Corps (FRSC) and the Lagos State Ambulance Services. We cover the initial 24-hour cost of resuscitation and stabilization, and over <span className="font-bold text-brand-dark">85% of victims</span> assisted under this scheme have survived.
                </p>
              </div>
            </div>

            <div className="relative h-[350px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/outreach.jpg"
                alt="Hospital Intervention"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Feature 2: Training First Responders */}
      <section className="py-12 lg:py-16 bg-[#fcfbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="relative h-[350px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl lg:order-1 order-2">
              <Image 
                src="/training.jpg"
                alt="First Responder Training"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 lg:pl-8 lg:order-2 order-1">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark leading-snug">
                Training First Responders
              </h3>
              <div className="w-12 h-1 bg-brand-blue rounded-full"></div>
              <div className="space-y-5 text-[15px] sm:text-[16px] leading-relaxed text-gray-600 pt-2">
                <p>
                  Beyond financial assistance, HEI strengthens communities’ ability to respond to emergencies by training First Responders and health professionals in CPR, First Aid, BLS, ACLS, and other lifesaving skills.
                </p>
                <p>
                  We have trained government officials, corporate organizations, artisans (mechanics, vulcanizers, dispatch riders, etc.), Youth Corps, and students across Nigeria. With the Lagos, Kwara, and Rivers States Ministries of Education’s approval, we are also extending this training to all secondary school students.
                </p>
                <p>
                  So far, we have trained <span className="font-bold text-brand-dark">over 147,600 First Responders</span>, and with the rollout of our iResponder mobile app, we plan to train over <span className="font-bold text-brand-dark">950,000</span> lay First Responders nationwide in the next three years. Our goal is to empower Nigerians to save lives during emergencies instead of standing by as passive onlookers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Impact & Goals */}
      <section className="py-20 lg:py-28 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Impact List */}
            <div className="space-y-8 pr-0 lg:pr-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tight">
                  Our Impact <span className="text-brand-red opacity-80">(2015 – Present)</span>
                </h3>
                <div className="w-16 h-1 bg-brand-red rounded-full"></div>
              </div>
              <ul className="space-y-4">
                {impactStats.map((text, idx) => (
                  <li key={idx} className="flex items-start gap-4 py-3 border-b border-white/10 last:border-0">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-0.5 opacity-90" size={20} />
                    <span className="text-[15px] sm:text-[15.5px] text-white/80 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Goals List */}
            <div className="space-y-8 pl-0 lg:pl-8 lg:border-l border-white/10">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tight">Our Goals</h3>
                <div className="w-16 h-1 bg-brand-light-blue rounded-full"></div>
              </div>
              <ul className="space-y-4">
                {goalsList.map((text, idx) => (
                  <li key={idx} className="flex items-start gap-4 py-3 border-b border-white/10 last:border-0">
                    <CheckCircle2 className="text-brand-light-blue shrink-0 mt-0.5 opacity-90" size={20} />
                    <span className="text-[15px] sm:text-[15.5px] text-white/80 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Partner Hospitals */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark uppercase tracking-tight">
              Some of Our Partner Hospitals
            </h3>
            <div className="w-16 h-1 bg-brand-red rounded-full"></div>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
              The Nigerian healthcare system grapples with numerous challenges, significantly heightening the risk of avoidable deaths. HEI responds by bridging these gaps, offering timely medical intervention through collaborations with key public hospitals, including:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
            {partnerHospitals.map((hospital, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 py-3 border-b border-gray-100"
              >
                <div className="w-[6px] h-[6px] rounded-full bg-brand-dark/20 mt-2.5 shrink-0"></div>
                <span className="text-[15px] text-brand-dark/80 leading-snug">{hospital}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
