import { FaGithub } from "react-icons/fa";
import '../../index.css'

export type ProjectCardProps = {
  title: string;
  status?: string; 
  duration?: string; 
  description: string;
  github?: string;     
  more?: string;      
  tech: string[];
};

function ProjectCard({ title, status, duration, description, github, more, tech }: ProjectCardProps) {
  const visibleTech = tech.slice(0, 5);
  const extra = tech.length - visibleTech.length;

  return (
    <div
      className="
        relative bg-[#1f1c33] text-white 
        rounded-xl shadow-md 
        p-6 flex flex-col 
        justify-between
        w-full min-h-[260px]
        min-w-[500px]
        max-w-[500px]
        hover:shadow-lg hover:-translate-y-1 
        transition-all
      "
    >
      {/* Top-right GitHub icon (shifted slightly) */}
      {github && (
        <a
          href={github}
          target="_blank"
          className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
        >
          <FaGithub size={30} />
        </a>
      )}

      {/* Title & Description */}
      <div>
        <h3 className="text-xl font-bold mb-1 line-clamp-2">{title}</h3>

        {duration && 
          <p className="text-xs text-white/60 mb-3">
          {duration}
          </p>
        }

        {status &&
          <p className="text-xs text-white/50 mb-3 italic">
          {status}
          </p>
        }

        <p className="text-sm leading-relaxed text-white/90 mb-4">
          {description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {visibleTech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs bg-white/10 rounded-md"
            >
              {t}
            </span>
          ))}

          {extra > 0 && (
            <span className="px-2 py-1 text-xs bg-white/20 rounded-md">
              +{extra}
            </span>
          )}
        </div>

        {/* Optional “More” link */}
        {more && (
          <a
            href={more}
            target="_blank"
            className="px-3 py-1.5 bg-white text-[#1f1c33] text-sm font-semibold rounded-md hover:bg-white/90 transition"
          >
            More
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
