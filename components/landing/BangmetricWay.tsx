import React from "react";
import Image from "next/image";
import MotionReveal from "@/components/landing/MotionReveal";

interface BangmetricStep {
  title: React.ReactNode;
  alt?: string;
  desc: string;
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
  return (
    <section id="methodology" className="pt-[7.5rem] pb-[7.5rem] bg-white overflow-hidden">
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            The BANGMETRIC Way
          </MotionReveal>
          {/* <MotionReveal as="p" className="mt-4 text-base md:text-lg text-slate-600 font-light" delay={0.1}>
            {subtitle}
          </MotionReveal> */}
        </div>

        {layout === "vertical-cards" ? (
          <div className="flex flex-col gap-6 max-w-[800px] mx-auto">
            {steps.map((step, index) => (
              <MotionReveal
                as="div"
                key={index}
                delay={index * 0.1}
              >
                <div className="bangmetric-way-card flex flex-col md:flex-row items-start md:items-center bg-[#F6F5FA] rounded-2xl p-6 md:p-[25px] border border-[#BEBEBE] gap-4 md:gap-0">
                  {step.image && (
                    <div className="bangmetricCardImg md:w-[170px] h-[200px] md:h-[100px] rounded-[10px] overflow-hidden shrink-0 md:mr-6 relative">
                      <Image src={step.image} alt={step.alt ?? "Bangmetric step image"} fill className="object-cover" />
                    </div>
                  )}
                  <h3 className="text-[18px] md:text-[20px] font-bold text-black md:min-w-[130px] shrink-0 leading-snug md:whitespace-pre-line">
                    {step.title}
                  </h3>
                  <div className="hidden md:block w-[1px] h-[60px] bg-black opacity-50 mx-5 shrink-0"></div>
                  <p className="!text-[14px] sm:text-[13px] leading-[1.5] font-medium">
                    {step.desc}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className="relative flex items-center group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
                >
                  <div className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] rounded-full bg-[#D8CDFF] border-2 border-transparent shadow-md z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:bg-[#9383DC] group-hover:border-white group-hover:shadow-[0_0_15px_rgba(147,131,220,0.6)] flex items-center justify-center overflow-visible">
                    <span className="absolute inset-0 rounded-full bg-[#9383DC] opacity-0 group-hover:animate-ping group-hover:opacity-40" style={{ animationDuration: '1.5s' }} />
                  </div>
                  <div
                    className="w-full min-h-[120px] rounded-[10px] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 p-[30px] sm:px-6 sm:py-4 md:px-8 border border-[#D8D8D8] bg-transparent text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#9383DC] group-hover:text-white group-hover:border-[#9383DC] group-hover:[box-shadow:3px_-2px_4.3px_0px_#4D2A7C_inset,2px_3px_4.3px_0px_#00000040]"
                  >
                    <div className="sm:w-[180px] text-[14px] sm:text-[16px] md:text-[18px] font-semibold leading-tight shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                      {step.title}
                    </div>
                    <div
                      className="hidden sm:block w-[1.5px] h-[60px] shrink-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-[1.15] origin-center"
                    />
                    <MotionReveal as="p" className="bangmetric-way-desc leading-[1.5] flex-1 pl-0 sm:pl-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" delay={index * 0.1}>
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
