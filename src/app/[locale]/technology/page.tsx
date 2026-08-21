import React from 'react';
import type { Metadata } from 'next';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { 
  ShieldCheck, 
  Radio, 
  Smartphone, 
  Camera
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology & Hardware Compatibility | Irken Solutions',
  description: 'Hardware-agnostic digital parking infrastructure. Works seamlessly with existing barrier gates (FAAC, BFT, CAME, ZKTeco), Egyptian Arabic plate OCR, RFID, and handheld POS apps with 0 EGP hardware spend.',
};

export default function TechnologyPage() {
  const hardwareIntegrations = [
    {
      title: { en: "Boom Barrier Gates", ar: "بوابات الدخول الآلية (Boom Barriers)" },
      brands: "FAAC · BFT · CAME · ZKTeco · Magnetic Autocontrol · Centurion",
      description: { 
        en: "Relay & cloud controller overlay. Trigger barrier opening automatically upon valid driver reservation check-in with zero rewiring.", 
        ar: "ربط برمجي فوري يفتح البوابات تلقائياً عند وصول السائق صاحب الحجز المؤكد بدون الحاجة لتغيير المحركات أو التوصيلات." 
      },
      icon: Radio
    },
    {
      title: { en: "Egyptian Arabic Plate OCR (LPR)", ar: "كاميرات قراءة اللوحات المصرية (LPR / ANPR)" },
      brands: "Hikvision · Dahua · Axis · Uniview · Custom RTSP Streams",
      description: { 
        en: "Proprietary AI OCR engine trained specifically on Egyptian vehicle license plates (e.g. ق س د ٩٢٨١), ensuring sub-second matching.", 
        ar: "خوارزميات ذكاء اصطناعي مدربة خصيصاً على قراءة الحروف والأرقام العربية للوحات السيارات في مصر بدقة فائقة وفترة استجابة لحظية." 
      },
      icon: Camera
    },
    {
      title: { en: "Handheld Attendant Terminals (POS)", ar: "أجهزة ونقاط البيع المحمولة للمشرفين" },
      brands: "Android POS · Sunmi · Pax · Standard Mobile Phones",
      description: { 
        en: "For facilities without automatic barriers: our lightweight mobile app lets ground attendants verify incoming reservations via QR or plate number in 2 taps.", 
        ar: "للجراجات اللي مفيهاش بوابات إلكترونية: تطبيق خفيف وسريع للمشرفين لمسح كود QR أو إدخال رقم العربية والتحقق من الحجز في ثانيتين." 
      },
      icon: Smartphone
    },
    {
      title: { en: "Secure Payment Gateway Integration", ar: "بوابة دفع إلكترونية آمنة ومعتمدة في مصر" },
      brands: "InstaPay · Meeza Cards · Mobile Wallets (Vodafone Cash, Orange, etc.) · Visa / Mastercard",
      description: { 
        en: "Direct pre-settled transactions. Drivers pay before arrival, and funds are reconciled and transferred daily to the operator's account.", 
        ar: "دفع إلكتروني مسبق قبل الوصول، مع مطابقة مالية لحظية وتحويل يومي للأرباح لحساب المشغل البنكي." 
      },
      icon: ShieldCheck
    }
  ];

  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero 
        titleEn="Hardware-Agnostic Parking Infrastructure."
        titleAr="بنية رقمية ذكية متوافقة مع كافة الأجهزة والبوابات القائمة."
        descriptionEn="No new hardware to buy. Our software overlays directly onto your existing gates, cameras, and attendant devices in 48 hours."
        descriptionAr="مش هتحتاج تشتري أي أجهزة جديدة. نظام إركن بيركب برمجياً على بواباتك وكاميراتك وأجهزة المشرفين الحالية خلال 48 ساعة فقط."
        badgeEn="PROPRIETARY TECHNOLOGY"
        badgeAr="التقنية والتوافق الفني"
      />

      {/* ── Core Value: 0 CapEx Reassurance ───────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/15 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8 rtl:md:border-r-0 rtl:md:border-l rtl:md:pr-0 rtl:md:pl-8">
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-2">
                0 EGP HARDWARE COST
              </span>
              <h3 className="text-2xl font-bold font-enHeading mb-2">
                <Translate en="No Replacement Required" ar="بدون استبدال أي بوابات" />
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                <Translate 
                  en="Keep your current gates, loop detectors, and access cards. Irken adds the digital reservation layer on top." 
                  ar="احتفظ ببواباتك وكروتك الحالية كما هي. إركن بتضيف طبقة الحجز والتسوية الرقمية فوق نظامك القائم." 
                />
              </p>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8 rtl:md:border-r-0 rtl:md:border-l rtl:md:pr-0 rtl:md:pl-8">
              <span className="text-[11px] font-mono text-brand-accent font-bold uppercase tracking-widest block mb-2">
                48-HOUR ACTIVATION
              </span>
              <h3 className="text-2xl font-bold font-enHeading mb-2">
                <Translate en="Rapid Cloud Deployment" ar="ربط سحابي خلال 48 ساعة" />
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                <Translate 
                  en="Zero civil work or digging. Connect via cloud relay or Android app and go live on irken.eg immediately." 
                  ar="بدون أي حفر أو تكسير. الربط بيتم سحابياً أو عبر تطبيق المشرفين للظهور الفوري على irken.eg." 
                />
              </p>
            </div>

            <div>
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-2">
                99.9% UPTIME SLA
              </span>
              <h3 className="text-2xl font-bold font-enHeading mb-2">
                <Translate en="Enterprise Reliability" ar="استقرار واعتمادية للشركات" />
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                <Translate 
                  en="Offline-first fallback support ensures your parking lot functions smoothly even during network dips." 
                  ar="نظام حماية أوفلاين يضمن استمرار دخول وخروج السيارات حتى في حال انقطاع الإنترنت المؤقت." 
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hardware Integrations Grid ─────────────────────────────────── */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-enHeading uppercase tracking-widest text-brand-accent mb-3 block">
            <Translate en="COMPREHENSIVE COMPATIBILITY" ar="توافق شامل مع معدات السوق" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-enHeading text-slate-900 tracking-tight">
            <Translate 
              en="Compatible with Every Major Barrier & Camera System in Egypt" 
              ar="متوافق مع مختلف أنواع البوابات والكاميرات العاملة في مصر" 
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hardwareIntegrations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-brand-accent">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-200">
                        Plug & Play
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-enHeading text-slate-900 mb-2 tracking-tight">
                      <Translate en={item.title.en} ar={item.title.ar} />
                    </h3>
                    
                    <div className="text-xs font-mono text-brand-accent font-semibold mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      {item.brands}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed font-normal max-w-prose">
                      <Translate en={item.description.en} ar={item.description.ar} />
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ConversionCTA 
        titleEn="Want to verify compatibility with your specific parking gates?"
        titleAr="عايز تتأكد من توافق نظام إركن مع بوابات جراجك الحالية؟"
        descriptionEn="Our engineering team performs a free remote technical assessment within 24 hours. No commitment required."
        descriptionAr="فريقنا الهندسي بيعمل فحص فني مجاني وتأكيد توافق خلال 24 ساعة بدون أي التزام."
        primaryButtonTextEn="Request Free Technical Assessment"
        primaryButtonTextAr="طلب فحص فني مجاني لبواباتك"
        primaryButtonHref="/contact"
      />
    </main>
  );
}
