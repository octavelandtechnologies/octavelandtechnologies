import { useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const handleSelectPackage = (packageName: string) => {
    setSelectedPlan(packageName);
  };

  return (
    <main className="relative">
      {/* 1. Brand Showcase Hero Section */}
      <Hero />

      {/* 2. Services Breakdown */}
      <Services />

      {/* 3. Filterable Portfolio Catalog */}
      <Portfolio />

      {/* 4. Pricing Matrices */}
      <Pricing onSelectPackage={handleSelectPackage} />

      {/* 5. Team Mission & Testimonials */}
      <About />

      {/* 6. Custom Contact Form & Multi-channels */}
      <Contact selectedPackage={selectedPlan} />
    </main>
  );
}
