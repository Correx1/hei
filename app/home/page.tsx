import Hero from "@/app/home/Hero";
import About from "@/app/home/About";
import WhatWeDo from "@/app/home/WhatWeDo";
import FeaturedVideo from "@/app/home/FeaturedVideo";
import Partners from "@/app/home/Partners";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <Hero />
      <About />
      <FeaturedVideo />
      <WhatWeDo />
      <Partners />
      {/* Other home sections will be added here */}
    </div>
  );
}
