import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function TextInput({ showError = false, ...props }: LabelInputProps) {
  return (
    <div
      className={cn("flex flex-col w-full max-w-xs items-start gap-1.5", {
        "h-[86px]": showError,
      })}
    >
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input
        {...props}
        className={cn({
          "border-red-400 focus-visible:ring-red-500":
            props.touched && props.errormessage,
        })}
      />
      {props.touched && props.errormessage && (
        <p className="text-xs text-red-500 w-full ">{props.errormessage}</p>
      )}
    </div>
  );
}
