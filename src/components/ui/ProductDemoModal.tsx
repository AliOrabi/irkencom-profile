'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';
import Translate from '@/components/ui/Translate';
import posthog from 'posthog-js';

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
      posthog.capture('demo_modal_opened', { product_type: productType });
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, productType]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        posthog.capture('demo_modal_closed', { product_type: productType, method: 'escape_key' });
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, productType]);

  const handleClose = () => {
    posthog.capture('demo_modal_closed', { product_type: productType, method: 'close_button' });
    onClose();
  };

  if (!isOpen || !mounted || !productType) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-brand-primary/90 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />
      <div className="relative w-full max-w-5xl bg-brand-primary border border-brand-secondary rounded-md overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 border-b border-brand-secondary">
          <h3 className="text-lg font-enHeading font-bold text-text-primary">
            {productType === 'driver' ? (
              <Translate en="irken.eg Driver App Demo" ar="عرض تطبيقي لسائقي إركن" />
            ) : (
              <Translate en="Irken Operator Dashboard Demo" ar="عرض لوحة تحكم مشغلي إركن" />
            )}
          </h3>
          <button 
            onClick={handleClose}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-brand-secondary/50 rounded-md transition-colors"
            aria-label="Close demo"
          >
            <Icon icon={X} className="w-5 h-5" />
          </button>
        </div>
        <div className="relative aspect-video bg-[#0a111a] flex flex-col items-center justify-center overflow-hidden">
          <iframe
            src={productType === 'driver' ? 'https://www.youtube.com/embed/dQw4w9WgXcQ' : 'https://www.youtube.com/embed/dQw4w9WgXcQ'}
            title="Product Demo Video"
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>,
    document.body
  );
}
