'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {useLocale, useTranslations} from 'next-intl';
import Button from '../ui/Button';
import {ChevronDown} from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const symbols = ['C', 'H', 'O', 'N', 'Na', 'Cl'];

  return (
    <section className="chemistry-pattern relative min-h-screen overflow-hidden bg-hero-gradient-light pt-28 text-slate-900 dark:bg-hero-gradient-dark dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(20,184,166,.12),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(249,115,22,.10),transparent_25%)] dark:bg-[radial-gradient(circle_at_70%_20%,rgba(20,184,166,.25),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(249,115,22,.20),transparent_25%)]" />

      {symbols.map((s, i) => (
        <motion.div
          key={s}
          className="absolute hidden rounded-full border border-chemistry-teal/30 bg-white/70 px-3 py-1.5 text-base font-black text-chemistry-teal shadow-sm backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white sm:px-4 sm:py-2 sm:text-xl md:block"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: [0, -18, 0]}}
          transition={{delay: i * 0.15, duration: 4 + i * 0.3, repeat: Infinity}}
          style={{left: `${10 + i * 14}%`, top: `${22 + (i % 3) * 18}%`}}
        >
          {s}
        </motion.div>
      ))}

      <div className="container relative grid min-h-[calc(100vh-7rem)] items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {transition: {staggerChildren: 0.12}}
          }}
        >
          <motion.p variants={{hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0}}} className="mb-4 inline-flex rounded-full bg-chemistry-teal/10 px-4 py-2 text-sm font-bold text-chemistry-teal backdrop-blur dark:bg-white/10 sm:text-base">
            {t('badge')}
          </motion.p>
          <motion.h1 variants={{hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0}}} className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            {t('welcome')}
          </motion.h1>
          <motion.p variants={{hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0}}} className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
            {t('subtitle')}
          </motion.p>
          <motion.div variants={{hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0}}} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button href={`/${locale}/booking`}>{t('book')}</Button>
            <Button href={`/${locale}/about`} variant="secondary">{t('about')}</Button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{y: [0, -14, 0]}}
          transition={{duration: 4, repeat: Infinity, ease: 'easeInOut'}}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
        >
          <div className="absolute inset-0 rounded-full bg-chemistry-teal/30 blur-[80px] dark:bg-chemistry-teal/40" />
          <div className="relative mx-auto aspect-square w-3/4 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_0_0_4px_rgba(20,184,166,.25)] dark:border-slate-800 dark:shadow-[0_0_0_4px_rgba(20,184,166,.4)] sm:w-2/3 lg:w-[85%]">
            <Image
              src="/images/teacher.jpg"
              fill
              alt={t('teacherAlt')}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#home-sections"
        aria-label="Scroll"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full bg-chemistry-purple/10 p-3 text-chemistry-purple backdrop-blur dark:bg-white/10 dark:text-white sm:grid"
        animate={{y: [0, 8, 0]}}
        transition={{duration: 1.4, repeat: Infinity}}
      >
        <ChevronDown />
      </motion.a>
    </section>
  );
}