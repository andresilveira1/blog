import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  return (
    <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 rounded-sm w-fit uppercase">
      {children}
    </span>
  );
};
