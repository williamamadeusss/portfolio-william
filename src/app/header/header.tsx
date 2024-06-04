"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function renderHamburgerMenu() {
    return (
      <div className="absolute top-0 right-0 bg-red-500">
        <div className="flex flex-col">
          <div>
            <GiHamburgerMenu
              onClick={() => {
                setIsMenuOpen(true);
              }}
              className={`${isMenuOpen ? "hidden" : "block"}`}
            />
            <RxCross2
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`${isMenuOpen ? "block" : "hidden"}`}
            />
          </div>
          <div className={`${isMenuOpen ? "flex" : "hidden"} flex-col`}>
            {renderNavbarTabItems({ text: "About", view: "mobile" })}
            {renderNavbarTabItems({ text: "Experiences", view: "mobile" })}
            {renderNavbarTabItems({ text: "Projects", view: "mobile" })}
            {renderNavbarTabItems({ text: "Contact", view: "mobile" })}
          </div>
        </div>
      </div>
    );
  }

  function renderNavbarTabItems({
    text,
    view,
  }: {
    text: string;
    view: "mobile" | "web";
  }) {
    return (
      <p
        className={`cursor-pointer font-medium hover:font-bold transition-all duration-200`}
      >
        {text}
      </p>
    );
  }

  return (
    <div className="px-6 lg:px-28 py-6 h-20 sticky top-0 flex justify-between items-center bg-beige">
      <h1 className="text-primary font-bold text-xl lg:text-2xl">William</h1>
      <div className="hidden lg:flex gap-12 flex-shrink-0">
        {renderNavbarTabItems({ text: "About", view: "web" })}
        {renderNavbarTabItems({ text: "Experiences", view: "web" })}
        {renderNavbarTabItems({ text: "Projects", view: "web" })}
        {renderNavbarTabItems({ text: "Contact", view: "web" })}
      </div>
      <div className="sm:relative lg:hidden">{renderHamburgerMenu()}</div>
    </div>
  );
}

export default Header;
