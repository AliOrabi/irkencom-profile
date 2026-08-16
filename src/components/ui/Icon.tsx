import { LucideIcon, LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconWrapperProps extends Omit<LucideProps, 'ref'> {
  icon: LucideIcon;
}

/**
 * A centralized wrapper for lucide-react icons.
 * Enforces a strict geometric technical feel with consistent stroke widths,
 * and ensures the icon doesn't squish in flex containers.
 */
export function Icon({ 
  icon: IconComponent, 
  className, 
  strokeWidth = 1.5, 
  ...props 
}: IconWrapperProps) {
  return (
    <IconComponent 
      className={cn("shrink-0", className)} 
      strokeWidth={strokeWidth} 
      {...props} 
    />
  );
}
