import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Running Plan - Weekly Training Tracker",
    template: "%s | Running Plan",
  },
  description:
    "Track your weekly running training with a beautiful, mobile-friendly app. Monitor your streak, check-in with photos, and stay motivated with daily anime hugs. Perfect for runners of all levels.",
  keywords: [
    "running tracker",
    "training plan",
    "weekly running schedule",
    "running app",
    "fitness tracker",
    "workout planner",
    "running motivation",
    "mobile running app",
    "running streak",
    "training log",
  ],
  authors: [{ name: "Running Plan App" }],
  creator: "Running Plan",
  publisher: "Running Plan",
  metadataBase: new URL("https://running-plan.lynchz.dev"),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Running Plan - Weekly Training Tracker",
    description:
      "Track your weekly running training with a beautiful, mobile-friendly app. Monitor your streak, check-in with photos, and stay motivated.",
    siteName: "Running Plan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Running Plan - Weekly Training Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Running Plan - Weekly Training Tracker",
    description:
      "Track your weekly running training with a beautiful, mobile-friendly app. Monitor your streak and stay motivated.",
    images: ["/og-image.png"],
  },
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
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Running Plan",
    "application-name": "Running Plan",
    "msapplication-TileColor": "#DE9151",
    "theme-color": "#FEF9F3",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FEF9F3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Running Plan - Weekly Training Tracker",
    description:
      "Track your weekly running training with a beautiful, mobile-friendly app. Monitor your streak, check-in with photos, and stay motivated with daily anime hugs.",
    url: "https://running-plan.lynchz.dev",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Running Plan",
    },
    featureList: [
      "Weekly running schedule tracking",
      "Daily workout plans",
      "Photo check-in system",
      "Streak counter",
      "Mobile-optimized interface",
      "Motivational content",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#FEF9F3" />
        <link rel="canonical" href="https://running-plan.app" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icon-192x192.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/icon-512x512.svg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="touch-manipulation select-none">{children}</body>
    </html>
  );
}
