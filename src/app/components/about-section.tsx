import Image from "@/components/ui/image";
import React from "react";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="flex flex-col-reverse gap-14 bg-background text-backgroundBlack lg:max-h-[87vh] lg:flex-row lg:gap-20"
    >
      <Image
        src="/images/will.jpg"
        alt="about will"
        className="w-2/5 object-cover"
      />
      <div className="flex w-3/5 flex-col gap-10 px-4 lg:px-0 lg:pr-20 lg:pt-12">
        <h2 className="text-mediumHeading flex w-full justify-end border-b-[6px] border-primary pb-6 font-extrabold">
          about WILLIAM
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat
          fuga inventore est quam ducimus. Assumenda, odit numquam nostrum vel,
          non modi repudiandae atque, labore sunt minus rerum et autem. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat optio
          animi cupiditate, qui quisquam libero esse exercitationem quia
          mollitia tempora dignissimos velit unde. Necessitatibus quidem
          distinctio doloribus deserunt dolores! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quos enim voluptatum alias eius hic ipsa
          laudantium molestiae ipsum? Deserunt expedita, excepturi facere
          dolorem quod commodi quia id dignissimos soluta reiciendis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Veniam est, eius a
          eos ad soluta quo saepe sit nobis, tempore itaque nemo beatae!
          Suscipit at totam laboriosam nobis delectus culpa?
        </p>
      </div>
    </div>
  );
}
