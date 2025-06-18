import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-6 px-4 sm:px-0">
      <div className="flex flex-shrink-0 items-center mb-4 sm:mb-0">
        <h2
          className="pb-2 text-1xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl tracking-tighter"
          style={{ fontFamily: "'Bodoni Moda', cursive" }}
        >
          D-K
        </h2>
      </div>
      <div className="flex items-center justify-center gap-4 text-xl sm:text-2xl">
        <a
          href="https://www.linkedin.com/in/devkoyani521/"
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
          href="https://www.linkedin.com/in/devkoyani521/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-stone-400 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/devkoyani521/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-stone-400 transition-colors"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
