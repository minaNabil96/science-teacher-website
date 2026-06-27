'use client';

import {createContext, useContext, useEffect, useState} from 'react';
import {Toaster} from 'sonner';

type Theme = 'light' | 'dark';

const ThemeCtx = createContext<{theme: Theme; toggle: () => void}>({
  theme: 'light',
  toggle: () => {}
});

export const useTheme = () => useContext(ThemeCtx);

export default function Providers({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const preferred = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferred);
    document.documentElement.classList.toggle('dark', preferred === 'dark');
    setMounted(true);
  }, []);

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  }

  return (
    <ThemeCtx.Provider value={{theme, toggle}}>
      {children}
      {mounted && <Toaster richColors position="top-center" theme={theme} />}
    </ThemeCtx.Provider>
  );
}