import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murali R Bharadwaj — Full Stack Developer",
  description:
    "Full stack developer with 3.5+ years of experience specialized in React.js, Next.js, and TypeScript. Building performant, type-safe web applications.",
  keywords: ["Murali R Bharadwaj", "Full Stack Developer", "React.js", "Next.js", "TypeScript", "Frontend Developer"],
  authors: [{ name: "Murali R Bharadwaj" }],
  openGraph: {
    title: "Murali R Bharadwaj — Full Stack Developer",
    description:
      "Full stack developer with 3.5+ years of experience specialized in React.js, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-fuchsia-400">
        {children}
      </body>
    </html>
  );
}
