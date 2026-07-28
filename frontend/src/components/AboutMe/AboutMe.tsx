import '../../index.css';

function AboutMe() {
  return (
    <section id="about-me" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-1.5 bg-pine" aria-hidden="true" />
        <div className="grid gap-8 py-12 md:grid-cols-[13rem_1fr] md:gap-16 md:py-16">
          <div>
            <p className="mb-3 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
              <span aria-hidden="true" className="size-1.5 bg-pine" />
              01 / about
            </p>
            <h2 className="font-display text-3xl tracking-[-0.03em]">
              a little context
            </h2>
            <p className="mt-3 max-w-xs font-display text-sm leading-6 text-muted">
              the short version, because the long version is probably scattered
              across my projects.
            </p>
          </div>

          <div className="max-w-3xl space-y-5 font-display text-lg leading-8 sm:text-xl sm:leading-9">
            <p>
              I&apos;m a CS specialist at the University of Toronto Mississauga, graduating in 2028
              after taking the co-op route. Right now I&apos;m on a year-long internship at ModiFace, where I work
              across rendering and mobile SDK problems.
            </p>
            <p>
              I tend to learn by building things that force me down a layer: a ray tracer that grew a compiler and
              embedded protocol, a tiny preemptive kernel, scheduling experiments, and the shell I still keep around.
              The useful skill for me has been consistency—the same lesson as the gym: show up often enough and difficult
              things stop feeling mysterious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
