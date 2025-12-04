"use client";

import Image from "next/image";
import Modal from "./Modal";
import { Speaker } from "@/lib/data";

interface SpeakerModalProps {
  speaker: Speaker;
  isOpen: boolean;
  onClose: () => void;
}

export default function SpeakerModal({
  speaker,
  isOpen,
  onClose,
}: SpeakerModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={speaker.name} size="lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Photo */}
        <div className="md:col-span-1">
          <div className="aspect-square bg-light border border-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
            {speaker.photo ? (
              <Image
                src={speaker.photo}
                alt={speaker.name}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-xl"
                priority={false}
              />
            ) : (
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-klein text-primary">
                  {speaker.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:col-span-2">
          <div className="mb-4">
            <h3 className="text-lg font-poppins font-semibold text-navy mb-1">
              {speaker.designation}
            </h3>
            <p className="text-primary font-poppins text-sm">
              {speaker.organization}
            </p>
            {speaker.isModerator && (
              <span className="inline-block mt-2 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                Moderator
              </span>
            )}
          </div>

          {speaker.bio && (
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600 font-public-sans text-sm leading-relaxed">
                {speaker.bio}
              </p>
            </div>
          )}

          {!speaker.bio && (
            <p className="text-gray-400 italic font-public-sans text-sm">
              Speaker biography to be announced.
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
}
