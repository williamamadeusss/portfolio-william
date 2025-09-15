"use client";

import Image from "@/components/ui/image";
import React from "react";

export default function BiodataSection() {
  return (
    <div
      id="biodata"
      className="relative flex flex-col-reverse gap-10 pb-20 lg:flex-row lg:gap-20"
    >
      {/* invisible div to setup grid layout for desktop view */}
      <div className="hidden w-[55%] lg:block" />

      {/* biography section */}
      <div className="flex flex-col gap-14 px-4 font-montserrat lg:absolute lg:w-[65%] lg:gap-16 lg:px-0 lg:pl-20 lg:pt-28">
        <h1 className="border-b-[6px] border-primary pb-3 text-center text-title font-bold tracking-wide lg:pb-6 lg:text-left lg:text-mediumHeading lg:font-semibold">
          WILLIAM AMADEUS
        </h1>

        <div className="flex flex-col items-end justify-end gap-10 text-right text-smallHeading font-extrabold tracking-wide lg:text-bigHeading">
          <p>SOFTWARE ENGINEER.</p>
          <p>WEB DEVELOPER.</p>
          <p>PROGRAMMER.</p>
        </div>
      </div>

      <Image
        src="/images/will-museum.jpg"
        alt="foto will"
        className="aspect-square object-cover lg:w-[45%]"
      />
    </div>
  );
}
