import {getTranslations} from 'next-intl/server';
import {Section, SectionHeader} from '@/app/components/ui/Section';
import BookingClient from '@/app/components/sections/BookingClient';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'booking'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function BookingPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'booking'});
  const keys = [
    'step1','step2','step3','step4','step5','chooseType','chooseDate','chooseTime','studentDetails','confirm',
    'individual','group','online','inperson','priceIndividual','priceGroup','priceOnline','priceInperson',
    'next','back','studentName','parentPhone','grade','notes','typeLabel','dateLabel','timeLabel','priceLabel',
    'payment','confirmBooking','confirmed'
  ];
  const labels = Object.fromEntries(keys.map((k) => [k, t(k)]));
  return (
    <main className="pt-20">
      <Section>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <BookingClient labels={labels} />
      </Section>
    </main>
  );
}
