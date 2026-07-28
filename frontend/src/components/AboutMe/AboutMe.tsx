import '../../index.css';

function AboutMe() {
  return (
    <section id="about-me" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-1.5 bg-love" aria-hidden="true" />
        <div className="grid gap-8 py-12 md:grid-cols-[13rem_1fr] md:gap-16 md:py-16">
          <div>
            <p className="mb-3 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
              <span aria-hidden="true" className="size-1.5 bg-love" />
              01 / about
            </p>
            <h2 className="font-display text-3xl tracking-[-0.03em]">
              about
            </h2>
          </div>

          <div className="max-w-3xl space-y-5 font-display text-lg leading-8 sm:text-xl sm:leading-9">
            <p>
              I go to UTM and currently intern at ModiFace. I think I might be a Rustacean at this point, and I like systems programming in general.
            </p>
            <p>
              Outside of that, I go to the gym pretty often, I&apos;m learning piano right now, and I play games on the side.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
