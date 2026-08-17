import React from 'react';
import PageHero from '@/components/sections/PageHero';
import ContactForm from '@/components/sections/ContactForm';
import Translate from '@/components/ui/Translate';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { contactChannels } from '@/config/contact';
import Reveal from '@/components/ui/Reveal';

const Icons: Record<string, React.ElementType> = {
  Phone,
  Mail,
  MapPin,
  Clock
};

export default function ContactPage() {
  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero 
        titleEn="Connect with our Solutions Team"
        titleAr="تواصل مع فريق الحلول المتخصصة"
        descriptionEn="Find out how much revenue your facility is leaving on the table. Our engineers respond within 24 hours."
        descriptionAr="اكتشف حجم الإيرادات غير المستغلة في منشأتك. فريقنا الهندسي يستجيب خلال 24 ساعة."
        badgeEn="GET IN TOUCH"
        badgeAr="تواصل معنا"
      />

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <Reveal direction="up" delay={0.1}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-enHeading text-slate-900 mb-3">
                    <Translate en="Direct Channels" ar="قنوات الاتصال المباشر" />
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    <Translate 
                      en="Reach out to our operations team or enterprise support desk anytime." 
                      ar="تواصل مع فريق العمليات أو مكتب دعم الشركات في أي وقت." 
                    />
                  </p>
                </div>
              </Reveal>

              <div className="flex flex-col gap-4">
                {contactChannels.map((channel, idx) => {
                  const ChannelIcon = Icons[channel.icon] || Mail;
                  return (
                    <Reveal key={channel.id} direction="up" delay={0.15 + idx * 0.08}>
                      <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex gap-5 items-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:border-brand-accent/40 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:scale-105 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 shrink-0">
                          <ChannelIcon className="w-5 h-5" strokeWidth={1.75} />
                        </div>
                        <div>
                          <div className="font-enHeading text-slate-900 font-semibold mb-0.5 text-xs uppercase tracking-wider">
                            <Translate en={channel.label.en} ar={channel.label.ar} />
                          </div>
                          <div className="text-slate-600 text-sm font-medium">
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
                    </Reveal>
                  );
                })}
              </div>

              {/* SLA badge */}
              <Reveal direction="up" delay={0.4}>
                <div className="p-6 rounded-3xl bg-white border border-slate-200/80 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-900 mb-0.5">
                      <Translate en="24-Hour Response SLA" ar="التزام بالرد خلال 24 ساعة" />
                    </h4>
                    <p className="text-xs text-slate-500">
                      <Translate en="Enterprise feasibility audits completed within 48 hours." ar="دراسات الجدوى للشركات تكتمل خلال 48 ساعة." />
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal direction="up" delay={0.2}>
                <div className="bg-white border border-slate-200/80 p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-accent via-cyan-400 to-brand-accent" />
                  
                  <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-enHeading font-bold text-slate-900 mb-2">
                      <Translate en="Send us a Message" ar="أرسل لنا رسالة" />
                    </h2>
                    <p className="text-sm text-slate-500">
                      <Translate en="Tell us about your facility or requirements." ar="أخبرنا عن منشأتك أو متطلباتك وسنتواصل معك فوراً." />
                    </p>
                  </div>

                  <ContactForm />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
