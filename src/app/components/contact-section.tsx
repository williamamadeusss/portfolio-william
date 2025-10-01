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
    toast("niggers");
  }

  return (
    <div
      id="contact"
      className="relative flex min-h-screen flex-col gap-6 bg-backgroundBlack px-4 py-10 lg:flex-row lg:gap-10 lg:px-10 lg:py-20 xl:px-20"
    >
      <Particles className="absolute inset-0 w-full" />

      <div className="flex w-full flex-col gap-12 lg:w-[55%]">
        {/* header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-center font-montserrat text-smallHeading font-extrabold lg:text-bigHeading">
            CONTACT.
          </h1>

          <p className="text-mediumLarge">
            I’m always eager to learn and grow. Feel free to reach out if you’d
            like to talk about frontend development, software development, or
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
          size={"large"}
          onClick={() => {
            handleSubmitForm();
          }}
        >
          Send Message
        </Button>
      </div>

      {/* globe 3d element */}
      {isMediumDevice ? (
        <div className="lg:w-[45%]">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      ) : (
        <div className="h-96">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      )}
    </div>
  );
}
