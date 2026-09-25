import {
  GraduationCap,
  Scale,
  BriefcaseBusiness,
  HeartPulse,
  Megaphone,
  UsersRound,
} from "lucide-react";

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Education & Learning",
    text: "Supporting access to education, learning opportunities and pathways for young people and community members.",
    size: "md:col-span-2",
  },
  {
    icon: Scale,
    title: "Rights & Legal Identity",
    text: "Building awareness around rights, legal identity and civil documentation.",
    size: "",
  },
  {
    icon: BriefcaseBusiness,
    title: "Skills & Livelihoods",
    text: "Creating opportunities for skills development, entrepreneurship and sustainable livelihoods.",
    size: "",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellbeing",
    text: "Supporting communities in identifying and responding to important health and wellbeing needs.",
    size: "",
  },
  {
    icon: Megaphone,
    title: "Advocacy & Voice",
    text: "Helping community concerns reach relevant institutions and wider society through dialogue and advocacy.",
    size: "md:col-span-2",
  },
  {
    icon: UsersRound,
    title: "Community Participation",
    text: "Creating spaces where community members can participate, discuss challenges and shape solutions.",
    size: "md:col-span-3",
  },
];

export default function FocusAreas() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              What We Work On
            </p>

            <h2 className="mt-3 text-3xl font-bold text-primary-dark sm:text-4xl">
              Areas where community action can create change.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-text-muted">
            Our work responds to priorities identified with communities, while
            building stronger participation and opportunities.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className={`group rounded-2xl border border-border bg-bg-alt p-7 transition duration-300 hover:border-primary hover:bg-primary-dark hover:text-text-on-primary hover:shadow-xl ${area.size}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-primary shadow-sm transition group-hover:bg-gold group-hover:text-primary-dark">
                    <Icon size={23} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-text-on-primary/50">
                    Focus
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-primary-dark group-hover:text-text-on-primary">
                  {area.title}
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-text-muted group-hover:text-text-on-primary/70">
                  {area.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}