import { ContactChannel } from '@/types';

export const fetchContactChannels = async (): Promise<ContactChannel[]> => {
  return contactChannels;
};

export const contactChannels: ContactChannel[] = [
  {
    id: 'contact-phone',
    type: 'phone',
    label: { en: 'Phone', ar: 'الهاتف' },
    value: '+201222200479',
    displayValue: { en: '+20 1222200479', ar: '+20 1222200479' },
    icon: 'Phone',
    order: 1
  },
  {
    id: 'contact-email',
    type: 'email',
    label: { en: 'Email', ar: 'البريد الإلكتروني' },
    value: 'info@irken.com.eg',
    displayValue: { en: 'info@irken.com.eg', ar: 'info@irken.com.eg' },
    icon: 'Mail',
    order: 2
  },
  {
    id: 'contact-hq',
    type: 'address',
    label: { en: 'Headquarters', ar: 'المقر الرئيسي' },
    value: '1 Mustafa El Nahhas Street, Nasr City, Cairo',
    displayValue: { 
      en: '1 Mustafa El Nahhas Street, intersection with Abbas El Akkad Street, Nasr City, Cairo', 
      ar: '١ شارع مصطفى النحاس، تقاطع مع شارع عباس العقاد، مدينة نصر، القاهرة' 
    },
    icon: 'MapPin',
    order: 3
  }
];
