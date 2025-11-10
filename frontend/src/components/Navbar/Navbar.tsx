import '../../index.css'
import { Link } from 'react-scroll'; 


import { useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const navLinks = ["ABOUT ME", "SKILLS", "EXPERIENCES", "PROJECTS", "FITNESS"];
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
      
      {/* Left: Name + Nav Links */}
      <div className="flex items-center space-x-4">


      <div className="relative group cursor-pointer">
        {/* Hover box: right to left */}
        <span className="absolute inset-0 w-0 right-0 group-hover:left-0 group-hover:w-full transition-all duration-300 ease-in-out bg-[#31748f]"></span>
        
        {/* Text */}
        <span className="relative z-10 text-2xl font-bold text-[#f5f5f5] px-[2px] py-[2px]">
          JP
          </span>
        </div>

          <span className="text-[#f5f5f5]">|</span>
        <ul className="flex space-x-4 uppercase text-sm tracking-wide text-[#f5f5f5]">
          {navLinks.map((link) => (
            <li key={link} className="relative group cursor-pointer flex items-center justify-center">
              {/* Hover box */}
              <span className="absolute inset-0 bg-[#d6a75f] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>

              {/* Text wrapped in Link */}
              <Link
                to={link.toLowerCase().replace(/\s+/g, '-')} // e.g., "ABOUT ME" -> "about-me"
                smooth={true}
                duration={500}
                offset={-80} // adjust for fixed header height
                className="relative z-10 font-bold text-base text-[#f5f5f5] px-[2px] py-[2px]"
              >
                {link}
            </Link>
          </li>
        ))}
      </ul>
      </div>
      {/* Right: Theme toggle icons */}

      <div className="flex items-center space-x-4">
        {theme === "light" ? (
          <FaMoon
            className="text-[#f5f5f5] text-xl cursor-pointer hover:text-[#908caa]"
            onClick={toggleTheme}
          />
        ) : (
          <FaSun
            className="text-[#f5f5f5] text-xl cursor-pointer hover:text-[#f6c177]"
            onClick={toggleTheme}
          />
        )}
      </div>

    </div>
  );
}

export default Navbar;
