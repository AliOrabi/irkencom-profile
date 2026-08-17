import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import ConversionCTA from '@/components/sections/ConversionCTA';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export default async function InsightPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-slate-50/50 min-h-screen">
      <article className="pt-36 pb-20">
        <div className="max-w-[860px] mx-auto px-6 lg:px-8 w-full relative z-10">
          
          {/* Back Link */}
          <Reveal direction="up" delay={0.05}>
            <Link 
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold font-enHeading uppercase tracking-widest text-slate-500 hover:text-brand-accent transition-colors mb-10 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
              <Translate en="Back to Insights" ar="العودة للرؤى والأخبار" />
            </Link>
          </Reveal>

          {/* Header */}
          <Reveal direction="up" delay={0.1}>
            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-6 text-xs font-enHeading uppercase tracking-wider text-slate-500">
                <span className="inline-flex items-center gap-1.5 text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-3.5 py-1 rounded-full font-bold">
                  <Tag className="w-3 h-3" />
                  <Translate en={post.category.en} ar={post.category.ar} />
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 mb-6 leading-[1.2]">
                <Translate en={post.title.en} ar={post.title.ar} />
              </h1>
            </div>
          </Reveal>

          {/* Featured Image */}
          <Reveal direction="up" delay={0.15}>
            <div className="aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden mb-12 border border-slate-200/80 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] relative bg-slate-100">
              <Image 
                src={post.imageUrl} 
                alt={post.title.en}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </Reveal>

          {/* Content Card */}
          <Reveal direction="up" delay={0.2}>
            <div className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] mb-16">
              <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed font-enBody">
                <Translate en={post.content.en} ar={post.content.ar} />
              </div>
            </div>
          </Reveal>

        </div>
      </article>

      <ConversionCTA 
        titleEn="Ready to implement smart mobility on your property?"
        titleAr="هل أنت مستعد لتطبيق حلول التنقل الذكي في منشأتك؟"
        descriptionEn="Speak with our solutions team to receive a feasibility audit within 48 hours."
        descriptionAr="تواصل مع فريقنا الهندسي للحصول على دراسة جدوى فنية خلال 48 ساعة."
      />
    </main>
  );
}
