import Image from "@/components/ui/image";
import React from "react";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="flex flex-col-reverse bg-background text-backgroundBlack lg:flex-row"
    >
      <Image
        src="/images/will.jpg"
        alt="about will"
        className="h-fit w-[45%] object-cover"
      />

      <div className="flex w-[55%] flex-col gap-10 px-4 lg:px-20 lg:pt-12">
        <h2 className="flex w-full justify-end border-b-[6px] border-primary pb-6 text-mediumHeading font-extrabold">
          about WILLIAM
        </h2>

        <p className="text-2xl">
          I’m William Amadeus, a Frontend-Focused Software Engineer dedicated to
          building scalable, performant, and user-friendly web applications.
          With a deep understanding of Next.js and Tailwind CSS, I specialize in
          turning complex design systems into clean, accessible, and
          maintainable codebases.
          <br />
          <br />
          My technical strengths lie in translating product goals and UI/UX
          designs into robust web experiences. I thrive in fast-paced
          environments where attention to detail and performance matter, and I’m
          constantly sharpening my skills to stay aligned with industry best
          practices.
          <br />
          <br />
          What drives me most is the challenge of solving complex
          problems—whether it’s bringing ambitious UI designs to life,
          fine-tuning performance, or diving into new technologies. I’m always
          eager to push beyond my comfort zone and continuously grow as a
          developer, exploring new areas of specialization and expanding my
          capabilities with each project.
        </p>
      </div>
    </div>
  );
}
