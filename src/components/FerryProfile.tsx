import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const FerryProfile: React.FC = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Portfolio Data
  const portfolioData = [
    {
      period: "2007 – 2017",
      roles: [
        { position: "Translator", production: "Scandal", company: "Ochre Media", genre: "Series" },
        { position: "Translator", production: "Saints & Sinners S1 Setswana", company: "Penguin Films", genre: "Series" },
        { position: "Translator", production: "Society S2 & 3", company: "Puo-Pha", genre: "Series" },
        { position: "Director", production: "How to Ruin Christmas S3", company: "Burnt Onion", genre: "Comedy" },
        { position: "Director", production: "Entanglement", company: "Burnt Onion", genre: "Comedy" },
        { position: "Director", production: "The River S1, 2, 3, 4, 5", company: "Tshedza Pictures", genre: "Telenovela" },
        { position: "Director", production: "Lithapo", company: "Quizzical Pictures", genre: "Telenovela" },
        { position: "Director", production: "Giyani (Land of Blood)", company: "Tshedza Pictures", genre: "Telenovela" },
        { position: "Director", production: "Saints & Sinners S1", company: "Penguin Films", genre: "Drama Ep 6" },
        { position: "Director", production: "Thola S1", company: "FuzeBox", genre: "Drama Ep 10" },
        { position: "Director", production: "Sokhulu & Partners S2", company: "Penguin Films", genre: "Drama / Various SCS" },
      ],
      
    },
    {
      period: "2011 – 2022",
      roles: [
        { position: "Dialogue/Performance Coach", production: "The River", company: "Tshedza Pictures", genre: "Telenovela" },
        { position: "Dialogue/Performance Coach", production: "Rhythm City", company: "Quizzical Pictures", genre: "Soapy" },
        { position: "Dialogue/Performance Coach", production: "Saints and Sinners S1", company: "Penguin Films", genre: "Drama" },
        { position: "Dialogue/Performance Coach", production: "Sokhulu & Partners S2", company: "Penguin Films", genre: "Drama" },
        { position: "Dialogue/Performance Coach", production: "Thola S1", company: "FuzeBox", genre: "Drama" },
        { position: "Dialogue Coach", production: "Home Affairs", company: "Penguin Films", genre: "Drama" },
        { position: "Dialogue & Content Advisor", production: "Ke Mang / Who Am I", company: "Penguin Films", genre: "Documentary" },
      ],
    },
  ];


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-24 bg-[#FFF8F0] text-[#5C3A21] font-sans"
    >
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
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
          <img
            src="/images/IWII9j7j_400x400.jpg"
            alt="Ferry Jele"
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-xl shadow-xl border-2 border-[#C75B12]"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-light mb-2">Ferry Jele</h1>
            <h2 className="text-2xl text-[#C75B12] mb-4 font-semibold">Co-Founder & Creative Director</h2>
            <p className="text-lg leading-relaxed text-[#5C3A21]">
              Actress | Performance & Dialogue Coach | Director | Translator. Ferry's most notable works include Netflix's 
              <strong> How to Ruin Christmas</strong>, <strong>Fatal Seduction</strong>, <strong>The River</strong>. 
              SAFTA nominee and winner for directing achievements.
            </p>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="space-y-16">
          {portfolioData.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-semibold mb-8 text-[#C75B12] border-b-2 border-[#E0CFC0] pb-2">{section.period}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.roles.map((role, i) => (
                  <motion.div
                    key={i}
                    className="bg-[#FFF5EB] shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#C75B12] h-full"
                    whileHover={{ scale: 1.03 }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-[#C75B12]">{role.position}</h3>
                    <p className="mb-1"><span className="font-medium">Production:</span> {role.production}</p>
                    <p className="mb-1"><span className="font-medium">Company:</span> {role.company}</p>
                    <p className="mb-1"><span className="font-medium">Genre:</span> {role.genre}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

  

        {/* Contact Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-[#C75B12] border-b-2 border-[#E0CFC0] pb-2">Contact</h2>
          <div className="space-y-3 text-lg">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:ferelina@gmail.com" className="text-[#C75B12] hover:underline">
                ferelina@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+2727767597" className="text-[#C75B12] hover:underline">
                +27 72 776 7597
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FerryProfile;
