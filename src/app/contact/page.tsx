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
        titleEn="Get in Touch"
        titleAr="تواصل معنا"
        descriptionEn="We're here to architect your next urban mobility solution."
        descriptionAr="نحن هنا لهندسة حلول التنقل الحضري القادمة الخاصة بك."
      />

      <section className="relative py-24 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,255,218,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,255,218,0.05)_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
        
        <div className="max-w-[1280px] mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-3xl font-enHeading text-white mb-4">
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
                        <div className="font-enHeading text-white font-medium mb-1 tracking-wider uppercase text-sm">
                          <Translate en={channel.label.en} ar={channel.label.ar} />
                        </div>
                        <div className="text-text-secondary leading-relaxed">
                          {channel.displayValue ? (
                            <Translate en={channel.displayValue.en} ar={channel.displayValue.ar} />
                          ) : (
                            channel.value
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="w-full">
              <h2 className="text-2xl font-enHeading text-white mb-8">
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
