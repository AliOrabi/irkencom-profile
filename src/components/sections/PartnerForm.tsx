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
    <section className="section partner-form-section" style={{ padding: 'var(--space-2xl) 0', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <h2 style={{ marginBottom: 'var(--space-sm)' }}>
            <Translate en="Become a Partner" ar="كن شريكاً" />
          </h2>
          <p style={{ color: 'var(--brand-text-secondary)', fontSize: '1.125rem' }}>
            <Translate 
              en="Connect your parking inventory to Egypt's #1 reservation engine and maximize your yield." 
              ar="قم بتوصيل مساحات مواقف السيارات الخاصة بك بمحرك الحجز رقم 1 في مصر وحقق أقصى عائد." 
            />
          </p>
        </div>

        {submitted ? (
          <div style={{ padding: 'var(--space-xl)', textAlign: 'center', border: '1px solid var(--brand-accent)', backgroundColor: 'rgba(100, 255, 218, 0.05)' }}>
            <h3 style={{ color: 'var(--brand-accent)', marginBottom: 'var(--space-sm)' }}>
              <Translate en="Application Received" ar="تم استلام الطلب" />
            </h3>
            <p style={{ color: 'var(--brand-text-secondary)' }}>
              <Translate en="Our integration team will contact you shortly." ar="سيتصل بك فريق التكامل لدينا قريباً." />
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.875rem', color: 'var(--brand-text-secondary)' }}>
                <Translate en="Company / Facility Name" ar="اسم الشركة / المنشأة" />
              </label>
              <input 
                type="text" 
                required 
                style={{ 
                  padding: '12px', 
                  backgroundColor: 'transparent', 
                  border: '1px solid rgba(255, 255, 255, 0.2)', 
                  color: 'var(--brand-text)',
                  borderRadius: '0rem'
                }} 
              />
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                <label style={{ fontSize: '0.875rem', color: 'var(--brand-text-secondary)' }}>
                  <Translate en="Contact Name" ar="اسم جهة الاتصال" />
                </label>
                <input 
                  type="text" 
                  required 
                  style={{ 
                    padding: '12px', 
                    backgroundColor: 'transparent', 
                    border: '1px solid rgba(255, 255, 255, 0.2)', 
                    color: 'var(--brand-text)',
                    borderRadius: '0rem'
                  }} 
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                <label style={{ fontSize: '0.875rem', color: 'var(--brand-text-secondary)' }}>
                  <Translate en="Email Address" ar="البريد الإلكتروني" />
                </label>
                <input 
                  type="email" 
                  required 
                  style={{ 
                    padding: '12px', 
                    backgroundColor: 'transparent', 
                    border: '1px solid rgba(255, 255, 255, 0.2)', 
                    color: 'var(--brand-text)',
                    borderRadius: '0rem'
                  }} 
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.875rem', color: 'var(--brand-text-secondary)' }}>
                <Translate en="Estimated Capacity (Spots)" ar="السعة التقديرية (عدد المواقف)" />
              </label>
              <select 
                style={{ 
                  padding: '12px', 
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                  border: '1px solid rgba(255, 255, 255, 0.2)', 
                  color: 'var(--brand-text)',
                  borderRadius: '0rem',
                  cursor: 'pointer'
                }}
              >
                <option value="<50">&lt; 50</option>
                <option value="50-200">50 - 200</option>
                <option value="200-500">200 - 500</option>
                <option value="500+">500+</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--space-md)' }}>
              <Translate en="Submit Partnership Request" ar="إرسال طلب الشراكة" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
