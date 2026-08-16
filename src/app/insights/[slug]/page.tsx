import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';

import Image from 'next/image';

export default async function InsightPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8 w-full relative z-10">
        
        {/* Back Link */}
        <Reveal direction="up" delay={0.05}>
          <Link 
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-enHeading text-text-secondary hover:text-brand-accent transition-colors mb-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm px-1"
          >
            <Icon icon={ArrowLeft} className="w-4 h-4 rtl:rotate-180" />
            <Translate en="Back to Insights" ar="العودة للرؤى" />
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal direction="up" delay={0.1}>
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6 text-sm font-enHeading uppercase tracking-[0.1em] text-text-secondary">
              <span className="flex items-center gap-1.5 text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-md">
                <Icon icon={Tag} className="w-3.5 h-3.5" />
                <Translate en={post.category.en} ar={post.category.ar} />
              </span>
              <span className="flex items-center gap-1.5 opacity-70">
                <Icon icon={Calendar} className="w-4 h-4" />
                {post.date}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-enHeading text-text-highlight mb-6 leading-tight">
              <Translate en={post.title.en} ar={post.title.ar} />
            </h1>
          </div>
        </Reveal>

        {/* Featured Image */}
        <Reveal direction="up" delay={0.15}>
          <div className="aspect-[16/9] w-full rounded-md overflow-hidden mb-12 border border-brand-secondary/50 relative">
            <Image 
              src={post.imageUrl} 
              alt={post.title.en}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </Reveal>

        {/* Content */}
        <Reveal direction="up" delay={0.2}>
          <div className="prose prose-invert prose-brand max-w-none text-text-secondary text-lg leading-relaxed font-enBody">
            <Translate en={post.content.en} ar={post.content.ar} />
          </div>
        </Reveal>

      </div>
    </article>
  );
}
