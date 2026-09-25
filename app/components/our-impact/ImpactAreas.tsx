const ImpactAreas = () => {
  const areas = [
    {
      number: "01",
      title: "Citizenship & Documentation",
      description:
        "Working with communities to secure the documents and recognition needed to establish citizenship and access basic rights.",
    },
    {
      number: "02",
      title: "Legal Empowerment",
      description:
        "Supporting community paralegals and their clients to understand their rights and challenge injustice.",
    },
    {
      number: "03",
      title: "Health & Environment",
      description:
        "Challenging broken health systems and addressing unlawful pollution that affects communities.",
    },
    {
      number: "04",
      title: "Community Rights",
      description:
        "Working alongside communities that have experienced exclusion, discrimination, and unequal access to systems.",
    },
  ];

  return (
    <section className="bg-surface px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Areas of Impact
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-primary-dark">
            Turning community action into lasting change.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {areas.map((area) => (
            <article key={area.number} className="bg-surface p-8">
              <span className="text-sm font-semibold text-primary">
                {area.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-primary-dark">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-muted">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAreas;