// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

// Use your deployed site URL here (helps canonical/OG)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.openlluna.com";
const TITLE = "Open Lluna — Innovative Web and Mobile Development Solutions";
const DESC =
  "Open Lluna a digital transformation company, leverages novel tech & innovation to create value and shared success for clients, partners, & communities.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Open Lluna",
  title: {
    default: TITLE,
    template: "%s | Open Lluna",
  },
  description: DESC,
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "AI development",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Python",
    "AWS",
    "product design",
    "staff augmentation",
  ],
  authors: [{ name: "Open Lluna" }],
  creator: "Open Lluna",
  publisher: "Open Lluna",
  category: "Technology",

  // Accessible URLs
  alternates: {
    canonical: "/",
  },

  // Open Graph for rich previews
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Open Lluna",
    title: TITLE,
    description: DESC,
    images: [
      {
        url: "/og.jpg", // place a 1200x630 image in /public or /app
        width: 1200,
        height: 630,
        alt: "Open Lluna — Software Studio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    creator: "@openlluna", // <- update or remove if not used
    images: ["/og.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
       "max-snippet": -1,
  "max-image-preview": "large",
  "max-video-preview": -1,
    },
  },

  // Icons (Next will also auto-use app/icon.png if present)
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },   // your custom tab icon
      { url: "/favicon.ico", sizes: "any" },     // optional fallback
    ],
    apple: [{ url: "/apple-touch-icon.png" }],   // optional (iOS)
    shortcut: ["/favicon.ico"],
  },

  // PWA manifest (optional)
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-dvh">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
