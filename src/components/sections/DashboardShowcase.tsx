'use client';

import React, { useState, useEffect } from 'react';
import Translate from '@/components/ui/Translate';
import Image from 'next/image';

export default function DashboardShowcase() {
  const [activeReservations, setActiveReservations] = useState(843);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReservations(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return prev + change;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const load = Number(((activeReservations / 1250) * 100).toFixed(2));

  return (
    <div className="relative z-10 w-full max-w-lg mx-auto">
      {/* Offset decorative frame */}
      <div 
        className="absolute inset-0 bg-brand-accent/20 border border-brand-accent/30 ltr:translate-x-4 rtl:-translate-x-4 translate-y-4 -z-10 hidden sm:block rounded-3xl" 
        aria-hidden="true" 
      />
      
      {/* Main Card */}
      <div className="relative border border-slate-700/60 bg-[#0F1D2B]/95 backdrop-blur-xl overflow-hidden p-7 sm:p-8 rounded-3xl shadow-2xl">
        <Image 
          src="/irken-white.png" 
          alt="" 
          width={160} 
          height={160} 
          className="absolute -bottom-[10%] -right-[5%] w-[160px] opacity-[0.04] pointer-events-none" 
        />
        
        {/* Header */}
        <div className="flex justify-between items-start border-b border-slate-700/50 pb-5 mb-6">
          <div>
            <h3 className="font-enHeading text-lg sm:text-xl font-bold text-white mb-1">
              <Translate en="Systemic Yield Engine" ar="محرك العوائد المنهجي" />
            </h3>
            <div className="text-xs font-mono text-slate-400">
              IRKEN.CORE_NODE_01
            </div>
          </div>
          <div className="text-xs font-enHeading text-brand-accent flex items-center gap-2 uppercase tracking-wider bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span> 
            <Translate en="SYSTEM LIVE" ar="النظام نشط" />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border border-slate-700/60 p-4 bg-slate-800/40 rounded-2xl">
            <div className="text-[11px] font-enHeading text-slate-400 uppercase tracking-wider mb-2">
              <Translate en="Static Capacity" ar="السعة الثابتة" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-enHeading text-white mb-1">1,250</div>
            <div className="text-xs text-slate-400">
              <Translate en="Spaces Provisioned" ar="المساحات المتوفرة" />
            </div>
          </div>
          <div className="border border-brand-accent/40 p-4 bg-brand-accent/10 rounded-2xl">
            <div className="text-[11px] font-enHeading text-brand-accent uppercase tracking-wider mb-2">
              <Translate en="Active Reservations" ar="حجم الحجوزات" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-enHeading text-brand-accent mb-1">{activeReservations.toLocaleString()}</div>
            <div className="text-xs text-slate-400">
              <Translate en="Current Occupancy" ar="حمل الإشغال الحالي" />
            </div>
          </div>
        </div>

        {/* Telemetry Log */}
        <div className="border border-slate-700/60 bg-black/40 p-4 text-xs font-mono text-slate-300 leading-relaxed rounded-2xl">
          <div className="text-slate-400 font-medium">LIVE LPR FEED: GATE_04 NORTH [PASS]</div>
          <div>DISPATCH: <span className="text-brand-accent font-bold">TICKETLESS INGRESS VALIDATED</span></div>
          <div>DYNAMIC YIELD: <span className="text-brand-accent font-bold">ACTIVE LOAD {load}%</span></div>
          <div className="text-slate-400">TELEMETRY SYNC: 12ms TO EDGE GATEWAY</div>
        </div>
      </div>
    </div>
  );
}
