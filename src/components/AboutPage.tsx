"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Mail,
  Twitter,
  X,
} from "lucide-react";

// --- Data Definitions ---

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin: string;
    email: string;
    twitter: string;
  };
  works?: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ferry Jele",
    role: "Co-Founder & Creative Director",
    bio: "Visionary leader with over 15 years in film production. Ferry's passion for storytelling and commitment to excellence drives Moneo Films' creative vision.",
    image: "/images/IWII9j7j_400x400.jpg",
    social: {
      linkedin: "#",
      email: "ferry@moneofilms.co.za",
      twitter: "#",
    },
    works: [
      "The River (Director)",
      "How to Ruin Christmas (Director)",
      "SAFTA Winner for Directing",
      "Fatal Seduction (Creative Direction)",
      "Scandal (Production Team)"
    ]
  },
  {
    id: 2,
    name: "Neo R Paulus",
    role: "Co-Founder & Executive Producer",
    bio: "Strategic mastermind behind Moneo Films' operations. Neo brings extensive experience in production management and business development.",
    image: "/images/516252548_18425953228097209_2757025492135577868_n.jpg",
    social: {
      linkedin: "#",
      email: "neo@moneofilms.co.za",
      twitter: "#",
    },
    works: [
      "Scandal (Executive Producer)",
      "Saints & Sinners (Producer)",
      "S'JOLA SONKE (Producer)",
      "Society S2 & 3 (Producer)"
    ]
  },
  {
    id: 3,
    name: "Thabo Mthembu",
    role: "Director of Photography",
    bio: "Award-winning cinematographer with a keen eye for visual storytelling. Thabo's work has been featured in numerous acclaimed productions.",
    image: "/images/506052116_18529083088060655_5038506189310254394_n.jpg",
    social: {
      linkedin: "#",
      email: "thabo@moneofilms.co.za",
      twitter: "#",
    },
    works: [
      "The River (Director of Photography)",
      "Scandal (Cinematographer)",
      "Pitch Black (Cinematographer)",
      "Award for Visual Storytelling"
    ]
  },
];

const carouselImages = [
  { id: 1, src: "/images/image0%20(3).jpeg", alt: "Image 0 (3)", caption: "Production Image 0 (3)" },
  { id: 2, src: "/images/image1%20(1).jpeg", alt: "Image 1 (1)", caption: "Production Image 1 (1)" },
  { id: 3, src: "/images/image1.jpeg", alt: "Image 1", caption: "Production Image 1" },
  { id: 4, src: "/images/image10.jpeg", alt: "Image 10", caption: "Production Image 10" },
  { id: 5, src: "/images/image11.jpeg", alt: "Image 11", caption: "Production Image 11" },
  { id: 6, src: "/images/image12.jpeg", alt: "Image 12", caption: "Production Image 12" },
  { id: 7, src: "/images/image13.jpeg", alt: "Image 13", caption: "Production Image 13" },
  { id: 8, src: "/images/image14.jpeg", alt: "Image 14", caption: "Production Image 14" },
  { id: 9, src: "/images/image15.jpeg", alt: "Image 15", caption: "Production Image 15" },
  { id: 10, src: "/images/image16.jpeg", alt: "Image 16", caption: "Production Image 16" },
  { id: 11, src: "/images/image17.jpeg", alt: "Image 17", caption: "Production Image 17" },
  { id: 12, src: "/images/image18.jpeg", alt: "Image 18", caption: "Production Image 18" },
  { id: 13, src: "/images/image19.jpeg", alt: "Image 19", caption: "Production Image 19" },
  { id: 14, src: "/images/image20.jpeg", alt: "Image 20", caption: "Production Image 20" },
  { id: 15, src: "/images/image21.jpeg", alt: "Image 21", caption: "Production Image 21" },
  { id: 16, src: "/images/image22.jpeg", alt: "Image 22", caption: "Production Image 22" },
  { id: 17, src: "/images/image23.jpeg", alt: "Image 23", caption: "Production Image 23" },
  { id: 18, src: "/images/image24.jpeg", alt: "Image 24", caption: "Production Image 24" },
  { id: 19, src: "/images/image3.jpeg", alt: "Image 3", caption: "Production Image 3" },
  { id: 20, src: "/images/image4.jpeg", alt: "Image 4", caption: "Production Image 4" },
  { id: 21, src: "/images/image5.jpeg", alt: "Image 5", caption: "Production Image 5" },
  { id: 22, src: "/images/image6.jpeg", alt: "Image 6", caption: "Production Image 6" },
  { id: 23, src: "/images/image7.jpeg", alt: "Image 7", caption: "Production Image 7" },
  { id: 24, src: "/images/image8.jpeg", alt: "Image 8", caption: "Production Image 8" },
  { id: 25, src: "/images/image9.jpeg", alt: "Image 9", caption: "Production Image 9" },
];

