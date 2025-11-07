"use client";

import { Button } from "@/components/ui/button";
import InputText from "@/components/ui/input-text";
import { Particles } from "@/components/ui/particles";
import { globeConfig, sampleArcs } from "@/lib/globe";
import useMediaQuery from "@/lib/media-query";
import {
  FormDataErrorProps,
  getZodErrorMessage,
  messageFormSchema,
  parseZodIssue,
} from "@/lib/zod-utils";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { toast } from "sonner";

type MessageFormProps = {
  name: string;
  email: string;
  message: string;
};

const World = dynamic(
  () => import("../../components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  },
);

export default function ContactSection() {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 768px)");
  const [formData, setFormData] = useState<MessageFormProps>(
    {} as MessageFormProps,
  );
  const [errors, setErrors] = useState<FormDataErrorProps[]>(
    [] as FormDataErrorProps[],
  );

  function handleOnChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmitForm() {
    const validationResult = messageFormSchema.safeParse(formData);

    if (!validationResult.success) {
      // error scheme
      setErrors(parseZodIssue(validationResult.error.issues));
      toast("Fill in the required columns");
      return;
    }
    // success scheme
    toast("Sending message...");
    window.location.href = `mailto:williamama34@gmail.com?subject=Collaboration opportunity with ${formData.name}&body=${formData.message}`;
  }

  return (
    <div
      id="contact"
      className="bg-background-black relative flex min-h-screen flex-col gap-6 px-4 py-10 lg:flex-row lg:px-10 lg:py-20 xl:gap-10 xl:px-20"
    >
      <Particles className="absolute inset-0 w-full" />

      <div className="flex w-full flex-col gap-8 lg:gap-12 xl:w-[55%]">
        {/* header */}
        <div className="flex flex-col gap-4 lg:gap-8">
          <h2 className="border-primary font-montserrat text-small-heading lg:text-big-heading border-b-[6px] pb-2 font-extrabold tracking-wide lg:pb-4">
            CONTACT.
          </h2>

          <p className="text-medium xl:text-medium-large">
            I’m always eager to learn and grow. Feel free to reach out if you’d
            like to talk about frontend stuffs, software development, or
            potential project collaborations.
          </p>
        </div>

        {/* form */}
        <div className="flex flex-col gap-8">
          <InputText
            name="name"
            placeholder="Enter your name"
            label="Name"
            required
            onChange={handleOnChangeInput}
            errorMessages={getZodErrorMessage({
              errors: errors,
              path: "name",
            })}
          />
          <InputText
            name="email"
            placeholder="Enter your email"
            label="Email"
            required
            onChange={handleOnChangeInput}
            errorMessages={getZodErrorMessage({
              errors: errors,
              path: "email",
            })}
          />
          <InputText
            name="message"
            placeholder="Enter the message you want to talk about"
            label="Message"
            required
            onChange={handleOnChangeInput}
            errorMessages={getZodErrorMessage({
              errors: errors,
              path: "message",
            })}
          />
        </div>

        <Button
          intent={"primary"}
          className="w-full lg:w-fit"
          size={isMediumDevice ? "large" : "default"}
          onClick={() => {
            handleSubmitForm();
          }}
        >
          Send Message
        </Button>
      </div>

      {/* globe 3d element */}
      {isMediumDevice ? (
        <div className="cursor-hover shrink-0 lg:h-[32.4rem] lg:w-[50%] xl:h-154 xl:w-[45%]">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      ) : (
        <div className="cursor-hover h-96">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      )}
    </div>
  );
}
