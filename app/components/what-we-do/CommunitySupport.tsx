import Image from "next/image";
import {
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const points = [
  "Community-led identification of local challenges",
  "Access to knowledge, skills and opportunities",
  "Awareness of rights and civil documentation",
  "Connections with relevant services and stakeholders",
];

export default function CommunitySupport() {
  return (
    <section className="overflow-hidden bg-bg-alt py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">

        {/* Image */}
        <div className="relative">
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-2xl bg-gold lg:block" />

          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src="/Images/community-support.jpg"
              alt="Council of Minorities community support activity"
              width={800}
              height={650}
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 rounded-2xl bg-surface p-5 shadow-xl">
            <p className="text-3xl font-bold text-primary-dark">People</p>
            <p className="text-sm text-text-muted">at the centre of our work</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Community Support
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
            From identified needs to practical opportunities.
          </h2>

          <p className="mt-6 leading-8 text-text-muted">
            We work alongside communities to understand their priorities and
            help connect people with knowledge, skills, services and
            opportunities that can strengthen their participation in society.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-primary"
                />

                <p className="leading-7 text-text">{point}</p>
              </div>
            ))}
          </div>

          <Link
            href="/our-impact"
            className="mt-9 inline-flex items-center gap-2 font-semibold text-primary underline transition hover:text-primary-dark"
          >
            Explore our impact
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}