import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  HeartHandshake,
  Scale,
  Users,
} from "lucide-react";

const WhatWeDo = () => {
  return (
    <>
    {/* =====================================================
          WHAT WE DO
      ===================================================== */}
      <section className="bg-bg-alt px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              What We Do
            </p>

            <h2 className="text-3xl font-bold text-primary-dark sm:text-4xl lg:text-5xl">
              Turning community needs into meaningful action.
            </h2>

            <p className="mt-5 leading-7 text-text-muted">
              Our work focuses on strengthening communities, increasing
              awareness and creating opportunities for people to participate
              fully in society.
            </p>
          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
              <div className="group flex flex-col rounded-3xl bg-surface p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition group-hover:bg-primary">
                <Scale
                  size={28}
                  className="text-primary transition group-hover:text-text-on-primary"
                />
              </div>

              <h3 className="mt-7 text-xl font-bold text-primary-dark">
                Rights & Justice
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-text-muted">
                Promoting awareness of rights and supporting communities facing
                barriers to equality and justice.
              </p>

              <Link
                href="/what-we-do"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary underline transition-colors hover:text-primary-dark"
              >
                Explore
                <ChevronRight size={16} />
              </Link>
            </div>


            {/* Card 2 */}
            <div className="group flex flex-col rounded-3xl bg-surface p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 transition group-hover:bg-gold">
                <Users
                  size={28}
                  className="text-gold transition group-hover:text-text-on-primary"
                />
              </div>

              <h3 className="mt-7 text-xl font-bold text-primary-dark">
                Community Empowerment
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-text-muted">
                Working with communities to strengthen participation,
                leadership and access to opportunities.
              </p>

              <Link
                href="/what-we-do"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary underline transition-colors hover:text-primary-dark"
              >
                Explore
                <ChevronRight size={16} />
              </Link>
            </div>


            {/* Card 3 */}
            <div className="group flex flex-col rounded-3xl bg-surface p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-dark/10 transition group-hover:bg-primary-dark">
                <HeartHandshake
                  size={28}
                  className="text-primary-dark transition group-hover:text-text-on-primary"
                />
              </div>

              <h3 className="mt-7 text-xl font-bold text-primary-dark">
                Inclusion
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-text-muted">
                Building bridges between communities and creating more
                inclusive spaces for everyone.
              </p>

              <Link
                href="/what-we-do"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary underline transition-colors hover:text-primary-dark"
              >
                Explore
                <ChevronRight size={16} />
              </Link>
            </div>


            {/* Card 4 */}
            <div className="group flex flex-col rounded-3xl bg-surface p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition group-hover:bg-primary">
                <BookOpen
                  size={28}
                  className="text-primary transition group-hover:text-text-on-primary"
                />
              </div>

              <h3 className="mt-7 text-xl font-bold text-primary-dark">
                Awareness & Learning
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-text-muted">
                Sharing knowledge, resources and learning opportunities that
                help communities move forward.
              </p>

              <Link
                href="/what-we-do"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary underline transition-colors hover:text-primary-dark"
              >
                Explore
                <ChevronRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>


    </>
  );
};

export default WhatWeDo;