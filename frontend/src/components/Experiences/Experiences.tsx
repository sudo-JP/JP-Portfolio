import '../../index.css';

type Experience = {
  company: string;
  role: string;
  period: string;
  note: string;
};

const experiences: Experience[] = [
  {
    company: 'ModiFace',
    role: 'Graphics SDK Intern',
    period: '2026 - now',
    note: 'I bounce between rendering and SDK work. So far that has meant shaders, skin rendering fixes, iOS integration, camera stuff, and the occasional Android crash.',
  },
  {
    company: 'Cliniscript',
    role: 'Backend Engineer',
    period: 'May - Aug 2025',
    note: 'I worked on webhook-based Node services with MongoDB and Docker, doing backend integrations and tests.',
  },
];

function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-1.5 bg-gold" aria-hidden="true" />
        <div className="grid gap-8 py-12 md:grid-cols-[13rem_1fr] md:gap-16 md:py-16">
          <div>
            <p className="mb-3 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
              <span aria-hidden="true" className="size-1.5 bg-gold" />
              02 / elsewhere
            </p>
            <h2 className="font-display text-3xl tracking-[-0.03em]">
              some places i&apos;ve spent time
            </h2>
          </div>

          <div>
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="group relative border-t border-line py-6 transition-transform duration-200 hover:translate-x-1 first:border-ink"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-4 -left-3 w-0.5 origin-center scale-y-0 bg-gold transition-transform duration-200 group-hover:scale-y-100"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="font-display text-xl">
                      {experience.company}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {experience.role}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted">
                    {experience.period}
                  </p>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  {experience.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
