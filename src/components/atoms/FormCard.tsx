import { cn } from "@/lib/utils";

const FormCard = ({ children, className }: FormCardProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-center gap-y-2 shadow-lg rounded-xl pt-6 pb-4 bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FormCard;
