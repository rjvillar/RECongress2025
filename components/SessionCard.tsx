"use client";

import { useState } from "react";
import { Session, Speaker } from "@/lib/data";
import SpeakerModal from "./SpeakerModal";
import { cn } from "@/lib/utils";

interface SessionCardProps {
  session: Session;
}

const sessionTypeColors = {
  plenary: "border-primary bg-primary/5",
  panel: "border-navy bg-navy/5",
  "deep-dive": "border-teal bg-teal/5",
  message: "border-amber-400 bg-amber-50",
  break: "border-gray-200 bg-gray-50",
  exhibit: "border-primary bg-primary/5",
  ceremony: "border-navy bg-navy/5",
};

export default function SessionCard({ session }: SessionCardProps) {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const allSpeakers = [
    ...(session.speakers || []),
    ...(session.moderator ? [session.moderator] : []),
  ];

  return (
    <>
      <div
        className={cn(
          "border-l-2 p-4 rounded-r-lg transition-shadow hover:shadow-sm bg-white",
          sessionTypeColors[session.type]
        )}
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500 font-poppins bg-gray-100 px-2 py-0.5 rounded">
              {session.time}
            </span>
            {session.location && (
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                {session.location}
              </span>
            )}
          </div>
          <span className="text-xs px-2 py-0.5 bg-light rounded-full font-poppins font-medium text-gray-500 capitalize">
            {session.type.replace("-", " ")}
          </span>
        </div>

        <h3 className="text-base font-poppins font-semibold text-navy mb-1">
          {session.title}
        </h3>

        <p className="text-sm text-gray-500 font-public-sans mb-3 line-clamp-2">
          {session.description}
        </p>

        {allSpeakers.length > 0 && (
          <div>
            <div className="flex flex-wrap gap-1.5">
              {allSpeakers.map((speaker) => (
                <button
                  key={speaker.id}
                  onClick={() => setSelectedSpeaker(speaker)}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-public-sans transition-colors",
                    speaker.isModerator
                      ? "bg-amber-100 text-amber-700 hover:bg-amber-200"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  )}
                >
                  {speaker.name}
                  {speaker.isModerator && " (Mod)"}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          isOpen={!!selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}
    </>
  );
}
