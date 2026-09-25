import {
  MessageCircle,
  Handshake,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Listen",
    text: "We listen to community members and understand the realities behind the issues.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Connect",
    text: "We create connections between communities, civil society and relevant stakeholders.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Build Capacity",
    text: "We support people with knowledge, skills and practical learning opportunities.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Create Change",
    text: "We work towards practical solutions that strengthen inclusion and participation.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-primary-dark py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
            How We Work
          </p>

          <h2 className="mt-3 text-3xl font-bold text-text-on-primary sm:text-4xl">
            A simple process. A community-led purpose.
          </h2>

          <p className="mt-5 leading-8 text-primary-light">
            We believe meaningful change grows when people are involved in
            understanding problems and shaping the solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-text-on-primary">
                  <Icon size={24} />
                </div>

                <span className="mt-6 block text-sm font-bold tracking-widest text-gold">
                  {step.number}
                </span>

                <h3 className="mt-2 text-xl font-bold text-text-on-primary">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-primary-light">{step.text}</p>

                {step.number !== "04" && (
                  <div className="absolute left-14 top-7 hidden w-full border-t border-dashed border-primary/30 md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
