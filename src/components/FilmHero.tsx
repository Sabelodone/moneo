import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, Pause, Award, Globe, Users } from "lucide-react"

const heroTexts = [
  "INTERNATIONAL FILM PRODUCTION",
  "AWARD-WINNING STORYTELLING",
  "GLOBAL CINEMATIC EXCELLENCE",
]

export default function FilmHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentText, setCurrentText] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBuffering, setIsBuffering] = useState(false)
  const [isHoveringPlay, setIsHoveringPlay] = useState(false)
  const heroRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null) // <- Correct typing here

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Award, value: "00+", label: "International Awards" },
    { icon: Globe, value: "0+", label: "Countries" },
    { icon: Users, value: "00+", label: "Collaborators" },
  ]

  const toggleVideoPlayback = () => {
    if (!videoRef.current || isBuffering) return

    if (videoRef.current.paused) {
      setIsBuffering(true)
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .finally(() => setIsBuffering(false))
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-16 pb-24 sm:pt-20 sm:pb-28 md:pt-24 md:pb-32 flex flex-col items-center justify-center overflow-hidden text-white"
      aria-label="Film Production Hero Section"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/hero-background.mp4"
        muted
        loop
        playsInline
        autoPlay
        poster="/images/hero-poster.jpg"
      />

      {/* Video Loading Indicator */}
      {isBuffering && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50">
          <div className="w-16 h-16 border-4 border-transparent border-t-red-700 rounded-full animate-spin" />
        </div>
      )}

      {/* Overlay */}
      {!isPlaying && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ y }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%), 
                              linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)`,
            }}
          />
          <div className="absolute inset-0 film-grain opacity-20" />

          {/* Animated dots */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-red-700/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 40],
                  y: [0, (Math.random() - 0.5) * 40],
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Main Content Container */}
      <motion.div
        className="relative z-20 flex flex-col justify-between w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 h-full"
        style={{ opacity }}
      >
        {/* Text content when NOT playing */}
        {!isPlaying && (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="font-light text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4 sm:mb-6 md:mb-8 select-none px-2"
                aria-live="polite"
                style={{ 
                  color: "#F87171", 
                  textShadow: "0 0 12px rgba(0,0,0,0.8)",
                  lineHeight: 1.2
                }}
              >
                {heroTexts[currentText]}
              </motion.h2>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              className="max-w-3xl font-light text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4"
              style={{ 
                color: "rgba(255,255,255,0.9)", 
                textShadow: "0 0 8px rgba(0,0,0,0.8)",
                lineHeight: 1.6
              }}
            >
              Based in Johannesburg, South Africa, we create award-winning films that inspire and transcend borders.
              Our work has been recognized at prestigious festivals worldwide for authentic storytelling and cinematic excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12 md:mb-16 w-full px-2"
            >
              {stats.map(({ icon: Icon, value, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    delay: 1.2 + index * 0.15, 
                    duration: 0.8,
                    ease: "backOut"
                  }}
                  className="text-center group px-2 sm:px-0"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative inline-block">
                    <Icon 
                      className="mx-auto mb-1 sm:mb-2 w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-red-700 group-hover:text-white transition-colors" 
                      aria-hidden="true" 
                    />
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-red-700/20 scale-0 group-hover:scale-100 transition-transform"
                      style={{ zIndex: -1 }}
                      layoutId="statIconBg"
                    />
                  </div>
                  <span className="block font-light text-2xl sm:text-3xl md:text-4xl mb-1 group-hover:text-red-700 transition-colors">
                    {value}
                  </span>
                  <p className="uppercase text-xs tracking-widest text-white/70 group-hover:text-white transition-colors">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 w-full px-4"
          style={{ 
            position: "relative", 
            zIndex: 30,
            paddingBottom: '6rem' // Added explicit padding to prevent cutoff
          }}
        >
        {!isPlaying && (
  <Link
    to="/portfolio"  // This links to your PortfolioPage route
    className="relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-12 py-3 sm:py-4 tracking-wide text-xs sm:text-sm font-medium uppercase border-2 border-red-700 rounded-md text-red-700 hover:bg-red-700 hover:text-white transition-all duration-300 group overflow-hidden w-full sm:w-auto text-center min-w-[200px]"
  >
    <span className="relative z-10 flex items-center gap-1 sm:gap-2">
      Explore Our Work
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.span>
    </span>
    <span className="absolute inset-0 bg-red-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-0" />
  </Link>
)}

          <motion.button
            type="button"
            aria-pressed={isPlaying}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            onClick={toggleVideoPlayback}
            onMouseEnter={() => setIsHoveringPlay(true)}
            onMouseLeave={() => setIsHoveringPlay(false)}
            className="relative inline-flex items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 text-white hover:text-white transition-colors font-medium uppercase tracking-wide group w-full sm:w-auto min-w-[200px]"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 flex items-center justify-center border border-white/20 rounded-md group-hover:border-red-700 group-hover:bg-red-700/10 transition-colors relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {isPlaying ? (
                <Pause size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Play size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
              {isHoveringPlay && (
                <motion.span 
                  className="absolute inset-0 bg-red-700/10 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
            <span className="relative text-xs sm:text-sm">
              {isPlaying ? "Pause Reel" : "Watch Our Reel"}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-red-700 group-hover:w-full transition-all duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Playback Controls */}
      {isPlaying && (
        <motion.div 
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
            onClick={toggleVideoPlayback}
            className="flex items-center gap-1 sm:gap-2 text-white/70 hover:text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md bg-black/30 backdrop-blur-sm text-xs sm:text-sm"
          >
            <Pause size={12} className="w-3 h-3" />
            <span>Pause</span>
          </button>
        </motion.div>
      )}
    </section>
  )
}
