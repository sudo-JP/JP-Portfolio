export type NoteEntry = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  label?: string;
  href?: string;
  openByDefault?: boolean;
};

const NoteList: NoteEntry[] = [
  {
    title: 'What Razz keeps teaching me',
    label: 'project notes',
    paragraphs: [
      'Mostly reminders for future me from a project that keeps finding new layers.',
    ],
    bullets: [
      'Measure first; intuition gets unreliable once the renderer grows.',
      'Keep protocols simple enough to inspect when the hardware disagrees.',
      'Every compiler stage has a way of exposing assumptions from the last one.',
    ],
    openByDefault: true,
  },
  {
    title: 'Compiler structures I want to revisit',
    label: 'compilers',
    bullets: [
      'SSA construction without treating the paper like magic.',
      'Control-flow structurization with clearer BFS and DFS trade-offs.',
      'Rust HIR code generation once the earlier stages settle down.',
    ],
  },
  {
    title: 'Things I learned writing a tiny kernel',
    label: 'low level',
    paragraphs: [
      'Context switching makes ordinary function calls feel luxurious. Debugging without a normal runtime also teaches you exactly how much machinery you usually take for granted.',
    ],
  },
  {
    title: 'Consistency is the actual project',
    label: 'life lately',
    paragraphs: [
      'Building regularly has taught me the same lesson as training: progress is usually less dramatic than it looks from the outside. Showing up often is what makes the difficult parts stop feeling mysterious.',
    ],
  },
];

export default NoteList;
