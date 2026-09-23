import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const baseUrl = "https://andre-setiawan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    profile.name,
    "Data Analyst",
    "Data Enthusiast",
    "Data Analysis",
    "Data Visualization",
    "Python",
    "Tableau",
    "Power BI",
    "Looker",
    "Information Systems",
    "Gunadarma University",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060B18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    jobTitle: profile.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "ID",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Gunadarma University",
    },
    knowsAbout: [
      "Data Analysis",
      "Data Visualization",
      "Python",
      "SQL",
      "Tableau",
      "Power BI",
      "Looker",
    ],
    url: baseUrl,
    sameAs: [profile.linkedin, profile.github, profile.portfolio],
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:text-cyan-300 focus:shadow-lg"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
