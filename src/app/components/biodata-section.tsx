"use client";

import Image from "@/components/ui/image";
import React, { useEffect, useState } from "react";

export default function BiodataSection() {
  return (
    <div
      id="biodata"
      className="relative flex flex-col-reverse gap-10 pb-20 lg:flex-row lg:gap-20"
    >
      {/* invisible div to setup grid layout for desktop view */}
      <div className="hidden w-[55%] lg:block" />

      {/* biography section */}
      <div className="flex flex-col gap-14 px-4 lg:absolute lg:w-[65%] lg:gap-16 lg:px-0 lg:pl-20 lg:pt-28">
        <h1 className="w-full border-b-[6px] border-primary pb-3 text-title font-bold tracking-wider lg:pb-6 lg:text-left lg:text-heading lg:font-semibold">
          WILLIAM AMADEUS
        </h1>

        <div className="flex w-full flex-col items-end justify-end gap-10 lg:gap-8">
          <p className="flex text-right text-mediumHeading font-extrabold lg:text-bigHeading">
            SOFTWARE ENGINEER.
          </p>
          <p className="flex text-right text-mediumHeading font-extrabold lg:text-bigHeading">
            WEB DEVELOPER.
          </p>
          <p className="flex text-right text-mediumHeading font-extrabold lg:text-bigHeading">
            PROGRAMMER.
          </p>
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
