export interface Product {
  id: string;
  name: string;
  title: string;
  simpleBenefit: string;
  description: string;
  badges: string[];
  features: string[];
  ctas: Array<{
    text: string;
    variant: 'default' | 'outline';
    link?: string;
  }>;
  image: string;
  isVideo?: boolean;
  showQR?: boolean;
}
