import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

const baseUrl = 'https://irken.com.eg';
const locales = ['ar', 'en'];
const routes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/how-it-works', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/insights', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [];

  // Generate localized URLs for all main routes
  routes.forEach((route) => {
    locales.forEach((locale) => {
      staticPages.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    });
  });

  // Dynamic insight blog post URLs
  const blogPages: MetadataRoute.Sitemap = [];
  blogPosts.forEach((post) => {
    locales.forEach((locale) => {
      blogPages.push({
        url: `${baseUrl}/${locale}/insights/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return [...staticPages, ...blogPages];
}
