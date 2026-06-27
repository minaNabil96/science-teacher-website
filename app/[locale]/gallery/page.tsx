import {getTranslations} from 'next-intl/server';
import {Section, SectionHeader} from '@/app/components/ui/Section';
import GalleryClient from '@/app/components/sections/GalleryClient';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'gallery'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function GalleryPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'gallery'});
  return (
    <main className="pt-20">
      <Section>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <GalleryClient labels={{
          all: t('filters.all'),
          classroom: t('filters.classroom'),
          lab: t('filters.lab'),
          events: t('filters.events'),
          success: t('filters.success'),
          download: t('download'),
          share: t('share'),
          shared: t('shared')
        }} />
      </Section>
    </main>
  );
}
