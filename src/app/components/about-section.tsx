import Image from "@/components/ui/image";
import React from "react";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="flex h-screen flex-col-reverse gap-14 bg-background text-backgroundBlack lg:flex-row lg:gap-20"
    >
      <Image
        src="/images/will.jpg"
        alt="about will"
        className="w-2/5 object-cover"
      />
      <div className="w-3/5 px-4 lg:px-0 lg:pl-20">
        <h2>About WILLIAM</h2>
      </div>
    </div>
  );
}
