export interface AppTemplate {
  id: string;
  name: string;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  features: string[];
  mockupType: 'catalog' | 'booking' | 'dashboard' | 'ai';
}

export interface FeatureItem {
  id: string;
  name: string;
  description: string;
  category: string;
  cost: number;
  timeDays: number;
  icon: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  bullets: string[];
}

export interface UseCaseTab {
  id: string;
  title: string;
  icon: string;
  subtitle: string;
  description: string;
  mockTitle: string;
  mockSubtitle: string;
}

export interface Integration {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
  tags: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
