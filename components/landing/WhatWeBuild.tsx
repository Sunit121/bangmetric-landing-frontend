"use client";

import React from "react";
import Image from "next/image";
import MotionReveal from "@/components/landing/MotionReveal";

// --- ITSM 2-card layout types ---
interface WhatWeBuildCard {
  title: string;
  desktopImage: string;
  mobileImage?: string;
  heading: React.ReactNode;
  features: string[];
}

// --- ITOM/SPM 6-card grid types ---
interface GridCard {
  title: string;
  image: string;
}

export interface OverlapCard {
  title: string;
  image: string;
  features: string[];
}

export interface WhatWeBuildProps {
  sectionTitle?: string;
  subtitle?: string;
  layout?: "grid" | "staggered" | "overlap" | "overlay";
  gridCards?: GridCard[];
  overlayCards?: WhatWeBuildCard[];
  overlapCards?: OverlapCard[];
}

const defaultOverlayCards: WhatWeBuildCard[] = [
  {
    title: "core-itsm",
    desktopImage: "/images/core-itsm.png",
    mobileImage: "/images/core-itsm-mob.png",
    heading: <>Core ITSM, done deliberately:</>,
    features: [
      "Incident, Request, Problem, Change",
      "Service Catalog & Employee-friendly Portal",
      "Major Incident, OnCall, clean comms & roles",
      "Knowledge that's actually used (not shelfware)",
      "Service Operations Workspace for cross-team visibility",
      "CMDB/CSDM, rightsized to support change and impact analysis (no bloat)",
    ],
  },
  {
    title: "intelligence",
    desktopImage: "/images/itelligence.png",
    mobileImage: "/images/itelligence-mob.png",
    heading: (
      <>
        Intelligence & Automation,<br className="hidden sm:block" /> applied where it helps:
      </>
    ),
    features: [
      "Predictive assignment & classification",
      "GenAI for summaries, KB drafts, and guided resolution notes",
      "Change risk scoring and better approvals",
      "Signals into incident and noise reduction (where ITOM/AIOps is in scope)",
    ],
  },
];

