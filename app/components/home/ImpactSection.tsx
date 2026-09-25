import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ImpactSection = () => {
  return (
    <>
      {/* =====================================================
          IMPACT SECTION
      ===================================================== */}
      <section className="bg-primary-dark px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Our Impact
              </p>

              <h2 className="text-3xl font-bold leading-tight text-text-on-primary sm:text-4xl">
                Change becomes possible when communities lead the way.
              </h2>

              <p className="mt-5 leading-7 text-primary-light">
                We believe sustainable change starts by listening to people,
                understanding their realities and working together towards
                practical solutions.
              </p>

              <Link
                href="/our-impact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-bg px-6 py-3 font-semibold text-bg transition-colors hover:bg-gold hover:text-primary-dark"
              >
                Explore Our Impact
                <ArrowRight size={18} />
              </Link>
            </div>


            <div className="grid grid-cols-2 gap-4 sm:gap-6">

              <div className="rounded-3xl border border-surface/10 bg-surface/10 p-6 backdrop-blur-sm sm:p-8">
                <p className="text-4xl font-bold text-gold sm:text-5xl">
                  01
                </p>
                <p className="mt-3 font-semibold text-text-on-primary">
                  Community-focused
                </p>
                <p className="mt-2 text-sm leading-6 text-primary-light">
                  Listening directly to the people and communities we serve.
                </p>
              </div>

              <div className="rounded-3xl border border-surface/10 bg-surface/10 p-6 backdrop-blur-sm sm:p-8">
                <p className="text-4xl font-bold text-gold sm:text-5xl">
                  02
                </p>
                <p className="mt-3 font-semibold text-text-on-primary">
                  Rights-based
                </p>
                <p className="mt-2 text-sm leading-6 text-primary-light">
                  Promoting dignity, equality and access to rights.
                </p>
              </div>

              <div className="rounded-3xl border border-surface/10 bg-surface/10 p-6 backdrop-blur-sm sm:p-8">
                <p className="text-4xl font-bold text-gold sm:text-5xl">
                  03
                </p>
                <p className="mt-3 font-semibold text-text-on-primary">
                  Collaborative
                </p>
                <p className="mt-2 text-sm leading-6 text-primary-light">
                  Working together with communities and partners.
                </p>
              </div>

              <div className="rounded-3xl border border-surface/10 bg-surface/10 p-6 backdrop-blur-sm sm:p-8">
                <p className="text-4xl font-bold text-gold sm:text-5xl">
                  04
                </p>
                <p className="mt-3 font-semibold text-text-on-primary">
                  Future-focused
                </p>
                <p className="mt-2 text-sm leading-6 text-primary-light">
                  Supporting long-term opportunities and inclusion.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ImpactSection;