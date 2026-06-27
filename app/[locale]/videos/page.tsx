import {getTranslations} from 'next-intl/server';
import {Section, SectionHeader} from '@/app/components/ui/Section';
import VideosClient from '@/app/components/sections/VideosClient';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'videos'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function VideosPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'videos'});
  return (
    <main className="pt-20">
      <Section>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <VideosClient labels={{featured: t('featured'), topics: [t('topics.0'), t('topics.1'), t('topics.2'), t('topics.3')]}} />
      </Section>
    </main>
  );
}
