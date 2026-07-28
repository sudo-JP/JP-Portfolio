import '../../index.css';
import NoteList from './NoteList.ts';
import type { NoteEntry } from './NoteList.ts';

type NotesPreviewProps = {
  notes?: NoteEntry[];
};

function RelatedLink({ href }: { href: string }) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="mt-4 inline-block font-mono text-[0.65rem] uppercase tracking-[0.08em] text-pine underline decoration-transparent underline-offset-4 transition-colors hover:decoration-pine"
    >
      related link
    </a>
  );
}

function NoteBody({ note }: { note: NoteEntry }) {
  const hasParagraphs = Boolean(note.paragraphs?.length);
  const hasBullets = Boolean(note.bullets?.length);

  if (!hasParagraphs && !hasBullets && !note.href) {
    return null;
  }

  return (
    <div className="pb-6 pr-4 text-sm leading-7 text-muted sm:pr-10">
      {note.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mb-3 last:mb-0">
          {paragraph}
        </p>
      ))}

      {hasBullets && (
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-gold">
          {note.bullets?.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {note.href && <RelatedLink href={note.href} />}
    </div>
  );
}

function NotesPreview({ notes = NoteList }: NotesPreviewProps) {
  return (
    <section id="notes" className="scroll-mt-20 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-1.5 bg-gold" aria-hidden="true" />
        <div className="grid gap-8 py-12 md:grid-cols-[13rem_1fr] md:gap-16 md:py-16">
          <div>
            <p className="mb-3 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
              <span aria-hidden="true" className="size-1.5 bg-gold" />
              04 / notes
            </p>
            <h2 className="font-display text-3xl tracking-[-0.03em]">
              topics on my mind
            </h2>
            <p className="mt-3 max-w-xs font-display text-sm leading-6 text-muted">
              unfinished thoughts, useful reminders, and things i might want to
              come back to.
            </p>
          </div>

          <div>
            {notes.map((note) => {
              const hasContent = Boolean(
                note.paragraphs?.length || note.bullets?.length || note.href,
              );

              if (!hasContent) {
                return (
                  <article
                    key={note.title}
                    className="grid min-h-11 grid-cols-[1fr_auto] items-center gap-4 border-t border-line py-4 first:border-ink"
                  >
                    <h3 className="font-display text-lg sm:text-xl">
                      {note.title}
                    </h3>
                    {note.label && (
                      <span className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-muted">
                        {note.label}
                      </span>
                    )}
                  </article>
                );
              }

              return (
                <details
                  key={note.title}
                  name="portfolio-notes"
                  open={note.openByDefault}
                  className="group border-t border-line first:border-ink"
                >
                  <summary className="grid min-h-11 cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
                    <div>
                      {note.label && (
                        <p className="mb-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-pine">
                          {note.label}
                        </p>
                      )}
                      <h3 className="font-display text-lg sm:text-xl">
                        {note.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-pine">
                      <span className="group-open:hidden">open +</span>
                      <span className="hidden group-open:inline">close -</span>
                    </span>
                  </summary>
                  <NoteBody note={note} />
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotesPreview;
