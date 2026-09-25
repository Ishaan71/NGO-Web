import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-text-on-primary">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-bold tracking-tight">
                Council of Minorities
              </h2>

              <div className="mt-2 h-1 w-12 rounded-full bg-gold" />
            </div>

            <p className="max-w-sm text-sm leading-7 text-primary-light">
              Council of Minorities works to promote equality, inclusion,
              rights and opportunities for minority communities through
              advocacy, awareness, community empowerment and access to justice.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface/20 text-primary-light transition hover:bg-surface hover:text-primary-dark"
              >
                <span className="text-sm font-bold" aria-hidden="true">f</span>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface/20 text-primary-light transition hover:bg-surface hover:text-primary-dark"
              >
                <span className="text-xs font-bold" aria-hidden="true">ig</span>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface/20 text-primary-light transition hover:bg-surface hover:text-primary-dark"
              >
                <span className="text-xs font-bold" aria-hidden="true">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-primary-light">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 transition hover:text-bg"
                >
                  <ArrowRight size={14} />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-2 transition hover:text-bg"
                >
                  <ArrowRight size={14} />
                  Who We Are
                </Link>
              </li>

              <li>
                <Link
                  href="/what-we-do"
                  className="flex items-center gap-2 transition hover:text-bg"
                >
                  <ArrowRight size={14} />
                  What We Do
                </Link>
              </li>

              <li>
                <Link
                  href="/our-impact"
                  className="flex items-center gap-2 transition hover:text-bg"
                >
                  <ArrowRight size={14} />
                  Our Impact
                </Link>
              </li>

              <li>
                <Link
                  href="/publications"
                  className="flex items-center gap-2 transition hover:text-bg"
                >
                  <ArrowRight size={14} />
                  Publications & Resources
                </Link>
              </li>

              <li>
                <Link
                  href="/career"
                  className="flex items-center gap-2 transition hover:text-bg"
                >
                  <ArrowRight size={14} />
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas of Work */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Areas of Work
            </h3>

            <ul className="space-y-3 text-sm text-primary-light">
              <li>Minority Rights</li>
              <li>Community Empowerment</li>
              <li>Access to Justice</li>
              <li>Human Rights Advocacy</li>
              <li>Social Inclusion</li>
              <li>Legal Awareness</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm text-primary-light">

              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-gold"
                />

                <p className="leading-6">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-gold"
                />

                <a
                  href="tel:"
                    className="transition hover:text-bg"
                >
                  Contact Office
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-gold"
                />

                <a
                  href="mailto:"
                    className="transition hover:text-bg"
                >
                  Email Us
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-primary-light sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} Council of Minorities. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-bg"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-bg"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}