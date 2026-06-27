'use client';

import {useLocale, useTranslations} from 'next-intl';
import {Award, CalendarCheck, FlaskConical, GraduationCap, MessageCircle, Star, Users} from 'lucide-react';
import {Section, SectionHeader} from '../ui/Section';
import Reveal from '../ui/Reveal';
import Counter from '../ui/Counter';
import Button from '../ui/Button';

export default function HomeSections() {
  const t = useTranslations('home');
  const locale = useLocale();

  const features = [
    {icon: FlaskConical, title: t('features.lab'), text: t('features.labText')},
    {icon: GraduationCap, title: t('features.method'), text: t('features.methodText')},
    {icon: MessageCircle, title: t('features.follow'), text: t('features.followText')}
  ];

  return (
    <div id="home-sections">
      <Section className="bg-slate-50 dark:bg-slate-900">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {[
            [16, '+', t('stats.years')],
            [4500, '+', t('stats.students')],
            [98, '%', t('stats.success')]
          ].map(([num, suffix, label], i) => (
            <Reveal key={String(label)} delay={i * 0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:rounded-3xl sm:p-8">
                <p className="text-4xl font-black text-chemistry-purple sm:text-5xl"><Counter to={Number(num)} suffix={String(suffix)} /></p>
                <p className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-400 sm:mt-3 sm:text-base">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={t('whyEyebrow')} title={t('whyTitle')} subtitle={t('whySubtitle')} />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {features.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-chemistry-purple/50 sm:rounded-3xl sm:p-8">
                <div className="mb-4 grid size-12 place-items-center rounded-xl bg-chemistry-purple/10 text-chemistry-purple sm:mb-6 sm:size-14 sm:rounded-2xl">
                  <item.icon />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-3 sm:text-base">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-900 text-white dark:bg-slate-950">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <div>
              <p className="text-sm font-bold text-chemistry-teal sm:text-base">{t('ctaEyebrow')}</p>
              <h2 className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl lg:text-5xl">{t('ctaTitle')}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-lg sm:leading-8">{t('ctaText')}</p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <Button href={`/${locale}/booking`}><CalendarCheck className="me-2 size-4 sm:size-5" />{t('ctaBook')}</Button>
                <Button href={`/${locale}/testimonials`} variant="secondary"><Star className="me-2 size-4 sm:size-5" />{t('ctaReviews')}</Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[Award, Users, FlaskConical, GraduationCap].map((Icon, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur sm:rounded-3xl sm:p-6">
                  <Icon className="mb-3 size-6 text-chemistry-teal sm:mb-4 sm:size-7" />
                  <p className="text-sm font-bold sm:text-base">{t(`ctaCards.${i}`)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}