import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-on-accent">
              Get Involved
            </p>

            <h2 className="text-3xl font-bold text-text-on-accent sm:text-4xl">
              Be part of a more inclusive future.
            </h2>

            <p className="mt-4 leading-7 text-text-on-accent/80">
              Learn more about our work, explore our resources or connect with
              Council of Minorities.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-surface px-7 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-gold hover:text-primary-dark"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}