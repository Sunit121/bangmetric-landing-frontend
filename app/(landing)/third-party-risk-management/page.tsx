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
  title: "Third-Party Risk Management",
  description:
    "",
  alternates: { canonical: "/third-party-risk-management" },
  openGraph: {
    title: "Third-Party Risk Management | BANGMETRIC",
    description:
      "",
    url: "/third-party-risk-management",
    type: "website",
  },
};

const irmIntroHeading = (
  <>
    Designed from the<br className="hidden md:inline" />
    vendor lifecycle back.<br className="hidden md:inline" />
    <span className="inline-block mt-1 text-slate-900">
      <span className="whitespace-nowrap">
        Built on{" "}
        <span className="text-green">ServiceNow</span>
      </span>
      <br />
      <span className="text-green">
        TRPM.
      </span>
    </span>
  </>
);

const irmIntroParagraphs = [
  <>
    At <strong>BANGMETRIC</strong>, we design <strong>ServiceNow TPRM</strong> around your vendor lifecycle, bringing greater <strong>consistency, visibility, and confidence to third-party risk management.</strong>
  </>,
  <>We streamline vendor onboarding, assessments, monitoring, renewals, and off boarding while connecting procurement, legal, risk, and security workflows. With centralized data, automated processes, and AI-powered insights, organizations can make faster, more informed decisions and manage<br /> third-party risk at scale. ServiceNow TPRM is the platform. Lifecycle design is the differentiator.</>
];

const irmJumpstartCards = [
  {
    title: "45 Day TPRM Foundation",
    description: (
      <>
        Built for organisations who need to quickly control third‑party risk without complexity.<br />
        <br />
        <ul className="list-disc list-inside">
          <li>Vendor inventory setup</li>
          <li>Tiering & classification</li>
          <li>Inherent risk assessments</li>
          <li>Core due diligence workflows</li>
          <li>Foundational dashboards</li>
        </ul>
      </>
    ),
  },
  {
    title: "60 Day TPRM Pro Jumpstart",
    description: (
      <>
        For organisations needing continuous oversight and integrated governance. <br />
        <br />
        <ul className="list-disc list-inside">
          <li>Residual risk workflows</li>
          <li>Automated reassessments</li>
          <li>AI-powered summaries (Now Assist)</li>
          <li>Integrated procurement → risk workflows</li>
          <li>Vendor performance dashboards</li>
          <li>Contract & document linkage</li>
        </ul>
        <br />
        A complete TPRM operating model, delivered with speed and purpose.
      </>
    ),
  },
];

const irmThinkNodes = [
  {
    bold: (
      <>
        We design TPRM around
        <br />
        lifecycle, not questionnaires
      </>
    ),
    detail: (
      <>
        Request → onboard →<br /> assess → monitor → renew<br /> → offboard → audit.
      </>
    ),
  },
  {
    bold: (
      <>
        We focus on<br /> continuous monitoring,<br /> not one-off checks
      </>
    ),
    detail: (
      <>
        Risk is dynamic — your<br /> monitoring should be too.
      </>
    ),
  },
  {
    bold: (
      <>
        We integrate TPRM
        <br />
        across the enterprise
      </>
    ),
    detail: (
      <>
        IRM, Procurement, Legal, SPM,
        <br />
        SecOps — one ecosystem.
      </>
    ),
  },
  {
    bold: "We apply AI with intent",
    detail: (
      <>
        Now Assist summaries of risks,
        <br />
        issues, documents, and activity
        <br />
        logs — reducing analysis from
        <br />
        hours to seconds.
      </>
    ),
  },
  {
    bold: (
      <>
        We right-size TPRM<br /> for the mid-market
      </>
    ),
    detail: (
      <>
        Fast deployment. Clear workflows.
        <br />
        Manageable for lean teams.
      </>
    ),
  },
];

const irmOverlapCards = [
  {
    title: (
      <>
        Vendor Inventory<br />& Classification
      </>
    ),
    image: "/images/vendor-inventory.png",
    features: [
      "Centralised vendor catalog",
      "Tiering and criticality scoring",
      "Clear linkage to services and processes",
    ]
  },
  {
    title: (
      <>
        Inherent & Residual<br /> Risk Assessments
      </>
    ),
    image: "/images/inherent-and-residual-risk.png",
    features: [
      "Standardised scoring frameworks",
      "Configurable questionnaires",
      "Automated risk calculation",
      "Real-time scoring updates"
    ]
  },
  {
    title: (
      <>
        Due Diligence &<br /> Control Testing
      </>
    ),
    image: "/images/due-diligence.png",
    features: [
      "Pre-built templates",
      "Automated workflows",
      "Evidence collection",
      "Audit-ready documentation"
    ]
  },
  {
    title: (
      <>
        Onboarding &<br /> Offboarding Automation
      </>
    ),
    image: "/images/onboarding-and-offboarding.png",
    features: [
      "Vendor lifecycle workflows",
      "Cross-department approvals",
      "Document and contract linkage",
      "Automated reminders & escalations"
    ]
  },
  {
    title: (
      <>
        Continuous Monitoring
      </>
    ),
    image: "/images/continuous-monitoring.png",
    features: [
      "Scheduled reassessments",
      "Risk alerts",
      "Performance and SLA monitoring",
      "AI-driven summaries"
    ]
  },
  {
    title: (
      <>
        Dashboards & Insights
      </>
    ),
    image: "/images/dashboard-and-insights.png",
    features: [
      "Single-pane-of-glass visibility",
      "Multi-level TPRM reporting",
      "KPIs, KRIs, trends, and risk posture",
      <>
        Operational, financial, and<br />
        compliance insights
      </>
    ]
  }
];

