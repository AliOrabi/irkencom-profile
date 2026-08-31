import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

export default function InsightsPage() {
  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero
        titleEn="Parking Economics & Operational Intelligence"
        titleAr="اقتصاديات المواقف والتحليلات التشغيلية"
        descriptionEn="Actionable operational guides, revenue benchmarks, and market analysis for Egyptian parking lot operators and asset owners."
        descriptionAr="أدلة تشغيلية وحسابات عوائد واقعية ودراسات سوقية لمشغلي وملاك مواقف السيارات في مصر."
        badgeEn="OPERATOR INTELLIGENCE"
        badgeAr="تحليلات المشغلين"
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 sm:py-20 w-full">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} direction="up" delay={0.08 + index * 0.08}>
              <Link
                href={`/insights/${post.slug}`}
                className="group flex flex-col h-full bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                {/* Image */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                  <Image
                    src={post.imageUrl}
                    alt={post.title.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/40 text-brand-accent font-enHeading text-[11px] font-bold tracking-wider uppercase shadow-sm">
                      <Translate en={post.category.en} ar={post.category.ar} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Meta: Date + Read Time */}
                    <div className="flex items-center gap-4 mb-3 text-xs text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-accent" />
                        <span><Translate en={post.readTime.en} ar={post.readTime.ar} /></span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold font-enHeading text-slate-900 mb-3 group-hover:text-brand-accent transition-colors leading-snug rtl:leading-[1.35]">
                      <Translate en={post.title.en} ar={post.title.ar} />
                    </h2>

                    <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed rtl:leading-[1.7]">
                      <Translate en={post.excerpt.en} ar={post.excerpt.ar} />
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 text-[10px] font-bold">
                        <User className="w-3 h-3" />
                      </div>
                      <span className="font-medium text-slate-700">
                        <Translate en={post.author.name.en} ar={post.author.name.ar} />
                      </span>
                    </div>

                    <div className="flex items-center text-xs font-bold font-enHeading text-brand-accent uppercase tracking-wider group-hover:gap-1.5 transition-all">
                      <span><Translate en="Read" ar="قراءة" /></span>
                      <ArrowRight className="w-3.5 h-3.5 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <ConversionCTA
        titleEn="Want to turn your parking bays into digital revenue?"
        titleAr="هل تريد تحويل مساحاتك الشاغرة إلى إيرادات رقمية مؤكدة؟"
        descriptionEn="Join Egypt's digital parking reservation network. List your facility in 2 minutes with zero setup fees."
        descriptionAr="انضم إلى شبكة حجوزات المواقف الرقمية في مصر. سجّل موقفك في دقيقتين وبدون أي رسوم إعداد."
      />
    </main>
  );
}
