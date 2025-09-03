import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Only keep this
import "./App.css";
import FilmNavbar from "./components/FilmNavbar";
import FilmHero from "./components/FilmHero";
import AboutPage from "./components/AboutPage";
import PortfolioPage from "./components/PortfolioPage";
import ServicesPage from "./components/ServicesPage";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import FerryProfile from "./components/FerryProfile";
import NeoProfile from "./components/NeoProfile";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";

const MainContent: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [currentSection, setCurrentSection] = useState<string>("home");

  const sections = useMemo(
    () => ["home", "about", "services", "portfolio", "contact"],
    []
  );

  const scrollToNextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex =
      scrollDirection === "down"
        ? Math.min(currentIndex + 1, sections.length - 1)
        : Math.max(currentIndex - 1, 0);

    const nextSection = sections[nextIndex];
    document.getElementById(nextSection)?.scrollIntoView({ behavior: "smooth" });

    setCurrentSection(nextSection);
    if (nextIndex === sections.length - 1) setScrollDirection("up");
    if (nextIndex === 0) setScrollDirection("down");
  };

  useEffect(() => {
    const handleScroll = () => {
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="bg-[#2A1A12] min-h-screen relative">
      <FilmNavbar />

      <main>
        <section id="home">
          <FilmHero />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="services">
          <ServicesPage />
        </section>
        <section id="portfolio">
          <PortfolioPage />
        </section>
        <section id="contact">
          <ContactInfo />
        </section>
        <Footer />
      </main>

      <button
        onClick={scrollToNextSection}
        className="fixed bottom-20 right-6 bg-[#CC5500] p-3 rounded-full shadow-lg hover:bg-[#E05C00] transition-colors z-50 animate-bounce"
        aria-label={scrollDirection === "down" ? "Scroll down" : "Scroll up"}
      >
        {scrollDirection === "down" ? (
          <MdKeyboardArrowDown className="text-[#FFF8F0] text-2xl" />
        ) : (
          <MdKeyboardArrowUp className="text-[#FFF8F0] text-2xl" />
        )}
      </button>

      <a
        href="https://wa.me/27677662899"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] p-3 rounded-full shadow-lg hover:bg-[#1DA851] transition-colors z-50"
        aria-label="WhatsApp"
      >
        <SiWhatsapp className="text-white text-3xl" />
      </a>
    </div>
  );
};

// ✅ No Router here
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/team/ferry-jele" element={<FerryProfile />} />
      <Route path="/team/neo-paulus" element={<NeoProfile />} />
    </Routes>
  );
};

export default App;
