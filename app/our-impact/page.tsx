import ImpactIntro from "../components/our-impact/ImpactIntro";
import ImpactAreas from "../components/our-impact/ImpactAreas";
import ImpactStories from "../components/our-impact/ImpactStories";
import ImpactStats from "../components/our-impact/ImpactStats";
import LeadershipMessage from "../components/our-impact/LeadershipMessage";
import ImpactCTA from "../components/our-impact/ImpactCTA";

export default function OurImpactPage() {
	return (

    <>
      <ImpactIntro />
      <ImpactStats />
      <ImpactAreas />
      <ImpactStories />
      <LeadershipMessage />
      <ImpactCTA />
    </>

	);
}
