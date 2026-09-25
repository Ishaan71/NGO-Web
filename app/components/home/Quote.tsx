import { Quote as QuoteIcon } from "lucide-react";

const Quote = () => {
  return (
    <>
    {/* =====================================================
          QUOTE / VALUES
      ===================================================== */}
      <section className="bg-bg-alt px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">

          <QuoteIcon size={42} className="mx-auto text-gold" />

          <blockquote className="mt-6 text-2xl font-semibold leading-relaxed text-primary-dark sm:text-3xl lg:text-4xl">
            “A more inclusive society begins when every person has the
            opportunity to participate, be heard and live with dignity.”
          </blockquote>

          <div className="mx-auto mt-7 h-1 w-12 rounded-full bg-primary" />

        </div>
      </section>

    </>
  );
};

export default Quote;