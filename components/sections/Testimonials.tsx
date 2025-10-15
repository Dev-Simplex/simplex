'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confiança construída através de resultados reais
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 relative overflow-hidden shadow-lg">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-accent/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-8">
                  "{current.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-accent/30 flex items-center justify-center text-white text-xl font-bold">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{current.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {current.role} • {current.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-muted-foreground/30 w-2'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
