"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "@/components/ui/image";

const navbarTabItems = [
  { route: "biodata", text: "Home" },
  { route: "about", text: "About" },
  { route: "projects", text: "Projects" },
  { route: "contact", text: "Contact" },
];

export default function NavHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  function renderMobileNavbar() {
    return (
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-0 flex h-screen w-screen flex-col gap-6 bg-backgroundBlack px-4 py-2"
      >
        {/* mobile navbar header */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/will-invis-white.png"
              alt="logo"
              className="h-20 w-20 flex-shrink-0"
            />
          </Link>

          {/* close icon */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="inline-flex items-center justify-center rounded-md"
              aria-expanded={isOpen}
            >
              <div className="relative flex h-6 w-6 flex-col items-center justify-center">
                <span
                  className={`absolute top-2.5 h-0.5 w-6 translate-y-0 -rotate-45 transform bg-background`}
                />

                <span
                  className={`absolute top-3 h-0.5 w-6 bg-background opacity-0`}
                />

                <span
                  className={`absolute top-2.5 h-0.5 w-6 rotate-45 transform bg-background`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* mobile navbar tab items */}
        <div className="flex flex-col gap-4 pl-2">
          {navbarTabItems.map((item) => {
            return (
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                href={item.route}
                className={`flex-shrink-0 rounded-md p-2 uppercase tracking-widest ${pathname === item.route ? "bg-background font-semibold text-backgroundBlack" : "font-medium"}`}
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      </motion.div>
    );
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-backgroundBlack px-4 py-2 lg:px-20">
      <Link href="/">
        <Image
          src="/images/will-invis-white.png"
          alt="logo"
          className="aspect-square w-20 lg:w-24"
        />
      </Link>

      {/* desktop navbar tab items */}
      <div className="hidden flex-shrink-0 gap-14 lg:flex">
        {navbarTabItems.map((item) => {
          return (
            <button
              // href={item.route}
              onClick={() => {
                item.route === "biodata"
                  ? scrollToTop()
                  : scrollToSection(item.route);
              }}
              className={`font-medium uppercase tracking-widest ${pathname === item.route ? "border-b-[3px] border-primary" : ""}`}
            >
              {item.text}
            </button>
          );
        })}
      </div>

      {/* hamburger icon */}
      <div className="flex items-center lg:hidden">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="inline-flex items-center justify-center rounded-md"
          aria-expanded={isOpen}
        >
          <div className="relative flex h-6 w-6 flex-col items-center justify-center">
            <span
              className={`absolute top-1 h-0.5 w-6 transform bg-background`}
            />
            <span className={`absolute top-3 h-0.5 w-6 bg-background`} />

            <span
              className={`absolute top-5 h-0.5 w-6 transform bg-background`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>{isOpen && renderMobileNavbar()}</AnimatePresence>
    </nav>
  );
}
