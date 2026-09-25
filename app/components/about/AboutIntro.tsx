import { HeartHandshake, Scale, Users } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              About Council of Minorities
            </p>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
              Working with communities to turn rights into real opportunities.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-text-muted">
              <p>
                Council of Minorities is a civil society organization working
                to promote the rights, dignity and inclusion of minority
                communities in Bangladesh.
              </p>

              <p>
                Our work focuses on strengthening communities through
                awareness, advocacy, capacity building and access to justice.
                We believe that meaningful inclusion requires communities to
                understand their rights and have the opportunity to participate
                in decisions that affect their lives.
              </p>

              <p>
                Through community engagement and collaboration with different
                stakeholders, we work toward a society where diversity is
                respected and people can access their rights and opportunities
                without discrimination.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">

            <div className="rounded-2xl border border-border bg-bg-alt p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-dark text-text-on-primary">
                <Users size={23} />
              </div>

              <h3 className="text-lg font-semibold text-primary-dark">
                Community Empowerment
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                Supporting communities to build knowledge, confidence and
                capacity to advocate for their rights.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-alt p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-text-on-primary">
                <Scale size={23} />
              </div>

              <h3 className="text-lg font-semibold text-primary-dark">
                Rights & Justice
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                Promoting awareness of rights and improving access to justice
                and essential documentation.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-bg-alt p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-primary-dark">
                <HeartHandshake size={23} />
              </div>

              <h3 className="text-lg font-semibold text-primary-dark">
                Inclusion & Advocacy
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                Creating dialogue and partnerships that encourage meaningful
                participation and social inclusion.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}