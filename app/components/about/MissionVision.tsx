import { Eye, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-bg-alt py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Our Direction
          </p>

          <h2 className="text-3xl font-bold text-primary-dark sm:text-4xl">
            What guides our work
          </h2>

          <p className="mt-4 leading-7 text-text-muted">
            Our work is grounded in the belief that communities are stronger
            when people understand their rights, participate in society and
            have equal access to opportunities.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">

          {/* Mission */}
          <div className="rounded-3xl bg-primary-dark p-8 text-text-on-primary sm:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface/10">
              <Target className="text-gold" size={28} />
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              Our Mission
            </p>

            <h3 className="text-2xl font-bold">
              Empower communities and strengthen equal participation.
            </h3>

            <p className="mt-5 leading-8 text-primary-light">
              We work to strengthen the capacity of minority and marginalized
              communities, increase awareness of rights, support access to
              justice and encourage meaningful participation in society.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl border border-border bg-surface p-8 sm:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Eye className="text-primary" size={28} />
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Our Vision
            </p>

            <h3 className="text-2xl font-bold text-primary-dark">
              A society where diversity is respected and everyone can thrive.
            </h3>

            <p className="mt-5 leading-8 text-text-muted">
              We envision an inclusive society where minority communities can
              enjoy their rights, participate equally and pursue opportunities
              with dignity and security.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}