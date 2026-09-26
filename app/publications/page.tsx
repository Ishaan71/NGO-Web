import PublicationIntro from "../components/publication/PublicationIntro";
import PublicationFilters from "../components/publication/PublicationFilters";
import FeaturedPublication from "../components/publication/FeaturedPublication";
import PublicationGrid from "../components/publication/PublicationGrid";
import ResourceCategories from "../components/publication/ResourceCategories";
import ResearchCTA from "../components/publication/ResearchCTA";
import PublicationNewsletter from "../components/publication/PublicationNewsletter";

const PublicationResourcesPage = () => {
  return (
    <>
      <PublicationIntro />

      <PublicationFilters />

      <FeaturedPublication />

      <PublicationGrid />

      <ResourceCategories />

      <ResearchCTA />

      <PublicationNewsletter />
    </>
  );
};

export default PublicationResourcesPage;
