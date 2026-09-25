import {
  MessageSquareText,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function CommunityDialogue() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[2rem] bg-accent px-7 py-12 sm:px-12 lg:px-16 lg:py-16">

          {/* Decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-surface/10" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary-dark/10" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="max-w-3xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface/15 text-text-on-accent">
                <MessageSquareText size={26} />
              </div>

              <h2 className="mt-7 text-3xl font-bold text-text-on-accent sm:text-4xl">
                Creating space for communities to be heard.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-text-on-accent/75">
                Dialogue helps communities bring challenges into the open,
                identify priorities and work with others towards practical
                solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-text-on-accent">
                <span className="flex items-center gap-2">
                  <Users size={18} />
                  Community voices
                </span>

                <span className="flex items-center gap-2">
                  <MessageSquareText size={18} />
                  Dialogue
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-surface px-6 py-3.5 font-semibold text-accent transition-colors hover:bg-gold hover:text-primary-dark"
            >
              Start a Conversation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}