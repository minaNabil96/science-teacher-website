import type {MetadataRoute} from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
const pages = ['', '/about', '/gallery', '/videos', '/testimonials', '/contact', '/booking'];

export default function sitemap(): MetadataRoute.Sitemap {
  return ['ar', 'en'].flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8
    }))
  );
}
