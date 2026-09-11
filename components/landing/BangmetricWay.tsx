"use client";

import React from "react";
import Image from "next/image";
import MotionReveal from "@/components/landing/MotionReveal";

interface BangmetricStep {
  title: React.ReactNode;
  alt?: string;
  desc: React.ReactNode;
  image?: string;
}

interface BangmetricWayProps {
  subtitle?: string;
  steps?: BangmetricStep[];
  layout?: "grid" | "vertical-cards" | "tprm-grid" | "2x2-grid" | "2x2";
}

const defaultSteps: BangmetricStep[] = [
  {
    title: "Discover &\nDesign",
    desc: "Map value streams, locate friction, align on outcomes and metrics that matter.",
    image: "/images/discover.png",
  },
  {
    title: "Automate\nWhat Matters",
    desc: "Apply AI, Virtual Agent, and automation where they remove effort and add clarity.",
    image: "/images/automate.png",
  },
  {
    title: "Build for\nClarity",
    desc: "Configure ITSM with intent every field, workflow, and role supports resolution and flow.",
    image: "/images/build-for-speed.png",
  },
  {
    title: "Improve\nContinuously",
    desc: "Operate with real signals (MTTR, FCR, change failure rate). Iterate without chaos.",
    image: "/images/improve.png",
  },
];

