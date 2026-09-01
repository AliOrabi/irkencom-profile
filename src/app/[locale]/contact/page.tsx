import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ContactForm from '@/components/sections/ContactForm';
import Translate from '@/components/ui/Translate';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { contactChannels } from '@/config/contact';
import Reveal from '@/components/ui/Reveal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return {
    title: isArabic
      ? 'تواصل معنا | دعم مشغلي المواقف وحجز ساحات الانتظار — إركن مصر'
      : 'Contact Irken Operations & Parking Partner Support — Cairo, Egypt',
    description: isArabic
      ? 'تواصل مع فريق عمليات إركن للاستفسار عن تسجيل الجراجات وساحات الانتظار، حجز الركنات، وتسوية المستحقات المالية عبر الواتساب أو الهاتف: 01222200479.'
      : 'Get in touch with Irken operations team in Cairo. Inquiries about parking facility listings, driver reservation payouts, and technical support.',
    keywords: [
      'تواصل مع إركن',
      'اركن',
      'إركن',
      'اركن فين',
      'خدمة عملاء إركن',
      'تسجيل جراج',
      'إدارة ساحات الانتظار',
      'حجز ركنة',
      'واتساب إركن',
      'Irken Solutions',
      'contact irken',
    ],
    alternates: {
      canonical: `https://irken.com.eg/${locale}/contact`,
      languages: {
        ar: 'https://irken.com.eg/ar/contact',
        en: 'https://irken.com.eg/en/contact',
      },
    },
  };
}

const Icons: Record<string, React.ElementType> = {
  Phone,
  Mail,
  MapPin,
  Clock,
};

export default function ContactPage() {
  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero 
        titleEn="Connect with Irken Operations"
        titleAr="تواصل مع فريق عمليات إركن"
        descriptionEn="Have questions about listing your parking bays, payment settlements, or operator onboarding? We are ready to assist you."
        descriptionAr="لديك استفسار حول تسجيل موقفك، تسوية المستحقات المالية، أو خطوات الانضمام؟ فريقنا جاهز لمساعدتك فوراً."
        badgeEn="OPERATOR & PARTNER SUPPORT"
        badgeAr="دعم المشغلين والشركاء"
      />

      <section className="py-24 relative overflow-hidden" aria-labelledby="contact-heading">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <Reveal direction="up" delay={0.1}>
                <div>
                  <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold font-enHeading text-slate-900 mb-3">
                    <Translate en="Direct Channels" ar="قنوات الاتصال المباشر" />
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    <Translate 
                      en="Reach out to our operations team or partner support desk anytime via phone, WhatsApp, or email." 
                      ar="تواصل مع مسؤولي العمليات أو مكتب دعم الشركاء في أي وقت عبر الهاتف أو واتساب أو البريد." 
                    />
                  </p>
                </div>
              </Reveal>

              <div className="flex flex-col gap-4">
                {contactChannels.map((channel, idx) => {
                  const ChannelIcon = Icons[channel.icon] || Mail;
                  const isPhone = channel.type === 'phone';
                  const isEmail = channel.type === 'email';
                  const href = isPhone ? `tel:${channel.value}` : isEmail ? `mailto:${channel.value}` : undefined;

                  return (
                    <Reveal key={channel.id} direction="up" delay={0.15 + idx * 0.08}>
                      {href ? (
                        <a
                          href={href}
                          className="bg-white border border-slate-200/80 p-6 rounded-3xl flex gap-5 items-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:border-brand-accent/40 hover:shadow-md transition-all duration-300 group cursor-pointer"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:scale-105 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 shrink-0">
                            <ChannelIcon className="w-5 h-5" strokeWidth={1.75} />
                          </div>
                          <div>
                            <div className="font-enHeading text-slate-900 font-semibold mb-0.5 text-xs uppercase tracking-wider">
                              <Translate en={channel.label.en} ar={channel.label.ar} />
                            </div>
                            <div className="text-slate-600 text-sm font-medium group-hover:text-brand-accent transition-colors">
                              <span dir="ltr" className="inline-block font-mono">
                                {channel.displayValue ? (
                                  <Translate en={channel.displayValue.en} ar={channel.displayValue.ar} />
                                ) : (
                                  channel.value
                                )}
                              </span>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex gap-5 items-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] group">
                          <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                            <ChannelIcon className="w-5 h-5" strokeWidth={1.75} />
                          </div>
                          <div>
                            <div className="font-enHeading text-slate-900 font-semibold mb-0.5 text-xs uppercase tracking-wider">
                              <Translate en={channel.label.en} ar={channel.label.ar} />
                            </div>
                            <div className="text-slate-600 text-sm font-medium">
                              {channel.displayValue ? (
                                <Translate en={channel.displayValue.en} ar={channel.displayValue.ar} />
                              ) : (
                                channel.value
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </Reveal>
                  );
                })}

                {/* WhatsApp Fast-Track card */}
                <Reveal direction="up" delay={0.35}>
                  <a
                    href="https://wa.me/201222200479?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20%D8%A5%D8%B1%D9%83%D9%86%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D8%A7%D9%84%D9%85%D8%B4%D8%BA%D9%84%D9%8A%D9%86."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 flex items-center gap-4 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-enHeading uppercase tracking-wider text-emerald-800 mb-0.5">
                        <Translate en="Direct WhatsApp Chat" ar="محادثة واتساب مباشرة" />
                      </h4>
                      <p className="text-xs text-emerald-700 font-medium">
                        <Translate en="Instant responses from our Cairo support reps" ar="ردود فورية من فريق العمليات في القاهرة" />
                      </p>
                    </div>
                  </a>
                </Reveal>
              </div>

              {/* SLA badge */}
              <Reveal direction="up" delay={0.4}>
                <div className="p-6 rounded-3xl bg-white border border-slate-200/80 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-enHeading uppercase tracking-wider text-slate-900 mb-0.5">
                      <Translate en="Rapid Response SLA" ar="استجابة سريعة لطلبات المشغلين" />
                    </h4>
                    <p className="text-xs text-slate-500">
                      <Translate en="Operator facility listings processed within 24 hours." ar="معاينة وتفعيل المواقف تتم خلال 24 إلى 48 ساعة." />
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
                      <Translate en="Send us a Message" ar="أرسل لنا استفسارك" />
                    </h2>
                    <p className="text-sm text-slate-500">
                      <Translate en="Tell us about your facility or questions, and we will get back to you promptly." ar="أخبرنا عن موقفك أو استفسارك وسيتواصل معك أحد مسؤولي إركن فوراً." />
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
