const ImpactCTA = () => {
  return (
    <section className="bg-accent px-6 py-16 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold text-text-on-accent md:text-3xl">
            Be part of creating meaningful change.
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-text-on-accent/80">
            Learn more about our work and how communities are building a more
            inclusive future.
          </p>
        </div>

        <a
          href="/contact"
          className="rounded-md bg-surface px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-gold hover:text-primary-dark"
        >
          Get Involved
        </a>
      </div>
    </section>
  );
};

export default ImpactCTA;