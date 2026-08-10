import { Feature, Solution } from '@/types';

export const fetchFeatures = async (): Promise<Feature[]> => {
  return features;
};

export const fetchSolutions = async (): Promise<Solution[]> => {
  return solutions;
};

export const features: Feature[] = [
  {
    id: 'feat-1',
    title: { en: 'Dynamic Pricing', ar: 'تسعير ديناميكي' },
    description: { en: 'Our system analyzes demand patterns and adjusts pricing automatically, maximizing your yield during peak hours.', ar: 'يقوم نظامنا بتحليل أنماط الطلب وتعديل الأسعار تلقائياً، لتعظيم عوائدك خلال ساعات الذروة.' },
    icon: 'Brain',
    order: 1
  },
  {
    id: 'feat-2',
    title: { en: 'Ticketless Entry', ar: 'دخول بدون تذاكر' },
    description: { en: 'AI-powered License Plate Recognition (LPR) gives drivers instant access, eliminating paper tickets and reducing entry bottlenecks.', ar: 'تتيح تقنية التعرف على اللوحات بالذكاء الاصطناعي (LPR) وصولاً فورياً للسائقين، مما يلغي التذاكر الورقية ويقلل طوابير الدخول.' },
    icon: 'ScanLine',
    order: 2
  },
  {
    id: 'feat-3',
    title: { en: 'Live Operational Dashboard', ar: 'لوحة تحكم تشغيلية فورية' },
    description: { en: 'Monitor occupancy, peak hours, and net revenue in real-time. Full operational visibility from a single screen.', ar: 'راقب معدلات الإشغال، وساعات الذروة، وصافي الإيرادات لحظياً. رؤية تشغيلية كاملة من شاشة واحدة.' },
    icon: 'BarChart3',
    order: 3
  },
  {
    id: 'feat-4',
    title: { en: 'Zero CapEx Deployment', ar: 'نشر بدون نفقات رأسمالية' },
    description: { en: 'No heavy hardware or civil works. We integrate directly with your existing barrier gates and cameras, getting you live in days.', ar: 'بدون أجهزة باهظة أو أعمال مدنية. نتكامل مباشرة مع بواباتك وكاميراتك الحالية لتشغيل نظامك خلال أيام.' },
    icon: 'CloudLightning',
    order: 4
  }
];

export const solutions: Solution[] = [
  {
    id: 'sol-3',
    title: { en: 'For Operators', ar: 'لمشغلي المواقف' },
    description: { en: 'Stop losing money to manual errors and cash leakages. Digitize payments, maximize daily turnover, and manage your entire operation from one centralized dashboard.', ar: 'أوقف خسائر الأخطاء اليدوية وتسرب الإيرادات النقدية. قم برقمنة المدفوعات، وضاعف معدلات التشغيل اليومية، وأدر عملياتك بالكامل من لوحة تحكم واحدة.' },
    icon: 'SmartphoneNfc',
    order: 1
  },
  {
    id: 'sol-2',
    title: { en: 'For Real Estate Developers', ar: 'للمطورين العقاريين' },
    description: { en: 'Your parking floors are an untapped asset. Turn them into a steady revenue stream with zero capital expenditure (Zero CapEx) and no operational headaches.', ar: 'طوابق المواقف في عقاراتك هي أصول غير مستغلة. حوّلها لمصدر دخل مستدام بدون أي نفقات رأسمالية (Zero CapEx) وبدون متاعب تشغيلية.' },
    icon: 'Coins',
    order: 2
  },
  {
    id: 'sol-1',
    title: { en: 'For Smart Cities', ar: 'للمدن الذكية' },
    description: { en: 'Gain real-time visibility over your urban parking network. Ease traffic congestion, lower emissions, and modernize city infrastructure without heavy civic works.', ar: 'احصل على رؤية شاملة ولحظية لشبكة المواقف الحضرية. قلل الازدحام المروري، وخفف الانبعاثات، وحدّث البنية التحتية للمدينة بدون أعمال مدنية مكلفة.' },
    icon: 'Building2',
    order: 3
  }
];
