"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "@/components/ui/image";

const navbarTabItems = [
  { route: "biodata", text: "Home" },
  { route: "about", text: "About" },
  { route: "projects", text: "Projects" },
  { route: "contact", text: "Contact" },
];

export default function NavHeader() {
  const router = useRouter();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("biodata");

  useEffect(() => {
    const navElement = document.querySelector("nav") as HTMLElement | null;
    const navbarHeight = navElement?.clientHeight || 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // account for sticky navbar overlaying the viewport
        rootMargin: `-${navbarHeight}px 0px 0px 0px`,
        threshold: 0.4,
      },
    );

    navbarTabItems.forEach((item) => {
      const section = document.getElementById(item.route);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathName]);

  // After navigating back to home, read any pending target section and scroll
  useEffect(() => {
    if (pathName !== "/") return;
    if (typeof window === "undefined") return;

    const pending = window.sessionStorage.getItem("pendingScrollSection");
    if (!pending) return;

    requestAnimationFrame(() => {
      if (pending === "biodata") {
        scrollToTop();
      } else {
        scrollToSection(pending);
      }
      window.sessionStorage.removeItem("pendingScrollSection");
    });
  }, [pathName]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const navbarHeight =
      (document.querySelector("nav") as HTMLElement)?.clientHeight || 0;

    const designatedIdYPosition =
      element.getBoundingClientRect().top + window.scrollY + 1 - navbarHeight;
    window.scrollTo({ top: designatedIdYPosition, behavior: "smooth" });
  };

  function renderMobileNavbar() {
    return (
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-0 flex h-[100lvh] w-screen flex-col gap-10 bg-backgroundBlack px-4 py-6"
      >
        {/* mobile navbar header */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/will-invis-white-CROPPED.png"
              alt="logo"
              className="w-14"
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
        <div className="flex flex-col gap-4">
          {navbarTabItems.map((item) => {
            return (
              <div
                key={item.route}
                onClick={() => {
                  if (pathName !== "/") {
                    if (typeof window !== "undefined") {
                      window.sessionStorage.setItem(
                        "pendingScrollSection",
                        item.route,
                      );
                    }
                    router.push("/");
                    setIsOpen(false);
                    return;
                  }

                  item.route === "biodata"
                    ? scrollToTop()
                    : scrollToSection(item.route);
                  setIsOpen(false);
                }}
                className={`w-fit flex-shrink-0 border-b-[3px] pb-1 pr-5 text-large uppercase tracking-widest text-background ${activeSection === item.route ? "border-primary font-bold" : "border-transparent font-medium"}`}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-backgroundBlack px-4 py-6 lg:px-10 xl:px-20">
      <Link href="/">
        <Image
          src="/images/will-invis-white-CROPPED.png"
          alt="logo"
          className="w-14 lg:w-[70px]"
        />
      </Link>

      {/* desktop navbar tab items */}
      <div className="hidden flex-shrink-0 gap-10 lg:flex">
        {navbarTabItems.map((item) => {
          return (
            <div
              key={item.route}
              onClick={() => {
                if (pathName !== "/") {
                  if (typeof window !== "undefined") {
                    window.sessionStorage.setItem(
                      "pendingScrollSection",
                      item.route,
                    );
                  }
                  router.push("/");
                  return;
                }
                item.route === "biodata"
                  ? scrollToTop()
                  : scrollToSection(item.route);
              }}
              className={`cursor-hover border-b-[3px] font-medium uppercase tracking-widest transition-all duration-200 ease-in-out ${activeSection === item.route ? "border-primary" : "border-transparent"}`}
            >
              {item.text}
            </div>
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
