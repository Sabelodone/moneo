"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Filter,
  X,
  Search,
  Grid,
  List,
  Award,
  Calendar,
  Building2,
  Film,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  company: string;
  category: string;
  image: string;
  description: string;
  year?: string;
  awards?: string[];
  youtubeLink?: string;
}

// --- Enhanced Color Scheme ---
const burntOrange = "#CC5500";
const deepBlue = "#13244D"; // sampled from the image
const blueAccent = "#2176FF";

// ---- projects array and categories go here, unchanged for brevity ----
// Make sure to paste your full projects array here

const projects: Project[] = [
{
    id: 1,
    title: "SCANDAL",
    company: "OCHRE MOVING PICTURES",
    category: "TV Series",
    image: "/images/image9.jpeg",
    description:
      "A gripping drama series that captivated audiences with its compelling storylines and exceptional performances.",
    year: "2023",
    awards: ["Best Drama Series", "Outstanding Performance"],
    youtubeLink: "https://www.youtube.com/embed/ES5ESo6l9VQ?autoplay=1",
  },
  {
    id: 7,
    title: "S'JOLA SONKE",
    company: "BRIGHT FIRE",
    category: "TV Series",
    image: "/images/Screenshot 2025-07-29 150625.png",
    description: "A community-focused series highlighting social issues and human connections.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/fkh2--Y_SGg?autoplay=1",
  },
  {
    id: 30,
    title: "SAINTS & SINNERS S1",
    company: "PENGUIN FILMS",
    category: "TV Series",
    image: "/images/Screenshot 2025-07-29 144508.png",
    description: "A drama series exploring moral complexities and human nature.",
    year: "2022",
    youtubeLink: "https://www.youtube.com/embed/ZsDbiAb58TY?autoplay=1",
  },
  {
    id: 35,
    title: "SOCIETY S2 & 3",
    company: "PUO-PHA",
    category: "TV Series",
    image: "/images/0106314_300_192 (1).jpeg",
    description: "Multiple seasons of this social commentary series exploring contemporary issues.",
    year: "2022-2023",
    youtubeLink: "https://www.youtube.com/embed/p_MFj09InpM?autoplay=1",
  },
  // Rest of the projects...
  {
    id: 2,
    title: "RETHINK RAND",
    company: "COAL STOVE PICTURES",
    category: "Documentary",
    image: "/placeholder.svg?height=400&width=600&text=RETHINK+RAND",
    description: "An insightful documentary exploring economic perspectives and financial literacy in South Africa.",
    year: "2022",
    awards: ["Best Documentary"],
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1",
  },
  
  {
    id: 2,
    title: "RETHINK RAND",
    company: "COAL STOVE PICTURES",
    category: "Documentary",
    image: "/placeholder.svg?height=400&width=600&text=RETHINK+RAND",
    description: "An insightful documentary exploring economic perspectives and financial literacy in South Africa.",
    year: "2022",
    awards: ["Best Documentary"],
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1", // Placeholder
  },
 
  {
    id: 4,
    title: "PITCH BLACK",
    company: "FASHIONABLE",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=PITCH+BLACK",
    description: "A thrilling series that explores the darker side of human nature and moral complexities.",
    year: "2022",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Placeholder
  },
  {
    id: 5,
    title: "7 COLOURS",
    company: "SEMAMO",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=7+COLOURS",
    description: "A vibrant series celebrating diversity and the rich tapestry of South African culture.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1", // Placeholder
  },
  {
    id: 6,
    title: "ADAM HARRY 21 MEN",
    company: "MOVING DREAMS STUDIOS",
    category: "Feature Film",
    image: "/placeholder.svg?height=400&width=600&text=ADAM+HARRY+21+MEN",
    description: "An action-packed film featuring compelling characters and intense dramatic sequences.",
    year: "2022",
    youtubeLink: "https://www.youtube.com/embed/kf_dK86m84E?autoplay=1", // Placeholder
  },
 
  {
    id: 8,
    title: "STANDBANK",
    company: "MONEO FILMS",
    category: "Commercial",
    image: "/placeholder.svg?height=400&width=600&text=STANDBANK",
    description: "A professional commercial production showcasing financial services and community impact.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1", // Placeholder
  },
  {
    id: 9,
    title: "GIYANI LAND OF BLOOD S2",
    company: "TSHEDZA PICTURES",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=GIYANI+S2",
    description: "The second season of this gripping drama series set in rural South Africa.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/kf_dK86m84E?autoplay=1", // Placeholder
  },
  {
    id: 10,
    title: "LINGASHINI",
    company: "STAINED GLASS TV",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=LINGASHINI",
    description: "A captivating series exploring traditional values and modern challenges.",
    year: "2022",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Placeholder
  },
  {
    id: 11,
    title: "MZALI'WAMI S1",
    company: "BRAINS AT WORK",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=MZALI'WAMI",
    description: "A heartwarming series about family, tradition, and personal growth.",
    year: "2022",
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1", // Placeholder
  },
  {
    id: 12,
    title: "THE RIVER S1, 2 & 3",
    company: "TSHEDZA PICTURES",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=THE+RIVER",
    description: "A multi-season drama series that became a cornerstone of South African television.",
    year: "2021-2023",
    awards: ["Best Drama Series", "People's Choice Award"],
    youtubeLink: "https://www.youtube.com/embed/kf_dK86m84E?autoplay=1", // Placeholder
  },
  {
    id: 13,
    title: "GOMORA S1",
    company: "SERITI",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=GOMORA",
    description: "A powerful drama series exploring life in South African townships.",
    year: "2022",
    awards: ["Outstanding Drama Series"],
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Placeholder
  },
  {
    id: 14,
    title: "ISIDINGO",
    company: "ENDEMOL SOUTH AFRICA",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=ISIDINGO",
    description: "A long-running soap opera that captured the hearts of South African audiences.",
    year: "2020-2023",
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1", // Placeholder
  },
  {
    id: 15,
    title: "GIYANE (LAND OF BLOOD) S1",
    company: "TSHEDZA PICTURES",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=GIYANE+S1",
    description: "The first season of this compelling drama series set in rural Limpopo.",
    year: "2022",
    youtubeLink: "https://www.youtube.com/embed/kf_dK86m84E?autoplay=1", // Placeholder
  },
  {
    id: 16,
    title: "AMALEGENDS",
    company: "DOTI PRODUCTION",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=AMALEGENDS",
    description: "A series celebrating legendary figures and their impact on South African culture.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Placeholder
  },
  {
    id: 17,
    title: "DISCOVERY COMMERCIALS",
    company: "MQ FILMS",
    category: "Commercial",
    image: "/placeholder.svg?height=400&width=600&text=DISCOVERY",
    description: "Professional commercial productions for the Discovery Channel network.",
    year: "2022-2023",
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1", // Placeholder
  },
  {
    id: 18,
    title: "KHETHA/ MINISTER OF EDUCATION",
    company: "MONEO FILMS",
    category: "Educational",
    image: "/placeholder.svg?height=400&width=600&text=KHETHA",
    description: "An educational production focusing on important social and political themes.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/kf_dK86m84E?autoplay=1", // Placeholder
  },
  {
    id: 19,
    title: "THE LITE SHOW S1",
    company: "BURNT ONION",
    category: "Talk Show",
    image: "/placeholder.svg?height=400&width=600&text=THE+LITE+SHOW",
    description: "A light-hearted talk show featuring celebrity interviews and entertainment.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Placeholder
  },
  {
    id: 20,
    title: "THE F WORD",
    company: "SOUL CITY INSTITUTE",
    category: "Talk Show",
    image: "/placeholder.svg?height=400&width=600&text=THE+F+WORD",
    description: "A thought-provoking talk show addressing contemporary social issues.",
    year: "2022",
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1", // Placeholder
  },
  {
    id: 21,
    title: "LEBO MPHAMBILI MEDIA",
    company: "BRIGHT FIRE PICTURES",
    category: "Media Production",
    image: "/placeholder.svg?height=400&width=600&text=LEBO+MPHAMBILI",
    description: "Professional media production services and content creation.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/kf_dK86m84E?autoplay=1", // Placeholder
  },
  {
    id: 22,
    title: "MIRIAM MAKEBA FOUNDATION",
    company: "MIRIAM MAKEBA",
    category: "Documentary",
    image: "/placeholder.svg?height=400&width=600&text=MIRIAM+MAKEBA",
    description: "A documentary celebrating the life and legacy of the legendary Miriam Makeba.",
    year: "2022",
    awards: ["Best Biographical Documentary"],
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Placeholder
  },
  {
    id: 23,
    title: "MY SEXUALITY MY PRIDE",
    company: "MONEO FILMS",
    category: "Documentary",
    image: "/placeholder.svg?height=400&width=600&text=MY+SEXUALITY",
    description: "A powerful documentary exploring LGBTQ+ experiences and pride in South Africa.",
    year: "2023",
    awards: ["Social Impact Award"],
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1", // Placeholder
  },
  {
    id: 24,
    title: "NOT ON MY WATCH DARLINGTON",
    company: "OBONYE MEDIA",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=NOT+ON+MY+WATCH",
    description: "A drama series featuring compelling characters and social commentary.",
    year: "2022",
    youtubeLink: "https://www.youtube.com/embed/kf_dK86m84E?autoplay=1", // Placeholder
  },
  {
    id: 25,
    title: "MICHAELS",
    company: "OBONYE MEDIA",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=MICHAELS",
    description: "A character-driven series exploring family dynamics and personal relationships.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Placeholder
  },
  {
    id: 26,
    title: "RHYTHM CITY",
    company: "QUIZZICAL PICTURES",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=RHYTHM+CITY",
    description: "A popular soap opera set in the vibrant world of South African music industry.",
    year: "2020-2023",
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1", // Placeholder
  },
  {
    id: 27,
    title: "HOW TO RUIN CHRISTMAS S3",
    company: "BURNT ONION",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=HOW+TO+RUIN+CHRISTMAS",
    description: "The third season of this beloved comedy series about family holiday chaos.",
    year: "2023",
    awards: ["Best Comedy Series"],
    youtubeLink: "https://www.youtube.com/embed/kf_dK86m84E?autoplay=1", // Placeholder
  },
  {
    id: 28,
    title: "ENTANGLEMENT",
    company: "BURNT ONION",
    category: "Feature Film",
    image: "/placeholder.svg?height=400&width=600&text=ENTANGLEMENT",
    description: "A complex drama exploring relationships and emotional connections.",
    year: "2022",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Placeholder
  },
  {
    id: 29,
    title: "LITHAPO",
    company: "QUIZZICAL PICTURES",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=LITHAPO",
    description: "A compelling series that delves into contemporary South African life.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1", // Placeholder
  },

  {
    id: 31,
    title: "THOLA S1",
    company: "FUZEBOX",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=THOLA",
    description: "A gripping series that captivated audiences with its unique storytelling.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Placeholder
  },
  {
    id: 32,
    title: "SOKHULU & PARTNERS S2",
    company: "PENGUIN FILMS",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=SOKHULU+PARTNERS",
    description: "The second season of this legal drama series.",
    year: "2022",
    youtubeLink: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1", // Placeholder
  },
  {
    id: 33,
    title: "HOME AFFAIRS",
    company: "PENGUIN FILMS",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=HOME+AFFAIRS",
    description: "A series exploring bureaucracy and human stories within government institutions.",
    year: "2023",
    youtubeLink: "https://www.youtube.com/embed/kf_dK86m84E?autoplay=1", // Placeholder
  },
  {
    id: 34,
    title: "KE MANG/ WHO AM I",
    company: "PENGUIN FILMS",
    category: "TV Series",
    image: "/placeholder.svg?height=400&width=600&text=KE+MANG",
    description: "A thought-provoking series about identity and self-discovery.",
    year: "2022",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // Placeholder
  },
 

  // ... (keep all other projects in the original order)
];

