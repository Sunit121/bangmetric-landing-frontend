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
  title: "IT Operations Management",
  description:
    "ServiceNow ITOM designed from the service back — targeted discovery, service mapping you can trust, and event intelligence that cuts noise instead of adding dashboards.",
  alternates: { canonical: "/it-operations-management" },
  openGraph: {
    title: "IT Operations Management | BANGMETRIC",
    description:
      "ServiceNow ITOM designed from the service back — visibility, service mapping, and event intelligence for the midmarket.",
    url: "/it-operations-management",
    type: "website",
  },
};

const itomIntroHeading = (
  <>
    Designed from the <br className="hidden md:inline" />
    service back. <br />
    <span className="inline-block mt-2 text-slate-900">
      Built on{" "}
      <span className="text-green relative inline-block">
        ServiceNow
      </span>
    </span>
  </>
);

const itomIntroParagraphs = [
  "Modern IT environments don't fail from a lack of monitoring, they fail from a lack of clarity. Hybrid cloud, microservices, SaaS sprawl, and legacy systems create visibility everywhere but insight nowhere. At BANGMETRIC, we design IT operations from the services that matter, then enable that clarity with ServiceNow ITOM.",
  "We focus on meaningful visibility, accurate service mapping, and intelligent event management, so teams reduce noise, prevent major incidents, and operate proactively.",
  "ServiceNow is the engine. Design-led implementation is what makes your environment truly understandable"
];

const itomJumpstartCards = [
  {
    title: "45-Day ITOM Visibility Foundation",
    description:
      "A clean, accurate, rightsized visibility layer: From Hybrid discovery to CMDB, you can actually rely on the targeted service context. Designed for organisations who want clarity fast. ",
  },
  {
    title: "60-Day ITOM Pro Jumpstart",
    description: (
      <>
        For teams ready to activate intelligence:<br />
        Event Management → Noise reduction → Anomaly detection → Service Mapping.
      </>
    )
  },
];

const itomThinkNodes = [
  { bold: "We map services, not IP ranges", detail: "Discovery is valuable, when targeted, scoped, and designed around the business service." },
  { bold: "We build maps that matter", detail: "Service Mapping is only powerful when it reflects reality, clean, accurate, and continuously maintained." },
  { bold: "We apply AI with intent", detail: "Noise reduction, anomaly detection, and probable root cause, where intelligence supports humans." },
  { bold: "We right-size ITOM for the mid-market", detail: "Lean, fast, cost-effective and manageable." },
  { bold: "We prioritise accuracy over volume", detail: "A small, trusted CMDB beats a large, noisy one every time." },
];

const itomStaggeredCards = [
  {
    title: "Visibility & CMDB Maturity",
    desktopImage: "/images/visibility.png",
    heading: <>Visibility & CMDB<br />Maturity</>,
    features: [
      "Targeted Discovery",
      "Hybrid cloud visibility (IaaS + PaaS + containers)",
      "Dependency data mapped to real services",
      "CMDB that teams actually trust"
    ]
  },
  {
    title: "Service Mapping",
    desktopImage: "/images/service-mapping.png",
    heading: "Service Mapping",
    features: [
      "End-to-end service maps that reflect real relationships",
      "Application-level context",
      "Impact analysis for change & incident",
      "Continuous maintenance, not big-bang mapping"
    ]
  },
  {
    title: "Event & Operations Intelligence",
    desktopImage: "/images/event.png",
    heading: <>Event & Operations<br />Intelligence</>,
    features: [
      "Noise reduction & automated enrichment",
      "Anomaly detection & early warnings",
      "Probable root cause",
      "Health dashboards for services, not servers"
    ]
  },
  {
    title: "Automation & Orchestration",
    desktopImage: "/images/automation.png",
    heading: <>Automation &<br />Orchestration</>,
    features: [
      "Automated remediation",
      "Workflow-driven governance",
      "Policy-based compliance",
      "Environment cleanup, patch triggers, and cloud governance"
    ]
  },
  {
    title: "Cloud Management",
    desktopImage: "/images/cloud.png",
    heading: <>Cloud<br />Management</>,
    features: [
      "Cloud visibility and allocation",
      "Resource rightsizing",
      "Tag governance",
      "Cost optimisation & automated guardrails"
    ]
  },
];

const itomMetrics = [
  {
    icon: "/images/noise-reduction.png",
    title: "99% event noise reduction",
  },
  {
    icon: "/images/incident.png",
    title: "Fewer P1/P2 incidents",
  },
  {
    icon: "/images/mttr.png",
    title: "Massive improvement in MTTR",
  },
  {
    icon: "/images/degradation.png",
    title: "Faster detection of service degradation",
  },
  {
    icon: "/images/service-map.png",
    title: "Service maps that actually help during outages",
  },
  {
    icon: "/images/proactive-operations.png",
    title: "Proactive operations instead of firefighting",
  },
  {
    icon: "/images/cmdb.png",
    title: "Cleaner CMDB and higher trust in data",
  },
  {
    icon: "/images/automate-fixes.png",
    title: "Automated fixes that reduce manual effort",
  },
];


const itomBangmetricSteps = [
  {
    title: "Discover &\nDesign",
    desc: "We map your services, dependencies, risks, and operations culture, not just your IP ranges.",
    image: "/images/discover.png"
  },
  {
    title: "Build for\nSpeed",
    desc: "We implement visibility and mapping with discipline, governance, and purpose. ",
    image: "/images/build-for-speed.png"
  },
  {
    title: "Automate\n What\n Matters",
    desc: "AI, anomaly detection, automation, and orchestration, aligned to real operational outcomes.",
    image: "/images/automate.png"
  },
  {
    title: "Improve\nContinuously",
    desc: "We tune the CMDB, maps, rules, and signals as your estate evolves.",
    image: "/images/improve.png"
  },
];

export default function ITOperationsManagement() {
  return (
    <>
        <Hero title="IT Operations Management" />
        <Intro
          heading={itomIntroHeading}
          paragraphs={itomIntroParagraphs}
        />
        <Jumpstarts
          cubeImage="/images/itom-cube.png"
          sectionTitle={
            <>
              Our ITOM Jumpstart Offering<br />
              (Speed With Substance, Not Shortcuts)
            </>
          }
          subtitle={
            <>
              BANGMETRIC ITOM accelerators are not “turn on<br />
              Discovery and hope.”
              <br className="hidden sm:inline" />
              They’re designed, structured, and fit for purpose.
            </>
          }
          cards={itomJumpstartCards}
        />
        <ThinkDifferently nodes={itomThinkNodes} variant="horizontal" />

        <WhatWeBuild
          sectionTitle="What We Build with ServiceNow ITOM"
          layout="staggered"
          overlayCards={itomStaggeredCards}
        />
        <Results
          sectionTitle="The Results Our Clients See"
          subtitle="When ITOM is designed properly, operations transform"
          metrics={itomMetrics}
          highlightText="Not because we ingested more data, but because we connected the right data."
        />

        <BangmetricWay
          subtitle="When ITOM is designed properly, operational intelligence drives real outcomes"
          steps={itomBangmetricSteps}
          layout="vertical-cards"
        />
        <ITOMWhyChoose />
        <BottomCTA
          title="Strategic Portfolio Management"
          buttonHref="/strategic-portfolio-management"
          subtitle="Read Customer Success Stories & News on"
        />
    </>
  );
}
