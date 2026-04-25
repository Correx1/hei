import Hero from "@/app/home/Hero";
import EmergencyStrip from "@/app/home/EmergencyStrip";
import About from "@/app/home/About";
import Impact from "@/app/home/Impact";
import FeaturedVideo from "@/app/home/FeaturedVideo";
import WhatWeDo from "@/app/home/WhatWeDo";
import DonatePromo from "@/app/home/DonatePromo";
import Testimonials from "@/app/home/Testimonials";
import Partners from "@/app/home/Partners";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-brand-white">
      <Hero />
      <EmergencyStrip />
      <About />
      <Impact />
      <FeaturedVideo />
      <WhatWeDo />
      <DonatePromo />
      <Testimonials />
      <Partners />
    </div>
  );
}
