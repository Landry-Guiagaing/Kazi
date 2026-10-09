import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Benefits } from "@/components/sections/Benefits";
import { Categories } from "@/components/sections/Categories";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturedTalents } from "@/components/sections/FeaturedTalents";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedTalents />
        <Categories />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}