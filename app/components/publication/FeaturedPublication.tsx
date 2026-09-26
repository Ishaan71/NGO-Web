import { ArrowRight, FileText } from "lucide-react";

const FeaturedPublication = () => {
  return (
    <section className="bg-background-alt px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-2xl border border-border bg-white lg:grid-cols-2">
          {/* Image / Cover */}
          <div className="flex min-h-[320px] items-center justify-center bg-primary-light p-10">
            <div className="flex h-56 w-44 items-center justify-center rounded-md bg-white shadow-md">
              <FileText size={56} className="text-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Featured Publication
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">
              Understanding Rights, Communities, and Social Change
            </h2>

            <p className="mt-4 text-sm leading-7 text-text-muted">
              Explore this featured resource to learn more about the issues,
              experiences, and approaches connected to our work.
            </p>

            <div className="mt-7">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark"
              >
                Read Publication
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPublication;