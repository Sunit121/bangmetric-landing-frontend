import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import CookieConsent from '@/components/CookieConsent';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // Needed so relative `alternates.canonical` / `openGraph.url` values on
  // individual pages resolve to absolute URLs instead of localhost.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bangmetric.com'),
  title: {
    default: "BANGMETRIC | ServiceNow Partner | Solutions Built on Quality",
    template: "%s | BANGMETRIC",
  },
  description:
    "Bangmetric is a global ServiceNow consulting partner specializing in ITSM, CSM, and digital transformation. 8+ years of expertise delivering enterprise solutions.",
  keywords: ["ServiceNow", "ITSM", "CSM", "digital transformation", "consulting", "Bangmetric"],
  openGraph: {
    title: "BANGMETRIC | ServiceNow Partner | Solutions Built on Quality",
    description: "Global ServiceNow consulting partner specializing in ITSM, CSM, and digital transformation.",
    type: "website",
    locale: "en_US",
    siteName: "Bangmetric",
  },
  icons: {
    icon: "/BM_favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CookieConsent />
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  );
}
