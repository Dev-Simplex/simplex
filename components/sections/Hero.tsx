'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SimplexOrbit } from '@/components/SimplexOrbit';
import { GalaxyBackground } from '@/components/GalaxyBackground';
import sectorsData from '@/data/sectors.json';
import { useState, useRef } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GalaxyBackground />

      {/* Spotlight Effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 md:mb-6"
            >
              <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-0 text-xs md:text-sm">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-accent mr-1 md:mr-2" />
                Soluções Tecnológicas Completas
              </Badge>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Tecnologia que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                conecta, protege
              </span>{' '}
              e escala seu negócio
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed max-w-2xl">
              Redes, segurança, automação, software e atendimento omnichannel.
              Transforme sua infraestrutura com soluções personalizadas e suporte especializado.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              {/* Botão Agendar Diagnóstico com animações */}
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                style={{ perspective: 1000 }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />

                <Button
                  size="lg"
                  onClick={() => scrollToSection('#contato')}
                  className="relative w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 overflow-hidden border border-primary/50 group-hover:border-accent/50 transition-colors duration-300 text-sm md:text-base"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>

                  <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Agendar Diagnóstico</span>
                </Button>
              </motion.div>

              {/* Botão Ver Soluções com animações */}
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                style={{ perspective: 1000 }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-accent/30 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('#solucoes-servicos')}
                  className="relative w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 group-hover:border-white/50 overflow-hidden transition-colors duration-300 text-sm md:text-base"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </div>

                  <span className="relative z-10">Ver Soluções</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 relative z-10" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center h-[300px] md:h-[400px] lg:h-[500px] lg:order-1"
          >
            <div className="relative z-10 w-full h-full">
              <SimplexOrbit sectors={sectorsData} />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 text-xs md:text-sm flex flex-col items-center gap-2"
        >
          <span>Role para explorar</span>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
