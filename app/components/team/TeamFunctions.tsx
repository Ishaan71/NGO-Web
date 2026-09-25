import {
  Scale,
  Users,
  Megaphone,
  GraduationCap,
  FileCheck,
  Handshake,
} from "lucide-react";

const functions = [
  {
    title: "Legal Empowerment",
    description:
      "Helping communities understand rights, documentation processes and practical legal pathways.",
    icon: Scale,
    size: "lg:col-span-2",
  },
  {
    title: "Community Engagement",
    description:
      "Working with communities through dialogue, participation and local leadership.",
    icon: Users,
    size: "",
  },
  {
    title: "Advocacy",
    description:
      "Bringing community concerns into wider public and policy conversations.",
    icon: Megaphone,
    size: "",
  },
  {
    title: "Capacity Building",
    description:
      "Strengthening knowledge, skills and confidence among community actors.",
    icon: GraduationCap,
    size: "",
  },
  {
    title: "Documentation",
    description:
      "Supporting access to important civil and identity documentation.",
    icon: FileCheck,
    size: "",
  },
  {
    title: "Partnerships",
    description:
      "Working with organizations and networks to strengthen community-led solutions.",
    icon: Handshake,
    size: "lg:col-span-2",
  },
];

export default function TeamFunctions() {
  return (
    <section className="bg-surface py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Across the organization
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-primary-dark sm:text-5xl">
              Different roles.
              <span className="text-primary"> One shared purpose.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-text-muted">
            COM&apos;s work brings together community knowledge, legal
            empowerment, advocacy, learning and partnerships.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {functions.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-bg-alt p-7 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl ${item.size}`}
              >
                {/* Background number */}
                <span className="absolute -right-3 -top-8 text-[110px] font-black leading-none text-primary-dark/[0.035]">
                  0{index + 1}
                </span>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-primary shadow-sm">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-10 text-2xl font-bold text-primary-dark">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-text-muted">
                    {item.description}
                  </p>

                  <div className="mt-8 h-1 w-10 rounded-full bg-gold transition-all duration-300 group-hover:w-20" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}