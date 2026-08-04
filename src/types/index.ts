export type LocalizedString = {
  en: string;
  ar: string;
};

// Navigation Types
export interface NavItem {
  id: string;
  label: LocalizedString;
  href?: string;
  subItems?: NavItem[];
  order: number;
}

// Contact Types
export interface ContactChannel {
  id: string;
  type: 'phone' | 'email' | 'address' | 'social';
  label: LocalizedString;
  value: string; // The raw value (e.g., '+20 1222200479')
  displayValue?: LocalizedString; // Formatted value if localized
  icon: string; // Lucide icon name
  order: number;
}

// Content Types
export interface Feature {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  order: number;
}

export interface Solution {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  metrics?: {
    value: string;
    label: LocalizedString;
  }[];
  order: number;
}
