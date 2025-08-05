import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Linkedin, Film, User } from "lucide-react";

const colors = {
  bgLight: "#FFF8F0",
  bgCream: "#F5E6D8",
  textDark: "#2A1A12",
  accentOrange: "#CC5500",
  accentGold: "#D4AF37",
  textOnImage: "#FFF8F0",
  overlayOnImage: "linear-gradient(to top, rgba(42,26,18,0.94), rgba(42,26,18,0.80) 70%, rgba(42,26,18,0.3) 100%)"
};

export default function FilmNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "home", label: "HOME", icon: <Film size={18} /> },
    { href: "portfolio", label: "WORK", icon: <Film size={18} /> },
    { href: "about", label: "ABOUT", icon: <User size={18} /> },
    { href: "services", label: "SERVICES", icon: <Film size={18} /> },
    { href: "contact", label: "CONTACT", icon: <User size={18} /> },
  ];

  // Social links for drawer
  const socialLinks = [
    { href: "https://instagram.com", label: "Instagram", icon: <Instagram size={22} /> },
    { href: "https://facebook.com", label: "Facebook", icon: <Facebook size={22} /> },
    { href: "https://linkedin.com", label: "LinkedIn", icon: <Linkedin size={22} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className={`fixed top-0 left-0 right-0 z-50`}
        style={{
          background: isScrolled ? colors.bgCream : "transparent",
          borderBottom: isScrolled ? `1.5px solid ${colors.bgLight}` : "none",
          boxShadow: isScrolled ? "0 2px 14px rgba(42,26,18,0.05)" : "none",
          transition: "background 0.4s, border-bottom 0.4s, box-shadow 0.4s"
        }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer select-none"
              onClick={() => scrollToSection("home")}
              onMouseEnter={() => setIsHoveringLogo(true)}
              onMouseLeave={() => setIsHoveringLogo(false)}
              style={{ minHeight: "40px" }}
            >
              <motion.img
                src="/moneo-logo.png"
                alt="Moneo Films Logo"
                className="w-12 h-12 bg-white"
                animate={{ rotate: isHoveringLogo ? 10 : 0, scale: isHoveringLogo ? 1.10 : 1 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                style={{
                  filter: "drop-shadow(0 6px 18px rgba(204,85,0,0.15))",
                  background: colors.bgCream,
                  borderRadius: "8px",
                  border: `2px solid ${colors.accentOrange}44`,
                  objectFit: "contain",
                  boxSizing: "border-box",
                  padding: "2px",
                  display: "block"
                }}
                onError={e => {
                  // fallback: show text if logo missing
                  (e.target as HTMLImageElement).style.display = 'none';
                  const logoText = document.getElementById("logo-fallback");
                  if (logoText) logoText.style.display = "inline";
                }}
              />
              <span
                id="logo-fallback"
                style={{
                  display: "none",
                  background: colors.bgCream,
                  borderRadius: "8px",
                  padding: "6px 10px",
                  fontWeight: 700,
                  color: colors.accentOrange,
                  letterSpacing: "0.16em",
                  fontSize: "1.25rem",
                  boxShadow: "0 2px 14px rgba(42,26,18,0.09)",
                }}
              >
                M
              </span>
              <span
                className="ml-3 tracking-[0.2em]"
                style={{
                  color: colors.accentOrange,
                  textShadow: `0 2px 16px ${colors.accentGold}`,
                  fontWeight: 600,
                  fontSize: "1.18rem",
                  letterSpacing: "0.2em",
                  fontFamily: "inherit",
                  userSelect: "none"
                }}
              >
                MONEO FILMS
              </span>
            </div>

            {/* Desktop Menu */}
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
                    padding: "6px 0"
                  }}
                  onMouseOver={e => (e.currentTarget.style.color = colors.accentOrange)}
                  onMouseOut={e => (e.currentTarget.style.color = colors.textDark)}
                >
                  {link.icon}
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              style={{
                color: colors.textDark,
                background: colors.bgCream,
                borderRadius: "50%",
                padding: "6px"
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-72 h-full p-7 z-50"
            style={{
              background: colors.overlayOnImage,
              color: colors.textOnImage,
              boxShadow: "0 0 40px rgba(42,26,18,0.12)",
              borderLeft: `2px solid ${colors.bgLight}`,
            }}
          >
            {/* Red animated X close button inside drawer */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-7 right-7 focus:outline-none"
              style={{ color: colors.accentOrange, background: "none", border: "none" }}
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                <X size={32} />
              </motion.div>
            </button>
            <div className="mt-20 mb-10 flex items-center gap-3 justify-center">
              <motion.img
                src="/moneo-logo.png"
                alt="Moneo Films Logo"
                className="w-11 h-11 bg-white"
                whileHover={{ scale: 1.15, rotate: 12 }}
                style={{
                  filter: "drop-shadow(0 6px 18px rgba(204,85,0,0.15))",
                  background: colors.bgCream,
                  borderRadius: "8px",
                  border: `2px solid ${colors.accentOrange}44`,
                  objectFit: "contain",
                  boxSizing: "border-box",
                  padding: "2px",
                  display: "block"
                }}
                onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const logoText = document.getElementById("mobile-logo-fallback");
                  if (logoText) logoText.style.display = "inline";
                }}
              />
              <span
                id="mobile-logo-fallback"
                style={{
                  display: "none",
                  background: colors.bgCream,
                  borderRadius: "8px",
                  padding: "6px 10px",
                  fontWeight: 700,
                  color: colors.accentOrange,
                  letterSpacing: "0.16em",
                  fontSize: "1.25rem",
                  boxShadow: "0 2px 14px rgba(42,26,18,0.09)",
                }}
              >
                M
              </span>
              <span
                className="ml-1"
                style={{
                  color: colors.accentOrange,
                  textShadow: `0 2px 16px ${colors.accentGold}`,
                  fontWeight: 600,
                  fontSize: "1.12rem",
                  letterSpacing: "0.19em",
                  fontFamily: "inherit",
                  userSelect: "none"
                }}
              >
                MONEO FILMS
              </span>
            </div>
            <nav className="space-y-8 mb-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-2xl font-semibold flex items-center gap-3"
                  style={{
                    color: colors.textOnImage,
                    opacity: 0.98,
                    textShadow: "0 1px 12px #2A1A12",
                    background: "none",
                    border: "none"
                  }}
                  onMouseOver={e => (e.currentTarget.style.color = colors.accentOrange)}
                  onMouseOut={e => (e.currentTarget.style.color = colors.textOnImage)}
                >
                  {link.icon}
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="mt-10 border-t border-[#FFF8F044] pt-7 flex flex-col items-center gap-5">
              <span className="text-xs uppercase font-bold tracking-widest mb-2" style={{ color: colors.accentGold, letterSpacing: ".13em" }}>Connect with us</span>
              <div className="flex gap-5 justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 transition-all"
                    style={{
                      background: "#FFF8F033",
                      color: colors.textOnImage,
                      border: `1px solid ${colors.accentGold}33`
                    }}
                    aria-label={social.label}
                    onMouseOver={e => (e.currentTarget.style.color = colors.accentOrange)}
                    onMouseOut={e => (e.currentTarget.style.color = colors.textOnImage)}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-10 text-center text-xs opacity-80" style={{ color: "#FFF8F0" }}>
              &copy; {new Date().getFullYear()} Moneo Films. All rights reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}