const ImpactStats = () => {
  const stats = [
    {
      value: "01",
      label: "Global legal empowerment network",
    },
    {
      value: "04",
      label: "Key areas of community action",
    },
    {
      value: "∞",
      label: "Commitment to community-led change",
    },
  ];

  return (
    <section className="border-y border-border bg-bg-alt px-6 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-semibold text-primary">
              {stat.value}
            </p>

            <p className="mt-2 max-w-xs text-sm leading-6 text-text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;