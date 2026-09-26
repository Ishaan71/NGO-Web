"use client";

import { useState } from "react";

const PublicationNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect this later with your backend/email service.
    console.log(email);
  };

  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          Stay Connected
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">
          Get new publications and resources
        </h2>

        <p className="mt-3 text-sm leading-6 text-text-muted">
          Subscribe to receive updates when new research, publications, and
          resources become available.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="min-w-0 flex-1 rounded-md border border-border px-4 py-3 text-sm text-text outline-none placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-light"
          />

          <button
            type="submit"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default PublicationNewsletter;