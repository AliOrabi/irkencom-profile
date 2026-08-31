import { NavItem } from '@/types';

// Supabase mock fetcher interface
export const fetchMainNav = async (): Promise<NavItem[]> => {
  return mainNav;
};

export interface FooterNavConfig {
  platform: NavItem[];
  corporate: NavItem[];
  legal: NavItem[];
}

export const fetchFooterNav = async (): Promise<FooterNavConfig> => {
  return footerNav;
};

// Static export for client components
export const mainNav: NavItem[] = [
  {
    id: 'nav-how-it-works',
    label: { en: 'How It Works', ar: 'كيف نعمل' },
    href: '/how-it-works',
    order: 1,
  },
  {
    id: 'nav-about',
    label: { en: 'About Us', ar: 'من نحن' },
    href: '/about',
    order: 2,
  },
  {
    id: 'nav-insights',
    label: { en: 'Insights', ar: 'المقالات' },
    href: '/insights',
    order: 3,
  },
  {
    id: 'nav-contact',
    label: { en: 'Contact', ar: 'تواصل معنا' },
    href: '/contact',
    order: 4,
  },
];

export const footerNav = {
  platform: [
    { id: 'f-plat-1', label: { en: 'Why Irken', ar: 'لماذا إركن' }, href: '/#why-operators', order: 1 },
    { id: 'f-plat-2', label: { en: 'How It Works', ar: 'كيف نعمل' }, href: '/how-it-works', order: 2 },
    { id: 'f-plat-3', label: { en: 'Yield Calculator', ar: 'حاسبة مضاعفة العائد' }, href: '/#yield-calculator', order: 3 },
    { id: 'f-plat-4', label: { en: 'Operator Onboarding', ar: 'تسجيل موقف جديد' }, href: '/#operator-onboard', order: 4 },
    { id: 'f-plat-5', label: { en: 'Driver App (irken.eg)', ar: 'تطبيق السائقين (irken.eg)' }, href: 'https://irken.eg', order: 5 },
  ] as NavItem[],
  corporate: [
    { id: 'f-corp-1', label: { en: 'About Irken', ar: 'عن إركن' }, href: '/about', order: 1 },
    { id: 'f-corp-2', label: { en: 'Insights & News', ar: 'الرؤى والمقالات' }, href: '/insights', order: 2 },
    { id: 'f-corp-3', label: { en: 'Contact & Support', ar: 'التواصل والدعم' }, href: '/contact', order: 3 },
  ] as NavItem[],
  legal: [
    { id: 'f-leg-1', label: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' }, href: '/privacy', order: 1 },
    { id: 'f-leg-2', label: { en: 'Operator Terms', ar: 'شروط المشغلين والشركاء' }, href: '/terms', order: 2 },
    { id: 'f-leg-3', label: { en: 'Cookie Policy', ar: 'سياسة ملفات الارتباط' }, href: '/cookies', order: 3 },
  ] as NavItem[]
};
