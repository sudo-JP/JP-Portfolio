import '../../index.css'
import { Link } from 'react-scroll'; 
import Commits from '../Commits/Commits.tsx';
import { FaGithub } from "react-icons/fa";



function Navbar() {
  const navLinks = ["ABOUT ME", "EXPERIENCES", "PROJECTS", "FITNESS"];

  return (
  <section className="fixed top-0 left-0 w-full z-50 bg-[#1f1c33] 90 backdrop-blur-md shadow-md">
    <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
      
      {/* Left: Name + Nav Links */}
      <div className="flex items-center space-x-4">


      <div className="relative group cursor-pointer">
        {/* Hover box: right to left */}
        
        {/* Text */}
        <span className="relative z-10 text-2xl font-bold text-[#f5f5f5] px-[2px] py-[2px]">

          <Link
            to="jp" // e.g., "ABOUT ME" -> "about-me"
            smooth={true}
            duration={500}
            offset={-80} // adjust for fixed header height
          >
          JP
          </Link>
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
      <div className="flex gap-5">
        <a 
        href="https://github.com/sudo-JP"
        target="_blank">
        <FaGithub 
        size={25} className="text-white hover:text-[#cecacd] cursor-pointer" />
        </a>
        <Commits />
      </div>

    </div>
  </section>
  );
}

export default Navbar;
