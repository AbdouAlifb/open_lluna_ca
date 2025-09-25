import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Open Lluna — Software Studio",
  description: "We build scalable B2B/B2C apps — MERN/PERN, React, Node, AWS.",
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
