"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

interface Poster {
  id: string;
  title: string;
  image: string;
  description?: string;
}

const POSTERS: Poster[] = [
  {
    id: "poster-1",
    title: "RE Congress 2025 Main Poster",
    image: "/recongress2025/assets/posters/re-congress-2025-poster.avif",
    description:
      "Official event poster highlighting the congress theme and key details.",
  },
  {
    id: "poster-2",
    title: "Deep Dive Sessions",
    image: "/recongress2025/assets/posters/deep-dive.jpg",
    description:
      "Information about technical deep-dive sessions and workshops.",
  },
  {
    id: "poster-3",
    title: "RE Exhibit & Fairs",
    image: "/recongress2025/assets/posters/exhibit.jpg",
    description:
      "Details about the RE Exhibit, Green Jobs Fair, and RE Finance Fair.",
  },
  {
    id: "poster-4",
    title: "Consultation Sessions",
    image: "/recongress2025/assets/posters/consultation.jpg",
    description: "Book your consultation with RE experts during the congress.",
  },
];

interface PostersSectionProps {
  sectionId?: string;
}

export default function PostersSection({ sectionId }: PostersSectionProps) {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);

  return (
    <>
      <section id={sectionId} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-klein text-navy mb-2">
              Event Materials
            </h2>
            <p className="text-sm text-gray-500 font-poppins">
              Click to view details
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {POSTERS.map((poster) => (
              <button
                key={poster.id}
                onClick={() => setSelectedPoster(poster)}
                className="group relative aspect-4/5 rounded-xl overflow-hidden bg-light border border-gray-100 hover:shadow-md transition-all duration-200"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-primary"
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
                  </div>
                  <p className="text-sm text-navy font-poppins font-medium text-center">
                    {poster.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedPoster && (
        <Modal
          isOpen={!!selectedPoster}
          onClose={() => setSelectedPoster(null)}
          title={selectedPoster.title}
          size="lg"
        >
          <div className="space-y-4">
            <div className="w-full bg-white rounded-xl overflow-hidden border border-gray-100">
              <Image
                src={selectedPoster.image}
                alt={selectedPoster.title}
                width={1200}
                height={800}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            {selectedPoster.description && (
              <p className="text-sm text-gray-600 font-public-sans">
                {selectedPoster.description}
              </p>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}
