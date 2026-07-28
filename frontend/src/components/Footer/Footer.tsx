import '../../index.css';
import rosePineIcon from '../../assets/rose-pine-icon.svg';

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-6 text-muted transition-colors duration-200">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 text-xs">
        <span>theme inspired by Rosé Pine</span>
        <a
          href="https://rosepinetheme.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit the Rosé Pine website"
          className="inline-flex"
        >
          <img
            src={rosePineIcon}
            alt=""
            className="size-6"
          />
        </a>
      </div>
    </footer>
  );
}
