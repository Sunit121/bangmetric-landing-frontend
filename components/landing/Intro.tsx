import React from "react";
import MotionReveal from "@/components/landing/MotionReveal";

interface IntroProps {
  heading?: React.ReactNode;
  paragraphs?: React.ReactNode[];
  headingClassName?: string;
}

const defaultHeading = (
  <>
    Designed from the <br className="hidden md:inline" />
    employee and <br className="hidden md:inline" />
    business back. <br />
    <span className="inline-block mt-1 text-slate-900">
      Built on{" "}
      <span className="text-brand-green relative inline-block">
        ServiceNow
      </span>
    </span>
  </>
);

const defaultParagraphs = [
  "Your business deserves more than an IT tool that just tracks tickets. You need a platform that aligns with your processes, fuels operational momentum, and delights your employees.",
  "We design and implement ServiceNow ITSM with this philosophy at the core, ensuring every automation flow, catalog item, and dashboard widget serves a real, measurable purpose.",
  "By prioritizing clean delivery design and eliminating unnecessary steps, we help organizations streamline service resolution, slash change risk, and boost self-service adoption.",
];

export default function Intro({
  heading = defaultHeading,
  paragraphs = defaultParagraphs,
  headingClassName,
}: IntroProps) {
  return (
    <section id="intro" className="py-[3.75rem] overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Left Column: Heading */}
          <div className="lg:col-span-6 w-full">
            <MotionReveal
              as="h2"
              className={`text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.15] ${headingClassName ?? ""}`}
            >
              {heading}
            </MotionReveal>
          </div>

          {/* Right Column: Paragraph Content */}
          <div className="lg:col-span-6 space-y-6 w-full">
            {paragraphs.map((text, index) => (
              <MotionReveal
                key={index}
                as="p"
                className={index === 0 ? "!text-[16px] sm:text-[16px] leading-[1.6]" : "!text-[16px] sm:text-[16px] leading-[1.6]"}
                delay={index * 0.1}
              >
                {text}
              </MotionReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

