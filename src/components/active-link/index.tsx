import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";
import { text } from "stream/consumers";

type ActiveLink = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...props }: ActiveLink) => {
  const router = useRouter();
  const isCurrentPath = router.asPath === href || router.asPath === props.as;

  return (
    <Link
      href={href}
      className={cn(
        "text-action-sm transition-colors hover:text-blue-200",
        isCurrentPath ? "text-blue-200" : "text-gray-100",
      )}
    >
      {children}
    </Link>
  );
};
