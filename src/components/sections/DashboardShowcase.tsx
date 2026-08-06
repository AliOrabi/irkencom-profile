'use client';

import React, { useState, useEffect } from 'react';
import Translate from '@/components/ui/Translate';

export default function DashboardShowcase() {
  const [activeBookings, setActiveBookings] = useState(843);
  const [load, setLoad] = useState(67.44);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBookings(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return prev + change;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLoad(Number(((activeBookings / 1250) * 100).toFixed(2)));
  }, [activeBookings]);

  return (
    <div className="relative z-10 w-full max-w-lg mx-auto">
      {/* Offset decorative frame */}
      <div className="absolute inset-0 bg-[#071318] border border-brand-accent/50 ltr:translate-x-4 rtl:-translate-x-4 translate-y-4 -z-10 hidden sm:block rounded-md"></div>
      
      {/* Main Card */}
      <div className="relative border border-brand-accent bg-[#0a1120] shadow-glow-accent-sm overflow-hidden p-8 border-l-4 border-l-brand-accent rounded-md">
        <img src="/irken_logo_white.svg" alt="" className="absolute -bottom-[10%] -right-[5%] w-[150px] opacity-[0.03] pointer-events-none" />
        
        {/* Header */}
        <div className="flex justify-between items-start border-b border-brand-secondary/50 pb-6 mb-6">
          <div>
            <h3 className="font-enHeading text-xl text-white mb-1">
              <Translate en="Systemic Yield Engine" ar="محرك العوائد المنهجي" />
            </h3>
            <div className="text-xs font-mono text-text-secondary">
              IRKEN.CORE_NODE_01
            </div>
          </div>
          <div className="text-xs font-enHeading text-brand-accent flex items-center gap-2 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-accent shadow-glow-accent-sm"></span> 
            <Translate en="SYSTEM LIVE" ar="النظام نشط" />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border border-brand-secondary p-4 bg-brand-secondary/10 rounded-md">
            <div className="text-xs font-enHeading text-text-secondary uppercase tracking-widest mb-3">
              <Translate en="Total Static Capacity" ar="السعة الثابتة الإجمالية" />
            </div>
            <div className="text-3xl font-enHeading text-white mb-1">1,250</div>
            <div className="text-xs text-text-secondary">
              <Translate en="Spaces Provisioned" ar="المساحات المتوفرة" />
            </div>
          </div>
          <div className="border border-brand-accent p-4 bg-brand-accent/5 rounded-md">
            <div className="text-xs font-enHeading text-brand-accent uppercase tracking-widest mb-3">
              <Translate en="Active Bookings Vol." ar="حجم الحجوزات النشطة" />
            </div>
            <div className="text-3xl font-enHeading text-brand-accent mb-1">{activeBookings.toLocaleString()}</div>
            <div className="text-xs text-text-secondary">
              <Translate en="Current Occupancy Load" ar="حمل الإشغال الحالي" />
            </div>
          </div>
        </div>

        {/* Terminal Output */}
        <div className="border border-brand-secondary bg-[#040810] p-4 text-xs font-mono text-text-secondary leading-relaxed rounded-md">
          {'>'} INITIATING CAPACITY ALGORITHM...<br/>
          {'>'} STATUS: <span className="text-brand-accent font-bold">YIELD_OPTIMIZED</span><br/>
          {'>'} ACTIVE_LOAD: <span className="text-brand-accent font-bold">{load}%</span><br/>
          {'>'} ROUTING REVENUE TO OPERATOR_ID: 9942
        </div>
      </div>
    </div>
  );
}
