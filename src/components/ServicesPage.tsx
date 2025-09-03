import React from 'react';
import { motion } from "framer-motion";
import { Film, Camera, Clapperboard, Monitor, Mic2, Languages, Award } from "lucide-react";

// Define color palette for cohesive light theme
const colors = {
  bgLight: "#FFF8F0",
  bgCream: "#F5E6D8",
  textDark: "#2A1A12",
  accentOrange: "#CC5500",
  accentGold: "#D4AF37",
  cardShadow: "0 10px 30px rgba(204, 85, 0, 0.10)",
  cardBorder: "1px solid rgba(204,85,0,0.12)",
  textOnImage: "#FFF8F0", // For improved visibility
  overlayOnImage: "linear-gradient(to top, rgba(42,26,18,0.90), rgba(42,26,18,0.60) 70%, rgba(42,26,18,0.3) 100%)"
};

const ServicesPage = () => {
  const services = [
    {
      title: "Film Production",
      icon: <Film style={{ color: colors.accentOrange }} className="w-8 h-8" />,
      description: "End-to-end film production services from concept to final cut, specializing in dramatic storytelling and cinematic visuals.",
      highlights: ["Feature Films", "Short Films", "Cinematic Storytelling"],
      image: "/images/image1 (1).jpeg",
    },
    {
      title: "Cinematography",
      icon: <Camera style={{ color: colors.accentOrange }} className="w-8 h-8" />,
      description: "Award-winning cinematography services that bring your vision to life with stunning visual narratives.",
      highlights: ["Director of Photography", "Camera Operation", "Lighting Design"],
      image: "/images/image4.jpeg",
    },
    {
      title: "TV Production",
      icon: <Monitor style={{ color: colors.accentOrange }} className="w-8 h-8" />,
      description: "Complete television production including telenovelas, dramas, and reality shows with proven success.",
      highlights: ["The River", "How to Ruin Christmas", "Fatal Seduction"],
      image: "/images/image24.jpeg"
    },
    {
      title: "Direction",
      icon: <Clapperboard style={{ color: colors.accentOrange }} className="w-8 h-8" />,
      description: "Visionary direction from SAFTA-winning directors with unique perspectives and storytelling mastery.",
      highlights: ["Creative Direction", "Scene Blocking", "Performance Guidance"],
      image: "/images/images.jpg"
    },
    {
      title: "Performance Coaching",
      icon: <Mic2 style={{ color: colors.accentOrange }} className="w-8 h-8" />,
      description: "Expert dialogue and performance coaching to elevate actor performances to award-winning levels.",
      highlights: ["Dialogue Coaching", "Character Development", "Emotional Authenticity"],
      image: "/images/download-9-2.jpg"
    },
    {
      title: "Translation Services",
      icon: <Languages style={{ color: colors.accentOrange }} className="w-8 h-8" />,
      description: "Professional translation for scripts and subtitles in multiple South African languages.",
      highlights: ["Setswana", "Sesotho", "Zulu", "English"],
      image: "/images/image23.jpeg"
    }
  ];

  const awards = [
    "SAFTA Winner - Best Directing Team",
    "SAFTA Nominee - Supporting Actress",
    "International Emmy Awards Nominee"
  ];

  return (
    <div style={{ background: colors.bgCream, color: colors.textDark, minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ background: colors.bgCream }}>
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom, ${colors.bgCream}, ${colors.bgLight} 90%)`,
          zIndex: 0
        }} />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64" style={{
            background: `${colors.accentGold}1A`,
            borderRadius: "9999px",
            filter: "blur(48px)"
          }} />
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72" style={{
            background: `${colors.accentGold}0D`,
            borderRadius: "9999px",
            filter: "blur(72px)"
          }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-light text-5xl md:text-6xl lg:text-7xl mb-6 tracking-[0.2em] uppercase" style={{ color: colors.textDark }}>
              <span className="block">MONEO FILMS</span>
              <span style={{ color: colors.accentOrange, textShadow: `0 2px 16px ${colors.accentGold}` }}>SERVICES</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: colors.textDark, opacity: 0.7 }}>
              Award-winning production services from South Africa's premier black women-owned film company
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative" style={{ background: colors.bgLight }}>
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg aspect-[4/5] transition-colors duration-300"
                style={{
                  border: colors.cardBorder,
                  background: colors.bgCream,
                  boxShadow: colors.cardShadow
                }}
              >
                {/* Overlay for text visibility */}
                <div className="absolute inset-0 z-10"
                  style={{
                    background: colors.overlayOnImage
                  }}
                />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  style={{
                    filter: "grayscale(0.05)",
                    transition: "filter 0.3s"
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-3 mb-3">
                    {service.icon}
                    <h3
                      className="text-2xl font-light tracking-wider"
                      style={{ color: colors.textOnImage, textShadow: "0 2px 14px #2A1A12" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p className="mb-4" style={{ color: colors.textOnImage, opacity: 0.97, textShadow: "0 1px 8px #2A1A12" }}>{service.description}</p>
                  <ul className="space-y-1">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2" style={{ background: colors.accentOrange, display: "inline-block" }} />
                        <span className="text-sm" style={{ color: colors.textOnImage, opacity: 0.8, textShadow: "0 1px 8px #2A1A12" }}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Recognition */}
      <section className="py-20" style={{
        background: `linear-gradient(90deg, ${colors.bgCream}, ${colors.bgLight} 60%, ${colors.bgCream})`
      }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <Award className="w-12 h-12" style={{ color: colors.accentOrange }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider" style={{ color: colors.textDark }}>
              AWARD-WINNING <span style={{ color: colors.accentOrange }}>EXCELLENCE</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg transition-colors"
                  style={{
                    background: colors.bgLight,
                    border: colors.cardBorder,
                    boxShadow: colors.cardShadow
                  }}
                >
                  <p style={{ color: colors.accentOrange, fontWeight: 400 }}>{award}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden" style={{ background: colors.bgCream }}>
        <div className="absolute inset-0" style={{
          background: `linear-gradient(90deg, ${colors.bgCream}, ${colors.bgLight} 60%, ${colors.bgCream})`,
          zIndex: 0
        }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wider" style={{ color: colors.textDark }}>
              READY TO CREATE <span style={{ color: colors.accentOrange }}>CINEMATIC MAGIC?</span>
            </h2>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: colors.textDark, opacity: 0.7 }}>
              Contact Moneo Films today to discuss your next production
            </p>
            <div className="space-y-4 max-w-md mx-auto">
              <a 
                href="mailto:info@moneofilms.co.za" 
                className="block font-light py-4 px-8 rounded transition-colors duration-300"
                style={{
                  background: colors.accentOrange,
                  color: "#fff",
                  boxShadow: colors.cardShadow
                }}
              >
                info@moneofilms.co.za
              </a>
              <a 
                href="tel:+27677662899" 
                className="block border font-light py-4 px-8 rounded transition-colors duration-300"
                style={{
                  border: `1.5px solid ${colors.accentOrange}`,
                  color: colors.accentOrange,
                  background: colors.bgLight
                }}
              >
                +27 67 766 2899
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;