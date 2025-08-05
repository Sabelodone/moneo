import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Globe, Users, Film, Clapperboard } from "lucide-react";

// Updated Color Scheme for glass effect
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

// Glass-like text spans with inner glow
const GlassSpan = ({ children, color, style = {} }) => (
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

type TextVariants = {
  hidden: { opacity: number; y: number };
  visible: { opacity: number; y: number; transition: { duration: number; ease: number[] } };
  exit: { opacity: number; y: number; transition: { duration: number } };
};

export default function FilmHero() {
  const [isLoaded, setIsLoaded] = useState(false);
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
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Award, value: "00+", label: "International Awards" },
    { icon: Globe, value: "0+", label: "Countries" },
    { icon: Users, value: "00+", label: "Collaborators" },
  ];

  const textVariants: TextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.6 
      } 
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-16 pb-24 sm:pt-20 sm:pb-28 md:pt-24 md:pb-32 flex flex-col items-center justify-center overflow-hidden"
      aria-label="Film Production Hero Section"
      style={{
        background: `linear-gradient(135deg, rgba(255,248,240,0.95) 0%, rgba(245,230,216,0.97) 100%)`,
        color: COLORS.textDark,
      }}
    >
      {/* Glass Background with light reflections */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ scale, zIndex: 1 }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(120deg, ${COLORS.accentOrange}30 60%, transparent 60%), linear-gradient(-120deg, ${COLORS.accentGold}20 35%, transparent 35%)`,
            position: "absolute",
            inset: 0,
            zIndex: 1,
          }}
        />
        
        {/* Light reflections */}
        <motion.div
          initial={{ x: -100, y: -100, rotate: 45 }}
          animate={{ x: "150%", y: "150%" }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(45deg, transparent 65%, ${COLORS.glassHighlight} 75%, transparent 85%)`,
            zIndex: 2,
          }}
        />
      </motion.div>

      {/* Frosted Glass Overlay */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y }}
      >
        <div
          className="w-full h-full"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: `linear-gradient(to right, rgba(245, 230, 216, 0.6) 0%, rgba(245, 230, 216, 0.4) 50%, rgba(245, 230, 216, 0.6) 100%)`,
            boxShadow: `inset 0 0 20px rgba(255, 255, 255, 0.3)`,
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-between w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 h-full"
        style={{ opacity }}
      >
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12 md:space-y-16">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentText}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="font-light text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide select-none px-2"
              aria-live="polite"
              style={{
                lineHeight: 1.2,
                textShadow: `0 2px 10px rgba(0,0,0,0.1)`
              }}
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div 
              className="font-light text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4 py-6 sm:px-6 sm:py-8"
              style={{
                color: COLORS.textDark,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                background: `rgba(255, 248, 240, 0.4)`,
                borderRadius: "12px",
                boxShadow: `
                  0 4px 20px rgba(204, 85, 0, 0.1),
                  inset 0 0 16px rgba(255, 255, 255, 0.3),
                  inset 0 0 4px rgba(255, 255, 255, 0.4)
                `,
                border: `1px solid ${COLORS.glassBorder}`,
                borderTop: `1px solid ${COLORS.glassHighlight}`,
                borderLeft: `1px solid ${COLORS.glassHighlight}`,
              }}
            >
              Based in <GlassSpan color={COLORS.accentTeal}>Johannesburg, South Africa</GlassSpan>, we create <GlassSpan color={COLORS.accentGold} style={{ fontWeight: 700 }}>award-winning</GlassSpan> films that <GlassSpan color={COLORS.accentPurple}>inspire</GlassSpan> and <GlassSpan color={COLORS.accentRed}>transcend borders</GlassSpan>.
              Our work has been recognized at <GlassSpan color={COLORS.accentOrange}>prestigious festivals</GlassSpan> worldwide for <GlassSpan color={COLORS.accentGold}>authentic storytelling</GlassSpan> and <GlassSpan color={COLORS.accentTeal}>cinematic excellence</GlassSpan>.
            </div>
          </motion.div>

          {/* Glass Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 w-full px-2"
          >
            {stats.map(({ icon: Icon, value, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 1.2 + index * 0.15,
                  duration: 0.8,
                  ease: "backOut",
                  type: "spring",
                  stiffness: 300
                }}
                className="text-center group relative"
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <div 
                  className="relative inline-flex flex-col items-center p-4 sm:p-6 rounded-xl z-10"
                  style={{
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    background: `rgba(255, 248, 240, 0.4)`,
                    boxShadow: `
                      0 4px 12px rgba(204, 85, 0, 0.1),
                      inset 0 0 12px rgba(255, 255, 255, 0.3),
                      inset 0 0 2px rgba(255, 255, 255, 0.4)
                    `,
                    border: `1px solid ${COLORS.glassBorder}`,
                    borderTop: `1px solid ${COLORS.glassHighlight}`,
                    borderLeft: `1px solid ${COLORS.glassHighlight}`,
                  }}
                >
                  <motion.div 
                    className="p-3 rounded-full mb-2"
                    style={{
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",
                      background: `rgba(204, 85, 0, 0.1)`,
                      border: `1px solid ${COLORS.glassBorder}`,
                      boxShadow: `inset 0 0 8px rgba(255, 255, 255, 0.3)`,
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon
                      className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8"
                      style={{ 
                        color: COLORS.accentGold,
                        filter: `drop-shadow(0 1px 2px ${COLORS.accentGold}40)`
                      }}
                    />
                  </motion.div>
                  <span className="block font-light text-2xl sm:text-3xl md:text-4xl mb-1"
                    style={{
                      color: COLORS.accentOrange,
                      textShadow: `0 1px 8px rgba(0,0,0,0.1)`,
                    }}
                  >
                    {value}
                  </span>
                  <p className="uppercase text-xs tracking-widest"
                    style={{
                      color: COLORS.textDark,
                      opacity: 0.9,
                    }}
                  >
                    {label.split(' ').map((word, i) => (
                      <GlassSpan 
                        key={i} 
                        color={[
                          COLORS.accentOrange, 
                          COLORS.accentGold, 
                          COLORS.accentTeal
                        ][i % 3]}
                        style={{ fontSize: '0.8em' }}
                      >
                        {word}{' '}
                      </GlassSpan>
                    ))}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Glass Button with light reflection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 w-full px-4"
          style={{
            position: "relative",
            zIndex: 30,
            paddingBottom: '6rem'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden rounded-lg"
            style={{
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              boxShadow: `
                0 4px 12px rgba(204, 85, 0, 0.2),
                inset 0 0 12px rgba(255, 255, 255, 0.3),
                inset 0 0 2px rgba(255, 255, 255, 0.4)
              `,
              border: `1px solid ${COLORS.glassBorder}`,
              borderTop: `1px solid ${COLORS.glassHighlight}`,
              borderLeft: `1px solid ${COLORS.glassHighlight}`,
            }}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`,
                transform: 'skewX(-20deg)',
              }}
            />
            <Link
              to="/portfolio"
              className="relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-12 py-3 sm:py-4 tracking-wide text-xs sm:text-sm font-medium uppercase rounded-lg transition-all duration-300 group overflow-hidden w-full sm:w-auto text-center min-w-[200px]"
              style={{
                color: COLORS.accentOrange,
                background: `rgba(255, 248, 240, 0.3)`,
              }}
            >
              <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                <GlassSpan color={COLORS.accentGold}>Explore</GlassSpan>{' '}
                <GlassSpan color={COLORS.accentOrange}>Our</GlassSpan>{' '}
                <GlassSpan color={COLORS.accentRed}>Work</GlassSpan>
                <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}