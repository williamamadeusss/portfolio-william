import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";
import Image from "@/components/ui/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex w-full flex-col gap-10 border-t border-backgroundBlack bg-neutral-color-5 px-4 py-6 text-backgroundBlack md:gap-12 lg:gap-14 lg:px-10 lg:py-10 xl:px-20">
      <div className="flex w-full justify-between gap-4">
        <p className="font-montserrat text-smallMedium font-bold md:text-medium lg:text-mediumLarge">
          <span className="text-primary">Always learning</span>
          <br />
          Always improving.
        </p>

        {/* socials */}
        <div className="flex flex-col gap-2">
          <p className="text-smallMedium font-bold text-primary md:text-medium lg:text-mediumLarge">
            Socials
          </p>
          <div className="flex items-center gap-4">
            <LinkedinIcon className="h-5 w-5 cursor-pointer text-backgroundBlack duration-200 hover:text-primary lg:h-6 lg:w-6" />
            <GithubIcon className="h-5 w-5 cursor-pointer text-backgroundBlack duration-200 hover:text-primary lg:h-6 lg:w-6" />
            <InstagramIcon className="h-5 w-5 cursor-pointer text-backgroundBlack duration-200 hover:text-primary lg:h-6 lg:w-6" />
          </div>
        </div>

        <Image
          src="/images/will-invis-black-cropped.png"
          alt=""
          className="h-fit w-14 lg:w-[70px]"
        />
      </div>

      <p className="border-backgroundBlack text-center text-small text-neutral-500 md:text-smallMedium">
        © 2025 William Amadeus. Built using Next.js and Tailwind CSS
      </p>
    </div>
  );
}
