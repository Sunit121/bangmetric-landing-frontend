import React from "react";
import MotionReveal from "@/components/landing/MotionReveal";

interface ThinkNode {
  bold: React.ReactNode;
  detail?: React.ReactNode;
}

export interface ThinkDifferentlyProps {
  nodes?: ThinkNode[];
  variant?: "zigzag" | "horizontal" | "two-columns" | "three-columns";
}

const defaultNodes: ThinkNode[] = [
  { bold: "Value streams", detail: "over ticket queues" },
  { bold: "Rightsized, right now", detail: "(what you need today, expandable tomorrow)" },
  { bold: "Flow metrics over vanity metrics", detail: "(MTTD/MTTR, FCR, change failure rate, employee effort)" },
  { bold: "AI with intent", detail: "(triage, insight, knowledge, change risk)" },
  { bold: "Resolution over SLA theatre" },
];

// Desktop zigzag node positions (5 nodes)
const desktopPositions = [
  { labelLeft: "2%", labelTop: 95, labelWidth: 200, dotLeft: "calc(8% - 15px)", dotTop: 156, isTop: true },
  { labelLeft: "20%", labelTop: 335, labelWidth: 250, dotLeft: "calc(28% - 15px)", dotTop: 306, isTop: false },
  { labelLeft: "38%", labelTop: 55, labelWidth: 280, dotLeft: "calc(48% - 15px)", dotTop: 156, isTop: true },
  { labelLeft: "62%", labelTop: 350, labelWidth: 200, dotLeft: "calc(68% - 15px)", dotTop: 306, isTop: false },
  { labelLeft: "84%", labelTop: 100, labelWidth: 180, dotLeft: "calc(88% - 15px)", dotTop: 156, isTop: true },
];

// Horizontal timeline (5 nodes: dot-above/label-below, dot-below/label-above, alternating)
// Container height: 400px, line at CSS y=200
// Top dots (above line): dotTop=120, center=132, dotBottom=144, stem=144→200 (56px), label below at y=283
// Bottom dots (below line): dotTop=258, center=270, dotBottom=282, stem=200→258 (58px), label above at y=40
const horizontalPositions = [
  { labelLeft: "0%", labelTop: 250, labelWidth: "17%", dotLeft: "calc(10% - 15px)", dotTop: 120 },
  { labelLeft: "21%", labelTop: 25, labelWidth: "20%", dotLeft: "calc(30% - 15px)", dotTop: 258 },
  { labelLeft: "41%", labelTop: 250, labelWidth: "20%", dotLeft: "calc(50% - 15px)", dotTop: 120 },
  { labelLeft: "61%", labelTop: 30, labelWidth: "18%", dotLeft: "calc(70% - 15px)", dotTop: 258 },
  { labelLeft: "81%", labelTop: 250, labelWidth: "18%", dotLeft: "calc(90% - 15px)", dotTop: 120 },
];

