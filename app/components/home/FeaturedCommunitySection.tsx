import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FeaturedCommunitySection = () => {
  return (
   <>
   {/* =====================================================
          FEATURED COMMUNITY SECTION
      ===================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-[2rem] bg-bg-alt lg:grid-cols-2">

            <div className="relative min-h-[300px] overflow-hidden bg-primary sm:min-h-[400px]">
              <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full border-[28px] border-gold/40" />
              <div className="absolute right-10 top-12 h-32 w-32 rounded-full bg-surface/10" />
              <div className="relative flex h-full min-h-[300px] items-end p-8 sm:min-h-[400px] sm:p-12">
                <p className="max-w-xs text-3xl font-bold leading-tight text-text-on-primary sm:text-4xl">Real change starts with listening.</p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Community First
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
                Real change starts with listening.
              </h2>

              <p className="mt-5 leading-7 text-text-muted">
                Communities understand their challenges better than anyone.
                Our approach is rooted in listening, participation and
                creating solutions together.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <p className="text-sm leading-6 text-text-muted">
                    Community-led conversations and engagement
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <p className="text-sm leading-6 text-text-muted">
                    Awareness and capacity-building initiatives
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <p className="text-sm leading-6 text-text-muted">
                    Advocacy for dignity, equality and inclusion
                  </p>
                </div>

              </div>

              <Link
                href="/what-we-do"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-text-on-primary transition hover:bg-primary-dark"
              >
                Learn About Our Work
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>
        </div>
      </section>
      
   </>
  );
};

export default FeaturedCommunitySection;