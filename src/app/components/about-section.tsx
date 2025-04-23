import Image from "@/components/ui/image";
import React from "react";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="flex h-screen bg-background text-backgroundBlack"
    >
      <Image
        src="/images/will.jpg"
        alt="about will"
        className="w-2/5 object-cover"
      />
      <div className="w-3/5">
        <h2>About WILLIAM</h2>
      </div>
    </div>
  );
}
