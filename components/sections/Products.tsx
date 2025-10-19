'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { ProductsCarousel } from '@/components/ProductsCarousel';

interface Product {
  id: string;
  name: string;
  title: string;
  simpleBenefit: string;
  description: string;
  badges: string[];
  features: string[];
  ctas: { text: string; variant: 'default' | 'outline'; link?: string }[];
  image: string;
  showQR?: boolean;
  isVideo?: boolean;
}

interface ProductsProps {
  products: Product[];
}

export function Products({ products }: ProductsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section
      id="produtos"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Subtle Gradient Orbs */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1])
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -150]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1])
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/10 dark:border-primary/20 px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-6 md:mb-8"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary dark:text-accent" />
            <span className="text-foreground/80 dark:text-foreground/90 font-medium text-xs md:text-sm">Produtos Premium</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Nossos{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Produtos
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Soluções completas de atendimento omnichannel, desenvolvidas para escalar seu negócio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <ProductsCarousel products={products} />
        </motion.div>
      </div>
    </section>
  );
}
