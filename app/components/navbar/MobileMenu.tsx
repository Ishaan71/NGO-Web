"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-11 w-11 items-center justify-center rounded-md text-primary-dark transition hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`absolute left-0 top-full w-full border-t border-border bg-surface shadow-md transition-[opacity,transform] duration-200 ease-out lg:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
          <div className="flex flex-col gap-1 px-6 py-5">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-md px-4 py-3 font-semibold text-primary-dark hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              HOME
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-md px-4 py-3 font-semibold text-primary-dark hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              ABOUT US
            </Link>

            <Link
              href="/our-team"
              onClick={closeMenu}
              className="rounded-md px-4 py-3 font-semibold text-primary-dark hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              OUR TEAM
            </Link>

            <Link
              href="/what-we-do"
              onClick={closeMenu}
              className="rounded-md px-4 py-3 font-semibold text-primary-dark hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              WHAT WE DO
            </Link>

            <Link
              href="/our-impact"
              onClick={closeMenu}
              className="rounded-md px-4 py-3 font-semibold text-primary-dark hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              OUR IMPACT
            </Link>

            <Link
              href="/publications"
              onClick={closeMenu}
              className="rounded-md px-4 py-3 font-semibold text-primary-dark hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              PUBLICATIONS & RESOURCES
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center font-semibold text-text-on-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              CONTACT
            </Link>

          </div>
      </div>
    </>
  );
}