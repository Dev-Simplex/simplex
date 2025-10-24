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
    <>
      {/* MOBILE HERO - 320px até 767px */}
      <section
        id="hero"
        ref={sectionRef}
        className="block md:hidden relative min-h-screen overflow-hidden"
      >
        <GalaxyBackground />

        <div className="relative z-10 flex flex-col justify-start min-h-screen py-8 px-3">
          {/* Conteúdo Texto - TOPO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-center pt-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-2 flex justify-center"
            >
              <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-0 text-[9px] px-2 py-0.5">
                <Sparkles className="w-2 h-2 text-accent mr-1" />
                Soluções Tecnológicas Completas
              </Badge>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg xs:text-xl font-bold leading-tight mb-3"
            >
              Tecnologia que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                conecta, protege
              </span>{' '}
              e escala seu negócio
            </motion.h1>

            {/* Parágrafo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xs leading-relaxed mb-4 max-w-[280px] mx-auto"
            >
              Redes, segurança, automação, software e atendimento omnichannel.
              Transforme sua infraestrutura com soluções personalizadas.
            </motion.p>

            {/* Botões */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col gap-2 w-full max-w-[280px] mx-auto"
            >
              <Button
                size="sm"
                onClick={() => scrollToSection('#contato')}
                className="w-full text-xs py-2 bg-primary hover:bg-primary/90 text-white"
              >
                <Calendar className="w-3 h-3 mr-2" />
                Agendar Diagnóstico
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                onClick={() => scrollToSection('#solucoes-servicos')}
                className="w-full text-xs py-2 bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                Ver Soluções
                <ArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Orbit - EMBAIXO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-auto mb-8 mx-auto"
          >
            <SimplexOrbit sectors={sectorsData} isMobile={true} />
          </motion.div>
        </div>
      </section>

      {/* DESKTOP HERO - 768px+ */}
      <section
        id="hero"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="hidden md:block relative min-h-screen flex items-center justify-center overflow-hidden"
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

        <div className="container mx-auto px-4 pt-0 pb-2 md:pt-2 md:pb-4 lg:py-2 relative z-10">
          <div className="grid xl:grid-cols-2 gap-6 md:gap-8 xl:gap-12 items-start xl:items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center xl:text-left xl:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 lg:mb-6 flex justify-center xl:justify-start"
              >
                <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-0 text-sm">
                  <Sparkles className="w-4 h-4 text-accent mr-2" />
                  Soluções Tecnológicas Completas
                </Badge>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6">
                Tecnologia que{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                  conecta, protege
                </span>{' '}
                e escala seu negócio
              </h1>

              <p className="text-lg lg:text-xl text-white/80 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto xl:mx-0">
                Redes, segurança, automação, software e atendimento omnichannel.
                Transforme sua infraestrutura com soluções personalizadas e suporte especializado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
                {/* Botão Agendar Diagnóstico */}
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />

                  <Button
                    size="lg"
                    onClick={() => scrollToSection('#contato')}
                    className="relative w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 overflow-hidden border border-primary/50 group-hover:border-accent/50 transition-colors duration-300"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>

                    <Calendar className="w-5 h-5 mr-2 relative z-10" />
                    <span className="relative z-10">Agendar Diagnóstico</span>
                  </Button>
                </motion.div>

                {/* Botão Ver Soluções */}
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-accent/30 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection('#solucoes-servicos')}
                    className="relative w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 group-hover:border-white/50 overflow-hidden transition-colors duration-300"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    </div>

                    <span className="relative z-10">Ver Soluções</span>
                    <ArrowRight className="w-5 h-5 ml-2 relative z-10" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center h-[350px] md:h-[400px] lg:h-[450px] xl:h-[600px] xl:order-1 mx-auto xl:mx-0 -mt-12 md:-mt-16 lg:-mt-20 xl:mt-0"
            >
              <div className="relative z-10 w-full h-full">
                <SimplexOrbit sectors={sectorsData} />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 bg-accent/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-sm flex flex-col items-center gap-2"
          >
            <span>Role para explorar</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
