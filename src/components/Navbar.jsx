import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = 30; // Adjust this value based on your navbar height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100); // Small delay to allow menu to close
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm w-full flex flex-col sm:flex-row items-center justify-between py-4 sm:py-6 px-4 sm:px-6 lg:px-28">
      <div className="w-full sm:w-auto flex items-center justify-between">
        <label
          className="pb-2 text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl tracking-tighter"
          style={{ fontFamily: "'Bodoni Moda', cursive" }}
          onClick={() => scrollToSection('hero')}
        >
          D-K
        </label>
        
        {/* Mobile menu button */}
        <button
          className="sm:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden sm:flex items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-0">
        <button 
          onClick={() => scrollToSection('hero')} 
          className="text-sm sm:text-base hover:text-stone-400 transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('technologies')} 
          className="text-sm sm:text-base hover:text-stone-400 transition-colors"
        >
          Technologia
        </button>
        <button 
          onClick={() => scrollToSection('projects')} 
          className="text-sm sm:text-base hover:text-stone-400 transition-colors"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('experience')} 
          className="text-sm sm:text-base hover:text-stone-400 transition-colors"
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="text-sm sm:text-base hover:text-stone-400 transition-colors"
        >
          Contact
        </button>
      </div>

      {/* Mobile Menu - shown only on small screens */}
      {isMenuOpen && (
        <div className="sm:hidden w-full flex flex-col items-center gap-4 py-4 bg-black bg-opacity-95">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="w-full text-center py-2 hover:text-stone-400 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('technologies')} 
            className="w-full text-center py-2 hover:text-stone-400 transition-colors"
          >
            Technologia
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="w-full text-center py-2 hover:text-stone-400 transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="w-full text-center py-2 hover:text-stone-400 transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="w-full text-center py-2 hover:text-stone-400 transition-colors"
          >
            Contact
          </button>
        </div>
      )}

      {/* Social Icons - Desktop */}
      <div className="hidden sm:flex items-center justify-center gap-4 text-xl sm:text-2xl">
        <a
          href="https://www.linkedin.com/in/devkoyani521"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-stone-400 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Devkoyani"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-stone-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/dev_koyani"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-stone-400 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/DevKoyani"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-stone-400 transition-colors"
        >
          <FaXTwitter />
        </a>
      </div>

      {/* Social Icons - Mobile (shown below menu) */}
      {isMenuOpen && (
        <div className="sm:hidden flex items-center justify-center gap-4 text-xl py-4 bg-black bg-opacity-95 w-full">
          <a
            href="https://www.linkedin.com/in/devkoyani521"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-stone-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Devkoyani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-stone-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/dev_koyani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-stone-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/DevKoyani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-stone-400 transition-colors"
          >
            <FaXTwitter />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;