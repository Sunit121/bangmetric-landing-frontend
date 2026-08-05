"use client";

import React from "react";
import { motion } from "framer-motion";

type MotionRevealTag =
  | "div"
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "section";

interface MotionRevealProps {
  children: React.ReactNode;
  as?: MotionRevealTag;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
}

export default function MotionReveal({
  children,
  as = "div",
  className,
  delay = 0,
  duration = 0.8,
  y = 15,
  x = 0,
}: MotionRevealProps) {
  // Correctly access the motion component corresponding to the requested tag
  const MotionComponent = motion[as] as any;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1], // Custom smooth cubic-bezier transition
        delay,
      }}
    >
      {children}
    </MotionComponent>
  );
}
