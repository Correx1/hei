import Image from "next/image";
import React from "react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";

// Media Gallery Component Renderers accepting dynamic media props 
// so you can easily maintain the URLs via the EVENTS object below.
const MixedPortraitMedia = ({ media }: { media: { videoUrl: string, images: string[] } }) => (
  <div className="w-full flex flex-col md:flex-row gap-4 mb-10">
    {/* Main Portrait Video */}
    <div className="w-full md:w-[40%] lg:w-[35%] aspect-[3/4] relative bg-black rounded-sm overflow-hidden shadow-md shrink-0">
      <iframe 
        className="w-full h-full absolute inset-0 border-0"
        src={media.videoUrl} 
        title="HEI Video"
        allow="autoplay; encrypted-media; picture-in-picture" 
        allowFullScreen 
      />
    </div>
    {/* Landscape Images Grid */}
    <div className="w-full flex-1 grid grid-cols-2 gap-4">
      {media.images.slice(0, 4).map((img, i) => (
        <div key={i} className="w-full aspect-[4/3] relative bg-gray-100 rounded-sm overflow-hidden shadow-sm hover:opacity-95 transition-opacity cursor-pointer">
          <Image src={img} alt={`Gallery image ${i}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  </div>
);

const WideImageMedia = ({ media }: { media: { images: string[] } }) => (
  <div className="w-full aspect-[16/9] md:aspect-[21/9] relative bg-gray-100 rounded-sm overflow-hidden shadow-md mb-10 group">
    <Image src={media.images[0]} alt="Wide Event Cover" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
);

const CarouselMedia = ({ media }: { media: { images: string[] } }) => (
  <div className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 mb-8 scrollbar-hide">
    {media.images.map((img, i) => (
      <div key={i} className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[40%] aspect-[16/10] relative bg-gray-100 rounded-sm overflow-hidden shadow-sm snap-center shrink-0">
        <Image src={img} alt={`Carousel image ${i}`} fill className="object-cover" />
      </div>
    ))}
  </div>
);

const GridMedia = ({ media }: { media: { images: string[] } }) => (
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
    {media.images.slice(0, 4).map((img, i) => (
      <div key={i} className="w-full aspect-video relative bg-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <Image src={img} alt={`Grid Image ${i}`} fill className="object-cover" />
      </div>
    ))}
  </div>
);

// ============================================================================
// TEMPLATE DATA OBJECT: Edit your text, titles, videos, and images right here!
// ============================================================================
const EVENTS = [
  {
    id: 1,
    title: "HEALTH EMERGENCY INITIATIVE HONOURS ROAD CRASH VICTIMS AT FEDERAL ROAD SAFTEY HEADQUARTERS IN LAGOS STATE",
    MediaRenderer: MixedPortraitMedia,
    media: {
      videoUrl: "https://www.youtube.com/embed/C4jKDPk8ArA?rel=0",
      images: [
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop&sig=11",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop&sig=12",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop&sig=13",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop&sig=14"
      ]
    },
    content: (
       <div className="space-y-5 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans max-w-5xl mx-auto">
         <p>
           On this year’s <strong className="text-gray-900 font-bold">World Day of Remembrance for Road Traffic Victims</strong>, we joined millions worldwide in honoring the lives lost to road crashes and acknowledging the immense impact on families, communities, and nations. This solemn occasion was marked with an official wreath-laying ceremony at the Federal Road Safety Corps (FRSC) Headquarters in Lagos State, underscoring the commitment to safer roads for all.
         </p>
         <p>
           <strong className="text-[#E51924]">Paschal Achunine</strong>, the esteemed Executive Director of Health Emergency Initiative (HEI) and a dedicated Ashoka Fellow, led the ceremony, symbolizing our collective mourning and resolve. His presence amplified the call for urgent action to enhance road safety and prevent further loss of life. As an Ashoka Fellow, Paschal Achunine embodies innovation and leadership, tirelessly championing initiatives that address pressing social challenges, including road traffic fatalities.
         </p>
         <p>
           The day serves as a stark reminder of the 1.3 million lives lost annually to road crashes worldwide and the millions more injured or permanently disabled. It is a call to action for individuals, organizations, and governments to embrace safer driving practices, enforce stricter regulations, and invest in smarter infrastructure.
         </p>
         <div className="pt-2">
            <h4 className="font-bold text-[#E51924] text-[17px] mb-2 tracking-wide uppercase">Our Commitment</h4>
            <p>
              At Health Emergency Initiative, we are dedicated to supporting road safety initiatives, spreading awareness, and advocating for effective policies to make our roads safer. Together, we can honor those we have lost by working towards a future where such tragedies are averted.
            </p>
         </div>
         <p className="font-medium text-gray-900 pt-2 border-l-4 border-gray-300 pl-4">
           Let us all pledge to drive responsibly, prioritize safety, and remember that every life matters.
         </p>
       </div>
    )
  },
  {
    id: 2,
    title: "HEALTH EMERGENCY INITIATIVE ANNOUNCES EXCITING COLLABORATION WITH UNITED STATES EMBASSY IN NIGERIA",
    MediaRenderer: CarouselMedia,
    media: {
      images: [
        "https://images.unsplash.com/photo-1559863345-02eae058c2ce?q=80&w=800&auto=format&fit=crop&sig=51",
        "https://images.unsplash.com/photo-1559863345-02eae058c2ce?q=80&w=800&auto=format&fit=crop&sig=52",
        "https://images.unsplash.com/photo-1559863345-02eae058c2ce?q=80&w=800&auto=format&fit=crop&sig=53",
        "https://images.unsplash.com/photo-1559863345-02eae058c2ce?q=80&w=800&auto=format&fit=crop&sig=54"
      ]
    },
    content: (
       <div className="space-y-5 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans max-w-5xl mx-auto">
         <p>
           <strong className="text-[#E51924]">Health Emergency Initiative, HEI</strong> has announced a significant new collaboration with the United States Embassy/Mission in Nigeria.
         </p>
         <p>
           Executive Director of HEI, Paschal Achunine, noted that the partnership builds on a fruitful courtesy visit 14 months ago, where HEI, alongside esteemed partners from the Federal Road Safety Corps, FRSC and LFR International from Michigan, USA, met with embassy officials.
         </p>
         <p>
           According to Achunine, the collaboration aims to train cohorts from the American Corner, as well as hundreds of secondary school students, teachers, and youth in vital life-saving skills such as CPR, First Aid, and other prehospital care techniques, utilizing advanced technology.
         </p>
         <div className="pt-4">
           <button className="text-[13px] font-bold uppercase tracking-widest text-[#E51924] border-b-2 border-[#E51924] pb-1 hover:text-brand-dark hover:border-brand-dark transition-colors">
             READ MORE
           </button>
         </div>
       </div>
    )
  },
  {
    id: 3,
    title: "HEI RECIEVES FUNDS FROM VERRAKI BUSINESS SOLUTIONS FOR AFRICA FOR LIFE-SAVING SKILLS TRAINING",
    MediaRenderer: CarouselMedia,
    media: {
      images: [
        "https://images.unsplash.com/photo-1579208575657-302a24ec758a?q=80&w=800&auto=format&fit=crop&sig=21",
        "https://images.unsplash.com/photo-1579208575657-302a24ec758a?q=80&w=800&auto=format&fit=crop&sig=22",
        "https://images.unsplash.com/photo-1579208575657-302a24ec758a?q=80&w=800&auto=format&fit=crop&sig=23",
        "https://images.unsplash.com/photo-1579208575657-302a24ec758a?q=80&w=800&auto=format&fit=crop&sig=24"
      ]
    },
    content: (
       <div className="space-y-5 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans max-w-5xl mx-auto">
         <p>
           <strong className="text-[#E51924]">Health Emergency Initiative (HEI)</strong> recieved funds from Verraki Business Solutions for Africa @verrakiafrica as part of its corporate social responsibility (CSR) initiatives, to train 50 senior secondary school students from Lagos’ six education districts in life-saving skills, including CPR, First Aid, and prehospital care techniques. This partnership reflects Verraki’s recognition of HEI’s far-reaching impact, having saved countless lives across Nigeria.
         </p>
         <p>
           The two-day training, which commenced on October 8th, saw students from five schools participating on the first day, followed by more schools on October 9th. To ensure long-term knowledge retention and skill transfer, First Responders Clubs will be established in select schools. These clubs will promote continuous engagement through debates, essay writing, and quiz competitions among students.
         </p>
         <p>
           This initiative is not just a demonstration of Verraki’s commitment to a safer and more resilient society, but a clarion call for other corporate organizations, philanthropists, and well-meaning individuals to step forward and support similar causes. By investing in community-based health and emergency response programs, they too can contribute to building a safer, more prepared society where lives are protected, and preventable deaths become a thing of the past. In a world where every second counts, their support could make all the difference.
         </p>
         <p className="font-bold text-gray-900 border-l-4 border-[#E51924] pl-4 mt-4 py-1">
           This call to action is a challenge and an invitation—to create a legacy of lifesaving initiatives for future generations, just as Verraki has done.
         </p>
       </div>
    )
  },
  {
    id: 4,
    title: "HEI FIRST RESPONDER TRAINING MOVES TO IMO STATE, IMPACTING GRASSROOTS LEVEL",
    MediaRenderer: MixedPortraitMedia,
    media: {
      videoUrl: "https://www.youtube.com/embed/C4jKDPk8ArA?rel=0",
      images: [
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop&sig=31",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop&sig=32",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop&sig=33",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop&sig=34"
      ]
    },
    content: (
       <div className="space-y-5 text-[15px] md:text-[16px] text-gray-700 leading-relaxed font-sans max-w-5xl mx-auto">
         <p>
           With over 500 persons already trained in Lagos State in the last 3months, Health emergency Initiative train moved to Imo State this past September, 2024.
         </p>
         <p>
           As a 2024 grantee of ACT foundation, Health Emergency Initiative (HEI) Team trained first responders Imo on mitigating Non-Communicable Diseases (NCDs) and Trauma for First Responders at the grassroot level.
         </p>
         <p>
           60 Community Health Extension Workers (CHEWs)/health professionals/other persons were trained in the Train of Trainers (TOT) category whole 400 community dwellers/residents/gatekeepers would be trained in the step down phase across 19 LGAs.
         </p>
         <p>
           A big shout out to our funders, <strong className="text-[#E51924]">Aspire Coronation Trust (ACT) Foundation</strong> for sponsorship of this project.
         </p>
         <p>
           We are sincerely grateful to the leadership and personnel of Imo State Primary Healthcare Development Agency for amazing support and mobilization to make this program succeed.
         </p>
         
         <div className="italic font-medium text-gray-800 bg-red-50/50 p-6 rounded-r-sm border-l-4 border-[#E51924] mt-6">
           <p className="mb-2">To our trainees and the good people of Imo State:</p>
           <p className="mb-2">This training is just a start. Professionally rewarding as it seems, it can be draining but you have to be Emergency response prepared!</p>
           <p className="mb-4">Take joy in the reminder that you’re transforming lives and making impact in the world ????</p>
           <p className="font-bold text-[#E51924] not-italic text-[14px] uppercase tracking-wider">Stay tuned for more information on this!</p>
         </div>
       </div>
    )
  }
];

export const metadata = {
  title: "HEI On The Go",
};

export default function HEIOnTheGoPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">

      {/* Hero Header */}
      <section className="relative w-full py-16 md:py-24 bg-brand-dark flex flex-col justify-center items-center text-center overflow-hidden">
         {/* Subtle background pattern/overlay */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
              HEI ON THE GO
            </h1>
            <div className="w-20 h-1.5 bg-[#E51924] rounded-full mb-6"></div>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed font-sans font-medium max-w-2xl">
              Catch up with the latest field events, life-saving training programs, partnerships, and impact stories from Health Emergency Initiative.
            </p>
         </div>
      </section>

      {/* Dynamic Event Feed Gallery */}
      <section className="w-full py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
          
          {EVENTS.map((event, index) => {
            const { MediaRenderer, media } = event;
            return (
              <article key={event.id} className="w-full flex flex-col">
                 
                 {/* Post Header */}
                 <div className="w-full text-center mb-8 md:mb-12">
                   <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-heading font-extrabold text-brand-dark uppercase tracking-wider leading-snug max-w-5xl mx-auto">
                     {event.title}
                   </h2>
                 </div>

                 {/* Custom Media Gallery Block mapped dynamically */}
                 <MediaRenderer media={media} />

                 {/* Post Content */}
                 <div className="w-full">
                    {event.content}
                 </div>

                 {/* Divider for next post except last */}
                 {index !== EVENTS.length - 1 && (
                   <div className="w-full max-w-3xl mx-auto border-b border-gray-200 mt-24"></div>
                 )}
              </article>
            );
          })}

        </div>
      </section>

      {/* Global Bottom CTA */}
      <GetInvolvedCTA />

    </div>
  );
}
