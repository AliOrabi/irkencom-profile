'use client';

import React, { useState, useEffect } from 'react';
import Translate from '@/components/ui/Translate';
import Link from 'next/link';
import Script from 'next/script';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check if consent has already been answered
    const consent = localStorage.getItem('irken_cookie_consent');
    if (consent === null) {
      setTimeout(() => setShowBanner(true), 0);
    } else if (consent === 'true') {
      setTimeout(() => setConsentGiven(true), 0);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('irken_cookie_consent', 'true');
    setConsentGiven(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('irken_cookie_consent', 'false');
    setConsentGiven(false);
    setShowBanner(false);
  };

  return (
    <>
      {/* Conditionally inject Analytics Scripts if consent is given */}
      {consentGiven && (
        <>
          {/* Google Analytics Placeholder */}
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID'); // Replace with actual ID
            `}
          </Script>
          
          {/* Meta Pixel Placeholder */}
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'META_PIXEL_ID'); // Replace with actual ID
              fbq('track', 'PageView');
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 border-t border-brand-secondary bg-brand-primary/95 backdrop-blur-md shadow-lg transform transition-transform duration-300">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-text-secondary flex-1">
              <Translate 
                en={
                  <>
                    We use essential cookies to make our site work. With your consent, we may also use non-essential cookies (like Google Analytics and Meta Pixel) to improve user experience and analyze website traffic. By clicking &quot;Accept&quot;, you agree to our website&apos;s cookie use as described in our <Link href="/cookies" className="text-brand-accent underline">Cookie Policy</Link>.
                  </>
                }
                ar={
                  <>
                    نستخدم ملفات الارتباط الأساسية لعمل الموقع. بموافقتك، قد نستخدم أيضًا ملفات ارتباط غير أساسية (مثل Google Analytics و Meta Pixel) لتحسين تجربة المستخدم وتحليل الزيارات. بالنقر على &quot;قبول&quot;، فإنك توافق على استخدامنا لملفات الارتباط كما هو موضح في <Link href="/cookies" className="text-brand-accent underline">سياسة ملفات الارتباط</Link>.
                  </>
                }
              />
            </div>
            
            <div className="flex gap-3 shrink-0 w-full md:w-auto">
              <button 
                onClick={handleDecline}
                className="flex-1 md:flex-none px-6 py-2 border border-brand-secondary text-text-secondary text-xs font-enHeading uppercase tracking-widest hover:border-text-primary hover:text-text-primary transition-colors"
              >
                <Translate en="Decline" ar="رفض" />
              </button>
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2 bg-brand-accent text-brand-primary border border-brand-accent text-xs font-enHeading uppercase tracking-widest hover:bg-transparent hover:text-brand-accent transition-colors"
              >
                <Translate en="Accept" ar="قبول" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
