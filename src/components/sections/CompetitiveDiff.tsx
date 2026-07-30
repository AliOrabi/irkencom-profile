'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

export default function CompetitiveDiff() {
  return (
    <section className="section diff-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto var(--space-xl) auto' }}>
          <h2>
            <Translate en="The Competitive Advantage" ar="الميزة التنافسية" />
          </h2>
          <p>
            <Translate 
              en="Why enterprise leaders choose algorithmic accuracy over physical constraints." 
              ar="لماذا يختار قادة الأعمال الدقة الخوارزمية بدلاً من القيود الفيزيائية." 
            />
          </p>
        </div>

        <div className="diff-grid">
          <div className="diff-panel diff-panel-legacy">
            <div className="diff-tag" style={{ color: 'var(--brand-text-secondary)' }}>
              <Translate en="LEGACY SYSTEM" ar="النظام القديم" />
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>
              <Translate en="Binary Toggles & Hardware" ar="المستشعرات والأجهزة القديمة" />
            </h3>
            <p>
              <Translate 
                en="Traditional management relies on expensive physical sensors. This causes high maintenance costs and inaccurate reporting." 
                ar="تعتمد الإدارة التقليدية على مستشعرات فيزيائية مكلفة. يؤدي هذا لارتفاع تكاليف الصيانة وعدم دقة التقارير." 
              />
            </p>
          </div>
          
          <div className="diff-panel diff-panel-irken">
            <div className="diff-tag" style={{ color: 'var(--brand-accent)', borderColor: 'var(--brand-accent)' }}>
              <Translate en="IRKEN ARCHITECTURE" ar="معمارية إيركن" />
            </div>
            <h3 style={{ fontSize: '24px', color: 'var(--brand-text-highlight)', marginBottom: '16px' }}>
              <Translate en="Dynamic Capacity Calculation" ar="الحساب الديناميكي للسعة" />
            </h3>
            <p style={{ color: 'var(--brand-text-primary)' }}>
              <Translate 
                en="Availability is dynamically calculated by measuring total static space against real-time active bookings, ensuring 100% accuracy." 
                ar="يتم حساب التوفر ديناميكياً عن طريق قياس المساحة الثابتة الإجمالية مقابل الحجوزات النشطة الحية، مما يضمن دقة 100%." 
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
