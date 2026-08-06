'use client';

import React, { useState } from 'react';
import Translate from '@/components/ui/Translate';

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 relative border-t border-brand-secondary">
      <div className="max-w-[640px] mx-auto w-full relative z-10 border border-brand-accent/40 bg-brand-secondary/50 p-8 md:p-12 shadow-glow-accent rounded-md">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent shadow-glow-accent-sm rounded-t-md" aria-hidden="true" />
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-4">
            <Translate en="Become a Partner" ar="كن شريكاً" />
          </h2>
          <p className="text-base text-text-secondary">
            <Translate 
              en="Connect your parking inventory to Egypt's #1 reservation engine and maximize your yield." 
              ar="قم بتوصيل مساحات مواقف السيارات الخاصة بك بمحرك الحجز رقم 1 في مصر وحقق أقصى عائد." 
            />
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center border-2 border-brand-accent bg-brand-primary flex flex-col items-center gap-4 rounded-md">
            <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                <polyline points="2 9 8 15 22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-enHeading text-brand-accent mb-2">
              <Translate en="Application Received" ar="تم استلام الطلب" />
            </h3>
            <p className="text-text-secondary text-sm">
              <Translate en="Our integration team will contact you shortly." ar="سيتصل بك فريق التكامل لدينا قريباً." />
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-enHeading tracking-[0.15em] text-text-secondary uppercase mb-1">
                <Translate en="Company / Facility Name" ar="اسم الشركة / المنشأة" />
              </label>
              <input 
                type="text" 
                required 
                className="w-full bg-brand-secondary border border-brand-secondary text-text-primary px-4 py-3 font-enBody text-sm md:text-base outline-none transition-all duration-200 placeholder:text-text-secondary/40 focus:border-brand-accent focus:shadow-[inset_3px_0_0_theme(colors.brand.accent)] rtl:focus:shadow-[inset_-3px_0_0_theme(colors.brand.accent)] hover:border-text-secondary/60 rounded-md" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-enHeading tracking-[0.15em] text-text-secondary uppercase mb-1">
                  <Translate en="Contact Name" ar="اسم جهة الاتصال" />
                </label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-brand-secondary border border-brand-secondary text-text-primary px-4 py-3 font-enBody text-sm md:text-base outline-none transition-all duration-200 placeholder:text-text-secondary/40 focus:border-brand-accent focus:shadow-[inset_3px_0_0_theme(colors.brand.accent)] rtl:focus:shadow-[inset_-3px_0_0_theme(colors.brand.accent)] hover:border-text-secondary/60 rounded-md" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-enHeading tracking-[0.15em] text-text-secondary uppercase mb-1">
                  <Translate en="Email Address" ar="البريد الإلكتروني" />
                </label>
                <input 
                  type="email" 
                  required 
                  className="w-full bg-brand-secondary border border-brand-secondary text-text-primary px-4 py-3 font-enBody text-sm md:text-base outline-none transition-all duration-200 placeholder:text-text-secondary/40 focus:border-brand-accent focus:shadow-[inset_3px_0_0_theme(colors.brand.accent)] rtl:focus:shadow-[inset_-3px_0_0_theme(colors.brand.accent)] hover:border-text-secondary/60 rounded-md" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-enHeading tracking-[0.15em] text-text-secondary uppercase mb-1">
                <Translate en="Estimated Capacity (Spots)" ar="السعة التقديرية (عدد المواقف)" />
              </label>
              <div className="relative">
                <select 
                  className="w-full bg-brand-secondary border border-brand-secondary text-text-primary px-4 py-3 font-enBody text-sm md:text-base outline-none transition-all duration-200 focus:border-brand-accent focus:shadow-[inset_3px_0_0_theme(colors.brand.accent)] rtl:focus:shadow-[inset_-3px_0_0_theme(colors.brand.accent)] hover:border-text-secondary/60 appearance-none cursor-pointer rounded-md"
                  defaultValue=""
                  required
                >
                  <option value="" disabled><Translate en="Select Capacity..." ar="اختر السعة..." /></option>
                  <option value="<50">&lt; 50</option>
                  <option value="50-200">50 - 200</option>
                  <option value="200-500">200 - 500</option>
                  <option value="500+">500+</option>
                </select>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 rtl:right-auto rtl:left-4 pointer-events-none text-text-secondary">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <polyline points="1 1 6 7 11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <button type="submit" className="mt-4 px-8 py-4 bg-brand-accent text-brand-on-accent font-enHeading text-xs uppercase tracking-[0.15em] border-2 border-brand-accent hover:bg-brand-accent-hover hover:border-brand-accent-hover transition-all duration-200 hover:shadow-glow-accent-sm min-h-[44px] rounded-md">
              <Translate en="Submit Partnership Request" ar="إرسال طلب الشراكة" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
