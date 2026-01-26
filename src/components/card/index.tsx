import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(className, "flex flex-col gap-2 rounded-lg p-6 md:p-12")}
      {...props}
    >
      {children}
    </div>
  );
};
