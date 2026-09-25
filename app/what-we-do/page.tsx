import WhatWeDoIntro from "../components/what-we-do/WhatWeDoIntro";
import OurApproach from "../components/what-we-do/OurApproach";
import FocusAreas from "../components/what-we-do/FocusAreas";
import CommunitySupport from "../components/what-we-do/CommunitySupport";
import HowWeWork from "../components/what-we-do/HowWeWork";
import CommunityDialogue from "../components/what-we-do/CommunityDialogue";
import WhatWeDoCTA from "../components/what-we-do/WhatWeDoCTA";

export default function WhatWeDoPage() {
  return (
    <main>
	  <WhatWeDoIntro />
      <OurApproach />
      <FocusAreas />
      <CommunitySupport />
      <HowWeWork />
      <CommunityDialogue />
      <WhatWeDoCTA />
    </main>
  );
}