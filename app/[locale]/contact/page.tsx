import {getTranslations} from 'next-intl/server';
import {Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube} from 'lucide-react';
import {Section, SectionHeader} from '@/app/components/ui/Section';
import ContactForm from '@/app/components/sections/ContactForm';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'contact'});
  return {title: t('title'), description: t('subtitle')};
}

export default async function ContactPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'contact'});
  const methods = [
    [Phone, t('phone'), 'tel:+201001234567', '+20 100 123 4567'],
    [MessageCircle, t('whatsapp'), 'https://wa.me/201001234567?text=I%20want%20to%20book%20a%20science%20lesson', t('whatsappText')],
    [Mail, t('email'), 'mailto:teacher@example.com', 'teacher@example.com'],
    [MapPin, t('location'), '#map', t('address')]
  ];

  return (
    <main className="pt-20">
      <Section>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-8">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
            {methods.map(([Icon, title, href, value]) => (
              <a key={String(title)} href={String(href)} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800 sm:gap-4 sm:rounded-3xl sm:p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-chemistry-purple/10 text-chemistry-purple sm:size-14 sm:rounded-2xl"><Icon size={20} /></span>
                <span className="min-w-0">
                  <span className="block text-sm font-black text-slate-900 dark:text-white sm:text-base">{title as string}</span>
                  <span className="block truncate text-xs text-slate-600 dark:text-slate-400 sm:text-sm">{value as string}</span>
                </span>
              </a>
            ))}
            <div className="flex gap-2 sm:gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid size-10 place-items-center rounded-full bg-slate-900 text-white dark:bg-slate-700 sm:size-12"><Icon size={18} /></a>
              ))}
            </div>
          </div>
          <ContactForm labels={{
            name: t('form.name'),
            email: t('form.email'),
            phone: t('form.phone'),
            grade: t('form.grade'),
            subject: t('form.subject'),
            message: t('form.message'),
            file: t('form.file'),
            send: t('form.send'),
            sending: t('form.sending'),
            success: t('form.success'),
            invalid: t('form.invalid')
          }} />
        </div>
      </Section>

      <section id="map" className="h-[300px] bg-slate-200 dark:bg-slate-800 sm:h-[420px]">
        <iframe
          title="Google map"
          className="h-full w-full border-0"
          loading="lazy"
          src="https://maps.google.com/maps?q=Ismailia%20Egypt&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </section>
    </main>
  );
}