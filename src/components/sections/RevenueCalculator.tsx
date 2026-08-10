'use client';

import React, { useState } from 'react';
import Translate from '@/components/ui/Translate';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function RevenueCalculator() {
  const { language } = useLanguage();
  
  const [spots, setSpots] = useState(100);
  const [ticketPrice, setTicketPrice] = useState(20);
  const [occupancy, setOccupancy] = useState(40);
  
  const [submitted, setSubmitted] = useState(false);

  // Simple math for the "teaser"
  // Assuming 12 hours a day operation
  const currentDailyRevenue = spots * ticketPrice * (occupancy / 100) * 12;
  const currentMonthly = currentDailyRevenue * 30;
  
  // Projected math with Irken (e.g. +30% occupancy, dynamic pricing +15%)
  const projectedOccupancy = Math.min(100, occupancy * 1.3);
  const projectedDailyRevenue = spots * (ticketPrice * 1.15) * (projectedOccupancy / 100) * 12;
  const projectedMonthly = projectedDailyRevenue * 30;
  
  const revenueIncrease = projectedMonthly - currentMonthly;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const phone = formData.get('phone');
    
    // Simulate API call
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'revenue_calculator',
        email,
        phone,
        spots,
        ticketPrice,
        occupancy,
        projectedRevenueIncrease: revenueIncrease
      })
    }).catch(console.error);

    setSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-brand-primary">
       <div className="max-w-[1280px] mx-auto px-8 w-full">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="Calculate Your Revenue" ar="احسب أرباحك المحتملة" />
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              <Translate 
                en="See how much revenue you're leaving on the table. Adjust the metrics below to see your facility's true potential with Irken's Zero CapEx solution." 
                ar="اكتشف حجم الإيرادات غير المستغلة. اضبط المقاييس أدناه لترى الإمكانات الحقيقية لمنشأتك مع حلول إركن بدون نفقات رأسمالية." 
              />
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Controls */}
            <div className="flex flex-col gap-8 bg-brand-secondary/30 p-8 border border-brand-secondary rounded-md">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-enHeading tracking-[0.1em] text-text-primary uppercase">
                    <Translate en="Total Parking Spots" ar="إجمالي مواقف السيارات" />
                  </label>
                  <span className="text-brand-accent font-mono font-bold text-lg">{spots}</span>
                </div>
                <input 
                  type="range" 
                  min="20" max="1000" step="10" 
                  value={spots} 
                  onChange={(e) => setSpots(Number(e.target.value))}
                  className="w-full accent-brand-accent h-2 bg-brand-secondary rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-enHeading tracking-[0.1em] text-text-primary uppercase">
                    <Translate en="Avg Hourly Ticket (EGP)" ar="متوسط تذكرة الساعة (جنيه)" />
                  </label>
                  <span className="text-brand-accent font-mono font-bold text-lg">{ticketPrice} <Translate en="EGP" ar="ج.م" /></span>
                </div>
                <input 
                  type="range" 
                  min="5" max="200" step="5" 
                  value={ticketPrice} 
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="w-full accent-brand-accent h-2 bg-brand-secondary rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-enHeading tracking-[0.1em] text-text-primary uppercase">
                    <Translate en="Current Occupancy" ar="الإشغال الحالي" />
                  </label>
                  <span className="text-brand-accent font-mono font-bold text-lg">{occupancy}%</span>
                </div>
                <input 
                  type="range" 
                  min="10" max="100" step="5" 
                  value={occupancy} 
                  onChange={(e) => setOccupancy(Number(e.target.value))}
                  className="w-full accent-brand-accent h-2 bg-brand-secondary rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            
            {/* Result & Lead Capture */}
            <div className="w-full relative z-10 border border-brand-accent/40 bg-brand-secondary/50 p-8 shadow-glow-accent rounded-md">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent shadow-glow-accent-sm rounded-t-md" aria-hidden="true" />
              
              <div className="text-center mb-8">
                 <p className="text-sm font-enHeading tracking-[0.1em] text-text-secondary uppercase mb-2">
                   <Translate en="Potential Monthly Revenue Increase" ar="الزيادة الشهرية المحتملة في الإيرادات" />
                 </p>
                 <div className="text-4xl md:text-5xl font-mono font-bold text-brand-accent">
                   +{Math.round(revenueIncrease).toLocaleString()} <span className="text-2xl text-text-secondary"><Translate en="EGP" ar="ج.م" /></span>
                 </div>
              </div>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <p className="text-center text-sm text-text-secondary mb-4">
                    <Translate en="Enter your details to get the full personalized analysis report and optimization strategy sent to your inbox." ar="أدخل تفاصيلك للحصول على تقرير التحليل المخصص الكامل واستراتيجية التحسين في بريدك الوارد." />
                  </p>
                  
                  <input 
                    name="email"
                    type="email" 
                    required 
                    placeholder={language === 'en' ? "Work Email Address" : "البريد الإلكتروني للعمل"}
                    className="w-full bg-brand-secondary border border-brand-secondary text-text-primary px-4 py-3 font-enBody text-sm md:text-base outline-none transition-all duration-200 focus:border-brand-accent hover:border-text-secondary/60 rounded-md" 
                  />
                  <input 
                    name="phone"
                    type="tel" 
                    required 
                    placeholder={language === 'en' ? "Phone Number" : "رقم الهاتف"}
                    className="w-full bg-brand-secondary border border-brand-secondary text-text-primary px-4 py-3 font-enBody text-sm md:text-base outline-none transition-all duration-200 focus:border-brand-accent hover:border-text-secondary/60 rounded-md" 
                  />
                  
                  <button type="submit" className="mt-2 px-8 py-4 bg-brand-accent text-brand-on-accent font-enHeading text-xs uppercase tracking-[0.15em] hover:bg-brand-accent-hover transition-all duration-200 rounded-md shadow-glow-accent-sm">
                    <Translate en="Get Full Report" ar="احصل على التقرير الكامل" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-12 h-12 mx-auto bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent mb-4">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <polyline points="2 9 8 15 22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-enHeading text-brand-accent mb-2">
                    <Translate en="Report Sent!" ar="تم إرسال التقرير!" />
                  </h3>
                  <p className="text-text-secondary text-sm">
                    <Translate en="Check your inbox shortly. Our team will also be in touch." ar="تحقق من صندوق الوارد قريباً. سيتواصل فريقنا معك أيضاً." />
                  </p>
                </div>
              )}
            </div>
          </div>
       </div>
    </section>
  );
}
