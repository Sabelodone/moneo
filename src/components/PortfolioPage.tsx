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
    // First filter all projects
    const filtered = projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Identify the priority projects (these will always appear first)
    const priorityTitles = [
      "S'JOLA SONKE",
      "SAINTS & SINNERS S1",
      "SCANDAL",
      "SOCIETY S2 & 3"
    ];

    // Separate into priority and other projects
    const priorityProjects = filtered.filter(project => 
      priorityTitles.includes(project.title)
    );
    const otherProjects = filtered.filter(project => 
      !priorityTitles.includes(project.title)
    );

    // Sort function for the non-priority projects
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

    // Combine with priority projects first, then sorted other projects
    return [...priorityProjects, ...sortProjects(otherProjects)];
  }, [selectedCategory, searchTerm, sortBy]);

  // Show only first 3 projects initially, or all if showAll is true
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
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.02%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-6 py-3 mb-6">
              <Film className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-medium">
                Professional Productions
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            OUR PORTFOLIO
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of our exceptional work across television, film,
            documentaries, and commercial productions. Each project represents
            our commitment to excellence and innovative storytelling.
          </motion.p>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 px-4 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center group">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-red-600/30 transition-all duration-300 group-hover:bg-gray-800/50">
                  <div className="flex justify-center mb-4 text-red-400 group-hover:text-red-300 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2 group-hover:text-red-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Controls Section */}
      <section className="py-8 px-4 bg-gray-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Search and View Controls */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search productions, companies, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-600/50 focus:bg-gray-800/70 transition-all duration-300"
              />
            </div>

            {/* View Mode and Sort Controls */}
            <div className="flex gap-4">
              <div className="flex bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-3 flex items-center gap-2 transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-red-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-3 flex items-center gap-2 transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-red-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
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
                className="px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-600/50 transition-all duration-300"
              >
                <option value="title">Sort by Title</option>
                <option value="year">Sort by Year</option>
                <option value="company">Sort by Company</option>
              </select>
            </div>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false); // Reset to show only 3 when changing category
                }}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/25"
                    : "bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getCategoryIcon(category)}
                {category}
                {selectedCategory === category && (
                  <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs">
                    {filteredAndSortedProjects.length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Grid/List */}
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
                      ? "bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-red-600/30"
                      : "bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-red-600/30 flex gap-6"
                  } transition-all duration-300 hover:bg-gray-800/50`}
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
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {/* Play button overlay */}
                        {project.youtubeLink && (
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="w-16 h-16 bg-red-600/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20"
                            >
                              <Play className="w-6 h-6 text-white ml-1" />
                            </motion.div>
                          </div>
                        )}
                        <div className="absolute top-4 right-4">
                          <span className="bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/10">
                            {project.category}
                          </span>
                        </div>
                        {project.year && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                              {project.year}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-red-400 text-sm mb-3 font-medium">
                          {project.company}
                        </p>
                        <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                        {project.awards && project.awards.length > 0 && (
                          <div className="mt-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-yellow-500" />
                            <span className="text-xs text-yellow-500">
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
                        />
                        {/* Play button overlay for list view */}
                        {project.youtubeLink && (
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white opacity-80" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors mb-1">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
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
                          <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold border border-red-600/30 flex items-center gap-1">
                            {getCategoryIcon(project.category)}
                            {project.category}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-3">
                          {project.description}
                        </p>
                        {project.awards && project.awards.length > 0 && (
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-yellow-500" />
                            <div className="flex flex-wrap gap-2">
                              {project.awards.slice(0, 2).map((award, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full border border-yellow-500/20"
                                >
                                  {award}
                                </span>
                              ))}
                              {project.awards.length > 2 && (
                                <span className="text-xs text-yellow-500">
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
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 border border-red-500/20 flex items-center gap-3"
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
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                No productions found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Project Modal */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className="bg-gray-900/90 backdrop-blur-xl rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-red-600/20 shadow-2xl"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
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
            />
          )}
          <motion.button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-red-600 transition-colors z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-3 text-red-400">
            {selectedProject.title}
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            {selectedProject.company} ({selectedProject.year})
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-600/30 flex items-center gap-1">
              {getCategoryIcon(selectedProject.category)}
              {selectedProject.category}
            </span>
            {selectedProject.awards &&
              selectedProject.awards.length > 0 && (
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-500/30 flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  {selectedProject.awards.join(", ")}
                </span>
              )}
          </div>
          <p className="text-lg text-gray-400 leading-relaxed">
            {selectedProject.description}
          </p>
          
          {/* Add Back to Portfolio Button */}
          <div className="mt-8">
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3 tracking-wide text-sm font-medium uppercase border-2 border-red-700 rounded-md text-red-700 hover:bg-red-700 hover:text-white transition-all duration-300 group overflow-hidden w-full sm:w-auto text-center"
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
              <span className="absolute inset-0 bg-red-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-0" />
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