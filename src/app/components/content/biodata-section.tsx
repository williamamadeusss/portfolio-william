"use client";

import Image from "@/components/ui/image";
import React, { useEffect, useState } from "react";

export default function BiodataSection() {
  return (
    <div className="relative flex flex-col gap-10 lg:flex-row lg:gap-20">
      <div className="w-[55%]" />
      <div className="r absolute flex h-full flex-col gap-12 lg:w-[65%] lg:pl-20 lg:pt-32">
        <div className="flex h-fit w-full flex-col gap-14">
          <h1 className="flex-shrink-0 border-b-[6px] border-primary pb-6 text-[40px] font-semibold tracking-wider">
            WILLIAM AMADEUS
          </h1>

          <div className="flex w-full flex-col gap-8">
            <h2 className="flex w-full justify-end text-7xl font-extrabold tracking-wide">
              SOFTWARE ENGINEER
            </h2>
            <h2 className="flex w-full justify-end text-7xl font-extrabold tracking-wide">
              WEB DEVELOPER
            </h2>
          </div>
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
        className="aspect-square rounded-lg object-cover lg:w-[45%] lg:rounded-none"
      />
    </div>
  );
}
