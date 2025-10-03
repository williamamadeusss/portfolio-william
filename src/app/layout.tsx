import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import NavHeader from "./components/navbar";
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/sonner";
import CustomCursor from "@/components/ui/custom-cursor";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "William Amadeus | Software Engineer & Frontend Developer",
  description:
    "William Amadeus's Personal website portfolio developed using Next.js, Tailwind CSS, Framer Motion, Zod, and Three.js",
  icons: "/favicon.ico",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "William Amadeus | Software Engineer & Frontend Developer",
    description:
      "Portfolio website of William Amadeus — Software Engineer passionate about frontend development and building impactful software.",
    url: "https://williamamadeus.site/",
    siteName: "William Amadeus Portfolio",
    images: [
      {
        url: "https://williamamadeus.site/images/projects/homepage-portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Preview image of William Amadeus Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Amadeus | Software Engineer & Frontend Developer",
    description:
      "Explore William Amadeus’s projects and skills in frontend development, Next.js, and modern web technologies.",
    images: [
      "https://williamamadeus.site/images/projects/homepage-portfolio.webp",
    ],
  },
  alternates: {
    canonical: "https://williamamadeus.site/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${montserrat.className}`}>
        <CustomCursor />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "white",
            },
          }}
        />
        <div className="font-manrope mx-auto max-w-[1540px] text-background">
          <NavHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
