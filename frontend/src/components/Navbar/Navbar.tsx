import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './useTheme.ts';
import '../../index.css';

const navLinks = [
  { label: 'about', href: '#about-me' },
  { label: 'work', href: '#experiences' },
  { label: 'projects', href: '#projects' },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'rose-pine';
  const themeName = isDark ? 'Rosé Pine' : 'Rosé Pine Dawn';
  const nextThemeName = isDark ? 'Rosé Pine Dawn' : 'Rosé Pine';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-xl transition-colors duration-200">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        <div className="flex min-w-0 items-center gap-3 sm:gap-6">
          <a
            href="#jp"
            className="shrink-0 font-display text-xl leading-none transition-colors hover:text-pine"
          >
            JP
          </a>
          <ul className="flex min-w-0 items-center gap-1 text-xs sm:gap-4 sm:text-sm">
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
                  <span className="relative z-10 whitespace-nowrap transition-colors group-hover:text-on-gold group-focus-visible:text-on-gold">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span
            key={theme}
            className="theme-name-enter hidden font-mono text-[0.62rem] uppercase tracking-[0.08em] text-muted sm:inline"
          >
            {themeName}
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextThemeName}`}
            title={`Switch to ${nextThemeName}`}
            className="grid size-10 place-items-center border border-line text-muted transition-colors hover:border-pine hover:text-pine cursor-pointer"
          >
            {isDark ? (
              <FaSun aria-hidden="true" size={16} />
            ) : (
              <FaMoon aria-hidden="true" size={15} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
