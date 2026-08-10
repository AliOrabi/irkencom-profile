import React from 'react';
import PageHero from '@/components/sections/PageHero';
import ContactForm from '@/components/sections/ContactForm';
import Translate from '@/components/ui/Translate';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactChannels } from '@/config/contact';

const Icons = {
  Phone,
  Mail,
  MapPin
};

export default function ContactPage() {
  return (
    <main>
      <PageHero 
        titleEn="Calculate Your Revenue"
        titleAr="احسب أرباحك المحتملة"
        descriptionEn="Talk to our team. Find out how much revenue your parking facility is leaving on the table."
        descriptionAr="تحدث إلى فريقنا. واكتشف حجم الإيرادات غير المستغلة في منشأتك."
      />

      <section className="relative py-24 overflow-hidden">
        {/* Clean Background */}
        
        <div className="max-w-[1280px] mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-3xl font-enHeading text-text-primary mb-4">
                  <Translate en="Contact Information" ar="معلومات الاتصال" />
                </h2>
                <p className="text-text-secondary leading-relaxed max-w-md">
                  <Translate en="Reach out to us through any of the channels below. Our team is ready to assist you." ar="تواصل معنا عبر أي من القنوات أدناه. فريقنا مستعد لمساعدتك." />
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {contactChannels.map(channel => {
                  const Icon = Icons[channel.icon as keyof typeof Icons];
                  return (
                    <div key={channel.id} className="border border-brand-secondary bg-brand-primary/50 p-6 flex gap-6 items-start hover:border-brand-accent transition-colors group">
                      <div className="text-brand-accent group-hover:scale-110 transition-transform">
                        {Icon && <Icon size={24} />}
                      </div>
                      <div>
                        <div className="font-enHeading text-text-primary font-medium mb-1 tracking-wider uppercase text-sm">
                          <Translate en={channel.label.en} ar={channel.label.ar} />
                        </div>
                        <div className="text-text-secondary leading-relaxed">
                          <span 
                            dir={channel.type === 'phone' || channel.type === 'email' ? 'ltr' : undefined} 
                            className={channel.type === 'phone' || channel.type === 'email' ? 'inline-block' : undefined}
                          >
                            {channel.displayValue ? (
                              <Translate en={channel.displayValue.en} ar={channel.displayValue.ar} />
                            ) : (
                              channel.value
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="w-full relative z-10 border border-brand-accent/40 bg-brand-secondary/50 p-8 md:p-12 shadow-glow-accent">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accent shadow-glow-accent-sm" aria-hidden="true" />
              <h2 className="text-2xl font-enHeading text-text-primary mb-8">
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
