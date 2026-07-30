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
      <div style={{ padding: 'var(--space-xl)', textAlign: 'center', background: 'rgba(10, 20, 28, 0.6)', borderTop: '2px solid var(--brand-accent)' }}>
        <div style={{ color: 'var(--brand-accent)', fontSize: '48px', marginBottom: 'var(--space-md)' }}>✓</div>
        <h3 style={{ marginBottom: 'var(--space-sm)', color: 'var(--brand-text-highlight)' }}>
          <Translate en="Message Received" ar="تم استلام الرسالة" />
        </h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          <Translate en="Our team will get back to you shortly." ar="سيتواصل معك فريقنا قريباً." />
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
        <div className="form-group">
          <label className="form-label">
            <Translate en="Name" ar="الاسم" />
          </label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label className="form-label">
            <Translate en="Email" ar="البريد الإلكتروني" />
          </label>
          <input type="email" className="form-control" required />
        </div>
      </div>
      
      <div className="form-group">
        <label className="form-label">
          <Translate en="Inquiry Type" ar="نوع الاستفسار" />
        </label>
        <select className="form-control" required>
          <option value=""><Translate en="Select an option..." ar="اختر خياراً..." /></option>
          <option value="sales"><Translate en="Sales" ar="المبيعات" /></option>
          <option value="support"><Translate en="Support" ar="الدعم الفني" /></option>
          <option value="partnership"><Translate en="Partnership" ar="شراكة" /></option>
          <option value="other"><Translate en="Other" ar="أخرى" /></option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">
          <Translate en="Message" ar="الرسالة" />
        </label>
        <textarea className="form-control" rows={5} required></textarea>
      </div>

      <button type="submit" className="btn-primary" disabled={status === 'submitting'} style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px' }}>
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
