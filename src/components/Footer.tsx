import { Link } from "react-router-dom";
import { Globe, Mail, MapPin, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* ✅ Added the logo */}
              <img
  src="/moneo-logo.png"
  alt="Moneo Films Logo"
  className="w-10 h-10 object-contain"
/>

              <span className="font-light text-lg tracking-[0.2em] text-white uppercase">
                MONEO FILMS
              </span>
            </div>
            <p className="font-light text-white/60 mb-6 max-w-md leading-relaxed">
              Experience the power of storytelling through our diverse portfolio
              of projects. An internationally recognized film production company
              based in Egoli, South Africa. Creating thought-provoking
              cinema that transcends borders and cultures.
            </p>
            <p className="font-light text-sm tracking-[0.2em] text-red-500/70 uppercase">
              Conscience makes cowards of us all
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-light text-sm tracking-[0.15em] text-white uppercase mb-6">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-light text-white/60 hover:text-white transition-colors text-sm tracking-[0.1em] uppercase"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="font-light text-white/60 hover:text-white transition-colors text-sm tracking-[0.1em] uppercase"
              >
                Work
              </Link>
              <Link
                to="/about"
                className="font-light text-white/60 hover:text-white transition-colors text-sm tracking-[0.1em] uppercase"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="font-light text-white/60 hover:text-white transition-colors text-sm tracking-[0.1em] uppercase"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-light text-sm tracking-[0.15em] text-white uppercase mb-6">
              Find Us Here
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Riverside Close 100 Caron St Rembrandt Park South Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light text-white/60 text-sm hover:text-white transition-colors"
                >
                  Riverside Close, 100 Caron St, Rembrandt Park, South Africa
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a
                  href="mailto:production@moneolms.co.za"
                  className="font-light text-white/60 text-sm hover:text-white transition-colors"
                >
                  production@moneolms.co.za
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+27110000000"
                    className="font-light text-white/60 text-sm hover:text-white transition-colors"
                  >
                    +27 11 000 0000
                  </a>
                  <a
                    href="tel:+27820000000"
                    className="font-light text-white/60 text-sm hover:text-white transition-colors"
                  >
                    +27 82 000 0000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a
                  href="https://www.moneofilms.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light text-white/60 text-sm hover:text-white transition-colors"
                >
                  www.moneofilms.co.za
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect With Us Section */}
      <div className="border-t border-white/5 mt-16 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h3 className="font-light text-sm tracking-[0.15em] text-white uppercase mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/p/C3kADuetVVj/?locale=en_GB%2Cen_GB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors text-sm tracking-[0.1em] uppercase"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-light text-white/40 text-xs tracking-[0.1em] uppercase">
            © {new Date().getFullYear()} Moneo Films | All Rights Reserved.
          </p>
          <p className="font-light text-white/40 text-xs tracking-[0.1em] uppercase mt-4 md:mt-0">
            International Film Production
          </p>
        </div>
      </div>
    </footer>
  );
}
