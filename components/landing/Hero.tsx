"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeroProps {
  title?: string;
  bannerImage?: string;
  align?: "center" | "left";
}

export default function Hero({
  title = "IT Service Management",
  bannerImage,
  align = "center",
}: HeroProps) {
  const pathname = usePathname();

  let defaultBanner = "/images/banner-image.png";
  if (pathname === "/strategic-portfolio-management") {
    defaultBanner = "/images/strategic-portfolio-banner.png";
  } else if (pathname === "/it-operations-management") {
    defaultBanner = "/images/it-operations-management-banner.png";
  } else if (pathname === "/hr-service-delivery") {
    defaultBanner = "/images/hr-service-delivery-banner.png";
  }

  const finalBannerImage = bannerImage || defaultBanner;

  return (
    <section className="w-full flex justify-center pt-28 md:pt-24 lg:pt-28">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-10 pb-0 relative z-20">
        <div className=" relative w-full max-w-[1376px] h-[220px] sm:h-[280px] md:h-[340px] lg:h-[404px] rounded-[20px] overflow-hidden flex items-center justify-center ">
          <div className="absolute inset-0">
            <Image
              src={finalBannerImage}
              alt="Banner image"
              fill
              quality={100}
              priority
              unoptimized
              className="object-cover animate-hero-zoom"
            />
          </div>

          {align === "left" ? (
            <div className="absolute inset-0 flex items-center px-6 sm:px-10 md:px-14 lg:px-16">
              <h1 className="font-body font-bold text-white text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] leading-tight animate-hero-text opacity-0 text-left">
                {title}
              </h1>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="font-body font-bold text-white text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] leading-tight text-center animate-hero-text opacity-0">
                {title}
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
