'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SimplexOrbit } from '@/components/SimplexOrbit';
import { GalaxyBackground } from '@/components/GalaxyBackground';
import sectorsData from '@/data/sectors.json';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GalaxyBackground />

      <div className="container mx-auto px-4 py-32 relative z-10">
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
              className="mb-6"
            >
              <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-0 text-sm">
                <Sparkles className="w-4 h-4 text-accent mr-2" />
                Soluções Tecnológicas Completas
              </Badge>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tecnologia que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                conecta, protege
              </span>{' '}
              e escala seu negócio
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Redes, segurança, automação, software e atendimento omnichannel.
              Transforme sua infraestrutura com soluções personalizadas e suporte especializado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#contato')}
                className="bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Diagnóstico
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#solucoes-servicos')}
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                Ver Soluções
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center h-[500px] lg:order-1"
          >
            <div className="relative z-10 w-full h-full">
              <SimplexOrbit sectors={sectorsData} />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
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
  );
}
