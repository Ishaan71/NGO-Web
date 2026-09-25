import TeamHero from "@/app/components/team/TeamHero";
import TeamLeader from "@/app/components/team/Leadership";
import TeamProcess from "@/app/components/team/TeamProcess";
import TeamFunctions from "@/app/components/team/TeamFunctions";
import TeamCTA from "@/app/components/team/TeamCTA";

export default function OurTeamPage() {
  return (
    <main className="overflow-hidden">
      <TeamHero />
      <TeamLeader />
      <TeamProcess />
      <TeamFunctions />
      <TeamCTA />
    </main>
  );
}