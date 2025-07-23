import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-primary/95 backdrop-blur-md" : "bg-primary/90 backdrop-blur-md"
        } border-b border-slate-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("home")}
                className="text-xl font-bold gradient-text"
              >
                Shantanu Suman
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <motion.button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-accent transition-colors duration-200 relative"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-accent transition-colors duration-200 relative"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button
                onClick={() => scrollToSection("services")}
                className="hover:text-accent transition-colors duration-200 relative"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                >
                Services
                <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                />
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection("tech")}
                  className="hover:text-accent transition-colors duration-200 relative"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Tech Stack
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-accent transition-colors duration-200 relative"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Projects
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("leadership")}
                  className="hover:text-accent transition-colors duration-200 relative"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Experience
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("education")}
                  className="hover:text-accent transition-colors duration-200 relative"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Education
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-accent transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-400 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-secondary/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 hover:text-accent transition-colors duration-200"
              >
                Home
              </button>
              <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 hover:text-accent transition-colors duration-200"
              >
              Services
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 hover:text-accent transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("tech")}
                className="block w-full text-left px-3 py-2 hover:text-accent transition-colors duration-200"
              >
                Tech Stack
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 hover:text-accent transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("leadership")}
                className="block w-full text-left px-3 py-2 hover:text-accent transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="block w-full text-left px-3 py-2 hover:text-accent transition-colors duration-200"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 hover:text-accent transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
