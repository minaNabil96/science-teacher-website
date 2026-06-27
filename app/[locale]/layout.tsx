import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import Navbar from '@/app/components/sections/Navbar';
import Footer from '@/app/components/sections/Footer';
import Providers from '@/app/components/providers/Providers';
import HtmlLang from '@/app/components/providers/HtmlLang';

const locales = ['ar', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!locales.includes(params.locale)) notFound();

  const messages = (await import(`../locales/${params.locale}.json`)).default;
  const dir = params.locale === 'ar' ? 'rtl' : 'ltr';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: messages.teacher.name,
    jobTitle: 'Science Teacher',
    telephone: '+201001234567',
    email: 'teacher@example.com',
    knowsAbout: ['Science', 'High school education', 'General science'],
    sameAs: ['https://facebook.com', 'https://youtube.com', 'https://instagram.com']
  };

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <Providers>
        <HtmlLang locale={params.locale} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
        <Navbar locale={params.locale} />
        {children}
        <Footer />
      </Providers>
    </NextIntlClientProvider>
  );
}
