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
    href: '/solutions',
    order: 2,
  },
  {
    id: 'nav-services',
    label: { en: 'Services ▾', ar: 'الخدمات ▾' },
    order: 3,
    subItems: [
      { id: 'sub-parking', label: { en: 'Parking Management', ar: 'إدارة المواقف' }, href: '/services/parking-management', order: 1 },
      { id: 'sub-access', label: { en: 'Access Control Systems', ar: 'أنظمة التحكم بالوصول' }, href: '/services/access-control', order: 2 },
      { id: 'sub-lpr', label: { en: 'License Plate Recognition', ar: 'أنظمة التعرف على اللوحات' }, href: '/services/lpr', order: 3 },
      { id: 'sub-calculator', label: { en: 'ROI Calculator', ar: 'حاسبة العائد' }, href: '/services/parking-management/calculate', order: 4 },
    ]
  },
  {
    id: 'nav-insights',
    label: { en: 'Insights', ar: 'الرؤى' },
    href: '/insights',
    order: 4,
  },
  {
    id: 'nav-company',
    label: { en: 'Company ▾', ar: 'الشركة ▾' },
    order: 5,
    subItems: [
      { id: 'sub-about', label: { en: 'About Us', ar: 'من نحن' }, href: '/about', order: 1 },
    ]
  },
  {
    id: 'nav-contact',
    label: { en: 'Contact Us', ar: 'اتصل بنا' },
    href: '/contact',
    order: 6,
  }
];

export const footerNav = {
  platform: [
    { id: 'f-plat-1', label: { en: 'Urban Mobility Ecosystem', ar: 'نظام التنقل الحضري' }, href: '#mobility', order: 1 },
    { id: 'f-plat-2', label: { en: 'Dynamic Capacity Engine', ar: 'محرك السعة الديناميكي' }, href: '#platform', order: 2 },
    { id: 'f-plat-3', label: { en: 'Operator Terminal', ar: 'لوحة المشغلين' }, href: '#platform', order: 3 },
  ] as NavItem[],
  corporate: [
    { id: 'f-corp-1', label: { en: 'Contact Us', ar: 'تواصل معنا' }, href: '/contact', order: 1 },
    { id: 'f-corp-2', label: { en: 'Press & Media', ar: 'الصحافة والإعلام' }, href: '#', order: 2 },
    { id: 'f-corp-3', label: { en: 'Careers', ar: 'الوظائف' }, href: '#', order: 3 },
  ] as NavItem[],
  legal: [
    { id: 'f-leg-1', label: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' }, href: '/privacy', order: 1 },
    { id: 'f-leg-2', label: { en: 'Enterprise Terms', ar: 'شروط خدمات الشركات' }, href: '/terms', order: 2 },
    { id: 'f-leg-3', label: { en: 'Cookie Policy', ar: 'سياسة ملفات الارتباط' }, href: '/cookies', order: 3 },
  ] as NavItem[]
};
