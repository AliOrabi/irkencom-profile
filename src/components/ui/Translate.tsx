'use client';

import React, { ReactNode } from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';

interface TranslateProps {
  en: ReactNode;
  ar: ReactNode;
}

export default function Translate({ en, ar }: TranslateProps) {
  const { language } = useLanguage();
  return <>{language === 'en' ? en : ar}</>;
}
