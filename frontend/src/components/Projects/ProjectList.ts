export type Project = {
  title: string;
  status?: string;
  duration?: string;
  description: string;
  github?: string;
  more?: string;
  tech: string[];
  featured?: boolean;
};

const ProjectList: Project[] = [
  {
    title: 'Razz - Ray Tracer, Compiler & Embedded Protocol',
    duration: 'Jan 2026 - now',
    status: 'Building',
    description:
      'A Rust ray tracer that grew into its own small ecosystem: a statically typed scene language, SSA-based compiler work, and a binary protocol for streaming frames to embedded hardware.',
    tech: ['Rust', 'C++', 'Rayon', 'Compilers', 'Embedded'],
    featured: true,
  },
  {
    title: 'JPKernl',
    duration: 'Dec 2025 - Jan 2026',
    status: 'Finished',
    description:
      'A bare-metal Rust kernel for the Raspberry Pi Pico with preemptive round-robin scheduling, ARM context switching, and a sleep syscall.',
    tech: ['Rust', 'ARM Assembly', 'Embedded', 'Scheduling'],
    featured: true,
  },
  {
    title: 'Go Load Manager',
    duration: 'Oct 2025 - Jan 2026',
    status: 'Finished',
    description:
      'An HTTP-to-gRPC load manager with several scheduling strategies, plus a Python harness for benchmarking and plotting how they behave.',
    github: 'https://github.com/sudo-JP/Load-Manager',
    tech: ['Go', 'gRPC', 'Python', 'Matplotlib'],
    featured: true,
  },
  {
    title: 'Custom MySH Shell',
    duration: 'Jan - Apr 2025',
    status: 'Finished',
    description:
      'I wanted to understand Unix a little better, so I rebuilt a small piece of it.',
    tech: ['C', 'Unix System Calls', 'Processes', 'File I/O'],
  },
  {
    title: 'Arch Linux Hyprland',
    duration: 'Apr - Aug 2025',
    status: 'Finished',
    description:
      'The ongoing project of making my computer feel exactly like my computer.',
    more:
      'https://www.reddit.com/r/hyprland/comments/1ni3pl0/started_using_arch_beginning_of_this_summer/',
    tech: ['Bash', 'CSS', 'Python', 'Lua'],
  },
  {
    title: 'Personal Portfolio',
    duration: 'Nov 2025',
    status: 'In Progress',
    description:
      'This little corner of the internet, rebuilt whenever it stops feeling like me.',
    github: 'https://github.com/sudo-JP/JP-Portfolio',
    tech: ['React', 'TypeScript', 'Tailwind'],
  },
];

export default ProjectList;