export default function BangmetricWay({
  subtitle = "When ITSM is designed properly, the numbers move",
  steps = defaultSteps,
  layout = "grid",
}: BangmetricWayProps) {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const isTprmGrid = layout === "tprm-grid";
  const is2x2Grid = layout === "2x2-grid" || layout === "2x2";

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    if (!isMobile || is2x2Grid) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll(".bangmetric-card-wrapper");
      if (!cards || cards.length === 0) return;

      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, is2x2Grid]);

  return (
    <section id="methodology" className="pt-16 md:pt-24 pb-16 md:pb-24 bg-[#F6F5FA] overflow-hidden" ref={containerRef}>
      <div className="container max-w-[1140px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-[44px] text-slate-900 font-normal tracking-tight leading-tight">
            The <strong>BANGMETRIC</strong> Way
          </MotionReveal>
        </div>

        {/* 2x2 Grid Layout for Software Asset Management */}
        {is2x2Grid ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {steps.map((step, index) => (
              <MotionReveal key={index} delay={index * 0.08} className="h-full">
                <div
                  className="bangmetric-way-card group relative flex flex-col justify-between h-full bg-[#EDEDF1] rounded-[16px] p-6 sm:p-7 border border-[#D8D8D8]/80 shadow-none hover:bg-[#9383DC] hover:border-[#9383DC] hover:shadow-[0_12px_30px_rgba(147,131,220,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer"
                >
                  {/* Top Section: Image on left, Title & Divider line on right */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5 mb-3">
                    {step.image && (
                      <div className="relative w-[130px] sm:w-[150px] md:w-[165px] h-[85px] sm:h-[95px] md:h-[105px] rounded-[10px] overflow-hidden shrink-0 bg-slate-200/60">
                        <Image
                          src={step.image}
                          alt={step.alt ?? "Bangmetric step image"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold leading-[1.25] text-slate-900 group-hover:text-white transition-colors duration-300 whitespace-pre-line">
                        {step.title}
                      </h3>
                      <div className="w-16 sm:w-20 h-[1.5px] mt-2.5 bg-slate-500/60 group-hover:bg-white/80 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Bottom Section: Description */}
                  <p className="text-[14px] sm:text-[15px] leading-[1.55] font-normal text-slate-600 group-hover:text-white/95 transition-colors duration-300 mt-2">
                    {step.desc}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        ) : layout === "vertical-cards" ? (
          <div className="relative flex flex-col gap-8 max-w-[800px] mx-auto">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className="bangmetric-card-wrapper relative z-10 pt-4 md:pt-0"
                  data-index={index}
                >
                  <MotionReveal
                    as="div"
                    delay={index * 0.1}
                  >
                    <div className={`bangmetric-way-card group relative flex flex-col md:flex-row items-start md:items-center rounded-[10px] p-6 md:p-[25px] border-0 md:border gap-4 md:gap-0 transition-all duration-300
                      ${isActive
                        ? 'bg-[#9383DC] text-white shadow-[2px_3px_4.3px_0px_#00000040]'
                        : 'bg-[#EDEDF1] text-black'
                      } 
                      md:bg-[#EDEDF1] md:text-black md:border-[#BEBEBE] md:shadow-none`}
                    >
                      {/* Dot on mobile */}
                      <div className={`absolute left-1/2 -translate-x-1/2 top-[-14px] w-[24px] h-[24px] rounded-full border-2 border-transparent shadow-md transition-all duration-300 flex items-center justify-center overflow-visible md:hidden z-20 bg-[#CFC4FF]
                        ${isActive ? 'scale-110' : ''}`}
                      >
                        <span className={`absolute inset-0 rounded-full bg-[#9383DC] opacity-0 transition-opacity duration-300
                          ${isActive ? 'animate-ping opacity-40' : ''}`}
                          style={{ animationDuration: '1.5s' }}
                        />
                      </div>
                      {step.image && (
                        <div className="bangmetricCardImg hidden md:block md:w-[170px] md:h-[100px] rounded-[10px] overflow-hidden shrink-0 md:mr-6 relative">
                          <Image src={step.image} alt={step.alt ?? "Bangmetric step image"} fill className="object-cover" />
                        </div>
                      )}
                      <h3 className={`text-[15px] md:text-[20px] font-bold md:min-w-[130px] shrink-0 leading-snug md:whitespace-pre-line transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-black'} md:text-black`}
                      >
                        {step.title}
                      </h3>
                      <div className="hidden md:block w-[1px] h-[60px] mx-5 shrink-0 transition-colors duration-300 bg-black group-hover:bg-white" />
                      <p className={`!text-[14px] sm:text-[13px] leading-[1.5] font-medium transition-colors duration-300
                        ${isActive ? 'text-white opacity-100' : 'text-slate-600'} md:text-inherit`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </MotionReveal>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={isTprmGrid
            ? "grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-[1100px] mx-auto relative"
            : "grid grid-cols-1 md:grid-cols-2 gap-8 relative"}
          >
            {steps.map((step, index) => {
              const isActive = !isTprmGrid && activeIndex === index;
              return (
                <div
                  key={index}
                  className="bangmetric-card-wrapper relative flex items-center group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 z-10 pt-4 sm:pt-0"
                  data-index={index}
                >
                  <div
                    className={isTprmGrid
                      ? `w-full min-h-[460px] rounded-[6px] flex flex-col items-center gap-3 p-[30px] border border-[#D8D8D8] transition-all duration-500 relative text-center
                        ${isActive ? 'bg-[#9383DC] text-white [box-shadow:3px_-2px_4.3px_0px_#4D2A7C_inset,2px_3px_4.3px_0px_#00000040]' : 'bg-[#EDEDF1] text-black'}
                        group-hover:bg-[#9383DC] group-hover:text-white group-hover:border-[#9383DC]`
                      : `w-full min-h-[120px] rounded-[10px] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 p-[30px] sm:px-6 sm:py-4 md:px-8 border-0 sm:border transition-all duration-500 relative
                        ${isActive ? 'bg-[#9383DC] text-white [box-shadow:3px_-2px_4.3px_0px_#4D2A7C_inset,2px_3px_4.3px_0px_#00000040]' : 'bg-[#EDEDF1] text-black'}
                        sm:bg-transparent sm:text-black sm:border-[#D8D8D8] sm:shadow-none sm:group-hover:bg-[#9383DC] sm:group-hover:text-white sm:group-hover:border-[#9383DC]`}
                  >
                    {!isTprmGrid && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-[-14px] sm:left-[-15px] sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-0 w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] rounded-full border-2 border-transparent shadow-md z-20 bg-[#CFC4FF]" />
                    )}
                    {isTprmGrid && step.image && (
                      <div className="relative w-full h-[130px] rounded-[6px] overflow-hidden">
                        <Image src={step.image} alt={step.alt ?? "Bangmetric step image"} fill className="object-contain" />
                      </div>
                    )}
                    <div className={isTprmGrid
                      ? `w-full text-[24px] font-semibold leading-tight shrink-0 ${isActive ? 'text-white' : 'text-black'} group-hover:text-white`
                      : `sm:w-[180px] text-[15px] sm:text-[16px] md:text-[18px] font-semibold leading-tight shrink-0 ${isActive ? 'text-white' : 'text-black'} sm:text-black sm:group-hover:translate-x-1.5 sm:group-hover:text-white`}
                    >
                      {step.title}
                    </div>
                    <div className={isTprmGrid ? "w-24 h-px bg-black/60" : "hidden sm:block w-[1.5px] h-[60px] shrink-0 bg-black"} />
                    <MotionReveal
                      as="p"
                      className={isTprmGrid
                        ? `bangmetric-way-desc tprm-bangmetric-way-desc !text-[24px] leading-[1.2] w-full ${isActive ? 'text-white' : 'text-slate-600'} group-hover:text-white`
                        : `bangmetric-way-desc leading-[1.5] flex-1 pl-0 sm:pl-5 ${isActive ? 'text-white' : 'text-slate-600'} sm:text-inherit sm:group-hover:translate-x-1 sm:group-hover:text-white`}
                      delay={index * 0.1}
                    >
                      {step.desc}
                    </MotionReveal>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}


