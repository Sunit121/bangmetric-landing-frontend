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
  layout?: "grid" | "vertical-cards";
}

const defaultSteps: BangmetricStep[] = [
  {
    title: "Discover &\nDesign",
    desc: "Map value streams, locate friction, align on outcomes and metrics that matter.",
  },
  {
    title: "Automate\nWhat Matters",
    desc: "Apply AI, Virtual Agent, and automation where they remove effort and add clarity.",
  },
  {
    title: "Build\nfor Speed",
    desc: "Configure ITSM with intent every field, workflow, and role supports resolution and flow.",
  },
  {
    title: "Improve\nContinuously",
    desc: "Operate with real signals (MTTR, FCR, change failure rate). Iterate without chaos. ",
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

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    if (!isMobile) return;

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
  }, [isMobile]);

  return (
    <section id="methodology" className="pt-20 md:pt-[7.5rem] pb-[3rem] bg-[#F6F5FA] overflow-hidden" ref={containerRef}>
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-20">
          <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            The <strong>BANGMETRIC</strong> Way
          </MotionReveal>
          {/* <MotionReveal as="p" className="mt-4 text-base md:text-lg text-slate-600 font-light" delay={0.1}>
            {subtitle}
          </MotionReveal> */}
        </div>

        {layout === "vertical-cards" ? (
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
                        ${isActive
                          ? 'scale-110'
                          : ''
                        }`}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className="bangmetric-card-wrapper relative flex items-center group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 z-10 pt-4 sm:pt-0"
                  data-index={index}
                >
                  {/* Card */}
                  <div
                    className={`w-full min-h-[120px] rounded-[10px] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 p-[30px] sm:px-6 sm:py-4 md:px-8 border-0 sm:border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative
                      ${isActive
                        ? 'bg-[#9383DC] text-white [box-shadow:3px_-2px_4.3px_0px_#4D2A7C_inset,2px_3px_4.3px_0px_#00000040]'
                        : 'bg-[#EDEDF1] text-black'
                      }
                      sm:bg-transparent sm:text-black sm:border-[#D8D8D8] sm:shadow-none
                      sm:group-hover:bg-[#9383DC] sm:group-hover:text-white sm:group-hover:border-[#9383DC] sm:group-hover:[box-shadow:3px_-2px_4.3px_0px_#4D2A7C_inset,2px_3px_4.3px_0px_#00000040]`}
                  >
                    {/* Dot */}
                    <div className={`absolute left-1/2 -translate-x-1/2 top-[-14px] sm:left-[-15px] sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-0 w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] rounded-full border-2 border-transparent shadow-md z-20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center overflow-visible bg-[#CFC4FF]
                      ${isActive
                        ? 'scale-110'
                        : ''
                      }
                      sm:group-hover:scale-110 sm:group-hover:border-white sm:group-hover:shadow-[0_0_15px_rgba(147,131,220,0.6)]`}
                    >
                      <span className={`absolute inset-0 rounded-full bg-[#9383DC] opacity-0 transition-opacity duration-300
                        ${isActive ? 'animate-ping opacity-40' : ''}
                        sm:group-hover:animate-ping sm:group-hover:opacity-40`}
                        style={{ animationDuration: '1.5s' }}
                      />
                    </div>
                    <div className={`sm:w-[180px] text-[15px] sm:text-[16px] md:text-[18px] font-semibold leading-tight shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${isActive ? 'text-white' : 'text-black'}
                      sm:text-black sm:group-hover:translate-x-1.5 sm:group-hover:text-white`}
                    >
                      {step.title}
                    </div>
                    <div
                      className={`hidden sm:block w-[1.5px] h-[60px] shrink-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-[1.15] origin-center
                        sm:group-hover:bg-white`}
                    />
                    <MotionReveal
                      as="p"
                      className={`bangmetric-way-desc leading-[1.5] flex-1 pl-0 sm:pl-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isActive ? 'text-white' : 'text-slate-600'}
                        sm:text-inherit sm:group-hover:translate-x-1 sm:group-hover:text-white`}
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
