import ProjectCard from "./ProjectCard.tsx";
import '../../index.css'
import ProjectList from './ProjectList.ts'; 

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f2e9e1] py-12 px-4 md:px-16 flex flex-col items-center"
    >
      <h2 className="mt-3 text-[2rem] md:text-[4rem] font-bold text-center mb-12">
        Projects
      </h2>
    <div className="flex justify-center gap-10 flex-wrap">
      {ProjectList.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
    </section>
  );
}

export default Projects;
