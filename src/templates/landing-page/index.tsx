import {
  HeroSection,
  FeatureSection,
  SupportSection,
  CustomerStorySection,
  CallToActionSection,
} from "@/templates/landing-page/sections";

export const LandingPage = () => {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToActionSection />
    </article>
  );
};
