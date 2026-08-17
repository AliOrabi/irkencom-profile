'use client';

import React, { useState } from 'react';
import Translate from '@/components/ui/Translate';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { usePostHog } from 'posthog-js/react';
import { PrimaryButton } from '@/components/ui/Buttons';
import { Check, Sparkles, TrendingUp, DollarSign, Calculator } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function RevenueCalculator() {
  const { language } = useLanguage();
  const posthog = usePostHog();
  
  const [spots, setSpots] = useState(150);
  const [ticketPrice, setTicketPrice] = useState(25);
  const [occupancy, setOccupancy] = useState(45);
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Simple math for the projection
  const currentDailyRevenue = spots * ticketPrice * (occupancy / 100) * 12;
  const currentMonthly = currentDailyRevenue * 30;
  
  // Projected math with Irken (e.g. +30% occupancy, dynamic pricing +15%)
  const projectedOccupancy = Math.min(100, occupancy * 1.3);
  const projectedDailyRevenue = spots * (ticketPrice * 1.15) * (projectedOccupancy / 100) * 12;
  const projectedMonthly = projectedDailyRevenue * 30;
  
  const revenueIncrease = projectedMonthly - currentMonthly;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const phone = formData.get('phone');
    
    try {
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
      });

      posthog?.capture('calculator_used', { 
        spots, 
        ticket_price: ticketPrice, 
        occupancy,
        projected_increase: revenueIncrease 
      });

      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50">
       <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <Reveal direction="up" delay={0.1}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs font-semibold font-enHeading uppercase tracking-[0.14em] mb-4">
                <Calculator className="w-3.5 h-3.5" />
                <span><Translate en="YIELD SIMULATOR" ar="محاكي العائد" /></span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 mb-6">
                <Translate en="Calculate Your Revenue Potential" ar="احسب أرباحك المحتملة" />
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                <Translate 
                  en="See how much revenue you're leaving on the table. Adjust the parameters below to see your facility's projected uplift with Irken's Zero CapEx solution." 
                  ar="اكتشف حجم الإيرادات غير المستغلة. اضبط المقاييس أدناه لترى الإمكانات الحقيقية لمنشأتك مع حلول إركن بدون نفقات رأسمالية." 
                />
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Controls Card */}
            <Reveal direction="up" delay={0.2} className="lg:col-span-6 h-full">
              <div className="flex flex-col justify-between h-full bg-white p-8 sm:p-10 border border-slate-200/80 rounded-[2.5rem] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)]">
                <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-6">
                  <Translate en="Facility Parameters" ar="معايير المنشأة" />
                </h3>

                <div className="space-y-8">
                  {/* Slider 1 */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-xs font-enHeading tracking-wider text-slate-700 uppercase font-semibold">
                        <Translate en="Total Parking Spaces" ar="إجمالي مواقف السيارات" />
                      </label>
                      <span className="text-brand-accent font-mono font-bold text-xl">{spots}</span>
                    </div>
                    <input 
                      type="range" 
                      min="20" max="1000" step="10" 
                      value={spots} 
                      onChange={(e) => setSpots(Number(e.target.value))}
                      className="w-full accent-brand-accent h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                      <span>20 spaces</span>
                      <span>1,000 spaces</span>
                    </div>
                  </div>
                  
                  {/* Slider 2 */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-xs font-enHeading tracking-wider text-slate-700 uppercase font-semibold">
                        <Translate en="Avg Hourly Ticket" ar="متوسط تذكرة الساعة" />
                      </label>
                      <span className="text-brand-accent font-mono font-bold text-xl">{ticketPrice} <Translate en="EGP" ar="ج.م" /></span>
                    </div>
                    <input 
                      type="range" 
                      min="5" max="200" step="5" 
                      value={ticketPrice} 
                      onChange={(e) => setTicketPrice(Number(e.target.value))}
                      className="w-full accent-brand-accent h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                      <span>5 EGP</span>
                      <span>200 EGP</span>
                    </div>
                  </div>
                  
                  {/* Slider 3 */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-xs font-enHeading tracking-wider text-slate-700 uppercase font-semibold">
                        <Translate en="Current Occupancy" ar="الإشغال الحالي" />
                      </label>
                      <span className="text-brand-accent font-mono font-bold text-xl">{occupancy}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" max="100" step="5" 
                      value={occupancy} 
                      onChange={(e) => setOccupancy(Number(e.target.value))}
                      className="w-full accent-brand-accent h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                      <span>10%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            {/* Result & Lead Capture Card */}
            <Reveal direction="up" delay={0.3} className="lg:col-span-6 h-full">
              <div className="flex flex-col justify-between h-full bg-white p-8 sm:p-10 border border-brand-accent/30 rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(86,155,170,0.12)] ring-1 ring-brand-accent/20">
                <div className="text-center mb-8">
                   <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold font-enHeading uppercase tracking-wider mb-4">
                     <TrendingUp className="w-3.5 h-3.5" />
                     <span><Translate en="PROJECTED YIELD UPLIFT" ar="الزيادة المتوقعة في العائد" /></span>
                   </div>

                   <p className="text-xs font-enHeading tracking-[0.12em] text-slate-500 uppercase mb-2">
                     <Translate en="Potential Monthly Revenue Increase" ar="الزيادة الشهرية المحتملة في الإيرادات" />
                   </p>

                   <div className="text-4xl sm:text-5xl font-mono font-bold text-slate-900 mb-4">
                     +{Math.round(revenueIncrease).toLocaleString()} <span className="text-2xl text-slate-500"><Translate en="EGP" ar="ج.م" /></span>
                   </div>

                   <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-slate-700 text-xs sm:text-sm leading-relaxed">
                      <Translate 
                        en={`With Irken's dynamic yield engine and +30% occupancy boost, your ${spots}-space facility generates an estimated extra ${Math.round(revenueIncrease).toLocaleString()} EGP every month.`} 
                        ar={`بفضل نظام التسعير الديناميكي من إركن وزيادة الإشغال بنسبة 30%، يحقق الموقف الذي يتسع لـ ${spots} سيارة أرباحاً إضافية متوقعة تبلغ ${Math.round(revenueIncrease).toLocaleString()} جنيه شهرياً.`} 
                      />
                   </div>
                </div>
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <p className="text-center text-xs text-slate-500 mb-2">
                      <Translate en="Enter your work email to receive the complete feasibility report and implementation plan." ar="أدخل بريدك المهني للحصول على دراسة الجدوى التفصيلية وخطة التنفيذ." />
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input 
                        name="email"
                        type="email" 
                        required 
                        placeholder={language === 'en' ? "Work Email Address" : "البريد الإلكتروني للعمل"}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 text-sm rounded-2xl outline-none focus:bg-white focus:border-brand-accent transition-all placeholder:text-slate-400" 
                      />
                      <input 
                        name="phone"
                        type="tel" 
                        required 
                        placeholder={language === 'en' ? "Phone Number" : "رقم الهاتف"}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 text-sm rounded-2xl outline-none focus:bg-white focus:border-brand-accent transition-all placeholder:text-slate-400" 
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={submitting}
                      className="mt-2 w-full py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-xs font-enHeading uppercase tracking-[0.14em] rounded-full transition-all duration-200 hover:shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? <Translate en="Generating Report..." ar="جاري إعداد التقرير..." /> : <Translate en="Get Full Feasibility Report" ar="احصل على تقرير الجدوى الكامل" />}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 mx-auto bg-brand-accent/15 rounded-full flex items-center justify-center text-brand-accent mb-4 border border-brand-accent/30 shadow-sm">
                      <Check className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold font-enHeading text-slate-900 mb-2">
                      <Translate en="Report Dispatched!" ar="تم إرسال التقرير بنجاح!" />
                    </h4>
                    <p className="text-slate-600 text-sm">
                      <Translate en="Check your inbox shortly. Our solutions team will follow up within 24 hours." ar="يرجى مراجعة بريدك الإلكتروني. سيتواصل معك فريق الحلول خلال 24 ساعة." />
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
       </div>
    </section>
  );
}
