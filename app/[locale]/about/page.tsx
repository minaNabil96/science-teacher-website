import {getTranslations} from 'next-intl/server';
import {Award, BookOpen, Building2, FlaskConical, GraduationCap, HeartHandshake} from 'lucide-react';
import {Section, SectionHeader} from '@/app/components/ui/Section';
import Reveal from '@/app/components/ui/Reveal';
import Counter from '@/app/components/ui/Counter';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'about'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function AboutPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'about'});

  const timeline = [
    ['2008', t('timeline.0.title'), t('timeline.0.text'), GraduationCap],
    ['2012', t('timeline.1.title'), t('timeline.1.text'), FlaskConical],
    ['2018', t('timeline.2.title'), t('timeline.2.text'), Building2],
    ['2024', t('timeline.3.title'), t('timeline.3.text'), Award]
  ];

  const cards = [
    [BookOpen, t('philosophy.cards.0.title'), t('philosophy.cards.0.text')],
    [FlaskConical, t('philosophy.cards.1.title'), t('philosophy.cards.1.text')],
    [HeartHandshake, t('philosophy.cards.2.title'), t('philosophy.cards.2.text')]
  ];

  return (
    <main className="pt-20">
      <Section className="bg-slate-900 text-white dark:bg-slate-950">
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {[[16, '+', t('stats.years')], [4500, '+', t('stats.students')], [40, '+', t('stats.certificates')]].map(([n, s, label]) => (
            <div key={String(label)} className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center sm:rounded-3xl sm:p-8">
              <p className="text-4xl font-black text-chemistry-teal sm:text-5xl"><Counter to={Number(n)} suffix={String(s)} /></p>
              <p className="mt-2 text-sm font-bold text-slate-400 sm:mt-3 sm:text-base">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white dark:bg-slate-900">
        <SectionHeader title={t('bioTitle')} subtitle={t('bioText')} />
        <div className="mx-auto max-w-4xl">
          {timeline.map(([year, title, text, Icon], i) => (
            <Reveal key={String(year)} delay={i * 0.08}>
              <div className="relative border-s-4 border-chemistry-purple/20 pb-8 ps-6 last:pb-0 dark:border-chemistry-purple/40 sm:pb-10 sm:ps-8">
                <div className="absolute -start-[14px] grid size-7 place-items-center rounded-full bg-chemistry-purple text-white sm:-start-[18px] sm:size-8">
                  <Icon size={14} />
                </div>
                <p className="text-sm font-black text-chemistry-purple sm:text-base">{year as string}</p>
                <h3 className="mt-1 text-xl font-black text-slate-900 dark:text-white sm:text-2xl">{title as string}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-2 sm:text-base sm:leading-8">{text as string}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title={t('philosophy.title')} subtitle={t('philosophy.subtitle')} />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {cards.map(([Icon, title, text], i) => (
            <Reveal key={String(title)} delay={i * 0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:rounded-3xl sm:p-8">
                <div className="mb-4 grid size-12 place-items-center rounded-xl bg-chemistry-teal/10 text-chemistry-teal sm:mb-5 sm:size-14 sm:rounded-2xl">
                  <Icon />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white sm:text-xl">{title as string}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-3 sm:text-base">{text as string}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50 dark:bg-slate-900">
        <SectionHeader title={t('certTitle')} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {Array.from({length: 8}).map((_, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 sm:rounded-2xl sm:p-5 sm:text-base">
                <span className="mr-1.5 sm:mr-2">🧪</span> {t(`certs.${i}`)}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}