import { Globe, Mail, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
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
              We harness the transformative power of storytelling to create compelling, thought-provoking cinema that resonates across borders and cultures. Based in the heart of Egoli, South Africa, our internationally acclaimed film production company is dedicated to producing diverse, authentic narratives that challenge perspectives and ignite meaningful conversations worldwide.
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
              <a
                href="#home"
                className="font-light text-white/60 hover:text-white transition-colors text-sm tracking-[0.1em] uppercase"
              >
                Home
              </a>
              <a
                href="#portfolio"
                className="font-light text-white/60 hover:text-white transition-colors text-sm tracking-[0.1em] uppercase"
              >
                Work
              </a>
              <a
                href="#about"
                className="font-light text-white/60 hover:text-white transition-colors text-sm tracking-[0.1em] uppercase"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="font-light text-white/60 hover:text-white transition-colors text-sm tracking-[0.1em] uppercase"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-light text-sm tracking-[0.15em] text-white uppercase mb-6">
              Find Us Here
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a
                  href="mailto:info@moneofilms.co.za"
                  className="font-light text-white/60 text-sm hover:text-white transition-colors"
                >
                  info@moneofilms.co.za
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+27677662899"
                    className="font-light text-white/60 text-sm hover:text-white transition-colors"
                  >
                    +27 67 766 2899
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