import PublicationCard from "./PublicationCard";

const publications = [
  {
    title: "Community Rights and Access to Justice",
    description:
      "A resource exploring community experiences and access to justice.",
    category: "Report",
    year: "2026",
    href: "#",
  },
  {
    title: "Legal Empowerment and Community Action",
    description:
      "Research and insights on community-led approaches to legal empowerment.",
    category: "Research",
    year: "2026",
    href: "#",
  },
  {
    title: "Community Guide to Rights",
    description:
      "A practical resource designed to help communities understand their rights.",
    category: "Guide",
    year: "2025",
    href: "#",
  },
  {
    title: "Annual Impact Report",
    description:
      "An overview of programmes, activities, and progress across the year.",
    category: "Report",
    year: "2025",
    href: "#",
  },
  {
    title: "Health and Environmental Justice",
    description:
      "Exploring community concerns related to health and environmental rights.",
    category: "Research",
    year: "2025",
    href: "#",
  },
  {
    title: "Community Stories and Experiences",
    description:
      "Stories highlighting experiences and perspectives from communities.",
    category: "Publication",
    year: "2024",
    href: "#",
  },
];

const PublicationGrid = () => {
  return (
    <section className="bg-bg-alt px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Explore Resources
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-text md:text-3xl">
              Publications and research
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication) => (
            <PublicationCard
              key={publication.title}
              {...publication}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationGrid;