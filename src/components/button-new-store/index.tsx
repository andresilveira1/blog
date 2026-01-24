import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonNewStore = ({ className, ...props }: ButtonProps) => {
  return (
    <Button asChild variant="primary" className={cn(className)} {...props}>
      <Link href="/criar-loja">
        Criar loja grátis <ArrowRight />
      </Link>
    </Button>
  );
};
