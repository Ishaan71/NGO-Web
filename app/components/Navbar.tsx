import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import MobileMenu from "./navbar/MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface shadow-sm">
      <nav className="mx-auto flex min-h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/Images/Com-logo.webp"
            alt="Council of Minorities logo"
            width={142}
            height={64}
            priority
            className="h-10 w-auto object-contain sm:h-11"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">

          <Link
            href="/"
            className="rounded-md px-2 py-2 text-[13px] font-semibold tracking-[0.04em] text-primary-dark transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            HOME
          </Link>

          {/* Who We Are */}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-1 rounded-md px-2 py-2 text-[13px] font-semibold tracking-[0.04em] text-primary-dark transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              WHO WE ARE
              <ChevronDown size={16} />
            </button>

            <div className="invisible absolute left-0 top-full mt-1 w-48 rounded-lg border border-border bg-surface p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">

              <Link
                href="/about"
                className="block rounded-md px-4 py-3 text-sm font-semibold text-text hover:bg-bg-alt hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                About Us
              </Link>

              <Link
                href="/our-team"
                className="block rounded-md px-4 py-3 text-sm font-semibold text-text hover:bg-bg-alt hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Our Team
              </Link>

            </div>
          </div>

          <Link
            href="/what-we-do"
            className="rounded-md px-2 py-2 text-[13px] font-semibold tracking-[0.04em] text-primary-dark transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            WHAT WE DO
          </Link>

          <Link
            href="/our-impact"
            className="rounded-md px-2 py-2 text-[13px] font-semibold tracking-[0.04em] text-primary-dark transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            OUR IMPACT
          </Link>

          <Link
            href="/publications"
            className="rounded-md px-2 py-2 text-[13px] font-semibold tracking-[0.04em] text-primary-dark transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            PUBLICATIONS
          </Link>


          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-2.5 text-[13px] font-semibold tracking-[0.04em] text-text-on-accent transition hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            CONTACT
          </Link>

        </div>

        {/* Mobile Menu */}
        <MobileMenu />

      </nav>
    </header>
  );
}