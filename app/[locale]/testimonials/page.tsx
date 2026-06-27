import {getTranslations} from 'next-intl/server';
import {Section, SectionHeader} from '@/app/components/ui/Section';
import TestimonialsClient from '@/app/components/sections/TestimonialsClient';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'testimonials'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function TestimonialsPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'testimonials'});
  return (
    <main className="pt-20">
      <Section>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <div className="mx-auto mb-8 w-fit rounded-full bg-chemistry-orange/10 px-5 py-3 font-black text-chemistry-orange">
          {t('badge')}
        </div>
        <TestimonialsClient labels={{
          all: t('all'),
          stars: t('stars'),
          write: t('write'),
          reviewToast: t('reviewToast')
        }} />
      </Section>
    </main>
  );
}