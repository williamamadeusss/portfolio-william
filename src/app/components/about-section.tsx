import Image from "@/components/ui/image";
import React from "react";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="flex flex-col-reverse bg-background text-backgroundBlack lg:h-[46rem] lg:flex-row"
    >
      <Image
        src="/images/will.jpg"
        alt="about will"
        className="hidden w-[45%] object-cover lg:block"
      />

      <div className="flex flex-col gap-8 px-4 py-10 lg:w-[55%] lg:gap-10 lg:px-20 lg:py-12">
        <h2 className="flex w-full justify-end border-b-[6px] border-primary pb-3 text-title font-extrabold tracking-wide lg:pb-6 lg:text-mediumHeading">
          About William
        </h2>

        <p className="text-medium text-neutral-color-80">
          I’m <span className="font-bold text-primary">William Amadeus</span>, a
          Frontend-Focused Software Engineer dedicated to building scalable,
          performant, and user-friendly web applications. With a deep
          understanding of{" "}
          <span className="font-bold text-primary">
            Next.js and Tailwind CSS
          </span>
          , I specialize in turning complex design systems into clean,
          accessible, and maintainable codebases.
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