const categories = [
  "All",
  "TV Series",
  "Documentary",
  "Feature Film",
  "Commercial",
  "Talk Show",
  "Educational",
  "Media Production",
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "TV Series":
      return <Film className="w-4 h-4" />;
    case "Documentary":
      return <Award className="w-4 h-4" />;
    case "Feature Film":
      return <Play className="w-4 h-4" />;
    case "Commercial":
      return <Building2 className="w-4 h-4" />;
    default:
      return <Film className="w-4 h-4" />;
  }
};

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"title" | "year" | "company">("title");
  const [showAll, setShowAll] = useState(false);

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    const priorityTitles = [
      "S'JOLA SONKE",
      "SAINTS & SINNERS S1",
      "SCANDAL",
      "SOCIETY S2 & 3"
    ];

    const priorityProjects = filtered.filter(project =>
      priorityTitles.includes(project.title)
    );
    const otherProjects = filtered.filter(project =>
      !priorityTitles.includes(project.title)
    );

    const sortProjects = (projects: Project[]) => {
      return projects.sort((a, b) => {
        switch (sortBy) {
          case "year":
            return (b.year || "").localeCompare(a.year || "");
          case "company":
            return a.company.localeCompare(b.company);
          default:
            return a.title.localeCompare(b.title);
        }
      });
    };

    return [...priorityProjects, ...sortProjects(otherProjects)];
  }, [selectedCategory, searchTerm, sortBy]);

  const displayedProjects = showAll
    ? filteredAndSortedProjects
    : filteredAndSortedProjects.slice(0, 4);
  const hasMoreProjects = filteredAndSortedProjects.length > 3;

  const stats = [
    { label: "Productions", value: "35+", icon: <Film className="w-6 h-6" /> },
    {
      label: "Production Companies",
      value: "15+",
      icon: <Building2 className="w-6 h-6" />,
    },
    { label: "Categories", value: "8", icon: <Filter className="w-6 h-6" /> },
    { label: "Since", value: "2018", icon: <Calendar className="w-6 h-6" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen" style={{ background: burntOrange, color: "#fff" }}>
      {/* Hero Section */}
      <section
        className="relative py-24 px-4 overflow-hidden"
        style={{
          background: burntOrange,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            background: `linear-gradient(120deg, ${deepBlue} 60%, transparent 60%), linear-gradient(-120deg, ${blueAccent} 35%, transparent 35%)`,
            clipPath: "polygon(0 0, 100% 0, 100% 60%, 0% 100%)",
            opacity: 0.95,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 mb-6"
              style={{
                background: `${deepBlue}CC`,
                border: `1px solid ${blueAccent}66`,
                color: blueAccent,
              }}
            >
              <Film className="w-5 h-5" style={{ color: blueAccent }} />
              <span className="font-medium">Professional Productions</span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: `linear-gradient(90deg, ${blueAccent} 0%, #fff 25%, ${burntOrange} 55%, #fff 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: `0 4px 24px ${deepBlue}55`,
            }}
          >
            OUR PORTFOLIO
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              color: "#fff",
              textShadow: `0 2px 12px ${deepBlue}88`
            }}
          >
            <span style={{ color: blueAccent, fontWeight: 600 }}>A showcase</span> of our exceptional work across television, film,
            documentaries, and commercial productions. Each project represents
            our commitment to excellence and innovative storytelling.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y" style={{ borderColor: burntOrange }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center group">
                <div
                  className="rounded-2xl p-6 border transition-all duration-300 group-hover:bg-[#fff]/10"
                  style={{
                    background: `${deepBlue}CC`,
                    border: `1.5px solid ${blueAccent}99`,
                  }}
                >
                  <div className="flex justify-center mb-4" style={{ color: blueAccent }}>
                    {stat.icon}
                  </div>
                  <div
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: "#fff" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-lg" style={{ color: blueAccent }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-8 px-4" style={{ background: `${deepBlue}CC` }}>
        <div className="max-w-7xl mx-auto">
          {/* Search and View Controls */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: blueAccent }} />
              <input
                type="text"
                placeholder="Search productions, companies, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl"
                style={{
                  background: "#fff",
                  border: `1px solid ${burntOrange}`,
                  color: deepBlue,
                  fontWeight: 500,
                  boxShadow: `0 2px 16px ${blueAccent}11`,
                }}
              />
            </div>
            {/* View Mode and Sort Controls */}
            <div className="flex gap-4">
              <div className="flex rounded-xl border overflow-hidden" style={{ border: `1px solid ${blueAccent}` }}>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-3 flex items-center gap-2 transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-[#2176FF] text-white"
                      : "text-[#2176FF] hover:text-[#CC5500] hover:bg-white"
                  }`}
                  style={{
                    fontWeight: 600,
                  }}
                >
                  <Grid className="w-4 h-4" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-3 flex items-center gap-2 transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-[#2176FF] text-white"
                      : "text-[#2176FF] hover:text-[#CC5500] hover:bg-white"
                  }`}
                  style={{
                    fontWeight: 600,
                  }}
                >
                  <List className="w-4 h-4" />
                  <span className="hidden sm:inline">List</span>
                </button>
              </div>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "title" | "year" | "company")
                }
                className="px-4 py-3 rounded-xl"
                style={{
                  background: "#fff",
                  border: `1px solid ${burntOrange}`,
                  color: deepBlue,
                  fontWeight: 500,
                  boxShadow: `0 1px 8px ${blueAccent}11`,
                }}
              >
                <option value="title">Sort by Title</option>
                <option value="year">Sort by Year</option>
                <option value="company">Sort by Company</option>
              </select>
            </div>
          </div>
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false);
                }}
                className="px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
                style={{
                  background: selectedCategory === category ? blueAccent : "#fff",
                  color: selectedCategory === category ? "#fff" : deepBlue,
                  fontWeight: 600,
                  boxShadow: selectedCategory === category ? `0 2px 12px ${blueAccent}44` : "none",
                  border: selectedCategory === category ? `2px solid ${burntOrange}` : `1px solid ${deepBlue}22`,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getCategoryIcon(category)}
                {category}
                {selectedCategory === category && (
                  <span className="bg-[#fff]/20 rounded-full px-2 py-0.5 text-xs" style={{ color: "#fff" }}>
                    {filteredAndSortedProjects.length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid/List */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${viewMode}-${searchTerm}-${sortBy}-${showAll}`}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                  : "space-y-6"
              }
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`group relative cursor-pointer ${
                    viewMode === "grid"
                      ? "rounded-2xl overflow-hidden border transition-all duration-300"
                      : "rounded-2xl p-6 border flex gap-6 transition-all duration-300"
                  }`}
                  style={{
                    background: burntOrange,
                    border: `1.5px solid ${deepBlue}`,
                    boxShadow: viewMode === "grid" ? `0 2px 14px ${blueAccent}33` : `0 1px 8px ${blueAccent}11`
                  }}
                  whileHover={{ scale: viewMode === "grid" ? 1.02 : 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(project)}
                  layout
                >
                  {viewMode === "grid" ? (
                    <>
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{
                            background: burntOrange
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#13244D]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {/* Play button overlay */}
                        {project.youtubeLink && (
                          <div className="absolute inset-0 bg-[#13244D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="w-16 h-16 bg-[#2176FF]/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20"
                            >
                              <Play className="w-6 h-6" style={{ color: "#fff" }} />
                            </motion.div>
                          </div>
                        )}
                        <div className="absolute top-4 right-4">
                          <span className="bg-[#2176FF]/95 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/10">
                            {project.category}
                          </span>
                        </div>
                        {project.year && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#13244D]/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                              {project.year}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2" style={{ color: "#fff" }}>
                          {project.title}
                        </h3>
                        <p className="text-[#2176FF] text-sm mb-3 font-medium">
                          {project.company}
                        </p>
                        <p className="text-gray-100 text-sm line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                        {project.awards && project.awards.length > 0 && (
                          <div className="mt-3 flex items-center gap-2">
                            <Award className="w-4 h-4" style={{ color: blueAccent }} />
                            <span className="text-xs" style={{ color: blueAccent }}>
                              {project.awards.length} Award
                              {project.awards.length > 1 ? "s" : ""}
                            </span>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-48 aspect-video relative overflow-hidden rounded-xl flex-shrink-0">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          style={{ background: burntOrange }}
                        />
                        {/* Play button overlay for list view */}
                        {project.youtubeLink && (
                          <div className="absolute inset-0 bg-[#13244D]/30 group-hover:bg-[#2176FF]/60 transition-colors duration-300 flex items-center justify-center">
                            <Play className="w-8 h-8" style={{ color: "#fff", opacity: 0.8 }} />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-2xl font-bold mb-1" style={{ color: "#fff" }}>
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm" style={{ color: blueAccent }}>
                              <span className="flex items-center gap-1">
                                <Building2 className="w-4 h-4" />
                                {project.company}
                              </span>
                              {project.year && (
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {project.year}
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="bg-[#2176FF]/20 text-[#2176FF] px-3 py-1 rounded-full text-xs font-semibold border border-[#2176FF]/30 flex items-center gap-1">
                            {getCategoryIcon(project.category)}
                            {project.category}
                          </span>
                        </div>
                        <p className="text-white leading-relaxed mb-3">
                          {project.description}
                        </p>
                        {project.awards && project.awards.length > 0 && (
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" style={{ color: blueAccent }} />
                            <div className="flex flex-wrap gap-2">
                              {project.awards.slice(0, 2).map((award, idx: number) => (
                                <span
                                  key={idx}
                                  className="text-xs bg-[#2176FF]/10 text-[#2176FF] px-2 py-1 rounded-full border border-[#2176FF]/20"
                                >
                                  {award}
                                </span>
                              ))}
                              {project.awards.length > 2 && (
                                <span className="text-xs text-[#2176FF]">
                                  +{project.awards.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Show More/Show Less Button */}
          {hasMoreProjects && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3"
                style={{
                  background: blueAccent,
                  color: "#fff",
                  boxShadow: `0 2px 12px ${deepBlue}22`,
                  border: `1.5px solid ${burntOrange}`
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-5 h-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    Show More ({filteredAndSortedProjects.length - 3} more
                    projects)
                  </>
                )}
              </motion.button>
            </motion.div>
          )}

          {filteredAndSortedProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold" style={{ color: blueAccent }}>
                No productions found
              </h3>
              <p style={{ color: "#fff", opacity: 0.7 }}>
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: `${deepBlue}F7`,
              backdropFilter: "blur(10px)"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border shadow-2xl"
              style={{
                background: burntOrange,
                border: `1.5px solid ${blueAccent}`
              }}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                {selectedProject.youtubeLink ? (
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={selectedProject.youtubeLink}
                      title={selectedProject.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-t-2xl"
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                    style={{ background: burntOrange }}
                  />
                )}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 rounded-full p-2 transition-colors z-10"
                  style={{
                    background: deepBlue,
                    color: "#fff",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="p-8">
                <h2 className="text-4xl font-bold mb-3" style={{ color: blueAccent }}>
                  {selectedProject.title}
                </h2>
                <p className="text-xl mb-4" style={{ color: "#fff" }}>
                  {selectedProject.company} ({selectedProject.year})
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#2176FF]/20 text-[#2176FF] px-3 py-1 rounded-full text-sm font-semibold border border-[#2176FF]/30 flex items-center gap-1">
                    {getCategoryIcon(selectedProject.category)}
                    {selectedProject.category}
                  </span>
                  {selectedProject.awards &&
                    selectedProject.awards.length > 0 && (
                      <span className="bg-[#2176FF]/20 text-[#2176FF] px-3 py-1 rounded-full text-sm font-semibold border border-[#2176FF]/30 flex items-center gap-1">
                        <Award className="w-4 h-4" style={{ color: blueAccent }} />
                        {selectedProject.awards.join(", ")}
                      </span>
                    )}
                </div>
                <p className="text-lg leading-relaxed" style={{ color: "#fff" }}>
                  {selectedProject.description}
                </p>
                <div className="mt-8">
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="relative inline-flex items-center justify-center gap-2 px-6 py-3 tracking-wide text-sm font-medium uppercase rounded-md group overflow-hidden w-full sm:w-auto text-center"
                    style={{
                      border: `2px solid ${blueAccent}`,
                      color: "#fff",
                      background: deepBlue,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Back to Portfolio
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <ChevronUp className="w-5 h-5" />
                      </motion.span>
                    </span>
                    <span className="absolute inset-0" style={{ background: blueAccent, opacity: 0, transition: "opacity 0.5s", zIndex: 0 }} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}