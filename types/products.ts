export interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  ctas: Array<{
    text: string;
    variant: 'default' | 'outline';
  }>;
  image: string;
  showQR?: boolean;
}
