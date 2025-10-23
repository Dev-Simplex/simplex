'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Award } from 'lucide-react';
import { useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-bl from-accent/5 to-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-0">
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
            <Award className="w-3 h-3 md:w-4 md:h-4 text-primary dark:text-accent" />
            <span className="text-foreground/80 dark:text-foreground/90 font-medium text-xs md:text-sm">Aprovado por Clientes</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
            O Que Dizem{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Nossos Clientes
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Confiança construída através de resultados reais
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700" />

            <Card className="relative p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Quote Icon Animado */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-4 right-4 md:top-8 md:right-8"
              >
                <Quote className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-accent/20" />
              </motion.div>

              {/* Stars Rating */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-1 mb-6 md:mb-8 relative z-10"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 md:w-6 md:h-6 fill-accent text-accent" />
                  </motion.div>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="relative z-10"
                >
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 italic leading-relaxed mb-6 md:mb-8 lg:mb-10 font-light">
                    "{current.content}"
                  </p>

                  <div className="flex items-center gap-3 md:gap-5">
                    {/* Avatar with Pulsing Ring */}
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-30 blur-md"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-primary to-accent border-3 md:border-4 border-white dark:border-gray-800 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-xl">
                        {current.name.charAt(0)}
                      </div>
                    </div>

                    <div>
                      <div className="font-bold text-base md:text-lg lg:text-xl mb-1">
                        {current.name}
                      </div>
                      <div className="text-muted-foreground text-xs md:text-sm lg:text-base">
                        {current.role} • <span className="text-accent">{current.company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </Card>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12"
        >
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            aria-label="Depoimento anterior"
            className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 hover:border-accent/50 transition-all duration-300 hover:scale-110 w-10 h-10 md:w-12 md:h-12"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="relative group/dot"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Ir para depoimento ${index + 1}`}
                >
                  {index === currentIndex && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-30"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`relative h-3 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-gradient-to-r from-primary to-accent w-10 shadow-lg shadow-accent/30'
                      : 'bg-gray-300 dark:bg-gray-600 w-3 group-hover/dot:bg-gray-400 dark:group-hover/dot:bg-gray-500'
                    }`} />
                </motion.button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
              className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 hover:border-accent/50 transition-all duration-300 hover:scale-110 w-10 h-10 md:w-12 md:h-12"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
