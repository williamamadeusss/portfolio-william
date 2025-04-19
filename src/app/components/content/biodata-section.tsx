"use client";

import Image from "@/components/ui/image";
import React, { useEffect, useState } from "react";

export default function BiodataSection() {
  return (
    <div className="flex flex-col gap-20 lg:flex-row">
      <div className="flex flex-col gap-10 pt-10 lg:w-3/5 lg:pt-20">
        <div className="flex h-fit flex-col gap-4 border-b-[6px] border-primary pb-10">
          <h1 className="text-5xl font-extrabold">William Amadeus</h1>
          <p className="text-2xl font-semibold">A Software Engineer</p>
        </div>

        <p className="text-xl">
          Hi! I’m William Amadeus — a website developer at Sprout Digital Labs
          with a strong passion for building thoughtful, user-focused web
          experiences. I’m currently pursuing my Bachelor’s degree in Computer
          Science at Bina Nusantara University, where I’m constantly learning
          and sharpening my skills in front-end development and modern web
          technologies.
        </p>
      </div>

      <Image
        src="/images/will-3.png"
        alt="foto will"
        className="aspect-square rounded-full lg:w-2/5"
      />
    </div>
  );
}
