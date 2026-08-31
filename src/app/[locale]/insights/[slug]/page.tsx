import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import ConversionCTA from '@/components/sections/ConversionCTA';
import ArticleRenderer from '@/components/insights/ArticleRenderer';
import { ArrowLeft, Calendar, Clock, Tag, User, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title.en} | Irken Insights`,
    description: post.excerpt.en,
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      url: `https://irken.com.eg/insights/${post.slug}`,
      images: [{ url: post.imageUrl }],
    },
  };
}

export default async function InsightPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-slate-50/50 min-h-screen">
      <article className="pt-32 sm:pt-36 pb-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8 w-full relative z-10">
          
          {/* Back Link */}
          <Reveal direction="up" delay={0.05}>
            <Link 
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-bold font-enHeading uppercase tracking-widest text-slate-600 hover:text-brand-accent transition-colors mb-8 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
              <Translate en="Back to Insights" ar="العودة للمقالات والرؤى" />
            </Link>
          </Reveal>

          {/* Header */}
          <Reveal direction="up" delay={0.1}>
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-enHeading uppercase tracking-wider text-slate-500">
                <span className="inline-flex items-center gap-1.5 text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-3.5 py-1 rounded-full font-bold">
                  <Tag className="w-3 h-3" />
                  <Translate en={post.category.en} ar={post.category.ar} />
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-brand-accent" />
                  <span><Translate en={post.readTime.en} ar={post.readTime.ar} /></span>
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-enHeading text-slate-900 mb-6 leading-[1.25] sm:leading-[1.2] rtl:leading-[1.35] tracking-tight">
                <Translate en={post.title.en} ar={post.title.ar} />
              </h1>

              {/* Author Byline Bar */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-brand-accent/10 border border-brand-accent/20 shrink-0">
                  {post.author.avatarUrl ? (
                    <Image
                      src={post.author.avatarUrl}
                      alt={post.author.name.en}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-brand-accent font-bold text-xs">
                      <User className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 font-enHeading flex items-center gap-1.5">
                    <span><Translate en={post.author.name.en} ar={post.author.name.ar} /></span>
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                  </div>
                  <div className="text-xs text-slate-500">
                    <Translate en={post.author.role.en} ar={post.author.role.ar} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Featured Image */}
          <Reveal direction="up" delay={0.15}>
            <div className="aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden mb-10 border border-slate-200/80 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] relative bg-slate-100">
              <Image 
                src={post.imageUrl} 
                alt={post.title.en}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </Reveal>

          {/* Excerpt Lead Box */}
          <Reveal direction="up" delay={0.18}>
            <div className="p-6 sm:p-7 rounded-3xl bg-brand-accent/5 border border-brand-accent/20 mb-10 text-base sm:text-lg text-slate-800 font-medium leading-relaxed rtl:leading-[1.8] italic">
              <Translate en={post.excerpt.en} ar={post.excerpt.ar} />
            </div>
          </Reveal>

          {/* Main Content Card */}
          <Reveal direction="up" delay={0.2}>
            <div className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] mb-16">
              <ArticleRenderer
                contentEn={post.content.en}
                contentAr={post.content.ar}
              />
            </div>
          </Reveal>

        </div>
      </article>

      <ConversionCTA 
        titleEn="Ready to list your parking facility on Irken?"
        titleAr="جاهز لإدراج موقفك واستقبال السائقين عبر إركن؟"
        descriptionEn="Zero risk. Zero hardware. Start receiving pre-paid driver reservations today."
        descriptionAr="بدون مخاطرة. بدون أجهزة جديدة. ابدأ في استقبال حجوزات مؤكدة ومدفوعة مسبقاً اليوم."
      />
    </main>
  );
}
