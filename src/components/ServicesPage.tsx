import React from 'react';
import { motion } from "framer-motion";
import { Film, Camera, Clapperboard, Monitor, Mic2, Languages, Award } from "lucide-react";

// Use placeholder images or replace with your actual image paths
const placeholderImage = "https://via.placeholder.com/800x1000/1a1a1a/cccccc?text=Moneo+Films";

const ServicesPage = () => {
  const services = [
    {
      title: "Film Production",
      icon: <Film className="w-8 h-8 text-gold-accent" />,
      description: "End-to-end film production services from concept to final cut, specializing in dramatic storytelling and cinematic visuals.",
      highlights: ["Feature Films", "Short Films", "Cinematic Storytelling"],
      image: "/images/image1 (1).jpeg",
    },
    {
      title: "Cinematography",
      icon: <Camera className="w-8 h-8 text-gold-accent" />,
      description: "Award-winning cinematography services that bring your vision to life with stunning visual narratives.",
      highlights: ["Director of Photography", "Camera Operation", "Lighting Design"],
      image: "/images/image4.jpeg",
    },
    {
      title: "TV Production",
      icon: <Monitor className="w-8 h-8 text-gold-accent" />,
      description: "Complete television production including telenovelas, dramas, and reality shows with proven success.",
      highlights: ["The River", "How to Ruin Christmas", "Fatal Seduction"],
      image: "/images/image24.jpeg"
    },
    {
      title: "Direction",
      icon: <Clapperboard className="w-8 h-8 text-gold-accent" />,
      description: "Visionary direction from SAFTA-winning directors with unique perspectives and storytelling mastery.",
      highlights: ["Creative Direction", "Scene Blocking", "Performance Guidance"],
      image: "/images/images.jpg"
    },
    {
      title: "Performance Coaching",
      icon: <Mic2 className="w-8 h-8 text-gold-accent" />,
      description: "Expert dialogue and performance coaching to elevate actor performances to award-winning levels.",
      highlights: ["Dialogue Coaching", "Character Development", "Emotional Authenticity"],
      image: "/images/download-9-2.jpg"
    },
    {
      title: "Translation Services",
      icon: <Languages className="w-8 h-8 text-gold-accent" />,
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
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/70 z-0" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-gold-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-light text-5xl md:text-6xl lg:text-7xl mb-6 tracking-[0.2em] uppercase">
              <span className="block">MONEO FILMS</span>
              <span className="text-gold-accent">SERVICES</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Award-winning production services from South Africa's premier black women-owned film company
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
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
                className="group relative overflow-hidden rounded-lg aspect-[4/5] border border-white/10 hover:border-gold-accent/30 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-3 mb-3">
                    {service.icon}
                    <h3 className="text-2xl font-light tracking-wider">{service.title}</h3>
                  </div>
                  <p className="text-white/90 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-gold-accent rounded-full mr-2" />
                        <span className="text-sm text-white/80">{highlight}</span>
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
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <Award className="w-12 h-12 text-gold-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider">
              AWARD-WINNING <span className="text-gold-accent">EXCELLENCE</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-black/30 p-6 rounded-lg border border-gold-accent/20 hover:border-gold-accent/40 transition-colors"
                >
                  <p className="text-gold-accent font-light">{award}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wider">
              READY TO CREATE <span className="text-gold-accent">CINEMATIC MAGIC?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Contact Moneo Films today to discuss your next production
            </p>
            <div className="space-y-4 max-w-md mx-auto">
              <a 
                href="mailto:production@moneofilms.co.za" 
                className="block bg-gold-accent hover:bg-gold-accent/90 text-black font-light py-4 px-8 rounded transition-colors duration-300"
              >
                production@moneofilms.co.za
              </a>
              <a 
                href="tel:+27677662899" 
                className="block border border-gold-accent hover:bg-gold-accent/10 text-gold-accent font-light py-4 px-8 rounded transition-colors duration-300"
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