const irmMetrics = [
  {
    icon: "/images/vendor-assessment.png",
    title: <>30-40% reduction<br /> in manual vendor assessment effort</>,
  },
  {
    icon: "/images/compliance-posture.png",
    title: "Stronger compliance posture with real-time visibility",
  },
  {
    icon: "/images/vendor-onboarding.png",
    title: "Faster vendor onboarding with fewer delays",
  },
  {
    icon: "/images/inherent.png",
    title: "Clear understanding of inherent vs. residual risk",
  },
  {
    icon: "/images/imporved-audit.png",
    title: "Improved audit readiness and evidence quality",
  },
  {
    icon: "/images/non-compliant.png",
    title: "Reduced exposure to unstable or non-compliant vendors",
  },
  {
    icon: "/images/ai-summaries.png",
    title: <>Better decision-making powered<br /> by AI summaries<br /> & dashboards</>,
  },
];

const irmBangmetricSteps = [
  {
    title: <>Discover<br /> & Design</>,
    desc: (
      <>
        Design the vendor lifecycle around your governance model and risk appetite.
      </>
    ),
    image: "/images/discover.png"
  },
  {
    title: <>Build With<br /> Precision </>,
    desc: "Clean workflows, clear assessment models, unified vendor data",
    image: "/images/build-for-speed.png"
  },
  {
    title: <>Automate What<br /> Matters</>,
    desc: "Onboarding, reassessments, evidence collection, renewal workflows.",
    image: "/images/automate.png"
  },
  {
    title: <>Improve<br /> Continuously</>,
    desc: "Monitor, refine, expand, with AI improving signal clarity at every step.",
    image: "/images/improve.png"
  },
];

const irmWhyPoints = [
  {
    title: "Privately owned",
    desc: "accountability",
  },
  {
    title: "Mid‑market focus —",
    titleClassName: "font-normal",
    desc: <strong>simplified, fast, practical</strong>,
  },
  {
    title: "Cross-platform knowledge",
    desc: "(IRM, Procurement, SecOps, SPM) ",
  },
  {
    title: "AI-enabled",
    titleClassName: "font-normal",
    desc: <strong>TPRM expertise</strong>,
  },
  {
    title: "Outcome",
    titleClassName: "font-normal",
    desc: <strong>obsession, clarity, compliance, resilience</strong>,
  },
];

export default function IntegratedRiskManagement() {
  return (
    <>
      <Hero
        title={
          <>
            Third-Party Risk
            <br />
            Management
          </>
        }
        align="left"
        titleClassName="px-6 sm:px-0"
        bannerImage="/images/third-party-risk-management-banner.png"
      />
      <Intro
        heading={irmIntroHeading}
        paragraphs={irmIntroParagraphs}
        headingClassName="!leading-[1.25]"
      />
      <Jumpstarts
        cubeImage="/images/trpm-jumpstart-icon.png"
        sectionTitle={
          <>
            BANGEMTRIC TPRM Jumpstarts<br />
          </>
        }
        subtitle={
          <>
            Get third-party risk under control with fast, structured packages designed to establish visibility, streamline governance, and build a scalable vendor risk program.
          </>
        }
        cards={irmJumpstartCards}
        buttonText="Download Now"
      />
      <ThinkDifferently nodes={irmThinkNodes} variant="trpm" />
      <WhatWeBuild
        sectionTitle={
          <>
            What We Build With <span className="text-green">ServiceNow</span> TPRM
          </>
        }
        layout="overlap"
        overlapCards={irmOverlapCards}
      />
      <Results
        sectionTitle="The Results Our Clients See"
        subtitle={
          <>
            When <strong>TPRM</strong> is designed properly, organisations become more resilient
          </>
        }
        metrics={irmMetrics}
        highlightText={
          <>
            Not because you<br className="hidden md:block" /> added more control -<br className="hidden md:block" /> but because you<br className="hidden md:block" /> added clarity.
          </>
        }
        highlightColSpan={3}
        highlightClassName="md:py-4 md:px-0 lg:py-6 lg:px-0"
      />
      <BangmetricWay
        subtitle="When risk is designed properly, resilience grows from clarity"
        steps={irmBangmetricSteps}
        layout="tprm-grid"
      />
      <ITOMWhyChoose
        paragraphs={[
          <React.Fragment key="1">
            Because third-party risk touches every part of the business,<br /> and it cannot be left to spreadsheets and email.
          </React.Fragment>,
        ]}
        points={irmWhyPoints}
        imageRight="/images/third-party-risk-icon.png"
        imageClassName="tprm-domino-animate"
        imageWrapperClassName="lg:!w-[100%] lg:!h-[100%] lg:!top-0 lg:!right-[30px]"
      />
      <BottomCTA
        subtitle="Read Customer Success Stories & News on"
        title="Third-Party Risk Management"
        buttonHref="/"
      />
    </>
  );
}
