import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavHeader from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "William Amadeus | Software Engineer & Web Developer",
  description: "William's Portfolio created using Next.js and Tailwind CSS",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="text-background">
          <NavHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
