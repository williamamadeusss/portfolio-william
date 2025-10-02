import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";
import { Particles } from "@/components/ui/particles";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col gap-10 bg-backgroundBlack px-4 py-6 text-background md:gap-12 lg:gap-14 lg:px-10 lg:py-10 xl:px-20">
      <Particles className="absolute inset-0 w-full" quantity={25} />
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
            <Link
              href="https://www.linkedin.com/in/william-amadeus-86667a224/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-5 w-5 text-background duration-200 hover:text-primary lg:h-6 lg:w-6" />
            </Link>

            <Link
              href="https://github.com/williamamadeusss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-5 w-5 text-background duration-200 hover:text-primary lg:h-6 lg:w-6" />
            </Link>

            <Link
              href="https://www.instagram.com/williamamadeusss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-5 w-5 text-background duration-200 hover:text-primary lg:h-6 lg:w-6" />
            </Link>
          </div>
        </div>

        <div className="relative aspect-[1.78/1] h-full w-14 lg:w-[70px]">
          <Image
            src="/images/will-invis-white-CROPPED.png"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <p className="text-center text-small text-neutral-400 md:text-smallMedium">
        © 2025 William Amadeus. Built using Next.js and Tailwind CSS
      </p>
    </footer>
  );
}
