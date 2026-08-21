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
    id: 'nav-home',
    label: { en: 'Home', ar: 'الرئيسية' },
    href: '/',
    order: 1,
  },
  {
    id: 'nav-solutions',
    label: { en: 'Solutions', ar: 'الحلول' },
    order: 2,
    subItems: [
      { id: 'sub-operators', label: { en: 'For Parking Operators', ar: 'لمشغلي المواقف والجراجات' }, href: '/services/operators', order: 1 },
      { id: 'sub-real-estate', label: { en: 'For Real Estate Developers', ar: 'للمطورين العقاريين' }, href: '/services/real-estate', order: 2 },
      { id: 'sub-municipalities', label: { en: 'For Municipalities', ar: 'للهيئات والمدن الذكية' }, href: '/services/municipalities', order: 3 },
    ]
  },
  {
    id: 'nav-pricing',
    label: { en: 'Pricing', ar: 'الأسعار' },
    href: '/pricing',
    order: 3,
  },
  {
    id: 'nav-technology',
    label: { en: 'Technology', ar: 'التقنية والتوافق' },
    href: '/technology',
    order: 4,
  },
  {
    id: 'nav-insights',
    label: { en: 'Insights', ar: 'المقالات' },
    href: '/insights',
    order: 5,
  },
  {
    id: 'nav-about',
    label: { en: 'About Us', ar: 'من نحن' },
    href: '/about',
    order: 6,
  },
];

export const footerNav = {
  platform: [
    { id: 'f-plat-1', label: { en: 'For Parking Operators', ar: 'لمشغلي المواقف' }, href: '/services/operators', order: 1 },
    { id: 'f-plat-2', label: { en: 'For Real Estate Developers', ar: 'للمطورين العقاريين' }, href: '/services/real-estate', order: 2 },
    { id: 'f-plat-3', label: { en: 'For Municipalities', ar: 'للهيئات والمدن الذكية' }, href: '/services/municipalities', order: 3 },
    { id: 'f-plat-4', label: { en: 'Technology & Hardware', ar: 'التقنية والتوافق الفني' }, href: '/technology', order: 4 },
    { id: 'f-plat-5', label: { en: 'Revenue Yield Simulator', ar: 'حاسبة مضاعفة العائد' }, href: '/#yield-calculator', order: 5 },
  ] as NavItem[],
  corporate: [
    { id: 'f-corp-1', label: { en: 'About Irken', ar: 'عن إركن' }, href: '/about', order: 1 },
    { id: 'f-corp-2', label: { en: 'Insights & Trends', ar: 'الرؤى والمقالات' }, href: '/insights', order: 2 },
    { id: 'f-corp-3', label: { en: 'Contact & Support', ar: 'التواصل والدعم' }, href: '/contact', order: 3 },
  ] as NavItem[],
  legal: [
    { id: 'f-leg-1', label: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' }, href: '/privacy', order: 1 },
    { id: 'f-leg-2', label: { en: 'Enterprise Terms', ar: 'شروط خدمات الشركات' }, href: '/terms', order: 2 },
    { id: 'f-leg-3', label: { en: 'Cookie Policy', ar: 'سياسة ملفات الارتباط' }, href: '/cookies', order: 3 },
  ] as NavItem[]
};
