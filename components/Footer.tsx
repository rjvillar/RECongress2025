import Link from "next/link";
import Image from "next/image";
import { EVENT_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-navy text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Event Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/recongress2025/assets/logos/re-congress-footer.png"
                alt="8th Renewable Energy Congress & Exhibit 2025 - Iloilo City, Philippines"
                width={300}
                height={300}
              />
            </div>
            <p className="text-sm text-gray-300 mb-3 leading-relaxed">
              The Philippines&apos; premier renewable energy conference
              advancing just energy transition, grid modernization, and
              sustainable development.
            </p>
            <div className="space-y-1">
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <time dateTime="2025-12-11">{EVENT_CONFIG.dates}</time>
              </p>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {EVENT_CONFIG.venue}, {EVENT_CONFIG.city}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-poppins font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Return to RE Congress 2025 Home
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Explore the Programme &amp; Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/consultation"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Join the CREED Expert Consultations
                </Link>
              </li>
              <li>
                <a
                  href="https://tinyurl.com/RECongress2025"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Complete the Participant Registration Form
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-poppins font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <p className="text-sm text-gray-300 mb-3">
              For RE Congress 2025 inquiries and registration support:
            </p>
            <a
              href={`mailto:${EVENT_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
              aria-label="Email RE Congress 2025 organizers"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {EVENT_CONFIG.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} {EVENT_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Center for Empowerment, iNnovation, and Training on Renewable
              Energy (CentRE)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
