import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Benefits } from "@/components/sections/Benefits";
import { Categories } from "@/components/sections/Categories";
import { FeaturedTalents } from "@/components/sections/FeaturedTalents";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorks } from "@/components/sections/HowItWorks";

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
      </main>
      <Footer />
    </>
  );
}