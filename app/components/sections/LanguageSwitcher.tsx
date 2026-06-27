'use client';

import {usePathname, useRouter} from 'next/navigation';
import {Languages} from 'lucide-react';

export default function LanguageSwitcher({locale}: {locale: string}) {
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale = locale === 'ar' ? 'en' : 'ar';

  function switchLocale() {
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    const nextPath = segments.join('/') || `/${nextLocale}`;
    localStorage.setItem('preferred-locale', nextLocale);
    router.push(nextPath);
  }

  return (
    <button
      onClick={switchLocale}
      className="focus-ring inline-flex min-h-10 items-center gap-1.5 rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-xs font-bold text-slate-700 backdrop-blur transition hover:bg-chemistry-purple/10 hover:text-chemistry-purple dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:min-h-11 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
      aria-label="Switch language"
    >
      <Languages size={16} />
      {nextLocale === 'ar' ? 'العربية' : 'English'}
    </button>
  );
}