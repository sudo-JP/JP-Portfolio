import '../../index.css'
// AboutMe.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import allmysocial from '../../assets/allmysocialmediaaccountsafteronegoodpicture.jpg'; 
import text from './AboutMeText'

function AboutMe() {

  return (
    <section className="bg-[#ebbcba] py-12 px-4 md:px-16 flex flex-col items-center">
      {/* Header */}
      <h2 className="mt-3 text-[2rem] md:text-[4rem] font-bold text-center mb-8">
        About Me
      </h2>

      {/* Inner flex container: image + right-side vertical stack */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-20 w-full max-w-5xl">
        {/* Image container */}
        <div className="flex justify-center md:justify-end w-full md:w-auto md:self-center -mt-20">
          <img
            src={allmysocial}
            alt="Jason Phan"
            className="w-72 md:w-80 h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right side: vertical stack */}
        <div className="flex flex-col justify-center space-y-4 flex-1">
          <p
            className="text-xl md:text-2xl font-semibold leading-relaxed"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <div className="flex justify-evenly gap-4 mt-4">
            <a
              href="https://github.com/sudo-JP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/phanductuan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#286983] hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="mailto:jase.phan@mail.utoronto.ca"
              className="text-[#575279] hover:text-[#797593] transition-colors"
            >
              <FaEnvelope size={40} />
            </a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutMe;
