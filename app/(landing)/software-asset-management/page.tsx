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

const samIntroHeading = (
  <>
    Designed from the<br className="hidden md:inline" />
    entitlement back<br className="hidden md:inline" />
    <span className="inline-block text-slate-900">
      Built on{" "}
      <span className="text-green relative inline-block">
        ServiceNow
      </span>
    </span>
  </>
);

const samIntroParagraphs = [
  <>
    Software spend can quickly become difficult to control when licenses, contracts,
usage, and renewals are scattered across teams and tools. At <strong>BANGMETRIC</strong>,
we design ServiceNow Software Asset Management (SAM) around the full
software lifecycle, giving organizations the visibility, compliance, and control
needed to manage software with confidence.
  </>,
  <>
  We help reduce unnecessary spend, eliminate unused or duplicate licenses,
improve data quality, and simplify audits and renewals. <strong>BANGMETRIC ServiceNow SAM</strong> is
the platform. Design is the differentiator.
  </>
];

const irmJumpstartCards = [
  {
    title: "45 Day SAM Foundation",
    description: (
      <>
        A structured, rapid path to a trustworthy software asset baseline<br />
        <br />
        <ul className="list-disc list-inside">
            <li>Core data normalization</li>
            <li>Basic entitlement load</li>
            <li>Compliance foundations</li>
            <li>SaaS visibility setup</li>
            <li>Optimization insights starter pack</li>
        </ul>
         <br/>
            Perfect for organisations needing clarity fast, without complexity.
      </>
    ),
  },
  {
    title: "60 Day SAM Pro Jumpstart",
    description: (
      <>
        For organisations ready to optimize cost and compliance across the full software estate.<br />
        <br />
        <ul className="list-disc list-inside">
            <li>Advanced reconciliation</li>
            <li>Automated reclamation</li>
            <li>Full entitlement rationalization</li>
            <li>Renewal & optimization workflows</li>
            <li>SaaS management with cost insights</li>
            <li>AI-supported normalization</li>
        </ul>
        <br />
        SAM that delivers measurable savings, not administrative overhead. 
      </>
    ),
  },
];

const irmThinkNodes = [
  {
    bold: (
      <>
        We design SAM around 
        entitlements<br/> & outcomes,
        not spreadsheets
      </>
    ),
    detail: (
      <>
        Clean data → clean results<br/>
        → confident decisions.
      </>
    ),
  },
  {
    bold: (
      <>
       We integrate SAM<br />
       across the lifecycle
      </>
    ),
    detail: (
    <>
    Procurement → request → deployment<br/>
→ usage → compliance → retirement.
    </>
    ),
  },
  {
    bold: (
      <>
        We connect SAM<br/>
        to real usage
      </>
    ),
    detail: (
      <>
        Device, user, SaaS, on-prem,<br/>
        virtual, one view.
      </>
    ),
  },
  {
    bold: (
        <>
        We apply AI<br/>
        with intent
        </>
    ),
    detail: (
      <>
        To classify, normalize, and identify<br /> optimization opportunities, not just<br/> automate noise.
      </>
    ),
  },
  {
    bold: (
        <>
        We right-size SAM<br/>
        for the mid-market
        </>
    ),
    detail: (<>
      Lean, fast, manageable.<br/>
      No over-engineering.
    </>
    ),
  },
];

const irmOverlapCards = [
  {
    title: (
      <>
       Unified Software<br/>
       Visibility
      </>
    ),
    image: "/images/software-visibility.png",
    features: [
      "Real-time inventory of all software",
      "Normalized, accurate data",
      "Unified view of installs, rights,and usage",
    ]
  },
  {
    title: (
      <>
        License<br/>Optimization
      </>
    ),
    image: "/images/license-optimization.png",
    features: [
      "Identify unused licenses",
      "Automate reclamation",
      "Optimize allocations by usage",
      "Reduce overspend on renewals"
    ]
  },
  {
    title: (
      <>
        SaaS Management
      </>
    ),
    image: "/images/saas-management.png",
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
        Compliance &<br/>
        Audit Readiness
      </>
    ),
    image: "/images/audit-readiness.png",
    features: [
      "Automated reconciliation",
      "Continuous license position",
      "Contract alignment",
      "Vendor-specific models and rules"
    ]
  },

  {
    title: (
      <>
        Request-to-Deploy<br/> Automation
      </>
    ),
    image: "/images/integration.png",
    features: [
      "Integrated with ITSM",
      "Fulfilment workflows",
      "Approval & entitlement checks",
      "Automated provisioning"
    ]
  },
    {
    title: (
      <>
        Software Lifecycle<br/>
        & Governance
      </>
    ),
    image: "/images/software-lifecycle.png",
    features: [
      "Renewal management",
      "Contract linkage",
      "Budgeting and planning",
      <>Intelligence for future<br />purchasing decisions</>
    ]
  }
  
];

