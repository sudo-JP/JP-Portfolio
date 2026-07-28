import '../../index.css';
import ProjectList from './ProjectList.ts';
import type { Project } from './ProjectList.ts';

type ProjectRowProps = {
  project: Project;
  index: number;
};

function ProjectRow({ project, index }: ProjectRowProps) {
  const destination = project.more ?? project.github;
  const title = destination ? (
    <a
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-transparent underline-offset-4 transition-colors hover:text-pine hover:decoration-pine"
    >
      {project.title}
    </a>
  ) : (
    project.title
  );

  return (
    <article className="group relative grid grid-cols-[2rem_1fr] gap-2 border-b border-line py-5 transition-transform duration-200 hover:translate-x-1 focus-within:translate-x-1 sm:grid-cols-[2.5rem_1fr_9rem] sm:gap-4">
      <span
        aria-hidden="true"
        className="absolute inset-y-4 -left-3 w-0.5 origin-center scale-y-0 bg-foam transition-transform duration-200 group-hover:scale-y-100 group-focus-within:scale-y-100"
      />
      <span className="pt-1 font-mono text-[0.68rem] text-pine">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <h3 className="font-display text-lg sm:text-xl">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          {project.description}
        </p>
      </div>
      <div className="col-start-2 font-mono text-[0.64rem] uppercase leading-5 tracking-[0.08em] text-muted sm:col-start-3 sm:row-start-1 sm:text-right">
        {project.status && <p>{project.status}</p>}
        <p>{project.tech.slice(0, 3).join(' / ')}</p>
      </div>
    </article>
  );
}

function Projects() {
  const featuredProjects = ProjectList.filter((project) => project.featured);
  const archivedProjects = ProjectList.filter((project) => !project.featured);

  return (
    <section id="projects" className="scroll-mt-20 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-1.5 bg-foam" aria-hidden="true" />
        <div className="grid gap-8 py-12 md:grid-cols-[13rem_1fr] md:gap-16 md:py-16">
          <div>
            <p className="mb-3 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
              <span aria-hidden="true" className="size-1.5 bg-foam" />
              03 / projects
            </p>
            <h2 className="font-display text-3xl tracking-[-0.03em]">
              things i&apos;ve been building
            </h2>
            <p className="mt-3 max-w-xs font-display text-sm leading-6 text-muted">
              some finished, some ongoing, all here because i got curious.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-[2rem_1fr] gap-2 border-b border-ink pb-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] sm:grid-cols-[2.5rem_1fr_9rem] sm:gap-4">
              <span>no.</span>
              <span>project</span>
              <span className="hidden text-right sm:block">state</span>
            </div>

            {featuredProjects.map((project, index) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={index}
              />
            ))}

            <details className="group">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between border-b border-ink py-3 font-display text-sm text-pine [&::-webkit-details-marker]:hidden">
                <span>the rest of the project drawer</span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em]">
                  <span className="group-open:hidden">
                    {archivedProjects.length} projects +
                  </span>
                  <span className="hidden group-open:inline">close -</span>
                </span>
              </summary>
              <div>
                {archivedProjects.map((project, index) => (
                  <ProjectRow
                    key={project.title}
                    project={project}
                    index={featuredProjects.length + index}
                  />
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
