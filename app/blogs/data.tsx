import React from "react";
import Image from "next/image";

export const BLOG_POSTS = [
  {
    id: "1",
    slug: "transforming-healthcare-hei-joins-hfn-annual-conference",
    category: "ARTICLES",
    title: "Transforming Healthcare: HEI Joins the HFN Annual Conference Panel",
    date: "FEBRUARY 26, 2026",
    dateShort: { day: "26", month: "Feb" },
    author: "GODWIN CHIBUKE",
    image: "https://images.unsplash.com/photo-1579208575657-302a24ec758a?q=80&w=800&auto=format&fit=crop",
    excerpt: "We are excited to announce that our Executive Director, Paschal Achunine, will be representing Health Emergency Initiative (HEI) at the upcoming HFN Annual Conference 2026. As we reflect on a decade of providing emergency assistance to over 50,000 individuals and nearly 7,000 critically injured victims, this conference serves as a vital platform to discuss scaling [...]",
    commentCount: 0,
    content: (
      <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans">
        <p>
          We are excited to announce that our Executive Director, Paschal Achunine, will be representing Health Emergency Initiative (HEI) at the upcoming HFN Annual Conference 2026. As we reflect on a decade of providing emergency assistance to over 50,000 individuals and nearly 7,000 critically injured victims, this conference serves as a vital platform to discuss scaling impact.
        </p>
        <div className="w-full aspect-video md:aspect-[21/9] relative rounded-sm overflow-hidden my-8 shadow-sm">
          <Image src="https://images.unsplash.com/photo-1579208575657-302a24ec758a?q=80&w=1600&auto=format&fit=crop" alt="HFN Conference Main" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
        </div>
        <h3 className="text-[20px] md:text-[24px] font-heading font-bold text-brand-dark mt-8 mb-4">Building Sustainable Healthcare Systems</h3>
        <p>
          The panel will focus on leveraging private sector innovation to achieve quality outcomes. Our experience in pioneering the 'First Responder' network across major Nigerian cities provides a unique blueprint for public-private partnerships in emergency medical services.
        </p>
        <div className="italic font-medium text-gray-900 border-l-4 border-[#E51924] pl-5 py-3 my-8 bg-red-50/50 rounded-r-sm">
          “Innovation in healthcare isn't just about new technology; it's about new systems of compassion that reach the most vulnerable in their critical hour of need.”
        </div>
        <p>
          Through our proven training program, HEI aims to improve outcomes between the site of injury and hospital admission.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="w-full aspect-[4/3] relative rounded-sm overflow-hidden shadow-sm">
            <Image src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" alt="Panel discussion" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[4/3] relative rounded-sm overflow-hidden shadow-sm">
            <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop" alt="Healthcare workers" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
        <p>
          Stay tuned for live updates from the event. We look forward to engaging with other industry leaders and forging new alliances that will help us reach our ultimate goal: zero preventable deaths on our roads.
        </p>
      </div>
    )
  },
  {
    id: "2",
    slug: "fighting-malnutrition-with-cardgoal",
    category: "ARTICLES",
    title: "Fighting Malnutrition (with CardGoal): Highlights from the Gift Health Nutrition Program Flag-off",
    date: "DECEMBER 10, 2025",
    dateShort: { day: "10", month: "Dec" },
    author: "GODWIN CHIBUKE",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    excerpt: "Date: November 25, 2025 Location: Lagos, Nigeria Every Child Deserves a Healthy Start On Tuesday, November 25th, the Health Emergency Initiative (HEI), in collaboration with CardGoal, officially flagged off the Gift Health Nutrition Program. This initiative is a direct response to the rising cases of malnutrition, ensuring that no child is left behind due to a [...]",
    commentCount: 2,
    content: (
      <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans">
        <p>
          <strong>Date:</strong> November 25, 2025 <br/>
          <strong>Location:</strong> Lagos, Nigeria
        </p>
        <p>
          Every Child Deserves a Healthy Start! On Tuesday, November 25th, the Health Emergency Initiative (HEI), in collaboration with CardGoal, officially flagged off the Gift Health Nutrition Program. This initiative is a direct response to the rising cases of malnutrition, ensuring that no child is left behind due to a lack of basic nutritional needs.
        </p>
        <div className="w-full aspect-[16/9] relative rounded-sm overflow-hidden my-8 shadow-sm">
          <Image src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop" alt="Nutrition program launch" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
        </div>
        <h3 className="text-[20px] md:text-[24px] font-heading font-bold text-brand-dark mt-8 mb-4">A Community-Driven Approach</h3>
        <p>
          Working closely with local health centers, we distributed over 500 comprehensive nutrition packs to nursing mothers and pregnant women. The energy and gratitude from the community members validated the core mission of this intervention. 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="w-full aspect-square relative rounded-sm overflow-hidden shadow-sm">
             <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop" alt="Community 1" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
          </div>
          <div className="w-full aspect-square relative rounded-sm overflow-hidden shadow-sm">
             <Image src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=600&auto=format&fit=crop" alt="Community 2" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
          </div>
          <div className="w-full aspect-square relative rounded-sm overflow-hidden shadow-sm">
             <Image src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=600&auto=format&fit=crop" alt="Community 3" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
          </div>
        </div>
        <p>
          This is just phase one. We intend to scale this program to reach 5,000 households across three states before the end of Q1 2026.
        </p>
      </div>
    )
  },
  {
    id: "3",
    slug: "photo-speaks-hei-10",
    category: "ARTICLES",
    title: "Photo Speaks: HEI @10",
    date: "DECEMBER 1, 2025",
    dateShort: { day: "01", month: "Dec" },
    author: "GODWIN CHIBUKE",
    image: "https://images.unsplash.com/photo-1559863345-02eae058c2ce?q=80&w=800&auto=format&fit=crop",
    excerpt: "Happy New Month and Welcome to December! We are still buzzing from the energy of our 10th Anniversary Celebration and Awards held on November 13th, 2025! at the Celebration Gathering Event Center, the evening was a powerful tribute to a decade of commitment, made possible by our incredible partners, volunteers, and beneficiaries. This post is [...]",
    commentCount: 5,
    content: (
      <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans">
        <p>
          Happy New Month and Welcome to December! We are still buzzing from the energy of our 10th Anniversary Celebration and Awards held on November 13th, 2025!
        </p>
        <p>
          At the Celebration Gathering Event Center, the evening was a powerful tribute to a decade of commitment, made possible by our incredible partners, volunteers, and beneficiaries. This post is dedicated to sharing the vibrant visual story of that unforgettable night.
        </p>
        <div className="w-full aspect-[21/9] relative rounded-sm overflow-hidden my-8 shadow-sm">
          <Image src="https://images.unsplash.com/photo-1559863345-02eae058c2ce?q=80&w=1600&auto=format&fit=crop" alt="Gala wide view" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
        </div>
        <h3 className="text-[20px] md:text-[24px] font-heading font-bold text-brand-dark mt-8 mb-4">Awards and Recognition</h3>
        <p>
          Over 30 exceptional volunteers and corporate partners were recognized for their unwavering support. From frontline first responders to our silent financial backers, the awards highlighted the beautiful tapestry of humanity that keeps HEI running.
        </p>
        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="w-full aspect-[3/4] relative rounded-sm overflow-hidden shadow-sm">
             <Image src="https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop" alt="Award winner 1" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
          </div>
          <div className="w-full aspect-[3/4] relative rounded-sm overflow-hidden shadow-sm">
             <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Award winner 2" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
          </div>
        </div>
        <p>
          Thank you to everyone who has been part of this journey. Here is to the next decade of saving lives and restoring beautiful dreams!
        </p>
      </div>
    )
  },
  {
    id: "4",
    slug: "a-decade-of-action-governor-sanwo-olu-hails-hei",
    category: "HAPPENINGS",
    title: "💡 A Decade of Action: Governor Sanwo-Olu Hails HEI as a Model for Compassion-Driven Healthcare",
    date: "NOVEMBER 27, 2025",
    dateShort: { day: "27", month: "Nov" },
    author: "GODWIN CHIBUKE",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
    excerpt: "The Health Emergency Initiative (HEI)’s 10th Anniversary Celebration was marked by high praise and strong endorsement from the Governor of Lagos State, Mr. Babajide Olusola Sanwo-Olu, who hailed the organisation as a “model for compassion-driven healthcare intervention” and a “vital partner” to the state. The Governor was represented by: Dr. Mrs. Cecilia Mabogunje, Permanent Secretart [...]",
    commentCount: 1,
    content: (
      <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans">
        <p>
          The Health Emergency Initiative (HEI)’s 10th Anniversary Celebration was marked by high praise and strong endorsement from the Governor of Lagos State, Mr. Babajide Olusola Sanwo-Olu, who hailed the organisation as a “model for compassion-driven healthcare intervention” and a “vital partner” to the state.
        </p>
        <div className="w-full aspect-video relative rounded-sm overflow-hidden my-8 shadow-sm">
          <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop" alt="Gov Sanwo-Olu Rep" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
        </div>
        <p>
          The Governor was represented by Dr. Mrs. Cecilia Mabogunje, Permanent Secretary, Ministry of Health, who delivered an inspiring keynote address outlining the critical nature of public-NGO partnerships in closing the massive gaps in Nigeria's healthcare infrastructure.
        </p>
      </div>
    )
  },
  {
    id: "5",
    slug: "hei-10-celebrating-a-decade-of-dedication",
    category: "ARTICLES",
    title: "HEI @10 🚨 Celebrating A Decade of Dedication",
    date: "NOVEMBER 13, 2025",
    dateShort: { day: "13", month: "Nov" },
    author: "GODWIN CHIBUKE",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d786a2b?q=80&w=800&auto=format&fit=crop",
    excerpt: "A milestone of ten years of operations is no small feat. It marks 3,650 days of responding to emergencies, intervening for the vulnerable, and restoring hope where it is needed most. We are thrilled to invite our partners, donors, volunteers, and well-wishers to join us as we celebrate.",
    commentCount: 8,
    content: (
      <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans">
        <p>
          A milestone of ten years of operations is no small feat. It marks 3,650 days of responding to emergencies, intervening for the vulnerable, and restoring hope where it is needed most.
        </p>
        <p>
          We are thrilled to invite our partners, donors, volunteers, and well-wishers to join us as we celebrate a decade of impact. This is not just our celebration; it belongs to every individual who has donated blood, funds, or time.
        </p>
      </div>
    )
  },
  {
    id: "6",
    slug: "emergency-response-training-for-schools",
    category: "HAPPENINGS",
    title: "Equipping the Next Generation: Emergency Response Training in Secondary Schools",
    date: "OCTOBER 15, 2025",
    dateShort: { day: "15", month: "Oct" },
    author: "GODWIN CHIBUKE",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    excerpt: "In our continued effort to ensure that safety skills become common knowledge, HEI has expanded its First Responder training program into secondary schools across Lagos state. Over 500 students have recently participated in our comprehensive CPR and First Aid workshops, preparing them to respond effectively to medical emergencies in their schools and communities.",
    commentCount: 0,
    content: (
      <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans">
        <p>
          In our continued effort to ensure that safety skills become common knowledge, HEI has expanded its First Responder training program into secondary schools across Lagos state.
        </p>
        <div className="w-full aspect-[16/9] relative rounded-sm overflow-hidden my-8 shadow-sm">
          <Image src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop" alt="Students Training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover" />
        </div>
        <p>
          Over 500 students have recently participated in our comprehensive CPR and First Aid workshops, preparing them to respond effectively to medical emergencies in their schools and communities. We strongly believe that early education is the key to building a resilient, response-ready nation.
        </p>
      </div>
    )
  },
  {
    id: "7",
    slug: "partnership-with-frsc-for-safer-highways",
    category: "ARTICLES",
    title: "Partnership with FRSC: Strategies for Safer Highways",
    date: "SEPTEMBER 22, 2025",
    dateShort: { day: "22", month: "Sep" },
    author: "GODWIN CHIBUKE",
    image: "https://images.unsplash.com/photo-1601625463687-25bf029e2e8e?q=80&w=800&auto=format&fit=crop",
    excerpt: "Road traffic crashes remain a significant public health challenge in Nigeria. HEI’s recent strategic meeting with the Federal Road Safety Corps (FRSC) focused on enhancing rapid response times on major highways and integrating trained civilian first responders into the national emergency framework to reduce post-crash mortality rates.",
    commentCount: 3,
    content: (
      <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans">
        <p>
          Road traffic crashes remain a significant public health challenge in Nigeria. HEI’s recent strategic meeting with the Federal Road Safety Corps (FRSC) focused on enhancing rapid response times on major highways and integrating trained civilian first responders into the national emergency framework to reduce post-crash mortality rates.
        </p>
        <p>
          The new memorandum of understanding clearly delegates training execution to HEI while utilizing FRSC's extensive logistical capabilities to deploy first aid kits to verified accident hotspots.
        </p>
      </div>
    )
  },
  {
    id: "8",
    slug: "maternal-health-interventions-rural-communities",
    category: "ARTICLES",
    title: "Saving Mothers: HEI's Interventions in Rural Communities",
    date: "AUGUST 10, 2025",
    dateShort: { day: "10", month: "Aug" },
    author: "GODWIN CHIBUKE",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=800&auto=format&fit=crop",
    excerpt: "Access to urgent maternal care remains a critical issue in underserved regions. HEI has launched a new fund dedicated solely to assisting indigent pregnant women facing emergency childbirth complications. Through our partner hospitals, we have successfully covered the surgical costs for over 120 women this quarter, ensuring safe deliveries and healthy babies.",
    commentCount: 12,
    content: (
      <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans">
        <p>
          Access to urgent maternal care remains a critical issue in underserved regions. HEI has launched a new fund dedicated solely to assisting indigent pregnant women facing emergency childbirth complications. 
        </p>
        <p>
          Through our partner hospitals, we have successfully covered the surgical costs for over 120 women this quarter, ensuring safe deliveries and healthy babies. This fund directly combats Nigeria's high maternal mortality rate by removing the immediate financial barriers to life-saving surgical interventions (CS).
        </p>
      </div>
    )
  },
  {
    id: "9",
    slug: "volunteer-spotlight-sarah-adeyemi",
    category: "HAPPENINGS",
    title: "Volunteer Spotlight: Sarah Adeyemi's Dedication to Saving Lives",
    date: "JULY 05, 2025",
    dateShort: { day: "05", month: "Jul" },
    author: "GODWIN CHIBUKE",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    excerpt: "Volunteers are the lifeblood of our organization. This month, we shine the spotlight on Sarah Adeyemi, a registered nurse and one of our most dedicated first responders. Sarah has been instrumental in leading our community CPR training sessions and has directly intervened in multiple road traffic accidents, providing crucial stabilization before ambulance arrivals.",
    commentCount: 4,
    content: (
      <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans">
        <p>
          Volunteers are the lifeblood of our organization. This month, we shine the spotlight on Sarah Adeyemi, a registered nurse and one of our most dedicated first responders.
        </p>
        <p>
          Sarah has been instrumental in leading our community CPR training sessions and has directly intervened in multiple road traffic accidents, providing crucial stabilization before ambulance arrivals. Her heroic efforts perfectly encapsulate the HEI spirit.
        </p>
      </div>
    )
  },
  {
    id: "10",
    slug: "the-impact-of-swift-medical-intervention",
    category: "ARTICLES",
    title: "The Golden Hour: The True Impact of Swift Medical Intervention",
    date: "JUNE 18, 2025",
    dateShort: { day: "18", month: "Jun" },
    author: "GODWIN CHIBUKE",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    excerpt: "In emergency medicine, the 'Golden Hour' refers to the critical period immediately following a traumatic injury during which there is the highest likelihood that prompt medical and surgical treatment will prevent death. This article breaks down why bystander intervention and immediate financial clearance at hospitals are the two biggest factors in patient survival.",
    commentCount: 7,
    content: (
      <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans">
        <p>
          In emergency medicine, the 'Golden Hour' refers to the critical period immediately following a traumatic injury during which there is the highest likelihood that prompt medical and surgical treatment will prevent death.
        </p>
        <p>
          This article breaks down why bystander intervention and immediate financial clearance at hospitals are the two biggest factors in patient survival. Without funds, the golden hour often slips away. This is exactly where HEI's emergency fund acts as a vital bridge between life and death.
        </p>
      </div>
    )
  },
  {
    id: "11",
    slug: "hei-receives-global-health-award",
    category: "HAPPENINGS",
    title: "HEI Receives Global Health Innovators Award",
    date: "MAY 02, 2025",
    dateShort: { day: "02", month: "May" },
    author: "GODWIN CHIBUKE",
    image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop",
    excerpt: "We are deeply honored to announce that Health Emergency Initiative has been awarded the prestigious Global Health Innovators Award for our unique, tech-driven approach to bridging the gap in emergency medical financing. This international recognition validates our model and fuels our determination to reach our 'Project 1 Million' goal.",
    commentCount: 15,
    content: (
      <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans">
        <p>
          We are deeply honored to announce that Health Emergency Initiative has been awarded the prestigious Global Health Innovators Award for our unique, tech-driven approach to bridging the gap in emergency medical financing. 
        </p>
        <p>
          This international recognition validates our model and fuels our determination to reach our 'Project 1 Million' goal. The award ceremony in Geneva highlighted the scalable nature of our interventions and the undeniable empirical results of our post-crash care ecosystem.
        </p>
      </div>
    )
  }
];
