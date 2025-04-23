"use client";

import Image from "@/components/ui/image";
import React, { useEffect, useState } from "react";

export default function BiodataSection() {
  return (
    <div className="relative flex flex-col-reverse gap-14 lg:flex-row lg:gap-20">
      {/* invisible div to setup grid layout for desktop view */}
      <div className="hidden w-[55%] lg:block" />

      {/* biography section */}
      <div className="flex flex-col gap-16 px-4 lg:absolute lg:w-[65%] lg:px-0 lg:pl-20 lg:pt-32">
        <h1 className="w-full border-b-[6px] border-primary pb-4 text-[28px] font-bold tracking-wider lg:pb-6 lg:text-left lg:text-[40px] lg:font-semibold">
          WILLIAM AMADEUS
        </h1>

        <div className="flex w-full flex-col items-end justify-end gap-10 lg:gap-8">
          <h2 className="flex text-right text-5xl font-extrabold tracking-wide lg:text-7xl">
            SOFTWARE ENGINEER
          </h2>
          <h2 className="flex text-right text-5xl font-extrabold tracking-wide lg:text-7xl">
            WEB DEVELOPER
          </h2>
        </div>

        {/* <p className="text-xl font-medium tracking-wide">
          Hi! I’m William — a frontend web developer passionate about crafting
          smooth, user-friendly digital experiences using modern web
          technologies.
        </p> */}
      </div>

      <Image
        src="/images/will-museum.jpg"
        alt="foto will"
        className="aspect-square object-cover lg:w-[45%]"
      />
    </div>
  );
}
