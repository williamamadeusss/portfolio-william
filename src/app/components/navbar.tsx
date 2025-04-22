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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function renderMobileNavbar() {
    return (
      <div className="absolute left-0 top-0 flex h-screen w-screen flex-col gap-6 bg-white px-6 pt-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-bold lg:text-3xl">William</h1>
          </Link>
          <div
            onClick={() => {
              setIsMenuOpen(false);
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
    <nav className="bg-backgroundBlack z-50 flex justify-between px-6 py-6 lg:items-center lg:px-20">
      <Link href="/">
        <Image
          src="/images/will-invis-white.png"
          alt="logo"
          className="aspect-square w-24"
        />
      </Link>

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

      <div className="flex flex-col gap-2 lg:hidden">
        {isMenuOpen ? (
          renderMobileNavbar()
        ) : (
          <div
            onClick={() => {
              setIsMenuOpen(true);
            }}
          >
            <HamburgerIcon className="h-5 w-5" />
          </div>
        )}
      </div>
    </nav>
  );
}
