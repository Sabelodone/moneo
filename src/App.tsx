import "./App.css";
import FilmNavbar from "./components/FilmNavbar";
import FilmHero from "./components/FilmHero";
import AboutPage from "./components/AboutPage";
import PortfolioPage from "./components/PortfolioPage";
import ServicesPage from "./components/ServicesPage";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import { FaWhatsapp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";

function App() {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [currentSection, setCurrentSection] = useState('home');

  const sections = useMemo(() => ['home', 'about', 'services', 'portfolio', 'contact'], []);

  const scrollToNextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = scrollDirection === 'down' 
      ? Math.min(currentIndex + 1, sections.length - 1)
      : Math.max(currentIndex - 1, 0);
    
    const nextSection = sections[nextIndex];
    document.getElementById(nextSection)?.scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(nextSection);
    
    if (nextIndex === sections.length - 1) {
      setScrollDirection('up');
    } else if (nextIndex === 0) {
      setScrollDirection('down');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        aria-label={scrollDirection === 'down' ? "Scroll down" : "Scroll up"}
      >
        {scrollDirection === 'down' ? (
          <FaChevronDown className="text-[#FFF8F0] text-2xl" />
        ) : (
          <FaChevronUp className="text-[#FFF8F0] text-2xl" />
        )}
      </button>

      <a
        href="https://wa.me/27677662899"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#003B36] p-3 rounded-full shadow-lg hover:bg-[#005A52] transition-colors z-50"
      >
        <FaWhatsapp className="text-[#FFF8F0] text-3xl" />
      </a>
    </div>
  );
}

export default App;