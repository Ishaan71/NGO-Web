const ResearchCTA = () => {
  return (
    <section className="bg-primary px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Looking for a specific resource?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-primary-light">
              Get in touch with our team if you are looking for a publication,
              report, or resource that you cannot find here.
            </p>
          </div>

          <a
            href="/contact"
            className="shrink-0 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary-light"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchCTA;