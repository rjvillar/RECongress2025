"use client";

import { useState, useEffect } from "react";
import {
  calculateTimeLeft,
  formatTimeUnit,
  type CountdownTime,
} from "@/lib/utils";
import { EVENT_CONFIG } from "@/lib/constants";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let timeoutId: number | null = null;

    const scheduleNextTick = () => {
      const now = Date.now();
      const delay = 1000 - (now % 1000);
      timeoutId = window.setTimeout(tick, delay);
    };

    const tick = () => {
      const nextTime = calculateTimeLeft(EVENT_CONFIG.eventDate);
      setTimeLeft(nextTime);

      const reachedZero =
        nextTime.days === 0 &&
        nextTime.hours === 0 &&
        nextTime.minutes === 0 &&
        nextTime.seconds === 0;

      if (!reachedZero) {
        scheduleNextTick();
      }
    };

    tick();
    setTimeout(() => setMounted(true), 0);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!mounted) {
    return (
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-poppins text-gray-500 uppercase tracking-wider mb-6">
              Event starts in
            </p>
            <div className="flex justify-center gap-3 md:gap-4">
              {["Days", "Hours", "Mins", "Secs"].map((label) => (
                <div key={label} className="text-center">
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-light rounded-xl flex items-center justify-center mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-navy">
                      --
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-poppins text-gray-500 uppercase tracking-wider mb-6">
            Event starts in
          </p>

          <div className="flex justify-center gap-3 md:gap-4">
            {timeBlocks.map((block, index) => (
              <div key={block.label} className="text-center">
                <div className="relative">
                  <div
                    className={`w-16 md:w-20 h-16 md:h-20 rounded-xl flex items-center justify-center mb-2 ${
                      index === 0
                        ? "bg-primary text-white"
                        : "bg-light text-navy"
                    }`}
                  >
                    <span className="text-2xl md:text-3xl font-bold">
                      {formatTimeUnit(block.value)}
                    </span>
                  </div>
                  {index < 3 && (
                    <span className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-gray-300 text-xl font-bold">
                      :
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {block.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
