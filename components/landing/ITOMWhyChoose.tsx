"use client";

import React from "react";
import Image from "next/image";
import MotionReveal from "@/components/landing/MotionReveal";

interface WhyPoint {
  title: string;
  desc: string;
}

interface ITOMWhyChooseProps {
  heading?: React.ReactNode;
  paragraphs?: React.ReactNode[];
  points?: WhyPoint[];
  imageRight?: string;
}

export default function ITOMWhyChoose({
  heading = (
    <>
      Why Organizations <br />
      Choose BANGMETRIC
    </>
  ),
  paragraphs = [
    <p key="1" className="why-organization-txt">
      They’re done with noisy tools and reactive operations.<br />
      They want clarity, control, and confidence.
    </p>,
    <p key="2" className="mt-1">BANGMETRIC brings:</p>
  ],
  points = [
    {
      title: "Midmarket expertise",
      desc: "— right-sized, fast, pragmatic",
    },
    {
      title: "Service-first design",
      desc: "— maps & data that reflect reality",
    },
    {
      title: "Deep ITOM capability",
      desc: "— visibility, mapping, event intelligence, automation",
    },
    {
      title: "Real outcomes",
      desc: "— fewer incidents, faster MTTR, proactive operations",
    },
  ],
  imageRight
}: ITOMWhyChooseProps) {

  return (
    <section className="py-20 md:py-28 bg-[#F6F5FA] relative z-10">
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start`}>
          {/* Left Column */}
          <div className="w-full">
            <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-[44px] text-black tracking-tight leading-[1.2] mb-6">
              {heading}
            </MotionReveal>
            <MotionReveal as="div" className="font-body font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] text-black" delay={0.1}>
              {paragraphs.map((p, i) => (
                <div key={i}>{p}</div>
              ))}
            </MotionReveal>

            {imageRight && (
              <div className="flex flex-col space-y-4 mt-8">
                {points.map((pt, index) => (
                  <MotionReveal as="div" key={index} delay={index * 0.1 + 0.2} className="flex items-start">
                    <div className="flex-shrink-0 mr-4 md:mr-6 mt-1">
                      <Image src="/images/star-icon.png" alt="Star pointer" width={24} height={24} className="object-contain" />
                    </div>
                    <div className="font-body font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] text-black">
                      <strong className="font-bold text-black">{pt.title}</strong>{" "}
                      <span className="text-black">{pt.desc}</span>
                    </div>
                  </MotionReveal>
                ))}
              </div>
            )}
          </div>

          {/* Right Column (List or Image) */}
          <div className="w-full flex flex-col mt-10 lg:mt-0 relative">
            {imageRight ? (
              <MotionReveal as="div" delay={0.2} className="w-full relative h-[350px] sm:h-[400px] lg:h-[500px] flex items-start justify-center lg:justify-end">
                <div className="relative w-[110%] h-[110%] lg:w-[130%] lg:h-[130%] -top-2 lg:-top-[11.25rem] -right-0 lg:-right-12">
                  <Image src={imageRight} alt="Why Choose Us" fill className="object-contain lg:object-right-top" priority />
                </div>
              </MotionReveal>
            ) : (
              <div className="flex flex-col space-y-4">
                {points.map((pt, index) => (
                  <MotionReveal as="div" key={index} delay={index * 0.1 + 0.2} className="flex items-start">
                    <div className="flex-shrink-0 mr-4 md:mr-6 mt-1">
                      <Image src="/images/star-icon.png" alt="Star pointer" width={24} height={24} className="object-contain" />
                    </div>
                    <div className="font-body font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] text-black">
                      <strong className="font-bold text-black">{pt.title}</strong>{" "}
                      <span className="text-black">{pt.desc}</span>
                    </div>
                  </MotionReveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
