'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Play } from 'lucide-react';
import Translate from '@/components/ui/Translate';

interface ProductDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productType: 'driver' | 'operator' | null;
}

export default function ProductDemoModal({ isOpen, onClose, productType }: ProductDemoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !mounted || !productType) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-brand-primary/90 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-5xl bg-brand-primary border border-brand-secondary rounded-xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 border-b border-brand-secondary">
          <h3 className="text-lg font-enHeading font-bold text-text-primary">
            {productType === 'driver' ? (
              <Translate en="irken.eg Driver App Demo" ar="عرض تطبيقي لسائقي إركن" />
            ) : (
              <Translate en="Irken Operator Dashboard Demo" ar="عرض لوحة تحكم مشغلي إركن" />
            )}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-brand-secondary/50 rounded-md transition-colors"
            aria-label="Close demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="relative aspect-video bg-[#0a111a] flex flex-col items-center justify-center">
          {/* Placeholder for actual video player */}
          <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mb-4 border border-brand-accent/30 shadow-glow-accent transition-transform hover:scale-110 cursor-pointer">
            <Play className="w-8 h-8 text-brand-accent translate-x-1" />
          </div>
          <p className="text-text-secondary text-sm font-enHeading tracking-wide">
            {productType === 'driver' ? (
              <Translate en="DRIVER APP DEMO VIDEO COMING SOON" ar="فيديو العرض التطبيقي قريباً" />
            ) : (
              <Translate en="OPERATOR DASHBOARD DEMO VIDEO COMING SOON" ar="فيديو عرض لوحة التحكم قريباً" />
            )}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
