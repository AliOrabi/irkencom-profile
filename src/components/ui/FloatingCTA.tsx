'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Translate from '@/components/ui/Translate';
import { MessageCircle, X } from 'lucide-react';
import { usePostHog } from 'posthog-js/react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const posthog = usePostHog();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (~100vh)
      const scrollThreshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const handleClick = () => {
    posthog?.capture('floating_cta_clicked', { location: 'floating_button' });
    // Scroll to the integration form
    const formSection = document.getElementById('integration');
    if (formSection) {
      formSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    posthog?.capture('floating_cta_dismissed');
  };

  const show = isVisible && !isDismissed;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.9 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 ltr:right-6 rtl:left-6 z-50 flex items-center gap-2"
          role="complementary"
          aria-label="Quick contact"
        >
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="w-8 h-8 flex items-center justify-center bg-brand-secondary/80 backdrop-blur-sm text-text-secondary hover:text-text-primary border border-brand-secondary rounded-full transition-colors duration-200 cursor-pointer"
            aria-label="Dismiss floating button"
          >
            <X className="w-3.5 h-3.5" strokeWidth={2} />
          </button>

          {/* Main CTA button */}
          <button
            onClick={handleClick}
            className="group flex items-center gap-3 px-5 py-3 bg-brand-accent text-brand-on-accent font-enHeading text-sm font-medium uppercase tracking-[1px] rounded-full shadow-glow-accent hover:bg-brand-accent-hover transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
            <span className="hidden sm:inline">
              <Translate en="Book a Demo" ar="احجز عرضاً توضيحياً" />
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
