'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import Translate from '@/components/ui/Translate';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="global-header">
      <div className="container header-inner">
        <Link href="/" aria-label="Irken Solutions Home">
          <img src="/irken_solutions.svg" alt="Irken Solutions" className="brand-logo" />
        </Link>
        
        <nav className="nav-links">
          <div className="nav-item">
            <Link href="/">
              <Translate en="Home" ar="الرئيسية" />
            </Link>
          </div>
          
          <div className="nav-item">
            <a role="button" tabIndex={0}><Translate en="Services ▾" ar="الخدمات ▾" /></a>
            <div className="dropdown-menu">
              <Link href="/services/parking-management"><Translate en="Parking Management" ar="إدارة المواقف" /></Link>
              <Link href="/services/access-control"><Translate en="Access Control Systems" ar="أنظمة التحكم بالوصول" /></Link>
              <Link href="/services/lpr"><Translate en="License Plate Recognition" ar="أنظمة التعرف على اللوحات" /></Link>
            </div>
          </div>

          <div className="nav-item">
            <a role="button" tabIndex={0}><Translate en="Service Providers ▾" ar="مزودي الخدمات ▾" /></a>
            <div className="dropdown-menu">
              <Link href="/providers/reservation"><Translate en="Online Parking Reservation" ar="نظام الحجز الإلكتروني" /></Link>
              <Link href="/providers/attendant-mgmt"><Translate en="Attendant Management System" ar="نظام إدارة موظفي المواقف" /></Link>
              <Link href="/providers/epayment"><Translate en="ePayment" ar="الدفع الإلكتروني" /></Link>
            </div>
          </div>

          <div className="nav-item">
            <a role="button" tabIndex={0}><Translate en="Company ▾" ar="الشركة ▾" /></a>
            <div className="dropdown-menu">
              <Link href="/company/about"><Translate en="About Us" ar="من نحن" /></Link>
            </div>
          </div>

          <div className="nav-item">
            <Link href="/contact">
              <Translate en="Contact Us" ar="اتصل بنا" />
            </Link>
          </div>
        </nav>

        <div className="header-actions">
          <button 
            className="lang-switch-btn" 
            onClick={toggleLanguage} 
            title="Toggle Language"
            aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
          </button>
          <Link href="/contact" className="btn-primary">
            <Translate en="Request Integration" ar="طلب تكامل" />
          </Link>
        </div>
      </div>
    </header>
  );
}
