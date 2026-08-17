import React from 'react';
import Translate from '@/components/ui/Translate';
import Reveal from '@/components/ui/Reveal';
import { Feature } from '@/types';
import { 
  Database, 
  BarChart3, 
  Network, 
  Settings, 
  Camera, 
  Zap, 
  FileSearch, 
  ShieldCheck, 
  Link as LinkIcon, 
  ToggleRight, 
  SmartphoneNfc, 
  KeySquare,
  Cpu
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Database,
  BarChart3,
  Network,
  Settings,
  Camera,
  Zap,
  FileSearch,
  ShieldCheck,
  LinkIcon,
  ToggleRight,
  SmartphoneNfc,
  KeySquare,
};

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridClass = 
    columns === 2 ? 'md:grid-cols-2' : 
    columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 
    'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-24 bg-slate-50/50 relative">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className={`grid gap-8 ${gridClass}`}>
          {features.map((feature, index) => {
            const IconComponent = (feature.icon && iconMap[feature.icon]) ? iconMap[feature.icon] : Cpu;

            return (
              <Reveal key={feature.id || index} delay={index * 0.08} direction="up">
                <div className="bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-10 h-full flex flex-col justify-between shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
                  <div>
                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-105 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    
                    <h3 className="text-xl font-bold font-enHeading text-slate-900 mb-3 group-hover:text-brand-accent transition-colors">
                      <Translate en={feature.title.en} ar={feature.title.ar} />
                    </h3>
                    
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      <Translate en={feature.description.en} ar={feature.description.ar} />
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center text-xs font-semibold font-enHeading uppercase tracking-wider text-brand-accent">
                    <span><Translate en="ENTERPRISE READY" ar="جاهز للشركات" /></span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
