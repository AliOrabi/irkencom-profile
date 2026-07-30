import React from 'react';
import PageHero from '@/components/sections/PageHero';
import ContactForm from '@/components/sections/ContactForm';
import Translate from '@/components/ui/Translate';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main>
      <PageHero 
        titleEn="Get in Touch"
        titleAr="تواصل معنا"
        descriptionEn="We're here to architect your next urban mobility solution."
        descriptionAr="نحن هنا لهندسة حلول التنقل الحضري القادمة الخاصة بك."
      />

      <section className="section" style={{ position: 'relative' }}>
        <div className="grid-background" style={{ zIndex: -1 }}></div>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)' }}>
            
            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              <div>
                <h2 style={{ fontSize: '28px', marginBottom: 'var(--space-md)', color: 'var(--brand-text-highlight)' }}>
                  <Translate en="Contact Information" ar="معلومات الاتصال" />
                </h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <Translate en="Reach out to us through any of the channels below. Our team is ready to assist you." ar="تواصل معنا عبر أي من القنوات أدناه. فريقنا مستعد لمساعدتك." />
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <div className="feature-card" style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', padding: 'var(--space-md)' }}>
                  <div style={{ color: 'var(--brand-accent)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '4px', color: 'var(--brand-text-highlight)' }}><Translate en="Phone" ar="الهاتف" /></div>
                    <div style={{ color: 'var(--text-secondary)' }}>+20 1222200479</div>
                  </div>
                </div>

                <div className="feature-card" style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', padding: 'var(--space-md)' }}>
                  <div style={{ color: 'var(--brand-accent)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '4px', color: 'var(--brand-text-highlight)' }}><Translate en="Email" ar="البريد الإلكتروني" /></div>
                    <div style={{ color: 'var(--text-secondary)' }}>info@irken.com.eg</div>
                  </div>
                </div>

                <div className="feature-card" style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', padding: 'var(--space-md)' }}>
                  <div style={{ color: 'var(--brand-accent)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '4px', color: 'var(--brand-text-highlight)' }}><Translate en="Headquarters" ar="المقر الرئيسي" /></div>
                    <div style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <Translate 
                        en="1 Mustafa El Nahhas Street, intersection with Abbas El Akkad Street, Nasr City, Cairo" 
                        ar="١ شارع مصطفى النحاس، تقاطع مع شارع عباس العقاد، مدينة نصر، القاهرة" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="form-container" style={{ width: '100%', maxWidth: '100%' }}>
              <h2 style={{ fontSize: '24px', marginBottom: 'var(--space-xl)', color: 'var(--brand-text-highlight)' }}>
                <Translate en="Send us a Message" ar="أرسل لنا رسالة" />
              </h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
