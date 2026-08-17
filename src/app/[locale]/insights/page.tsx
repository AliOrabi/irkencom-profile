import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { ArrowRight, Calendar } from 'lucide-react';

export default function InsightsPage() {
  return (
    <main className="bg-slate-50/50 min-h-screen">
      <PageHero 
        titleEn="Urban Mobility Insights & News"
        titleAr="أخبار ورؤى التنقل الحضري"
        descriptionEn="The latest industry intelligence on smart parking monetization, computer vision LPR, and MENA proptech trends."
        descriptionAr="أحدث التحليلات والتقارير حول تسييل مواقف السيارات، وتقنيات التعرف على اللوحات، والابتكارات العقارية في المنطقة."
        badgeEn="INDUSTRY INTELLIGENCE"
        badgeAr="تحليلات القطاع"
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 w-full">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} direction="up" delay={0.08 + index * 0.08}>
              <Link 
                href={`/insights/${post.slug}`}
                className="group flex flex-col h-full bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
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
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-brand-accent font-enHeading text-[11px] font-bold tracking-wider uppercase shadow-sm">
                      <Translate en={post.category.en} ar={post.category.ar} />
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-xs text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold font-enHeading text-slate-900 mb-3 group-hover:text-brand-accent transition-colors leading-snug">
                      <Translate en={post.title.en} ar={post.title.ar} />
                    </h2>
                    
                    <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                      <Translate en={post.excerpt.en} ar={post.excerpt.ar} />
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold font-enHeading text-brand-accent uppercase tracking-wider group-hover:gap-2 transition-all">
                    <span><Translate en="Read Full Article" ar="قراءة المقال بالكامل" /></span>
                    <ArrowRight className="w-3.5 h-3.5 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <ConversionCTA 
        titleEn="Want custom mobility intelligence for your property?"
        titleAr="هل ترغب في دراسة مخصصة لمنشأتك العقارية؟"
        descriptionEn="Our data analysts evaluate traffic counts, turnover velocity, and pricing elasticity across Egyptian commercial corridors."
        descriptionAr="يقوم محللو البيانات لدينا بدراسة الكثافات المرورية ومعدلات الدوران والمرونة السعرية للمنشآت التجارية."
      />
    </main>
  );
}
