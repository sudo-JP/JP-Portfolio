import '../../index.css';

function Navbar() {
  const navLinks = [
    { label: 'about', href: '#about-me' },
    { label: 'some work', href: '#experiences' },
    { label: 'projects', href: '#projects' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        <a
          href="#jp"
          className="shrink-0 font-display text-xl leading-none transition-colors hover:text-pine"
        >
          JP
        </a>
        <ul className="flex min-w-0 items-center gap-2 text-xs sm:gap-5 sm:text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative block overflow-hidden px-1.5 py-2.5 text-muted"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
                <span className="relative z-10 whitespace-nowrap transition-colors group-hover:text-ink group-focus-visible:text-ink">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
