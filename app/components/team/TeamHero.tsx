import { ArrowDownRight, Users } from "lucide-react";

export default function TeamHero() {
  return (
    <section className="relative overflow-hidden bg-bg-alt">
      {/* Decorative shapes */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold/15" />
      <div className="absolute -bottom-40 -left-25 h-80 w-80 rounded-full bg-primary/10" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Main heading */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark text-text-on-primary">
                <Users size={18} />
              </div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Our Team
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight text-primary-dark sm:text-6xl lg:text-8xl">
              People behind
              <span className="block text-primary">the work.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-text-muted">
              Our work connects leadership, community knowledge, legal
              empowerment and advocacy to help marginalized communities
              understand and pursue their rights.
            </p>
          </div>

          {/* Side block */}
          <div className="lg:pb-3">
            <div className="border-l-2 border-gold pl-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-text-muted">
                Our approach
              </p>

              <p className="mt-3 text-xl font-semibold leading-8 text-primary-dark">
                Listen to communities.
                <br />
                Build knowledge.
                <br />
                Create change.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-primary">
                <ArrowDownRight size={20} />
                Meet the people behind COM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 border-t border-border pt-6">
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm font-medium text-text-muted">
            <span>Community Engagement</span>
            <span>Legal Empowerment</span>
            <span>Advocacy</span>
            <span>Capacity Building</span>
          </div>
        </div>
      </div>
    </section>
  );
}