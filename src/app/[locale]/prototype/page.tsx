'use client';

import React from 'react';

export default function PrototypePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-enBody text-slate-900 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Soft Background Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="flex-1 space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold">
            Prototype Architecture
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-enHeading leading-[1.1] tracking-tight">
            Facilitating Payments <br/>
            <span className="text-brand-accent">Everywhere.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl">
            A modern, airy fintech aesthetic that prioritizes rounded shapes, soft depth, and approachability. This replaces the rigid, developer-tool look.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-brand-primary text-white rounded-full font-semibold hover:bg-brand-primary/90 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-0.5">
              Create an account
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all">
              Contact sales
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full aspect-square bg-gradient-to-tr from-brand-accent/20 to-blue-500/20 rounded-[3rem] p-8 flex items-center justify-center">
            {/* Mockup Placeholder */}
            <div className="w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center justify-center text-slate-400">
              [ Dashboard Visual ]
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY LOGOS */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="h-8 w-32 bg-slate-200 rounded"></div>
            <div className="h-8 w-24 bg-slate-200 rounded"></div>
            <div className="h-8 w-40 bg-slate-200 rounded"></div>
            <div className="h-8 w-28 bg-slate-200 rounded"></div>
            <div className="h-8 w-36 bg-slate-200 rounded"></div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS GRID (Offset Cards Pattern) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-enHeading mb-6">Everything you need to grow</h2>
          <p className="text-lg text-slate-500">
            We offer a comprehensive suite of products designed to handle your payments seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {[
            { title: "Online Payment", color: "bg-blue-500", icon: "🌐" },
            { title: "POS Solutions", color: "bg-brand-accent", icon: "💳" },
            { title: "Payment Links", color: "bg-purple-500", icon: "🔗" },
          ].map((item, i) => (
            <div key={i} className="relative group">
              {/* Offset Background */}
              <div 
                className={`absolute inset-0 rounded-[2rem] transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3 ${item.color}`}
                style={{ transform: 'translate(12px, 12px)' }}
              />
              {/* Foreground Card */}
              <div className="relative bg-white border border-slate-100 p-8 rounded-[2rem] h-full flex flex-col shadow-sm group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 ${item.color}/10`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 mb-8 flex-1">
                  Accept payments anywhere with our robust, developer-friendly infrastructure designed for scale.
                </p>
                <div className="mt-auto">
                  <span className={`font-semibold text-sm flex items-center gap-2 text-brand-primary`}>
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BENEFITS (3-Column Layout) */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-enHeading mb-16 text-center">Built for convenience</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Highest Success Rates", desc: "Our smart routing engine ensures every transaction has the highest probability of success." },
              { title: "Developer Friendly", desc: "Clean APIs, thorough documentation, and SDKs that your engineering team will love." },
              { title: "Bank-Grade Security", desc: "PCI-DSS Level 1 certified. Your data and your customers' data is always protected." },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/20" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Dark Blue Background block */}
        <div className="absolute inset-4 rounded-[3rem] bg-brand-primary z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-enHeading mb-8">
            Ready to get started?
          </h2>
          <p className="text-brand-secondary/80 text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of businesses that trust us to power their payments and accelerate their growth.
          </p>
          <button className="px-10 py-5 bg-brand-accent text-white rounded-full font-bold text-lg hover:bg-brand-accent/90 hover:-translate-y-1 hover:shadow-xl transition-all shadow-[0_10px_40px_-10px_rgba(86,155,170,0.8)]">
            Create an account today
          </button>
        </div>
      </section>

    </div>
  );
}
