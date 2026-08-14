'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import SectionBadge from '@/components/ui/SectionBadge';
import { ArrowRight, Calendar } from 'lucide-react';

export default function BlogPreview() {
  // Get the latest 3 posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog-preview" className="py-24 relative border-t border-brand-secondary overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        
        {/* Header */}
        <Reveal direction="up" delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <SectionBadge en="Our Insights" ar="رؤيتنا" />
              <h2 className="text-3xl md:text-4xl font-bold font-enHeading text-text-primary mb-4">
                <Translate en="Latest from IRKEN" ar="آخر أخبار ورؤى إركن" />
              </h2>
              <p className="text-text-secondary text-base">
                <Translate 
                  en="Perspectives on smart mobility, parking infrastructure, and IoT innovation." 
                  ar="وجهات نظر حول التنقل الذكي، البنية التحتية للمواقف، والابتكار في إنترنت الأشياء." 
                />
              </p>
            </div>
            
            <Link 
              href="/insights"
              className="inline-flex items-center text-sm font-enHeading text-brand-accent hover:underline uppercase tracking-[0.1em] font-medium"
            >
              <Translate en="View all insights" ar="عرض كل الرؤى" />
              <ArrowRight className="w-4 h-4 ltr:ml-2 rtl:mr-2 rtl:rotate-180" />
            </Link>
          </div>
        </Reveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <Reveal key={post.slug} direction="up" delay={0.1 + index * 0.1}>
              <Link 
                href={`/insights/${post.slug}`}
                className="group flex flex-col h-full border border-brand-secondary bg-brand-primary/80 rounded-md overflow-hidden hover:border-brand-accent/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                {/* Image */}
                <div className="aspect-[16/9] w-full overflow-hidden bg-brand-secondary/50 relative">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 text-xs font-enHeading uppercase tracking-[0.1em] text-text-secondary">
                    <span className="text-brand-accent">
                      <Translate en={post.category.en} ar={post.category.ar} />
                    </span>
                    <span className="w-1 h-1 bg-brand-secondary rounded-full" aria-hidden="true" />
                    <span className="flex items-center gap-1.5 opacity-70">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold font-enHeading text-text-primary mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                    <Translate en={post.title.en} ar={post.title.ar} />
                  </h3>
                  
                  <p className="text-sm text-text-secondary line-clamp-2 mb-6">
                    <Translate en={post.excerpt.en} ar={post.excerpt.ar} />
                  </p>
                  
                  <div className="mt-auto flex items-center text-xs font-enHeading text-brand-accent font-medium uppercase tracking-[0.1em]">
                    <Translate en="Read Article" ar="اقرأ المقال" />
                    <ArrowRight className="w-3.5 h-3.5 ltr:ml-2 rtl:mr-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
