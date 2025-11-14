import '../../index.css'
import Commits from '../Commits/Commits.tsx'; 

function Projects() {
    return (

    <section id="projects" className="bg-[#9ccfd8] py-12 px-4 md:px-16 flex flex-col items-center">
    
      <h2 className="mt-3 text-[2rem] md:text-[4rem] font-bold text-center mb-8">
        Projects 
      </h2>
    <Commits />
    </section>
    );
}

export default Projects;
