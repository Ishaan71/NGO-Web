import { BookOpen, FileText, GraduationCap, Scale } from "lucide-react";

const categories = [
  {
    title: "Reports",
    description: "Research findings, annual reports, and programme reports.",
    icon: FileText,
  },
  {
    title: "Research",
    description: "Research and analysis on issues affecting communities.",
    icon: BookOpen,
  },
  {
    title: "Guides",
    description: "Practical resources designed for communities and partners.",
    icon: GraduationCap,
  },
  {
    title: "Legal Resources",
    description: "Resources related to rights, justice, and legal empowerment.",
    icon: Scale,
  },
];

const ResourceCategories = () => {
  return (
    <section className="bg-background-alt px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Resource Library
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-text md:text-3xl">
            Find resources by topic
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-xl border border-border bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
                  <Icon size={21} className="text-primary" />
                </div>

                <h3 className="mt-5 font-semibold text-text">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourceCategories;