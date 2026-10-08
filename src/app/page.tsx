import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Categories } from "@/components/sections/Categories";
import { FeaturedTalents } from "@/components/sections/FeaturedTalents";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedTalents />
        <Categories />
      </main>
      <Footer />
    </>
  );
}