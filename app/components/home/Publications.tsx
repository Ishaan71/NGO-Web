import Link from "next/link";
import { ArrowRight, BookOpen, ChevronRight, Users } from "lucide-react";

const Publications = () => {
  return (
    <>
    {/* =====================================================
          PUBLICATIONS / RESOURCES
      ===================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Resources
              </p>

              <h2 className="text-3xl font-bold text-primary-dark sm:text-4xl">
                Knowledge that creates awareness.
              </h2>
            </div>

            <Link
              href="/publications"
              className="group inline-flex items-center gap-2 font-semibold text-primary underline transition-colors hover:text-primary-dark"
            >
              View all resources
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-lg">

              <div className="flex h-52 items-end bg-primary-dark p-6 text-text-on-primary">
                <BookOpen size={54} strokeWidth={1.5} className="text-gold" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Publication
                </p>

                <h3 className="mt-3 flex-1 text-xl font-bold text-primary-dark">
                  Research, reports & community resources
                </h3>

                <Link
                  href="/publications"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary underline transition-colors hover:text-primary-dark"
                >
                  Read more
                  <ChevronRight size={16} />
                </Link>
              </div>

            </article>


            <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-lg">

              <div className="flex h-52 items-end bg-primary p-6 text-text-on-primary">
                <Users size={54} strokeWidth={1.5} />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Resources
                </p>

                <h3 className="mt-3 flex-1 text-xl font-bold text-primary-dark">
                  Learning materials and useful information
                </h3>

                <Link
                  href="/publications"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary underline transition-colors hover:text-primary-dark"
                >
                  Explore
                  <ChevronRight size={16} />
                </Link>
              </div>

            </article>


            <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-lg">

              <div className="flex h-52 items-end bg-gold p-6 text-primary-dark">
                <Users size={54} strokeWidth={1.5} />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Stories
                </p>

                <h3 className="mt-3 flex-1 text-xl font-bold text-primary-dark">
                  Voices and stories from communities
                </h3>

                <Link
                  href="/publications"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary underline transition-colors hover:text-primary-dark"
                >
                  Discover
                  <ChevronRight size={16} />
                </Link>
              </div>

            </article>

          </div>
        </div>
      </section>
    </>
  );
};

export default Publications;