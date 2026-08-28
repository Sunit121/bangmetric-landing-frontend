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
  title: "Software Asset Management",
  description:
    "ServiceNow Software Asset Management designed to help organisations optimise their software investments, ensure compliance, and reduce risk.",
  alternates: { canonical: "/software-asset-management" },
  openGraph: {
    title: "Software Asset Management | BANGMETRIC",
    description:
      "ServiceNow Software Asset Management designed to help organisations optimise their software investments, ensure compliance, and reduce risk.",
    url: "/software-asset-management",
    type: "website",
  },
};

const irmIntroHeading = (
  <>
    Designed from the<br className="hidden md:inline" />
    lifecycle back.<br className="hidden md:inline" />
    <span className="inline-block mt-2 text-slate-900">
      Built on{" "}
      <span className="text-green relative inline-block">
        ServiceNow
      </span>
    </span>
  </>
);

const irmIntroParagraphs = [
  <>
    Every device has a lifecycle, from request to retirement. When that lifecycle
    isn’t designed properly, hardware becomes reactive, costly, and difficult to track.
    At <strong>BANGMETRIC</strong>, we design <strong>ServiceNow Hardware Asset Management (HAM) </strong>
    around full asset visibility, bringing clarity and control to every stage.
  </>,
  <>
    <strong>We streamline procurement, stockrooms, assignments, refresh cycles, and
      retirement</strong> with smart automation and real-time tracking. The result is accurate
    inventory, controlled spend, smoother onboarding, and audit-ready compliance.
    ServiceNow HAM is the platform. Lifecycle design makes it powerful.
  </>
];

const irmJumpstartCards = [
  {
    title: "45 Day HAM Foundation",
    description: (
      <>
        For organisations that need visibility, control, and lifecycle basics fast. <br />
        <br />
        <ul className="list-disc list-inside">
          <li>Stockrooms</li>
          <li>Receiving</li>
          <li>Normalisation</li>
          <li>Core lifecycle workflows</li>
          <li>Foundational dashboards</li>
        </ul>
        <br />
        Designed to bring order, accuracy, and auditability quickly.
      </>
    ),
  },
  {
    title: "60 Day HAM Pro",
    description: (
      <>
        For organisations ready for connected, intelligent lifecycle management.<br />
        <br />
        <ul className="list-disc list-inside">
          <li>Mobile operations</li>
          <li>HR onboarding integration</li>
          <li>Asset bundles</li>
          <li>Refresh automation</li>
          <li>Compliance & contracts</li>
          <li>Lifecycle forecasting dashboards</li>
        </ul>
        <br />
        A complete, modern HAM foundation, delivered with intent,<br /> not complexity.
      </>
    ),
  },
];

const irmThinkNodes = [
  {
    bold: (
      <>
        We design around the<br /> lifecycle, not the stockroom
      </>
    ),
    detail: (
      <>
        Everything begins and ends<br />
        with the movement of the asset.
      </>
    ),
  },
  {
    bold: (
      <>
        We right-size <br /> for the mid‑market
      </>
    ),
    detail: (
      <>
        Lean, simple, and efficient —<br /> no bloated processes.
      </>
    ),
  },
  {
    bold: (
      <>
        We prioritise accuracy<br /> over volumege
      </>
    ),
    detail: (
      <>
        A small set of trusted records beats<br /> a massive set of noisy ones.
      </>
    ),
  },
  {
    bold: (
      <>
        We use automation<br /> with intent
      </>
    ),
    detail: (
      <>
        Auto-receiving, reconciliation, refresh cycles, and compliance triggers that remove manual work.
      </>
    ),
  },
  {
    bold: (
      <>
        We connect HAM<br /> to the broader ecosystem
      </>
    ),
    detail: (<>
      HR onboarding → ITSM requests→ <br /> Procurement → Finance → <br />ITAM → Offboarding.
    </>
    ),
  },
];

const irmOverlapCards = [
  {
    title: (
      <>
        Complete Hardware<br /> Lifecycle Management
      </>
    ),
    image: "/images/hardware-lifecycle.png",
    features: [
      <>Procurement → receiving → assignment <br />→ refresh → retirement </>,
      "Automated workflows for every stage ",
      "Clear ownership and chain of custody ",
    ]
  },
  {
    title: (
      <>
        Mobile-enabled<br /> Operations
      </>
    ),
    image: "/images/mobile‑enabled-operations.png",
    features: [
      "Mobile receiving",
      "Mobile stockroom ops",
      "Mobile “My Locker” for employees",
    ]
  },
  {
    title: (
      <>
        Stockrooms &<br /> Inventory Control
      </>
    ),
    image: "/images/inventory-control.png",
    features: [
      "Usage-based insights",
      "Shadow IT discovery",
      "Renewal forecasting",
      "Cost-per-user optimization"
    ]
  },
  {
    title: (
      <>
        Asset Visibility<br /> & Compliance
      </>
    ),
    image: "/images/asset-visibility.png",
    features: [
      "Normalisation of asset data",
      "Warranty/contract linkage",
      "Depreciation and lifecycle insights",
      "Audit-ready records"
    ]
  },

  {
    title: (
      <>
        Workflow Integration
      </>
    ),
    image: "/images/workflow-integration.png",
    features: [
      "HR onboarding/offboarding",
      "ITSM request fulfilment",
      "Procurement approvals",
      "Finance reconciliation"
    ]
  },
  {
    title: (
      <>
        HAM Intelligence
      </>
    ),
    image: "/images/ham-intelligence.png",
    features: [
      "Dashboards for lifecycle stages",
      "Refresh forecasting",
      "Lost/stale asset detection",
      "Automated asset bundling"
    ]
  }

];

const irmMetrics = [
  {
    icon: "/images/asset-administration.png",
    title: "40–60% reduction in manual asset administration",
  },
  {
    icon: "/images/employee-onboarding.png",
    title: "Faster employee onboarding with ready-to-go devices",
  },
  {
    icon: "/images/asset-inventory.png",
    title: "Clean, accurate asset inventory",
  },
  {
    icon: "/images/reuse-visibility.png",
    title: "Reduced hardware spend through reuse & visibility",
  },
  {
    icon: "/images/predictable-cycles.png",
    title: "More predictable refresh cycles",
  },
  {
    icon: "/images/compliance-gaps.png",
    title: "Better audit results, fewer compliance gaps",
  },
  {
    icon: "/images/improved-hardware.png",
    title: "Improved hardware experience for employees",
  },
  {
    icon: "/images/stronger-governance.png",
    title: "Stronger governance across locations & teams",
  },
];

const irmBangmetricSteps = [
  {
    title: "Discover\n & Design",
    desc: (
      <>
        We assess spend, usage, contracts, and entitlements,<br /> then design SAM around cost, compliance, and control.
      </>
    ),
    image: "/images/discover.png"
  },
  {
    title: "Build for\n Clarity",
    desc: "Clean data, clear processes, connected workflows.",
    image: "/images/build-for-speed.png"
  },
  {
    title: "Automate\n What\n Matters",
    desc: "Reclamation, reconciliation, renewals, compliance checks.",
    image: "/images/automate.png"
  },
  {
    title: "Improve\n Continuously",
    desc: "Monitor spend, usage, and compliance; optimize every renewal cycle.",
    image: "/images/improve.png"
  },
];

const irmWhyPoints = [
  {
    title: <><strong>Privately owned</strong> accountability</>,
    desc: "",
    titleClassName: "font-normal",
  },
  {
    title: <>Mid‑market <strong>simplicity & speed</strong></>,
    desc: "",
    titleClassName: "font-normal",
  },
  {
    title: <><strong>Cross-functional</strong> expertise (IT, HR,<br /> Finance, Procurement)</>,
    desc: "",
    titleClassName: "font-normal",
  },
  {
    title: <>Deep <strong>ITAM experience</strong></>,
    desc: "",
    titleClassName: "font-normal",
  },
  {
    title: <><strong>Outcome-driven</strong> delivery</>,
    desc: "",
    titleClassName: "font-normal",
  },
];

export default function IntegratedRiskManagement() {
  return (
    <>
      <Hero
        title={
          <>
            Hardware Asset
            <br />
            Management
          </>
        }
        align="left"
        bannerImage="/images/ham_banner.png"
        bannerImageClassName="!object-cover !object-[65%_center]"
        titleColor="#000000"
        titleClassName="!text-left"
      />
      <Intro
        heading={irmIntroHeading}
        paragraphs={irmIntroParagraphs}
        headingClassName="!leading-[1.1]"
      />
      <Jumpstarts
        cubeImage="/images/ham-jumpstart.png"
        imageAnimationClass="bubble-float-animate"
        imageContainerClassName="!w-40 !h-40 sm:!w-48 sm:!h-48 md:!w-[20rem] md:!h-[17rem]"
        topAreaClassName="!mb-[15px] !items-center"
        sectionClassName="!pt-8 md:!pt-28"
        sectionTitle={
          <>
            BANGEMTRIC HAM Jumpstarts<br />
          </>
        }
        subtitle={
          <>
            Get your hardware asset lifecycle under control with fast, structured packages designed to establish visibility, accuracy, and operational efficiency, without unnecessary complexity.
          </>
        }
        cards={irmJumpstartCards}
        buttonText="Download Now"
      />
      <ThinkDifferently nodes={irmThinkNodes} variant="three-columns" />
      <WhatWeBuild
        sectionTitle={
          <>
            What We Build With <span className="text-green">ServiceNow</span> HAM
          </>
        }
        layout="overlap"
        overlapCards={irmOverlapCards}
      />
      <Results
        sectionTitle="The Results Our Clients See"
        subtitle={<>When <strong>HAM</strong> is designed properly, the business gains control<br /> and confidence:</>}
        metrics={irmMetrics}
        highlightText={
          <>
            Not because we track<br /> more data, but because<br /> we track the right things<br /> the right way.
          </>
        }
        highlightColSpan={2}
        highlightClassName="md:py-4 md:px-0 lg:py-6 lg:px-0"
      />
      <BangmetricWay
        subtitle="When risk is designed properly, resilience grows from clarity"
        steps={irmBangmetricSteps}
        layout="vertical-cards"
      />
      <ITOMWhyChoose
        paragraphs={[
          <React.Fragment key="1">
            Software spending shouldn't be a black box. <br />And audits shouldn't require a war room.
          </React.Fragment>,
        ]}
        points={irmWhyPoints}
        imageRight="/images/why-choose-ham-3d.png"
        imageClassName="animate-hero-zoom-fast lg:!object-center"
        imageWrapperClassName="!w-full !h-full !top-0 !right-0 lg:!w-[90%] lg:!h-[90%] lg:!mx-auto"
        imageContainerClassName="!h-[180px] sm:!h-[220px] lg:!h-[500px]"
      />
      <BottomCTA
        subtitle="Read Customer Success Stories & News on"
        title="Hardware Asset Management"
        buttonHref="/"
      />
    </>
  );
}
