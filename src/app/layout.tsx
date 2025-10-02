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
