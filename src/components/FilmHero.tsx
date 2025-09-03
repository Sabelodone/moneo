import { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion";


const COLORS = {
  bgLight: "rgba(255, 248, 240, 0.9)",
  bgCream: "rgba(245, 230, 216, 0.7)",
  textDark: "#2A1A12",
  accentOrange: "rgba(204, 85, 0, 0.8)",
  accentGold: "rgba(212, 175, 55, 0.8)",
  accentRed: "rgba(224, 92, 0, 0.8)",
  accentTeal: "rgba(0, 128, 128, 0.8)",
  accentPurple: "rgba(106, 13, 173, 0.8)",
  glassBorder: "rgba(255, 255, 255, 0.3)",
  glassHighlight: "rgba(255, 255, 255, 0.4)",
};

const heroTexts = [
  "INTERNATIONAL FILM PRODUCTION",
  "AWARD-WINNING STORYTELLING",
  "GLOBAL CINEMATIC EXCELLENCE",
];

interface GlassSpanProps {
  children: React.ReactNode;
  color: string;
  style?: React.CSSProperties;
}

const GlassSpan = ({ children, color, style = {} }: GlassSpanProps) => (
  <span style={{ 
    color, 
    fontWeight: 600,
    textShadow: `0 1px 2px rgba(0,0,0,0.2), 0 0 8px ${color}40`,
    padding: '0 2px',
    background: `linear-gradient(to right, ${color}40, transparent)`,
    borderRadius: '2px',
    ...style 
  }}>
    {children}
  </span>
);

// ✅ FIXED TYPE HERE
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.6 }
  }
};

export default function FilmHero() {
  const [currentText, setCurrentText] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  

  return (
    <section ref={heroRef} className="relative min-h-screen pt-16 pb-24 flex flex-col items-center justify-center overflow-hidden"
      aria-label="Film Production Hero Section"
      style={{
        background: `linear-gradient(135deg, rgba(255,248,240,0.95) 0%, rgba(245,230,216,0.97) 100%)`,
        color: COLORS.textDark,
      }}
    >
      {/* GLASS BACKGROUND */}
      <motion.div className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{ scale, zIndex: 1 }}>
        <div style={{
          width: "100%", height: "100%",
          background: `linear-gradient(120deg, ${COLORS.accentOrange}30 60%, transparent 60%), linear-gradient(-120deg, ${COLORS.accentGold}20 35%, transparent 35%)`,
          position: "absolute", inset: 0, zIndex: 1,
        }} />
        <motion.div
          initial={{ x: -100, y: -100, rotate: 45 }}
          animate={{ x: "150%", y: "150%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: `linear-gradient(45deg, transparent 65%, ${COLORS.glassHighlight} 75%, transparent 85%)`,
            zIndex: 2,
          }}
        />
      </motion.div>

      {/* FROSTED GLASS OVERLAY */}
      <motion.div className="absolute inset-0 z-10" style={{ y }}>
        <div className="w-full h-full" style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: `linear-gradient(to right, rgba(245, 230, 216, 0.6) 0%, rgba(245, 230, 216, 0.4) 50%, rgba(245, 230, 216, 0.6) 100%)`,
          boxShadow: `inset 0 0 20px rgba(255, 255, 255, 0.3)`,
        }} />
      </motion.div>

      {/* MAIN CONTENT */}
      <motion.div className="relative z-20 flex flex-col justify-between w-full max-w-7xl px-4 py-12" style={{ opacity }}>
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12">
          {/* ✅ TEXT ANIMATION */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentText}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="font-light text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide select-none px-2"
              aria-live="polite"
              style={{ lineHeight: 1.2, textShadow: `0 2px 10px rgba(0,0,0,0.1)` }}
            >
              {currentText === 0 && (
                <>
                  <GlassSpan color={COLORS.accentOrange}>INTERNATIONAL</GlassSpan>{' '}
                  <GlassSpan color={COLORS.accentGold} style={{ fontStyle: 'italic' }}>FILM</GlassSpan>{' '}
                  <GlassSpan color={COLORS.accentRed}>PRODUCTION</GlassSpan>
                </>
              )}
              {currentText === 1 && (
                <>
                  <GlassSpan color={COLORS.accentGold}>AWARD-WINNING</GlassSpan>{' '}
                  <GlassSpan color={COLORS.accentPurple} style={{ textDecoration: 'underline' }}>STORYTELLING</GlassSpan>
                </>
              )}
              {currentText === 2 && (
                <>
                  <GlassSpan color={COLORS.accentTeal}>GLOBAL</GlassSpan>{' '}
                  <GlassSpan color={COLORS.accentOrange}>CINEMATIC</GlassSpan>{' '}
                  <GlassSpan color={COLORS.accentGold}>EXCELLENCE</GlassSpan>
                </>
              )}
            </motion.h2>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
