import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/landing/Hero";
import Intro from "@/components/landing/Intro";
import Jumpstarts from "@/components/landing/Jumpstarts";
import ThinkDifferently from "@/components/landing/ThinkDifferently";
import WhatWeBuild from "@/components/landing/WhatWeBuild";
import Results from "@/components/landing/Results";
import BangmetricWay from "@/components/landing/BangmetricWay";
import ITOMWhyChoose from "@/components/landing/ITOMWhyChoose";
import BottomCTA from "@/components/landing/BottomCTA";

export const metadata: Metadata = {
  title: "Strategic Portfolio Management",
  description:
    "ServiceNow SPM designed from the decision back — clarity across funding, priorities, and resources so leaders can see what to invest in and what to stop.",
  alternates: { canonical: "/strategic-portfolio-management" },
  openGraph: {
    title: "Strategic Portfolio Management | BANGMETRIC",
    description:
      "ServiceNow SPM designed from the decision back — connecting strategy, investment, and execution.",
    url: "/strategic-portfolio-management",
    type: "website",
  },
};

/* ─────────── SPM-specific content ─────────── */

const spmIntroHeading = (
  <>
    Designed from the <br className="hidden md:inline" />
    business back.<br />
    <span className="inline-block mt-2 text-slate-900">
      Built on{" "}
      <span className="text-green relative inline-block">
        ServiceNow
      </span>
    </span>
  </>
);

const spmIntroParagraphs = [
  "Many organizations struggle to connect vision, investment, and execution in a single, clear flow. At BANGMETRIC, we design Strategic Portfolio Management from the decision back, then enable it with ServiceNow SPM.",
  "We create clarity across funding, priorities, and resources, so leaders can see what to invest in, what to stop, and where value is truly delivered. ServiceNow is the enabler. Outcome-driven design is what turns strategy into measurable results. ",
];

const spmJumpstartCards = [
  {
    title: "45-Day SPM Foundation",
    description: (
      <>
        A rightsized, decision-ready foundation.
        <br />
        Demand → Portfolio → PPM → Roadmaps (core essentials).
        <br />
        Designed for organisations that need clarity fast.
      </>
    ),
  },
  {
    title: "60-Day SPM Pro",
    description: (
      <>
        For organisations ready to unlock the full SPM suite:
        <br />
        Strategic planning, scenario modelling, resource capacity,
        <br />
        APM basics, and AI-assisted prioritisation.
        <br />
        Delivered deliberately, not rushed.
      </>
    ),
  },
];

const spmThinkNodes = [
  { bold: "We design for decisions, not dashboards", detail: "SPM must help leaders choose — not just view charts." },
  { bold: "We emphasise flow and value, not admin", detail: "Less reporting overhead, more insight." },
  { bold: "We apply AI with intent", detail: "Guided prioritisation, capacity insights, value modelling, and scenario planning where it actually helps." },
  { bold: "We connect strategy to execution", detail: "Objectives → demands → projects → resources → value." },
  { bold: "We right-size SPM for the midmarket", detail: "Lean, fast, practical — without enterprise bloat." },
];

const spmOverlapCards = [
  {
    title: "Strategic Planning & Alignment",
    image: "/images/strategic.png",
    features: [
      "Objectives and Key Results (OKRs)",
      "Strategy → Investment alignment",
      "Scenario planning & what if modelling",
      "Roadmaps that reflect real capacity"
    ]
  },
  {
    title: "Portfolio & Investment Management",
    image: "/images/portfolio.png",
    features: [
      "Demand intake and evaluation",
      "Portfolio scoring and prioritisation",
      "Investment funding and tracking",
      "Multi-level visibility (enterprise → portfolios → teams)"
    ]
  },
  {
    title: "Project & Delivery Management",
    image: "/images/project-and-delivery.png",
    features: [
      "Predictable, transparent PPM",
      "Agile, hybrid, SAFe, or traditional work",
      "Resource and capacity planning",
      "Collaborative Work Management"
    ]
  },
  {
    title: "Application & Innovation Portfolio",
    image: "/images/application-and-innovation.png",
    features: [
      "Application Portfolio Management (APM)",
      "TCO, risk, lifecycle health",
      "Innovation backlog management",
      "AI-supported idea triage"
    ]
  },
  {
    title: "Intelligence & Automation",
    image: "/images/intelligence-and-automation.png",
    features: [
      "Now Assist for SPM (AI)",
      "Predictive resource insights",
      "Budget/variance signals",
      "Automated workflows and governance"
    ]
  }
];

