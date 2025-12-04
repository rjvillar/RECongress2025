"use client";

const EXHIBITORS = [
  { name: "Solar Energy Developer", initials: "SED" },
  { name: "Wind Power Solutions", initials: "WPS" },
  { name: "Microgrid Technologies", initials: "MGT" },
  { name: "Energy Storage Systems", initials: "ESS" },
  { name: "RE Financing Partner", initials: "RFP" },
  { name: "Green Grid Innovations", initials: "GGI" },
  { name: "Sustainable Power Corp", initials: "SPC" },
];

export default function ExhibitorsMarquee() {
  return (
    <section
      className="py-10 bg-navy overflow-hidden"
      aria-label="RE Exhibitors and Partners"
    >
      <div className="mb-6 text-center">
        <p className="text-xs font-poppins text-primary uppercase tracking-widest mb-1">
          Featured at RE Congress 2025
        </p>
        <h3 className="text-xl md:text-2xl font-klein text-white">
          Renewable Energy Exhibitors &amp; Partners
        </h3>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {[...EXHIBITORS, ...EXHIBITORS].map((exhibitor, index) => (
            <div
              key={`${exhibitor.name}-${index}`}
              className="shrink-0 mx-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-w-40 hover:bg-white/15 transition-colors"
            >
              <div className="flex flex-col items-center justify-center h-full gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-klein text-lg font-bold">
                    {exhibitor.initials}
                  </span>
                </div>
                <p className="font-poppins font-medium text-white/90 text-xs text-center">
                  {exhibitor.name}
                </p>
              </div>
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
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}