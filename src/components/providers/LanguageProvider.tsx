'use client';

import React, { createContext, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({ 
  children, 
  initialLanguage 
}: { 
  children: React.ReactNode;
  initialLanguage: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const language = initialLanguage;

  const toggleLanguage = () => {
    const nextLocale = language === 'en' ? 'ar' : 'en';
    
    let newPath = pathname;
    if (pathname.startsWith(`/${language}/`)) {
      newPath = pathname.replace(`/${language}/`, `/${nextLocale}/`);
    } else if (pathname === `/${language}`) {
      newPath = `/${nextLocale}`;
    } else {
      // Fallback if somehow there is no locale prefix
      newPath = `/${nextLocale}${pathname}`;
    }
    
    router.push(newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
