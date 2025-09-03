import { useState, useEffect,  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Film, User } from "lucide-react";

const colors = {
  textDark: "#2A1A12",
  accentOrange: "#CC5500",
  accentGold: "#D4AF37",
  overlaySidebar: "rgba(42,26,18,0.5)",
  textOnOverlay: "#FFF8F0",
};

export default function FilmNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  const navLinks = [
    { href: "home", label: "HOME", icon: <Film size={18} /> },
    { href: "portfolio", label: "WORK", icon: <Film size={18} /> },
    { href: "about", label: "ABOUT", icon: <User size={18} /> },
    { href: "services", label: "SERVICES", icon: <Film size={18} /> },
    { href: "contact", label: "CONTACT", icon: <User size={18} /> },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/p/C3kADuetVVj/?locale=en_GB%2Cen_GB", label: "Instagram", icon: <Instagram size={22} /> },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable page scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: isScrolled ? "#F5E6D8" : "transparent",
          borderBottom: isScrolled ? `1.5px solid #FFF8F0` : "none",
          boxShadow: isScrolled ? "0 2px 14px rgba(42,26,18,0.05)" : "none",
          transition: "background 0.4s, border-bottom 0.4s, box-shadow 0.4s",
        }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {!isMobileMenuOpen && (
              <div
                className="flex items-center cursor-pointer select-none"
                onClick={() => scrollToSection("home")}
                onMouseEnter={() => setIsHoveringLogo(true)}
                onMouseLeave={() => setIsHoveringLogo(false)}
              >
                <motion.img
                  src="/moneo-logo.png"
                  alt="Moneo Films Logo"
                  className="w-12 h-12 bg-white"
                  animate={{ rotate: isHoveringLogo ? 10 : 0, scale: isHoveringLogo ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  style={{
                    filter: "drop-shadow(0 6px 18px rgba(204,85,0,0.15))",
                    background: "#F5E6D8",
                    borderRadius: "8px",
                    border: `2px solid ${colors.accentOrange}44`,
                    objectFit: "contain",
                    padding: "2px",
                  }}
                />
                <span
                  className="ml-3 tracking-[0.2em]"
                  style={{
                    color: colors.accentOrange,
                    textShadow: `0 2px 16px ${colors.accentGold}`,
                    fontWeight: 600,
                    fontSize: "1.18rem",
                    letterSpacing: "0.2em",
                    fontFamily: "inherit",
                  }}
                >
                  MONEO FILMS
                </span>
              </div>
            )}

            <div className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="transition font-semibold flex items-center gap-2"
                  style={{
                    color: colors.textDark,
                    opacity: 0.82,
                    fontSize: "1rem",
                    letterSpacing: "0.08em",
                    background: "none",
                    border: "none",
                    padding: "6px 0",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = colors.accentOrange)}
                  onMouseOut={(e) => (e.currentTarget.style.color = colors.textDark)}
                >
                  {link.icon} {link.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              style={{
                color: colors.textDark,
                background: "#F5E6D8",
                borderRadius: "50%",
                padding: "6px",
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-72 h-full p-7 z-50 flex flex-col backdrop-blur-sm"
            style={{
              background: colors.overlaySidebar,
              color: colors.textOnOverlay,
            }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-7 right-7 focus:outline-none"
              style={{ color: colors.accentOrange, background: "none", border: "none" }}
            >
              <X size={32} />
            </button>

            <div className="mt-20 mb-10 flex items-center gap-3 justify-center">
              <img
                src="/moneo-logo.png"
                alt="Moneo Films Logo"
                className="w-11 h-11 bg-white"
                style={{
                  filter: "drop-shadow(0 6px 18px rgba(204,85,0,0.15))",
                  background: "#F5E6D8",
                  borderRadius: "8px",
                  border: `2px solid ${colors.accentOrange}44`,
                  objectFit: "contain",
                  padding: "2px",
                }}
              />
              <span
                className="ml-1"
                style={{
                  color: colors.accentOrange,
                  textShadow: `0 2px 16px ${colors.accentGold}`,
                  fontWeight: 600,
                  fontSize: "1.12rem",
                  letterSpacing: "0.19em",
                  fontFamily: "inherit",
                }}
              >
                MONEO FILMS
              </span>
            </div>

            <nav className="space-y-8 mb-10 flex-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-2xl font-semibold flex items-center gap-3"
                  style={{
                    color: colors.textOnOverlay,
                    background: "none",
                    border: "none",
                  }}
                >
                  {link.icon} {link.label}
                </button>
              ))}
            </nav>

            {/* Instagram Only */}
            <div className="mt-auto flex justify-center">
              <a
                href={socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-all"
                style={{
                  background: "#FFF8F033",
                  color: colors.textOnOverlay,
                  border: `1px solid ${colors.accentGold}33`,
                }}
              >
                {socialLinks[0].icon}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