const collageImages = [
  { src: "/images/image1.jpeg", caption: "Production #1" },
  { src: "/images/image2.jpeg", caption: "Production #2" },
  { src: "/images/image3.jpeg", caption: "Production #3" },
  { src: "/images/image4.jpeg", caption: "Production #4" },
  { src: "/images/image5.jpeg", caption: "Production #5" },
  { src: "/images/image6.jpeg", caption: "Production #6" },
  { src: "/images/image7.jpeg", caption: "Production #7" },
  { src: "/images/image8.jpeg", caption: "Production #8" },
  { src: "/images/image9.jpeg", caption: "Production #9" },
];

const colors = {
  bgLight: "#FFF8F0",
  bgCream: "#F5E6D8",
  textDark: "#2A1A12",
  accentOrange: "#CC5500",
  accentGold: "#D4AF37",
  cardShadow: "0 10px 30px rgba(204, 85, 0, 0.10)",
  cardBorder: "1px solid rgba(204,85,0,0.12)"
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const AboutPage: React.FC = () => {
  const [profilePopup, setProfilePopup] = useState<TeamMember | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openCollageIdx, setOpenCollageIdx] = useState<number | null>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });

  // Show/hide Company Story & Carousel
  const [showStoryModal, setShowStoryModal] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div style={{ background: colors.bgCream, minHeight: "100vh" }} className="pt-20">

      {/* Hero Section - About Heading & Blurb & Collage */}
      <section className="relative py-32 overflow-hidden" style={{ background: colors.bgCream }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32" style={{ background: `${colors.accentGold}1A`, borderRadius: "9999px", filter: "blur(40px)" }} />
          <div className="absolute bottom-20 right-10 w-48 h-48" style={{ background: `${colors.bgLight}0D`, borderRadius: "9999px", filter: "blur(48px)" }} />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 style={{ color: colors.textDark }} className="font-light text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight tracking-[0.1em] heading-elegant font-netflix">
              ABOUT
              <span className="block" style={{ color: colors.accentOrange, textShadow: `0 2px 16px ${colors.accentGold}` }}>
                MONEO FILMS
              </span>
            </h1>
            <p style={{ color: colors.textDark, opacity: 0.7 }} className="font-light text-xl max-w-4xl mx-auto leading-relaxed minimal-text font-netflix">
              Trailblazing production company owned entirely by black women,
              redefining storytelling since 2018
            </p>
            {/* Collage */}
            <div className="mt-16 relative">
              <div className="absolute inset-0 -z-10 opacity-40">
                <div className="absolute top-1/3 left-1/4 w-48 h-48" style={{ background: `${colors.accentGold}26`, borderRadius: "9999px", filter: "blur(40px)", animation: "pulse 2s infinite" }} />
                <div className="absolute bottom-1/4 right-1/3 w-56 h-56" style={{ background: `${colors.accentGold}1A`, borderRadius: "9999px", filter: "blur(56px)", animation: "pulse 2s infinite 1s" }} />
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {collageImages.map((img, idx) => (
                  <motion.div
                    key={img.src}
                    whileHover={{ scale: 1.08, zIndex: 20 }}
                    initial={{ opacity: 0, y: 40, rotate: idx % 3 === 0 ? 3 : idx % 3 === 1 ? -2 : 1 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      rotate: idx % 3 === 0 ? 2 : idx % 3 === 1 ? -1 : 0.5,
                      transition: { duration: 0.6, delay: idx * 0.1 }
                    }}
                    viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                    className={`relative overflow-hidden rounded-lg aspect-square transition-all duration-300 cursor-pointer ${
                      idx % 4 === 0 ? 'md:mt-6' : idx % 5 === 0 ? 'md:-mt-6' : ''
                    }`}
                    style={{
                      boxShadow: colors.cardShadow,
                      border: colors.cardBorder,
                      transformStyle: "preserve-3d",
                      background: colors.bgLight
                    }}
                    onClick={() => setOpenCollageIdx(idx)}
                  >
                    <motion.img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      initial={{ scale: 1 }}
                      whileHover={{
                        scale: 1.15,
                        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                      }}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(42,26,18,0.05), rgba(42,26,18,0.25), rgba(42,26,18,0.5))" }} />
                    <div className="absolute inset-0 border border-white/10 hover:border-[#CC5500]/40 transition-colors duration-300" />
                    <div className="absolute inset-0 pointer-events-none opacity-10 hover:opacity-5 transition-opacity duration-300"
                      style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.6\'/%3E%3C/svg%3E")'
                      }} />
                    <motion.div
                      className="absolute bottom-3 right-3 w-4 h-4 border-b border-r"
                      style={{ borderColor: `${colors.accentGold}99` }}
                      whileHover={{
                        scale: 1.5,
                        borderColor: `${colors.accentGold}`,
                        transition: { duration: 0.3 }
                      }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-3"
                      style={{ background: "linear-gradient(to top, rgba(42,26,18,0.80), rgba(42,26,18,0.50), transparent)" }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-xs" style={{ color: `${colors.accentOrange}CC`, fontWeight: 400, letterSpacing: "0.05em" }}>
                        {img.caption}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              {/* Dynamic connector lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    d="M15% 30% Q 30% 15%, 50% 25% T 85% 35%"
                    stroke="rgba(204, 85, 0, 0.12)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="6,4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  <motion.path
                    d="M20% 70% Q 40% 60%, 60% 70% T 80% 60%"
                    stroke="rgba(204, 85, 0, 0.12)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4,6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                </svg>
              </div>
              {/* Collage Modal */}
              <AnimatePresence>
                {openCollageIdx !== null && (
                  <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpenCollageIdx(null)}
                  >
                    <motion.div
                      className="bg-white rounded-lg p-6 shadow-xl relative"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.95 }}
                      onClick={e => e.stopPropagation()}
                      style={{ maxWidth: '90vw', maxHeight: '90vh' }}
                    >
                      <button
                        className="absolute top-4 right-4 rounded-full p-2 transition-colors z-10 bg-[#CC5500] text-white"
                        onClick={() => setOpenCollageIdx(null)}
                        aria-label="Close Collage Modal"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <img src={collageImages[openCollageIdx].src} alt={collageImages[openCollageIdx].caption} className="w-[32rem] max-w-full h-auto object-cover rounded-lg mb-4" />
                      <p className="text-center text-xl">{collageImages[openCollageIdx].caption}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story + Image Carousel */}
      <section ref={storyRef} className="py-32 relative overflow-hidden" style={{ background: colors.bgLight }}>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate={isStoryInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-20 items-center mb-32"
          >
            {/* Text Content */}
            <motion.div>
              <h2 style={{ color: colors.textDark }} className="font-light text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight tracking-[0.1em] heading-elegant font-netflix">
                OUR
                <span className="block" style={{ color: colors.accentOrange, textShadow: `0 2px 16px ${colors.accentGold}` }}>
                  STORY
                </span>
              </h2>
              <div className="space-y-6 font-netflix text-lg" style={{ color: colors.textDark, opacity: 0.8, lineHeight: "1.7" }}>
                <p>
                  Founded in 2018, Moneo Films is a trailblazing production
                  company owned entirely by black women. We specialize in
                  producing remarkable films, documentaries, series, and other
                  television products.
                </p>
                <p>
                  Led by our visionary co-founders, Ferry Jele and Neo R Paulus,
                  we push boundaries and redefine storytelling.
                </p>
                <p>
                  At Moneo Films, we are more than just a production company -
                  we are an all-encompassing entertainment and administration
                  office. Our team of experts excels in script development,
                  directing, cinematography, performance coaching, dialogue
                  coaching, and more.
                </p>
                <p>
                  We provide a comprehensive range of services and equipment,
                  ensuring excellence in every aspect of production.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-sm" style={{
                  background: colors.bgCream,
                  boxShadow: colors.cardShadow,
                  border: colors.cardBorder
                }}>
                  <div className="font-light text-3xl mb-2 font-netflix" style={{ color: colors.accentOrange }}>
                    2018
                  </div>
                  <div className="font-light text-sm uppercase tracking-[0.15em] font-netflix" style={{ color: colors.textDark, opacity: 0.5 }}>
                    Founded
                  </div>
                </div>
                <div className="text-center p-6 rounded-sm" style={{
                  background: colors.bgCream,
                  boxShadow: colors.cardShadow,
                  border: colors.cardBorder
                }}>
                  <div className="font-light text-3xl mb-2 font-netflix" style={{ color: colors.accentOrange }}>
                    100%
                  </div>
                  <p className="font-light text-sm uppercase tracking-[0.15em] font-netflix" style={{ color: colors.textDark, opacity: 0.5 }}>
                    Black Women Owned
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Image Carousel */}
            <motion.div className="relative">
              <div className="aspect-[4/3] relative rounded-sm overflow-hidden" style={{ background: colors.bgLight, boxShadow: colors.cardShadow, border: colors.cardBorder }}>
                <div className="relative w-full h-full">
                  {carouselImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                    >
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,26,18,0.60), transparent, transparent)" }} />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="font-light" style={{ color: colors.textDark, fontSize: "1.1rem" }}>
                          {image.caption}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12"
                  style={{
                    background: "#F5E6D8BB",
                    borderRadius: "50%",
                    boxShadow: colors.cardShadow,
                    border: colors.cardBorder
                  }}
                >
                  <ChevronLeft style={{ color: colors.accentOrange }} className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12"
                  style={{
                    background: "#F5E6D8BB",
                    borderRadius: "50%",
                    boxShadow: colors.cardShadow,
                    border: colors.cardBorder
                  }}
                >
                  <ChevronRight style={{ color: colors.accentOrange }} className="w-6 h-6" />
                </button>
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors`}
                      style={{
                        background: index === currentSlide ? colors.accentOrange : `${colors.textDark}24`
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Story Modal Trigger */}
            <div className="absolute top-4 right-4 z-30">
              <button
                className="px-4 py-2 bg-[#CC5500] text-white rounded shadow-md"
                onClick={() => setShowStoryModal(true)}
              >
                Open Story Section
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Modal */}
      <AnimatePresence>
        {showStoryModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowStoryModal(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-8 shadow-xl relative w-full max-w-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 rounded-full p-2 transition-colors z-10 bg-[#CC5500] text-white"
                onClick={() => setShowStoryModal(false)}
                aria-label="Close Story Modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div>
                <h2 style={{ color: colors.textDark }} className="font-light text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight tracking-[0.1em] heading-elegant font-netflix">
                  OUR
                  <span className="block" style={{ color: colors.accentOrange, textShadow: `0 2px 16px ${colors.accentGold}` }}>
                    STORY
                  </span>
                </h2>
                <div className="space-y-6 font-netflix text-lg" style={{ color: colors.textDark, opacity: 0.8, lineHeight: "1.7" }}>
                  <p>
                    Founded in 2018, Moneo Films is a trailblazing production
                    company owned entirely by black women. We specialize in
                    producing remarkable films, documentaries, series, and other
                    television products.
                  </p>
                  <p>
                    Led by our visionary co-founders, Ferry Jele and Neo R Paulus,
                    we push boundaries and redefine storytelling.
                  </p>
                  <p>
                    At Moneo Films, we are more than just a production company -
                    we are an all-encompassing entertainment and administration
                    office. Our team of experts excels in script development,
                    directing, cinematography, performance coaching, dialogue
                    coaching, and more.
                  </p>
                  <p>
                    We provide a comprehensive range of services and equipment,
                    ensuring excellence in every aspect of production.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Meet the Team */}
      <section className="py-32 relative overflow-hidden" style={{ background: colors.bgLight }}>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-light text-4xl md:text-5xl lg:text-6xl mb-6 tracking-[0.1em] heading-elegant font-netflix" style={{ color: colors.textDark }}>
              MEET THE
              <span className="block" style={{ color: colors.accentOrange, textShadow: `0 2px 16px ${colors.accentGold}` }}>TEAM</span>
            </h2>
            <p className="font-light text-lg max-w-3xl mx-auto leading-relaxed minimal-text font-netflix" style={{ color: colors.textDark, opacity: 0.7 }}>
              The visionary minds behind our award-winning productions. Each
              member brings unique expertise and passion to every project we
              undertake.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.button
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group rounded-sm overflow-hidden cursor-pointer border-none p-0 bg-transparent"
                style={{
                  boxShadow: colors.cardShadow,
                  border: colors.cardBorder,
                  background: colors.bgCream,
                  position: "relative"
                }}
                whileHover={{ y: -5 }}
                onClick={() => setProfilePopup(member)}
                aria-label={`View profile of ${member.name}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,26,18,0.80), transparent, transparent)" }} />
                  <div className="absolute inset-0 film-grain opacity-20" />
                </div>
                <div className="p-6">
                  <h3 className="font-light text-xl mb-2 tracking-[0.05em] font-netflix" style={{
                    color: colors.textDark,
                    transition: "color 0.3s"
                  }}>
                    {member.name}
                  </h3>
                  <p className="font-light text-sm mb-4 tracking-[0.1em] uppercase font-netflix" style={{ color: colors.accentOrange }}>
                    {member.role}
                  </p>
                  <p className="font-light text-sm leading-relaxed minimal-text font-netflix" style={{ color: colors.textDark, opacity: 0.7 }}>
                    {member.bio}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Profile Modal */}
      <AnimatePresence>
        {profilePopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: `${colors.textDark}ee`,
              backdropFilter: "blur(10px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProfilePopup(null)}
          >
            <motion.div
              className="rounded-2xl max-w-md w-full border shadow-2xl relative"
              style={{
                background: colors.bgCream,
                border: colors.cardBorder,
                boxShadow: colors.cardShadow,
              }}
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setProfilePopup(null)}
                className="absolute top-4 right-4 rounded-full p-2 transition-colors z-10"
                style={{
                  background: colors.accentOrange,
                  color: colors.bgCream,
                }}
                aria-label="Close Team Modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex flex-col items-center p-8 pt-12">
                <img
                  src={profilePopup.image || "/placeholder.svg"}
                  alt={profilePopup.name}
                  className="w-32 h-32 object-cover rounded-full shadow-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2" style={{ color: colors.accentOrange }}>
                  {profilePopup.name}
                </h2>
                <p className="text-sm mb-2 uppercase" style={{ color: colors.textDark, opacity: 0.8 }}>
                  {profilePopup.role}
                </p>
                <p className="text-base font-light mb-4 text-center" style={{ color: colors.textDark, opacity: 0.7 }}>
                  {profilePopup.bio}
                </p>
                {profilePopup.works && profilePopup.works.length > 0 && (
                  <div className="w-full mb-4">
                    <h3 className="text-md font-semibold mb-2" style={{ color: colors.accentGold }}>Things They've Done</h3>
                    <ul className="list-disc pl-4 text-sm" style={{ color: colors.textDark }}>
                      {profilePopup.works.map((work, widx) => (
                        <li key={widx}>{work}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex gap-4 mt-2">
                  <a
                    href={profilePopup.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    style={{ background: "#FFF8F099", borderColor: colors.cardBorder }}
                  >
                    <Linkedin className="w-4 h-4" style={{ color: colors.accentOrange }} />
                  </a>
                  <a
                    href={`mailto:${profilePopup.social.email}`}
                    aria-label="Email"
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    style={{ background: "#FFF8F099", borderColor: colors.cardBorder }}
                  >
                    <Mail className="w-4 h-4" style={{ color: colors.accentOrange }} />
                  </a>
                  <a
                    href={profilePopup.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    style={{ background: "#FFF8F099", borderColor: colors.cardBorder }}
                  >
                    <Twitter className="w-4 h-4" style={{ color: colors.accentOrange }} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutPage;