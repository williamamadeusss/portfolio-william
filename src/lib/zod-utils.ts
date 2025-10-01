import { ZodIssue } from "zod";
import { z } from "zod";

export interface FormDataErrorProps {
  path: string;
  message: string;
}

export function getZodErrorMessage({
  path,
  errors,
}: {
  path: string;
  errors: FormDataErrorProps[];
}) {
  const errorMessages = errors.find((error) => {
    if (path === error.path) {
      return error.message;
    }
  });
  if (errorMessages) {
    return errorMessages.message;
  } else {
    return "";
  }
}

export function parseZodIssue(issues: ZodIssue[]) {
  const parsedIssues = issues.map((issue) => {
    return {
      path: issue.path[0] as string,
      message: issue.message,
    };
  });

  return parsedIssues;
}

export const messageFormSchema = z.object({
  name: z
    .string({ message: "this field must be filled" })
    .min(1, { message: "this field must be filled" }),
  email: z
    .string({ message: "this field must be filled" })
    .min(1, { message: "this field must be filled" })
    .email({ message: "email format is not valid" }),
  message: z
    .string({ message: "this field must be filled" })
    .min(1, { message: "this field must be filled" }),
});
