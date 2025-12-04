"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Countdown from "@/components/Countdown";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import PostersSection from "@/components/PostersSection";
import ExhibitorsMarquee from "@/components/ExhibitorsMarquee";
import RegistrationModal from "@/components/RegistrationModal";
import { EVENT_CONFIG, VENUE_MAP_URL } from "@/lib/constants";

export default function HomePage() {
  const [showRegModal, setShowRegModal] = useState(false);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[550px] flex items-center justify-center bg-navy text-white overflow-hidden">
        {/* Poster background */}
        <div className="absolute inset-0 opacity-[0.5]">
          <Image
            src="/recongress2025/assets/logos/re-congress-poster.avif"
            alt="RE Congress 2025 Poster Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-teal to-primary"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-poppins border border-white/10">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {EVENT_CONFIG.dates}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-klein mb-6 leading-tight tracking-tight">
            {EVENT_CONFIG.name}
          </h1>
          
          <h2 className="sr-only">Philippines Renewable Energy Summit</h2>

          <p className="text-lg md:text-xl font-poppins font-light max-w-3xl mx-auto mb-8 text-white/80 leading-relaxed">
            {EVENT_CONFIG.theme}
          </p>

          <div className="flex items-center justify-center gap-2 text-white/70 mb-8">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            <span className="font-poppins text-sm">
              {EVENT_CONFIG.venue}, {EVENT_CONFIG.city}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={() => setShowRegModal(true)}
              variant="primary"
              size="lg"
            >
              Register for Congress
            </Button>
            <Button
              href="/activities"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white group"
            >
              <span className="group-hover:text-navy text-white transition-colors">
                View Activities
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <Countdown />

      {/* CTA Buttons Row */}
      <section className="py-10 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <CTACard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
              title="Concept Note"
              href="https://tinyurl.com/RECongress2025ConceptNote"
            />
            <CTACard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Programme"
              href="https://tinyurl.com/RECongress2025Programme"
            />
            <CTACard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              }
              title="Registration"
              href="https://tinyurl.com/RECongress2025"
            />
            <CTACard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              }
              title="Activities"
              href="/activities"
            />
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-16 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About RE Congress 2025"
            subtitle="The Philippines' Premier Platform for Just Energy Transition"
            centered
          />

          <div className="max-w-3xl mx-auto font-public-sans">
            <p className="text-gray-600 leading-relaxed mb-4">
              The{" "}
              <strong className="text-navy">
                8th Renewable Energy Congress & Exhibit 2025
              </strong>{" "}
              is the premier national platform for advancing the
              Philippines&apos; just energy transition and achieving the 35%
              renewable energy target by 2030. Hosted in Iloilo City—a leading
              hub for community-based renewable energy—this congress drives
              dialogue on grid modernization, energy resilience, and sustainable
              development.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Join 200+ renewable energy leaders, policymakers, investors, and
              innovators from government, energy industry, financial
              institutions, academe, and civil society. Together, we address
              critical challenges in RE financing, microgrids and energy
              storage, green jobs creation, and circular economy strategies for
              a cleaner, more resilient Philippines.
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <StatCard number="200+" label="Participants" />
              <StatCard number="30+" label="Expert Speakers" />
              <StatCard number="7+" label="RE Exhibitors" />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-light" aria-labelledby="venue-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Venue Location"
            subtitle={`${EVENT_CONFIG.venue}, ${EVENT_CONFIG.city} — Western Visayas' Premier Event Facility`}
            centered
          />

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src={VENUE_MAP_URL}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Iloilo Convention Center location map for RE Congress 2025"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 font-public-sans mb-4 text-sm max-w-2xl mx-auto">
              The Iloilo Convention Center is Western Visayas&apos; world-class
              venue for large-scale conferences and exhibitions, strategically
              located in one of the Philippines&apos; most progressive renewable
              energy regions.
            </p>
            <a
              href="https://maps.app.goo.gl/YgHTyKowdgBeqWt66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-poppins font-medium text-sm transition-colors"
            >
              Get Directions
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Event Posters */}
      <PostersSection />

      {/* Co-Organizers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Co-Organizers" centered />

          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-12 max-w-5xl mx-auto">
            <Image
              src="/recongress2025/assets/logos/co-organizers-logo.png"
              alt="CentRE, IPG, ICSC, CPU"
              width={560}
              height={560}
              className="h-auto shrink-0"
            />
          </div>
        </div>
      </section>
      {/* Support Organizations */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="With Support Of" centered />

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-7 max-w-5xl mx-auto">
            <Image
              src="/recongress2025/assets/logos/cpii-logo.jpg"
              alt="Center for Power Issues and Initiatives"
              width={70}
              height={70}
              className="h-auto shrink-0"
            />
            <Image
              src="/recongress2025/assets/logos/crest-logo.png"
              alt="Center for Renewable Energy and Sustainable Technology"
              width={150}
              height={150}
              className="h-auto shrink-0"
            />
            <Image
              src="/recongress2025/assets/logos/forum-for-the-future-logo.png"
              alt="Forum for the Future"
              width={110}
              height={110}
              className="h-auto shrink-0"
            />
            <Image
              src="/recongress2025/assets/logos/fes-logo.png"
              alt="Friedrich Ebert Stiftung"
              width={90}
              height={90}
              className="h-auto shrink-0"
            />
            <Image
              src="/recongress2025/assets/logos/galing-pook-logo.png"
              alt="Galing Pook Foundation"
              width={115}
              height={115}
              className="h-auto shrink-0"
            />
            <Image
              src="/recongress2025/assets/logos/oxfam-ph-logo.png"
              alt="Oxfam Philippines"
              width={105}
              height={105}
              className="h-auto shrink-0"
            />
            <Image
              src="/recongress2025/assets/logos/rebootph-logo.png"
              alt="Reboot Philippines"
              width={140}
              height={140}
              className="h-auto shrink-0"
            />
            <Image
              src="/recongress2025/assets/logos/rei-ph-logo.png"
              alt="Responsible Energy Initiative Philippines"
              width={150}
              height={150}
              className="h-auto shrink-0"
            />
            <Image
              src="/recongress2025/assets/logos/wise-logo.png"
              alt="Women in Inclusive and Sustainable Energy, and Just Transition"
              width={90}
              height={90}
              className="h-auto shrink-0"
            />
          </div>
        </div>
      </section>

      {/* RE Exhibitors Marquee */}
      <ExhibitorsMarquee />

      {/* Registration CTA */}
      <section
        id="register"
        className="py-16 bg-navy text-white"
        aria-labelledby="register-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <span
              className="w-2 h-2 bg-primary rounded-full"
              aria-hidden="true"
            ></span>
            Registration Open
          </div>

          <h2
            id="register-heading"
            className="text-3xl md:text-4xl font-klein mb-4"
          >
            Join the Philippines&apos; Premier Renewable Energy Congress
          </h2>
          <p className="text-lg font-poppins mb-8 text-white/70 max-w-xl mx-auto">
            Be part of the movement accelerating the just energy transition.
            Connect with RE leaders, explore green jobs, and discover financing
            opportunities for sustainable energy development.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={() => setShowRegModal(true)}
              variant="primary"
              size="lg"
            >
              Register as Participant
            </Button>
            <Button
              onClick={() => setShowRegModal(true)}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-navy"
            >
              Exhibitor Registration
            </Button>
          </div>
        </div>
      </section>

      <RegistrationModal
        isOpen={showRegModal}
        onClose={() => setShowRegModal(false)}
      />
    </>
  );
}

function CTACard({
  icon,
  title,
  href,
  highlighted = false,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
  highlighted?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-xl p-4 md:p-5 transition-all duration-200 hover:-translate-y-0.5 flex flex-col items-center text-center gap-2 ${
        highlighted
          ? "bg-primary text-white shadow-md hover:shadow-lg"
          : "bg-white text-navy shadow-sm hover:shadow-md border border-gray-100"
      }`}
    >
      <div className={highlighted ? "text-white" : "text-primary"}>{icon}</div>
      <div className="font-poppins font-medium text-sm">{title}</div>
    </Link>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-5 bg-light rounded-xl">
      <div className="text-2xl md:text-3xl font-klein text-primary mb-1">
        {number}
      </div>
      <div className="font-poppins text-xs text-gray-500">{label}</div>
    </div>
  );
}
