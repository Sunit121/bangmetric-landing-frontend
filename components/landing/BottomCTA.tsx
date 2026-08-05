"use client";

import React from "react";
import Link from "next/link";
import MotionReveal from "@/components/landing/MotionReveal";

interface BottomCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function BottomCTA({
  title = "IT Service Management",
  subtitle = "Read Customer Success Stories & News on",
  buttonText = "Know More",
  buttonHref = "#contact",
}: BottomCTAProps) {
  return (
    <section
      className="py-16 md:py-24 relative z-40 overflow-hidden bg-black bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bottom-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      <div className="container">
        <div className="max-w-2xl text-left space-y-6">
          <div className="space-y-2">
            <MotionReveal as="h4" className="text-white text-base sm:text-lg md:text-xl font-normal tracking-wide opacity-90">
              {subtitle}
            </MotionReveal>
            <MotionReveal
              as="h2"
              className="text-4xl sm:text-5xl md:text-[3.2rem] font-bold text-white tracking-tight leading-tight bottom-cta-heading"
              delay={0.1}
            >
              {title}
            </MotionReveal>
          </div>

          <div className="pt-2">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center px-10 py-2 text-sm sm:text-base font-medium rounded-[5px] bg-[#9562EB] text-white hover:bg-[#834be3] transition-all duration-300 active:scale-95 hover:shadow-lg hover:shadow-[#9562EB]/30"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
