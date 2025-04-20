"use client";

import React, { useState } from "react";
import { CloseIcon, HamburgerIcon } from "../../components/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "@/components/ui/image";

export default function NavHeader() {
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

        <nav className="flex flex-col gap-4">
          {renderNavbarTabItems({
            text: "About",
            view: "mobile",
            href: "about",
          })}
          {renderNavbarTabItems({
            text: "Experiences",
            view: "mobile",
            href: "experiences",
          })}
          {renderNavbarTabItems({
            text: "Projects",
            view: "mobile",
            href: "projects",
          })}
          {renderNavbarTabItems({
            text: "Contact",
            view: "mobile",
            href: "contact",
          })}
        </nav>
      </div>
    );
  }

  function renderNavbarTabItems({
    text,
    view,
    href,
  }: {
    text: string;
    view: "mobile" | "web";
    href: string;
  }) {
    return (
      <Link
        href={href}
        className={`cursor-pointer font-medium transition-all duration-200 hover:font-bold`}
      >
        {text}
      </Link>
    );
  }

  return (
    <nav className="bg-background sticky top-0 z-50 flex justify-between px-6 py-6 lg:items-center lg:px-20">
      <Link href="/">
        <Image
          src="/images/will-logo-white.png"
          alt="logo"
          className="aspect-square w-20"
        />
      </Link>

      <div className="hidden flex-shrink-0 gap-10 lg:flex">
        {renderNavbarTabItems({ text: "About", view: "web", href: "about" })}
        {renderNavbarTabItems({
          text: "Experiences",
          view: "web",
          href: "experiences",
        })}
        {renderNavbarTabItems({
          text: "Projects",
          view: "web",
          href: "projects",
        })}
        {renderNavbarTabItems({
          text: "Contact",
          view: "web",
          href: "contact",
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
