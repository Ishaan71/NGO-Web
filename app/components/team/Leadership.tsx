import Image from "next/image";
import { ArrowUpRight, Scale, Users, Megaphone } from "lucide-react";

export default function TeamLeader() {
  return (
    <section className="bg-surface py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Leadership
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-primary-dark sm:text-5xl">
              Experience rooted in the community.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-text-muted lg:ml-auto">
            COM&apos;s work has grown around community leadership, legal
            empowerment and advocacy for the rights and inclusion of
            marginalized communities.
          </p>
        </div>

        {/* Main profile */}
        <div className="grid overflow-hidden rounded-4xl bg-primary-dark lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image */}
          <div className="relative min-h-105 lg:min-h-155">
            <Image
              src="/Images/khalid-hussain.webp"
              alt="Khalid Hussain"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            <div className="absolute inset-0 bg-primary-dark/50" />

            <div className="absolute bottom-6 left-6">
              <span className="rounded-full bg-surface/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-dark">
                Founder & Chief Executive
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Leadership
              </p>

              <h3 className="mt-5 text-4xl font-bold text-text-on-primary sm:text-5xl">
                Khalid Hussain
              </h3>

              <p className="mt-5 max-w-xl text-lg leading-8 text-primary-light">
                A human rights lawyer and community leader whose work has
                focused on citizenship, legal empowerment and the rights of
                Urdu-speaking communities in Bangladesh.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex gap-4">
                  <div className="mt-1 text-gold">
                    <Scale size={21} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-on-primary">
                      Legal Empowerment
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-primary-light">
                      Supporting communities to understand and pursue their
                      legal and documentation rights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-gold">
                    <Users size={21} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-on-primary">
                      Community Leadership
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-primary-light">
                      Building community participation and leadership around
                      issues affecting everyday life.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-gold">
                    <Megaphone size={21} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-on-primary">
                      Advocacy
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-primary-light">
                      Connecting community experiences with wider advocacy and
                      policy conversations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-surface/10 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary-light/40">
                  Council of Minorities
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-primary-dark">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}