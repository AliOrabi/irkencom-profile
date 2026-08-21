export type BlogPost = {
  slug: string;
  date: string;
  title: {
    en: string;
    ar: string;
  };
  excerpt: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  imageUrl: string;
  category: {
    en: string;
    ar: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'future-of-smart-parking-egypt',
    date: '2026-08-10',
    title: {
      en: 'The Future of Smart Parking in Egypt',
      ar: 'مستقبل مواقف السيارات الذكية في مصر',
    },
    excerpt: {
      en: 'How asset-light digital infrastructure is transforming urban mobility and parking operations across Egyptian commercial hubs.',
      ar: 'كيف تعمل البنية التحتية الرقمية المرنة على تحويل التنقل الحضري وإدارة المواقف في المراكز التجارية المصرية.',
    },
    content: {
      en: 'Egypt is experiencing rapid urban mobility transformation... (Full article coming soon)',
      ar: 'تشهد المدن والمراكز التجارية في مصر تحولاً سريعاً نحو حلول التنقل الحضري الذكي... (المقال الكامل قريباً)',
    },
    imageUrl: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=2070&auto=format&fit=crop',
    category: { en: 'Smart City', ar: 'المدن الذكية' },
  },
  {
    slug: 'zero-capex-parking-management',
    date: '2026-08-05',
    title: {
      en: 'Why Zero CapEx is the New Standard for Parking Management',
      ar: 'لماذا يعتبر نموذج (بدون نفقات رأسمالية) المعيار الجديد لإدارة المواقف',
    },
    excerpt: {
      en: 'Stop spending on heavy hardware. Learn how cloud-based integration with existing barrier gates maximizes your yield.',
      ar: 'توقف عن الإنفاق على الأجهزة المكلفة. تعرف على كيف يزيد التكامل السحابي مع البوابات الحالية من عائداتك.',
    },
    content: {
      en: 'Traditional parking systems require massive upfront investment... (Full article coming soon)',
      ar: 'تتطلب أنظمة المواقف التقليدية استثمارات ضخمة مقدماً... (المقال الكامل قريباً)',
    },
    imageUrl: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=2072&auto=format&fit=crop',
    category: { en: 'PropTech', ar: 'التكنولوجيا العقارية' },
  },
  {
    slug: 'lpr-technology-explained',
    date: '2026-07-28',
    title: {
      en: 'Demystifying LPR: How Ticketless Entry Increases Revenue',
      ar: 'تبسيط تقنية قراءة اللوحات (LPR): كيف يزيد الدخول بدون تذاكر من الإيرادات',
    },
    excerpt: {
      en: 'License Plate Recognition (LPR) eliminates ticket jams, cash leakage, and frustrated drivers. Heres how it works.',
      ar: 'تقنية قراءة لوحات السيارات تقضي على مشاكل التذاكر وتسرب النقد. إليك كيف تعمل.',
    },
    content: {
      en: 'LPR technology uses advanced cameras and AI to read license plates... (Full article coming soon)',
      ar: 'تستخدم هذه التقنية كاميرات متقدمة وذكاء اصطناعي لقراءة اللوحات... (المقال الكامل قريباً)',
    },
    imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2070&auto=format&fit=crop',
    category: { en: 'Technology', ar: 'التكنولوجيا' },
  }
];
