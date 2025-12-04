"use client";

import Modal from "./Modal";
import { REGISTRATION_TYPES } from "@/lib/constants";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  const handleRegistration = (type: string) => {
    // Placeholder link - replace with actual registration URL
    console.log(`Registration type: ${type}`);
    window.open(`https://tinyurl.com/RECongress2025`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Registration" size="md">
      <div className="space-y-4">
        <p className="text-gray-600 font-public-sans text-sm mb-6">
          Please select your registration type:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {REGISTRATION_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => handleRegistration(type.id)}
              className="group p-5 border border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-200"
            >
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-poppins font-medium text-navy text-sm">
                {type.label}
              </h3>
            </button>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            All registration types will redirect to the same registration form.
            <br />
            Please indicate your registration type in the form.
          </p>
        </div>
      </div>
    </Modal>
  );
}
