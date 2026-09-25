const ImpactStories = () => {
  const stories = [
    {
      image: "/Images/impact-1.jpg",
      title: "Supporting communities to secure their rights",
      description:
        "Community-led work can help people navigate systems that have historically excluded them.",
    },
    {
      image: "/Images/impact-2.jpg",
      title: "Building legal empowerment",
      description:
        "Community paralegals can play an important role in helping people understand and pursue their rights.",
    },
    {
      image: "/Images/impact-3.jpg",
      title: "Standing with affected communities",
      description:
        "Our work addresses challenges affecting access to health, documentation, justice, and a safe environment.",
    },
  ];

  return (
    <section className="bg-surface px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Stories of Change
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-primary-dark">
          Impact through community-led action.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
            >
              <img
                src={story.image}
                alt=""
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary-dark">
                  {story.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-muted">
                  {story.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;