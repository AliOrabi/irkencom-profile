'use client';

import React from 'react';
import Translate from '@/components/ui/Translate';

export default function SolutionsSection() {
  return (
    <section id="solutions" className="section section-border-top">
      <div className="container">
        <div className="section-header">
          <span className="sub-badge">
            <Translate en="Engineered For" ar="تمت هندستها لأجل" />
          </span>
          <h2>
            <Translate en="Sectors We Digitize." ar="القطاعات التي نرقمنها." />
          </h2>
        </div>

        <div className="solutions-grid">
          <div className="feature-card">
            <h3 style={{ marginBottom: '16px' }}>
              <Translate en="Real Estate Developers" ar="المطورين العقاريين" />
            </h3>
            <p>
              <Translate 
                en="Convert underutilized physical spaces in developments into profitable digital assets." 
                ar="تحويل المساحات الفيزيائية غير المستغلة في المشاريع إلى أصول رقمية مربحة." 
              />
            </p>
          </div>
          
          <div className="feature-card">
            <h3 style={{ marginBottom: '16px' }}>
              <Translate en="Municipalities & Smart Cities" ar="البلديات والمدن الذكية" />
            </h3>
            <p>
              <Translate 
                en="Manage urban capacity and reduce traffic congestion caused by cruising." 
                ar="إدارة السعة الحضرية وتقليل الازدحام المروري الناتج عن البحث عن مواقف." 
              />
            </p>
          </div>
          
          <div className="feature-card">
            <h3 style={{ marginBottom: '16px' }}>
              <Translate en="Mall & Parking Operators" ar="مشغلي المراكز والمواقف" />
            </h3>
            <p>
              <Translate 
                en="Reduce physical maintenance costs while managing bookings precisely." 
                ar="تقليل تكاليف الصيانة المادية مع إدارة الحجوزات بدقة عالية." 
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
