import React from "react";
import Link from "next/link";
import Image from "next/image";
import MotionReveal from "@/components/landing/MotionReveal";

interface JumpstartCard {
  title: string;
  description: React.ReactNode;
  tagline?: string;
}

interface JumpstartsProps {
  sectionTitle?: React.ReactNode;
  subtitle?: React.ReactNode;
  cards?: JumpstartCard[];
  buttonText?: string;
  cubeImage?: string | null | false;
  imageAnimationClass?: string;
  imageContainerClassName?: string;
  topAreaClassName?: string;
  sectionClassName?: string;
}

const defaultCards: JumpstartCard[] = [
  {
    title: "45-Day ITSM",
    description:
      "A clean, effective baseline that actually improves flow: Incident, Request, core Catalog, Knowledge, practical SLAs, Major Incident basics, and a portal that reduces effort.",
    tagline: "Fast to value. Built right the first time.",
  },
  {
    title: "60-Day ITSM",
    description: (
      <>
        For teams ready to go beyond the basics:
        <br />
        Problem &amp; Change, Service Operations Workspace, Virtual Agent,
        and a rightsized CMDB/CSDM
      </>
    ),
  },
];

export default function Jumpstarts({
  sectionTitle = (
    <>
      Our ITSM Jumpstarts<br />
      (Fast, Without the Compromise)
    </>
  ),
  subtitle = (
    <>
      They&apos;re structured, designed pathways that
      <br className="hidden sm:inline" />
      keep momentum high and quality intact.
    </>
  ),
  cards = defaultCards,
  buttonText = "Download Now",
  cubeImage = "/images/cube.png",
  imageAnimationClass = "cube-spin-float-animate",
  imageContainerClassName = "",
  topAreaClassName = "",
  sectionClassName = "",
}: JumpstartsProps) {
  return (
    <section id="jumpstarts" className={`py-20 md:py-28 bg-white overflow-hidden ${sectionClassName}`}>
      <div className="container">

        {/* Top area: Title on the left, Cube image on the right */}
        <div className={`flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14 ${topAreaClassName}`}>
          <div className="flex-1 max-w-2xl">
            <MotionReveal
              as="h2"
              className="text-4xl sm:text-5xl md:text-[3.4rem] text-slate-900 leading-tight tracking-tight"
            >
              {sectionTitle}
            </MotionReveal>
            <MotionReveal as="p" className="mt-5 jumpstarts-p text-[18px] leading-relaxed max-w-xl" delay={0.1}>
              {subtitle}
            </MotionReveal>
          </div>

          {cubeImage && (
            <div id="cube-start-placeholder" className={`flex-shrink-0 flex justify-center md:justify-end w-36 h-36 sm:w-44 sm:h-44 md:w-[17.5rem] md:h-60 relative ${imageContainerClassName}`}>
              <Image
                src={cubeImage}
                alt="3D crystal cube"
                width={350}
                height={350}
                className={`cube-start-image w-full h-full object-contain select-none pointer-events-none transition-opacity duration-300 ${imageAnimationClass}`}
                priority
              />
            </div>
          )}
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group jumpstart-card rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[180px] border-2 border-[#d1d5db] hover:border-[#9F9EF2] transition-all "
              style={{ background: "transparent" }}
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black group-hover:text-white mb-5 transition-colors duration-300">
                  {card.title}
                </h3>
                <MotionReveal as="p" className="jumpstarts-p text-black group-hover:text-white leading-relaxed transition-colors duration-300">
                  {card.description}
                </MotionReveal>
                {card.tagline && (
                  <span className="text-black group-hover:text-white font-bold transition-colors duration-300">
                    {card.tagline}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center px-[3.75rem] py-3 text-sm sm:text-base font-normal rounded-[10px] bg-brand-purple text-white hover:shadow-xl hover:shadow-brand-purple/40 hover:-translate-y-1 active:scale-95 overflow-hidden transition-all duration-300 ease-out"
          >
            <span className="relative z-10 flex items-center gap-2">
              {buttonText}
            </span>
          </Link>
        </div>

      </div>
    </section >
  );
}


