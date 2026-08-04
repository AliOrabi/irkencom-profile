'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function IntegrationForm() {
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = language === 'ar' 
      ? '> تم بدء الطلب... تم إبلاغ الفريق الهندسي.' 
      : '> INITIATING REQUEST... ENGINEERING TEAM NOTIFIED.';
    // TODO: implement global system message box state
    alert(msg);
  };

  return (
    <section id="integration" className="py-24 relative border-t border-brand-secondary">
      <div className="max-w-[1280px] mx-auto px-8 w-full relative z-10">
        <div className="flex flex-wrap lg:flex-nowrap gap-16 justify-between items-center">
          
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="What are your parking spaces worth right now?" ar="مواقفك بتكسب كام فعلاً دلوقتي؟" />
            </h2>
            <p className="text-base text-text-secondary max-w-md">
              <Translate
                en="Most operators don't know. Tell us about your facility and we'll show you — for free."
                ar="معظم المشغلين ما بيعرفوش. حدّثنا عن منشأتك وهنوريك — مجاناً."
              />
            </p>
          </div>

          <div className="flex-1 min-w-[320px] max-w-lg w-full border border-brand-secondary bg-brand-secondary/30 p-8 backdrop-blur-md">
            <div className="font-enHeading text-lg text-text-highlight mb-8 pb-4 border-b border-dashed border-text-secondary">
              <Translate en="Get Your Free Assessment" ar="احصل على تقييم مجاني" />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-enHeading text-xs text-text-secondary uppercase tracking-widest mb-2">
                  <Translate en="Company / Institution Name" ar="اسم الشركة / المؤسسة" />
                </label>
                <input 
                  type="text" 
                  className="w-full bg-brand-primary/80 border border-text-secondary text-text-primary px-4 py-3 font-enBody text-base outline-none transition-colors focus:border-brand-accent focus:shadow-[inset_4px_0_0_#64FFDA] rtl:focus:shadow-[inset_-4px_0_0_#64FFDA]" 
                  required 
                  placeholder={language === 'ar' ? 'مثال: شركة التطوير العقاري' : 'e.g. Acme Developments'} 
                />
              </div>
              
              <div>
                <label className="block font-enHeading text-xs text-text-secondary uppercase tracking-widest mb-2">
                  <Translate en="Sector Type" ar="نوع القطاع" />
                </label>
                <div className="relative">
                  <select className="w-full bg-brand-primary/80 border border-text-secondary text-text-primary px-4 py-3 font-enBody text-base outline-none transition-colors focus:border-brand-accent focus:shadow-[inset_4px_0_0_#64FFDA] rtl:focus:shadow-[inset_-4px_0_0_#64FFDA] appearance-none" required defaultValue="">
                    <option value="" disabled>
                      {language === 'ar' ? 'اختر القطاع' : 'Select Sector'}
                    </option>
                    <option value="developer">
                      {language === 'ar' ? 'مطور عقاري' : 'Real Estate Developer'}
                    </option>
                    <option value="municipality">
                      {language === 'ar' ? 'جهة حكومية / بلدية' : 'Municipality / Gov'}
                    </option>
                    <option value="operator">
                      {language === 'ar' ? 'مشغل مواقف / مركز تجاري' : 'Mall / Parking Operator'}
                    </option>
                  </select>
                  <div className="absolute top-1/2 -translate-y-1/2 right-4 rtl:right-auto rtl:left-4 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8892B0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-enHeading text-xs text-text-secondary uppercase tracking-widest mb-2">
                  <Translate en="Total Static Capacity (Approximate Spaces)" ar="السعة الثابتة الإجمالية (عدد المواقف التقريبي)" />
                </label>
                <input 
                  type="number" 
                  className="w-full bg-brand-primary/80 border border-text-secondary text-text-primary px-4 py-3 font-enBody text-base outline-none transition-colors focus:border-brand-accent focus:shadow-[inset_4px_0_0_#64FFDA] rtl:focus:shadow-[inset_-4px_0_0_#64FFDA]" 
                  required 
                  placeholder={language === 'ar' ? 'مثال: 500' : 'e.g. 500'} 
                />
              </div>

              <div>
                <label className="block font-enHeading text-xs text-text-secondary uppercase tracking-widest mb-2">
                  <Translate en="Work Email" ar="البريد الإلكتروني للعمل" />
                </label>
                <input 
                  type="email" 
                  className="w-full bg-brand-primary/80 border border-text-secondary text-text-primary px-4 py-3 font-enBody text-base outline-none transition-colors focus:border-brand-accent focus:shadow-[inset_4px_0_0_#64FFDA] rtl:focus:shadow-[inset_-4px_0_0_#64FFDA]" 
                  required 
                  placeholder="contact@company.com" 
                />
              </div>

              <button type="submit" className="btn-primary w-full mt-2">
                <Translate en="Book a Consultation" ar="احجز استشارة" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
