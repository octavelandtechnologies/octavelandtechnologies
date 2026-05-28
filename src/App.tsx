import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const handleSelectPackage = (packageName: string) => {
    setSelectedPlan(packageName);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 antialiased selection:bg-brand-blue/20 selection:text-brand-blue">
      {/* Sticky Top Header */}
      <Header />

      {/* Primary Landing Content Sections */}
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

      {/* Site map and copyright footer */}
      <Footer />
    </div>
  );
}
