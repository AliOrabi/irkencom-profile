'use client';

import React, { useState } from 'react';
import Translate from '@/components/ui/Translate';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="p-8 text-center bg-brand-primary/60 border-t-2 border-brand-accent backdrop-blur-sm">
        <div className="text-brand-accent text-5xl mb-6">✓</div>
        <h3 className="text-2xl font-enHeading text-white mb-2">
          <Translate en="Message Received" ar="تم استلام الرسالة" />
        </h3>
        <p className="text-text-secondary">
          <Translate en="Our team will get back to you shortly." ar="سيتواصل معك فريقنا قريباً." />
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-enHeading tracking-widest text-text-secondary uppercase">
            <Translate en="Name" ar="الاسم" />
          </label>
          <input type="text" className="bg-[#0a1120] border border-brand-secondary text-white p-4 focus:outline-none focus:border-brand-accent transition-colors" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-enHeading tracking-widest text-text-secondary uppercase">
            <Translate en="Email" ar="البريد الإلكتروني" />
          </label>
          <input type="email" className="bg-[#0a1120] border border-brand-secondary text-white p-4 focus:outline-none focus:border-brand-accent transition-colors" required />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-xs font-enHeading tracking-widest text-text-secondary uppercase">
          <Translate en="Inquiry Type" ar="نوع الاستفسار" />
        </label>
        <select className="bg-[#0a1120] border border-brand-secondary text-white p-4 focus:outline-none focus:border-brand-accent transition-colors appearance-none" required>
          <option value=""><Translate en="Select an option..." ar="اختر خياراً..." /></option>
          <option value="sales"><Translate en="Sales" ar="المبيعات" /></option>
          <option value="support"><Translate en="Support" ar="الدعم الفني" /></option>
          <option value="partnership"><Translate en="Partnership" ar="شراكة" /></option>
          <option value="other"><Translate en="Other" ar="أخرى" /></option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-enHeading tracking-widest text-text-secondary uppercase">
          <Translate en="Message" ar="الرسالة" />
        </label>
        <textarea className="bg-[#0a1120] border border-brand-secondary text-white p-4 focus:outline-none focus:border-brand-accent transition-colors resize-y" rows={5} required></textarea>
      </div>

      <button type="submit" className="btn-primary self-start mt-2 flex items-center gap-2" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <Translate en="Sending..." ar="جاري الإرسال..." />
        ) : (
          <>
            <Translate en="Send Message" ar="إرسال الرسالة" />
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
