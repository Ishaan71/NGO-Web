import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function TeamCTA() {
  return (
    <section className="bg-primary-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Work with us
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-text-on-primary sm:text-5xl lg:text-6xl">
              Change starts when people work together.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-light">
              Whether through community engagement, partnership, advocacy or
              learning, there are different ways to connect with the work of
              Council of Minorities.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-accent px-7 py-4 font-bold text-text-on-accent transition-colors hover:bg-gold hover:text-primary-dark"
          >
            Get in touch
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-dark text-text-on-primary transition group-hover:translate-x-1">
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </div>

        <div className="mt-16 border-t border-primary/30 pt-6">
          <p className="text-sm text-primary-light/40">
            Council of Minorities · Community · Rights · Inclusion
          </p>
        </div>
      </div>
    </section>
  );
}