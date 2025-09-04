import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight,  X } from "lucide-react";

/* ---------------------------
   Types & Data
   --------------------------- */
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
    bio: "Visionary leader with over 28 years in film production. Ferry's passion for storytelling and commitment to excellence drives Moneo Films' creative vision.",
    image: "/images/IWII9j7j_400x400.jpg",
    social: { linkedin: "#", email: "ferry@moneofilms.co.za", twitter: "#" },
    works: ["The River (Director)", "How to Ruin Christmas (Director)", "SAFTA Winner for Directing", "Fatal Seduction (Creative Direction)", "Scandal (Production Team)"],
  },
  {
    id: 2,
    name: "Neo R Paulus",
    role: "Co-Founder & Executive Producer",
    bio: "Strategic mastermind behind Moneo Films' operations. Neo brings extensive experience in production management and business development.",
    image: "/images/516252548_18425953228097209_2757025492135577868_n.jpg",
    social: { linkedin: "#", email: "neo@moneofilms.co.za", twitter: "#" },
    works: ["Scandal (Executive Producer)", "Saints & Sinners (Producer)", "S'JOLA SONKE (Producer)", "Society S2 & 3 (Producer)"],
  },
];

const carouselImages = [
  { id: 1, src: "/images/image0%20(3).jpeg", alt: "Image 0 (3)" },
  { id: 2, src: "/images/image1%20(1).jpeg", alt: "Image 1 (1)" },
  { id: 3, src: "/images/image1.jpeg", alt: "Image 1" },
  { id: 4, src: "/images/image10.jpeg", alt: "Image 10" },
  { id: 5, src: "/images/image11.jpeg", alt: "Image 11" },
  { id: 6, src: "/images/image12.jpeg", alt: "Image 12" },
  { id: 7, src: "/images/image13.jpeg", alt: "Image 13" },
  { id: 8, src: "/images/image14.jpeg", alt: "Image 14" },
  { id: 9, src: "/images/image15.jpeg", alt: "Image 15" },
  { id: 10, src: "/images/image16.jpeg", alt: "Image 16" },
  { id: 11, src: "/images/image17.jpeg", alt: "Image 17" },
  { id: 12, src: "/images/image18.jpeg", alt: "Image 18" },
  { id: 13, src: "/images/image19.jpeg", alt: "Image 19" },
  { id: 14, src: "/images/image20.jpeg", alt: "Image 20" },
  { id: 15, src: "/images/image21.jpeg", alt: "Image 21" },
  { id: 16, src: "/images/image22.jpeg", alt: "Image 22" },
  { id: 17, src: "/images/image23.jpeg", alt: "Image 23" },
  { id: 18, src: "/images/image24.jpeg", alt: "Image 24" },
  { id: 19, src: "/images/image3.jpeg", alt: "Image 3" },
  { id: 20, src: "/images/image4.jpeg", alt: "Image 4" },
  { id: 21, src: "/images/image5.jpeg", alt: "Image 5" },
  { id: 22, src: "/images/image6.jpeg", alt: "Image 6" },
  { id: 23, src: "/images/image7.jpeg", alt: "Image 7" },
  { id: 24, src: "/images/image8.jpeg", alt: "Image 8" },
  { id: 25, src: "/images/image9.jpeg", alt: "Image 9" }
];

const collageImages = [
  { src: "/images/WhatsApp Image 2025-09-02 at 17.15.01_4b737af5.jpg", caption: "Production #1" },
  { src: "/images/WhatsApp Image 2025-09-02 at 16.56.35_23246850.jpg", caption: "Production #2" },
  { src: "/images/image9.jpeg", caption: "Production #3" },
  { src: "/images/WhatsApp Image 2025-09-02 at 16.11.22_66be5478.jpg", caption: "Production #4" },
  { src: "/images/image5.jpeg", caption: "Production #5" },
  { src: "/images/image6.jpeg", caption: "Production #6" },
  { src: "/images/image7.jpeg", caption: "Production #7" },
  { src: "/images/image8.jpeg", caption: "Production #8" },
  { src: "/images/WhatsApp Image 2025-09-02 at 15.54.25_1e8b5810.jpg", caption: "Production #9" },
];

