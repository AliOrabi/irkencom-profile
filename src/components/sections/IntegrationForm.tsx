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
    <section id="integration" className="section">
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xl)', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ marginBottom: '16px' }}>
              <Translate en="Deploy Architecture." ar="نشر البنية التحتية." />
            </h2>
            <p style={{ maxWidth: '400px' }}>
              <Translate 
                en="Request an infrastructure assessment to integrate your physical assets with our digital ecosystem." 
                ar="اطلب تقييم البنية التحتية لدمج أصولك الفيزيائية مع منظومتنا الرقمية." 
              />
            </p>
          </div>

          <div className="form-container" style={{ flex: 1, minWidth: '320px' }}>
            <div style={{ fontFamily: 'var(--font-en-heading)', fontSize: '18px', color: 'var(--brand-text-highlight)', marginBottom: '24px', borderBottom: '1px dashed var(--brand-text-secondary)', paddingBottom: '16px' }}>
              <Translate en="Infrastructure Assessment Form" ar="نموذج تقييم البنية التحتية" />
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  <Translate en="Company / Institution Name" ar="اسم الشركة / المؤسسة" />
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  required 
                  placeholder={language === 'ar' ? 'مثال: شركة التطوير العقاري' : 'e.g. Acme Developments'} 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  <Translate en="Sector Type" ar="نوع القطاع" />
                </label>
                <select className="form-control" required defaultValue="">
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
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Translate en="Total Static Capacity (Approximate Spaces)" ar="السعة الثابتة الإجمالية (عدد المواقف التقريبي)" />
                </label>
                <input 
                  type="number" 
                  className="form-control" 
                  required 
                  placeholder={language === 'ar' ? 'مثال: 500' : 'e.g. 500'} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Translate en="Work Email" ar="البريد الإلكتروني للعمل" />
                </label>
                <input 
                  type="email" 
                  className="form-control" 
                  required 
                  placeholder="contact@company.com" 
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                <Translate en="Initialize Request" ar="تهيئة الطلب" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
