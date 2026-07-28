import { useState } from 'react';

export type Theme = 'rose-pine' | 'rose-pine-dawn';

const themeStorageKey = 'portfolio-theme';

function isTheme(value: string | undefined): value is Theme {
  return value === 'rose-pine' || value === 'rose-pine-dawn';
}

function readTheme(): Theme {
  const theme = document.documentElement.dataset.theme;
  return isTheme(theme) ? theme : 'rose-pine-dawn';
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme =
    theme === 'rose-pine' ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggleTheme = () => {
    const nextTheme =
      theme === 'rose-pine' ? 'rose-pine-dawn' : 'rose-pine';

    applyTheme(nextTheme);
    setTheme(nextTheme);

    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch (error) {
      console.warn('Could not save the theme preference.', error);
    }
  };

  return { theme, toggleTheme };
}