export default function WhatWeBuild({
  sectionTitle = "What We Build with\nServiceNow ITSM",
  subtitle,
  layout = "overlay",
  overlayCards = defaultOverlayCards,
  gridCards = [],
  overlapCards = [],
}: WhatWeBuildProps) {
  return (
    <section
      id="what-we-build"
      className="py-24 relative overflow-hidden bg-black text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/build-with-service-bg.png')" }}
    >
      <div className="max-w-[1100px] mx-auto px-3 md:px-4 relative z-20">

        {(layout === "overlay" || layout === "staggered") && (
          <div className="text-center mb-5 md:mb-24">
            <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-[44px] font-medium text-white tracking-tight leading-tight whitespace-pre-line">
              {sectionTitle}
            </MotionReveal>
          </div>
        )}

        {layout === "overlay" ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
              {overlayCards.map((card, idx) => (
                <div key={idx} className="w-full rounded-xl overflow-hidden group md:max-w-[600px] md:mx-auto">
                  <div className="md:hidden relative h-[250px] overflow-hidden rounded-lg">
                    <Image
                      src={card.mobileImage || card.desktopImage}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <MotionReveal as="div" className="absolute right-2 top-[85px] w-[240px]" y={0} x={idx % 2 === 0 ? -30 : 30} delay={0.2} duration={0.7}>
                       <h3 className="text-[14px] font-semibold mb-3 ml-2 text-white">
                         {card.heading}
                       </h3>
                       <ul className="space-y-1 text-[12px] leading-[1.3] text-[#E5E5E5]">
                         {card.features.map((feature, fIdx) => (
                           <li key={fIdx} className="flex gap-2 ml-2">
                             <span>•</span>
                             <span>{feature}</span>
                           </li>
                         ))}
                       </ul>
                     </MotionReveal>
                  </div>

                  <div className="hidden md:block relative h-[300px] overflow-hidden rounded-lg">
                    <Image
                      src={card.desktopImage}
                      alt={card.title}
                      fill
                      className="object-cover scale-[1.03] group-hover:scale-[1.05] transition-transform duration-500"
                    />
                    <MotionReveal as="div" className="absolute right-[30px] top-[90px] w-[320px]" y={0} x={idx % 2 === 0 ? -30 : 30} delay={0.2} duration={0.7}>
                       <h3 className="text-[20px] font-semibold mb-4 ml-2 text-white">
                         {card.heading}
                       </h3>
                       <ul className="space-y-2 text-[14px] leading-[1.4] text-[#E5E5E5]">
                         {card.features.map((feature, fIdx) => (
                           <li key={fIdx} className="flex gap-2 ml-4">
                             <span>•</span>
                             <span>{feature}</span>
                           </li>
                         ))}
                       </ul>
                     </MotionReveal>
                  </div>
                </div>
              ))}
            </div>

            {/* Spacer to account for absolute positioning overlap */}
            <div className="hidden lg:block h-16"></div>
          </>
        ) : layout === "overlap" ? (
          <div className="relative overflow-hidden -mx-3 md:-mx-4 px-3 md:px-4">
            {/* Background glow on the right */}
            <div className="absolute top-0 right-0 w-[60%] h-full opacity-15 blur-[150px] pointer-events-none" />

            <div className="relative z-10 w-full">
              {/* Header */}
              <div className={`flex flex-col mb-[3.75rem] gap-8 ${subtitle ? "lg:flex-row justify-between items-start" : "items-center text-center"}`}>
                <MotionReveal as="h2" className={`text-3xl sm:text-4xl md:text-5xl text-white leading-tight font-normal whitespace-pre-line ${subtitle ? "lg:w-1/2" : "w-full"}`}>
                  {sectionTitle}
                </MotionReveal>
                {subtitle && (
                  <MotionReveal as="p" className="text-[17px] lg:w-1/3 pt-2 leading-relaxed">
                    {subtitle}
                  </MotionReveal>
                )}
              </div>

              {/* Grid of overlapping cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-10 md:gap-y-10">
                {overlapCards?.map((card, idx) => (
                  <div key={idx} className="w-full rounded-lg overflow-hidden group bg-slate-900/40 border border-slate-800 md:bg-transparent md:border-transparent">
                    {/* Mobile: stacked layout */}
                    <div className="md:hidden relative h-[250px] overflow-hidden rounded-lg">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <MotionReveal as="div" className="absolute right-2 top-[85px] w-[240px]" y={0} x={idx % 2 === 0 ? -30 : 30} delay={0.2} duration={0.7}>
                         <h3 className="text-[14px] font-semibold mb-3 ml-2 text-white whitespace-pre-line">
                           {card.title}
                         </h3>
                         <ul className="space-y-1 text-[12px] leading-[1.3] text-[#E5E5E5]">
                           {card.features.map((feature, fIdx) => (
                             <li key={fIdx} className="flex gap-2 ml-2">
                               <span>•</span>
                               <span>{feature}</span>
                             </li>
                           ))}
                         </ul>
                       </MotionReveal>
                    </div>

                    {/* Desktop: overlay layout */}
                    <div className="hidden md:block group relative h-[300px] overflow-hidden rounded-lg">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                      />
                      <MotionReveal as="div" className="absolute right-[40px] top-[85px] w-[320px]" y={0} x={idx % 2 === 0 ? -30 : 30} delay={0.2} duration={0.7}>
                         <h3 className="text-[20px] font-bold mb-4 ml-2 text-white whitespace-pre-line">
                           {card.title}
                         </h3>
                         <ul className="space-y-2 text-[14px] leading-[1.4] text-[#E5E5E5]">
                           {card.features.map((feature, fIdx) => (
                             <li key={fIdx} className="flex gap-2 ml-4">
                               <span>•</span>
                               <span>{feature}</span>
                             </li>
                           ))}
                         </ul>
                       </MotionReveal>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : layout === "staggered" ? (
          /* Staggered layout: mobile stacked, desktop with overlay text */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-[10px] md:pb-32">
            {overlayCards.map((card, idx) => (
              <div key={idx} className="w-full rounded-lg overflow-hidden group bg-slate-900/40 border border-slate-800 md:bg-transparent md:border-transparent">
                {/* Mobile: overlay layout */}
                <div className="md:hidden relative h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src={card.mobileImage || card.desktopImage}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <MotionReveal as="div" className="absolute right-2 top-[80px] w-[240px]" y={0} x={idx % 2 === 0 ? -30 : 30} delay={0.2} duration={0.7}>
                     <h3 className="text-[14px] font-semibold mb-3 ml-2 text-white">
                       {card.heading}
                     </h3>
                     <ul className="space-y-1 text-[12px] leading-[1.3] text-[#E5E5E5]">
                       {card.features.map((feature, fIdx) => (
                         <li key={fIdx} className="flex gap-2 ml-2">
                           <span>•</span>
                           <span>{feature}</span>
                         </li>
                       ))}
                     </ul>
                   </MotionReveal>
                </div>

                {/* Desktop: overlay layout */}
                <div className="hidden md:block group relative h-[300px] overflow-hidden rounded-lg">
                  <Image
                    src={card.desktopImage}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <MotionReveal as="div" className="absolute right-[40px] top-[85px] w-[320px]" y={0} x={idx % 2 === 0 ? -30 : 30} delay={0.2} duration={0.7}>
                     <h3 className="text-[20px] font-bold mb-4 ml-2 text-white">
                       {card.heading}
                     </h3>
                     <ul className="space-y-2 text-[14px] leading-[1.4] text-[#E5E5E5]">
                       {card.features.map((feature, fIdx) => (
                         <li key={fIdx} className="flex gap-2 ml-4">
                           <span>•</span>
                           <span>{feature}</span>
                         </li>
                       ))}
                     </ul>
                   </MotionReveal>
                </div>
              </div>
            ))}
          </div>

        ) : (
          /* ITOM/SPM-style: 3x2 image grid with titles */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridCards.map((card, idx) => (
              <MotionReveal key={idx} delay={idx * 0.08}>
                <div className="group relative rounded-xl overflow-hidden cursor-pointer">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  {/* Title overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-[15px] sm:text-[16px] font-bold leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
