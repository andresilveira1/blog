import { PT_Sans_Caption } from "next/font/google";
import type { ReactNode } from "react";

interface FeatureProps {
  children: ReactNode;
}

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
});

export const FeatureMessage = ({ children }: FeatureProps) => {
  return (
    <h2
      className={`${ptSansCaption.className} text-gray-100 text-heading-sm md:text-heading-lg`}
    >
      {children}
    </h2>
  );
};
