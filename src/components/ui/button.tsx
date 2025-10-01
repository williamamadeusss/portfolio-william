import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap  transition-all  disabled:cursor-not-allowed disabled:opacity-50 shrink-0 outline-none w-fit font-semibold",
  {
    variants: {
      intent: {
        primary:
          "border bg-transparent text-primary-10 border-primary-10 hover:border-transparent hover:bg-primary hover:text-backgroundBlack ",
        secondary:
          "border bg-transparent text-white border-white hover:border-transparent hover:bg-white hover:text-primary-10",
      },
      size: {
        small: "py-2 px-6 text-sm",
        default: "py-2 px-8 text-md tracking-wide",
        large: "py-[10px] px-10 text-[20px] tracking-wider",
        icon: "size-9",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  intent,
  size,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ intent, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
