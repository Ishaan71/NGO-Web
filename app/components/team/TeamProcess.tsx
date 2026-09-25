import {
  MessageCircle,
  BookOpen,
  Scale,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Listen",
    description:
      "Start with community experiences, concerns and priorities.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Build awareness and knowledge around rights, systems and available pathways.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Empower",
    description:
      "Connect people with practical legal and community support.",
    icon: Scale,
  },
  {
    number: "04",
    title: "Advocate",
    description:
      "Turn community experiences into collective advocacy and dialogue.",
    icon: Megaphone,
  },
];

export default function TeamProcess() {
  return (
    <section className="bg-bg-alt py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            How we work
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-primary-dark sm:text-5xl">
            From community experience to collective action.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div className="h-full rounded-2xl bg-surface p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start justify-between">
                    <span className="text-5xl font-black text-border">
                      {step.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="mt-10 text-2xl font-bold text-primary-dark">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-text-muted">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-gold xl:block"
                    size={22}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}