import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import SectionBadge from '@/components/ui/SectionBadge';
import { ArrowRight, Calendar } from 'lucide-react';

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        
        {/* Header */}
        <Reveal direction="up" delay={0.05}>
          <div className="mb-16 max-w-3xl">
            <SectionBadge en="Our Insights" ar="رؤيتنا" />
            <h1 className="text-4xl md:text-5xl font-bold font-enHeading text-text-primary mb-6">
              <Translate en="Insights & News" ar="أخبار ورؤى" />
            </h1>
            <p className="text-lg text-text-secondary">
              <Translate 
                en="The latest on smart parking, digital transformation, and proptech innovation." 
                ar="أحدث ما توصلت إليه تقنيات المواقف الذكية، التحول الرقمي، والابتكارات العقارية." 
              />
            </p>
          </div>
        </Reveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} direction="up" delay={0.1 + index * 0.1}>
              <Link 
                href={`/insights/${post.slug}`}
                className="group flex flex-col h-full border border-brand-secondary bg-brand-primary/80 rounded-md overflow-hidden hover:border-brand-accent/50 transition-all duration-300 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
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
                  <div className="flex items-center gap-4 mb-4 text-xs font-enHeading uppercase tracking-[0.1em] text-text-secondary">
                    <span className="text-brand-accent">
                      <Translate en={post.category.en} ar={post.category.ar} />
                    </span>
                    <span className="flex items-center gap-1.5 opacity-70">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold font-enHeading text-text-primary mb-3 group-hover:text-brand-accent transition-colors">
                    <Translate en={post.title.en} ar={post.title.ar} />
                  </h2>
                  
                  <p className="text-sm text-text-secondary mb-6 line-clamp-3">
                    <Translate en={post.excerpt.en} ar={post.excerpt.ar} />
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-enHeading text-brand-accent font-medium uppercase tracking-[0.1em]">
                    <Translate en="Read More" ar="اقرأ المزيد" />
                    <ArrowRight className="w-4 h-4 ltr:ml-2 rtl:mr-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        
      </div>
    </div>
  );
}
