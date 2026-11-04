import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://akashmondal.dev"
  ),
  title: {
    default: "Akash Mondal | System Engineer & DevOps Enthusiast",
    template: "%s | Akash Mondal",
  },
  description:
    "Professional portfolio of Akash Mondal. 5+ years experience in enterprise Unix/Linux administration, high-availability infrastructure support, and hands-on cloud & DevOps labs.",
  keywords: [
    "Akash Mondal",
    "System Engineer",
    "DevOps Enthusiast",
    "Linux Administrator",
    "HP-UX",
    "Unix",
    "Azure",
    "Terraform",
    "Docker",
    "Infrastructure Operations",
  ],
  authors: [{ name: "Akash Mondal", url: "https://github.com/akashnvf" }],
  creator: "Akash Mondal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Akash Mondal | System Engineer & DevOps Enthusiast",
    description:
      "Enterprise systems operations, Unix/Linux administration, and hands-on cloud & DevOps automation practices.",
    siteName: "Akash Mondal Portfolio",
    images: [
      {
        url: "/images/akash-profile.jpg",
        width: 800,
        height: 800,
        alt: "Akash Mondal - System Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Mondal | System Engineer & DevOps Enthusiast",
    description:
      "Enterprise systems operations, Unix/Linux administration, and hands-on cloud & DevOps automation practices.",
    creator: "@akashmondal",
    images: ["/images/akash-profile.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-[#0B0B0D] text-[#F5F5F5] font-sans">
        {children}
      </body>
    </html>
  );
}