const spmMetrics = [
  {
    icon: "/images/icon-1.png",
    title: "Real transparency into budgets, resources, and priority",
  },
  {
    icon: "/images/icon-2.png",
    title: "Clarity on what to fund (and what to stop)",
  },
  {
    icon: "/images/icon-3.png",
    title: "Higher resource utilisation",
  },
  {
    icon: "/images/icon-4.png",
    title: "Reduced project cycle times",
  },
  {
    icon: "/images/icon-5.png",
    title: "Faster decision-making with less friction",
  },
  {
    icon: "/images/icon-1.png",
    title: "Stronger alignment between business and IT",
  },
  {
    icon: "/images/icon-2.png",
    title: "Better value delivery, not just more output",
  },
];


const spmBangmetricSteps = [
  {
    title: "Discover\n & Design",
    desc: "We map your services, dependencies, risks, and operations culture, not just your IP ranges.",
    image: "/images/discover.png"
  },
  {
    title: "Build for\n Speed",
    desc: "We implement visibility and mapping with discipline, governance, and purpose.",
    image: "/images/build-for-speed.png"
  },
  {
    title: "Automate\n What\n Matters",
    desc: "AI, anomaly detection, automation, and orchestration, aligned to real operational outcomes.",
    image: "/images/automate.png"
  },
  {
    title: "Improve\n Continuously",
    desc: "We tune the CMDB, maps, rules, and signals as your estate evolves.",
    image: "/images/improve.png"
  },
];

const spmWhyPoints = [
  {
    title: "Privately owned",
    desc: "— no investor agenda",
  },
  {
    title: "Midmarket specialists",
    desc: "— simplicity, speed, and practical design",
  },
  {
    title: "Outcome obsessed",
    desc: "— value, alignment, utilisation",
  },
  {
    title: "End-to-end",
    desc: "—  strategy → design → build → AI → optimisation ",
  },
];

export default function SPMPage() {
  return (
    <>
        <Hero title="Strategic Portfolio Management" />
        <Intro
          heading={spmIntroHeading}
          paragraphs={spmIntroParagraphs}
        />
        <Jumpstarts
          cubeImage="/images/spm-icon.png"
          imageAnimationClass="bubble-float-animate"
          sectionTitle={
            <>
              Our SPM Jumpstarts<br />
              (Fast, Without the Noise)
            </>
          }
          subtitle="BANGMETRIC delivers SPM implementations that are fast, clean, and thoughtfully designed, not template dumps."
          cards={spmJumpstartCards}
        />
        <ThinkDifferently nodes={spmThinkNodes} variant="two-columns" />
        <WhatWeBuild
          sectionTitle={"What We Build With\nServiceNow SPM"}
          subtitle="ServiceNow becomes the operating system for strategic clarity and portfolio execution."
          layout="overlap"
          overlapCards={spmOverlapCards}
        />
        <Results
          sectionTitle="The Results Our Clients See"
          subtitle="When SPM is designed properly, organisations gain"
          metrics={spmMetrics}
          highlightText={
            <>
              You stop managing projects.<br />
              You start managing the business.
            </>
          }
          highlightColSpan={3}
        />
        <BangmetricWay
          subtitle="When SPM is designed properly, execution matches strategy"
          steps={spmBangmetricSteps}
          layout="vertical-cards"
        />
        <ITOMWhyChoose
          paragraphs={[
            <React.Fragment key="1">
              Because they don’t want another system<br />
              implementation. They want strategic clarity.
            </React.Fragment>,
          ]}
          points={spmWhyPoints}
        />
        <BottomCTA
          subtitle="Read Customer Success Stories & News on"
          title="HR Service Delivery"
          buttonHref="/hr-service-delivery"
        />
    </>
  );
}
