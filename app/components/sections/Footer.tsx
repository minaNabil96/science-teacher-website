'use client';

import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {Facebook, Instagram, Mail, MapPin, Phone, Youtube} from 'lucide-react';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');

  return (
    <footer className="bg-slate-900 text-white dark:bg-slate-950">
      <div className="container grid gap-10 py-12 sm:grid-cols-2 sm:py-14 md:grid-cols-3">
        <div className="sm:col-span-2 md:col-span-1">
          <h2 className="text-xl font-black sm:text-2xl">Science Academy</h2>
          <p className="mt-3 max-w-sm text-sm text-slate-400 sm:mt-4 sm:text-base">{t('description')}</p>
          <div className="mt-5 flex gap-3 sm:mt-6">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-chemistry-purple sm:size-11">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold sm:text-base">{t('links')}</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-400 sm:mt-4 sm:text-base">
            <Link href={`/${locale}/about`} className="transition hover:text-white">{t('about')}</Link>
            <Link href={`/${locale}/gallery`} className="transition hover:text-white">{t('gallery')}</Link>
            <Link href={`/${locale}/booking`} className="transition hover:text-white">{t('booking')}</Link>
            <Link href={`/${locale}/contact`} className="transition hover:text-white">{t('contact')}</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold sm:text-base">{t('contact')}</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-400 sm:mt-4 sm:gap-3 sm:text-base">
            <a className="flex items-center gap-2 transition hover:text-white" href="tel:+201001234567"><Phone size={16} /> +20 100 123 4567</a>
            <a className="flex items-center gap-2 break-all transition hover:text-white" href="mailto:teacher@example.com"><Mail size={16} /> teacher@example.com</a>
            <p className="flex items-center gap-2"><MapPin size={16} /> Cairo, Egypt</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500 sm:text-sm">
        © {new Date().getFullYear()} Science Academy. All rights reserved.
      </div>
    </footer>
  );
}