const colors = {
  bgLight: "#FFF8F0",
  bgCream: "#F5E6D8",
  textDark: "#2A1A12",
  accentOrange: "#CC5500",
  accentGold: "#D4AF37",
  cardShadow: "0 10px 30px rgba(204, 85, 0, 0.10)",
  cardBorder: "1px solid rgba(204,85,0,0.12)",
};

/* ---------------------------
   Main Component
   --------------------------- */
const AboutPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openCollageIdx, setOpenCollageIdx] = useState<number | null>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });

  const [showStoryModal, setShowStoryModal] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div style={{ background: colors.bgCream, minHeight: "100vh" }} className="pt-20">
      {/* ------------------ HERO & COLLAGE ------------------ */}
      <section className="relative py-32 overflow-hidden" style={{ background: colors.bgCream }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32" style={{ background: `${colors.accentGold}1A`, borderRadius: "9999px", filter: "blur(40px)" }} />
          <div className="absolute bottom-20 right-10 w-48 h-48" style={{ background: `${colors.bgLight}0D`, borderRadius: "9999px", filter: "blur(48px)" }} />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-center mb-16">
            <h1 style={{ color: colors.textDark }} className="font-light text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight tracking-[0.1em] heading-elegant font-netflix">
              ABOUT
              <span className="block" style={{ color: colors.accentOrange, textShadow: `0 2px 16px ${colors.accentGold}` }}>
                MONEO FILMS
              </span>
            </h1>
            <p style={{ color: colors.textDark, opacity: 0.7 }} className="font-light text-xl max-w-4xl mx-auto leading-relaxed minimal-text font-netflix">
              Trailblazing production company owned entirely by black women, redefining storytelling since 2018
            </p>

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
                      transition: { duration: 0.6, delay: idx * 0.1 },
                    }}
                    viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                    className={`relative overflow-hidden rounded-lg aspect-square transition-all duration-300 cursor-pointer ${idx % 4 === 0 ? "md:mt-6" : idx % 5 === 0 ? "md:-mt-6" : ""}`}
                    style={{ boxShadow: colors.cardShadow, border: colors.cardBorder, transformStyle: "preserve-3d", background: colors.bgLight }}
                    onClick={() => setOpenCollageIdx(idx)}
                  >
                    <motion.img src={img.src} alt={img.caption} className="w-full h-full object-cover" loading="lazy" initial={{ scale: 1 }} whileHover={{ scale: 1.15, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(42,26,18,0.05), rgba(42,26,18,0.25), rgba(42,26,18,0.5))" }} />
                    <div className="absolute inset-0 border border-white/10 hover:border-[#CC5500]/40 transition-colors duration-300" />
                    <div className="absolute inset-0 pointer-events-none opacity-10 hover:opacity-5 transition-opacity duration-300" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.6\'/%3E%3C/svg%3E")' }} />
                    <motion.div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r" style={{ borderColor: `${colors.accentGold}99` }} whileHover={{ scale: 1.5, borderColor: colors.accentGold, transition: { duration: 0.3 } }} />
                    <motion.div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: "linear-gradient(to top, rgba(42,26,18,0.80), rgba(42,26,18,0.50), transparent)" }} initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      <p className="text-xs" style={{ color: `${colors.accentOrange}CC`, fontWeight: 400, letterSpacing: "0.05em" }}>{img.caption}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* connector lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <motion.path d="M15% 30% Q 30% 15%, 50% 25% T 85% 35%" stroke="rgba(204, 85, 0, 0.12)" strokeWidth="1.5" fill="none" strokeDasharray="6,4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
                  <motion.path d="M20% 70% Q 40% 60%, 60% 70% T 80% 60%" stroke="rgaua(204, 85, 0, 0.12)" strokeWidth="1.5" fill="none" strokeDasharray="4,6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.8 }} />
                </svg>
              </div>

              {/* Collage Modal */}
              <AnimatePresence>
                {openCollageIdx !== null && (
                  <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpenCollageIdx(null)}>
                    <motion.div className="bg-white rounded-lg p-6 shadow-xl relative" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()} style={{ maxWidth: "90vw", maxHeight: "90vh" }}>
                      <button className="absolute top-4 right-4 rounded-full p-2 transition-colors z-10 bg-[#CC5500] text-white" onClick={() => setOpenCollageIdx(null)} aria-label="Close Collage Modal">
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

                      {/* ------------------ Company Story + Carousel ------------------ */}
