"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_ITEMS, EVENT_CONFIG } from "@/lib/constants";
import Button from "./Button";
import RegistrationModal from "./RegistrationModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="RE Congress 2025 - Home"
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/recongress2025/assets/logos/re_congress_transparent.png"
                  alt="8th Renewable Energy Congress & Exhibit 2025 Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="hidden md:block">
                <div className="text-navy font-klein text-sm leading-tight">
                  {EVENT_CONFIG.shortName}
                </div>
                <div className="text-primary text-xs font-medium">
                  {EVENT_CONFIG.dates.split(",")[0]}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors font-poppins text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => setShowRegModal(true)}
                variant="primary"
                size="sm"
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-600 hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-50"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-gray-100">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-poppins py-2 px-3 rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    setShowRegModal(true);
                    setIsOpen(false);
                  }}
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Register
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <RegistrationModal
        isOpen={showRegModal}
        onClose={() => setShowRegModal(false)}
      />
    </>
  );
}
