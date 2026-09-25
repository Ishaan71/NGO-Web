import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <>
     {/* =====================================================
          CALL TO ACTION
      ===================================================== */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-accent px-7 py-14 sm:px-12 lg:px-16 lg:py-16">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-surface/10" />
          <div className="absolute -bottom-32 right-32 h-80 w-80 rounded-full bg-gold/20" />

          <div className="relative max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-text-on-accent/70">
              Be Part of the Change
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-text-on-accent sm:text-4xl lg:text-5xl">
              Together, we can build more inclusive communities.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-text-on-accent/80">
              Whether you want to learn more about our work, collaborate with
              us or support community initiatives, there is a place for you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-surface px-7 py-3.5 font-semibold text-accent transition-colors hover:bg-gold hover:text-primary-dark"
              >
                Get Involved
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-surface/40 px-7 py-3.5 font-semibold text-text-on-accent transition-colors hover:bg-surface/15"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>
      </section>

    </> 
  );
};

export default CallToAction;