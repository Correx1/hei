import Hero from "./Hero";
import MissionVision from "./MissionVision";
import OurStory from "./OurStory";
import Team from "./Team";
import GetInvolvedCTA from "./GetInvolvedCTA";

export default function WhoWeArePage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <Hero />
      <MissionVision />
      <OurStory />
      <Team />
      <GetInvolvedCTA />
    </div>
  );
}
