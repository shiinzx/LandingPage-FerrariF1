import { useState, useRef } from "react";
import HeroSection from "./components/HeroSection";
import CarExplorer from "./components/CarExplorer";
import EngineExplorer from "./components/EngineExplorer";
import SpecsSection from "./components/SpecsSection";
import DriversSection from "./components/DriversSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [, setActiveSection] = useState<"car" | "engine" | null>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: "car" | "engine") => {
    setActiveSection(section);
    setTimeout(() => {
      if (section === "car" && carRef.current) {
        carRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (section === "engine" && engineRef.current) {
        engineRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar onNavigate={scrollToSection} />
      <HeroSection onExplore={scrollToSection} />
      <div ref={carRef}>
        <CarExplorer onViewEngine={() => scrollToSection("engine")} />
      </div>
      <div ref={engineRef}>
        <EngineExplorer />
      </div>
      <DriversSection />
      <SpecsSection />
      <Footer />
    </div>
  );
}
