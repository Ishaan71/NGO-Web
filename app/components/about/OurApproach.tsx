import {
  BookOpen,
  Megaphone,
  Users,
  Handshake,
} from "lucide-react";

const approaches = [
  {
    icon: Users,
    number: "01",
    title: "Community Engagement",
    description:
      "We listen to communities, understand their needs and encourage people to participate in addressing issues that affect them.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Awareness & Capacity Building",
    description:
      "We support learning, awareness and capacity building so communities can better understand and exercise their rights.",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Advocacy",
    description:
      "We create spaces for dialogue and advocate for greater recognition, inclusion and equal access to rights and opportunities.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Partnership & Collaboration",
    description:
      "We work with communities, civil society organizations and relevant stakeholders to create practical and sustainable solutions.",
  },
];

export default function OurApproach() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            How We Work
          </p>

          <h2 className="text-3xl font-bold text-primary-dark sm:text-4xl">
            Our approach to creating change
          </h2>

          <p className="mt-4 leading-7 text-text-muted">
            Sustainable change begins with communities. Our approach combines
            engagement, knowledge, advocacy and collaboration.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {approaches.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group rounded-2xl border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-dark text-text-on-primary transition group-hover:bg-primary">
                    <Icon size={22} />
                  </div>

                  <span className="text-3xl font-bold text-border">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-primary-dark">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}