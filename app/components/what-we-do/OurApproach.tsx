import { Ear, Users, Lightbulb } from "lucide-react";

const approaches = [
  {
    icon: Ear,
    number: "01",
    title: "We Listen",
    text: "We engage directly with communities and listen to the challenges they experience in their everyday lives.",
  },
  {
    icon: Users,
    number: "02",
    title: "We Connect",
    text: "We bring community members, civil society, service providers and relevant stakeholders together.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "We Act",
    text: "We turn community priorities into practical initiatives that strengthen opportunity, participation and inclusion.",
  },
];

export default function OurApproach() {
  return (
    <section className="bg-bg-alt py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold text-primary-dark sm:text-4xl">
            We start with people, not assumptions.
          </h2>

          <p className="mt-5 leading-8 text-text-muted">
            Sustainable community work begins by understanding what people
            actually need. Our approach puts community voices at the centre
            of identifying challenges and developing responses.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {approaches.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="absolute -right-3 -top-8 text-[110px] font-black leading-none text-primary-dark/[0.035]">
                  {item.number}
                </span>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-primary-dark">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-text-muted">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}