const irmMetrics = [
  {
    icon: "/images/reduction-in-software.png",
    title: "15-25% reduction in software spend in year one",
  },
  {
    icon: "/images/audit.png",
    title: "Faster, cleaner audit responses",
  },
  {
    icon: "/images/software-duplication.png",
    title: "Reduced shelfware and duplication",
  },
  {
    icon: "/images/view.png",
    title: "Unified view of SaaS and on-prem software",
  },
  {
    icon: "/images/renewals.png",
    title: "More predictable renewals",
  },
  {
    icon: "/images/risk.png",
    title: "Lower risk of non-compliance penalties",
  },
  {
    icon: "/images/fulfilment-times.png",
    title: "Improved ITSM fulfilment times",
  },
];

const irmBangmetricSteps = [
  {
    title: "Discover\n & Design",
    desc: "We assess spend, usage, contracts, and entitlements, then design SAM around cost, compliance, and control.",
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
    title: <>Privately owned <strong>accountability</strong></>,
    desc: "",
    titleClassName: "font-normal",
  },
  {
    title: <>Mid-market expertise, simplified, fast, <strong>right-sized solutions</strong></>,
    desc: "",
    titleClassName: "font-normal",
  },
  {
    title: <>Full <strong>ITAM experience across HAM + SAM + CMDB</strong></>,
    desc: "",
    titleClassName: "font-normal",
  },
  {
    title: <>Cross-platform integration including <strong>ITSM, Procurement, Finance</strong></>,
    desc: "",
    titleClassName: "font-normal",
  },
  {
    title: <><strong>Outcome-driven results,</strong> real savings,</>,
    desc: "real compliance, real control",
    titleClassName: "font-normal",
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
        bannerImage="/images/sam_banner.png"
        bannerImageClassName="!object-cover !object-[65%_center]"
        titleColor="#000000"
        titleClassName="!text-left"
      />
      <Intro
        heading={samIntroHeading}
        paragraphs={samIntroParagraphs}
      />
      <Jumpstarts
        cubeImage="/images/sam-jumpstart.png"
        topAreaClassName="!mb-[15px] !items-flex-center"
        sectionTitle={
          <>
            BANGEMTRIC SAM Jumpstarts<br />
          </>
        }
        subtitle={
          <>
            Get your <strong>SAM foundation</strong> up and running quickly with structured, outcome-driven packages designed to bring clarity, control, and optimization to your software estate.
          </>
        }
        cards={irmJumpstartCards}
        buttonText="Download Now"
      />
      <ThinkDifferently nodes={irmThinkNodes} variant="three-columns" />
      <WhatWeBuild
        sectionTitle={
          <>
            What We Build With <span className="text-green">ServiceNow</span> SAM
          </>
        }
        layout="overlap"
        overlapCards={irmOverlapCards}
      />
      <Results
        sectionTitle="The Results Our Clients See"
        subtitle={<>When <strong>SAM</strong> is designed intentionally, organisations see immediate financial and operational impact:</>}
        metrics={irmMetrics}
        highlightText={
          <>
            Not because they tracked<br/> more data, but because they<br/> acted on the right data.
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
            Software spending shouldn't be a black box. <br/>And audits shouldn't require a war room.
          </React.Fragment>,
        ]}
        points={irmWhyPoints}
        imageRight="/images/organization-choose-3d.png"
        imageClassName="space-drift-animate lg:!object-center"
        imageWrapperClassName="!w-full !h-full !top-0 !right-0 lg:!w-[90%] lg:!h-[90%] lg:!mx-auto"
        imageContainerClassName="!h-[180px] sm:!h-[220px] lg:!h-[500px]"
      />
      <BottomCTA
        subtitle="Read Customer Success Stories & News on"
        title="Software Asset Management"
        buttonHref="/"
      />
    </>
  );
}
