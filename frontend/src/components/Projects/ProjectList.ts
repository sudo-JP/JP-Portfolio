import type { ProjectCardProps } from './ProjectCard.tsx';

const ProjectList: ProjectCardProps[] = [
  {
    title: "Mini-Quant Trading Infrastructure",
    duration: "Sep 27th 2025 - Now", 
    status: "In Progress",
    description: "A multi-threaded trading engine and Rust backend for database orchestration with PostgreSQL, designed for high-throughput and low-latency trading.",
    github: "https://github.com/sudo-jp/stock-trading-trade",
    tech: ["C++", "Rust", "Python", "PostgreSQL", "TCP"]
  },
  {
    title: "Arch Linux Hyprland",
    duration: "Apr 2025 - Aug 2025", 
    status: "Finished",
    description: "My Arch Linux Hyprland setup with Python scripts for a dynamic weather bar using OpenWeatherMap and IP APIs, light/dark mode via symbolic links, and custom Neovim configuration.",
    github: "https://github.com/sudo-jp/stock-trading-trade",
    more: "https://www.reddit.com/r/hyprland/comments/1ni3pl0/started_using_arch_beginning_of_this_summer/",
    tech: ["Bash", "CSS", "Python", "Lua"]
  },
  {
    title: "Custom MySH Shell",
    duration: "Jan 2025 - Apr 2025", 
    status: "Finished", 
    description: "A fully functional terminal emulator supporting 15+ commands with robust error handling and concurrent process execution.",
    tech: ["C", "Unix System Calls", "Processes", "File I/O"]
  },
  {
    title: "Personal Portfolio", 
    duration: "Nov 2025",
    description: "A personal portfolio website with a backend GitHub commit tracker using GraphQL. Built with React, Tailwind, and a Python Flask backend with TinyDB.",
    github: "https://github.com/sudo-JP/JP-Portfolio", 
    tech: ["React TS", "Tailwind", "Python Flask", "TinyDB"]
  },
  {
    title: "Distributed Go Backend Testing", 
    status: "Upcoming", 
    description: "A Go-based backend system for distributed workload testing. Uses Python scripts with Matplotlib to visualize performance and experiment with scheduling algorithms like RR and FCFS.",
    github: "https://github.com/sudo-JP/Load-Manager",  
    tech: ["Go", "Python", "Matplotlib"]
  },
  {
    title: "Photo Sorter from Google Photos", 
    status: "Upcoming", 
    description: "A Go tool that reads downloaded Google Photos images and their JSON metadata, then automatically organizes them into folders by year. Also support converting live images from iOS to JPEG.",
    github: "https://github.com/sudo-JP/Photo-Sorting",  
    tech: ["Go", "JSON", "File I/O"]
  }, 
  {
    title: "Tata Bakery Website", 
    status: "Upcoming", 
    description: "A full-stack website for a local bakery. Built with React TS, Tailwind, and Django to showcase products and manage orders.",
    tech: ["React TS", "Tailwind", "Django", "PostgresQL"]
  }, 
  {
    title: "Tsuki Notes", 
    status: "Upcoming", 
    description: "A collaborative note-taking backend where notes are organized with tags for easy retrieval, enabling fast search and storage using Rust and Java Spring Boot.",
    github: "https://github.com/settings/organizations",  
    tech: ["Rust", "Java", "Spring Boot"]
  }

];

export default ProjectList;
