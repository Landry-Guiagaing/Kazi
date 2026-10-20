import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedTalents } from "@/components/sections/FeaturedTalents";
import { Categories } from "@/components/sections/Categories";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedTalents />
      <Categories />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  );
}