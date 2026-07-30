'use client';

import React, { useState, useEffect } from 'react';
import Translate from '@/components/ui/Translate';

export default function DashboardShowcase() {
  const [activeBookings, setActiveBookings] = useState(847);
  const [load, setLoad] = useState(67.76);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // randomly increase or decrease active bookings a little bit
      setActiveBookings(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return prev + change;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLoad(Number(((activeBookings / 1250) * 100).toFixed(2)));
  }, [activeBookings]);

  return (
    <div className="dashboard-showcase">
      <img src="/irken_solutions.svg" alt="" style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '150px', opacity: 0.03, pointerEvents: 'none' }} />
      
      <div className="dash-header">
        <div>
          <div style={{ fontFamily: 'var(--font-en-heading)', fontSize: '20px', color: 'var(--brand-text-highlight)' }}>
            <Translate en="Systemic Yield Engine" ar="محرك العوائد المنهجي" />
          </div>
          <div style={{ fontSize: '12px', fontFamily: 'monospace', color: 'var(--brand-text-secondary)', marginTop: '4px' }}>
            IRKEN.CORE_NODE_01
          </div>
        </div>
        <div style={{ fontSize: '12px', fontFamily: 'var(--font-en-heading)', color: 'var(--brand-accent)', display: 'flex', alignItems: 'center' }}>
          <span className="live-pulse"></span> <Translate en="SYSTEM LIVE" ar="النظام نشط" />
        </div>
      </div>

      <div className="metric-grid">
        <div className="metric-box">
          <div className="metric-label"><Translate en="Total Static Capacity" ar="السعة الثابتة الإجمالية" /></div>
          <div className="metric-value">1,250</div>
          <div style={{ fontSize: '11px', color: 'var(--brand-text-secondary)', marginTop: '4px' }}>
            <Translate en="Spaces Provisioned" ar="المساحات المتوفرة" />
          </div>
        </div>
        <div className="metric-box" style={{ borderColor: 'var(--brand-accent)' }}>
          <div className="metric-label" style={{ color: 'var(--brand-accent)' }}><Translate en="Active Bookings Vol." ar="حجم الحجوزات النشطة" /></div>
          <div className="metric-value active">{activeBookings.toLocaleString()}</div>
          <div style={{ fontSize: '11px', color: 'var(--brand-text-secondary)', marginTop: '4px' }}>
            <Translate en="Current Occupancy Load" ar="حمل الإشغال الحالي" />
          </div>
        </div>
      </div>

      <div className="terminal-output">
        {'>'} INITIATING CAPACITY ALGORITHM...<br/>
        {'>'} STATUS: <span>YIELD_OPTIMIZED</span><br/>
        {'>'} ACTIVE_LOAD: <span>{load}%</span><br/>
        {'>'} ROUTING REVENUE TO OPERATOR_ID: 9942
      </div>
    </div>
  );
}
