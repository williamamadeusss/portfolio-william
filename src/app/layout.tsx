import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavHeader from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William Amadeus",
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
      <body className={inter.className}>
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
