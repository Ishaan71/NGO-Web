import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhatWeDoCTA() {
  return (
    <section className="bg-bg-alt px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          Get Involved
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-primary-dark sm:text-5xl">
          Change becomes stronger when we work together.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-text-muted">
          Whether you are a community member, partner, volunteer or
          organization, there are meaningful ways to contribute to a more
          inclusive society.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-text-on-primary transition hover:bg-primary-dark"
          >
            Get Involved
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/our-impact"
            className="rounded-full border border-primary bg-surface px-7 py-3.5 font-semibold text-primary transition hover:bg-primary hover:text-text-on-primary"
          >
            View Our Impact
          </Link>
        </div>

      </div>
    </section>
  );
}