import React, { InputHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessages?: string;
  label?: string;
  isPassword?: boolean;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
}

export default function InputText({
  placeholder,
  className,
  errorMessages,
  label,
  onChange,
  required = false,
  isPassword = false,
  name,
  helperText,
  ...props
}: InputTextProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <p className="text-medium uppercase text-background">
          {label} {required && <span className="text-red-500">*</span>}
        </p>
      )}

      <div className="flex w-full flex-col gap-1">
        <input
          id={label}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          className={cn(
            "w-full bg-black/15 p-3 text-mediumLarge text-background placeholder-white/50 focus:bg-primary/5 focus:outline-none",
            errorMessages
              ? "border border-red-500"
              : "border-b-2 border-primary placeholder-white/60",
            className,
          )}
          {...props}
        />

        {helperText && !errorMessages && (
          <p className="text-gray-60 text-xs">{helperText}</p>
        )}

        {errorMessages && (
          <p className="text-body-sm font-medium text-red-400">
            {errorMessages}
          </p>
        )}
      </div>
    </div>
  );
}
