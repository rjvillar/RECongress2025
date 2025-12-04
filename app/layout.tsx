import type { Metadata, Viewport } from "next";
import { Poppins, Public_Sans, League_Gothic, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Google Fonts
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const publicSans = Public_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const leagueGothic = League_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-league-gothic",
  display: "swap",
});

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-klein",
  display: "swap",
});

// SEO-optimized metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://thecentre.ph/recongress2025"),
  title: {
    default: "RE Congress 2025 | Philippines Renewable Energy Summit",
    template: "%s | RE Congress 2025",
  },
  applicationName: "RE Congress 2025",
  description:
    "Join the 8th Renewable Energy Congress & Exhibit 2025 in Iloilo City to connect with Philippine policymakers, investors, and innovators accelerating a just energy transition.",
  keywords: [
    "Philippines renewable energy summit",
    "Iloilo energy conference",
    "just energy transition Philippines",
    "renewable energy congress",
    "renewable energy congress 2025",
    "re congress",
    "re congress 2025",
    "renewable energy exhibit",
    "green jobs fair Philippines",
    "microgrid financing event",
    "RE Congress 2025 registration",
    "Philippine clean energy policies",
    "grid modernization Philippines",
    "sustainable energy investors",
  ],
  authors: [
    {
      name: "Center for Empowerment, iNnovation, and Training on Renewable Energy (CentRE)",
      url: "https://thecentre.ph",
    },
  ],
  creator:
    "Center for Empowerment, iNnovation, and Training on Renewable Energy (CentRE)",
  publisher:
    "Center for Empowerment, iNnovation, and Training on Renewable Energy (CentRE)",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://thecentre.ph/recongress2025",
    languages: {
      "en-PH": "https://thecentre.ph/recongress2025",
      "en-US": "https://thecentre.ph/recongress2025",
    },
  },
  openGraph: {
    title: "RE Congress 2025 | Philippines Renewable Energy Summit",
    description:
      "Meet 200+ leaders advancing the Philippines' just energy transition at the 8th Renewable Energy Congress & Exhibit on December 11-12, 2025 in Iloilo City.",
    type: "website",
    locale: "en_PH",
    url: "https://thecentre.ph/recongress2025",
    siteName: "RE Congress 2025",
    images: [
      {
        url: "https://thecentre.ph/recongress2025/assets/posters/re-congress-2025-poster.webp",
        width: 1200,
        height: 630,
        alt: "8th Renewable Energy Congress & Exhibit 2025 - Iloilo City, Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RE Congress 2025 | Philippines Renewable Energy Summit",
    description:
      "Register for the 8th RE Congress & Exhibit on Dec 11-12, 2025 in Iloilo City to explore just transition financing, resilience, and green jobs.",
    images: [
      "https://thecentre.ph/recongress2025/assets/posters/re-congress-2025-poster.webp",
    ],
  },
  category: "Energy & Environment",
  icons: {
    icon: "/recongress2025/assets/logos/re_congress_transparent.png",
    apple: "/recongress2025/assets/logos/re_congress_transparent.png",
    shortcut: "/recongress2025/assets/logos/re_congress_transparent.png",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#002734",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD Event Schema for rich snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "8th Renewable Energy Congress & Exhibit 2025",
  description:
    "The premier national platform for renewable energy dialogue, collaboration, and collective action toward achieving the Philippines' renewable energy targets and accelerating the just energy transition.",
  startDate: "2025-12-11T08:00:00+08:00",
  endDate: "2025-12-12T17:00:00+08:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Iloilo Convention Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Iloilo Business Park, Mandurriao District",
      addressLocality: "Iloilo City",
      addressRegion: "Western Visayas",
      postalCode: "5000",
      addressCountry: "PH",
    },
  },
  image:
    "https://thecentre.ph/recongress2025/assets/posters/re-congress-2025-poster.webp",
  organizer: {
    "@type": "Organization",
    name: "Center for Empowerment, iNnovation, and Training on Renewable Energy (CentRE)",
    url: "https://thecentre.ph",
  },
  offers: {
    "@type": "Offer",
    url: "https://tinyurl.com/RECongress2025",
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01T00:00:00+08:00",
  },
  performer: [
    {
      "@type": "Organization",
      name: "Institute for Climate and Sustainable Cities (ICSC)",
    },
    {
      "@type": "Organization",
      name: "Iloilo Provincial Government (IPG)",
    },
    {
      "@type": "Organization",
      name: "Central Philippine University (CPU)",
    },
  ],
  keywords:
    "renewable energy, just energy transition, grid modernization, RE financing, green jobs, Philippines, Iloilo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${oswald.variable} ${poppins.variable} ${publicSans.variable} ${leagueGothic.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-public-sans">
        <Navbar />
        <main className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
