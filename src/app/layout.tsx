import type { Metadata } from "next";
import "./globals.css";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { SmoothScroll } from "../components/SmoothScroll";

export const metadata: Metadata = {
  title: "Shahab Ali Hassan — ServiceNow Developer & Full-Stack Engineer",
  description:
    "Portfolio of Shahab Ali Hassan, ServiceNow Developer specializing in ITSM, HRSD, integrations, and full-stack development with Next.js and FastAPI.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          spaceGrotesk.variable,
          fraunces.variable,
          "bg-[var(--bg)] text-[var(--text)] antialiased font-sans"
        )}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
