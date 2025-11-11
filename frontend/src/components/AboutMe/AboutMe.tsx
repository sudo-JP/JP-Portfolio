import '../../index.css'
// AboutMe.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const AboutMe = () => {

  var text = `
    Hey, I’m Jason, a CS student at the University of Toronto Mississauga. I love tinkering with systems and building things that just work.<br /><br />
    I’m an <span class="text-[#56949f]">Arch Linux</span> enthusiast and have a <span class="text-[#ea9d34]">Proxmox</span> homelab where I experiment with servers, containers, and <span class="text-[#f5bde6]">robotics</span> projects. I have tons of ideas I haven’t had the time to build yet, but I’m always sketching out the next one.<br /><br />
    I enjoy improving <span class="text-[#b4637a]">system performance</span>, exploring <span class="text-[#907aa9]">optimization</span>, and automating workflows. I’m always reaching out to friends to start new projects together and introduce them to new tech stacks, keeping learning and collaboration at the core of what I do.
  `;
  return (
    <section className="bg-[#ebbcba] py-12 px-4 md:px-16 flex flex-col items-center">
      {/* Header */}
      <h2 className="mt-3 text-[2rem] md:text-[4rem] font-bold text-center mb-8">
        About Me
      </h2>

      {/* Inner flex container: image + right-side vertical stack */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 w-full max-w-5xl">
        {/* Image */}
        <img
          src="/path/to/your-photo.jpg"
          alt="Jason Phan"
          className="w-48 md:w-64 h-auto rounded-lg shadow-lg object-cover"
        />

        {/* Right side: vertical stack */}
        <div className="flex flex-col justify-start space-y-4 flex-1">
          {/* Paragraphs */}
            <p
              className="text-xl md:text-2xl font-semibold leading-relaxed"
              dangerouslySetInnerHTML={{ __html: text}}
            />
          {/* Social links centered under text */}
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
