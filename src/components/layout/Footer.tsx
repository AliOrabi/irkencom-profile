'use client';

import React from 'react';
import Link from 'next/link';
import Translate from '@/components/ui/Translate';

export default function Footer() {
  return (
    <footer className="corporate-footer">
      <div className="container">
        <div className="footer-grid">
          
          <div>
            <img src="/irken_solutions.svg" alt="Irken Solutions Logo" className="brand-logo" style={{ marginBottom: '24px' }} />
            <p style={{ fontSize: '13px', maxWidth: '280px' }}>
              <Translate 
                en="A venture-building technology firm dedicated to digitizing the mobility and parking sector through asset-light infrastructure." 
                ar="شركة بناء مشاريع تقنية مكرسة لرقمنة قطاع التنقل والمواقف من خلال بنية تحتية مرنة الأصول." 
              />
            </p>
          </div>
          
          <div>
            <h4 className="footer-heading">
              <Translate en="Platform" ar="المنصة" />
            </h4>
            <ul className="footer-links">
              <li>
                <Link href="#mobility">
                  <Translate en="Urban Mobility Ecosystem" ar="نظام التنقل الحضري" />
                </Link>
              </li>
              <li>
                <Link href="#platform">
                  <Translate en="Dynamic Capacity Engine" ar="محرك السعة الديناميكي" />
                </Link>
              </li>
              <li>
                <Link href="#platform">
                  <Translate en="Operator Terminal" ar="لوحة المشغلين" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div id="company">
            <h4 className="footer-heading">
              <Translate en="Corporate" ar="الشركة" />
            </h4>
            <ul className="footer-links">
              <li>
                <Link href="#contact">
                  <Translate en="Contact Us" ar="تواصل معنا" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Translate en="Press & Media" ar="الصحافة والإعلام" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Translate en="Careers" ar="الوظائف" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">
              <Translate en="For Drivers" ar="للسائقين" />
            </h4>
            <div className="consumer-portal-box">
              <p style={{ fontSize: '13px', marginBottom: '12px', color: 'var(--brand-text-primary)' }}>
                <Translate en="Looking for a parking space?" ar="تبحث عن مساحة للركن؟" />
              </p>
              <a href="https://irken.eg" className="btn-primary" style={{ padding: '8px 16px', fontSize: '12px', borderColor: 'var(--brand-text-secondary)', color: 'var(--brand-text-highlight)' }}>
                Visit irken.eg ↗
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">
              <Translate en="Newsletter" ar="النشرة البريدية" />
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={{ fontSize: '13px', color: 'var(--brand-text-secondary)', marginBottom: '8px' }}>
                <Translate en="Subscribe for the latest in urban mobility." ar="اشترك للحصول على أحدث أخبار التنقل الحضري." />
              </p>
              <form 
                style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  const btn = e.currentTarget.querySelector('button');
                  if (btn) btn.innerHTML = 'Subscribed!';
                }}
              >
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Email Address"
                  required
                  style={{ padding: '10px 12px', fontSize: '13px' }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '10px 12px', fontSize: '12px', width: '100%' }}>
                  <Translate en="Subscribe" ar="اشتراك" />
                </button>
              </form>
            </div>
          </div>

        </div>
        
        <div className="footer-bottom">
          <div className="legal-disclaimer">
            <span>
              <Translate en="© 2026 Irken Solutions. All rights reserved." ar="© 2026 إيركن سوليوشنز. جميع الحقوق محفوظة." />
            </span>
            <br />
            <span style={{ opacity: 0.6, fontSize: '10px' }}>
              <Translate 
                en="TRADEMARK NOTICE: 'Irken Solutions' (B2B) and 'irken.eg' (Consumer) are separate intellectual properties." 
                ar="إشعار العلامة التجارية: 'إيركن سوليوشنز' للشركات وتطبيق 'irken.eg' للمستهلكين هي ملكيات فكرية منفصلة." 
              />
            </span>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
            <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'underline' }}>
              <Translate en="Privacy Policy" ar="سياسة الخصوصية" />
            </Link>
            <Link href="/terms" style={{ color: 'inherit', textDecoration: 'underline' }}>
              <Translate en="Enterprise Terms" ar="شروط خدمات الشركات" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
