'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
}

interface PartnersProps {
  partners: Partner[];
}

export function Partners({ partners }: PartnersProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section id="parceiros" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Top Shadow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      {/* Bottom Shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-950 dark:via-gray-900/30 dark:to-gray-950" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/10 dark:border-primary/20 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary dark:text-accent" />
            <span className="text-sm font-medium text-foreground/80 dark:text-foreground/90">Ecossistema de Tecnologia</span>
          </motion.div>

          <h3 className="text-4xl font-bold mb-4">
            Parceiros e{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tecnologias
            </span>
          </h3>
          <p className="text-muted-foreground text-lg">
            Trabalhamos com as melhores ferramentas do mercado
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Gradientes para fade nas bordas */}
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white dark:from-gray-950 via-white/80 dark:via-gray-950/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white dark:from-gray-950 via-white/80 dark:via-gray-950/80 to-transparent z-10 pointer-events-none" />

          {/* Shine Effect que percorre */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'linear',
            }}
          >
            <div className="h-full w-32 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12" />
          </motion.div>

          {/* Container do carrossel */}
          <div className="flex overflow-hidden py-8">
            <motion.div
              className="flex gap-10 md:gap-16"
              animate={{
                x: [0, -((partners.length * (160 + 64)))],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: partners.length * 4,
                  ease: 'linear',
                },
              }}
              style={{ willChange: 'transform' }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 group relative"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />

                  {/* Reflection Effect */}
                  <div className="absolute -bottom-12 left-0 right-0 h-20 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <div className="w-full h-full bg-gradient-to-b from-gray-300/30 to-transparent rounded-lg blur-sm scale-y-[-1]" />
                  </div>

                  {/* Card com Levitação */}
                  <motion.div
                    className="relative w-40 h-20 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 group-hover:border-accent/40 group-hover:shadow-2xl flex items-center justify-center p-5 transition-all duration-300"
                    animate={
                      hoveredIndex === index
                        ? { y: -8 }
                        : { y: 0 }
                    }
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                    {/* Logo SVG */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 max-h-12"
                      />
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-xl">
                      <motion.div
                        className="absolute inset-0 -translate-x-full"
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      >
                        <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Info com Animação */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Integração com sistemas{' '}
            <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              open-source
            </span>{' '}
            e corporativos de alta performance
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-8 mt-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-bold text-accent">{partners.length}+</span> Parceiros
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-bold text-primary">100%</span> Certificados
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
