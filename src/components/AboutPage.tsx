"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, Variants } from "framer-motion"; // Import Variants
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Film,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

// --- Data Definitions ---

// Define a type for Team Member to ensure consistency
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
}

// Team data
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
  },
  
];

// Define a type for Carousel Image
interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

// Carousel images
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
]

// --- AboutPage Component ---

const AboutPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const storyRef = useRef<HTMLDivElement>(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Framer Motion Variants
  // Explicitly type containerVariants as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Explicitly type itemVariants as Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Cubic bezier array is a valid ease type
      },
    },
  };

  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Decorative background elements for visual flair */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gold-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="font-light text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight tracking-[0.1em] heading-elegant font-netflix">
              ABOUT
              <span className="block text-gold-accent text-shadow-gold">
                MONEO FILMS
              </span>
            </h1>
            <p className="font-light text-xl text-white/70 max-w-4xl mx-auto leading-relaxed minimal-text font-netflix">
              Trailblazing production company owned entirely by black women,
              redefining storytelling since 2018
            </p>
            {/* Expanded Cinematic Picture Collage */}
<div className="mt-16 relative">
  {/* Background glow effects */}
  <div className="absolute inset-0 -z-10 opacity-40">
    <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gold-accent/15 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gold-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
  </div>

  <div className="grid grid-cols-3 gap-4 md:gap-6">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40, rotate: index % 3 === 0 ? 3 : index % 3 === 1 ? -2 : 1 }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          rotate: index % 3 === 0 ? 2 : index % 3 === 1 ? -1 : 0.5,
          transition: { duration: 0.6, delay: index * 0.1 }
        }}
        whileHover={{ 
          scale: 1.08,
          rotate: 0,
          zIndex: 20,
          boxShadow: '0 20px 50px rgba(212, 175, 55, 0.6)',
          transition: { duration: 0.3 }
        }}
        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
        className={`relative overflow-hidden rounded-lg aspect-square transition-all duration-300 ${
          index % 4 === 0 ? 'md:mt-6' : index % 5 === 0 ? 'md:-mt-6' : ''
        }`}
        style={{
          boxShadow: '0 10px 30px rgba(212, 175, 55, 0.25)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Image with enhanced parallax */}
        <motion.img
          src={`/images/image${index}.jpeg`}
          alt={`Moneo Films production ${index}`}
          className="w-full h-full object-cover"
          loading="lazy"
          initial={{ scale: 1 }}
          whileHover={{ 
            scale: 1.15,
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
          }}
        />
        
        {/* Enhanced cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black/50" />
        <div className="absolute inset-0 border border-white/10 hover:border-gold-accent/40 transition-colors duration-300" />
        
        {/* Dynamic film grain effect */}
        <div className="absolute inset-0 pointer-events-none opacity-10 hover:opacity-5 transition-opacity duration-300"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.6\'/%3E%3C/svg%3E")'
          }}
        />
        
        {/* Animated corner accent */}
        <motion.div 
          className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold-accent/60"
          whileHover={{
            scale: 1.5,
            borderColor: 'rgba(212, 175, 55, 0.9)',
            transition: { duration: 0.3 }
          }}
        />
        
        {/* Subtle image label */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xs text-gold-accent/90 font-light tracking-wider">
            Production #{index}
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
        stroke="rgba(212, 175, 55, 0.12)" 
        strokeWidth="1.5" 
        fill="none"
        strokeDasharray="6,4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.path 
        d="M20% 70% Q 40% 60%, 60% 70% T 80% 60%"
        stroke="rgba(212, 175, 55, 0.12)" 
        strokeWidth="1.5" 
        fill="none"
        strokeDasharray="4,6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </svg>
  </div>
</div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isStoryInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-20 items-center mb-32"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <h2 className="font-light text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight tracking-[0.1em] heading-elegant font-netflix">
                OUR
                <span className="block text-gold-accent text-shadow-gold">
                  STORY
                </span>
              </h2>

              <div className="space-y-6 font-netflix text-lg text-white/80 leading-relaxed minimal-text">
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
                <div className="text-center elegant-card p-6 rounded-sm">
                  <div className="font-light text-3xl text-gold-accent mb-2 font-netflix">
                    2018
                  </div>
                  <div className="font-light text-sm text-white/50 uppercase tracking-[0.15em] font-netflix">
                    Founded
                  </div>
                </div>
                <div className="text-center elegant-card p-6 rounded-sm">
                  <div className="font-light text-3xl text-gold-accent mb-2 font-netflix">
                    100%
                  </div>
                  <p className="font-light text-sm text-white/50 uppercase tracking-[0.15em] font-netflix">
                    Black Women Owned
                  </p>
                </div>
              </div>
            </motion.div>
            

            {/* Image Carousel */}
            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-[4/3] relative elegant-card rounded-sm overflow-hidden">
                <div className="relative w-full h-full">
                  {carouselImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="font-light text-white text-lg font-netflix">
                          {image.caption}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                </div>
                {/* Dynamic Funky Collage */}
<div className="mt-16 relative h-[500px]">
  {[
    { src: '/images/image1.jpeg', pos: 'top-0 left-0 w-1/3', rotate: 'rotate-2' },
    { src: '/images/image2.jpeg', pos: 'top-0 right-0 w-2/5', rotate: '-rotate-1' },
    { src: '/images/image3.jpeg', pos: 'bottom-10 left-1/4 w-1/4', rotate: 'rotate-3' },
    { src: '/images/image4.jpeg', pos: 'bottom-0 right-10 w-1/3', rotate: '-rotate-2' },
    { src: '/images/image5.jpeg', pos: 'top-1/3 left-1/3 w-1/4', rotate: 'rotate-1' },
    { src: '/images/image6.jpeg', pos: 'top-1/2 right-1/4 w-1/4', rotate: 'rotate-2' }
  ].map((img, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className={`absolute ${img.pos} ${img.rotate} hover:rotate-0 transition-all duration-300 shadow-lg hover:shadow-xl hover:z-10`}
      style={{
        border: '2px solid rgba(212, 175, 55, 0.3)',
        height: '45%'
      }}
    >
      <img
        src={img.src}
        alt={`Moneo Films collage ${index}`}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
    </motion.div>
  ))}
</div>
                

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors border border-white/20 hover:border-gold-accent/40"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors border border-white/20 hover:border-gold-accent/40"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? "bg-gold-accent" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-16"
          >
            {/* Vision */}
            <motion.div variants={itemVariants} className="elegant-card p-12 rounded-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 border border-gold-accent/20 rounded-sm flex items-center justify-center">
                  <Globe className="w-6 h-6 text-gold-accent" />
                </div>
                <h3 className="font-light text-2xl tracking-[0.05em] text-gold-accent font-netflix">
                  REDEFINING BOUNDARIES IN TV PRODUCTION
                </h3>
              </div>

              <p className="font-light text-white/80 leading-relaxed minimal-text font-netflix mb-6">
                Our vision is to become an industry leader in TV production,
                adhering to the highest principles, ethics, and practices. We
                are committed to providing growth, training, and professionalism
                to our team members, while delivering top-tier services to our
                clients.
              </p>

              <p className="font-light text-white/80 leading-relaxed minimal-text font-netflix">
                Through innovative storytelling and unrivaled expertise, we aim
                to captivate global audiences and set new standards of
                excellence.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div variants={itemVariants} className="elegant-card p-12 rounded-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 border border-gold-accent/20 rounded-sm flex items-center justify-center">
                  <Film className="w-6 h-6 text-gold-accent" />
                </div>
                <h3 className="font-light text-2xl tracking-[0.05em] text-gold-accent font-netflix">
                  TRANSFORMING IDEAS INTO CINEMATIC REALITIES
                </h3>
              </div>

              <p className="font-light text-white/80 leading-relaxed minimal-text font-netflix mb-6">
                At Moneo Films, our mission is to bring South African media and
                filming concepts to life. We specialize in television,
                documentaries, theatre, and corporate productions, transforming
                ideas into captivating realities.
              </p>

              <p className="font-light text-white/80 leading-relaxed minimal-text font-netflix">
                By embracing collaboration, creativity, and cultural diversity,
                we create content that resonates with audiences across the
                globe.
              </p>
            </motion.div>
          </motion.div>

          {/* The Artist's Odyssey */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-32 text-center"
          >
            <h2 className="font-light text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight tracking-[0.2em] heading-elegant font-netflix">
              THE ARTIST'S
              <span className="block text-gold-accent text-shadow-gold">
                ODYSSEY
              </span>
            </h2>

            <p className="font-light text-xl text-white/70 max-w-4xl mx-auto leading-relaxed minimal-text font-netflix">
              At Moneo Films, we are more than just a production company – we
              are an all-encompassing entertainment and administration office.
              Our team of experts excels in script development, directing,
              cinematography, performance coaching, dialogue coaching, and more.
              We provide a comprehensive range of services and equipment,
              ensuring excellence in every aspect of production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-light text-4xl md:text-5xl lg:text-6xl mb-6 tracking-[0.1em] heading-elegant font-netflix">
              MEET THE
              <span className="block text-gold-accent text-shadow-gold">TEAM</span>
            </h2>
            <p className="font-light text-lg text-white/70 max-w-3xl mx-auto leading-relaxed minimal-text font-netflix">
              The visionary minds behind our award-winning productions. Each
              member brings unique expertise and passion to every project we
              undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group elegant-card rounded-sm overflow-hidden elegant-hover"
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 film-grain opacity-20" />

                  {/* Social Links Overlay */}
                  <motion.div
                    className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: 20 }}
                    whileHover={{ x: 0 }}
                  >
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-black/50 backdrop-blur-sm border border-white/20 rounded-sm flex items-center justify-center hover:border-gold-accent/40 transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 text-white/60 hover:text-gold-accent" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-black/50 backdrop-blur-sm border border-white/20 rounded-sm flex items-center justify-center hover:border-gold-accent/40 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4 text-white/60 hover:text-gold-accent" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 bg-black/50 backdrop-blur-sm border border-white/20 rounded-sm flex items-center justify-center hover:border-gold-accent/40 transition-colors"
                      aria-label={`Twitter profile of ${member.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-4 h-4 text-white/60 hover:text-gold-accent" />
                    </a>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="font-light text-xl mb-2 tracking-[0.05em] group-hover:text-gold-accent transition-colors duration-300 font-netflix">
                    {member.name}
                  </h3>
                  <p className="font-light text-sm text-gold-accent mb-4 tracking-[0.1em] uppercase font-netflix">
                    {member.role}
                  </p>
                  <p className="font-light text-sm text-white/70 leading-relaxed minimal-text font-netflix">
                    {member.bio}
                  </p>

                  {/* Decorative corner */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold-accent/20 group-hover:border-gold-accent/40 transition-colors duration-300"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default AboutPage;