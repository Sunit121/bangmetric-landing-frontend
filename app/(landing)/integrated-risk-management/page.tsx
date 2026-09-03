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
  title: "Integrated Risk Management",
  description:
    "ServiceNow Integrated Risk Management designed to help organisations see risk earlier, control it better, and act with confidence across the business.",
  alternates: { canonical: "/integrated-risk-management" },
  openGraph: {
    title: "Integrated Risk Management | BANGMETRIC",
    description:
      "ServiceNow Integrated Risk Management for clearer visibility, better governance, and smarter risk decisions.",
    url: "/integrated-risk-management",
    type: "website",
  },
};

const irmIntroHeading = (
  <>
    Designed for<br className="hidden md:inline" />
    Real Resilience.<br className="hidden md:inline" />
    <span className="inline-block mt-1 text-slate-900">
      Built on{" "}
      <span className="text-green relative inline-block">
        ServiceNow
      </span>
    </span>
  </>
);

const irmIntroParagraphs = [
  <>
    Risk isn’t just about compliance checklists. It’s about making decisions with clarity.
    When policies sit in PDFs, controls live in spreadsheets, and audits feel reactive,
    risk becomes fragmented and hard to trust. At <strong>BANGMETRIC</strong>, we design
    ServiceNow IRM to reflect how your business operates, bringing structure,
    visibility, and confidence to how risk is managed every day.
  </>,
  "We unify policies, controls, vendors, audits, and operational risk into one connected experience. By automating evidence collection, reducing duplication, and linking risk directly to business impact, we help organisations move from reactive oversight to proactive control. ServiceNow IRM is the platform. Thoughtful design is what turns it into a strategic advantage."
];

const irmJumpstartCards = [
  {
    title: "45‑Day IRM",
    description: (
      <>
        A structured entry point into modern risk management:<br />
        <br />
        Policy & Compliance → Risk Register → Automated testing basics → Foundational workflows → Core dashboards.
        <br />
        <br />
        Built for organisations that need visibility, consistency,<br /> and control fast.
      </>
    ),
  },
  {
    title: "60‑Day IRM",
    description: (
      <>
        Designed for organisations ready for connected, intelligent risk operations: <br />
        <br />
        Advanced risk scoring → TPRM → Business continuity → Automated evidence → AI‑assisted insights → Cross‑functional workflows.
      </>
    ),
  },
];

const irmThinkNodes = [
  {
    bold: (
      <>
        We design IRM around decisions,
        <br />
        not documents
      </>
    ),
    detail: (
      <>
        Risk exists so organisations can choose wisely — not just comply.
      </>
    ),
  },
  {
    bold: (
      <>
        We unify risk, security, operations,<br /> and vendor management
      </>
    ),
    detail: (
      <>
        One set of data. One view.
        <br />
        One operating rhythm.
      </>
    ),
  },
  {
    bold: (
      <>
        We make compliance effortless,
        <br />
        not administrative
      </>
    ),
    detail: (
      <>
        Automated testing. Clean evidence.
        <br />
        Real-time monitoring.
      </>
    ),
  },
  {
    bold: "We apply AI with intent",
    detail: (
      <>
        Identifying anomalies, predicting control failures, and prioritising high‑impact issues.
      </>
    ),
  },
  {
    bold: (
      <>
        We right-size IRM for<br /> the mid‑market
      </>
    ),
    detail: (
      <>
        Lean enough to adopt fast.<br /> Powerful enough to scale.
      </>
    ),
  },
];

const irmOverlapCards = [
  {
    title: (
      <>
        Policy & Compliance
        <br />
        Management
      </>
    ),
    image: "/images/compliance_management.png",
    features: [
      "Centralised policies, standards, and controls",
      "Automated evidence collection",
      "Real-time monitoring & compliance alerts",
      "Standardised documentation & audit trails "
    ]
  },
  {
    title: (
      <>
        Enterprise Risk
        <br />
        Management
      </>
    ),
    image: "/images/enterprise_risk_management.png",
    features: [
      "Risk identification, scoring, & treatment",
      "Inherent & residual risk modelling",
      "KRIs/KPIs mapped to live data",
      "AI-driven risk insights"
    ]
  },
  {
    title: (
      <>
        Third-Party Risk
        <br />
        Management (TPRM)
      </>
    ),
    image: "/images/tprm.png",
    features: [
      "Vendor onboarding assessments",
      "Continuous monitoring of vendor risks",
      "Automated questionnaires & controls",
      "Clear visibility of supply chain exposure"
    ]
  },
  {
    title: (
      <>
        Audit Management
      </>
    ),
    image: "/images/audit_management.png",
    features: [
      "Streamlined audit planning & execution",
      "Automated evidence gathering",
      "Issue tracking & remediation",
      "End-to-end audit cycle transparency"
    ]
  },
  {
    title: (
      <>
        Business Continuity &
        <br />
        Operational Resilience
      </>
    ),
    image: "/images/business_continuity.png",
    features: [
      "Impact analyses & continuity planning",
      "Crisis workflows",
      "Cross‑functional response automation",
      "Playbooks for disruption events"
    ]
  },
  {
    title: (
      <>
        Integration Across
        <br />
        the Business
      </>
    ),
    image: "/images/integration.png",
    features: [
      <>
        Ties into ITSM, SecOps, Procurement,
        <br />
        SPM, ITOM
      </>,
      "End-to-end risk visibility across services, vendors, and operations",
    ]
  }
];

const irmMetrics = [
  {
    icon: "/images/reduction.png",
    title: "50–70% reduction in manual compliance work",
  },
  {
    icon: "/images/Real-time-risk.png",
    title: "Real-time risk visibility across the enterprise",
  },
  {
    icon: "/images/faster-audits.png",
    title: "Faster audits with automated evidence collection",
  },
  {
    icon: "/images/vendor-governance.png",
    title: "Stronger vendor governance",
  },
  {
    icon: "/images/residual-risk.png",
    title: "Clearer understanding of inherent vs. residual risk",
  },
  {
    icon: "/images/resource-allocation.png",
    title: "Improved decision-making and resource allocation",
  },
  {
    icon: "/images/higher-resilience.png",
    title: "Higher resilienceduring disruptions",
  },
];

const irmBangmetricSteps = [
  {
    title: "Discover\n & Design",
    desc: (
      <>
        Understand how you make decisions today.
        <br />
        Define the risk posture you want tomorrow.
      </>
    ),
    image: "/images/discover.png"
  },
  {
    title: "Build for\n Clarity",
    desc: "Accurate data. Clean workflows. Reliable governance.",
    image: "/images/build-for-speed.png"
  },
  {
    title: "Automate\n What\n Matters",
    desc: "Compliance testing, evidence collection, vendor assessments are designed to reduce effort, not add it.",
    image: "/images/automate.png"
  },
  {
    title: "Improve\n Continuously",
    desc: "Risk posture evolves, your IRM program does too.",
    image: "/images/improve.png"
  },
];

const irmWhyPoints = [
  {
    title: "Privately owned accountability",
    desc: "— No investor pressure",
  },
  {
    title: "Mid‑market expertise",
    desc: (
      <>
        — Practical, fast,
        <br />
        and right-sized
      </>
    ),
  },
  {
    title: "Cross-platform fluency",
    desc: "— IT, security, HR, operations, vendors",
  },
  {
    title: "Deep IRM knowledge",
    desc: "— Governance → compliance → audit → continuity",
  },
  {
    title: "Outcome obsession",
    desc: (
      <>
        — Resilience,
        <br />
        clarity, trust
      </>
    ),
  },
];

export default function IntegratedRiskManagement() {
  return (
    <>
      <Hero
        title={
          <>
            Integrated Risk
            <br />
            Management
          </>
        }
        align="left"
        bannerImage="/images/integrated_risk_management_banner.png"
      />
      <Intro
        heading={irmIntroHeading}
        paragraphs={irmIntroParagraphs}
        headingClassName="!leading-[1.25]"
      />
      <Jumpstarts
        cubeImage={null}
        sectionTitle={
          <>
            BANGMETRIC IRM Jumpstarts<br />
          </>
        }
        subtitle={
          <>
            Our IRM accelerators are designed to deliver rapid value without compromising control, governance, or accuracy.
          </>
        }
        cards={irmJumpstartCards}
        buttonText="Download Now"
      />
      <ThinkDifferently nodes={irmThinkNodes} variant="three-columns" />
      <WhatWeBuild
        sectionTitle={
          <>
            What We Build With <span className="text-green">ServiceNow</span> IRM
          </>
        }
        layout="overlap"
        overlapCards={irmOverlapCards}
      />
      <Results
        sectionTitle="The Results Our Clients See"
        subtitle="When IRM is designed intentionally, organisations operate with confidence:"
        metrics={irmMetrics}
        highlightText={
          <>
            Not because we created more<br /> reports — but because we <br /> created clarity.
          </>
        }
        highlightColSpan={3}
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
            Risk is too important to outsource to a template.<br />
            <strong>BANGMETRIC brings:</strong>
          </React.Fragment>,
        ]}
        points={irmWhyPoints}
        imageRight="/images/integrated_risk_management_3d.png"
        imageClassName="bubble-float-animate"
        imageWrapperClassName="lg:!w-[90%] lg:!h-[90%] lg:!top-0 lg:!right-0"
      />
      <BottomCTA
        subtitle="Read Customer Success Stories & News on"
        title="Enterprise Asset Management"
        buttonHref="/"
      />
    </>
  );
}
