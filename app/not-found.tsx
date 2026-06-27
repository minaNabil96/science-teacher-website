'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';

export default function RootNotFound() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('preferred-locale');
    if (saved === 'ar' || saved === 'en') setLocale(saved);
  }, []);

  return (
    <main className="grid min-h-screen place-items-center bg-white p-6 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="max-w-md text-center">
        <p className="text-6xl font-black text-chemistry-teal sm:text-7xl">404</p>
        <h1 className="mt-3 text-2xl font-bold sm:mt-4 sm:text-3xl">
          {locale === 'ar' ? 'الصفحة غير موجودة' : 'Page not found'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:mt-3 sm:text-base">
          {locale === 'ar' ? 'عذراً، الصفحة التي تبحث عنها غير موجودة.' : 'Sorry, the page you are looking for does not exist.'}
        </p>
        <Link className="mt-6 inline-flex rounded-full bg-chemistry-purple px-6 py-3 text-sm font-semibold text-white sm:mt-8 sm:text-base" href={`/${locale}`}>
          {locale === 'ar' ? 'العودة للرئيسية' : 'Back home'}
        </Link>
      </div>
    </main>
  );
}