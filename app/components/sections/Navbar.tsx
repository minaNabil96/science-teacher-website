'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {Atom, Menu, Moon, Sun, X} from 'lucide-react';
import {useState} from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import {useTheme} from '../providers/Providers';

export default function Navbar({locale}: {locale: string}) {
  const t = useTranslations('navigation');
  const [open, setOpen] = useState(false);
  const {theme, toggle} = useTheme();

  const links = [
    ['home', `/${locale}`],
    ['about', `/${locale}/about`],
    ['gallery', `/${locale}/gallery`],
    ['videos', `/${locale}/videos`],
    ['testimonials', `/${locale}/testimonials`],
    ['contact', `/${locale}/contact`],
    ['booking', `/${locale}/booking`]
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/55 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/55">
        <nav className="container flex h-16 items-center justify-between sm:h-20">
          <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2 text-slate-900 dark:text-white sm:gap-3">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-chemistry-teal to-chemistry-purple shadow-glow-light dark:shadow-glow sm:size-11 sm:rounded-2xl">
              <Atom className="size-4 text-white sm:size-5" />
            </span>
            <span className="font-black leading-tight text-sm sm:text-base">
              Science
              <span className="block text-[10px] font-semibold text-slate-500 dark:text-slate-300 sm:text-xs">Academy</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map(([key, href]) => (
              <Link key={key} href={href} className="rounded-full px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-chemistry-purple/10 hover:text-chemistry-purple dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-white xl:px-4">
                {t(key)}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={toggle}
              className="grid size-11 place-items-center rounded-full text-slate-600 transition hover:bg-chemistry-purple/10 hover:text-chemistry-purple dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <LanguageSwitcher locale={locale} />
          </div>

          <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
            <button
              onClick={toggle}
              className="grid size-9 place-items-center rounded-full text-slate-600 transition hover:bg-chemistry-purple/10 hover:text-chemistry-purple dark:text-white/85 dark:hover:bg-white/10 dark:hover:text-white sm:size-11"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setOpen(true)} className="focus-ring grid size-9 place-items-center rounded-full bg-chemistry-purple/10 text-chemistry-purple dark:bg-white/10 dark:text-white sm:size-11" aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white/95 p-5 backdrop-blur dark:bg-slate-950/95 sm:p-6">
          <div className="flex shrink-0 items-center justify-between">
            <span className="font-black text-slate-900 dark:text-white">Science Academy</span>
            <button onClick={() => setOpen(false)} className="grid size-11 place-items-center rounded-full bg-chemistry-purple/10 text-chemistry-purple dark:bg-white/10 dark:text-white" aria-label="Close menu">
              <X />
            </button>
          </div>
          <div className="mt-8 grid gap-2 overflow-y-auto sm:mt-10 sm:gap-3">
            {links.map(([key, href]) => (
              <Link onClick={() => setOpen(false)} key={key} href={href} className="rounded-2xl bg-slate-100 p-4 text-lg font-bold text-slate-900 dark:bg-white/10 dark:text-white">
                {t(key)}
              </Link>
            ))}
            <div className="mt-4">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}