export type Project = {
  title: string;
  status?: string;
  duration?: string;
  description: string;
  github?: string;
  more?: string;
  tech: string[];
  context?: string;
  featured?: boolean;
};

const ProjectList: Project[] = [
  {
    title: 'Razz - Ray Tracer, Compiler & Embedded Protocol',
    duration: 'Jan 2026 - now',
    status: 'Building',
    description:
      'Started as a Rust ray tracer, then I added a language, compiler, and an embedded frame protocol because apparently the ray tracer was not enough.',
    github: 'https://github.com/sudo-jp/razz',
    tech: ['Rust', 'C++', 'Rayon', 'Compilers', 'Embedded'],
    featured: true,
  },
  {
    title: 'Laplacian Image Convolution',
    status: 'Finished',
    context: 'school work',
    description:
      'I wrote five CUDA kernels for Laplacian image convolution and tested different ways to split the work and move data. The fastest version uses multiple streams, pinned memory, and coalesced access. It got a 9.54x end-to-end speedup on a 4096x4096 image. I wrote the kernels. The course setup and my partner provided parts of the harness and plots.',
    tech: ['CUDA', 'C', 'GPU'],
    featured: true,
  },
  {
    title: 'Go Load Manager',
    duration: 'Oct 2025 - Jan 2026',
    status: 'Finished',
    description:
      'An HTTP-to-gRPC load manager with a handful of scheduling strategies, plus a Python setup for running benchmarks and plotting the results.',
    github: 'https://github.com/sudo-JP/Load-Manager',
    tech: ['Go', 'gRPC', 'Python', 'Matplotlib'],
    featured: true,
  },
  {
    title: 'JPKernl',
    duration: 'Dec 2025 - Jan 2026',
    status: 'Finished',
    description:
      'A tiny Rust kernel for the Raspberry Pi Pico with a round-robin scheduler, ARM context switching, and a sleep syscall.',
    github: 'https://github.com/sudo-jp/jpkernl',
    tech: ['Rust', 'ARM Assembly', 'Embedded', 'Scheduling'],
    featured: false,
  },
  {
    title: 'Custom MySH Shell',
    duration: 'Jan - Apr 2025',
    status: 'Finished',
    context: 'school work',
    description:
      'A small shell in C with pipes, redirection, processes, some other Unix system calls, and a basic chat feature over the network.',
    tech: ['C', 'Unix System Calls', 'Networking', 'Processes'],
    featured: false,
  },
  {
    title: 'Dynamo Mobility',
    duration: 'May - Aug 2025',
    status: 'Finished',
    context: 'school work',
    description:
      'A school project around traffic simulation, road data, and deploying the pipeline to a Jetson Nano.',
    tech: ['Python', 'SUMO', 'SQLite', 'Jetson Nano'],
    featured: false,
  },
  {
    title: 'Arch Linux Hyprland',
    duration: 'Apr - Aug 2025',
    status: 'Finished',
    description:
      'My Arch and Hyprland setup, plus a bunch of scripts and config I keep changing whenever I get bored.',
    more:
      'https://www.reddit.com/r/hyprland/comments/1ni3pl0/started_using_arch_beginning_of_this_summer/',
    tech: ['Bash', 'CSS', 'Python', 'Lua'],
    featured: false,
  },
  {
    title: 'Personal Portfolio',
    duration: 'Nov 2025',
    status: 'In Progress',
    description: 'My personal site.',
    github: 'https://github.com/sudo-JP/JP-Portfolio',
    tech: ['React', 'TypeScript', 'Tailwind'],
    featured: false,
  },
];

export default ProjectList;
