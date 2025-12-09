"use client";

import Image from "next/image";

interface Exhibitor {
  name: string;
  logo: string;
  width?: number;
  height?: number;
}

const EXHIBITORS: Exhibitor[] = [
  {
    name: "Sky Bright New Energy",
    logo: "/recongress2025/assets/logos/sbne-logo.png",
    width: 140,
    height: 80,
  },
  {
    name: "Land Bank of the Philippines",
    logo: "/recongress2025/assets/logos/lbp-logo.png",
    width: 115,
    height: 80,
  },
];

const MIN_ITEMS = 6;
const marqueeItems =
  EXHIBITORS.length >= MIN_ITEMS
    ? EXHIBITORS
    : Array.from({ length: Math.ceil(MIN_ITEMS / EXHIBITORS.length) })
        .flatMap(() => EXHIBITORS)
        .slice(0, MIN_ITEMS);

export default function ExhibitorsMarquee() {
  return (
    <section
      className="py-12 bg-light overflow-hidden"
      aria-label="RE Exhibitors and Partners"
    >
      <div className="mb-8 text-center">
        <p className="text-xs font-poppins text-primary uppercase tracking-widest mb-2">
          Featured Partners
        </p>
        <h3 className="text-xl md:text-2xl font-klein text-navy">
          Renewable Energy Exhibitors &amp; Partners
        </h3>
      </div>

      <div className="relative">
        <div className="flex animate-marquee gap-12 px-8">
          {[...marqueeItems, ...marqueeItems].map((exhibitor, index) => (
            <div
              key={`${exhibitor.name}-${index}`}
              className="shrink-0 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Image
                src={exhibitor.logo}
                alt={exhibitor.name}
                width={exhibitor.width || 120}
                height={exhibitor.height || 80}
                className="h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
