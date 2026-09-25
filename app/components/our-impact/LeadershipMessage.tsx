import { Quote } from "lucide-react";

const LeadershipMessage = () => {
  return (
    <section className="bg-bg-alt px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-text-on-primary">
              <Quote size={26} />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              A Message From Khalid Hussain
            </p>
          </div>

          <blockquote className="max-w-4xl border-l-4 border-gold pl-6 md:pl-10">
          <p className="text-2xl font-bold leading-tight text-primary-dark md:text-4xl">
            We are engaged in a vital struggle, in a brutal time. With
            authoritarianism and nativism rising, Council of Minorities is
            always fighting to protect basic rights.
          </p>

          <p className="mt-8 text-base leading-8 text-text-muted">
            We are working with communities who have been vilified and
            excluded to secure the documents that prove their citizenship. We
            are challenging broken health systems and unlawful pollution. We
            proved that community paralegals and their clients can take on some
            of the toughest forms of injustice and win. And we built the first
            global network dedicated to legal empowerment.
          </p>

          <p className="mt-6 text-base leading-8 text-text-muted">
            We are called in this moment to do much more. Our world is
            profoundly unequal. Authoritarians are responding to this
            inequality by scapegoating minorities and promising to turn systems
            upside down.
          </p>

          <p className="mt-6 text-base leading-8 text-text-muted">
            We have an alternative: deepening democracy rather than giving up
            on it. Transforming institutions rather than abandoning them.
            Succeeding in this struggle is going to require much more of us,
            from many more of us. I hope all of you will be a part of it.
          </p>
          </blockquote>

          <div className="lg:col-start-2 pl-6 md:pl-10">
            <p className="text-sm text-text-muted">With love and respect</p>
            <p className="mt-1 font-bold text-primary-dark">Khalid Hussain</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessage;