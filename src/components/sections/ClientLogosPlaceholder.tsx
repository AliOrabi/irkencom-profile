'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { Building2, Hotel, Hospital, Landmark, ShoppingBag } from 'lucide-react';

const SECTOR_PARTNERS = [
  {
    nameEn: "Commercial Real Estate",
    nameAr: "التطوير التجاري",
    icon: <Building2 className="w-4 h-4 text-brand-accent" />,
    labelEn: "SODIC · Emaar · Palm Hills",
    labelAr: "سوديك · إعمار · بالم هيلز"
  },
  {
    nameEn: "Hospitality & Venues",
    nameAr: "الضيافة والفنادق",
    icon: <Hotel className="w-4 h-4 text-brand-accent" />,
    labelEn: "5-Star Valet & Gates",
    labelAr: "خدمات فاليه وبوابات 5 نجوم"
  },
  {
    nameEn: "Healthcare Facilities",
    nameAr: "المنشآت الطبية",
    icon: <Hospital className="w-4 h-4 text-brand-accent" />,
    labelEn: "High-Turnover Parking",
    labelAr: "مواقف عالية التردد"
  },
  {
    nameEn: "Smart City Infrastructure",
    nameAr: "المدن الذكية",
    icon: <Landmark className="w-4 h-4 text-brand-accent" />,
    labelEn: "Municipal Gateways",
    labelAr: "بوابات البلديات الذكية"
  },
  {
    nameEn: "Retail & Malls",
    nameAr: "المراكز التجارية",
    icon: <ShoppingBag className="w-4 h-4 text-brand-accent" />,
    labelEn: "Automated LPR Ingress",
    labelAr: "دخول آلي باللوحات"
  }
];

export default function ClientLogosPlaceholder() {
  return (
    <section className="py-14 bg-slate-50/70 border-y border-slate-100/80">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-8">
            <p className="text-xs font-enHeading font-bold text-slate-400 uppercase tracking-[0.18em]">
              <Translate en="Trusted by Developers & Facility Operators Across MENA" ar="محل ثقة المطورين ومشغلي المنشآت في الشرق الأوسط" />
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {SECTOR_PARTNERS.map((sector, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-200/70 hover:border-brand-accent/40 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-9 h-9 rounded-full bg-slate-50 group-hover:bg-brand-accent/10 flex items-center justify-center transition-colors">
                  {sector.icon}
                </div>
                <span className="text-xs font-bold text-slate-800 font-enHeading">
                  <Translate en={sector.nameEn} ar={sector.nameAr} />
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  <Translate en={sector.labelEn} ar={sector.labelAr} />
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