<section ref={storyRef} className="py-28 relative overflow-hidden" style={{ background: colors.bgLight }}>
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-32 h-32 opacity-5" style={{ 
      background: colors.accentGold, 
      borderRadius: "50%", 
      filter: "blur(40px)",
      animation: "pulse 6s infinite" 
    }} />
    <div className="absolute bottom-20 right-10 w-48 h-48 opacity-5" style={{ 
      background: colors.accentOrange, 
      borderRadius: "50%", 
      filter: "blur(48px)",
      animation: "pulse 6s infinite 3s" 
    }} />
  </div>

  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    <motion.div 
      initial="hidden" 
      animate={isStoryInView ? "visible" : "hidden"} 
      className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
    >
      {/* Story Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        <div className="absolute -left-8 top-0 w-1 h-16 rounded-full" style={{ background: colors.accentOrange }} />
        
        <h2 style={{ color: colors.textDark }} className="font-light text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight tracking-[0.1em] heading-elegant font-netflix">
          OUR
          <span className="block mt-3" style={{ color: colors.accentOrange, textShadow: `0 4px 24px ${colors.accentGold}40` }}>
            STORY
          </span>
        </h2>
        
        <div className="space-y-7 font-netflix text-lg" style={{ color: colors.textDark, opacity: 0.85, lineHeight: "1.8" }}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Founded in 2018, Moneo Films is a trailblazing production company owned entirely by black women. We specialize in producing remarkable films, documentaries, series, and other television products.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Led by our visionary co-founders, Ferry Jele and Neo R Paulus, we push boundaries and redefine storytelling.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
          >
            At Moneo Films, we are more than just a production company - we are an all-encompassing entertainment and administration office. Our team of experts excels in producing, technical producing, script development, directing, cinematography, performance coaching, dialogue coaching, and more.
          </motion.p>
        </div>

        {/* Stats Cards */}
        <motion.div 
          className="mt-14 grid grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center p-8 rounded-xl transition-all duration-300"
            style={{ 
              background: colors.bgCream, 
              boxShadow: `0 15px 35px ${colors.accentOrange}15, 0 5px 15px ${colors.textDark}08`,
              border: `2px solid ${colors.accentOrange}20`
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="font-light text-4xl mb-3 font-netflix" style={{ color: colors.accentOrange }}>2018</div>
            <div className="font-light text-sm uppercase tracking-[0.2em] font-netflix" style={{ color: colors.textDark, opacity: 0.7 }}>Founded</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-8 rounded-xl transition-all duration-300"
            style={{ 
              background: colors.bgCream, 
              boxShadow: `0 15px 35px ${colors.accentOrange}15, 0 5px 15px ${colors.textDark}08`,
              border: `2px solid ${colors.accentGold}20`
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="font-light text-4xl mb-3 font-netflix" style={{ color: colors.accentGold }}>100%</div>
            <p className="font-light text-sm uppercase tracking-[0.2em] font-netflix" style={{ color: colors.textDark, opacity: 0.7 }}>Black Women Owned</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Carousel */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="aspect-[4/3] relative rounded-2xl overflow-hidden" style={{ 
          background: colors.bgLight, 
          boxShadow: `0 25px 50px ${colors.textDark}20, 0 10px 30px ${colors.accentOrange}15`,
          border: `2px solid ${colors.accentOrange}15`
        }}>
          <div className="relative w-full h-full">
            {carouselImages.map((image, index) => (
              <motion.div 
                key={image.id} 
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
              >
                <img 
                  src={image.src || "/placeholder.svg"} 
                  alt={image.alt} 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1A12] via-transparent to-transparent opacity-80" />
                
               
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <motion.button 
            onClick={prevSlide} 
            aria-label="Previous slide" 
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center transition-all duration-300"
            style={{ 
              background: `${colors.bgCream}EE`, 
              borderRadius: "50%", 
              boxShadow: `0 8px 25px ${colors.textDark}30`,
              border: `2px solid ${colors.accentOrange}30`
            }}
            whileHover={{ scale: 1.1, backgroundColor: colors.accentOrange }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-7 h-7 transition-colors" style={{ color: colors.accentOrange }} />
          </motion.button>
          
          <motion.button 
            onClick={nextSlide} 
            aria-label="Next slide" 
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center transition-all duration-300"
            style={{ 
              background: `${colors.bgCream}EE`, 
              borderRadius: "50%", 
              boxShadow: `0 8px 25px ${colors.textDark}30`,
              border: `2px solid ${colors.accentOrange}30`
            }}
            whileHover={{ scale: 1.1, backgroundColor: colors.accentOrange }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-7 h-7 transition-colors" style={{ color: colors.accentOrange }} />
          </motion.button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {carouselImages.map((_, index) => (
              <motion.button 
                key={index} 
                onClick={() => goToSlide(index)} 
                aria-label={`Go to slide ${index + 1}`} 
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{ 
                  background: index === currentSlide ? colors.accentOrange : `${colors.textDark}40`,
                  boxShadow: index === currentSlide ? `0 0 10px ${colors.accentOrange}80` : 'none'
                }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute -z-10 -right-6 -bottom-6 w-32 h-32 rounded-full" style={{ 
          background: colors.accentGold, 
          opacity: 0.1,
          filter: 'blur(20px)'
        }} />
      </motion.div>
    </motion.div>

    {/* Open Story Button */}
    <motion.div 
      className="absolute top-8 right-8 z-30"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.button 
        className="px-6 py-3 text-white rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2 group"
        onClick={() => setShowStoryModal(true)}
        style={{
          background: `linear-gradient(135deg, ${colors.accentOrange}, ${colors.accentGold})`,
          boxShadow: `0 8px 25px ${colors.accentOrange}40`
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-medium">Full Story</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  </div>
</section>

      {/* Story Modal (simple, same content) */}
      <AnimatePresence>
        {showStoryModal && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowStoryModal(false)}>
            <motion.div className="bg-white rounded-lg p-8 shadow-xl relative w-full max-w-2xl" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-4 right-4 rounded-full p-2 transition-colors z-10 bg-[#CC5500] text-white" onClick={() => setShowStoryModal(false)} aria-label="Close Story Modal">
                <X className="w-5 h-5" />
              </button>
              <div>
                <h2 style={{ color: colors.textDark }} className="font-light text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight tracking-[0.1em] heading-elegant font-netflix">
                  OUR
                  <span className="block" style={{ color: colors.accentOrange, textShadow: `0 2px 16px ${colors.accentGold}` }}>STORY</span>
                </h2>
                <div className="space-y-6 font-netflix text-lg" style={{ color: colors.textDark, opacity: 0.8, lineHeight: "1.7" }}>
                 <p>
        <strong>Our Story</strong>
      </p>

      <p>
        Founded in 2018, <strong>Moneo Films</strong> is a trailblazing, Black-women-owned production company rooted in purpose, passion, and creative excellence. Co-founded by visionary industry leaders <strong>Ferry Jele</strong> and <strong>Neo R Paulus</strong>, we are on a mission to push boundaries and redefine storytelling across Africa and beyond.
      </p>

      <p>
        We specialize in producing high-impact films, documentaries, series, and a wide range of television content — but we are more than just a production company. Moneo Films is a fully integrated entertainment and administration hub, offering end-to-end solutions that bring stories to life with precision and heart.
      </p>

      <p>
        Our team consists of skilled professionals who bring their expertise to every stage of production, including:
      </p>

      <p>• Producing & Technical Producing</p>
      <p>• Script Development</p>
      <p>• Directing</p>
      <p>• Cinematography</p>
      <p>• Performance & Dialogue Coaching</p>
      <p>• Technical Support</p>
      <p>• Editing</p>
      <p>• Web & App Development</p>

      <p>
        We also believe deeply in uplifting others through training and mentorship. Over the years, we have provided free training and development opportunities to aspiring creatives — not for recognition or financial gain, but to empower the next generation of storytellers and ensure their success in the industry.
      </p>

      <p>
        At Moneo Films, we are building more than productions — we are building a legacy. One grounded in excellence, collaboration, and transformation through storytelling.
      </p>

      <p>
        We pride ourselves on delivering excellence in every frame, every performance, and every experience. At Moneo Films, storytelling is not just what we do — it’s <em>who we are</em>.
      </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------ MEET THE TEAM ------------------ */}
      <section className="py-20 relative overflow-hidden" style={{ background: colors.bgLight }}>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            viewport={{ once: true, margin: "-50px" }} 
            className="text-center mb-16"
          >
            <div className="inline-flex flex-col items-center mb-6">
              <div className="w-16 h-1 mb-4 rounded-full" style={{ background: colors.accentOrange }} />
              <h2 className="font-light text-3xl md:text-4xl lg:text-5xl mb-4 tracking-[0.1em] heading-elegant font-netflix" style={{ color: colors.textDark }}>
                MEET THE
                <span className="block mt-2" style={{ color: colors.accentOrange, textShadow: `0 2px 20px ${colors.accentGold}40` }}>
                  TEAM
                </span>
              </h2>
              <div className="w-16 h-1 mt-4 rounded-full" style={{ background: colors.accentOrange }} />
            </div>
            <p className="font-light text-lg max-w-2xl mx-auto leading-relaxed minimal-text font-netflix px-4" style={{ color: colors.textDark, opacity: 0.8 }}>
              The visionary minds behind our award-winning productions. Each member brings unique expertise and passion to every project.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 lg:gap-16 max-w-6xl mx-auto px-4">
            {teamMembers.slice(0, 2).map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex-1 max-w-md"
              >
                <Link 
                  to={member.id === 1 ? "/team/ferry-jele" : "/team/neo-paulus"}
                  className="group rounded-xl overflow-hidden cursor-pointer border-none p-0 bg-transparent w-full h-full flex flex-col"
                  style={{ 
                    boxShadow: `0 20px 40px ${colors.accentOrange}15, 0 5px 15px ${colors.textDark}08`,
                    border: colors.cardBorder,
                    background: colors.bgCream,
                  }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <motion.img 
                      src={member.image || "/placeholder.svg"} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      initial={{ scale: 1.1 }}
                      whileHover={{ scale: 1.15, transition: { duration: 0.8, ease: "easeOut" } }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A1A12] via-transparent to-transparent opacity-70" />
                    <div className="absolute inset-0 border-b border-white/10" />
                    
                    {/* Hover Overlay */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ backgroundColor: "rgba(204, 85, 0, 0)" }}
                      whileHover={{ backgroundColor: "rgba(204, 85, 0, 0.9)", transition: { duration: 0.3 } }}
                    >
                      <motion.span 
                        className="text-white font-medium text-sm opacity-0"
                        whileHover={{ opacity: 1, transition: { delay: 0.1 } }}
                      >
                        View Profile
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="font-light text-xl mb-2 tracking-[0.05em] font-netflix" style={{ color: colors.textDark }}>
                        {member.name}
                      </h3>
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-3" style={{ 
                        background: `${colors.accentOrange}15`, 
                        color: colors.accentOrange,
                        border: `1px solid ${colors.accentOrange}30`
                      }}>
                        {member.role}
                      </div>
                    </div>
                    
                    <p className="font-light text-sm leading-relaxed minimal-text font-netflix flex-1" style={{ 
                      color: colors.textDark, 
                      opacity: 0.8,
                      lineHeight: '1.6'
                    }}>
                      {member.bio}
                    </p>

                    {/* Social Indicators */}
                    <motion.div 
                      className="flex justify-center gap-4 mt-6 pt-4 border-t border-[#2A1A12]10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accentOrange }} />
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accentGold }} />
                      <div className="w-2 h-2 rounded-full" style={{ background: colors.accentOrange }} />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-24 h-24 opacity-10" style={{ 
            background: colors.accentGold, 
            borderRadius: '50%', 
            filter: 'blur(20px)',
            animation: 'pulse 4s infinite'
          }} />
          <div className="absolute bottom-1/4 right-10 w-20 h-20 opacity-10" style={{ 
            background: colors.accentOrange, 
            borderRadius: '50%', 
            filter: 'blur(15px)',
            animation: 'pulse 4s infinite 2s'
          }} />
        </div>
      </section>

      {/* Reuse of collage full-image modal for gallery images */}
      <AnimatePresence>
        {openCollageIdx !== null && (
          <motion.div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpenCollageIdx(null)}>
            <motion.div className="bg-white rounded-lg p-6 shadow-xl relative" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()} style={{ maxWidth: "90vw", maxHeight: "90vh" }}>
              <button className="absolute top-4 right-4 rounded-full p-2 z-10 bg-[#CC5500] text-white" onClick={() => setOpenCollageIdx(null)} aria-label="Close Collage Modal">
                <X className="w-5 h-5" />
              </button>
              <img src={collageImages[openCollageIdx]?.src} alt="Production still" className="w-[32rem] max-w-full h-auto object-cover rounded-lg mb-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutPage;