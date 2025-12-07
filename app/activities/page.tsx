import type { Metadata } from "next";
import SessionCard from "@/components/SessionCard";
import Link from "next/link";
import { DAY_1_SESSIONS, DAY_2_SESSIONS, DEC_13_EVENTS } from "@/lib/data";
import { EVENT_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Programme & Activities | RE Congress 2025 Philippines",
  description:
    "Explore the full programme of RE Congress 2025 in Iloilo City. Two days of keynotes, panels, and deep dives on just energy transition, grid modernization, RE financing, community renewables, and green jobs in the Philippines.",
  keywords: [
    "RE Congress 2025 programme",
    "renewable energy conference schedule",
    "just energy transition panels",
    "grid modernization Philippines",
    "RE financing sessions",
    "green jobs training",
    "community renewable energy",
  ],
  openGraph: {
    title: "RE Congress 2025 Programme | Full Schedule of Activities",
    description:
      "Two days of expert panels, keynotes, and deep dives on renewable energy, grid resilience, and sustainable development in the Philippines.",
    type: "website",
  },
};

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-light">
      {/* Page Header */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-poppins font-medium mb-2">
              {EVENT_CONFIG.dates}
            </p>
            <h1 className="text-3xl md:text-4xl font-klein mb-3">
              RE Congress 2025 Programme & Activities
            </h1>
            <p className="text-base font-poppins text-white/70">
              Expert panels, deep dives, and sessions on just energy transition,
              grid modernization, and renewable energy financing at{" "}
              {EVENT_CONFIG.venue}, {EVENT_CONFIG.city}
            </p>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard
              title="Day 1"
              subtitle="December 11, 2025"
              items={[
                "Opening Ceremonies, Keynote & Fire Side Chat",
                "Iloilo Declaration",
                "Regional-National JET Reports",
                "LGU Dialogue-Convening on JET",
                "Panel on Local RE Action Leadership",
                "Consult-an-RE Expert–aDviser (CREED)",
                "RE Exhibit and Green Jobs-Finance Fair",
              ]}
              color="primary"
            />
            <InfoCard
              title="Day 2"
              subtitle="December 12, 2025"
              items={[
                "3 Deep Dive Sessions",
                "Grid Operations Panel",
                "RE Financing Panel",
                "Consult-an-RE Expert–aDviser (CREED)",
                "RE Exhibit and Green Jobs-Finance Fair",
              ]}
              color="navy"
            />
            <InfoCard
              title="December 13"
              subtitle="Post-Congress Events"
              items={[
                "Wind Energy Seminar",
                "RE Academy Graduation",
                "Women's RE Training",
              ]}
              color="teal"
            />
          </div>
        </div>
      </section>

      {/* Day 1 Schedule */}
      <section className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-10 bg-primary rounded-full"></div>
              <div>
                <h2 className="text-2xl font-klein text-navy">Day 1</h2>
                <p className="text-sm font-poppins text-gray-500">
                  December 11, 2025 • Opening, Keynote & Regional Reports
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {DAY_1_SESSIONS.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </div>
      </section>

      {/* Day 2 Schedule */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-10 bg-navy rounded-full"></div>
              <div>
                <h2 className="text-2xl font-klein text-navy">Day 2</h2>
                <p className="text-sm font-poppins text-gray-500">
                  December 12, 2025 • Deep Dives, Panels & CREED
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {DAY_2_SESSIONS.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </div>
      </section>

      {/* December 13 Events */}
      <section className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-10 bg-teal rounded-full"></div>
              <div>
                <h2 className="text-2xl font-klein text-navy">
                  December 13, 2025
                </h2>
                <p className="text-sm font-poppins text-gray-500">
                  Post-Congress Training & Ceremonies
                </p>
              </div>
            </div>
            <div className="bg-amber-50 border-l-2 border-amber-400 p-3 rounded-r-lg mt-4">
              <p className="text-xs font-public-sans text-gray-600">
                <strong>Note:</strong> These events require separate
                registration.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {DEC_13_EVENTS.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-klein text-navy mb-4 text-center">
            Session Types
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <LegendItem label="Plenary" />
            <LegendItem label="Panel" />
            <LegendItem label="Deep Dive" />
            <LegendItem label="Message" />
            <LegendItem label="Break" />
            <LegendItem label="Exhibit" />
            <LegendItem label="Ceremony" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 bg-navy text-white"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-klein mb-3">
            Ready to Shape the Philippines&apos; Energy Future?
          </h2>
          <p className="text-sm font-poppins mb-6 text-white/70">
            Register now for RE Congress 2025 and join the movement accelerating
            the just energy transition in Iloilo City
          </p>
          <Link
            href="/#register"
            className="inline-block px-6 py-3 bg-primary text-white font-poppins font-medium rounded-xl hover:bg-primary-dark transition-colors text-sm"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  title,
  subtitle,
  items,
  color,
}: {
  title: string;
  subtitle: string;
  items: string[];
  color: string;
}) {
  const colorClasses: Record<string, string> = {
    primary: "bg-primary",
    navy: "bg-navy",
    teal: "bg-teal",
  };

  return (
    <div className={`${colorClasses[color]} text-white rounded-xl p-5`}>
      <h3 className="text-xl font-klein mb-0.5">{title}</h3>
      <p className="text-xs font-poppins mb-3 text-white/70">{subtitle}</p>
      <ul className="space-y-1.5">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm font-public-sans text-white/90"
          >
            <svg
              className="w-3.5 h-3.5 shrink-0 text-white/60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LegendItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-light rounded-full">
      <span className="w-2 h-2 bg-primary rounded-full"></span>
      <span className="text-xs font-poppins text-gray-600">{label}</span>
    </div>
  );
}
