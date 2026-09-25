import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <>
      {/* =====================================================
          About Section
      ===================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-gold/20" />

            <div className="relative flex h-[360px] items-end overflow-hidden rounded-3xl bg-primary-dark p-7 sm:h-[500px] sm:p-10">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[24px] border-surface/10" />
              <div className="absolute right-10 top-16 h-24 w-24 rounded-full bg-gold/80" />
              <div className="relative max-w-xs">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Community first</p>
                <p className="mt-3 text-3xl font-bold leading-tight text-text-on-primary sm:text-4xl">People, dignity and participation.</p>
              </div>
            </div>

            {/* Small card */}
            <div className="absolute -bottom-13 right-2 rounded-2xl bg-surface p-4 shadow-xl sm:-bottom-7 sm:right-8 sm:p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Users className="text-primary" size={25} />
                </div>

                <div>
                  <p className="text-2xl font-bold text-primary-dark">Community</p>
                  <p className="text-sm text-text-muted">At the heart of our work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold leading-tight text-primary-dark sm:text-4xl lg:text-5xl">
              Creating space for people to be heard, included and respected.
            </h2>

            <p className="mt-6 leading-7 text-text-muted">
              Council of Minorities is committed to supporting marginalized
              communities and creating pathways towards equality, participation
              and social inclusion.
            </p>

            <p className="mt-4 leading-7 text-text-muted">
              Through community engagement, advocacy, awareness and practical
              initiatives, we work alongside people to understand challenges
              and develop meaningful solutions.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-primary underline transition-colors hover:text-primary-dark"
            >
              Learn more about us
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

        </div>
      </section>

    </>
  );
};

export default AboutSection;