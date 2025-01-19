"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export function CheckboxWithText({
  text,
  subText,
  className,
  errormessage,
  touched,
  name,
  showError = false,
  ...props
}: CheckboxWithTextProps) {
  return (
    <div
      className={cn("items-top flex space-x-2", {
        "h-[82px]": showError,
      })}
    >
      <Checkbox className={className} {...props} />
      <div className="flex flex-col items-start gap-y-1.5 leading-none">
        <label
          htmlFor={name}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {text}
        </label>
        {subText && <p className="text-sm text-muted-foreground">{subText}</p>}
        {errormessage && touched && (
          <p className="text-xs text-red-500">{errormessage}</p>
        )}
      </div>
    </div>
  );
}
