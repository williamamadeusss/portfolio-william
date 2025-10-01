import { Particles } from "@/components/ui/particles";
import React from "react";

export default function ContactSection() {
  return (
    <div
      id="contact"
      className="relative min-h-screen bg-backgroundBlack px-4 py-10 lg:px-10 lg:py-20 xl:px-20"
    >
      <Particles className="absolute inset-0 w-full" />
      <div className="flex flex-col gap-6">
        <h1 className="text-center font-montserrat text-bigHeading font-extrabold">
          CONTACT.
        </h1>

        <p className="text-large">
          I’m always eager to learn and grow. Feel free to reach out if you’d
          like to talk about frontend development, software development, or
          potential project collaborations.
        </p>
      </div>
    </div>
  );
}