export default function ThinkDifferently({ nodes = defaultNodes, variant = "horizontal" }: ThinkDifferentlyProps) {
  const CircleDot = ({ size = 18 }: { size?: number }) => (
    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_2556_1042)">
        <circle cx="17.5" cy="17.5" r="17.5" fill="#D8CDFF" />
      </g>
      <defs>
        <filter id="filter0_i_2556_1042" x="0" y="0" width="40" height="37" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="3" dy="2" />
          <feGaussianBlur stdDeviation="1.75" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.670588 0 0 0 0 0.603922 0 0 0 0 0.909804 0 0 0 1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2556_1042" />
        </filter>
      </defs>
    </svg>

  );

  return (
    <section id="services" className="pt-[7.5rem] pb-[7.5rem] bg-[#F6F5FA] overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fiberSpark {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(400%);
            opacity: 0;
          }
        }
        @keyframes fiberSparkHoriz {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(400%);
            opacity: 0;
          }
        }
      `}} />
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <MotionReveal
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight"
          >
            How <strong>BANGMETRIC</strong> Thinks Differently
          </MotionReveal>
        </div>

        {/* Desktop zigzag / horizontal / two-columns / three-columns layout */}
        {variant === "two-columns" || variant === "three-columns" ? (
          <div className={`hidden lg:grid ${variant === "two-columns" ? "grid-cols-2 gap-20 max-w-5xl" : "grid-cols-3 gap-12 max-w-7xl"} mt-12 mx-auto`}>
            {Array.from({ length: variant === "two-columns" ? 2 : 3 }).map((_, colIdx) => {
              // For 5 nodes in 2 cols: Col 0 gets 3, Col 1 gets 2.
              // For 6 nodes in 3 cols: Col 0, 1, 2 get 2.
              const isTwoCol = variant === "two-columns";
              const startIndex = isTwoCol ? (colIdx === 0 ? 0 : 3) : colIdx * 2;
              const endIndex = isTwoCol ? (colIdx === 0 ? 3 : 5) : (colIdx * 2) + 2;
              const colNodes = nodes.slice(startIndex, endIndex);

              if (colNodes.length === 0) return null;

              return (
                <div key={colIdx} className={`relative pl-10 space-y-16 ${colIdx === 1 && isTwoCol ? "h-[16.25rem]" : "h-fit"}`}>
                  {colNodes.map((node, idx) => (
                    <div key={idx} className="relative flex items-start">
                      {/* Per-item connector: spans from this dot center to next dot center.
                          top=19px = dot center (mt-1=4px + half dot=15px).
                          height=calc(100%+4rem): 100% = this item's text height, 4rem = space-y-16 gap.
                          This always ends exactly at the next dot's center regardless of text length. */}
                      {idx < colNodes.length - 1 && (
                        <div
                          className="absolute overflow-hidden"
                          style={{
                            left: "-20.5px",
                            top: "19px",
                            width: "4px",
                            height: "calc(100% + 4rem)",
                            background: "linear-gradient(180deg, #9562EB 0%, #D8CDFF 115.85%)",
                            borderRadius: "2px",
                            zIndex: 0,
                          }}
                        >
                          <div
                            className="w-full h-[30%] absolute top-0 left-0"
                            style={{
                              background: "linear-gradient(to bottom, transparent, #9562EB 60%, #FFFFFF 100%)",
                              animation: "fiberSpark 2.5s ease-in-out infinite"
                            }}
                          />
                        </div>
                      )}
                      <div className="absolute -left-[33.5px] mt-1 z-10">
                        <CircleDot size={24} />
                      </div>
                      <div className="pl-3">
                        <MotionReveal as="p" className="node-text font-bold text-black leading-snug !text-[14px]">
                          {node.bold}
                        </MotionReveal>
                        {node.detail && (
                          <MotionReveal as="p" className="node-text text-black leading-snug mt-1 !text-[14px]" delay={0.05}>
                            {node.detail}
                          </MotionReveal>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="hidden lg:block relative" style={{ height: 400 }}>
            {variant === "zigzag" ? (
              <svg
                className="absolute pointer-events-none"
                style={{ top: 0, left: 0, width: "100%", height: "100%" }}
                preserveAspectRatio="none"
                viewBox="0 0 1100 480"
                fill="none"
              >
                <defs>
                  <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d7ccfe" />
                    <stop offset="25%" stopColor="#8B6EF3" />
                    <stop offset="50%" stopColor="#d7ccfe" />
                    <stop offset="75%" stopColor="#8B6EF3" />
                    <stop offset="100%" stopColor="#d7ccfe" />
                  </linearGradient>
                </defs>

                <path
                  d="M 88 168 L 308 318 L 528 168 L 748 318 L 968 168"
                  stroke="url(#zigzagGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                <path
                  d="M 88 168 L 308 318 L 528 168 L 748 318 L 968 168"
                  stroke="#8B6EF3"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  strokeDasharray="120 1640"
                  filter="url(#lineGlow)"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-1760"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="linear"
                  />
                </path>
              </svg>

            ) : (
              <svg
                className="absolute pointer-events-none"
                style={{ top: 0, left: 0, width: "100%", height: "100%" }}
                preserveAspectRatio="none"
                viewBox="0 0 1100 400"
                fill="none"
              >
                <defs>
                  <linearGradient id="paint0_linear_2556_899" x1="0" y1="0" x2="1100" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9562EB" />
                    <stop offset="1" stopColor="#D8CDFF" />
                  </linearGradient>
                  <linearGradient id="verticalStemGradient" x1="0" y1="144" x2="0" y2="260" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#9562EB" />
                    <stop offset="215.21%" stopColor="#D8CDFF" />
                  </linearGradient>
                  <filter id="lineGlowHoriz" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Horizontal line at y=200 */}
                <line x1="0" y1="200" x2="1100" y2="200" stroke="url(#paint0_linear_2556_899)" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" />

                {/* Top stems: from bottom of dot (y=144) to y=215 (below line), at x=110,550,990 */}
                <line x1="110" y1="144" x2="110" y2="235" stroke="url(#verticalStemGradient)" strokeWidth="3" strokeLinecap="butt" vectorEffect="non-scaling-stroke" />
                <line x1="550" y1="144" x2="550" y2="235" stroke="url(#verticalStemGradient)" strokeWidth="3" strokeLinecap="butt" vectorEffect="non-scaling-stroke" />
                <line x1="990" y1="144" x2="990" y2="235" stroke="url(#verticalStemGradient)" strokeWidth="3" strokeLinecap="butt" vectorEffect="non-scaling-stroke" />

                {/* Bottom stems: from y=185 (above line) to top of dot (y=258), at x=330,770 */}
                <line x1="330" y1="165" x2="330" y2="260" stroke="url(#verticalStemGradient)" strokeWidth="3" strokeLinecap="butt" vectorEffect="non-scaling-stroke" />
                <line x1="770" y1="165" x2="770" y2="260" stroke="url(#verticalStemGradient)" strokeWidth="3" strokeLinecap="butt" vectorEffect="non-scaling-stroke" />
              </svg>
            )}

            {/* The animated horizontal gradient spark overlay */}
            {variant === "horizontal" && (
              <div
                className="absolute left-0 w-full overflow-hidden z-0"
                style={{ top: "calc(50% - 1.5px)", height: "3px" }}
              >
                <div
                  className="h-full absolute top-0 left-0"
                  style={{
                    width: "30%",
                    background: "linear-gradient(to right, transparent, #9562EB 60%, #FFFFFF 100%)",
                    animation: "fiberSparkHoriz 3s ease-in-out infinite"
                  }}
                />
              </div>
            )}

            {nodes.slice(0, 5).map((node, idx) => {
              const pos = variant === "zigzag" ? desktopPositions[idx] : horizontalPositions[idx];
              if (!pos) return null;
              return (
                <React.Fragment key={idx}>
                  {/* Label */}
                  <div className="absolute" style={{ left: pos.labelLeft, top: pos.labelTop, width: pos.labelWidth }}>
                    <MotionReveal as="p" className="node-text font-bold text-black leading-snug !text-[14px]">
                      {node.bold}
                    </MotionReveal>
                    {node.detail && (
                      <MotionReveal as="p" className="node-text text-black leading-snug !text-[14px]" delay={0.05}>
                        {node.detail}
                      </MotionReveal>
                    )}
                  </div>
                  {/* Dot */}
                  <div className="absolute" style={{ left: pos.dotLeft, top: pos.dotTop }}>
                    <CircleDot size={24} />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Mobile vertical layout */}
        <div className="lg:hidden mt-8 relative pl-8 space-y-12">
          <div
            className="absolute left-[15px] top-[14px] bottom-[-30px] w-[3px] rounded-full overflow-hidden"
            style={{ background: "linear-gradient(180deg, #9562EB 0%, #D8CDFF 115.85%)" }}
          >
            <div
              className="w-full h-[30%] absolute top-0 left-0"
              style={{
                background: "linear-gradient(to bottom, transparent, #9562EB 60%, #FFFFFF 100%)",
                animation: "fiberSpark 2.5s ease-in-out infinite"
              }}
            />
          </div>

          {nodes.map((node, idx) => (
            <div key={idx} className="relative flex items-start">
              <div className="absolute -left-[30.5px] mt-1 z-10">
                <CircleDot size={20} />
              </div>
              <div className="pl-3">
                <MotionReveal as="p" className="text-base dark:text-slate-200 leading-relaxed !text-[14px] font-bold">
                  <span className="dark:text-white">{node.bold}</span>
                </MotionReveal>
                {node.detail && (
                  <MotionReveal as="p" className="text-base dark:text-slate-200 leading-relaxed !text-[14px] mt-1" delay={0.05}>
                    <span className="dark:text-slate-400">{node.detail}</span>
                  </MotionReveal>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
