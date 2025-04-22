"use client";

import React, { useState } from "react";
import { CloseIcon, HamburgerIcon } from "../../components/icons";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "@/components/ui/image";

const navbarTabItems = [
  { route: "/", text: "Home" },
  { route: "/projects", text: "Projects" },
  { route: "/contact", text: "Contact" },
  { route: "/about", text: "About" },
];

export default function NavHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function renderMobileNavbar() {
    return (
      <div className="bg-backgroundBlack absolute left-0 top-0 flex h-screen w-screen flex-col gap-6 px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/will-invis-white.png"
              alt="logo"
              className="aspect-square w-20 lg:w-24"
            />
          </Link>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CloseIcon className="h-5 w-5" />
          </div>
        </div>

        <nav className="flex flex-col gap-4"></nav>
      </div>
    );
  }

  return (
    <nav className="bg-backgroundBlack sticky top-0 z-50 flex items-center justify-between px-4 py-2 lg:static lg:px-20 lg:py-4">
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
            <Link
              href={item.route}
              className={`font-medium uppercase tracking-widest ${pathname === item.route ? "border-b-[3px] border-primary" : ""}`}
            >
              {item.text}
            </Link>
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
              className={`absolute h-0.5 w-6 transform bg-background transition-all duration-200 ease-in-out ${
                isOpen ? "top-2.5 translate-y-0 -rotate-45" : "top-1 rotate-0"
              }`}
            />
            <span
              className={`absolute top-2 h-0.5 w-6 bg-background transition-all ease-in-out ${
                isOpen
                  ? "opacity-0 duration-150"
                  : "duration-450 top-3 opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 transform bg-background transition-all duration-200 ease-in-out ${
                isOpen ? "top-2.5 rotate-45" : "top-5 rotate-0"
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen && renderMobileNavbar()}
    </nav>
  );
}
