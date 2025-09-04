import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NeoProfile: React.FC = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const portfolioData = [
    {
      period: "2023 - 2025",
      roles: [
        { position: "DOP / Cinematographer", production: "Scandal", company: "Ochre Moving Pictures", genre: "Soapy/Telenovela" },
        { position: "Director of Photography / Cinematographer", production: "Rethink Rands", company: "Coal Stove Pictures", genre: "Feature Film" },
        { position: "Cam Op", production: "Soweto Love Story", company: "Pitch Black", genre: "Promo (Netflix)" },
        { position: "Technical Producer / Director of Photography", production: "The Orbit With Dineo", company: "Kiwi Films", genre: "Reality" },
        { position: "Technical producer / co-producer, Director of Photography / Cinematographer", production: "From One Woman to Another", company: "SOAS University of London / Moneo", genre: "Doccie Film" },
        { position: "Director of Photography/Cam Op", production: "7 Colours", company: "Semamo Productions", genre: "Reality" },
        { position: "Co-producer / Technical Producer / Director of Photography / Director", production: "Adam Harry 21 MEN", company: "Moving Dreams Studios", genre: "Doccie Film" },
        { position: "Cam Op", production: "S'jola Sonke", company: "Bright Fire", genre: "Reality" },
        { position: "Producer / DOP", production: "Standard Bank", company: "Moneo Film", genre: "Corporate" },
        { position: "Cam Op", production: "Stop Violence 'Gainst Iman", company: "Moving Dreams Studios", genre: "Promo" },
      ],
    },
    {
      period: "2022 - 2023",
      roles: [
        { position: "Director of Photography", production: "The Estate", company: "Clive Morris", genre: "Telenovela" },
        { position: "Camera Operator", production: "Giyani (Land of Blood) S2", company: "Tshedza Pictures", genre: "Telenovela" },
        { position: "Loader / Camera Operator", production: "Lingashoni", company: "Stain Glass", genre: "Telenovela" },
        { position: "Camera Assistance / Loader", production: "Mzali'Wami S1", company: "Brains At Work", genre: "Drama" },
        { position: "Camera Assistance / Loader", production: "The River S1, 2 & 3", company: "Tshedza Pictures", genre: "Telenovela" },
        { position: "Camera Assistance / Loader", production: "Gomora ST S1", company: "Serite", genre: "Telenovela" },
      ],
    },
    {
      period: "2012 - 2018",
      roles: [
        { position: "Director of Photography / Producer", production: "Miriam Makeba Foundation", company: "Moneo Films", genre: "Theatre Show" },
        { position: "Camera Assistance", production: "Isidingo", company: "Endemol South Africa", genre: "Soapy" },
        { position: "Producer / Director of Photography", production: "My Sexuality My Pride", company: "Moneo Films", genre: "Doccie Film" },
        { position: "Camera Operator", production: "Not on My Watch", company: "Obonye Media", genre: "Drama" },
        { position: "Camera Operator", production: "Darlington Michaels", company: "Obonye Media", genre: "Documentary" },
      ],
    },
    {
      period: "2017, 2018 & 2021",
      roles: [
        { position: "Loader / Commercials", production: "MQ Films", company: "Commercial", genre: "Commercial" },
        { position: "Loader / Discovery", production: "Discovery", company: "Discovery", genre: "Commercial" },
        { position: "Director of Photography", production: "Khetha / Minister of Education", company: "Moneo Films", genre: "Corporate" },
        { position: "Camera Assistance", production: "The Lite Show ST", company: "Burnt Onion", genre: "Reality Show" },
        { position: "Camera Assistance", production: "The F Word", company: "Soul City Institute", genre: "Reality Show" },
        { position: "Camera Assistance", production: "Bright Fire Pictures", company: "Reality", genre: "Talk Show" },
        { position: "Camera Assistance", production: "Phambili Media", company: "Reality", genre: "Reality Show" },
      ],
    },
  ];


  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F0] text-[#5C3A21] font-sans">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-12 text-[#C75B12] hover:text-[#8C3E08] transition-colors font-semibold"
        >
          <ArrowLeft size={20} />
          Back to About
        </button>

        {/* Profile Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row gap-8 items-start mb-16"
        >
          <img
            src="/images/516252548_18425953228097209_2757025492135577868_n.jpg"
            alt="Neo R Paulus"
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-2xl border-2 border-[#C75B12]"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 text-[#8C3E08]">Neo R Paulus</h1>
            <h2 className="text-xl font-semibold text-[#C75B12] mb-4">Co-Founder & Executive Producer</h2>
            <p className="text-lg leading-relaxed">
              Strategic mastermind behind Moneo Films' operations. Neo brings extensive experience 
              in production management and business development.
            </p>
          </div>
        </motion.div>

        {/* Portfolio Section */}
        <div className="space-y-16">
          {portfolioData.map((section, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-semibold mb-8 text-[#C75B12] border-b-2 border-[#C75B12] pb-2">{section.period}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.roles.map((role, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="bg-[#FFF8F0] shadow-lg rounded-2xl p-6 border-l-4 border-[#C75B12] h-full transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-[#8C3E08]">{role.position}</h3>
                    <p className="mb-1"><span className="font-medium text-[#C75B12]">Production:</span> {role.production}</p>
                    <p className="mb-1"><span className="font-medium text-[#C75B12]">Company:</span> {role.company}</p>
                    <p className="mb-1"><span className="font-medium text-[#C75B12]">Genre:</span> {role.genre}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      

        {/* Contact Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-[#C75B12] border-b-2 border-[#C75B12] pb-2">Contact</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-3 text-lg"
          >
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:neo@moneofilms.co.za" className="text-[#C75B12] hover:underline">
                neo@moneofilms.co.za
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+27677662899" className="text-[#C75B12] hover:underline">
                +27 67 766 2899
              </a>
            </p>
            <p><strong>Location:</strong> South Africa</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NeoProfile;
