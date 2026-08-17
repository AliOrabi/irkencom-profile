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
  Ticket, 
  Calendar, 
  Phone, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { usePostHog } from 'posthog-js/react';
import { cn } from '@/lib/utils';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const hubRef = useRef<HTMLDivElement>(null);
  const posthog = usePostHog();

  useEffect(() => {
    const handleScroll = () => {
      // Show immediately or after minimal scroll
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleChannelClick = (channel: string) => {
    posthog?.capture('support_hub_channel_clicked', { channel });
    setIsOpen(false);
  };

  const supportChannels = [
    {
      id: 'whatsapp',
      titleEn: 'WhatsApp Support',
      titleAr: 'محادثة عبر واتساب',
      descEn: 'Instant response from our team',
      descAr: 'استجابة فورية من فريق الدعم',
      href: 'https://wa.me/201222200479?text=Hello%20Irken%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20services',
      isExternal: true,
      icon: MessageCircle,
      iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      badgeEn: 'FASTEST',
      badgeAr: 'الأسرع',
    },
    {
      id: 'ticket',
      titleEn: 'Submit Support Ticket',
      titleAr: 'فتح تذكرة دعم فني',
      descEn: 'Technical assistance & integration desk',
      descAr: 'المساعدة الفنية ومكتب التكامل',
      href: '/contact',
      isExternal: false,
      icon: Ticket,
      iconBg: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      badgeEn: '24H SLA',
      badgeAr: 'خلال 24 ساعة',
    },
    {
      id: 'demo',
      titleEn: 'Schedule a Demo',
      titleAr: 'حجز عرض توضيحي',
      descEn: 'Explore Zero CapEx parking engine',
      descAr: 'استكشف المنصة الخالية من النفقات',
      href: '/contact',
      isExternal: false,
      icon: Calendar,
      iconBg: 'bg-brand-accent/10 text-brand-accent border-brand-accent/20',
      badgeEn: '15 MIN',
      badgeAr: '15 دقيقة',
    },
    {
      id: 'phone',
      titleEn: 'Operations Hotline',
      titleAr: 'الخط الساخن للعمليات',
      descEn: '+20 1222200479 (24/7 Dispatch)',
      descAr: '+20 1222200479 (طوارئ 24/7)',
      href: 'tel:+201222200479',
      isExternal: true,
      icon: Phone,
      iconBg: 'bg-slate-500/10 text-slate-700 border-slate-500/20',
      badgeEn: 'URGENT',
      badgeAr: 'طوارئ',
    },
  ];

  return (
    <div 
      ref={hubRef}
      className="fixed bottom-6 ltr:right-6 rtl:left-6 z-50 flex flex-col items-end rtl:items-start"
      role="region"
      aria-label="Irken Support & Chat Funnel"
    >
      {/* ── Support Hub Modal / Popover ─────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'w-[340px] sm:w-[380px] mb-3.5',
              'bg-white/95 backdrop-blur-xl',
              'border border-slate-200/90',
              'rounded-[2rem]',
              'shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)]',
              'overflow-hidden text-slate-800'
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="support-hub-title"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-[#1A2530] text-white relative">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold tracking-wider uppercase font-enHeading">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <Translate en="Support Desk Online" ar="فريق الدعم متصل" />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close support menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 id="support-hub-title" className="text-xl font-bold font-enHeading tracking-tight">
                <Translate en="How can we help?" ar="كيف يمكننا مساعدتك؟" />
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                <Translate 
                  en="Connect directly with our engineering & support team." 
                  ar="تواصل مباشرة مع فريق الهندسة والدعم الفني لدينا." 
                />
              </p>
            </div>

            {/* Channels List */}
            <div className="p-4 space-y-2 max-h-[380px] overflow-y-auto">
              {supportChannels.map((ch) => {
                const IconComponent = ch.icon;
                const innerContent = (
                  <div className="flex items-center justify-between w-full p-3 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-slate-50/80 transition-all duration-200 group cursor-pointer">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={cn('w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-105', ch.iconBg)}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 text-start">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-slate-900 font-enHeading group-hover:text-brand-accent transition-colors truncate">
                            <Translate en={ch.titleEn} ar={ch.titleAr} />
                          </span>
                          {ch.badgeEn && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider font-enHeading bg-slate-100 text-slate-600 border border-slate-200/80 uppercase">
                              <Translate en={ch.badgeEn} ar={ch.badgeAr} />
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 truncate mt-0.5">
                          <Translate en={ch.descEn} ar={ch.descAr} />
                        </p>
                      </div>
                    </div>

                    <div className="text-slate-400 group-hover:text-brand-accent transition-colors shrink-0 ltr:ml-2 rtl:mr-2">
                      {ch.isExternal ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                      )}
                    </div>
                  </div>
                );

                if (ch.isExternal) {
                  return (
                    <a
                      key={ch.id}
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleChannelClick(ch.id)}
                      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-2xl"
                    >
                      {innerContent}
                    </a>
                  );
                }

                return (
                  <LocalizedLink
                    key={ch.id}
                    href={ch.href}
                    onClick={() => handleChannelClick(ch.id)}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-2xl"
                  >
                    {innerContent}
                  </LocalizedLink>
                );
              })}
            </div>

            {/* Footer notice */}
            <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
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
                <Translate en="All channels" ar="جميع القنوات" /> &rarr;
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
          'shadow-[0_10px_25px_-5px_rgba(86,155,170,0.4)]',
          'hover:bg-brand-accent-hover hover:scale-105 hover:shadow-[0_15px_30px_-5px_rgba(86,155,170,0.5)]',
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
