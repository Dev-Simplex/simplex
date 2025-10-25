'use client';

import { motion, AnimatePresence, useAnimation, useMotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, Building2, Cpu, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

interface Technology {
  name: string;
  logo: string;
}

interface Client {
  name: string;
  logo: string;
  logoDark?: string;
}

interface PartnersClientsProps {
  technologies: Technology[];
  clients: Client[];
}

export function PartnersClients({ technologies, clients }: PartnersClientsProps) {
  const [hoveredTechIndex, setHoveredTechIndex] = useState<number | null>(null);
  const [hoveredClientIndex, setHoveredClientIndex] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isClientsPaused, setIsClientsPaused] = useState(false);
  const [isTechPaused, setIsTechPaused] = useState(false);
  const [hoveredClientName, setHoveredClientName] = useState<string | null>(null);
  const [hoveredTechName, setHoveredTechName] = useState<string | null>(null);

  // Controles de animação para os carrosséis
  const clientsControls = useAnimation();
  const techControls = useAnimation();
  
  // Motion values para rastrear posições atuais
  const clientsX = useMotionValue(0);
  const techsX = useMotionValue(0);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Controle de animação do carrossel de clientes (movendo para a direita)
  useEffect(() => {
    if (!isClientsPaused) {
      // Animação com reset invisível para loop infinito real
      const currentX = clientsX.get();
      const offset = clients.length * (160 + 64);
      
      clientsControls.start({
        x: [currentX, currentX + offset], // Positivo = direita
        transition: {
          duration: clients.length * 4,
          repeat: Infinity,
          ease: 'linear',
          onComplete: () => {
            // Reset invisível quando chegar no fim
            clientsX.set(currentX - offset);
          }
        }
      });
    } else {
      // Para a animação mantendo a posição atual
      clientsControls.stop();
    }
  }, [isClientsPaused, clientsControls, clients.length, clientsX]);

  // Controle de animação do carrossel de tecnologias (movendo para a esquerda)
  useEffect(() => {
    if (!isTechPaused) {
      // Animação com reset invisível para loop infinito real
      const currentX = techsX.get();
      const offset = technologies.length * (160 + 64);
      
      techControls.start({
        x: [currentX, currentX - offset], // Negativo = esquerda
        transition: {
          duration: technologies.length * 4,
          repeat: Infinity,
          ease: 'linear',
          onComplete: () => {
            // Reset invisível quando chegar no fim
            techsX.set(currentX + offset);
          }
        }
      });
    } else {
      // Para a animação mantendo a posição atual
      techControls.stop();
    }
  }, [isTechPaused, techControls, technologies.length, techsX]);
  
  // Clonagem inteligente para loop infinito sem buffer grande
  // Apenas duplicar o necessário para transição suave
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section 
      id="parceiros-clientes" 
      className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Top Shadow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
      
      {/* Bottom Shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-950 dark:via-gray-900/30 dark:to-gray-950" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/10 dark:border-primary/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary dark:text-accent" />
            <span className="text-xs md:text-sm font-medium text-foreground/80 dark:text-foreground/90">Ecossistema de Tecnologia</span>
          </motion.div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4">
            Clientes e{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tecnologias
            </span>
          </h3>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg px-4">
            Trabalhamos com as melhores ferramentas e empresas do mercado
          </p>
        </motion.div>


        {/* Clientes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16 md:mb-20"
        >
          {/* Título Centralizado com Seta */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="w-4 h-4 text-accent" />
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                Empresas que Confiam em Nós
              </h3>
            </div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <ChevronDown className="w-8 h-8 text-primary dark:text-accent" />
            </motion.div>
          </div>

          <div className="relative">
            {/* Fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-r from-white dark:from-gray-950 via-white/80 dark:via-gray-950/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-l from-white dark:from-gray-950 via-white/80 dark:via-gray-950/80 to-transparent z-10 pointer-events-none" />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 z-20 pointer-events-none"
              initial={{ x: '100%' }}
              animate={{ x: '-200%' }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'linear',
              }}
            >
              <div className="h-full w-32 bg-gradient-to-l from-transparent via-accent/5 to-transparent skew-x-12" />
            </motion.div>

            {/* Clients Carousel - Moving Right */}
            <div className="relative">
              <div className="flex overflow-hidden py-12 md:py-16">
              <motion.div
                className="flex gap-8 md:gap-12 lg:gap-16"
                animate={clientsControls}
                style={{ 
                  willChange: 'transform',
                  x: clientsX
                }}
                initial={{ x: -(clients.length * (160 + 64)) }} // Começa de posição negativa
              >
                {duplicatedClients.map((client, index) => (
                  <motion.div
                    key={`client-${client.name}-${index}`}
                    className="flex-shrink-0 group relative"
                    onHoverStart={() => {
                      setIsClientsPaused(true);
                      setHoveredClientName(client.name);
                      setHoveredClientIndex(index);
                    }}
                    onHoverEnd={() => {
                      setIsClientsPaused(false);
                      setHoveredClientName(null);
                      setHoveredClientIndex(null);
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glow Effect on Hover */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />

                    {/* Card */}
                    <motion.div
                      className="relative w-32 h-16 md:w-36 md:h-18 lg:w-40 lg:h-20 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 group-hover:border-primary/40 group-hover:shadow-2xl flex items-center justify-center p-3 md:p-4 lg:p-5 transition-all duration-300"
                      animate={
                        hoveredClientIndex === index
                          ? { y: -8 }
                          : { y: 0 }
                      }
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {/* Inner Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 rounded-lg md:rounded-xl transition-opacity duration-300" />

                       {/* Logo */}
                       <div className="relative z-10 w-full h-full flex items-center justify-center">
                         <Image
                           src={client.logoDark 
                             ? isDark ? client.logoDark : client.logo
                             : client.logo}
                           alt={client.name}
                           width={120}
                           height={60}
                           className={`object-contain transition-all duration-300 group-hover:brightness-110 group-hover:scale-110 ${
                             client.name.toLowerCase().includes('ultrapopular') || client.name.toLowerCase().includes('farmacia ultrapopular')
                               ? 'max-h-32 md:max-h-40 lg:max-h-48' // Logo da Farmácia Ultrapopular - tamanho super grande
                               : client.name.toLowerCase().includes('colegio') || client.name.toLowerCase().includes('colégio')
                               ? 'max-h-12 md:max-h-16 lg:max-h-20' // Logo do Colégio Alternativo - tamanho bem maior
                               : client.name.toLowerCase().includes('mercado')
                               ? 'max-h-14 md:max-h-18 lg:max-h-24' // Logo do Mercado Plazza - tamanho extra grande
                               : client.name.toLowerCase().includes('guaporé') || client.name.toLowerCase().includes('guapore')
                               ? 'max-h-20 md:max-h-24 lg:max-h-32' // Logo do Guaporé - tamanho super grande
                               : client.name.toLowerCase().includes('sentinela')
                               ? 'max-h-10 md:max-h-12 lg:max-h-14' // Logo da Sentinela - tamanho um pouco maior
                               : client.name.toLowerCase().includes('balneário') || client.name.toLowerCase().includes('balneario')
                               ? 'max-h-10 md:max-h-12 lg:max-h-14' // Logo do Balneário Plazza - tamanho um pouco maior
                               : 'max-h-8 md:max-h-10 lg:max-h-12' // Tamanho padrão para outras logos
                           } ${
                             client.logoDark
                               ? 'filter-none' // Logos com versão dark/light - sem filtros, usa logo específica para tema
                               : client.name.toLowerCase().includes('multiseg')
                               ? 'invert-0 dark:invert' // Logo preta - inverter no modo escuro
                               : 'filter-none' // Logo normal
                           }`}
                         />
                       </div>

                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-xl">
                        <motion.div
                          className="absolute inset-0 translate-x-full"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        >
                          <div className="h-full w-1/2 bg-gradient-to-l from-transparent via-white/40 to-transparent skew-x-12" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Tooltip para Clientes - Dentro do card */}
                    <AnimatePresence>
                      {hoveredClientIndex === index && hoveredClientName && (
                        <div className="absolute top-full left-0 right-0 flex justify-center mt-4 pointer-events-none">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="z-[9999]"
                          >
                            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md 
                                            border border-white/20 dark:border-gray-700/20 
                                            shadow-xl rounded-xl px-4 py-2 whitespace-nowrap">
                              <p className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {hoveredClientName}
                              </p>
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 
                                              w-3 h-3 bg-white/70 dark:bg-gray-900/70 
                                              border-l border-t border-white/20 dark:border-gray-700/20 
                                              rotate-45 backdrop-blur-md"></div>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tecnologias Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <div className="relative">
            {/* Fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-r from-white dark:from-gray-950 via-white/80 dark:via-gray-950/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 bg-gradient-to-l from-white dark:from-gray-950 via-white/80 dark:via-gray-950/80 to-transparent z-10 pointer-events-none" />

            {/* Shine Effect */}
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

            {/* Technologies Carousel - Moving Left */}
            <div className="relative">
              <div className="flex overflow-hidden py-12 md:py-16">
              <motion.div
                className="flex gap-8 md:gap-12 lg:gap-16"
                animate={techControls}
                style={{ 
                  willChange: 'transform',
                  x: techsX
                }}
              >
                {duplicatedTechnologies.map((tech, index) => (
                  <motion.div
                    key={`tech-${tech.name}-${index}`}
                    className="flex-shrink-0 group relative"
                    onHoverStart={() => {
                      setIsTechPaused(true);
                      setHoveredTechName(tech.name);
                      setHoveredTechIndex(index);
                    }}
                    onHoverEnd={() => {
                      setIsTechPaused(false);
                      setHoveredTechName(null);
                      setHoveredTechIndex(null);
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glow Effect on Hover */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />

                    {/* Card */}
                    <motion.div
                      className="relative w-32 h-16 md:w-36 md:h-18 lg:w-40 lg:h-20 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 group-hover:border-accent/40 group-hover:shadow-2xl flex items-center justify-center p-3 md:p-4 lg:p-5 transition-all duration-300"
                      animate={
                        hoveredTechIndex === index
                          ? { y: -8 }
                          : { y: 0 }
                      }
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {/* Inner Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-lg md:rounded-xl transition-opacity duration-300" />

                       {/* Logo */}
                       <div className="relative z-10 w-full h-full flex items-center justify-center">
                         <Image
                           src={tech.logo}
                           alt={tech.name}
                           width={120}
                           height={60}
                           className={`object-contain transition-all duration-300 max-h-8 md:max-h-10 lg:max-h-12 group-hover:brightness-110 group-hover:scale-110 ${
                             tech.name.toLowerCase().includes('fábrica') || tech.name.toLowerCase().includes('fabrica')
                               ? 'mix-blend-multiply dark:mix-blend-screen' // Logo com fundo preto
                               : 'filter-none' // Logo normal
                           }`}
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

                    {/* Tooltip para Tecnologias - Dentro do card */}
                    <AnimatePresence>
                      {hoveredTechIndex === index && hoveredTechName && (
                        <div className="absolute top-full left-0 right-0 flex justify-center mt-4 pointer-events-none">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="z-[9999]"
                          >
                            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md 
                                            border border-white/20 dark:border-gray-700/20 
                                            shadow-xl rounded-xl px-4 py-2 whitespace-nowrap">
                              <p className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {hoveredTechName}
                              </p>
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2 
                                              w-3 h-3 bg-white/70 dark:bg-gray-900/70 
                                              border-l border-t border-white/20 dark:border-gray-700/20 
                                              rotate-45 backdrop-blur-md"></div>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          </div>

          {/* Título Centralizado com Seta */}
          <div className="text-center mt-8 md:mt-12">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center mb-4"
            >
              <ChevronUp className="w-8 h-8 text-primary dark:text-accent" />
            </motion.div>
            <div className="flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                Tecnologias que Utilizamos
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info com Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8 md:mt-12 px-4"
        >
          <p className="text-muted-foreground text-xs md:text-sm lg:text-base mb-6">
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
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-4 md:gap-8 mt-4 md:mt-6 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              <span className="text-xs md:text-sm text-muted-foreground">
                <span className="font-bold text-accent">{technologies.length}+</span> Tecnologias
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse" />
              <span className="text-xs md:text-sm text-muted-foreground">
                <span className="font-bold text-primary">{clients.length}+</span> Clientes
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              <span className="text-xs md:text-sm text-muted-foreground">
                <span className="font-bold text-accent">100%</span> Certificados
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
