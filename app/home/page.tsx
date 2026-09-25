import AboutSection from "../components/home/AboutSection";
import CallToAction from "../components/home/CallToAction";
import FeaturedCommunitySection from "../components/home/FeaturedCommunitySection";
import Hero from "../components/home/Hero";
import ImpactSection from "../components/home/ImpactSection";
import Publications from "../components/home/Publications";
import Quote from "../components/home/Quote";
import WhatWeDo from "../components/home/WhatWeDo";

export default function Home() {
	return (
		<main className="overflow-hidden bg-bg text-text">
			<Hero />
			<AboutSection />
			<WhatWeDo />
			<ImpactSection />
			<FeaturedCommunitySection />
			<Quote />
			<Publications />
			<CallToAction />
		</main>
	);
}


