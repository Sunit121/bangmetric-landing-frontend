import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./landing.css";

/**
 * Shared shell for the ServiceNow service landing pages (ITOM / HRSD / SPM).
 *
 * Route group, so it adds no URL segment — the pages stay at
 * /it-operations-management, /hr-service-delivery and
 * /strategic-portfolio-management.
 *
 * `bm-landing` scopes landing.css. Navigation and Footer sit outside the
 * wrapper so they keep their normal styling — in particular Navigation's
 * `container` class, which landing.css redefines.
 */
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="bm-landing">{children}</main>
      <Footer />
    </>
  );
}
