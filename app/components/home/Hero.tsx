import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <>
    
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-primary-dark sm:min-h-[680px]">
        <div className="absolute inset-0 -z-10 bg-primary-dark" />
        <div className="absolute -right-24 top-16 -z-10 h-80 w-80 rounded-full border-[40px] border-surface/10 sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute -bottom-36 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full border-[32px] border-gold/20 sm:h-[30rem] sm:w-[30rem]" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:min-h-[680px] sm:px-8 lg:px-10">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface/20 bg-surface/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="text-sm font-medium text-text-on-primary/90">
                Working for dignity, equality & inclusion
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-bg sm:text-5xl lg:text-7xl">
              Building a future where{" "}
              <span className="text-gold">everyone belongs.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-primary-light sm:text-lg sm:leading-8">
              Council of Minorities works with communities to promote dignity,
              equality, inclusion and access to rights for people who have
              historically faced barriers and exclusion.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/what-we-do"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-text-on-primary transition-colors duration-300 hover:bg-primary-dark"
              >
                Discover Our Work
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-bg bg-surface/10 px-7 py-3.5 font-semibold text-bg backdrop-blur-sm transition-colors duration-300 hover:bg-bg hover:text-primary-dark"
              >
                Who We Are
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-bg [clip-path:ellipse(65%_55%_at_50%_100%)]" />
      </section>
    </>
  );
};

export default Hero;