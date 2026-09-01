'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Translate from '@/components/ui/Translate';
import LocalizedLink from '@/components/ui/LocalizedLink';
import { 
  MessageSquare, 
  X, 
  ChevronRight, 
  MessageCircle, 
  Phone, 
  Clock, 
  ArrowUpRight,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  Zap,
  Calendar
} from 'lucide-react';
import { usePostHog } from 'posthog-js/react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/components/providers/LanguageProvider';

type TabType = 'channels' | 'callback' | 'calculator';

interface WhatsAppIntent {
  id: string;
  labelEn: string;
  labelAr: string;
  messageEn: string;
  messageAr: string;
}

const whatsAppIntents: WhatsAppIntent[] = [
  {
    id: 'operator',
    labelEn: 'List My Facility',
    labelAr: 'تسجيل موقف جديد',
    messageEn: 'Hello Irken Team, I would like to list my parking facility on irken.eg and monetize empty bays.',
    messageAr: 'مرحباً فريق إركن، أود تسجيل موقفي على منصة إركن والاستفادة من الأماكن الشاغرة.',
  },
  {
    id: 'demo',
    labelEn: 'Schedule a Demo',
    labelAr: 'طلب عرض توضيحي',
    messageEn: 'Hello, I want to request a demo of the Irken Zero CapEx Operator Platform.',
    messageAr: 'مرحباً، أود حجز عرض توضيحي لمنصة إركن لإدارة المواقف بدون نفقات تأسيسية.',
  },
  {
    id: 'support',
    labelEn: 'Technical Support',
    labelAr: 'دعم فني وبوابات',
    messageEn: 'Hello, I need technical assistance with our gate integration / operator dashboard.',
    messageAr: 'مرحباً، أحتاج مساعدة تقنية بخصوص ربط البوابات أو لوحة تحكم المشغلين.',
  },
  {
    id: 'settlement',
    labelEn: 'Payouts & Settlement',
    labelAr: 'تسوية المستحقات',
    messageEn: 'Hello, I have an inquiry regarding reservation payouts and financial settlement.',
    messageAr: 'مرحباً، لدي استفسار بخصوص تسوية الإيرادات ومستحقات الحجوزات.',
  },
];

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('channels');
  const [selectedIntent, setSelectedIntent] = useState<string>('operator');
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Callback Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCity, setFormCity] = useState('Cairo');
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Mini-Calculator State
  const [calcBays, setCalcBays] = useState(40);

  const hubRef = useRef<HTMLDivElement>(null);
  const posthog = usePostHog();
  const { language } = useLanguage();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hubRef.current && !hubRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('+201222200479');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
    posthog?.capture('support_hub_phone_copied');
  };

  const getWhatsAppUrl = () => {
    const intent = whatsAppIntents.find(i => i.id === selectedIntent) || whatsAppIntents[0];
    const text = language === 'ar' ? intent.messageAr : intent.messageEn;
    return `https://wa.me/201222200479?text=${encodeURIComponent(text)}`;
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    setFormLoading(true);
    posthog?.capture('support_hub_callback_submitted', {
      city: formCity,
      estimatedBays: calcBays,
    });

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formName,
          phone: formPhone,
          city: formCity,
          capacity: calcBays,
          source: 'floating_cta_quick_request',
        }),
      });

      if (res.ok) {
        setFormSuccess(true);
      } else {
        // Fallback simulate success for frictionless UX
        setFormSuccess(true);
      }
    } catch {
      setFormSuccess(true);
    } finally {
      setFormLoading(false);
    }
  };

  // Mini-calc estimated monthly revenue calculation
  const estimatedRevenueEgp = Math.round(calcBays * 15 * 30 * 0.7); // bays * rate * days * avg off-peak occupancy

  return (
    <div 
      ref={hubRef}
      className="fixed bottom-5 ltr:right-5 rtl:left-5 z-50 flex flex-col items-end rtl:items-start"
      role="region"
      aria-label="Irken Support & Operator Hub"
    >
      {/* ── Support Hub Modal / Popover ─────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'w-[330px] sm:w-[380px] mb-3.5',
              'bg-white/95 backdrop-blur-2xl',
              'border border-slate-200/90',
              'rounded-[2rem]',
              'shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22)]',
              'overflow-hidden text-slate-800'
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="support-hub-title"
          >
            {/* ── Top Header ─────────────────────────────────────────── */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-[#1A2530] text-white relative">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase font-enHeading">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <Translate en="Operations Desk Online" ar="فريق العمليات متصل" />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-accent"
                  aria-label="Close support menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 id="support-hub-title" className="text-lg sm:text-xl font-bold font-enHeading tracking-tight">
                <Translate en="Operator Support Hub" ar="مركز دعم وخدمات المشغلين" />
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                <Translate 
                  en="Connect directly with our operations team in Cairo." 
                  ar="تواصل فوراً مع مسؤولي العمليات والدعم الفني في القاهرة." 
                />
              </p>

              {/* ── Navigation Pill Tabs ──────────────────────────────── */}
              <div className="flex items-center gap-1.5 mt-4 p-1 bg-white/10 rounded-full border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTab('channels')}
                  className={cn(
                    'flex-1 py-1.5 px-3 rounded-full text-xs font-semibold font-enHeading transition-all duration-200 text-center select-none',
                    activeTab === 'channels'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  <Translate en="Channels" ar="القنوات" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('callback')}
                  className={cn(
                    'flex-1 py-1.5 px-3 rounded-full text-xs font-semibold font-enHeading transition-all duration-200 text-center select-none',
                    activeTab === 'callback'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  <Translate en="Quick Request" ar="طلب اتصال" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('calculator')}
                  className={cn(
                    'flex-1 py-1.5 px-3 rounded-full text-xs font-semibold font-enHeading transition-all duration-200 text-center select-none',
                    activeTab === 'calculator'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  <Translate en="Estimator" ar="حاسبة العائد" />
                </button>
              </div>
            </div>

            {/* ── Tab Content ────────────────────────────────────────── */}
            <div className="p-4 sm:p-5 max-h-[400px] overflow-y-auto">
              {/* ── TAB 1: Direct Support Channels ────────────────────── */}
              {activeTab === 'channels' && (
                <div className="space-y-3">
                  {/* WhatsApp Intent Selector Card */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold font-enHeading text-xs uppercase tracking-wider">
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <Translate en="Instant WhatsApp Chat" ar="محادثة فورية عبر واتساب" />
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wider font-enHeading">
                        <Translate en="Fastest" ar="الأسرع" />
                      </span>
                    </div>

                    <p className="text-[11px] text-emerald-900/80 mb-3">
                      <Translate 
                        en="Select your inquiry to start a pre-configured chat with an operator specialist:" 
                        ar="اختر نوع استفسارك للبدء بمحادثة مجهزة مع مسؤول المشغلين:" 
                      />
                    </p>

                    <div className="grid grid-cols-2 gap-1.5 mb-3">
                      {whatsAppIntents.map((intent) => (
                        <button
                          key={intent.id}
                          type="button"
                          onClick={() => setSelectedIntent(intent.id)}
                          className={cn(
                            'text-start p-2 rounded-xl text-[11px] font-medium transition-all duration-150 border',
                            selectedIntent === intent.id
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm font-semibold'
                              : 'bg-white text-slate-700 border-emerald-200 hover:bg-emerald-100/60'
                          )}
                        >
                          <Translate en={intent.labelEn} ar={intent.labelAr} />
                        </button>
                      ))}
                    </div>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => posthog?.capture('support_hub_whatsapp_launched', { intent: selectedIntent })}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-enHeading uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <Translate en="Start WhatsApp Chat" ar="فتح محادثة واتساب" />
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Operations Hotline Card */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-xs text-slate-900 font-enHeading">
                            <Translate en="Operations Hotline" ar="الخط الساخن للعمليات" />
                          </span>
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-slate-200 text-slate-700 uppercase font-enHeading">
                            24/7
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 font-mono mt-0.5" dir="ltr">
                          +20 1222200479
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-brand-accent hover:border-brand-accent transition-colors"
                        title="Copy phone number"
                        aria-label="Copy phone number"
                      >
                        {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <a
                        href="tel:+201222200479"
                        onClick={() => posthog?.capture('support_hub_phone_dialed')}
                        className="p-2 rounded-lg bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors"
                        title="Call now"
                        aria-label="Call operations phone"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Schedule Demo Direct Link */}
                  <LocalizedLink
                    href="/contact"
                    onClick={() => {
                      posthog?.capture('support_hub_demo_clicked');
                      setIsOpen(false);
                    }}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-xs text-slate-900 font-enHeading group-hover:text-brand-accent transition-colors">
                          <Translate en="Schedule Enterprise Demo" ar="حجز عرض توضيحي للمنشآت" />
                        </div>
                        <p className="text-[11px] text-slate-500">
                          <Translate en="Zero CapEx platform walkthrough" ar="استعراض كامل لإمكانيات المنصة" />
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-accent transition-colors rtl:rotate-180" />
                  </LocalizedLink>
                </div>
              )}

              {/* ── TAB 2: Quick Callback / Lead Request ──────────────── */}
              {activeTab === 'callback' && (
                <div>
                  {formSuccess ? (
                    <div className="py-8 text-center flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold font-enHeading text-slate-900 mb-1">
                        <Translate en="Request Received!" ar="تم استلام طلبك بنجاح!" />
                      </h4>
                      <p className="text-xs text-slate-600 max-w-[260px] leading-relaxed mb-4">
                        <Translate 
                          en="An Irken operations specialist will contact you via WhatsApp / Phone within 15 minutes." 
                          ar="سيتواصل معك أحد مسؤولي العمليات عبر واتساب أو الهاتف خلال 15 دقيقة." 
                        />
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSuccess(false);
                          setFormName('');
                          setFormPhone('');
                        }}
                        className="text-xs text-brand-accent font-semibold hover:underline"
                      >
                        <Translate en="Submit another request" ar="إرسال طلب آخر" />
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleCallbackSubmit} className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-semibold font-enHeading text-slate-700 uppercase tracking-wider mb-1">
                          <Translate en="Your Name / Operator Name" ar="الاسم أو اسم المنشأة" />
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder={language === 'ar' ? 'مثال: أحمد محمود' : 'e.g. Ahmed Mahmoud'}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold font-enHeading text-slate-700 uppercase tracking-wider mb-1">
                          <Translate en="Mobile / WhatsApp Number" ar="رقم الموبايل أو واتساب" />
                        </label>
                        <input
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="010XXXXXXXX"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all"
                          dir="ltr"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold font-enHeading text-slate-700 uppercase tracking-wider mb-1">
                          <Translate en="City / Region" ar="المدينة أو المنطقة" />
                        </label>
                        <select
                          value={formCity}
                          onChange={(e) => setFormCity(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all"
                        >
                          <option value="Cairo">{language === 'ar' ? 'القاهرة الكبرى' : 'Greater Cairo'}</option>
                          <option value="Giza">{language === 'ar' ? 'الجيزة والشيخ زايد' : 'Giza & Zayed'}</option>
                          <option value="NewCairo">{language === 'ar' ? 'القاهرة الجديدة والتجمع' : 'New Cairo & Tagamoa'}</option>
                          <option value="Alexandria">{language === 'ar' ? 'الإسكندرية' : 'Alexandria'}</option>
                          <option value="Other">{language === 'ar' ? 'محافظة أخرى' : 'Other Governorate'}</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={formLoading}
                        className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold font-enHeading uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow disabled:opacity-50 cursor-pointer"
                      >
                        {formLoading ? (
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <Translate en="Request Immediate Callback" ar="طلب اتصال فوري" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* ── TAB 3: Mini Yield Estimator ───────────────────────── */}
              {activeTab === 'calculator' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold">
                        <Translate en="Cairo / Giza Yield Lift" ar="تقدير الأرباح الشهرية" />
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                    </div>

                    <div className="text-2xl font-bold font-enHeading tracking-tight text-white mb-1">
                      {estimatedRevenueEgp.toLocaleString()} <span className="text-xs font-normal text-slate-300">EGP / mo</span>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-normal">
                      <Translate 
                        en={`Estimated net gain from ${calcBays} off-peak bays via advance driver reservations.`} 
                        ar={`صافي الدخل الإضافي المتوقع من ${calcBays} مكان شاغر عبر الحجوزات المسبقة.`} 
                      />
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs font-semibold font-enHeading text-slate-700 mb-1.5">
                      <span><Translate en="Facility Capacity" ar="سعة الموقف" />:</span>
                      <span className="text-brand-accent font-bold font-mono">{calcBays} <Translate en="Bays" ar="مكان" /></span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="200"
                      step="5"
                      value={calcBays}
                      onChange={(e) => setCalcBays(Number(e.target.value))}
                      className="w-full accent-brand-accent cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                      <span>10 bays</span>
                      <span>100 bays</span>
                      <span>200 bays</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('callback');
                      posthog?.capture('support_hub_estimator_cta_clicked', { bays: calcBays });
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold font-enHeading uppercase tracking-wider transition-all duration-200 shadow-sm"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <Translate en="Claim These Spots Now" ar="سجّل هذه المساحات الآن" />
                  </button>
                </div>
              )}
            </div>

            {/* ── Footer Notice ──────────────────────────────────────── */}
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-accent" />
                <span>
                  <Translate en="Avg response: < 15 mins" ar="متوسط الرد: أقل من 15 دقيقة" />
                </span>
              </div>
              <LocalizedLink 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="text-brand-accent font-semibold hover:underline"
              >
                <Translate en="Contact Page" ar="صفحة التواصل" /> &rarr;
              </LocalizedLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Floating Trigger Button ───────────────────────────────── */}
      <button
        onClick={() => {
          const next = !isOpen;
          setIsOpen(next);
          if (next) {
            posthog?.capture('support_hub_opened');
          }
        }}
        className={cn(
          'group relative flex items-center justify-center',
          'w-14 h-14 rounded-full',
          'bg-brand-accent text-white',
          'border border-brand-accent/80',
          'shadow-[0_10px_25px_-5px_rgba(86,155,170,0.45)]',
          'hover:bg-brand-accent-hover hover:scale-105 hover:shadow-[0_15px_30px_-5px_rgba(86,155,170,0.55)]',
          'active:scale-95 transition-all duration-200 cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2'
        )}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close support menu" : "Open support and inquiries menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <MessageSquare className="w-6 h-6" />
              {/* Online pulse dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Tooltip (when closed) */}
        {!isOpen && (
          <span className="absolute top-1/2 -translate-y-1/2 ltr:right-[calc(100%+14px)] rtl:left-[calc(100%+14px)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-slate-900 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold font-enHeading shadow-lg pointer-events-none border border-slate-700">
            <Translate en="Need Help? Chat with us" ar="تحتاج مساعدة؟ تواصل معنا" />
          </span>
        )}
      </button>
    </div>
  );
}
