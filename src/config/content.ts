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
    title: { en: 'Prices that adjust themselves.', ar: 'أسعار بتتعدل لوحدها.' },
    description: { en: 'Our system reads demand patterns and adjusts pricing automatically — so you earn more during busy hours without doing anything.', ar: 'النظام بيقرأ الطلب ويضبط الأسعار تلقائياً — فبتكسب أكثر في ساعات الذروة من غير ما تتدخل.' },
    icon: 'Brain',
    order: 1
  },
  {
    id: 'feat-2',
    title: { en: 'In and out. No stops.', ar: 'دخول وخروج. بدون وقوف.' },
    description: { en: 'Our camera-based system reads license plates and gives drivers instant access — no tickets, no barriers slowing things down.', ar: 'النظام بيقرأ اللوحات بالكاميرات ويدي السائقين وصول فوري — بدون تذاكر وبدون أي تأخير.' },
    icon: 'ScanLine',
    order: 2
  },
  {
    id: 'feat-3',
    title: { en: 'See everything. In real-time.', ar: 'شوف كل حاجة. لحظة بلحظة.' },
    description: { en: 'Your dashboard shows occupancy, peak hours, and revenue — updated live, so you always know what\'s happening in your facility.', ar: 'لوحة التحكم بتعرض الإشغال وساعات الذروة والإيرادات — محدّثة لحظياً، عشان دايماً تعرف إيه اللي بيحصل.' },
    icon: 'BarChart3',
    order: 3
  },
  {
    id: 'feat-4',
    title: { en: 'Up and running. Fast.', ar: 'جاهز للشغل. بسرعة.' },
    description: { en: 'No civil works. No downtime. We connect to your existing infrastructure and have you live in days, not months.', ar: 'بدون أعمال مدنية. بدون توقف. بنتصل ببنيتك الموجودة وبنخليك شغّال في أيام.' },
    icon: 'CloudLightning',
    order: 4
  }
];

export const solutions: Solution[] = [
  {
    id: 'sol-1',
    title: { en: 'For Smart Cities', ar: 'للمدن الذكية' },
    description: { en: 'Give your city real-time visibility over every parking space — so traffic flows better, emissions drop, and residents stop wasting time searching.', ar: 'خلّي مدينتك تشوف كل موقف في الوقت الحقيقي — عشان المرور ينسجم، الانبعاثات تنخفض، والناس تبطّل تدور.' },
    icon: 'Building2',
    order: 1
  },
  {
    id: 'sol-2',
    title: { en: 'For Developers', ar: 'للمطورين العقاريين' },
    description: { en: 'Your parking floors are an asset, not a liability. We turn them into a steady income stream — with no hardware investment and no operational headaches.', ar: 'طوابق موقفك أصل، مش عبء. بنحوّلهم لمصدر دخل منتظم — بدون استثمار في أجهزة وبدون متاعب تشغيلية.' },
    icon: 'Coins',
    order: 2
  },
  {
    id: 'sol-3',
    title: { en: 'For Operators', ar: 'لمشغلي المواقف' },
    description: { en: 'Stop losing money to manual errors and cash handling. Digitize payments, automate reports, and manage your whole operation from one screen.', ar: 'بطّل تخسر بسبب الأخطاء اليدوية والكاش. رقمّن المدفوعات، أتمت التقارير، وأدر كل شغلك من شاشة واحدة.' },
    icon: 'SmartphoneNfc',
    order: 3
  }
];
