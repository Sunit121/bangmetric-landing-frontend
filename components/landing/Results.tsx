import React from "react";
import Image from "next/image";
import MotionReveal from "@/components/landing/MotionReveal";

interface ResultMetric {
  icon: string;
  title: React.ReactNode;
}

interface ResultsProps {
  sectionTitle?: string;
  subtitle?: string;
  metrics?: ResultMetric[];
  highlightText?: React.ReactNode;
  metricTextClassName?: string;
  highlightColSpan?: 2 | 3 | 4;
  highlightClassName?: string;
}

const defaultMetrics: ResultMetric[] = [
  {
    icon: "/images/icon-1.png",
    title: (
      <>
        20&ndash;40%<br />faster MTTR
      </>
    ),
  },
  {
    icon: "/images/icon-2.png",
    title: (
      <>
        15&ndash;30%<br />higher first<br />contact resolution
      </>
    ),
  },
  {
    icon: "/images/icon-3.png",
    title: (
      <>
        25%+ analyst<br />productivity<br />improvement
      </>
    ),
  },
  {
    icon: "/images/icon-4.png",
    title: (
      <>
        Fewer emergency<br />changes &amp; lower<br />change failure rate
      </>
    ),
  },
  {
    icon: "/images/icon-5.png",
    title: (
      <>
        Reduced cost per-<br />ticket through clarity<br />and automation
      </>
    ),
  },
];

export default function Results({
  sectionTitle = "The Results Our Clients See",
  subtitle = "When ITSM is designed properly, the numbers move",
  metrics = defaultMetrics,
  highlightText,
  metricTextClassName = "",
  highlightColSpan = 2,
  highlightClassName,
}: ResultsProps) {
  return (
    <section id="results" className="pt-16 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <MotionReveal as="h2" className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] tracking-tight leading-tight">
            {sectionTitle}
          </MotionReveal>
          <MotionReveal as="p" className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl" delay={0.1}>
            {subtitle}
          </MotionReveal>
        </div>


        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="group min-w-0 rounded-md bg-white border border-gray-200 p-3 md:p-4 lg:p-5 hover:bg-[#9383DC] hover:text-white hover:border-[#9383DC] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#9383DC]/40 min-h-[110px] md:min-h-[100px]"
            >
              <div className="mb-3 sm:mb-4 lg:mb-5 flex-shrink-0">
                <Image
                  src={item.icon}
                  alt="Result Icon"
                  width={60}
                  height={60}
                  className="w-9 sm:w-10 lg:w-[50px] h-auto object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-110 group-hover:-rotate-3"
                />
              </div>

              <MotionReveal as="p" className={`results-metric-text ${metricTextClassName} group-hover:text-white leading-snug !text-[14px] md:text-[14px] lg:text-[15px]`}>
                {item.title}
              </MotionReveal>
            </div>
          ))}

          {/* Desktop highlight — inside grid, hidden on mobile */}
          {highlightText && (
            <div className={`hidden md:flex col-span-2 ${highlightColSpan === 3 ? 'md:col-span-3' : highlightColSpan === 4 ? 'md:col-span-4' : 'md:col-span-2'} items-center justify-center ${highlightClassName ?? 'md:p-4 lg:p-6 lg:pl-10'} md:h-auto lg:h-[150px]`}>
              <h3 className="text-white text-[18px] sm:text-[24px] md:text-[30px] lg:text-[25px] font-bold text-green leading-[1.1]">
                {highlightText}
              </h3>
            </div>
          )}
        </div>

        {/* Mobile highlight — shown after cards on small screens */}
        {highlightText && (
          <div className="block md:hidden mt-6">
            <h3 className="text-[22px] font-bold text-green leading-[1.1]">
              {highlightText}
            </h3>
          </div>
        )}

      </div>
    </section>
  );
}
